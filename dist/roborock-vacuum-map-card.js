function Ih(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var nc = { exports: {} }, Eo = {};
var Vp;
function bg() {
  if (Vp) return Eo;
  Vp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(l, u, d) {
    var f = null;
    if (d !== void 0 && (f = "" + d), u.key !== void 0 && (f = "" + u.key), "key" in u) {
      d = {};
      for (var m in u)
        m !== "key" && (d[m] = u[m]);
    } else d = u;
    return u = d.ref, {
      $$typeof: n,
      type: l,
      key: f,
      ref: u !== void 0 ? u : null,
      props: d
    };
  }
  return Eo.Fragment = i, Eo.jsx = o, Eo.jsxs = o, Eo;
}
var Gp;
function Sg() {
  return Gp || (Gp = 1, nc.exports = bg()), nc.exports;
}
var _ = Sg(), ac = { exports: {} }, jo = {}, ic = { exports: {} }, oc = {};
var Qp;
function wg() {
  return Qp || (Qp = 1, (function(n) {
    function i(j, X) {
      var I = j.length;
      j.push(X);
      e: for (; 0 < I; ) {
        var pe = I - 1 >>> 1, ye = j[pe];
        if (0 < u(ye, X))
          j[pe] = X, j[I] = ye, I = pe;
        else break e;
      }
    }
    function o(j) {
      return j.length === 0 ? null : j[0];
    }
    function l(j) {
      if (j.length === 0) return null;
      var X = j[0], I = j.pop();
      if (I !== X) {
        j[0] = I;
        e: for (var pe = 0, ye = j.length, w = ye >>> 1; pe < w; ) {
          var Z = 2 * (pe + 1) - 1, Q = j[Z], F = Z + 1, ve = j[F];
          if (0 > u(Q, I))
            F < ye && 0 > u(ve, Q) ? (j[pe] = ve, j[F] = I, pe = F) : (j[pe] = Q, j[Z] = I, pe = Z);
          else if (F < ye && 0 > u(ve, I))
            j[pe] = ve, j[F] = I, pe = F;
          else break e;
        }
      }
      return X;
    }
    function u(j, X) {
      var I = j.sortIndex - X.sortIndex;
      return I !== 0 ? I : j.id - X.id;
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
    var h = [], v = [], g = 1, b = null, k = 3, T = !1, A = !1, q = !1, V = !1, J = typeof setTimeout == "function" ? setTimeout : null, ae = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    function K(j) {
      for (var X = o(v); X !== null; ) {
        if (X.callback === null) l(v);
        else if (X.startTime <= j)
          l(v), X.sortIndex = X.expirationTime, i(h, X);
        else break;
        X = o(v);
      }
    }
    function P(j) {
      if (q = !1, K(j), !A)
        if (o(h) !== null)
          A = !0, G || (G = !0, fe());
        else {
          var X = o(v);
          X !== null && te(P, X.startTime - j);
        }
    }
    var G = !1, $ = -1, se = 5, N = -1;
    function ee() {
      return V ? !0 : !(n.unstable_now() - N < se);
    }
    function ue() {
      if (V = !1, G) {
        var j = n.unstable_now();
        N = j;
        var X = !0;
        try {
          e: {
            A = !1, q && (q = !1, ae($), $ = -1), T = !0;
            var I = k;
            try {
              t: {
                for (K(j), b = o(h); b !== null && !(b.expirationTime > j && ee()); ) {
                  var pe = b.callback;
                  if (typeof pe == "function") {
                    b.callback = null, k = b.priorityLevel;
                    var ye = pe(
                      b.expirationTime <= j
                    );
                    if (j = n.unstable_now(), typeof ye == "function") {
                      b.callback = ye, K(j), X = !0;
                      break t;
                    }
                    b === o(h) && l(h), K(j);
                  } else l(h);
                  b = o(h);
                }
                if (b !== null) X = !0;
                else {
                  var w = o(v);
                  w !== null && te(
                    P,
                    w.startTime - j
                  ), X = !1;
                }
              }
              break e;
            } finally {
              b = null, k = I, T = !1;
            }
            X = void 0;
          }
        } finally {
          X ? fe() : G = !1;
        }
      }
    }
    var fe;
    if (typeof L == "function")
      fe = function() {
        L(ue);
      };
    else if (typeof MessageChannel < "u") {
      var Re = new MessageChannel(), W = Re.port2;
      Re.port1.onmessage = ue, fe = function() {
        W.postMessage(null);
      };
    } else
      fe = function() {
        J(ue, 0);
      };
    function te(j, X) {
      $ = J(function() {
        j(n.unstable_now());
      }, X);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, n.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : se = 0 < j ? Math.floor(1e3 / j) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, n.unstable_next = function(j) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = k;
      }
      var I = k;
      k = X;
      try {
        return j();
      } finally {
        k = I;
      }
    }, n.unstable_requestPaint = function() {
      V = !0;
    }, n.unstable_runWithPriority = function(j, X) {
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
      var I = k;
      k = j;
      try {
        return X();
      } finally {
        k = I;
      }
    }, n.unstable_scheduleCallback = function(j, X, I) {
      var pe = n.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? pe + I : pe) : I = pe, j) {
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
      return ye = I + ye, j = {
        id: g++,
        callback: X,
        priorityLevel: j,
        startTime: I,
        expirationTime: ye,
        sortIndex: -1
      }, I > pe ? (j.sortIndex = I, i(v, j), o(h) === null && j === o(v) && (q ? (ae($), $ = -1) : q = !0, te(P, I - pe))) : (j.sortIndex = ye, i(h, j), A || T || (A = !0, G || (G = !0, fe()))), j;
    }, n.unstable_shouldYield = ee, n.unstable_wrapCallback = function(j) {
      var X = k;
      return function() {
        var I = k;
        k = X;
        try {
          return j.apply(this, arguments);
        } finally {
          k = I;
        }
      };
    };
  })(oc)), oc;
}
var Kp;
function zg() {
  return Kp || (Kp = 1, ic.exports = wg()), ic.exports;
}
var rc = { exports: {} }, _e = {};
var Jp;
function kg() {
  if (Jp) return _e;
  Jp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), l = /* @__PURE__ */ Symbol.for("react.strict_mode"), u = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), k = Symbol.iterator;
  function T(w) {
    return w === null || typeof w != "object" ? null : (w = k && w[k] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var A = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, q = Object.assign, V = {};
  function J(w, Z, Q) {
    this.props = w, this.context = Z, this.refs = V, this.updater = Q || A;
  }
  J.prototype.isReactComponent = {}, J.prototype.setState = function(w, Z) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, Z, "setState");
  }, J.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function ae() {
  }
  ae.prototype = J.prototype;
  function L(w, Z, Q) {
    this.props = w, this.context = Z, this.refs = V, this.updater = Q || A;
  }
  var K = L.prototype = new ae();
  K.constructor = L, q(K, J.prototype), K.isPureReactComponent = !0;
  var P = Array.isArray;
  function G() {
  }
  var $ = { H: null, A: null, T: null, S: null }, se = Object.prototype.hasOwnProperty;
  function N(w, Z, Q) {
    var F = Q.ref;
    return {
      $$typeof: n,
      type: w,
      key: Z,
      ref: F !== void 0 ? F : null,
      props: Q
    };
  }
  function ee(w, Z) {
    return N(w.type, Z, w.props);
  }
  function ue(w) {
    return typeof w == "object" && w !== null && w.$$typeof === n;
  }
  function fe(w) {
    var Z = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(Q) {
      return Z[Q];
    });
  }
  var Re = /\/+/g;
  function W(w, Z) {
    return typeof w == "object" && w !== null && w.key != null ? fe("" + w.key) : Z.toString(36);
  }
  function te(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(G, G) : (w.status = "pending", w.then(
          function(Z) {
            w.status === "pending" && (w.status = "fulfilled", w.value = Z);
          },
          function(Z) {
            w.status === "pending" && (w.status = "rejected", w.reason = Z);
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
  function j(w, Z, Q, F, ve) {
    var me = typeof w;
    (me === "undefined" || me === "boolean") && (w = null);
    var Se = !1;
    if (w === null) Se = !0;
    else
      switch (me) {
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
            case g:
              return Se = w._init, j(
                Se(w._payload),
                Z,
                Q,
                F,
                ve
              );
          }
      }
    if (Se)
      return ve = ve(w), Se = F === "" ? "." + W(w, 0) : F, P(ve) ? (Q = "", Se != null && (Q = Se.replace(Re, "$&/") + "/"), j(ve, Z, Q, "", function(Bt) {
        return Bt;
      })) : ve != null && (ue(ve) && (ve = ee(
        ve,
        Q + (ve.key == null || w && w.key === ve.key ? "" : ("" + ve.key).replace(
          Re,
          "$&/"
        ) + "/") + Se
      )), Z.push(ve)), 1;
    Se = 0;
    var Ye = F === "" ? "." : F + ":";
    if (P(w))
      for (var Be = 0; Be < w.length; Be++)
        F = w[Be], me = Ye + W(F, Be), Se += j(
          F,
          Z,
          Q,
          me,
          ve
        );
    else if (Be = T(w), typeof Be == "function")
      for (w = Be.call(w), Be = 0; !(F = w.next()).done; )
        F = F.value, me = Ye + W(F, Be++), Se += j(
          F,
          Z,
          Q,
          me,
          ve
        );
    else if (me === "object") {
      if (typeof w.then == "function")
        return j(
          te(w),
          Z,
          Q,
          F,
          ve
        );
      throw Z = String(w), Error(
        "Objects are not valid as a React child (found: " + (Z === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : Z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Se;
  }
  function X(w, Z, Q) {
    if (w == null) return w;
    var F = [], ve = 0;
    return j(w, F, "", "", function(me) {
      return Z.call(Q, me, ve++);
    }), F;
  }
  function I(w) {
    if (w._status === -1) {
      var Z = w._result;
      Z = Z(), Z.then(
        function(Q) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = Q);
        },
        function(Q) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = Q);
        }
      ), w._status === -1 && (w._status = 0, w._result = Z);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var pe = typeof reportError == "function" ? reportError : function(w) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
        error: w
      });
      if (!window.dispatchEvent(Z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", w);
      return;
    }
    console.error(w);
  }, ye = {
    map: X,
    forEach: function(w, Z, Q) {
      X(
        w,
        function() {
          Z.apply(this, arguments);
        },
        Q
      );
    },
    count: function(w) {
      var Z = 0;
      return X(w, function() {
        Z++;
      }), Z;
    },
    toArray: function(w) {
      return X(w, function(Z) {
        return Z;
      }) || [];
    },
    only: function(w) {
      if (!ue(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  };
  return _e.Activity = b, _e.Children = ye, _e.Component = J, _e.Fragment = o, _e.Profiler = u, _e.PureComponent = L, _e.StrictMode = l, _e.Suspense = h, _e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, _e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return $.H.useMemoCache(w);
    }
  }, _e.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, _e.cacheSignal = function() {
    return null;
  }, _e.cloneElement = function(w, Z, Q) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var F = q({}, w.props), ve = w.key;
    if (Z != null)
      for (me in Z.key !== void 0 && (ve = "" + Z.key), Z)
        !se.call(Z, me) || me === "key" || me === "__self" || me === "__source" || me === "ref" && Z.ref === void 0 || (F[me] = Z[me]);
    var me = arguments.length - 2;
    if (me === 1) F.children = Q;
    else if (1 < me) {
      for (var Se = Array(me), Ye = 0; Ye < me; Ye++)
        Se[Ye] = arguments[Ye + 2];
      F.children = Se;
    }
    return N(w.type, ve, F);
  }, _e.createContext = function(w) {
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
  }, _e.createElement = function(w, Z, Q) {
    var F, ve = {}, me = null;
    if (Z != null)
      for (F in Z.key !== void 0 && (me = "" + Z.key), Z)
        se.call(Z, F) && F !== "key" && F !== "__self" && F !== "__source" && (ve[F] = Z[F]);
    var Se = arguments.length - 2;
    if (Se === 1) ve.children = Q;
    else if (1 < Se) {
      for (var Ye = Array(Se), Be = 0; Be < Se; Be++)
        Ye[Be] = arguments[Be + 2];
      ve.children = Ye;
    }
    if (w && w.defaultProps)
      for (F in Se = w.defaultProps, Se)
        ve[F] === void 0 && (ve[F] = Se[F]);
    return N(w, me, ve);
  }, _e.createRef = function() {
    return { current: null };
  }, _e.forwardRef = function(w) {
    return { $$typeof: m, render: w };
  }, _e.isValidElement = ue, _e.lazy = function(w) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: w },
      _init: I
    };
  }, _e.memo = function(w, Z) {
    return {
      $$typeof: v,
      type: w,
      compare: Z === void 0 ? null : Z
    };
  }, _e.startTransition = function(w) {
    var Z = $.T, Q = {};
    $.T = Q;
    try {
      var F = w(), ve = $.S;
      ve !== null && ve(Q, F), typeof F == "object" && F !== null && typeof F.then == "function" && F.then(G, pe);
    } catch (me) {
      pe(me);
    } finally {
      Z !== null && Q.types !== null && (Z.types = Q.types), $.T = Z;
    }
  }, _e.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, _e.use = function(w) {
    return $.H.use(w);
  }, _e.useActionState = function(w, Z, Q) {
    return $.H.useActionState(w, Z, Q);
  }, _e.useCallback = function(w, Z) {
    return $.H.useCallback(w, Z);
  }, _e.useContext = function(w) {
    return $.H.useContext(w);
  }, _e.useDebugValue = function() {
  }, _e.useDeferredValue = function(w, Z) {
    return $.H.useDeferredValue(w, Z);
  }, _e.useEffect = function(w, Z) {
    return $.H.useEffect(w, Z);
  }, _e.useEffectEvent = function(w) {
    return $.H.useEffectEvent(w);
  }, _e.useId = function() {
    return $.H.useId();
  }, _e.useImperativeHandle = function(w, Z, Q) {
    return $.H.useImperativeHandle(w, Z, Q);
  }, _e.useInsertionEffect = function(w, Z) {
    return $.H.useInsertionEffect(w, Z);
  }, _e.useLayoutEffect = function(w, Z) {
    return $.H.useLayoutEffect(w, Z);
  }, _e.useMemo = function(w, Z) {
    return $.H.useMemo(w, Z);
  }, _e.useOptimistic = function(w, Z) {
    return $.H.useOptimistic(w, Z);
  }, _e.useReducer = function(w, Z, Q) {
    return $.H.useReducer(w, Z, Q);
  }, _e.useRef = function(w) {
    return $.H.useRef(w);
  }, _e.useState = function(w) {
    return $.H.useState(w);
  }, _e.useSyncExternalStore = function(w, Z, Q) {
    return $.H.useSyncExternalStore(
      w,
      Z,
      Q
    );
  }, _e.useTransition = function() {
    return $.H.useTransition();
  }, _e.version = "19.2.8", _e;
}
var Pp;
function jc() {
  return Pp || (Pp = 1, rc.exports = kg()), rc.exports;
}
var lc = { exports: {} }, gt = {};
var Wp;
function xg() {
  if (Wp) return gt;
  Wp = 1;
  var n = jc();
  function i(h) {
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
  }, u = /* @__PURE__ */ Symbol.for("react.portal");
  function d(h, v, g) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
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
  return gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, gt.createPortal = function(h, v) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(i(299));
    return d(h, v, null, g);
  }, gt.flushSync = function(h) {
    var v = f.T, g = l.p;
    try {
      if (f.T = null, l.p = 2, h) return h();
    } finally {
      f.T = v, l.p = g, l.d.f();
    }
  }, gt.preconnect = function(h, v) {
    typeof h == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, l.d.C(h, v));
  }, gt.prefetchDNS = function(h) {
    typeof h == "string" && l.d.D(h);
  }, gt.preinit = function(h, v) {
    if (typeof h == "string" && v && typeof v.as == "string") {
      var g = v.as, b = m(g, v.crossOrigin), k = typeof v.integrity == "string" ? v.integrity : void 0, T = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      g === "style" ? l.d.S(
        h,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: b,
          integrity: k,
          fetchPriority: T
        }
      ) : g === "script" && l.d.X(h, {
        crossOrigin: b,
        integrity: k,
        fetchPriority: T,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, gt.preinitModule = function(h, v) {
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
  }, gt.preload = function(h, v) {
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
  }, gt.preloadModule = function(h, v) {
    if (typeof h == "string")
      if (v) {
        var g = m(v.as, v.crossOrigin);
        l.d.m(h, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: g,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else l.d.m(h);
  }, gt.requestFormReset = function(h) {
    l.d.r(h);
  }, gt.unstable_batchedUpdates = function(h, v) {
    return h(v);
  }, gt.useFormState = function(h, v, g) {
    return f.H.useFormState(h, v, g);
  }, gt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, gt.version = "19.2.8", gt;
}
var Fp;
function Tg() {
  if (Fp) return lc.exports;
  Fp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), lc.exports = xg(), lc.exports;
}
var Ip;
function Ag() {
  if (Ip) return jo;
  Ip = 1;
  var n = zg(), i = jc(), o = Tg();
  function l(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(e) {
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
      throw Error(l(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var a = e, r = t; ; ) {
      var s = a.return;
      if (s === null) break;
      var c = s.alternate;
      if (c === null) {
        if (r = s.return, r !== null) {
          a = r;
          continue;
        }
        break;
      }
      if (s.child === c.child) {
        for (c = s.child; c; ) {
          if (c === a) return h(s), e;
          if (c === r) return h(s), t;
          c = c.sibling;
        }
        throw Error(l(188));
      }
      if (a.return !== r.return) a = s, r = c;
      else {
        for (var p = !1, y = s.child; y; ) {
          if (y === a) {
            p = !0, a = s, r = c;
            break;
          }
          if (y === r) {
            p = !0, r = s, a = c;
            break;
          }
          y = y.sibling;
        }
        if (!p) {
          for (y = c.child; y; ) {
            if (y === a) {
              p = !0, a = c, r = s;
              break;
            }
            if (y === r) {
              p = !0, r = c, a = s;
              break;
            }
            y = y.sibling;
          }
          if (!p) throw Error(l(189));
        }
      }
      if (a.alternate !== r) throw Error(l(190));
    }
    if (a.tag !== 3) throw Error(l(188));
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
  var b = Object.assign, k = /* @__PURE__ */ Symbol.for("react.element"), T = /* @__PURE__ */ Symbol.for("react.transitional.element"), A = /* @__PURE__ */ Symbol.for("react.portal"), q = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), J = /* @__PURE__ */ Symbol.for("react.profiler"), ae = /* @__PURE__ */ Symbol.for("react.consumer"), L = /* @__PURE__ */ Symbol.for("react.context"), K = /* @__PURE__ */ Symbol.for("react.forward_ref"), P = /* @__PURE__ */ Symbol.for("react.suspense"), G = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), se = /* @__PURE__ */ Symbol.for("react.lazy"), N = /* @__PURE__ */ Symbol.for("react.activity"), ee = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ue = Symbol.iterator;
  function fe(e) {
    return e === null || typeof e != "object" ? null : (e = ue && e[ue] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Re = /* @__PURE__ */ Symbol.for("react.client.reference");
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Re ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case q:
        return "Fragment";
      case J:
        return "Profiler";
      case V:
        return "StrictMode";
      case P:
        return "Suspense";
      case G:
        return "SuspenseList";
      case N:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case A:
          return "Portal";
        case L:
          return e.displayName || "Context";
        case ae:
          return (e._context.displayName || "Context") + ".Consumer";
        case K:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case $:
          return t = e.displayName || null, t !== null ? t : W(e.type) || "Memo";
        case se:
          t = e._payload, e = e._init;
          try {
            return W(e(t));
          } catch {
          }
      }
    return null;
  }
  var te = Array.isArray, j = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pe = [], ye = -1;
  function w(e) {
    return { current: e };
  }
  function Z(e) {
    0 > ye || (e.current = pe[ye], pe[ye] = null, ye--);
  }
  function Q(e, t) {
    ye++, pe[ye] = e.current, e.current = t;
  }
  var F = w(null), ve = w(null), me = w(null), Se = w(null);
  function Ye(e, t) {
    switch (Q(me, t), Q(ve, e), Q(F, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? pp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = pp(t), e = hp(t, e);
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
    Z(F), Q(F, e);
  }
  function Be() {
    Z(F), Z(ve), Z(me);
  }
  function Bt(e) {
    e.memoizedState !== null && Q(Se, e);
    var t = F.current, a = hp(t, e.type);
    t !== a && (Q(ve, e), Q(F, a));
  }
  function Ft(e) {
    ve.current === e && (Z(F), Z(ve)), Se.current === e && (Z(Se), ko._currentValue = I);
  }
  var Mn, on;
  function yt(e) {
    if (Mn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Mn = t && t[1] || "", on = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Mn + e + on;
  }
  var Ni = !1;
  function Da(e, t) {
    if (!e || Ni) return "";
    Ni = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
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
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        r.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = r.DetermineComponentFrameRoot(), p = c[0], y = c[1];
      if (p && y) {
        var S = p.split(`
`), M = y.split(`
`);
        for (s = r = 0; r < S.length && !S[r].includes("DetermineComponentFrameRoot"); )
          r++;
        for (; s < M.length && !M[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (r === S.length || s === M.length)
          for (r = S.length - 1, s = M.length - 1; 1 <= r && 0 <= s && S[r] !== M[s]; )
            s--;
        for (; 1 <= r && 0 <= s; r--, s--)
          if (S[r] !== M[s]) {
            if (r !== 1 || s !== 1)
              do
                if (r--, s--, 0 > s || S[r] !== M[s]) {
                  var R = `
` + S[r].replace(" at new ", " at ");
                  return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R;
                }
              while (1 <= r && 0 <= s);
            break;
          }
      }
    } finally {
      Ni = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? yt(a) : "";
  }
  function Ra(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return yt(e.type);
      case 16:
        return yt("Lazy");
      case 13:
        return e.child !== t && t !== null ? yt("Suspense Fallback") : yt("Suspense");
      case 19:
        return yt("SuspenseList");
      case 0:
      case 15:
        return Da(e.type, !1);
      case 11:
        return Da(e.type.render, !1);
      case 1:
        return Da(e.type, !0);
      case 31:
        return yt("Activity");
      default:
        return "";
    }
  }
  function Za(e) {
    try {
      var t = "", a = null;
      do
        t += Ra(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (r) {
      return `
Error generating stack: ` + r.message + `
` + r.stack;
    }
  }
  var Ua = Object.prototype.hasOwnProperty, ra = n.unstable_scheduleCallback, Di = n.unstable_cancelCallback, Yl = n.unstable_shouldYield, Jo = n.unstable_requestPaint, bt = n.unstable_now, Po = n.unstable_getCurrentPriorityLevel, Ri = n.unstable_ImmediatePriority, Wo = n.unstable_UserBlockingPriority, Ya = n.unstable_NormalPriority, la = n.unstable_LowPriority, Fo = n.unstable_IdlePriority, Bl = n.log, Hl = n.unstable_setDisableYieldValue, sa = null, St = null;
  function rn(e) {
    if (typeof Bl == "function" && Hl(e), St && typeof St.setStrictMode == "function")
      try {
        St.setStrictMode(sa, e);
      } catch {
      }
  }
  var st = Math.clz32 ? Math.clz32 : ql, Xl = Math.log, $l = Math.LN2;
  function ql(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Xl(e) / $l | 0) | 0;
  }
  var Ba = 256, H = 262144, le = 4194304;
  function ie(e) {
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
  function et(e, t, a) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var s = 0, c = e.suspendedLanes, p = e.pingedLanes;
    e = e.warmLanes;
    var y = r & 134217727;
    return y !== 0 ? (r = y & ~c, r !== 0 ? s = ie(r) : (p &= y, p !== 0 ? s = ie(p) : a || (a = y & ~e, a !== 0 && (s = ie(a))))) : (y = r & ~c, y !== 0 ? s = ie(y) : p !== 0 ? s = ie(p) : a || (a = r & ~e, a !== 0 && (s = ie(a)))), s === 0 ? 0 : t !== 0 && t !== s && (t & c) === 0 && (c = s & -s, a = t & -t, c >= a || c === 32 && (a & 4194048) !== 0) ? t : s;
  }
  function Zi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function l_(e, t) {
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
  function Kc() {
    var e = le;
    return le <<= 1, (le & 62914560) === 0 && (le = 4194304), e;
  }
  function Ll(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ui(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function s_(e, t, a, r, s, c) {
    var p = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var y = e.entanglements, S = e.expirationTimes, M = e.hiddenUpdates;
    for (a = p & ~a; 0 < a; ) {
      var R = 31 - st(a), B = 1 << R;
      y[R] = 0, S[R] = -1;
      var C = M[R];
      if (C !== null)
        for (M[R] = null, R = 0; R < C.length; R++) {
          var O = C[R];
          O !== null && (O.lane &= -536870913);
        }
      a &= ~B;
    }
    r !== 0 && Jc(e, r, 0), c !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(p & ~t));
  }
  function Jc(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var r = 31 - st(t);
    e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | a & 261930;
  }
  function Pc(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var r = 31 - st(a), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), a &= ~s;
    }
  }
  function Wc(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Vl(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Vl(e) {
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
  function Gl(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Fc() {
    var e = X.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Yp(e.type));
  }
  function Ic(e, t) {
    var a = X.p;
    try {
      return X.p = e, t();
    } finally {
      X.p = a;
    }
  }
  var Cn = Math.random().toString(36).slice(2), dt = "__reactFiber$" + Cn, kt = "__reactProps$" + Cn, Ha = "__reactContainer$" + Cn, Ql = "__reactEvents$" + Cn, u_ = "__reactListeners$" + Cn, c_ = "__reactHandles$" + Cn, ed = "__reactResources$" + Cn, Yi = "__reactMarker$" + Cn;
  function Kl(e) {
    delete e[dt], delete e[kt], delete e[Ql], delete e[u_], delete e[c_];
  }
  function Xa(e) {
    var t = e[dt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ha] || a[dt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = wp(e); e !== null; ) {
            if (a = e[dt]) return a;
            e = wp(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function $a(e) {
    if (e = e[dt] || e[Ha]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Bi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(l(33));
  }
  function qa(e) {
    var t = e[ed];
    return t || (t = e[ed] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ut(e) {
    e[Yi] = !0;
  }
  var td = /* @__PURE__ */ new Set(), nd = {};
  function ua(e, t) {
    La(e, t), La(e + "Capture", t);
  }
  function La(e, t) {
    for (nd[e] = t, e = 0; e < t.length; e++)
      td.add(t[e]);
  }
  var d_ = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ad = {}, id = {};
  function f_(e) {
    return Ua.call(id, e) ? !0 : Ua.call(ad, e) ? !1 : d_.test(e) ? id[e] = !0 : (ad[e] = !0, !1);
  }
  function Io(e, t, a) {
    if (f_(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
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
        e.setAttribute(t, "" + a);
      }
  }
  function er(e, t, a) {
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
  function dn(e, t, a, r) {
    if (r === null) e.removeAttribute(a);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + r);
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
  function od(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function m_(e, t, a) {
    var r = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var s = r.get, c = r.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(p) {
          a = "" + p, c.call(this, p);
        }
      }), Object.defineProperty(e, t, {
        enumerable: r.enumerable
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
  function Jl(e) {
    if (!e._valueTracker) {
      var t = od(e) ? "checked" : "value";
      e._valueTracker = m_(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function rd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), r = "";
    return e && (r = od(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== a ? (t.setValue(e), !0) : !1;
  }
  function tr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var p_ = /[\n"\\]/g;
  function Xt(e) {
    return e.replace(
      p_,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pl(e, t, a, r, s, c, p, y) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ht(t)) : e.value !== "" + Ht(t) && (e.value = "" + Ht(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? Wl(e, p, Ht(t)) : a != null ? Wl(e, p, Ht(a)) : r != null && e.removeAttribute("value"), s == null && c != null && (e.defaultChecked = !!c), s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Ht(y) : e.removeAttribute("name");
  }
  function ld(e, t, a, r, s, c, p, y) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || a != null) {
      if (!(c !== "submit" && c !== "reset" || t != null)) {
        Jl(e);
        return;
      }
      a = a != null ? "" + Ht(a) : "", t = t != null ? "" + Ht(t) : a, y || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = r ?? s, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = y ? e.checked : !!r, e.defaultChecked = !!r, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p), Jl(e);
  }
  function Wl(e, t, a) {
    t === "number" && tr(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Va(e, t, a, r) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < a.length; s++)
        t["$" + a[s]] = !0;
      for (a = 0; a < e.length; a++)
        s = t.hasOwnProperty("$" + e[a].value), e[a].selected !== s && (e[a].selected = s), s && r && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Ht(a), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === a) {
          e[s].selected = !0, r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function sd(e, t, a) {
    if (t != null && (t = "" + Ht(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Ht(a) : "";
  }
  function ud(e, t, a, r) {
    if (t == null) {
      if (r != null) {
        if (a != null) throw Error(l(92));
        if (te(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        a = r;
      }
      a == null && (a = ""), t = a;
    }
    a = Ht(t), e.defaultValue = a, r = e.textContent, r === a && r !== "" && r !== null && (e.value = r), Jl(e);
  }
  function Ga(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var h_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function cd(e, t, a) {
    var r = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, a) : typeof a != "number" || a === 0 || h_.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function dd(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(l(62));
    if (e = e.style, a != null) {
      for (var r in a)
        !a.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
      for (var s in t)
        r = t[s], t.hasOwnProperty(s) && a[s] !== r && cd(e, s, r);
    } else
      for (var c in t)
        t.hasOwnProperty(c) && cd(e, c, t[c]);
  }
  function Fl(e) {
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
  var v_ = /* @__PURE__ */ new Map([
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
  ]), __ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function nr(e) {
    return __.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function fn() {
  }
  var Il = null;
  function es(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Qa = null, Ka = null;
  function fd(e) {
    var t = $a(e);
    if (t && (e = t.stateNode)) {
      var a = e[kt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Pl(
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
              var r = a[t];
              if (r !== e && r.form === e.form) {
                var s = r[kt] || null;
                if (!s) throw Error(l(90));
                Pl(
                  r,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              r = a[t], r.form === e.form && rd(r);
          }
          break e;
        case "textarea":
          sd(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Va(e, !!a.multiple, t, !1);
      }
    }
  }
  var ts = !1;
  function md(e, t, a) {
    if (ts) return e(t, a);
    ts = !0;
    try {
      var r = e(t);
      return r;
    } finally {
      if (ts = !1, (Qa !== null || Ka !== null) && (qr(), Qa && (t = Qa, e = Ka, Ka = Qa = null, fd(t), e)))
        for (t = 0; t < e.length; t++) fd(e[t]);
    }
  }
  function Hi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var r = a[kt] || null;
    if (r === null) return null;
    a = r[t];
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
    if (a && typeof a != "function")
      throw Error(
        l(231, t, typeof a)
      );
    return a;
  }
  var mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ns = !1;
  if (mn)
    try {
      var Xi = {};
      Object.defineProperty(Xi, "passive", {
        get: function() {
          ns = !0;
        }
      }), window.addEventListener("test", Xi, Xi), window.removeEventListener("test", Xi, Xi);
    } catch {
      ns = !1;
    }
  var On = null, as = null, ar = null;
  function pd() {
    if (ar) return ar;
    var e, t = as, a = t.length, r, s = "value" in On ? On.value : On.textContent, c = s.length;
    for (e = 0; e < a && t[e] === s[e]; e++) ;
    var p = a - e;
    for (r = 1; r <= p && t[a - r] === s[c - r]; r++) ;
    return ar = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function ir(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function or() {
    return !0;
  }
  function hd() {
    return !1;
  }
  function xt(e) {
    function t(a, r, s, c, p) {
      this._reactName = a, this._targetInst = s, this.type = r, this.nativeEvent = c, this.target = p, this.currentTarget = null;
      for (var y in e)
        e.hasOwnProperty(y) && (a = e[y], this[y] = a ? a(c) : c[y]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? or : hd, this.isPropagationStopped = hd, this;
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = or);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = or);
      },
      persist: function() {
      },
      isPersistent: or
    }), t;
  }
  var ca = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, rr = xt(ca), $i = b({}, ca, { view: 0, detail: 0 }), y_ = xt($i), is, os, qi, lr = b({}, $i, {
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
    getModifierState: ls,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== qi && (qi && e.type === "mousemove" ? (is = e.screenX - qi.screenX, os = e.screenY - qi.screenY) : os = is = 0, qi = e), is);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : os;
    }
  }), vd = xt(lr), g_ = b({}, lr, { dataTransfer: 0 }), b_ = xt(g_), S_ = b({}, $i, { relatedTarget: 0 }), rs = xt(S_), w_ = b({}, ca, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), z_ = xt(w_), k_ = b({}, ca, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), x_ = xt(k_), T_ = b({}, ca, { data: 0 }), _d = xt(T_), A_ = {
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
  }, E_ = {
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
  }, j_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function M_(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = j_[e]) ? !!t[e] : !1;
  }
  function ls() {
    return M_;
  }
  var C_ = b({}, $i, {
    key: function(e) {
      if (e.key) {
        var t = A_[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = ir(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? E_[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ls,
    charCode: function(e) {
      return e.type === "keypress" ? ir(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ir(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), O_ = xt(C_), N_ = b({}, lr, {
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
  }), yd = xt(N_), D_ = b({}, $i, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ls
  }), R_ = xt(D_), Z_ = b({}, ca, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), U_ = xt(Z_), Y_ = b({}, lr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), B_ = xt(Y_), H_ = b({}, ca, {
    newState: 0,
    oldState: 0
  }), X_ = xt(H_), $_ = [9, 13, 27, 32], ss = mn && "CompositionEvent" in window, Li = null;
  mn && "documentMode" in document && (Li = document.documentMode);
  var q_ = mn && "TextEvent" in window && !Li, gd = mn && (!ss || Li && 8 < Li && 11 >= Li), bd = " ", Sd = !1;
  function wd(e, t) {
    switch (e) {
      case "keyup":
        return $_.indexOf(t.keyCode) !== -1;
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
  function zd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ja = !1;
  function L_(e, t) {
    switch (e) {
      case "compositionend":
        return zd(t);
      case "keypress":
        return t.which !== 32 ? null : (Sd = !0, bd);
      case "textInput":
        return e = t.data, e === bd && Sd ? null : e;
      default:
        return null;
    }
  }
  function V_(e, t) {
    if (Ja)
      return e === "compositionend" || !ss && wd(e, t) ? (e = pd(), ar = as = On = null, Ja = !1, e) : null;
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
        return gd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var G_ = {
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
  function kd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!G_[e.type] : t === "textarea";
  }
  function xd(e, t, a, r) {
    Qa ? Ka ? Ka.push(r) : Ka = [r] : Qa = r, t = Pr(t, "onChange"), 0 < t.length && (a = new rr(
      "onChange",
      "change",
      null,
      a,
      r
    ), e.push({ event: a, listeners: t }));
  }
  var Vi = null, Gi = null;
  function Q_(e) {
    sp(e, 0);
  }
  function sr(e) {
    var t = Bi(e);
    if (rd(t)) return e;
  }
  function Td(e, t) {
    if (e === "change") return t;
  }
  var Ad = !1;
  if (mn) {
    var us;
    if (mn) {
      var cs = "oninput" in document;
      if (!cs) {
        var Ed = document.createElement("div");
        Ed.setAttribute("oninput", "return;"), cs = typeof Ed.oninput == "function";
      }
      us = cs;
    } else us = !1;
    Ad = us && (!document.documentMode || 9 < document.documentMode);
  }
  function jd() {
    Vi && (Vi.detachEvent("onpropertychange", Md), Gi = Vi = null);
  }
  function Md(e) {
    if (e.propertyName === "value" && sr(Gi)) {
      var t = [];
      xd(
        t,
        Gi,
        e,
        es(e)
      ), md(Q_, t);
    }
  }
  function K_(e, t, a) {
    e === "focusin" ? (jd(), Vi = t, Gi = a, Vi.attachEvent("onpropertychange", Md)) : e === "focusout" && jd();
  }
  function J_(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return sr(Gi);
  }
  function P_(e, t) {
    if (e === "click") return sr(t);
  }
  function W_(e, t) {
    if (e === "input" || e === "change")
      return sr(t);
  }
  function F_(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ot = typeof Object.is == "function" ? Object.is : F_;
  function Qi(e, t) {
    if (Ot(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), r = Object.keys(t);
    if (a.length !== r.length) return !1;
    for (r = 0; r < a.length; r++) {
      var s = a[r];
      if (!Ua.call(t, s) || !Ot(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  function Cd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Od(e, t) {
    var a = Cd(e);
    e = 0;
    for (var r; a; ) {
      if (a.nodeType === 3) {
        if (r = e + a.textContent.length, e <= t && r >= t)
          return { node: a, offset: t - e };
        e = r;
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
      a = Cd(a);
    }
  }
  function Nd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Dd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = tr(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = tr(e.document);
    }
    return t;
  }
  function ds(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var I_ = mn && "documentMode" in document && 11 >= document.documentMode, Pa = null, fs = null, Ki = null, ms = !1;
  function Rd(e, t, a) {
    var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ms || Pa == null || Pa !== tr(r) || (r = Pa, "selectionStart" in r && ds(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), Ki && Qi(Ki, r) || (Ki = r, r = Pr(fs, "onSelect"), 0 < r.length && (t = new rr(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: r }), t.target = Pa)));
  }
  function da(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Wa = {
    animationend: da("Animation", "AnimationEnd"),
    animationiteration: da("Animation", "AnimationIteration"),
    animationstart: da("Animation", "AnimationStart"),
    transitionrun: da("Transition", "TransitionRun"),
    transitionstart: da("Transition", "TransitionStart"),
    transitioncancel: da("Transition", "TransitionCancel"),
    transitionend: da("Transition", "TransitionEnd")
  }, ps = {}, Zd = {};
  mn && (Zd = document.createElement("div").style, "AnimationEvent" in window || (delete Wa.animationend.animation, delete Wa.animationiteration.animation, delete Wa.animationstart.animation), "TransitionEvent" in window || delete Wa.transitionend.transition);
  function fa(e) {
    if (ps[e]) return ps[e];
    if (!Wa[e]) return e;
    var t = Wa[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Zd)
        return ps[e] = t[a];
    return e;
  }
  var Ud = fa("animationend"), Yd = fa("animationiteration"), Bd = fa("animationstart"), ey = fa("transitionrun"), ty = fa("transitionstart"), ny = fa("transitioncancel"), Hd = fa("transitionend"), Xd = /* @__PURE__ */ new Map(), hs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  hs.push("scrollEnd");
  function It(e, t) {
    Xd.set(e, t), ua(t, [e]);
  }
  var ur = typeof reportError == "function" ? reportError : function(e) {
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
  }, $t = [], Fa = 0, vs = 0;
  function cr() {
    for (var e = Fa, t = vs = Fa = 0; t < e; ) {
      var a = $t[t];
      $t[t++] = null;
      var r = $t[t];
      $t[t++] = null;
      var s = $t[t];
      $t[t++] = null;
      var c = $t[t];
      if ($t[t++] = null, r !== null && s !== null) {
        var p = r.pending;
        p === null ? s.next = s : (s.next = p.next, p.next = s), r.pending = s;
      }
      c !== 0 && $d(a, s, c);
    }
  }
  function dr(e, t, a, r) {
    $t[Fa++] = e, $t[Fa++] = t, $t[Fa++] = a, $t[Fa++] = r, vs |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
  }
  function _s(e, t, a, r) {
    return dr(e, t, a, r), fr(e);
  }
  function ma(e, t) {
    return dr(e, null, null, t), fr(e);
  }
  function $d(e, t, a) {
    e.lanes |= a;
    var r = e.alternate;
    r !== null && (r.lanes |= a);
    for (var s = !1, c = e.return; c !== null; )
      c.childLanes |= a, r = c.alternate, r !== null && (r.childLanes |= a), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (s = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, s && t !== null && (s = 31 - st(a), e = c.hiddenUpdates, r = e[s], r === null ? e[s] = [t] : r.push(t), t.lane = a | 536870912), c) : null;
  }
  function fr(e) {
    if (50 < _o)
      throw _o = 0, Tu = null, Error(l(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ia = {};
  function ay(e, t, a, r) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Nt(e, t, a, r) {
    return new ay(e, t, a, r);
  }
  function ys(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function pn(e, t) {
    var a = e.alternate;
    return a === null ? (a = Nt(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function qd(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function mr(e, t, a, r, s, c) {
    var p = 0;
    if (r = e, typeof e == "function") ys(e) && (p = 1);
    else if (typeof e == "string")
      p = sg(
        e,
        a,
        F.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case N:
          return e = Nt(31, a, t, s), e.elementType = N, e.lanes = c, e;
        case q:
          return pa(a.children, s, c, t);
        case V:
          p = 8, s |= 24;
          break;
        case J:
          return e = Nt(12, a, t, s | 2), e.elementType = J, e.lanes = c, e;
        case P:
          return e = Nt(13, a, t, s), e.elementType = P, e.lanes = c, e;
        case G:
          return e = Nt(19, a, t, s), e.elementType = G, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case L:
                p = 10;
                break e;
              case ae:
                p = 9;
                break e;
              case K:
                p = 11;
                break e;
              case $:
                p = 14;
                break e;
              case se:
                p = 16, r = null;
                break e;
            }
          p = 29, a = Error(
            l(130, e === null ? "null" : typeof e, "")
          ), r = null;
      }
    return t = Nt(p, a, t, s), t.elementType = e, t.type = r, t.lanes = c, t;
  }
  function pa(e, t, a, r) {
    return e = Nt(7, e, r, t), e.lanes = a, e;
  }
  function gs(e, t, a) {
    return e = Nt(6, e, null, t), e.lanes = a, e;
  }
  function Ld(e) {
    var t = Nt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function bs(e, t, a) {
    return t = Nt(
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
  var Vd = /* @__PURE__ */ new WeakMap();
  function qt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Vd.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: Za(t)
      }, Vd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Za(t)
    };
  }
  var ei = [], ti = 0, pr = null, Ji = 0, Lt = [], Vt = 0, Nn = null, ln = 1, sn = "";
  function hn(e, t) {
    ei[ti++] = Ji, ei[ti++] = pr, pr = e, Ji = t;
  }
  function Gd(e, t, a) {
    Lt[Vt++] = ln, Lt[Vt++] = sn, Lt[Vt++] = Nn, Nn = e;
    var r = ln;
    e = sn;
    var s = 32 - st(r) - 1;
    r &= ~(1 << s), a += 1;
    var c = 32 - st(t) + s;
    if (30 < c) {
      var p = s - s % 5;
      c = (r & (1 << p) - 1).toString(32), r >>= p, s -= p, ln = 1 << 32 - st(t) + s | a << s | r, sn = c + e;
    } else
      ln = 1 << c | a << s | r, sn = e;
  }
  function Ss(e) {
    e.return !== null && (hn(e, 1), Gd(e, 1, 0));
  }
  function ws(e) {
    for (; e === pr; )
      pr = ei[--ti], ei[ti] = null, Ji = ei[--ti], ei[ti] = null;
    for (; e === Nn; )
      Nn = Lt[--Vt], Lt[Vt] = null, sn = Lt[--Vt], Lt[Vt] = null, ln = Lt[--Vt], Lt[Vt] = null;
  }
  function Qd(e, t) {
    Lt[Vt++] = ln, Lt[Vt++] = sn, Lt[Vt++] = Nn, ln = t.id, sn = t.overflow, Nn = e;
  }
  var ft = null, Ve = null, Ee = !1, Dn = null, Gt = !1, zs = Error(l(519));
  function Rn(e) {
    var t = Error(
      l(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Pi(qt(t, e)), zs;
  }
  function Kd(e) {
    var t = e.stateNode, a = e.type, r = e.memoizedProps;
    switch (t[dt] = e, t[kt] = r, a) {
      case "dialog":
        ze("cancel", t), ze("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ze("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < go.length; a++)
          ze(go[a], t);
        break;
      case "source":
        ze("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ze("error", t), ze("load", t);
        break;
      case "details":
        ze("toggle", t);
        break;
      case "input":
        ze("invalid", t), ld(
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
        ze("invalid", t);
        break;
      case "textarea":
        ze("invalid", t), ud(t, r.value, r.defaultValue, r.children);
    }
    a = r.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || r.suppressHydrationWarning === !0 || fp(t.textContent, a) ? (r.popover != null && (ze("beforetoggle", t), ze("toggle", t)), r.onScroll != null && ze("scroll", t), r.onScrollEnd != null && ze("scrollend", t), r.onClick != null && (t.onclick = fn), t = !0) : t = !1, t || Rn(e, !0);
  }
  function Jd(e) {
    for (ft = e.return; ft; )
      switch (ft.tag) {
        case 5:
        case 31:
        case 13:
          Gt = !1;
          return;
        case 27:
        case 3:
          Gt = !0;
          return;
        default:
          ft = ft.return;
      }
  }
  function ni(e) {
    if (e !== ft) return !1;
    if (!Ee) return Jd(e), Ee = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Xu(e.type, e.memoizedProps)), a = !a), a && Ve && Rn(e), Jd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Ve = Sp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Ve = Sp(e);
    } else
      t === 27 ? (t = Ve, Jn(e.type) ? (e = Gu, Gu = null, Ve = e) : Ve = t) : Ve = ft ? Kt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ha() {
    Ve = ft = null, Ee = !1;
  }
  function ks() {
    var e = Dn;
    return e !== null && (jt === null ? jt = e : jt.push.apply(
      jt,
      e
    ), Dn = null), e;
  }
  function Pi(e) {
    Dn === null ? Dn = [e] : Dn.push(e);
  }
  var xs = w(null), va = null, vn = null;
  function Zn(e, t, a) {
    Q(xs, t._currentValue), t._currentValue = a;
  }
  function _n(e) {
    e._currentValue = xs.current, Z(xs);
  }
  function Ts(e, t, a) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function As(e, t, a, r) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var c = s.dependencies;
      if (c !== null) {
        var p = s.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var y = c;
          c = s;
          for (var S = 0; S < t.length; S++)
            if (y.context === t[S]) {
              c.lanes |= a, y = c.alternate, y !== null && (y.lanes |= a), Ts(
                c.return,
                a,
                e
              ), r || (p = null);
              break e;
            }
          c = y.next;
        }
      } else if (s.tag === 18) {
        if (p = s.return, p === null) throw Error(l(341));
        p.lanes |= a, c = p.alternate, c !== null && (c.lanes |= a), Ts(p, a, e), p = null;
      } else p = s.child;
      if (p !== null) p.return = s;
      else
        for (p = s; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (s = p.sibling, s !== null) {
            s.return = p.return, p = s;
            break;
          }
          p = p.return;
        }
      s = p;
    }
  }
  function ai(e, t, a, r) {
    e = null;
    for (var s = t, c = !1; s !== null; ) {
      if (!c) {
        if ((s.flags & 524288) !== 0) c = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var p = s.alternate;
        if (p === null) throw Error(l(387));
        if (p = p.memoizedProps, p !== null) {
          var y = s.type;
          Ot(s.pendingProps.value, p.value) || (e !== null ? e.push(y) : e = [y]);
        }
      } else if (s === Se.current) {
        if (p = s.alternate, p === null) throw Error(l(387));
        p.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(ko) : e = [ko]);
      }
      s = s.return;
    }
    e !== null && As(
      t,
      e,
      a,
      r
    ), t.flags |= 262144;
  }
  function hr(e) {
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
  function _a(e) {
    va = e, vn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function mt(e) {
    return Pd(va, e);
  }
  function vr(e, t) {
    return va === null && _a(e), Pd(e, t);
  }
  function Pd(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, vn === null) {
      if (e === null) throw Error(l(308));
      vn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else vn = vn.next = t;
    return a;
  }
  var iy = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, r) {
        e.push(r);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, oy = n.unstable_scheduleCallback, ry = n.unstable_NormalPriority, at = {
    $$typeof: L,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Es() {
    return {
      controller: new iy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Wi(e) {
    e.refCount--, e.refCount === 0 && oy(ry, function() {
      e.controller.abort();
    });
  }
  var Fi = null, js = 0, ii = 0, oi = null;
  function ly(e, t) {
    if (Fi === null) {
      var a = Fi = [];
      js = 0, ii = Ou(), oi = {
        status: "pending",
        value: void 0,
        then: function(r) {
          a.push(r);
        }
      };
    }
    return js++, t.then(Wd, Wd), t;
  }
  function Wd() {
    if (--js === 0 && Fi !== null) {
      oi !== null && (oi.status = "fulfilled");
      var e = Fi;
      Fi = null, ii = 0, oi = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function sy(e, t) {
    var a = [], r = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        a.push(s);
      }
    };
    return e.then(
      function() {
        r.status = "fulfilled", r.value = t;
        for (var s = 0; s < a.length; s++) (0, a[s])(t);
      },
      function(s) {
        for (r.status = "rejected", r.reason = s, s = 0; s < a.length; s++)
          (0, a[s])(void 0);
      }
    ), r;
  }
  var Fd = j.S;
  j.S = function(e, t) {
    Zm = bt(), typeof t == "object" && t !== null && typeof t.then == "function" && ly(e, t), Fd !== null && Fd(e, t);
  };
  var ya = w(null);
  function Ms() {
    var e = ya.current;
    return e !== null ? e : Le.pooledCache;
  }
  function _r(e, t) {
    t === null ? Q(ya, ya.current) : Q(ya, t.pool);
  }
  function Id() {
    var e = Ms();
    return e === null ? null : { parent: at._currentValue, pool: e };
  }
  var ri = Error(l(460)), Cs = Error(l(474)), yr = Error(l(542)), gr = { then: function() {
  } };
  function ef(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function tf(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(fn, fn), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, af(e), e;
      default:
        if (typeof t.status == "string") t.then(fn, fn);
        else {
          if (e = Le, e !== null && 100 < e.shellSuspendCounter)
            throw Error(l(482));
          e = t, e.status = "pending", e.then(
            function(r) {
              if (t.status === "pending") {
                var s = t;
                s.status = "fulfilled", s.value = r;
              }
            },
            function(r) {
              if (t.status === "pending") {
                var s = t;
                s.status = "rejected", s.reason = r;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, af(e), e;
        }
        throw ba = t, ri;
    }
  }
  function ga(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (ba = a, ri) : a;
    }
  }
  var ba = null;
  function nf() {
    if (ba === null) throw Error(l(459));
    var e = ba;
    return ba = null, e;
  }
  function af(e) {
    if (e === ri || e === yr)
      throw Error(l(483));
  }
  var li = null, Ii = 0;
  function br(e) {
    var t = Ii;
    return Ii += 1, li === null && (li = []), tf(li, e, t);
  }
  function eo(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Sr(e, t) {
    throw t.$$typeof === k ? Error(l(525)) : (e = Object.prototype.toString.call(t), Error(
      l(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function of(e) {
    function t(x, z) {
      if (e) {
        var E = x.deletions;
        E === null ? (x.deletions = [z], x.flags |= 16) : E.push(z);
      }
    }
    function a(x, z) {
      if (!e) return null;
      for (; z !== null; )
        t(x, z), z = z.sibling;
      return null;
    }
    function r(x) {
      for (var z = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? z.set(x.key, x) : z.set(x.index, x), x = x.sibling;
      return z;
    }
    function s(x, z) {
      return x = pn(x, z), x.index = 0, x.sibling = null, x;
    }
    function c(x, z, E) {
      return x.index = E, e ? (E = x.alternate, E !== null ? (E = E.index, E < z ? (x.flags |= 67108866, z) : E) : (x.flags |= 67108866, z)) : (x.flags |= 1048576, z);
    }
    function p(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function y(x, z, E, U) {
      return z === null || z.tag !== 6 ? (z = gs(E, x.mode, U), z.return = x, z) : (z = s(z, E), z.return = x, z);
    }
    function S(x, z, E, U) {
      var ce = E.type;
      return ce === q ? R(
        x,
        z,
        E.props.children,
        U,
        E.key
      ) : z !== null && (z.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === se && ga(ce) === z.type) ? (z = s(z, E.props), eo(z, E), z.return = x, z) : (z = mr(
        E.type,
        E.key,
        E.props,
        null,
        x.mode,
        U
      ), eo(z, E), z.return = x, z);
    }
    function M(x, z, E, U) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== E.containerInfo || z.stateNode.implementation !== E.implementation ? (z = bs(E, x.mode, U), z.return = x, z) : (z = s(z, E.children || []), z.return = x, z);
    }
    function R(x, z, E, U, ce) {
      return z === null || z.tag !== 7 ? (z = pa(
        E,
        x.mode,
        U,
        ce
      ), z.return = x, z) : (z = s(z, E), z.return = x, z);
    }
    function B(x, z, E) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = gs(
          "" + z,
          x.mode,
          E
        ), z.return = x, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case T:
            return E = mr(
              z.type,
              z.key,
              z.props,
              null,
              x.mode,
              E
            ), eo(E, z), E.return = x, E;
          case A:
            return z = bs(
              z,
              x.mode,
              E
            ), z.return = x, z;
          case se:
            return z = ga(z), B(x, z, E);
        }
        if (te(z) || fe(z))
          return z = pa(
            z,
            x.mode,
            E,
            null
          ), z.return = x, z;
        if (typeof z.then == "function")
          return B(x, br(z), E);
        if (z.$$typeof === L)
          return B(
            x,
            vr(x, z),
            E
          );
        Sr(x, z);
      }
      return null;
    }
    function C(x, z, E, U) {
      var ce = z !== null ? z.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return ce !== null ? null : y(x, z, "" + E, U);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case T:
            return E.key === ce ? S(x, z, E, U) : null;
          case A:
            return E.key === ce ? M(x, z, E, U) : null;
          case se:
            return E = ga(E), C(x, z, E, U);
        }
        if (te(E) || fe(E))
          return ce !== null ? null : R(x, z, E, U, null);
        if (typeof E.then == "function")
          return C(
            x,
            z,
            br(E),
            U
          );
        if (E.$$typeof === L)
          return C(
            x,
            z,
            vr(x, E),
            U
          );
        Sr(x, E);
      }
      return null;
    }
    function O(x, z, E, U, ce) {
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return x = x.get(E) || null, y(z, x, "" + U, ce);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case T:
            return x = x.get(
              U.key === null ? E : U.key
            ) || null, S(z, x, U, ce);
          case A:
            return x = x.get(
              U.key === null ? E : U.key
            ) || null, M(z, x, U, ce);
          case se:
            return U = ga(U), O(
              x,
              z,
              E,
              U,
              ce
            );
        }
        if (te(U) || fe(U))
          return x = x.get(E) || null, R(z, x, U, ce, null);
        if (typeof U.then == "function")
          return O(
            x,
            z,
            E,
            br(U),
            ce
          );
        if (U.$$typeof === L)
          return O(
            x,
            z,
            E,
            vr(z, U),
            ce
          );
        Sr(z, U);
      }
      return null;
    }
    function oe(x, z, E, U) {
      for (var ce = null, Me = null, re = z, be = z = 0, Te = null; re !== null && be < E.length; be++) {
        re.index > be ? (Te = re, re = null) : Te = re.sibling;
        var Ce = C(
          x,
          re,
          E[be],
          U
        );
        if (Ce === null) {
          re === null && (re = Te);
          break;
        }
        e && re && Ce.alternate === null && t(x, re), z = c(Ce, z, be), Me === null ? ce = Ce : Me.sibling = Ce, Me = Ce, re = Te;
      }
      if (be === E.length)
        return a(x, re), Ee && hn(x, be), ce;
      if (re === null) {
        for (; be < E.length; be++)
          re = B(x, E[be], U), re !== null && (z = c(
            re,
            z,
            be
          ), Me === null ? ce = re : Me.sibling = re, Me = re);
        return Ee && hn(x, be), ce;
      }
      for (re = r(re); be < E.length; be++)
        Te = O(
          re,
          x,
          be,
          E[be],
          U
        ), Te !== null && (e && Te.alternate !== null && re.delete(
          Te.key === null ? be : Te.key
        ), z = c(
          Te,
          z,
          be
        ), Me === null ? ce = Te : Me.sibling = Te, Me = Te);
      return e && re.forEach(function(ea) {
        return t(x, ea);
      }), Ee && hn(x, be), ce;
    }
    function he(x, z, E, U) {
      if (E == null) throw Error(l(151));
      for (var ce = null, Me = null, re = z, be = z = 0, Te = null, Ce = E.next(); re !== null && !Ce.done; be++, Ce = E.next()) {
        re.index > be ? (Te = re, re = null) : Te = re.sibling;
        var ea = C(x, re, Ce.value, U);
        if (ea === null) {
          re === null && (re = Te);
          break;
        }
        e && re && ea.alternate === null && t(x, re), z = c(ea, z, be), Me === null ? ce = ea : Me.sibling = ea, Me = ea, re = Te;
      }
      if (Ce.done)
        return a(x, re), Ee && hn(x, be), ce;
      if (re === null) {
        for (; !Ce.done; be++, Ce = E.next())
          Ce = B(x, Ce.value, U), Ce !== null && (z = c(Ce, z, be), Me === null ? ce = Ce : Me.sibling = Ce, Me = Ce);
        return Ee && hn(x, be), ce;
      }
      for (re = r(re); !Ce.done; be++, Ce = E.next())
        Ce = O(re, x, be, Ce.value, U), Ce !== null && (e && Ce.alternate !== null && re.delete(Ce.key === null ? be : Ce.key), z = c(Ce, z, be), Me === null ? ce = Ce : Me.sibling = Ce, Me = Ce);
      return e && re.forEach(function(gg) {
        return t(x, gg);
      }), Ee && hn(x, be), ce;
    }
    function $e(x, z, E, U) {
      if (typeof E == "object" && E !== null && E.type === q && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case T:
            e: {
              for (var ce = E.key; z !== null; ) {
                if (z.key === ce) {
                  if (ce = E.type, ce === q) {
                    if (z.tag === 7) {
                      a(
                        x,
                        z.sibling
                      ), U = s(
                        z,
                        E.props.children
                      ), U.return = x, x = U;
                      break e;
                    }
                  } else if (z.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === se && ga(ce) === z.type) {
                    a(
                      x,
                      z.sibling
                    ), U = s(z, E.props), eo(U, E), U.return = x, x = U;
                    break e;
                  }
                  a(x, z);
                  break;
                } else t(x, z);
                z = z.sibling;
              }
              E.type === q ? (U = pa(
                E.props.children,
                x.mode,
                U,
                E.key
              ), U.return = x, x = U) : (U = mr(
                E.type,
                E.key,
                E.props,
                null,
                x.mode,
                U
              ), eo(U, E), U.return = x, x = U);
            }
            return p(x);
          case A:
            e: {
              for (ce = E.key; z !== null; ) {
                if (z.key === ce)
                  if (z.tag === 4 && z.stateNode.containerInfo === E.containerInfo && z.stateNode.implementation === E.implementation) {
                    a(
                      x,
                      z.sibling
                    ), U = s(z, E.children || []), U.return = x, x = U;
                    break e;
                  } else {
                    a(x, z);
                    break;
                  }
                else t(x, z);
                z = z.sibling;
              }
              U = bs(E, x.mode, U), U.return = x, x = U;
            }
            return p(x);
          case se:
            return E = ga(E), $e(
              x,
              z,
              E,
              U
            );
        }
        if (te(E))
          return oe(
            x,
            z,
            E,
            U
          );
        if (fe(E)) {
          if (ce = fe(E), typeof ce != "function") throw Error(l(150));
          return E = ce.call(E), he(
            x,
            z,
            E,
            U
          );
        }
        if (typeof E.then == "function")
          return $e(
            x,
            z,
            br(E),
            U
          );
        if (E.$$typeof === L)
          return $e(
            x,
            z,
            vr(x, E),
            U
          );
        Sr(x, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, z !== null && z.tag === 6 ? (a(x, z.sibling), U = s(z, E), U.return = x, x = U) : (a(x, z), U = gs(E, x.mode, U), U.return = x, x = U), p(x)) : a(x, z);
    }
    return function(x, z, E, U) {
      try {
        Ii = 0;
        var ce = $e(
          x,
          z,
          E,
          U
        );
        return li = null, ce;
      } catch (re) {
        if (re === ri || re === yr) throw re;
        var Me = Nt(29, re, null, x.mode);
        return Me.lanes = U, Me.return = x, Me;
      }
    };
  }
  var Sa = of(!0), rf = of(!1), Un = !1;
  function Os(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ns(e, t) {
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
  function Bn(e, t, a) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (De & 2) !== 0) {
      var s = r.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, t = fr(e), $d(e, null, a), t;
    }
    return dr(e, r, t, a), fr(e);
  }
  function to(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, a |= r, t.lanes = a, Pc(e, a);
    }
  }
  function Ds(e, t) {
    var a = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, a === r)) {
      var s = null, c = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var p = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          c === null ? s = c = p : c = c.next = p, a = a.next;
        } while (a !== null);
        c === null ? s = c = t : c = c.next = t;
      } else s = c = t;
      a = {
        baseState: r.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: c,
        shared: r.shared,
        callbacks: r.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Rs = !1;
  function no() {
    if (Rs) {
      var e = oi;
      if (e !== null) throw e;
    }
  }
  function ao(e, t, a, r) {
    Rs = !1;
    var s = e.updateQueue;
    Un = !1;
    var c = s.firstBaseUpdate, p = s.lastBaseUpdate, y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var S = y, M = S.next;
      S.next = null, p === null ? c = M : p.next = M, p = S;
      var R = e.alternate;
      R !== null && (R = R.updateQueue, y = R.lastBaseUpdate, y !== p && (y === null ? R.firstBaseUpdate = M : y.next = M, R.lastBaseUpdate = S));
    }
    if (c !== null) {
      var B = s.baseState;
      p = 0, R = M = S = null, y = c;
      do {
        var C = y.lane & -536870913, O = C !== y.lane;
        if (O ? (xe & C) === C : (r & C) === C) {
          C !== 0 && C === ii && (Rs = !0), R !== null && (R = R.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          e: {
            var oe = e, he = y;
            C = t;
            var $e = a;
            switch (he.tag) {
              case 1:
                if (oe = he.payload, typeof oe == "function") {
                  B = oe.call($e, B, C);
                  break e;
                }
                B = oe;
                break e;
              case 3:
                oe.flags = oe.flags & -65537 | 128;
              case 0:
                if (oe = he.payload, C = typeof oe == "function" ? oe.call($e, B, C) : oe, C == null) break e;
                B = b({}, B, C);
                break e;
              case 2:
                Un = !0;
            }
          }
          C = y.callback, C !== null && (e.flags |= 64, O && (e.flags |= 8192), O = s.callbacks, O === null ? s.callbacks = [C] : O.push(C));
        } else
          O = {
            lane: C,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, R === null ? (M = R = O, S = B) : R = R.next = O, p |= C;
        if (y = y.next, y === null) {
          if (y = s.shared.pending, y === null)
            break;
          O = y, y = O.next, O.next = null, s.lastBaseUpdate = O, s.shared.pending = null;
        }
      } while (!0);
      R === null && (S = B), s.baseState = S, s.firstBaseUpdate = M, s.lastBaseUpdate = R, c === null && (s.shared.lanes = 0), Ln |= p, e.lanes = p, e.memoizedState = B;
    }
  }
  function lf(e, t) {
    if (typeof e != "function")
      throw Error(l(191, e));
    e.call(t);
  }
  function sf(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        lf(a[e], t);
  }
  var si = w(null), wr = w(0);
  function uf(e, t) {
    e = Tn, Q(wr, e), Q(si, t), Tn = e | t.baseLanes;
  }
  function Zs() {
    Q(wr, Tn), Q(si, si.current);
  }
  function Us() {
    Tn = wr.current, Z(si), Z(wr);
  }
  var Dt = w(null), Qt = null;
  function Hn(e) {
    var t = e.alternate;
    Q(tt, tt.current & 1), Q(Dt, e), Qt === null && (t === null || si.current !== null || t.memoizedState !== null) && (Qt = e);
  }
  function Ys(e) {
    Q(tt, tt.current), Q(Dt, e), Qt === null && (Qt = e);
  }
  function cf(e) {
    e.tag === 22 ? (Q(tt, tt.current), Q(Dt, e), Qt === null && (Qt = e)) : Xn();
  }
  function Xn() {
    Q(tt, tt.current), Q(Dt, Dt.current);
  }
  function Rt(e) {
    Z(Dt), Qt === e && (Qt = null), Z(tt);
  }
  var tt = w(0);
  function zr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Lu(a) || Vu(a)))
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
  var yn = 0, ge = null, He = null, it = null, kr = !1, ui = !1, wa = !1, xr = 0, io = 0, ci = null, uy = 0;
  function Pe() {
    throw Error(l(321));
  }
  function Bs(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Ot(e[a], t[a])) return !1;
    return !0;
  }
  function Hs(e, t, a, r, s, c) {
    return yn = c, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e === null || e.memoizedState === null ? Qf : tu, wa = !1, c = a(r, s), wa = !1, ui && (c = ff(
      t,
      a,
      r,
      s
    )), df(e), c;
  }
  function df(e) {
    j.H = lo;
    var t = He !== null && He.next !== null;
    if (yn = 0, it = He = ge = null, kr = !1, io = 0, ci = null, t) throw Error(l(300));
    e === null || ot || (e = e.dependencies, e !== null && hr(e) && (ot = !0));
  }
  function ff(e, t, a, r) {
    ge = e;
    var s = 0;
    do {
      if (ui && (ci = null), io = 0, ui = !1, 25 <= s) throw Error(l(301));
      if (s += 1, it = He = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      j.H = Kf, c = t(a, r);
    } while (ui);
    return c;
  }
  function cy() {
    var e = j.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? oo(t) : t, e = e.useState()[0], (He !== null ? He.memoizedState : null) !== e && (ge.flags |= 1024), t;
  }
  function Xs() {
    var e = xr !== 0;
    return xr = 0, e;
  }
  function $s(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function qs(e) {
    if (kr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      kr = !1;
    }
    yn = 0, it = He = ge = null, ui = !1, io = xr = 0, ci = null;
  }
  function wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return it === null ? ge.memoizedState = it = e : it = it.next = e, it;
  }
  function nt() {
    if (He === null) {
      var e = ge.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = He.next;
    var t = it === null ? ge.memoizedState : it.next;
    if (t !== null)
      it = t, He = e;
    else {
      if (e === null)
        throw ge.alternate === null ? Error(l(467)) : Error(l(310));
      He = e, e = {
        memoizedState: He.memoizedState,
        baseState: He.baseState,
        baseQueue: He.baseQueue,
        queue: He.queue,
        next: null
      }, it === null ? ge.memoizedState = it = e : it = it.next = e;
    }
    return it;
  }
  function Tr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function oo(e) {
    var t = io;
    return io += 1, ci === null && (ci = []), e = tf(ci, e, t), t = ge, (it === null ? t.memoizedState : it.next) === null && (t = t.alternate, j.H = t === null || t.memoizedState === null ? Qf : tu), e;
  }
  function Ar(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return oo(e);
      if (e.$$typeof === L) return mt(e);
    }
    throw Error(l(438, String(e)));
  }
  function Ls(e) {
    var t = null, a = ge.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var r = ge.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
        data: r.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Tr(), ge.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), r = 0; r < e; r++)
        a[r] = ee;
    return t.index++, a;
  }
  function gn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Er(e) {
    var t = nt();
    return Vs(t, He, e);
  }
  function Vs(e, t, a) {
    var r = e.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = a;
    var s = e.baseQueue, c = r.pending;
    if (c !== null) {
      if (s !== null) {
        var p = s.next;
        s.next = c.next, c.next = p;
      }
      t.baseQueue = s = c, r.pending = null;
    }
    if (c = e.baseState, s === null) e.memoizedState = c;
    else {
      t = s.next;
      var y = p = null, S = null, M = t, R = !1;
      do {
        var B = M.lane & -536870913;
        if (B !== M.lane ? (xe & B) === B : (yn & B) === B) {
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
            }), B === ii && (R = !0);
          else if ((yn & C) === C) {
            M = M.next, C === ii && (R = !0);
            continue;
          } else
            B = {
              lane: 0,
              revertLane: M.revertLane,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }, S === null ? (y = S = B, p = c) : S = S.next = B, ge.lanes |= C, Ln |= C;
          B = M.action, wa && a(c, B), c = M.hasEagerState ? M.eagerState : a(c, B);
        } else
          C = {
            lane: B,
            revertLane: M.revertLane,
            gesture: M.gesture,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          }, S === null ? (y = S = C, p = c) : S = S.next = C, ge.lanes |= B, Ln |= B;
        M = M.next;
      } while (M !== null && M !== t);
      if (S === null ? p = c : S.next = y, !Ot(c, e.memoizedState) && (ot = !0, R && (a = oi, a !== null)))
        throw a;
      e.memoizedState = c, e.baseState = p, e.baseQueue = S, r.lastRenderedState = c;
    }
    return s === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function Gs(e) {
    var t = nt(), a = t.queue;
    if (a === null) throw Error(l(311));
    a.lastRenderedReducer = e;
    var r = a.dispatch, s = a.pending, c = t.memoizedState;
    if (s !== null) {
      a.pending = null;
      var p = s = s.next;
      do
        c = e(c, p.action), p = p.next;
      while (p !== s);
      Ot(c, t.memoizedState) || (ot = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), a.lastRenderedState = c;
    }
    return [c, r];
  }
  function mf(e, t, a) {
    var r = ge, s = nt(), c = Ee;
    if (c) {
      if (a === void 0) throw Error(l(407));
      a = a();
    } else a = t();
    var p = !Ot(
      (He || s).memoizedState,
      a
    );
    if (p && (s.memoizedState = a, ot = !0), s = s.queue, Js(vf.bind(null, r, s, e), [
      e
    ]), s.getSnapshot !== t || p || it !== null && it.memoizedState.tag & 1) {
      if (r.flags |= 2048, di(
        9,
        { destroy: void 0 },
        hf.bind(
          null,
          r,
          s,
          a,
          t
        ),
        null
      ), Le === null) throw Error(l(349));
      c || (yn & 127) !== 0 || pf(r, t, a);
    }
    return a;
  }
  function pf(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ge.updateQueue, t === null ? (t = Tr(), ge.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function hf(e, t, a, r) {
    t.value = a, t.getSnapshot = r, _f(t) && yf(e);
  }
  function vf(e, t, a) {
    return a(function() {
      _f(t) && yf(e);
    });
  }
  function _f(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Ot(e, a);
    } catch {
      return !0;
    }
  }
  function yf(e) {
    var t = ma(e, 2);
    t !== null && Mt(t, e, 2);
  }
  function Qs(e) {
    var t = wt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), wa) {
        rn(!0);
        try {
          a();
        } finally {
          rn(!1);
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
  function gf(e, t, a, r) {
    return e.baseState = a, Vs(
      e,
      He,
      typeof r == "function" ? r : gn
    );
  }
  function dy(e, t, a, r, s) {
    if (Cr(e)) throw Error(l(485));
    if (e = t.action, e !== null) {
      var c = {
        payload: s,
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
      j.T !== null ? a(!0) : c.isTransition = !1, r(c), a = t.pending, a === null ? (c.next = t.pending = c, bf(t, c)) : (c.next = a.next, t.pending = a.next = c);
    }
  }
  function bf(e, t) {
    var a = t.action, r = t.payload, s = e.state;
    if (t.isTransition) {
      var c = j.T, p = {};
      j.T = p;
      try {
        var y = a(s, r), S = j.S;
        S !== null && S(p, y), Sf(e, t, y);
      } catch (M) {
        Ks(e, t, M);
      } finally {
        c !== null && p.types !== null && (c.types = p.types), j.T = c;
      }
    } else
      try {
        c = a(s, r), Sf(e, t, c);
      } catch (M) {
        Ks(e, t, M);
      }
  }
  function Sf(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(r) {
        wf(e, t, r);
      },
      function(r) {
        return Ks(e, t, r);
      }
    ) : wf(e, t, a);
  }
  function wf(e, t, a) {
    t.status = "fulfilled", t.value = a, zf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, bf(e, a)));
  }
  function Ks(e, t, a) {
    var r = e.pending;
    if (e.pending = null, r !== null) {
      r = r.next;
      do
        t.status = "rejected", t.reason = a, zf(t), t = t.next;
      while (t !== r);
    }
    e.action = null;
  }
  function zf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function kf(e, t) {
    return t;
  }
  function xf(e, t) {
    if (Ee) {
      var a = Le.formState;
      if (a !== null) {
        e: {
          var r = ge;
          if (Ee) {
            if (Ve) {
              t: {
                for (var s = Ve, c = Gt; s.nodeType !== 8; ) {
                  if (!c) {
                    s = null;
                    break t;
                  }
                  if (s = Kt(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                c = s.data, s = c === "F!" || c === "F" ? s : null;
              }
              if (s) {
                Ve = Kt(
                  s.nextSibling
                ), r = s.data === "F!";
                break e;
              }
            }
            Rn(r);
          }
          r = !1;
        }
        r && (t = a[0]);
      }
    }
    return a = wt(), a.memoizedState = a.baseState = t, r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kf,
      lastRenderedState: t
    }, a.queue = r, a = Lf.bind(
      null,
      ge,
      r
    ), r.dispatch = a, r = Qs(!1), c = eu.bind(
      null,
      ge,
      !1,
      r.queue
    ), r = wt(), s = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, r.queue = s, a = dy.bind(
      null,
      ge,
      s,
      c,
      a
    ), s.dispatch = a, r.memoizedState = e, [t, a, !1];
  }
  function Tf(e) {
    var t = nt();
    return Af(t, He, e);
  }
  function Af(e, t, a) {
    if (t = Vs(
      e,
      t,
      kf
    )[0], e = Er(gn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var r = oo(t);
      } catch (p) {
        throw p === ri ? yr : p;
      }
    else r = t;
    t = nt();
    var s = t.queue, c = s.dispatch;
    return a !== t.memoizedState && (ge.flags |= 2048, di(
      9,
      { destroy: void 0 },
      fy.bind(null, s, a),
      null
    )), [r, c, e];
  }
  function fy(e, t) {
    e.action = t;
  }
  function Ef(e) {
    var t = nt(), a = He;
    if (a !== null)
      return Af(t, a, e);
    nt(), t = t.memoizedState, a = nt();
    var r = a.queue.dispatch;
    return a.memoizedState = e, [t, r, !1];
  }
  function di(e, t, a, r) {
    return e = { tag: e, create: a, deps: r, inst: t, next: null }, t = ge.updateQueue, t === null && (t = Tr(), ge.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (r = a.next, a.next = e, e.next = r, t.lastEffect = e), e;
  }
  function jf() {
    return nt().memoizedState;
  }
  function jr(e, t, a, r) {
    var s = wt();
    ge.flags |= e, s.memoizedState = di(
      1 | t,
      { destroy: void 0 },
      a,
      r === void 0 ? null : r
    );
  }
  function Mr(e, t, a, r) {
    var s = nt();
    r = r === void 0 ? null : r;
    var c = s.memoizedState.inst;
    He !== null && r !== null && Bs(r, He.memoizedState.deps) ? s.memoizedState = di(t, c, a, r) : (ge.flags |= e, s.memoizedState = di(
      1 | t,
      c,
      a,
      r
    ));
  }
  function Mf(e, t) {
    jr(8390656, 8, e, t);
  }
  function Js(e, t) {
    Mr(2048, 8, e, t);
  }
  function my(e) {
    ge.flags |= 4;
    var t = ge.updateQueue;
    if (t === null)
      t = Tr(), ge.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Cf(e) {
    var t = nt().memoizedState;
    return my({ ref: t, nextImpl: e }), function() {
      if ((De & 2) !== 0) throw Error(l(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Of(e, t) {
    return Mr(4, 2, e, t);
  }
  function Nf(e, t) {
    return Mr(4, 4, e, t);
  }
  function Df(e, t) {
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
  function Rf(e, t, a) {
    a = a != null ? a.concat([e]) : null, Mr(4, 4, Df.bind(null, t, e), a);
  }
  function Ps() {
  }
  function Zf(e, t) {
    var a = nt();
    t = t === void 0 ? null : t;
    var r = a.memoizedState;
    return t !== null && Bs(t, r[1]) ? r[0] : (a.memoizedState = [e, t], e);
  }
  function Uf(e, t) {
    var a = nt();
    t = t === void 0 ? null : t;
    var r = a.memoizedState;
    if (t !== null && Bs(t, r[1]))
      return r[0];
    if (r = e(), wa) {
      rn(!0);
      try {
        e();
      } finally {
        rn(!1);
      }
    }
    return a.memoizedState = [r, t], r;
  }
  function Ws(e, t, a) {
    return a === void 0 || (yn & 1073741824) !== 0 && (xe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Ym(), ge.lanes |= e, Ln |= e, a);
  }
  function Yf(e, t, a, r) {
    return Ot(a, t) ? a : si.current !== null ? (e = Ws(e, a, r), Ot(e, t) || (ot = !0), e) : (yn & 42) === 0 || (yn & 1073741824) !== 0 && (xe & 261930) === 0 ? (ot = !0, e.memoizedState = a) : (e = Ym(), ge.lanes |= e, Ln |= e, t);
  }
  function Bf(e, t, a, r, s) {
    var c = X.p;
    X.p = c !== 0 && 8 > c ? c : 8;
    var p = j.T, y = {};
    j.T = y, eu(e, !1, t, a);
    try {
      var S = s(), M = j.S;
      if (M !== null && M(y, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var R = sy(
          S,
          r
        );
        ro(
          e,
          t,
          R,
          Yt(e)
        );
      } else
        ro(
          e,
          t,
          r,
          Yt(e)
        );
    } catch (B) {
      ro(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        Yt()
      );
    } finally {
      X.p = c, p !== null && y.types !== null && (p.types = y.types), j.T = p;
    }
  }
  function py() {
  }
  function Fs(e, t, a, r) {
    if (e.tag !== 5) throw Error(l(476));
    var s = Hf(e).queue;
    Bf(
      e,
      s,
      t,
      I,
      a === null ? py : function() {
        return Xf(e), a(r);
      }
    );
  }
  function Hf(e) {
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
  function Xf(e) {
    var t = Hf(e);
    t.next === null && (t = e.alternate.memoizedState), ro(
      e,
      t.next.queue,
      {},
      Yt()
    );
  }
  function Is() {
    return mt(ko);
  }
  function $f() {
    return nt().memoizedState;
  }
  function qf() {
    return nt().memoizedState;
  }
  function hy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Yt();
          e = Yn(a);
          var r = Bn(t, e, a);
          r !== null && (Mt(r, t, a), to(r, t, a)), t = { cache: Es() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function vy(e, t, a) {
    var r = Yt();
    a = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Cr(e) ? Vf(t, a) : (a = _s(e, t, a, r), a !== null && (Mt(a, e, r), Gf(a, t, r)));
  }
  function Lf(e, t, a) {
    var r = Yt();
    ro(e, t, a, r);
  }
  function ro(e, t, a, r) {
    var s = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Cr(e)) Vf(t, s);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var p = t.lastRenderedState, y = c(p, a);
          if (s.hasEagerState = !0, s.eagerState = y, Ot(y, p))
            return dr(e, t, s, 0), Le === null && cr(), !1;
        } catch {
        }
      if (a = _s(e, t, s, r), a !== null)
        return Mt(a, e, r), Gf(a, t, r), !0;
    }
    return !1;
  }
  function eu(e, t, a, r) {
    if (r = {
      lane: 2,
      revertLane: Ou(),
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Cr(e)) {
      if (t) throw Error(l(479));
    } else
      t = _s(
        e,
        a,
        r,
        2
      ), t !== null && Mt(t, e, 2);
  }
  function Cr(e) {
    var t = e.alternate;
    return e === ge || t !== null && t === ge;
  }
  function Vf(e, t) {
    ui = kr = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Gf(e, t, a) {
    if ((a & 4194048) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, a |= r, t.lanes = a, Pc(e, a);
    }
  }
  var lo = {
    readContext: mt,
    use: Ar,
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
  lo.useEffectEvent = Pe;
  var Qf = {
    readContext: mt,
    use: Ar,
    useCallback: function(e, t) {
      return wt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: mt,
    useEffect: Mf,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, jr(
        4194308,
        4,
        Df.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return jr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      jr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = wt();
      t = t === void 0 ? null : t;
      var r = e();
      if (wa) {
        rn(!0);
        try {
          e();
        } finally {
          rn(!1);
        }
      }
      return a.memoizedState = [r, t], r;
    },
    useReducer: function(e, t, a) {
      var r = wt();
      if (a !== void 0) {
        var s = a(t);
        if (wa) {
          rn(!0);
          try {
            a(t);
          } finally {
            rn(!1);
          }
        }
      } else s = t;
      return r.memoizedState = r.baseState = s, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      }, r.queue = e, e = e.dispatch = vy.bind(
        null,
        ge,
        e
      ), [r.memoizedState, e];
    },
    useRef: function(e) {
      var t = wt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Qs(e);
      var t = e.queue, a = Lf.bind(null, ge, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Ps,
    useDeferredValue: function(e, t) {
      var a = wt();
      return Ws(a, e, t);
    },
    useTransition: function() {
      var e = Qs(!1);
      return e = Bf.bind(
        null,
        ge,
        e.queue,
        !0,
        !1
      ), wt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var r = ge, s = wt();
      if (Ee) {
        if (a === void 0)
          throw Error(l(407));
        a = a();
      } else {
        if (a = t(), Le === null)
          throw Error(l(349));
        (xe & 127) !== 0 || pf(r, t, a);
      }
      s.memoizedState = a;
      var c = { value: a, getSnapshot: t };
      return s.queue = c, Mf(vf.bind(null, r, c, e), [
        e
      ]), r.flags |= 2048, di(
        9,
        { destroy: void 0 },
        hf.bind(
          null,
          r,
          c,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = wt(), t = Le.identifierPrefix;
      if (Ee) {
        var a = sn, r = ln;
        a = (r & ~(1 << 32 - st(r) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = xr++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = uy++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Is,
    useFormState: xf,
    useActionState: xf,
    useOptimistic: function(e) {
      var t = wt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = eu.bind(
        null,
        ge,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Ls,
    useCacheRefresh: function() {
      return wt().memoizedState = hy.bind(
        null,
        ge
      );
    },
    useEffectEvent: function(e) {
      var t = wt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((De & 2) !== 0)
          throw Error(l(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, tu = {
    readContext: mt,
    use: Ar,
    useCallback: Zf,
    useContext: mt,
    useEffect: Js,
    useImperativeHandle: Rf,
    useInsertionEffect: Of,
    useLayoutEffect: Nf,
    useMemo: Uf,
    useReducer: Er,
    useRef: jf,
    useState: function() {
      return Er(gn);
    },
    useDebugValue: Ps,
    useDeferredValue: function(e, t) {
      var a = nt();
      return Yf(
        a,
        He.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Er(gn)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : oo(e),
        t
      ];
    },
    useSyncExternalStore: mf,
    useId: $f,
    useHostTransitionStatus: Is,
    useFormState: Tf,
    useActionState: Tf,
    useOptimistic: function(e, t) {
      var a = nt();
      return gf(a, He, e, t);
    },
    useMemoCache: Ls,
    useCacheRefresh: qf
  };
  tu.useEffectEvent = Cf;
  var Kf = {
    readContext: mt,
    use: Ar,
    useCallback: Zf,
    useContext: mt,
    useEffect: Js,
    useImperativeHandle: Rf,
    useInsertionEffect: Of,
    useLayoutEffect: Nf,
    useMemo: Uf,
    useReducer: Gs,
    useRef: jf,
    useState: function() {
      return Gs(gn);
    },
    useDebugValue: Ps,
    useDeferredValue: function(e, t) {
      var a = nt();
      return He === null ? Ws(a, e, t) : Yf(
        a,
        He.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Gs(gn)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : oo(e),
        t
      ];
    },
    useSyncExternalStore: mf,
    useId: $f,
    useHostTransitionStatus: Is,
    useFormState: Ef,
    useActionState: Ef,
    useOptimistic: function(e, t) {
      var a = nt();
      return He !== null ? gf(a, He, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Ls,
    useCacheRefresh: qf
  };
  Kf.useEffectEvent = Cf;
  function nu(e, t, a, r) {
    t = e.memoizedState, a = a(r, t), a = a == null ? t : b({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var au = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var r = Yt(), s = Yn(r);
      s.payload = t, a != null && (s.callback = a), t = Bn(e, s, r), t !== null && (Mt(t, e, r), to(t, e, r));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var r = Yt(), s = Yn(r);
      s.tag = 1, s.payload = t, a != null && (s.callback = a), t = Bn(e, s, r), t !== null && (Mt(t, e, r), to(t, e, r));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Yt(), r = Yn(a);
      r.tag = 2, t != null && (r.callback = t), t = Bn(e, r, a), t !== null && (Mt(t, e, a), to(t, e, a));
    }
  };
  function Jf(e, t, a, r, s, c, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, c, p) : t.prototype && t.prototype.isPureReactComponent ? !Qi(a, r) || !Qi(s, c) : !0;
  }
  function Pf(e, t, a, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, r), t.state !== e && au.enqueueReplaceState(t, t.state, null);
  }
  function za(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var r in t)
        r !== "ref" && (a[r] = t[r]);
    }
    if (e = e.defaultProps) {
      a === t && (a = b({}, a));
      for (var s in e)
        a[s] === void 0 && (a[s] = e[s]);
    }
    return a;
  }
  function Wf(e) {
    ur(e);
  }
  function Ff(e) {
    console.error(e);
  }
  function If(e) {
    ur(e);
  }
  function Or(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function em(e, t, a) {
    try {
      var r = e.onCaughtError;
      r(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function iu(e, t, a) {
    return a = Yn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Or(e, t);
    }, a;
  }
  function tm(e) {
    return e = Yn(e), e.tag = 3, e;
  }
  function nm(e, t, a, r) {
    var s = a.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var c = r.value;
      e.payload = function() {
        return s(c);
      }, e.callback = function() {
        em(t, a, r);
      };
    }
    var p = a.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      em(t, a, r), typeof s != "function" && (Vn === null ? Vn = /* @__PURE__ */ new Set([this]) : Vn.add(this));
      var y = r.stack;
      this.componentDidCatch(r.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function _y(e, t, a, r, s) {
    if (a.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (t = a.alternate, t !== null && ai(
        t,
        a,
        s,
        !0
      ), a = Dt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Qt === null ? Lr() : a.alternate === null && We === 0 && (We = 3), a.flags &= -257, a.flags |= 65536, a.lanes = s, r === gr ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), ju(e, r, s)), !1;
          case 22:
            return a.flags |= 65536, r === gr ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([r])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : a.add(r)), ju(e, r, s)), !1;
        }
        throw Error(l(435, a.tag));
      }
      return ju(e, r, s), Lr(), !1;
    }
    if (Ee)
      return t = Dt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, r !== zs && (e = Error(l(422), { cause: r }), Pi(qt(e, a)))) : (r !== zs && (t = Error(l(423), {
        cause: r
      }), Pi(
        qt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, r = qt(r, a), s = iu(
        e.stateNode,
        r,
        s
      ), Ds(e, s), We !== 4 && (We = 2)), !1;
    var c = Error(l(520), { cause: r });
    if (c = qt(c, a), vo === null ? vo = [c] : vo.push(c), We !== 4 && (We = 2), t === null) return !0;
    r = qt(r, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = s & -s, a.lanes |= e, e = iu(a.stateNode, r, e), Ds(a, e), !1;
        case 1:
          if (t = a.type, c = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Vn === null || !Vn.has(c))))
            return a.flags |= 65536, s &= -s, a.lanes |= s, s = tm(s), nm(
              s,
              e,
              a,
              r
            ), Ds(a, s), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ou = Error(l(461)), ot = !1;
  function pt(e, t, a, r) {
    t.child = e === null ? rf(t, null, a, r) : Sa(
      t,
      e.child,
      a,
      r
    );
  }
  function am(e, t, a, r, s) {
    a = a.render;
    var c = t.ref;
    if ("ref" in r) {
      var p = {};
      for (var y in r)
        y !== "ref" && (p[y] = r[y]);
    } else p = r;
    return _a(t), r = Hs(
      e,
      t,
      a,
      p,
      c,
      s
    ), y = Xs(), e !== null && !ot ? ($s(e, t, s), bn(e, t, s)) : (Ee && y && Ss(t), t.flags |= 1, pt(e, t, r, s), t.child);
  }
  function im(e, t, a, r, s) {
    if (e === null) {
      var c = a.type;
      return typeof c == "function" && !ys(c) && c.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = c, om(
        e,
        t,
        c,
        r,
        s
      )) : (e = mr(
        a.type,
        null,
        r,
        t,
        t.mode,
        s
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !mu(e, s)) {
      var p = c.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Qi, a(p, r) && e.ref === t.ref)
        return bn(e, t, s);
    }
    return t.flags |= 1, e = pn(c, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function om(e, t, a, r, s) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Qi(c, r) && e.ref === t.ref)
        if (ot = !1, t.pendingProps = r = c, mu(e, s))
          (e.flags & 131072) !== 0 && (ot = !0);
        else
          return t.lanes = e.lanes, bn(e, t, s);
    }
    return ru(
      e,
      t,
      a,
      r,
      s
    );
  }
  function rm(e, t, a, r) {
    var s = r.children, c = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), r.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | a : a, e !== null) {
          for (r = t.child = e.child, s = 0; r !== null; )
            s = s | r.lanes | r.childLanes, r = r.sibling;
          r = s & ~c;
        } else r = 0, t.child = null;
        return lm(
          e,
          t,
          c,
          a,
          r
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && _r(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? uf(t, c) : Zs(), cf(t);
      else
        return r = t.lanes = 536870912, lm(
          e,
          t,
          c !== null ? c.baseLanes | a : a,
          a,
          r
        );
    } else
      c !== null ? (_r(t, c.cachePool), uf(t, c), Xn(), t.memoizedState = null) : (e !== null && _r(t, null), Zs(), Xn());
    return pt(e, t, s, a), t.child;
  }
  function so(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function lm(e, t, a, r, s) {
    var c = Ms();
    return c = c === null ? null : { parent: at._currentValue, pool: c }, t.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && _r(t, null), Zs(), cf(t), e !== null && ai(e, t, r, !0), t.childLanes = s, null;
  }
  function Nr(e, t) {
    return t = Rr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function sm(e, t, a) {
    return Sa(t, e.child, null, a), e = Nr(t, t.pendingProps), e.flags |= 2, Rt(t), t.memoizedState = null, e;
  }
  function yy(e, t, a) {
    var r = t.pendingProps, s = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ee) {
        if (r.mode === "hidden")
          return e = Nr(t, r), t.lanes = 536870912, so(null, e);
        if (Ys(t), (e = Ve) ? (e = bp(
          e,
          Gt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Nn !== null ? { id: ln, overflow: sn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Ld(e), a.return = t, t.child = a, ft = t, Ve = null)) : e = null, e === null) throw Rn(t);
        return t.lanes = 536870912, null;
      }
      return Nr(t, r);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var p = c.dehydrated;
      if (Ys(t), s)
        if (t.flags & 256)
          t.flags &= -257, t = sm(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(l(558));
      else if (ot || ai(e, t, a, !1), s = (a & e.childLanes) !== 0, ot || s) {
        if (r = Le, r !== null && (p = Wc(r, a), p !== 0 && p !== c.retryLane))
          throw c.retryLane = p, ma(e, p), Mt(r, e, p), ou;
        Lr(), t = sm(
          e,
          t,
          a
        );
      } else
        e = c.treeContext, Ve = Kt(p.nextSibling), ft = t, Ee = !0, Dn = null, Gt = !1, e !== null && Qd(t, e), t = Nr(t, r), t.flags |= 4096;
      return t;
    }
    return e = pn(e.child, {
      mode: r.mode,
      children: r.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Dr(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(l(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function ru(e, t, a, r, s) {
    return _a(t), a = Hs(
      e,
      t,
      a,
      r,
      void 0,
      s
    ), r = Xs(), e !== null && !ot ? ($s(e, t, s), bn(e, t, s)) : (Ee && r && Ss(t), t.flags |= 1, pt(e, t, a, s), t.child);
  }
  function um(e, t, a, r, s, c) {
    return _a(t), t.updateQueue = null, a = ff(
      t,
      r,
      a,
      s
    ), df(e), r = Xs(), e !== null && !ot ? ($s(e, t, c), bn(e, t, c)) : (Ee && r && Ss(t), t.flags |= 1, pt(e, t, a, c), t.child);
  }
  function cm(e, t, a, r, s) {
    if (_a(t), t.stateNode === null) {
      var c = Ia, p = a.contextType;
      typeof p == "object" && p !== null && (c = mt(p)), c = new a(r, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = au, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = r, c.state = t.memoizedState, c.refs = {}, Os(t), p = a.contextType, c.context = typeof p == "object" && p !== null ? mt(p) : Ia, c.state = t.memoizedState, p = a.getDerivedStateFromProps, typeof p == "function" && (nu(
        t,
        a,
        p,
        r
      ), c.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (p = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), p !== c.state && au.enqueueReplaceState(c, c.state, null), ao(t, r, c, s), no(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
    } else if (e === null) {
      c = t.stateNode;
      var y = t.memoizedProps, S = za(a, y);
      c.props = S;
      var M = c.context, R = a.contextType;
      p = Ia, typeof R == "object" && R !== null && (p = mt(R));
      var B = a.getDerivedStateFromProps;
      R = typeof B == "function" || typeof c.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, R || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y || M !== p) && Pf(
        t,
        c,
        r,
        p
      ), Un = !1;
      var C = t.memoizedState;
      c.state = C, ao(t, r, c, s), no(), M = t.memoizedState, y || C !== M || Un ? (typeof B == "function" && (nu(
        t,
        a,
        B,
        r
      ), M = t.memoizedState), (S = Un || Jf(
        t,
        a,
        S,
        r,
        C,
        M,
        p
      )) ? (R || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = M), c.props = r, c.state = M, c.context = p, r = S) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      c = t.stateNode, Ns(e, t), p = t.memoizedProps, R = za(a, p), c.props = R, B = t.pendingProps, C = c.context, M = a.contextType, S = Ia, typeof M == "object" && M !== null && (S = mt(M)), y = a.getDerivedStateFromProps, (M = typeof y == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== B || C !== S) && Pf(
        t,
        c,
        r,
        S
      ), Un = !1, C = t.memoizedState, c.state = C, ao(t, r, c, s), no();
      var O = t.memoizedState;
      p !== B || C !== O || Un || e !== null && e.dependencies !== null && hr(e.dependencies) ? (typeof y == "function" && (nu(
        t,
        a,
        y,
        r
      ), O = t.memoizedState), (R = Un || Jf(
        t,
        a,
        R,
        r,
        C,
        O,
        S
      ) || e !== null && e.dependencies !== null && hr(e.dependencies)) ? (M || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, O, S), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        r,
        O,
        S
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = O), c.props = r, c.state = O, c.context = S, r = R) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return c = r, Dr(e, t), r = (t.flags & 128) !== 0, c || r ? (c = t.stateNode, a = r && typeof a.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && r ? (t.child = Sa(
      t,
      e.child,
      null,
      s
    ), t.child = Sa(
      t,
      null,
      a,
      s
    )) : pt(e, t, a, s), t.memoizedState = c.state, e = t.child) : e = bn(
      e,
      t,
      s
    ), e;
  }
  function dm(e, t, a, r) {
    return ha(), t.flags |= 256, pt(e, t, a, r), t.child;
  }
  var lu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function su(e) {
    return { baseLanes: e, cachePool: Id() };
  }
  function uu(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Ut), e;
  }
  function fm(e, t, a) {
    var r = t.pendingProps, s = !1, c = (t.flags & 128) !== 0, p;
    if ((p = c) || (p = e !== null && e.memoizedState === null ? !1 : (tt.current & 2) !== 0), p && (s = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ee) {
        if (s ? Hn(t) : Xn(), (e = Ve) ? (e = bp(
          e,
          Gt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Nn !== null ? { id: ln, overflow: sn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Ld(e), a.return = t, t.child = a, ft = t, Ve = null)) : e = null, e === null) throw Rn(t);
        return Vu(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var y = r.children;
      return r = r.fallback, s ? (Xn(), s = t.mode, y = Rr(
        { mode: "hidden", children: y },
        s
      ), r = pa(
        r,
        s,
        a,
        null
      ), y.return = t, r.return = t, y.sibling = r, t.child = y, r = t.child, r.memoizedState = su(a), r.childLanes = uu(
        e,
        p,
        a
      ), t.memoizedState = lu, so(null, r)) : (Hn(t), cu(t, y));
    }
    var S = e.memoizedState;
    if (S !== null && (y = S.dehydrated, y !== null)) {
      if (c)
        t.flags & 256 ? (Hn(t), t.flags &= -257, t = du(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Xn(), t.child = e.child, t.flags |= 128, t = null) : (Xn(), y = r.fallback, s = t.mode, r = Rr(
          { mode: "visible", children: r.children },
          s
        ), y = pa(
          y,
          s,
          a,
          null
        ), y.flags |= 2, r.return = t, y.return = t, r.sibling = y, t.child = r, Sa(
          t,
          e.child,
          null,
          a
        ), r = t.child, r.memoizedState = su(a), r.childLanes = uu(
          e,
          p,
          a
        ), t.memoizedState = lu, t = so(null, r));
      else if (Hn(t), Vu(y)) {
        if (p = y.nextSibling && y.nextSibling.dataset, p) var M = p.dgst;
        p = M, r = Error(l(419)), r.stack = "", r.digest = p, Pi({ value: r, source: null, stack: null }), t = du(
          e,
          t,
          a
        );
      } else if (ot || ai(e, t, a, !1), p = (a & e.childLanes) !== 0, ot || p) {
        if (p = Le, p !== null && (r = Wc(p, a), r !== 0 && r !== S.retryLane))
          throw S.retryLane = r, ma(e, r), Mt(p, e, r), ou;
        Lu(y) || Lr(), t = du(
          e,
          t,
          a
        );
      } else
        Lu(y) ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, Ve = Kt(
          y.nextSibling
        ), ft = t, Ee = !0, Dn = null, Gt = !1, e !== null && Qd(t, e), t = cu(
          t,
          r.children
        ), t.flags |= 4096);
      return t;
    }
    return s ? (Xn(), y = r.fallback, s = t.mode, S = e.child, M = S.sibling, r = pn(S, {
      mode: "hidden",
      children: r.children
    }), r.subtreeFlags = S.subtreeFlags & 65011712, M !== null ? y = pn(
      M,
      y
    ) : (y = pa(
      y,
      s,
      a,
      null
    ), y.flags |= 2), y.return = t, r.return = t, r.sibling = y, t.child = r, so(null, r), r = t.child, y = e.child.memoizedState, y === null ? y = su(a) : (s = y.cachePool, s !== null ? (S = at._currentValue, s = s.parent !== S ? { parent: S, pool: S } : s) : s = Id(), y = {
      baseLanes: y.baseLanes | a,
      cachePool: s
    }), r.memoizedState = y, r.childLanes = uu(
      e,
      p,
      a
    ), t.memoizedState = lu, so(e.child, r)) : (Hn(t), a = e.child, e = a.sibling, a = pn(a, {
      mode: "visible",
      children: r.children
    }), a.return = t, a.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function cu(e, t) {
    return t = Rr(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Rr(e, t) {
    return e = Nt(22, e, null, t), e.lanes = 0, e;
  }
  function du(e, t, a) {
    return Sa(t, e.child, null, a), e = cu(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function mm(e, t, a) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ts(e.return, t, a);
  }
  function fu(e, t, a, r, s, c) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: a,
      tailMode: s,
      treeForkCount: c
    } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = r, p.tail = a, p.tailMode = s, p.treeForkCount = c);
  }
  function pm(e, t, a) {
    var r = t.pendingProps, s = r.revealOrder, c = r.tail;
    r = r.children;
    var p = tt.current, y = (p & 2) !== 0;
    if (y ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, Q(tt, p), pt(e, t, r, a), r = Ee ? Ji : 0, !y && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && mm(e, a, t);
        else if (e.tag === 19)
          mm(e, a, t);
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
    switch (s) {
      case "forwards":
        for (a = t.child, s = null; a !== null; )
          e = a.alternate, e !== null && zr(e) === null && (s = a), a = a.sibling;
        a = s, a === null ? (s = t.child, t.child = null) : (s = a.sibling, a.sibling = null), fu(
          t,
          !1,
          s,
          a,
          c,
          r
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && zr(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = a, a = s, s = e;
        }
        fu(
          t,
          !0,
          a,
          null,
          c,
          r
        );
        break;
      case "together":
        fu(
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
  function bn(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Ln |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (ai(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, a = pn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = pn(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function mu(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && hr(e)));
  }
  function gy(e, t, a) {
    switch (t.tag) {
      case 3:
        Ye(t, t.stateNode.containerInfo), Zn(t, at, e.memoizedState.cache), ha();
        break;
      case 27:
      case 5:
        Bt(t);
        break;
      case 4:
        Ye(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, Ys(t), null;
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null)
          return r.dehydrated !== null ? (Hn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? fm(e, t, a) : (Hn(t), e = bn(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Hn(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (r = (a & t.childLanes) !== 0, r || (ai(
          e,
          t,
          a,
          !1
        ), r = (a & t.childLanes) !== 0), s) {
          if (r)
            return pm(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Q(tt, tt.current), r) break;
        return null;
      case 22:
        return t.lanes = 0, rm(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Zn(t, at, e.memoizedState.cache);
    }
    return bn(e, t, a);
  }
  function hm(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ot = !0;
      else {
        if (!mu(e, a) && (t.flags & 128) === 0)
          return ot = !1, gy(
            e,
            t,
            a
          );
        ot = (e.flags & 131072) !== 0;
      }
    else
      ot = !1, Ee && (t.flags & 1048576) !== 0 && Gd(t, Ji, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var r = t.pendingProps;
          if (e = ga(t.elementType), t.type = e, typeof e == "function")
            ys(e) ? (r = za(e, r), t.tag = 1, t = cm(
              null,
              t,
              e,
              r,
              a
            )) : (t.tag = 0, t = ru(
              null,
              t,
              e,
              r,
              a
            ));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === K) {
                t.tag = 11, t = am(
                  null,
                  t,
                  e,
                  r,
                  a
                );
                break e;
              } else if (s === $) {
                t.tag = 14, t = im(
                  null,
                  t,
                  e,
                  r,
                  a
                );
                break e;
              }
            }
            throw t = W(e) || e, Error(l(306, t, ""));
          }
        }
        return t;
      case 0:
        return ru(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return r = t.type, s = za(
          r,
          t.pendingProps
        ), cm(
          e,
          t,
          r,
          s,
          a
        );
      case 3:
        e: {
          if (Ye(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(l(387));
          r = t.pendingProps;
          var c = t.memoizedState;
          s = c.element, Ns(e, t), ao(t, r, null, a);
          var p = t.memoizedState;
          if (r = p.cache, Zn(t, at, r), r !== c.cache && As(
            t,
            [at],
            a,
            !0
          ), no(), r = p.element, c.isDehydrated)
            if (c = {
              element: r,
              isDehydrated: !1,
              cache: p.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = dm(
                e,
                t,
                r,
                a
              );
              break e;
            } else if (r !== s) {
              s = qt(
                Error(l(424)),
                t
              ), Pi(s), t = dm(
                e,
                t,
                r,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ve = Kt(e.firstChild), ft = t, Ee = !0, Dn = null, Gt = !0, a = rf(
                t,
                null,
                r,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (ha(), r === s) {
              t = bn(
                e,
                t,
                a
              );
              break e;
            }
            pt(e, t, r, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Dr(e, t), e === null ? (a = Tp(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Ee || (a = t.type, e = t.pendingProps, r = Wr(
          me.current
        ).createElement(a), r[dt] = t, r[kt] = e, ht(r, a, e), ut(r), t.stateNode = r) : t.memoizedState = Tp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Bt(t), e === null && Ee && (r = t.stateNode = zp(
          t.type,
          t.pendingProps,
          me.current
        ), ft = t, Gt = !0, s = Ve, Jn(t.type) ? (Gu = s, Ve = Kt(r.firstChild)) : Ve = s), pt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Dr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ee && ((s = r = Ve) && (r = Jy(
          r,
          t.type,
          t.pendingProps,
          Gt
        ), r !== null ? (t.stateNode = r, ft = t, Ve = Kt(r.firstChild), Gt = !1, s = !0) : s = !1), s || Rn(t)), Bt(t), s = t.type, c = t.pendingProps, p = e !== null ? e.memoizedProps : null, r = c.children, Xu(s, c) ? r = null : p !== null && Xu(s, p) && (t.flags |= 32), t.memoizedState !== null && (s = Hs(
          e,
          t,
          cy,
          null,
          null,
          a
        ), ko._currentValue = s), Dr(e, t), pt(e, t, r, a), t.child;
      case 6:
        return e === null && Ee && ((e = a = Ve) && (a = Py(
          a,
          t.pendingProps,
          Gt
        ), a !== null ? (t.stateNode = a, ft = t, Ve = null, e = !0) : e = !1), e || Rn(t)), null;
      case 13:
        return fm(e, t, a);
      case 4:
        return Ye(
          t,
          t.stateNode.containerInfo
        ), r = t.pendingProps, e === null ? t.child = Sa(
          t,
          null,
          r,
          a
        ) : pt(e, t, r, a), t.child;
      case 11:
        return am(
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
        return r = t.pendingProps, Zn(t, t.type, r.value), pt(e, t, r.children, a), t.child;
      case 9:
        return s = t.type._context, r = t.pendingProps.children, _a(t), s = mt(s), r = r(s), t.flags |= 1, pt(e, t, r, a), t.child;
      case 14:
        return im(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return om(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return pm(e, t, a);
      case 31:
        return yy(e, t, a);
      case 22:
        return rm(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return _a(t), r = mt(at), e === null ? (s = Ms(), s === null && (s = Le, c = Es(), s.pooledCache = c, c.refCount++, c !== null && (s.pooledCacheLanes |= a), s = c), t.memoizedState = { parent: r, cache: s }, Os(t), Zn(t, at, s)) : ((e.lanes & a) !== 0 && (Ns(e, t), ao(t, null, null, a), no()), s = e.memoizedState, c = t.memoizedState, s.parent !== r ? (s = { parent: r, cache: r }, t.memoizedState = s, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s), Zn(t, at, r)) : (r = c.cache, Zn(t, at, r), r !== s.cache && As(
          t,
          [at],
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
    throw Error(l(156, t.tag));
  }
  function Sn(e) {
    e.flags |= 4;
  }
  function pu(e, t, a, r, s) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (s & 335544128) === s)
        if (e.stateNode.complete) e.flags |= 8192;
        else if ($m()) e.flags |= 8192;
        else
          throw ba = gr, Cs;
    } else e.flags &= -16777217;
  }
  function vm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Cp(t))
      if ($m()) e.flags |= 8192;
      else
        throw ba = gr, Cs;
  }
  function Zr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Kc() : 536870912, e.lanes |= t, hi |= t);
  }
  function uo(e, t) {
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
          for (var r = null; a !== null; )
            a.alternate !== null && (r = a), a = a.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function Ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, r = 0;
    if (t)
      for (var s = e.child; s !== null; )
        a |= s.lanes | s.childLanes, r |= s.subtreeFlags & 65011712, r |= s.flags & 65011712, s.return = e, s = s.sibling;
    else
      for (s = e.child; s !== null; )
        a |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= r, e.childLanes = a, t;
  }
  function by(e, t, a) {
    var r = t.pendingProps;
    switch (ws(t), t.tag) {
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
        return a = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), _n(at), Be(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (ni(t) ? Sn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ks())), Ge(t), null;
      case 26:
        var s = t.type, c = t.memoizedState;
        return e === null ? (Sn(t), c !== null ? (Ge(t), vm(t, c)) : (Ge(t), pu(
          t,
          s,
          null,
          r,
          a
        ))) : c ? c !== e.memoizedState ? (Sn(t), Ge(t), vm(t, c)) : (Ge(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== r && Sn(t), Ge(t), pu(
          t,
          s,
          e,
          r,
          a
        )), null;
      case 27:
        if (Ft(t), a = me.current, s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== r && Sn(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Ge(t), null;
          }
          e = F.current, ni(t) ? Kd(t) : (e = zp(s, r, a), t.stateNode = e, Sn(t));
        }
        return Ge(t), null;
      case 5:
        if (Ft(t), s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== r && Sn(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Ge(t), null;
          }
          if (c = F.current, ni(t))
            Kd(t);
          else {
            var p = Wr(
              me.current
            );
            switch (c) {
              case 1:
                c = p.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                c = p.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    c = p.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    c = p.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    c = p.createElement("div"), c.innerHTML = "<script><\/script>", c = c.removeChild(
                      c.firstChild
                    );
                    break;
                  case "select":
                    c = typeof r.is == "string" ? p.createElement("select", {
                      is: r.is
                    }) : p.createElement("select"), r.multiple ? c.multiple = !0 : r.size && (c.size = r.size);
                    break;
                  default:
                    c = typeof r.is == "string" ? p.createElement(s, { is: r.is }) : p.createElement(s);
                }
            }
            c[dt] = t, c[kt] = r;
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
            e: switch (ht(c, s, r), s) {
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
            r && Sn(t);
          }
        }
        return Ge(t), pu(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== r && Sn(t);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(l(166));
          if (e = me.current, ni(t)) {
            if (e = t.stateNode, a = t.memoizedProps, r = null, s = ft, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  r = s.memoizedProps;
              }
            e[dt] = t, e = !!(e.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || fp(e.nodeValue, a)), e || Rn(t, !0);
          } else
            e = Wr(e).createTextNode(
              r
            ), e[dt] = t, t.stateNode = e;
        }
        return Ge(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (r = ni(t), a !== null) {
            if (e === null) {
              if (!r) throw Error(l(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(557));
              e[dt] = t;
            } else
              ha(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), e = !1;
          } else
            a = ks(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Rt(t), t) : (Rt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(l(558));
        }
        return Ge(t), null;
      case 13:
        if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (s = ni(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(l(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(l(317));
              s[dt] = t;
            } else
              ha(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), s = !1;
          } else
            s = ks(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return t.flags & 256 ? (Rt(t), t) : (Rt(t), null);
        }
        return Rt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = r !== null, e = e !== null && e.memoizedState !== null, a && (r = t.child, s = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (s = r.alternate.memoizedState.cachePool.pool), c = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (c = r.memoizedState.cachePool.pool), c !== s && (r.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Zr(t, t.updateQueue), Ge(t), null);
      case 4:
        return Be(), e === null && Zu(t.stateNode.containerInfo), Ge(t), null;
      case 10:
        return _n(t.type), Ge(t), null;
      case 19:
        if (Z(tt), r = t.memoizedState, r === null) return Ge(t), null;
        if (s = (t.flags & 128) !== 0, c = r.rendering, c === null)
          if (s) uo(r, !1);
          else {
            if (We !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = zr(e), c !== null) {
                  for (t.flags |= 128, uo(r, !1), e = c.updateQueue, t.updateQueue = e, Zr(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    qd(a, e), a = a.sibling;
                  return Q(
                    tt,
                    tt.current & 1 | 2
                  ), Ee && hn(t, r.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            r.tail !== null && bt() > Xr && (t.flags |= 128, s = !0, uo(r, !1), t.lanes = 4194304);
          }
        else {
          if (!s)
            if (e = zr(c), e !== null) {
              if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, Zr(t, e), uo(r, !0), r.tail === null && r.tailMode === "hidden" && !c.alternate && !Ee)
                return Ge(t), null;
            } else
              2 * bt() - r.renderingStartTime > Xr && a !== 536870912 && (t.flags |= 128, s = !0, uo(r, !1), t.lanes = 4194304);
          r.isBackwards ? (c.sibling = t.child, t.child = c) : (e = r.last, e !== null ? e.sibling = c : t.child = c, r.last = c);
        }
        return r.tail !== null ? (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = bt(), e.sibling = null, a = tt.current, Q(
          tt,
          s ? a & 1 | 2 : a & 1
        ), Ee && hn(t, r.treeForkCount), e) : (Ge(t), null);
      case 22:
      case 23:
        return Rt(t), Us(), r = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t), a = t.updateQueue, a !== null && Zr(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== a && (t.flags |= 2048), e !== null && Z(ya), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), _n(at), Ge(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Sy(e, t) {
    switch (ws(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return _n(at), Be(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ft(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Rt(t), t.alternate === null)
            throw Error(l(340));
          ha();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Rt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(l(340));
          ha();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Z(tt), null;
      case 4:
        return Be(), null;
      case 10:
        return _n(t.type), null;
      case 22:
      case 23:
        return Rt(t), Us(), e !== null && Z(ya), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return _n(at), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _m(e, t) {
    switch (ws(t), t.tag) {
      case 3:
        _n(at), Be();
        break;
      case 26:
      case 27:
      case 5:
        Ft(t);
        break;
      case 4:
        Be();
        break;
      case 31:
        t.memoizedState !== null && Rt(t);
        break;
      case 13:
        Rt(t);
        break;
      case 19:
        Z(tt);
        break;
      case 10:
        _n(t.type);
        break;
      case 22:
      case 23:
        Rt(t), Us(), e !== null && Z(ya);
        break;
      case 24:
        _n(at);
    }
  }
  function co(e, t) {
    try {
      var a = t.updateQueue, r = a !== null ? a.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        a = s;
        do {
          if ((a.tag & e) === e) {
            r = void 0;
            var c = a.create, p = a.inst;
            r = c(), p.destroy = r;
          }
          a = a.next;
        } while (a !== s);
      }
    } catch (y) {
      Ue(t, t.return, y);
    }
  }
  function $n(e, t, a) {
    try {
      var r = t.updateQueue, s = r !== null ? r.lastEffect : null;
      if (s !== null) {
        var c = s.next;
        r = c;
        do {
          if ((r.tag & e) === e) {
            var p = r.inst, y = p.destroy;
            if (y !== void 0) {
              p.destroy = void 0, s = t;
              var S = a, M = y;
              try {
                M();
              } catch (R) {
                Ue(
                  s,
                  S,
                  R
                );
              }
            }
          }
          r = r.next;
        } while (r !== c);
      }
    } catch (R) {
      Ue(t, t.return, R);
    }
  }
  function ym(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        sf(t, a);
      } catch (r) {
        Ue(e, e.return, r);
      }
    }
  }
  function gm(e, t, a) {
    a.props = za(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (r) {
      Ue(e, t, r);
    }
  }
  function fo(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
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
        typeof a == "function" ? e.refCleanup = a(r) : a.current = r;
      }
    } catch (s) {
      Ue(e, t, s);
    }
  }
  function un(e, t) {
    var a = e.ref, r = e.refCleanup;
    if (a !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (s) {
          Ue(e, t, s);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (s) {
          Ue(e, t, s);
        }
      else a.current = null;
  }
  function bm(e) {
    var t = e.type, a = e.memoizedProps, r = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && r.focus();
          break e;
        case "img":
          a.src ? r.src = a.src : a.srcSet && (r.srcset = a.srcSet);
      }
    } catch (s) {
      Ue(e, e.return, s);
    }
  }
  function hu(e, t, a) {
    try {
      var r = e.stateNode;
      qy(r, e.type, a, t), r[kt] = t;
    } catch (s) {
      Ue(e, e.return, s);
    }
  }
  function Sm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Jn(e.type) || e.tag === 4;
  }
  function vu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Sm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Jn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function _u(e, t, a) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = fn));
    else if (r !== 4 && (r === 27 && Jn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (_u(e, t, a), e = e.sibling; e !== null; )
        _u(e, t, a), e = e.sibling;
  }
  function Ur(e, t, a) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (r !== 4 && (r === 27 && Jn(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Ur(e, t, a), e = e.sibling; e !== null; )
        Ur(e, t, a), e = e.sibling;
  }
  function wm(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var r = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      ht(t, r, a), t[dt] = e, t[kt] = a;
    } catch (c) {
      Ue(e, e.return, c);
    }
  }
  var wn = !1, rt = !1, yu = !1, zm = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
  function wy(e, t) {
    if (e = e.containerInfo, Bu = il, e = Dd(e), ds(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var r = a.getSelection && a.getSelection();
          if (r && r.rangeCount !== 0) {
            a = r.anchorNode;
            var s = r.anchorOffset, c = r.focusNode;
            r = r.focusOffset;
            try {
              a.nodeType, c.nodeType;
            } catch {
              a = null;
              break e;
            }
            var p = 0, y = -1, S = -1, M = 0, R = 0, B = e, C = null;
            t: for (; ; ) {
              for (var O; B !== a || s !== 0 && B.nodeType !== 3 || (y = p + s), B !== c || r !== 0 && B.nodeType !== 3 || (S = p + r), B.nodeType === 3 && (p += B.nodeValue.length), (O = B.firstChild) !== null; )
                C = B, B = O;
              for (; ; ) {
                if (B === e) break t;
                if (C === a && ++M === s && (y = p), C === c && ++R === r && (S = p), (O = B.nextSibling) !== null) break;
                B = C, C = B.parentNode;
              }
              B = O;
            }
            a = y === -1 || S === -1 ? null : { start: y, end: S };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Hu = { focusedElem: e, selectionRange: a }, il = !1, ct = t; ct !== null; )
      if (t = ct, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ct = e;
      else
        for (; ct !== null; ) {
          switch (t = ct, c = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (a = 0; a < e.length; a++)
                  s = e[a], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                e = void 0, a = t, s = c.memoizedProps, c = c.memoizedState, r = a.stateNode;
                try {
                  var oe = za(
                    a.type,
                    s
                  );
                  e = r.getSnapshotBeforeUpdate(
                    oe,
                    c
                  ), r.__reactInternalSnapshotBeforeUpdate = e;
                } catch (he) {
                  Ue(
                    a,
                    a.return,
                    he
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  qu(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      qu(e);
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
            e.return = t.return, ct = e;
            break;
          }
          ct = t.return;
        }
  }
  function km(e, t, a) {
    var r = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        kn(e, a), r & 4 && co(5, a);
        break;
      case 1:
        if (kn(e, a), r & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (p) {
              Ue(a, a.return, p);
            }
          else {
            var s = za(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                s,
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
        r & 64 && ym(a), r & 512 && fo(a, a.return);
        break;
      case 3:
        if (kn(e, a), r & 64 && (e = a.updateQueue, e !== null)) {
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
            sf(e, t);
          } catch (p) {
            Ue(a, a.return, p);
          }
        }
        break;
      case 27:
        t === null && r & 4 && wm(a);
      case 26:
      case 5:
        kn(e, a), t === null && r & 4 && bm(a), r & 512 && fo(a, a.return);
        break;
      case 12:
        kn(e, a);
        break;
      case 31:
        kn(e, a), r & 4 && Am(e, a);
        break;
      case 13:
        kn(e, a), r & 4 && Em(e, a), r & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Cy.bind(
          null,
          a
        ), Wy(e, a))));
        break;
      case 22:
        if (r = a.memoizedState !== null || wn, !r) {
          t = t !== null && t.memoizedState !== null || rt, s = wn;
          var c = rt;
          wn = r, (rt = t) && !c ? xn(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : kn(e, a), wn = s, rt = c;
        }
        break;
      case 30:
        break;
      default:
        kn(e, a);
    }
  }
  function xm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, xm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Kl(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Qe = null, Tt = !1;
  function zn(e, t, a) {
    for (a = a.child; a !== null; )
      Tm(e, t, a), a = a.sibling;
  }
  function Tm(e, t, a) {
    if (St && typeof St.onCommitFiberUnmount == "function")
      try {
        St.onCommitFiberUnmount(sa, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        rt || un(a, t), zn(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        rt || un(a, t);
        var r = Qe, s = Tt;
        Jn(a.type) && (Qe = a.stateNode, Tt = !1), zn(
          e,
          t,
          a
        ), So(a.stateNode), Qe = r, Tt = s;
        break;
      case 5:
        rt || un(a, t);
      case 6:
        if (r = Qe, s = Tt, Qe = null, zn(
          e,
          t,
          a
        ), Qe = r, Tt = s, Qe !== null)
          if (Tt)
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
        Qe !== null && (Tt ? (e = Qe, yp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), zi(e)) : yp(Qe, a.stateNode));
        break;
      case 4:
        r = Qe, s = Tt, Qe = a.stateNode.containerInfo, Tt = !0, zn(
          e,
          t,
          a
        ), Qe = r, Tt = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        $n(2, a, t), rt || $n(4, a, t), zn(
          e,
          t,
          a
        );
        break;
      case 1:
        rt || (un(a, t), r = a.stateNode, typeof r.componentWillUnmount == "function" && gm(
          a,
          t,
          r
        )), zn(
          e,
          t,
          a
        );
        break;
      case 21:
        zn(
          e,
          t,
          a
        );
        break;
      case 22:
        rt = (r = rt) || a.memoizedState !== null, zn(
          e,
          t,
          a
        ), rt = r;
        break;
      default:
        zn(
          e,
          t,
          a
        );
    }
  }
  function Am(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        zi(e);
      } catch (a) {
        Ue(t, t.return, a);
      }
    }
  }
  function Em(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        zi(e);
      } catch (a) {
        Ue(t, t.return, a);
      }
  }
  function zy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new zm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new zm()), t;
      default:
        throw Error(l(435, e.tag));
    }
  }
  function Yr(e, t) {
    var a = zy(e);
    t.forEach(function(r) {
      if (!a.has(r)) {
        a.add(r);
        var s = Oy.bind(null, e, r);
        r.then(s, s);
      }
    });
  }
  function At(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var s = a[r], c = e, p = t, y = p;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Jn(y.type)) {
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
        Tm(c, p, s), Qe = null, Tt = !1, c = s.alternate, c !== null && (c.return = null), s.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        jm(t, e), t = t.sibling;
  }
  var en = null;
  function jm(e, t) {
    var a = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        At(t, e), Et(e), r & 4 && ($n(3, e, e.return), co(3, e), $n(5, e, e.return));
        break;
      case 1:
        At(t, e), Et(e), r & 512 && (rt || a === null || un(a, a.return)), r & 64 && wn && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? r : a.concat(r))));
        break;
      case 26:
        var s = en;
        if (At(t, e), Et(e), r & 512 && (rt || a === null || un(a, a.return)), r & 4) {
          var c = a !== null ? a.memoizedState : null;
          if (r = e.memoizedState, a === null)
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  r = e.type, a = e.memoizedProps, s = s.ownerDocument || s;
                  t: switch (r) {
                    case "title":
                      c = s.getElementsByTagName("title")[0], (!c || c[Yi] || c[dt] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = s.createElement(r), s.head.insertBefore(
                        c,
                        s.querySelector("head > title")
                      )), ht(c, r, a), c[dt] = e, ut(c), r = c;
                      break e;
                    case "link":
                      var p = jp(
                        "link",
                        "href",
                        s
                      ).get(r + (a.href || ""));
                      if (p) {
                        for (var y = 0; y < p.length; y++)
                          if (c = p[y], c.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            p.splice(y, 1);
                            break t;
                          }
                      }
                      c = s.createElement(r), ht(c, r, a), s.head.appendChild(c);
                      break;
                    case "meta":
                      if (p = jp(
                        "meta",
                        "content",
                        s
                      ).get(r + (a.content || ""))) {
                        for (y = 0; y < p.length; y++)
                          if (c = p[y], c.getAttribute("content") === (a.content == null ? null : "" + a.content) && c.getAttribute("name") === (a.name == null ? null : a.name) && c.getAttribute("property") === (a.property == null ? null : a.property) && c.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && c.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            p.splice(y, 1);
                            break t;
                          }
                      }
                      c = s.createElement(r), ht(c, r, a), s.head.appendChild(c);
                      break;
                    default:
                      throw Error(l(468, r));
                  }
                  c[dt] = e, ut(c), r = c;
                }
                e.stateNode = r;
              } else
                Mp(
                  s,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Ep(
                s,
                r,
                e.memoizedProps
              );
          else
            c !== r ? (c === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : c.count--, r === null ? Mp(
              s,
              e.type,
              e.stateNode
            ) : Ep(
              s,
              r,
              e.memoizedProps
            )) : r === null && e.stateNode !== null && hu(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        At(t, e), Et(e), r & 512 && (rt || a === null || un(a, a.return)), a !== null && r & 4 && hu(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (At(t, e), Et(e), r & 512 && (rt || a === null || un(a, a.return)), e.flags & 32) {
          s = e.stateNode;
          try {
            Ga(s, "");
          } catch (oe) {
            Ue(e, e.return, oe);
          }
        }
        r & 4 && e.stateNode != null && (s = e.memoizedProps, hu(
          e,
          s,
          a !== null ? a.memoizedProps : s
        )), r & 1024 && (yu = !0);
        break;
      case 6:
        if (At(t, e), Et(e), r & 4) {
          if (e.stateNode === null)
            throw Error(l(162));
          r = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = r;
          } catch (oe) {
            Ue(e, e.return, oe);
          }
        }
        break;
      case 3:
        if (el = null, s = en, en = Fr(t.containerInfo), At(t, e), en = s, Et(e), r & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            zi(t.containerInfo);
          } catch (oe) {
            Ue(e, e.return, oe);
          }
        yu && (yu = !1, Mm(e));
        break;
      case 4:
        r = en, en = Fr(
          e.stateNode.containerInfo
        ), At(t, e), Et(e), en = r;
        break;
      case 12:
        At(t, e), Et(e);
        break;
      case 31:
        At(t, e), Et(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Yr(e, r)));
        break;
      case 13:
        At(t, e), Et(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Hr = bt()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Yr(e, r)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var S = a !== null && a.memoizedState !== null, M = wn, R = rt;
        if (wn = M || s, rt = R || S, At(t, e), rt = R, wn = M, Et(e), r & 8192)
          e: for (t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, s && (a === null || S || wn || rt || ka(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                S = a = t;
                try {
                  if (c = S.stateNode, s)
                    p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    y = S.stateNode;
                    var B = S.memoizedProps.style, C = B != null && B.hasOwnProperty("display") ? B.display : null;
                    y.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (oe) {
                  Ue(S, S.return, oe);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (oe) {
                  Ue(S, S.return, oe);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                S = t;
                try {
                  var O = S.stateNode;
                  s ? gp(O, !0) : gp(S.stateNode, !1);
                } catch (oe) {
                  Ue(S, S.return, oe);
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
        r & 4 && (r = e.updateQueue, r !== null && (a = r.retryQueue, a !== null && (r.retryQueue = null, Yr(e, a))));
        break;
      case 19:
        At(t, e), Et(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Yr(e, r)));
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
        for (var a, r = e.return; r !== null; ) {
          if (Sm(r)) {
            a = r;
            break;
          }
          r = r.return;
        }
        if (a == null) throw Error(l(160));
        switch (a.tag) {
          case 27:
            var s = a.stateNode, c = vu(e);
            Ur(e, c, s);
            break;
          case 5:
            var p = a.stateNode;
            a.flags & 32 && (Ga(p, ""), a.flags &= -33);
            var y = vu(e);
            Ur(e, y, p);
            break;
          case 3:
          case 4:
            var S = a.stateNode.containerInfo, M = vu(e);
            _u(
              e,
              M,
              S
            );
            break;
          default:
            throw Error(l(161));
        }
      } catch (R) {
        Ue(e, e.return, R);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Mm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Mm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function kn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        km(e, t.alternate, t), t = t.sibling;
  }
  function ka(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $n(4, t, t.return), ka(t);
          break;
        case 1:
          un(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && gm(
            t,
            t.return,
            a
          ), ka(t);
          break;
        case 27:
          So(t.stateNode);
        case 26:
        case 5:
          un(t, t.return), ka(t);
          break;
        case 22:
          t.memoizedState === null && ka(t);
          break;
        case 30:
          ka(t);
          break;
        default:
          ka(t);
      }
      e = e.sibling;
    }
  }
  function xn(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var r = t.alternate, s = e, c = t, p = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          xn(
            s,
            c,
            a
          ), co(4, c);
          break;
        case 1:
          if (xn(
            s,
            c,
            a
          ), r = c, s = r.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (M) {
              Ue(r, r.return, M);
            }
          if (r = c, s = r.updateQueue, s !== null) {
            var y = r.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  lf(S[s], y);
            } catch (M) {
              Ue(r, r.return, M);
            }
          }
          a && p & 64 && ym(c), fo(c, c.return);
          break;
        case 27:
          wm(c);
        case 26:
        case 5:
          xn(
            s,
            c,
            a
          ), a && r === null && p & 4 && bm(c), fo(c, c.return);
          break;
        case 12:
          xn(
            s,
            c,
            a
          );
          break;
        case 31:
          xn(
            s,
            c,
            a
          ), a && p & 4 && Am(s, c);
          break;
        case 13:
          xn(
            s,
            c,
            a
          ), a && p & 4 && Em(s, c);
          break;
        case 22:
          c.memoizedState === null && xn(
            s,
            c,
            a
          ), fo(c, c.return);
          break;
        case 30:
          break;
        default:
          xn(
            s,
            c,
            a
          );
      }
      t = t.sibling;
    }
  }
  function gu(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Wi(a));
  }
  function bu(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Wi(e));
  }
  function tn(e, t, a, r) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Cm(
          e,
          t,
          a,
          r
        ), t = t.sibling;
  }
  function Cm(e, t, a, r) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        tn(
          e,
          t,
          a,
          r
        ), s & 2048 && co(9, t);
        break;
      case 1:
        tn(
          e,
          t,
          a,
          r
        );
        break;
      case 3:
        tn(
          e,
          t,
          a,
          r
        ), s & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Wi(e)));
        break;
      case 12:
        if (s & 2048) {
          tn(
            e,
            t,
            a,
            r
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
          tn(
            e,
            t,
            a,
            r
          );
        break;
      case 31:
        tn(
          e,
          t,
          a,
          r
        );
        break;
      case 13:
        tn(
          e,
          t,
          a,
          r
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, p = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? tn(
          e,
          t,
          a,
          r
        ) : mo(e, t) : c._visibility & 2 ? tn(
          e,
          t,
          a,
          r
        ) : (c._visibility |= 2, fi(
          e,
          t,
          a,
          r,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && gu(p, t);
        break;
      case 24:
        tn(
          e,
          t,
          a,
          r
        ), s & 2048 && bu(t.alternate, t);
        break;
      default:
        tn(
          e,
          t,
          a,
          r
        );
    }
  }
  function fi(e, t, a, r, s) {
    for (s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var c = e, p = t, y = a, S = r, M = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          fi(
            c,
            p,
            y,
            S,
            s
          ), co(8, p);
          break;
        case 23:
          break;
        case 22:
          var R = p.stateNode;
          p.memoizedState !== null ? R._visibility & 2 ? fi(
            c,
            p,
            y,
            S,
            s
          ) : mo(
            c,
            p
          ) : (R._visibility |= 2, fi(
            c,
            p,
            y,
            S,
            s
          )), s && M & 2048 && gu(
            p.alternate,
            p
          );
          break;
        case 24:
          fi(
            c,
            p,
            y,
            S,
            s
          ), s && M & 2048 && bu(p.alternate, p);
          break;
        default:
          fi(
            c,
            p,
            y,
            S,
            s
          );
      }
      t = t.sibling;
    }
  }
  function mo(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, r = t, s = r.flags;
        switch (r.tag) {
          case 22:
            mo(a, r), s & 2048 && gu(
              r.alternate,
              r
            );
            break;
          case 24:
            mo(a, r), s & 2048 && bu(r.alternate, r);
            break;
          default:
            mo(a, r);
        }
        t = t.sibling;
      }
  }
  var po = 8192;
  function mi(e, t, a) {
    if (e.subtreeFlags & po)
      for (e = e.child; e !== null; )
        Om(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function Om(e, t, a) {
    switch (e.tag) {
      case 26:
        mi(
          e,
          t,
          a
        ), e.flags & po && e.memoizedState !== null && ug(
          a,
          en,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        mi(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var r = en;
        en = Fr(e.stateNode.containerInfo), mi(
          e,
          t,
          a
        ), en = r;
        break;
      case 22:
        e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = po, po = 16777216, mi(
          e,
          t,
          a
        ), po = r) : mi(
          e,
          t,
          a
        ));
        break;
      default:
        mi(
          e,
          t,
          a
        );
    }
  }
  function Nm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ho(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var r = t[a];
          ct = r, Rm(
            r,
            e
          );
        }
      Nm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Dm(e), e = e.sibling;
  }
  function Dm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ho(e), e.flags & 2048 && $n(9, e, e.return);
        break;
      case 3:
        ho(e);
        break;
      case 12:
        ho(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Br(e)) : ho(e);
        break;
      default:
        ho(e);
    }
  }
  function Br(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var r = t[a];
          ct = r, Rm(
            r,
            e
          );
        }
      Nm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          $n(8, t, t.return), Br(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Br(t));
          break;
        default:
          Br(t);
      }
      e = e.sibling;
    }
  }
  function Rm(e, t) {
    for (; ct !== null; ) {
      var a = ct;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          $n(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var r = a.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          Wi(a.memoizedState.cache);
      }
      if (r = a.child, r !== null) r.return = a, ct = r;
      else
        e: for (a = e; ct !== null; ) {
          r = ct;
          var s = r.sibling, c = r.return;
          if (xm(r), r === a) {
            ct = null;
            break e;
          }
          if (s !== null) {
            s.return = c, ct = s;
            break e;
          }
          ct = c;
        }
    }
  }
  var ky = {
    getCacheForType: function(e) {
      var t = mt(at), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return mt(at).controller.signal;
    }
  }, xy = typeof WeakMap == "function" ? WeakMap : Map, De = 0, Le = null, we = null, xe = 0, Ze = 0, Zt = null, qn = !1, pi = !1, Su = !1, Tn = 0, We = 0, Ln = 0, xa = 0, wu = 0, Ut = 0, hi = 0, vo = null, jt = null, zu = !1, Hr = 0, Zm = 0, Xr = 1 / 0, $r = null, Vn = null, lt = 0, Gn = null, vi = null, An = 0, ku = 0, xu = null, Um = null, _o = 0, Tu = null;
  function Yt() {
    return (De & 2) !== 0 && xe !== 0 ? xe & -xe : j.T !== null ? Ou() : Fc();
  }
  function Ym() {
    if (Ut === 0)
      if ((xe & 536870912) === 0 || Ee) {
        var e = H;
        H <<= 1, (H & 3932160) === 0 && (H = 262144), Ut = e;
      } else Ut = 536870912;
    return e = Dt.current, e !== null && (e.flags |= 32), Ut;
  }
  function Mt(e, t, a) {
    (e === Le && (Ze === 2 || Ze === 9) || e.cancelPendingCommit !== null) && (_i(e, 0), Qn(
      e,
      xe,
      Ut,
      !1
    )), Ui(e, a), ((De & 2) === 0 || e !== Le) && (e === Le && ((De & 2) === 0 && (xa |= a), We === 4 && Qn(
      e,
      xe,
      Ut,
      !1
    )), cn(e));
  }
  function Bm(e, t, a) {
    if ((De & 6) !== 0) throw Error(l(327));
    var r = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Zi(e, t), s = r ? Ey(e, t) : Eu(e, t, !0), c = r;
    do {
      if (s === 0) {
        pi && !r && Qn(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, c && !Ty(a)) {
          s = Eu(e, t, !1), c = !1;
          continue;
        }
        if (s === 2) {
          if (c = t, e.errorRecoveryDisabledLanes & c)
            var p = 0;
          else
            p = e.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
          if (p !== 0) {
            t = p;
            e: {
              var y = e;
              s = vo;
              var S = y.current.memoizedState.isDehydrated;
              if (S && (_i(y, p).flags |= 256), p = Eu(
                y,
                p,
                !1
              ), p !== 2) {
                if (Su && !S) {
                  y.errorRecoveryDisabledLanes |= c, xa |= c, s = 4;
                  break e;
                }
                c = jt, jt = s, c !== null && (jt === null ? jt = c : jt.push.apply(
                  jt,
                  c
                ));
              }
              s = p;
            }
            if (c = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          _i(e, 0), Qn(e, t, 0, !0);
          break;
        }
        e: {
          switch (r = e, c = s, c) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Qn(
                r,
                t,
                Ut,
                !qn
              );
              break e;
            case 2:
              jt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((t & 62914560) === t && (s = Hr + 300 - bt(), 10 < s)) {
            if (Qn(
              r,
              t,
              Ut,
              !qn
            ), et(r, 0, !0) !== 0) break e;
            An = t, r.timeoutHandle = vp(
              Hm.bind(
                null,
                r,
                a,
                jt,
                $r,
                zu,
                t,
                Ut,
                xa,
                hi,
                qn,
                c,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          Hm(
            r,
            a,
            jt,
            $r,
            zu,
            t,
            Ut,
            xa,
            hi,
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
    cn(e);
  }
  function Hm(e, t, a, r, s, c, p, y, S, M, R, B, C, O) {
    if (e.timeoutHandle = -1, B = t.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
      B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: fn
      }, Om(
        t,
        c,
        B
      );
      var oe = (c & 62914560) === c ? Hr - bt() : (c & 4194048) === c ? Zm - bt() : 0;
      if (oe = cg(
        B,
        oe
      ), oe !== null) {
        An = c, e.cancelPendingCommit = oe(
          Km.bind(
            null,
            e,
            t,
            c,
            a,
            r,
            s,
            p,
            y,
            S,
            R,
            B,
            null,
            C,
            O
          )
        ), Qn(e, c, p, !M);
        return;
      }
    }
    Km(
      e,
      t,
      c,
      a,
      r,
      s,
      p,
      y,
      S
    );
  }
  function Ty(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var r = 0; r < a.length; r++) {
          var s = a[r], c = s.getSnapshot;
          s = s.value;
          try {
            if (!Ot(c(), s)) return !1;
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
  function Qn(e, t, a, r) {
    t &= ~wu, t &= ~xa, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
    for (var s = t; 0 < s; ) {
      var c = 31 - st(s), p = 1 << c;
      r[c] = -1, s &= ~p;
    }
    a !== 0 && Jc(e, a, t);
  }
  function qr() {
    return (De & 6) === 0 ? (yo(0), !1) : !0;
  }
  function Au() {
    if (we !== null) {
      if (Ze === 0)
        var e = we.return;
      else
        e = we, vn = va = null, qs(e), li = null, Ii = 0, e = we;
      for (; e !== null; )
        _m(e.alternate, e), e = e.return;
      we = null;
    }
  }
  function _i(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, Gy(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), An = 0, Au(), Le = e, we = a = pn(e.current, null), xe = t, Ze = 0, Zt = null, qn = !1, pi = Zi(e, t), Su = !1, hi = Ut = wu = xa = Ln = We = 0, jt = vo = null, zu = !1, (t & 8) !== 0 && (t |= t & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var s = 31 - st(r), c = 1 << s;
        t |= e[s], r &= ~c;
      }
    return Tn = t, cr(), a;
  }
  function Xm(e, t) {
    ge = null, j.H = lo, t === ri || t === yr ? (t = nf(), Ze = 3) : t === Cs ? (t = nf(), Ze = 4) : Ze = t === ou ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Zt = t, we === null && (We = 1, Or(
      e,
      qt(t, e.current)
    ));
  }
  function $m() {
    var e = Dt.current;
    return e === null ? !0 : (xe & 4194048) === xe ? Qt === null : (xe & 62914560) === xe || (xe & 536870912) !== 0 ? e === Qt : !1;
  }
  function qm() {
    var e = j.H;
    return j.H = lo, e === null ? lo : e;
  }
  function Lm() {
    var e = j.A;
    return j.A = ky, e;
  }
  function Lr() {
    We = 4, qn || (xe & 4194048) !== xe && Dt.current !== null || (pi = !0), (Ln & 134217727) === 0 && (xa & 134217727) === 0 || Le === null || Qn(
      Le,
      xe,
      Ut,
      !1
    );
  }
  function Eu(e, t, a) {
    var r = De;
    De |= 2;
    var s = qm(), c = Lm();
    (Le !== e || xe !== t) && ($r = null, _i(e, t)), t = !1;
    var p = We;
    e: do
      try {
        if (Ze !== 0 && we !== null) {
          var y = we, S = Zt;
          switch (Ze) {
            case 8:
              Au(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Dt.current === null && (t = !0);
              var M = Ze;
              if (Ze = 0, Zt = null, yi(e, y, S, M), a && pi) {
                p = 0;
                break e;
              }
              break;
            default:
              M = Ze, Ze = 0, Zt = null, yi(e, y, S, M);
          }
        }
        Ay(), p = We;
        break;
      } catch (R) {
        Xm(e, R);
      }
    while (!0);
    return t && e.shellSuspendCounter++, vn = va = null, De = r, j.H = s, j.A = c, we === null && (Le = null, xe = 0, cr()), p;
  }
  function Ay() {
    for (; we !== null; ) Vm(we);
  }
  function Ey(e, t) {
    var a = De;
    De |= 2;
    var r = qm(), s = Lm();
    Le !== e || xe !== t ? ($r = null, Xr = bt() + 500, _i(e, t)) : pi = Zi(
      e,
      t
    );
    e: do
      try {
        if (Ze !== 0 && we !== null) {
          t = we;
          var c = Zt;
          t: switch (Ze) {
            case 1:
              Ze = 0, Zt = null, yi(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (ef(c)) {
                Ze = 0, Zt = null, Gm(t);
                break;
              }
              t = function() {
                Ze !== 2 && Ze !== 9 || Le !== e || (Ze = 7), cn(e);
              }, c.then(t, t);
              break e;
            case 3:
              Ze = 7;
              break e;
            case 4:
              Ze = 5;
              break e;
            case 7:
              ef(c) ? (Ze = 0, Zt = null, Gm(t)) : (Ze = 0, Zt = null, yi(e, t, c, 7));
              break;
            case 5:
              var p = null;
              switch (we.tag) {
                case 26:
                  p = we.memoizedState;
                case 5:
                case 27:
                  var y = we;
                  if (p ? Cp(p) : y.stateNode.complete) {
                    Ze = 0, Zt = null;
                    var S = y.sibling;
                    if (S !== null) we = S;
                    else {
                      var M = y.return;
                      M !== null ? (we = M, Vr(M)) : we = null;
                    }
                    break t;
                  }
              }
              Ze = 0, Zt = null, yi(e, t, c, 5);
              break;
            case 6:
              Ze = 0, Zt = null, yi(e, t, c, 6);
              break;
            case 8:
              Au(), We = 6;
              break e;
            default:
              throw Error(l(462));
          }
        }
        jy();
        break;
      } catch (R) {
        Xm(e, R);
      }
    while (!0);
    return vn = va = null, j.H = r, j.A = s, De = a, we !== null ? 0 : (Le = null, xe = 0, cr(), We);
  }
  function jy() {
    for (; we !== null && !Yl(); )
      Vm(we);
  }
  function Vm(e) {
    var t = hm(e.alternate, e, Tn);
    e.memoizedProps = e.pendingProps, t === null ? Vr(e) : we = t;
  }
  function Gm(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = um(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          xe
        );
        break;
      case 11:
        t = um(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          xe
        );
        break;
      case 5:
        qs(t);
      default:
        _m(a, t), t = we = qd(t, Tn), t = hm(a, t, Tn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Vr(e) : we = t;
  }
  function yi(e, t, a, r) {
    vn = va = null, qs(t), li = null, Ii = 0;
    var s = t.return;
    try {
      if (_y(
        e,
        s,
        t,
        a,
        xe
      )) {
        We = 1, Or(
          e,
          qt(a, e.current)
        ), we = null;
        return;
      }
    } catch (c) {
      if (s !== null) throw we = s, c;
      We = 1, Or(
        e,
        qt(a, e.current)
      ), we = null;
      return;
    }
    t.flags & 32768 ? (Ee || r === 1 ? e = !0 : pi || (xe & 536870912) !== 0 ? e = !1 : (qn = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Dt.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Qm(t, e)) : Vr(t);
  }
  function Vr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Qm(
          t,
          qn
        );
        return;
      }
      e = t.return;
      var a = by(
        t.alternate,
        t,
        Tn
      );
      if (a !== null) {
        we = a;
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
  function Qm(e, t) {
    do {
      var a = Sy(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, we = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        we = e;
        return;
      }
      we = e = a;
    } while (e !== null);
    We = 6, we = null;
  }
  function Km(e, t, a, r, s, c, p, y, S) {
    e.cancelPendingCommit = null;
    do
      Gr();
    while (lt !== 0);
    if ((De & 6) !== 0) throw Error(l(327));
    if (t !== null) {
      if (t === e.current) throw Error(l(177));
      if (c = t.lanes | t.childLanes, c |= vs, s_(
        e,
        a,
        c,
        p,
        y,
        S
      ), e === Le && (we = Le = null, xe = 0), vi = t, Gn = e, An = a, ku = c, xu = s, Um = r, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ny(Ya, function() {
        return Im(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || r) {
        r = j.T, j.T = null, s = X.p, X.p = 2, p = De, De |= 4;
        try {
          wy(e, t, a);
        } finally {
          De = p, X.p = s, j.T = r;
        }
      }
      lt = 1, Jm(), Pm(), Wm();
    }
  }
  function Jm() {
    if (lt === 1) {
      lt = 0;
      var e = Gn, t = vi, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = j.T, j.T = null;
        var r = X.p;
        X.p = 2;
        var s = De;
        De |= 4;
        try {
          jm(t, e);
          var c = Hu, p = Dd(e.containerInfo), y = c.focusedElem, S = c.selectionRange;
          if (p !== y && y && y.ownerDocument && Nd(
            y.ownerDocument.documentElement,
            y
          )) {
            if (S !== null && ds(y)) {
              var M = S.start, R = S.end;
              if (R === void 0 && (R = M), "selectionStart" in y)
                y.selectionStart = M, y.selectionEnd = Math.min(
                  R,
                  y.value.length
                );
              else {
                var B = y.ownerDocument || document, C = B && B.defaultView || window;
                if (C.getSelection) {
                  var O = C.getSelection(), oe = y.textContent.length, he = Math.min(S.start, oe), $e = S.end === void 0 ? he : Math.min(S.end, oe);
                  !O.extend && he > $e && (p = $e, $e = he, he = p);
                  var x = Od(
                    y,
                    he
                  ), z = Od(
                    y,
                    $e
                  );
                  if (x && z && (O.rangeCount !== 1 || O.anchorNode !== x.node || O.anchorOffset !== x.offset || O.focusNode !== z.node || O.focusOffset !== z.offset)) {
                    var E = B.createRange();
                    E.setStart(x.node, x.offset), O.removeAllRanges(), he > $e ? (O.addRange(E), O.extend(z.node, z.offset)) : (E.setEnd(z.node, z.offset), O.addRange(E));
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
          il = !!Bu, Hu = Bu = null;
        } finally {
          De = s, X.p = r, j.T = a;
        }
      }
      e.current = t, lt = 2;
    }
  }
  function Pm() {
    if (lt === 2) {
      lt = 0;
      var e = Gn, t = vi, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = j.T, j.T = null;
        var r = X.p;
        X.p = 2;
        var s = De;
        De |= 4;
        try {
          km(e, t.alternate, t);
        } finally {
          De = s, X.p = r, j.T = a;
        }
      }
      lt = 3;
    }
  }
  function Wm() {
    if (lt === 4 || lt === 3) {
      lt = 0, Jo();
      var e = Gn, t = vi, a = An, r = Um;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? lt = 5 : (lt = 0, vi = Gn = null, Fm(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (s === 0 && (Vn = null), Gl(a), t = t.stateNode, St && typeof St.onCommitFiberRoot == "function")
        try {
          St.onCommitFiberRoot(
            sa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (r !== null) {
        t = j.T, s = X.p, X.p = 2, j.T = null;
        try {
          for (var c = e.onRecoverableError, p = 0; p < r.length; p++) {
            var y = r[p];
            c(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          j.T = t, X.p = s;
        }
      }
      (An & 3) !== 0 && Gr(), cn(e), s = e.pendingLanes, (a & 261930) !== 0 && (s & 42) !== 0 ? e === Tu ? _o++ : (_o = 0, Tu = e) : _o = 0, yo(0);
    }
  }
  function Fm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Wi(t)));
  }
  function Gr() {
    return Jm(), Pm(), Wm(), Im();
  }
  function Im() {
    if (lt !== 5) return !1;
    var e = Gn, t = ku;
    ku = 0;
    var a = Gl(An), r = j.T, s = X.p;
    try {
      X.p = 32 > a ? 32 : a, j.T = null, a = xu, xu = null;
      var c = Gn, p = An;
      if (lt = 0, vi = Gn = null, An = 0, (De & 6) !== 0) throw Error(l(331));
      var y = De;
      if (De |= 4, Dm(c.current), Cm(
        c,
        c.current,
        p,
        a
      ), De = y, yo(0, !1), St && typeof St.onPostCommitFiberRoot == "function")
        try {
          St.onPostCommitFiberRoot(sa, c);
        } catch {
        }
      return !0;
    } finally {
      X.p = s, j.T = r, Fm(e, t);
    }
  }
  function ep(e, t, a) {
    t = qt(a, t), t = iu(e.stateNode, t, 2), e = Bn(e, t, 2), e !== null && (Ui(e, 2), cn(e));
  }
  function Ue(e, t, a) {
    if (e.tag === 3)
      ep(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ep(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vn === null || !Vn.has(r))) {
            e = qt(a, e), a = tm(2), r = Bn(t, a, 2), r !== null && (nm(
              a,
              r,
              t,
              e
            ), Ui(r, 2), cn(r));
            break;
          }
        }
        t = t.return;
      }
  }
  function ju(e, t, a) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new xy();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else
      s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(a) || (Su = !0, s.add(a), e = My.bind(null, e, t, a), t.then(e, e));
  }
  function My(e, t, a) {
    var r = e.pingCache;
    r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Le === e && (xe & a) === a && (We === 4 || We === 3 && (xe & 62914560) === xe && 300 > bt() - Hr ? (De & 2) === 0 && _i(e, 0) : wu |= a, hi === xe && (hi = 0)), cn(e);
  }
  function tp(e, t) {
    t === 0 && (t = Kc()), e = ma(e, t), e !== null && (Ui(e, t), cn(e));
  }
  function Cy(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), tp(e, a);
  }
  function Oy(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var r = e.stateNode, s = e.memoizedState;
        s !== null && (a = s.retryLane);
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
    r !== null && r.delete(t), tp(e, a);
  }
  function Ny(e, t) {
    return ra(e, t);
  }
  var Qr = null, gi = null, Mu = !1, Kr = !1, Cu = !1, Kn = 0;
  function cn(e) {
    e !== gi && e.next === null && (gi === null ? Qr = gi = e : gi = gi.next = e), Kr = !0, Mu || (Mu = !0, Ry());
  }
  function yo(e, t) {
    if (!Cu && Kr) {
      Cu = !0;
      do
        for (var a = !1, r = Qr; r !== null; ) {
          if (e !== 0) {
            var s = r.pendingLanes;
            if (s === 0) var c = 0;
            else {
              var p = r.suspendedLanes, y = r.pingedLanes;
              c = (1 << 31 - st(42 | e) + 1) - 1, c &= s & ~(p & ~y), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (a = !0, op(r, c));
          } else
            c = xe, c = et(
              r,
              r === Le ? c : 0,
              r.cancelPendingCommit !== null || r.timeoutHandle !== -1
            ), (c & 3) === 0 || Zi(r, c) || (a = !0, op(r, c));
          r = r.next;
        }
      while (a);
      Cu = !1;
    }
  }
  function Dy() {
    np();
  }
  function np() {
    Kr = Mu = !1;
    var e = 0;
    Kn !== 0 && Vy() && (e = Kn);
    for (var t = bt(), a = null, r = Qr; r !== null; ) {
      var s = r.next, c = ap(r, t);
      c === 0 ? (r.next = null, a === null ? Qr = s : a.next = s, s === null && (gi = a)) : (a = r, (e !== 0 || (c & 3) !== 0) && (Kr = !0)), r = s;
    }
    lt !== 0 && lt !== 5 || yo(e), Kn !== 0 && (Kn = 0);
  }
  function ap(e, t) {
    for (var a = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var p = 31 - st(c), y = 1 << p, S = s[p];
      S === -1 ? ((y & a) === 0 || (y & r) !== 0) && (s[p] = l_(y, t)) : S <= t && (e.expiredLanes |= y), c &= ~y;
    }
    if (t = Le, a = xe, a = et(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r = e.callbackNode, a === 0 || e === t && (Ze === 2 || Ze === 9) || e.cancelPendingCommit !== null)
      return r !== null && r !== null && Di(r), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Zi(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (r !== null && Di(r), Gl(a)) {
        case 2:
        case 8:
          a = Wo;
          break;
        case 32:
          a = Ya;
          break;
        case 268435456:
          a = Fo;
          break;
        default:
          a = Ya;
      }
      return r = ip.bind(null, e), a = ra(a, r), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return r !== null && r !== null && Di(r), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function ip(e, t) {
    if (lt !== 0 && lt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Gr() && e.callbackNode !== a)
      return null;
    var r = xe;
    return r = et(
      e,
      e === Le ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r === 0 ? null : (Bm(e, r, t), ap(e, bt()), e.callbackNode != null && e.callbackNode === a ? ip.bind(null, e) : null);
  }
  function op(e, t) {
    if (Gr()) return null;
    Bm(e, t, !0);
  }
  function Ry() {
    Qy(function() {
      (De & 6) !== 0 ? ra(
        Ri,
        Dy
      ) : np();
    });
  }
  function Ou() {
    if (Kn === 0) {
      var e = ii;
      e === 0 && (e = Ba, Ba <<= 1, (Ba & 261888) === 0 && (Ba = 256)), Kn = e;
    }
    return Kn;
  }
  function rp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : nr("" + e);
  }
  function lp(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function Zy(e, t, a, r, s) {
    if (t === "submit" && a && a.stateNode === s) {
      var c = rp(
        (s[kt] || null).action
      ), p = r.submitter;
      p && (t = (t = p[kt] || null) ? rp(t.formAction) : p.getAttribute("formAction"), t !== null && (c = t, p = null));
      var y = new rr(
        "action",
        "action",
        null,
        r,
        s
      );
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (r.defaultPrevented) {
                if (Kn !== 0) {
                  var S = p ? lp(s, p) : new FormData(s);
                  Fs(
                    a,
                    {
                      pending: !0,
                      data: S,
                      method: s.method,
                      action: c
                    },
                    null,
                    S
                  );
                }
              } else
                typeof c == "function" && (y.preventDefault(), S = p ? lp(s, p) : new FormData(s), Fs(
                  a,
                  {
                    pending: !0,
                    data: S,
                    method: s.method,
                    action: c
                  },
                  c,
                  S
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Nu = 0; Nu < hs.length; Nu++) {
    var Du = hs[Nu], Uy = Du.toLowerCase(), Yy = Du[0].toUpperCase() + Du.slice(1);
    It(
      Uy,
      "on" + Yy
    );
  }
  It(Ud, "onAnimationEnd"), It(Yd, "onAnimationIteration"), It(Bd, "onAnimationStart"), It("dblclick", "onDoubleClick"), It("focusin", "onFocus"), It("focusout", "onBlur"), It(ey, "onTransitionRun"), It(ty, "onTransitionStart"), It(ny, "onTransitionCancel"), It(Hd, "onTransitionEnd"), La("onMouseEnter", ["mouseout", "mouseover"]), La("onMouseLeave", ["mouseout", "mouseover"]), La("onPointerEnter", ["pointerout", "pointerover"]), La("onPointerLeave", ["pointerout", "pointerover"]), ua(
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
  var go = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), By = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go)
  );
  function sp(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var r = e[a], s = r.event;
      r = r.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = r.length - 1; 0 <= p; p--) {
            var y = r[p], S = y.instance, M = y.currentTarget;
            if (y = y.listener, S !== c && s.isPropagationStopped())
              break e;
            c = y, s.currentTarget = M;
            try {
              c(s);
            } catch (R) {
              ur(R);
            }
            s.currentTarget = null, c = S;
          }
        else
          for (p = 0; p < r.length; p++) {
            if (y = r[p], S = y.instance, M = y.currentTarget, y = y.listener, S !== c && s.isPropagationStopped())
              break e;
            c = y, s.currentTarget = M;
            try {
              c(s);
            } catch (R) {
              ur(R);
            }
            s.currentTarget = null, c = S;
          }
      }
    }
  }
  function ze(e, t) {
    var a = t[Ql];
    a === void 0 && (a = t[Ql] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    a.has(r) || (up(t, e, 2, !1), a.add(r));
  }
  function Ru(e, t, a) {
    var r = 0;
    t && (r |= 4), up(
      a,
      e,
      r,
      t
    );
  }
  var Jr = "_reactListening" + Math.random().toString(36).slice(2);
  function Zu(e) {
    if (!e[Jr]) {
      e[Jr] = !0, td.forEach(function(a) {
        a !== "selectionchange" && (By.has(a) || Ru(a, !1, e), Ru(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Jr] || (t[Jr] = !0, Ru("selectionchange", !1, t));
    }
  }
  function up(e, t, a, r) {
    switch (Yp(t)) {
      case 2:
        var s = mg;
        break;
      case 8:
        s = pg;
        break;
      default:
        s = Wu;
    }
    a = s.bind(
      null,
      t,
      a,
      e
    ), s = void 0, !ns || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: s
    }) : e.addEventListener(t, a, !0) : s !== void 0 ? e.addEventListener(t, a, {
      passive: s
    }) : e.addEventListener(t, a, !1);
  }
  function Uu(e, t, a, r, s) {
    var c = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (; ; ) {
        if (r === null) return;
        var p = r.tag;
        if (p === 3 || p === 4) {
          var y = r.stateNode.containerInfo;
          if (y === s) break;
          if (p === 4)
            for (p = r.return; p !== null; ) {
              var S = p.tag;
              if ((S === 3 || S === 4) && p.stateNode.containerInfo === s)
                return;
              p = p.return;
            }
          for (; y !== null; ) {
            if (p = Xa(y), p === null) return;
            if (S = p.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              r = c = p;
              continue e;
            }
            y = y.parentNode;
          }
        }
        r = r.return;
      }
    md(function() {
      var M = c, R = es(a), B = [];
      e: {
        var C = Xd.get(e);
        if (C !== void 0) {
          var O = rr, oe = e;
          switch (e) {
            case "keypress":
              if (ir(a) === 0) break e;
            case "keydown":
            case "keyup":
              O = O_;
              break;
            case "focusin":
              oe = "focus", O = rs;
              break;
            case "focusout":
              oe = "blur", O = rs;
              break;
            case "beforeblur":
            case "afterblur":
              O = rs;
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
              O = vd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = b_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = R_;
              break;
            case Ud:
            case Yd:
            case Bd:
              O = z_;
              break;
            case Hd:
              O = U_;
              break;
            case "scroll":
            case "scrollend":
              O = y_;
              break;
            case "wheel":
              O = B_;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = x_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = yd;
              break;
            case "toggle":
            case "beforetoggle":
              O = X_;
          }
          var he = (t & 4) !== 0, $e = !he && (e === "scroll" || e === "scrollend"), x = he ? C !== null ? C + "Capture" : null : C;
          he = [];
          for (var z = M, E; z !== null; ) {
            var U = z;
            if (E = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || E === null || x === null || (U = Hi(z, x), U != null && he.push(
              bo(z, U, E)
            )), $e) break;
            z = z.return;
          }
          0 < he.length && (C = new O(
            C,
            oe,
            null,
            a,
            R
          ), B.push({ event: C, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", O = e === "mouseout" || e === "pointerout", C && a !== Il && (oe = a.relatedTarget || a.fromElement) && (Xa(oe) || oe[Ha]))
            break e;
          if ((O || C) && (C = R.window === R ? R : (C = R.ownerDocument) ? C.defaultView || C.parentWindow : window, O ? (oe = a.relatedTarget || a.toElement, O = M, oe = oe ? Xa(oe) : null, oe !== null && ($e = d(oe), he = oe.tag, oe !== $e || he !== 5 && he !== 27 && he !== 6) && (oe = null)) : (O = null, oe = M), O !== oe)) {
            if (he = vd, U = "onMouseLeave", x = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (he = yd, U = "onPointerLeave", x = "onPointerEnter", z = "pointer"), $e = O == null ? C : Bi(O), E = oe == null ? C : Bi(oe), C = new he(
              U,
              z + "leave",
              O,
              a,
              R
            ), C.target = $e, C.relatedTarget = E, U = null, Xa(R) === M && (he = new he(
              x,
              z + "enter",
              oe,
              a,
              R
            ), he.target = E, he.relatedTarget = $e, U = he), $e = U, O && oe)
              t: {
                for (he = Hy, x = O, z = oe, E = 0, U = x; U; U = he(U))
                  E++;
                U = 0;
                for (var ce = z; ce; ce = he(ce))
                  U++;
                for (; 0 < E - U; )
                  x = he(x), E--;
                for (; 0 < U - E; )
                  z = he(z), U--;
                for (; E--; ) {
                  if (x === z || z !== null && x === z.alternate) {
                    he = x;
                    break t;
                  }
                  x = he(x), z = he(z);
                }
                he = null;
              }
            else he = null;
            O !== null && cp(
              B,
              C,
              O,
              he,
              !1
            ), oe !== null && $e !== null && cp(
              B,
              $e,
              oe,
              he,
              !0
            );
          }
        }
        e: {
          if (C = M ? Bi(M) : window, O = C.nodeName && C.nodeName.toLowerCase(), O === "select" || O === "input" && C.type === "file")
            var Me = Td;
          else if (kd(C))
            if (Ad)
              Me = W_;
            else {
              Me = J_;
              var re = K_;
            }
          else
            O = C.nodeName, !O || O.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? M && Fl(M.elementType) && (Me = Td) : Me = P_;
          if (Me && (Me = Me(e, M))) {
            xd(
              B,
              Me,
              a,
              R
            );
            break e;
          }
          re && re(e, C, M), e === "focusout" && M && C.type === "number" && M.memoizedProps.value != null && Wl(C, "number", C.value);
        }
        switch (re = M ? Bi(M) : window, e) {
          case "focusin":
            (kd(re) || re.contentEditable === "true") && (Pa = re, fs = M, Ki = null);
            break;
          case "focusout":
            Ki = fs = Pa = null;
            break;
          case "mousedown":
            ms = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ms = !1, Rd(B, a, R);
            break;
          case "selectionchange":
            if (I_) break;
          case "keydown":
          case "keyup":
            Rd(B, a, R);
        }
        var be;
        if (ss)
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
          Ja ? wd(e, a) && (Te = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Te = "onCompositionStart");
        Te && (gd && a.locale !== "ko" && (Ja || Te !== "onCompositionStart" ? Te === "onCompositionEnd" && Ja && (be = pd()) : (On = R, as = "value" in On ? On.value : On.textContent, Ja = !0)), re = Pr(M, Te), 0 < re.length && (Te = new _d(
          Te,
          e,
          null,
          a,
          R
        ), B.push({ event: Te, listeners: re }), be ? Te.data = be : (be = zd(a), be !== null && (Te.data = be)))), (be = q_ ? L_(e, a) : V_(e, a)) && (Te = Pr(M, "onBeforeInput"), 0 < Te.length && (re = new _d(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          R
        ), B.push({
          event: re,
          listeners: Te
        }), re.data = be)), Zy(
          B,
          e,
          M,
          a,
          R
        );
      }
      sp(B, t);
    });
  }
  function bo(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Pr(e, t) {
    for (var a = t + "Capture", r = []; e !== null; ) {
      var s = e, c = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || c === null || (s = Hi(e, a), s != null && r.unshift(
        bo(e, s, c)
      ), s = Hi(e, t), s != null && r.push(
        bo(e, s, c)
      )), e.tag === 3) return r;
      e = e.return;
    }
    return [];
  }
  function Hy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function cp(e, t, a, r, s) {
    for (var c = t._reactName, p = []; a !== null && a !== r; ) {
      var y = a, S = y.alternate, M = y.stateNode;
      if (y = y.tag, S !== null && S === r) break;
      y !== 5 && y !== 26 && y !== 27 || M === null || (S = M, s ? (M = Hi(a, c), M != null && p.unshift(
        bo(a, M, S)
      )) : s || (M = Hi(a, c), M != null && p.push(
        bo(a, M, S)
      ))), a = a.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Xy = /\r\n?/g, $y = /\u0000|\uFFFD/g;
  function dp(e) {
    return (typeof e == "string" ? e : "" + e).replace(Xy, `
`).replace($y, "");
  }
  function fp(e, t) {
    return t = dp(t), dp(e) === t;
  }
  function Xe(e, t, a, r, s, c) {
    switch (a) {
      case "children":
        typeof r == "string" ? t === "body" || t === "textarea" && r === "" || Ga(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && Ga(e, "" + r);
        break;
      case "className":
        er(e, "class", r);
        break;
      case "tabIndex":
        er(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        er(e, a, r);
        break;
      case "style":
        dd(e, r, c);
        break;
      case "data":
        if (t !== "object") {
          er(e, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(a);
          break;
        }
        r = nr("" + r), e.setAttribute(a, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" && (a === "formAction" ? (t !== "input" && Xe(e, t, "name", s.name, s, null), Xe(
            e,
            t,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Xe(
            e,
            t,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Xe(
            e,
            t,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Xe(e, t, "encType", s.encType, s, null), Xe(e, t, "method", s.method, s, null), Xe(e, t, "target", s.target, s, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(a);
          break;
        }
        r = nr("" + r), e.setAttribute(a, r);
        break;
      case "onClick":
        r != null && (e.onclick = fn);
        break;
      case "onScroll":
        r != null && ze("scroll", e);
        break;
      case "onScrollEnd":
        r != null && ze("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(l(61));
          if (a = r.__html, a != null) {
            if (s.children != null) throw Error(l(60));
            e.innerHTML = a;
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
        a = nr("" + r), e.setAttributeNS(
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
        r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, "" + r) : e.removeAttribute(a);
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
        r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        r === !0 ? e.setAttribute(a, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, r) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(a, r) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(a) : e.setAttribute(a, r);
        break;
      case "popover":
        ze("beforetoggle", e), ze("toggle", e), Io(e, "popover", r);
        break;
      case "xlinkActuate":
        dn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          r
        );
        break;
      case "xlinkArcrole":
        dn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          r
        );
        break;
      case "xlinkRole":
        dn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          r
        );
        break;
      case "xlinkShow":
        dn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          r
        );
        break;
      case "xlinkTitle":
        dn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          r
        );
        break;
      case "xlinkType":
        dn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          r
        );
        break;
      case "xmlBase":
        dn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          r
        );
        break;
      case "xmlLang":
        dn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          r
        );
        break;
      case "xmlSpace":
        dn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          r
        );
        break;
      case "is":
        Io(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = v_.get(a) || a, Io(e, a, r));
    }
  }
  function Yu(e, t, a, r, s, c) {
    switch (a) {
      case "style":
        dd(e, r, c);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(l(61));
          if (a = r.__html, a != null) {
            if (s.children != null) throw Error(l(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof r == "string" ? Ga(e, r) : (typeof r == "number" || typeof r == "bigint") && Ga(e, "" + r);
        break;
      case "onScroll":
        r != null && ze("scroll", e);
        break;
      case "onScrollEnd":
        r != null && ze("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = fn);
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
        if (!nd.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (s = a.endsWith("Capture"), t = a.slice(2, s ? a.length - 7 : void 0), c = e[kt] || null, c = c != null ? c[a] : null, typeof c == "function" && e.removeEventListener(t, c, s), typeof r == "function")) {
              typeof c != "function" && c !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, r, s);
              break e;
            }
            a in e ? e[a] = r : r === !0 ? e.setAttribute(a, "") : Io(e, a, r);
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
        ze("error", e), ze("load", e);
        var r = !1, s = !1, c;
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var p = a[c];
            if (p != null)
              switch (c) {
                case "src":
                  r = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, t));
                default:
                  Xe(e, t, c, p, a, null);
              }
          }
        s && Xe(e, t, "srcSet", a.srcSet, a, null), r && Xe(e, t, "src", a.src, a, null);
        return;
      case "input":
        ze("invalid", e);
        var y = c = p = s = null, S = null, M = null;
        for (r in a)
          if (a.hasOwnProperty(r)) {
            var R = a[r];
            if (R != null)
              switch (r) {
                case "name":
                  s = R;
                  break;
                case "type":
                  p = R;
                  break;
                case "checked":
                  S = R;
                  break;
                case "defaultChecked":
                  M = R;
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
                    throw Error(l(137, t));
                  break;
                default:
                  Xe(e, t, r, R, a, null);
              }
          }
        ld(
          e,
          c,
          y,
          S,
          M,
          p,
          s,
          !1
        );
        return;
      case "select":
        ze("invalid", e), r = p = c = null;
        for (s in a)
          if (a.hasOwnProperty(s) && (y = a[s], y != null))
            switch (s) {
              case "value":
                c = y;
                break;
              case "defaultValue":
                p = y;
                break;
              case "multiple":
                r = y;
              default:
                Xe(e, t, s, y, a, null);
            }
        t = c, a = p, e.multiple = !!r, t != null ? Va(e, !!r, t, !1) : a != null && Va(e, !!r, a, !0);
        return;
      case "textarea":
        ze("invalid", e), c = s = r = null;
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null))
            switch (p) {
              case "value":
                r = y;
                break;
              case "defaultValue":
                s = y;
                break;
              case "children":
                c = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(l(91));
                break;
              default:
                Xe(e, t, p, y, a, null);
            }
        ud(e, r, s, c);
        return;
      case "option":
        for (S in a)
          a.hasOwnProperty(S) && (r = a[S], r != null) && (S === "selected" ? e.selected = r && typeof r != "function" && typeof r != "symbol" : Xe(e, t, S, r, a, null));
        return;
      case "dialog":
        ze("beforetoggle", e), ze("toggle", e), ze("cancel", e), ze("close", e);
        break;
      case "iframe":
      case "object":
        ze("load", e);
        break;
      case "video":
      case "audio":
        for (r = 0; r < go.length; r++)
          ze(go[r], e);
        break;
      case "image":
        ze("error", e), ze("load", e);
        break;
      case "details":
        ze("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ze("error", e), ze("load", e);
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
          if (a.hasOwnProperty(M) && (r = a[M], r != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, t));
              default:
                Xe(e, t, M, r, a, null);
            }
        return;
      default:
        if (Fl(t)) {
          for (R in a)
            a.hasOwnProperty(R) && (r = a[R], r !== void 0 && Yu(
              e,
              t,
              R,
              r,
              a,
              void 0
            ));
          return;
        }
    }
    for (y in a)
      a.hasOwnProperty(y) && (r = a[y], r != null && Xe(e, t, y, r, a, null));
  }
  function qy(e, t, a, r) {
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
        var s = null, c = null, p = null, y = null, S = null, M = null, R = null;
        for (O in a) {
          var B = a[O];
          if (a.hasOwnProperty(O) && B != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = B;
              default:
                r.hasOwnProperty(O) || Xe(e, t, O, null, r, B);
            }
        }
        for (var C in r) {
          var O = r[C];
          if (B = a[C], r.hasOwnProperty(C) && (O != null || B != null))
            switch (C) {
              case "type":
                c = O;
                break;
              case "name":
                s = O;
                break;
              case "checked":
                M = O;
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
                  throw Error(l(137, t));
                break;
              default:
                O !== B && Xe(
                  e,
                  t,
                  C,
                  O,
                  r,
                  B
                );
            }
        }
        Pl(
          e,
          p,
          y,
          S,
          M,
          R,
          c,
          s
        );
        return;
      case "select":
        O = p = y = C = null;
        for (c in a)
          if (S = a[c], a.hasOwnProperty(c) && S != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                O = S;
              default:
                r.hasOwnProperty(c) || Xe(
                  e,
                  t,
                  c,
                  null,
                  r,
                  S
                );
            }
        for (s in r)
          if (c = r[s], S = a[s], r.hasOwnProperty(s) && (c != null || S != null))
            switch (s) {
              case "value":
                C = c;
                break;
              case "defaultValue":
                y = c;
                break;
              case "multiple":
                p = c;
              default:
                c !== S && Xe(
                  e,
                  t,
                  s,
                  c,
                  r,
                  S
                );
            }
        t = y, a = p, r = O, C != null ? Va(e, !!a, C, !1) : !!r != !!a && (t != null ? Va(e, !!a, t, !0) : Va(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        O = C = null;
        for (y in a)
          if (s = a[y], a.hasOwnProperty(y) && s != null && !r.hasOwnProperty(y))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xe(e, t, y, null, r, s);
            }
        for (p in r)
          if (s = r[p], c = a[p], r.hasOwnProperty(p) && (s != null || c != null))
            switch (p) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                O = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(l(91));
                break;
              default:
                s !== c && Xe(e, t, p, s, r, c);
            }
        sd(e, C, O);
        return;
      case "option":
        for (var oe in a)
          C = a[oe], a.hasOwnProperty(oe) && C != null && !r.hasOwnProperty(oe) && (oe === "selected" ? e.selected = !1 : Xe(
            e,
            t,
            oe,
            null,
            r,
            C
          ));
        for (S in r)
          C = r[S], O = a[S], r.hasOwnProperty(S) && C !== O && (C != null || O != null) && (S === "selected" ? e.selected = C && typeof C != "function" && typeof C != "symbol" : Xe(
            e,
            t,
            S,
            C,
            r,
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
        for (var he in a)
          C = a[he], a.hasOwnProperty(he) && C != null && !r.hasOwnProperty(he) && Xe(e, t, he, null, r, C);
        for (M in r)
          if (C = r[M], O = a[M], r.hasOwnProperty(M) && C !== O && (C != null || O != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(l(137, t));
                break;
              default:
                Xe(
                  e,
                  t,
                  M,
                  C,
                  r,
                  O
                );
            }
        return;
      default:
        if (Fl(t)) {
          for (var $e in a)
            C = a[$e], a.hasOwnProperty($e) && C !== void 0 && !r.hasOwnProperty($e) && Yu(
              e,
              t,
              $e,
              void 0,
              r,
              C
            );
          for (R in r)
            C = r[R], O = a[R], !r.hasOwnProperty(R) || C === O || C === void 0 && O === void 0 || Yu(
              e,
              t,
              R,
              C,
              r,
              O
            );
          return;
        }
    }
    for (var x in a)
      C = a[x], a.hasOwnProperty(x) && C != null && !r.hasOwnProperty(x) && Xe(e, t, x, null, r, C);
    for (B in r)
      C = r[B], O = a[B], !r.hasOwnProperty(B) || C === O || C == null && O == null || Xe(e, t, B, C, r, O);
  }
  function mp(e) {
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
  function Ly() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), r = 0; r < a.length; r++) {
        var s = a[r], c = s.transferSize, p = s.initiatorType, y = s.duration;
        if (c && y && mp(p)) {
          for (p = 0, y = s.responseEnd, r += 1; r < a.length; r++) {
            var S = a[r], M = S.startTime;
            if (M > y) break;
            var R = S.transferSize, B = S.initiatorType;
            R && mp(B) && (S = S.responseEnd, p += R * (S < y ? 1 : (y - M) / (S - M)));
          }
          if (--r, t += 8 * (c + p) / (s.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Bu = null, Hu = null;
  function Wr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function pp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function hp(e, t) {
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
  function Xu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var $u = null;
  function Vy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === $u ? !1 : ($u = e, !0) : ($u = null, !1);
  }
  var vp = typeof setTimeout == "function" ? setTimeout : void 0, Gy = typeof clearTimeout == "function" ? clearTimeout : void 0, _p = typeof Promise == "function" ? Promise : void 0, Qy = typeof queueMicrotask == "function" ? queueMicrotask : typeof _p < "u" ? function(e) {
    return _p.resolve(null).then(e).catch(Ky);
  } : vp;
  function Ky(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Jn(e) {
    return e === "head";
  }
  function yp(e, t) {
    var a = t, r = 0;
    do {
      var s = a.nextSibling;
      if (e.removeChild(a), s && s.nodeType === 8)
        if (a = s.data, a === "/$" || a === "/&") {
          if (r === 0) {
            e.removeChild(s), zi(t);
            return;
          }
          r--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          r++;
        else if (a === "html")
          So(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, So(a);
          for (var c = a.firstChild; c; ) {
            var p = c.nextSibling, y = c.nodeName;
            c[Yi] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && c.rel.toLowerCase() === "stylesheet" || a.removeChild(c), c = p;
          }
        } else
          a === "body" && So(e.ownerDocument.body);
      a = s;
    } while (a);
    zi(t);
  }
  function gp(e, t) {
    var a = e;
    e = 0;
    do {
      var r = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), r && r.nodeType === 8)
        if (a = r.data, a === "/$") {
          if (e === 0) break;
          e--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = r;
    } while (a);
  }
  function qu(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          qu(a), Kl(a);
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
  function Jy(e, t, a, r) {
    for (; e.nodeType === 1; ) {
      var s = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (r) {
        if (!e[Yi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (c !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (c = e.getAttribute("src"), (c !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === c)
          return e;
      } else return e;
      if (e = Kt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Py(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Kt(e.nextSibling), e === null)) return null;
    return e;
  }
  function bp(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Kt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Lu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Vu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Wy(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var r = function() {
        t(), a.removeEventListener("DOMContentLoaded", r);
      };
      a.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
    }
  }
  function Kt(e) {
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
  var Gu = null;
  function Sp(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return Kt(e.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function wp(e) {
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
  function zp(e, t, a) {
    switch (t = Wr(a), e) {
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
  function So(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Kl(e);
  }
  var Jt = /* @__PURE__ */ new Map(), kp = /* @__PURE__ */ new Set();
  function Fr(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var En = X.d;
  X.d = {
    f: Fy,
    r: Iy,
    D: eg,
    C: tg,
    L: ng,
    m: ag,
    X: og,
    S: ig,
    M: rg
  };
  function Fy() {
    var e = En.f(), t = qr();
    return e || t;
  }
  function Iy(e) {
    var t = $a(e);
    t !== null && t.tag === 5 && t.type === "form" ? Xf(t) : En.r(e);
  }
  var bi = typeof document > "u" ? null : document;
  function xp(e, t, a) {
    var r = bi;
    if (r && typeof t == "string" && t) {
      var s = Xt(t);
      s = 'link[rel="' + e + '"][href="' + s + '"]', typeof a == "string" && (s += '[crossorigin="' + a + '"]'), kp.has(s) || (kp.add(s), e = { rel: e, crossOrigin: a, href: t }, r.querySelector(s) === null && (t = r.createElement("link"), ht(t, "link", e), ut(t), r.head.appendChild(t)));
    }
  }
  function eg(e) {
    En.D(e), xp("dns-prefetch", e, null);
  }
  function tg(e, t) {
    En.C(e, t), xp("preconnect", e, t);
  }
  function ng(e, t, a) {
    En.L(e, t, a);
    var r = bi;
    if (r && e && t) {
      var s = 'link[rel="preload"][as="' + Xt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (s += '[imagesrcset="' + Xt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (s += '[imagesizes="' + Xt(
        a.imageSizes
      ) + '"]')) : s += '[href="' + Xt(e) + '"]';
      var c = s;
      switch (t) {
        case "style":
          c = Si(e);
          break;
        case "script":
          c = wi(e);
      }
      Jt.has(c) || (e = b(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Jt.set(c, e), r.querySelector(s) !== null || t === "style" && r.querySelector(wo(c)) || t === "script" && r.querySelector(zo(c)) || (t = r.createElement("link"), ht(t, "link", e), ut(t), r.head.appendChild(t)));
    }
  }
  function ag(e, t) {
    En.m(e, t);
    var a = bi;
    if (a && e) {
      var r = t && typeof t.as == "string" ? t.as : "script", s = 'link[rel="modulepreload"][as="' + Xt(r) + '"][href="' + Xt(e) + '"]', c = s;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = wi(e);
      }
      if (!Jt.has(c) && (e = b({ rel: "modulepreload", href: e }, t), Jt.set(c, e), a.querySelector(s) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(zo(c)))
              return;
        }
        r = a.createElement("link"), ht(r, "link", e), ut(r), a.head.appendChild(r);
      }
    }
  }
  function ig(e, t, a) {
    En.S(e, t, a);
    var r = bi;
    if (r && e) {
      var s = qa(r).hoistableStyles, c = Si(e);
      t = t || "default";
      var p = s.get(c);
      if (!p) {
        var y = { loading: 0, preload: null };
        if (p = r.querySelector(
          wo(c)
        ))
          y.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Jt.get(c)) && Qu(e, a);
          var S = p = r.createElement("link");
          ut(S), ht(S, "link", e), S._p = new Promise(function(M, R) {
            S.onload = M, S.onerror = R;
          }), S.addEventListener("load", function() {
            y.loading |= 1;
          }), S.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, Ir(p, t, r);
        }
        p = {
          type: "stylesheet",
          instance: p,
          count: 1,
          state: y
        }, s.set(c, p);
      }
    }
  }
  function og(e, t) {
    En.X(e, t);
    var a = bi;
    if (a && e) {
      var r = qa(a).hoistableScripts, s = wi(e), c = r.get(s);
      c || (c = a.querySelector(zo(s)), c || (e = b({ src: e, async: !0 }, t), (t = Jt.get(s)) && Ku(e, t), c = a.createElement("script"), ut(c), ht(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, r.set(s, c));
    }
  }
  function rg(e, t) {
    En.M(e, t);
    var a = bi;
    if (a && e) {
      var r = qa(a).hoistableScripts, s = wi(e), c = r.get(s);
      c || (c = a.querySelector(zo(s)), c || (e = b({ src: e, async: !0, type: "module" }, t), (t = Jt.get(s)) && Ku(e, t), c = a.createElement("script"), ut(c), ht(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, r.set(s, c));
    }
  }
  function Tp(e, t, a, r) {
    var s = (s = me.current) ? Fr(s) : null;
    if (!s) throw Error(l(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Si(a.href), a = qa(
          s
        ).hoistableStyles, r = a.get(t), r || (r = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Si(a.href);
          var c = qa(
            s
          ).hoistableStyles, p = c.get(e);
          if (p || (s = s.ownerDocument || s, p = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, p), (c = s.querySelector(
            wo(e)
          )) && !c._p && (p.instance = c, p.state.loading = 5), Jt.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Jt.set(e, a), c || lg(
            s,
            e,
            a,
            p.state
          ))), t && r === null)
            throw Error(l(528, ""));
          return p;
        }
        if (t && r !== null)
          throw Error(l(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = wi(a), a = qa(
          s
        ).hoistableScripts, r = a.get(t), r || (r = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(l(444, e));
    }
  }
  function Si(e) {
    return 'href="' + Xt(e) + '"';
  }
  function wo(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Ap(e) {
    return b({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function lg(e, t, a, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
      return r.loading |= 1;
    }), t.addEventListener("error", function() {
      return r.loading |= 2;
    }), ht(t, "link", a), ut(t), e.head.appendChild(t));
  }
  function wi(e) {
    return '[src="' + Xt(e) + '"]';
  }
  function zo(e) {
    return "script[async]" + e;
  }
  function Ep(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var r = e.querySelector(
            'style[data-href~="' + Xt(a.href) + '"]'
          );
          if (r)
            return t.instance = r, ut(r), r;
          var s = b({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return r = (e.ownerDocument || e).createElement(
            "style"
          ), ut(r), ht(r, "style", s), Ir(r, a.precedence, e), t.instance = r;
        case "stylesheet":
          s = Si(a.href);
          var c = e.querySelector(
            wo(s)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, ut(c), c;
          r = Ap(a), (s = Jt.get(s)) && Qu(r, s), c = (e.ownerDocument || e).createElement("link"), ut(c);
          var p = c;
          return p._p = new Promise(function(y, S) {
            p.onload = y, p.onerror = S;
          }), ht(c, "link", r), t.state.loading |= 4, Ir(c, a.precedence, e), t.instance = c;
        case "script":
          return c = wi(a.src), (s = e.querySelector(
            zo(c)
          )) ? (t.instance = s, ut(s), s) : (r = a, (s = Jt.get(c)) && (r = b({}, a), Ku(r, s)), e = e.ownerDocument || e, s = e.createElement("script"), ut(s), ht(s, "link", r), e.head.appendChild(s), t.instance = s);
        case "void":
          return null;
        default:
          throw Error(l(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (r = t.instance, t.state.loading |= 4, Ir(r, a.precedence, e));
    return t.instance;
  }
  function Ir(e, t, a) {
    for (var r = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = r.length ? r[r.length - 1] : null, c = s, p = 0; p < r.length; p++) {
      var y = r[p];
      if (y.dataset.precedence === t) c = y;
      else if (c !== s) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Qu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ku(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var el = null;
  function jp(e, t, a) {
    if (el === null) {
      var r = /* @__PURE__ */ new Map(), s = el = /* @__PURE__ */ new Map();
      s.set(a, r);
    } else
      s = el, r = s.get(a), r || (r = /* @__PURE__ */ new Map(), s.set(a, r));
    if (r.has(e)) return r;
    for (r.set(e, null), a = a.getElementsByTagName(e), s = 0; s < a.length; s++) {
      var c = a[s];
      if (!(c[Yi] || c[dt] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = c.getAttribute(t) || "";
        p = e + p;
        var y = r.get(p);
        y ? y.push(c) : r.set(p, [c]);
      }
    }
    return r;
  }
  function Mp(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function sg(e, t, a) {
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
  function Cp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function ug(e, t, a, r) {
    if (a.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var s = Si(r.href), c = t.querySelector(
          wo(s)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = tl.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = c, ut(c);
          return;
        }
        c = t.ownerDocument || t, r = Ap(r), (s = Jt.get(s)) && Qu(r, s), c = c.createElement("link"), ut(c);
        var p = c;
        p._p = new Promise(function(y, S) {
          p.onload = y, p.onerror = S;
        }), ht(c, "link", r), a.instance = c;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = tl.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Ju = 0;
  function cg(e, t) {
    return e.stylesheets && e.count === 0 && al(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var r = setTimeout(function() {
        if (e.stylesheets && al(e, e.stylesheets), e.unsuspend) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ju === 0 && (Ju = 62500 * Ly());
      var s = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && al(e, e.stylesheets), e.unsuspend)) {
            var c = e.unsuspend;
            e.unsuspend = null, c();
          }
        },
        (e.imgBytes > Ju ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(r), clearTimeout(s);
      };
    } : null;
  }
  function tl() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) al(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var nl = null;
  function al(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, nl = /* @__PURE__ */ new Map(), t.forEach(dg, e), nl = null, tl.call(e));
  }
  function dg(e, t) {
    if (!(t.state.loading & 4)) {
      var a = nl.get(e);
      if (a) var r = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), nl.set(e, a);
        for (var s = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < s.length; c++) {
          var p = s[c];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (a.set(p.dataset.precedence, p), r = p);
        }
        r && a.set(null, r);
      }
      s = t.instance, p = s.getAttribute("data-precedence"), c = a.get(p) || r, c === r && a.set(null, s), a.set(p, s), this.count++, r = tl.bind(this), s.addEventListener("load", r), s.addEventListener("error", r), c ? c.parentNode.insertBefore(s, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(s, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ko = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function fg(e, t, a, r, s, c, p, y, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ll(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ll(0), this.hiddenUpdates = Ll(null), this.identifierPrefix = r, this.onUncaughtError = s, this.onCaughtError = c, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Op(e, t, a, r, s, c, p, y, S, M, R, B) {
    return e = new fg(
      e,
      t,
      a,
      p,
      S,
      M,
      R,
      B,
      y
    ), t = 1, c === !0 && (t |= 24), c = Nt(3, null, null, t), e.current = c, c.stateNode = e, t = Es(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: r,
      isDehydrated: a,
      cache: t
    }, Os(c), e;
  }
  function Np(e) {
    return e ? (e = Ia, e) : Ia;
  }
  function Dp(e, t, a, r, s, c) {
    s = Np(s), r.context === null ? r.context = s : r.pendingContext = s, r = Yn(t), r.payload = { element: a }, c = c === void 0 ? null : c, c !== null && (r.callback = c), a = Bn(e, r, t), a !== null && (Mt(a, e, t), to(a, e, t));
  }
  function Rp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Pu(e, t) {
    Rp(e, t), (e = e.alternate) && Rp(e, t);
  }
  function Zp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ma(e, 67108864);
      t !== null && Mt(t, e, 67108864), Pu(e, 67108864);
    }
  }
  function Up(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Yt();
      t = Vl(t);
      var a = ma(e, t);
      a !== null && Mt(a, e, t), Pu(e, t);
    }
  }
  var il = !0;
  function mg(e, t, a, r) {
    var s = j.T;
    j.T = null;
    var c = X.p;
    try {
      X.p = 2, Wu(e, t, a, r);
    } finally {
      X.p = c, j.T = s;
    }
  }
  function pg(e, t, a, r) {
    var s = j.T;
    j.T = null;
    var c = X.p;
    try {
      X.p = 8, Wu(e, t, a, r);
    } finally {
      X.p = c, j.T = s;
    }
  }
  function Wu(e, t, a, r) {
    if (il) {
      var s = Fu(r);
      if (s === null)
        Uu(
          e,
          t,
          r,
          ol,
          a
        ), Bp(e, r);
      else if (vg(
        s,
        e,
        t,
        a,
        r
      ))
        r.stopPropagation();
      else if (Bp(e, r), t & 4 && -1 < hg.indexOf(e)) {
        for (; s !== null; ) {
          var c = $a(s);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var p = ie(c.pendingLanes);
                  if (p !== 0) {
                    var y = c;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; p; ) {
                      var S = 1 << 31 - st(p);
                      y.entanglements[1] |= S, p &= ~S;
                    }
                    cn(c), (De & 6) === 0 && (Xr = bt() + 500, yo(0));
                  }
                }
                break;
              case 31:
              case 13:
                y = ma(c, 2), y !== null && Mt(y, c, 2), qr(), Pu(c, 2);
            }
          if (c = Fu(r), c === null && Uu(
            e,
            t,
            r,
            ol,
            a
          ), c === s) break;
          s = c;
        }
        s !== null && r.stopPropagation();
      } else
        Uu(
          e,
          t,
          r,
          null,
          a
        );
    }
  }
  function Fu(e) {
    return e = es(e), Iu(e);
  }
  var ol = null;
  function Iu(e) {
    if (ol = null, e = Xa(e), e !== null) {
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
    return ol = e, null;
  }
  function Yp(e) {
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
        switch (Po()) {
          case Ri:
            return 2;
          case Wo:
            return 8;
          case Ya:
          case la:
            return 32;
          case Fo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ec = !1, Pn = null, Wn = null, Fn = null, xo = /* @__PURE__ */ new Map(), To = /* @__PURE__ */ new Map(), In = [], hg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Bp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pn = null;
        break;
      case "dragenter":
      case "dragleave":
        Wn = null;
        break;
      case "mouseover":
      case "mouseout":
        Fn = null;
        break;
      case "pointerover":
      case "pointerout":
        xo.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        To.delete(t.pointerId);
    }
  }
  function Ao(e, t, a, r, s, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: r,
      nativeEvent: c,
      targetContainers: [s]
    }, t !== null && (t = $a(t), t !== null && Zp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function vg(e, t, a, r, s) {
    switch (t) {
      case "focusin":
        return Pn = Ao(
          Pn,
          e,
          t,
          a,
          r,
          s
        ), !0;
      case "dragenter":
        return Wn = Ao(
          Wn,
          e,
          t,
          a,
          r,
          s
        ), !0;
      case "mouseover":
        return Fn = Ao(
          Fn,
          e,
          t,
          a,
          r,
          s
        ), !0;
      case "pointerover":
        var c = s.pointerId;
        return xo.set(
          c,
          Ao(
            xo.get(c) || null,
            e,
            t,
            a,
            r,
            s
          )
        ), !0;
      case "gotpointercapture":
        return c = s.pointerId, To.set(
          c,
          Ao(
            To.get(c) || null,
            e,
            t,
            a,
            r,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Hp(e) {
    var t = Xa(e.target);
    if (t !== null) {
      var a = d(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = f(a), t !== null) {
            e.blockedOn = t, Ic(e.priority, function() {
              Up(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = m(a), t !== null) {
            e.blockedOn = t, Ic(e.priority, function() {
              Up(a);
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
  function rl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Fu(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var r = new a.constructor(
          a.type,
          a
        );
        Il = r, a.target.dispatchEvent(r), Il = null;
      } else
        return t = $a(a), t !== null && Zp(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Xp(e, t, a) {
    rl(e) && a.delete(t);
  }
  function _g() {
    ec = !1, Pn !== null && rl(Pn) && (Pn = null), Wn !== null && rl(Wn) && (Wn = null), Fn !== null && rl(Fn) && (Fn = null), xo.forEach(Xp), To.forEach(Xp);
  }
  function ll(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ec || (ec = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      _g
    )));
  }
  var sl = null;
  function $p(e) {
    sl !== e && (sl = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        sl === e && (sl = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], r = e[t + 1], s = e[t + 2];
          if (typeof r != "function") {
            if (Iu(r || a) === null)
              continue;
            break;
          }
          var c = $a(a);
          c !== null && (e.splice(t, 3), t -= 3, Fs(
            c,
            {
              pending: !0,
              data: s,
              method: a.method,
              action: r
            },
            r,
            s
          ));
        }
      }
    ));
  }
  function zi(e) {
    function t(S) {
      return ll(S, e);
    }
    Pn !== null && ll(Pn, e), Wn !== null && ll(Wn, e), Fn !== null && ll(Fn, e), xo.forEach(t), To.forEach(t);
    for (var a = 0; a < In.length; a++) {
      var r = In[a];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < In.length && (a = In[0], a.blockedOn === null); )
      Hp(a), a.blockedOn === null && In.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (r = 0; r < a.length; r += 3) {
        var s = a[r], c = a[r + 1], p = s[kt] || null;
        if (typeof c == "function")
          p || $p(a);
        else if (p) {
          var y = null;
          if (c && c.hasAttribute("formAction")) {
            if (s = c, p = c[kt] || null)
              y = p.formAction;
            else if (Iu(s) !== null) continue;
          } else y = p.action;
          typeof y == "function" ? a[r + 1] = y : (a.splice(r, 3), r -= 3), $p(a);
        }
      }
  }
  function qp() {
    function e(c) {
      c.canIntercept && c.info === "react-transition" && c.intercept({
        handler: function() {
          return new Promise(function(p) {
            return s = p;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      s !== null && (s(), s = null), r || setTimeout(a, 20);
    }
    function a() {
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
      var r = !1, s = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), s !== null && (s(), s = null);
      };
    }
  }
  function tc(e) {
    this._internalRoot = e;
  }
  ul.prototype.render = tc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    var a = t.current, r = Yt();
    Dp(a, r, e, t, null, null);
  }, ul.prototype.unmount = tc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Dp(e.current, 2, null, e, null, null), qr(), t[Ha] = null;
    }
  };
  function ul(e) {
    this._internalRoot = e;
  }
  ul.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Fc();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < In.length && t !== 0 && t < In[a].priority; a++) ;
      In.splice(a, 0, e), a === 0 && Hp(e);
    }
  };
  var Lp = i.version;
  if (Lp !== "19.2.8")
    throw Error(
      l(
        527,
        Lp,
        "19.2.8"
      )
    );
  X.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = v(t), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var yg = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cl.isDisabled && cl.supportsFiber)
      try {
        sa = cl.inject(
          yg
        ), St = cl;
      } catch {
      }
  }
  return jo.createRoot = function(e, t) {
    if (!u(e)) throw Error(l(299));
    var a = !1, r = "", s = Wf, c = Ff, p = If;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError)), t = Op(
      e,
      1,
      !1,
      null,
      null,
      a,
      r,
      null,
      s,
      c,
      p,
      qp
    ), e[Ha] = t.current, Zu(e), new tc(t);
  }, jo.hydrateRoot = function(e, t, a) {
    if (!u(e)) throw Error(l(299));
    var r = !1, s = "", c = Wf, p = Ff, y = If, S = null;
    return a != null && (a.unstable_strictMode === !0 && (r = !0), a.identifierPrefix !== void 0 && (s = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (p = a.onCaughtError), a.onRecoverableError !== void 0 && (y = a.onRecoverableError), a.formState !== void 0 && (S = a.formState)), t = Op(
      e,
      1,
      !0,
      t,
      a ?? null,
      r,
      s,
      S,
      c,
      p,
      y,
      qp
    ), t.context = Np(null), a = t.current, r = Yt(), r = Vl(r), s = Yn(r), s.callback = null, Bn(a, s, r), a = r, t.current.lanes = a, Ui(t, a), cn(t), e[Ha] = t.current, Zu(e), new ul(t);
  }, jo.version = "19.2.8", jo;
}
var eh;
function Eg() {
  if (eh) return ac.exports;
  eh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), ac.exports = Ag(), ac.exports;
}
var jg = Eg();
const Mg = /* @__PURE__ */ Ih(jg);
var ne = jc();
const Cl = /* @__PURE__ */ Ih(ne);
const ev = (...n) => n.filter((i, o, l) => !!i && i.trim() !== "" && l.indexOf(i) === o).join(" ").trim();
const Cg = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const Og = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, o, l) => l ? l.toUpperCase() : o.toLowerCase()
);
const th = (n) => {
  const i = Og(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
var Ng = {
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
const Dg = (n) => {
  for (const i in n)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
};
const Rg = ne.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: l,
    className: u = "",
    children: d,
    iconNode: f,
    ...m
  }, h) => ne.createElement(
    "svg",
    {
      ref: h,
      ...Ng,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: l ? Number(o) * 24 / Number(i) : o,
      className: ev("lucide", u),
      ...!d && !Dg(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...f.map(([v, g]) => ne.createElement(v, g)),
      ...Array.isArray(d) ? d : [d]
    ]
  )
);
const Ne = (n, i) => {
  const o = ne.forwardRef(
    ({ className: l, ...u }, d) => ne.createElement(Rg, {
      ref: d,
      iconNode: i,
      className: ev(
        `lucide-${Cg(th(n))}`,
        `lucide-${n}`,
        l
      ),
      ...u
    })
  );
  return o.displayName = th(n), o;
};
const Zg = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
], tv = Ne("arrow-down-to-line", Zg);
const Ug = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], nh = Ne("arrow-down", Ug);
const Yg = [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], Bg = Ne("arrow-up-from-line", Yg);
const Hg = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], ah = Ne("arrow-up", Hg);
const Xg = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], $g = Ne("battery", Xg);
const qg = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Lg = Ne("check", qg);
const Vg = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Gg = Ne("clock-3", Vg);
const Qg = [
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
], Kg = Ne("droplets", Qg);
const Jg = [
  [
    "path",
    {
      d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
      key: "g5wo59"
    }
  ],
  ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]
], Pg = Ne("eraser", Jg);
const Wg = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], Fg = Ne("history", Wg);
const Ig = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], ih = Ne("house", Ig);
const eb = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], oh = Ne("loader-circle", eb);
const tb = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], nb = Ne("lock-open", tb);
const ab = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], nv = Ne("lock", ab);
const ib = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], ob = Ne("map-pin", ib);
const rb = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], lb = Ne("pause", rb);
const sb = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], av = Ne("play", sb);
const ub = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], rh = Ne("plus", ub);
const cb = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], Mc = Ne("rotate-ccw", cb);
const db = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
], fb = Ne("scan-line", db);
const mb = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], pb = Ne("sliders-horizontal", mb);
const hb = [
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
], bc = Ne("sparkles", hb);
const vb = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], _b = Ne("square", vb);
const yb = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], gb = Ne("timer", yb);
const bb = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], zl = Ne("trash-2", bb);
const Sb = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], wb = Ne("triangle-alert", Sb);
const zb = [
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
], lh = Ne("waves", zb);
const kb = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
], sh = Ne("wind", kb);
const xb = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
], Tb = Ne("wrench", xb);
const Ab = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Cc = Ne("x", Ab);
const Eb = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], jb = Ne("zoom-in", Eb);
const Mb = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Cb = Ne("zoom-out", Mb), Ob = "https://github.com/domidyon/roborock-vacuum-map-card/blob/beta/blueprints/script/roborock_vacuum_map_card", Nb = {
  vacuum_then_mop: { file: "vacuum_then_mop.yaml", label: "Vac followed by Mop" },
  assisted_carry_prepare: { file: "assisted_carry_prepare.yaml", label: "Assisted carry: prepare" },
  assisted_carry_start: { file: "assisted_carry_start.yaml", label: "Assisted carry: start" },
  assisted_carry_finish: { file: "assisted_carry_finish.yaml", label: "Assisted carry: finish" }
};
function Db(n) {
  return `https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=${encodeURIComponent(`${Ob}/${n}`)}`;
}
const uh = "python-roborock SUPPORTED_FEATURES.md (v7.13.0, Apache-2.0)", Rb = [
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
    sources: [uh, "Real-device test by @infy1995 (PR #4)"],
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
    sources: [uh, "Issue #2 (S7+, Home Assistant core integration)"],
    notes: "No cleaning-count setting, so two-pass room jobs use the per-segment repeat. Awaiting hardware confirmation (issue #2)."
    // Kept for its status and notes; the cleaning count, SmartPlan and routes come from
    // the catalog flags (no is_clean_count_setting_supported or is_smart_clean_mode_set_supported).
  }
];
function Zb(n, i) {
  const o = n.entities?.[i]?.device_id, l = o ? n.devices?.[o] : void 0;
  return l?.model_id ?? l?.model ?? void 0;
}
function Oc(n) {
  return n ? Rb.find((i) => i.models.includes(n)) : void 0;
}
function Ub(n) {
  const i = (l) => n.has(l);
  if (!i("is_clean_route_setting_supported")) return [];
  if (i("is_none_pure_clean_mop_with_max_plus")) return ["fast", "standard"];
  const o = ["standard"];
  return i("is_clean_efficiency_supported") || o.push("deep"), i("is_careful_slow_mop_supported") && o.push("deep_plus"), i("is_clean_route_fast_mode_supported") && o.push("fast"), o;
}
function Yb(n) {
  const i = (o) => n.has(o);
  return {
    // Without the cleaning-count setting the app sends the repeat with the segments (issue #2).
    repeat: i("is_clean_count_setting_supported") ? "set_clean_repeat_times" : "app_segment_clean",
    smartplan: i("is_smart_clean_mode_set_supported"),
    mop_routes: Ub(n),
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
const Bb = /* @__PURE__ */ JSON.parse('[{"model":"roborock.vacuum.a01","names":["E4"]},{"model":"roborock.vacuum.a05","family":"RubySLite"},{"model":"roborock.vacuum.a08","names":["S6 Pure"],"family":"RubySC"},{"model":"roborock.vacuum.a09","family":"TanosV"},{"model":"roborock.vacuum.a10","names":["S6 MaxV"],"family":"TanosV","protocol":"1.0","features":["is_collect_dust_mode_supported"]},{"model":"roborock.vacuum.a100","family":"PearlS"},{"model":"roborock.vacuum.a101","names":["Qrevo Pro"],"family":"PearlS"},{"model":"roborock.vacuum.a103","family":"PearlC"},{"model":"roborock.vacuum.a104","names":["Qrevo S"],"family":"PearlC"},{"model":"roborock.vacuum.a11","names":["T7"],"family":"TanosE"},{"model":"roborock.vacuum.a116","family":"PearlPlusS"},{"model":"roborock.vacuum.a117","names":["Qrevo Master"],"family":"PearlPlusS","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_multi_floor_supported"]},{"model":"roborock.vacuum.a122","family":"PearlSLite"},{"model":"roborock.vacuum.a123","family":"PearlSLite","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_clean_route_fast_mode_supported","is_collect_dust_mode_supported","is_back_charge_auto_wash_supported"]},{"model":"roborock.vacuum.a124","family":"UltronSE"},{"model":"roborock.vacuum.a125","names":["Q5 Max+"],"family":"UltronSE","protocol":"1.0","features":["is_clean_route_setting_supported","is_none_pure_clean_mop_with_max_plus","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported"]},{"model":"roborock.vacuum.a134","family":"Vivian"},{"model":"roborock.vacuum.a135","names":["Qrevo Curv"],"family":"Vivian"},{"model":"roborock.vacuum.a136","family":"PearlPlusS"},{"model":"roborock.vacuum.a139","family":"UltronSE"},{"model":"roborock.vacuum.a14","names":["T7S"],"family":"TanosS"},{"model":"roborock.vacuum.a140","family":"UltronSE"},{"model":"roborock.vacuum.a143","family":"CoralPro"},{"model":"roborock.vacuum.a144","names":["Saros 10R"],"family":"CoralPro","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_water_slide_mode_supported"]},{"model":"roborock.vacuum.a146","family":"Verdelite"},{"model":"roborock.vacuum.a147","names":["Saros 10"],"family":"Verdelite","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_mop_shake_module_supported"]},{"model":"roborock.vacuum.a15","names":["S7"],"family":"TanosS","protocol":"1.0","features":["is_clean_route_setting_supported","is_careful_slow_mop_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_multi_floor_supported","is_mop_shake_module_supported"]},{"model":"roborock.vacuum.a155","family":"Vivian"},{"model":"roborock.vacuum.a156","family":"Vivian"},{"model":"roborock.vacuum.a158","family":"VivianC"},{"model":"roborock.vacuum.a159","family":"VivianC"},{"model":"roborock.vacuum.a167","family":"PearlE"},{"model":"roborock.vacuum.a168","family":"PearlE"},{"model":"roborock.vacuum.a169","family":"PearlELite"},{"model":"roborock.vacuum.a170","family":"PearlELite"},{"model":"roborock.vacuum.a187","names":["Qrevo Edge Series"],"protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported"]},{"model":"roborock.vacuum.a19","names":["S4 Max"],"family":"RubySE"},{"model":"roborock.vacuum.a20","family":"Coral"},{"model":"roborock.vacuum.a21","family":"Coral"},{"model":"roborock.vacuum.a23","names":["T7S+"],"family":"TanosSPlus"},{"model":"roborock.vacuum.a24","family":"TanosSPlus"},{"model":"roborock.vacuum.a26","names":["G10S Pro"],"family":"TopazSV"},{"model":"roborock.vacuum.a27","names":["S7 MaxV"],"family":"TopazSV","protocol":"1.0"},{"model":"roborock.vacuum.a288","names":["Saros 20"],"protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_clean_efficiency_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_multi_floor_supported","is_water_slide_mode_supported"]},{"model":"roborock.vacuum.a29","names":["G10"],"family":"TopazS"},{"model":"roborock.vacuum.a30","family":"TopazS"},{"model":"roborock.vacuum.a306","names":["P30 Pro"],"protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_clean_efficiency_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_water_slide_mode_supported"]},{"model":"roborock.vacuum.a33","family":"TanosSE"},{"model":"roborock.vacuum.a34","names":["Q5"],"family":"TanosSE"},{"model":"roborock.vacuum.a37","family":"TanosSLite"},{"model":"roborock.vacuum.a38","names":["Q7 Max"],"family":"TanosSLite"},{"model":"roborock.vacuum.a39","family":"TanosSC"},{"model":"roborock.vacuum.a40","names":["Q7","Q7+"],"family":"TanosSC"},{"model":"roborock.vacuum.a46","names":["G10S"],"family":"TopazSPlus"},{"model":"roborock.vacuum.a47","family":"TopazSPlus"},{"model":"roborock.vacuum.a50","family":"Ultron"},{"model":"roborock.vacuum.a51","names":["S8"],"family":"Ultron"},{"model":"roborock.vacuum.a52","family":"TanosSMax"},{"model":"roborock.vacuum.a62","names":["S7 Pro Ultra"],"family":"TopazSPower"},{"model":"roborock.vacuum.a64","family":"TopazSC"},{"model":"roborock.vacuum.a65","names":["S7 MaxV Ultra"],"family":"TopazSC"},{"model":"roborock.vacuum.a66","family":"TopazSPlus"},{"model":"roborock.vacuum.a68","family":"UltronSPlus"},{"model":"roborock.vacuum.a69","family":"UltronSPlus"},{"model":"roborock.vacuum.a70","names":["S8 Pro Ultra"],"family":"UltronSPlus"},{"model":"roborock.vacuum.a72","names":["Q5 Pro"],"family":"UltronE"},{"model":"roborock.vacuum.a73","names":["Q8 Max"],"family":"UltronLite"},{"model":"roborock.vacuum.a74","family":"Pearl"},{"model":"roborock.vacuum.a75","names":["P10"],"family":"Pearl","protocol":"1.0","features":["is_clean_count_setting_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported"]},{"model":"roborock.vacuum.a76","family":"TopazS"},{"model":"roborock.vacuum.a84","family":"UltronE"},{"model":"roborock.vacuum.a85","family":"UltronLite"},{"model":"roborock.vacuum.a86","family":"PearlPlus"},{"model":"roborock.vacuum.a87","names":["Qrevo MaxV"],"family":"PearlPlus","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_multi_floor_supported"]},{"model":"roborock.vacuum.a94","family":"UltronSC"},{"model":"roborock.vacuum.a95","family":"UltronSC"},{"model":"roborock.vacuum.a96","family":"UltronSV"},{"model":"roborock.vacuum.a97","names":["S8 MaxV Ultra"],"family":"UltronSV"},{"model":"roborock.vacuum.c1","names":["C1"]},{"model":"roborock.vacuum.e2","names":["E2"]},{"model":"roborock.vacuum.m1s","names":["1S"]},{"model":"roborock.vacuum.p5","family":"RubySC"},{"model":"roborock.vacuum.p6","family":"RubySLite"},{"model":"roborock.vacuum.s4","names":["S4"],"family":"RubyPlus"},{"model":"roborock.vacuum.s5","names":["S5"]},{"model":"roborock.vacuum.s5e","names":["S5 Max"],"family":"RubySLite","protocol":"1.0","features":["is_collect_dust_mode_supported","is_multi_floor_supported"]},{"model":"roborock.vacuum.s6","names":["S6"],"family":"Tanos"},{"model":"roborock.vacuum.sc01","names":["Q7 Series"],"protocol":"B01","features":["is_collect_dust_mode_supported"]},{"model":"roborock.vacuum.sc05","names":["Q7 Series"],"protocol":"B01"},{"model":"roborock.vacuum.ss07","names":["Q10"],"protocol":"B01"},{"model":"roborock.vacuum.t4","family":"RubyPlus"},{"model":"roborock.vacuum.t6","names":["T6"],"family":"Tanos"},{"model":"roborock.vacuum.t7","family":"TanosE"},{"model":"roborock.vacuum.t7p","family":"TanosV"},{"model":"roborock.wetdryvac.a107","names":["Dyad Air"]},{"model":"roborock.wetdryvac.a56","names":["Dyad Pro"]},{"model":"roborock.wetdryvac.a83","names":["Dyad Pro Combo"]},{"model":"roborock.wm.a102","names":["Zeo One"],"protocol":"A01","features":["is_collect_dust_mode_supported"]}]'), Hb = {
  models: Bb
}, Xb = Hb.models;
function Ol(n) {
  return n ? Xb.find((i) => i.model === n) : void 0;
}
function ch(n) {
  return Oc(n)?.label ?? Ol(n)?.names?.join(" / ");
}
function $b(n, i) {
  const o = Oc(n), l = Ol(n)?.features, u = [];
  l && u.push(["catalog", new Set(l)]);
  const d = u[0] ? { source: u[0][0], caps: Yb(u[0][1]) } : void 0, f = { sources: {}, profile: o }, m = (v, g, b) => {
    g !== void 0 ? (f[v] = g, f.sources[v] = "profile") : b !== void 0 && d && (f[v] = b, f.sources[v] = d.source);
  };
  m("repeat", o?.repeat, d?.caps.repeat), m("smartplan", o?.smartplan, d?.caps.smartplan), m("mop_only", o?.mop_only);
  const h = d?.caps.mop_routes;
  return m("mop_routes", o?.mop_routes, h && h.length > 0 ? { vacuum_and_mop: h, mop: h } : void 0), f;
}
const sc = [2026, 8];
function qb(n) {
  if (!n) return !1;
  const [i, o] = n.split(".").map(Number);
  return !Number.isFinite(i) || !Number.isFinite(o) ? !1 : i < sc[0] || i === sc[0] && o < sc[1];
}
function Lb(n) {
  const i = Ol(n.model), o = n.protocol ?? i?.protocol, l = [];
  return n.model && !n.model.startsWith("roborock.vacuum.") && l.push("not_a_robot_vacuum"), o && o !== "1.0" && l.push("protocol_unsupported"), qb(n.haVersion) && l.push("home_assistant_too_old"), l.length > 0 ? { verdict: "unsupported", reasons: l, name: ch(n.model), protocol: o } : (n.hasCustomMap === !1 && l.push("custom_map_missing"), !Oc(n.model) && !i?.features && !n.hasDeviceFlags && l.push("unknown_model"), {
    verdict: l.length > 0 ? "limited" : "supported",
    reasons: l,
    name: ch(n.model),
    protocol: o
  });
}
const dl = {
  pause: 4,
  stop: 8,
  returnHome: 16,
  start: 8192
};
function fl(n, i) {
  if (!i) return [];
  const o = n.states[i];
  return !o || o.state === "unavailable" ? [] : Array.isArray(o.attributes.options) ? o.attributes.options.map(String) : [];
}
function Nc(n, i) {
  const o = n.states[i.entity], l = Number(o?.attributes.supported_features ?? 0), u = Array.isArray(o?.attributes.fan_speed_list) ? o.attributes.fan_speed_list.map(String) : [], d = fl(n, i.entities?.map_select), f = fl(n, i.entities?.cleaning_mode), m = fl(n, i.entities?.mop_mode), h = fl(n, i.entities?.mop_intensity), v = Zb(n, i.entity), g = $b(v), b = g.profile, k = u.includes("smart_mode") && m.includes("smart_mode"), T = k || h.some((A) => ["slight", "moderate", "extreme"].includes(A)) ? "set_clean_repeat_times" : "app_segment_clean";
  return {
    fanSpeeds: u,
    mapOptions: d,
    cleaningModes: f,
    mopModes: m,
    mopIntensities: h,
    canStart: !!(l & dl.start),
    canPause: !!(l & dl.pause),
    canStop: !!(l & dl.stop),
    canDock: !!(l & dl.returnHome),
    hasMapSelect: d.length > 0,
    hasCleaningMode: f.length > 0,
    hasMopMode: m.length > 0,
    hasMopIntensity: h.length > 0,
    hasSmartPlan: i.enable_smartplan ?? g.smartplan ?? k,
    roomRepeatStrategy: i.cleaning_count_command ?? g.repeat ?? T,
    mopRoutes: i.mop_routes ?? g.mop_routes,
    profile: b ? { label: b.label, status: b.status } : void 0,
    model: v
  };
}
function Vb(n) {
  return ["cleaning", "paused", "returning", "returning_home", "error", "unavailable"].includes(n ?? "unavailable");
}
function Gb(n) {
  return ["cleaning", "paused", "returning", "returning_home"].includes(n ?? "");
}
var dh;
function Y(n, i, o) {
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
    m._zod.traits.add(n), i(m, h);
    const v = f.prototype, g = Object.keys(v);
    for (let b = 0; b < g.length; b++) {
      const k = g[b];
      k in m || (m[k] = v[k].bind(m));
    }
  }
  const u = o?.Parent ?? Object;
  class d extends u {
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
class Ti extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class iv extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
(dh = globalThis).__zod_globalConfig ?? (dh.__zod_globalConfig = {});
const Dc = globalThis.__zod_globalConfig;
function Ca(n) {
  return Dc;
}
function ov(n) {
  const i = Object.values(n).filter((l) => typeof l == "number");
  return Object.entries(n).filter(([l, u]) => i.indexOf(+l) === -1).map(([l, u]) => u);
}
function Sc(n, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
function Rc(n) {
  return {
    get value() {
      {
        const i = n();
        return Object.defineProperty(this, "value", { value: i }), i;
      }
    }
  };
}
function Zc(n) {
  return n == null;
}
function Uc(n) {
  const i = n.startsWith("^") ? 1 : 0, o = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(i, o);
}
function Qb(n, i) {
  const o = n / i, l = Math.round(o), u = Number.EPSILON * Math.max(Math.abs(o), 1);
  return Math.abs(o - l) < u ? 0 : o - l;
}
const fh = /* @__PURE__ */ Symbol("evaluating");
function qe(n, i, o) {
  let l;
  Object.defineProperty(n, i, {
    get() {
      if (l !== fh)
        return l === void 0 && (l = fh, l = o()), l;
    },
    set(u) {
      Object.defineProperty(n, i, {
        value: u
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Na(n, i, o) {
  Object.defineProperty(n, i, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function aa(...n) {
  const i = {};
  for (const o of n) {
    const l = Object.getOwnPropertyDescriptors(o);
    Object.assign(i, l);
  }
  return Object.defineProperties({}, i);
}
function mh(n) {
  return JSON.stringify(n);
}
function Kb(n) {
  return n.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const rv = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function kl(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const Jb = /* @__PURE__ */ Rc(() => {
  if (Dc.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function Bo(n) {
  if (kl(n) === !1)
    return !1;
  const i = n.constructor;
  if (i === void 0 || typeof i != "function")
    return !0;
  const o = i.prototype;
  return !(kl(o) === !1 || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1);
}
function lv(n) {
  return Bo(n) ? { ...n } : Array.isArray(n) ? [...n] : n instanceof Map ? new Map(n) : n instanceof Set ? new Set(n) : n;
}
const Pb = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function ji(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ia(n, i, o) {
  const l = new n._zod.constr(i ?? n._zod.def);
  return (!i || o?.parent) && (l._zod.parent = n), l;
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
function Wb(n) {
  return Object.keys(n).filter((i) => n[i]._zod.optin === "optional" && n[i]._zod.optout === "optional");
}
const Fb = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Ib(n, i) {
  const o = n._zod.def, l = o.checks;
  if (l && l.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const d = aa(n._zod.def, {
    get shape() {
      const f = {};
      for (const m in i) {
        if (!(m in o.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && (f[m] = o.shape[m]);
      }
      return Na(this, "shape", f), f;
    },
    checks: []
  });
  return ia(n, d);
}
function e0(n, i) {
  const o = n._zod.def, l = o.checks;
  if (l && l.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const d = aa(n._zod.def, {
    get shape() {
      const f = { ...n._zod.def.shape };
      for (const m in i) {
        if (!(m in o.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && delete f[m];
      }
      return Na(this, "shape", f), f;
    },
    checks: []
  });
  return ia(n, d);
}
function t0(n, i) {
  if (!Bo(i))
    throw new Error("Invalid input to extend: expected a plain object");
  const o = n._zod.def.checks;
  if (o && o.length > 0) {
    const d = n._zod.def.shape;
    for (const f in i)
      if (Object.getOwnPropertyDescriptor(d, f) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const u = aa(n._zod.def, {
    get shape() {
      const d = { ...n._zod.def.shape, ...i };
      return Na(this, "shape", d), d;
    }
  });
  return ia(n, u);
}
function n0(n, i) {
  if (!Bo(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const o = aa(n._zod.def, {
    get shape() {
      const l = { ...n._zod.def.shape, ...i };
      return Na(this, "shape", l), l;
    }
  });
  return ia(n, o);
}
function a0(n, i) {
  if (n._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const o = aa(n._zod.def, {
    get shape() {
      const l = { ...n._zod.def.shape, ...i._zod.def.shape };
      return Na(this, "shape", l), l;
    },
    get catchall() {
      return i._zod.def.catchall;
    },
    checks: i._zod.def.checks ?? []
  });
  return ia(n, o);
}
function i0(n, i, o) {
  const u = i._zod.def.checks;
  if (u && u.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const f = aa(i._zod.def, {
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
      return Na(this, "shape", h), h;
    },
    checks: []
  });
  return ia(i, f);
}
function o0(n, i, o) {
  const l = aa(i._zod.def, {
    get shape() {
      const u = i._zod.def.shape, d = { ...u };
      if (o)
        for (const f in o) {
          if (!(f in d))
            throw new Error(`Unrecognized key: "${f}"`);
          o[f] && (d[f] = new n({
            type: "nonoptional",
            innerType: u[f]
          }));
        }
      else
        for (const f in u)
          d[f] = new n({
            type: "nonoptional",
            innerType: u[f]
          });
      return Na(this, "shape", d), d;
    }
  });
  return ia(i, l);
}
function ki(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let o = i; o < n.issues.length; o++)
    if (n.issues[o]?.continue !== !0)
      return !0;
  return !1;
}
function r0(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let o = i; o < n.issues.length; o++)
    if (n.issues[o]?.continue === !1)
      return !0;
  return !1;
}
function sv(n, i) {
  return i.map((o) => {
    var l;
    return (l = o).path ?? (l.path = []), o.path.unshift(n), o;
  });
}
function ml(n) {
  return typeof n == "string" ? n : n?.message;
}
function Oa(n, i, o) {
  const l = n.message ? n.message : ml(n.inst?._zod.def?.error?.(n)) ?? ml(i?.error?.(n)) ?? ml(o.customError?.(n)) ?? ml(o.localeError?.(n)) ?? "Invalid input", { inst: u, continue: d, input: f, ...m } = n;
  return m.path ?? (m.path = []), m.message = l, i?.reportInput && (m.input = f), m;
}
function Yc(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function Ho(...n) {
  const [i, o, l] = n;
  return typeof i == "string" ? {
    message: i,
    code: "custom",
    input: o,
    inst: l
  } : { ...i };
}
const uv = (n, i) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: i,
    enumerable: !1
  }), n.message = JSON.stringify(i, Sc, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, cv = Y("$ZodError", uv), dv = Y("$ZodError", uv, { Parent: Error });
function l0(n, i = (o) => o.message) {
  const o = {}, l = [];
  for (const u of n.issues)
    u.path.length > 0 ? (o[u.path[0]] = o[u.path[0]] || [], o[u.path[0]].push(i(u))) : l.push(i(u));
  return { formErrors: l, fieldErrors: o };
}
function s0(n, i = (o) => o.message) {
  const o = { _errors: [] }, l = (u, d = []) => {
    for (const f of u.issues)
      if (f.code === "invalid_union" && f.errors.length)
        f.errors.map((m) => l({ issues: m }, [...d, ...f.path]));
      else if (f.code === "invalid_key")
        l({ issues: f.issues }, [...d, ...f.path]);
      else if (f.code === "invalid_element")
        l({ issues: f.issues }, [...d, ...f.path]);
      else {
        const m = [...d, ...f.path];
        if (m.length === 0)
          o._errors.push(i(f));
        else {
          let h = o, v = 0;
          for (; v < m.length; ) {
            const g = m[v];
            v === m.length - 1 ? (h[g] = h[g] || { _errors: [] }, h[g]._errors.push(i(f))) : h[g] = h[g] || { _errors: [] }, h = h[g], v++;
          }
        }
      }
  };
  return l(n), o;
}
const Bc = (n) => (i, o, l, u) => {
  const d = l ? { ...l, async: !1 } : { async: !1 }, f = i._zod.run({ value: o, issues: [] }, d);
  if (f instanceof Promise)
    throw new Ti();
  if (f.issues.length) {
    const m = new (u?.Err ?? n)(f.issues.map((h) => Oa(h, d, Ca())));
    throw rv(m, u?.callee), m;
  }
  return f.value;
}, Hc = (n) => async (i, o, l, u) => {
  const d = l ? { ...l, async: !0 } : { async: !0 };
  let f = i._zod.run({ value: o, issues: [] }, d);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const m = new (u?.Err ?? n)(f.issues.map((h) => Oa(h, d, Ca())));
    throw rv(m, u?.callee), m;
  }
  return f.value;
}, Nl = (n) => (i, o, l) => {
  const u = l ? { ...l, async: !1 } : { async: !1 }, d = i._zod.run({ value: o, issues: [] }, u);
  if (d instanceof Promise)
    throw new Ti();
  return d.issues.length ? {
    success: !1,
    error: new (n ?? cv)(d.issues.map((f) => Oa(f, u, Ca())))
  } : { success: !0, data: d.value };
}, u0 = /* @__PURE__ */ Nl(dv), Dl = (n) => async (i, o, l) => {
  const u = l ? { ...l, async: !0 } : { async: !0 };
  let d = i._zod.run({ value: o, issues: [] }, u);
  return d instanceof Promise && (d = await d), d.issues.length ? {
    success: !1,
    error: new n(d.issues.map((f) => Oa(f, u, Ca())))
  } : { success: !0, data: d.value };
}, c0 = /* @__PURE__ */ Dl(dv), d0 = (n) => (i, o, l) => {
  const u = l ? { ...l, direction: "backward" } : { direction: "backward" };
  return Bc(n)(i, o, u);
}, f0 = (n) => (i, o, l) => Bc(n)(i, o, l), m0 = (n) => async (i, o, l) => {
  const u = l ? { ...l, direction: "backward" } : { direction: "backward" };
  return Hc(n)(i, o, u);
}, p0 = (n) => async (i, o, l) => Hc(n)(i, o, l), h0 = (n) => (i, o, l) => {
  const u = l ? { ...l, direction: "backward" } : { direction: "backward" };
  return Nl(n)(i, o, u);
}, v0 = (n) => (i, o, l) => Nl(n)(i, o, l), _0 = (n) => async (i, o, l) => {
  const u = l ? { ...l, direction: "backward" } : { direction: "backward" };
  return Dl(n)(i, o, u);
}, y0 = (n) => async (i, o, l) => Dl(n)(i, o, l), g0 = /^[cC][0-9a-z]{6,}$/, b0 = /^[0-9a-z]+$/, S0 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, w0 = /^[0-9a-vA-V]{20}$/, z0 = /^[A-Za-z0-9]{27}$/, k0 = /^[a-zA-Z0-9_-]{21}$/, x0 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, T0 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ph = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, A0 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, E0 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function j0() {
  return new RegExp(E0, "u");
}
const M0 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, C0 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, O0 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, N0 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, D0 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, fv = /^[A-Za-z0-9_-]*$/, R0 = /^https?$/, Z0 = /^\+[1-9]\d{6,14}$/, mv = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", U0 = /* @__PURE__ */ new RegExp(`^${mv}$`);
function pv(n) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${i}` : n.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${n.precision}}` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Y0(n) {
  return new RegExp(`^${pv(n)}$`);
}
function B0(n) {
  const i = pv({ precision: n.precision }), o = ["Z"];
  n.local && o.push(""), n.offset && o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const l = `${i}(?:${o.join("|")})`;
  return new RegExp(`^${mv}T(?:${l})$`);
}
const H0 = (n) => {
  const i = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${i}$`);
}, X0 = /^-?\d+$/, $0 = /^-?\d+(?:\.\d+)?$/, q0 = /^(?:true|false)$/i, L0 = /^[^A-Z]*$/, V0 = /^[^a-z]*$/, Ct = /* @__PURE__ */ Y("$ZodCheck", (n, i) => {
  var o;
  n._zod ?? (n._zod = {}), n._zod.def = i, (o = n._zod).onattach ?? (o.onattach = []);
}), hv = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, vv = /* @__PURE__ */ Y("$ZodCheckLessThan", (n, i) => {
  Ct.init(n, i);
  const o = hv[typeof i.value];
  n._zod.onattach.push((l) => {
    const u = l._zod.bag, d = (i.inclusive ? u.maximum : u.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    i.value < d && (i.inclusive ? u.maximum = i.value : u.exclusiveMaximum = i.value);
  }), n._zod.check = (l) => {
    (i.inclusive ? l.value <= i.value : l.value < i.value) || l.issues.push({
      origin: o,
      code: "too_big",
      maximum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: l.value,
      inclusive: i.inclusive,
      inst: n,
      continue: !i.abort
    });
  };
}), _v = /* @__PURE__ */ Y("$ZodCheckGreaterThan", (n, i) => {
  Ct.init(n, i);
  const o = hv[typeof i.value];
  n._zod.onattach.push((l) => {
    const u = l._zod.bag, d = (i.inclusive ? u.minimum : u.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    i.value > d && (i.inclusive ? u.minimum = i.value : u.exclusiveMinimum = i.value);
  }), n._zod.check = (l) => {
    (i.inclusive ? l.value >= i.value : l.value > i.value) || l.issues.push({
      origin: o,
      code: "too_small",
      minimum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: l.value,
      inclusive: i.inclusive,
      inst: n,
      continue: !i.abort
    });
  };
}), G0 = /* @__PURE__ */ Y("$ZodCheckMultipleOf", (n, i) => {
  Ct.init(n, i), n._zod.onattach.push((o) => {
    var l;
    (l = o._zod.bag).multipleOf ?? (l.multipleOf = i.value);
  }), n._zod.check = (o) => {
    if (typeof o.value != typeof i.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof o.value == "bigint" ? o.value % i.value === BigInt(0) : Qb(o.value, i.value) === 0) || o.issues.push({
      origin: typeof o.value,
      code: "not_multiple_of",
      divisor: i.value,
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Q0 = /* @__PURE__ */ Y("$ZodCheckNumberFormat", (n, i) => {
  Ct.init(n, i), i.format = i.format || "float64";
  const o = i.format?.includes("int"), l = o ? "int" : "number", [u, d] = Fb[i.format];
  n._zod.onattach.push((f) => {
    const m = f._zod.bag;
    m.format = i.format, m.minimum = u, m.maximum = d, o && (m.pattern = X0);
  }), n._zod.check = (f) => {
    const m = f.value;
    if (o) {
      if (!Number.isInteger(m)) {
        f.issues.push({
          expected: l,
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
          origin: l,
          inclusive: !0,
          continue: !i.abort
        }) : f.issues.push({
          input: m,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: l,
          inclusive: !0,
          continue: !i.abort
        });
        return;
      }
    }
    m < u && f.issues.push({
      origin: "number",
      input: m,
      code: "too_small",
      minimum: u,
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
}), K0 = /* @__PURE__ */ Y("$ZodCheckMaxLength", (n, i) => {
  var o;
  Ct.init(n, i), (o = n._zod.def).when ?? (o.when = (l) => {
    const u = l.value;
    return !Zc(u) && u.length !== void 0;
  }), n._zod.onattach.push((l) => {
    const u = l._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    i.maximum < u && (l._zod.bag.maximum = i.maximum);
  }), n._zod.check = (l) => {
    const u = l.value;
    if (u.length <= i.maximum)
      return;
    const f = Yc(u);
    l.issues.push({
      origin: f,
      code: "too_big",
      maximum: i.maximum,
      inclusive: !0,
      input: u,
      inst: n,
      continue: !i.abort
    });
  };
}), J0 = /* @__PURE__ */ Y("$ZodCheckMinLength", (n, i) => {
  var o;
  Ct.init(n, i), (o = n._zod.def).when ?? (o.when = (l) => {
    const u = l.value;
    return !Zc(u) && u.length !== void 0;
  }), n._zod.onattach.push((l) => {
    const u = l._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    i.minimum > u && (l._zod.bag.minimum = i.minimum);
  }), n._zod.check = (l) => {
    const u = l.value;
    if (u.length >= i.minimum)
      return;
    const f = Yc(u);
    l.issues.push({
      origin: f,
      code: "too_small",
      minimum: i.minimum,
      inclusive: !0,
      input: u,
      inst: n,
      continue: !i.abort
    });
  };
}), P0 = /* @__PURE__ */ Y("$ZodCheckLengthEquals", (n, i) => {
  var o;
  Ct.init(n, i), (o = n._zod.def).when ?? (o.when = (l) => {
    const u = l.value;
    return !Zc(u) && u.length !== void 0;
  }), n._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.minimum = i.length, u.maximum = i.length, u.length = i.length;
  }), n._zod.check = (l) => {
    const u = l.value, d = u.length;
    if (d === i.length)
      return;
    const f = Yc(u), m = d > i.length;
    l.issues.push({
      origin: f,
      ...m ? { code: "too_big", maximum: i.length } : { code: "too_small", minimum: i.length },
      inclusive: !0,
      exact: !0,
      input: l.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Rl = /* @__PURE__ */ Y("$ZodCheckStringFormat", (n, i) => {
  var o, l;
  Ct.init(n, i), n._zod.onattach.push((u) => {
    const d = u._zod.bag;
    d.format = i.format, i.pattern && (d.patterns ?? (d.patterns = /* @__PURE__ */ new Set()), d.patterns.add(i.pattern));
  }), i.pattern ? (o = n._zod).check ?? (o.check = (u) => {
    i.pattern.lastIndex = 0, !i.pattern.test(u.value) && u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: i.format,
      input: u.value,
      ...i.pattern ? { pattern: i.pattern.toString() } : {},
      inst: n,
      continue: !i.abort
    });
  }) : (l = n._zod).check ?? (l.check = () => {
  });
}), W0 = /* @__PURE__ */ Y("$ZodCheckRegex", (n, i) => {
  Rl.init(n, i), n._zod.check = (o) => {
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
}), F0 = /* @__PURE__ */ Y("$ZodCheckLowerCase", (n, i) => {
  i.pattern ?? (i.pattern = L0), Rl.init(n, i);
}), I0 = /* @__PURE__ */ Y("$ZodCheckUpperCase", (n, i) => {
  i.pattern ?? (i.pattern = V0), Rl.init(n, i);
}), e1 = /* @__PURE__ */ Y("$ZodCheckIncludes", (n, i) => {
  Ct.init(n, i);
  const o = ji(i.includes), l = new RegExp(typeof i.position == "number" ? `^.{${i.position}}${o}` : o);
  i.pattern = l, n._zod.onattach.push((u) => {
    const d = u._zod.bag;
    d.patterns ?? (d.patterns = /* @__PURE__ */ new Set()), d.patterns.add(l);
  }), n._zod.check = (u) => {
    u.value.includes(i.includes, i.position) || u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: i.includes,
      input: u.value,
      inst: n,
      continue: !i.abort
    });
  };
}), t1 = /* @__PURE__ */ Y("$ZodCheckStartsWith", (n, i) => {
  Ct.init(n, i);
  const o = new RegExp(`^${ji(i.prefix)}.*`);
  i.pattern ?? (i.pattern = o), n._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(o);
  }), n._zod.check = (l) => {
    l.value.startsWith(i.prefix) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: i.prefix,
      input: l.value,
      inst: n,
      continue: !i.abort
    });
  };
}), n1 = /* @__PURE__ */ Y("$ZodCheckEndsWith", (n, i) => {
  Ct.init(n, i);
  const o = new RegExp(`.*${ji(i.suffix)}$`);
  i.pattern ?? (i.pattern = o), n._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(o);
  }), n._zod.check = (l) => {
    l.value.endsWith(i.suffix) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: i.suffix,
      input: l.value,
      inst: n,
      continue: !i.abort
    });
  };
}), a1 = /* @__PURE__ */ Y("$ZodCheckOverwrite", (n, i) => {
  Ct.init(n, i), n._zod.check = (o) => {
    o.value = i.tx(o.value);
  };
});
class i1 {
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
    const l = i.split(`
`).filter((f) => f), u = Math.min(...l.map((f) => f.length - f.trimStart().length)), d = l.map((f) => f.slice(u)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of d)
      this.content.push(f);
  }
  compile() {
    const i = Function, o = this?.args, u = [...(this?.content ?? [""]).map((d) => `  ${d}`)];
    return new i(...o, u.join(`
`));
  }
}
const o1 = {
  major: 4,
  minor: 4,
  patch: 3
}, Fe = /* @__PURE__ */ Y("$ZodType", (n, i) => {
  var o;
  n ?? (n = {}), n._zod.def = i, n._zod.bag = n._zod.bag || {}, n._zod.version = o1;
  const l = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && l.unshift(n);
  for (const u of l)
    for (const d of u._zod.onattach)
      d(n);
  if (l.length === 0)
    (o = n._zod).deferred ?? (o.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const u = (f, m, h) => {
      let v = ki(f), g;
      for (const b of m) {
        if (b._zod.def.when) {
          if (r0(f) || !b._zod.def.when(f))
            continue;
        } else if (v)
          continue;
        const k = f.issues.length, T = b._zod.check(f);
        if (T instanceof Promise && h?.async === !1)
          throw new Ti();
        if (g || T instanceof Promise)
          g = (g ?? Promise.resolve()).then(async () => {
            await T, f.issues.length !== k && (v || (v = ki(f, k)));
          });
        else {
          if (f.issues.length === k)
            continue;
          v || (v = ki(f, k));
        }
      }
      return g ? g.then(() => f) : f;
    }, d = (f, m, h) => {
      if (ki(f))
        return f.aborted = !0, f;
      const v = u(m, l, h);
      if (v instanceof Promise) {
        if (h.async === !1)
          throw new Ti();
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
          throw new Ti();
        return h.then((v) => u(v, l, m));
      }
      return u(h, l, m);
    };
  }
  qe(n, "~standard", () => ({
    validate: (u) => {
      try {
        const d = u0(n, u);
        return d.success ? { value: d.data } : { issues: d.error?.issues };
      } catch {
        return c0(n, u).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Xc = /* @__PURE__ */ Y("$ZodString", (n, i) => {
  Fe.init(n, i), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? H0(n._zod.bag), n._zod.parse = (o, l) => {
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
  Rl.init(n, i), Xc.init(n, i);
}), r1 = /* @__PURE__ */ Y("$ZodGUID", (n, i) => {
  i.pattern ?? (i.pattern = T0), Ke.init(n, i);
}), l1 = /* @__PURE__ */ Y("$ZodUUID", (n, i) => {
  if (i.version) {
    const l = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[i.version];
    if (l === void 0)
      throw new Error(`Invalid UUID version: "${i.version}"`);
    i.pattern ?? (i.pattern = ph(l));
  } else
    i.pattern ?? (i.pattern = ph());
  Ke.init(n, i);
}), s1 = /* @__PURE__ */ Y("$ZodEmail", (n, i) => {
  i.pattern ?? (i.pattern = A0), Ke.init(n, i);
}), u1 = /* @__PURE__ */ Y("$ZodURL", (n, i) => {
  Ke.init(n, i), n._zod.check = (o) => {
    try {
      const l = o.value.trim();
      if (!i.normalize && i.protocol?.source === R0.source && !/^https?:\/\//i.test(l)) {
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
      const u = new URL(l);
      i.hostname && (i.hostname.lastIndex = 0, i.hostname.test(u.hostname) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: i.hostname.source,
        input: o.value,
        inst: n,
        continue: !i.abort
      })), i.protocol && (i.protocol.lastIndex = 0, i.protocol.test(u.protocol.endsWith(":") ? u.protocol.slice(0, -1) : u.protocol) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: i.protocol.source,
        input: o.value,
        inst: n,
        continue: !i.abort
      })), i.normalize ? o.value = u.href : o.value = l;
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
}), c1 = /* @__PURE__ */ Y("$ZodEmoji", (n, i) => {
  i.pattern ?? (i.pattern = j0()), Ke.init(n, i);
}), d1 = /* @__PURE__ */ Y("$ZodNanoID", (n, i) => {
  i.pattern ?? (i.pattern = k0), Ke.init(n, i);
}), f1 = /* @__PURE__ */ Y("$ZodCUID", (n, i) => {
  i.pattern ?? (i.pattern = g0), Ke.init(n, i);
}), m1 = /* @__PURE__ */ Y("$ZodCUID2", (n, i) => {
  i.pattern ?? (i.pattern = b0), Ke.init(n, i);
}), p1 = /* @__PURE__ */ Y("$ZodULID", (n, i) => {
  i.pattern ?? (i.pattern = S0), Ke.init(n, i);
}), h1 = /* @__PURE__ */ Y("$ZodXID", (n, i) => {
  i.pattern ?? (i.pattern = w0), Ke.init(n, i);
}), v1 = /* @__PURE__ */ Y("$ZodKSUID", (n, i) => {
  i.pattern ?? (i.pattern = z0), Ke.init(n, i);
}), _1 = /* @__PURE__ */ Y("$ZodISODateTime", (n, i) => {
  i.pattern ?? (i.pattern = B0(i)), Ke.init(n, i);
}), y1 = /* @__PURE__ */ Y("$ZodISODate", (n, i) => {
  i.pattern ?? (i.pattern = U0), Ke.init(n, i);
}), g1 = /* @__PURE__ */ Y("$ZodISOTime", (n, i) => {
  i.pattern ?? (i.pattern = Y0(i)), Ke.init(n, i);
}), b1 = /* @__PURE__ */ Y("$ZodISODuration", (n, i) => {
  i.pattern ?? (i.pattern = x0), Ke.init(n, i);
}), S1 = /* @__PURE__ */ Y("$ZodIPv4", (n, i) => {
  i.pattern ?? (i.pattern = M0), Ke.init(n, i), n._zod.bag.format = "ipv4";
}), w1 = /* @__PURE__ */ Y("$ZodIPv6", (n, i) => {
  i.pattern ?? (i.pattern = C0), Ke.init(n, i), n._zod.bag.format = "ipv6", n._zod.check = (o) => {
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
}), z1 = /* @__PURE__ */ Y("$ZodCIDRv4", (n, i) => {
  i.pattern ?? (i.pattern = O0), Ke.init(n, i);
}), k1 = /* @__PURE__ */ Y("$ZodCIDRv6", (n, i) => {
  i.pattern ?? (i.pattern = N0), Ke.init(n, i), n._zod.check = (o) => {
    const l = o.value.split("/");
    try {
      if (l.length !== 2)
        throw new Error();
      const [u, d] = l;
      if (!d)
        throw new Error();
      const f = Number(d);
      if (`${f}` !== d)
        throw new Error();
      if (f < 0 || f > 128)
        throw new Error();
      new URL(`http://[${u}]`);
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
function yv(n) {
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
const x1 = /* @__PURE__ */ Y("$ZodBase64", (n, i) => {
  i.pattern ?? (i.pattern = D0), Ke.init(n, i), n._zod.bag.contentEncoding = "base64", n._zod.check = (o) => {
    yv(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64",
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
});
function T1(n) {
  if (!fv.test(n))
    return !1;
  const i = n.replace(/[-_]/g, (l) => l === "-" ? "+" : "/"), o = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return yv(o);
}
const A1 = /* @__PURE__ */ Y("$ZodBase64URL", (n, i) => {
  i.pattern ?? (i.pattern = fv), Ke.init(n, i), n._zod.bag.contentEncoding = "base64url", n._zod.check = (o) => {
    T1(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
}), E1 = /* @__PURE__ */ Y("$ZodE164", (n, i) => {
  i.pattern ?? (i.pattern = Z0), Ke.init(n, i);
});
function j1(n, i = null) {
  try {
    const o = n.split(".");
    if (o.length !== 3)
      return !1;
    const [l] = o;
    if (!l)
      return !1;
    const u = JSON.parse(atob(l));
    return !("typ" in u && u?.typ !== "JWT" || !u.alg || i && (!("alg" in u) || u.alg !== i));
  } catch {
    return !1;
  }
}
const M1 = /* @__PURE__ */ Y("$ZodJWT", (n, i) => {
  Ke.init(n, i), n._zod.check = (o) => {
    j1(o.value, i.alg) || o.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
}), gv = /* @__PURE__ */ Y("$ZodNumber", (n, i) => {
  Fe.init(n, i), n._zod.pattern = n._zod.bag.pattern ?? $0, n._zod.parse = (o, l) => {
    if (i.coerce)
      try {
        o.value = Number(o.value);
      } catch {
      }
    const u = o.value;
    if (typeof u == "number" && !Number.isNaN(u) && Number.isFinite(u))
      return o;
    const d = typeof u == "number" ? Number.isNaN(u) ? "NaN" : Number.isFinite(u) ? void 0 : "Infinity" : void 0;
    return o.issues.push({
      expected: "number",
      code: "invalid_type",
      input: u,
      inst: n,
      ...d ? { received: d } : {}
    }), o;
  };
}), C1 = /* @__PURE__ */ Y("$ZodNumberFormat", (n, i) => {
  Q0.init(n, i), gv.init(n, i);
}), O1 = /* @__PURE__ */ Y("$ZodBoolean", (n, i) => {
  Fe.init(n, i), n._zod.pattern = q0, n._zod.parse = (o, l) => {
    if (i.coerce)
      try {
        o.value = !!o.value;
      } catch {
      }
    const u = o.value;
    return typeof u == "boolean" || o.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: u,
      inst: n
    }), o;
  };
}), N1 = /* @__PURE__ */ Y("$ZodUnknown", (n, i) => {
  Fe.init(n, i), n._zod.parse = (o) => o;
}), D1 = /* @__PURE__ */ Y("$ZodNever", (n, i) => {
  Fe.init(n, i), n._zod.parse = (o, l) => (o.issues.push({
    expected: "never",
    code: "invalid_type",
    input: o.value,
    inst: n
  }), o);
});
function hh(n, i, o) {
  n.issues.length && i.issues.push(...sv(o, n.issues)), i.value[o] = n.value;
}
const R1 = /* @__PURE__ */ Y("$ZodArray", (n, i) => {
  Fe.init(n, i), n._zod.parse = (o, l) => {
    const u = o.value;
    if (!Array.isArray(u))
      return o.issues.push({
        expected: "array",
        code: "invalid_type",
        input: u,
        inst: n
      }), o;
    o.value = Array(u.length);
    const d = [];
    for (let f = 0; f < u.length; f++) {
      const m = u[f], h = i.element._zod.run({
        value: m,
        issues: []
      }, l);
      h instanceof Promise ? d.push(h.then((v) => hh(v, o, f))) : hh(h, o, f);
    }
    return d.length ? Promise.all(d).then(() => o) : o;
  };
});
function xl(n, i, o, l, u, d) {
  const f = o in l;
  if (n.issues.length) {
    if (u && d && !f)
      return;
    i.issues.push(...sv(o, n.issues));
  }
  if (!f && !u) {
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
function bv(n) {
  const i = Object.keys(n.shape);
  for (const l of i)
    if (!n.shape?.[l]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${l}": expected a Zod schema`);
  const o = Wb(n.shape);
  return {
    ...n,
    keys: i,
    keySet: new Set(i),
    numKeys: i.length,
    optionalKeys: new Set(o)
  };
}
function Sv(n, i, o, l, u, d) {
  const f = [], m = u.keySet, h = u.catchall._zod, v = h.def.type, g = h.optin === "optional", b = h.optout === "optional";
  for (const k in i) {
    if (k === "__proto__" || m.has(k))
      continue;
    if (v === "never") {
      f.push(k);
      continue;
    }
    const T = h.run({ value: i[k], issues: [] }, l);
    T instanceof Promise ? n.push(T.then((A) => xl(A, o, k, i, g, b))) : xl(T, o, k, i, g, b);
  }
  return f.length && o.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: i,
    inst: d
  }), n.length ? Promise.all(n).then(() => o) : o;
}
const Z1 = /* @__PURE__ */ Y("$ZodObject", (n, i) => {
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
  const l = Rc(() => bv(i));
  qe(n._zod, "propValues", () => {
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
  const u = kl, d = i.catchall;
  let f;
  n._zod.parse = (m, h) => {
    f ?? (f = l.value);
    const v = m.value;
    if (!u(v))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: v,
        inst: n
      }), m;
    m.value = {};
    const g = [], b = f.shape;
    for (const k of f.keys) {
      const T = b[k], A = T._zod.optin === "optional", q = T._zod.optout === "optional", V = T._zod.run({ value: v[k], issues: [] }, h);
      V instanceof Promise ? g.push(V.then((J) => xl(J, m, k, v, A, q))) : xl(V, m, k, v, A, q);
    }
    return d ? Sv(g, v, m, h, l.value, n) : g.length ? Promise.all(g).then(() => m) : m;
  };
}), U1 = /* @__PURE__ */ Y("$ZodObjectJIT", (n, i) => {
  Z1.init(n, i);
  const o = n._zod.parse, l = Rc(() => bv(i)), u = (k) => {
    const T = new i1(["shape", "payload", "ctx"]), A = l.value, q = (L) => {
      const K = mh(L);
      return `shape[${K}]._zod.run({ value: input[${K}], issues: [] }, ctx)`;
    };
    T.write("const input = payload.value;");
    const V = /* @__PURE__ */ Object.create(null);
    let J = 0;
    for (const L of A.keys)
      V[L] = `key_${J++}`;
    T.write("const newResult = {};");
    for (const L of A.keys) {
      const K = V[L], P = mh(L), G = k[L], $ = G?._zod?.optin === "optional", se = G?._zod?.optout === "optional";
      T.write(`const ${K} = ${q(L)};`), $ && se ? T.write(`
        if (${K}.issues.length) {
          if (${P} in input) {
            payload.issues = payload.issues.concat(${K}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${P}, ...iss.path] : [${P}]
            })));
          }
        }
        
        if (${K}.value === undefined) {
          if (${P} in input) {
            newResult[${P}] = undefined;
          }
        } else {
          newResult[${P}] = ${K}.value;
        }
        
      `) : $ ? T.write(`
        if (${K}.issues.length) {
          payload.issues = payload.issues.concat(${K}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${P}, ...iss.path] : [${P}]
          })));
        }
        
        if (${K}.value === undefined) {
          if (${P} in input) {
            newResult[${P}] = undefined;
          }
        } else {
          newResult[${P}] = ${K}.value;
        }
        
      `) : T.write(`
        const ${K}_present = ${P} in input;
        if (${K}.issues.length) {
          payload.issues = payload.issues.concat(${K}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${P}, ...iss.path] : [${P}]
          })));
        }
        if (!${K}_present && !${K}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${P}]
          });
        }

        if (${K}_present) {
          if (${K}.value === undefined) {
            newResult[${P}] = undefined;
          } else {
            newResult[${P}] = ${K}.value;
          }
        }

      `);
    }
    T.write("payload.value = newResult;"), T.write("return payload;");
    const ae = T.compile();
    return (L, K) => ae(k, L, K);
  };
  let d;
  const f = kl, m = !Dc.jitless, v = m && Jb.value, g = i.catchall;
  let b;
  n._zod.parse = (k, T) => {
    b ?? (b = l.value);
    const A = k.value;
    return f(A) ? m && v && T?.async === !1 && T.jitless !== !0 ? (d || (d = u(i.shape)), k = d(k, T), g ? Sv([], A, k, T, b, n) : k) : o(k, T) : (k.issues.push({
      expected: "object",
      code: "invalid_type",
      input: A,
      inst: n
    }), k);
  };
});
function vh(n, i, o, l) {
  for (const d of n)
    if (d.issues.length === 0)
      return i.value = d.value, i;
  const u = n.filter((d) => !ki(d));
  return u.length === 1 ? (i.value = u[0].value, u[0]) : (i.issues.push({
    code: "invalid_union",
    input: i.value,
    inst: o,
    errors: n.map((d) => d.issues.map((f) => Oa(f, l, Ca())))
  }), i);
}
const Y1 = /* @__PURE__ */ Y("$ZodUnion", (n, i) => {
  Fe.init(n, i), qe(n._zod, "optin", () => i.options.some((l) => l._zod.optin === "optional") ? "optional" : void 0), qe(n._zod, "optout", () => i.options.some((l) => l._zod.optout === "optional") ? "optional" : void 0), qe(n._zod, "values", () => {
    if (i.options.every((l) => l._zod.values))
      return new Set(i.options.flatMap((l) => Array.from(l._zod.values)));
  }), qe(n._zod, "pattern", () => {
    if (i.options.every((l) => l._zod.pattern)) {
      const l = i.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${l.map((u) => Uc(u.source)).join("|")})$`);
    }
  });
  const o = i.options.length === 1 ? i.options[0]._zod.run : null;
  n._zod.parse = (l, u) => {
    if (o)
      return o(l, u);
    let d = !1;
    const f = [];
    for (const m of i.options) {
      const h = m._zod.run({
        value: l.value,
        issues: []
      }, u);
      if (h instanceof Promise)
        f.push(h), d = !0;
      else {
        if (h.issues.length === 0)
          return h;
        f.push(h);
      }
    }
    return d ? Promise.all(f).then((m) => vh(m, l, n, u)) : vh(f, l, n, u);
  };
}), B1 = /* @__PURE__ */ Y("$ZodIntersection", (n, i) => {
  Fe.init(n, i), n._zod.parse = (o, l) => {
    const u = o.value, d = i.left._zod.run({ value: u, issues: [] }, l), f = i.right._zod.run({ value: u, issues: [] }, l);
    return d instanceof Promise || f instanceof Promise ? Promise.all([d, f]).then(([h, v]) => _h(o, h, v)) : _h(o, d, f);
  };
});
function wc(n, i) {
  if (n === i)
    return { valid: !0, data: n };
  if (n instanceof Date && i instanceof Date && +n == +i)
    return { valid: !0, data: n };
  if (Bo(n) && Bo(i)) {
    const o = Object.keys(i), l = Object.keys(n).filter((d) => o.indexOf(d) !== -1), u = { ...n, ...i };
    for (const d of l) {
      const f = wc(n[d], i[d]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [d, ...f.mergeErrorPath]
        };
      u[d] = f.data;
    }
    return { valid: !0, data: u };
  }
  if (Array.isArray(n) && Array.isArray(i)) {
    if (n.length !== i.length)
      return { valid: !1, mergeErrorPath: [] };
    const o = [];
    for (let l = 0; l < n.length; l++) {
      const u = n[l], d = i[l], f = wc(u, d);
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
function _h(n, i, o) {
  const l = /* @__PURE__ */ new Map();
  let u;
  for (const m of i.issues)
    if (m.code === "unrecognized_keys") {
      u ?? (u = m);
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
  if (d.length && u && n.issues.push({ ...u, keys: d }), ki(n))
    return n;
  const f = wc(i.value, o.value);
  if (!f.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(f.mergeErrorPath)}`);
  return n.value = f.data, n;
}
const H1 = /* @__PURE__ */ Y("$ZodEnum", (n, i) => {
  Fe.init(n, i);
  const o = ov(i.entries), l = new Set(o);
  n._zod.values = l, n._zod.pattern = new RegExp(`^(${o.filter((u) => Pb.has(typeof u)).map((u) => typeof u == "string" ? ji(u) : u.toString()).join("|")})$`), n._zod.parse = (u, d) => {
    const f = u.value;
    return l.has(f) || u.issues.push({
      code: "invalid_value",
      values: o,
      input: f,
      inst: n
    }), u;
  };
}), X1 = /* @__PURE__ */ Y("$ZodLiteral", (n, i) => {
  if (Fe.init(n, i), i.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const o = new Set(i.values);
  n._zod.values = o, n._zod.pattern = new RegExp(`^(${i.values.map((l) => typeof l == "string" ? ji(l) : l ? ji(l.toString()) : String(l)).join("|")})$`), n._zod.parse = (l, u) => {
    const d = l.value;
    return o.has(d) || l.issues.push({
      code: "invalid_value",
      values: i.values,
      input: d,
      inst: n
    }), l;
  };
}), $1 = /* @__PURE__ */ Y("$ZodTransform", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", n._zod.parse = (o, l) => {
    if (l.direction === "backward")
      throw new iv(n.constructor.name);
    const u = i.transform(o.value, o);
    if (l.async)
      return (u instanceof Promise ? u : Promise.resolve(u)).then((f) => (o.value = f, o.fallback = !0, o));
    if (u instanceof Promise)
      throw new Ti();
    return o.value = u, o.fallback = !0, o;
  };
});
function yh(n, i) {
  return i === void 0 && (n.issues.length || n.fallback) ? { issues: [], value: void 0 } : n;
}
const wv = /* @__PURE__ */ Y("$ZodOptional", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", n._zod.optout = "optional", qe(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, void 0]) : void 0), qe(n._zod, "pattern", () => {
    const o = i.innerType._zod.pattern;
    return o ? new RegExp(`^(${Uc(o.source)})?$`) : void 0;
  }), n._zod.parse = (o, l) => {
    if (i.innerType._zod.optin === "optional") {
      const u = o.value, d = i.innerType._zod.run(o, l);
      return d instanceof Promise ? d.then((f) => yh(f, u)) : yh(d, u);
    }
    return o.value === void 0 ? o : i.innerType._zod.run(o, l);
  };
}), q1 = /* @__PURE__ */ Y("$ZodExactOptional", (n, i) => {
  wv.init(n, i), qe(n._zod, "values", () => i.innerType._zod.values), qe(n._zod, "pattern", () => i.innerType._zod.pattern), n._zod.parse = (o, l) => i.innerType._zod.run(o, l);
}), L1 = /* @__PURE__ */ Y("$ZodNullable", (n, i) => {
  Fe.init(n, i), qe(n._zod, "optin", () => i.innerType._zod.optin), qe(n._zod, "optout", () => i.innerType._zod.optout), qe(n._zod, "pattern", () => {
    const o = i.innerType._zod.pattern;
    return o ? new RegExp(`^(${Uc(o.source)}|null)$`) : void 0;
  }), qe(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, null]) : void 0), n._zod.parse = (o, l) => o.value === null ? o : i.innerType._zod.run(o, l);
}), V1 = /* @__PURE__ */ Y("$ZodDefault", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", qe(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (o, l) => {
    if (l.direction === "backward")
      return i.innerType._zod.run(o, l);
    if (o.value === void 0)
      return o.value = i.defaultValue, o;
    const u = i.innerType._zod.run(o, l);
    return u instanceof Promise ? u.then((d) => gh(d, i)) : gh(u, i);
  };
});
function gh(n, i) {
  return n.value === void 0 && (n.value = i.defaultValue), n;
}
const G1 = /* @__PURE__ */ Y("$ZodPrefault", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", qe(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (o, l) => (l.direction === "backward" || o.value === void 0 && (o.value = i.defaultValue), i.innerType._zod.run(o, l));
}), Q1 = /* @__PURE__ */ Y("$ZodNonOptional", (n, i) => {
  Fe.init(n, i), qe(n._zod, "values", () => {
    const o = i.innerType._zod.values;
    return o ? new Set([...o].filter((l) => l !== void 0)) : void 0;
  }), n._zod.parse = (o, l) => {
    const u = i.innerType._zod.run(o, l);
    return u instanceof Promise ? u.then((d) => bh(d, n)) : bh(u, n);
  };
});
function bh(n, i) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: i
  }), n;
}
const K1 = /* @__PURE__ */ Y("$ZodCatch", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", qe(n._zod, "optout", () => i.innerType._zod.optout), qe(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (o, l) => {
    if (l.direction === "backward")
      return i.innerType._zod.run(o, l);
    const u = i.innerType._zod.run(o, l);
    return u instanceof Promise ? u.then((d) => (o.value = d.value, d.issues.length && (o.value = i.catchValue({
      ...o,
      error: {
        issues: d.issues.map((f) => Oa(f, l, Ca()))
      },
      input: o.value
    }), o.issues = [], o.fallback = !0), o)) : (o.value = u.value, u.issues.length && (o.value = i.catchValue({
      ...o,
      error: {
        issues: u.issues.map((d) => Oa(d, l, Ca()))
      },
      input: o.value
    }), o.issues = [], o.fallback = !0), o);
  };
}), J1 = /* @__PURE__ */ Y("$ZodPipe", (n, i) => {
  Fe.init(n, i), qe(n._zod, "values", () => i.in._zod.values), qe(n._zod, "optin", () => i.in._zod.optin), qe(n._zod, "optout", () => i.out._zod.optout), qe(n._zod, "propValues", () => i.in._zod.propValues), n._zod.parse = (o, l) => {
    if (l.direction === "backward") {
      const d = i.out._zod.run(o, l);
      return d instanceof Promise ? d.then((f) => pl(f, i.in, l)) : pl(d, i.in, l);
    }
    const u = i.in._zod.run(o, l);
    return u instanceof Promise ? u.then((d) => pl(d, i.out, l)) : pl(u, i.out, l);
  };
});
function pl(n, i, o) {
  return n.issues.length ? (n.aborted = !0, n) : i._zod.run({ value: n.value, issues: n.issues, fallback: n.fallback }, o);
}
const P1 = /* @__PURE__ */ Y("$ZodReadonly", (n, i) => {
  Fe.init(n, i), qe(n._zod, "propValues", () => i.innerType._zod.propValues), qe(n._zod, "values", () => i.innerType._zod.values), qe(n._zod, "optin", () => i.innerType?._zod?.optin), qe(n._zod, "optout", () => i.innerType?._zod?.optout), n._zod.parse = (o, l) => {
    if (l.direction === "backward")
      return i.innerType._zod.run(o, l);
    const u = i.innerType._zod.run(o, l);
    return u instanceof Promise ? u.then(Sh) : Sh(u);
  };
});
function Sh(n) {
  return n.value = Object.freeze(n.value), n;
}
const W1 = /* @__PURE__ */ Y("$ZodCustom", (n, i) => {
  Ct.init(n, i), Fe.init(n, i), n._zod.parse = (o, l) => o, n._zod.check = (o) => {
    const l = o.value, u = i.fn(l);
    if (u instanceof Promise)
      return u.then((d) => wh(d, o, l, n));
    wh(u, o, l, n);
  };
});
function wh(n, i, o, l) {
  if (!n) {
    const u = {
      code: "custom",
      input: o,
      inst: l,
      // incorporates params.error into issue reporting
      path: [...l._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !l._zod.def.abort
      // params: inst._zod.def.params,
    };
    l._zod.def.params && (u.params = l._zod.def.params), i.issues.push(Ho(u));
  }
}
var zh;
class F1 {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(i, ...o) {
    const l = o[0];
    return this._map.set(i, l), l && typeof l == "object" && "id" in l && this._idmap.set(l.id, i), this;
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
      const l = { ...this.get(o) ?? {} };
      delete l.id;
      const u = { ...l, ...this._map.get(i) };
      return Object.keys(u).length ? u : void 0;
    }
    return this._map.get(i);
  }
  has(i) {
    return this._map.has(i);
  }
}
function I1() {
  return new F1();
}
(zh = globalThis).__zod_globalRegistry ?? (zh.__zod_globalRegistry = I1());
const No = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function eS(n, i) {
  return new n({
    type: "string",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function tS(n, i) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function kh(n, i) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function nS(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function aS(n, i) {
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
function iS(n, i) {
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
function oS(n, i) {
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
function rS(n, i) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function lS(n, i) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function sS(n, i) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function uS(n, i) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function cS(n, i) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function dS(n, i) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function fS(n, i) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function mS(n, i) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function pS(n, i) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function hS(n, i) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function vS(n, i) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function _S(n, i) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function yS(n, i) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function gS(n, i) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function bS(n, i) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function SS(n, i) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function wS(n, i) {
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
function zS(n, i) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function kS(n, i) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function xS(n, i) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function TS(n, i) {
  return new n({
    type: "number",
    checks: [],
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function AS(n, i) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function ES(n, i) {
  return new n({
    type: "boolean",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function jS(n) {
  return new n({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function MS(n, i) {
  return new n({
    type: "never",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function xh(n, i) {
  return new vv({
    check: "less_than",
    ...de(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function uc(n, i) {
  return new vv({
    check: "less_than",
    ...de(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Th(n, i) {
  return new _v({
    check: "greater_than",
    ...de(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function cc(n, i) {
  return new _v({
    check: "greater_than",
    ...de(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Ah(n, i) {
  return new G0({
    check: "multiple_of",
    ...de(i),
    value: n
  });
}
// @__NO_SIDE_EFFECTS__
function zv(n, i) {
  return new K0({
    check: "max_length",
    ...de(i),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function Tl(n, i) {
  return new J0({
    check: "min_length",
    ...de(i),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function kv(n, i) {
  return new P0({
    check: "length_equals",
    ...de(i),
    length: n
  });
}
// @__NO_SIDE_EFFECTS__
function CS(n, i) {
  return new W0({
    check: "string_format",
    format: "regex",
    ...de(i),
    pattern: n
  });
}
// @__NO_SIDE_EFFECTS__
function OS(n) {
  return new F0({
    check: "string_format",
    format: "lowercase",
    ...de(n)
  });
}
// @__NO_SIDE_EFFECTS__
function NS(n) {
  return new I0({
    check: "string_format",
    format: "uppercase",
    ...de(n)
  });
}
// @__NO_SIDE_EFFECTS__
function DS(n, i) {
  return new e1({
    check: "string_format",
    format: "includes",
    ...de(i),
    includes: n
  });
}
// @__NO_SIDE_EFFECTS__
function RS(n, i) {
  return new t1({
    check: "string_format",
    format: "starts_with",
    ...de(i),
    prefix: n
  });
}
// @__NO_SIDE_EFFECTS__
function ZS(n, i) {
  return new n1({
    check: "string_format",
    format: "ends_with",
    ...de(i),
    suffix: n
  });
}
// @__NO_SIDE_EFFECTS__
function Oi(n) {
  return new a1({
    check: "overwrite",
    tx: n
  });
}
// @__NO_SIDE_EFFECTS__
function US(n) {
  return /* @__PURE__ */ Oi((i) => i.normalize(n));
}
// @__NO_SIDE_EFFECTS__
function YS() {
  return /* @__PURE__ */ Oi((n) => n.trim());
}
// @__NO_SIDE_EFFECTS__
function BS() {
  return /* @__PURE__ */ Oi((n) => n.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function HS() {
  return /* @__PURE__ */ Oi((n) => n.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function XS() {
  return /* @__PURE__ */ Oi((n) => Kb(n));
}
// @__NO_SIDE_EFFECTS__
function $S(n, i, o) {
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
function qS(n, i, o) {
  return new n({
    type: "custom",
    check: "custom",
    fn: i,
    ...de(o)
  });
}
// @__NO_SIDE_EFFECTS__
function LS(n, i) {
  const o = /* @__PURE__ */ VS((l) => (l.addIssue = (u) => {
    if (typeof u == "string")
      l.issues.push(Ho(u, l.value, o._zod.def));
    else {
      const d = u;
      d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = l.value), d.inst ?? (d.inst = o), d.continue ?? (d.continue = !o._zod.def.abort), l.issues.push(Ho(d));
    }
  }, n(l.value, l)), i);
  return o;
}
// @__NO_SIDE_EFFECTS__
function VS(n, i) {
  const o = new Ct({
    check: "custom",
    ...de(i)
  });
  return o._zod.check = n, o;
}
function xv(n) {
  let i = n?.target ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), {
    processors: n.processors ?? {},
    metadataRegistry: n?.metadata ?? No,
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
function _t(n, i, o = { path: [], schemaPath: [] }) {
  var l;
  const u = n._zod.def, d = i.seen.get(n);
  if (d)
    return d.count++, o.schemaPath.includes(n) && (d.cycle = o.path), d.schema;
  const f = { schema: {}, count: 1, cycle: void 0, path: o.path };
  i.seen.set(n, f);
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
      n._zod.processJSONSchema(i, f.schema, g);
    else {
      const k = f.schema, T = i.processors[u.type];
      if (!T)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${u.type}`);
      T(n, i, k, g);
    }
    const b = n._zod.parent;
    b && (f.ref || (f.ref = b), _t(b, i, g), i.seen.get(b).isParent = !0);
  }
  const h = i.metadataRegistry.get(n);
  return h && Object.assign(f.schema, h), i.io === "input" && zt(n) && (delete f.schema.examples, delete f.schema.default), i.io === "input" && "_prefault" in f.schema && ((l = f.schema).default ?? (l.default = f.schema._prefault)), delete f.schema._prefault, i.seen.get(n).schema;
}
function Tv(n, i) {
  const o = n.seen.get(i);
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
  const u = (f) => {
    const m = n.target === "draft-2020-12" ? "$defs" : "definitions";
    if (n.external) {
      const b = n.external.registry.get(f[0])?.id, k = n.external.uri ?? ((A) => A);
      if (b)
        return { ref: k(b) };
      const T = f[1].defId ?? f[1].schema.id ?? `schema${n.counter++}`;
      return f[1].defId = T, { defId: T, ref: `${k("__shared")}#/${m}/${T}` };
    }
    if (f[1] === o)
      return { ref: "#" };
    const v = `#/${m}/`, g = f[1].schema.id ?? `__schema${n.counter++}`;
    return { defId: g, ref: v + g };
  }, d = (f) => {
    if (f[1].schema.$ref)
      return;
    const m = f[1], { ref: h, defId: v } = u(f);
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
function Av(n, i) {
  const o = n.seen.get(i);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const l = (m) => {
    const h = n.seen.get(m);
    if (h.ref === null)
      return;
    const v = h.def ?? h.schema, g = { ...v }, b = h.ref;
    if (h.ref = null, b) {
      l(b);
      const T = n.seen.get(b), A = T.schema;
      if (A.$ref && (n.target === "draft-07" || n.target === "draft-04" || n.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(A)) : Object.assign(v, A), Object.assign(v, g), m._zod.parent === b)
        for (const V in v)
          V === "$ref" || V === "allOf" || V in g || delete v[V];
      if (A.$ref && T.def)
        for (const V in v)
          V === "$ref" || V === "allOf" || V in T.def && JSON.stringify(v[V]) === JSON.stringify(T.def[V]) && delete v[V];
    }
    const k = m._zod.parent;
    if (k && k !== b) {
      l(k);
      const T = n.seen.get(k);
      if (T?.schema.$ref && (v.$ref = T.schema.$ref, T.def))
        for (const A in v)
          A === "$ref" || A === "allOf" || A in T.def && JSON.stringify(v[A]) === JSON.stringify(T.def[A]) && delete v[A];
    }
    n.override({
      zodSchema: m,
      jsonSchema: v,
      path: h.path ?? []
    });
  };
  for (const m of [...n.seen.entries()].reverse())
    l(m[0]);
  const u = {};
  if (n.target === "draft-2020-12" ? u.$schema = "https://json-schema.org/draft/2020-12/schema" : n.target === "draft-07" ? u.$schema = "http://json-schema.org/draft-07/schema#" : n.target === "draft-04" ? u.$schema = "http://json-schema.org/draft-04/schema#" : n.target, n.external?.uri) {
    const m = n.external.registry.get(i)?.id;
    if (!m)
      throw new Error("Schema is missing an `id` property");
    u.$id = n.external.uri(m);
  }
  Object.assign(u, o.def ?? o.schema);
  const d = n.metadataRegistry.get(i)?.id;
  d !== void 0 && u.id === d && delete u.id;
  const f = n.external?.defs ?? {};
  for (const m of n.seen.entries()) {
    const h = m[1];
    h.def && h.defId && (h.def.id === h.defId && delete h.def.id, f[h.defId] = h.def);
  }
  n.external || Object.keys(f).length > 0 && (n.target === "draft-2020-12" ? u.$defs = f : u.definitions = f);
  try {
    const m = JSON.parse(JSON.stringify(u));
    return Object.defineProperty(m, "~standard", {
      value: {
        ...i["~standard"],
        jsonSchema: {
          input: Al(i, "input", n.processors),
          output: Al(i, "output", n.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), m;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function zt(n, i) {
  const o = i ?? { seen: /* @__PURE__ */ new Set() };
  if (o.seen.has(n))
    return !1;
  o.seen.add(n);
  const l = n._zod.def;
  if (l.type === "transform")
    return !0;
  if (l.type === "array")
    return zt(l.element, o);
  if (l.type === "set")
    return zt(l.valueType, o);
  if (l.type === "lazy")
    return zt(l.getter(), o);
  if (l.type === "promise" || l.type === "optional" || l.type === "nonoptional" || l.type === "nullable" || l.type === "readonly" || l.type === "default" || l.type === "prefault")
    return zt(l.innerType, o);
  if (l.type === "intersection")
    return zt(l.left, o) || zt(l.right, o);
  if (l.type === "record" || l.type === "map")
    return zt(l.keyType, o) || zt(l.valueType, o);
  if (l.type === "pipe")
    return n._zod.traits.has("$ZodCodec") ? !0 : zt(l.in, o) || zt(l.out, o);
  if (l.type === "object") {
    for (const u in l.shape)
      if (zt(l.shape[u], o))
        return !0;
    return !1;
  }
  if (l.type === "union") {
    for (const u of l.options)
      if (zt(u, o))
        return !0;
    return !1;
  }
  if (l.type === "tuple") {
    for (const u of l.items)
      if (zt(u, o))
        return !0;
    return !!(l.rest && zt(l.rest, o));
  }
  return !1;
}
const GS = (n, i = {}) => (o) => {
  const l = xv({ ...o, processors: i });
  return _t(n, l), Tv(l, n), Av(l, n);
}, Al = (n, i, o = {}) => (l) => {
  const { libraryOptions: u, target: d } = l ?? {}, f = xv({ ...u ?? {}, target: d, io: i, processors: o });
  return _t(n, f), Tv(f, n), Av(f, n);
}, QS = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, KS = (n, i, o, l) => {
  const u = o;
  u.type = "string";
  const { minimum: d, maximum: f, format: m, patterns: h, contentEncoding: v } = n._zod.bag;
  if (typeof d == "number" && (u.minLength = d), typeof f == "number" && (u.maxLength = f), m && (u.format = QS[m] ?? m, u.format === "" && delete u.format, m === "time" && delete u.format), v && (u.contentEncoding = v), h && h.size > 0) {
    const g = [...h];
    g.length === 1 ? u.pattern = g[0].source : g.length > 1 && (u.allOf = [
      ...g.map((b) => ({
        ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: b.source
      }))
    ]);
  }
}, JS = (n, i, o, l) => {
  const u = o, { minimum: d, maximum: f, format: m, multipleOf: h, exclusiveMaximum: v, exclusiveMinimum: g } = n._zod.bag;
  typeof m == "string" && m.includes("int") ? u.type = "integer" : u.type = "number";
  const b = typeof g == "number" && g >= (d ?? Number.NEGATIVE_INFINITY), k = typeof v == "number" && v <= (f ?? Number.POSITIVE_INFINITY), T = i.target === "draft-04" || i.target === "openapi-3.0";
  b ? T ? (u.minimum = g, u.exclusiveMinimum = !0) : u.exclusiveMinimum = g : typeof d == "number" && (u.minimum = d), k ? T ? (u.maximum = v, u.exclusiveMaximum = !0) : u.exclusiveMaximum = v : typeof f == "number" && (u.maximum = f), typeof h == "number" && (u.multipleOf = h);
}, PS = (n, i, o, l) => {
  o.type = "boolean";
}, WS = (n, i, o, l) => {
  o.not = {};
}, FS = (n, i, o, l) => {
}, IS = (n, i, o, l) => {
  const u = n._zod.def, d = ov(u.entries);
  d.every((f) => typeof f == "number") && (o.type = "number"), d.every((f) => typeof f == "string") && (o.type = "string"), o.enum = d;
}, ew = (n, i, o, l) => {
  const u = n._zod.def, d = [];
  for (const f of u.values)
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
}, tw = (n, i, o, l) => {
  if (i.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, nw = (n, i, o, l) => {
  if (i.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, aw = (n, i, o, l) => {
  const u = o, d = n._zod.def, { minimum: f, maximum: m } = n._zod.bag;
  typeof f == "number" && (u.minItems = f), typeof m == "number" && (u.maxItems = m), u.type = "array", u.items = _t(d.element, i, {
    ...l,
    path: [...l.path, "items"]
  });
}, iw = (n, i, o, l) => {
  const u = o, d = n._zod.def;
  u.type = "object", u.properties = {};
  const f = d.shape;
  for (const v in f)
    u.properties[v] = _t(f[v], i, {
      ...l,
      path: [...l.path, "properties", v]
    });
  const m = new Set(Object.keys(f)), h = new Set([...m].filter((v) => {
    const g = d.shape[v]._zod;
    return i.io === "input" ? g.optin === void 0 : g.optout === void 0;
  }));
  h.size > 0 && (u.required = Array.from(h)), d.catchall?._zod.def.type === "never" ? u.additionalProperties = !1 : d.catchall ? d.catchall && (u.additionalProperties = _t(d.catchall, i, {
    ...l,
    path: [...l.path, "additionalProperties"]
  })) : i.io === "output" && (u.additionalProperties = !1);
}, ow = (n, i, o, l) => {
  const u = n._zod.def, d = u.inclusive === !1, f = u.options.map((m, h) => _t(m, i, {
    ...l,
    path: [...l.path, d ? "oneOf" : "anyOf", h]
  }));
  d ? o.oneOf = f : o.anyOf = f;
}, rw = (n, i, o, l) => {
  const u = n._zod.def, d = _t(u.left, i, {
    ...l,
    path: [...l.path, "allOf", 0]
  }), f = _t(u.right, i, {
    ...l,
    path: [...l.path, "allOf", 1]
  }), m = (v) => "allOf" in v && Object.keys(v).length === 1, h = [
    ...m(d) ? d.allOf : [d],
    ...m(f) ? f.allOf : [f]
  ];
  o.allOf = h;
}, lw = (n, i, o, l) => {
  const u = n._zod.def, d = _t(u.innerType, i, l), f = i.seen.get(n);
  i.target === "openapi-3.0" ? (f.ref = u.innerType, o.nullable = !0) : o.anyOf = [d, { type: "null" }];
}, sw = (n, i, o, l) => {
  const u = n._zod.def;
  _t(u.innerType, i, l);
  const d = i.seen.get(n);
  d.ref = u.innerType;
}, uw = (n, i, o, l) => {
  const u = n._zod.def;
  _t(u.innerType, i, l);
  const d = i.seen.get(n);
  d.ref = u.innerType, o.default = JSON.parse(JSON.stringify(u.defaultValue));
}, cw = (n, i, o, l) => {
  const u = n._zod.def;
  _t(u.innerType, i, l);
  const d = i.seen.get(n);
  d.ref = u.innerType, i.io === "input" && (o._prefault = JSON.parse(JSON.stringify(u.defaultValue)));
}, dw = (n, i, o, l) => {
  const u = n._zod.def;
  _t(u.innerType, i, l);
  const d = i.seen.get(n);
  d.ref = u.innerType;
  let f;
  try {
    f = u.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  o.default = f;
}, fw = (n, i, o, l) => {
  const u = n._zod.def, d = u.in._zod.traits.has("$ZodTransform"), f = i.io === "input" ? d ? u.out : u.in : u.out;
  _t(f, i, l);
  const m = i.seen.get(n);
  m.ref = f;
}, mw = (n, i, o, l) => {
  const u = n._zod.def;
  _t(u.innerType, i, l);
  const d = i.seen.get(n);
  d.ref = u.innerType, o.readOnly = !0;
}, Ev = (n, i, o, l) => {
  const u = n._zod.def;
  _t(u.innerType, i, l);
  const d = i.seen.get(n);
  d.ref = u.innerType;
}, pw = /* @__PURE__ */ Y("ZodISODateTime", (n, i) => {
  _1.init(n, i), Je.init(n, i);
});
function hw(n) {
  return /* @__PURE__ */ wS(pw, n);
}
const vw = /* @__PURE__ */ Y("ZodISODate", (n, i) => {
  y1.init(n, i), Je.init(n, i);
});
function _w(n) {
  return /* @__PURE__ */ zS(vw, n);
}
const yw = /* @__PURE__ */ Y("ZodISOTime", (n, i) => {
  g1.init(n, i), Je.init(n, i);
});
function gw(n) {
  return /* @__PURE__ */ kS(yw, n);
}
const bw = /* @__PURE__ */ Y("ZodISODuration", (n, i) => {
  b1.init(n, i), Je.init(n, i);
});
function Sw(n) {
  return /* @__PURE__ */ xS(bw, n);
}
const ww = (n, i) => {
  cv.init(n, i), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (o) => s0(n, o)
      // enumerable: false,
    },
    flatten: {
      value: (o) => l0(n, o)
      // enumerable: false,
    },
    addIssue: {
      value: (o) => {
        n.issues.push(o), n.message = JSON.stringify(n.issues, Sc, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (o) => {
        n.issues.push(...o), n.message = JSON.stringify(n.issues, Sc, 2);
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
}, Wt = /* @__PURE__ */ Y("ZodError", ww, {
  Parent: Error
}), zw = /* @__PURE__ */ Bc(Wt), kw = /* @__PURE__ */ Hc(Wt), xw = /* @__PURE__ */ Nl(Wt), Tw = /* @__PURE__ */ Dl(Wt), Aw = /* @__PURE__ */ d0(Wt), Ew = /* @__PURE__ */ f0(Wt), jw = /* @__PURE__ */ m0(Wt), Mw = /* @__PURE__ */ p0(Wt), Cw = /* @__PURE__ */ h0(Wt), Ow = /* @__PURE__ */ v0(Wt), Nw = /* @__PURE__ */ _0(Wt), Dw = /* @__PURE__ */ y0(Wt), Eh = /* @__PURE__ */ new WeakMap();
function Lo(n, i, o) {
  const l = Object.getPrototypeOf(n);
  let u = Eh.get(l);
  if (u || (u = /* @__PURE__ */ new Set(), Eh.set(l, u)), !u.has(i)) {
    u.add(i);
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
const Ie = /* @__PURE__ */ Y("ZodType", (n, i) => (Fe.init(n, i), Object.assign(n["~standard"], {
  jsonSchema: {
    input: Al(n, "input"),
    output: Al(n, "output")
  }
}), n.toJSONSchema = GS(n, {}), n.def = i, n.type = i.type, Object.defineProperty(n, "_def", { value: i }), n.parse = (o, l) => zw(n, o, l, { callee: n.parse }), n.safeParse = (o, l) => xw(n, o, l), n.parseAsync = async (o, l) => kw(n, o, l, { callee: n.parseAsync }), n.safeParseAsync = async (o, l) => Tw(n, o, l), n.spa = n.safeParseAsync, n.encode = (o, l) => Aw(n, o, l), n.decode = (o, l) => Ew(n, o, l), n.encodeAsync = async (o, l) => jw(n, o, l), n.decodeAsync = async (o, l) => Mw(n, o, l), n.safeEncode = (o, l) => Cw(n, o, l), n.safeDecode = (o, l) => Ow(n, o, l), n.safeEncodeAsync = async (o, l) => Nw(n, o, l), n.safeDecodeAsync = async (o, l) => Dw(n, o, l), Lo(n, "ZodType", {
  check(...o) {
    const l = this.def;
    return this.clone(aa(l, {
      checks: [
        ...l.checks ?? [],
        ...o.map((u) => typeof u == "function" ? { _zod: { check: u, def: { check: "custom" }, onattach: [] } } : u)
      ]
    }), { parent: !0 });
  },
  with(...o) {
    return this.check(...o);
  },
  clone(o, l) {
    return ia(this, o, l);
  },
  brand() {
    return this;
  },
  register(o, l) {
    return o.add(this, l), this;
  },
  refine(o, l) {
    return this.check(A2(o, l));
  },
  superRefine(o, l) {
    return this.check(E2(o, l));
  },
  overwrite(o) {
    return this.check(/* @__PURE__ */ Oi(o));
  },
  optional() {
    return Oh(this);
  },
  exactOptional() {
    return p2(this);
  },
  nullable() {
    return Nh(this);
  },
  nullish() {
    return Oh(Nh(this));
  },
  nonoptional(o) {
    return b2(this, o);
  },
  array() {
    return Aa(this);
  },
  or(o) {
    return Cv([this, o]);
  },
  and(o) {
    return u2(this, o);
  },
  transform(o) {
    return Dh(this, f2(o));
  },
  default(o) {
    return _2(this, o);
  },
  prefault(o) {
    return g2(this, o);
  },
  catch(o) {
    return w2(this, o);
  },
  pipe(o) {
    return Dh(this, o);
  },
  readonly() {
    return x2(this);
  },
  describe(o) {
    const l = this.clone();
    return No.add(l, { description: o }), l;
  },
  meta(...o) {
    if (o.length === 0)
      return No.get(this);
    const l = this.clone();
    return No.add(l, o[0]), l;
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
    return No.get(n)?.description;
  },
  configurable: !0
}), n)), jv = /* @__PURE__ */ Y("_ZodString", (n, i) => {
  Xc.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, u, d) => KS(n, l, u);
  const o = n._zod.bag;
  n.format = o.format ?? null, n.minLength = o.minimum ?? null, n.maxLength = o.maximum ?? null, Lo(n, "_ZodString", {
    regex(...l) {
      return this.check(/* @__PURE__ */ CS(...l));
    },
    includes(...l) {
      return this.check(/* @__PURE__ */ DS(...l));
    },
    startsWith(...l) {
      return this.check(/* @__PURE__ */ RS(...l));
    },
    endsWith(...l) {
      return this.check(/* @__PURE__ */ ZS(...l));
    },
    min(...l) {
      return this.check(/* @__PURE__ */ Tl(...l));
    },
    max(...l) {
      return this.check(/* @__PURE__ */ zv(...l));
    },
    length(...l) {
      return this.check(/* @__PURE__ */ kv(...l));
    },
    nonempty(...l) {
      return this.check(/* @__PURE__ */ Tl(1, ...l));
    },
    lowercase(l) {
      return this.check(/* @__PURE__ */ OS(l));
    },
    uppercase(l) {
      return this.check(/* @__PURE__ */ NS(l));
    },
    trim() {
      return this.check(/* @__PURE__ */ YS());
    },
    normalize(...l) {
      return this.check(/* @__PURE__ */ US(...l));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ BS());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ HS());
    },
    slugify() {
      return this.check(/* @__PURE__ */ XS());
    }
  });
}), Rw = /* @__PURE__ */ Y("ZodString", (n, i) => {
  Xc.init(n, i), jv.init(n, i), n.email = (o) => n.check(/* @__PURE__ */ tS(Zw, o)), n.url = (o) => n.check(/* @__PURE__ */ rS(Uw, o)), n.jwt = (o) => n.check(/* @__PURE__ */ SS(Fw, o)), n.emoji = (o) => n.check(/* @__PURE__ */ lS(Yw, o)), n.guid = (o) => n.check(/* @__PURE__ */ kh(jh, o)), n.uuid = (o) => n.check(/* @__PURE__ */ nS(hl, o)), n.uuidv4 = (o) => n.check(/* @__PURE__ */ aS(hl, o)), n.uuidv6 = (o) => n.check(/* @__PURE__ */ iS(hl, o)), n.uuidv7 = (o) => n.check(/* @__PURE__ */ oS(hl, o)), n.nanoid = (o) => n.check(/* @__PURE__ */ sS(Bw, o)), n.guid = (o) => n.check(/* @__PURE__ */ kh(jh, o)), n.cuid = (o) => n.check(/* @__PURE__ */ uS(Hw, o)), n.cuid2 = (o) => n.check(/* @__PURE__ */ cS(Xw, o)), n.ulid = (o) => n.check(/* @__PURE__ */ dS($w, o)), n.base64 = (o) => n.check(/* @__PURE__ */ yS(Jw, o)), n.base64url = (o) => n.check(/* @__PURE__ */ gS(Pw, o)), n.xid = (o) => n.check(/* @__PURE__ */ fS(qw, o)), n.ksuid = (o) => n.check(/* @__PURE__ */ mS(Lw, o)), n.ipv4 = (o) => n.check(/* @__PURE__ */ pS(Vw, o)), n.ipv6 = (o) => n.check(/* @__PURE__ */ hS(Gw, o)), n.cidrv4 = (o) => n.check(/* @__PURE__ */ vS(Qw, o)), n.cidrv6 = (o) => n.check(/* @__PURE__ */ _S(Kw, o)), n.e164 = (o) => n.check(/* @__PURE__ */ bS(Ww, o)), n.datetime = (o) => n.check(hw(o)), n.date = (o) => n.check(_w(o)), n.time = (o) => n.check(gw(o)), n.duration = (o) => n.check(Sw(o));
});
function vt(n) {
  return /* @__PURE__ */ eS(Rw, n);
}
const Je = /* @__PURE__ */ Y("ZodStringFormat", (n, i) => {
  Ke.init(n, i), jv.init(n, i);
}), Zw = /* @__PURE__ */ Y("ZodEmail", (n, i) => {
  s1.init(n, i), Je.init(n, i);
}), jh = /* @__PURE__ */ Y("ZodGUID", (n, i) => {
  r1.init(n, i), Je.init(n, i);
}), hl = /* @__PURE__ */ Y("ZodUUID", (n, i) => {
  l1.init(n, i), Je.init(n, i);
}), Uw = /* @__PURE__ */ Y("ZodURL", (n, i) => {
  u1.init(n, i), Je.init(n, i);
}), Yw = /* @__PURE__ */ Y("ZodEmoji", (n, i) => {
  c1.init(n, i), Je.init(n, i);
}), Bw = /* @__PURE__ */ Y("ZodNanoID", (n, i) => {
  d1.init(n, i), Je.init(n, i);
}), Hw = /* @__PURE__ */ Y("ZodCUID", (n, i) => {
  f1.init(n, i), Je.init(n, i);
}), Xw = /* @__PURE__ */ Y("ZodCUID2", (n, i) => {
  m1.init(n, i), Je.init(n, i);
}), $w = /* @__PURE__ */ Y("ZodULID", (n, i) => {
  p1.init(n, i), Je.init(n, i);
}), qw = /* @__PURE__ */ Y("ZodXID", (n, i) => {
  h1.init(n, i), Je.init(n, i);
}), Lw = /* @__PURE__ */ Y("ZodKSUID", (n, i) => {
  v1.init(n, i), Je.init(n, i);
}), Vw = /* @__PURE__ */ Y("ZodIPv4", (n, i) => {
  S1.init(n, i), Je.init(n, i);
}), Gw = /* @__PURE__ */ Y("ZodIPv6", (n, i) => {
  w1.init(n, i), Je.init(n, i);
}), Qw = /* @__PURE__ */ Y("ZodCIDRv4", (n, i) => {
  z1.init(n, i), Je.init(n, i);
}), Kw = /* @__PURE__ */ Y("ZodCIDRv6", (n, i) => {
  k1.init(n, i), Je.init(n, i);
}), Jw = /* @__PURE__ */ Y("ZodBase64", (n, i) => {
  x1.init(n, i), Je.init(n, i);
}), Pw = /* @__PURE__ */ Y("ZodBase64URL", (n, i) => {
  A1.init(n, i), Je.init(n, i);
}), Ww = /* @__PURE__ */ Y("ZodE164", (n, i) => {
  E1.init(n, i), Je.init(n, i);
}), Fw = /* @__PURE__ */ Y("ZodJWT", (n, i) => {
  M1.init(n, i), Je.init(n, i);
}), Mv = /* @__PURE__ */ Y("ZodNumber", (n, i) => {
  gv.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, u, d) => JS(n, l, u), Lo(n, "ZodNumber", {
    gt(l, u) {
      return this.check(/* @__PURE__ */ Th(l, u));
    },
    gte(l, u) {
      return this.check(/* @__PURE__ */ cc(l, u));
    },
    min(l, u) {
      return this.check(/* @__PURE__ */ cc(l, u));
    },
    lt(l, u) {
      return this.check(/* @__PURE__ */ xh(l, u));
    },
    lte(l, u) {
      return this.check(/* @__PURE__ */ uc(l, u));
    },
    max(l, u) {
      return this.check(/* @__PURE__ */ uc(l, u));
    },
    int(l) {
      return this.check(Mh(l));
    },
    safe(l) {
      return this.check(Mh(l));
    },
    positive(l) {
      return this.check(/* @__PURE__ */ Th(0, l));
    },
    nonnegative(l) {
      return this.check(/* @__PURE__ */ cc(0, l));
    },
    negative(l) {
      return this.check(/* @__PURE__ */ xh(0, l));
    },
    nonpositive(l) {
      return this.check(/* @__PURE__ */ uc(0, l));
    },
    multipleOf(l, u) {
      return this.check(/* @__PURE__ */ Ah(l, u));
    },
    step(l, u) {
      return this.check(/* @__PURE__ */ Ah(l, u));
    },
    finite() {
      return this;
    }
  });
  const o = n._zod.bag;
  n.minValue = Math.max(o.minimum ?? Number.NEGATIVE_INFINITY, o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(o.maximum ?? Number.POSITIVE_INFINITY, o.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (o.format ?? "").includes("int") || Number.isSafeInteger(o.multipleOf ?? 0.5), n.isFinite = !0, n.format = o.format ?? null;
});
function Iw(n) {
  return /* @__PURE__ */ TS(Mv, n);
}
const e2 = /* @__PURE__ */ Y("ZodNumberFormat", (n, i) => {
  C1.init(n, i), Mv.init(n, i);
});
function Mh(n) {
  return /* @__PURE__ */ AS(e2, n);
}
const t2 = /* @__PURE__ */ Y("ZodBoolean", (n, i) => {
  O1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => PS(n, o, l);
});
function El(n) {
  return /* @__PURE__ */ ES(t2, n);
}
const n2 = /* @__PURE__ */ Y("ZodUnknown", (n, i) => {
  N1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => FS();
});
function Ch() {
  return /* @__PURE__ */ jS(n2);
}
const a2 = /* @__PURE__ */ Y("ZodNever", (n, i) => {
  D1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => WS(n, o, l);
});
function i2(n) {
  return /* @__PURE__ */ MS(a2, n);
}
const o2 = /* @__PURE__ */ Y("ZodArray", (n, i) => {
  R1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => aw(n, o, l, u), n.element = i.element, Lo(n, "ZodArray", {
    min(o, l) {
      return this.check(/* @__PURE__ */ Tl(o, l));
    },
    nonempty(o) {
      return this.check(/* @__PURE__ */ Tl(1, o));
    },
    max(o, l) {
      return this.check(/* @__PURE__ */ zv(o, l));
    },
    length(o, l) {
      return this.check(/* @__PURE__ */ kv(o, l));
    },
    unwrap() {
      return this.element;
    }
  });
});
function Aa(n, i) {
  return /* @__PURE__ */ $S(o2, n, i);
}
const r2 = /* @__PURE__ */ Y("ZodObject", (n, i) => {
  U1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => iw(n, o, l, u), qe(n, "shape", () => i.shape), Lo(n, "ZodObject", {
    keyof() {
      return Ai(Object.keys(this._zod.def.shape));
    },
    catchall(o) {
      return this.clone({ ...this._zod.def, catchall: o });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: Ch() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: Ch() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: i2() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(o) {
      return t0(this, o);
    },
    safeExtend(o) {
      return n0(this, o);
    },
    merge(o) {
      return a0(this, o);
    },
    pick(o) {
      return Ib(this, o);
    },
    omit(o) {
      return e0(this, o);
    },
    partial(...o) {
      return i0(Ov, this, o[0]);
    },
    required(...o) {
      return o0(Nv, this, o[0]);
    }
  });
});
function ja(n, i) {
  const o = {
    type: "object",
    shape: n ?? {},
    ...de(i)
  };
  return new r2(o);
}
const l2 = /* @__PURE__ */ Y("ZodUnion", (n, i) => {
  Y1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => ow(n, o, l, u), n.options = i.options;
});
function Cv(n, i) {
  return new l2({
    type: "union",
    options: n,
    ...de(i)
  });
}
const s2 = /* @__PURE__ */ Y("ZodIntersection", (n, i) => {
  B1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => rw(n, o, l, u);
});
function u2(n, i) {
  return new s2({
    type: "intersection",
    left: n,
    right: i
  });
}
const zc = /* @__PURE__ */ Y("ZodEnum", (n, i) => {
  H1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, u, d) => IS(n, l, u), n.enum = i.entries, n.options = Object.values(i.entries);
  const o = new Set(Object.keys(i.entries));
  n.extract = (l, u) => {
    const d = {};
    for (const f of l)
      if (o.has(f))
        d[f] = i.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new zc({
      ...i,
      checks: [],
      ...de(u),
      entries: d
    });
  }, n.exclude = (l, u) => {
    const d = { ...i.entries };
    for (const f of l)
      if (o.has(f))
        delete d[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new zc({
      ...i,
      checks: [],
      ...de(u),
      entries: d
    });
  };
});
function Ai(n, i) {
  const o = Array.isArray(n) ? Object.fromEntries(n.map((l) => [l, l])) : n;
  return new zc({
    type: "enum",
    entries: o,
    ...de(i)
  });
}
const c2 = /* @__PURE__ */ Y("ZodLiteral", (n, i) => {
  X1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => ew(n, o, l), n.values = new Set(i.values), Object.defineProperty(n, "value", {
    get() {
      if (i.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return i.values[0];
    }
  });
});
function jl(n, i) {
  return new c2({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...de(i)
  });
}
const d2 = /* @__PURE__ */ Y("ZodTransform", (n, i) => {
  $1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => nw(n, o), n._zod.parse = (o, l) => {
    if (l.direction === "backward")
      throw new iv(n.constructor.name);
    o.addIssue = (d) => {
      if (typeof d == "string")
        o.issues.push(Ho(d, o.value, i));
      else {
        const f = d;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = o.value), f.inst ?? (f.inst = n), o.issues.push(Ho(f));
      }
    };
    const u = i.transform(o.value, o);
    return u instanceof Promise ? u.then((d) => (o.value = d, o.fallback = !0, o)) : (o.value = u, o.fallback = !0, o);
  };
});
function f2(n) {
  return new d2({
    type: "transform",
    transform: n
  });
}
const Ov = /* @__PURE__ */ Y("ZodOptional", (n, i) => {
  wv.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => Ev(n, o, l, u), n.unwrap = () => n._zod.def.innerType;
});
function Oh(n) {
  return new Ov({
    type: "optional",
    innerType: n
  });
}
const m2 = /* @__PURE__ */ Y("ZodExactOptional", (n, i) => {
  q1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => Ev(n, o, l, u), n.unwrap = () => n._zod.def.innerType;
});
function p2(n) {
  return new m2({
    type: "optional",
    innerType: n
  });
}
const h2 = /* @__PURE__ */ Y("ZodNullable", (n, i) => {
  L1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => lw(n, o, l, u), n.unwrap = () => n._zod.def.innerType;
});
function Nh(n) {
  return new h2({
    type: "nullable",
    innerType: n
  });
}
const v2 = /* @__PURE__ */ Y("ZodDefault", (n, i) => {
  V1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => uw(n, o, l, u), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function _2(n, i) {
  return new v2({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : lv(i);
    }
  });
}
const y2 = /* @__PURE__ */ Y("ZodPrefault", (n, i) => {
  G1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => cw(n, o, l, u), n.unwrap = () => n._zod.def.innerType;
});
function g2(n, i) {
  return new y2({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : lv(i);
    }
  });
}
const Nv = /* @__PURE__ */ Y("ZodNonOptional", (n, i) => {
  Q1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => sw(n, o, l, u), n.unwrap = () => n._zod.def.innerType;
});
function b2(n, i) {
  return new Nv({
    type: "nonoptional",
    innerType: n,
    ...de(i)
  });
}
const S2 = /* @__PURE__ */ Y("ZodCatch", (n, i) => {
  K1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => dw(n, o, l, u), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function w2(n, i) {
  return new S2({
    type: "catch",
    innerType: n,
    catchValue: typeof i == "function" ? i : () => i
  });
}
const z2 = /* @__PURE__ */ Y("ZodPipe", (n, i) => {
  J1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => fw(n, o, l, u), n.in = i.in, n.out = i.out;
});
function Dh(n, i) {
  return new z2({
    type: "pipe",
    in: n,
    out: i
    // ...util.normalizeParams(params),
  });
}
const k2 = /* @__PURE__ */ Y("ZodReadonly", (n, i) => {
  P1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => mw(n, o, l, u), n.unwrap = () => n._zod.def.innerType;
});
function x2(n) {
  return new k2({
    type: "readonly",
    innerType: n
  });
}
const T2 = /* @__PURE__ */ Y("ZodCustom", (n, i) => {
  W1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, l, u) => tw(n, o);
});
function A2(n, i = {}) {
  return /* @__PURE__ */ qS(T2, n, i);
}
function E2(n, i) {
  return /* @__PURE__ */ LS(n, i);
}
const Ei = vt().regex(/^[a-z0-9_]+\.[a-z0-9_]+$/, "Must be a Home Assistant entity ID"), ke = Ei.optional(), j2 = ja({
  segment_id: Iw().int().nonnegative(),
  area_id: vt().min(1).optional(),
  name: vt().min(1),
  icon: vt().optional(),
  include_in_floor_clean: El().optional().default(!0)
}).passthrough(), M2 = ja({
  id: vt().min(1),
  name: vt().min(1),
  map_entity: Ei,
  map_select_option: vt().min(1).optional(),
  vacuum_then_mop_routine: Ei.refine((n) => n.startsWith("button."), "Routine must be a button entity").optional(),
  assisted_carry: El().optional().default(!1),
  rooms: Aa(j2).min(1)
}).passthrough(), C2 = ja({
  id: vt().min(1),
  name: vt().min(1),
  icon: vt().optional(),
  strategy: Ai(["custom", "smartplan"]),
  cleaning_type: Ai(["vacuum", "mop", "vacuum_and_mop", "vacuum_then_mop"]).optional(),
  fan_speed: vt().optional(),
  mop_mode: vt().optional(),
  mop_intensity: vt().optional(),
  cleaning_count: Cv([jl(1), jl(2)]).optional()
}).passthrough(), Dv = ja({
  type: jl("custom:roborock-vacuum-map-card").optional(),
  entity: Ei.refine((n) => n.startsWith("vacuum."), "Entity must be a vacuum"),
  name: vt().optional(),
  language: Ai(["en", "nl", "pl", "tr"]).optional().default("en"),
  entities: ja({
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
    last_clean_end: ke,
    dock_clean_water_empty: ke,
    dock_dirty_water_full: ke,
    dock_error: ke,
    dock_clean_fluid_empty: ke,
    dock_detergent_empty: ke
  }).passthrough().optional().default({}),
  floors: Aa(M2).min(1),
  presets: Aa(C2).optional().default([]),
  default_preset: vt().optional().default("vacuum_only"),
  vacuum_mode_fallback: jl("set_clean_motor_mode").optional(),
  enable_mop_only: El().optional().default(!1),
  mop_routes: ja({
    vacuum_and_mop: Aa(vt().min(1)).min(1).optional(),
    mop: Aa(vt().min(1)).min(1).optional()
  }).optional(),
  consumables: Aa(
    ja({
      kind: Ai(["main_brush", "side_brush", "filter", "sensors", "strainer", "mop", "roller", "cleaning_brush"]),
      sensor: Ei,
      reset_button: Ei.refine((n) => n.startsWith("button."), "Reset must be a button entity").optional()
    })
  ).optional(),
  enable_smartplan: El().optional(),
  cleaning_count_command: Ai(["set_clean_repeat_times", "app_segment_clean"]).optional()
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
  const l = /* @__PURE__ */ new Set();
  for (const [d, f] of n.floors.entries()) {
    l.has(f.id) && i.addIssue({ code: "custom", path: ["floors", d, "id"], message: "Floor IDs must be unique" }), l.add(f.id);
    const m = /* @__PURE__ */ new Set();
    for (const [h, v] of f.rooms.entries())
      m.has(v.segment_id) && i.addIssue({
        code: "custom",
        path: ["floors", d, "rooms", h, "segment_id"],
        message: "Segment IDs must be unique within a floor"
      }), m.add(v.segment_id);
  }
  const u = /* @__PURE__ */ new Set(["vacuum_only", "mop_only", "vacuum_and_mop", "vacuum_then_mop", "smartplan"]);
  for (const [d, f] of n.presets.entries())
    u.has(f.id) && i.addIssue({ code: "custom", path: ["presets", d, "id"], message: "Preset IDs must be unique" }), u.add(f.id);
  n.default_preset && !u.has(n.default_preset) && i.addIssue({ code: "custom", path: ["default_preset"], message: "Default preset does not exist" });
});
function O2(n) {
  return Dv.parse(n);
}
function N2(n) {
  const i = Dv.safeParse(n);
  return i.success ? [] : i.error.issues.map((o) => `${o.path.join(".") || "config"}: ${o.message}`);
}
function Rv() {
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
function vl(n) {
  return typeof n == "number" && Number.isFinite(n);
}
function $c(n) {
  const i = n?.attributes.calibration_points;
  return Array.isArray(i) ? i.flatMap((o) => {
    const l = o;
    return !vl(l.vacuum?.x) || !vl(l.vacuum?.y) || !vl(l.map?.x) || !vl(l.map?.y) ? [] : [l];
  }) : [];
}
function Zv(n) {
  const i = n?.attributes.rooms;
  return i ? (Array.isArray(i) ? i.map((l, u) => [String(u), l]) : typeof i == "object" ? Object.entries(i) : []).flatMap(([l, u]) => {
    if (!u || typeof u != "object") return [];
    const d = u, f = d.number ?? d.room_id ?? d.segment_id ?? l, m = Number(f), h = Number(d.x0), v = Number(d.y0), g = Number(d.x1), b = Number(d.y1);
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
function Do(n, i, o) {
  if (o.length < 3) throw new Error("At least three calibration points are required");
  const [l, u, d] = o, f = u.vacuum.x - l.vacuum.x, m = u.vacuum.y - l.vacuum.y, h = d.vacuum.x - l.vacuum.x, v = d.vacuum.y - l.vacuum.y, g = f * v - m * h;
  if (g === 0) throw new Error("Calibration points are degenerate");
  const b = n - l.vacuum.x, k = i - l.vacuum.y, T = (b * v - k * h) / g, A = (f * k - m * b) / g;
  return {
    x: l.map.x + T * (u.map.x - l.map.x) + A * (d.map.x - l.map.x),
    y: l.map.y + T * (u.map.y - l.map.y) + A * (d.map.y - l.map.y)
  };
}
function _l(n, i, o) {
  if (o.length < 3) throw new Error("At least three calibration points are required");
  const [l, u, d] = o, f = u.map.x - l.map.x, m = u.map.y - l.map.y, h = d.map.x - l.map.x, v = d.map.y - l.map.y, g = f * v - m * h;
  if (g === 0) throw new Error("Calibration points are degenerate");
  const b = n - l.map.x, k = i - l.map.y, T = (b * v - k * h) / g, A = (f * k - m * b) / g;
  return {
    x: l.vacuum.x + T * (u.vacuum.x - l.vacuum.x) + A * (d.vacuum.x - l.vacuum.x),
    y: l.vacuum.y + T * (u.vacuum.y - l.vacuum.y) + A * (d.vacuum.y - l.vacuum.y)
  };
}
function Uo(n) {
  return {
    x1: Math.min(n.x1, n.x2),
    y1: Math.min(n.y1, n.y2),
    x2: Math.max(n.x1, n.x2),
    y2: Math.max(n.y1, n.y2)
  };
}
function kc(n, i, o) {
  const l = Uo(n), u = l.x2 - l.x1, d = l.y2 - l.y1, f = Math.min(Math.max(0, l.x1), Math.max(0, i - u)), m = Math.min(Math.max(0, l.y1), Math.max(0, o - d));
  return { x1: f, y1: m, x2: f + u, y2: m + d };
}
function D2(n, i) {
  const o = Uo(n), l = [
    _l(o.x1, o.y1, i),
    _l(o.x2, o.y1, i),
    _l(o.x2, o.y2, i),
    _l(o.x1, o.y2, i)
  ], u = l.map(({ x: f }) => f), d = l.map(({ y: f }) => f);
  return {
    x1: Math.round(Math.min(...u)),
    y1: Math.round(Math.min(...d)),
    x2: Math.round(Math.max(...u)),
    y2: Math.round(Math.max(...d))
  };
}
function R2(n, i) {
  return `${[
    Do(n.x0, n.y0, i),
    Do(n.x1, n.y0, i),
    Do(n.x1, n.y1, i),
    Do(n.x0, n.y1, i)
  ].map((l, u) => `${u === 0 ? "M" : "L"} ${l.x} ${l.y}`).join(" ")} Z`;
}
function Z2(n, i) {
  return Do((n.x0 + n.x1) / 2, (n.y0 + n.y1) / 2, i);
}
function U2(n) {
  return new Map(n.rooms.map((i) => [i.segment_id, i]));
}
const Y2 = "https://github.com/domidyon/roborock-vacuum-map-card/issues/new?template=model_report.yml", B2 = { tested: "tested", community: "community-tested", experimental: "experimental, please report results" };
function H2({ hass: n, config: i }) {
  const { profile: o, model: l } = Nc(n, i);
  if (o) return /* @__PURE__ */ _.jsxs("p", { className: "editor-hint", children: [
    "Model profile: ",
    o.label,
    " (",
    B2[o.status],
    ")."
  ] });
  if (!l) return null;
  const { verdict: u, name: d, protocol: f } = Lb({ model: l });
  return u === "unsupported" ? /* @__PURE__ */ _.jsxs("p", { className: "editor-hint", children: [
    d ?? l,
    " is not supported by this card",
    f ? ` (${f} protocol)` : "",
    "."
  ] }) : Ol(l)?.features ? /* @__PURE__ */ _.jsxs("p", { className: "editor-hint", children: [
    "Recognised model: ",
    d ?? l,
    " (feature data from python-roborock)."
  ] }) : /* @__PURE__ */ _.jsxs("p", { className: "editor-hint", children: [
    "No profile for ",
    d ?? l,
    " yet; options are detected from Home Assistant. ",
    /* @__PURE__ */ _.jsx("a", { href: Y2, target: "_blank", rel: "noreferrer", children: "Report your model" })
  ] });
}
function yl(n, i, o) {
  const l = [...n], [u] = l.splice(i, 1);
  return l.splice(o, 0, u), l;
}
function X2(n, i) {
  const o = typeof i == "string" ? [i] : i;
  return Object.keys(n.states).filter((l) => o.includes(l.split(".")[0])).sort();
}
function gl({
  hass: n,
  domain: i,
  value: o,
  optional: l,
  onChange: u
}) {
  const d = X2(n, i);
  return /* @__PURE__ */ _.jsxs("select", { value: o ?? "", onChange: (f) => u(f.target.value || void 0), children: [
    /* @__PURE__ */ _.jsx("option", { value: "", children: l ? "Not configured" : `Select ${typeof i == "string" ? i : i.join(" / ")}` }),
    d.map((f) => /* @__PURE__ */ _.jsx("option", { children: f }, f)),
    o && !d.includes(o) && /* @__PURE__ */ _.jsx("option", { value: o, children: o })
  ] });
}
function $2({
  areas: n,
  value: i,
  onChange: o
}) {
  const l = ne.useRef(null), [u, d] = ne.useState(() => !!customElements.get("ha-area-picker"));
  return ne.useEffect(() => {
    u || customElements.whenDefined("ha-area-picker").then(() => d(!0));
  }, [u]), ne.useEffect(() => {
    const f = l.current;
    if (!f) return;
    f.value = i, f.noAdd = !0;
    const m = (h) => o(h.detail.value || void 0);
    return f.addEventListener("value-changed", m), () => f.removeEventListener("value-changed", m);
  }, [u, o, i]), u ? /* @__PURE__ */ _.jsx("ha-area-picker", { ref: l, value: i ?? "", "no-add": !0 }) : /* @__PURE__ */ _.jsxs("select", { value: i ?? "", onChange: (f) => o(f.target.value || void 0), children: [
    /* @__PURE__ */ _.jsx("option", { value: "", children: "Unmapped" }),
    n.map((f) => /* @__PURE__ */ _.jsxs("option", { value: f.area_id, children: [
      f.name,
      " (",
      f.area_id,
      ")"
    ] }, f.area_id)),
    i && !n.some((f) => f.area_id === i) && /* @__PURE__ */ _.jsx("option", { value: i, children: i })
  ] });
}
function q2({ hass: n, config: i, onChange: o }) {
  const l = N2(i), u = (m, h) => {
    const v = [...i.floors];
    v[m] = h, o({ ...i, floors: v });
  }, d = i.entities?.map_select ? n.states[i.entities.map_select]?.attributes.options ?? [] : [], f = Object.values(n.areas ?? {}).sort((m, h) => m.name.localeCompare(h.name));
  return /* @__PURE__ */ _.jsxs("div", { className: "editor", children: [
    /* @__PURE__ */ _.jsx("h2", { children: "Roborock Vacuum Map Card" }),
    /* @__PURE__ */ _.jsx("p", { children: "Configure the Roborock entities, calibrated maps, room mappings and job presets." }),
    l.length > 0 && /* @__PURE__ */ _.jsx("div", { className: "editor-errors", role: "alert", children: l.map((m) => /* @__PURE__ */ _.jsx("div", { children: m }, m)) }),
    /* @__PURE__ */ _.jsxs("section", { children: [
      /* @__PURE__ */ _.jsx("h3", { children: "Card" }),
      /* @__PURE__ */ _.jsxs("label", { children: [
        "Name",
        /* @__PURE__ */ _.jsx("input", { value: i.name ?? "", placeholder: "Use vacuum name", onChange: (m) => o({ ...i, name: m.target.value || void 0 }) })
      ] }),
      /* @__PURE__ */ _.jsxs("label", { children: [
        "Language",
        /* @__PURE__ */ _.jsxs("select", { value: i.language ?? "en", onChange: (m) => o({ ...i, language: m.target.value }), children: [
          /* @__PURE__ */ _.jsx("option", { value: "en", children: "English" }),
          /* @__PURE__ */ _.jsx("option", { value: "nl", children: "Nederlands" }),
          /* @__PURE__ */ _.jsx("option", { value: "pl", children: "Polski" }),
          /* @__PURE__ */ _.jsx("option", { value: "tr", children: "Türkçe" })
        ] })
      ] }),
      /* @__PURE__ */ _.jsxs("label", { children: [
        "Vacuum",
        /* @__PURE__ */ _.jsx(gl, { hass: n, domain: "vacuum", value: i.entity, onChange: (m) => m && o({ ...i, entity: m }) })
      ] }),
      /* @__PURE__ */ _.jsx(H2, { hass: n, config: i })
    ] }),
    /* @__PURE__ */ _.jsxs("section", { children: [
      /* @__PURE__ */ _.jsx("h3", { children: "Entities" }),
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
      ].map(([m, h, v]) => /* @__PURE__ */ _.jsxs("label", { children: [
        v,
        /* @__PURE__ */ _.jsx(gl, { hass: n, domain: h, optional: !0, value: i.entities?.[m], onChange: (g) => o({ ...i, entities: { ...i.entities, [m]: g } }) })
      ] }, m)),
      /* @__PURE__ */ _.jsxs("p", { className: "editor-hint", children: [
        "Create the Vac followed by Mop and assisted-carry scripts from blueprints:",
        " ",
        Object.values(Nb).map((m, h) => /* @__PURE__ */ _.jsxs("span", { children: [
          h > 0 && " · ",
          /* @__PURE__ */ _.jsx("a", { href: Db(m.file), target: "_blank", rel: "noreferrer", children: m.label })
        ] }, m.file))
      ] }),
      i.vacuum_mode_fallback && /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ _.jsx("input", { type: "checkbox", checked: i.vacuum_mode_fallback === "set_clean_motor_mode", onChange: (m) => o({ ...i, vacuum_mode_fallback: m.target.checked ? "set_clean_motor_mode" : void 0 }) }),
        " Use deprecated Vacuum-mode fallback (Home Assistant 2026.7 and older; untick to remove)"
      ] }),
      /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ _.jsx("input", { type: "checkbox", checked: i.enable_mop_only === !0, onChange: (m) => o({ ...i, enable_mop_only: m.target.checked || void 0 }) }),
        " Enable Mop only (only for models whose Roborock app offers it, e.g. Saros 10R)"
      ] })
    ] }),
    /* @__PURE__ */ _.jsxs("section", { children: [
      /* @__PURE__ */ _.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ _.jsx("h3", { children: "Floors" }),
        /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => o({ ...i, floors: [...i.floors, { id: `floor_${i.floors.length + 1}`, name: `Floor ${i.floors.length + 1}`, map_entity: "", rooms: [] }] }), children: [
          /* @__PURE__ */ _.jsx(rh, {}),
          " Add floor"
        ] })
      ] }),
      i.floors.map((m, h) => /* @__PURE__ */ _.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ _.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ _.jsx("strong", { children: m.name || `Floor ${h + 1}` }),
          /* @__PURE__ */ _.jsxs("div", { children: [
            /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Move floor up", disabled: h === 0, onClick: () => o({ ...i, floors: yl(i.floors, h, h - 1) }), children: /* @__PURE__ */ _.jsx(ah, {}) }),
            /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Move floor down", disabled: h === i.floors.length - 1, onClick: () => o({ ...i, floors: yl(i.floors, h, h + 1) }), children: /* @__PURE__ */ _.jsx(nh, {}) }),
            /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Remove floor", disabled: i.floors.length === 1, onClick: () => o({ ...i, floors: i.floors.filter((v, g) => g !== h) }), children: /* @__PURE__ */ _.jsx(zl, {}) })
          ] })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "editor-grid", children: [
          /* @__PURE__ */ _.jsxs("label", { children: [
            "ID",
            /* @__PURE__ */ _.jsx("input", { value: m.id, onChange: (v) => u(h, { ...m, id: v.target.value }) })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ _.jsx("input", { value: m.name, onChange: (v) => u(h, { ...m, name: v.target.value }) })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Custom map",
            /* @__PURE__ */ _.jsx(gl, { hass: n, domain: "image", value: m.map_entity, onChange: (v) => {
              if (!v) return;
              const g = Zv(n.states[v]), b = new Map(m.rooms.map((T) => [T.segment_id, T])), k = g.map((T) => ({
                ...b.get(T.segment_id),
                segment_id: T.segment_id,
                name: b.get(T.segment_id)?.name ?? T.source_name,
                include_in_floor_clean: b.get(T.segment_id)?.include_in_floor_clean ?? !0
              }));
              u(h, { ...m, map_entity: v, rooms: k });
            } })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Selector option",
            /* @__PURE__ */ _.jsxs("select", { value: m.map_select_option ?? "", onChange: (v) => u(h, { ...m, map_select_option: v.target.value || void 0 }), children: [
              /* @__PURE__ */ _.jsx("option", { value: "", children: "Not configured" }),
              d.map((v) => /* @__PURE__ */ _.jsx("option", { children: v }, v))
            ] })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Vac followed by Mop routine",
            /* @__PURE__ */ _.jsx(gl, { hass: n, domain: "button", optional: !0, value: m.vacuum_then_mop_routine, onChange: (v) => u(h, { ...m, vacuum_then_mop_routine: v }) })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ _.jsx("input", { type: "checkbox", checked: m.assisted_carry === !0, onChange: (v) => u(h, { ...m, assisted_carry: v.target.checked }) }),
            " Guide this floor without its dock"
          ] })
        ] }),
        /* @__PURE__ */ _.jsx("h4", { children: "Discovered rooms" }),
        m.rooms.length === 0 ? /* @__PURE__ */ _.jsx("p", { children: "Select a calibrated custom-map image to discover rooms." }) : /* @__PURE__ */ _.jsx("div", { className: "room-editor-list", children: m.rooms.map((v, g) => /* @__PURE__ */ _.jsxs("div", { className: "room-editor", children: [
          /* @__PURE__ */ _.jsxs("strong", { children: [
            "Segment ",
            v.segment_id
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ _.jsx("input", { value: v.name, onChange: (b) => {
              const k = [...m.rooms];
              k[g] = { ...v, name: b.target.value }, u(h, { ...m, rooms: k });
            } })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Area",
            /* @__PURE__ */ _.jsx($2, { areas: f, value: v.area_id, onChange: (b) => {
              const k = [...m.rooms];
              k[g] = { ...v, area_id: b }, u(h, { ...m, rooms: k });
            } })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Icon",
            /* @__PURE__ */ _.jsx("input", { value: v.icon ?? "", placeholder: "mdi:floor-plan", onChange: (b) => {
              const k = [...m.rooms];
              k[g] = { ...v, icon: b.target.value || void 0 }, u(h, { ...m, rooms: k });
            } })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ _.jsx("input", { type: "checkbox", checked: v.include_in_floor_clean !== !1, onChange: (b) => {
              const k = [...m.rooms];
              k[g] = { ...v, include_in_floor_clean: b.target.checked }, u(h, { ...m, rooms: k });
            } }),
            " Include in Entire floor"
          ] })
        ] }, v.segment_id)) })
      ] }, `${m.id}-${h}`))
    ] }),
    /* @__PURE__ */ _.jsxs("section", { children: [
      /* @__PURE__ */ _.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ _.jsx("h3", { children: "Additional presets" }),
        /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => {
          const m = { id: `preset_${(i.presets?.length ?? 0) + 1}`, name: "New preset", icon: "mdi:tune", strategy: "custom", cleaning_type: "vacuum_and_mop", cleaning_count: 1 };
          o({ ...i, presets: [...i.presets ?? [], m] });
        }, children: [
          /* @__PURE__ */ _.jsx(rh, {}),
          " Add preset"
        ] })
      ] }),
      (i.presets ?? []).map((m, h) => /* @__PURE__ */ _.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ _.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ _.jsx("strong", { children: m.name }),
          /* @__PURE__ */ _.jsxs("div", { children: [
            /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Move preset up", disabled: h === 0, onClick: () => o({ ...i, presets: yl(i.presets ?? [], h, h - 1) }), children: /* @__PURE__ */ _.jsx(ah, {}) }),
            /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Move preset down", disabled: h === (i.presets?.length ?? 0) - 1, onClick: () => o({ ...i, presets: yl(i.presets ?? [], h, h + 1) }), children: /* @__PURE__ */ _.jsx(nh, {}) }),
            /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Remove preset", onClick: () => o({ ...i, presets: (i.presets ?? []).filter((v, g) => g !== h) }), children: /* @__PURE__ */ _.jsx(zl, {}) })
          ] })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "editor-grid", children: [
          ["id", "name", "icon", "fan_speed", "mop_mode", "mop_intensity"].map((v) => /* @__PURE__ */ _.jsxs("label", { children: [
            v.replaceAll("_", " "),
            /* @__PURE__ */ _.jsx("input", { value: m[v] ?? "", onChange: (g) => {
              const b = [...i.presets ?? []];
              b[h] = { ...m, [v]: g.target.value || void 0 }, o({ ...i, presets: b });
            } })
          ] }, v)),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Strategy",
            /* @__PURE__ */ _.jsxs("select", { value: m.strategy, onChange: (v) => {
              const g = [...i.presets ?? []];
              g[h] = { ...m, strategy: v.target.value }, o({ ...i, presets: g });
            }, children: [
              /* @__PURE__ */ _.jsx("option", { value: "custom", children: "Custom" }),
              /* @__PURE__ */ _.jsx("option", { value: "smartplan", children: "SmartPlan" })
            ] })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Cleaning type",
            /* @__PURE__ */ _.jsxs("select", { value: m.cleaning_type ?? "vacuum_and_mop", onChange: (v) => {
              const g = [...i.presets ?? []];
              g[h] = { ...m, cleaning_type: v.target.value }, o({ ...i, presets: g });
            }, children: [
              /* @__PURE__ */ _.jsx("option", { value: "vacuum", children: "Vacuum only" }),
              /* @__PURE__ */ _.jsx("option", { value: "mop", children: "Mop only" }),
              /* @__PURE__ */ _.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
              /* @__PURE__ */ _.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" })
            ] })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Cleaning count",
            /* @__PURE__ */ _.jsxs("select", { value: m.cleaning_count ?? 1, onChange: (v) => {
              const g = [...i.presets ?? []];
              g[h] = { ...m, cleaning_count: Number(v.target.value) }, o({ ...i, presets: g });
            }, children: [
              /* @__PURE__ */ _.jsx("option", { value: "1", children: "1" }),
              /* @__PURE__ */ _.jsx("option", { value: "2", children: "2" })
            ] })
          ] })
        ] })
      ] }, `${m.id}-${h}`)),
      /* @__PURE__ */ _.jsxs("label", { children: [
        "Default preset",
        /* @__PURE__ */ _.jsxs("select", { value: i.default_preset ?? "vacuum_only", onChange: (m) => o({ ...i, default_preset: m.target.value }), children: [
          /* @__PURE__ */ _.jsx("option", { value: "smartplan", children: "SmartPlan" }),
          /* @__PURE__ */ _.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" }),
          /* @__PURE__ */ _.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
          /* @__PURE__ */ _.jsx("option", { value: "vacuum_only", children: "Vacuum only" }),
          (i.presets ?? []).map((m) => /* @__PURE__ */ _.jsx("option", { value: m.id, children: m.name }, m.id))
        ] })
      ] })
    ] })
  ] });
}
const L2 = /* @__PURE__ */ new Set([
  "idle",
  "preparing",
  "carry_upstairs",
  "cleaning_upstairs",
  "carry_downstairs",
  "finishing",
  "complete",
  "error"
]);
class Xo extends Error {
  constructor(i, o, l) {
    super(o, l), this.operation = i, this.name = "AssistedCarryError";
  }
  operation;
}
function V2(n, i) {
  return n.floors.find((o) => o.assisted_carry && o.id === i?.floor_id) ?? n.floors.find((o) => o.assisted_carry);
}
function G2(n, i) {
  const o = i.entities?.assisted_carry_stage, l = o ? n.states[o]?.state : void 0;
  return l && L2.has(l) ? l : "idle";
}
function Q2(n) {
  return !["idle", "complete", "error"].includes(n);
}
function K2(n, i, o) {
  const l = o.cleaning_type === "vacuum_then_mop", u = o.cleaning_type === "mop";
  if (o.strategy !== "smartplan" && !l && !u && !o.fan_speed)
    throw new Xo("prepare", "Suction is required");
  if (o.strategy !== "smartplan" && !l && o.cleaning_type !== "vacuum" && (!o.mop_mode || !o.mop_intensity))
    throw new Xo("prepare", "Water flow and route are required");
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
    fan_speed: o.strategy === "smartplan" || l || u ? void 0 : o.fan_speed,
    mop_mode: o.strategy === "smartplan" || o.cleaning_type === "vacuum" || l ? void 0 : o.mop_mode,
    mop_intensity: o.strategy === "smartplan" || o.cleaning_type === "vacuum" || l ? void 0 : o.mop_intensity,
    cleaning_count: o.strategy === "smartplan" || o.cleaning_type === "vacuum_then_mop" ? 1 : o.cleaning_count
  };
}
function J2(n) {
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
function P2(n) {
  if (!(!n || ["unknown", "unavailable"].includes(n)))
    try {
      const i = JSON.parse(n);
      if (!Array.isArray(i.s) || !i.s.every((h) => Number.isInteger(h)) || ![1, 2].includes(Number(i.c))) return;
      const o = i.g === void 0 ? "custom" : i.g, l = i.t === void 0 ? "vacuum_and_mop" : i.t;
      if (!["custom", "smartplan"].includes(String(o)) || !["vacuum", "mop", "vacuum_and_mop", "vacuum_then_mop"].includes(String(l))) return;
      const u = typeof i.f == "string" ? i.f : void 0, d = typeof i.m == "string" ? i.m : void 0, f = typeof i.w == "string" ? i.w : void 0, m = l === "vacuum_then_mop";
      return o === "custom" && !m && l !== "mop" && !u || o === "custom" && !m && l !== "vacuum" && (!d || !f) ? void 0 : {
        segment_ids: i.s,
        floor_id: typeof i.d == "string" ? i.d : void 0,
        map_select_option: typeof i.o == "string" ? i.o : void 0,
        area_ids: Array.isArray(i.a) && i.a.every((h) => typeof h == "string") ? i.a : void 0,
        whole_floor: i.e === 1,
        vacuum_then_mop_routine: typeof i.r == "string" ? i.r : void 0,
        strategy: o,
        cleaning_type: l,
        fan_speed: u,
        mop_mode: d,
        mop_intensity: f,
        cleaning_count: Number(i.c)
      };
    } catch {
      return;
    }
}
function Mi(n, i, o) {
  if (!i || !n.states[i] || n.states[i].state === "unavailable")
    throw new Xo(o, `${i ?? "entity"} is unavailable`);
  return i;
}
async function xi(n, i, o) {
  const l = Mi(n, i.entities?.assisted_carry_stage, "set_stage");
  await n.callService("input_select", "select_option", { option: o }, { entity_id: l });
}
async function W2(n, i, o) {
  const l = Mi(n, i.entities?.assisted_carry_job, "save_job"), u = Mi(n, i.entities?.assisted_carry_prepare_script, "prepare");
  await n.callService("input_text", "set_value", { value: J2(o) }, { entity_id: l }), await xi(n, i, "preparing"), await n.callService("script", "turn_on", {}, { entity_id: u });
}
async function F2(n, i, o, l) {
  const u = Mi(n, i.entities?.assisted_carry_start_script, "start_upstairs"), d = o.rooms.filter((m) => l.segment_ids.includes(m.segment_id)).map((m) => m.area_id).filter((m) => !!m);
  if (d.length === 0) throw new Xo("start_upstairs", "No mapped rooms were saved");
  const f = {
    cleaning_area_id: d,
    strategy: l.strategy,
    cleaning_type: l.cleaning_type,
    cleaning_count: l.cleaning_count
  };
  l.fan_speed && (f.fan_speed = l.fan_speed), l.mop_mode && (f.mop_mode = l.mop_mode), l.mop_intensity && (f.mop_intensity = l.mop_intensity), await n.callService("script", "turn_on", {
    variables: f
  }, { entity_id: u });
}
async function I2(n, i) {
  const o = Mi(n, i.entities?.assisted_carry_finish_script, "finish");
  await n.callService("script", "turn_on", {}, { entity_id: o });
}
async function Rh(n, i) {
  await xi(n, i, "idle");
  const o = Mi(n, i.entities?.assisted_carry_job, "reset");
  await n.callService("input_text", "set_value", { value: "" }, { entity_id: o });
}
const ez = {
  mop_wash_frequency: ["smart", "10_min", "15_min", "20_min", "25_min", "30_min"],
  wash_mode: ["smart", "light", "balanced", "deep"],
  wash_temperature: ["normal", "warm", "hot"],
  empty_mode: ["smart", "light", "balanced", "max"],
  dry_duration: ["2h", "3h", "4h"]
}, tz = {
  mop_wash_frequency: "smart",
  wash_mode: "smart",
  wash_temperature: "hot",
  auto_empty: !1,
  empty_mode: "smart",
  auto_dry: !0,
  dry_duration: "3h"
}, Uv = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
}, nz = {
  light: 0,
  balanced: 1,
  deep: 2,
  smart: 10
}, az = {
  normal: 0,
  warm: 1,
  hot: 2
}, iz = {
  smart: 0,
  light: 1,
  balanced: 2,
  max: 4
}, oz = {
  "2h": 7200,
  "3h": 10800,
  "4h": 14400
};
class jn extends Error {
  constructor(i, o, l) {
    super(o, l), this.operation = i, this.name = "DockExecutionError";
  }
  operation;
}
async function nn(n, i, o, l) {
  const u = { command: o };
  l !== void 0 && (u.params = l), await n.callService("vacuum", "send_command", u, { entity_id: i.entity });
}
function bl(n, i, o) {
  const l = n[i];
  if (l === void 0) throw new jn(o, `Unsupported value: ${i}`);
  return l;
}
function rz(n) {
  if (n === "smart") return { smart_wash: 1, wash_interval: 1200 };
  const i = Number(n.replace("_min", ""));
  if (![10, 15, 20, 25, 30].includes(i))
    throw new jn("mop_wash_frequency", `Unsupported value: ${n}`);
  return { smart_wash: 0, wash_interval: i * 60 };
}
async function lz(n, i, o, l) {
  const u = i.entities?.[Uv[o]];
  if (!u) return;
  const d = u.split(".")[0];
  if (typeof l == "boolean") {
    if (!["input_boolean", "switch"].includes(d))
      throw new jn(o, `${u} is not a boolean helper`);
    await n.callService(d, l ? "turn_on" : "turn_off", {}, { entity_id: u });
    return;
  }
  if (!["input_select", "select"].includes(d))
    throw new jn(o, `${u} is not a select helper`);
  await n.callService(d, "select_option", { option: l }, { entity_id: u });
}
async function sz(n, i, o, l) {
  try {
    switch (o) {
      case "mop_wash_frequency":
        await nn(n, i, "set_smart_wash_params", rz(String(l)));
        break;
      case "wash_mode":
        await nn(n, i, "set_wash_towel_mode", {
          wash_mode: bl(nz, String(l), o)
        });
        break;
      case "wash_temperature":
        await nn(n, i, "set_wash_water_temperature", {
          values: bl(az, String(l), o)
        });
        break;
      case "auto_empty":
        await nn(n, i, "set_dust_collection_switch_status", { status: l ? 1 : 0 });
        break;
      case "empty_mode":
        await nn(n, i, "set_dust_collection_mode", {
          mode: bl(iz, String(l), o)
        });
        break;
      case "auto_dry":
        await nn(n, i, "app_set_dryer_setting", { status: l ? 1 : 0 });
        break;
      case "dry_duration":
        await nn(n, i, "app_set_dryer_setting", {
          on: { dry_time: bl(oz, String(l), o) }
        });
        break;
    }
    await lz(n, i, o, l);
  } catch (u) {
    throw u instanceof jn ? u : new jn(o, u instanceof Error ? u.message : String(u), { cause: u });
  }
}
async function dc(n, i, o, l = !1) {
  const u = `${l ? "stop" : "start"}_${o}`;
  try {
    o === "empty" && await nn(n, i, l ? "app_stop_collect_dust" : "app_start_collect_dust"), o === "wash" && await nn(n, i, l ? "app_stop_wash" : "app_start_wash"), o === "dry" && await nn(n, i, "app_set_dryer_status", { status: l ? 0 : 1 }), o === "drain" && await nn(n, i, "app_empty_rinse_tank_water");
  } catch (d) {
    throw new jn(u, d instanceof Error ? d.message : String(d), { cause: d });
  }
}
function Zl(n, i) {
  return !!(i.area_id && n.areas && !n.areas[i.area_id]);
}
function fc(n, i) {
  return !!i.area_id && !Zl(n, i);
}
function uz(n, i) {
  const o = [], l = (f) => !!n.states[f];
  l(i.entity) || o.push({ code: "entity_missing", key: "entity", entity_id: i.entity });
  for (const [f, m] of Object.entries(i.entities ?? {}))
    typeof m == "string" && !l(m) && o.push({ code: "entity_missing", key: `entities.${f}`, entity_id: m });
  for (const f of i.consumables ?? [])
    l(f.sensor) || o.push({ code: "entity_missing", key: `consumables.${f.kind}`, entity_id: f.sensor });
  const u = i.entities?.map_select ? n.states[i.entities.map_select] : void 0, d = Array.isArray(u?.attributes.options) ? u.attributes.options.map(String) : void 0;
  for (const f of i.floors) {
    l(f.map_entity) ? $c(n.states[f.map_entity]).length < 3 && o.push({ code: "map_uncalibrated", floor_id: f.id, entity_id: f.map_entity }) : o.push({ code: "entity_missing", key: `floors.${f.id}.map_entity`, entity_id: f.map_entity }), f.vacuum_then_mop_routine && !l(f.vacuum_then_mop_routine) && o.push({ code: "entity_missing", key: `floors.${f.id}.vacuum_then_mop_routine`, entity_id: f.vacuum_then_mop_routine }), f.map_select_option && d && !d.includes(f.map_select_option) && o.push({ code: "map_option_missing", floor_id: f.id, option: f.map_select_option });
    for (const m of f.rooms)
      m.area_id && Zl(n, m) && o.push({ code: "area_missing", floor_id: f.id, segment_id: m.segment_id, room: m.name, area_id: m.area_id });
  }
  return o;
}
const cz = {
  main_brush: 300,
  side_brush: 200,
  filter: 150,
  sensors: 30
}, Zh = 10;
function dz(n, i) {
  switch (n.attributes.unit_of_measurement) {
    case "h":
      return i;
    case "min":
      return i / 60;
    case "s":
      return i / 3600;
    case "d":
      return i * 24;
    default:
      return;
  }
}
function fz(n, i) {
  const o = n.states[i.sensor], l = i.reset_button ? n.states[i.reset_button] : void 0, u = !!(l && l.state !== "unavailable"), d = Number(o?.state);
  if (!o || o.state === "" || !Number.isFinite(d)) return { ...i, level: "unknown", can_reset: u };
  if (o.attributes.unit_of_measurement === "%") {
    const g = d <= 0 ? "overdue" : d < Zh ? "due" : "ok";
    return { ...i, remaining: d, unit: "%", percent: d, level: g, can_reset: u };
  }
  const f = dz(o, d);
  if (f === void 0) return { ...i, level: "unknown", can_reset: u };
  const m = cz[i.kind], h = m ? Math.max(0, f / m * 100) : void 0, v = f <= 0 ? "overdue" : h !== void 0 && h < Zh ? "due" : "ok";
  return { ...i, remaining: f, unit: "h", ...h !== void 0 ? { percent: h } : {}, level: v, can_reset: u };
}
function Yv(n, i) {
  return (i.consumables ?? []).map((o) => fz(n, o));
}
function Bv(n) {
  return n.filter((i) => i.level === "overdue").length;
}
const mz = 20, pz = /* @__PURE__ */ new Set(["ok", "none", "unknown", "unavailable", ""]);
function hz(n) {
  return n.strategy === "smartplan" || n.cleaning_type !== "vacuum";
}
function Hv(n, i, o) {
  const l = { blocking: [], warnings: [] }, u = (v) => {
    const g = i.entities?.[v];
    return g ? { id: g, state: n.states[g]?.state } : void 0;
  }, d = (v, g, b, k) => {
    const T = u(v);
    T?.state === g && k.push({ code: b, entity_id: T.id });
  };
  hz(o) && (d("dock_clean_water_empty", "on", "clean_water_empty", l.blocking), d("water_shortage", "on", "water_shortage", l.blocking), d("mop_attached", "off", "mop_detached", l.blocking), d("water_box_attached", "off", "water_box_detached", l.blocking), d("dock_dirty_water_full", "on", "dirty_water_full", l.warnings));
  const f = u("dock_error");
  f?.state !== void 0 && !pz.has(f.state) && l.warnings.push({ code: "dock_error", entity_id: f.id, detail: f.state });
  const m = u("battery");
  m?.state !== void 0 && m.state !== "" && Number(m.state) < mz && l.warnings.push({ code: "low_battery", entity_id: m.id, detail: m.state });
  const h = Bv(Yv(n, i));
  return h > 0 && l.warnings.push({ code: "maintenance_overdue", detail: String(h) }), l;
}
const vz = /* @__PURE__ */ new Set(["standard", "deep", "deep_plus", "fast"]), xc = /* @__PURE__ */ new Set(["vacuum", "mop", "vacuum_and_mop"]), _z = {
  vacuum: "vacuum",
  mop: "mop",
  vacuum_and_mop: "vac_and_mop",
  vacuum_then_mop: "vac_and_mop"
};
class Ae extends Error {
  constructor(i, o, l) {
    super(o, l), this.operation = i, this.name = "JobExecutionError";
  }
  operation;
}
async function yz(n, i, o, l, u, d) {
  const f = Date.now();
  for (; Date.now() - f < l; ) {
    if (n().states[i]?.state === o) return;
    await d(u);
  }
  throw new Ae("wait_for_state", `${i} did not become “${o}” within ${l / 1e3}s`);
}
function Ro(n, i, o, l) {
  const u = n.states[i];
  if (!u || u.state === "unavailable") throw new Ae(l, `${i} is unavailable`);
  if (!(Array.isArray(u.attributes.options) ? u.attributes.options.map(String) : []).includes(o)) throw new Ae(l, `${i} does not support “${o}”`);
}
async function Mo(n, i, o, l, u, d, f, m = !0) {
  const h = n();
  if (Ro(h, i, o, l), h.states[i]?.state !== o)
    try {
      if (await h.callService("select", "select_option", { option: o }, { entity_id: i }), !m) return;
      await yz(n, i, o, u, d, f);
    } catch (v) {
      throw v instanceof Ae ? new Ae(l, v.message, { cause: v }) : new Ae(l, v instanceof Error ? v.message : String(v), { cause: v });
    }
}
async function gz(n, i) {
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
  } catch (l) {
    throw new Ae("set_cleaning_mode", l instanceof Error ? l.message : String(l), { cause: l });
  }
}
async function qc(n, i, o, l, u) {
  try {
    await n.callService("vacuum", "send_command", { command: o, params: l }, { entity_id: i.entity });
  } catch (d) {
    throw new Ae(u, d instanceof Error ? d.message : String(d), { cause: d });
  }
}
async function Uh(n, i, o) {
  await qc(n, i, "set_clean_repeat_times", { repeat: o }, "set_cleaning_count");
}
async function bz(n, i) {
  await qc(
    n,
    i,
    "set_clean_motor_mode",
    [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }],
    "set_smartplan"
  );
}
function Yh(n, i, o) {
  const l = n.states[i]?.attributes.fan_speed_list;
  if (!(Array.isArray(l) ? l.map(String) : []).includes(o))
    throw new Ae("set_fan_speed", `${i} does not support “${o}”`);
}
async function Sz({
  getHass: n,
  config: i,
  floor: o,
  rooms: l,
  draft: u,
  zone: d,
  timeoutMs: f = 1e4,
  pollMs: m = 150,
  sleep: h = (v) => new Promise((g) => setTimeout(g, v))
}) {
  const v = n(), g = Nc(v, i), b = v.states[i.entity];
  if (!b || b.state === "unavailable") throw new Ae("preflight", `${i.entity} is unavailable`);
  if (Vb(b.state)) throw new Ae("preflight", `Vacuum is ${b.state}`);
  const k = i.entities?.error ? v.states[i.entities.error] : void 0;
  if (k && !["none", "unknown", "unavailable", ""].includes(k.state))
    throw new Ae("preflight", `Vacuum error: ${k.state}`);
  const T = [...new Set(l.map((G) => G.area_id).filter((G) => !!G))];
  if (!d && T.length === 0) throw new Ae("preflight", "Select at least one room mapped to a Home Assistant area");
  if (u.cleaning_type === "mop" && !i.enable_mop_only)
    throw new Ae("preflight", "Mop only is disabled; set enable_mop_only: true for models that support it");
  const A = u.cleaning_type === "mop" ? "mop" : u.cleaning_type === "vacuum_and_mop" ? "vacuum_and_mop" : void 0, q = A ? g.mopRoutes?.[A] : void 0;
  if (u.mop_mode && q && !q.includes(u.mop_mode))
    throw new Ae("preflight", `Mop route “${u.mop_mode}” is not allowed for ${A}`);
  const V = Hv(v, i, u).blocking;
  if (V.length > 0)
    throw new Ae("preflight", `Not ready to clean: ${V.map((G) => G.code).join(", ")}`);
  if (l.some((G) => Zl(v, G)))
    throw new Ae("preflight", "A selected room uses an area that no longer exists");
  if (u.strategy === "smartplan" && !g.hasSmartPlan)
    throw new Ae("preflight", "This model does not offer AI SmartPlan");
  if (d && (u.strategy !== "custom" || !xc.has(u.cleaning_type)))
    throw new Ae("preflight", "Zone cleaning supports only Vacuum, Mop and Vac & Mop");
  if (d && (![d.x1, d.y1, d.x2, d.y2].every(Number.isFinite) || d.x2 <= d.x1 || d.y2 <= d.y1))
    throw new Ae("preflight", "The selected zone is invalid");
  const J = i.entities?.map_select, ae = async () => {
    if (!(i.floors.length <= 1)) {
      if (!J || !o.map_select_option) throw new Ae("select_floor", "This floor has no map selector mapping");
      if (await Mo(n, J, o.map_select_option, "select_floor", f, m, h), m > 0 && await h(m), n().states[J]?.state !== o.map_select_option)
        throw new Ae("select_floor", `${J} did not stay on “${o.map_select_option}”`);
    }
  };
  if (await ae(), u.cleaning_type === "vacuum_then_mop" && u.strategy !== "smartplan") {
    const G = o.vacuum_then_mop_routine;
    if (G) {
      const ee = n().states[G];
      if (!ee || ee.state === "unavailable")
        throw new Ae("start_vacuum_then_mop", `${G} is unavailable`);
      try {
        await n().callService("button", "press", {}, { entity_id: G });
      } catch (ue) {
        throw new Ae("start_vacuum_then_mop", ue instanceof Error ? ue.message : String(ue), { cause: ue });
      }
      return o.rooms.filter((ue) => ue.include_in_floor_clean !== !1).map((ue) => ue.area_id).filter((ue) => !!ue);
    }
    const $ = i.entities?.vacuum_then_mop_script, se = $ ? n().states[$] : void 0;
    if (!$ || !se || se.state === "unavailable")
      throw new Ae("start_vacuum_then_mop", "Vac followed by Mop requires an available orchestration script");
    const N = i.entities?.cleaning_mode;
    if (!N)
      throw new Ae("set_cleaning_mode", "Vac followed by Mop requires a cleaning-mode entity");
    if (Ro(n(), N, "vacuum", "set_cleaning_mode"), Ro(n(), N, "mop", "set_cleaning_mode"), u.mop_mode) {
      const ee = i.entities?.mop_mode;
      if (!ee) throw new Ae("set_mop_mode", "The selected profile requires a mop-mode entity");
      Ro(n(), ee, u.mop_mode, "set_mop_mode");
    }
    if (u.mop_intensity) {
      const ee = i.entities?.mop_intensity;
      if (!ee) throw new Ae("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      Ro(n(), ee, u.mop_intensity, "set_mop_intensity");
    }
    u.fan_speed && Yh(n(), i.entity, u.fan_speed), await ae();
    try {
      await n().callService(
        "script",
        "turn_on",
        {
          variables: {
            cleaning_area_id: T,
            fan_speed: u.fan_speed,
            mop_mode: u.mop_mode,
            mop_intensity: u.mop_intensity
          }
        },
        { entity_id: $ }
      );
    } catch (ee) {
      throw new Ae("start_vacuum_then_mop", ee instanceof Error ? ee.message : String(ee), { cause: ee });
    }
    return T;
  }
  if (u.strategy === "smartplan")
    await bz(n(), i), g.roomRepeatStrategy === "set_clean_repeat_times" && await Uh(n(), i, 1);
  else {
    const G = i.entities?.cleaning_mode, $ = _z[u.cleaning_type], se = G && n().states[G]?.attributes.options;
    if (G && Array.isArray(se) && se.map(String).includes($))
      await Mo(
        n,
        G,
        $,
        "set_cleaning_mode",
        f,
        m,
        h,
        $ === "vacuum"
      );
    else if (u.cleaning_type === "vacuum" && i.vacuum_mode_fallback === "set_clean_motor_mode")
      await gz(n(), i);
    else {
      if (u.cleaning_type === "vacuum")
        throw new Ae("set_cleaning_mode", "Vacuum-only requires a cleaning-mode entity");
      if (u.cleaning_type === "mop")
        throw new Ae("set_cleaning_mode", "Mop-only requires a cleaning-mode entity with the “mop” option");
    }
    const N = i.entities?.mop_mode;
    if (u.cleaning_type !== "vacuum" && u.mop_mode) {
      if (!N) throw new Ae("set_mop_mode", "The selected profile requires a mop-mode entity");
      n().states[N]?.state === "smart_mode" && vz.has(u.mop_mode) && await Mo(n, N, "custom", "leave_smartplan", f, m, h), await Mo(n, N, u.mop_mode, "set_mop_mode", f, m, h);
    }
    if (u.cleaning_type !== "vacuum" && u.mop_intensity) {
      const ee = i.entities?.mop_intensity;
      if (!ee) throw new Ae("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      await Mo(n, ee, u.mop_intensity, "set_mop_intensity", f, m, h);
    }
    if (u.fan_speed && u.cleaning_type !== "mop") {
      const ee = n();
      Yh(ee, i.entity, u.fan_speed);
      try {
        await ee.callService("vacuum", "set_fan_speed", { fan_speed: u.fan_speed }, { entity_id: i.entity });
      } catch (ue) {
        throw new Ae("set_fan_speed", ue instanceof Error ? ue.message : String(ue), { cause: ue });
      }
    }
    !d && g.roomRepeatStrategy === "set_clean_repeat_times" && await Uh(n(), i, u.cleaning_count);
  }
  await ae();
  const L = new Set(l.map((G) => G.segment_id)), K = l.length === o.rooms.length && o.rooms.every((G) => L.has(G.segment_id)), P = !d && u.cleaning_count === 2 && g.roomRepeatStrategy === "app_segment_clean";
  try {
    d ? await n().callService(
      "roborock",
      "set_vacuum_zoned_cleaning",
      { ...d, repeats: u.cleaning_count },
      { entity_id: i.entity }
    ) : P ? await qc(
      n(),
      i,
      "app_segment_clean",
      [{ segments: l.map((G) => G.segment_id), repeat: u.cleaning_count }],
      "clean_segments"
    ) : K ? await n().callService("vacuum", "start", void 0, { entity_id: i.entity }) : await n().callService(
      "vacuum",
      "clean_area",
      { cleaning_area_id: T },
      { entity_id: i.entity }
    );
  } catch (G) {
    const $ = d ? "clean_zone" : P ? "clean_segments" : K ? "start_floor" : "clean_area";
    throw new Ae($, G instanceof Error ? G.message : String(G), { cause: G });
  }
  return T;
}
const wz = {
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
  maintenanceBadge: "Maintenance due"
}, zz = {
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
  maintenanceBadge: "Onderhoud nodig"
}, kz = {
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
  maintenanceBadge: "Bakım gerekli"
}, xz = {
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
  maintenanceBadge: "Wymagana konserwacja"
};
function Sl(n, i, o) {
  return D(n, i).replace(/\{(\w+)\}/g, (l, u) => o[u] ?? l);
}
function D(n, i) {
  return n === "nl" ? zz[i] : n === "pl" ? xz[i] : n === "tr" ? kz[i] : wz[i];
}
const Bh = {
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
function Xv(n, i) {
  return Bh[n ?? "en"]?.[i] ?? Bh.en?.[i] ?? i.replaceAll("_", " ").replace(/\b\w/g, (o) => o.toUpperCase());
}
const Hh = [
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
], Tz = ["medium", "standard", "mild", "low", "intense", "high", "slight", "moderate", "extreme"];
function Az(n, i) {
  if (n.cleaning_type === "vacuum" || !n.mop_intensity || i.mopIntensities.includes(n.mop_intensity))
    return n;
  const o = Tz.find((l) => i.mopIntensities.includes(l));
  return o ? { ...n, mop_intensity: o } : n;
}
function Ez(n, i, o, l) {
  if (o.strategy === "smartplan" && !i.hasSmartPlan) return "SmartPlan";
  const u = i.cleaningModes.includes("vacuum") || n.vacuum_mode_fallback === "set_clean_motor_mode";
  if (o.cleaning_type === "vacuum" && !u)
    return "cleaning mode “vacuum”";
  if (o.cleaning_type === "mop" && !n.enable_mop_only)
    return "Mop only (set enable_mop_only: true)";
  if (o.cleaning_type === "mop" && !i.cleaningModes.includes("mop"))
    return "cleaning mode “mop”";
  if (o.cleaning_type === "vacuum_then_mop") {
    if (l?.vacuum_then_mop_routine || l?.assisted_carry && n.entities?.assisted_carry_start_script) return;
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
function jz(n, i, o) {
  return [...(n.enable_mop_only ? Hh : Hh.filter((u) => u.cleaning_type !== "mop")).map((u) => Az(u, i)), ...n.presets ?? []].map((u) => {
    const d = Ez(n, i, u, o);
    return {
      preset: u,
      available: !d,
      reason: d ? `Unsupported ${d}` : void 0
    };
  });
}
function Yo(n) {
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
function Mz(n, i) {
  const o = D(n, `check_${i.code}`);
  return i.code === "dock_error" ? `${o} ${i.detail?.replaceAll("_", " ")}` : i.code === "low_battery" ? `${o} ${i.detail}%` : i.code === "maintenance_overdue" ? `${o} ${i.detail}` : o;
}
function Cz(n, i) {
  switch (i.code) {
    case "area_missing":
      return Sl(n, "health_area_missing", { room: i.room, area: i.area_id });
    case "entity_missing":
      return Sl(n, "health_entity_missing", { entity: i.entity_id });
    case "map_option_missing":
      return Sl(n, "health_map_option_missing", { option: i.option });
    case "map_uncalibrated":
      return Sl(n, "health_map_uncalibrated", { entity: i.entity_id });
  }
}
function Oz(n, i) {
  return i.remaining === void 0 ? D(n, "maintenanceUnknown") : i.unit === "%" ? `${Math.max(0, Math.round(i.remaining))}%` : i.remaining <= 0 ? `0 ${D(n, "hourShort")}` : i.remaining < 1 ? `${Math.round(i.remaining * 60)} ${D(n, "minuteShort")}` : `${Math.round(i.remaining)} ${D(n, "hourShort")}`;
}
const Nz = {
  ok: "maintenanceOk",
  due: "maintenanceDue",
  overdue: "maintenanceOverdue",
  unknown: "maintenanceUnknown"
};
function Dz(n, i) {
  return D(n, Nz[i.level]);
}
function Ta(n, i, o) {
  const l = i.entities?.[Uv[o]], u = l ? n.states[l]?.state : void 0;
  return !u || ["unknown", "unavailable"].includes(u) ? tz[o] : o === "auto_empty" || o === "auto_dry" ? u === "on" : u;
}
function Zo(n, i) {
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
    return `${i.replace("_min", "")} ${D(n, "minuteShort")}`;
  const l = n === "nl" ? 1 : n === "tr" ? 2 : n === "pl" ? 3 : 0;
  return o[i]?.[l] ?? i;
}
function Co({
  label: n,
  setting: i,
  value: o,
  language: l,
  disabled: u,
  onChange: d
}) {
  return /* @__PURE__ */ _.jsxs("label", { className: "dock-setting-row", children: [
    /* @__PURE__ */ _.jsx("span", { children: n }),
    /* @__PURE__ */ _.jsx("select", { "aria-label": n, value: o, disabled: u, onChange: (f) => d(f.target.value), children: ez[i].map((f) => /* @__PURE__ */ _.jsx("option", { value: f, children: Zo(l, f) }, f)) })
  ] });
}
function mc({
  label: n,
  checked: i,
  disabled: o,
  onChange: l
}) {
  return /* @__PURE__ */ _.jsxs("div", { className: "dock-setting-row", children: [
    /* @__PURE__ */ _.jsx("span", { children: n }),
    /* @__PURE__ */ _.jsx(
      "button",
      {
        type: "button",
        role: "switch",
        "aria-label": n,
        "aria-checked": i,
        className: `dock-toggle ${i ? "active" : ""}`,
        disabled: o,
        onClick: () => l(!i),
        children: /* @__PURE__ */ _.jsx("span", {})
      }
    )
  ] });
}
function Rz({
  hass: n,
  config: i,
  language: o,
  washing: l,
  emptying: u,
  drying: d,
  dryingRemaining: f,
  pending: m,
  onClose: h,
  onAction: v,
  onSetting: g,
  onChildLock: b,
  maintenance: k = [],
  onResetConsumable: T
}) {
  const A = !!m, q = i.entities?.dock_child_lock, V = q ? n.states[q]?.state === "on" : !1, J = String(Ta(n, i, "mop_wash_frequency")), ae = String(Ta(n, i, "wash_mode")), L = String(Ta(n, i, "wash_temperature")), K = !!Ta(n, i, "auto_empty"), P = String(Ta(n, i, "empty_mode")), G = !!Ta(n, i, "auto_dry"), $ = String(Ta(n, i, "dry_duration")), se = [
    { action: "empty", label: D(o, "empty"), active: u, icon: /* @__PURE__ */ _.jsx(zl, {}), detail: Zo(o, P) },
    { action: "wash", label: D(o, "wash"), active: l, icon: /* @__PURE__ */ _.jsx(lh, {}), detail: `${Zo(o, ae)} · ${Zo(o, L)}` },
    { action: "dry", label: D(o, "dry"), active: d, icon: /* @__PURE__ */ _.jsx(sh, {}), detail: d ? f : Zo(o, $) }
  ];
  return /* @__PURE__ */ _.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ _.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": D(o, "close"), onClick: h }),
    /* @__PURE__ */ _.jsxs("section", { className: "job-sheet dock-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "dock-sheet-title", children: [
      /* @__PURE__ */ _.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ _.jsxs("header", { children: [
        /* @__PURE__ */ _.jsxs("div", { children: [
          /* @__PURE__ */ _.jsx("h2", { id: "dock-sheet-title", children: D(o, "dockStation") }),
          /* @__PURE__ */ _.jsx("p", { children: D(o, "dockOverview") })
        ] }),
        /* @__PURE__ */ _.jsx("button", { type: "button", className: "icon-button", "aria-label": D(o, "close"), onClick: h, children: /* @__PURE__ */ _.jsx(Cc, {}) })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "sheet-body dock-sheet-body", children: [
        /* @__PURE__ */ _.jsx("div", { className: "dock-actions", children: se.map((N) => /* @__PURE__ */ _.jsxs(
          "button",
          {
            type: "button",
            className: N.active ? "active" : "",
            disabled: A,
            onClick: () => v(N.action, N.active),
            children: [
              /* @__PURE__ */ _.jsx("span", { className: "dock-action-icon", children: N.icon }),
              /* @__PURE__ */ _.jsx("strong", { children: N.active ? D(o, "stop") : N.label }),
              /* @__PURE__ */ _.jsx("small", { children: N.active ? D(o, "active") : N.detail })
            ]
          },
          N.action
        )) }),
        /* @__PURE__ */ _.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ _.jsxs("h3", { children: [
            /* @__PURE__ */ _.jsx(lh, {}),
            D(o, "dockSettings")
          ] }),
          /* @__PURE__ */ _.jsx(Co, { label: D(o, "mopWashFrequency"), setting: "mop_wash_frequency", value: J, language: o, disabled: A, onChange: (N) => g("mop_wash_frequency", N) }),
          /* @__PURE__ */ _.jsx(Co, { label: D(o, "washingMode"), setting: "wash_mode", value: ae, language: o, disabled: A, onChange: (N) => g("wash_mode", N) }),
          /* @__PURE__ */ _.jsx(Co, { label: D(o, "washTemperature"), setting: "wash_temperature", value: L, language: o, disabled: A, onChange: (N) => g("wash_temperature", N) })
        ] }),
        /* @__PURE__ */ _.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ _.jsxs("h3", { children: [
            /* @__PURE__ */ _.jsx(zl, {}),
            D(o, "dustbin")
          ] }),
          /* @__PURE__ */ _.jsx(mc, { label: D(o, "autoEmpty"), checked: K, disabled: A, onChange: (N) => g("auto_empty", N) }),
          /* @__PURE__ */ _.jsx(Co, { label: D(o, "emptyMode"), setting: "empty_mode", value: P, language: o, disabled: A, onChange: (N) => g("empty_mode", N) })
        ] }),
        /* @__PURE__ */ _.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ _.jsxs("h3", { children: [
            /* @__PURE__ */ _.jsx(sh, {}),
            D(o, "drying")
          ] }),
          /* @__PURE__ */ _.jsx(mc, { label: D(o, "autoDry"), checked: G, disabled: A, onChange: (N) => g("auto_dry", N) }),
          /* @__PURE__ */ _.jsx(Co, { label: D(o, "dryDuration"), setting: "dry_duration", value: $, language: o, disabled: A, onChange: (N) => g("dry_duration", N) })
        ] }),
        k.length > 0 && /* @__PURE__ */ _.jsxs("section", { className: "dock-settings-group maintenance-group", children: [
          /* @__PURE__ */ _.jsxs("h3", { children: [
            /* @__PURE__ */ _.jsx(Tb, {}),
            D(o, "maintenance")
          ] }),
          k.map((N) => /* @__PURE__ */ _.jsxs("div", { className: `maintenance-row level-${N.level}`, children: [
            /* @__PURE__ */ _.jsx("span", { children: D(o, `consumable_${N.kind}`) }),
            /* @__PURE__ */ _.jsxs("span", { className: "maintenance-value", children: [
              /* @__PURE__ */ _.jsx("strong", { children: Oz(o, N) }),
              /* @__PURE__ */ _.jsx("small", { children: Dz(o, N) })
            ] }),
            N.can_reset && T && /* @__PURE__ */ _.jsx("button", { type: "button", className: "secondary", disabled: A, onClick: () => T(N), children: D(o, "resetConsumable") })
          ] }, N.kind)),
          k.some((N) => !N.can_reset) && /* @__PURE__ */ _.jsx("p", { className: "maintenance-hint", children: D(o, "enableResetHint") })
        ] }),
        /* @__PURE__ */ _.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ _.jsxs("h3", { children: [
            /* @__PURE__ */ _.jsx(nv, {}),
            D(o, "safetyMaintenance")
          ] }),
          q && /* @__PURE__ */ _.jsx(mc, { label: D(o, "childLock"), checked: V, disabled: A, onChange: b }),
          /* @__PURE__ */ _.jsxs("button", { type: "button", className: "drain-button", disabled: !0, children: [
            /* @__PURE__ */ _.jsx(Kg, {}),
            /* @__PURE__ */ _.jsxs("span", { children: [
              /* @__PURE__ */ _.jsx("strong", { children: D(o, "drainWaterTank") }),
              /* @__PURE__ */ _.jsx("small", { children: D(o, "drainWarning") })
            ] })
          ] })
        ] }),
        m && /* @__PURE__ */ _.jsx("p", { className: "dock-pending", role: "status", children: m })
      ] })
    ] })
  ] });
}
function Tc({ icon: n, className: i }) {
  return n ? ne.createElement("ha-icon", { icon: n, class: i, "aria-hidden": "true" }) : null;
}
const Xh = ["smartplan", "vacuum_then_mop", "vacuum_and_mop", "vacuum_only", "mop_only"], Zz = ["vacuum_only", "vacuum_and_mop", "mop_only"], Uz = ["quiet", "balanced", "turbo", "max", "max_plus"], Yz = ["quiet", "balanced", "turbo", "max"], Bz = ["fast", "standard", "deep"], Hz = ["mild", "standard", "intense", "slight", "low", "medium", "moderate", "high", "extreme"], Xz = { slight: 1, low: 5, medium: 15, moderate: 25, high: 28, extreme: 30 }, $z = {
  smartplan: "smartPlan",
  vacuum_then_mop: "vacuumThenMop",
  vacuum_and_mop: "vacuumAndMop",
  vacuum_only: "vacuumOnly",
  mop_only: "mopOnly"
};
function pc({
  value: n,
  options: i,
  onChange: o,
  title: l,
  language: u
}) {
  return i.length === 0 ? null : /* @__PURE__ */ _.jsxs("div", { className: "field app-field", children: [
    /* @__PURE__ */ _.jsx("span", { children: l }),
    /* @__PURE__ */ _.jsx("div", { className: "option-strip", children: i.map((d) => /* @__PURE__ */ _.jsx(
      "button",
      {
        type: "button",
        className: n === d ? "active" : "",
        onClick: () => o(d),
        children: Xv(u, d)
      },
      d
    )) })
  ] });
}
function $h(n, i) {
  return i === "smartplan" ? n.strategy === "smartplan" : n.strategy === "smartplan" ? !1 : i === "vacuum_only" ? n.cleaning_type === "vacuum" : i === "vacuum_and_mop" ? n.cleaning_type === "vacuum_and_mop" : i === "mop_only" ? n.cleaning_type === "mop" : n.cleaning_type === "vacuum_then_mop";
}
function qz({
  language: n,
  draft: i,
  capabilities: o,
  presets: l,
  selectedRoomNames: u,
  submitting: d,
  assistedCarry: f = !1,
  zoneCleaning: m = !1,
  mopRoutes: h,
  checks: v,
  onDraftChange: g,
  onClose: b,
  onStart: k
}) {
  const A = (m ? Zz : Xh).map((N) => l.find(({ preset: ee }) => ee.id === N)).filter((N) => !!N).filter(({ preset: N, available: ee }) => N.id !== "smartplan" || ee), q = l.filter(
    ({ preset: N }) => !Xh.includes(N.id) && (!m || N.strategy === "custom" && ["vacuum", "mop", "vacuum_and_mop"].includes(N.cleaning_type ?? "vacuum"))
  ), J = (i.cleaning_type === "vacuum" ? Uz : Yz).filter((N) => o.fanSpeeds.includes(N)), L = ((i.cleaning_type === "mop" ? h?.mop : h?.vacuum_and_mop) ?? Bz).filter((N) => o.mopModes.includes(N)), K = L.includes(i.mop_mode ?? "") ? i.mop_mode : L[0], P = Hz.filter((N) => o.mopIntensities.includes(N)), G = Math.max(0, P.indexOf(i.mop_intensity ?? "medium")), $ = Xz[P[G]], se = i.strategy === "smartplan" ? D(n, "smartPlanDescription") : i.cleaning_type === "vacuum" ? D(n, "vacuumDescription") : i.cleaning_type === "mop" ? D(n, "mopOnlyDescription") : i.cleaning_type === "vacuum_then_mop" ? D(n, "vacuumThenMopDescription") : D(n, "vacuumAndMopDescription");
  return /* @__PURE__ */ _.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ _.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": D(n, "close"), onClick: b }),
    /* @__PURE__ */ _.jsxs("section", { className: "job-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "job-sheet-title", children: [
      /* @__PURE__ */ _.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ _.jsxs("header", { children: [
        /* @__PURE__ */ _.jsxs("div", { children: [
          /* @__PURE__ */ _.jsx("h2", { id: "job-sheet-title", children: f ? D(n, "assistedCarryTitle") : D(n, "configureTitle") }),
          /* @__PURE__ */ _.jsx("p", { children: u.join(" · ") })
        ] }),
        /* @__PURE__ */ _.jsx("button", { type: "button", className: "icon-button", "aria-label": D(n, "close"), onClick: b, children: /* @__PURE__ */ _.jsx(Cc, {}) })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "sheet-body", children: [
        /* @__PURE__ */ _.jsx(
          "div",
          {
            className: "cleaning-mode-tabs",
            role: "tablist",
            "aria-label": D(n, "cleaningType"),
            style: { "--mode-count": Math.min(A.length, 4) },
            children: A.map(({ preset: N, available: ee, reason: ue }) => /* @__PURE__ */ _.jsxs(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": $h(i, N.id),
                className: $h(i, N.id) ? "active" : "",
                disabled: !ee || d,
                title: ue,
                onClick: () => g(Yo(N)),
                children: [
                  /* @__PURE__ */ _.jsx(Tc, { icon: N.icon }),
                  /* @__PURE__ */ _.jsx("span", { children: D(n, $z[N.id]) })
                ]
              },
              N.id
            ))
          }
        ),
        /* @__PURE__ */ _.jsxs("section", { className: "mode-settings", children: [
          /* @__PURE__ */ _.jsx("p", { className: "mode-description", children: se }),
          i.strategy !== "smartplan" && i.cleaning_type !== "vacuum_then_mop" && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
            i.cleaning_type !== "mop" && /* @__PURE__ */ _.jsx(
              pc,
              {
                language: n,
                title: D(n, "suction"),
                value: i.fan_speed,
                options: J,
                onChange: (N) => g({ ...i, preset_id: "custom_draft", fan_speed: N })
              }
            ),
            i.cleaning_type !== "vacuum" && P.length > 0 && /* @__PURE__ */ _.jsxs("label", { className: "field app-field water-flow", children: [
              /* @__PURE__ */ _.jsx("span", { children: D(n, "waterFlow") }),
              /* @__PURE__ */ _.jsxs("div", { className: "range-heading", children: [
                /* @__PURE__ */ _.jsx("strong", { children: Xv(n, P[G]) }),
                $ !== void 0 && /* @__PURE__ */ _.jsx("output", { children: $ })
              ] }),
              /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: P.length - 1,
                  step: "1",
                  value: G,
                  "aria-label": D(n, "waterFlow"),
                  onChange: (N) => g({
                    ...i,
                    preset_id: "custom_draft",
                    mop_intensity: P[Number(N.target.value)]
                  })
                }
              )
            ] }),
            /* @__PURE__ */ _.jsx(
              pc,
              {
                language: n,
                title: D(n, "cleaningCount"),
                value: String(i.cleaning_count),
                options: ["1", "2"],
                onChange: (N) => g({
                  ...i,
                  preset_id: "custom_draft",
                  cleaning_count: Number(N)
                })
              }
            ),
            /* @__PURE__ */ _.jsx(
              pc,
              {
                language: n,
                title: D(n, "mopRoute"),
                value: K,
                options: L,
                onChange: (N) => g({ ...i, preset_id: "custom_draft", mop_mode: N })
              }
            )
          ] })
        ] }),
        !f && q.length > 0 && /* @__PURE__ */ _.jsxs("div", { className: "saved-profiles", children: [
          /* @__PURE__ */ _.jsx("span", { children: D(n, "savedProfiles") }),
          /* @__PURE__ */ _.jsx("div", { children: q.map(({ preset: N, available: ee, reason: ue }) => /* @__PURE__ */ _.jsxs(
            "button",
            {
              type: "button",
              disabled: !ee || d,
              title: ue,
              className: i.preset_id === N.id ? "active" : "",
              onClick: () => g(Yo(N)),
              children: [
                /* @__PURE__ */ _.jsx(Tc, { icon: N.icon }),
                " ",
                N.name
              ]
            },
            N.id
          )) })
        ] })
      ] }),
      v && (v.blocking.length > 0 || v.warnings.length > 0) && /* @__PURE__ */ _.jsxs("div", { className: `preflight ${v.blocking.length > 0 ? "blocking" : "warning"}`, role: "alert", children: [
        /* @__PURE__ */ _.jsx("strong", { children: D(n, v.blocking.length > 0 ? "preflightBlocked" : "preflightWarnings") }),
        /* @__PURE__ */ _.jsx("ul", { children: [...v.blocking, ...v.warnings].map((N) => /* @__PURE__ */ _.jsx("li", { children: Mz(n, N) }, N.code)) })
      ] }),
      /* @__PURE__ */ _.jsxs("footer", { children: [
        /* @__PURE__ */ _.jsx("button", { type: "button", className: "secondary", disabled: d, onClick: b, children: D(n, "cancel") }),
        /* @__PURE__ */ _.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            disabled: d || (v?.blocking.length ?? 0) > 0,
            onClick: () => k(K && i.strategy === "custom" && ["mop", "vacuum_and_mop"].includes(i.cleaning_type) ? { ...i, mop_mode: K } : i),
            children: d ? f ? D(n, "preparingUpstairs") : D(n, "starting") : f ? D(n, "prepareUpstairs") : (v?.warnings.length ?? 0) > 0 ? D(n, "startAnyway") : D(n, "start")
          }
        )
      ] })
    ] })
  ] });
}
var Ma = function(n, i) {
  return Number(n.toFixed(i));
}, Lz = function(n, i) {
  return i;
}, Oe = function(n, i, o) {
  o && typeof o == "function" && o(n, i);
}, Vz = function(n) {
  return -Math.cos(n * Math.PI) / 2 + 0.5;
}, Gz = function(n) {
  return n;
}, Qz = function(n) {
  return n * n;
}, Kz = function(n) {
  return n * (2 - n);
}, Jz = function(n) {
  return n < 0.5 ? 2 * n * n : -1 + (4 - 2 * n) * n;
}, Pz = function(n) {
  return n * n * n;
}, Wz = function(n) {
  return --n * n * n + 1;
}, Fz = function(n) {
  return n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1;
}, Iz = function(n) {
  return n * n * n * n;
}, ek = function(n) {
  return 1 - --n * n * n * n;
}, tk = function(n) {
  return n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n;
}, nk = function(n) {
  return n * n * n * n * n;
}, ak = function(n) {
  return 1 + --n * n * n * n * n;
}, ik = function(n) {
  return n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n;
}, $v = {
  easeOut: Vz,
  linear: Gz,
  easeInQuad: Qz,
  easeOutQuad: Kz,
  easeInOutQuad: Jz,
  easeInCubic: Pz,
  easeOutCubic: Wz,
  easeInOutCubic: Fz,
  easeInQuart: Iz,
  easeOutQuart: ek,
  easeInOutQuart: tk,
  easeInQuint: nk,
  easeOutQuint: ak,
  easeInOutQuint: ik
}, qv = function(n) {
  typeof n == "number" && cancelAnimationFrame(n);
}, an = function(n) {
  n.mounted && (qv(n.animation), n.isAnimating = !1, n.animation = null, n.velocity = null);
};
function Lv(n, i, o, l) {
  if (n.mounted) {
    var u = (/* @__PURE__ */ new Date()).getTime(), d = 1;
    an(n), n.animation = function() {
      if (!n.mounted)
        return qv(n.animation);
      var f = (/* @__PURE__ */ new Date()).getTime() - u, m = f / o, h = $v[i], v = h(m);
      f >= o ? (l(d), n.animation = null) : n.animation && (l(v), requestAnimationFrame(n.animation));
    }, requestAnimationFrame(n.animation);
  }
}
function ok(n) {
  var i = n.scale, o = n.positionX, l = n.positionY;
  return !(Number.isNaN(i) || Number.isNaN(o) || Number.isNaN(l));
}
function oa(n, i, o, l) {
  var u = ok(i);
  if (!(!n.mounted || !u)) {
    var d = n.setState, f = n.state, m = f.scale, h = f.positionX, v = f.positionY, g = i.scale - m, b = i.positionX - h, k = i.positionY - v;
    o === 0 ? d(i.scale, i.positionX, i.positionY) : Lv(n, l, o, function(T) {
      T !== 1 ? n.isAnimating = !0 : n.isAnimating = !1;
      var A = m + g * T, q = h + b * T, V = v + k * T;
      d(A, q, V);
    });
  }
}
function rk(n, i, o) {
  var l = n.offsetWidth, u = n.offsetHeight, d = i.offsetWidth, f = i.offsetHeight, m = d * o, h = f * o, v = l - m, g = u - h;
  return {
    wrapperWidth: l,
    wrapperHeight: u,
    newContentWidth: m,
    newDiffWidth: v,
    newContentHeight: h,
    newDiffHeight: g
  };
}
var lk = function(n, i, o, l, u, d, f) {
  var m = n > i ? o * (f ? 0.5 : 1) : 0, h = l > u ? d * (f ? 0.5 : 1) : 0, v = n - i - m, g = m, b = l - u - h, k = h;
  return {
    minPositionX: v,
    maxPositionX: g,
    minPositionY: b,
    maxPositionY: k,
    scaleWidthFactor: m,
    scaleHeightFactor: h
  };
}, Lc = function(n, i) {
  var o = n.wrapperComponent, l = n.contentComponent, u = n.setup, d = u.centerZoomedOut, f = u.disablePadding;
  if (!o || !l)
    throw new Error("Components are not mounted");
  var m = rk(o, l, i), h = m.wrapperWidth, v = m.wrapperHeight, g = m.newContentWidth, b = m.newContentHeight, k = m.newDiffWidth, T = m.newDiffHeight, A = lk(h, g, k, v, b, T, !!d), q = h >= g && v >= b;
  f && q && !d && (A.minPositionX = 0, A.maxPositionX = 0, A.minPositionY = 0, A.maxPositionY = 0);
  var V = n.setup, J = V.minPositionX, ae = V.maxPositionX, L = V.minPositionY, K = V.maxPositionY;
  return J != null && (A.minPositionX = h * (1 - i) + J * i), ae != null && (A.maxPositionX = ae * i), L != null && (A.minPositionY = v * (1 - i) + L * i), K != null && (A.maxPositionY = K * i), A;
}, $o = function(n, i, o, l) {
  return l ? n < i ? Ma(i, 2) : n > o ? Ma(o, 2) : Ma(n, 2) : Ma(n, 2);
}, Ci = function(n, i) {
  var o = Lc(n, i);
  return n.bounds = o, o;
};
function Vo(n, i, o, l, u, d, f) {
  var m = o.minPositionX, h = o.minPositionY, v = o.maxPositionX, g = o.maxPositionY, b = 0, k = 0;
  f && (b = u, k = d);
  var T = $o(n, m - b, v + b, l), A = $o(i, h - k, g + k, l);
  return { x: T, y: A };
}
function Ul(n, i, o, l, u, d) {
  var f = n.state, m = f.scale, h = f.positionX, v = f.positionY, g = l - m;
  if (typeof i != "number" || typeof o != "number")
    return console.error("Mouse X and Y position were not provided!"), { x: h, y: v };
  var b = h - i * g, k = v - o * g, T = Vo(b, k, u, d, 0, 0, null);
  return T;
}
var qh = 1e-7;
function Go(n, i, o, l, u) {
  var d = u ? l : 0, f = Math.max(i - d, qh), m = o + d;
  return !Number.isNaN(o) && n >= m ? m : !Number.isNaN(i) && n <= f ? f : Math.max(n, qh);
}
var Lh = function(n, i) {
  var o = n.setup.panning.excluded, l = n.isInitialized, u = n.wrapperComponent, d = i.target, f = "shadowRoot" in d && "composedPath" in i, m = f ? i.composedPath().some(function(g) {
    return g instanceof Element ? u?.contains(g) : !1;
  }) : u?.contains(d), h = l && d && m;
  if (!h)
    return !1;
  var v = Qo(d, o);
  return !(v || d.getAttribute("draggable") === "true" || d.getAttribute("contenteditable") === "true" || d.isContentEditable);
}, Vh = function(n) {
  var i = n.isInitialized, o = n.isPanning, l = n.setup, u = l.panning.disabled, d = i && o && !u;
  return !!d;
}, sk = function(n, i) {
  var o = n.state, l = o.positionX, u = o.positionY;
  n.isPanning = !0;
  var d = i.clientX, f = i.clientY;
  n.startCoords = { x: d - l, y: f - u };
}, uk = function(n, i) {
  var o = i.touches, l = n.state, u = l.positionX, d = l.positionY;
  n.isPanning = !0;
  var f = o.length === 1;
  if (f) {
    var m = o[0].clientX, h = o[0].clientY;
    n.startCoords = { x: m - u, y: h - d };
  }
};
function ck(n) {
  var i = n.state, o = i.positionX, l = i.positionY, u = i.scale, d = n.setup, f = d.disabled, m = d.limitToBounds, h = d.centerZoomedOut, v = n.wrapperComponent;
  if (!(f || !v || !n.bounds)) {
    var g = n.bounds, b = g.maxPositionX, k = g.minPositionX, T = g.maxPositionY, A = g.minPositionY, q = o > b || o < k, V = l > T || l < A, J = o > b ? v.offsetWidth : n.setup.minPositionX || 0, ae = l > T ? v.offsetHeight : n.setup.minPositionY || 0, L = Ul(n, J, ae, u, n.bounds, m || h), K = L.x, P = L.y;
    return {
      scale: u,
      positionX: q ? K : o,
      positionY: V ? P : l
    };
  }
}
function Vv(n, i, o, l, u) {
  var d = n.setup.limitToBounds, f = n.wrapperComponent, m = n.bounds, h = n.state, v = h.scale, g = h.positionX, b = h.positionY;
  if (!(f === null || m === null || i === g && o === b)) {
    var k = Vo(i, o, m, d, l, u, f), T = k.x, A = k.y;
    n.setState(v, T, A);
  }
}
var dk = function(n, i, o) {
  var l = n.startCoords, u = n.state, d = n.setup.panning, f = d.lockAxisX, m = d.lockAxisY, h = u.positionX, v = u.positionY;
  if (!l)
    return { x: h, y: v };
  var g = i - l.x, b = o - l.y, k = f ? h : g, T = m ? v : b;
  return { x: k, y: T };
}, na = function(n, i, o) {
  var l = n.setup, u = n.state, d = l.minScale, f = l.disablePadding, m = l.centerZoomedOut, h = o ?? u.scale;
  return i > 0 && h >= d && !f && !m ? i : 0;
}, ta;
(function(n) {
  n.TRACK_PAD = "track_pad", n.MOUSE = "mouse", n.TOUCH = "touch";
})(ta || (ta = {}));
var fk = function(n) {
  var i = n.mounted, o = n.wrapperComponent, l = n.contentComponent, u = n.setup, d = u.disabled, f = u.velocityAnimation, m = u.limitToBounds, h = n.state.scale, v = f.disabled;
  if (v || d || !i || !o || !l)
    return !1;
  if (!m)
    return !0;
  var g = o.offsetWidth < l.offsetWidth * h || o.offsetHeight < l.offsetHeight * h;
  return g;
}, mk = function(n) {
  var i = n.mounted, o = n.velocity, l = n.bounds, u = n.setup, d = u.disabled, f = u.velocityAnimation, m = f.disabled, h = !m && !d && i;
  return !(!h || !o || !l);
};
function pk(n, i) {
  var o = n.setup.velocityAnimation, l = o.animationTime, u = o.maxAnimationTime, d = o.inertia;
  return Math.min(l * Math.max(1, Math.abs(i / d)), u);
}
function Gh(n, i, o, l, u, d, f, m, h, v) {
  if (u) {
    if (i > f && o > f) {
      var g = f + (n - f) * v;
      return g > h ? h : g < f ? f : g;
    }
    if (i < d && o < d) {
      var g = d + (n - d) * v;
      return g < m ? m : g > d ? d : g;
    }
  }
  return l ? i : $o(n, d, f, u);
}
function hk(n) {
  var i = 1, o = n.offsetWidth / window.innerWidth;
  return Number.isNaN(o) ? i : Math.min(i, o);
}
var hc = function(n, i, o) {
  var l = 0, u = n * o;
  return Number.isNaN(u) ? l : n < 0 ? Math.max(u, -i) : Math.min(u, i);
};
function vk(n, i, o) {
  var l, u, d = fk(n);
  if (d) {
    var f = n.lastMousePosition, m = n.velocityTime, h = n.setup, v = n.wrapperComponent, g = h.velocityAnimation, b = g.maxStrengthMouse, k = g.maxStrengthTouch, T = g.sensitivityTouch, A = g.sensitivityMouse, q = Date.now();
    if (f && m && v) {
      var V = hk(v), J = (l = {}, l[ta.TOUCH] = T, l[ta.MOUSE] = A, l)[o], ae = (u = {}, u[ta.TOUCH] = k, u[ta.MOUSE] = b, u)[o], L = i.x - f.x, K = i.y - f.y, P = hc(L / V, ae, J), G = hc(K / V, ae, J), $ = q - m, se = L * L + K * K, N = hc(Math.sqrt(se) / $, ae, J);
      n.velocity = { velocityX: P, velocityY: G, total: N };
    }
    n.lastMousePosition = i, n.velocityTime = q;
  }
}
function _k(n) {
  var i = n.velocity, o = n.bounds, l = n.setup, u = n.wrapperComponent, d = mk(n);
  if (!(!d || !i || !o || !u)) {
    var f = i.velocityX, m = i.velocityY, h = i.total, v = o.maxPositionX, g = o.minPositionX, b = o.maxPositionY, k = o.minPositionY, T = l.limitToBounds, A = l.autoAlignment, q = l.zoomAnimation, V = l.panning, J = V.lockAxisY, ae = V.lockAxisX, L = q.animationType, K = A.sizeX, P = A.sizeY, G = A.velocityAlignmentTime, $ = G, se = pk(n, h), N = Math.max(se, $), ee = na(n, K), ue = na(n, P), fe = ee * u.offsetWidth / 100, Re = ue * u.offsetHeight / 100, W = v + fe, te = g - fe, j = b + Re, X = k - Re, I = n.state, pe = (/* @__PURE__ */ new Date()).getTime();
    Lv(n, L, N, function(ye) {
      var w = n.state, Z = w.scale, Q = w.positionX, F = w.positionY, ve = (/* @__PURE__ */ new Date()).getTime() - pe, me = ve / $, Se = $v[A.animationType], Ye = 1 - Se(Math.min(1, me)), Be = 1 - ye, Bt = Q + f * Be, Ft = F + m * Be, Mn = Gh(Bt, I.positionX, Q, ae, T, g, v, te, W, Ye), on = Gh(Ft, I.positionY, F, J, T, k, b, X, j, Ye);
      if (Q !== Bt || F !== Ft) {
        n.setState(Z, Mn, on);
        var yt = n.props.onPanning;
        yt && yt(je(n), {});
      }
    });
  }
}
function Qh(n, i) {
  var o = n.state, l = o.scale, u = o.positionX, d = o.positionY;
  n.panStartPosition = { x: u, y: d }, an(n), Ci(n, l), window.TouchEvent !== void 0 && i instanceof TouchEvent ? uk(n, i) : sk(n, i);
}
function Gv(n, i) {
  var o = n.state.scale, l = n.setup, u = l.minScale, d = l.autoAlignment, f = d.disabled, m = d.sizeX, h = d.sizeY, v = d.animationTime, g = d.animationType, b = f || o < u || !m && !h;
  if (!b) {
    var k = ck(n);
    k && oa(n, k, v, g);
  }
}
function Kh(n, i, o, l) {
  var u = n.startCoords, d = n.setup, f = d.autoAlignment, m = f.sizeX, h = f.sizeY;
  if (u) {
    var v = dk(n, i, o), g = v.x, b = v.y, k = na(n, m), T = na(n, h);
    vk(n, { x: g, y: b }, l), Vv(n, g, b, k, T);
  }
}
function yk(n, i) {
  if (n.isPanning) {
    var o = n.velocity, l = n.wrapperComponent, u = n.contentComponent;
    n.isPanning = !1;
    var d = n.state, f = d.positionX, m = d.positionY, h = d.scale, v = n.panStartPosition;
    if (n.panStartPosition = null, v) {
      var g = f - v.x, b = m - v.y;
      if (g * g + b * b <= 25)
        return;
    }
    n.isAnimating = !1, n.animation = null;
    var k = l?.offsetWidth || 0, T = l?.offsetHeight || 0, A = (u?.offsetWidth || 0) * h, q = (u?.offsetHeight || 0) * h, V = !n.setup.limitToBounds || k < A || T < q, J = !i && o && o.total > 0.1 && V;
    J ? _k(n) : Gv(n);
  }
}
function Vc(n, i, o, l) {
  var u = n.setup, d = u.minScale, f = u.maxScale, m = u.limitToBounds, h = Go(Ma(i, 2), d, f, 0, !1), v = Ci(n, h), g = Ul(n, o, l, h, v, m), b = g.x, k = g.y;
  return { scale: h, positionX: b, positionY: k };
}
function Gc(n, i, o) {
  var l = n.state.scale, u = n.wrapperComponent, d = n.setup, f = d.minScale, m = d.maxScale, h = d.limitToBounds, v = d.zoomAnimation, g = v.disabled, b = v.animationTime, k = v.animationType, T = l >= f && l <= m, A = g || T;
  if ((l >= 1 || h) && Gv(n), !(A || !u || !n.mounted)) {
    var q = i || u.offsetWidth / 2, V = o || u.offsetHeight / 2, J = l < f ? f : m, ae = Vc(n, J, q, V);
    ae && oa(n, ae, b, k);
  }
}
var Pt = function() {
  return Pt = Object.assign || function(i) {
    for (var o, l = 1, u = arguments.length; l < u; l++) {
      o = arguments[l];
      for (var d in o) Object.prototype.hasOwnProperty.call(o, d) && (i[d] = o[d]);
    }
    return i;
  }, Pt.apply(this, arguments);
};
function Jh(n, i, o) {
  for (var l = 0, u = i.length, d; l < u; l++)
    (d || !(l in i)) && (d || (d = Array.prototype.slice.call(i, 0, l)), d[l] = i[l]);
  return n.concat(d || Array.prototype.slice.call(i));
}
var vc = {
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
}, Ac = {
  wrapperClass: "react-transform-wrapper",
  contentClass: "react-transform-component"
}, Qv = function(n) {
  var i, o, l, u, d, f, m, h, v, g = Math.max((i = n.minScale) !== null && i !== void 0 ? i : Ea.minScale, 1e-7), b = (o = n.maxScale) !== null && o !== void 0 ? o : Ea.maxScale, k = (l = n.initialScale) !== null && l !== void 0 ? l : vc.scale, T = Math.min(Math.max(k, g), b), A = $o((u = n.initialPositionX) !== null && u !== void 0 ? u : vc.positionX, (d = n.minPositionX) !== null && d !== void 0 ? d : -1 / 0, (f = n.maxPositionX) !== null && f !== void 0 ? f : 1 / 0, n.minPositionX != null || n.maxPositionX != null), q = $o((m = n.initialPositionY) !== null && m !== void 0 ? m : vc.positionY, (h = n.minPositionY) !== null && h !== void 0 ? h : -1 / 0, (v = n.maxPositionY) !== null && v !== void 0 ? v : 1 / 0, n.minPositionY != null || n.maxPositionY != null);
  return {
    previousScale: T,
    scale: T,
    positionX: A,
    positionY: q
  };
}, Ph = function(n) {
  var i = Pt({}, Ea);
  return Object.keys(n).forEach(function(o) {
    var l = o, u = typeof n[l] < "u", d = typeof Ea[l] < "u";
    if (d && u) {
      var f = Object.prototype.toString.call(Ea[l]), m = f === "[object Object]", h = f === "[object Array]";
      m ? i[l] = Pt(Pt({}, Ea[l]), n[l]) : h ? i[l] = Jh(Jh([], Ea[l], !0), n[l]) : i[l] = n[l];
    }
  }), i.minScale <= 0 && (i.minScale = 1e-7), i;
}, Kv = function(n, i, o) {
  var l = n.state.scale, u = n.wrapperComponent, d = n.setup, f = d.maxScale, m = d.minScale, h = d.zoomAnimation, v = d.smooth, g = h.size;
  if (!u)
    throw new Error("Wrapper is not mounted");
  var b = v ? l * Math.exp(i * o) : l + i * o, k = Go(Ma(b, 3), m, f, g, !1);
  return k;
};
function Jv(n, i, o, l, u) {
  var d, f, m = n.wrapperComponent, h = n.state, v = h.scale, g = h.positionX, b = h.positionY, k = n.setup.zoomAnimation;
  if (!m)
    return console.error("No WrapperComponent found");
  var T = k.disabled ? 0 : l, A = m.offsetWidth, q = m.offsetHeight, V = (A / 2 - g) / v, J = (q / 2 - b) / v, ae = Kv(n, i, o), L = Vc(n, ae, V, J);
  if (!L)
    return console.error("Error during zoom event. New transformation state was not calculated.");
  var K = n.props, P = K.onZoomStart, G = K.onZoom, $ = K.onZoomStop, se = new MouseEvent("mousemove", { bubbles: !0 }), N = je(n);
  Oe(N, se, P), Oe(N, se, G), oa(n, L, T, u);
  var ee = (f = (d = m.ownerDocument) === null || d === void 0 ? void 0 : d.defaultView) !== null && f !== void 0 ? f : typeof window < "u" ? window : null;
  ee && ee.setTimeout(function() {
    n.mounted && Oe(je(n), se, $);
  }, T);
}
function Pv(n, i, o, l) {
  var u, d, f = n.setup, m = n.wrapperComponent, h = n.contentComponent, v = f.limitToBounds, g = f.centerOnInit, b = Qv(n.props), k = n.state, T = k.scale, A = k.positionX, q = k.positionY;
  if (m) {
    var V = b.positionX, J = b.positionY;
    if (g && h) {
      var ae = Qc(b.scale, m, h);
      V = ae.positionX, J = ae.positionY;
    }
    var L = Lc(n, b.scale), K = Vo(V, J, L, v, 0, 0, m), P = {
      scale: b.scale,
      positionX: K.x,
      positionY: K.y
    };
    if (!(T === b.scale && A === b.positionX && q === b.positionY)) {
      l?.();
      var G = n.props, $ = G.onZoomStart, se = G.onZoom, N = G.onZoomStop, ee = new MouseEvent("mousemove", { bubbles: !0 }), ue = je(n);
      Oe(ue, ee, $), Oe(ue, ee, se), oa(n, P, i, o);
      var fe = (d = (u = m.ownerDocument) === null || u === void 0 ? void 0 : u.defaultView) !== null && d !== void 0 ? d : typeof window < "u" ? window : null;
      fe && fe.setTimeout(function() {
        n.mounted && Oe(je(n), ee, N);
      }, i);
    }
  }
}
function gk(n, i, o, l) {
  var u = n.getBoundingClientRect(), d = i.getBoundingClientRect(), f = o.getBoundingClientRect(), m = d.x * l.scale, h = d.y * l.scale;
  return {
    x: (u.x - f.x + m) / l.scale,
    y: (u.y - f.y + h) / l.scale
  };
}
function bk(n, i, o, l, u) {
  l === void 0 && (l = 0), u === void 0 && (u = 0);
  var d = n.wrapperComponent, f = n.contentComponent, m = n.state, h = n.setup, v = h.limitToBounds, g = h.minScale, b = h.maxScale;
  if (!d || !f)
    return m;
  var k = d.getBoundingClientRect(), T = i.getBoundingClientRect(), A = gk(i, d, f, m), q = A.x, V = A.y, J = T.width / m.scale, ae = T.height / m.scale, L = d.offsetWidth / J, K = d.offsetHeight / ae, P = Go(o || Math.min(L, K), g, b, 0, !1), G = (k.width - J * P) / 2, $ = (k.height - ae * P) / 2, se = (k.left - q) * P + G + l, N = (k.top - V) * P + $ + u, ee = Lc(n, P), ue = Vo(se, N, ee, v, 0, 0, d), fe = ue.x, Re = ue.y;
  return { positionX: fe, positionY: Re, scale: P };
}
var Sk = function(n) {
  return function(i, o, l) {
    i === void 0 && (i = 0.5), o === void 0 && (o = 300), l === void 0 && (l = "easeOut"), Jv(n, 1, i, o, l);
  };
}, wk = function(n) {
  return function(i, o, l) {
    i === void 0 && (i = 0.5), o === void 0 && (o = 300), l === void 0 && (l = "easeOut"), Jv(n, -1, i, o, l);
  };
}, zk = function(n) {
  return function(i, o, l, u, d) {
    u === void 0 && (u = 300), d === void 0 && (d = "easeOut");
    var f = n.state, m = f.positionX, h = f.positionY, v = f.scale, g = n.wrapperComponent, b = n.contentComponent, k = n.setup.disabled;
    if (!(k || !g || !b)) {
      var T = {
        positionX: Number.isNaN(i) ? m : i,
        positionY: Number.isNaN(o) ? h : o,
        scale: Number.isNaN(l) ? v : l
      };
      oa(n, T, u, d);
    }
  };
}, kk = function(n) {
  return function(i, o) {
    i === void 0 && (i = 200), o === void 0 && (o = "easeOut"), Pv(n, i, o);
  };
}, xk = function(n) {
  return function(i, o, l) {
    o === void 0 && (o = 200), l === void 0 && (l = "easeOut");
    var u = n.state, d = n.wrapperComponent, f = n.contentComponent;
    if (d && f) {
      var m = Qc(i || u.scale, d, f);
      oa(n, m, o, l);
    }
  };
}, Tk = function(n) {
  return function(i, o, l, u, d, f) {
    l === void 0 && (l = 600), u === void 0 && (u = "easeOut"), d === void 0 && (d = 0), f === void 0 && (f = 0), an(n);
    var m = n.wrapperComponent, h = typeof i == "string" ? document.getElementById(i) : i;
    if (m && h && m.contains(h)) {
      var v = bk(n, h, o, d, f);
      oa(n, v, l, u);
    }
  };
}, Ml = function(n) {
  return {
    instance: n,
    state: n.state,
    zoomIn: Sk(n),
    zoomOut: wk(n),
    setTransform: zk(n),
    resetTransform: kk(n),
    centerView: xk(n),
    zoomToElement: Tk(n)
  };
}, Ak = function(n) {
  return {
    instance: n,
    state: n.state
  };
}, je = function(n) {
  var i = {};
  return Object.assign(i, Ak(n)), Object.assign(i, Ml(n)), i;
}, _c = !1;
function yc() {
  try {
    var n = {
      get passive() {
        return _c = !0, !1;
      }
    };
    return n;
  } catch {
    return _c = !1, _c;
  }
}
var wl = ".".concat(Ac.wrapperClass), Qo = function(n, i) {
  return i.some(function(o) {
    return n.matches("".concat(wl, " ").concat(o, ", ").concat(wl, " .").concat(o, ", ").concat(wl, " ").concat(o, " *, ").concat(wl, " .").concat(o, " *"));
  });
}, qo = function(n) {
  n && clearTimeout(n);
}, Ek = function(n) {
  return Number.parseFloat(n.toFixed(8));
}, Wv = function(n, i, o) {
  var l = Ek(o);
  return "translate(".concat(n, "px, ").concat(i, "px) scale(").concat(l, ")");
}, Qc = function(n, i, o) {
  var l = o.offsetWidth * n, u = o.offsetHeight * n, d = (i.offsetWidth - l) / 2, f = (i.offsetHeight - u) / 2;
  return {
    scale: n,
    positionX: d,
    positionY: f
  };
};
function jk(n, i) {
  n != null && (typeof n == "function" ? n(i) : n.current = i);
}
function Mk(n) {
  return function(i) {
    n.forEach(function(o) {
      typeof o == "function" ? o(i) : o != null && (o.current = i);
    });
  };
}
var Fv = function(n, i) {
  var o = n.setup.wheel, l = o.disabled, u = o.wheelDisabled, d = o.touchPadDisabled, f = o.excluded, m = n.isInitialized, h = n.isPanning, v = i.target, g = m && !h && !l && v;
  if (!g || u && !i.ctrlKey || d && i.ctrlKey)
    return !1;
  var b = Qo(v, f);
  if (b)
    return !1;
  var k = n.isPressingKeys(n.setup.wheel.activationKeys);
  return !!k;
}, Ck = function(n, i) {
  var o = n.setup, l = o.disabled, u = o.trackPadPanning, d = u.activationKeys, f = u.excluded;
  if (!n.wrapperComponent || !n.contentComponent || l || u.disabled || i.ctrlKey)
    return !1;
  var m = Fv(n, i);
  if (m)
    return !1;
  var h = i.target, v = Qo(h, f);
  if (v)
    return !1;
  var g = n.isPressingKeys(d);
  return !!g;
}, Ok = function(n) {
  return n ? n.deltaY < 0 ? 1 : -1 : 0;
};
function Nk(n, i) {
  var o = Ok(n), l = Lz(i, o);
  return l;
}
function Iv(n, i, o) {
  var l = i.getBoundingClientRect(), u = 0, d = 0;
  if ("clientX" in n)
    u = (n.clientX - l.left) / o, d = (n.clientY - l.top) / o;
  else {
    var f = n.touches[0];
    u = (f.clientX - l.left) / o, d = (f.clientY - l.top) / o;
  }
  return (Number.isNaN(u) || Number.isNaN(d)) && console.error("No mouse or touch offset found"), {
    x: u,
    y: d
  };
}
var Dk = function(n, i, o, l, u) {
  var d = n.state.scale, f = n.wrapperComponent, m = n.setup, h = m.maxScale, v = m.minScale, g = m.zoomAnimation, b = m.disablePadding, k = g.size, T = g.disabled;
  if (!f)
    throw new Error("Wrapper is not mounted");
  var A = d + i * o, q = l ? !1 : !T, V = Go(A, v, h, k, q && !b);
  return V;
}, e_ = function(n, i) {
  var o = n.previousWheelEvent, l = n.state.scale, u = n.setup, d = u.maxScale, f = u.minScale;
  return o ? l < d || l > f || Math.sign(o.deltaY) !== Math.sign(i.deltaY) || o.deltaY > 0 && o.deltaY < i.deltaY || o.deltaY < 0 && o.deltaY > i.deltaY || Math.sign(o.deltaY) !== Math.sign(i.deltaY) : !1;
}, Rk = function(n, i) {
  var o = n.setup.pinch, l = o.disabled, u = o.excluded, d = n.isInitialized, f = i.target, m = d && !l && f;
  if (!m)
    return !1;
  var h = Qo(f, u);
  return !h;
}, Zk = function(n) {
  var i = n.setup.pinch.disabled, o = n.isInitialized, l = n.pinchStartDistance, u = o && !i && l !== null;
  return !!u;
}, Uk = function(n, i, o) {
  var l = o.getBoundingClientRect(), u = n.touches, d = u[0].clientX - l.left, f = u[0].clientY - l.top, m = u[1].clientX - l.left, h = u[1].clientY - l.top;
  return {
    x: (d + m) / 2 / i,
    y: (f + h) / 2 / i
  };
}, t_ = function(n) {
  return Math.sqrt(Math.pow(n.touches[0].pageX - n.touches[1].pageX, 2) + Math.pow(n.touches[0].pageY - n.touches[1].pageY, 2));
}, Yk = 5, Bk = function(n, i) {
  var o = n.pinchStartScale, l = n.pinchStartDistance, u = n.setup, d = u.maxScale, f = u.minScale, m = u.zoomAnimation, h = u.disablePadding, v = u.pinch, g = m.size, b = m.disabled, k = v.step;
  if (!o || l === null)
    throw new Error("Pinch touches distance was not provided");
  if (i < 0)
    return n.state.scale;
  var T = i / l, A = T * o, q = (A - o) * (k / Yk), V = o + q, J = V === 1 / 0 ? 0 : Ma(V, 10);
  return Go(J, f, d, g, !b && !h);
}, n_ = 160, a_ = 100, Hk = function(n, i) {
  var o = n.props, l = o.onWheelStart, u = o.onZoomStart;
  n.wheelStopEventTimer || (an(n), Oe(je(n), i, l), Oe(je(n), i, u));
}, Xk = function(n, i) {
  var o = n.props, l = o.onWheel, u = o.onZoom, d = n.contentComponent, f = n.setup, m = n.state, h = m.scale, v = f.limitToBounds, g = f.centerZoomedOut, b = f.zoomAnimation, k = f.wheel, T = f.disablePadding, A = f.smooth, q = b.size, V = b.disabled, J = k.step;
  if (!d)
    throw new Error("Component not mounted");
  i.preventDefault(), i.stopPropagation();
  var ae = Nk(i, null), L = A ? J * Math.abs(i.deltaY) : J, K = Dk(n, ae, L, !i.ctrlKey);
  if (h !== K) {
    var P = Ci(n, K), G = Iv(i, d, h), $ = V || q === 0 || g || T, se = v && $, N = Ul(n, G.x, G.y, K, P, se), ee = N.x, ue = N.y;
    n.previousWheelEvent = i, n.setState(K, ee, ue), Oe(je(n), i, l), Oe(je(n), i, u);
  }
}, $k = function(n, i) {
  var o = n.props, l = o.onWheelStop, u = o.onZoomStop;
  qo(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Gc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, a_);
  var d = e_(n, i);
  d && (qo(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Oe(je(n), i, l), Oe(je(n), i, u));
  }, n_));
}, qk = function(n, i) {
  var o = n.props, l = o.onWheelStart, u = o.onPanningStart;
  n.wheelStopEventTimer || (an(n), Oe(je(n), i, l), Oe(je(n), i, u));
}, Lk = function(n, i) {
  var o = n.props, l = o.onWheelStop, u = o.onPanningStop;
  qo(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Gc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, a_);
  var d = e_(n, i);
  d && (qo(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Oe(je(n), i, l), Oe(je(n), i, u));
  }, n_));
}, i_ = function(n) {
  for (var i = 0, o = 0, l = 0; l < 2; l += 1)
    i += n.touches[l].clientX, o += n.touches[l].clientY;
  var u = i / 2, d = o / 2;
  return { x: u, y: d };
}, Vk = function(n, i) {
  var o = t_(i);
  n.pinchStartDistance = o, n.lastDistance = o, n.pinchStartScale = n.state.scale, n.isPanning = !1, n.isPinching = !0, n.pinchPreviousCenter = i_(i), an(n);
}, Gk = function(n, i) {
  var o = n.contentComponent, l = n.pinchStartDistance, u = n.wrapperComponent, d = n.pinchPreviousCenter, f = n.state.scale, m = n.setup, h = m.limitToBounds, v = m.centerZoomedOut, g = m.zoomAnimation, b = m.autoAlignment, k = m.pinch, T = m.panning, A = g.disabled, q = g.size, V = k.allowPanning;
  if (!(l === null || !o)) {
    var J = Uk(i, f, o);
    if (!(!Number.isFinite(J.x) || !Number.isFinite(J.y))) {
      var ae = t_(i), L = Bk(n, ae), K = i_(i), P = f / L, G = (K.x - (d?.x || 0)) * P, $ = (K.y - (d?.y || 0)) * P;
      if (!(L === f && G === 0 && $ === 0)) {
        n.pinchPreviousCenter = K;
        var se = Ci(n, L), N = A || q === 0 || v, ee = h && N, ue = Ul(n, J.x, J.y, L, se, ee), fe = ue.x, Re = ue.y;
        if (n.pinchMidpoint = J, n.lastDistance = ae, T.disabled || !V)
          n.setState(L, fe, Re);
        else {
          var W = b.sizeX, te = b.sizeY, j = na(n, W, L), X = na(n, te, L), I = fe + G, pe = Re + $, ye = Vo(I, pe, se, h, j, X, u), w = ye.x, Z = ye.y;
          n.setState(L, w, Z);
        }
      }
    }
  }
}, Qk = function(n) {
  var i = n.pinchMidpoint;
  n.velocity = null, n.lastDistance = null, n.pinchMidpoint = null, n.pinchStartScale = null, n.pinchStartDistance = null, n.isPinching = !1, Gc(n, i?.x, i?.y);
}, o_ = function(n, i) {
  var o = n.props.onZoomStop, l = n.setup.doubleClick.animationTime;
  qo(n.doubleClickStopEventTimer), n.doubleClickStopEventTimer = setTimeout(function() {
    n.doubleClickStopEventTimer = null, Oe(je(n), i, o);
  }, l);
}, Kk = function(n, i) {
  var o = n.props, l = o.onZoomStart, u = o.onZoom, d = n.setup.doubleClick, f = d.animationTime, m = d.animationType;
  Oe(je(n), i, l), Pv(n, f, m, function() {
    return Oe(je(n), i, u);
  }), o_(n, i);
};
function Jk(n, i) {
  return n === "toggle" ? i === 1 ? 1 : -1 : n === "zoomOut" ? -1 : 1;
}
function Pk(n, i) {
  var o = n.setup, l = n.doubleClickStopEventTimer, u = n.state, d = n.contentComponent, f = u.scale, m = n.props, h = m.onZoomStart, v = m.onZoom, g = o.doubleClick, b = g.disabled, k = g.mode, T = g.step, A = g.animationTime, q = g.animationType;
  if (!b && !l) {
    if (k === "reset")
      return Kk(n, i);
    if (!d)
      return console.error("No ContentComponent found");
    var V = Jk(k, n.state.scale), J = Kv(n, V, T);
    if (f !== J) {
      Oe(je(n), i, h);
      var ae = Iv(i, d, f), L = Vc(n, J, ae.x, ae.y);
      if (!L)
        return console.error("Error during zoom event. New transformation state was not calculated.");
      Oe(je(n), i, v), oa(n, L, A, q), o_(n, i);
    }
  }
}
var Wk = function(n, i) {
  var o = n.isInitialized, l = n.setup, u = n.wrapperComponent, d = l.doubleClick, f = d.disabled, m = d.excluded, h = i.target, v = u?.contains(h), g = o && h && v && !f;
  if (!g)
    return !1;
  var b = Qo(h, m);
  return !b;
}, Fk = (
  /** @class */
  /* @__PURE__ */ (function() {
    function n(i) {
      var o = this;
      this.mounted = !0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.onInitCallbacks = /* @__PURE__ */ new Set(), this.onTransformCallbacks = /* @__PURE__ */ new Set(), this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.isWheelPanning = !1, this.startCoords = null, this.panStartPosition = null, this.lastTouch = null, this.isPinching = !1, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.pinchPreviousCenter = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.isAnimating = !1, this.animation = null, this.pressedKeys = {}, this.mount = function() {
        o.initializeWindowEvents();
      }, this.unmount = function() {
        o.cleanupWindowEvents();
      }, this.update = function(l) {
        o.props = l, o.wrapperComponent && o.contentComponent && Ci(o, o.state.scale), o.setup = Ph(l);
      }, this.initializeWindowEvents = function() {
        var l, u, d, f, m = yc(), h = (l = o.wrapperComponent) === null || l === void 0 ? void 0 : l.ownerDocument, v = h?.defaultView;
        (u = o.wrapperComponent) === null || u === void 0 || u.addEventListener("wheel", o.onWheelPanning, m), (d = o.wrapperComponent) === null || d === void 0 || d.addEventListener("keyup", o.setKeyUnPressed, m), (f = o.wrapperComponent) === null || f === void 0 || f.addEventListener("keydown", o.setKeyPressed, m), v?.addEventListener("mousedown", o.onPanningStart, m), v?.addEventListener("mousemove", o.onPanning, m), v?.addEventListener("mouseup", o.onPanningStop, m), h?.addEventListener("mouseleave", o.clearPanning, m), v?.addEventListener("keyup", o.setKeyUnPressed, m), v?.addEventListener("keydown", o.setKeyPressed, m), v?.addEventListener("blur", o.handleWindowBlur);
      }, this.cleanupWindowEvents = function() {
        var l, u, d, f, m, h = yc(), v = (l = o.wrapperComponent) === null || l === void 0 ? void 0 : l.ownerDocument, g = v?.defaultView;
        g?.removeEventListener("mousedown", o.onPanningStart, h), g?.removeEventListener("mousemove", o.onPanning, h), g?.removeEventListener("mouseup", o.onPanningStop, h), v?.removeEventListener("mouseleave", o.clearPanning, h), g?.removeEventListener("keyup", o.setKeyUnPressed, h), g?.removeEventListener("keydown", o.setKeyPressed, h), g?.removeEventListener("blur", o.handleWindowBlur), document.removeEventListener("mouseleave", o.clearPanning, h), (u = o.wrapperComponent) === null || u === void 0 || u.removeEventListener("wheel", o.onWheelPanning, h), (d = o.wrapperComponent) === null || d === void 0 || d.removeEventListener("keyup", o.setKeyUnPressed, h), (f = o.wrapperComponent) === null || f === void 0 || f.removeEventListener("keydown", o.setKeyPressed, h), an(o), (m = o.observer) === null || m === void 0 || m.disconnect();
      }, this.handleInitializeWrapperEvents = function(l) {
        var u = yc();
        l.addEventListener("wheel", o.onWheelZoom, u), l.addEventListener("dblclick", o.onDoubleClick, u), l.addEventListener("touchstart", o.onTouchPanningStart, u), l.addEventListener("touchmove", o.onTouchPanning, u), l.addEventListener("touchend", o.onTouchPanningStop, u);
      }, this.handleInitialize = function(l) {
        var u = o.setup.centerOnInit;
        o.applyTransformation(), o.onInitCallbacks.forEach(function(d) {
          return d(je(o));
        }), u && (o.setCenter(), o.observer = new ResizeObserver(function() {
          var d, f = l.offsetWidth, m = l.offsetHeight;
          (f > 0 || m > 0) && (o.onInitCallbacks.forEach(function(h) {
            return h(je(o));
          }), o.setCenter(), (d = o.observer) === null || d === void 0 || d.disconnect());
        }), setTimeout(function() {
          var d;
          (d = o.observer) === null || d === void 0 || d.disconnect();
        }, 5e3), o.observer.observe(l));
      }, this.onWheelZoom = function(l) {
        var u = o.setup.disabled;
        if (!u) {
          o.syncModifierKeys(l);
          var d = Fv(o, l);
          d && (Hk(o, l), Xk(o, l), $k(o, l));
        }
      }, this.onWheelPanning = function(l) {
        var u = o.props.onPanning, d = o.setup.trackPadPanning, f = d.lockAxisX, m = d.lockAxisY;
        o.syncModifierKeys(l);
        var h = Ck(o, l);
        if (h) {
          l.preventDefault(), l.stopPropagation();
          var v = o.state, g = v.positionX, b = v.positionY, k = g - l.deltaX, T = b - l.deltaY, A = f ? g : k, q = m ? b : T, V = o.setup.autoAlignment, J = V.sizeX, ae = V.sizeY, L = na(o, J), K = na(o, ae);
          A === g && q === b || (qk(o, l), Vv(o, A, q, L, K), Oe(je(o), l, u), Lk(o, l));
        }
      }, this.onPanningStart = function(l) {
        var u = o.setup.disabled, d = o.props.onPanningStart;
        if (!u) {
          o.syncModifierKeys(l);
          var f = Lh(o, l);
          if (f) {
            var m = o.isPressingKeys(o.setup.panning.activationKeys);
            m && (l.button === 0 && !o.setup.panning.allowLeftClickPan || l.button === 1 && !o.setup.panning.allowMiddleClickPan || l.button === 2 && !o.setup.panning.allowRightClickPan || (l.preventDefault(), l.stopPropagation(), an(o), Qh(o, l), Oe(je(o), l, d)));
          }
        }
      }, this.onPanning = function(l) {
        var u = o.setup.disabled, d = o.props.onPanning;
        if (!u) {
          if (o.syncModifierKeys(l), o.isPanning && l.buttons === 0) {
            o.clearPanning(l);
            return;
          }
          var f = Vh(o);
          if (f) {
            var m = o.isPressingKeys(o.setup.panning.activationKeys);
            m && (l.preventDefault(), l.stopPropagation(), Kh(o, l.clientX, l.clientY, ta.MOUSE), Oe(je(o), l, d));
          }
        }
      }, this.onPanningStop = function(l) {
        var u = o.setup.panning.velocityDisabled, d = o.props.onPanningStop;
        o.isPanning && (yk(o, u), Oe(je(o), l, d));
      }, this.onPinchStart = function(l) {
        var u = o.setup.disabled, d = o.props.onPinchStart;
        if (!u) {
          var f = Rk(o, l);
          f && (Vk(o, l), an(o), Oe(je(o), l, d));
        }
      }, this.onPinch = function(l) {
        var u = o.setup.disabled, d = o.props.onPinch;
        if (!u) {
          var f = Zk(o);
          f && (l.preventDefault(), l.stopPropagation(), Gk(o, l), Oe(je(o), l, d));
        }
      }, this.onPinchStop = function(l) {
        var u = o.props.onPinchStop;
        o.pinchStartScale && (Qk(o), Oe(je(o), l, u));
      }, this.onTouchPanningStart = function(l) {
        var u = o.setup, d = u.disabled, f = u.doubleClick, m = o.props.onPanningStart;
        if (!d) {
          var h = !f?.disabled, v = o.lastTouch && +/* @__PURE__ */ new Date() - o.lastTouch < 200;
          if (h && v && l.touches.length === 1)
            o.onDoubleClick(l);
          else {
            o.lastTouch = +/* @__PURE__ */ new Date(), an(o);
            var g = l.touches, b = g.length === 1, k = g.length === 2, T = Lh(o, l);
            if (b) {
              if (!T)
                return;
              an(o), Qh(o, l), Oe(je(o), l, m);
            }
            k && o.onPinchStart(l);
          }
        }
      }, this.onTouchPanning = function(l) {
        var u = o.setup.disabled, d = o.props.onPanning;
        if (o.isPanning && l.touches.length === 1) {
          if (u)
            return;
          var f = Vh(o);
          if (!f)
            return;
          l.cancelable && l.preventDefault(), l.stopPropagation();
          var m = l.touches[0];
          Kh(o, m.clientX, m.clientY, ta.TOUCH), Oe(je(o), l, d);
        } else l.touches.length > 1 && o.onPinch(l);
      }, this.onTouchPanningStop = function(l) {
        o.onPanningStop(l), o.onPinchStop(l);
      }, this.onDoubleClick = function(l) {
        var u = o.setup.disabled;
        if (!u) {
          var d = Wk(o, l);
          d && Pk(o, l);
        }
      }, this.clearPanning = function(l) {
        o.isPanning && o.onPanningStop(l);
      }, this.handleWindowBlur = function() {
        o.pressedKeys = {}, o.isPanning && (o.isPanning = !1, o.startCoords = null);
      }, this.syncModifierKeys = function(l) {
        var u = l.ctrlKey, d = l.metaKey, f = l.shiftKey, m = l.altKey;
        typeof u == "boolean" && (o.pressedKeys.Control = u), typeof d == "boolean" && (o.pressedKeys.Meta = d), typeof f == "boolean" && (o.pressedKeys.Shift = f), typeof m == "boolean" && (o.pressedKeys.Alt = m);
      }, this.setKeyPressed = function(l) {
        o.pressedKeys[l.key] = !0;
      }, this.setKeyUnPressed = function(l) {
        o.pressedKeys[l.key] = !1;
      }, this.isPressingKeys = function(l) {
        return typeof l == "function" ? l(Object.entries(o.pressedKeys).filter(function(u) {
          var d = u[1];
          return d;
        }).map(function(u) {
          var d = u[0];
          return d;
        })) : l.length ? !!l.every(function(u) {
          return o.pressedKeys[u];
        }) : !0;
      }, this.setCenter = function() {
        if (o.wrapperComponent && o.contentComponent) {
          var l = Qc(o.state.scale, o.wrapperComponent, o.contentComponent);
          o.setState(l.scale, l.positionX, l.positionY);
        }
      }, this.handleTransformStyles = function(l, u, d) {
        return o.props.customTransform ? o.props.customTransform(l, u, d) : Wv(l, u, d);
      }, this.getContext = function() {
        return je(o);
      }, this.applyTransformation = function() {
        if (!(!o.mounted || !o.contentComponent)) {
          var l = o.state, u = l.scale, d = l.positionX, f = l.positionY, m = o.handleTransformStyles(d, f, u);
          o.props.detached || (o.contentComponent.style.transform = m), o.onTransformCallbacks.forEach(function(h) {
            return h({
              scale: u,
              positionX: d,
              positionY: f,
              previousScale: o.state.previousScale,
              ref: je(o)
            });
          });
        }
      }, this.setState = function(l, u, d) {
        var f = o.props.onTransform;
        if (!Number.isNaN(l) && !Number.isNaN(u) && !Number.isNaN(d)) {
          var m = Math.max(l, 1e-7);
          m !== o.state.scale && (o.state.previousScale = o.state.scale, o.state.scale = m), o.state.positionX = u, o.state.positionY = d, o.applyTransformation();
          var h = je(o);
          o.onChangeCallbacks.forEach(function(v) {
            return v(h);
          }), Oe(h, { scale: o.state.scale, positionX: u, positionY: d }, f);
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
      }, this.init = function(l, u) {
        o.cleanupWindowEvents(), o.wrapperComponent = l, o.contentComponent = u, Ci(o, o.state.scale), o.handleInitializeWrapperEvents(l), o.handleInitialize(u), o.initializeWindowEvents(), o.isInitialized = !0;
        var d = je(o);
        Oe(d, void 0, o.props.onInit), jk(o.props.ref, d);
      }, this.props = i, this.setup = Ph(this.props), this.state = Qv(this.props);
    }
    return n;
  })()
), Ko = Cl.createContext(null), Ik = function(n, i) {
  return typeof n == "function" ? n(i) : n;
}, ex = Cl.forwardRef(function(n, i) {
  var o = ne.useRef(new Fk(n)).current, l = Ik(n.children, Ml(o));
  return ne.useImperativeHandle(i, function() {
    return Ml(o);
  }, [o]), ne.useEffect(function() {
    o.update(n);
  }, [o, n]), _.jsx(Ko.Provider, Pt({ value: o }, { children: l }));
});
Cl.forwardRef(function(n, i) {
  var o = ne.useRef(null), l = ne.useContext(Ko);
  return ne.useEffect(function() {
    return l.onChange(function(u) {
      if (o.current) {
        var d = 0, f = 0;
        o.current.style.transform = l.handleTransformStyles(d, f, 1 / u.instance.state.scale);
      }
    });
  }, [l]), _.jsx("div", Pt({}, n, { ref: Mk([o, i]) }));
});
function tx(n, i) {
  i === void 0 && (i = {});
  var o = i.insertAt;
  if (!(typeof document > "u")) {
    var l = document.head || document.getElementsByTagName("head")[0], u = document.createElement("style");
    u.type = "text/css", o === "top" && l.firstChild ? l.insertBefore(u, l.firstChild) : l.appendChild(u), u.styleSheet ? u.styleSheet.cssText = n : u.appendChild(document.createTextNode(n));
  }
}
var nx = `.transform-component-module_wrapper__SPB86 {
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
`, gc = { wrapper: "transform-component-module_wrapper__SPB86", content: "transform-component-module_content__FBWxo", infiniteGrid: "transform-component-module_infiniteGrid__Z-aP3" };
tx(nx);
var ax = function(n) {
  var i = n.children, o = n.wrapperClass, l = o === void 0 ? "" : o, u = n.contentClass, d = u === void 0 ? "" : u, f = n.wrapperStyle, m = n.contentStyle, h = n.wrapperProps, v = h === void 0 ? {} : h, g = n.contentProps, b = g === void 0 ? {} : g, k = n.infinite, T = k === void 0 ? !1 : k, A = ne.useContext(Ko), q = A.init, V = A.cleanupWindowEvents, J = ne.useRef(null), ae = ne.useRef(null), L = ne.useRef(null);
  return ne.useEffect(function() {
    var K = J.current, P = ae.current;
    return K !== null && P !== null && q && q?.(K, P), function() {
      V?.();
    };
  }, []), ne.useEffect(function() {
    if (T) {
      var K = L.current;
      if (K) {
        var P = function() {
          var G = A.state, $ = G.positionX, se = G.positionY;
          K.style.backgroundPosition = "".concat($, "px ").concat(se, "px");
        };
        return P(), A.onChange(P);
      }
    }
  }, [T, A]), _.jsxs("div", Pt({}, v, { ref: J, className: "".concat(Ac.wrapperClass, " ").concat(gc.wrapper, " ").concat(l), style: f }, { children: [T && _.jsx("div", { ref: L, className: gc.infiniteGrid, "aria-hidden": !0 }), _.jsx("div", Pt({}, b, { ref: ae, className: "".concat(Ac.contentClass, " ").concat(gc.content, " ").concat(d), style: Pt(Pt({}, m), { transform: Wv(A.state.positionX, A.state.positionY, A.state.scale) }) }, { children: i }))] }));
};
function ix(n, i) {
  var o = Math.max(0, Math.min(n.x + n.width, i.x + i.width) - Math.max(n.x, i.x)), l = Math.max(0, Math.min(n.y + n.height, i.y + i.height) - Math.max(n.y, i.y));
  return o * l;
}
function ox(n) {
  var i = n.elementX, o = n.elementY, l = n.elementWidth, u = n.elementHeight, d = n.scale, f = n.positionX, m = n.positionY, h = n.viewportWidth, v = n.viewportHeight, g = n.margin, b = g === void 0 ? 0 : g, k = n.threshold, T = k === void 0 ? 0 : k, A = {
    x: -b,
    y: -b,
    width: h + 2 * b,
    height: v + 2 * b
  }, q = {
    x: i * d + f,
    y: o * d + m,
    width: l * d,
    height: u * d
  };
  if (T <= 0) {
    var V = q.x < A.x + A.width && q.x + q.width > A.x, J = q.y < A.y + A.height && q.y + q.height > A.y;
    return V && J;
  }
  var ae = q.width * q.height;
  if (ae <= 0)
    return !1;
  var L = ix(A, q);
  return L / ae >= T;
}
Cl.forwardRef(function(n, i) {
  var o = n.x, l = n.y, u = n.width, d = n.height, f = n.margin, m = f === void 0 ? 0 : f, h = n.threshold, v = h === void 0 ? 0 : h, g = n.placeholder, b = g === void 0 ? null : g, k = n.onShow, T = n.onHide, A = n.children, q = n.className, V = n.style, J = ne.useContext(Ko), ae = ne.useState(!1), L = ae[0], K = ae[1], P = ne.useRef(!1), G = ne.useRef(k), $ = ne.useRef(T);
  return G.current = k, $.current = T, ne.useEffect(function() {
    var se = function() {
      var ue, fe, Re = J.wrapperComponent;
      if (Re) {
        var W = ox({
          elementX: o,
          elementY: l,
          elementWidth: u,
          elementHeight: d,
          scale: J.state.scale,
          positionX: J.state.positionX,
          positionY: J.state.positionY,
          viewportWidth: Re.offsetWidth,
          viewportHeight: Re.offsetHeight,
          margin: m,
          threshold: v
        });
        W !== P.current && (P.current = W, K(W), W ? (ue = G.current) === null || ue === void 0 || ue.call(G) : (fe = $.current) === null || fe === void 0 || fe.call($));
      }
    };
    se();
    var N = J.onChange(se), ee;
    return J.wrapperComponent || (ee = J.onInit(function() {
      return se();
    })), function() {
      N(), ee?.();
    };
  }, [J, o, l, u, d, m, v]), L ? _.jsx("div", Pt({ ref: i, className: q, style: V }, { children: A })) : b ? _.jsx(_.Fragment, { children: b }) : null;
});
var rx = function() {
  var n = ne.useContext(Ko);
  if (!n)
    throw new Error("Transform context must be placed inside TransformWrapper");
  return n;
}, lx = function() {
  var n = rx();
  return Ml(n);
};
const Ec = 24;
function sx({ locked: n, zoneMode: i, hasZone: o, disabled: l, clearZoneLabel: u, onToggleLock: d, onClearZone: f }) {
  const { zoomIn: m, zoomOut: h, resetTransform: v } = lx();
  return /* @__PURE__ */ _.jsxs("div", { className: "map-controls", children: [
    /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Zoom in", onClick: () => m(), disabled: n || i, children: /* @__PURE__ */ _.jsx(jb, {}) }),
    /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Zoom out", onClick: () => h(), disabled: n || i, children: /* @__PURE__ */ _.jsx(Cb, {}) }),
    /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Reset zoom", onClick: () => v(), children: /* @__PURE__ */ _.jsx(Mc, {}) }),
    i ? /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": u, onClick: f, disabled: !o || l, children: /* @__PURE__ */ _.jsx(Pg, {}) }) : /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": n ? "Unlock map" : "Lock map", onClick: d, children: n ? /* @__PURE__ */ _.jsx(nv, {}) : /* @__PURE__ */ _.jsx(nb, {}) })
  ] });
}
function ux(n, i, o) {
  const l = Math.min(Math.min(i, o), Math.max(Ec, Math.min(i, o) * 0.22));
  return kc({
    x1: n.x - l / 2,
    y1: n.y - l / 2,
    x2: n.x + l / 2,
    y2: n.y + l / 2
  }, i, o);
}
function cx({
  hass: n,
  floor: i,
  language: o,
  selected: l,
  launched: u,
  active: d,
  disabled: f,
  selectionMode: m,
  zone: h,
  zoneLaunched: v,
  onToggle: g,
  onZoneChange: b
}) {
  const [k, T] = ne.useState(!0), [A, q] = ne.useState({ width: 0, height: 0 }), [V, J] = ne.useState({ width: 0, height: 0 }), [ae, L] = ne.useState(0), K = ne.useRef(null), P = ne.useRef(void 0), G = ne.useRef(h), $ = n.states[i.map_entity], se = ne.useMemo(() => Zv($), [$]), N = ne.useMemo(() => $c($), [$]), ee = ne.useMemo(() => U2(i), [i]), ue = typeof $?.attributes.entity_picture == "string" ? $.attributes.entity_picture : void 0, fe = h ? Uo(h) : void 0;
  ne.useEffect(() => {
    G.current = h;
  }, [h]), ne.useEffect(() => {
    if (!d) return;
    const W = setInterval(() => L((te) => te + 1), 5e3);
    return () => {
      clearInterval(W), L(0);
    };
  }, [d]), ne.useEffect(() => {
    const W = K.current;
    if (!W) return;
    const te = new ResizeObserver(([j]) => {
      J({ width: j.contentRect.width, height: j.contentRect.height });
    });
    return te.observe(W), () => te.disconnect();
  }, []);
  let Re;
  return !$ || $.state === "unavailable" ? Re = D(o, "mapMissing") : ue ? N.length < 3 ? Re = D(o, "calibrationMissing") : m === "rooms" && se.length === 0 && (Re = D(o, "roomsMissing")) : Re = D(o, "imageMissing"), Re ? /* @__PURE__ */ _.jsx("div", { className: "map-error", role: "alert", children: Re }) : /* @__PURE__ */ _.jsx("div", { className: `map-shell ${m === "zone" ? "zone-mode" : ""}`, ref: K, children: /* @__PURE__ */ _.jsxs(
    ex,
    {
      initialScale: 1,
      minScale: 0.75,
      maxScale: 4,
      centerOnInit: !0,
      wheel: { disabled: k || m === "zone", step: 0.08 },
      pinch: { disabled: k || m === "zone" },
      panning: { disabled: k || m === "zone", excluded: ["room-hitbox"] },
      doubleClick: { disabled: !0 },
      children: [
        /* @__PURE__ */ _.jsx(
          sx,
          {
            locked: k,
            zoneMode: m === "zone",
            hasZone: !!h,
            disabled: f,
            clearZoneLabel: D(o, "clearZone"),
            onToggleLock: () => T((W) => !W),
            onClearZone: () => b(void 0)
          }
        ),
        /* @__PURE__ */ _.jsx(ax, { wrapperClass: "map-transform", contentClass: "map-content", children: /* @__PURE__ */ _.jsxs(
          "div",
          {
            className: "map-image-wrap",
            style: (() => {
              if (!A.width || !A.height || !V.width || !V.height) return;
              const W = Math.min(V.width / A.width, V.height / A.height);
              return { width: A.width * W, height: A.height * W };
            })(),
            children: [
              /* @__PURE__ */ _.jsx(
                "img",
                {
                  src: (() => {
                    const W = n.hassUrl(ue);
                    if (W.startsWith("data:")) return W;
                    const te = W.includes("?") ? "&" : "?", j = $?.last_updated ?? $?.state ?? "";
                    return `${W}${te}v=${encodeURIComponent(j)}${d ? `&r=${ae}` : ""}`;
                  })(),
                  alt: `${i.name} vacuum map`,
                  draggable: !1,
                  onLoad: (W) => q({ width: W.currentTarget.naturalWidth, height: W.currentTarget.naturalHeight })
                }
              ),
              A.width > 0 && A.height > 0 && /* @__PURE__ */ _.jsxs(
                "svg",
                {
                  className: `room-overlay ${m === "zone" ? "drawing-zone" : ""}`,
                  viewBox: `0 0 ${A.width} ${A.height}`,
                  preserveAspectRatio: "xMidYMid meet",
                  "aria-label": m === "zone" ? `${i.name} zone map` : `${i.name} rooms`,
                  onPointerDown: (W) => {
                    if (m !== "zone" || f) return;
                    const te = W.currentTarget.getBoundingClientRect();
                    if (!te.width || !te.height) return;
                    const j = {
                      x: Math.min(A.width, Math.max(0, (W.clientX - te.left) / te.width * A.width)),
                      y: Math.min(A.height, Math.max(0, (W.clientY - te.top) / te.height * A.height))
                    }, X = W.target, I = X.dataset.zoneHandle, pe = I ? "resize" : X.dataset.zoneMove === "true" && h ? "move" : "create";
                    if (P.current = { pointerId: W.pointerId, kind: pe, origin: j, initial: h, handle: I }, W.currentTarget.setPointerCapture?.(W.pointerId), pe === "create") {
                      const ye = { x1: j.x, y1: j.y, x2: j.x, y2: j.y };
                      G.current = ye, b(ye);
                    }
                    W.preventDefault();
                  },
                  onPointerMove: (W) => {
                    const te = P.current;
                    if (!te || te.pointerId !== W.pointerId || f) return;
                    const j = W.currentTarget.getBoundingClientRect();
                    if (!j.width || !j.height) return;
                    const X = {
                      x: Math.min(A.width, Math.max(0, (W.clientX - j.left) / j.width * A.width)),
                      y: Math.min(A.height, Math.max(0, (W.clientY - j.top) / j.height * A.height))
                    };
                    let I;
                    if (te.kind === "create")
                      I = Uo({ x1: te.origin.x, y1: te.origin.y, x2: X.x, y2: X.y });
                    else if (te.kind === "move" && te.initial) {
                      const pe = X.x - te.origin.x, ye = X.y - te.origin.y;
                      I = kc({
                        x1: te.initial.x1 + pe,
                        y1: te.initial.y1 + ye,
                        x2: te.initial.x2 + pe,
                        y2: te.initial.y2 + ye
                      }, A.width, A.height);
                    } else if (te.initial && te.handle)
                      I = { ...te.initial }, te.handle.includes("w") && (I.x1 = X.x), te.handle.includes("e") && (I.x2 = X.x), te.handle.includes("n") && (I.y1 = X.y), te.handle.includes("s") && (I.y2 = X.y), I = kc(I, A.width, A.height);
                    else return;
                    G.current = I, b(I), W.preventDefault();
                  },
                  onPointerUp: (W) => {
                    const te = P.current;
                    if (!te || te.pointerId !== W.pointerId) return;
                    const j = G.current && Uo(G.current);
                    if (te.kind === "create" && j && (j.x2 - j.x1 < Ec || j.y2 - j.y1 < Ec)) {
                      const X = ux(te.origin, A.width, A.height);
                      G.current = X, b(X);
                    }
                    P.current = void 0, W.currentTarget.releasePointerCapture?.(W.pointerId), W.preventDefault();
                  },
                  onPointerCancel: (W) => {
                    P.current = void 0, W.currentTarget.releasePointerCapture?.(W.pointerId);
                  },
                  children: [
                    se.map((W) => {
                      const te = ee.get(W.segment_id), j = te ? Zl(n, te) : !1, X = !!te?.area_id && !j, I = j ? D(o, "roomAreaMissing") : D(o, "roomUnmapped"), pe = l.has(W.segment_id), ye = u.has(W.segment_id), w = Z2(W, N), Z = te?.name || W.source_name, Q = f || m === "zone" || !X;
                      return /* @__PURE__ */ _.jsxs("g", { className: `room ${pe ? "selected" : ""} ${ye ? "launched" : ""} ${X ? "" : "unmapped"}`, children: [
                        /* @__PURE__ */ _.jsx(
                          "path",
                          {
                            className: "room-hitbox",
                            d: R2(W, N),
                            role: "button",
                            tabIndex: Q ? -1 : 0,
                            "aria-label": `${Z}${X ? "" : ` — ${I}`}`,
                            "aria-pressed": pe,
                            "aria-disabled": Q,
                            onClick: () => !Q && g(W.segment_id),
                            onKeyDown: (F) => {
                              !Q && (F.key === "Enter" || F.key === " ") && (F.preventDefault(), g(W.segment_id));
                            },
                            children: /* @__PURE__ */ _.jsx("title", { children: X ? Z : `${Z}: ${I}` })
                          }
                        ),
                        /* @__PURE__ */ _.jsxs("g", { className: "room-label", transform: `translate(${w.x} ${w.y})`, pointerEvents: "none", children: [
                          /* @__PURE__ */ _.jsx("circle", { r: "23" }),
                          /* @__PURE__ */ _.jsx("foreignObject", { x: "-11", y: "-11", width: "22", height: "22", children: /* @__PURE__ */ _.jsx(Tc, { icon: te?.icon || "mdi:floor-plan" }) }),
                          /* @__PURE__ */ _.jsx("text", { y: "39", textAnchor: "middle", children: Z })
                        ] })
                      ] }, W.segment_id);
                    }),
                    m === "zone" && fe && /* @__PURE__ */ _.jsxs("g", { className: `zone-selection ${v ? "launched" : ""}`, children: [
                      /* @__PURE__ */ _.jsx(
                        "rect",
                        {
                          className: "zone-rectangle",
                          "data-zone-move": "true",
                          x: fe.x1,
                          y: fe.y1,
                          width: fe.x2 - fe.x1,
                          height: fe.y2 - fe.y1,
                          role: "img",
                          "aria-label": D(o, "selectedZone")
                        }
                      ),
                      [
                        ["nw", fe.x1, fe.y1],
                        ["ne", fe.x2, fe.y1],
                        ["se", fe.x2, fe.y2],
                        ["sw", fe.x1, fe.y2]
                      ].map(([W, te, j]) => /* @__PURE__ */ _.jsx(
                        "circle",
                        {
                          className: "zone-handle",
                          "data-zone-handle": W,
                          cx: te,
                          cy: j,
                          r: "12",
                          "aria-label": `${D(o, "resizeZone")} ${W}`
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
const dx = {
  preparing: /* @__PURE__ */ _.jsx(oh, { className: "spin" }),
  carry_upstairs: /* @__PURE__ */ _.jsx(Bg, {}),
  cleaning_upstairs: /* @__PURE__ */ _.jsx(bc, {}),
  carry_downstairs: /* @__PURE__ */ _.jsx(tv, {}),
  finishing: /* @__PURE__ */ _.jsx(oh, { className: "spin" }),
  complete: /* @__PURE__ */ _.jsx(Lg, {}),
  error: /* @__PURE__ */ _.jsx(Mc, {}),
  idle: /* @__PURE__ */ _.jsx(bc, {})
}, Wh = {
  idle: { title: "assistedCarryTitle", description: "assistedCarryDescription" },
  preparing: { title: "assisted_preparing_title", description: "assisted_preparing_description" },
  carry_upstairs: { title: "assisted_carry_upstairs_title", description: "assisted_carry_upstairs_description" },
  cleaning_upstairs: { title: "assisted_cleaning_upstairs_title", description: "assisted_cleaning_upstairs_description" },
  carry_downstairs: { title: "assisted_carry_downstairs_title", description: "assisted_carry_downstairs_description" },
  finishing: { title: "assisted_finishing_title", description: "assisted_finishing_description" },
  complete: { title: "assisted_complete_title", description: "assisted_complete_description" },
  error: { title: "assisted_error_title", description: "assisted_error_description" }
};
function fx({
  language: n,
  stage: i,
  roomNames: o,
  pending: l,
  onStart: u,
  onFinish: d,
  onReset: f,
  onCancel: m
}) {
  if (i === "idle") return null;
  const h = D(n, Wh[i].title), v = D(n, Wh[i].description), g = !["complete", "error"].includes(i);
  return /* @__PURE__ */ _.jsxs("section", { className: `assisted-panel assisted-${i}`, "aria-live": "polite", children: [
    /* @__PURE__ */ _.jsx("div", { className: "assisted-icon", children: dx[i] }),
    /* @__PURE__ */ _.jsxs("div", { className: "assisted-copy", children: [
      /* @__PURE__ */ _.jsx("strong", { children: h }),
      /* @__PURE__ */ _.jsx("p", { children: v }),
      o.length > 0 && /* @__PURE__ */ _.jsx("small", { children: o.join(" · ") })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "assisted-actions", children: [
      i === "carry_upstairs" && /* @__PURE__ */ _.jsxs("button", { type: "button", className: "primary", disabled: l, onClick: u, children: [
        /* @__PURE__ */ _.jsx(av, {}),
        D(n, "startUpstairs")
      ] }),
      i === "carry_downstairs" && /* @__PURE__ */ _.jsxs("button", { type: "button", className: "primary", disabled: l, onClick: d, children: [
        /* @__PURE__ */ _.jsx(tv, {}),
        D(n, "dockAndFinish")
      ] }),
      ["complete", "error"].includes(i) && /* @__PURE__ */ _.jsxs("button", { type: "button", className: "secondary", disabled: l, onClick: f, children: [
        /* @__PURE__ */ _.jsx(Mc, {}),
        D(n, "newUpstairsJob")
      ] }),
      g && /* @__PURE__ */ _.jsx("button", { type: "button", className: "secondary", disabled: l, onClick: m, children: D(n, "cancel") })
    ] })
  ] });
}
function Oo(n, i) {
  if (!i) return;
  const o = n.states[i];
  return !o || ["unknown", "unavailable"].includes(o.state) ? void 0 : `${o.attributes.device_class === "duration" && !isNaN(Number(o.state)) ? String(Math.round(Number(o.state))) : o.state}${o.attributes.unit_of_measurement ? ` ${o.attributes.unit_of_measurement}` : ""}`;
}
function mx(n, i, o) {
  if (!i) return;
  const l = n.states[i];
  if (!l || ["unknown", "unavailable"].includes(l.state)) return;
  const u = Number(l.state);
  if (!Number.isFinite(u) || u < 0) return;
  const d = String(l.attributes.unit_of_measurement ?? ""), m = { s: 1 / 60, min: 1, h: 60, d: 1440 }[d];
  if (m === void 0) return;
  const h = u * m, v = Math.max(0, Math.round(h)), g = Math.floor(v / 60), b = v % 60;
  return `${[
    g > 0 ? `${g} ${D(o, "hourShort")}` : void 0,
    b > 0 || g === 0 ? `${b} ${D(o, "minuteShort")}` : void 0
  ].filter(Boolean).join(" ")} ${D(o, "remaining")}`;
}
function px(n, i) {
  if (i === "washing_the_mop") return D(n, "washingMop");
}
function hx(n, i) {
  const o = new Date(n);
  if (isNaN(o.getTime())) return;
  const l = Date.now() - o.getTime();
  if (l < 0) return;
  const u = Math.floor(l / 6e4);
  if (u < 1) return D(i, "justNow");
  if (u < 60) return `${u} ${D(i, "minuteShort")} ${D(i, "ago")}`;
  const d = Math.floor(u / 60);
  if (d < 24) return `${d} ${D(i, "hourShort")} ${D(i, "ago")}`;
  const f = Math.floor(d / 24);
  return f === 1 ? D(i, "yesterday") : `${f} ${D(i, "daysAgo")}`;
}
function vx(n, i) {
  const o = n.entities?.map_select ? i.states[n.entities.map_select]?.state : void 0;
  return n.floors.find((l) => l.map_select_option === o) ?? n.floors[0];
}
function _x({ hass: n, config: i }) {
  const o = ne.useRef(n), l = ne.useRef(!1), u = i.language, [d, f] = ne.useState(() => vx(i, n).id), m = i.floors.find((H) => H.id === d) ?? i.floors[0], [h, v] = ne.useState("rooms"), [g, b] = ne.useState(/* @__PURE__ */ new Set()), [k, T] = ne.useState(), [A, q] = ne.useState(!1), [V, J] = ne.useState(!1), [ae, L] = ne.useState(!1), [K, P] = ne.useState(!1), [G, $] = ne.useState(), [se, N] = ne.useState(), [ee, ue] = ne.useState({ phase: "idle" }), fe = ne.useMemo(() => Nc(n, i), [n, i]), Re = ne.useMemo(() => Yv(n, i), [n, i]), W = Bv(Re), te = ne.useMemo(() => uz(n, i), [n, i]), j = JSON.stringify(te), [X, I] = ne.useState(), pe = ne.useMemo(() => jz(i, fe, m), [i, fe, m]), ye = pe.find(({ preset: H, available: le }) => H.id === i.default_preset && le)?.preset ?? pe.find(({ available: H }) => H)?.preset, [w, Z] = ne.useState(
    () => Yo(ye ?? { id: "custom", strategy: "custom", cleaning_type: "vacuum" })
  ), Q = n.states[i.entity], F = G2(n, i), ve = i.entities?.assisted_carry_job ? n.states[i.entities.assisted_carry_job]?.state : void 0, me = ne.useMemo(() => P2(ve), [ve]), Se = V2(i, me), Ye = Q2(F), Be = i.entities?.map_select ? n.states[i.entities.map_select]?.state : void 0;
  ne.useEffect(() => {
    o.current = n;
  }, [n]), ne.useEffect(() => {
    !Ye || !Se || !me || (f(Se.id), v("rooms"), T(void 0), b(new Set(me.segment_ids)), Z({
      preset_id: "assisted_carry",
      strategy: me.strategy,
      cleaning_type: me.cleaning_type,
      fan_speed: me.fan_speed,
      mop_mode: me.mop_mode,
      mop_intensity: me.mop_intensity,
      cleaning_count: me.cleaning_count
    }));
  }, [Ye, Se, me]), ne.useEffect(() => {
    if (Ye || !Be) return;
    const H = i.floors.find((le) => le.map_select_option === Be);
    H && (f(H.id), b(/* @__PURE__ */ new Set()), T(void 0), H.assisted_carry && v("rooms"), q(!1));
  }, [Ye, i.floors, Be]);
  const Bt = i.entities?.status ? n.states[i.entities.status]?.state : void 0, Ft = ["washing_the_mop", "washing_the_mop_2"].includes(Bt ?? ""), Mn = [Q?.state, Bt].includes("emptying_the_bin"), on = Gb(Q?.state) || Ft, yt = Ye || ["submitting", "starting", "active"].includes(ee.phase);
  ne.useEffect(() => {
    ee.phase === "starting" && on ? ue((H) => ({ ...H, phase: "active" })) : ee.phase === "active" && !on && (ue({ phase: "idle" }), b(/* @__PURE__ */ new Set()), T(void 0));
  }, [ee.phase, on]), ne.useEffect(() => {
    if (!se) return;
    const H = setTimeout(() => N(void 0), 5e3);
    return () => clearTimeout(H);
  }, [se]);
  const Ni = new Set(ee.floor_id === m.id ? ee.segment_ids ?? [] : []), Da = m.rooms.filter((H) => g.has(H.segment_id)), Ra = Da.map((H) => H.name), Za = i.entities?.dock_mop_drying ? n.states[i.entities.dock_mop_drying]?.state === "on" : !1, Ua = Za ? mx(n, i.entities?.dock_mop_drying_remaining_time, u) : void 0, ra = i.entities?.last_clean_end ? n.states[i.entities.last_clean_end]?.state : void 0, Di = !on && ra && !["unknown", "unavailable"].includes(ra) ? hx(ra, u) : void 0, Yl = [
    px(u, Bt),
    Za ? D(u, "dryingMop") : void 0,
    Ua
  ].filter((H) => !!H), Jo = [
    { icon: /* @__PURE__ */ _.jsx($g, {}), label: D(u, "battery"), value: Oo(n, i.entities?.battery) },
    { icon: /* @__PURE__ */ _.jsx(ob, {}), label: D(u, "room"), value: Oo(n, i.entities?.current_room) },
    { icon: /* @__PURE__ */ _.jsx(fb, {}), label: D(u, "area"), value: Oo(n, i.entities?.cleaning_area) },
    { icon: /* @__PURE__ */ _.jsx(Gg, {}), label: D(u, "duration"), value: Oo(n, i.entities?.cleaning_time) },
    { icon: /* @__PURE__ */ _.jsx(gb, {}), label: D(u, "progress"), value: Oo(n, i.entities?.cleaning_progress) },
    { icon: /* @__PURE__ */ _.jsx(Fg, {}), label: D(u, "lastClean"), value: Di }
  ].filter((H) => H.value), bt = (H) => {
    if (Ye) return;
    const le = i.floors.find((ie) => ie.id === H);
    f(H), b(/* @__PURE__ */ new Set()), T(void 0), le?.assisted_carry && v("rooms"), q(!1);
  }, Po = (H) => {
    H === "zone" && m.assisted_carry || (v(H), b(/* @__PURE__ */ new Set()), T(void 0), q(!1));
  }, Ri = (H) => {
    if (H) {
      const le = pe.find(({ preset: ie, available: et }) => ie.id === i.default_preset && et)?.preset ?? pe.find(({ preset: ie, available: et }) => ie.id === "vacuum_only" && et)?.preset ?? pe.find(({ available: ie }) => ie)?.preset;
      if (!le) {
        N(D(u, "unsupported"));
        return;
      }
      Z(Yo(le));
    }
    if (h === "zone" && (w.strategy !== "custom" || !xc.has(w.cleaning_type))) {
      const le = pe.find(({ preset: ie, available: et }) => ie.id === "vacuum_only" && et)?.preset ?? pe.find(({ preset: ie, available: et }) => ie.id === "vacuum_and_mop" && et)?.preset ?? pe.find(({ preset: ie, available: et }) => et && ie.strategy === "custom" && xc.has(ie.cleaning_type ?? "vacuum"))?.preset;
      if (!le) {
        N(D(u, "unsupported"));
        return;
      }
      Z(Yo(le));
    }
    if (!H && w.cleaning_type === "vacuum_then_mop" && m.vacuum_then_mop_routine) {
      const le = m.rooms.filter((ie) => ie.include_in_floor_clean !== !1 && fc(n, ie)).map((ie) => ie.segment_id);
      b(new Set(le));
    }
    J(H), q(!0);
  }, Wo = () => {
    const H = m.rooms.filter((le) => le.include_in_floor_clean !== !1 && fc(n, le)).map((le) => le.segment_id);
    b(new Set(H)), Ri(!!m.assisted_carry);
  }, Ya = (H) => {
    if (H.cleaning_type === "vacuum_then_mop" && m.vacuum_then_mop_routine) {
      const le = m.rooms.filter((ie) => ie.include_in_floor_clean !== !1 && fc(n, ie)).map((ie) => ie.segment_id);
      b(new Set(le));
    }
    Z(H);
  }, la = (H) => H instanceof Xo ? `${H.operation}: ${H.message}` : H instanceof Error ? H.message : String(H), Fo = async (H = w) => {
    if (!l.current) {
      l.current = !0, L(!0);
      try {
        const le = K2(m, [...g], H);
        await W2(o.current, i, le), q(!1), N(D(u, "preparingUpstairs"));
      } catch (le) {
        N(la(le));
        try {
          await xi(o.current, i, "error");
        } catch {
        }
      } finally {
        l.current = !1, L(!1);
      }
    }
  }, Bl = async () => {
    if (!(l.current || !Se || !me)) {
      l.current = !0, L(!0);
      try {
        await F2(o.current, i, Se, me);
      } catch (H) {
        N(la(H));
        try {
          await xi(o.current, i, "error");
        } catch {
        }
      } finally {
        l.current = !1, L(!1);
      }
    }
  }, Hl = async () => {
    if (!l.current) {
      l.current = !0, L(!0);
      try {
        await I2(o.current, i);
      } catch (H) {
        N(la(H));
        try {
          await xi(o.current, i, "error");
        } catch {
        }
      } finally {
        l.current = !1, L(!1);
      }
    }
  }, sa = async () => {
    if (!ae) {
      L(!0);
      try {
        await Rh(o.current, i), b(/* @__PURE__ */ new Set());
      } catch (H) {
        N(la(H));
      } finally {
        L(!1);
      }
    }
  }, St = async () => {
    if (!ae) {
      L(!0);
      try {
        const H = [
          i.entities?.assisted_carry_prepare_script,
          i.entities?.assisted_carry_start_script,
          i.entities?.assisted_carry_finish_script
        ].filter((le) => !!(le && o.current.states[le]));
        H.length > 0 && await o.current.callService("script", "turn_off", {}, { entity_id: H }), F === "cleaning_upstairs" && await o.current.callService("vacuum", "stop", {}, { entity_id: i.entity }), Ft && await dc(o.current, i, "wash", !0), Mn && await dc(o.current, i, "empty", !0), await Rh(o.current, i), b(/* @__PURE__ */ new Set());
      } catch (H) {
        N(la(H));
      } finally {
        L(!1);
      }
    }
  }, rn = async (H = w) => {
    if (V) {
      await Fo(H);
      return;
    }
    if (l.current) return;
    l.current = !0;
    const le = {
      floor_id: m.id,
      segment_ids: h === "rooms" ? [...g] : void 0,
      selection_mode: h,
      zone: h === "zone" ? k : void 0
    };
    ue({ phase: "submitting", ...le });
    try {
      const ie = h === "zone" && k ? D2(k, $c(o.current.states[m.map_entity])) : void 0;
      await Sz({
        getHass: () => o.current,
        config: i,
        floor: m,
        rooms: h === "rooms" ? Da : [],
        draft: H,
        zone: ie
      }), ue({ phase: "starting", ...le }), q(!1), N(D(u, "launched"));
    } catch (ie) {
      const et = ie instanceof Ae ? `${ie.operation}: ${ie.message}` : String(ie);
      ue({ phase: "failed", ...le, error: et }), N(et);
    } finally {
      l.current = !1;
    }
  }, st = async (H) => {
    try {
      if (H === "stop" || H === "return_to_base") {
        const le = i.entities?.vacuum_then_mop_script;
        le && o.current.states[le] && o.current.states[le].state !== "unavailable" && await o.current.callService("script", "turn_off", {}, { entity_id: le });
        const ie = i.entities?.assisted_carry_start_script;
        Ye && ie && o.current.states[ie] && o.current.states[ie].state !== "unavailable" && await o.current.callService("script", "turn_off", {}, { entity_id: ie });
      }
      await o.current.callService("vacuum", H, {}, { entity_id: i.entity }), H === "stop" && F === "cleaning_upstairs" && await xi(o.current, i, "carry_downstairs");
    } catch (le) {
      N(`${H}: ${le instanceof Error ? le.message : String(le)}`);
    }
  }, Xl = async (H, le) => {
    if (!G) {
      $(D(u, "settingSaved"));
      try {
        await sz(o.current, i, H, le), N(D(u, "settingSaved"));
      } catch (ie) {
        const et = ie instanceof jn ? `${ie.operation}: ${ie.message}` : String(ie);
        N(et);
      } finally {
        $(void 0);
      }
    }
  }, $l = async (H) => {
    if (!(G || !H.reset_button) && window.confirm(D(u, "confirmResetConsumable"))) {
      $(D(u, "dockActionSent"));
      try {
        await o.current.callService("button", "press", {}, { entity_id: H.reset_button }), N(D(u, "dockActionSent"));
      } catch (le) {
        N(`reset_${H.kind}: ${le instanceof Error ? le.message : String(le)}`);
      } finally {
        $(void 0);
      }
    }
  }, ql = async (H, le) => {
    if (!G) {
      if (!le) {
        const ie = H === "empty" ? D(u, "confirmEmpty") : H === "wash" ? D(u, "confirmWash") : H === "dry" ? D(u, "confirmDry") : D(u, "confirmDrain");
        if (!window.confirm(ie)) return;
      }
      $(D(u, "dockActionSent"));
      try {
        await dc(o.current, i, H, le), N(D(u, "dockActionSent"));
      } catch (ie) {
        const et = H === "drain" ? D(u, "drainRejected") : ie instanceof jn ? `${ie.operation}: ${ie.message}` : String(ie);
        N(et);
      } finally {
        $(void 0);
      }
    }
  }, Ba = async (H) => {
    const le = i.entities?.dock_child_lock;
    if (!(!le || G)) {
      $(D(u, "settingSaved"));
      try {
        await o.current.callService("switch", H ? "turn_on" : "turn_off", {}, { entity_id: le }), N(D(u, "settingSaved"));
      } catch (ie) {
        N(`child_lock: ${ie instanceof Error ? ie.message : String(ie)}`);
      } finally {
        $(void 0);
      }
    }
  };
  return /* @__PURE__ */ _.jsxs("ha-card", { className: "roborock-card", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "card-header", children: [
      /* @__PURE__ */ _.jsxs("div", { children: [
        /* @__PURE__ */ _.jsx("h1", { children: i.name ?? Q?.attributes.friendly_name ?? "Roborock" }),
        /* @__PURE__ */ _.jsxs("div", { className: "state-line", children: [
          /* @__PURE__ */ _.jsx("span", { className: `state-dot state-${Q?.state ?? "unavailable"}` }),
          /* @__PURE__ */ _.jsx("span", { children: Q?.state?.replaceAll("_", " ") ?? "unavailable" }),
          Yl.map((H) => /* @__PURE__ */ _.jsx("span", { className: "state-detail", children: ` · ${H}` }, H))
        ] })
      ] }),
      Jo.length > 0 && /* @__PURE__ */ _.jsx("div", { className: "status-strip", children: Jo.map((H) => /* @__PURE__ */ _.jsxs("div", { title: H.label, children: [
        H.icon,
        /* @__PURE__ */ _.jsx("strong", { children: H.value })
      ] }, H.label)) })
    ] }),
    te.length > 0 && X !== j && /* @__PURE__ */ _.jsxs("details", { className: "health-notice", children: [
      /* @__PURE__ */ _.jsxs("summary", { children: [
        /* @__PURE__ */ _.jsx(wb, {}),
        D(u, "setupAttention"),
        " (",
        te.length,
        ")"
      ] }),
      /* @__PURE__ */ _.jsx("ul", { children: te.map((H) => /* @__PURE__ */ _.jsx("li", { children: Cz(u, H) }, JSON.stringify(H))) }),
      /* @__PURE__ */ _.jsx("button", { type: "button", className: "secondary", onClick: () => I(j), children: D(u, "dismiss") })
    ] }),
    i.floors.length > 1 && /* @__PURE__ */ _.jsx("div", { className: "floor-tabs", role: "tablist", "aria-label": D(u, "floor"), children: i.floors.map((H) => /* @__PURE__ */ _.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": m.id === H.id,
        className: m.id === H.id ? "active" : "",
        disabled: Ye && m.id !== H.id,
        onClick: () => bt(H.id),
        children: H.name
      },
      H.id
    )) }),
    !m.assisted_carry && /* @__PURE__ */ _.jsxs("div", { className: "selection-mode-tabs", role: "tablist", "aria-label": D(u, "selectionMode"), children: [
      /* @__PURE__ */ _.jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": h === "rooms",
          className: h === "rooms" ? "active" : "",
          disabled: yt,
          onClick: () => Po("rooms"),
          children: D(u, "rooms")
        }
      ),
      /* @__PURE__ */ _.jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": h === "zone",
          className: h === "zone" ? "active" : "",
          disabled: yt,
          onClick: () => Po("zone"),
          children: D(u, "zone")
        }
      )
    ] }),
    /* @__PURE__ */ _.jsx(
      cx,
      {
        hass: n,
        floor: m,
        language: u,
        selected: g,
        launched: Ni,
        active: on,
        disabled: yt,
        selectionMode: h,
        zone: k,
        zoneLaunched: ee.floor_id === m.id && ee.selection_mode === "zone" && ["starting", "active"].includes(ee.phase),
        onToggle: (H) => b((le) => {
          const ie = new Set(le);
          return ie.has(H) ? ie.delete(H) : ie.add(H), ie;
        }),
        onZoneChange: T
      }
    ),
    m.assisted_carry && /* @__PURE__ */ _.jsx(
      fx,
      {
        language: u,
        stage: F,
        roomNames: Ra,
        pending: ae,
        onStart: Bl,
        onFinish: Hl,
        onReset: sa,
        onCancel: St
      }
    ),
    /* @__PURE__ */ _.jsxs("div", { className: "selection-row", children: [
      /* @__PURE__ */ _.jsxs("div", { children: [
        /* @__PURE__ */ _.jsx("strong", { children: h === "zone" ? D(u, "selectedZone") : D(u, "selectedRooms") }),
        /* @__PURE__ */ _.jsx("span", { children: h === "zone" ? k ? D(u, "zoneReady") : D(u, "noZoneSelected") : Ra.length ? Ra.join(" · ") : D(u, "noRoomsSelected") })
      ] }),
      /* @__PURE__ */ _.jsx("span", { className: "selection-count", children: h === "zone" ? +!!k : g.size })
    ] }),
    !Ye && /* @__PURE__ */ _.jsxs("div", { className: "primary-actions", children: [
      h === "rooms" && /* @__PURE__ */ _.jsxs("button", { type: "button", className: "secondary", onClick: Wo, disabled: yt, children: [
        /* @__PURE__ */ _.jsx(ih, {}),
        " ",
        D(u, "entireFloor")
      ] }),
      /* @__PURE__ */ _.jsxs(
        "button",
        {
          type: "button",
          className: "primary",
          onClick: () => Ri(!!m.assisted_carry),
          disabled: (h === "zone" ? !k : g.size === 0) || yt,
          children: [
            m.assisted_carry && /* @__PURE__ */ _.jsx(bc, {}),
            m.assisted_carry ? D(u, "prepareUpstairs") : D(u, "configureJob")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "transport", "aria-label": "Vacuum controls", children: [
      Q?.state === "paused" && fe.canStart && /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => st("start"), children: [
        /* @__PURE__ */ _.jsx(av, {}),
        D(u, "resume")
      ] }),
      Q?.state === "cleaning" && fe.canPause && /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => st("pause"), children: [
        /* @__PURE__ */ _.jsx(lb, {}),
        D(u, "pause")
      ] }),
      fe.canStop && /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => st("stop"), children: [
        /* @__PURE__ */ _.jsx(_b, {}),
        D(u, "stop")
      ] }),
      fe.canDock && /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => st("return_to_base"), children: [
        /* @__PURE__ */ _.jsx(ih, {}),
        D(u, "dock")
      ] }),
      /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => P(!0), children: [
        /* @__PURE__ */ _.jsx(pb, {}),
        D(u, "dockStation"),
        W > 0 && /* @__PURE__ */ _.jsx("span", { className: "maintenance-badge", title: D(u, "maintenanceBadge"), "aria-label": D(u, "maintenanceBadge"), children: W })
      ] })
    ] }),
    A && /* @__PURE__ */ _.jsx(
      qz,
      {
        language: u,
        draft: w,
        capabilities: fe,
        presets: pe,
        selectedRoomNames: h === "zone" ? [D(u, "customZone")] : Ra,
        submitting: ee.phase === "submitting" || ae,
        assistedCarry: V,
        zoneCleaning: h === "zone",
        mopRoutes: fe.mopRoutes,
        checks: V ? void 0 : Hv(n, i, w),
        onDraftChange: Ya,
        onClose: () => ee.phase !== "submitting" && !ae && q(!1),
        onStart: rn
      }
    ),
    K && /* @__PURE__ */ _.jsx(
      Rz,
      {
        hass: n,
        config: i,
        language: u,
        washing: Ft,
        emptying: Mn,
        drying: Za,
        dryingRemaining: Ua,
        pending: G,
        onClose: () => !G && P(!1),
        onAction: ql,
        onSetting: Xl,
        onChildLock: Ba,
        maintenance: Re,
        onResetConsumable: $l
      }
    ),
    se && /* @__PURE__ */ _.jsxs("div", { className: "toast", role: "status", children: [
      /* @__PURE__ */ _.jsx("span", { children: se }),
      /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": D(u, "close"), onClick: () => N(void 0), children: /* @__PURE__ */ _.jsx(Cc, {}) })
    ] })
  ] });
}
const yx = ':host{display:block;--rvm-accent: var(--primary-color, #5965f2);--rvm-on-accent: var(--text-primary-color, #fff);--rvm-surface: var(--card-background-color, #fff);--rvm-surface-2: var(--secondary-background-color, #f2f3f7);--rvm-text: var(--primary-text-color, #202124);--rvm-muted: var(--secondary-text-color, #6b7280);--rvm-border: var(--divider-color, rgba(0, 0, 0, .12));--rvm-danger: var(--error-color, #d32f2f);--rvm-warning: var(--warning-color, #ffa600);color:var(--rvm-text);font-family:var(--paper-font-body1_-_font-family, system-ui, sans-serif)}*{box-sizing:border-box}button,input,select{font:inherit}button{color:inherit}svg{width:20px;height:20px;stroke-width:2}.roborock-card{display:block;position:relative;overflow:hidden;border-radius:var(--ha-card-border-radius, 24px);background:var(--rvm-surface)}.card-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 20px 14px}.card-header h1{margin:0 0 4px;font-size:22px;line-height:1.2}.state-line{display:flex;flex-wrap:wrap;align-items:center;gap:7px;color:var(--rvm-muted);font-size:14px;text-transform:capitalize}.state-line .state-detail{text-transform:none}.state-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--rvm-muted)}.state-cleaning,.state-paused{background:var(--rvm-accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--rvm-accent) 18%,transparent)}.state-error,.state-unavailable{background:var(--rvm-danger)}.status-strip{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.status-strip div{display:flex;align-items:center;gap:6px;min-height:36px;padding:7px 10px;border-radius:12px;background:var(--rvm-surface-2);font-size:13px}.status-strip svg{width:16px;height:16px;color:var(--rvm-accent)}.floor-tabs,.segmented,.selection-mode-tabs{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;margin:0 20px 14px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.floor-tabs button,.segmented button,.selection-mode-tabs button{min-height:44px;padding:8px 14px;border:0;border-radius:11px;background:transparent;cursor:pointer;font-weight:600}.floor-tabs button.active,.segmented button.active,.selection-mode-tabs button.active{background:var(--rvm-surface);color:var(--rvm-accent);box-shadow:0 2px 8px #0000001a}.selection-mode-tabs{margin-bottom:10px}.map-shell{position:relative;height:clamp(340px,54vh,620px);margin:0 12px;overflow:hidden;border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 75%,#7d91a8 25%);touch-action:pan-y}.map-shell.zone-mode{touch-action:none}.map-transform{width:100%!important;height:100%!important}.map-content{width:100%!important;height:100%!important;display:flex;align-items:center;justify-content:center}.map-image-wrap{position:relative;flex:none;max-width:100%;max-height:100%}.map-image-wrap>img{display:block;width:100%;height:100%;object-fit:fill;-webkit-user-select:none;user-select:none}.room-overlay{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.room-overlay.drawing-zone{cursor:crosshair;touch-action:none}.room-overlay.drawing-zone .room{pointer-events:none}.room-overlay.drawing-zone .room-label{opacity:.42}.room-hitbox{fill:transparent;stroke:#ffffff8c;stroke-width:3;vector-effect:non-scaling-stroke;cursor:pointer;transition:fill .15s ease,stroke .15s ease;outline:none}.room-hitbox:hover,.room-hitbox:focus-visible{fill:color-mix(in srgb,var(--rvm-accent) 18%,transparent);stroke:var(--rvm-accent)}.room.selected .room-hitbox{fill:color-mix(in srgb,var(--rvm-accent) 32%,transparent);stroke:var(--rvm-accent)}.room.launched .room-hitbox{fill:color-mix(in srgb,#35a854 30%,transparent);stroke:#35a854}.room.unmapped .room-hitbox{fill:#5a5a5a1f;stroke-dasharray:7 5;cursor:not-allowed}.room-label circle{fill:color-mix(in srgb,var(--rvm-surface) 92%,transparent);stroke:var(--rvm-border);stroke-width:2}.room-label text{fill:var(--rvm-text);paint-order:stroke;stroke:var(--rvm-surface);stroke-width:5px;stroke-linejoin:round;font-size:17px;font-weight:700}.room-label foreignObject{color:var(--rvm-accent)}.room-label ha-icon{display:block;width:22px;height:22px}.room.unmapped .room-label{opacity:.55}.zone-rectangle{fill:color-mix(in srgb,var(--rvm-accent) 28%,transparent);stroke:var(--rvm-accent);stroke-width:3;stroke-dasharray:10 6;vector-effect:non-scaling-stroke;cursor:move}.zone-selection.launched .zone-rectangle{fill:color-mix(in srgb,#35a854 28%,transparent);stroke:#35a854}.zone-handle{fill:var(--rvm-surface);stroke:var(--rvm-accent);stroke-width:4;vector-effect:non-scaling-stroke}.zone-handle[data-zone-handle=nw],.zone-handle[data-zone-handle=se]{cursor:nwse-resize}.zone-handle[data-zone-handle=ne],.zone-handle[data-zone-handle=sw]{cursor:nesw-resize}.zone-selection.launched .zone-handle{stroke:#35a854}.map-controls{position:absolute;z-index:5;top:10px;right:10px;display:flex;gap:5px}.map-controls button,.map-controls .icon-button{display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--rvm-border);border-radius:13px;background:color-mix(in srgb,var(--rvm-surface) 92%,transparent);cursor:pointer;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.map-controls button:disabled{opacity:.35;cursor:not-allowed}.map-error{display:grid;place-items:center;min-height:260px;margin:0 12px;padding:30px;border:1px dashed var(--rvm-danger);border-radius:20px;color:var(--rvm-danger);text-align:center}.selection-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 20px 10px}.selection-row strong,.selection-row span{display:block}.selection-row strong{margin-bottom:3px;font-size:14px}.selection-row>div>span{color:var(--rvm-muted);font-size:13px}.selection-row .selection-count{display:grid;place-items:center;min-width:34px;height:34px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent);font-weight:700}.assisted-panel{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:14px;margin:14px 20px 4px;padding:16px;border:1px solid color-mix(in srgb,var(--rvm-accent) 42%,var(--rvm-border));border-radius:18px;background:color-mix(in srgb,var(--rvm-accent) 9%,var(--rvm-surface))}.assisted-icon{display:grid;place-items:center;width:46px;height:46px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent)}.assisted-icon svg{width:23px;height:23px}.assisted-copy{min-width:0}.assisted-copy strong{display:block;margin-bottom:3px;font-size:15px}.assisted-copy p{margin:0;color:var(--rvm-muted);font-size:13px;line-height:1.4}.assisted-copy small{display:block;margin-top:6px;overflow:hidden;color:var(--rvm-accent);font-weight:650;text-overflow:ellipsis;white-space:nowrap}.assisted-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.assisted-actions button{min-height:44px}.assisted-complete{border-color:color-mix(in srgb,#35a854 55%,var(--rvm-border));background:color-mix(in srgb,#35a854 10%,var(--rvm-surface))}.assisted-complete .assisted-icon{background:#35a854}.assisted-error{border-color:color-mix(in srgb,var(--rvm-danger) 55%,var(--rvm-border));background:color-mix(in srgb,var(--rvm-danger) 9%,var(--rvm-surface))}.assisted-error .assisted-icon{background:var(--rvm-danger)}.spin{animation:rvm-spin 1.1s linear infinite}@keyframes rvm-spin{to{transform:rotate(360deg)}}.primary-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 20px 14px}.primary-actions>:only-child{grid-column:1/-1}button.primary,button.secondary,.primary-actions button{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:10px 16px;border-radius:14px;cursor:pointer;font-weight:700}button.primary{border:1px solid var(--rvm-accent);color:var(--rvm-on-accent);background:var(--rvm-accent)}button.secondary{border:1px solid var(--rvm-border);background:var(--rvm-surface-2)}button:disabled{opacity:.45;cursor:not-allowed}.transport{display:flex;justify-content:center;gap:8px;padding:0 20px 20px}.transport button{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:8px 13px;border:1px solid var(--rvm-border);border-radius:13px;background:transparent;cursor:pointer}.transport svg{width:18px;height:18px}.sheet-layer{position:fixed;z-index:999;inset:0;display:grid;place-items:center;padding:24px}.sheet-backdrop{position:absolute;inset:0;width:100%;height:100%;border:0;background:#0000007a;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.job-sheet{position:relative;display:flex;flex-direction:column;width:min(680px,100%);max-height:min(820px,100vh - 48px);overflow:hidden;border-radius:24px;background:var(--rvm-surface);box-shadow:0 22px 70px #00000052}.job-sheet header{display:flex;justify-content:space-between;gap:16px;padding:24px 24px 14px}.job-sheet h2,.job-sheet h3,.job-sheet p{margin:0}.job-sheet header p{margin-top:5px;color:var(--rvm-muted)}.job-sheet h3{margin-bottom:10px;font-size:15px}.job-sheet footer{display:flex;justify-content:flex-end;gap:10px;padding:16px 24px 22px;border-top:1px solid var(--rvm-border)}.job-sheet footer button{min-width:120px}.sheet-handle{display:none}.sheet-body{overflow:auto;padding:8px 24px 22px}.icon-button{display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--rvm-surface-2);cursor:pointer}.cleaning-mode-tabs{display:grid;grid-template-columns:repeat(var(--mode-count, 4),minmax(0,1fr));border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{position:relative;display:flex;align-items:center;justify-content:center;gap:7px;min-height:62px;padding:8px 7px 12px;border:0;color:var(--rvm-muted);background:transparent;cursor:pointer;font-weight:700}.cleaning-mode-tabs button:after{content:"";position:absolute;right:14%;bottom:-1px;left:14%;height:3px;border-radius:3px 3px 0 0;background:transparent}.cleaning-mode-tabs button.active{color:var(--rvm-accent)}.cleaning-mode-tabs button.active:after{background:var(--rvm-accent)}.cleaning-mode-tabs ha-icon{width:22px;height:22px}.mode-settings{margin-top:16px;padding:18px;border:1px solid var(--rvm-border);border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 45%,transparent)}.mode-description{margin:0 0 18px!important;color:var(--rvm-muted);line-height:1.45}.app-field+.app-field{margin-top:20px}.option-strip{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.option-strip button{min-width:0;min-height:46px;padding:7px 6px;overflow:hidden;border:0;border-radius:11px;background:transparent;cursor:pointer;font-size:12px;font-weight:600;text-overflow:ellipsis;white-space:nowrap}.option-strip button.active{color:var(--rvm-accent);background:var(--rvm-surface);box-shadow:0 2px 8px #0000001a}.range-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.range-heading strong{color:var(--rvm-accent)}.range-heading output{display:grid;place-items:center;min-width:42px;height:42px;border-radius:50%;background:var(--rvm-surface-2);font-weight:700}.water-flow input[type=range]{width:100%;min-height:34px;accent-color:var(--rvm-accent)}.saved-profiles{margin-top:16px}.saved-profiles>span{color:var(--rvm-muted);font-size:13px;font-weight:600}.saved-profiles>div{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.saved-profiles button{display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:7px 11px;border:1px solid var(--rvm-border);border-radius:12px;background:transparent}.saved-profiles button.active{border-color:var(--rvm-accent);color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 10%,transparent)}.dock-sheet{width:min(720px,100%)}.dock-sheet-body{display:block}.dock-sheet-body>*+*{margin-top:14px}.dock-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.dock-actions>button{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;align-items:center;gap:2px 10px;min-width:0;min-height:84px;padding:13px;border:1px solid var(--rvm-border);border-radius:16px;color:var(--rvm-text);background:var(--rvm-surface-2);cursor:pointer;text-align:left}.dock-actions>button.active{border-color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 12%,var(--rvm-surface))}.dock-actions strong,.dock-actions small{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dock-actions small{color:var(--rvm-muted)}.dock-action-icon{grid-row:1/3;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;color:var(--rvm-accent);background:var(--rvm-surface)}.dock-actions>button.active .dock-action-icon{color:var(--rvm-on-accent);background:var(--rvm-accent)}.dock-settings-group{overflow:hidden;border:1px solid var(--rvm-border);border-radius:18px;background:color-mix(in srgb,var(--rvm-surface-2) 44%,transparent)}.dock-settings-group h3{display:flex;align-items:center;gap:8px;margin:0;padding:14px 16px 10px;font-size:15px}.dock-settings-group h3 svg{width:18px;height:18px;color:var(--rvm-accent)}.dock-setting-row{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:55px;padding:8px 16px;border-top:1px solid var(--rvm-border)}.dock-setting-row>span{font-weight:600}.dock-setting-row select{width:min(250px,52%);min-height:38px;padding:7px 32px 7px 10px;border:1px solid var(--rvm-border);border-radius:10px;color:var(--rvm-text);background:var(--rvm-surface)}.dock-toggle{position:relative;flex:0 0 auto;width:48px;height:28px;padding:0;border:0;border-radius:14px;background:var(--rvm-border);cursor:pointer;transition:background .15s ease}.dock-toggle>span{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--rvm-surface);box-shadow:0 1px 5px #00000040;transition:transform .15s ease}.dock-toggle.active{background:var(--rvm-accent)}.dock-toggle.active>span{transform:translate(20px)}.drain-button{display:flex;align-items:center;gap:12px;width:100%;min-height:62px;padding:11px 16px;border:0;border-top:1px solid var(--rvm-border);color:var(--rvm-danger);background:transparent;cursor:pointer;text-align:left}.drain-button>span{display:grid;gap:2px}.drain-button small{color:var(--rvm-muted);font-size:12px;font-weight:400}.dock-pending{position:sticky;bottom:0;padding:10px 12px;border-radius:12px;color:var(--rvm-on-accent);background:var(--rvm-accent);text-align:center}.field{display:flex;flex-direction:column;gap:7px;min-width:0}.field>span,.editor label{color:var(--rvm-muted);font-size:13px;font-weight:600}.field select,.editor input,.editor select{width:100%;min-height:44px;padding:9px 11px;border:1px solid var(--rvm-border);border-radius:11px;color:var(--rvm-text);background:var(--rvm-surface)}.field .segmented{margin:0}.health-notice{margin:0 16px 12px;padding:10px 14px;border:1px solid color-mix(in srgb,var(--rvm-warning) 50%,transparent);border-radius:14px;background:color-mix(in srgb,var(--rvm-warning) 10%,transparent);font-size:13px}.health-notice summary{display:flex;align-items:center;gap:8px;cursor:pointer;font-weight:600}.health-notice summary svg{width:18px;height:18px;color:var(--rvm-warning)}.health-notice ul{margin:8px 0;padding-left:20px}.health-notice button{min-height:32px;padding:4px 12px}.preflight{margin:0 24px 12px;padding:12px 16px;border-radius:14px;font-size:13px}.preflight ul{margin:6px 0 0;padding-left:18px}.preflight.blocking{color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent)}.preflight.warning{background:color-mix(in srgb,var(--rvm-warning) 12%,transparent)}.maintenance-badge{display:inline-grid;place-items:center;min-width:18px;height:18px;margin-left:4px;padding:0 5px;border-radius:9px;color:#fff;background:var(--rvm-danger);font-size:11px;font-weight:700}.maintenance-row{display:flex;align-items:center;gap:12px;min-height:52px;padding:8px 16px;border-top:1px solid var(--rvm-border)}.maintenance-row>span:first-child{flex:1;font-weight:600}.maintenance-value{display:grid;justify-items:end}.maintenance-value small{color:var(--rvm-muted)}.maintenance-row.level-due .maintenance-value small{color:var(--rvm-warning)}.maintenance-row.level-overdue .maintenance-value small{color:var(--rvm-danger);font-weight:600}.maintenance-row button{min-height:34px;padding:4px 12px}.maintenance-hint{margin:0;padding:10px 16px 14px;border-top:1px solid var(--rvm-border);color:var(--rvm-muted);font-size:12px}.toast{position:absolute;z-index:1000;right:16px;bottom:16px;display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:12px 12px 12px 16px;border-radius:14px;color:var(--rvm-text);background:var(--rvm-surface);box-shadow:0 8px 30px #0000003d}.toast button{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:var(--rvm-surface-2)}.editor{padding:8px 4px 32px;color:var(--rvm-text)}.editor>h2{margin:0 0 4px}.editor>p{margin:0 0 18px;color:var(--rvm-muted)}.editor section{margin:0 0 18px;padding:16px;border:1px solid var(--rvm-border);border-radius:16px;background:var(--rvm-surface)}.editor h3{margin:0 0 12px}.editor h4{margin:14px 0 8px}.editor label{display:flex;flex-direction:column;gap:6px;margin-bottom:10px;text-transform:capitalize}.editor .checkbox{flex-direction:row;align-items:center}.editor .checkbox input{width:18px;min-height:auto}.editor-errors{margin-bottom:14px;padding:12px;border-radius:12px;color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent);font-size:12px}.editor-hint{margin:-4px 0 12px;color:var(--rvm-muted);font-size:12px}.editor-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.editor-heading>div{display:flex;gap:4px}.editor-heading button{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:36px;padding:6px 9px;border:1px solid var(--rvm-border);border-radius:9px;background:var(--rvm-surface-2)}.editor-heading button svg{width:16px;height:16px}.editor-card{margin-top:12px;padding:14px;border-radius:14px;background:var(--rvm-surface-2)}.editor-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 12px;margin-top:12px}.room-editor-list{display:grid;gap:8px}.room-editor{display:grid;grid-template-columns:100px 1fr 1.2fr 1fr 1.2fr;align-items:end;gap:8px;padding:10px;border:1px solid var(--rvm-border);border-radius:12px;background:var(--rvm-surface)}.room-editor label{margin:0}button:focus-visible,select:focus-visible,input:focus-visible,.room-hitbox:focus-visible{outline:3px solid color-mix(in srgb,var(--rvm-accent) 55%,transparent);outline-offset:2px}@media(max-width:700px){.card-header{align-items:flex-start;flex-direction:column}.status-strip{justify-content:flex-start}.map-shell{height:clamp(300px,48vh,480px);margin:0 8px}.room-label text{font-size:18px}.primary-actions{grid-template-columns:1fr}.assisted-panel{grid-template-columns:auto minmax(0,1fr);margin:12px 12px 4px}.assisted-actions{grid-column:1/-1;display:grid;grid-template-columns:1fr;width:100%}.assisted-actions button{width:100%}.transport{flex-wrap:wrap}.sheet-layer{align-items:end;padding:0}.job-sheet{width:100%;max-height:92vh;border-radius:24px 24px 0 0}.sheet-handle{display:block;width:42px;height:5px;margin:9px auto 0;border-radius:9px;background:var(--rvm-border)}.job-sheet header{padding-top:14px}.dock-actions{grid-template-columns:1fr}.dock-actions>button{min-height:68px}.dock-setting-row{align-items:flex-start;flex-direction:column;gap:7px}.dock-setting-row select{width:100%}.dock-setting-row:has(.dock-toggle){align-items:center;flex-direction:row}.cleaning-mode-tabs{grid-template-columns:repeat(2,1fr)}.cleaning-mode-tabs button:nth-child(-n+2){border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{min-height:56px}.editor-grid{grid-template-columns:1fr}.room-editor{grid-template-columns:1fr 1fr}.room-editor>strong{grid-column:1/-1}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}', gx = "0.9.0-dev";
let Fh = !1;
function bx() {
  Fh || (Fh = !0, console.warn(
    "roborock-vacuum-map-card: `vacuum_mode_fallback` is deprecated. Home Assistant 2026.8+ provides the Cleaning mode select; configure `entities.cleaning_mode` instead."
  ));
}
class r_ extends HTMLElement {
  root;
  container;
  constructor() {
    super();
    const i = this.attachShadow({ mode: "open" }), o = document.createElement("style");
    o.textContent = yx, i.append(o), this.container = document.createElement("div"), i.append(this.container);
  }
  renderReact(i) {
    this.root ??= Mg.createRoot(this.container), this.root.render(i);
  }
}
class Sx extends r_ {
  config;
  homeAssistant;
  setConfig(i) {
    this.config = O2(i), this.config.vacuum_mode_fallback && bx(), this.render();
  }
  set hass(i) {
    this.homeAssistant = i, this.render();
  }
  render() {
    !this.config || !this.homeAssistant || this.renderReact(/* @__PURE__ */ _.jsx(_x, { hass: this.homeAssistant, config: this.config }));
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
    return Rv();
  }
}
class wx extends r_ {
  config = Rv();
  homeAssistant;
  setConfig(i) {
    this.config = structuredClone(i), this.render();
  }
  set hass(i) {
    this.homeAssistant = i, this.render();
  }
  render() {
    this.homeAssistant && this.renderReact(
      /* @__PURE__ */ _.jsx(
        q2,
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
customElements.get("roborock-vacuum-map-card") || customElements.define("roborock-vacuum-map-card", Sx);
customElements.get("roborock-vacuum-map-card-editor") || customElements.define("roborock-vacuum-map-card-editor", wx);
window.customCards ??= [];
window.customCards.push({
  type: "roborock-vacuum-map-card",
  name: "Roborock Vacuum Map Card",
  description: "A Roborock-native room and whole-floor cleaning card",
  preview: !0,
  documentationURL: "https://github.com/domidyon/roborock-vacuum-map-card"
});
console.info(`%c ROBOROCK-VACUUM-MAP-CARD %c v${gx} `, "color:white;background:#5965f2;font-weight:700", "color:#5965f2;background:#eef0ff");
export {
  Sx as RoborockVacuumMapCard,
  wx as RoborockVacuumMapCardEditor
};
