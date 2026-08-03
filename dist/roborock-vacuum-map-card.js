function mh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ms = { exports: {} }, ul = {};
var pp;
function Xy() {
  if (pp) return ul;
  pp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function u(o, c, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      f = {};
      for (var p in c)
        p !== "key" && (f[p] = c[p]);
    } else f = c;
    return c = f.ref, {
      $$typeof: n,
      type: o,
      key: d,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return ul.Fragment = i, ul.jsx = u, ul.jsxs = u, ul;
}
var hp;
function Hy() {
  return hp || (hp = 1, Ms.exports = Xy()), Ms.exports;
}
var y = Hy(), js = { exports: {} }, ol = {}, ks = { exports: {} }, Ds = {};
var vp;
function By() {
  return vp || (vp = 1, (function(n) {
    function i(k, L) {
      var I = k.length;
      k.push(L);
      e: for (; 0 < I; ) {
        var we = I - 1 >>> 1, be = k[we];
        if (0 < c(be, L))
          k[we] = L, k[I] = be, I = we;
        else break e;
      }
    }
    function u(k) {
      return k.length === 0 ? null : k[0];
    }
    function o(k) {
      if (k.length === 0) return null;
      var L = k[0], I = k.pop();
      if (I !== L) {
        k[0] = I;
        e: for (var we = 0, be = k.length, z = be >>> 1; we < z; ) {
          var R = 2 * (we + 1) - 1, G = k[R], W = R + 1, ue = k[W];
          if (0 > c(G, I))
            W < be && 0 > c(ue, G) ? (k[we] = ue, k[W] = I, we = W) : (k[we] = G, k[R] = I, we = R);
          else if (W < be && 0 > c(ue, I))
            k[we] = ue, k[W] = I, we = W;
          else break e;
        }
      }
      return L;
    }
    function c(k, L) {
      var I = k.sortIndex - L.sortIndex;
      return I !== 0 ? I : k.id - L.id;
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
    var v = [], h = [], _ = 1, S = null, x = 3, E = !1, M = !1, B = !1, H = !1, D = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, $ = typeof setImmediate < "u" ? setImmediate : null;
    function X(k) {
      for (var L = u(h); L !== null; ) {
        if (L.callback === null) o(h);
        else if (L.startTime <= k)
          o(h), L.sortIndex = L.expirationTime, i(v, L);
        else break;
        L = u(h);
      }
    }
    function J(k) {
      if (B = !1, X(k), !M)
        if (u(v) !== null)
          M = !0, ne || (ne = !0, _e());
        else {
          var L = u(h);
          L !== null && it(J, L.startTime - k);
        }
    }
    var ne = !1, q = -1, re = 5, de = -1;
    function ge() {
      return H ? !0 : !(n.unstable_now() - de < re);
    }
    function ye() {
      if (H = !1, ne) {
        var k = n.unstable_now();
        de = k;
        var L = !0;
        try {
          e: {
            M = !1, B && (B = !1, V(q), q = -1), E = !0;
            var I = x;
            try {
              t: {
                for (X(k), S = u(v); S !== null && !(S.expirationTime > k && ge()); ) {
                  var we = S.callback;
                  if (typeof we == "function") {
                    S.callback = null, x = S.priorityLevel;
                    var be = we(
                      S.expirationTime <= k
                    );
                    if (k = n.unstable_now(), typeof be == "function") {
                      S.callback = be, X(k), L = !0;
                      break t;
                    }
                    S === u(v) && o(v), X(k);
                  } else o(v);
                  S = u(v);
                }
                if (S !== null) L = !0;
                else {
                  var z = u(h);
                  z !== null && it(
                    J,
                    z.startTime - k
                  ), L = !1;
                }
              }
              break e;
            } finally {
              S = null, x = I, E = !1;
            }
            L = void 0;
          }
        } finally {
          L ? _e() : ne = !1;
        }
      }
    }
    var _e;
    if (typeof $ == "function")
      _e = function() {
        $(ye);
      };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), Fe = qe.port2;
      qe.port1.onmessage = ye, _e = function() {
        Fe.postMessage(null);
      };
    } else
      _e = function() {
        D(ye, 0);
      };
    function it(k, L) {
      q = D(function() {
        k(n.unstable_now());
      }, L);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, n.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : re = 0 < k ? Math.floor(1e3 / k) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, n.unstable_next = function(k) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = x;
      }
      var I = x;
      x = L;
      try {
        return k();
      } finally {
        x = I;
      }
    }, n.unstable_requestPaint = function() {
      H = !0;
    }, n.unstable_runWithPriority = function(k, L) {
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
      var I = x;
      x = k;
      try {
        return L();
      } finally {
        x = I;
      }
    }, n.unstable_scheduleCallback = function(k, L, I) {
      var we = n.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? we + I : we) : I = we, k) {
        case 1:
          var be = -1;
          break;
        case 2:
          be = 250;
          break;
        case 5:
          be = 1073741823;
          break;
        case 4:
          be = 1e4;
          break;
        default:
          be = 5e3;
      }
      return be = I + be, k = {
        id: _++,
        callback: L,
        priorityLevel: k,
        startTime: I,
        expirationTime: be,
        sortIndex: -1
      }, I > we ? (k.sortIndex = I, i(h, k), u(v) === null && k === u(h) && (B ? (V(q), q = -1) : B = !0, it(J, I - we))) : (k.sortIndex = be, i(v, k), M || E || (M = !0, ne || (ne = !0, _e()))), k;
    }, n.unstable_shouldYield = ge, n.unstable_wrapCallback = function(k) {
      var L = x;
      return function() {
        var I = x;
        x = L;
        try {
          return k.apply(this, arguments);
        } finally {
          x = I;
        }
      };
    };
  })(Ds)), Ds;
}
var gp;
function qy() {
  return gp || (gp = 1, ks.exports = By()), ks.exports;
}
var Ns = { exports: {} }, oe = {};
var yp;
function $y() {
  if (yp) return oe;
  yp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), x = Symbol.iterator;
  function E(z) {
    return z === null || typeof z != "object" ? null : (z = x && z[x] || z["@@iterator"], typeof z == "function" ? z : null);
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
  }, B = Object.assign, H = {};
  function D(z, R, G) {
    this.props = z, this.context = R, this.refs = H, this.updater = G || M;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(z, R) {
    if (typeof z != "object" && typeof z != "function" && z != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, z, R, "setState");
  }, D.prototype.forceUpdate = function(z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function V() {
  }
  V.prototype = D.prototype;
  function $(z, R, G) {
    this.props = z, this.context = R, this.refs = H, this.updater = G || M;
  }
  var X = $.prototype = new V();
  X.constructor = $, B(X, D.prototype), X.isPureReactComponent = !0;
  var J = Array.isArray;
  function ne() {
  }
  var q = { H: null, A: null, T: null, S: null }, re = Object.prototype.hasOwnProperty;
  function de(z, R, G) {
    var W = G.ref;
    return {
      $$typeof: n,
      type: z,
      key: R,
      ref: W !== void 0 ? W : null,
      props: G
    };
  }
  function ge(z, R) {
    return de(z.type, R, z.props);
  }
  function ye(z) {
    return typeof z == "object" && z !== null && z.$$typeof === n;
  }
  function _e(z) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + z.replace(/[=:]/g, function(G) {
      return R[G];
    });
  }
  var qe = /\/+/g;
  function Fe(z, R) {
    return typeof z == "object" && z !== null && z.key != null ? _e("" + z.key) : R.toString(36);
  }
  function it(z) {
    switch (z.status) {
      case "fulfilled":
        return z.value;
      case "rejected":
        throw z.reason;
      default:
        switch (typeof z.status == "string" ? z.then(ne, ne) : (z.status = "pending", z.then(
          function(R) {
            z.status === "pending" && (z.status = "fulfilled", z.value = R);
          },
          function(R) {
            z.status === "pending" && (z.status = "rejected", z.reason = R);
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
  function k(z, R, G, W, ue) {
    var ce = typeof z;
    (ce === "undefined" || ce === "boolean") && (z = null);
    var xe = !1;
    if (z === null) xe = !0;
    else
      switch (ce) {
        case "bigint":
        case "string":
        case "number":
          xe = !0;
          break;
        case "object":
          switch (z.$$typeof) {
            case n:
            case i:
              xe = !0;
              break;
            case _:
              return xe = z._init, k(
                xe(z._payload),
                R,
                G,
                W,
                ue
              );
          }
      }
    if (xe)
      return ue = ue(z), xe = W === "" ? "." + Fe(z, 0) : W, J(ue) ? (G = "", xe != null && (G = xe.replace(qe, "$&/") + "/"), k(ue, R, G, "", function(Ce) {
        return Ce;
      })) : ue != null && (ye(ue) && (ue = ge(
        ue,
        G + (ue.key == null || z && z.key === ue.key ? "" : ("" + ue.key).replace(
          qe,
          "$&/"
        ) + "/") + xe
      )), R.push(ue)), 1;
    xe = 0;
    var K = W === "" ? "." : W + ":";
    if (J(z))
      for (var ae = 0; ae < z.length; ae++)
        W = z[ae], ce = K + Fe(W, ae), xe += k(
          W,
          R,
          G,
          ce,
          ue
        );
    else if (ae = E(z), typeof ae == "function")
      for (z = ae.call(z), ae = 0; !(W = z.next()).done; )
        W = W.value, ce = K + Fe(W, ae++), xe += k(
          W,
          R,
          G,
          ce,
          ue
        );
    else if (ce === "object") {
      if (typeof z.then == "function")
        return k(
          it(z),
          R,
          G,
          W,
          ue
        );
      throw R = String(z), Error(
        "Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return xe;
  }
  function L(z, R, G) {
    if (z == null) return z;
    var W = [], ue = 0;
    return k(z, W, "", "", function(ce) {
      return R.call(G, ce, ue++);
    }), W;
  }
  function I(z) {
    if (z._status === -1) {
      var R = z._result;
      R = R(), R.then(
        function(G) {
          (z._status === 0 || z._status === -1) && (z._status = 1, z._result = G);
        },
        function(G) {
          (z._status === 0 || z._status === -1) && (z._status = 2, z._result = G);
        }
      ), z._status === -1 && (z._status = 0, z._result = R);
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var we = typeof reportError == "function" ? reportError : function(z) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var R = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof z == "object" && z !== null && typeof z.message == "string" ? String(z.message) : String(z),
        error: z
      });
      if (!window.dispatchEvent(R)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", z);
      return;
    }
    console.error(z);
  }, be = {
    map: L,
    forEach: function(z, R, G) {
      L(
        z,
        function() {
          R.apply(this, arguments);
        },
        G
      );
    },
    count: function(z) {
      var R = 0;
      return L(z, function() {
        R++;
      }), R;
    },
    toArray: function(z) {
      return L(z, function(R) {
        return R;
      }) || [];
    },
    only: function(z) {
      if (!ye(z))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return z;
    }
  };
  return oe.Activity = S, oe.Children = be, oe.Component = D, oe.Fragment = u, oe.Profiler = c, oe.PureComponent = $, oe.StrictMode = o, oe.Suspense = v, oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q, oe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(z) {
      return q.H.useMemoCache(z);
    }
  }, oe.cache = function(z) {
    return function() {
      return z.apply(null, arguments);
    };
  }, oe.cacheSignal = function() {
    return null;
  }, oe.cloneElement = function(z, R, G) {
    if (z == null)
      throw Error(
        "The argument must be a React element, but you passed " + z + "."
      );
    var W = B({}, z.props), ue = z.key;
    if (R != null)
      for (ce in R.key !== void 0 && (ue = "" + R.key), R)
        !re.call(R, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && R.ref === void 0 || (W[ce] = R[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) W.children = G;
    else if (1 < ce) {
      for (var xe = Array(ce), K = 0; K < ce; K++)
        xe[K] = arguments[K + 2];
      W.children = xe;
    }
    return de(z.type, ue, W);
  }, oe.createContext = function(z) {
    return z = {
      $$typeof: d,
      _currentValue: z,
      _currentValue2: z,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, z.Provider = z, z.Consumer = {
      $$typeof: f,
      _context: z
    }, z;
  }, oe.createElement = function(z, R, G) {
    var W, ue = {}, ce = null;
    if (R != null)
      for (W in R.key !== void 0 && (ce = "" + R.key), R)
        re.call(R, W) && W !== "key" && W !== "__self" && W !== "__source" && (ue[W] = R[W]);
    var xe = arguments.length - 2;
    if (xe === 1) ue.children = G;
    else if (1 < xe) {
      for (var K = Array(xe), ae = 0; ae < xe; ae++)
        K[ae] = arguments[ae + 2];
      ue.children = K;
    }
    if (z && z.defaultProps)
      for (W in xe = z.defaultProps, xe)
        ue[W] === void 0 && (ue[W] = xe[W]);
    return de(z, ce, ue);
  }, oe.createRef = function() {
    return { current: null };
  }, oe.forwardRef = function(z) {
    return { $$typeof: p, render: z };
  }, oe.isValidElement = ye, oe.lazy = function(z) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: z },
      _init: I
    };
  }, oe.memo = function(z, R) {
    return {
      $$typeof: h,
      type: z,
      compare: R === void 0 ? null : R
    };
  }, oe.startTransition = function(z) {
    var R = q.T, G = {};
    q.T = G;
    try {
      var W = z(), ue = q.S;
      ue !== null && ue(G, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(ne, we);
    } catch (ce) {
      we(ce);
    } finally {
      R !== null && G.types !== null && (R.types = G.types), q.T = R;
    }
  }, oe.unstable_useCacheRefresh = function() {
    return q.H.useCacheRefresh();
  }, oe.use = function(z) {
    return q.H.use(z);
  }, oe.useActionState = function(z, R, G) {
    return q.H.useActionState(z, R, G);
  }, oe.useCallback = function(z, R) {
    return q.H.useCallback(z, R);
  }, oe.useContext = function(z) {
    return q.H.useContext(z);
  }, oe.useDebugValue = function() {
  }, oe.useDeferredValue = function(z, R) {
    return q.H.useDeferredValue(z, R);
  }, oe.useEffect = function(z, R) {
    return q.H.useEffect(z, R);
  }, oe.useEffectEvent = function(z) {
    return q.H.useEffectEvent(z);
  }, oe.useId = function() {
    return q.H.useId();
  }, oe.useImperativeHandle = function(z, R, G) {
    return q.H.useImperativeHandle(z, R, G);
  }, oe.useInsertionEffect = function(z, R) {
    return q.H.useInsertionEffect(z, R);
  }, oe.useLayoutEffect = function(z, R) {
    return q.H.useLayoutEffect(z, R);
  }, oe.useMemo = function(z, R) {
    return q.H.useMemo(z, R);
  }, oe.useOptimistic = function(z, R) {
    return q.H.useOptimistic(z, R);
  }, oe.useReducer = function(z, R, G) {
    return q.H.useReducer(z, R, G);
  }, oe.useRef = function(z) {
    return q.H.useRef(z);
  }, oe.useState = function(z) {
    return q.H.useState(z);
  }, oe.useSyncExternalStore = function(z, R, G) {
    return q.H.useSyncExternalStore(
      z,
      R,
      G
    );
  }, oe.useTransition = function() {
    return q.H.useTransition();
  }, oe.version = "19.2.8", oe;
}
var _p;
function Fs() {
  return _p || (_p = 1, Ns.exports = $y()), Ns.exports;
}
var Zs = { exports: {} }, mt = {};
var bp;
function Ly() {
  if (bp) return mt;
  bp = 1;
  var n = Fs();
  function i(v) {
    var h = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        h += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + v + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u() {
  }
  var o = {
    d: {
      f: u,
      r: function() {
        throw Error(i(522));
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
  function f(v, h, _) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : "" + S,
      children: v,
      containerInfo: h,
      implementation: _
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, h) {
    if (v === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, mt.createPortal = function(v, h) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(i(299));
    return f(v, h, null, _);
  }, mt.flushSync = function(v) {
    var h = d.T, _ = o.p;
    try {
      if (d.T = null, o.p = 2, v) return v();
    } finally {
      d.T = h, o.p = _, o.d.f();
    }
  }, mt.preconnect = function(v, h) {
    typeof v == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, o.d.C(v, h));
  }, mt.prefetchDNS = function(v) {
    typeof v == "string" && o.d.D(v);
  }, mt.preinit = function(v, h) {
    if (typeof v == "string" && h && typeof h.as == "string") {
      var _ = h.as, S = p(_, h.crossOrigin), x = typeof h.integrity == "string" ? h.integrity : void 0, E = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      _ === "style" ? o.d.S(
        v,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: S,
          integrity: x,
          fetchPriority: E
        }
      ) : _ === "script" && o.d.X(v, {
        crossOrigin: S,
        integrity: x,
        fetchPriority: E,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, mt.preinitModule = function(v, h) {
    if (typeof v == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var _ = p(
            h.as,
            h.crossOrigin
          );
          o.d.M(v, {
            crossOrigin: _,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && o.d.M(v);
  }, mt.preload = function(v, h) {
    if (typeof v == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var _ = h.as, S = p(_, h.crossOrigin);
      o.d.L(v, _, {
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
  }, mt.preloadModule = function(v, h) {
    if (typeof v == "string")
      if (h) {
        var _ = p(h.as, h.crossOrigin);
        o.d.m(v, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: _,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else o.d.m(v);
  }, mt.requestFormReset = function(v) {
    o.d.r(v);
  }, mt.unstable_batchedUpdates = function(v, h) {
    return v(h);
  }, mt.useFormState = function(v, h, _) {
    return d.H.useFormState(v, h, _);
  }, mt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, mt.version = "19.2.8", mt;
}
var Sp;
function Vy() {
  if (Sp) return Zs.exports;
  Sp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Zs.exports = Ly(), Zs.exports;
}
var zp;
function Gy() {
  if (zp) return ol;
  zp = 1;
  var n = qy(), i = Fs(), u = Vy();
  function o(e) {
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
      throw Error(o(188));
  }
  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var r = a.return;
      if (r === null) break;
      var s = r.alternate;
      if (s === null) {
        if (l = r.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (r.child === s.child) {
        for (s = r.child; s; ) {
          if (s === a) return v(r), e;
          if (s === l) return v(r), t;
          s = s.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== l.return) a = r, l = s;
      else {
        for (var m = !1, g = r.child; g; ) {
          if (g === a) {
            m = !0, a = r, l = s;
            break;
          }
          if (g === l) {
            m = !0, l = r, a = s;
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = s.child; g; ) {
            if (g === a) {
              m = !0, a = s, l = r;
              break;
            }
            if (g === l) {
              m = !0, l = s, a = r;
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(o(189));
        }
      }
      if (a.alternate !== l) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
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
  var S = Object.assign, x = /* @__PURE__ */ Symbol.for("react.element"), E = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), B = /* @__PURE__ */ Symbol.for("react.fragment"), H = /* @__PURE__ */ Symbol.for("react.strict_mode"), D = /* @__PURE__ */ Symbol.for("react.profiler"), V = /* @__PURE__ */ Symbol.for("react.consumer"), $ = /* @__PURE__ */ Symbol.for("react.context"), X = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), ne = /* @__PURE__ */ Symbol.for("react.suspense_list"), q = /* @__PURE__ */ Symbol.for("react.memo"), re = /* @__PURE__ */ Symbol.for("react.lazy"), de = /* @__PURE__ */ Symbol.for("react.activity"), ge = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ye = Symbol.iterator;
  function _e(e) {
    return e === null || typeof e != "object" ? null : (e = ye && e[ye] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var qe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Fe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === qe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case B:
        return "Fragment";
      case D:
        return "Profiler";
      case H:
        return "StrictMode";
      case J:
        return "Suspense";
      case ne:
        return "SuspenseList";
      case de:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case M:
          return "Portal";
        case $:
          return e.displayName || "Context";
        case V:
          return (e._context.displayName || "Context") + ".Consumer";
        case X:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case q:
          return t = e.displayName || null, t !== null ? t : Fe(e.type) || "Memo";
        case re:
          t = e._payload, e = e._init;
          try {
            return Fe(e(t));
          } catch {
          }
      }
    return null;
  }
  var it = Array.isArray, k = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, we = [], be = -1;
  function z(e) {
    return { current: e };
  }
  function R(e) {
    0 > be || (e.current = we[be], we[be] = null, be--);
  }
  function G(e, t) {
    be++, we[be] = e.current, e.current = t;
  }
  var W = z(null), ue = z(null), ce = z(null), xe = z(null);
  function K(e, t) {
    switch (G(ce, t), G(ue, e), G(W, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Um(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Um(t), e = Ym(t, e);
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
    R(W), G(W, e);
  }
  function ae() {
    R(W), R(ue), R(ce);
  }
  function Ce(e) {
    e.memoizedState !== null && G(xe, e);
    var t = W.current, a = Ym(t, e.type);
    t !== a && (G(ue, e), G(W, a));
  }
  function Qt(e) {
    ue.current === e && (R(W), R(ue)), xe.current === e && (R(xe), nl._currentValue = I);
  }
  var mi, Tl;
  function It(e) {
    if (mi === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        mi = t && t[1] || "", Tl = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + mi + e + Tl;
  }
  var mo = !1;
  function po(e, t) {
    if (!e || mo) return "";
    mo = !0;
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
                } catch (j) {
                  var C = j;
                }
                Reflect.construct(e, [], Y);
              } else {
                try {
                  Y.call();
                } catch (j) {
                  C = j;
                }
                e.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                C = j;
              }
              (Y = e()) && typeof Y.catch == "function" && Y.catch(function() {
              });
            }
          } catch (j) {
            if (j && C && typeof j.stack == "string")
              return [j.stack, C.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = l.DetermineComponentFrameRoot(), m = s[0], g = s[1];
      if (m && g) {
        var b = m.split(`
`), O = g.split(`
`);
        for (r = l = 0; l < b.length && !b[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; r < O.length && !O[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (l === b.length || r === O.length)
          for (l = b.length - 1, r = O.length - 1; 1 <= l && 0 <= r && b[l] !== O[r]; )
            r--;
        for (; 1 <= l && 0 <= r; l--, r--)
          if (b[l] !== O[r]) {
            if (l !== 1 || r !== 1)
              do
                if (l--, r--, 0 > r || b[l] !== O[r]) {
                  var N = `
` + b[l].replace(" at new ", " at ");
                  return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), N;
                }
              while (1 <= l && 0 <= r);
            break;
          }
      }
    } finally {
      mo = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? It(a) : "";
  }
  function vv(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return It(e.type);
      case 16:
        return It("Lazy");
      case 13:
        return e.child !== t && t !== null ? It("Suspense Fallback") : It("Suspense");
      case 19:
        return It("SuspenseList");
      case 0:
      case 15:
        return po(e.type, !1);
      case 11:
        return po(e.type.render, !1);
      case 1:
        return po(e.type, !0);
      case 31:
        return It("Activity");
      default:
        return "";
    }
  }
  function mc(e) {
    try {
      var t = "", a = null;
      do
        t += vv(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var ho = Object.prototype.hasOwnProperty, vo = n.unstable_scheduleCallback, go = n.unstable_cancelCallback, gv = n.unstable_shouldYield, yv = n.unstable_requestPaint, Tt = n.unstable_now, _v = n.unstable_getCurrentPriorityLevel, pc = n.unstable_ImmediatePriority, hc = n.unstable_UserBlockingPriority, El = n.unstable_NormalPriority, bv = n.unstable_LowPriority, vc = n.unstable_IdlePriority, Sv = n.log, zv = n.unstable_setDisableYieldValue, pi = null, Et = null;
  function xn(e) {
    if (typeof Sv == "function" && zv(e), Et && typeof Et.setStrictMode == "function")
      try {
        Et.setStrictMode(pi, e);
      } catch {
      }
  }
  var At = Math.clz32 ? Math.clz32 : Tv, wv = Math.log, xv = Math.LN2;
  function Tv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (wv(e) / xv | 0) | 0;
  }
  var Al = 256, Ol = 262144, Cl = 4194304;
  function ea(e) {
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
  function Ml(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var r = 0, s = e.suspendedLanes, m = e.pingedLanes;
    e = e.warmLanes;
    var g = l & 134217727;
    return g !== 0 ? (l = g & ~s, l !== 0 ? r = ea(l) : (m &= g, m !== 0 ? r = ea(m) : a || (a = g & ~e, a !== 0 && (r = ea(a))))) : (g = l & ~s, g !== 0 ? r = ea(g) : m !== 0 ? r = ea(m) : a || (a = l & ~e, a !== 0 && (r = ea(a)))), r === 0 ? 0 : t !== 0 && t !== r && (t & s) === 0 && (s = r & -r, a = t & -t, s >= a || s === 32 && (a & 4194048) !== 0) ? t : r;
  }
  function hi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ev(e, t) {
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
  function gc() {
    var e = Cl;
    return Cl <<= 1, (Cl & 62914560) === 0 && (Cl = 4194304), e;
  }
  function yo(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function vi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Av(e, t, a, l, r, s) {
    var m = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var g = e.entanglements, b = e.expirationTimes, O = e.hiddenUpdates;
    for (a = m & ~a; 0 < a; ) {
      var N = 31 - At(a), Y = 1 << N;
      g[N] = 0, b[N] = -1;
      var C = O[N];
      if (C !== null)
        for (O[N] = null, N = 0; N < C.length; N++) {
          var j = C[N];
          j !== null && (j.lane &= -536870913);
        }
      a &= ~Y;
    }
    l !== 0 && yc(e, l, 0), s !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(m & ~t));
  }
  function yc(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - At(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function _c(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - At(a), r = 1 << l;
      r & t | e[l] & t && (e[l] |= t), a &= ~r;
    }
  }
  function bc(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : _o(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function _o(e) {
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
  function bo(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Sc() {
    var e = L.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : op(e.type));
  }
  function zc(e, t) {
    var a = L.p;
    try {
      return L.p = e, t();
    } finally {
      L.p = a;
    }
  }
  var Tn = Math.random().toString(36).slice(2), ot = "__reactFiber$" + Tn, gt = "__reactProps$" + Tn, xa = "__reactContainer$" + Tn, So = "__reactEvents$" + Tn, Ov = "__reactListeners$" + Tn, Cv = "__reactHandles$" + Tn, wc = "__reactResources$" + Tn, gi = "__reactMarker$" + Tn;
  function zo(e) {
    delete e[ot], delete e[gt], delete e[So], delete e[Ov], delete e[Cv];
  }
  function Ta(e) {
    var t = e[ot];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[xa] || a[ot]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Vm(e); e !== null; ) {
            if (a = e[ot]) return a;
            e = Vm(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ea(e) {
    if (e = e[ot] || e[xa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function yi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Aa(e) {
    var t = e[wc];
    return t || (t = e[wc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function lt(e) {
    e[gi] = !0;
  }
  var xc = /* @__PURE__ */ new Set(), Tc = {};
  function ta(e, t) {
    Oa(e, t), Oa(e + "Capture", t);
  }
  function Oa(e, t) {
    for (Tc[e] = t, e = 0; e < t.length; e++)
      xc.add(t[e]);
  }
  var Mv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ec = {}, Ac = {};
  function jv(e) {
    return ho.call(Ac, e) ? !0 : ho.call(Ec, e) ? !1 : Mv.test(e) ? Ac[e] = !0 : (Ec[e] = !0, !1);
  }
  function jl(e, t, a) {
    if (jv(t))
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
  function kl(e, t, a) {
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
  function ln(e, t, a, l) {
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
  function Oc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function kv(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var r = l.get, s = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(m) {
          a = "" + m, s.call(this, m);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
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
  function wo(e) {
    if (!e._valueTracker) {
      var t = Oc(e) ? "checked" : "value";
      e._valueTracker = kv(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Cc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = Oc(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Dl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Dv = /[\n"\\]/g;
  function Rt(e) {
    return e.replace(
      Dv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function xo(e, t, a, l, r, s, m, g) {
    e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Zt(t)) : e.value !== "" + Zt(t) && (e.value = "" + Zt(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? To(e, m, Zt(t)) : a != null ? To(e, m, Zt(a)) : l != null && e.removeAttribute("value"), r == null && s != null && (e.defaultChecked = !!s), r != null && (e.checked = r && typeof r != "function" && typeof r != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + Zt(g) : e.removeAttribute("name");
  }
  function Mc(e, t, a, l, r, s, m, g) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || a != null) {
      if (!(s !== "submit" && s !== "reset" || t != null)) {
        wo(e);
        return;
      }
      a = a != null ? "" + Zt(a) : "", t = t != null ? "" + Zt(t) : a, g || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? r, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = g ? e.checked : !!l, e.defaultChecked = !!l, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m), wo(e);
  }
  function To(e, t, a) {
    t === "number" && Dl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ca(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var r = 0; r < a.length; r++)
        t["$" + a[r]] = !0;
      for (a = 0; a < e.length; a++)
        r = t.hasOwnProperty("$" + e[a].value), e[a].selected !== r && (e[a].selected = r), r && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Zt(a), t = null, r = 0; r < e.length; r++) {
        if (e[r].value === a) {
          e[r].selected = !0, l && (e[r].defaultSelected = !0);
          return;
        }
        t !== null || e[r].disabled || (t = e[r]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function jc(e, t, a) {
    if (t != null && (t = "" + Zt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Zt(a) : "";
  }
  function kc(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(o(92));
        if (it(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = Zt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), wo(e);
  }
  function Ma(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Nv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Dc(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Nv.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Nc(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var r in t)
        l = t[r], t.hasOwnProperty(r) && a[r] !== l && Dc(e, r, l);
    } else
      for (var s in t)
        t.hasOwnProperty(s) && Dc(e, s, t[s]);
  }
  function Eo(e) {
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
  var Zv = /* @__PURE__ */ new Map([
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
  ]), Rv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Nl(e) {
    return Rv.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function un() {
  }
  var Ao = null;
  function Oo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ja = null, ka = null;
  function Zc(e) {
    var t = Ea(e);
    if (t && (e = t.stateNode)) {
      var a = e[gt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (xo(
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
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var r = l[gt] || null;
                if (!r) throw Error(o(90));
                xo(
                  l,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              l = a[t], l.form === e.form && Cc(l);
          }
          break e;
        case "textarea":
          jc(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Ca(e, !!a.multiple, t, !1);
      }
    }
  }
  var Co = !1;
  function Rc(e, t, a) {
    if (Co) return e(t, a);
    Co = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Co = !1, (ja !== null || ka !== null) && (Su(), ja && (t = ja, e = ka, ka = ja = null, Zc(t), e)))
        for (t = 0; t < e.length; t++) Zc(e[t]);
    }
  }
  function _i(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[gt] || null;
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
        o(231, t, typeof a)
      );
    return a;
  }
  var on = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Mo = !1;
  if (on)
    try {
      var bi = {};
      Object.defineProperty(bi, "passive", {
        get: function() {
          Mo = !0;
        }
      }), window.addEventListener("test", bi, bi), window.removeEventListener("test", bi, bi);
    } catch {
      Mo = !1;
    }
  var En = null, jo = null, Zl = null;
  function Uc() {
    if (Zl) return Zl;
    var e, t = jo, a = t.length, l, r = "value" in En ? En.value : En.textContent, s = r.length;
    for (e = 0; e < a && t[e] === r[e]; e++) ;
    var m = a - e;
    for (l = 1; l <= m && t[a - l] === r[s - l]; l++) ;
    return Zl = r.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Rl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ul() {
    return !0;
  }
  function Yc() {
    return !1;
  }
  function yt(e) {
    function t(a, l, r, s, m) {
      this._reactName = a, this._targetInst = r, this.type = l, this.nativeEvent = s, this.target = m, this.currentTarget = null;
      for (var g in e)
        e.hasOwnProperty(g) && (a = e[g], this[g] = a ? a(s) : s[g]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ul : Yc, this.isPropagationStopped = Yc, this;
    }
    return S(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ul);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ul);
      },
      persist: function() {
      },
      isPersistent: Ul
    }), t;
  }
  var na = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Yl = yt(na), Si = S({}, na, { view: 0, detail: 0 }), Uv = yt(Si), ko, Do, zi, Xl = S({}, Si, {
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
    getModifierState: Zo,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== zi && (zi && e.type === "mousemove" ? (ko = e.screenX - zi.screenX, Do = e.screenY - zi.screenY) : Do = ko = 0, zi = e), ko);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Do;
    }
  }), Xc = yt(Xl), Yv = S({}, Xl, { dataTransfer: 0 }), Xv = yt(Yv), Hv = S({}, Si, { relatedTarget: 0 }), No = yt(Hv), Bv = S({}, na, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qv = yt(Bv), $v = S({}, na, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Lv = yt($v), Vv = S({}, na, { data: 0 }), Hc = yt(Vv), Gv = {
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
  }, Qv = {
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
  }, Kv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Jv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Kv[e]) ? !!t[e] : !1;
  }
  function Zo() {
    return Jv;
  }
  var Wv = S({}, Si, {
    key: function(e) {
      if (e.key) {
        var t = Gv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Rl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qv[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zo,
    charCode: function(e) {
      return e.type === "keypress" ? Rl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Rl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Pv = yt(Wv), Fv = S({}, Xl, {
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
  }), Bc = yt(Fv), Iv = S({}, Si, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zo
  }), eg = yt(Iv), tg = S({}, na, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ng = yt(tg), ag = S({}, Xl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ig = yt(ag), lg = S({}, na, {
    newState: 0,
    oldState: 0
  }), ug = yt(lg), og = [9, 13, 27, 32], Ro = on && "CompositionEvent" in window, wi = null;
  on && "documentMode" in document && (wi = document.documentMode);
  var rg = on && "TextEvent" in window && !wi, qc = on && (!Ro || wi && 8 < wi && 11 >= wi), $c = " ", Lc = !1;
  function Vc(e, t) {
    switch (e) {
      case "keyup":
        return og.indexOf(t.keyCode) !== -1;
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
  function Gc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Da = !1;
  function sg(e, t) {
    switch (e) {
      case "compositionend":
        return Gc(t);
      case "keypress":
        return t.which !== 32 ? null : (Lc = !0, $c);
      case "textInput":
        return e = t.data, e === $c && Lc ? null : e;
      default:
        return null;
    }
  }
  function cg(e, t) {
    if (Da)
      return e === "compositionend" || !Ro && Vc(e, t) ? (e = Uc(), Zl = jo = En = null, Da = !1, e) : null;
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
        return qc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var fg = {
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
  function Qc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!fg[e.type] : t === "textarea";
  }
  function Kc(e, t, a, l) {
    ja ? ka ? ka.push(l) : ka = [l] : ja = l, t = Ou(t, "onChange"), 0 < t.length && (a = new Yl(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var xi = null, Ti = null;
  function dg(e) {
    jm(e, 0);
  }
  function Hl(e) {
    var t = yi(e);
    if (Cc(t)) return e;
  }
  function Jc(e, t) {
    if (e === "change") return t;
  }
  var Wc = !1;
  if (on) {
    var Uo;
    if (on) {
      var Yo = "oninput" in document;
      if (!Yo) {
        var Pc = document.createElement("div");
        Pc.setAttribute("oninput", "return;"), Yo = typeof Pc.oninput == "function";
      }
      Uo = Yo;
    } else Uo = !1;
    Wc = Uo && (!document.documentMode || 9 < document.documentMode);
  }
  function Fc() {
    xi && (xi.detachEvent("onpropertychange", Ic), Ti = xi = null);
  }
  function Ic(e) {
    if (e.propertyName === "value" && Hl(Ti)) {
      var t = [];
      Kc(
        t,
        Ti,
        e,
        Oo(e)
      ), Rc(dg, t);
    }
  }
  function mg(e, t, a) {
    e === "focusin" ? (Fc(), xi = t, Ti = a, xi.attachEvent("onpropertychange", Ic)) : e === "focusout" && Fc();
  }
  function pg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Hl(Ti);
  }
  function hg(e, t) {
    if (e === "click") return Hl(t);
  }
  function vg(e, t) {
    if (e === "input" || e === "change")
      return Hl(t);
  }
  function gg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ot = typeof Object.is == "function" ? Object.is : gg;
  function Ei(e, t) {
    if (Ot(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var r = a[l];
      if (!ho.call(t, r) || !Ot(e[r], t[r]))
        return !1;
    }
    return !0;
  }
  function ef(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function tf(e, t) {
    var a = ef(e);
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
      a = ef(a);
    }
  }
  function nf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function af(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Dl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Dl(e.document);
    }
    return t;
  }
  function Xo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var yg = on && "documentMode" in document && 11 >= document.documentMode, Na = null, Ho = null, Ai = null, Bo = !1;
  function lf(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Bo || Na == null || Na !== Dl(l) || (l = Na, "selectionStart" in l && Xo(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Ai && Ei(Ai, l) || (Ai = l, l = Ou(Ho, "onSelect"), 0 < l.length && (t = new Yl(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = Na)));
  }
  function aa(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Za = {
    animationend: aa("Animation", "AnimationEnd"),
    animationiteration: aa("Animation", "AnimationIteration"),
    animationstart: aa("Animation", "AnimationStart"),
    transitionrun: aa("Transition", "TransitionRun"),
    transitionstart: aa("Transition", "TransitionStart"),
    transitioncancel: aa("Transition", "TransitionCancel"),
    transitionend: aa("Transition", "TransitionEnd")
  }, qo = {}, uf = {};
  on && (uf = document.createElement("div").style, "AnimationEvent" in window || (delete Za.animationend.animation, delete Za.animationiteration.animation, delete Za.animationstart.animation), "TransitionEvent" in window || delete Za.transitionend.transition);
  function ia(e) {
    if (qo[e]) return qo[e];
    if (!Za[e]) return e;
    var t = Za[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in uf)
        return qo[e] = t[a];
    return e;
  }
  var of = ia("animationend"), rf = ia("animationiteration"), sf = ia("animationstart"), _g = ia("transitionrun"), bg = ia("transitionstart"), Sg = ia("transitioncancel"), cf = ia("transitionend"), ff = /* @__PURE__ */ new Map(), $o = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  $o.push("scrollEnd");
  function Kt(e, t) {
    ff.set(e, t), ta(t, [e]);
  }
  var Bl = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ut = [], Ra = 0, Lo = 0;
  function ql() {
    for (var e = Ra, t = Lo = Ra = 0; t < e; ) {
      var a = Ut[t];
      Ut[t++] = null;
      var l = Ut[t];
      Ut[t++] = null;
      var r = Ut[t];
      Ut[t++] = null;
      var s = Ut[t];
      if (Ut[t++] = null, l !== null && r !== null) {
        var m = l.pending;
        m === null ? r.next = r : (r.next = m.next, m.next = r), l.pending = r;
      }
      s !== 0 && df(a, r, s);
    }
  }
  function $l(e, t, a, l) {
    Ut[Ra++] = e, Ut[Ra++] = t, Ut[Ra++] = a, Ut[Ra++] = l, Lo |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function Vo(e, t, a, l) {
    return $l(e, t, a, l), Ll(e);
  }
  function la(e, t) {
    return $l(e, null, null, t), Ll(e);
  }
  function df(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var r = !1, s = e.return; s !== null; )
      s.childLanes |= a, l = s.alternate, l !== null && (l.childLanes |= a), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & 1 || (r = !0)), e = s, s = s.return;
    return e.tag === 3 ? (s = e.stateNode, r && t !== null && (r = 31 - At(a), e = s.hiddenUpdates, l = e[r], l === null ? e[r] = [t] : l.push(t), t.lane = a | 536870912), s) : null;
  }
  function Ll(e) {
    if (50 < Ji)
      throw Ji = 0, es = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ua = {};
  function zg(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ct(e, t, a, l) {
    return new zg(e, t, a, l);
  }
  function Go(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function rn(e, t) {
    var a = e.alternate;
    return a === null ? (a = Ct(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function mf(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Vl(e, t, a, l, r, s) {
    var m = 0;
    if (l = e, typeof e == "function") Go(e) && (m = 1);
    else if (typeof e == "string")
      m = Ay(
        e,
        a,
        W.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case de:
          return e = Ct(31, a, t, r), e.elementType = de, e.lanes = s, e;
        case B:
          return ua(a.children, r, s, t);
        case H:
          m = 8, r |= 24;
          break;
        case D:
          return e = Ct(12, a, t, r | 2), e.elementType = D, e.lanes = s, e;
        case J:
          return e = Ct(13, a, t, r), e.elementType = J, e.lanes = s, e;
        case ne:
          return e = Ct(19, a, t, r), e.elementType = ne, e.lanes = s, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case $:
                m = 10;
                break e;
              case V:
                m = 9;
                break e;
              case X:
                m = 11;
                break e;
              case q:
                m = 14;
                break e;
              case re:
                m = 16, l = null;
                break e;
            }
          m = 29, a = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Ct(m, a, t, r), t.elementType = e, t.type = l, t.lanes = s, t;
  }
  function ua(e, t, a, l) {
    return e = Ct(7, e, l, t), e.lanes = a, e;
  }
  function Qo(e, t, a) {
    return e = Ct(6, e, null, t), e.lanes = a, e;
  }
  function pf(e) {
    var t = Ct(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Ko(e, t, a) {
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
  var hf = /* @__PURE__ */ new WeakMap();
  function Yt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = hf.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: mc(t)
      }, hf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: mc(t)
    };
  }
  var Ya = [], Xa = 0, Gl = null, Oi = 0, Xt = [], Ht = 0, An = null, en = 1, tn = "";
  function sn(e, t) {
    Ya[Xa++] = Oi, Ya[Xa++] = Gl, Gl = e, Oi = t;
  }
  function vf(e, t, a) {
    Xt[Ht++] = en, Xt[Ht++] = tn, Xt[Ht++] = An, An = e;
    var l = en;
    e = tn;
    var r = 32 - At(l) - 1;
    l &= ~(1 << r), a += 1;
    var s = 32 - At(t) + r;
    if (30 < s) {
      var m = r - r % 5;
      s = (l & (1 << m) - 1).toString(32), l >>= m, r -= m, en = 1 << 32 - At(t) + r | a << r | l, tn = s + e;
    } else
      en = 1 << s | a << r | l, tn = e;
  }
  function Jo(e) {
    e.return !== null && (sn(e, 1), vf(e, 1, 0));
  }
  function Wo(e) {
    for (; e === Gl; )
      Gl = Ya[--Xa], Ya[Xa] = null, Oi = Ya[--Xa], Ya[Xa] = null;
    for (; e === An; )
      An = Xt[--Ht], Xt[Ht] = null, tn = Xt[--Ht], Xt[Ht] = null, en = Xt[--Ht], Xt[Ht] = null;
  }
  function gf(e, t) {
    Xt[Ht++] = en, Xt[Ht++] = tn, Xt[Ht++] = An, en = t.id, tn = t.overflow, An = e;
  }
  var rt = null, Ue = null, Se = !1, On = null, Bt = !1, Po = Error(o(519));
  function Cn(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ci(Yt(t, e)), Po;
  }
  function yf(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[ot] = e, t[gt] = l, a) {
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
        for (a = 0; a < Pi.length; a++)
          pe(Pi[a], t);
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
        pe("invalid", t), Mc(
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
        pe("invalid", t), kc(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Zm(t.textContent, a) ? (l.popover != null && (pe("beforetoggle", t), pe("toggle", t)), l.onScroll != null && pe("scroll", t), l.onScrollEnd != null && pe("scrollend", t), l.onClick != null && (t.onclick = un), t = !0) : t = !1, t || Cn(e, !0);
  }
  function _f(e) {
    for (rt = e.return; rt; )
      switch (rt.tag) {
        case 5:
        case 31:
        case 13:
          Bt = !1;
          return;
        case 27:
        case 3:
          Bt = !0;
          return;
        default:
          rt = rt.return;
      }
  }
  function Ha(e) {
    if (e !== rt) return !1;
    if (!Se) return _f(e), Se = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || hs(e.type, e.memoizedProps)), a = !a), a && Ue && Cn(e), _f(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Ue = Lm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Ue = Lm(e);
    } else
      t === 27 ? (t = Ue, $n(e.type) ? (e = bs, bs = null, Ue = e) : Ue = t) : Ue = rt ? $t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function oa() {
    Ue = rt = null, Se = !1;
  }
  function Fo() {
    var e = On;
    return e !== null && (zt === null ? zt = e : zt.push.apply(
      zt,
      e
    ), On = null), e;
  }
  function Ci(e) {
    On === null ? On = [e] : On.push(e);
  }
  var Io = z(null), ra = null, cn = null;
  function Mn(e, t, a) {
    G(Io, t._currentValue), t._currentValue = a;
  }
  function fn(e) {
    e._currentValue = Io.current, R(Io);
  }
  function er(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function tr(e, t, a, l) {
    var r = e.child;
    for (r !== null && (r.return = e); r !== null; ) {
      var s = r.dependencies;
      if (s !== null) {
        var m = r.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var g = s;
          s = r;
          for (var b = 0; b < t.length; b++)
            if (g.context === t[b]) {
              s.lanes |= a, g = s.alternate, g !== null && (g.lanes |= a), er(
                s.return,
                a,
                e
              ), l || (m = null);
              break e;
            }
          s = g.next;
        }
      } else if (r.tag === 18) {
        if (m = r.return, m === null) throw Error(o(341));
        m.lanes |= a, s = m.alternate, s !== null && (s.lanes |= a), er(m, a, e), m = null;
      } else m = r.child;
      if (m !== null) m.return = r;
      else
        for (m = r; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (r = m.sibling, r !== null) {
            r.return = m.return, m = r;
            break;
          }
          m = m.return;
        }
      r = m;
    }
  }
  function Ba(e, t, a, l) {
    e = null;
    for (var r = t, s = !1; r !== null; ) {
      if (!s) {
        if ((r.flags & 524288) !== 0) s = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var m = r.alternate;
        if (m === null) throw Error(o(387));
        if (m = m.memoizedProps, m !== null) {
          var g = r.type;
          Ot(r.pendingProps.value, m.value) || (e !== null ? e.push(g) : e = [g]);
        }
      } else if (r === xe.current) {
        if (m = r.alternate, m === null) throw Error(o(387));
        m.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(nl) : e = [nl]);
      }
      r = r.return;
    }
    e !== null && tr(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function Ql(e) {
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
  function sa(e) {
    ra = e, cn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function st(e) {
    return bf(ra, e);
  }
  function Kl(e, t) {
    return ra === null && sa(e), bf(e, t);
  }
  function bf(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, cn === null) {
      if (e === null) throw Error(o(308));
      cn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else cn = cn.next = t;
    return a;
  }
  var wg = typeof AbortController < "u" ? AbortController : function() {
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
  }, xg = n.unstable_scheduleCallback, Tg = n.unstable_NormalPriority, Ie = {
    $$typeof: $,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function nr() {
    return {
      controller: new wg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Mi(e) {
    e.refCount--, e.refCount === 0 && xg(Tg, function() {
      e.controller.abort();
    });
  }
  var ji = null, ar = 0, qa = 0, $a = null;
  function Eg(e, t) {
    if (ji === null) {
      var a = ji = [];
      ar = 0, qa = us(), $a = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return ar++, t.then(Sf, Sf), t;
  }
  function Sf() {
    if (--ar === 0 && ji !== null) {
      $a !== null && ($a.status = "fulfilled");
      var e = ji;
      ji = null, qa = 0, $a = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ag(e, t) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        a.push(r);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var r = 0; r < a.length; r++) (0, a[r])(t);
      },
      function(r) {
        for (l.status = "rejected", l.reason = r, r = 0; r < a.length; r++)
          (0, a[r])(void 0);
      }
    ), l;
  }
  var zf = k.S;
  k.S = function(e, t) {
    lm = Tt(), typeof t == "object" && t !== null && typeof t.then == "function" && Eg(e, t), zf !== null && zf(e, t);
  };
  var ca = z(null);
  function ir() {
    var e = ca.current;
    return e !== null ? e : Re.pooledCache;
  }
  function Jl(e, t) {
    t === null ? G(ca, ca.current) : G(ca, t.pool);
  }
  function wf() {
    var e = ir();
    return e === null ? null : { parent: Ie._currentValue, pool: e };
  }
  var La = Error(o(460)), lr = Error(o(474)), Wl = Error(o(542)), Pl = { then: function() {
  } };
  function xf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Tf(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(un, un), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Af(e), e;
      default:
        if (typeof t.status == "string") t.then(un, un);
        else {
          if (e = Re, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var r = t;
                r.status = "fulfilled", r.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var r = t;
                r.status = "rejected", r.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Af(e), e;
        }
        throw da = t, La;
    }
  }
  function fa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (da = a, La) : a;
    }
  }
  var da = null;
  function Ef() {
    if (da === null) throw Error(o(459));
    var e = da;
    return da = null, e;
  }
  function Af(e) {
    if (e === La || e === Wl)
      throw Error(o(483));
  }
  var Va = null, ki = 0;
  function Fl(e) {
    var t = ki;
    return ki += 1, Va === null && (Va = []), Tf(Va, e, t);
  }
  function Di(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Il(e, t) {
    throw t.$$typeof === x ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Of(e) {
    function t(T, w) {
      if (e) {
        var A = T.deletions;
        A === null ? (T.deletions = [w], T.flags |= 16) : A.push(w);
      }
    }
    function a(T, w) {
      if (!e) return null;
      for (; w !== null; )
        t(T, w), w = w.sibling;
      return null;
    }
    function l(T) {
      for (var w = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? w.set(T.key, T) : w.set(T.index, T), T = T.sibling;
      return w;
    }
    function r(T, w) {
      return T = rn(T, w), T.index = 0, T.sibling = null, T;
    }
    function s(T, w, A) {
      return T.index = A, e ? (A = T.alternate, A !== null ? (A = A.index, A < w ? (T.flags |= 67108866, w) : A) : (T.flags |= 67108866, w)) : (T.flags |= 1048576, w);
    }
    function m(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function g(T, w, A, Z) {
      return w === null || w.tag !== 6 ? (w = Qo(A, T.mode, Z), w.return = T, w) : (w = r(w, A), w.return = T, w);
    }
    function b(T, w, A, Z) {
      var ee = A.type;
      return ee === B ? N(
        T,
        w,
        A.props.children,
        Z,
        A.key
      ) : w !== null && (w.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === re && fa(ee) === w.type) ? (w = r(w, A.props), Di(w, A), w.return = T, w) : (w = Vl(
        A.type,
        A.key,
        A.props,
        null,
        T.mode,
        Z
      ), Di(w, A), w.return = T, w);
    }
    function O(T, w, A, Z) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== A.containerInfo || w.stateNode.implementation !== A.implementation ? (w = Ko(A, T.mode, Z), w.return = T, w) : (w = r(w, A.children || []), w.return = T, w);
    }
    function N(T, w, A, Z, ee) {
      return w === null || w.tag !== 7 ? (w = ua(
        A,
        T.mode,
        Z,
        ee
      ), w.return = T, w) : (w = r(w, A), w.return = T, w);
    }
    function Y(T, w, A) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return w = Qo(
          "" + w,
          T.mode,
          A
        ), w.return = T, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case E:
            return A = Vl(
              w.type,
              w.key,
              w.props,
              null,
              T.mode,
              A
            ), Di(A, w), A.return = T, A;
          case M:
            return w = Ko(
              w,
              T.mode,
              A
            ), w.return = T, w;
          case re:
            return w = fa(w), Y(T, w, A);
        }
        if (it(w) || _e(w))
          return w = ua(
            w,
            T.mode,
            A,
            null
          ), w.return = T, w;
        if (typeof w.then == "function")
          return Y(T, Fl(w), A);
        if (w.$$typeof === $)
          return Y(
            T,
            Kl(T, w),
            A
          );
        Il(T, w);
      }
      return null;
    }
    function C(T, w, A, Z) {
      var ee = w !== null ? w.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return ee !== null ? null : g(T, w, "" + A, Z);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case E:
            return A.key === ee ? b(T, w, A, Z) : null;
          case M:
            return A.key === ee ? O(T, w, A, Z) : null;
          case re:
            return A = fa(A), C(T, w, A, Z);
        }
        if (it(A) || _e(A))
          return ee !== null ? null : N(T, w, A, Z, null);
        if (typeof A.then == "function")
          return C(
            T,
            w,
            Fl(A),
            Z
          );
        if (A.$$typeof === $)
          return C(
            T,
            w,
            Kl(T, A),
            Z
          );
        Il(T, A);
      }
      return null;
    }
    function j(T, w, A, Z, ee) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return T = T.get(A) || null, g(w, T, "" + Z, ee);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case E:
            return T = T.get(
              Z.key === null ? A : Z.key
            ) || null, b(w, T, Z, ee);
          case M:
            return T = T.get(
              Z.key === null ? A : Z.key
            ) || null, O(w, T, Z, ee);
          case re:
            return Z = fa(Z), j(
              T,
              w,
              A,
              Z,
              ee
            );
        }
        if (it(Z) || _e(Z))
          return T = T.get(A) || null, N(w, T, Z, ee, null);
        if (typeof Z.then == "function")
          return j(
            T,
            w,
            A,
            Fl(Z),
            ee
          );
        if (Z.$$typeof === $)
          return j(
            T,
            w,
            A,
            Kl(w, Z),
            ee
          );
        Il(w, Z);
      }
      return null;
    }
    function P(T, w, A, Z) {
      for (var ee = null, Te = null, F = w, fe = w = 0, ve = null; F !== null && fe < A.length; fe++) {
        F.index > fe ? (ve = F, F = null) : ve = F.sibling;
        var Ee = C(
          T,
          F,
          A[fe],
          Z
        );
        if (Ee === null) {
          F === null && (F = ve);
          break;
        }
        e && F && Ee.alternate === null && t(T, F), w = s(Ee, w, fe), Te === null ? ee = Ee : Te.sibling = Ee, Te = Ee, F = ve;
      }
      if (fe === A.length)
        return a(T, F), Se && sn(T, fe), ee;
      if (F === null) {
        for (; fe < A.length; fe++)
          F = Y(T, A[fe], Z), F !== null && (w = s(
            F,
            w,
            fe
          ), Te === null ? ee = F : Te.sibling = F, Te = F);
        return Se && sn(T, fe), ee;
      }
      for (F = l(F); fe < A.length; fe++)
        ve = j(
          F,
          T,
          fe,
          A[fe],
          Z
        ), ve !== null && (e && ve.alternate !== null && F.delete(
          ve.key === null ? fe : ve.key
        ), w = s(
          ve,
          w,
          fe
        ), Te === null ? ee = ve : Te.sibling = ve, Te = ve);
      return e && F.forEach(function(Kn) {
        return t(T, Kn);
      }), Se && sn(T, fe), ee;
    }
    function le(T, w, A, Z) {
      if (A == null) throw Error(o(151));
      for (var ee = null, Te = null, F = w, fe = w = 0, ve = null, Ee = A.next(); F !== null && !Ee.done; fe++, Ee = A.next()) {
        F.index > fe ? (ve = F, F = null) : ve = F.sibling;
        var Kn = C(T, F, Ee.value, Z);
        if (Kn === null) {
          F === null && (F = ve);
          break;
        }
        e && F && Kn.alternate === null && t(T, F), w = s(Kn, w, fe), Te === null ? ee = Kn : Te.sibling = Kn, Te = Kn, F = ve;
      }
      if (Ee.done)
        return a(T, F), Se && sn(T, fe), ee;
      if (F === null) {
        for (; !Ee.done; fe++, Ee = A.next())
          Ee = Y(T, Ee.value, Z), Ee !== null && (w = s(Ee, w, fe), Te === null ? ee = Ee : Te.sibling = Ee, Te = Ee);
        return Se && sn(T, fe), ee;
      }
      for (F = l(F); !Ee.done; fe++, Ee = A.next())
        Ee = j(F, T, fe, Ee.value, Z), Ee !== null && (e && Ee.alternate !== null && F.delete(Ee.key === null ? fe : Ee.key), w = s(Ee, w, fe), Te === null ? ee = Ee : Te.sibling = Ee, Te = Ee);
      return e && F.forEach(function(Yy) {
        return t(T, Yy);
      }), Se && sn(T, fe), ee;
    }
    function Ne(T, w, A, Z) {
      if (typeof A == "object" && A !== null && A.type === B && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case E:
            e: {
              for (var ee = A.key; w !== null; ) {
                if (w.key === ee) {
                  if (ee = A.type, ee === B) {
                    if (w.tag === 7) {
                      a(
                        T,
                        w.sibling
                      ), Z = r(
                        w,
                        A.props.children
                      ), Z.return = T, T = Z;
                      break e;
                    }
                  } else if (w.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === re && fa(ee) === w.type) {
                    a(
                      T,
                      w.sibling
                    ), Z = r(w, A.props), Di(Z, A), Z.return = T, T = Z;
                    break e;
                  }
                  a(T, w);
                  break;
                } else t(T, w);
                w = w.sibling;
              }
              A.type === B ? (Z = ua(
                A.props.children,
                T.mode,
                Z,
                A.key
              ), Z.return = T, T = Z) : (Z = Vl(
                A.type,
                A.key,
                A.props,
                null,
                T.mode,
                Z
              ), Di(Z, A), Z.return = T, T = Z);
            }
            return m(T);
          case M:
            e: {
              for (ee = A.key; w !== null; ) {
                if (w.key === ee)
                  if (w.tag === 4 && w.stateNode.containerInfo === A.containerInfo && w.stateNode.implementation === A.implementation) {
                    a(
                      T,
                      w.sibling
                    ), Z = r(w, A.children || []), Z.return = T, T = Z;
                    break e;
                  } else {
                    a(T, w);
                    break;
                  }
                else t(T, w);
                w = w.sibling;
              }
              Z = Ko(A, T.mode, Z), Z.return = T, T = Z;
            }
            return m(T);
          case re:
            return A = fa(A), Ne(
              T,
              w,
              A,
              Z
            );
        }
        if (it(A))
          return P(
            T,
            w,
            A,
            Z
          );
        if (_e(A)) {
          if (ee = _e(A), typeof ee != "function") throw Error(o(150));
          return A = ee.call(A), le(
            T,
            w,
            A,
            Z
          );
        }
        if (typeof A.then == "function")
          return Ne(
            T,
            w,
            Fl(A),
            Z
          );
        if (A.$$typeof === $)
          return Ne(
            T,
            w,
            Kl(T, A),
            Z
          );
        Il(T, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, w !== null && w.tag === 6 ? (a(T, w.sibling), Z = r(w, A), Z.return = T, T = Z) : (a(T, w), Z = Qo(A, T.mode, Z), Z.return = T, T = Z), m(T)) : a(T, w);
    }
    return function(T, w, A, Z) {
      try {
        ki = 0;
        var ee = Ne(
          T,
          w,
          A,
          Z
        );
        return Va = null, ee;
      } catch (F) {
        if (F === La || F === Wl) throw F;
        var Te = Ct(29, F, null, T.mode);
        return Te.lanes = Z, Te.return = T, Te;
      }
    };
  }
  var ma = Of(!0), Cf = Of(!1), jn = !1;
  function ur(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function or(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function kn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Dn(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Oe & 2) !== 0) {
      var r = l.pending;
      return r === null ? t.next = t : (t.next = r.next, r.next = t), l.pending = t, t = Ll(e), df(e, null, a), t;
    }
    return $l(e, l, t, a), Ll(e);
  }
  function Ni(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, _c(e, a);
    }
  }
  function rr(e, t) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var r = null, s = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var m = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          s === null ? r = s = m : s = s.next = m, a = a.next;
        } while (a !== null);
        s === null ? r = s = t : s = s.next = t;
      } else r = s = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: s,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var sr = !1;
  function Zi() {
    if (sr) {
      var e = $a;
      if (e !== null) throw e;
    }
  }
  function Ri(e, t, a, l) {
    sr = !1;
    var r = e.updateQueue;
    jn = !1;
    var s = r.firstBaseUpdate, m = r.lastBaseUpdate, g = r.shared.pending;
    if (g !== null) {
      r.shared.pending = null;
      var b = g, O = b.next;
      b.next = null, m === null ? s = O : m.next = O, m = b;
      var N = e.alternate;
      N !== null && (N = N.updateQueue, g = N.lastBaseUpdate, g !== m && (g === null ? N.firstBaseUpdate = O : g.next = O, N.lastBaseUpdate = b));
    }
    if (s !== null) {
      var Y = r.baseState;
      m = 0, N = O = b = null, g = s;
      do {
        var C = g.lane & -536870913, j = C !== g.lane;
        if (j ? (he & C) === C : (l & C) === C) {
          C !== 0 && C === qa && (sr = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var P = e, le = g;
            C = t;
            var Ne = a;
            switch (le.tag) {
              case 1:
                if (P = le.payload, typeof P == "function") {
                  Y = P.call(Ne, Y, C);
                  break e;
                }
                Y = P;
                break e;
              case 3:
                P.flags = P.flags & -65537 | 128;
              case 0:
                if (P = le.payload, C = typeof P == "function" ? P.call(Ne, Y, C) : P, C == null) break e;
                Y = S({}, Y, C);
                break e;
              case 2:
                jn = !0;
            }
          }
          C = g.callback, C !== null && (e.flags |= 64, j && (e.flags |= 8192), j = r.callbacks, j === null ? r.callbacks = [C] : j.push(C));
        } else
          j = {
            lane: C,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, N === null ? (O = N = j, b = Y) : N = N.next = j, m |= C;
        if (g = g.next, g === null) {
          if (g = r.shared.pending, g === null)
            break;
          j = g, g = j.next, j.next = null, r.lastBaseUpdate = j, r.shared.pending = null;
        }
      } while (!0);
      N === null && (b = Y), r.baseState = b, r.firstBaseUpdate = O, r.lastBaseUpdate = N, s === null && (r.shared.lanes = 0), Yn |= m, e.lanes = m, e.memoizedState = Y;
    }
  }
  function Mf(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function jf(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Mf(a[e], t);
  }
  var Ga = z(null), eu = z(0);
  function kf(e, t) {
    e = bn, G(eu, e), G(Ga, t), bn = e | t.baseLanes;
  }
  function cr() {
    G(eu, bn), G(Ga, Ga.current);
  }
  function fr() {
    bn = eu.current, R(Ga), R(eu);
  }
  var Mt = z(null), qt = null;
  function Nn(e) {
    var t = e.alternate;
    G(We, We.current & 1), G(Mt, e), qt === null && (t === null || Ga.current !== null || t.memoizedState !== null) && (qt = e);
  }
  function dr(e) {
    G(We, We.current), G(Mt, e), qt === null && (qt = e);
  }
  function Df(e) {
    e.tag === 22 ? (G(We, We.current), G(Mt, e), qt === null && (qt = e)) : Zn();
  }
  function Zn() {
    G(We, We.current), G(Mt, Mt.current);
  }
  function jt(e) {
    R(Mt), qt === e && (qt = null), R(We);
  }
  var We = z(0);
  function tu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || ys(a) || _s(a)))
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
  var dn = 0, se = null, ke = null, et = null, nu = !1, Qa = !1, pa = !1, au = 0, Ui = 0, Ka = null, Og = 0;
  function Ve() {
    throw Error(o(321));
  }
  function mr(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Ot(e[a], t[a])) return !1;
    return !0;
  }
  function pr(e, t, a, l, r, s) {
    return dn = s, se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, k.H = e === null || e.memoizedState === null ? vd : Cr, pa = !1, s = a(l, r), pa = !1, Qa && (s = Zf(
      t,
      a,
      l,
      r
    )), Nf(e), s;
  }
  function Nf(e) {
    k.H = Hi;
    var t = ke !== null && ke.next !== null;
    if (dn = 0, et = ke = se = null, nu = !1, Ui = 0, Ka = null, t) throw Error(o(300));
    e === null || tt || (e = e.dependencies, e !== null && Ql(e) && (tt = !0));
  }
  function Zf(e, t, a, l) {
    se = e;
    var r = 0;
    do {
      if (Qa && (Ka = null), Ui = 0, Qa = !1, 25 <= r) throw Error(o(301));
      if (r += 1, et = ke = null, e.updateQueue != null) {
        var s = e.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      k.H = gd, s = t(a, l);
    } while (Qa);
    return s;
  }
  function Cg() {
    var e = k.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Yi(t) : t, e = e.useState()[0], (ke !== null ? ke.memoizedState : null) !== e && (se.flags |= 1024), t;
  }
  function hr() {
    var e = au !== 0;
    return au = 0, e;
  }
  function vr(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function gr(e) {
    if (nu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      nu = !1;
    }
    dn = 0, et = ke = se = null, Qa = !1, Ui = au = 0, Ka = null;
  }
  function pt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return et === null ? se.memoizedState = et = e : et = et.next = e, et;
  }
  function Pe() {
    if (ke === null) {
      var e = se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ke.next;
    var t = et === null ? se.memoizedState : et.next;
    if (t !== null)
      et = t, ke = e;
    else {
      if (e === null)
        throw se.alternate === null ? Error(o(467)) : Error(o(310));
      ke = e, e = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null
      }, et === null ? se.memoizedState = et = e : et = et.next = e;
    }
    return et;
  }
  function iu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Yi(e) {
    var t = Ui;
    return Ui += 1, Ka === null && (Ka = []), e = Tf(Ka, e, t), t = se, (et === null ? t.memoizedState : et.next) === null && (t = t.alternate, k.H = t === null || t.memoizedState === null ? vd : Cr), e;
  }
  function lu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Yi(e);
      if (e.$$typeof === $) return st(e);
    }
    throw Error(o(438, String(e)));
  }
  function yr(e) {
    var t = null, a = se.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = se.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = iu(), se.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = ge;
    return t.index++, a;
  }
  function mn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function uu(e) {
    var t = Pe();
    return _r(t, ke, e);
  }
  function _r(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = a;
    var r = e.baseQueue, s = l.pending;
    if (s !== null) {
      if (r !== null) {
        var m = r.next;
        r.next = s.next, s.next = m;
      }
      t.baseQueue = r = s, l.pending = null;
    }
    if (s = e.baseState, r === null) e.memoizedState = s;
    else {
      t = r.next;
      var g = m = null, b = null, O = t, N = !1;
      do {
        var Y = O.lane & -536870913;
        if (Y !== O.lane ? (he & Y) === Y : (dn & Y) === Y) {
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
            }), Y === qa && (N = !0);
          else if ((dn & C) === C) {
            O = O.next, C === qa && (N = !0);
            continue;
          } else
            Y = {
              lane: 0,
              revertLane: O.revertLane,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }, b === null ? (g = b = Y, m = s) : b = b.next = Y, se.lanes |= C, Yn |= C;
          Y = O.action, pa && a(s, Y), s = O.hasEagerState ? O.eagerState : a(s, Y);
        } else
          C = {
            lane: Y,
            revertLane: O.revertLane,
            gesture: O.gesture,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }, b === null ? (g = b = C, m = s) : b = b.next = C, se.lanes |= Y, Yn |= Y;
        O = O.next;
      } while (O !== null && O !== t);
      if (b === null ? m = s : b.next = g, !Ot(s, e.memoizedState) && (tt = !0, N && (a = $a, a !== null)))
        throw a;
      e.memoizedState = s, e.baseState = m, e.baseQueue = b, l.lastRenderedState = s;
    }
    return r === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function br(e) {
    var t = Pe(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, r = a.pending, s = t.memoizedState;
    if (r !== null) {
      a.pending = null;
      var m = r = r.next;
      do
        s = e(s, m.action), m = m.next;
      while (m !== r);
      Ot(s, t.memoizedState) || (tt = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), a.lastRenderedState = s;
    }
    return [s, l];
  }
  function Rf(e, t, a) {
    var l = se, r = Pe(), s = Se;
    if (s) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var m = !Ot(
      (ke || r).memoizedState,
      a
    );
    if (m && (r.memoizedState = a, tt = !0), r = r.queue, wr(Xf.bind(null, l, r, e), [
      e
    ]), r.getSnapshot !== t || m || et !== null && et.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ja(
        9,
        { destroy: void 0 },
        Yf.bind(
          null,
          l,
          r,
          a,
          t
        ),
        null
      ), Re === null) throw Error(o(349));
      s || (dn & 127) !== 0 || Uf(l, t, a);
    }
    return a;
  }
  function Uf(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = se.updateQueue, t === null ? (t = iu(), se.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Yf(e, t, a, l) {
    t.value = a, t.getSnapshot = l, Hf(t) && Bf(e);
  }
  function Xf(e, t, a) {
    return a(function() {
      Hf(t) && Bf(e);
    });
  }
  function Hf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Ot(e, a);
    } catch {
      return !0;
    }
  }
  function Bf(e) {
    var t = la(e, 2);
    t !== null && wt(t, e, 2);
  }
  function Sr(e) {
    var t = pt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), pa) {
        xn(!0);
        try {
          a();
        } finally {
          xn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: mn,
      lastRenderedState: e
    }, t;
  }
  function qf(e, t, a, l) {
    return e.baseState = a, _r(
      e,
      ke,
      typeof l == "function" ? l : mn
    );
  }
  function Mg(e, t, a, l, r) {
    if (su(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var s = {
        payload: r,
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
      k.T !== null ? a(!0) : s.isTransition = !1, l(s), a = t.pending, a === null ? (s.next = t.pending = s, $f(t, s)) : (s.next = a.next, t.pending = a.next = s);
    }
  }
  function $f(e, t) {
    var a = t.action, l = t.payload, r = e.state;
    if (t.isTransition) {
      var s = k.T, m = {};
      k.T = m;
      try {
        var g = a(r, l), b = k.S;
        b !== null && b(m, g), Lf(e, t, g);
      } catch (O) {
        zr(e, t, O);
      } finally {
        s !== null && m.types !== null && (s.types = m.types), k.T = s;
      }
    } else
      try {
        s = a(r, l), Lf(e, t, s);
      } catch (O) {
        zr(e, t, O);
      }
  }
  function Lf(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        Vf(e, t, l);
      },
      function(l) {
        return zr(e, t, l);
      }
    ) : Vf(e, t, a);
  }
  function Vf(e, t, a) {
    t.status = "fulfilled", t.value = a, Gf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, $f(e, a)));
  }
  function zr(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, Gf(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Gf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Qf(e, t) {
    return t;
  }
  function Kf(e, t) {
    if (Se) {
      var a = Re.formState;
      if (a !== null) {
        e: {
          var l = se;
          if (Se) {
            if (Ue) {
              t: {
                for (var r = Ue, s = Bt; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break t;
                  }
                  if (r = $t(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break t;
                  }
                }
                s = r.data, r = s === "F!" || s === "F" ? r : null;
              }
              if (r) {
                Ue = $t(
                  r.nextSibling
                ), l = r.data === "F!";
                break e;
              }
            }
            Cn(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = pt(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qf,
      lastRenderedState: t
    }, a.queue = l, a = md.bind(
      null,
      se,
      l
    ), l.dispatch = a, l = Sr(!1), s = Or.bind(
      null,
      se,
      !1,
      l.queue
    ), l = pt(), r = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = r, a = Mg.bind(
      null,
      se,
      r,
      s,
      a
    ), r.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function Jf(e) {
    var t = Pe();
    return Wf(t, ke, e);
  }
  function Wf(e, t, a) {
    if (t = _r(
      e,
      t,
      Qf
    )[0], e = uu(mn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Yi(t);
      } catch (m) {
        throw m === La ? Wl : m;
      }
    else l = t;
    t = Pe();
    var r = t.queue, s = r.dispatch;
    return a !== t.memoizedState && (se.flags |= 2048, Ja(
      9,
      { destroy: void 0 },
      jg.bind(null, r, a),
      null
    )), [l, s, e];
  }
  function jg(e, t) {
    e.action = t;
  }
  function Pf(e) {
    var t = Pe(), a = ke;
    if (a !== null)
      return Wf(t, a, e);
    Pe(), t = t.memoizedState, a = Pe();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function Ja(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = se.updateQueue, t === null && (t = iu(), se.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Ff() {
    return Pe().memoizedState;
  }
  function ou(e, t, a, l) {
    var r = pt();
    se.flags |= e, r.memoizedState = Ja(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function ru(e, t, a, l) {
    var r = Pe();
    l = l === void 0 ? null : l;
    var s = r.memoizedState.inst;
    ke !== null && l !== null && mr(l, ke.memoizedState.deps) ? r.memoizedState = Ja(t, s, a, l) : (se.flags |= e, r.memoizedState = Ja(
      1 | t,
      s,
      a,
      l
    ));
  }
  function If(e, t) {
    ou(8390656, 8, e, t);
  }
  function wr(e, t) {
    ru(2048, 8, e, t);
  }
  function kg(e) {
    se.flags |= 4;
    var t = se.updateQueue;
    if (t === null)
      t = iu(), se.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function ed(e) {
    var t = Pe().memoizedState;
    return kg({ ref: t, nextImpl: e }), function() {
      if ((Oe & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function td(e, t) {
    return ru(4, 2, e, t);
  }
  function nd(e, t) {
    return ru(4, 4, e, t);
  }
  function ad(e, t) {
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
  function id(e, t, a) {
    a = a != null ? a.concat([e]) : null, ru(4, 4, ad.bind(null, t, e), a);
  }
  function xr() {
  }
  function ld(e, t) {
    var a = Pe();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && mr(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function ud(e, t) {
    var a = Pe();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && mr(t, l[1]))
      return l[0];
    if (l = e(), pa) {
      xn(!0);
      try {
        e();
      } finally {
        xn(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Tr(e, t, a) {
    return a === void 0 || (dn & 1073741824) !== 0 && (he & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = om(), se.lanes |= e, Yn |= e, a);
  }
  function od(e, t, a, l) {
    return Ot(a, t) ? a : Ga.current !== null ? (e = Tr(e, a, l), Ot(e, t) || (tt = !0), e) : (dn & 42) === 0 || (dn & 1073741824) !== 0 && (he & 261930) === 0 ? (tt = !0, e.memoizedState = a) : (e = om(), se.lanes |= e, Yn |= e, t);
  }
  function rd(e, t, a, l, r) {
    var s = L.p;
    L.p = s !== 0 && 8 > s ? s : 8;
    var m = k.T, g = {};
    k.T = g, Or(e, !1, t, a);
    try {
      var b = r(), O = k.S;
      if (O !== null && O(g, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var N = Ag(
          b,
          l
        );
        Xi(
          e,
          t,
          N,
          Nt(e)
        );
      } else
        Xi(
          e,
          t,
          l,
          Nt(e)
        );
    } catch (Y) {
      Xi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Y },
        Nt()
      );
    } finally {
      L.p = s, m !== null && g.types !== null && (m.types = g.types), k.T = m;
    }
  }
  function Dg() {
  }
  function Er(e, t, a, l) {
    if (e.tag !== 5) throw Error(o(476));
    var r = sd(e).queue;
    rd(
      e,
      r,
      t,
      I,
      a === null ? Dg : function() {
        return cd(e), a(l);
      }
    );
  }
  function sd(e) {
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
        lastRenderedReducer: mn,
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
        lastRenderedReducer: mn,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function cd(e) {
    var t = sd(e);
    t.next === null && (t = e.alternate.memoizedState), Xi(
      e,
      t.next.queue,
      {},
      Nt()
    );
  }
  function Ar() {
    return st(nl);
  }
  function fd() {
    return Pe().memoizedState;
  }
  function dd() {
    return Pe().memoizedState;
  }
  function Ng(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Nt();
          e = kn(a);
          var l = Dn(t, e, a);
          l !== null && (wt(l, t, a), Ni(l, t, a)), t = { cache: nr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Zg(e, t, a) {
    var l = Nt();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, su(e) ? pd(t, a) : (a = Vo(e, t, a, l), a !== null && (wt(a, e, l), hd(a, t, l)));
  }
  function md(e, t, a) {
    var l = Nt();
    Xi(e, t, a, l);
  }
  function Xi(e, t, a, l) {
    var r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (su(e)) pd(t, r);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null))
        try {
          var m = t.lastRenderedState, g = s(m, a);
          if (r.hasEagerState = !0, r.eagerState = g, Ot(g, m))
            return $l(e, t, r, 0), Re === null && ql(), !1;
        } catch {
        }
      if (a = Vo(e, t, r, l), a !== null)
        return wt(a, e, l), hd(a, t, l), !0;
    }
    return !1;
  }
  function Or(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: us(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, su(e)) {
      if (t) throw Error(o(479));
    } else
      t = Vo(
        e,
        a,
        l,
        2
      ), t !== null && wt(t, e, 2);
  }
  function su(e) {
    var t = e.alternate;
    return e === se || t !== null && t === se;
  }
  function pd(e, t) {
    Qa = nu = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function hd(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, _c(e, a);
    }
  }
  var Hi = {
    readContext: st,
    use: lu,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useLayoutEffect: Ve,
    useInsertionEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
    useHostTransitionStatus: Ve,
    useFormState: Ve,
    useActionState: Ve,
    useOptimistic: Ve,
    useMemoCache: Ve,
    useCacheRefresh: Ve
  };
  Hi.useEffectEvent = Ve;
  var vd = {
    readContext: st,
    use: lu,
    useCallback: function(e, t) {
      return pt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: st,
    useEffect: If,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, ou(
        4194308,
        4,
        ad.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return ou(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      ou(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = pt();
      t = t === void 0 ? null : t;
      var l = e();
      if (pa) {
        xn(!0);
        try {
          e();
        } finally {
          xn(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = pt();
      if (a !== void 0) {
        var r = a(t);
        if (pa) {
          xn(!0);
          try {
            a(t);
          } finally {
            xn(!1);
          }
        }
      } else r = t;
      return l.memoizedState = l.baseState = r, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: r
      }, l.queue = e, e = e.dispatch = Zg.bind(
        null,
        se,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = pt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Sr(e);
      var t = e.queue, a = md.bind(null, se, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: xr,
    useDeferredValue: function(e, t) {
      var a = pt();
      return Tr(a, e, t);
    },
    useTransition: function() {
      var e = Sr(!1);
      return e = rd.bind(
        null,
        se,
        e.queue,
        !0,
        !1
      ), pt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = se, r = pt();
      if (Se) {
        if (a === void 0)
          throw Error(o(407));
        a = a();
      } else {
        if (a = t(), Re === null)
          throw Error(o(349));
        (he & 127) !== 0 || Uf(l, t, a);
      }
      r.memoizedState = a;
      var s = { value: a, getSnapshot: t };
      return r.queue = s, If(Xf.bind(null, l, s, e), [
        e
      ]), l.flags |= 2048, Ja(
        9,
        { destroy: void 0 },
        Yf.bind(
          null,
          l,
          s,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = pt(), t = Re.identifierPrefix;
      if (Se) {
        var a = tn, l = en;
        a = (l & ~(1 << 32 - At(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = au++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Og++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ar,
    useFormState: Kf,
    useActionState: Kf,
    useOptimistic: function(e) {
      var t = pt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Or.bind(
        null,
        se,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: yr,
    useCacheRefresh: function() {
      return pt().memoizedState = Ng.bind(
        null,
        se
      );
    },
    useEffectEvent: function(e) {
      var t = pt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Oe & 2) !== 0)
          throw Error(o(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Cr = {
    readContext: st,
    use: lu,
    useCallback: ld,
    useContext: st,
    useEffect: wr,
    useImperativeHandle: id,
    useInsertionEffect: td,
    useLayoutEffect: nd,
    useMemo: ud,
    useReducer: uu,
    useRef: Ff,
    useState: function() {
      return uu(mn);
    },
    useDebugValue: xr,
    useDeferredValue: function(e, t) {
      var a = Pe();
      return od(
        a,
        ke.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = uu(mn)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Yi(e),
        t
      ];
    },
    useSyncExternalStore: Rf,
    useId: fd,
    useHostTransitionStatus: Ar,
    useFormState: Jf,
    useActionState: Jf,
    useOptimistic: function(e, t) {
      var a = Pe();
      return qf(a, ke, e, t);
    },
    useMemoCache: yr,
    useCacheRefresh: dd
  };
  Cr.useEffectEvent = ed;
  var gd = {
    readContext: st,
    use: lu,
    useCallback: ld,
    useContext: st,
    useEffect: wr,
    useImperativeHandle: id,
    useInsertionEffect: td,
    useLayoutEffect: nd,
    useMemo: ud,
    useReducer: br,
    useRef: Ff,
    useState: function() {
      return br(mn);
    },
    useDebugValue: xr,
    useDeferredValue: function(e, t) {
      var a = Pe();
      return ke === null ? Tr(a, e, t) : od(
        a,
        ke.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = br(mn)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Yi(e),
        t
      ];
    },
    useSyncExternalStore: Rf,
    useId: fd,
    useHostTransitionStatus: Ar,
    useFormState: Pf,
    useActionState: Pf,
    useOptimistic: function(e, t) {
      var a = Pe();
      return ke !== null ? qf(a, ke, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: yr,
    useCacheRefresh: dd
  };
  gd.useEffectEvent = ed;
  function Mr(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : S({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var jr = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Nt(), r = kn(l);
      r.payload = t, a != null && (r.callback = a), t = Dn(e, r, l), t !== null && (wt(t, e, l), Ni(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Nt(), r = kn(l);
      r.tag = 1, r.payload = t, a != null && (r.callback = a), t = Dn(e, r, l), t !== null && (wt(t, e, l), Ni(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Nt(), l = kn(a);
      l.tag = 2, t != null && (l.callback = t), t = Dn(e, l, a), t !== null && (wt(t, e, a), Ni(t, e, a));
    }
  };
  function yd(e, t, a, l, r, s, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, s, m) : t.prototype && t.prototype.isPureReactComponent ? !Ei(a, l) || !Ei(r, s) : !0;
  }
  function _d(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && jr.enqueueReplaceState(t, t.state, null);
  }
  function ha(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t)
        l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = S({}, a));
      for (var r in e)
        a[r] === void 0 && (a[r] = e[r]);
    }
    return a;
  }
  function bd(e) {
    Bl(e);
  }
  function Sd(e) {
    console.error(e);
  }
  function zd(e) {
    Bl(e);
  }
  function cu(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function wd(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function kr(e, t, a) {
    return a = kn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      cu(e, t);
    }, a;
  }
  function xd(e) {
    return e = kn(e), e.tag = 3, e;
  }
  function Td(e, t, a, l) {
    var r = a.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = l.value;
      e.payload = function() {
        return r(s);
      }, e.callback = function() {
        wd(t, a, l);
      };
    }
    var m = a.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
      wd(t, a, l), typeof r != "function" && (Xn === null ? Xn = /* @__PURE__ */ new Set([this]) : Xn.add(this));
      var g = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function Rg(e, t, a, l, r) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Ba(
        t,
        a,
        r,
        !0
      ), a = Mt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return qt === null ? zu() : a.alternate === null && Ge === 0 && (Ge = 3), a.flags &= -257, a.flags |= 65536, a.lanes = r, l === Pl ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), as(e, l, r)), !1;
          case 22:
            return a.flags |= 65536, l === Pl ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), as(e, l, r)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return as(e, l, r), zu(), !1;
    }
    if (Se)
      return t = Mt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = r, l !== Po && (e = Error(o(422), { cause: l }), Ci(Yt(e, a)))) : (l !== Po && (t = Error(o(423), {
        cause: l
      }), Ci(
        Yt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, r &= -r, e.lanes |= r, l = Yt(l, a), r = kr(
        e.stateNode,
        l,
        r
      ), rr(e, r), Ge !== 4 && (Ge = 2)), !1;
    var s = Error(o(520), { cause: l });
    if (s = Yt(s, a), Ki === null ? Ki = [s] : Ki.push(s), Ge !== 4 && (Ge = 2), t === null) return !0;
    l = Yt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = r & -r, a.lanes |= e, e = kr(a.stateNode, l, e), rr(a, e), !1;
        case 1:
          if (t = a.type, s = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Xn === null || !Xn.has(s))))
            return a.flags |= 65536, r &= -r, a.lanes |= r, r = xd(r), Td(
              r,
              e,
              a,
              l
            ), rr(a, r), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Dr = Error(o(461)), tt = !1;
  function ct(e, t, a, l) {
    t.child = e === null ? Cf(t, null, a, l) : ma(
      t,
      e.child,
      a,
      l
    );
  }
  function Ed(e, t, a, l, r) {
    a = a.render;
    var s = t.ref;
    if ("ref" in l) {
      var m = {};
      for (var g in l)
        g !== "ref" && (m[g] = l[g]);
    } else m = l;
    return sa(t), l = pr(
      e,
      t,
      a,
      m,
      s,
      r
    ), g = hr(), e !== null && !tt ? (vr(e, t, r), pn(e, t, r)) : (Se && g && Jo(t), t.flags |= 1, ct(e, t, l, r), t.child);
  }
  function Ad(e, t, a, l, r) {
    if (e === null) {
      var s = a.type;
      return typeof s == "function" && !Go(s) && s.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = s, Od(
        e,
        t,
        s,
        l,
        r
      )) : (e = Vl(
        a.type,
        null,
        l,
        t,
        t.mode,
        r
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, !Br(e, r)) {
      var m = s.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ei, a(m, l) && e.ref === t.ref)
        return pn(e, t, r);
    }
    return t.flags |= 1, e = rn(s, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Od(e, t, a, l, r) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Ei(s, l) && e.ref === t.ref)
        if (tt = !1, t.pendingProps = l = s, Br(e, r))
          (e.flags & 131072) !== 0 && (tt = !0);
        else
          return t.lanes = e.lanes, pn(e, t, r);
    }
    return Nr(
      e,
      t,
      a,
      l,
      r
    );
  }
  function Cd(e, t, a, l) {
    var r = l.children, s = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | a : a, e !== null) {
          for (l = t.child = e.child, r = 0; l !== null; )
            r = r | l.lanes | l.childLanes, l = l.sibling;
          l = r & ~s;
        } else l = 0, t.child = null;
        return Md(
          e,
          t,
          s,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Jl(
          t,
          s !== null ? s.cachePool : null
        ), s !== null ? kf(t, s) : cr(), Df(t);
      else
        return l = t.lanes = 536870912, Md(
          e,
          t,
          s !== null ? s.baseLanes | a : a,
          a,
          l
        );
    } else
      s !== null ? (Jl(t, s.cachePool), kf(t, s), Zn(), t.memoizedState = null) : (e !== null && Jl(t, null), cr(), Zn());
    return ct(e, t, r, a), t.child;
  }
  function Bi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Md(e, t, a, l, r) {
    var s = ir();
    return s = s === null ? null : { parent: Ie._currentValue, pool: s }, t.memoizedState = {
      baseLanes: a,
      cachePool: s
    }, e !== null && Jl(t, null), cr(), Df(t), e !== null && Ba(e, t, l, !0), t.childLanes = r, null;
  }
  function fu(e, t) {
    return t = mu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function jd(e, t, a) {
    return ma(t, e.child, null, a), e = fu(t, t.pendingProps), e.flags |= 2, jt(t), t.memoizedState = null, e;
  }
  function Ug(e, t, a) {
    var l = t.pendingProps, r = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Se) {
        if (l.mode === "hidden")
          return e = fu(t, l), t.lanes = 536870912, Bi(null, e);
        if (dr(t), (e = Ue) ? (e = $m(
          e,
          Bt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: An !== null ? { id: en, overflow: tn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = pf(e), a.return = t, t.child = a, rt = t, Ue = null)) : e = null, e === null) throw Cn(t);
        return t.lanes = 536870912, null;
      }
      return fu(t, l);
    }
    var s = e.memoizedState;
    if (s !== null) {
      var m = s.dehydrated;
      if (dr(t), r)
        if (t.flags & 256)
          t.flags &= -257, t = jd(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (tt || Ba(e, t, a, !1), r = (a & e.childLanes) !== 0, tt || r) {
        if (l = Re, l !== null && (m = bc(l, a), m !== 0 && m !== s.retryLane))
          throw s.retryLane = m, la(e, m), wt(l, e, m), Dr;
        zu(), t = jd(
          e,
          t,
          a
        );
      } else
        e = s.treeContext, Ue = $t(m.nextSibling), rt = t, Se = !0, On = null, Bt = !1, e !== null && gf(t, e), t = fu(t, l), t.flags |= 4096;
      return t;
    }
    return e = rn(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function du(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Nr(e, t, a, l, r) {
    return sa(t), a = pr(
      e,
      t,
      a,
      l,
      void 0,
      r
    ), l = hr(), e !== null && !tt ? (vr(e, t, r), pn(e, t, r)) : (Se && l && Jo(t), t.flags |= 1, ct(e, t, a, r), t.child);
  }
  function kd(e, t, a, l, r, s) {
    return sa(t), t.updateQueue = null, a = Zf(
      t,
      l,
      a,
      r
    ), Nf(e), l = hr(), e !== null && !tt ? (vr(e, t, s), pn(e, t, s)) : (Se && l && Jo(t), t.flags |= 1, ct(e, t, a, s), t.child);
  }
  function Dd(e, t, a, l, r) {
    if (sa(t), t.stateNode === null) {
      var s = Ua, m = a.contextType;
      typeof m == "object" && m !== null && (s = st(m)), s = new a(l, s), t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = jr, t.stateNode = s, s._reactInternals = t, s = t.stateNode, s.props = l, s.state = t.memoizedState, s.refs = {}, ur(t), m = a.contextType, s.context = typeof m == "object" && m !== null ? st(m) : Ua, s.state = t.memoizedState, m = a.getDerivedStateFromProps, typeof m == "function" && (Mr(
        t,
        a,
        m,
        l
      ), s.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (m = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), m !== s.state && jr.enqueueReplaceState(s, s.state, null), Ri(t, l, s, r), Zi(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      s = t.stateNode;
      var g = t.memoizedProps, b = ha(a, g);
      s.props = b;
      var O = s.context, N = a.contextType;
      m = Ua, typeof N == "object" && N !== null && (m = st(N));
      var Y = a.getDerivedStateFromProps;
      N = typeof Y == "function" || typeof s.getSnapshotBeforeUpdate == "function", g = t.pendingProps !== g, N || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g || O !== m) && _d(
        t,
        s,
        l,
        m
      ), jn = !1;
      var C = t.memoizedState;
      s.state = C, Ri(t, l, s, r), Zi(), O = t.memoizedState, g || C !== O || jn ? (typeof Y == "function" && (Mr(
        t,
        a,
        Y,
        l
      ), O = t.memoizedState), (b = jn || yd(
        t,
        a,
        b,
        l,
        C,
        O,
        m
      )) ? (N || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = O), s.props = l, s.state = O, s.context = m, l = b) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      s = t.stateNode, or(e, t), m = t.memoizedProps, N = ha(a, m), s.props = N, Y = t.pendingProps, C = s.context, O = a.contextType, b = Ua, typeof O == "object" && O !== null && (b = st(O)), g = a.getDerivedStateFromProps, (O = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== Y || C !== b) && _d(
        t,
        s,
        l,
        b
      ), jn = !1, C = t.memoizedState, s.state = C, Ri(t, l, s, r), Zi();
      var j = t.memoizedState;
      m !== Y || C !== j || jn || e !== null && e.dependencies !== null && Ql(e.dependencies) ? (typeof g == "function" && (Mr(
        t,
        a,
        g,
        l
      ), j = t.memoizedState), (N = jn || yd(
        t,
        a,
        N,
        l,
        C,
        j,
        b
      ) || e !== null && e.dependencies !== null && Ql(e.dependencies)) ? (O || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(l, j, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        l,
        j,
        b
      )), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = j), s.props = l, s.state = j, s.context = b, l = N) : (typeof s.componentDidUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return s = l, du(e, t), l = (t.flags & 128) !== 0, s || l ? (s = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : s.render(), t.flags |= 1, e !== null && l ? (t.child = ma(
      t,
      e.child,
      null,
      r
    ), t.child = ma(
      t,
      null,
      a,
      r
    )) : ct(e, t, a, r), t.memoizedState = s.state, e = t.child) : e = pn(
      e,
      t,
      r
    ), e;
  }
  function Nd(e, t, a, l) {
    return oa(), t.flags |= 256, ct(e, t, a, l), t.child;
  }
  var Zr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Rr(e) {
    return { baseLanes: e, cachePool: wf() };
  }
  function Ur(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Dt), e;
  }
  function Zd(e, t, a) {
    var l = t.pendingProps, r = !1, s = (t.flags & 128) !== 0, m;
    if ((m = s) || (m = e !== null && e.memoizedState === null ? !1 : (We.current & 2) !== 0), m && (r = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Se) {
        if (r ? Nn(t) : Zn(), (e = Ue) ? (e = $m(
          e,
          Bt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: An !== null ? { id: en, overflow: tn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = pf(e), a.return = t, t.child = a, rt = t, Ue = null)) : e = null, e === null) throw Cn(t);
        return _s(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var g = l.children;
      return l = l.fallback, r ? (Zn(), r = t.mode, g = mu(
        { mode: "hidden", children: g },
        r
      ), l = ua(
        l,
        r,
        a,
        null
      ), g.return = t, l.return = t, g.sibling = l, t.child = g, l = t.child, l.memoizedState = Rr(a), l.childLanes = Ur(
        e,
        m,
        a
      ), t.memoizedState = Zr, Bi(null, l)) : (Nn(t), Yr(t, g));
    }
    var b = e.memoizedState;
    if (b !== null && (g = b.dehydrated, g !== null)) {
      if (s)
        t.flags & 256 ? (Nn(t), t.flags &= -257, t = Xr(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Zn(), t.child = e.child, t.flags |= 128, t = null) : (Zn(), g = l.fallback, r = t.mode, l = mu(
          { mode: "visible", children: l.children },
          r
        ), g = ua(
          g,
          r,
          a,
          null
        ), g.flags |= 2, l.return = t, g.return = t, l.sibling = g, t.child = l, ma(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = Rr(a), l.childLanes = Ur(
          e,
          m,
          a
        ), t.memoizedState = Zr, t = Bi(null, l));
      else if (Nn(t), _s(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var O = m.dgst;
        m = O, l = Error(o(419)), l.stack = "", l.digest = m, Ci({ value: l, source: null, stack: null }), t = Xr(
          e,
          t,
          a
        );
      } else if (tt || Ba(e, t, a, !1), m = (a & e.childLanes) !== 0, tt || m) {
        if (m = Re, m !== null && (l = bc(m, a), l !== 0 && l !== b.retryLane))
          throw b.retryLane = l, la(e, l), wt(m, e, l), Dr;
        ys(g) || zu(), t = Xr(
          e,
          t,
          a
        );
      } else
        ys(g) ? (t.flags |= 192, t.child = e.child, t = null) : (e = b.treeContext, Ue = $t(
          g.nextSibling
        ), rt = t, Se = !0, On = null, Bt = !1, e !== null && gf(t, e), t = Yr(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return r ? (Zn(), g = l.fallback, r = t.mode, b = e.child, O = b.sibling, l = rn(b, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = b.subtreeFlags & 65011712, O !== null ? g = rn(
      O,
      g
    ) : (g = ua(
      g,
      r,
      a,
      null
    ), g.flags |= 2), g.return = t, l.return = t, l.sibling = g, t.child = l, Bi(null, l), l = t.child, g = e.child.memoizedState, g === null ? g = Rr(a) : (r = g.cachePool, r !== null ? (b = Ie._currentValue, r = r.parent !== b ? { parent: b, pool: b } : r) : r = wf(), g = {
      baseLanes: g.baseLanes | a,
      cachePool: r
    }), l.memoizedState = g, l.childLanes = Ur(
      e,
      m,
      a
    ), t.memoizedState = Zr, Bi(e.child, l)) : (Nn(t), a = e.child, e = a.sibling, a = rn(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (m = t.deletions, m === null ? (t.deletions = [e], t.flags |= 16) : m.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function Yr(e, t) {
    return t = mu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function mu(e, t) {
    return e = Ct(22, e, null, t), e.lanes = 0, e;
  }
  function Xr(e, t, a) {
    return ma(t, e.child, null, a), e = Yr(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Rd(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), er(e.return, t, a);
  }
  function Hr(e, t, a, l, r, s) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: r,
      treeForkCount: s
    } : (m.isBackwards = t, m.rendering = null, m.renderingStartTime = 0, m.last = l, m.tail = a, m.tailMode = r, m.treeForkCount = s);
  }
  function Ud(e, t, a) {
    var l = t.pendingProps, r = l.revealOrder, s = l.tail;
    l = l.children;
    var m = We.current, g = (m & 2) !== 0;
    if (g ? (m = m & 1 | 2, t.flags |= 128) : m &= 1, G(We, m), ct(e, t, l, a), l = Se ? Oi : 0, !g && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Rd(e, a, t);
        else if (e.tag === 19)
          Rd(e, a, t);
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
    switch (r) {
      case "forwards":
        for (a = t.child, r = null; a !== null; )
          e = a.alternate, e !== null && tu(e) === null && (r = a), a = a.sibling;
        a = r, a === null ? (r = t.child, t.child = null) : (r = a.sibling, a.sibling = null), Hr(
          t,
          !1,
          r,
          a,
          s,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, r = t.child, t.child = null; r !== null; ) {
          if (e = r.alternate, e !== null && tu(e) === null) {
            t.child = r;
            break;
          }
          e = r.sibling, r.sibling = a, a = r, r = e;
        }
        Hr(
          t,
          !0,
          a,
          null,
          s,
          l
        );
        break;
      case "together":
        Hr(
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
  function pn(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Yn |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Ba(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, a = rn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = rn(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Br(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ql(e)));
  }
  function Yg(e, t, a) {
    switch (t.tag) {
      case 3:
        K(t, t.stateNode.containerInfo), Mn(t, Ie, e.memoizedState.cache), oa();
        break;
      case 27:
      case 5:
        Ce(t);
        break;
      case 4:
        K(t, t.stateNode.containerInfo);
        break;
      case 10:
        Mn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, dr(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Nn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Zd(e, t, a) : (Nn(t), e = pn(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Nn(t);
        break;
      case 19:
        var r = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (Ba(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), r) {
          if (l)
            return Ud(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (r = t.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), G(We, We.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Cd(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Mn(t, Ie, e.memoizedState.cache);
    }
    return pn(e, t, a);
  }
  function Yd(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        tt = !0;
      else {
        if (!Br(e, a) && (t.flags & 128) === 0)
          return tt = !1, Yg(
            e,
            t,
            a
          );
        tt = (e.flags & 131072) !== 0;
      }
    else
      tt = !1, Se && (t.flags & 1048576) !== 0 && vf(t, Oi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = fa(t.elementType), t.type = e, typeof e == "function")
            Go(e) ? (l = ha(e, l), t.tag = 1, t = Dd(
              null,
              t,
              e,
              l,
              a
            )) : (t.tag = 0, t = Nr(
              null,
              t,
              e,
              l,
              a
            ));
          else {
            if (e != null) {
              var r = e.$$typeof;
              if (r === X) {
                t.tag = 11, t = Ed(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (r === q) {
                t.tag = 14, t = Ad(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              }
            }
            throw t = Fe(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Nr(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, r = ha(
          l,
          t.pendingProps
        ), Dd(
          e,
          t,
          l,
          r,
          a
        );
      case 3:
        e: {
          if (K(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = t.pendingProps;
          var s = t.memoizedState;
          r = s.element, or(e, t), Ri(t, l, null, a);
          var m = t.memoizedState;
          if (l = m.cache, Mn(t, Ie, l), l !== s.cache && tr(
            t,
            [Ie],
            a,
            !0
          ), Zi(), l = m.element, s.isDehydrated)
            if (s = {
              element: l,
              isDehydrated: !1,
              cache: m.cache
            }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              t = Nd(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== r) {
              r = Yt(
                Error(o(424)),
                t
              ), Ci(r), t = Nd(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ue = $t(e.firstChild), rt = t, Se = !0, On = null, Bt = !0, a = Cf(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (oa(), l === r) {
              t = pn(
                e,
                t,
                a
              );
              break e;
            }
            ct(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return du(e, t), e === null ? (a = Jm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Se || (a = t.type, e = t.pendingProps, l = Cu(
          ce.current
        ).createElement(a), l[ot] = t, l[gt] = e, ft(l, a, e), lt(l), t.stateNode = l) : t.memoizedState = Jm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Ce(t), e === null && Se && (l = t.stateNode = Gm(
          t.type,
          t.pendingProps,
          ce.current
        ), rt = t, Bt = !0, r = Ue, $n(t.type) ? (bs = r, Ue = $t(l.firstChild)) : Ue = r), ct(
          e,
          t,
          t.pendingProps.children,
          a
        ), du(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Se && ((r = l = Ue) && (l = py(
          l,
          t.type,
          t.pendingProps,
          Bt
        ), l !== null ? (t.stateNode = l, rt = t, Ue = $t(l.firstChild), Bt = !1, r = !0) : r = !1), r || Cn(t)), Ce(t), r = t.type, s = t.pendingProps, m = e !== null ? e.memoizedProps : null, l = s.children, hs(r, s) ? l = null : m !== null && hs(r, m) && (t.flags |= 32), t.memoizedState !== null && (r = pr(
          e,
          t,
          Cg,
          null,
          null,
          a
        ), nl._currentValue = r), du(e, t), ct(e, t, l, a), t.child;
      case 6:
        return e === null && Se && ((e = a = Ue) && (a = hy(
          a,
          t.pendingProps,
          Bt
        ), a !== null ? (t.stateNode = a, rt = t, Ue = null, e = !0) : e = !1), e || Cn(t)), null;
      case 13:
        return Zd(e, t, a);
      case 4:
        return K(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = ma(
          t,
          null,
          l,
          a
        ) : ct(e, t, l, a), t.child;
      case 11:
        return Ed(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return ct(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return ct(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return ct(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, Mn(t, t.type, l.value), ct(e, t, l.children, a), t.child;
      case 9:
        return r = t.type._context, l = t.pendingProps.children, sa(t), r = st(r), l = l(r), t.flags |= 1, ct(e, t, l, a), t.child;
      case 14:
        return Ad(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Od(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Ud(e, t, a);
      case 31:
        return Ug(e, t, a);
      case 22:
        return Cd(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return sa(t), l = st(Ie), e === null ? (r = ir(), r === null && (r = Re, s = nr(), r.pooledCache = s, s.refCount++, s !== null && (r.pooledCacheLanes |= a), r = s), t.memoizedState = { parent: l, cache: r }, ur(t), Mn(t, Ie, r)) : ((e.lanes & a) !== 0 && (or(e, t), Ri(t, null, null, a), Zi()), r = e.memoizedState, s = t.memoizedState, r.parent !== l ? (r = { parent: l, cache: l }, t.memoizedState = r, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r), Mn(t, Ie, l)) : (l = s.cache, Mn(t, Ie, l), l !== r.cache && tr(
          t,
          [Ie],
          a,
          !0
        ))), ct(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function hn(e) {
    e.flags |= 4;
  }
  function qr(e, t, a, l, r) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (r & 335544128) === r)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (fm()) e.flags |= 8192;
        else
          throw da = Pl, lr;
    } else e.flags &= -16777217;
  }
  function Xd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !ep(t))
      if (fm()) e.flags |= 8192;
      else
        throw da = Pl, lr;
  }
  function pu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? gc() : 536870912, e.lanes |= t, Ia |= t);
  }
  function qi(e, t) {
    if (!Se)
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
  function Ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t)
      for (var r = e.child; r !== null; )
        a |= r.lanes | r.childLanes, l |= r.subtreeFlags & 65011712, l |= r.flags & 65011712, r.return = e, r = r.sibling;
    else
      for (r = e.child; r !== null; )
        a |= r.lanes | r.childLanes, l |= r.subtreeFlags, l |= r.flags, r.return = e, r = r.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function Xg(e, t, a) {
    var l = t.pendingProps;
    switch (Wo(t), t.tag) {
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
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), fn(Ie), ae(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ha(t) ? hn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Fo())), Ye(t), null;
      case 26:
        var r = t.type, s = t.memoizedState;
        return e === null ? (hn(t), s !== null ? (Ye(t), Xd(t, s)) : (Ye(t), qr(
          t,
          r,
          null,
          l,
          a
        ))) : s ? s !== e.memoizedState ? (hn(t), Ye(t), Xd(t, s)) : (Ye(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && hn(t), Ye(t), qr(
          t,
          r,
          e,
          l,
          a
        )), null;
      case 27:
        if (Qt(t), a = ce.current, r = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && hn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ye(t), null;
          }
          e = W.current, Ha(t) ? yf(t) : (e = Gm(r, l, a), t.stateNode = e, hn(t));
        }
        return Ye(t), null;
      case 5:
        if (Qt(t), r = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && hn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ye(t), null;
          }
          if (s = W.current, Ha(t))
            yf(t);
          else {
            var m = Cu(
              ce.current
            );
            switch (s) {
              case 1:
                s = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  r
                );
                break;
              case 2:
                s = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  r
                );
                break;
              default:
                switch (r) {
                  case "svg":
                    s = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      r
                    );
                    break;
                  case "math":
                    s = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r
                    );
                    break;
                  case "script":
                    s = m.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof l.is == "string" ? m.createElement("select", {
                      is: l.is
                    }) : m.createElement("select"), l.multiple ? s.multiple = !0 : l.size && (s.size = l.size);
                    break;
                  default:
                    s = typeof l.is == "string" ? m.createElement(r, { is: l.is }) : m.createElement(r);
                }
            }
            s[ot] = t, s[gt] = l;
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
            e: switch (ft(s, r, l), r) {
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
            l && hn(t);
          }
        }
        return Ye(t), qr(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && hn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = ce.current, Ha(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, r = rt, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  l = r.memoizedProps;
              }
            e[ot] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Zm(e.nodeValue, a)), e || Cn(t, !0);
          } else
            e = Cu(e).createTextNode(
              l
            ), e[ot] = t, t.stateNode = e;
        }
        return Ye(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Ha(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[ot] = t;
            } else
              oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ye(t), e = !1;
          } else
            a = Fo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (jt(t), t) : (jt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Ye(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (r = Ha(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!r) throw Error(o(318));
              if (r = t.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(o(317));
              r[ot] = t;
            } else
              oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ye(t), r = !1;
          } else
            r = Fo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return t.flags & 256 ? (jt(t), t) : (jt(t), null);
        }
        return jt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, r = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (r = l.alternate.memoizedState.cachePool.pool), s = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (s = l.memoizedState.cachePool.pool), s !== r && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), pu(t, t.updateQueue), Ye(t), null);
      case 4:
        return ae(), e === null && cs(t.stateNode.containerInfo), Ye(t), null;
      case 10:
        return fn(t.type), Ye(t), null;
      case 19:
        if (R(We), l = t.memoizedState, l === null) return Ye(t), null;
        if (r = (t.flags & 128) !== 0, s = l.rendering, s === null)
          if (r) qi(l, !1);
          else {
            if (Ge !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (s = tu(e), s !== null) {
                  for (t.flags |= 128, qi(l, !1), e = s.updateQueue, t.updateQueue = e, pu(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    mf(a, e), a = a.sibling;
                  return G(
                    We,
                    We.current & 1 | 2
                  ), Se && sn(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Tt() > _u && (t.flags |= 128, r = !0, qi(l, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = tu(s), e !== null) {
              if (t.flags |= 128, r = !0, e = e.updateQueue, t.updateQueue = e, pu(t, e), qi(l, !0), l.tail === null && l.tailMode === "hidden" && !s.alternate && !Se)
                return Ye(t), null;
            } else
              2 * Tt() - l.renderingStartTime > _u && a !== 536870912 && (t.flags |= 128, r = !0, qi(l, !1), t.lanes = 4194304);
          l.isBackwards ? (s.sibling = t.child, t.child = s) : (e = l.last, e !== null ? e.sibling = s : t.child = s, l.last = s);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Tt(), e.sibling = null, a = We.current, G(
          We,
          r ? a & 1 | 2 : a & 1
        ), Se && sn(t, l.treeForkCount), e) : (Ye(t), null);
      case 22:
      case 23:
        return jt(t), fr(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ye(t), a = t.updateQueue, a !== null && pu(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && R(ca), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), fn(Ie), Ye(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Hg(e, t) {
    switch (Wo(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return fn(Ie), ae(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Qt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (jt(t), t.alternate === null)
            throw Error(o(340));
          oa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (jt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          oa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return R(We), null;
      case 4:
        return ae(), null;
      case 10:
        return fn(t.type), null;
      case 22:
      case 23:
        return jt(t), fr(), e !== null && R(ca), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return fn(Ie), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Hd(e, t) {
    switch (Wo(t), t.tag) {
      case 3:
        fn(Ie), ae();
        break;
      case 26:
      case 27:
      case 5:
        Qt(t);
        break;
      case 4:
        ae();
        break;
      case 31:
        t.memoizedState !== null && jt(t);
        break;
      case 13:
        jt(t);
        break;
      case 19:
        R(We);
        break;
      case 10:
        fn(t.type);
        break;
      case 22:
      case 23:
        jt(t), fr(), e !== null && R(ca);
        break;
      case 24:
        fn(Ie);
    }
  }
  function $i(e, t) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var r = l.next;
        a = r;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var s = a.create, m = a.inst;
            l = s(), m.destroy = l;
          }
          a = a.next;
        } while (a !== r);
      }
    } catch (g) {
      je(t, t.return, g);
    }
  }
  function Rn(e, t, a) {
    try {
      var l = t.updateQueue, r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        l = s;
        do {
          if ((l.tag & e) === e) {
            var m = l.inst, g = m.destroy;
            if (g !== void 0) {
              m.destroy = void 0, r = t;
              var b = a, O = g;
              try {
                O();
              } catch (N) {
                je(
                  r,
                  b,
                  N
                );
              }
            }
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (N) {
      je(t, t.return, N);
    }
  }
  function Bd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        jf(t, a);
      } catch (l) {
        je(e, e.return, l);
      }
    }
  }
  function qd(e, t, a) {
    a.props = ha(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      je(e, t, l);
    }
  }
  function Li(e, t) {
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
    } catch (r) {
      je(e, t, r);
    }
  }
  function nn(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (r) {
          je(e, t, r);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (r) {
          je(e, t, r);
        }
      else a.current = null;
  }
  function $d(e) {
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
    } catch (r) {
      je(e, e.return, r);
    }
  }
  function $r(e, t, a) {
    try {
      var l = e.stateNode;
      ry(l, e.type, a, t), l[gt] = t;
    } catch (r) {
      je(e, e.return, r);
    }
  }
  function Ld(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && $n(e.type) || e.tag === 4;
  }
  function Lr(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ld(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && $n(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Vr(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = un));
    else if (l !== 4 && (l === 27 && $n(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (Vr(e, t, a), e = e.sibling; e !== null; )
        Vr(e, t, a), e = e.sibling;
  }
  function hu(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && $n(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (hu(e, t, a), e = e.sibling; e !== null; )
        hu(e, t, a), e = e.sibling;
  }
  function Vd(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, r = t.attributes; r.length; )
        t.removeAttributeNode(r[0]);
      ft(t, l, a), t[ot] = e, t[gt] = a;
    } catch (s) {
      je(e, e.return, s);
    }
  }
  var vn = !1, nt = !1, Gr = !1, Gd = typeof WeakSet == "function" ? WeakSet : Set, ut = null;
  function Bg(e, t) {
    if (e = e.containerInfo, ms = Ru, e = af(e), Xo(e)) {
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
            var r = l.anchorOffset, s = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, s.nodeType;
            } catch {
              a = null;
              break e;
            }
            var m = 0, g = -1, b = -1, O = 0, N = 0, Y = e, C = null;
            t: for (; ; ) {
              for (var j; Y !== a || r !== 0 && Y.nodeType !== 3 || (g = m + r), Y !== s || l !== 0 && Y.nodeType !== 3 || (b = m + l), Y.nodeType === 3 && (m += Y.nodeValue.length), (j = Y.firstChild) !== null; )
                C = Y, Y = j;
              for (; ; ) {
                if (Y === e) break t;
                if (C === a && ++O === r && (g = m), C === s && ++N === l && (b = m), (j = Y.nextSibling) !== null) break;
                Y = C, C = Y.parentNode;
              }
              Y = j;
            }
            a = g === -1 || b === -1 ? null : { start: g, end: b };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (ps = { focusedElem: e, selectionRange: a }, Ru = !1, ut = t; ut !== null; )
      if (t = ut, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ut = e;
      else
        for (; ut !== null; ) {
          switch (t = ut, s = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (a = 0; a < e.length; a++)
                  r = e[a], r.ref.impl = r.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && s !== null) {
                e = void 0, a = t, r = s.memoizedProps, s = s.memoizedState, l = a.stateNode;
                try {
                  var P = ha(
                    a.type,
                    r
                  );
                  e = l.getSnapshotBeforeUpdate(
                    P,
                    s
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (le) {
                  je(
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
                  gs(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      gs(e);
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
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ut = e;
            break;
          }
          ut = t.return;
        }
  }
  function Qd(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        yn(e, a), l & 4 && $i(5, a);
        break;
      case 1:
        if (yn(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (m) {
              je(a, a.return, m);
            }
          else {
            var r = ha(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                r,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              je(
                a,
                a.return,
                m
              );
            }
          }
        l & 64 && Bd(a), l & 512 && Li(a, a.return);
        break;
      case 3:
        if (yn(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
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
            jf(e, t);
          } catch (m) {
            je(a, a.return, m);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Vd(a);
      case 26:
      case 5:
        yn(e, a), t === null && l & 4 && $d(a), l & 512 && Li(a, a.return);
        break;
      case 12:
        yn(e, a);
        break;
      case 31:
        yn(e, a), l & 4 && Wd(e, a);
        break;
      case 13:
        yn(e, a), l & 4 && Pd(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Wg.bind(
          null,
          a
        ), vy(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || vn, !l) {
          t = t !== null && t.memoizedState !== null || nt, r = vn;
          var s = nt;
          vn = l, (nt = t) && !s ? _n(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : yn(e, a), vn = r, nt = s;
        }
        break;
      case 30:
        break;
      default:
        yn(e, a);
    }
  }
  function Kd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Kd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && zo(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var He = null, _t = !1;
  function gn(e, t, a) {
    for (a = a.child; a !== null; )
      Jd(e, t, a), a = a.sibling;
  }
  function Jd(e, t, a) {
    if (Et && typeof Et.onCommitFiberUnmount == "function")
      try {
        Et.onCommitFiberUnmount(pi, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        nt || nn(a, t), gn(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        nt || nn(a, t);
        var l = He, r = _t;
        $n(a.type) && (He = a.stateNode, _t = !1), gn(
          e,
          t,
          a
        ), Ii(a.stateNode), He = l, _t = r;
        break;
      case 5:
        nt || nn(a, t);
      case 6:
        if (l = He, r = _t, He = null, gn(
          e,
          t,
          a
        ), He = l, _t = r, He !== null)
          if (_t)
            try {
              (He.nodeType === 9 ? He.body : He.nodeName === "HTML" ? He.ownerDocument.body : He).removeChild(a.stateNode);
            } catch (s) {
              je(
                a,
                t,
                s
              );
            }
          else
            try {
              He.removeChild(a.stateNode);
            } catch (s) {
              je(
                a,
                t,
                s
              );
            }
        break;
      case 18:
        He !== null && (_t ? (e = He, Bm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), oi(e)) : Bm(He, a.stateNode));
        break;
      case 4:
        l = He, r = _t, He = a.stateNode.containerInfo, _t = !0, gn(
          e,
          t,
          a
        ), He = l, _t = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Rn(2, a, t), nt || Rn(4, a, t), gn(
          e,
          t,
          a
        );
        break;
      case 1:
        nt || (nn(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && qd(
          a,
          t,
          l
        )), gn(
          e,
          t,
          a
        );
        break;
      case 21:
        gn(
          e,
          t,
          a
        );
        break;
      case 22:
        nt = (l = nt) || a.memoizedState !== null, gn(
          e,
          t,
          a
        ), nt = l;
        break;
      default:
        gn(
          e,
          t,
          a
        );
    }
  }
  function Wd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        oi(e);
      } catch (a) {
        je(t, t.return, a);
      }
    }
  }
  function Pd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        oi(e);
      } catch (a) {
        je(t, t.return, a);
      }
  }
  function qg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Gd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Gd()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function vu(e, t) {
    var a = qg(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var r = Pg.bind(null, e, l);
        l.then(r, r);
      }
    });
  }
  function bt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var r = a[l], s = e, m = t, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if ($n(g.type)) {
                He = g.stateNode, _t = !1;
                break e;
              }
              break;
            case 5:
              He = g.stateNode, _t = !1;
              break e;
            case 3:
            case 4:
              He = g.stateNode.containerInfo, _t = !0;
              break e;
          }
          g = g.return;
        }
        if (He === null) throw Error(o(160));
        Jd(s, m, r), He = null, _t = !1, s = r.alternate, s !== null && (s.return = null), r.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Fd(t, e), t = t.sibling;
  }
  var Jt = null;
  function Fd(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        bt(t, e), St(e), l & 4 && (Rn(3, e, e.return), $i(3, e), Rn(5, e, e.return));
        break;
      case 1:
        bt(t, e), St(e), l & 512 && (nt || a === null || nn(a, a.return)), l & 64 && vn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var r = Jt;
        if (bt(t, e), St(e), l & 512 && (nt || a === null || nn(a, a.return)), l & 4) {
          var s = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, r = r.ownerDocument || r;
                  t: switch (l) {
                    case "title":
                      s = r.getElementsByTagName("title")[0], (!s || s[gi] || s[ot] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = r.createElement(l), r.head.insertBefore(
                        s,
                        r.querySelector("head > title")
                      )), ft(s, l, a), s[ot] = e, lt(s), l = s;
                      break e;
                    case "link":
                      var m = Fm(
                        "link",
                        "href",
                        r
                      ).get(l + (a.href || ""));
                      if (m) {
                        for (var g = 0; g < m.length; g++)
                          if (s = m[g], s.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && s.getAttribute("rel") === (a.rel == null ? null : a.rel) && s.getAttribute("title") === (a.title == null ? null : a.title) && s.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      s = r.createElement(l), ft(s, l, a), r.head.appendChild(s);
                      break;
                    case "meta":
                      if (m = Fm(
                        "meta",
                        "content",
                        r
                      ).get(l + (a.content || ""))) {
                        for (g = 0; g < m.length; g++)
                          if (s = m[g], s.getAttribute("content") === (a.content == null ? null : "" + a.content) && s.getAttribute("name") === (a.name == null ? null : a.name) && s.getAttribute("property") === (a.property == null ? null : a.property) && s.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && s.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      s = r.createElement(l), ft(s, l, a), r.head.appendChild(s);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  s[ot] = e, lt(s), l = s;
                }
                e.stateNode = l;
              } else
                Im(
                  r,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Pm(
                r,
                l,
                e.memoizedProps
              );
          else
            s !== l ? (s === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : s.count--, l === null ? Im(
              r,
              e.type,
              e.stateNode
            ) : Pm(
              r,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && $r(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        bt(t, e), St(e), l & 512 && (nt || a === null || nn(a, a.return)), a !== null && l & 4 && $r(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (bt(t, e), St(e), l & 512 && (nt || a === null || nn(a, a.return)), e.flags & 32) {
          r = e.stateNode;
          try {
            Ma(r, "");
          } catch (P) {
            je(e, e.return, P);
          }
        }
        l & 4 && e.stateNode != null && (r = e.memoizedProps, $r(
          e,
          r,
          a !== null ? a.memoizedProps : r
        )), l & 1024 && (Gr = !0);
        break;
      case 6:
        if (bt(t, e), St(e), l & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (P) {
            je(e, e.return, P);
          }
        }
        break;
      case 3:
        if (ku = null, r = Jt, Jt = Mu(t.containerInfo), bt(t, e), Jt = r, St(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            oi(t.containerInfo);
          } catch (P) {
            je(e, e.return, P);
          }
        Gr && (Gr = !1, Id(e));
        break;
      case 4:
        l = Jt, Jt = Mu(
          e.stateNode.containerInfo
        ), bt(t, e), St(e), Jt = l;
        break;
      case 12:
        bt(t, e), St(e);
        break;
      case 31:
        bt(t, e), St(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, vu(e, l)));
        break;
      case 13:
        bt(t, e), St(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (yu = Tt()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, vu(e, l)));
        break;
      case 22:
        r = e.memoizedState !== null;
        var b = a !== null && a.memoizedState !== null, O = vn, N = nt;
        if (vn = O || r, nt = N || b, bt(t, e), nt = N, vn = O, St(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = r ? t._visibility & -2 : t._visibility | 1, r && (a === null || b || vn || nt || va(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                b = a = t;
                try {
                  if (s = b.stateNode, r)
                    m = s.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    g = b.stateNode;
                    var Y = b.memoizedProps.style, C = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                    g.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (P) {
                  je(b, b.return, P);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = r ? "" : b.memoizedProps;
                } catch (P) {
                  je(b, b.return, P);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                b = t;
                try {
                  var j = b.stateNode;
                  r ? qm(j, !0) : qm(b.stateNode, !1);
                } catch (P) {
                  je(b, b.return, P);
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
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, vu(e, a))));
        break;
      case 19:
        bt(t, e), St(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, vu(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        bt(t, e), St(e);
    }
  }
  function St(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Ld(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var r = a.stateNode, s = Lr(e);
            hu(e, s, r);
            break;
          case 5:
            var m = a.stateNode;
            a.flags & 32 && (Ma(m, ""), a.flags &= -33);
            var g = Lr(e);
            hu(e, g, m);
            break;
          case 3:
          case 4:
            var b = a.stateNode.containerInfo, O = Lr(e);
            Vr(
              e,
              O,
              b
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (N) {
        je(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Id(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Id(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function yn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Qd(e, t.alternate, t), t = t.sibling;
  }
  function va(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Rn(4, t, t.return), va(t);
          break;
        case 1:
          nn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && qd(
            t,
            t.return,
            a
          ), va(t);
          break;
        case 27:
          Ii(t.stateNode);
        case 26:
        case 5:
          nn(t, t.return), va(t);
          break;
        case 22:
          t.memoizedState === null && va(t);
          break;
        case 30:
          va(t);
          break;
        default:
          va(t);
      }
      e = e.sibling;
    }
  }
  function _n(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, r = e, s = t, m = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          _n(
            r,
            s,
            a
          ), $i(4, s);
          break;
        case 1:
          if (_n(
            r,
            s,
            a
          ), l = s, r = l.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (O) {
              je(l, l.return, O);
            }
          if (l = s, r = l.updateQueue, r !== null) {
            var g = l.stateNode;
            try {
              var b = r.shared.hiddenCallbacks;
              if (b !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < b.length; r++)
                  Mf(b[r], g);
            } catch (O) {
              je(l, l.return, O);
            }
          }
          a && m & 64 && Bd(s), Li(s, s.return);
          break;
        case 27:
          Vd(s);
        case 26:
        case 5:
          _n(
            r,
            s,
            a
          ), a && l === null && m & 4 && $d(s), Li(s, s.return);
          break;
        case 12:
          _n(
            r,
            s,
            a
          );
          break;
        case 31:
          _n(
            r,
            s,
            a
          ), a && m & 4 && Wd(r, s);
          break;
        case 13:
          _n(
            r,
            s,
            a
          ), a && m & 4 && Pd(r, s);
          break;
        case 22:
          s.memoizedState === null && _n(
            r,
            s,
            a
          ), Li(s, s.return);
          break;
        case 30:
          break;
        default:
          _n(
            r,
            s,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Qr(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Mi(a));
  }
  function Kr(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Mi(e));
  }
  function Wt(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        em(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function em(e, t, a, l) {
    var r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Wt(
          e,
          t,
          a,
          l
        ), r & 2048 && $i(9, t);
        break;
      case 1:
        Wt(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        Wt(
          e,
          t,
          a,
          l
        ), r & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Mi(e)));
        break;
      case 12:
        if (r & 2048) {
          Wt(
            e,
            t,
            a,
            l
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
            je(t, t.return, b);
          }
        } else
          Wt(
            e,
            t,
            a,
            l
          );
        break;
      case 31:
        Wt(
          e,
          t,
          a,
          l
        );
        break;
      case 13:
        Wt(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        s = t.stateNode, m = t.alternate, t.memoizedState !== null ? s._visibility & 2 ? Wt(
          e,
          t,
          a,
          l
        ) : Vi(e, t) : s._visibility & 2 ? Wt(
          e,
          t,
          a,
          l
        ) : (s._visibility |= 2, Wa(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), r & 2048 && Qr(m, t);
        break;
      case 24:
        Wt(
          e,
          t,
          a,
          l
        ), r & 2048 && Kr(t.alternate, t);
        break;
      default:
        Wt(
          e,
          t,
          a,
          l
        );
    }
  }
  function Wa(e, t, a, l, r) {
    for (r = r && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var s = e, m = t, g = a, b = l, O = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Wa(
            s,
            m,
            g,
            b,
            r
          ), $i(8, m);
          break;
        case 23:
          break;
        case 22:
          var N = m.stateNode;
          m.memoizedState !== null ? N._visibility & 2 ? Wa(
            s,
            m,
            g,
            b,
            r
          ) : Vi(
            s,
            m
          ) : (N._visibility |= 2, Wa(
            s,
            m,
            g,
            b,
            r
          )), r && O & 2048 && Qr(
            m.alternate,
            m
          );
          break;
        case 24:
          Wa(
            s,
            m,
            g,
            b,
            r
          ), r && O & 2048 && Kr(m.alternate, m);
          break;
        default:
          Wa(
            s,
            m,
            g,
            b,
            r
          );
      }
      t = t.sibling;
    }
  }
  function Vi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, r = l.flags;
        switch (l.tag) {
          case 22:
            Vi(a, l), r & 2048 && Qr(
              l.alternate,
              l
            );
            break;
          case 24:
            Vi(a, l), r & 2048 && Kr(l.alternate, l);
            break;
          default:
            Vi(a, l);
        }
        t = t.sibling;
      }
  }
  var Gi = 8192;
  function Pa(e, t, a) {
    if (e.subtreeFlags & Gi)
      for (e = e.child; e !== null; )
        tm(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function tm(e, t, a) {
    switch (e.tag) {
      case 26:
        Pa(
          e,
          t,
          a
        ), e.flags & Gi && e.memoizedState !== null && Oy(
          a,
          Jt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Pa(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var l = Jt;
        Jt = Mu(e.stateNode.containerInfo), Pa(
          e,
          t,
          a
        ), Jt = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Gi, Gi = 16777216, Pa(
          e,
          t,
          a
        ), Gi = l) : Pa(
          e,
          t,
          a
        ));
        break;
      default:
        Pa(
          e,
          t,
          a
        );
    }
  }
  function nm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Qi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ut = l, im(
            l,
            e
          );
        }
      nm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        am(e), e = e.sibling;
  }
  function am(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Qi(e), e.flags & 2048 && Rn(9, e, e.return);
        break;
      case 3:
        Qi(e);
        break;
      case 12:
        Qi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, gu(e)) : Qi(e);
        break;
      default:
        Qi(e);
    }
  }
  function gu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ut = l, im(
            l,
            e
          );
        }
      nm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Rn(8, t, t.return), gu(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, gu(t));
          break;
        default:
          gu(t);
      }
      e = e.sibling;
    }
  }
  function im(e, t) {
    for (; ut !== null; ) {
      var a = ut;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Rn(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Mi(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, ut = l;
      else
        e: for (a = e; ut !== null; ) {
          l = ut;
          var r = l.sibling, s = l.return;
          if (Kd(l), l === a) {
            ut = null;
            break e;
          }
          if (r !== null) {
            r.return = s, ut = r;
            break e;
          }
          ut = s;
        }
    }
  }
  var $g = {
    getCacheForType: function(e) {
      var t = st(Ie), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return st(Ie).controller.signal;
    }
  }, Lg = typeof WeakMap == "function" ? WeakMap : Map, Oe = 0, Re = null, me = null, he = 0, Me = 0, kt = null, Un = !1, Fa = !1, Jr = !1, bn = 0, Ge = 0, Yn = 0, ga = 0, Wr = 0, Dt = 0, Ia = 0, Ki = null, zt = null, Pr = !1, yu = 0, lm = 0, _u = 1 / 0, bu = null, Xn = null, at = 0, Hn = null, ei = null, Sn = 0, Fr = 0, Ir = null, um = null, Ji = 0, es = null;
  function Nt() {
    return (Oe & 2) !== 0 && he !== 0 ? he & -he : k.T !== null ? us() : Sc();
  }
  function om() {
    if (Dt === 0)
      if ((he & 536870912) === 0 || Se) {
        var e = Ol;
        Ol <<= 1, (Ol & 3932160) === 0 && (Ol = 262144), Dt = e;
      } else Dt = 536870912;
    return e = Mt.current, e !== null && (e.flags |= 32), Dt;
  }
  function wt(e, t, a) {
    (e === Re && (Me === 2 || Me === 9) || e.cancelPendingCommit !== null) && (ti(e, 0), Bn(
      e,
      he,
      Dt,
      !1
    )), vi(e, a), ((Oe & 2) === 0 || e !== Re) && (e === Re && ((Oe & 2) === 0 && (ga |= a), Ge === 4 && Bn(
      e,
      he,
      Dt,
      !1
    )), an(e));
  }
  function rm(e, t, a) {
    if ((Oe & 6) !== 0) throw Error(o(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || hi(e, t), r = l ? Qg(e, t) : ns(e, t, !0), s = l;
    do {
      if (r === 0) {
        Fa && !l && Bn(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, s && !Vg(a)) {
          r = ns(e, t, !1), s = !1;
          continue;
        }
        if (r === 2) {
          if (s = t, e.errorRecoveryDisabledLanes & s)
            var m = 0;
          else
            m = e.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            t = m;
            e: {
              var g = e;
              r = Ki;
              var b = g.current.memoizedState.isDehydrated;
              if (b && (ti(g, m).flags |= 256), m = ns(
                g,
                m,
                !1
              ), m !== 2) {
                if (Jr && !b) {
                  g.errorRecoveryDisabledLanes |= s, ga |= s, r = 4;
                  break e;
                }
                s = zt, zt = r, s !== null && (zt === null ? zt = s : zt.push.apply(
                  zt,
                  s
                ));
              }
              r = m;
            }
            if (s = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          ti(e, 0), Bn(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, s = r, s) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Bn(
                l,
                t,
                Dt,
                !Un
              );
              break e;
            case 2:
              zt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (r = yu + 300 - Tt(), 10 < r)) {
            if (Bn(
              l,
              t,
              Dt,
              !Un
            ), Ml(l, 0, !0) !== 0) break e;
            Sn = t, l.timeoutHandle = Xm(
              sm.bind(
                null,
                l,
                a,
                zt,
                bu,
                Pr,
                t,
                Dt,
                ga,
                Ia,
                Un,
                s,
                "Throttled",
                -0,
                0
              ),
              r
            );
            break e;
          }
          sm(
            l,
            a,
            zt,
            bu,
            Pr,
            t,
            Dt,
            ga,
            Ia,
            Un,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    an(e);
  }
  function sm(e, t, a, l, r, s, m, g, b, O, N, Y, C, j) {
    if (e.timeoutHandle = -1, Y = t.subtreeFlags, Y & 8192 || (Y & 16785408) === 16785408) {
      Y = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: un
      }, tm(
        t,
        s,
        Y
      );
      var P = (s & 62914560) === s ? yu - Tt() : (s & 4194048) === s ? lm - Tt() : 0;
      if (P = Cy(
        Y,
        P
      ), P !== null) {
        Sn = s, e.cancelPendingCommit = P(
          gm.bind(
            null,
            e,
            t,
            s,
            a,
            l,
            r,
            m,
            g,
            b,
            N,
            Y,
            null,
            C,
            j
          )
        ), Bn(e, s, m, !O);
        return;
      }
    }
    gm(
      e,
      t,
      s,
      a,
      l,
      r,
      m,
      g,
      b
    );
  }
  function Vg(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var r = a[l], s = r.getSnapshot;
          r = r.value;
          try {
            if (!Ot(s(), r)) return !1;
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
  function Bn(e, t, a, l) {
    t &= ~Wr, t &= ~ga, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var r = t; 0 < r; ) {
      var s = 31 - At(r), m = 1 << s;
      l[s] = -1, r &= ~m;
    }
    a !== 0 && yc(e, a, t);
  }
  function Su() {
    return (Oe & 6) === 0 ? (Wi(0), !1) : !0;
  }
  function ts() {
    if (me !== null) {
      if (Me === 0)
        var e = me.return;
      else
        e = me, cn = ra = null, gr(e), Va = null, ki = 0, e = me;
      for (; e !== null; )
        Hd(e.alternate, e), e = e.return;
      me = null;
    }
  }
  function ti(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, fy(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Sn = 0, ts(), Re = e, me = a = rn(e.current, null), he = t, Me = 0, kt = null, Un = !1, Fa = hi(e, t), Jr = !1, Ia = Dt = Wr = ga = Yn = Ge = 0, zt = Ki = null, Pr = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var r = 31 - At(l), s = 1 << r;
        t |= e[r], l &= ~s;
      }
    return bn = t, ql(), a;
  }
  function cm(e, t) {
    se = null, k.H = Hi, t === La || t === Wl ? (t = Ef(), Me = 3) : t === lr ? (t = Ef(), Me = 4) : Me = t === Dr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, kt = t, me === null && (Ge = 1, cu(
      e,
      Yt(t, e.current)
    ));
  }
  function fm() {
    var e = Mt.current;
    return e === null ? !0 : (he & 4194048) === he ? qt === null : (he & 62914560) === he || (he & 536870912) !== 0 ? e === qt : !1;
  }
  function dm() {
    var e = k.H;
    return k.H = Hi, e === null ? Hi : e;
  }
  function mm() {
    var e = k.A;
    return k.A = $g, e;
  }
  function zu() {
    Ge = 4, Un || (he & 4194048) !== he && Mt.current !== null || (Fa = !0), (Yn & 134217727) === 0 && (ga & 134217727) === 0 || Re === null || Bn(
      Re,
      he,
      Dt,
      !1
    );
  }
  function ns(e, t, a) {
    var l = Oe;
    Oe |= 2;
    var r = dm(), s = mm();
    (Re !== e || he !== t) && (bu = null, ti(e, t)), t = !1;
    var m = Ge;
    e: do
      try {
        if (Me !== 0 && me !== null) {
          var g = me, b = kt;
          switch (Me) {
            case 8:
              ts(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Mt.current === null && (t = !0);
              var O = Me;
              if (Me = 0, kt = null, ni(e, g, b, O), a && Fa) {
                m = 0;
                break e;
              }
              break;
            default:
              O = Me, Me = 0, kt = null, ni(e, g, b, O);
          }
        }
        Gg(), m = Ge;
        break;
      } catch (N) {
        cm(e, N);
      }
    while (!0);
    return t && e.shellSuspendCounter++, cn = ra = null, Oe = l, k.H = r, k.A = s, me === null && (Re = null, he = 0, ql()), m;
  }
  function Gg() {
    for (; me !== null; ) pm(me);
  }
  function Qg(e, t) {
    var a = Oe;
    Oe |= 2;
    var l = dm(), r = mm();
    Re !== e || he !== t ? (bu = null, _u = Tt() + 500, ti(e, t)) : Fa = hi(
      e,
      t
    );
    e: do
      try {
        if (Me !== 0 && me !== null) {
          t = me;
          var s = kt;
          t: switch (Me) {
            case 1:
              Me = 0, kt = null, ni(e, t, s, 1);
              break;
            case 2:
            case 9:
              if (xf(s)) {
                Me = 0, kt = null, hm(t);
                break;
              }
              t = function() {
                Me !== 2 && Me !== 9 || Re !== e || (Me = 7), an(e);
              }, s.then(t, t);
              break e;
            case 3:
              Me = 7;
              break e;
            case 4:
              Me = 5;
              break e;
            case 7:
              xf(s) ? (Me = 0, kt = null, hm(t)) : (Me = 0, kt = null, ni(e, t, s, 7));
              break;
            case 5:
              var m = null;
              switch (me.tag) {
                case 26:
                  m = me.memoizedState;
                case 5:
                case 27:
                  var g = me;
                  if (m ? ep(m) : g.stateNode.complete) {
                    Me = 0, kt = null;
                    var b = g.sibling;
                    if (b !== null) me = b;
                    else {
                      var O = g.return;
                      O !== null ? (me = O, wu(O)) : me = null;
                    }
                    break t;
                  }
              }
              Me = 0, kt = null, ni(e, t, s, 5);
              break;
            case 6:
              Me = 0, kt = null, ni(e, t, s, 6);
              break;
            case 8:
              ts(), Ge = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Kg();
        break;
      } catch (N) {
        cm(e, N);
      }
    while (!0);
    return cn = ra = null, k.H = l, k.A = r, Oe = a, me !== null ? 0 : (Re = null, he = 0, ql(), Ge);
  }
  function Kg() {
    for (; me !== null && !gv(); )
      pm(me);
  }
  function pm(e) {
    var t = Yd(e.alternate, e, bn);
    e.memoizedProps = e.pendingProps, t === null ? wu(e) : me = t;
  }
  function hm(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = kd(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          he
        );
        break;
      case 11:
        t = kd(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          he
        );
        break;
      case 5:
        gr(t);
      default:
        Hd(a, t), t = me = mf(t, bn), t = Yd(a, t, bn);
    }
    e.memoizedProps = e.pendingProps, t === null ? wu(e) : me = t;
  }
  function ni(e, t, a, l) {
    cn = ra = null, gr(t), Va = null, ki = 0;
    var r = t.return;
    try {
      if (Rg(
        e,
        r,
        t,
        a,
        he
      )) {
        Ge = 1, cu(
          e,
          Yt(a, e.current)
        ), me = null;
        return;
      }
    } catch (s) {
      if (r !== null) throw me = r, s;
      Ge = 1, cu(
        e,
        Yt(a, e.current)
      ), me = null;
      return;
    }
    t.flags & 32768 ? (Se || l === 1 ? e = !0 : Fa || (he & 536870912) !== 0 ? e = !1 : (Un = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Mt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), vm(t, e)) : wu(t);
  }
  function wu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        vm(
          t,
          Un
        );
        return;
      }
      e = t.return;
      var a = Xg(
        t.alternate,
        t,
        bn
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
    Ge === 0 && (Ge = 5);
  }
  function vm(e, t) {
    do {
      var a = Hg(e.alternate, e);
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
    Ge = 6, me = null;
  }
  function gm(e, t, a, l, r, s, m, g, b) {
    e.cancelPendingCommit = null;
    do
      xu();
    while (at !== 0);
    if ((Oe & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (s = t.lanes | t.childLanes, s |= Lo, Av(
        e,
        a,
        s,
        m,
        g,
        b
      ), e === Re && (me = Re = null, he = 0), ei = t, Hn = e, Sn = a, Fr = s, Ir = r, um = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Fg(El, function() {
        return zm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = k.T, k.T = null, r = L.p, L.p = 2, m = Oe, Oe |= 4;
        try {
          Bg(e, t, a);
        } finally {
          Oe = m, L.p = r, k.T = l;
        }
      }
      at = 1, ym(), _m(), bm();
    }
  }
  function ym() {
    if (at === 1) {
      at = 0;
      var e = Hn, t = ei, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = k.T, k.T = null;
        var l = L.p;
        L.p = 2;
        var r = Oe;
        Oe |= 4;
        try {
          Fd(t, e);
          var s = ps, m = af(e.containerInfo), g = s.focusedElem, b = s.selectionRange;
          if (m !== g && g && g.ownerDocument && nf(
            g.ownerDocument.documentElement,
            g
          )) {
            if (b !== null && Xo(g)) {
              var O = b.start, N = b.end;
              if (N === void 0 && (N = O), "selectionStart" in g)
                g.selectionStart = O, g.selectionEnd = Math.min(
                  N,
                  g.value.length
                );
              else {
                var Y = g.ownerDocument || document, C = Y && Y.defaultView || window;
                if (C.getSelection) {
                  var j = C.getSelection(), P = g.textContent.length, le = Math.min(b.start, P), Ne = b.end === void 0 ? le : Math.min(b.end, P);
                  !j.extend && le > Ne && (m = Ne, Ne = le, le = m);
                  var T = tf(
                    g,
                    le
                  ), w = tf(
                    g,
                    Ne
                  );
                  if (T && w && (j.rangeCount !== 1 || j.anchorNode !== T.node || j.anchorOffset !== T.offset || j.focusNode !== w.node || j.focusOffset !== w.offset)) {
                    var A = Y.createRange();
                    A.setStart(T.node, T.offset), j.removeAllRanges(), le > Ne ? (j.addRange(A), j.extend(w.node, w.offset)) : (A.setEnd(w.node, w.offset), j.addRange(A));
                  }
                }
              }
            }
            for (Y = [], j = g; j = j.parentNode; )
              j.nodeType === 1 && Y.push({
                element: j,
                left: j.scrollLeft,
                top: j.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < Y.length; g++) {
              var Z = Y[g];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          Ru = !!ms, ps = ms = null;
        } finally {
          Oe = r, L.p = l, k.T = a;
        }
      }
      e.current = t, at = 2;
    }
  }
  function _m() {
    if (at === 2) {
      at = 0;
      var e = Hn, t = ei, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = k.T, k.T = null;
        var l = L.p;
        L.p = 2;
        var r = Oe;
        Oe |= 4;
        try {
          Qd(e, t.alternate, t);
        } finally {
          Oe = r, L.p = l, k.T = a;
        }
      }
      at = 3;
    }
  }
  function bm() {
    if (at === 4 || at === 3) {
      at = 0, yv();
      var e = Hn, t = ei, a = Sn, l = um;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? at = 5 : (at = 0, ei = Hn = null, Sm(e, e.pendingLanes));
      var r = e.pendingLanes;
      if (r === 0 && (Xn = null), bo(a), t = t.stateNode, Et && typeof Et.onCommitFiberRoot == "function")
        try {
          Et.onCommitFiberRoot(
            pi,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = k.T, r = L.p, L.p = 2, k.T = null;
        try {
          for (var s = e.onRecoverableError, m = 0; m < l.length; m++) {
            var g = l[m];
            s(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          k.T = t, L.p = r;
        }
      }
      (Sn & 3) !== 0 && xu(), an(e), r = e.pendingLanes, (a & 261930) !== 0 && (r & 42) !== 0 ? e === es ? Ji++ : (Ji = 0, es = e) : Ji = 0, Wi(0);
    }
  }
  function Sm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Mi(t)));
  }
  function xu() {
    return ym(), _m(), bm(), zm();
  }
  function zm() {
    if (at !== 5) return !1;
    var e = Hn, t = Fr;
    Fr = 0;
    var a = bo(Sn), l = k.T, r = L.p;
    try {
      L.p = 32 > a ? 32 : a, k.T = null, a = Ir, Ir = null;
      var s = Hn, m = Sn;
      if (at = 0, ei = Hn = null, Sn = 0, (Oe & 6) !== 0) throw Error(o(331));
      var g = Oe;
      if (Oe |= 4, am(s.current), em(
        s,
        s.current,
        m,
        a
      ), Oe = g, Wi(0, !1), Et && typeof Et.onPostCommitFiberRoot == "function")
        try {
          Et.onPostCommitFiberRoot(pi, s);
        } catch {
        }
      return !0;
    } finally {
      L.p = r, k.T = l, Sm(e, t);
    }
  }
  function wm(e, t, a) {
    t = Yt(a, t), t = kr(e.stateNode, t, 2), e = Dn(e, t, 2), e !== null && (vi(e, 2), an(e));
  }
  function je(e, t, a) {
    if (e.tag === 3)
      wm(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          wm(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Xn === null || !Xn.has(l))) {
            e = Yt(a, e), a = xd(2), l = Dn(t, a, 2), l !== null && (Td(
              a,
              l,
              t,
              e
            ), vi(l, 2), an(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function as(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Lg();
      var r = /* @__PURE__ */ new Set();
      l.set(t, r);
    } else
      r = l.get(t), r === void 0 && (r = /* @__PURE__ */ new Set(), l.set(t, r));
    r.has(a) || (Jr = !0, r.add(a), e = Jg.bind(null, e, t, a), t.then(e, e));
  }
  function Jg(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Re === e && (he & a) === a && (Ge === 4 || Ge === 3 && (he & 62914560) === he && 300 > Tt() - yu ? (Oe & 2) === 0 && ti(e, 0) : Wr |= a, Ia === he && (Ia = 0)), an(e);
  }
  function xm(e, t) {
    t === 0 && (t = gc()), e = la(e, t), e !== null && (vi(e, t), an(e));
  }
  function Wg(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), xm(e, a);
  }
  function Pg(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, r = e.memoizedState;
        r !== null && (a = r.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(t), xm(e, a);
  }
  function Fg(e, t) {
    return vo(e, t);
  }
  var Tu = null, ai = null, is = !1, Eu = !1, ls = !1, qn = 0;
  function an(e) {
    e !== ai && e.next === null && (ai === null ? Tu = ai = e : ai = ai.next = e), Eu = !0, is || (is = !0, ey());
  }
  function Wi(e, t) {
    if (!ls && Eu) {
      ls = !0;
      do
        for (var a = !1, l = Tu; l !== null; ) {
          if (e !== 0) {
            var r = l.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var m = l.suspendedLanes, g = l.pingedLanes;
              s = (1 << 31 - At(42 | e) + 1) - 1, s &= r & ~(m & ~g), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (a = !0, Om(l, s));
          } else
            s = he, s = Ml(
              l,
              l === Re ? s : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (s & 3) === 0 || hi(l, s) || (a = !0, Om(l, s));
          l = l.next;
        }
      while (a);
      ls = !1;
    }
  }
  function Ig() {
    Tm();
  }
  function Tm() {
    Eu = is = !1;
    var e = 0;
    qn !== 0 && cy() && (e = qn);
    for (var t = Tt(), a = null, l = Tu; l !== null; ) {
      var r = l.next, s = Em(l, t);
      s === 0 ? (l.next = null, a === null ? Tu = r : a.next = r, r === null && (ai = a)) : (a = l, (e !== 0 || (s & 3) !== 0) && (Eu = !0)), l = r;
    }
    at !== 0 && at !== 5 || Wi(e), qn !== 0 && (qn = 0);
  }
  function Em(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, r = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
      var m = 31 - At(s), g = 1 << m, b = r[m];
      b === -1 ? ((g & a) === 0 || (g & l) !== 0) && (r[m] = Ev(g, t)) : b <= t && (e.expiredLanes |= g), s &= ~g;
    }
    if (t = Re, a = he, a = Ml(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (Me === 2 || Me === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && go(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || hi(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && go(l), bo(a)) {
        case 2:
        case 8:
          a = hc;
          break;
        case 32:
          a = El;
          break;
        case 268435456:
          a = vc;
          break;
        default:
          a = El;
      }
      return l = Am.bind(null, e), a = vo(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && go(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Am(e, t) {
    if (at !== 0 && at !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (xu() && e.callbackNode !== a)
      return null;
    var l = he;
    return l = Ml(
      e,
      e === Re ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (rm(e, l, t), Em(e, Tt()), e.callbackNode != null && e.callbackNode === a ? Am.bind(null, e) : null);
  }
  function Om(e, t) {
    if (xu()) return null;
    rm(e, t, !0);
  }
  function ey() {
    dy(function() {
      (Oe & 6) !== 0 ? vo(
        pc,
        Ig
      ) : Tm();
    });
  }
  function us() {
    if (qn === 0) {
      var e = qa;
      e === 0 && (e = Al, Al <<= 1, (Al & 261888) === 0 && (Al = 256)), qn = e;
    }
    return qn;
  }
  function Cm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Nl("" + e);
  }
  function Mm(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function ty(e, t, a, l, r) {
    if (t === "submit" && a && a.stateNode === r) {
      var s = Cm(
        (r[gt] || null).action
      ), m = l.submitter;
      m && (t = (t = m[gt] || null) ? Cm(t.formAction) : m.getAttribute("formAction"), t !== null && (s = t, m = null));
      var g = new Yl(
        "action",
        "action",
        null,
        l,
        r
      );
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (qn !== 0) {
                  var b = m ? Mm(r, m) : new FormData(r);
                  Er(
                    a,
                    {
                      pending: !0,
                      data: b,
                      method: r.method,
                      action: s
                    },
                    null,
                    b
                  );
                }
              } else
                typeof s == "function" && (g.preventDefault(), b = m ? Mm(r, m) : new FormData(r), Er(
                  a,
                  {
                    pending: !0,
                    data: b,
                    method: r.method,
                    action: s
                  },
                  s,
                  b
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var os = 0; os < $o.length; os++) {
    var rs = $o[os], ny = rs.toLowerCase(), ay = rs[0].toUpperCase() + rs.slice(1);
    Kt(
      ny,
      "on" + ay
    );
  }
  Kt(of, "onAnimationEnd"), Kt(rf, "onAnimationIteration"), Kt(sf, "onAnimationStart"), Kt("dblclick", "onDoubleClick"), Kt("focusin", "onFocus"), Kt("focusout", "onBlur"), Kt(_g, "onTransitionRun"), Kt(bg, "onTransitionStart"), Kt(Sg, "onTransitionCancel"), Kt(cf, "onTransitionEnd"), Oa("onMouseEnter", ["mouseout", "mouseover"]), Oa("onMouseLeave", ["mouseout", "mouseover"]), Oa("onPointerEnter", ["pointerout", "pointerover"]), Oa("onPointerLeave", ["pointerout", "pointerover"]), ta(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ta(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ta("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ta(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ta(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ta(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Pi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), iy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pi)
  );
  function jm(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], r = l.event;
      l = l.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var m = l.length - 1; 0 <= m; m--) {
            var g = l[m], b = g.instance, O = g.currentTarget;
            if (g = g.listener, b !== s && r.isPropagationStopped())
              break e;
            s = g, r.currentTarget = O;
            try {
              s(r);
            } catch (N) {
              Bl(N);
            }
            r.currentTarget = null, s = b;
          }
        else
          for (m = 0; m < l.length; m++) {
            if (g = l[m], b = g.instance, O = g.currentTarget, g = g.listener, b !== s && r.isPropagationStopped())
              break e;
            s = g, r.currentTarget = O;
            try {
              s(r);
            } catch (N) {
              Bl(N);
            }
            r.currentTarget = null, s = b;
          }
      }
    }
  }
  function pe(e, t) {
    var a = t[So];
    a === void 0 && (a = t[So] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (km(t, e, 2, !1), a.add(l));
  }
  function ss(e, t, a) {
    var l = 0;
    t && (l |= 4), km(
      a,
      e,
      l,
      t
    );
  }
  var Au = "_reactListening" + Math.random().toString(36).slice(2);
  function cs(e) {
    if (!e[Au]) {
      e[Au] = !0, xc.forEach(function(a) {
        a !== "selectionchange" && (iy.has(a) || ss(a, !1, e), ss(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Au] || (t[Au] = !0, ss("selectionchange", !1, t));
    }
  }
  function km(e, t, a, l) {
    switch (op(t)) {
      case 2:
        var r = ky;
        break;
      case 8:
        r = Dy;
        break;
      default:
        r = Ts;
    }
    a = r.bind(
      null,
      t,
      a,
      e
    ), r = void 0, !Mo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0), l ? r !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: r
    }) : e.addEventListener(t, a, !0) : r !== void 0 ? e.addEventListener(t, a, {
      passive: r
    }) : e.addEventListener(t, a, !1);
  }
  function fs(e, t, a, l, r) {
    var s = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var m = l.tag;
        if (m === 3 || m === 4) {
          var g = l.stateNode.containerInfo;
          if (g === r) break;
          if (m === 4)
            for (m = l.return; m !== null; ) {
              var b = m.tag;
              if ((b === 3 || b === 4) && m.stateNode.containerInfo === r)
                return;
              m = m.return;
            }
          for (; g !== null; ) {
            if (m = Ta(g), m === null) return;
            if (b = m.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              l = s = m;
              continue e;
            }
            g = g.parentNode;
          }
        }
        l = l.return;
      }
    Rc(function() {
      var O = s, N = Oo(a), Y = [];
      e: {
        var C = ff.get(e);
        if (C !== void 0) {
          var j = Yl, P = e;
          switch (e) {
            case "keypress":
              if (Rl(a) === 0) break e;
            case "keydown":
            case "keyup":
              j = Pv;
              break;
            case "focusin":
              P = "focus", j = No;
              break;
            case "focusout":
              P = "blur", j = No;
              break;
            case "beforeblur":
            case "afterblur":
              j = No;
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
              j = Xc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = Xv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = eg;
              break;
            case of:
            case rf:
            case sf:
              j = qv;
              break;
            case cf:
              j = ng;
              break;
            case "scroll":
            case "scrollend":
              j = Uv;
              break;
            case "wheel":
              j = ig;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = Lv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = Bc;
              break;
            case "toggle":
            case "beforetoggle":
              j = ug;
          }
          var le = (t & 4) !== 0, Ne = !le && (e === "scroll" || e === "scrollend"), T = le ? C !== null ? C + "Capture" : null : C;
          le = [];
          for (var w = O, A; w !== null; ) {
            var Z = w;
            if (A = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || A === null || T === null || (Z = _i(w, T), Z != null && le.push(
              Fi(w, Z, A)
            )), Ne) break;
            w = w.return;
          }
          0 < le.length && (C = new j(
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
          if (C = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", C && a !== Ao && (P = a.relatedTarget || a.fromElement) && (Ta(P) || P[xa]))
            break e;
          if ((j || C) && (C = N.window === N ? N : (C = N.ownerDocument) ? C.defaultView || C.parentWindow : window, j ? (P = a.relatedTarget || a.toElement, j = O, P = P ? Ta(P) : null, P !== null && (Ne = f(P), le = P.tag, P !== Ne || le !== 5 && le !== 27 && le !== 6) && (P = null)) : (j = null, P = O), j !== P)) {
            if (le = Xc, Z = "onMouseLeave", T = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (le = Bc, Z = "onPointerLeave", T = "onPointerEnter", w = "pointer"), Ne = j == null ? C : yi(j), A = P == null ? C : yi(P), C = new le(
              Z,
              w + "leave",
              j,
              a,
              N
            ), C.target = Ne, C.relatedTarget = A, Z = null, Ta(N) === O && (le = new le(
              T,
              w + "enter",
              P,
              a,
              N
            ), le.target = A, le.relatedTarget = Ne, Z = le), Ne = Z, j && P)
              t: {
                for (le = ly, T = j, w = P, A = 0, Z = T; Z; Z = le(Z))
                  A++;
                Z = 0;
                for (var ee = w; ee; ee = le(ee))
                  Z++;
                for (; 0 < A - Z; )
                  T = le(T), A--;
                for (; 0 < Z - A; )
                  w = le(w), Z--;
                for (; A--; ) {
                  if (T === w || w !== null && T === w.alternate) {
                    le = T;
                    break t;
                  }
                  T = le(T), w = le(w);
                }
                le = null;
              }
            else le = null;
            j !== null && Dm(
              Y,
              C,
              j,
              le,
              !1
            ), P !== null && Ne !== null && Dm(
              Y,
              Ne,
              P,
              le,
              !0
            );
          }
        }
        e: {
          if (C = O ? yi(O) : window, j = C.nodeName && C.nodeName.toLowerCase(), j === "select" || j === "input" && C.type === "file")
            var Te = Jc;
          else if (Qc(C))
            if (Wc)
              Te = vg;
            else {
              Te = pg;
              var F = mg;
            }
          else
            j = C.nodeName, !j || j.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? O && Eo(O.elementType) && (Te = Jc) : Te = hg;
          if (Te && (Te = Te(e, O))) {
            Kc(
              Y,
              Te,
              a,
              N
            );
            break e;
          }
          F && F(e, C, O), e === "focusout" && O && C.type === "number" && O.memoizedProps.value != null && To(C, "number", C.value);
        }
        switch (F = O ? yi(O) : window, e) {
          case "focusin":
            (Qc(F) || F.contentEditable === "true") && (Na = F, Ho = O, Ai = null);
            break;
          case "focusout":
            Ai = Ho = Na = null;
            break;
          case "mousedown":
            Bo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Bo = !1, lf(Y, a, N);
            break;
          case "selectionchange":
            if (yg) break;
          case "keydown":
          case "keyup":
            lf(Y, a, N);
        }
        var fe;
        if (Ro)
          e: {
            switch (e) {
              case "compositionstart":
                var ve = "onCompositionStart";
                break e;
              case "compositionend":
                ve = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ve = "onCompositionUpdate";
                break e;
            }
            ve = void 0;
          }
        else
          Da ? Vc(e, a) && (ve = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ve = "onCompositionStart");
        ve && (qc && a.locale !== "ko" && (Da || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && Da && (fe = Uc()) : (En = N, jo = "value" in En ? En.value : En.textContent, Da = !0)), F = Ou(O, ve), 0 < F.length && (ve = new Hc(
          ve,
          e,
          null,
          a,
          N
        ), Y.push({ event: ve, listeners: F }), fe ? ve.data = fe : (fe = Gc(a), fe !== null && (ve.data = fe)))), (fe = rg ? sg(e, a) : cg(e, a)) && (ve = Ou(O, "onBeforeInput"), 0 < ve.length && (F = new Hc(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          N
        ), Y.push({
          event: F,
          listeners: ve
        }), F.data = fe)), ty(
          Y,
          e,
          O,
          a,
          N
        );
      }
      jm(Y, t);
    });
  }
  function Fi(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Ou(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var r = e, s = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || s === null || (r = _i(e, a), r != null && l.unshift(
        Fi(e, r, s)
      ), r = _i(e, t), r != null && l.push(
        Fi(e, r, s)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function ly(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Dm(e, t, a, l, r) {
    for (var s = t._reactName, m = []; a !== null && a !== l; ) {
      var g = a, b = g.alternate, O = g.stateNode;
      if (g = g.tag, b !== null && b === l) break;
      g !== 5 && g !== 26 && g !== 27 || O === null || (b = O, r ? (O = _i(a, s), O != null && m.unshift(
        Fi(a, O, b)
      )) : r || (O = _i(a, s), O != null && m.push(
        Fi(a, O, b)
      ))), a = a.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var uy = /\r\n?/g, oy = /\u0000|\uFFFD/g;
  function Nm(e) {
    return (typeof e == "string" ? e : "" + e).replace(uy, `
`).replace(oy, "");
  }
  function Zm(e, t) {
    return t = Nm(t), Nm(e) === t;
  }
  function De(e, t, a, l, r, s) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Ma(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Ma(e, "" + l);
        break;
      case "className":
        kl(e, "class", l);
        break;
      case "tabIndex":
        kl(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        kl(e, a, l);
        break;
      case "style":
        Nc(e, l, s);
        break;
      case "data":
        if (t !== "object") {
          kl(e, "data", l);
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
        l = Nl("" + l), e.setAttribute(a, l);
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
          typeof s == "function" && (a === "formAction" ? (t !== "input" && De(e, t, "name", r.name, r, null), De(
            e,
            t,
            "formEncType",
            r.formEncType,
            r,
            null
          ), De(
            e,
            t,
            "formMethod",
            r.formMethod,
            r,
            null
          ), De(
            e,
            t,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (De(e, t, "encType", r.encType, r, null), De(e, t, "method", r.method, r, null), De(e, t, "target", r.target, r, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Nl("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = un);
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
            throw Error(o(61));
          if (a = l.__html, a != null) {
            if (r.children != null) throw Error(o(60));
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
        a = Nl("" + l), e.setAttributeNS(
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
        pe("beforetoggle", e), pe("toggle", e), jl(e, "popover", l);
        break;
      case "xlinkActuate":
        ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        ln(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        ln(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        ln(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        jl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Zv.get(a) || a, jl(e, a, l));
    }
  }
  function ds(e, t, a, l, r, s) {
    switch (a) {
      case "style":
        Nc(e, l, s);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (a = l.__html, a != null) {
            if (r.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Ma(e, l) : (typeof l == "number" || typeof l == "bigint") && Ma(e, "" + l);
        break;
      case "onScroll":
        l != null && pe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && pe("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = un);
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
        if (!Tc.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (r = a.endsWith("Capture"), t = a.slice(2, r ? a.length - 7 : void 0), s = e[gt] || null, s = s != null ? s[a] : null, typeof s == "function" && e.removeEventListener(t, s, r), typeof l == "function")) {
              typeof s != "function" && s !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, r);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : jl(e, a, l);
          }
    }
  }
  function ft(e, t, a) {
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
        var l = !1, r = !1, s;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var m = a[s];
            if (m != null)
              switch (s) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  De(e, t, s, m, a, null);
              }
          }
        r && De(e, t, "srcSet", a.srcSet, a, null), l && De(e, t, "src", a.src, a, null);
        return;
      case "input":
        pe("invalid", e);
        var g = s = m = r = null, b = null, O = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var N = a[l];
            if (N != null)
              switch (l) {
                case "name":
                  r = N;
                  break;
                case "type":
                  m = N;
                  break;
                case "checked":
                  b = N;
                  break;
                case "defaultChecked":
                  O = N;
                  break;
                case "value":
                  s = N;
                  break;
                case "defaultValue":
                  g = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(o(137, t));
                  break;
                default:
                  De(e, t, l, N, a, null);
              }
          }
        Mc(
          e,
          s,
          g,
          b,
          O,
          m,
          r,
          !1
        );
        return;
      case "select":
        pe("invalid", e), l = m = s = null;
        for (r in a)
          if (a.hasOwnProperty(r) && (g = a[r], g != null))
            switch (r) {
              case "value":
                s = g;
                break;
              case "defaultValue":
                m = g;
                break;
              case "multiple":
                l = g;
              default:
                De(e, t, r, g, a, null);
            }
        t = s, a = m, e.multiple = !!l, t != null ? Ca(e, !!l, t, !1) : a != null && Ca(e, !!l, a, !0);
        return;
      case "textarea":
        pe("invalid", e), s = r = l = null;
        for (m in a)
          if (a.hasOwnProperty(m) && (g = a[m], g != null))
            switch (m) {
              case "value":
                l = g;
                break;
              case "defaultValue":
                r = g;
                break;
              case "children":
                s = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(o(91));
                break;
              default:
                De(e, t, m, g, a, null);
            }
        kc(e, l, r, s);
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
        for (l = 0; l < Pi.length; l++)
          pe(Pi[l], e);
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
        for (O in a)
          if (a.hasOwnProperty(O) && (l = a[O], l != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                De(e, t, O, l, a, null);
            }
        return;
      default:
        if (Eo(t)) {
          for (N in a)
            a.hasOwnProperty(N) && (l = a[N], l !== void 0 && ds(
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
    for (g in a)
      a.hasOwnProperty(g) && (l = a[g], l != null && De(e, t, g, l, a, null));
  }
  function ry(e, t, a, l) {
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
        var r = null, s = null, m = null, g = null, b = null, O = null, N = null;
        for (j in a) {
          var Y = a[j];
          if (a.hasOwnProperty(j) && Y != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = Y;
              default:
                l.hasOwnProperty(j) || De(e, t, j, null, l, Y);
            }
        }
        for (var C in l) {
          var j = l[C];
          if (Y = a[C], l.hasOwnProperty(C) && (j != null || Y != null))
            switch (C) {
              case "type":
                s = j;
                break;
              case "name":
                r = j;
                break;
              case "checked":
                O = j;
                break;
              case "defaultChecked":
                N = j;
                break;
              case "value":
                m = j;
                break;
              case "defaultValue":
                g = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(o(137, t));
                break;
              default:
                j !== Y && De(
                  e,
                  t,
                  C,
                  j,
                  l,
                  Y
                );
            }
        }
        xo(
          e,
          m,
          g,
          b,
          O,
          N,
          s,
          r
        );
        return;
      case "select":
        j = m = g = C = null;
        for (s in a)
          if (b = a[s], a.hasOwnProperty(s) && b != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                j = b;
              default:
                l.hasOwnProperty(s) || De(
                  e,
                  t,
                  s,
                  null,
                  l,
                  b
                );
            }
        for (r in l)
          if (s = l[r], b = a[r], l.hasOwnProperty(r) && (s != null || b != null))
            switch (r) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                g = s;
                break;
              case "multiple":
                m = s;
              default:
                s !== b && De(
                  e,
                  t,
                  r,
                  s,
                  l,
                  b
                );
            }
        t = g, a = m, l = j, C != null ? Ca(e, !!a, C, !1) : !!l != !!a && (t != null ? Ca(e, !!a, t, !0) : Ca(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        j = C = null;
        for (g in a)
          if (r = a[g], a.hasOwnProperty(g) && r != null && !l.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                De(e, t, g, null, l, r);
            }
        for (m in l)
          if (r = l[m], s = a[m], l.hasOwnProperty(m) && (r != null || s != null))
            switch (m) {
              case "value":
                C = r;
                break;
              case "defaultValue":
                j = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(o(91));
                break;
              default:
                r !== s && De(e, t, m, r, l, s);
            }
        jc(e, C, j);
        return;
      case "option":
        for (var P in a)
          C = a[P], a.hasOwnProperty(P) && C != null && !l.hasOwnProperty(P) && (P === "selected" ? e.selected = !1 : De(
            e,
            t,
            P,
            null,
            l,
            C
          ));
        for (b in l)
          C = l[b], j = a[b], l.hasOwnProperty(b) && C !== j && (C != null || j != null) && (b === "selected" ? e.selected = C && typeof C != "function" && typeof C != "symbol" : De(
            e,
            t,
            b,
            C,
            l,
            j
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
          C = a[le], a.hasOwnProperty(le) && C != null && !l.hasOwnProperty(le) && De(e, t, le, null, l, C);
        for (O in l)
          if (C = l[O], j = a[O], l.hasOwnProperty(O) && C !== j && (C != null || j != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(o(137, t));
                break;
              default:
                De(
                  e,
                  t,
                  O,
                  C,
                  l,
                  j
                );
            }
        return;
      default:
        if (Eo(t)) {
          for (var Ne in a)
            C = a[Ne], a.hasOwnProperty(Ne) && C !== void 0 && !l.hasOwnProperty(Ne) && ds(
              e,
              t,
              Ne,
              void 0,
              l,
              C
            );
          for (N in l)
            C = l[N], j = a[N], !l.hasOwnProperty(N) || C === j || C === void 0 && j === void 0 || ds(
              e,
              t,
              N,
              C,
              l,
              j
            );
          return;
        }
    }
    for (var T in a)
      C = a[T], a.hasOwnProperty(T) && C != null && !l.hasOwnProperty(T) && De(e, t, T, null, l, C);
    for (Y in l)
      C = l[Y], j = a[Y], !l.hasOwnProperty(Y) || C === j || C == null && j == null || De(e, t, Y, C, l, j);
  }
  function Rm(e) {
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
  function sy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var r = a[l], s = r.transferSize, m = r.initiatorType, g = r.duration;
        if (s && g && Rm(m)) {
          for (m = 0, g = r.responseEnd, l += 1; l < a.length; l++) {
            var b = a[l], O = b.startTime;
            if (O > g) break;
            var N = b.transferSize, Y = b.initiatorType;
            N && Rm(Y) && (b = b.responseEnd, m += N * (b < g ? 1 : (g - O) / (b - O)));
          }
          if (--l, t += 8 * (s + m) / (r.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var ms = null, ps = null;
  function Cu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Um(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ym(e, t) {
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
  function hs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var vs = null;
  function cy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === vs ? !1 : (vs = e, !0) : (vs = null, !1);
  }
  var Xm = typeof setTimeout == "function" ? setTimeout : void 0, fy = typeof clearTimeout == "function" ? clearTimeout : void 0, Hm = typeof Promise == "function" ? Promise : void 0, dy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hm < "u" ? function(e) {
    return Hm.resolve(null).then(e).catch(my);
  } : Xm;
  function my(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function $n(e) {
    return e === "head";
  }
  function Bm(e, t) {
    var a = t, l = 0;
    do {
      var r = a.nextSibling;
      if (e.removeChild(a), r && r.nodeType === 8)
        if (a = r.data, a === "/$" || a === "/&") {
          if (l === 0) {
            e.removeChild(r), oi(t);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          Ii(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, Ii(a);
          for (var s = a.firstChild; s; ) {
            var m = s.nextSibling, g = s.nodeName;
            s[gi] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && s.rel.toLowerCase() === "stylesheet" || a.removeChild(s), s = m;
          }
        } else
          a === "body" && Ii(e.ownerDocument.body);
      a = r;
    } while (a);
    oi(t);
  }
  function qm(e, t) {
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
  function gs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          gs(a), zo(a);
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
  function py(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var r = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[gi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (s = e.getAttribute("rel"), s === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (s !== r.rel || e.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || e.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (s = e.getAttribute("src"), (s !== (r.src == null ? null : r.src) || e.getAttribute("type") !== (r.type == null ? null : r.type) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && s && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var s = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && e.getAttribute("name") === s)
          return e;
      } else return e;
      if (e = $t(e.nextSibling), e === null) break;
    }
    return null;
  }
  function hy(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = $t(e.nextSibling), e === null)) return null;
    return e;
  }
  function $m(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = $t(e.nextSibling), e === null)) return null;
    return e;
  }
  function ys(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function _s(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function vy(e, t) {
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
  function $t(e) {
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
  var bs = null;
  function Lm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return $t(e.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Vm(e) {
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
  function Gm(e, t, a) {
    switch (t = Cu(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Ii(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    zo(e);
  }
  var Lt = /* @__PURE__ */ new Map(), Qm = /* @__PURE__ */ new Set();
  function Mu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var zn = L.d;
  L.d = {
    f: gy,
    r: yy,
    D: _y,
    C: by,
    L: Sy,
    m: zy,
    X: xy,
    S: wy,
    M: Ty
  };
  function gy() {
    var e = zn.f(), t = Su();
    return e || t;
  }
  function yy(e) {
    var t = Ea(e);
    t !== null && t.tag === 5 && t.type === "form" ? cd(t) : zn.r(e);
  }
  var ii = typeof document > "u" ? null : document;
  function Km(e, t, a) {
    var l = ii;
    if (l && typeof t == "string" && t) {
      var r = Rt(t);
      r = 'link[rel="' + e + '"][href="' + r + '"]', typeof a == "string" && (r += '[crossorigin="' + a + '"]'), Qm.has(r) || (Qm.add(r), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(r) === null && (t = l.createElement("link"), ft(t, "link", e), lt(t), l.head.appendChild(t)));
    }
  }
  function _y(e) {
    zn.D(e), Km("dns-prefetch", e, null);
  }
  function by(e, t) {
    zn.C(e, t), Km("preconnect", e, t);
  }
  function Sy(e, t, a) {
    zn.L(e, t, a);
    var l = ii;
    if (l && e && t) {
      var r = 'link[rel="preload"][as="' + Rt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (r += '[imagesrcset="' + Rt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (r += '[imagesizes="' + Rt(
        a.imageSizes
      ) + '"]')) : r += '[href="' + Rt(e) + '"]';
      var s = r;
      switch (t) {
        case "style":
          s = li(e);
          break;
        case "script":
          s = ui(e);
      }
      Lt.has(s) || (e = S(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Lt.set(s, e), l.querySelector(r) !== null || t === "style" && l.querySelector(el(s)) || t === "script" && l.querySelector(tl(s)) || (t = l.createElement("link"), ft(t, "link", e), lt(t), l.head.appendChild(t)));
    }
  }
  function zy(e, t) {
    zn.m(e, t);
    var a = ii;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", r = 'link[rel="modulepreload"][as="' + Rt(l) + '"][href="' + Rt(e) + '"]', s = r;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = ui(e);
      }
      if (!Lt.has(s) && (e = S({ rel: "modulepreload", href: e }, t), Lt.set(s, e), a.querySelector(r) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(tl(s)))
              return;
        }
        l = a.createElement("link"), ft(l, "link", e), lt(l), a.head.appendChild(l);
      }
    }
  }
  function wy(e, t, a) {
    zn.S(e, t, a);
    var l = ii;
    if (l && e) {
      var r = Aa(l).hoistableStyles, s = li(e);
      t = t || "default";
      var m = r.get(s);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = l.querySelector(
          el(s)
        ))
          g.loading = 5;
        else {
          e = S(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Lt.get(s)) && Ss(e, a);
          var b = m = l.createElement("link");
          lt(b), ft(b, "link", e), b._p = new Promise(function(O, N) {
            b.onload = O, b.onerror = N;
          }), b.addEventListener("load", function() {
            g.loading |= 1;
          }), b.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, ju(m, t, l);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: g
        }, r.set(s, m);
      }
    }
  }
  function xy(e, t) {
    zn.X(e, t);
    var a = ii;
    if (a && e) {
      var l = Aa(a).hoistableScripts, r = ui(e), s = l.get(r);
      s || (s = a.querySelector(tl(r)), s || (e = S({ src: e, async: !0 }, t), (t = Lt.get(r)) && zs(e, t), s = a.createElement("script"), lt(s), ft(s, "link", e), a.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, l.set(r, s));
    }
  }
  function Ty(e, t) {
    zn.M(e, t);
    var a = ii;
    if (a && e) {
      var l = Aa(a).hoistableScripts, r = ui(e), s = l.get(r);
      s || (s = a.querySelector(tl(r)), s || (e = S({ src: e, async: !0, type: "module" }, t), (t = Lt.get(r)) && zs(e, t), s = a.createElement("script"), lt(s), ft(s, "link", e), a.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, l.set(r, s));
    }
  }
  function Jm(e, t, a, l) {
    var r = (r = ce.current) ? Mu(r) : null;
    if (!r) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = li(a.href), a = Aa(
          r
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = li(a.href);
          var s = Aa(
            r
          ).hoistableStyles, m = s.get(e);
          if (m || (r = r.ownerDocument || r, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(e, m), (s = r.querySelector(
            el(e)
          )) && !s._p && (m.instance = s, m.state.loading = 5), Lt.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Lt.set(e, a), s || Ey(
            r,
            e,
            a,
            m.state
          ))), t && l === null)
            throw Error(o(528, ""));
          return m;
        }
        if (t && l !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ui(a), a = Aa(
          r
        ).hoistableScripts, l = a.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function li(e) {
    return 'href="' + Rt(e) + '"';
  }
  function el(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Wm(e) {
    return S({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Ey(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ft(t, "link", a), lt(t), e.head.appendChild(t));
  }
  function ui(e) {
    return '[src="' + Rt(e) + '"]';
  }
  function tl(e) {
    return "script[async]" + e;
  }
  function Pm(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Rt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, lt(l), l;
          var r = S({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), lt(l), ft(l, "style", r), ju(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          r = li(a.href);
          var s = e.querySelector(
            el(r)
          );
          if (s)
            return t.state.loading |= 4, t.instance = s, lt(s), s;
          l = Wm(a), (r = Lt.get(r)) && Ss(l, r), s = (e.ownerDocument || e).createElement("link"), lt(s);
          var m = s;
          return m._p = new Promise(function(g, b) {
            m.onload = g, m.onerror = b;
          }), ft(s, "link", l), t.state.loading |= 4, ju(s, a.precedence, e), t.instance = s;
        case "script":
          return s = ui(a.src), (r = e.querySelector(
            tl(s)
          )) ? (t.instance = r, lt(r), r) : (l = a, (r = Lt.get(s)) && (l = S({}, a), zs(l, r)), e = e.ownerDocument || e, r = e.createElement("script"), lt(r), ft(r, "link", l), e.head.appendChild(r), t.instance = r);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, ju(l, a.precedence, e));
    return t.instance;
  }
  function ju(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = l.length ? l[l.length - 1] : null, s = r, m = 0; m < l.length; m++) {
      var g = l[m];
      if (g.dataset.precedence === t) s = g;
      else if (s !== r) break;
    }
    s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Ss(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function zs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ku = null;
  function Fm(e, t, a) {
    if (ku === null) {
      var l = /* @__PURE__ */ new Map(), r = ku = /* @__PURE__ */ new Map();
      r.set(a, l);
    } else
      r = ku, l = r.get(a), l || (l = /* @__PURE__ */ new Map(), r.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), r = 0; r < a.length; r++) {
      var s = a[r];
      if (!(s[gi] || s[ot] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = s.getAttribute(t) || "";
        m = e + m;
        var g = l.get(m);
        g ? g.push(s) : l.set(m, [s]);
      }
    }
    return l;
  }
  function Im(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Ay(e, t, a) {
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
  function ep(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Oy(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var r = li(l.href), s = t.querySelector(
          el(r)
        );
        if (s) {
          t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Du.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = s, lt(s);
          return;
        }
        s = t.ownerDocument || t, l = Wm(l), (r = Lt.get(r)) && Ss(l, r), s = s.createElement("link"), lt(s);
        var m = s;
        m._p = new Promise(function(g, b) {
          m.onload = g, m.onerror = b;
        }), ft(s, "link", l), a.instance = s;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Du.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var ws = 0;
  function Cy(e, t) {
    return e.stylesheets && e.count === 0 && Zu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && Zu(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s();
        }
      }, 6e4 + t);
      0 < e.imgBytes && ws === 0 && (ws = 62500 * sy());
      var r = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Zu(e, e.stylesheets), e.unsuspend)) {
            var s = e.unsuspend;
            e.unsuspend = null, s();
          }
        },
        (e.imgBytes > ws ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(r);
      };
    } : null;
  }
  function Du() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Zu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Nu = null;
  function Zu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Nu = /* @__PURE__ */ new Map(), t.forEach(My, e), Nu = null, Du.call(e));
  }
  function My(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Nu.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Nu.set(e, a);
        for (var r = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < r.length; s++) {
          var m = r[s];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (a.set(m.dataset.precedence, m), l = m);
        }
        l && a.set(null, l);
      }
      r = t.instance, m = r.getAttribute("data-precedence"), s = a.get(m) || l, s === l && a.set(null, r), a.set(m, r), this.count++, l = Du.bind(this), r.addEventListener("load", l), r.addEventListener("error", l), s ? s.parentNode.insertBefore(r, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(r, e.firstChild)), t.state.loading |= 4;
    }
  }
  var nl = {
    $$typeof: $,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function jy(e, t, a, l, r, s, m, g, b) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = yo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yo(0), this.hiddenUpdates = yo(null), this.identifierPrefix = l, this.onUncaughtError = r, this.onCaughtError = s, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function tp(e, t, a, l, r, s, m, g, b, O, N, Y) {
    return e = new jy(
      e,
      t,
      a,
      m,
      b,
      O,
      N,
      Y,
      g
    ), t = 1, s === !0 && (t |= 24), s = Ct(3, null, null, t), e.current = s, s.stateNode = e, t = nr(), t.refCount++, e.pooledCache = t, t.refCount++, s.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, ur(s), e;
  }
  function np(e) {
    return e ? (e = Ua, e) : Ua;
  }
  function ap(e, t, a, l, r, s) {
    r = np(r), l.context === null ? l.context = r : l.pendingContext = r, l = kn(t), l.payload = { element: a }, s = s === void 0 ? null : s, s !== null && (l.callback = s), a = Dn(e, l, t), a !== null && (wt(a, e, t), Ni(a, e, t));
  }
  function ip(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function xs(e, t) {
    ip(e, t), (e = e.alternate) && ip(e, t);
  }
  function lp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = la(e, 67108864);
      t !== null && wt(t, e, 67108864), xs(e, 67108864);
    }
  }
  function up(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Nt();
      t = _o(t);
      var a = la(e, t);
      a !== null && wt(a, e, t), xs(e, t);
    }
  }
  var Ru = !0;
  function ky(e, t, a, l) {
    var r = k.T;
    k.T = null;
    var s = L.p;
    try {
      L.p = 2, Ts(e, t, a, l);
    } finally {
      L.p = s, k.T = r;
    }
  }
  function Dy(e, t, a, l) {
    var r = k.T;
    k.T = null;
    var s = L.p;
    try {
      L.p = 8, Ts(e, t, a, l);
    } finally {
      L.p = s, k.T = r;
    }
  }
  function Ts(e, t, a, l) {
    if (Ru) {
      var r = Es(l);
      if (r === null)
        fs(
          e,
          t,
          l,
          Uu,
          a
        ), rp(e, l);
      else if (Zy(
        r,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (rp(e, l), t & 4 && -1 < Ny.indexOf(e)) {
        for (; r !== null; ) {
          var s = Ea(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var m = ea(s.pendingLanes);
                  if (m !== 0) {
                    var g = s;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                      var b = 1 << 31 - At(m);
                      g.entanglements[1] |= b, m &= ~b;
                    }
                    an(s), (Oe & 6) === 0 && (_u = Tt() + 500, Wi(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = la(s, 2), g !== null && wt(g, s, 2), Su(), xs(s, 2);
            }
          if (s = Es(l), s === null && fs(
            e,
            t,
            l,
            Uu,
            a
          ), s === r) break;
          r = s;
        }
        r !== null && l.stopPropagation();
      } else
        fs(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Es(e) {
    return e = Oo(e), As(e);
  }
  var Uu = null;
  function As(e) {
    if (Uu = null, e = Ta(e), e !== null) {
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
    return Uu = e, null;
  }
  function op(e) {
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
        switch (_v()) {
          case pc:
            return 2;
          case hc:
            return 8;
          case El:
          case bv:
            return 32;
          case vc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Os = !1, Ln = null, Vn = null, Gn = null, al = /* @__PURE__ */ new Map(), il = /* @__PURE__ */ new Map(), Qn = [], Ny = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function rp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ln = null;
        break;
      case "dragenter":
      case "dragleave":
        Vn = null;
        break;
      case "mouseover":
      case "mouseout":
        Gn = null;
        break;
      case "pointerover":
      case "pointerout":
        al.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        il.delete(t.pointerId);
    }
  }
  function ll(e, t, a, l, r, s) {
    return e === null || e.nativeEvent !== s ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: s,
      targetContainers: [r]
    }, t !== null && (t = Ea(t), t !== null && lp(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, r !== null && t.indexOf(r) === -1 && t.push(r), e);
  }
  function Zy(e, t, a, l, r) {
    switch (t) {
      case "focusin":
        return Ln = ll(
          Ln,
          e,
          t,
          a,
          l,
          r
        ), !0;
      case "dragenter":
        return Vn = ll(
          Vn,
          e,
          t,
          a,
          l,
          r
        ), !0;
      case "mouseover":
        return Gn = ll(
          Gn,
          e,
          t,
          a,
          l,
          r
        ), !0;
      case "pointerover":
        var s = r.pointerId;
        return al.set(
          s,
          ll(
            al.get(s) || null,
            e,
            t,
            a,
            l,
            r
          )
        ), !0;
      case "gotpointercapture":
        return s = r.pointerId, il.set(
          s,
          ll(
            il.get(s) || null,
            e,
            t,
            a,
            l,
            r
          )
        ), !0;
    }
    return !1;
  }
  function sp(e) {
    var t = Ta(e.target);
    if (t !== null) {
      var a = f(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = d(a), t !== null) {
            e.blockedOn = t, zc(e.priority, function() {
              up(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(a), t !== null) {
            e.blockedOn = t, zc(e.priority, function() {
              up(a);
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
  function Yu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Es(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Ao = l, a.target.dispatchEvent(l), Ao = null;
      } else
        return t = Ea(a), t !== null && lp(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function cp(e, t, a) {
    Yu(e) && a.delete(t);
  }
  function Ry() {
    Os = !1, Ln !== null && Yu(Ln) && (Ln = null), Vn !== null && Yu(Vn) && (Vn = null), Gn !== null && Yu(Gn) && (Gn = null), al.forEach(cp), il.forEach(cp);
  }
  function Xu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Os || (Os = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      Ry
    )));
  }
  var Hu = null;
  function fp(e) {
    Hu !== e && (Hu = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        Hu === e && (Hu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], r = e[t + 2];
          if (typeof l != "function") {
            if (As(l || a) === null)
              continue;
            break;
          }
          var s = Ea(a);
          s !== null && (e.splice(t, 3), t -= 3, Er(
            s,
            {
              pending: !0,
              data: r,
              method: a.method,
              action: l
            },
            l,
            r
          ));
        }
      }
    ));
  }
  function oi(e) {
    function t(b) {
      return Xu(b, e);
    }
    Ln !== null && Xu(Ln, e), Vn !== null && Xu(Vn, e), Gn !== null && Xu(Gn, e), al.forEach(t), il.forEach(t);
    for (var a = 0; a < Qn.length; a++) {
      var l = Qn[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Qn.length && (a = Qn[0], a.blockedOn === null); )
      sp(a), a.blockedOn === null && Qn.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var r = a[l], s = a[l + 1], m = r[gt] || null;
        if (typeof s == "function")
          m || fp(a);
        else if (m) {
          var g = null;
          if (s && s.hasAttribute("formAction")) {
            if (r = s, m = s[gt] || null)
              g = m.formAction;
            else if (As(r) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? a[l + 1] = g : (a.splice(l, 3), l -= 3), fp(a);
        }
      }
  }
  function dp() {
    function e(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(m) {
            return r = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      r !== null && (r(), r = null), l || setTimeout(a, 20);
    }
    function a() {
      if (!l && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, r = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), r !== null && (r(), r = null);
      };
    }
  }
  function Cs(e) {
    this._internalRoot = e;
  }
  Bu.prototype.render = Cs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current, l = Nt();
    ap(a, l, e, t, null, null);
  }, Bu.prototype.unmount = Cs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ap(e.current, 2, null, e, null, null), Su(), t[xa] = null;
    }
  };
  function Bu(e) {
    this._internalRoot = e;
  }
  Bu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Sc();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Qn.length && t !== 0 && t < Qn[a].priority; a++) ;
      Qn.splice(a, 0, e), a === 0 && sp(e);
    }
  };
  var mp = i.version;
  if (mp !== "19.2.8")
    throw Error(
      o(
        527,
        mp,
        "19.2.8"
      )
    );
  L.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = h(t), e = e !== null ? _(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Uy = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: k,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qu.isDisabled && qu.supportsFiber)
      try {
        pi = qu.inject(
          Uy
        ), Et = qu;
      } catch {
      }
  }
  return ol.createRoot = function(e, t) {
    if (!c(e)) throw Error(o(299));
    var a = !1, l = "", r = bd, s = Sd, m = zd;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (r = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError)), t = tp(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      null,
      r,
      s,
      m,
      dp
    ), e[xa] = t.current, cs(e), new Cs(t);
  }, ol.hydrateRoot = function(e, t, a) {
    if (!c(e)) throw Error(o(299));
    var l = !1, r = "", s = bd, m = Sd, g = zd, b = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (r = a.identifierPrefix), a.onUncaughtError !== void 0 && (s = a.onUncaughtError), a.onCaughtError !== void 0 && (m = a.onCaughtError), a.onRecoverableError !== void 0 && (g = a.onRecoverableError), a.formState !== void 0 && (b = a.formState)), t = tp(
      e,
      1,
      !0,
      t,
      a ?? null,
      l,
      r,
      b,
      s,
      m,
      g,
      dp
    ), t.context = np(null), a = t.current, l = Nt(), l = _o(l), r = kn(l), r.callback = null, Dn(a, r, l), a = l, t.current.lanes = a, vi(t, a), an(t), e[xa] = t.current, cs(e), new Bu(t);
  }, ol.version = "19.2.8", ol;
}
var wp;
function Qy() {
  if (wp) return js.exports;
  wp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), js.exports = Gy(), js.exports;
}
var Ky = Qy();
const Jy = /* @__PURE__ */ mh(Ky);
var ie = Fs();
const oo = /* @__PURE__ */ mh(ie);
const ph = (...n) => n.filter((i, u, o) => !!i && i.trim() !== "" && o.indexOf(i) === u).join(" ").trim();
const Wy = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const Py = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, u, o) => o ? o.toUpperCase() : u.toLowerCase()
);
const xp = (n) => {
  const i = Py(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
var Fy = {
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
const Iy = (n) => {
  for (const i in n)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
};
const e0 = ie.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: o,
    className: c = "",
    children: f,
    iconNode: d,
    ...p
  }, v) => ie.createElement(
    "svg",
    {
      ref: v,
      ...Fy,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: o ? Number(u) * 24 / Number(i) : u,
      className: ph("lucide", c),
      ...!f && !Iy(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...d.map(([h, _]) => ie.createElement(h, _)),
      ...Array.isArray(f) ? f : [f]
    ]
  )
);
const $e = (n, i) => {
  const u = ie.forwardRef(
    ({ className: o, ...c }, f) => ie.createElement(e0, {
      ref: f,
      iconNode: i,
      className: ph(
        `lucide-${Wy(xp(n))}`,
        `lucide-${n}`,
        o
      ),
      ...c
    })
  );
  return u.displayName = xp(n), u;
};
const t0 = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Tp = $e("arrow-down", t0);
const n0 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Ep = $e("arrow-up", n0);
const a0 = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], i0 = $e("battery", a0);
const l0 = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], u0 = $e("clock-3", l0);
const o0 = [
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
], r0 = $e("droplets", o0);
const s0 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Ap = $e("house", s0);
const c0 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], f0 = $e("lock-open", c0);
const d0 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], hh = $e("lock", d0);
const m0 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], p0 = $e("map-pin", m0);
const h0 = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], v0 = $e("pause", h0);
const g0 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], y0 = $e("play", g0);
const _0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Op = $e("plus", _0);
const b0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], S0 = $e("rotate-ccw", b0);
const z0 = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
], w0 = $e("scan-line", z0);
const x0 = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], T0 = $e("sliders-horizontal", x0);
const E0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], A0 = $e("square", E0);
const O0 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], C0 = $e("timer", O0);
const M0 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Fu = $e("trash-2", M0);
const j0 = [
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
], Cp = $e("waves", j0);
const k0 = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
], Mp = $e("wind", k0);
const D0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Is = $e("x", D0);
const N0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Z0 = $e("zoom-in", N0);
const R0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], U0 = $e("zoom-out", R0);
var jp;
function U(n, i, u) {
  function o(p, v) {
    if (p._zod || Object.defineProperty(p, "_zod", {
      value: {
        def: v,
        constr: d,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), p._zod.traits.has(n))
      return;
    p._zod.traits.add(n), i(p, v);
    const h = d.prototype, _ = Object.keys(h);
    for (let S = 0; S < _.length; S++) {
      const x = _[S];
      x in p || (p[x] = h[x].bind(p));
    }
  }
  const c = u?.Parent ?? Object;
  class f extends c {
  }
  Object.defineProperty(f, "name", { value: n });
  function d(p) {
    var v;
    const h = u?.Parent ? new f() : this;
    o(h, p), (v = h._zod).deferred ?? (v.deferred = []);
    for (const _ of h._zod.deferred)
      _();
    return h;
  }
  return Object.defineProperty(d, "init", { value: o }), Object.defineProperty(d, Symbol.hasInstance, {
    value: (p) => u?.Parent && p instanceof u.Parent ? !0 : p?._zod?.traits?.has(n)
  }), Object.defineProperty(d, "name", { value: n }), d;
}
class si extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class vh extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
(jp = globalThis).__zod_globalConfig ?? (jp.__zod_globalConfig = {});
const ec = globalThis.__zod_globalConfig;
function Sa(n) {
  return ec;
}
function gh(n) {
  const i = Object.values(n).filter((o) => typeof o == "number");
  return Object.entries(n).filter(([o, c]) => i.indexOf(+o) === -1).map(([o, c]) => c);
}
function Gs(n, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
function tc(n) {
  return {
    get value() {
      {
        const i = n();
        return Object.defineProperty(this, "value", { value: i }), i;
      }
    }
  };
}
function nc(n) {
  return n == null;
}
function ac(n) {
  const i = n.startsWith("^") ? 1 : 0, u = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(i, u);
}
function Y0(n, i) {
  const u = n / i, o = Math.round(u), c = Number.EPSILON * Math.max(Math.abs(u), 1);
  return Math.abs(u - o) < c ? 0 : u - o;
}
const kp = /* @__PURE__ */ Symbol("evaluating");
function Ze(n, i, u) {
  let o;
  Object.defineProperty(n, i, {
    get() {
      if (o !== kp)
        return o === void 0 && (o = kp, o = u()), o;
    },
    set(c) {
      Object.defineProperty(n, i, {
        value: c
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function wa(n, i, u) {
  Object.defineProperty(n, i, {
    value: u,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Pn(...n) {
  const i = {};
  for (const u of n) {
    const o = Object.getOwnPropertyDescriptors(u);
    Object.assign(i, o);
  }
  return Object.defineProperties({}, i);
}
function Dp(n) {
  return JSON.stringify(n);
}
function X0(n) {
  return n.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const yh = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function Iu(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const H0 = /* @__PURE__ */ tc(() => {
  if (ec.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function hl(n) {
  if (Iu(n) === !1)
    return !1;
  const i = n.constructor;
  if (i === void 0 || typeof i != "function")
    return !0;
  const u = i.prototype;
  return !(Iu(u) === !1 || Object.prototype.hasOwnProperty.call(u, "isPrototypeOf") === !1);
}
function _h(n) {
  return hl(n) ? { ...n } : Array.isArray(n) ? [...n] : n instanceof Map ? new Map(n) : n instanceof Set ? new Set(n) : n;
}
const B0 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function ci(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Fn(n, i, u) {
  const o = new n._zod.constr(i ?? n._zod.def);
  return (!i || u?.parent) && (o._zod.parent = n), o;
}
function te(n) {
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
function q0(n) {
  return Object.keys(n).filter((i) => n[i]._zod.optin === "optional" && n[i]._zod.optout === "optional");
}
const $0 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function L0(n, i) {
  const u = n._zod.def, o = u.checks;
  if (o && o.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const f = Pn(n._zod.def, {
    get shape() {
      const d = {};
      for (const p in i) {
        if (!(p in u.shape))
          throw new Error(`Unrecognized key: "${p}"`);
        i[p] && (d[p] = u.shape[p]);
      }
      return wa(this, "shape", d), d;
    },
    checks: []
  });
  return Fn(n, f);
}
function V0(n, i) {
  const u = n._zod.def, o = u.checks;
  if (o && o.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const f = Pn(n._zod.def, {
    get shape() {
      const d = { ...n._zod.def.shape };
      for (const p in i) {
        if (!(p in u.shape))
          throw new Error(`Unrecognized key: "${p}"`);
        i[p] && delete d[p];
      }
      return wa(this, "shape", d), d;
    },
    checks: []
  });
  return Fn(n, f);
}
function G0(n, i) {
  if (!hl(i))
    throw new Error("Invalid input to extend: expected a plain object");
  const u = n._zod.def.checks;
  if (u && u.length > 0) {
    const f = n._zod.def.shape;
    for (const d in i)
      if (Object.getOwnPropertyDescriptor(f, d) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const c = Pn(n._zod.def, {
    get shape() {
      const f = { ...n._zod.def.shape, ...i };
      return wa(this, "shape", f), f;
    }
  });
  return Fn(n, c);
}
function Q0(n, i) {
  if (!hl(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const u = Pn(n._zod.def, {
    get shape() {
      const o = { ...n._zod.def.shape, ...i };
      return wa(this, "shape", o), o;
    }
  });
  return Fn(n, u);
}
function K0(n, i) {
  if (n._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const u = Pn(n._zod.def, {
    get shape() {
      const o = { ...n._zod.def.shape, ...i._zod.def.shape };
      return wa(this, "shape", o), o;
    },
    get catchall() {
      return i._zod.def.catchall;
    },
    checks: i._zod.def.checks ?? []
  });
  return Fn(n, u);
}
function J0(n, i, u) {
  const c = i._zod.def.checks;
  if (c && c.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const d = Pn(i._zod.def, {
    get shape() {
      const p = i._zod.def.shape, v = { ...p };
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
      return wa(this, "shape", v), v;
    },
    checks: []
  });
  return Fn(i, d);
}
function W0(n, i, u) {
  const o = Pn(i._zod.def, {
    get shape() {
      const c = i._zod.def.shape, f = { ...c };
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
      return wa(this, "shape", f), f;
    }
  });
  return Fn(i, o);
}
function ri(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let u = i; u < n.issues.length; u++)
    if (n.issues[u]?.continue !== !0)
      return !0;
  return !1;
}
function P0(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let u = i; u < n.issues.length; u++)
    if (n.issues[u]?.continue === !1)
      return !0;
  return !1;
}
function bh(n, i) {
  return i.map((u) => {
    var o;
    return (o = u).path ?? (o.path = []), u.path.unshift(n), u;
  });
}
function $u(n) {
  return typeof n == "string" ? n : n?.message;
}
function za(n, i, u) {
  const o = n.message ? n.message : $u(n.inst?._zod.def?.error?.(n)) ?? $u(i?.error?.(n)) ?? $u(u.customError?.(n)) ?? $u(u.localeError?.(n)) ?? "Invalid input", { inst: c, continue: f, input: d, ...p } = n;
  return p.path ?? (p.path = []), p.message = o, i?.reportInput && (p.input = d), p;
}
function ic(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function vl(...n) {
  const [i, u, o] = n;
  return typeof i == "string" ? {
    message: i,
    code: "custom",
    input: u,
    inst: o
  } : { ...i };
}
const Sh = (n, i) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: i,
    enumerable: !1
  }), n.message = JSON.stringify(i, Gs, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, zh = U("$ZodError", Sh), wh = U("$ZodError", Sh, { Parent: Error });
function F0(n, i = (u) => u.message) {
  const u = {}, o = [];
  for (const c of n.issues)
    c.path.length > 0 ? (u[c.path[0]] = u[c.path[0]] || [], u[c.path[0]].push(i(c))) : o.push(i(c));
  return { formErrors: o, fieldErrors: u };
}
function I0(n, i = (u) => u.message) {
  const u = { _errors: [] }, o = (c, f = []) => {
    for (const d of c.issues)
      if (d.code === "invalid_union" && d.errors.length)
        d.errors.map((p) => o({ issues: p }, [...f, ...d.path]));
      else if (d.code === "invalid_key")
        o({ issues: d.issues }, [...f, ...d.path]);
      else if (d.code === "invalid_element")
        o({ issues: d.issues }, [...f, ...d.path]);
      else {
        const p = [...f, ...d.path];
        if (p.length === 0)
          u._errors.push(i(d));
        else {
          let v = u, h = 0;
          for (; h < p.length; ) {
            const _ = p[h];
            h === p.length - 1 ? (v[_] = v[_] || { _errors: [] }, v[_]._errors.push(i(d))) : v[_] = v[_] || { _errors: [] }, v = v[_], h++;
          }
        }
      }
  };
  return o(n), u;
}
const lc = (n) => (i, u, o, c) => {
  const f = o ? { ...o, async: !1 } : { async: !1 }, d = i._zod.run({ value: u, issues: [] }, f);
  if (d instanceof Promise)
    throw new si();
  if (d.issues.length) {
    const p = new (c?.Err ?? n)(d.issues.map((v) => za(v, f, Sa())));
    throw yh(p, c?.callee), p;
  }
  return d.value;
}, uc = (n) => async (i, u, o, c) => {
  const f = o ? { ...o, async: !0 } : { async: !0 };
  let d = i._zod.run({ value: u, issues: [] }, f);
  if (d instanceof Promise && (d = await d), d.issues.length) {
    const p = new (c?.Err ?? n)(d.issues.map((v) => za(v, f, Sa())));
    throw yh(p, c?.callee), p;
  }
  return d.value;
}, ro = (n) => (i, u, o) => {
  const c = o ? { ...o, async: !1 } : { async: !1 }, f = i._zod.run({ value: u, issues: [] }, c);
  if (f instanceof Promise)
    throw new si();
  return f.issues.length ? {
    success: !1,
    error: new (n ?? zh)(f.issues.map((d) => za(d, c, Sa())))
  } : { success: !0, data: f.value };
}, e_ = /* @__PURE__ */ ro(wh), so = (n) => async (i, u, o) => {
  const c = o ? { ...o, async: !0 } : { async: !0 };
  let f = i._zod.run({ value: u, issues: [] }, c);
  return f instanceof Promise && (f = await f), f.issues.length ? {
    success: !1,
    error: new n(f.issues.map((d) => za(d, c, Sa())))
  } : { success: !0, data: f.value };
}, t_ = /* @__PURE__ */ so(wh), n_ = (n) => (i, u, o) => {
  const c = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return lc(n)(i, u, c);
}, a_ = (n) => (i, u, o) => lc(n)(i, u, o), i_ = (n) => async (i, u, o) => {
  const c = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return uc(n)(i, u, c);
}, l_ = (n) => async (i, u, o) => uc(n)(i, u, o), u_ = (n) => (i, u, o) => {
  const c = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return ro(n)(i, u, c);
}, o_ = (n) => (i, u, o) => ro(n)(i, u, o), r_ = (n) => async (i, u, o) => {
  const c = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return so(n)(i, u, c);
}, s_ = (n) => async (i, u, o) => so(n)(i, u, o), c_ = /^[cC][0-9a-z]{6,}$/, f_ = /^[0-9a-z]+$/, d_ = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, m_ = /^[0-9a-vA-V]{20}$/, p_ = /^[A-Za-z0-9]{27}$/, h_ = /^[a-zA-Z0-9_-]{21}$/, v_ = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, g_ = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Np = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, y_ = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, __ = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function b_() {
  return new RegExp(__, "u");
}
const S_ = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, z_ = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, w_ = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, x_ = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, T_ = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, xh = /^[A-Za-z0-9_-]*$/, E_ = /^https?$/, A_ = /^\+[1-9]\d{6,14}$/, Th = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", O_ = /* @__PURE__ */ new RegExp(`^${Th}$`);
function Eh(n) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${i}` : n.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${n.precision}}` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function C_(n) {
  return new RegExp(`^${Eh(n)}$`);
}
function M_(n) {
  const i = Eh({ precision: n.precision }), u = ["Z"];
  n.local && u.push(""), n.offset && u.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const o = `${i}(?:${u.join("|")})`;
  return new RegExp(`^${Th}T(?:${o})$`);
}
const j_ = (n) => {
  const i = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${i}$`);
}, k_ = /^-?\d+$/, D_ = /^-?\d+(?:\.\d+)?$/, N_ = /^(?:true|false)$/i, Z_ = /^[^A-Z]*$/, R_ = /^[^a-z]*$/, xt = /* @__PURE__ */ U("$ZodCheck", (n, i) => {
  var u;
  n._zod ?? (n._zod = {}), n._zod.def = i, (u = n._zod).onattach ?? (u.onattach = []);
}), Ah = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Oh = /* @__PURE__ */ U("$ZodCheckLessThan", (n, i) => {
  xt.init(n, i);
  const u = Ah[typeof i.value];
  n._zod.onattach.push((o) => {
    const c = o._zod.bag, f = (i.inclusive ? c.maximum : c.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    i.value < f && (i.inclusive ? c.maximum = i.value : c.exclusiveMaximum = i.value);
  }), n._zod.check = (o) => {
    (i.inclusive ? o.value <= i.value : o.value < i.value) || o.issues.push({
      origin: u,
      code: "too_big",
      maximum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: o.value,
      inclusive: i.inclusive,
      inst: n,
      continue: !i.abort
    });
  };
}), Ch = /* @__PURE__ */ U("$ZodCheckGreaterThan", (n, i) => {
  xt.init(n, i);
  const u = Ah[typeof i.value];
  n._zod.onattach.push((o) => {
    const c = o._zod.bag, f = (i.inclusive ? c.minimum : c.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    i.value > f && (i.inclusive ? c.minimum = i.value : c.exclusiveMinimum = i.value);
  }), n._zod.check = (o) => {
    (i.inclusive ? o.value >= i.value : o.value > i.value) || o.issues.push({
      origin: u,
      code: "too_small",
      minimum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: o.value,
      inclusive: i.inclusive,
      inst: n,
      continue: !i.abort
    });
  };
}), U_ = /* @__PURE__ */ U("$ZodCheckMultipleOf", (n, i) => {
  xt.init(n, i), n._zod.onattach.push((u) => {
    var o;
    (o = u._zod.bag).multipleOf ?? (o.multipleOf = i.value);
  }), n._zod.check = (u) => {
    if (typeof u.value != typeof i.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof u.value == "bigint" ? u.value % i.value === BigInt(0) : Y0(u.value, i.value) === 0) || u.issues.push({
      origin: typeof u.value,
      code: "not_multiple_of",
      divisor: i.value,
      input: u.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Y_ = /* @__PURE__ */ U("$ZodCheckNumberFormat", (n, i) => {
  xt.init(n, i), i.format = i.format || "float64";
  const u = i.format?.includes("int"), o = u ? "int" : "number", [c, f] = $0[i.format];
  n._zod.onattach.push((d) => {
    const p = d._zod.bag;
    p.format = i.format, p.minimum = c, p.maximum = f, u && (p.pattern = k_);
  }), n._zod.check = (d) => {
    const p = d.value;
    if (u) {
      if (!Number.isInteger(p)) {
        d.issues.push({
          expected: o,
          format: i.format,
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
          origin: o,
          inclusive: !0,
          continue: !i.abort
        }) : d.issues.push({
          input: p,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: o,
          inclusive: !0,
          continue: !i.abort
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
      continue: !i.abort
    }), p > f && d.issues.push({
      origin: "number",
      input: p,
      code: "too_big",
      maximum: f,
      inclusive: !0,
      inst: n,
      continue: !i.abort
    });
  };
}), X_ = /* @__PURE__ */ U("$ZodCheckMaxLength", (n, i) => {
  var u;
  xt.init(n, i), (u = n._zod.def).when ?? (u.when = (o) => {
    const c = o.value;
    return !nc(c) && c.length !== void 0;
  }), n._zod.onattach.push((o) => {
    const c = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    i.maximum < c && (o._zod.bag.maximum = i.maximum);
  }), n._zod.check = (o) => {
    const c = o.value;
    if (c.length <= i.maximum)
      return;
    const d = ic(c);
    o.issues.push({
      origin: d,
      code: "too_big",
      maximum: i.maximum,
      inclusive: !0,
      input: c,
      inst: n,
      continue: !i.abort
    });
  };
}), H_ = /* @__PURE__ */ U("$ZodCheckMinLength", (n, i) => {
  var u;
  xt.init(n, i), (u = n._zod.def).when ?? (u.when = (o) => {
    const c = o.value;
    return !nc(c) && c.length !== void 0;
  }), n._zod.onattach.push((o) => {
    const c = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    i.minimum > c && (o._zod.bag.minimum = i.minimum);
  }), n._zod.check = (o) => {
    const c = o.value;
    if (c.length >= i.minimum)
      return;
    const d = ic(c);
    o.issues.push({
      origin: d,
      code: "too_small",
      minimum: i.minimum,
      inclusive: !0,
      input: c,
      inst: n,
      continue: !i.abort
    });
  };
}), B_ = /* @__PURE__ */ U("$ZodCheckLengthEquals", (n, i) => {
  var u;
  xt.init(n, i), (u = n._zod.def).when ?? (u.when = (o) => {
    const c = o.value;
    return !nc(c) && c.length !== void 0;
  }), n._zod.onattach.push((o) => {
    const c = o._zod.bag;
    c.minimum = i.length, c.maximum = i.length, c.length = i.length;
  }), n._zod.check = (o) => {
    const c = o.value, f = c.length;
    if (f === i.length)
      return;
    const d = ic(c), p = f > i.length;
    o.issues.push({
      origin: d,
      ...p ? { code: "too_big", maximum: i.length } : { code: "too_small", minimum: i.length },
      inclusive: !0,
      exact: !0,
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
}), co = /* @__PURE__ */ U("$ZodCheckStringFormat", (n, i) => {
  var u, o;
  xt.init(n, i), n._zod.onattach.push((c) => {
    const f = c._zod.bag;
    f.format = i.format, i.pattern && (f.patterns ?? (f.patterns = /* @__PURE__ */ new Set()), f.patterns.add(i.pattern));
  }), i.pattern ? (u = n._zod).check ?? (u.check = (c) => {
    i.pattern.lastIndex = 0, !i.pattern.test(c.value) && c.issues.push({
      origin: "string",
      code: "invalid_format",
      format: i.format,
      input: c.value,
      ...i.pattern ? { pattern: i.pattern.toString() } : {},
      inst: n,
      continue: !i.abort
    });
  }) : (o = n._zod).check ?? (o.check = () => {
  });
}), q_ = /* @__PURE__ */ U("$ZodCheckRegex", (n, i) => {
  co.init(n, i), n._zod.check = (u) => {
    i.pattern.lastIndex = 0, !i.pattern.test(u.value) && u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: u.value,
      pattern: i.pattern.toString(),
      inst: n,
      continue: !i.abort
    });
  };
}), $_ = /* @__PURE__ */ U("$ZodCheckLowerCase", (n, i) => {
  i.pattern ?? (i.pattern = Z_), co.init(n, i);
}), L_ = /* @__PURE__ */ U("$ZodCheckUpperCase", (n, i) => {
  i.pattern ?? (i.pattern = R_), co.init(n, i);
}), V_ = /* @__PURE__ */ U("$ZodCheckIncludes", (n, i) => {
  xt.init(n, i);
  const u = ci(i.includes), o = new RegExp(typeof i.position == "number" ? `^.{${i.position}}${u}` : u);
  i.pattern = o, n._zod.onattach.push((c) => {
    const f = c._zod.bag;
    f.patterns ?? (f.patterns = /* @__PURE__ */ new Set()), f.patterns.add(o);
  }), n._zod.check = (c) => {
    c.value.includes(i.includes, i.position) || c.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: i.includes,
      input: c.value,
      inst: n,
      continue: !i.abort
    });
  };
}), G_ = /* @__PURE__ */ U("$ZodCheckStartsWith", (n, i) => {
  xt.init(n, i);
  const u = new RegExp(`^${ci(i.prefix)}.*`);
  i.pattern ?? (i.pattern = u), n._zod.onattach.push((o) => {
    const c = o._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(u);
  }), n._zod.check = (o) => {
    o.value.startsWith(i.prefix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: i.prefix,
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Q_ = /* @__PURE__ */ U("$ZodCheckEndsWith", (n, i) => {
  xt.init(n, i);
  const u = new RegExp(`.*${ci(i.suffix)}$`);
  i.pattern ?? (i.pattern = u), n._zod.onattach.push((o) => {
    const c = o._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(u);
  }), n._zod.check = (o) => {
    o.value.endsWith(i.suffix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: i.suffix,
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
}), K_ = /* @__PURE__ */ U("$ZodCheckOverwrite", (n, i) => {
  xt.init(n, i), n._zod.check = (u) => {
    u.value = i.tx(u.value);
  };
});
class J_ {
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
    const o = i.split(`
`).filter((d) => d), c = Math.min(...o.map((d) => d.length - d.trimStart().length)), f = o.map((d) => d.slice(c)).map((d) => " ".repeat(this.indent * 2) + d);
    for (const d of f)
      this.content.push(d);
  }
  compile() {
    const i = Function, u = this?.args, c = [...(this?.content ?? [""]).map((f) => `  ${f}`)];
    return new i(...u, c.join(`
`));
  }
}
const W_ = {
  major: 4,
  minor: 4,
  patch: 3
}, Ke = /* @__PURE__ */ U("$ZodType", (n, i) => {
  var u;
  n ?? (n = {}), n._zod.def = i, n._zod.bag = n._zod.bag || {}, n._zod.version = W_;
  const o = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && o.unshift(n);
  for (const c of o)
    for (const f of c._zod.onattach)
      f(n);
  if (o.length === 0)
    (u = n._zod).deferred ?? (u.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const c = (d, p, v) => {
      let h = ri(d), _;
      for (const S of p) {
        if (S._zod.def.when) {
          if (P0(d) || !S._zod.def.when(d))
            continue;
        } else if (h)
          continue;
        const x = d.issues.length, E = S._zod.check(d);
        if (E instanceof Promise && v?.async === !1)
          throw new si();
        if (_ || E instanceof Promise)
          _ = (_ ?? Promise.resolve()).then(async () => {
            await E, d.issues.length !== x && (h || (h = ri(d, x)));
          });
        else {
          if (d.issues.length === x)
            continue;
          h || (h = ri(d, x));
        }
      }
      return _ ? _.then(() => d) : d;
    }, f = (d, p, v) => {
      if (ri(d))
        return d.aborted = !0, d;
      const h = c(p, o, v);
      if (h instanceof Promise) {
        if (v.async === !1)
          throw new si();
        return h.then((_) => n._zod.parse(_, v));
      }
      return n._zod.parse(h, v);
    };
    n._zod.run = (d, p) => {
      if (p.skipChecks)
        return n._zod.parse(d, p);
      if (p.direction === "backward") {
        const h = n._zod.parse({ value: d.value, issues: [] }, { ...p, skipChecks: !0 });
        return h instanceof Promise ? h.then((_) => f(_, d, p)) : f(h, d, p);
      }
      const v = n._zod.parse(d, p);
      if (v instanceof Promise) {
        if (p.async === !1)
          throw new si();
        return v.then((h) => c(h, o, p));
      }
      return c(v, o, p);
    };
  }
  Ze(n, "~standard", () => ({
    validate: (c) => {
      try {
        const f = e_(n, c);
        return f.success ? { value: f.data } : { issues: f.error?.issues };
      } catch {
        return t_(n, c).then((d) => d.success ? { value: d.data } : { issues: d.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), oc = /* @__PURE__ */ U("$ZodString", (n, i) => {
  Ke.init(n, i), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? j_(n._zod.bag), n._zod.parse = (u, o) => {
    if (i.coerce)
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
}), Be = /* @__PURE__ */ U("$ZodStringFormat", (n, i) => {
  co.init(n, i), oc.init(n, i);
}), P_ = /* @__PURE__ */ U("$ZodGUID", (n, i) => {
  i.pattern ?? (i.pattern = g_), Be.init(n, i);
}), F_ = /* @__PURE__ */ U("$ZodUUID", (n, i) => {
  if (i.version) {
    const o = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[i.version];
    if (o === void 0)
      throw new Error(`Invalid UUID version: "${i.version}"`);
    i.pattern ?? (i.pattern = Np(o));
  } else
    i.pattern ?? (i.pattern = Np());
  Be.init(n, i);
}), I_ = /* @__PURE__ */ U("$ZodEmail", (n, i) => {
  i.pattern ?? (i.pattern = y_), Be.init(n, i);
}), eb = /* @__PURE__ */ U("$ZodURL", (n, i) => {
  Be.init(n, i), n._zod.check = (u) => {
    try {
      const o = u.value.trim();
      if (!i.normalize && i.protocol?.source === E_.source && !/^https?:\/\//i.test(o)) {
        u.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: u.value,
          inst: n,
          continue: !i.abort
        });
        return;
      }
      const c = new URL(o);
      i.hostname && (i.hostname.lastIndex = 0, i.hostname.test(c.hostname) || u.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: i.hostname.source,
        input: u.value,
        inst: n,
        continue: !i.abort
      })), i.protocol && (i.protocol.lastIndex = 0, i.protocol.test(c.protocol.endsWith(":") ? c.protocol.slice(0, -1) : c.protocol) || u.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: i.protocol.source,
        input: u.value,
        inst: n,
        continue: !i.abort
      })), i.normalize ? u.value = c.href : u.value = o;
      return;
    } catch {
      u.issues.push({
        code: "invalid_format",
        format: "url",
        input: u.value,
        inst: n,
        continue: !i.abort
      });
    }
  };
}), tb = /* @__PURE__ */ U("$ZodEmoji", (n, i) => {
  i.pattern ?? (i.pattern = b_()), Be.init(n, i);
}), nb = /* @__PURE__ */ U("$ZodNanoID", (n, i) => {
  i.pattern ?? (i.pattern = h_), Be.init(n, i);
}), ab = /* @__PURE__ */ U("$ZodCUID", (n, i) => {
  i.pattern ?? (i.pattern = c_), Be.init(n, i);
}), ib = /* @__PURE__ */ U("$ZodCUID2", (n, i) => {
  i.pattern ?? (i.pattern = f_), Be.init(n, i);
}), lb = /* @__PURE__ */ U("$ZodULID", (n, i) => {
  i.pattern ?? (i.pattern = d_), Be.init(n, i);
}), ub = /* @__PURE__ */ U("$ZodXID", (n, i) => {
  i.pattern ?? (i.pattern = m_), Be.init(n, i);
}), ob = /* @__PURE__ */ U("$ZodKSUID", (n, i) => {
  i.pattern ?? (i.pattern = p_), Be.init(n, i);
}), rb = /* @__PURE__ */ U("$ZodISODateTime", (n, i) => {
  i.pattern ?? (i.pattern = M_(i)), Be.init(n, i);
}), sb = /* @__PURE__ */ U("$ZodISODate", (n, i) => {
  i.pattern ?? (i.pattern = O_), Be.init(n, i);
}), cb = /* @__PURE__ */ U("$ZodISOTime", (n, i) => {
  i.pattern ?? (i.pattern = C_(i)), Be.init(n, i);
}), fb = /* @__PURE__ */ U("$ZodISODuration", (n, i) => {
  i.pattern ?? (i.pattern = v_), Be.init(n, i);
}), db = /* @__PURE__ */ U("$ZodIPv4", (n, i) => {
  i.pattern ?? (i.pattern = S_), Be.init(n, i), n._zod.bag.format = "ipv4";
}), mb = /* @__PURE__ */ U("$ZodIPv6", (n, i) => {
  i.pattern ?? (i.pattern = z_), Be.init(n, i), n._zod.bag.format = "ipv6", n._zod.check = (u) => {
    try {
      new URL(`http://[${u.value}]`);
    } catch {
      u.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: u.value,
        inst: n,
        continue: !i.abort
      });
    }
  };
}), pb = /* @__PURE__ */ U("$ZodCIDRv4", (n, i) => {
  i.pattern ?? (i.pattern = w_), Be.init(n, i);
}), hb = /* @__PURE__ */ U("$ZodCIDRv6", (n, i) => {
  i.pattern ?? (i.pattern = x_), Be.init(n, i), n._zod.check = (u) => {
    const o = u.value.split("/");
    try {
      if (o.length !== 2)
        throw new Error();
      const [c, f] = o;
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
        continue: !i.abort
      });
    }
  };
});
function Mh(n) {
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
const vb = /* @__PURE__ */ U("$ZodBase64", (n, i) => {
  i.pattern ?? (i.pattern = T_), Be.init(n, i), n._zod.bag.contentEncoding = "base64", n._zod.check = (u) => {
    Mh(u.value) || u.issues.push({
      code: "invalid_format",
      format: "base64",
      input: u.value,
      inst: n,
      continue: !i.abort
    });
  };
});
function gb(n) {
  if (!xh.test(n))
    return !1;
  const i = n.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), u = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return Mh(u);
}
const yb = /* @__PURE__ */ U("$ZodBase64URL", (n, i) => {
  i.pattern ?? (i.pattern = xh), Be.init(n, i), n._zod.bag.contentEncoding = "base64url", n._zod.check = (u) => {
    gb(u.value) || u.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: u.value,
      inst: n,
      continue: !i.abort
    });
  };
}), _b = /* @__PURE__ */ U("$ZodE164", (n, i) => {
  i.pattern ?? (i.pattern = A_), Be.init(n, i);
});
function bb(n, i = null) {
  try {
    const u = n.split(".");
    if (u.length !== 3)
      return !1;
    const [o] = u;
    if (!o)
      return !1;
    const c = JSON.parse(atob(o));
    return !("typ" in c && c?.typ !== "JWT" || !c.alg || i && (!("alg" in c) || c.alg !== i));
  } catch {
    return !1;
  }
}
const Sb = /* @__PURE__ */ U("$ZodJWT", (n, i) => {
  Be.init(n, i), n._zod.check = (u) => {
    bb(u.value, i.alg) || u.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: u.value,
      inst: n,
      continue: !i.abort
    });
  };
}), jh = /* @__PURE__ */ U("$ZodNumber", (n, i) => {
  Ke.init(n, i), n._zod.pattern = n._zod.bag.pattern ?? D_, n._zod.parse = (u, o) => {
    if (i.coerce)
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
}), zb = /* @__PURE__ */ U("$ZodNumberFormat", (n, i) => {
  Y_.init(n, i), jh.init(n, i);
}), wb = /* @__PURE__ */ U("$ZodBoolean", (n, i) => {
  Ke.init(n, i), n._zod.pattern = N_, n._zod.parse = (u, o) => {
    if (i.coerce)
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
}), xb = /* @__PURE__ */ U("$ZodUnknown", (n, i) => {
  Ke.init(n, i), n._zod.parse = (u) => u;
}), Tb = /* @__PURE__ */ U("$ZodNever", (n, i) => {
  Ke.init(n, i), n._zod.parse = (u, o) => (u.issues.push({
    expected: "never",
    code: "invalid_type",
    input: u.value,
    inst: n
  }), u);
});
function Zp(n, i, u) {
  n.issues.length && i.issues.push(...bh(u, n.issues)), i.value[u] = n.value;
}
const Eb = /* @__PURE__ */ U("$ZodArray", (n, i) => {
  Ke.init(n, i), n._zod.parse = (u, o) => {
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
      const p = c[d], v = i.element._zod.run({
        value: p,
        issues: []
      }, o);
      v instanceof Promise ? f.push(v.then((h) => Zp(h, u, d))) : Zp(v, u, d);
    }
    return f.length ? Promise.all(f).then(() => u) : u;
  };
});
function eo(n, i, u, o, c, f) {
  const d = u in o;
  if (n.issues.length) {
    if (c && f && !d)
      return;
    i.issues.push(...bh(u, n.issues));
  }
  if (!d && !c) {
    n.issues.length || i.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [u]
    });
    return;
  }
  n.value === void 0 ? d && (i.value[u] = void 0) : i.value[u] = n.value;
}
function kh(n) {
  const i = Object.keys(n.shape);
  for (const o of i)
    if (!n.shape?.[o]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${o}": expected a Zod schema`);
  const u = q0(n.shape);
  return {
    ...n,
    keys: i,
    keySet: new Set(i),
    numKeys: i.length,
    optionalKeys: new Set(u)
  };
}
function Dh(n, i, u, o, c, f) {
  const d = [], p = c.keySet, v = c.catchall._zod, h = v.def.type, _ = v.optin === "optional", S = v.optout === "optional";
  for (const x in i) {
    if (x === "__proto__" || p.has(x))
      continue;
    if (h === "never") {
      d.push(x);
      continue;
    }
    const E = v.run({ value: i[x], issues: [] }, o);
    E instanceof Promise ? n.push(E.then((M) => eo(M, u, x, i, _, S))) : eo(E, u, x, i, _, S);
  }
  return d.length && u.issues.push({
    code: "unrecognized_keys",
    keys: d,
    input: i,
    inst: f
  }), n.length ? Promise.all(n).then(() => u) : u;
}
const Ab = /* @__PURE__ */ U("$ZodObject", (n, i) => {
  if (Ke.init(n, i), !Object.getOwnPropertyDescriptor(i, "shape")?.get) {
    const p = i.shape;
    Object.defineProperty(i, "shape", {
      get: () => {
        const v = { ...p };
        return Object.defineProperty(i, "shape", {
          value: v
        }), v;
      }
    });
  }
  const o = tc(() => kh(i));
  Ze(n._zod, "propValues", () => {
    const p = i.shape, v = {};
    for (const h in p) {
      const _ = p[h]._zod;
      if (_.values) {
        v[h] ?? (v[h] = /* @__PURE__ */ new Set());
        for (const S of _.values)
          v[h].add(S);
      }
    }
    return v;
  });
  const c = Iu, f = i.catchall;
  let d;
  n._zod.parse = (p, v) => {
    d ?? (d = o.value);
    const h = p.value;
    if (!c(h))
      return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: h,
        inst: n
      }), p;
    p.value = {};
    const _ = [], S = d.shape;
    for (const x of d.keys) {
      const E = S[x], M = E._zod.optin === "optional", B = E._zod.optout === "optional", H = E._zod.run({ value: h[x], issues: [] }, v);
      H instanceof Promise ? _.push(H.then((D) => eo(D, p, x, h, M, B))) : eo(H, p, x, h, M, B);
    }
    return f ? Dh(_, h, p, v, o.value, n) : _.length ? Promise.all(_).then(() => p) : p;
  };
}), Ob = /* @__PURE__ */ U("$ZodObjectJIT", (n, i) => {
  Ab.init(n, i);
  const u = n._zod.parse, o = tc(() => kh(i)), c = (x) => {
    const E = new J_(["shape", "payload", "ctx"]), M = o.value, B = ($) => {
      const X = Dp($);
      return `shape[${X}]._zod.run({ value: input[${X}], issues: [] }, ctx)`;
    };
    E.write("const input = payload.value;");
    const H = /* @__PURE__ */ Object.create(null);
    let D = 0;
    for (const $ of M.keys)
      H[$] = `key_${D++}`;
    E.write("const newResult = {};");
    for (const $ of M.keys) {
      const X = H[$], J = Dp($), ne = x[$], q = ne?._zod?.optin === "optional", re = ne?._zod?.optout === "optional";
      E.write(`const ${X} = ${B($)};`), q && re ? E.write(`
        if (${X}.issues.length) {
          if (${J} in input) {
            payload.issues = payload.issues.concat(${X}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${J}, ...iss.path] : [${J}]
            })));
          }
        }
        
        if (${X}.value === undefined) {
          if (${J} in input) {
            newResult[${J}] = undefined;
          }
        } else {
          newResult[${J}] = ${X}.value;
        }
        
      `) : q ? E.write(`
        if (${X}.issues.length) {
          payload.issues = payload.issues.concat(${X}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${J}, ...iss.path] : [${J}]
          })));
        }
        
        if (${X}.value === undefined) {
          if (${J} in input) {
            newResult[${J}] = undefined;
          }
        } else {
          newResult[${J}] = ${X}.value;
        }
        
      `) : E.write(`
        const ${X}_present = ${J} in input;
        if (${X}.issues.length) {
          payload.issues = payload.issues.concat(${X}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${J}, ...iss.path] : [${J}]
          })));
        }
        if (!${X}_present && !${X}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${J}]
          });
        }

        if (${X}_present) {
          if (${X}.value === undefined) {
            newResult[${J}] = undefined;
          } else {
            newResult[${J}] = ${X}.value;
          }
        }

      `);
    }
    E.write("payload.value = newResult;"), E.write("return payload;");
    const V = E.compile();
    return ($, X) => V(x, $, X);
  };
  let f;
  const d = Iu, p = !ec.jitless, h = p && H0.value, _ = i.catchall;
  let S;
  n._zod.parse = (x, E) => {
    S ?? (S = o.value);
    const M = x.value;
    return d(M) ? p && h && E?.async === !1 && E.jitless !== !0 ? (f || (f = c(i.shape)), x = f(x, E), _ ? Dh([], M, x, E, S, n) : x) : u(x, E) : (x.issues.push({
      expected: "object",
      code: "invalid_type",
      input: M,
      inst: n
    }), x);
  };
});
function Rp(n, i, u, o) {
  for (const f of n)
    if (f.issues.length === 0)
      return i.value = f.value, i;
  const c = n.filter((f) => !ri(f));
  return c.length === 1 ? (i.value = c[0].value, c[0]) : (i.issues.push({
    code: "invalid_union",
    input: i.value,
    inst: u,
    errors: n.map((f) => f.issues.map((d) => za(d, o, Sa())))
  }), i);
}
const Cb = /* @__PURE__ */ U("$ZodUnion", (n, i) => {
  Ke.init(n, i), Ze(n._zod, "optin", () => i.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), Ze(n._zod, "optout", () => i.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), Ze(n._zod, "values", () => {
    if (i.options.every((o) => o._zod.values))
      return new Set(i.options.flatMap((o) => Array.from(o._zod.values)));
  }), Ze(n._zod, "pattern", () => {
    if (i.options.every((o) => o._zod.pattern)) {
      const o = i.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${o.map((c) => ac(c.source)).join("|")})$`);
    }
  });
  const u = i.options.length === 1 ? i.options[0]._zod.run : null;
  n._zod.parse = (o, c) => {
    if (u)
      return u(o, c);
    let f = !1;
    const d = [];
    for (const p of i.options) {
      const v = p._zod.run({
        value: o.value,
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
    return f ? Promise.all(d).then((p) => Rp(p, o, n, c)) : Rp(d, o, n, c);
  };
}), Mb = /* @__PURE__ */ U("$ZodIntersection", (n, i) => {
  Ke.init(n, i), n._zod.parse = (u, o) => {
    const c = u.value, f = i.left._zod.run({ value: c, issues: [] }, o), d = i.right._zod.run({ value: c, issues: [] }, o);
    return f instanceof Promise || d instanceof Promise ? Promise.all([f, d]).then(([v, h]) => Up(u, v, h)) : Up(u, f, d);
  };
});
function Qs(n, i) {
  if (n === i)
    return { valid: !0, data: n };
  if (n instanceof Date && i instanceof Date && +n == +i)
    return { valid: !0, data: n };
  if (hl(n) && hl(i)) {
    const u = Object.keys(i), o = Object.keys(n).filter((f) => u.indexOf(f) !== -1), c = { ...n, ...i };
    for (const f of o) {
      const d = Qs(n[f], i[f]);
      if (!d.valid)
        return {
          valid: !1,
          mergeErrorPath: [f, ...d.mergeErrorPath]
        };
      c[f] = d.data;
    }
    return { valid: !0, data: c };
  }
  if (Array.isArray(n) && Array.isArray(i)) {
    if (n.length !== i.length)
      return { valid: !1, mergeErrorPath: [] };
    const u = [];
    for (let o = 0; o < n.length; o++) {
      const c = n[o], f = i[o], d = Qs(c, f);
      if (!d.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...d.mergeErrorPath]
        };
      u.push(d.data);
    }
    return { valid: !0, data: u };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Up(n, i, u) {
  const o = /* @__PURE__ */ new Map();
  let c;
  for (const p of i.issues)
    if (p.code === "unrecognized_keys") {
      c ?? (c = p);
      for (const v of p.keys)
        o.has(v) || o.set(v, {}), o.get(v).l = !0;
    } else
      n.issues.push(p);
  for (const p of u.issues)
    if (p.code === "unrecognized_keys")
      for (const v of p.keys)
        o.has(v) || o.set(v, {}), o.get(v).r = !0;
    else
      n.issues.push(p);
  const f = [...o].filter(([, p]) => p.l && p.r).map(([p]) => p);
  if (f.length && c && n.issues.push({ ...c, keys: f }), ri(n))
    return n;
  const d = Qs(i.value, u.value);
  if (!d.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(d.mergeErrorPath)}`);
  return n.value = d.data, n;
}
const jb = /* @__PURE__ */ U("$ZodEnum", (n, i) => {
  Ke.init(n, i);
  const u = gh(i.entries), o = new Set(u);
  n._zod.values = o, n._zod.pattern = new RegExp(`^(${u.filter((c) => B0.has(typeof c)).map((c) => typeof c == "string" ? ci(c) : c.toString()).join("|")})$`), n._zod.parse = (c, f) => {
    const d = c.value;
    return o.has(d) || c.issues.push({
      code: "invalid_value",
      values: u,
      input: d,
      inst: n
    }), c;
  };
}), kb = /* @__PURE__ */ U("$ZodLiteral", (n, i) => {
  if (Ke.init(n, i), i.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const u = new Set(i.values);
  n._zod.values = u, n._zod.pattern = new RegExp(`^(${i.values.map((o) => typeof o == "string" ? ci(o) : o ? ci(o.toString()) : String(o)).join("|")})$`), n._zod.parse = (o, c) => {
    const f = o.value;
    return u.has(f) || o.issues.push({
      code: "invalid_value",
      values: i.values,
      input: f,
      inst: n
    }), o;
  };
}), Db = /* @__PURE__ */ U("$ZodTransform", (n, i) => {
  Ke.init(n, i), n._zod.optin = "optional", n._zod.parse = (u, o) => {
    if (o.direction === "backward")
      throw new vh(n.constructor.name);
    const c = i.transform(u.value, u);
    if (o.async)
      return (c instanceof Promise ? c : Promise.resolve(c)).then((d) => (u.value = d, u.fallback = !0, u));
    if (c instanceof Promise)
      throw new si();
    return u.value = c, u.fallback = !0, u;
  };
});
function Yp(n, i) {
  return i === void 0 && (n.issues.length || n.fallback) ? { issues: [], value: void 0 } : n;
}
const Nh = /* @__PURE__ */ U("$ZodOptional", (n, i) => {
  Ke.init(n, i), n._zod.optin = "optional", n._zod.optout = "optional", Ze(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, void 0]) : void 0), Ze(n._zod, "pattern", () => {
    const u = i.innerType._zod.pattern;
    return u ? new RegExp(`^(${ac(u.source)})?$`) : void 0;
  }), n._zod.parse = (u, o) => {
    if (i.innerType._zod.optin === "optional") {
      const c = u.value, f = i.innerType._zod.run(u, o);
      return f instanceof Promise ? f.then((d) => Yp(d, c)) : Yp(f, c);
    }
    return u.value === void 0 ? u : i.innerType._zod.run(u, o);
  };
}), Nb = /* @__PURE__ */ U("$ZodExactOptional", (n, i) => {
  Nh.init(n, i), Ze(n._zod, "values", () => i.innerType._zod.values), Ze(n._zod, "pattern", () => i.innerType._zod.pattern), n._zod.parse = (u, o) => i.innerType._zod.run(u, o);
}), Zb = /* @__PURE__ */ U("$ZodNullable", (n, i) => {
  Ke.init(n, i), Ze(n._zod, "optin", () => i.innerType._zod.optin), Ze(n._zod, "optout", () => i.innerType._zod.optout), Ze(n._zod, "pattern", () => {
    const u = i.innerType._zod.pattern;
    return u ? new RegExp(`^(${ac(u.source)}|null)$`) : void 0;
  }), Ze(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, null]) : void 0), n._zod.parse = (u, o) => u.value === null ? u : i.innerType._zod.run(u, o);
}), Rb = /* @__PURE__ */ U("$ZodDefault", (n, i) => {
  Ke.init(n, i), n._zod.optin = "optional", Ze(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (u, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(u, o);
    if (u.value === void 0)
      return u.value = i.defaultValue, u;
    const c = i.innerType._zod.run(u, o);
    return c instanceof Promise ? c.then((f) => Xp(f, i)) : Xp(c, i);
  };
});
function Xp(n, i) {
  return n.value === void 0 && (n.value = i.defaultValue), n;
}
const Ub = /* @__PURE__ */ U("$ZodPrefault", (n, i) => {
  Ke.init(n, i), n._zod.optin = "optional", Ze(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (u, o) => (o.direction === "backward" || u.value === void 0 && (u.value = i.defaultValue), i.innerType._zod.run(u, o));
}), Yb = /* @__PURE__ */ U("$ZodNonOptional", (n, i) => {
  Ke.init(n, i), Ze(n._zod, "values", () => {
    const u = i.innerType._zod.values;
    return u ? new Set([...u].filter((o) => o !== void 0)) : void 0;
  }), n._zod.parse = (u, o) => {
    const c = i.innerType._zod.run(u, o);
    return c instanceof Promise ? c.then((f) => Hp(f, n)) : Hp(c, n);
  };
});
function Hp(n, i) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: i
  }), n;
}
const Xb = /* @__PURE__ */ U("$ZodCatch", (n, i) => {
  Ke.init(n, i), n._zod.optin = "optional", Ze(n._zod, "optout", () => i.innerType._zod.optout), Ze(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (u, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(u, o);
    const c = i.innerType._zod.run(u, o);
    return c instanceof Promise ? c.then((f) => (u.value = f.value, f.issues.length && (u.value = i.catchValue({
      ...u,
      error: {
        issues: f.issues.map((d) => za(d, o, Sa()))
      },
      input: u.value
    }), u.issues = [], u.fallback = !0), u)) : (u.value = c.value, c.issues.length && (u.value = i.catchValue({
      ...u,
      error: {
        issues: c.issues.map((f) => za(f, o, Sa()))
      },
      input: u.value
    }), u.issues = [], u.fallback = !0), u);
  };
}), Hb = /* @__PURE__ */ U("$ZodPipe", (n, i) => {
  Ke.init(n, i), Ze(n._zod, "values", () => i.in._zod.values), Ze(n._zod, "optin", () => i.in._zod.optin), Ze(n._zod, "optout", () => i.out._zod.optout), Ze(n._zod, "propValues", () => i.in._zod.propValues), n._zod.parse = (u, o) => {
    if (o.direction === "backward") {
      const f = i.out._zod.run(u, o);
      return f instanceof Promise ? f.then((d) => Lu(d, i.in, o)) : Lu(f, i.in, o);
    }
    const c = i.in._zod.run(u, o);
    return c instanceof Promise ? c.then((f) => Lu(f, i.out, o)) : Lu(c, i.out, o);
  };
});
function Lu(n, i, u) {
  return n.issues.length ? (n.aborted = !0, n) : i._zod.run({ value: n.value, issues: n.issues, fallback: n.fallback }, u);
}
const Bb = /* @__PURE__ */ U("$ZodReadonly", (n, i) => {
  Ke.init(n, i), Ze(n._zod, "propValues", () => i.innerType._zod.propValues), Ze(n._zod, "values", () => i.innerType._zod.values), Ze(n._zod, "optin", () => i.innerType?._zod?.optin), Ze(n._zod, "optout", () => i.innerType?._zod?.optout), n._zod.parse = (u, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(u, o);
    const c = i.innerType._zod.run(u, o);
    return c instanceof Promise ? c.then(Bp) : Bp(c);
  };
});
function Bp(n) {
  return n.value = Object.freeze(n.value), n;
}
const qb = /* @__PURE__ */ U("$ZodCustom", (n, i) => {
  xt.init(n, i), Ke.init(n, i), n._zod.parse = (u, o) => u, n._zod.check = (u) => {
    const o = u.value, c = i.fn(o);
    if (c instanceof Promise)
      return c.then((f) => qp(f, u, o, n));
    qp(c, u, o, n);
  };
});
function qp(n, i, u, o) {
  if (!n) {
    const c = {
      code: "custom",
      input: u,
      inst: o,
      // incorporates params.error into issue reporting
      path: [...o._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !o._zod.def.abort
      // params: inst._zod.def.params,
    };
    o._zod.def.params && (c.params = o._zod.def.params), i.issues.push(vl(c));
  }
}
var $p;
class $b {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(i, ...u) {
    const o = u[0];
    return this._map.set(i, o), o && typeof o == "object" && "id" in o && this._idmap.set(o.id, i), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(i) {
    const u = this._map.get(i);
    return u && typeof u == "object" && "id" in u && this._idmap.delete(u.id), this._map.delete(i), this;
  }
  get(i) {
    const u = i._zod.parent;
    if (u) {
      const o = { ...this.get(u) ?? {} };
      delete o.id;
      const c = { ...o, ...this._map.get(i) };
      return Object.keys(c).length ? c : void 0;
    }
    return this._map.get(i);
  }
  has(i) {
    return this._map.has(i);
  }
}
function Lb() {
  return new $b();
}
($p = globalThis).__zod_globalRegistry ?? ($p.__zod_globalRegistry = Lb());
const fl = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function Vb(n, i) {
  return new n({
    type: "string",
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Gb(n, i) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Lp(n, i) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Qb(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Kb(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Jb(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Wb(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Pb(n, i) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Fb(n, i) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Ib(n, i) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function e1(n, i) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function t1(n, i) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function n1(n, i) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function a1(n, i) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function i1(n, i) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function l1(n, i) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function u1(n, i) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function o1(n, i) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function r1(n, i) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function s1(n, i) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function c1(n, i) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function f1(n, i) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function d1(n, i) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function m1(n, i) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function p1(n, i) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function h1(n, i) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function v1(n, i) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function g1(n, i) {
  return new n({
    type: "number",
    checks: [],
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function y1(n, i) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function _1(n, i) {
  return new n({
    type: "boolean",
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function b1(n) {
  return new n({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function S1(n, i) {
  return new n({
    type: "never",
    ...te(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Vp(n, i) {
  return new Oh({
    check: "less_than",
    ...te(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Rs(n, i) {
  return new Oh({
    check: "less_than",
    ...te(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Gp(n, i) {
  return new Ch({
    check: "greater_than",
    ...te(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Us(n, i) {
  return new Ch({
    check: "greater_than",
    ...te(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Qp(n, i) {
  return new U_({
    check: "multiple_of",
    ...te(i),
    value: n
  });
}
// @__NO_SIDE_EFFECTS__
function Zh(n, i) {
  return new X_({
    check: "max_length",
    ...te(i),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function to(n, i) {
  return new H_({
    check: "min_length",
    ...te(i),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function Rh(n, i) {
  return new B_({
    check: "length_equals",
    ...te(i),
    length: n
  });
}
// @__NO_SIDE_EFFECTS__
function z1(n, i) {
  return new q_({
    check: "string_format",
    format: "regex",
    ...te(i),
    pattern: n
  });
}
// @__NO_SIDE_EFFECTS__
function w1(n) {
  return new $_({
    check: "string_format",
    format: "lowercase",
    ...te(n)
  });
}
// @__NO_SIDE_EFFECTS__
function x1(n) {
  return new L_({
    check: "string_format",
    format: "uppercase",
    ...te(n)
  });
}
// @__NO_SIDE_EFFECTS__
function T1(n, i) {
  return new V_({
    check: "string_format",
    format: "includes",
    ...te(i),
    includes: n
  });
}
// @__NO_SIDE_EFFECTS__
function E1(n, i) {
  return new G_({
    check: "string_format",
    format: "starts_with",
    ...te(i),
    prefix: n
  });
}
// @__NO_SIDE_EFFECTS__
function A1(n, i) {
  return new Q_({
    check: "string_format",
    format: "ends_with",
    ...te(i),
    suffix: n
  });
}
// @__NO_SIDE_EFFECTS__
function di(n) {
  return new K_({
    check: "overwrite",
    tx: n
  });
}
// @__NO_SIDE_EFFECTS__
function O1(n) {
  return /* @__PURE__ */ di((i) => i.normalize(n));
}
// @__NO_SIDE_EFFECTS__
function C1() {
  return /* @__PURE__ */ di((n) => n.trim());
}
// @__NO_SIDE_EFFECTS__
function M1() {
  return /* @__PURE__ */ di((n) => n.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function j1() {
  return /* @__PURE__ */ di((n) => n.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function k1() {
  return /* @__PURE__ */ di((n) => X0(n));
}
// @__NO_SIDE_EFFECTS__
function D1(n, i, u) {
  return new n({
    type: "array",
    element: i,
    // get element() {
    //   return element;
    // },
    ...te(u)
  });
}
// @__NO_SIDE_EFFECTS__
function N1(n, i, u) {
  return new n({
    type: "custom",
    check: "custom",
    fn: i,
    ...te(u)
  });
}
// @__NO_SIDE_EFFECTS__
function Z1(n, i) {
  const u = /* @__PURE__ */ R1((o) => (o.addIssue = (c) => {
    if (typeof c == "string")
      o.issues.push(vl(c, o.value, u._zod.def));
    else {
      const f = c;
      f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = o.value), f.inst ?? (f.inst = u), f.continue ?? (f.continue = !u._zod.def.abort), o.issues.push(vl(f));
    }
  }, n(o.value, o)), i);
  return u;
}
// @__NO_SIDE_EFFECTS__
function R1(n, i) {
  const u = new xt({
    check: "custom",
    ...te(i)
  });
  return u._zod.check = n, u;
}
function Uh(n) {
  let i = n?.target ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), {
    processors: n.processors ?? {},
    metadataRegistry: n?.metadata ?? fl,
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
function dt(n, i, u = { path: [], schemaPath: [] }) {
  var o;
  const c = n._zod.def, f = i.seen.get(n);
  if (f)
    return f.count++, u.schemaPath.includes(n) && (f.cycle = u.path), f.schema;
  const d = { schema: {}, count: 1, cycle: void 0, path: u.path };
  i.seen.set(n, d);
  const p = n._zod.toJSONSchema?.();
  if (p)
    d.schema = p;
  else {
    const _ = {
      ...u,
      schemaPath: [...u.schemaPath, n],
      path: u.path
    };
    if (n._zod.processJSONSchema)
      n._zod.processJSONSchema(i, d.schema, _);
    else {
      const x = d.schema, E = i.processors[c.type];
      if (!E)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${c.type}`);
      E(n, i, x, _);
    }
    const S = n._zod.parent;
    S && (d.ref || (d.ref = S), dt(S, i, _), i.seen.get(S).isParent = !0);
  }
  const v = i.metadataRegistry.get(n);
  return v && Object.assign(d.schema, v), i.io === "input" && ht(n) && (delete d.schema.examples, delete d.schema.default), i.io === "input" && "_prefault" in d.schema && ((o = d.schema).default ?? (o.default = d.schema._prefault)), delete d.schema._prefault, i.seen.get(n).schema;
}
function Yh(n, i) {
  const u = n.seen.get(i);
  if (!u)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = /* @__PURE__ */ new Map();
  for (const d of n.seen.entries()) {
    const p = n.metadataRegistry.get(d[0])?.id;
    if (p) {
      const v = o.get(p);
      if (v && v !== d[0])
        throw new Error(`Duplicate schema id "${p}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      o.set(p, d[0]);
    }
  }
  const c = (d) => {
    const p = n.target === "draft-2020-12" ? "$defs" : "definitions";
    if (n.external) {
      const S = n.external.registry.get(d[0])?.id, x = n.external.uri ?? ((M) => M);
      if (S)
        return { ref: x(S) };
      const E = d[1].defId ?? d[1].schema.id ?? `schema${n.counter++}`;
      return d[1].defId = E, { defId: E, ref: `${x("__shared")}#/${p}/${E}` };
    }
    if (d[1] === u)
      return { ref: "#" };
    const h = `#/${p}/`, _ = d[1].schema.id ?? `__schema${n.counter++}`;
    return { defId: _, ref: h + _ };
  }, f = (d) => {
    if (d[1].schema.$ref)
      return;
    const p = d[1], { ref: v, defId: h } = c(d);
    p.def = { ...p.schema }, h && (p.defId = h);
    const _ = p.schema;
    for (const S in _)
      delete _[S];
    _.$ref = v;
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
function Xh(n, i) {
  const u = n.seen.get(i);
  if (!u)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = (p) => {
    const v = n.seen.get(p);
    if (v.ref === null)
      return;
    const h = v.def ?? v.schema, _ = { ...h }, S = v.ref;
    if (v.ref = null, S) {
      o(S);
      const E = n.seen.get(S), M = E.schema;
      if (M.$ref && (n.target === "draft-07" || n.target === "draft-04" || n.target === "openapi-3.0") ? (h.allOf = h.allOf ?? [], h.allOf.push(M)) : Object.assign(h, M), Object.assign(h, _), p._zod.parent === S)
        for (const H in h)
          H === "$ref" || H === "allOf" || H in _ || delete h[H];
      if (M.$ref && E.def)
        for (const H in h)
          H === "$ref" || H === "allOf" || H in E.def && JSON.stringify(h[H]) === JSON.stringify(E.def[H]) && delete h[H];
    }
    const x = p._zod.parent;
    if (x && x !== S) {
      o(x);
      const E = n.seen.get(x);
      if (E?.schema.$ref && (h.$ref = E.schema.$ref, E.def))
        for (const M in h)
          M === "$ref" || M === "allOf" || M in E.def && JSON.stringify(h[M]) === JSON.stringify(E.def[M]) && delete h[M];
    }
    n.override({
      zodSchema: p,
      jsonSchema: h,
      path: v.path ?? []
    });
  };
  for (const p of [...n.seen.entries()].reverse())
    o(p[0]);
  const c = {};
  if (n.target === "draft-2020-12" ? c.$schema = "https://json-schema.org/draft/2020-12/schema" : n.target === "draft-07" ? c.$schema = "http://json-schema.org/draft-07/schema#" : n.target === "draft-04" ? c.$schema = "http://json-schema.org/draft-04/schema#" : n.target, n.external?.uri) {
    const p = n.external.registry.get(i)?.id;
    if (!p)
      throw new Error("Schema is missing an `id` property");
    c.$id = n.external.uri(p);
  }
  Object.assign(c, u.def ?? u.schema);
  const f = n.metadataRegistry.get(i)?.id;
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
        ...i["~standard"],
        jsonSchema: {
          input: no(i, "input", n.processors),
          output: no(i, "output", n.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), p;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function ht(n, i) {
  const u = i ?? { seen: /* @__PURE__ */ new Set() };
  if (u.seen.has(n))
    return !1;
  u.seen.add(n);
  const o = n._zod.def;
  if (o.type === "transform")
    return !0;
  if (o.type === "array")
    return ht(o.element, u);
  if (o.type === "set")
    return ht(o.valueType, u);
  if (o.type === "lazy")
    return ht(o.getter(), u);
  if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault")
    return ht(o.innerType, u);
  if (o.type === "intersection")
    return ht(o.left, u) || ht(o.right, u);
  if (o.type === "record" || o.type === "map")
    return ht(o.keyType, u) || ht(o.valueType, u);
  if (o.type === "pipe")
    return n._zod.traits.has("$ZodCodec") ? !0 : ht(o.in, u) || ht(o.out, u);
  if (o.type === "object") {
    for (const c in o.shape)
      if (ht(o.shape[c], u))
        return !0;
    return !1;
  }
  if (o.type === "union") {
    for (const c of o.options)
      if (ht(c, u))
        return !0;
    return !1;
  }
  if (o.type === "tuple") {
    for (const c of o.items)
      if (ht(c, u))
        return !0;
    return !!(o.rest && ht(o.rest, u));
  }
  return !1;
}
const U1 = (n, i = {}) => (u) => {
  const o = Uh({ ...u, processors: i });
  return dt(n, o), Yh(o, n), Xh(o, n);
}, no = (n, i, u = {}) => (o) => {
  const { libraryOptions: c, target: f } = o ?? {}, d = Uh({ ...c ?? {}, target: f, io: i, processors: u });
  return dt(n, d), Yh(d, n), Xh(d, n);
}, Y1 = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, X1 = (n, i, u, o) => {
  const c = u;
  c.type = "string";
  const { minimum: f, maximum: d, format: p, patterns: v, contentEncoding: h } = n._zod.bag;
  if (typeof f == "number" && (c.minLength = f), typeof d == "number" && (c.maxLength = d), p && (c.format = Y1[p] ?? p, c.format === "" && delete c.format, p === "time" && delete c.format), h && (c.contentEncoding = h), v && v.size > 0) {
    const _ = [...v];
    _.length === 1 ? c.pattern = _[0].source : _.length > 1 && (c.allOf = [
      ..._.map((S) => ({
        ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: S.source
      }))
    ]);
  }
}, H1 = (n, i, u, o) => {
  const c = u, { minimum: f, maximum: d, format: p, multipleOf: v, exclusiveMaximum: h, exclusiveMinimum: _ } = n._zod.bag;
  typeof p == "string" && p.includes("int") ? c.type = "integer" : c.type = "number";
  const S = typeof _ == "number" && _ >= (f ?? Number.NEGATIVE_INFINITY), x = typeof h == "number" && h <= (d ?? Number.POSITIVE_INFINITY), E = i.target === "draft-04" || i.target === "openapi-3.0";
  S ? E ? (c.minimum = _, c.exclusiveMinimum = !0) : c.exclusiveMinimum = _ : typeof f == "number" && (c.minimum = f), x ? E ? (c.maximum = h, c.exclusiveMaximum = !0) : c.exclusiveMaximum = h : typeof d == "number" && (c.maximum = d), typeof v == "number" && (c.multipleOf = v);
}, B1 = (n, i, u, o) => {
  u.type = "boolean";
}, q1 = (n, i, u, o) => {
  u.not = {};
}, $1 = (n, i, u, o) => {
}, L1 = (n, i, u, o) => {
  const c = n._zod.def, f = gh(c.entries);
  f.every((d) => typeof d == "number") && (u.type = "number"), f.every((d) => typeof d == "string") && (u.type = "string"), u.enum = f;
}, V1 = (n, i, u, o) => {
  const c = n._zod.def, f = [];
  for (const d of c.values)
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
    u.type = d === null ? "null" : typeof d, i.target === "draft-04" || i.target === "openapi-3.0" ? u.enum = [d] : u.const = d;
  } else
    f.every((d) => typeof d == "number") && (u.type = "number"), f.every((d) => typeof d == "string") && (u.type = "string"), f.every((d) => typeof d == "boolean") && (u.type = "boolean"), f.every((d) => d === null) && (u.type = "null"), u.enum = f;
}, G1 = (n, i, u, o) => {
  if (i.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, Q1 = (n, i, u, o) => {
  if (i.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, K1 = (n, i, u, o) => {
  const c = u, f = n._zod.def, { minimum: d, maximum: p } = n._zod.bag;
  typeof d == "number" && (c.minItems = d), typeof p == "number" && (c.maxItems = p), c.type = "array", c.items = dt(f.element, i, {
    ...o,
    path: [...o.path, "items"]
  });
}, J1 = (n, i, u, o) => {
  const c = u, f = n._zod.def;
  c.type = "object", c.properties = {};
  const d = f.shape;
  for (const h in d)
    c.properties[h] = dt(d[h], i, {
      ...o,
      path: [...o.path, "properties", h]
    });
  const p = new Set(Object.keys(d)), v = new Set([...p].filter((h) => {
    const _ = f.shape[h]._zod;
    return i.io === "input" ? _.optin === void 0 : _.optout === void 0;
  }));
  v.size > 0 && (c.required = Array.from(v)), f.catchall?._zod.def.type === "never" ? c.additionalProperties = !1 : f.catchall ? f.catchall && (c.additionalProperties = dt(f.catchall, i, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : i.io === "output" && (c.additionalProperties = !1);
}, W1 = (n, i, u, o) => {
  const c = n._zod.def, f = c.inclusive === !1, d = c.options.map((p, v) => dt(p, i, {
    ...o,
    path: [...o.path, f ? "oneOf" : "anyOf", v]
  }));
  f ? u.oneOf = d : u.anyOf = d;
}, P1 = (n, i, u, o) => {
  const c = n._zod.def, f = dt(c.left, i, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), d = dt(c.right, i, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), p = (h) => "allOf" in h && Object.keys(h).length === 1, v = [
    ...p(f) ? f.allOf : [f],
    ...p(d) ? d.allOf : [d]
  ];
  u.allOf = v;
}, F1 = (n, i, u, o) => {
  const c = n._zod.def, f = dt(c.innerType, i, o), d = i.seen.get(n);
  i.target === "openapi-3.0" ? (d.ref = c.innerType, u.nullable = !0) : u.anyOf = [f, { type: "null" }];
}, I1 = (n, i, u, o) => {
  const c = n._zod.def;
  dt(c.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = c.innerType;
}, eS = (n, i, u, o) => {
  const c = n._zod.def;
  dt(c.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = c.innerType, u.default = JSON.parse(JSON.stringify(c.defaultValue));
}, tS = (n, i, u, o) => {
  const c = n._zod.def;
  dt(c.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = c.innerType, i.io === "input" && (u._prefault = JSON.parse(JSON.stringify(c.defaultValue)));
}, nS = (n, i, u, o) => {
  const c = n._zod.def;
  dt(c.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = c.innerType;
  let d;
  try {
    d = c.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  u.default = d;
}, aS = (n, i, u, o) => {
  const c = n._zod.def, f = c.in._zod.traits.has("$ZodTransform"), d = i.io === "input" ? f ? c.out : c.in : c.out;
  dt(d, i, o);
  const p = i.seen.get(n);
  p.ref = d;
}, iS = (n, i, u, o) => {
  const c = n._zod.def;
  dt(c.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = c.innerType, u.readOnly = !0;
}, Hh = (n, i, u, o) => {
  const c = n._zod.def;
  dt(c.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = c.innerType;
}, lS = /* @__PURE__ */ U("ZodISODateTime", (n, i) => {
  rb.init(n, i), Le.init(n, i);
});
function uS(n) {
  return /* @__PURE__ */ m1(lS, n);
}
const oS = /* @__PURE__ */ U("ZodISODate", (n, i) => {
  sb.init(n, i), Le.init(n, i);
});
function rS(n) {
  return /* @__PURE__ */ p1(oS, n);
}
const sS = /* @__PURE__ */ U("ZodISOTime", (n, i) => {
  cb.init(n, i), Le.init(n, i);
});
function cS(n) {
  return /* @__PURE__ */ h1(sS, n);
}
const fS = /* @__PURE__ */ U("ZodISODuration", (n, i) => {
  fb.init(n, i), Le.init(n, i);
});
function dS(n) {
  return /* @__PURE__ */ v1(fS, n);
}
const mS = (n, i) => {
  zh.init(n, i), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (u) => I0(n, u)
      // enumerable: false,
    },
    flatten: {
      value: (u) => F0(n, u)
      // enumerable: false,
    },
    addIssue: {
      value: (u) => {
        n.issues.push(u), n.message = JSON.stringify(n.issues, Gs, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (u) => {
        n.issues.push(...u), n.message = JSON.stringify(n.issues, Gs, 2);
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
}, Gt = /* @__PURE__ */ U("ZodError", mS, {
  Parent: Error
}), pS = /* @__PURE__ */ lc(Gt), hS = /* @__PURE__ */ uc(Gt), vS = /* @__PURE__ */ ro(Gt), gS = /* @__PURE__ */ so(Gt), yS = /* @__PURE__ */ n_(Gt), _S = /* @__PURE__ */ a_(Gt), bS = /* @__PURE__ */ i_(Gt), SS = /* @__PURE__ */ l_(Gt), zS = /* @__PURE__ */ u_(Gt), wS = /* @__PURE__ */ o_(Gt), xS = /* @__PURE__ */ r_(Gt), TS = /* @__PURE__ */ s_(Gt), Kp = /* @__PURE__ */ new WeakMap();
function bl(n, i, u) {
  const o = Object.getPrototypeOf(n);
  let c = Kp.get(o);
  if (c || (c = /* @__PURE__ */ new Set(), Kp.set(o, c)), !c.has(i)) {
    c.add(i);
    for (const f in u) {
      const d = u[f];
      Object.defineProperty(o, f, {
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
const Je = /* @__PURE__ */ U("ZodType", (n, i) => (Ke.init(n, i), Object.assign(n["~standard"], {
  jsonSchema: {
    input: no(n, "input"),
    output: no(n, "output")
  }
}), n.toJSONSchema = U1(n, {}), n.def = i, n.type = i.type, Object.defineProperty(n, "_def", { value: i }), n.parse = (u, o) => pS(n, u, o, { callee: n.parse }), n.safeParse = (u, o) => vS(n, u, o), n.parseAsync = async (u, o) => hS(n, u, o, { callee: n.parseAsync }), n.safeParseAsync = async (u, o) => gS(n, u, o), n.spa = n.safeParseAsync, n.encode = (u, o) => yS(n, u, o), n.decode = (u, o) => _S(n, u, o), n.encodeAsync = async (u, o) => bS(n, u, o), n.decodeAsync = async (u, o) => SS(n, u, o), n.safeEncode = (u, o) => zS(n, u, o), n.safeDecode = (u, o) => wS(n, u, o), n.safeEncodeAsync = async (u, o) => xS(n, u, o), n.safeDecodeAsync = async (u, o) => TS(n, u, o), bl(n, "ZodType", {
  check(...u) {
    const o = this.def;
    return this.clone(Pn(o, {
      checks: [
        ...o.checks ?? [],
        ...u.map((c) => typeof c == "function" ? { _zod: { check: c, def: { check: "custom" }, onattach: [] } } : c)
      ]
    }), { parent: !0 });
  },
  with(...u) {
    return this.check(...u);
  },
  clone(u, o) {
    return Fn(this, u, o);
  },
  brand() {
    return this;
  },
  register(u, o) {
    return u.add(this, o), this;
  },
  refine(u, o) {
    return this.check(_2(u, o));
  },
  superRefine(u, o) {
    return this.check(b2(u, o));
  },
  overwrite(u) {
    return this.check(/* @__PURE__ */ di(u));
  },
  optional() {
    return Fp(this);
  },
  exactOptional() {
    return u2(this);
  },
  nullable() {
    return Ip(this);
  },
  nullish() {
    return Fp(Ip(this));
  },
  nonoptional(u) {
    return d2(this, u);
  },
  array() {
    return ao(this);
  },
  or(u) {
    return $h([this, u]);
  },
  and(u) {
    return t2(this, u);
  },
  transform(u) {
    return eh(this, i2(u));
  },
  default(u) {
    return s2(this, u);
  },
  prefault(u) {
    return f2(this, u);
  },
  catch(u) {
    return p2(this, u);
  },
  pipe(u) {
    return eh(this, u);
  },
  readonly() {
    return g2(this);
  },
  describe(u) {
    const o = this.clone();
    return fl.add(o, { description: u }), o;
  },
  meta(...u) {
    if (u.length === 0)
      return fl.get(this);
    const o = this.clone();
    return fl.add(o, u[0]), o;
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
    return fl.get(n)?.description;
  },
  configurable: !0
}), n)), Bh = /* @__PURE__ */ U("_ZodString", (n, i) => {
  oc.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (o, c, f) => X1(n, o, c);
  const u = n._zod.bag;
  n.format = u.format ?? null, n.minLength = u.minimum ?? null, n.maxLength = u.maximum ?? null, bl(n, "_ZodString", {
    regex(...o) {
      return this.check(/* @__PURE__ */ z1(...o));
    },
    includes(...o) {
      return this.check(/* @__PURE__ */ T1(...o));
    },
    startsWith(...o) {
      return this.check(/* @__PURE__ */ E1(...o));
    },
    endsWith(...o) {
      return this.check(/* @__PURE__ */ A1(...o));
    },
    min(...o) {
      return this.check(/* @__PURE__ */ to(...o));
    },
    max(...o) {
      return this.check(/* @__PURE__ */ Zh(...o));
    },
    length(...o) {
      return this.check(/* @__PURE__ */ Rh(...o));
    },
    nonempty(...o) {
      return this.check(/* @__PURE__ */ to(1, ...o));
    },
    lowercase(o) {
      return this.check(/* @__PURE__ */ w1(o));
    },
    uppercase(o) {
      return this.check(/* @__PURE__ */ x1(o));
    },
    trim() {
      return this.check(/* @__PURE__ */ C1());
    },
    normalize(...o) {
      return this.check(/* @__PURE__ */ O1(...o));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ M1());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ j1());
    },
    slugify() {
      return this.check(/* @__PURE__ */ k1());
    }
  });
}), ES = /* @__PURE__ */ U("ZodString", (n, i) => {
  oc.init(n, i), Bh.init(n, i), n.email = (u) => n.check(/* @__PURE__ */ Gb(AS, u)), n.url = (u) => n.check(/* @__PURE__ */ Pb(OS, u)), n.jwt = (u) => n.check(/* @__PURE__ */ d1($S, u)), n.emoji = (u) => n.check(/* @__PURE__ */ Fb(CS, u)), n.guid = (u) => n.check(/* @__PURE__ */ Lp(Jp, u)), n.uuid = (u) => n.check(/* @__PURE__ */ Qb(Vu, u)), n.uuidv4 = (u) => n.check(/* @__PURE__ */ Kb(Vu, u)), n.uuidv6 = (u) => n.check(/* @__PURE__ */ Jb(Vu, u)), n.uuidv7 = (u) => n.check(/* @__PURE__ */ Wb(Vu, u)), n.nanoid = (u) => n.check(/* @__PURE__ */ Ib(MS, u)), n.guid = (u) => n.check(/* @__PURE__ */ Lp(Jp, u)), n.cuid = (u) => n.check(/* @__PURE__ */ e1(jS, u)), n.cuid2 = (u) => n.check(/* @__PURE__ */ t1(kS, u)), n.ulid = (u) => n.check(/* @__PURE__ */ n1(DS, u)), n.base64 = (u) => n.check(/* @__PURE__ */ s1(HS, u)), n.base64url = (u) => n.check(/* @__PURE__ */ c1(BS, u)), n.xid = (u) => n.check(/* @__PURE__ */ a1(NS, u)), n.ksuid = (u) => n.check(/* @__PURE__ */ i1(ZS, u)), n.ipv4 = (u) => n.check(/* @__PURE__ */ l1(RS, u)), n.ipv6 = (u) => n.check(/* @__PURE__ */ u1(US, u)), n.cidrv4 = (u) => n.check(/* @__PURE__ */ o1(YS, u)), n.cidrv6 = (u) => n.check(/* @__PURE__ */ r1(XS, u)), n.e164 = (u) => n.check(/* @__PURE__ */ f1(qS, u)), n.datetime = (u) => n.check(uS(u)), n.date = (u) => n.check(rS(u)), n.time = (u) => n.check(cS(u)), n.duration = (u) => n.check(dS(u));
});
function vt(n) {
  return /* @__PURE__ */ Vb(ES, n);
}
const Le = /* @__PURE__ */ U("ZodStringFormat", (n, i) => {
  Be.init(n, i), Bh.init(n, i);
}), AS = /* @__PURE__ */ U("ZodEmail", (n, i) => {
  I_.init(n, i), Le.init(n, i);
}), Jp = /* @__PURE__ */ U("ZodGUID", (n, i) => {
  P_.init(n, i), Le.init(n, i);
}), Vu = /* @__PURE__ */ U("ZodUUID", (n, i) => {
  F_.init(n, i), Le.init(n, i);
}), OS = /* @__PURE__ */ U("ZodURL", (n, i) => {
  eb.init(n, i), Le.init(n, i);
}), CS = /* @__PURE__ */ U("ZodEmoji", (n, i) => {
  tb.init(n, i), Le.init(n, i);
}), MS = /* @__PURE__ */ U("ZodNanoID", (n, i) => {
  nb.init(n, i), Le.init(n, i);
}), jS = /* @__PURE__ */ U("ZodCUID", (n, i) => {
  ab.init(n, i), Le.init(n, i);
}), kS = /* @__PURE__ */ U("ZodCUID2", (n, i) => {
  ib.init(n, i), Le.init(n, i);
}), DS = /* @__PURE__ */ U("ZodULID", (n, i) => {
  lb.init(n, i), Le.init(n, i);
}), NS = /* @__PURE__ */ U("ZodXID", (n, i) => {
  ub.init(n, i), Le.init(n, i);
}), ZS = /* @__PURE__ */ U("ZodKSUID", (n, i) => {
  ob.init(n, i), Le.init(n, i);
}), RS = /* @__PURE__ */ U("ZodIPv4", (n, i) => {
  db.init(n, i), Le.init(n, i);
}), US = /* @__PURE__ */ U("ZodIPv6", (n, i) => {
  mb.init(n, i), Le.init(n, i);
}), YS = /* @__PURE__ */ U("ZodCIDRv4", (n, i) => {
  pb.init(n, i), Le.init(n, i);
}), XS = /* @__PURE__ */ U("ZodCIDRv6", (n, i) => {
  hb.init(n, i), Le.init(n, i);
}), HS = /* @__PURE__ */ U("ZodBase64", (n, i) => {
  vb.init(n, i), Le.init(n, i);
}), BS = /* @__PURE__ */ U("ZodBase64URL", (n, i) => {
  yb.init(n, i), Le.init(n, i);
}), qS = /* @__PURE__ */ U("ZodE164", (n, i) => {
  _b.init(n, i), Le.init(n, i);
}), $S = /* @__PURE__ */ U("ZodJWT", (n, i) => {
  Sb.init(n, i), Le.init(n, i);
}), qh = /* @__PURE__ */ U("ZodNumber", (n, i) => {
  jh.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (o, c, f) => H1(n, o, c), bl(n, "ZodNumber", {
    gt(o, c) {
      return this.check(/* @__PURE__ */ Gp(o, c));
    },
    gte(o, c) {
      return this.check(/* @__PURE__ */ Us(o, c));
    },
    min(o, c) {
      return this.check(/* @__PURE__ */ Us(o, c));
    },
    lt(o, c) {
      return this.check(/* @__PURE__ */ Vp(o, c));
    },
    lte(o, c) {
      return this.check(/* @__PURE__ */ Rs(o, c));
    },
    max(o, c) {
      return this.check(/* @__PURE__ */ Rs(o, c));
    },
    int(o) {
      return this.check(Wp(o));
    },
    safe(o) {
      return this.check(Wp(o));
    },
    positive(o) {
      return this.check(/* @__PURE__ */ Gp(0, o));
    },
    nonnegative(o) {
      return this.check(/* @__PURE__ */ Us(0, o));
    },
    negative(o) {
      return this.check(/* @__PURE__ */ Vp(0, o));
    },
    nonpositive(o) {
      return this.check(/* @__PURE__ */ Rs(0, o));
    },
    multipleOf(o, c) {
      return this.check(/* @__PURE__ */ Qp(o, c));
    },
    step(o, c) {
      return this.check(/* @__PURE__ */ Qp(o, c));
    },
    finite() {
      return this;
    }
  });
  const u = n._zod.bag;
  n.minValue = Math.max(u.minimum ?? Number.NEGATIVE_INFINITY, u.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(u.maximum ?? Number.POSITIVE_INFINITY, u.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (u.format ?? "").includes("int") || Number.isSafeInteger(u.multipleOf ?? 0.5), n.isFinite = !0, n.format = u.format ?? null;
});
function LS(n) {
  return /* @__PURE__ */ g1(qh, n);
}
const VS = /* @__PURE__ */ U("ZodNumberFormat", (n, i) => {
  zb.init(n, i), qh.init(n, i);
});
function Wp(n) {
  return /* @__PURE__ */ y1(VS, n);
}
const GS = /* @__PURE__ */ U("ZodBoolean", (n, i) => {
  wb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => B1(n, u, o);
});
function QS(n) {
  return /* @__PURE__ */ _1(GS, n);
}
const KS = /* @__PURE__ */ U("ZodUnknown", (n, i) => {
  xb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => $1();
});
function Pp() {
  return /* @__PURE__ */ b1(KS);
}
const JS = /* @__PURE__ */ U("ZodNever", (n, i) => {
  Tb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => q1(n, u, o);
});
function WS(n) {
  return /* @__PURE__ */ S1(JS, n);
}
const PS = /* @__PURE__ */ U("ZodArray", (n, i) => {
  Eb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => K1(n, u, o, c), n.element = i.element, bl(n, "ZodArray", {
    min(u, o) {
      return this.check(/* @__PURE__ */ to(u, o));
    },
    nonempty(u) {
      return this.check(/* @__PURE__ */ to(1, u));
    },
    max(u, o) {
      return this.check(/* @__PURE__ */ Zh(u, o));
    },
    length(u, o) {
      return this.check(/* @__PURE__ */ Rh(u, o));
    },
    unwrap() {
      return this.element;
    }
  });
});
function ao(n, i) {
  return /* @__PURE__ */ D1(PS, n, i);
}
const FS = /* @__PURE__ */ U("ZodObject", (n, i) => {
  Ob.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => J1(n, u, o, c), Ze(n, "shape", () => i.shape), bl(n, "ZodObject", {
    keyof() {
      return io(Object.keys(this._zod.def.shape));
    },
    catchall(u) {
      return this.clone({ ...this._zod.def, catchall: u });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: Pp() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: Pp() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: WS() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(u) {
      return G0(this, u);
    },
    safeExtend(u) {
      return Q0(this, u);
    },
    merge(u) {
      return K0(this, u);
    },
    pick(u) {
      return L0(this, u);
    },
    omit(u) {
      return V0(this, u);
    },
    partial(...u) {
      return J0(Lh, this, u[0]);
    },
    required(...u) {
      return W0(Vh, this, u[0]);
    }
  });
});
function gl(n, i) {
  const u = {
    type: "object",
    shape: n ?? {},
    ...te(i)
  };
  return new FS(u);
}
const IS = /* @__PURE__ */ U("ZodUnion", (n, i) => {
  Cb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => W1(n, u, o, c), n.options = i.options;
});
function $h(n, i) {
  return new IS({
    type: "union",
    options: n,
    ...te(i)
  });
}
const e2 = /* @__PURE__ */ U("ZodIntersection", (n, i) => {
  Mb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => P1(n, u, o, c);
});
function t2(n, i) {
  return new e2({
    type: "intersection",
    left: n,
    right: i
  });
}
const Ks = /* @__PURE__ */ U("ZodEnum", (n, i) => {
  jb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (o, c, f) => L1(n, o, c), n.enum = i.entries, n.options = Object.values(i.entries);
  const u = new Set(Object.keys(i.entries));
  n.extract = (o, c) => {
    const f = {};
    for (const d of o)
      if (u.has(d))
        f[d] = i.entries[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new Ks({
      ...i,
      checks: [],
      ...te(c),
      entries: f
    });
  }, n.exclude = (o, c) => {
    const f = { ...i.entries };
    for (const d of o)
      if (u.has(d))
        delete f[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new Ks({
      ...i,
      checks: [],
      ...te(c),
      entries: f
    });
  };
});
function io(n, i) {
  const u = Array.isArray(n) ? Object.fromEntries(n.map((o) => [o, o])) : n;
  return new Ks({
    type: "enum",
    entries: u,
    ...te(i)
  });
}
const n2 = /* @__PURE__ */ U("ZodLiteral", (n, i) => {
  kb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => V1(n, u, o), n.values = new Set(i.values), Object.defineProperty(n, "value", {
    get() {
      if (i.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return i.values[0];
    }
  });
});
function lo(n, i) {
  return new n2({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...te(i)
  });
}
const a2 = /* @__PURE__ */ U("ZodTransform", (n, i) => {
  Db.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => Q1(n, u), n._zod.parse = (u, o) => {
    if (o.direction === "backward")
      throw new vh(n.constructor.name);
    u.addIssue = (f) => {
      if (typeof f == "string")
        u.issues.push(vl(f, u.value, i));
      else {
        const d = f;
        d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = u.value), d.inst ?? (d.inst = n), u.issues.push(vl(d));
      }
    };
    const c = i.transform(u.value, u);
    return c instanceof Promise ? c.then((f) => (u.value = f, u.fallback = !0, u)) : (u.value = c, u.fallback = !0, u);
  };
});
function i2(n) {
  return new a2({
    type: "transform",
    transform: n
  });
}
const Lh = /* @__PURE__ */ U("ZodOptional", (n, i) => {
  Nh.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => Hh(n, u, o, c), n.unwrap = () => n._zod.def.innerType;
});
function Fp(n) {
  return new Lh({
    type: "optional",
    innerType: n
  });
}
const l2 = /* @__PURE__ */ U("ZodExactOptional", (n, i) => {
  Nb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => Hh(n, u, o, c), n.unwrap = () => n._zod.def.innerType;
});
function u2(n) {
  return new l2({
    type: "optional",
    innerType: n
  });
}
const o2 = /* @__PURE__ */ U("ZodNullable", (n, i) => {
  Zb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => F1(n, u, o, c), n.unwrap = () => n._zod.def.innerType;
});
function Ip(n) {
  return new o2({
    type: "nullable",
    innerType: n
  });
}
const r2 = /* @__PURE__ */ U("ZodDefault", (n, i) => {
  Rb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => eS(n, u, o, c), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function s2(n, i) {
  return new r2({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : _h(i);
    }
  });
}
const c2 = /* @__PURE__ */ U("ZodPrefault", (n, i) => {
  Ub.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => tS(n, u, o, c), n.unwrap = () => n._zod.def.innerType;
});
function f2(n, i) {
  return new c2({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : _h(i);
    }
  });
}
const Vh = /* @__PURE__ */ U("ZodNonOptional", (n, i) => {
  Yb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => I1(n, u, o, c), n.unwrap = () => n._zod.def.innerType;
});
function d2(n, i) {
  return new Vh({
    type: "nonoptional",
    innerType: n,
    ...te(i)
  });
}
const m2 = /* @__PURE__ */ U("ZodCatch", (n, i) => {
  Xb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => nS(n, u, o, c), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function p2(n, i) {
  return new m2({
    type: "catch",
    innerType: n,
    catchValue: typeof i == "function" ? i : () => i
  });
}
const h2 = /* @__PURE__ */ U("ZodPipe", (n, i) => {
  Hb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => aS(n, u, o, c), n.in = i.in, n.out = i.out;
});
function eh(n, i) {
  return new h2({
    type: "pipe",
    in: n,
    out: i
    // ...util.normalizeParams(params),
  });
}
const v2 = /* @__PURE__ */ U("ZodReadonly", (n, i) => {
  Bb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => iS(n, u, o, c), n.unwrap = () => n._zod.def.innerType;
});
function g2(n) {
  return new v2({
    type: "readonly",
    innerType: n
  });
}
const y2 = /* @__PURE__ */ U("ZodCustom", (n, i) => {
  qb.init(n, i), Je.init(n, i), n._zod.processJSONSchema = (u, o, c) => G1(n, u);
});
function _2(n, i = {}) {
  return /* @__PURE__ */ N1(y2, n, i);
}
function b2(n, i) {
  return /* @__PURE__ */ Z1(n, i);
}
const rc = vt().regex(/^[a-z0-9_]+\.[a-z0-9_]+$/, "Must be a Home Assistant entity ID"), Qe = rc.optional(), S2 = gl({
  segment_id: LS().int().nonnegative(),
  area_id: vt().min(1).optional(),
  name: vt().min(1),
  icon: vt().optional(),
  include_in_floor_clean: QS().optional().default(!0)
}).passthrough(), z2 = gl({
  id: vt().min(1),
  name: vt().min(1),
  map_entity: rc,
  map_select_option: vt().min(1).optional(),
  rooms: ao(S2).min(1)
}).passthrough(), w2 = gl({
  id: vt().min(1),
  name: vt().min(1),
  icon: vt().optional(),
  strategy: io(["custom", "smartplan"]),
  cleaning_type: io(["vacuum", "vacuum_and_mop", "vacuum_then_mop"]).optional(),
  fan_speed: vt().optional(),
  mop_mode: vt().optional(),
  mop_intensity: vt().optional(),
  cleaning_count: $h([lo(1), lo(2)]).optional()
}).passthrough(), Gh = gl({
  type: lo("custom:roborock-vacuum-map-card").optional(),
  entity: rc.refine((n) => n.startsWith("vacuum."), "Entity must be a vacuum"),
  name: vt().optional(),
  language: io(["en", "nl"]).optional().default("en"),
  entities: gl({
    map_select: Qe,
    cleaning_mode: Qe,
    vacuum_then_mop_script: Qe,
    mop_mode: Qe,
    mop_intensity: Qe,
    dock_mop_drying: Qe,
    dock_mop_drying_remaining_time: Qe,
    dock_child_lock: Qe,
    dock_mop_wash_frequency: Qe,
    dock_wash_mode: Qe,
    dock_wash_temperature: Qe,
    dock_auto_empty: Qe,
    dock_empty_mode: Qe,
    dock_auto_dry: Qe,
    dock_dry_duration: Qe,
    battery: Qe,
    current_room: Qe,
    cleaning_area: Qe,
    cleaning_time: Qe,
    cleaning_progress: Qe,
    status: Qe,
    error: Qe
  }).passthrough().optional().default({}),
  floors: ao(z2).min(1),
  presets: ao(w2).optional().default([]),
  default_preset: vt().optional().default("vacuum_only"),
  vacuum_mode_fallback: lo("set_clean_motor_mode").optional()
}).passthrough().superRefine((n, i) => {
  n.floors.length > 1 && !n.entities.map_select && i.addIssue({ code: "custom", path: ["entities", "map_select"], message: "Multiple floors require a map-select entity" });
  const u = /* @__PURE__ */ new Set();
  for (const [c, f] of n.floors.entries()) {
    u.has(f.id) && i.addIssue({ code: "custom", path: ["floors", c, "id"], message: "Floor IDs must be unique" }), u.add(f.id);
    const d = /* @__PURE__ */ new Set();
    for (const [p, v] of f.rooms.entries())
      d.has(v.segment_id) && i.addIssue({
        code: "custom",
        path: ["floors", c, "rooms", p, "segment_id"],
        message: "Segment IDs must be unique within a floor"
      }), d.add(v.segment_id);
  }
  const o = /* @__PURE__ */ new Set(["vacuum_only", "vacuum_and_mop", "vacuum_then_mop", "smartplan"]);
  for (const [c, f] of n.presets.entries())
    o.has(f.id) && i.addIssue({ code: "custom", path: ["presets", c, "id"], message: "Preset IDs must be unique" }), o.add(f.id);
  n.default_preset && !o.has(n.default_preset) && i.addIssue({ code: "custom", path: ["default_preset"], message: "Default preset does not exist" });
});
function x2(n) {
  return Gh.parse(n);
}
function T2(n) {
  const i = Gh.safeParse(n);
  return i.success ? [] : i.error.issues.map((u) => `${u.path.join(".") || "config"}: ${u.message}`);
}
function Qh() {
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
function Gu(n) {
  return typeof n == "number" && Number.isFinite(n);
}
function E2(n) {
  const i = n?.attributes.calibration_points;
  return Array.isArray(i) ? i.flatMap((u) => {
    const o = u;
    return !Gu(o.vacuum?.x) || !Gu(o.vacuum?.y) || !Gu(o.map?.x) || !Gu(o.map?.y) ? [] : [o];
  }) : [];
}
function Kh(n) {
  const i = n?.attributes.rooms;
  return i ? (Array.isArray(i) ? i.map((o, c) => [String(c), o]) : typeof i == "object" ? Object.entries(i) : []).flatMap(([o, c]) => {
    if (!c || typeof c != "object") return [];
    const f = c, d = f.number ?? f.room_id ?? f.segment_id ?? o, p = Number(d), v = Number(f.x0), h = Number(f.y0), _ = Number(f.x1), S = Number(f.y1);
    return [p, v, h, _, S].every(Number.isFinite) ? [
      {
        segment_id: p,
        source_name: typeof f.name == "string" ? f.name : `Room ${p}`,
        x0: v,
        y0: h,
        x1: _,
        y1: S
      }
    ] : [];
  }) : [];
}
function dl(n, i, u) {
  if (u.length < 3) throw new Error("At least three calibration points are required");
  const [o, c, f] = u, d = c.vacuum.x - o.vacuum.x, p = c.vacuum.y - o.vacuum.y, v = f.vacuum.x - o.vacuum.x, h = f.vacuum.y - o.vacuum.y, _ = d * h - p * v;
  if (_ === 0) throw new Error("Calibration points are degenerate");
  const S = n - o.vacuum.x, x = i - o.vacuum.y, E = (S * h - x * v) / _, M = (d * x - p * S) / _;
  return {
    x: o.map.x + E * (c.map.x - o.map.x) + M * (f.map.x - o.map.x),
    y: o.map.y + E * (c.map.y - o.map.y) + M * (f.map.y - o.map.y)
  };
}
function A2(n, i) {
  return `${[
    dl(n.x0, n.y0, i),
    dl(n.x1, n.y0, i),
    dl(n.x1, n.y1, i),
    dl(n.x0, n.y1, i)
  ].map((o, c) => `${c === 0 ? "M" : "L"} ${o.x} ${o.y}`).join(" ")} Z`;
}
function O2(n, i) {
  return dl((n.x0 + n.x1) / 2, (n.y0 + n.y1) / 2, i);
}
function C2(n) {
  return new Map(n.rooms.map((i) => [i.segment_id, i]));
}
function Qu(n, i, u) {
  const o = [...n], [c] = o.splice(i, 1);
  return o.splice(u, 0, c), o;
}
function M2(n, i) {
  return Object.keys(n.states).filter((u) => u.startsWith(`${i}.`)).sort();
}
function Ys({
  hass: n,
  domain: i,
  value: u,
  optional: o,
  onChange: c
}) {
  return /* @__PURE__ */ y.jsxs("select", { value: u ?? "", onChange: (f) => c(f.target.value || void 0), children: [
    /* @__PURE__ */ y.jsx("option", { value: "", children: o ? "Not configured" : `Select ${i}` }),
    M2(n, i).map((f) => /* @__PURE__ */ y.jsx("option", { children: f }, f))
  ] });
}
function j2({
  areas: n,
  value: i,
  onChange: u
}) {
  const o = ie.useRef(null), [c, f] = ie.useState(() => !!customElements.get("ha-area-picker"));
  return ie.useEffect(() => {
    c || customElements.whenDefined("ha-area-picker").then(() => f(!0));
  }, [c]), ie.useEffect(() => {
    const d = o.current;
    if (!d) return;
    d.value = i, d.noAdd = !0;
    const p = (v) => u(v.detail.value || void 0);
    return d.addEventListener("value-changed", p), () => d.removeEventListener("value-changed", p);
  }, [c, u, i]), c ? /* @__PURE__ */ y.jsx("ha-area-picker", { ref: o, value: i ?? "", "no-add": !0 }) : /* @__PURE__ */ y.jsxs("select", { value: i ?? "", onChange: (d) => u(d.target.value || void 0), children: [
    /* @__PURE__ */ y.jsx("option", { value: "", children: "Unmapped" }),
    n.map((d) => /* @__PURE__ */ y.jsxs("option", { value: d.area_id, children: [
      d.name,
      " (",
      d.area_id,
      ")"
    ] }, d.area_id)),
    i && !n.some((d) => d.area_id === i) && /* @__PURE__ */ y.jsx("option", { value: i, children: i })
  ] });
}
function k2({ hass: n, config: i, onChange: u }) {
  const o = T2(i), c = (p, v) => {
    const h = [...i.floors];
    h[p] = v, u({ ...i, floors: h });
  }, f = i.entities?.map_select ? n.states[i.entities.map_select]?.attributes.options ?? [] : [], d = Object.values(n.areas ?? {}).sort((p, v) => p.name.localeCompare(v.name));
  return /* @__PURE__ */ y.jsxs("div", { className: "editor", children: [
    /* @__PURE__ */ y.jsx("h2", { children: "Roborock Vacuum Map Card" }),
    /* @__PURE__ */ y.jsx("p", { children: "Configure the Roborock entities, calibrated maps, room mappings and job presets." }),
    o.length > 0 && /* @__PURE__ */ y.jsx("div", { className: "editor-errors", role: "alert", children: o.map((p) => /* @__PURE__ */ y.jsx("div", { children: p }, p)) }),
    /* @__PURE__ */ y.jsxs("section", { children: [
      /* @__PURE__ */ y.jsx("h3", { children: "Card" }),
      /* @__PURE__ */ y.jsxs("label", { children: [
        "Name",
        /* @__PURE__ */ y.jsx("input", { value: i.name ?? "", placeholder: "Use vacuum name", onChange: (p) => u({ ...i, name: p.target.value || void 0 }) })
      ] }),
      /* @__PURE__ */ y.jsxs("label", { children: [
        "Language",
        /* @__PURE__ */ y.jsxs("select", { value: i.language ?? "en", onChange: (p) => u({ ...i, language: p.target.value }), children: [
          /* @__PURE__ */ y.jsx("option", { value: "en", children: "English" }),
          /* @__PURE__ */ y.jsx("option", { value: "nl", children: "Nederlands" })
        ] })
      ] }),
      /* @__PURE__ */ y.jsxs("label", { children: [
        "Vacuum",
        /* @__PURE__ */ y.jsx(Ys, { hass: n, domain: "vacuum", value: i.entity, onChange: (p) => p && u({ ...i, entity: p }) })
      ] })
    ] }),
    /* @__PURE__ */ y.jsxs("section", { children: [
      /* @__PURE__ */ y.jsx("h3", { children: "Entities" }),
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
        ["battery", "sensor", "Battery"],
        ["current_room", "sensor", "Current room"],
        ["cleaning_area", "sensor", "Cleaning area"],
        ["cleaning_time", "sensor", "Cleaning time"],
        ["cleaning_progress", "sensor", "Cleaning progress"],
        ["status", "sensor", "Status"],
        ["error", "sensor", "Error"]
      ].map(([p, v, h]) => /* @__PURE__ */ y.jsxs("label", { children: [
        h,
        /* @__PURE__ */ y.jsx(Ys, { hass: n, domain: v, optional: !0, value: i.entities?.[p], onChange: (_) => u({ ...i, entities: { ...i.entities, [p]: _ } }) })
      ] }, p)),
      /* @__PURE__ */ y.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ y.jsx("input", { type: "checkbox", checked: i.vacuum_mode_fallback === "set_clean_motor_mode", onChange: (p) => u({ ...i, vacuum_mode_fallback: p.target.checked ? "set_clean_motor_mode" : void 0 }) }),
        " Use atomic Vacuum-mode fallback (Home Assistant 2026.7 and older)"
      ] })
    ] }),
    /* @__PURE__ */ y.jsxs("section", { children: [
      /* @__PURE__ */ y.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ y.jsx("h3", { children: "Floors" }),
        /* @__PURE__ */ y.jsxs("button", { type: "button", onClick: () => u({ ...i, floors: [...i.floors, { id: `floor_${i.floors.length + 1}`, name: `Floor ${i.floors.length + 1}`, map_entity: "", rooms: [] }] }), children: [
          /* @__PURE__ */ y.jsx(Op, {}),
          " Add floor"
        ] })
      ] }),
      i.floors.map((p, v) => /* @__PURE__ */ y.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ y.jsx("strong", { children: p.name || `Floor ${v + 1}` }),
          /* @__PURE__ */ y.jsxs("div", { children: [
            /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Move floor up", disabled: v === 0, onClick: () => u({ ...i, floors: Qu(i.floors, v, v - 1) }), children: /* @__PURE__ */ y.jsx(Ep, {}) }),
            /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Move floor down", disabled: v === i.floors.length - 1, onClick: () => u({ ...i, floors: Qu(i.floors, v, v + 1) }), children: /* @__PURE__ */ y.jsx(Tp, {}) }),
            /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Remove floor", disabled: i.floors.length === 1, onClick: () => u({ ...i, floors: i.floors.filter((h, _) => _ !== v) }), children: /* @__PURE__ */ y.jsx(Fu, {}) })
          ] })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "editor-grid", children: [
          /* @__PURE__ */ y.jsxs("label", { children: [
            "ID",
            /* @__PURE__ */ y.jsx("input", { value: p.id, onChange: (h) => c(v, { ...p, id: h.target.value }) })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ y.jsx("input", { value: p.name, onChange: (h) => c(v, { ...p, name: h.target.value }) })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Custom map",
            /* @__PURE__ */ y.jsx(Ys, { hass: n, domain: "image", value: p.map_entity, onChange: (h) => {
              if (!h) return;
              const _ = Kh(n.states[h]), S = new Map(p.rooms.map((E) => [E.segment_id, E])), x = _.map((E) => ({
                ...S.get(E.segment_id),
                segment_id: E.segment_id,
                name: S.get(E.segment_id)?.name ?? E.source_name,
                include_in_floor_clean: S.get(E.segment_id)?.include_in_floor_clean ?? !0
              }));
              c(v, { ...p, map_entity: h, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Selector option",
            /* @__PURE__ */ y.jsxs("select", { value: p.map_select_option ?? "", onChange: (h) => c(v, { ...p, map_select_option: h.target.value || void 0 }), children: [
              /* @__PURE__ */ y.jsx("option", { value: "", children: "Not configured" }),
              f.map((h) => /* @__PURE__ */ y.jsx("option", { children: h }, h))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ y.jsx("h4", { children: "Discovered rooms" }),
        p.rooms.length === 0 ? /* @__PURE__ */ y.jsx("p", { children: "Select a calibrated custom-map image to discover rooms." }) : /* @__PURE__ */ y.jsx("div", { className: "room-editor-list", children: p.rooms.map((h, _) => /* @__PURE__ */ y.jsxs("div", { className: "room-editor", children: [
          /* @__PURE__ */ y.jsxs("strong", { children: [
            "Segment ",
            h.segment_id
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ y.jsx("input", { value: h.name, onChange: (S) => {
              const x = [...p.rooms];
              x[_] = { ...h, name: S.target.value }, c(v, { ...p, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Area",
            /* @__PURE__ */ y.jsx(j2, { areas: d, value: h.area_id, onChange: (S) => {
              const x = [...p.rooms];
              x[_] = { ...h, area_id: S }, c(v, { ...p, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Icon",
            /* @__PURE__ */ y.jsx("input", { value: h.icon ?? "", placeholder: "mdi:floor-plan", onChange: (S) => {
              const x = [...p.rooms];
              x[_] = { ...h, icon: S.target.value || void 0 }, c(v, { ...p, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ y.jsx("input", { type: "checkbox", checked: h.include_in_floor_clean !== !1, onChange: (S) => {
              const x = [...p.rooms];
              x[_] = { ...h, include_in_floor_clean: S.target.checked }, c(v, { ...p, rooms: x });
            } }),
            " Include in Entire floor"
          ] })
        ] }, h.segment_id)) })
      ] }, `${p.id}-${v}`))
    ] }),
    /* @__PURE__ */ y.jsxs("section", { children: [
      /* @__PURE__ */ y.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ y.jsx("h3", { children: "Additional presets" }),
        /* @__PURE__ */ y.jsxs("button", { type: "button", onClick: () => {
          const p = { id: `preset_${(i.presets?.length ?? 0) + 1}`, name: "New preset", icon: "mdi:tune", strategy: "custom", cleaning_type: "vacuum_and_mop", cleaning_count: 1 };
          u({ ...i, presets: [...i.presets ?? [], p] });
        }, children: [
          /* @__PURE__ */ y.jsx(Op, {}),
          " Add preset"
        ] })
      ] }),
      (i.presets ?? []).map((p, v) => /* @__PURE__ */ y.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ y.jsx("strong", { children: p.name }),
          /* @__PURE__ */ y.jsxs("div", { children: [
            /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Move preset up", disabled: v === 0, onClick: () => u({ ...i, presets: Qu(i.presets ?? [], v, v - 1) }), children: /* @__PURE__ */ y.jsx(Ep, {}) }),
            /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Move preset down", disabled: v === (i.presets?.length ?? 0) - 1, onClick: () => u({ ...i, presets: Qu(i.presets ?? [], v, v + 1) }), children: /* @__PURE__ */ y.jsx(Tp, {}) }),
            /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Remove preset", onClick: () => u({ ...i, presets: (i.presets ?? []).filter((h, _) => _ !== v) }), children: /* @__PURE__ */ y.jsx(Fu, {}) })
          ] })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "editor-grid", children: [
          ["id", "name", "icon", "fan_speed", "mop_mode", "mop_intensity"].map((h) => /* @__PURE__ */ y.jsxs("label", { children: [
            h.replaceAll("_", " "),
            /* @__PURE__ */ y.jsx("input", { value: p[h] ?? "", onChange: (_) => {
              const S = [...i.presets ?? []];
              S[v] = { ...p, [h]: _.target.value || void 0 }, u({ ...i, presets: S });
            } })
          ] }, h)),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Strategy",
            /* @__PURE__ */ y.jsxs("select", { value: p.strategy, onChange: (h) => {
              const _ = [...i.presets ?? []];
              _[v] = { ...p, strategy: h.target.value }, u({ ...i, presets: _ });
            }, children: [
              /* @__PURE__ */ y.jsx("option", { value: "custom", children: "Custom" }),
              /* @__PURE__ */ y.jsx("option", { value: "smartplan", children: "SmartPlan" })
            ] })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Cleaning type",
            /* @__PURE__ */ y.jsxs("select", { value: p.cleaning_type ?? "vacuum_and_mop", onChange: (h) => {
              const _ = [...i.presets ?? []];
              _[v] = { ...p, cleaning_type: h.target.value }, u({ ...i, presets: _ });
            }, children: [
              /* @__PURE__ */ y.jsx("option", { value: "vacuum", children: "Vacuum only" }),
              /* @__PURE__ */ y.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
              /* @__PURE__ */ y.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" })
            ] })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Cleaning count",
            /* @__PURE__ */ y.jsxs("select", { value: p.cleaning_count ?? 1, onChange: (h) => {
              const _ = [...i.presets ?? []];
              _[v] = { ...p, cleaning_count: Number(h.target.value) }, u({ ...i, presets: _ });
            }, children: [
              /* @__PURE__ */ y.jsx("option", { value: "1", children: "1" }),
              /* @__PURE__ */ y.jsx("option", { value: "2", children: "2" })
            ] })
          ] })
        ] })
      ] }, `${p.id}-${v}`)),
      /* @__PURE__ */ y.jsxs("label", { children: [
        "Default preset",
        /* @__PURE__ */ y.jsxs("select", { value: i.default_preset ?? "vacuum_only", onChange: (p) => u({ ...i, default_preset: p.target.value }), children: [
          /* @__PURE__ */ y.jsx("option", { value: "smartplan", children: "SmartPlan" }),
          /* @__PURE__ */ y.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" }),
          /* @__PURE__ */ y.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
          /* @__PURE__ */ y.jsx("option", { value: "vacuum_only", children: "Vacuum only" }),
          (i.presets ?? []).map((p) => /* @__PURE__ */ y.jsx("option", { value: p.id, children: p.name }, p.id))
        ] })
      ] })
    ] })
  ] });
}
const Ku = {
  pause: 4,
  stop: 8,
  returnHome: 16,
  start: 8192
};
function Ju(n, i) {
  if (!i) return [];
  const u = n.states[i];
  return !u || u.state === "unavailable" ? [] : Array.isArray(u.attributes.options) ? u.attributes.options.map(String) : [];
}
function D2(n, i) {
  const u = n.states[i.entity], o = Number(u?.attributes.supported_features ?? 0), c = Array.isArray(u?.attributes.fan_speed_list) ? u.attributes.fan_speed_list.map(String) : [], f = Ju(n, i.entities?.map_select), d = Ju(n, i.entities?.cleaning_mode), p = Ju(n, i.entities?.mop_mode), v = Ju(n, i.entities?.mop_intensity);
  return {
    fanSpeeds: c,
    mapOptions: f,
    cleaningModes: d,
    mopModes: p,
    mopIntensities: v,
    canStart: !!(o & Ku.start),
    canPause: !!(o & Ku.pause),
    canStop: !!(o & Ku.stop),
    canDock: !!(o & Ku.returnHome),
    hasMapSelect: f.length > 0,
    hasCleaningMode: d.length > 0,
    hasMopMode: p.length > 0,
    hasMopIntensity: v.length > 0
  };
}
function N2(n) {
  return ["cleaning", "paused", "returning", "returning_home", "error", "unavailable"].includes(n ?? "unavailable");
}
function Z2(n) {
  return ["cleaning", "paused", "returning", "returning_home"].includes(n ?? "");
}
const R2 = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
}, U2 = {
  light: 0,
  balanced: 1,
  deep: 2,
  smart: 10
}, Y2 = {
  normal: 0,
  warm: 1,
  hot: 2
}, X2 = {
  smart: 0,
  light: 1,
  balanced: 2,
  max: 4
}, H2 = {
  "2h": 7200,
  "3h": 10800,
  "4h": 14400
};
class wn extends Error {
  constructor(i, u, o) {
    super(u, o), this.operation = i, this.name = "DockExecutionError";
  }
  operation;
}
async function Pt(n, i, u, o) {
  const c = { command: u };
  o !== void 0 && (c.params = o), await n.callService("vacuum", "send_command", c, { entity_id: i.entity });
}
function Wu(n, i, u) {
  const o = n[i];
  if (o === void 0) throw new wn(u, `Unsupported value: ${i}`);
  return o;
}
function B2(n) {
  if (n === "smart") return { smart_wash: 1, wash_interval: 1200 };
  const i = Number(n.replace("_min", ""));
  if (![10, 15, 20, 25, 30].includes(i))
    throw new wn("mop_wash_frequency", `Unsupported value: ${n}`);
  return { smart_wash: 0, wash_interval: i * 60 };
}
async function q2(n, i, u, o) {
  const c = i.entities?.[R2[u]];
  if (!c) return;
  const f = c.split(".")[0];
  if (typeof o == "boolean") {
    if (!["input_boolean", "switch"].includes(f))
      throw new wn(u, `${c} is not a boolean helper`);
    await n.callService(f, o ? "turn_on" : "turn_off", {}, { entity_id: c });
    return;
  }
  if (!["input_select", "select"].includes(f))
    throw new wn(u, `${c} is not a select helper`);
  await n.callService(f, "select_option", { option: o }, { entity_id: c });
}
async function $2(n, i, u, o) {
  try {
    switch (u) {
      case "mop_wash_frequency":
        await Pt(n, i, "set_smart_wash_params", B2(String(o)));
        break;
      case "wash_mode":
        await Pt(n, i, "set_wash_towel_mode", {
          wash_mode: Wu(U2, String(o), u)
        });
        break;
      case "wash_temperature":
        await Pt(n, i, "set_wash_water_temperature", {
          values: Wu(Y2, String(o), u)
        });
        break;
      case "auto_empty":
        await Pt(n, i, "set_dust_collection_switch_status", { status: o ? 1 : 0 });
        break;
      case "empty_mode":
        await Pt(n, i, "set_dust_collection_mode", {
          mode: Wu(X2, String(o), u)
        });
        break;
      case "auto_dry":
        await Pt(n, i, "app_set_dryer_setting", { status: o ? 1 : 0 });
        break;
      case "dry_duration":
        await Pt(n, i, "app_set_dryer_setting", {
          on: { dry_time: Wu(H2, String(o), u) }
        });
        break;
    }
    await q2(n, i, u, o);
  } catch (c) {
    throw c instanceof wn ? c : new wn(u, c instanceof Error ? c.message : String(c), { cause: c });
  }
}
async function L2(n, i, u, o = !1) {
  const c = `${o ? "stop" : "start"}_${u}`;
  try {
    u === "empty" && await Pt(n, i, o ? "app_stop_collect_dust" : "app_start_collect_dust"), u === "wash" && await Pt(n, i, o ? "app_stop_wash" : "app_start_wash"), u === "dry" && await Pt(n, i, "app_set_dryer_status", { status: o ? 0 : 1 }), u === "drain" && await Pt(n, i, "app_empty_rinse_tank_water");
  } catch (f) {
    throw new wn(c, f instanceof Error ? f.message : String(f), { cause: f });
  }
}
const V2 = /* @__PURE__ */ new Set(["standard", "deep", "deep_plus", "fast"]);
class Xe extends Error {
  constructor(i, u, o) {
    super(u, o), this.operation = i, this.name = "JobExecutionError";
  }
  operation;
}
async function G2(n, i, u, o, c, f) {
  const d = Date.now();
  for (; Date.now() - d < o; ) {
    if (n().states[i]?.state === u) return;
    await f(c);
  }
  throw new Xe("wait_for_state", `${i} did not become “${u}” within ${o / 1e3}s`);
}
function ml(n, i, u, o) {
  const c = n.states[i];
  if (!c || c.state === "unavailable") throw new Xe(o, `${i} is unavailable`);
  if (!(Array.isArray(c.attributes.options) ? c.attributes.options.map(String) : []).includes(u)) throw new Xe(o, `${i} does not support “${u}”`);
}
async function rl(n, i, u, o, c, f, d) {
  const p = n();
  if (ml(p, i, u, o), p.states[i]?.state !== u)
    try {
      await p.callService("select", "select_option", { option: u }, { entity_id: i }), await G2(n, i, u, c, f, d);
    } catch (v) {
      throw v instanceof Xe ? new Xe(o, v.message, { cause: v }) : new Xe(o, v instanceof Error ? v.message : String(v), { cause: v });
    }
}
async function Q2(n, i) {
  const u = {
    fan_power: 102,
    water_box_mode: 200
  };
  i.entities?.mop_mode && (u.mop_mode = 300);
  try {
    await n.callService(
      "vacuum",
      "send_command",
      { command: "set_clean_motor_mode", params: [u] },
      { entity_id: i.entity }
    );
  } catch (o) {
    throw new Xe("set_cleaning_mode", o instanceof Error ? o.message : String(o), { cause: o });
  }
}
async function Jh(n, i, u, o, c) {
  try {
    await n.callService("vacuum", "send_command", { command: u, params: o }, { entity_id: i.entity });
  } catch (f) {
    throw new Xe(c, f instanceof Error ? f.message : String(f), { cause: f });
  }
}
async function th(n, i, u) {
  await Jh(n, i, "set_clean_repeat_times", { repeat: u }, "set_cleaning_count");
}
async function K2(n, i) {
  await Jh(
    n,
    i,
    "set_clean_motor_mode",
    [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }],
    "set_smartplan"
  );
}
function nh(n, i, u) {
  const o = n.states[i]?.attributes.fan_speed_list;
  if (!(Array.isArray(o) ? o.map(String) : []).includes(u))
    throw new Xe("set_fan_speed", `${i} does not support “${u}”`);
}
async function J2({
  getHass: n,
  config: i,
  floor: u,
  rooms: o,
  draft: c,
  timeoutMs: f = 1e4,
  pollMs: d = 150,
  sleep: p = (v) => new Promise((h) => setTimeout(h, v))
}) {
  const v = n(), h = v.states[i.entity];
  if (!h || h.state === "unavailable") throw new Xe("preflight", `${i.entity} is unavailable`);
  if (N2(h.state)) throw new Xe("preflight", `Vacuum is ${h.state}`);
  const _ = i.entities?.error ? v.states[i.entities.error] : void 0;
  if (_ && !["none", "unknown", "unavailable", ""].includes(_.state))
    throw new Xe("preflight", `Vacuum error: ${_.state}`);
  const S = [...new Set(o.map((E) => E.area_id).filter((E) => !!E))];
  if (S.length === 0) throw new Xe("preflight", "Select at least one room mapped to a Home Assistant area");
  const x = i.entities?.map_select;
  if (i.floors.length > 1) {
    if (!x || !u.map_select_option) throw new Xe("select_floor", "This floor has no map selector mapping");
    await rl(n, x, u.map_select_option, "select_floor", f, d, p);
  }
  if (c.cleaning_type === "vacuum_then_mop" && c.strategy !== "smartplan") {
    const E = i.entities?.vacuum_then_mop_script, M = E ? n().states[E] : void 0;
    if (!E || !M || M.state === "unavailable")
      throw new Xe("start_vacuum_then_mop", "Vac followed by Mop requires an available orchestration script");
    const B = i.entities?.cleaning_mode;
    if (!B)
      throw new Xe("set_cleaning_mode", "Vac followed by Mop requires a cleaning-mode entity");
    if (ml(n(), B, "vacuum", "set_cleaning_mode"), ml(n(), B, "mop", "set_cleaning_mode"), c.mop_mode) {
      const H = i.entities?.mop_mode;
      if (!H) throw new Xe("set_mop_mode", "The selected profile requires a mop-mode entity");
      ml(n(), H, c.mop_mode, "set_mop_mode");
    }
    if (c.mop_intensity) {
      const H = i.entities?.mop_intensity;
      if (!H) throw new Xe("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      ml(n(), H, c.mop_intensity, "set_mop_intensity");
    }
    c.fan_speed && nh(n(), i.entity, c.fan_speed);
    try {
      await n().callService(
        "script",
        "turn_on",
        {
          variables: {
            cleaning_area_id: S,
            fan_speed: c.fan_speed,
            mop_mode: c.mop_mode,
            mop_intensity: c.mop_intensity
          }
        },
        { entity_id: E }
      );
    } catch (H) {
      throw new Xe("start_vacuum_then_mop", H instanceof Error ? H.message : String(H), { cause: H });
    }
    return S;
  }
  if (c.strategy === "smartplan")
    await K2(n(), i), await th(n(), i, 1);
  else {
    const E = i.entities?.cleaning_mode, M = c.cleaning_type === "vacuum" ? "vacuum" : "vac_and_mop", B = E && n().states[E]?.attributes.options;
    if (E && Array.isArray(B) && B.map(String).includes(M))
      await rl(n, E, M, "set_cleaning_mode", f, d, p);
    else if (c.cleaning_type === "vacuum" && i.vacuum_mode_fallback === "set_clean_motor_mode")
      await Q2(n(), i);
    else if (c.cleaning_type === "vacuum")
      throw new Xe("set_cleaning_mode", "Vacuum-only requires a cleaning-mode entity");
    const H = i.entities?.mop_mode;
    if (c.mop_mode) {
      if (!H) throw new Xe("set_mop_mode", "The selected profile requires a mop-mode entity");
      n().states[H]?.state === "smart_mode" && V2.has(c.mop_mode) && await rl(n, H, "custom", "leave_smartplan", f, d, p), await rl(n, H, c.mop_mode, "set_mop_mode", f, d, p);
    }
    if (c.cleaning_type !== "vacuum" && c.mop_intensity) {
      const D = i.entities?.mop_intensity;
      if (!D) throw new Xe("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      await rl(n, D, c.mop_intensity, "set_mop_intensity", f, d, p);
    }
    if (c.fan_speed) {
      const D = n();
      nh(D, i.entity, c.fan_speed);
      try {
        await D.callService("vacuum", "set_fan_speed", { fan_speed: c.fan_speed }, { entity_id: i.entity });
      } catch (V) {
        throw new Xe("set_fan_speed", V instanceof Error ? V.message : String(V), { cause: V });
      }
    }
    await th(n(), i, c.cleaning_count);
  }
  try {
    await n().callService(
      "vacuum",
      "clean_area",
      { cleaning_area_id: S },
      { entity_id: i.entity }
    );
  } catch (E) {
    throw new Xe("clean_area", E instanceof Error ? E.message : String(E), { cause: E });
  }
  return S;
}
const W2 = {
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
  inactive: "Off"
}, P2 = {
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
  inactive: "Uit"
};
function Q(n, i) {
  return (n === "nl" ? P2 : W2)[i];
}
const F2 = [
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
function I2(n, i, u) {
  const o = i.cleaningModes.includes("vacuum") || n.vacuum_mode_fallback === "set_clean_motor_mode";
  if (u.cleaning_type === "vacuum" && !o)
    return "cleaning mode “vacuum”";
  if (u.cleaning_type === "vacuum_then_mop") {
    if (!n.entities?.vacuum_then_mop_script) return "Vac followed by Mop script";
    if (!i.cleaningModes.includes("vacuum") || !i.cleaningModes.includes("mop"))
      return "cleaning modes “vacuum” and “mop”";
  }
  if (u.fan_speed && !i.fanSpeeds.includes(u.fan_speed)) return `fan speed “${u.fan_speed}”`;
  if (u.mop_mode && !i.mopModes.includes(u.mop_mode)) return `mop mode “${u.mop_mode}”`;
  if (u.mop_intensity && !i.mopIntensities.includes(u.mop_intensity))
    return `mop intensity “${u.mop_intensity}”`;
}
function ez(n, i) {
  return [...F2, ...n.presets ?? []].map((u) => {
    const o = I2(n, i, u);
    return {
      preset: u,
      available: !o,
      reason: o ? `Unsupported ${o}` : void 0
    };
  });
}
function Js(n) {
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
const tz = {
  mop_wash_frequency: ["smart", "10_min", "15_min", "20_min", "25_min", "30_min"],
  wash_mode: ["smart", "light", "balanced", "deep"],
  wash_temperature: ["normal", "warm", "hot"],
  empty_mode: ["smart", "light", "balanced", "max"],
  dry_duration: ["2h", "3h", "4h"]
}, nz = {
  mop_wash_frequency: "smart",
  wash_mode: "smart",
  wash_temperature: "hot",
  auto_empty: !1,
  empty_mode: "smart",
  auto_dry: !0,
  dry_duration: "3h"
}, az = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
};
function ya(n, i, u) {
  const o = i.entities?.[az[u]], c = o ? n.states[o]?.state : void 0;
  return !c || ["unknown", "unavailable"].includes(c) ? nz[u] : u === "auto_empty" || u === "auto_dry" ? c === "on" : c;
}
function pl(n, i) {
  const u = {
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
  return i.endsWith("_min") ? `${i.replace("_min", "")} min` : u[i]?.[n === "nl" ? 1 : 0] ?? i;
}
function sl({
  label: n,
  setting: i,
  value: u,
  language: o,
  disabled: c,
  onChange: f
}) {
  return /* @__PURE__ */ y.jsxs("label", { className: "dock-setting-row", children: [
    /* @__PURE__ */ y.jsx("span", { children: n }),
    /* @__PURE__ */ y.jsx("select", { "aria-label": n, value: u, disabled: c, onChange: (d) => f(d.target.value), children: tz[i].map((d) => /* @__PURE__ */ y.jsx("option", { value: d, children: pl(o, d) }, d)) })
  ] });
}
function Xs({
  label: n,
  checked: i,
  disabled: u,
  onChange: o
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
        disabled: u,
        onClick: () => o(!i),
        children: /* @__PURE__ */ y.jsx("span", {})
      }
    )
  ] });
}
function iz({
  hass: n,
  config: i,
  language: u,
  washing: o,
  emptying: c,
  drying: f,
  dryingRemaining: d,
  pending: p,
  onClose: v,
  onAction: h,
  onSetting: _,
  onChildLock: S
}) {
  const x = !!p, E = i.entities?.dock_child_lock, M = E ? n.states[E]?.state === "on" : !1, B = String(ya(n, i, "mop_wash_frequency")), H = String(ya(n, i, "wash_mode")), D = String(ya(n, i, "wash_temperature")), V = !!ya(n, i, "auto_empty"), $ = String(ya(n, i, "empty_mode")), X = !!ya(n, i, "auto_dry"), J = String(ya(n, i, "dry_duration")), ne = [
    { action: "empty", label: Q(u, "empty"), active: c, icon: /* @__PURE__ */ y.jsx(Fu, {}), detail: pl(u, $) },
    { action: "wash", label: Q(u, "wash"), active: o, icon: /* @__PURE__ */ y.jsx(Cp, {}), detail: `${pl(u, H)} · ${pl(u, D)}` },
    { action: "dry", label: Q(u, "dry"), active: f, icon: /* @__PURE__ */ y.jsx(Mp, {}), detail: f ? d : pl(u, J) }
  ];
  return /* @__PURE__ */ y.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ y.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": Q(u, "close"), onClick: v }),
    /* @__PURE__ */ y.jsxs("section", { className: "job-sheet dock-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "dock-sheet-title", children: [
      /* @__PURE__ */ y.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ y.jsxs("header", { children: [
        /* @__PURE__ */ y.jsxs("div", { children: [
          /* @__PURE__ */ y.jsx("h2", { id: "dock-sheet-title", children: Q(u, "dockStation") }),
          /* @__PURE__ */ y.jsx("p", { children: Q(u, "dockOverview") })
        ] }),
        /* @__PURE__ */ y.jsx("button", { type: "button", className: "icon-button", "aria-label": Q(u, "close"), onClick: v, children: /* @__PURE__ */ y.jsx(Is, {}) })
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "sheet-body dock-sheet-body", children: [
        /* @__PURE__ */ y.jsx("div", { className: "dock-actions", children: ne.map((q) => /* @__PURE__ */ y.jsxs(
          "button",
          {
            type: "button",
            className: q.active ? "active" : "",
            disabled: x,
            onClick: () => h(q.action, q.active),
            children: [
              /* @__PURE__ */ y.jsx("span", { className: "dock-action-icon", children: q.icon }),
              /* @__PURE__ */ y.jsx("strong", { children: q.active ? Q(u, "stop") : q.label }),
              /* @__PURE__ */ y.jsx("small", { children: q.active ? Q(u, "active") : q.detail })
            ]
          },
          q.action
        )) }),
        /* @__PURE__ */ y.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ y.jsxs("h3", { children: [
            /* @__PURE__ */ y.jsx(Cp, {}),
            Q(u, "dockSettings")
          ] }),
          /* @__PURE__ */ y.jsx(sl, { label: Q(u, "mopWashFrequency"), setting: "mop_wash_frequency", value: B, language: u, disabled: x, onChange: (q) => _("mop_wash_frequency", q) }),
          /* @__PURE__ */ y.jsx(sl, { label: Q(u, "washingMode"), setting: "wash_mode", value: H, language: u, disabled: x, onChange: (q) => _("wash_mode", q) }),
          /* @__PURE__ */ y.jsx(sl, { label: Q(u, "washTemperature"), setting: "wash_temperature", value: D, language: u, disabled: x, onChange: (q) => _("wash_temperature", q) })
        ] }),
        /* @__PURE__ */ y.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ y.jsxs("h3", { children: [
            /* @__PURE__ */ y.jsx(Fu, {}),
            Q(u, "dustbin")
          ] }),
          /* @__PURE__ */ y.jsx(Xs, { label: Q(u, "autoEmpty"), checked: V, disabled: x, onChange: (q) => _("auto_empty", q) }),
          /* @__PURE__ */ y.jsx(sl, { label: Q(u, "emptyMode"), setting: "empty_mode", value: $, language: u, disabled: x, onChange: (q) => _("empty_mode", q) })
        ] }),
        /* @__PURE__ */ y.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ y.jsxs("h3", { children: [
            /* @__PURE__ */ y.jsx(Mp, {}),
            Q(u, "drying")
          ] }),
          /* @__PURE__ */ y.jsx(Xs, { label: Q(u, "autoDry"), checked: X, disabled: x, onChange: (q) => _("auto_dry", q) }),
          /* @__PURE__ */ y.jsx(sl, { label: Q(u, "dryDuration"), setting: "dry_duration", value: J, language: u, disabled: x, onChange: (q) => _("dry_duration", q) })
        ] }),
        /* @__PURE__ */ y.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ y.jsxs("h3", { children: [
            /* @__PURE__ */ y.jsx(hh, {}),
            Q(u, "safetyMaintenance")
          ] }),
          E && /* @__PURE__ */ y.jsx(Xs, { label: Q(u, "childLock"), checked: M, disabled: x, onChange: S }),
          /* @__PURE__ */ y.jsxs("button", { type: "button", className: "drain-button", disabled: x, onClick: () => h("drain", !1), children: [
            /* @__PURE__ */ y.jsx(r0, {}),
            /* @__PURE__ */ y.jsxs("span", { children: [
              /* @__PURE__ */ y.jsx("strong", { children: Q(u, "drainWaterTank") }),
              /* @__PURE__ */ y.jsx("small", { children: Q(u, "drainWarning") })
            ] })
          ] })
        ] }),
        p && /* @__PURE__ */ y.jsx("p", { className: "dock-pending", role: "status", children: p })
      ] })
    ] })
  ] });
}
function Ws({ icon: n, className: i }) {
  return n ? ie.createElement("ha-icon", { icon: n, class: i, "aria-hidden": "true" }) : null;
}
const ah = ["smartplan", "vacuum_then_mop", "vacuum_and_mop", "vacuum_only"], lz = ["quiet", "balanced", "turbo", "max", "max_plus"], uz = ["quiet", "balanced", "turbo", "max"], oz = ["fast", "standard", "deep"], rz = ["slight", "low", "medium", "moderate", "high", "extreme"], sz = { slight: 1, low: 5, medium: 15, moderate: 25, high: 28, extreme: 30 };
function Wh(n) {
  return n.replaceAll("_", " ").replace(/\b\w/g, (i) => i.toUpperCase());
}
function Hs({
  value: n,
  options: i,
  onChange: u,
  title: o
}) {
  return i.length === 0 ? null : /* @__PURE__ */ y.jsxs("div", { className: "field app-field", children: [
    /* @__PURE__ */ y.jsx("span", { children: o }),
    /* @__PURE__ */ y.jsx("div", { className: "option-strip", children: i.map((c) => /* @__PURE__ */ y.jsx(
      "button",
      {
        type: "button",
        className: n === c ? "active" : "",
        onClick: () => u(c),
        children: Wh(c)
      },
      c
    )) })
  ] });
}
function ih(n, i) {
  return i === "smartplan" ? n.strategy === "smartplan" : n.strategy === "smartplan" ? !1 : i === "vacuum_only" ? n.cleaning_type === "vacuum" : i === "vacuum_and_mop" ? n.cleaning_type === "vacuum_and_mop" : n.cleaning_type === "vacuum_then_mop";
}
function cz({
  language: n,
  draft: i,
  capabilities: u,
  presets: o,
  selectedRoomNames: c,
  submitting: f,
  onDraftChange: d,
  onClose: p,
  onStart: v
}) {
  const h = ah.map((D) => o.find(({ preset: V }) => V.id === D)).filter(
    (D) => !!D
  ), _ = o.filter(({ preset: D }) => !ah.includes(D.id)), x = (i.cleaning_type === "vacuum" ? lz : uz).filter((D) => u.fanSpeeds.includes(D)), E = oz.filter((D) => u.mopModes.includes(D)), M = rz.filter((D) => u.mopIntensities.includes(D)), B = Math.max(0, M.indexOf(i.mop_intensity ?? "medium")), H = i.strategy === "smartplan" ? Q(n, "smartPlanDescription") : i.cleaning_type === "vacuum" ? Q(n, "vacuumDescription") : i.cleaning_type === "vacuum_then_mop" ? Q(n, "vacuumThenMopDescription") : Q(n, "vacuumAndMopDescription");
  return /* @__PURE__ */ y.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ y.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": Q(n, "close"), onClick: p }),
    /* @__PURE__ */ y.jsxs("section", { className: "job-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "job-sheet-title", children: [
      /* @__PURE__ */ y.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ y.jsxs("header", { children: [
        /* @__PURE__ */ y.jsxs("div", { children: [
          /* @__PURE__ */ y.jsx("h2", { id: "job-sheet-title", children: Q(n, "configureTitle") }),
          /* @__PURE__ */ y.jsx("p", { children: c.join(" · ") })
        ] }),
        /* @__PURE__ */ y.jsx("button", { type: "button", className: "icon-button", "aria-label": Q(n, "close"), onClick: p, children: /* @__PURE__ */ y.jsx(Is, {}) })
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "sheet-body", children: [
        /* @__PURE__ */ y.jsx("div", { className: "cleaning-mode-tabs", role: "tablist", "aria-label": Q(n, "cleaningType"), children: h.map(({ preset: D, available: V, reason: $ }) => /* @__PURE__ */ y.jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": ih(i, D.id),
            className: ih(i, D.id) ? "active" : "",
            disabled: !V || f,
            title: $,
            onClick: () => d(Js(D)),
            children: [
              /* @__PURE__ */ y.jsx(Ws, { icon: D.icon }),
              /* @__PURE__ */ y.jsx("span", { children: D.id === "smartplan" ? "AI SmartPlan" : D.name })
            ]
          },
          D.id
        )) }),
        /* @__PURE__ */ y.jsxs("section", { className: "mode-settings", children: [
          /* @__PURE__ */ y.jsx("p", { className: "mode-description", children: H }),
          i.strategy !== "smartplan" && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
            /* @__PURE__ */ y.jsx(
              Hs,
              {
                title: Q(n, "suction"),
                value: i.fan_speed,
                options: x,
                onChange: (D) => d({ ...i, preset_id: "custom_draft", fan_speed: D })
              }
            ),
            i.cleaning_type !== "vacuum" && M.length > 0 && /* @__PURE__ */ y.jsxs("label", { className: "field app-field water-flow", children: [
              /* @__PURE__ */ y.jsx("span", { children: Q(n, "waterFlow") }),
              /* @__PURE__ */ y.jsxs("div", { className: "range-heading", children: [
                /* @__PURE__ */ y.jsx("strong", { children: Wh(M[B]) }),
                /* @__PURE__ */ y.jsx("output", { children: sz[M[B]] })
              ] }),
              /* @__PURE__ */ y.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: M.length - 1,
                  step: "1",
                  value: B,
                  "aria-label": Q(n, "waterFlow"),
                  onChange: (D) => d({
                    ...i,
                    preset_id: "custom_draft",
                    mop_intensity: M[Number(D.target.value)]
                  })
                }
              )
            ] }),
            /* @__PURE__ */ y.jsx(
              Hs,
              {
                title: Q(n, "cleaningCount"),
                value: String(i.cleaning_count),
                options: i.cleaning_type === "vacuum_then_mop" ? ["1"] : ["1", "2"],
                onChange: (D) => d({
                  ...i,
                  preset_id: "custom_draft",
                  cleaning_count: Number(D)
                })
              }
            ),
            /* @__PURE__ */ y.jsx(
              Hs,
              {
                title: Q(n, "mopRoute"),
                value: i.mop_mode,
                options: E,
                onChange: (D) => d({ ...i, preset_id: "custom_draft", mop_mode: D })
              }
            )
          ] })
        ] }),
        _.length > 0 && /* @__PURE__ */ y.jsxs("div", { className: "saved-profiles", children: [
          /* @__PURE__ */ y.jsx("span", { children: Q(n, "savedProfiles") }),
          /* @__PURE__ */ y.jsx("div", { children: _.map(({ preset: D, available: V, reason: $ }) => /* @__PURE__ */ y.jsxs(
            "button",
            {
              type: "button",
              disabled: !V || f,
              title: $,
              className: i.preset_id === D.id ? "active" : "",
              onClick: () => d(Js(D)),
              children: [
                /* @__PURE__ */ y.jsx(Ws, { icon: D.icon }),
                " ",
                D.name
              ]
            },
            D.id
          )) })
        ] })
      ] }),
      /* @__PURE__ */ y.jsxs("footer", { children: [
        /* @__PURE__ */ y.jsx("button", { type: "button", className: "secondary", disabled: f, onClick: p, children: Q(n, "cancel") }),
        /* @__PURE__ */ y.jsx("button", { type: "button", className: "primary", disabled: f, onClick: v, children: f ? Q(n, "starting") : Q(n, "start") })
      ] })
    ] })
  ] });
}
var ba = function(n, i) {
  return Number(n.toFixed(i));
}, fz = function(n, i) {
  return i;
}, Ae = function(n, i, u) {
  u && typeof u == "function" && u(n, i);
}, dz = function(n) {
  return -Math.cos(n * Math.PI) / 2 + 0.5;
}, mz = function(n) {
  return n;
}, pz = function(n) {
  return n * n;
}, hz = function(n) {
  return n * (2 - n);
}, vz = function(n) {
  return n < 0.5 ? 2 * n * n : -1 + (4 - 2 * n) * n;
}, gz = function(n) {
  return n * n * n;
}, yz = function(n) {
  return --n * n * n + 1;
}, _z = function(n) {
  return n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1;
}, bz = function(n) {
  return n * n * n * n;
}, Sz = function(n) {
  return 1 - --n * n * n * n;
}, zz = function(n) {
  return n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n;
}, wz = function(n) {
  return n * n * n * n * n;
}, xz = function(n) {
  return 1 + --n * n * n * n * n;
}, Tz = function(n) {
  return n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n;
}, Ph = {
  easeOut: dz,
  linear: mz,
  easeInQuad: pz,
  easeOutQuad: hz,
  easeInOutQuad: vz,
  easeInCubic: gz,
  easeOutCubic: yz,
  easeInOutCubic: _z,
  easeInQuart: bz,
  easeOutQuart: Sz,
  easeInOutQuart: zz,
  easeInQuint: wz,
  easeOutQuint: xz,
  easeInOutQuint: Tz
}, Fh = function(n) {
  typeof n == "number" && cancelAnimationFrame(n);
}, Ft = function(n) {
  n.mounted && (Fh(n.animation), n.isAnimating = !1, n.animation = null, n.velocity = null);
};
function Ih(n, i, u, o) {
  if (n.mounted) {
    var c = (/* @__PURE__ */ new Date()).getTime(), f = 1;
    Ft(n), n.animation = function() {
      if (!n.mounted)
        return Fh(n.animation);
      var d = (/* @__PURE__ */ new Date()).getTime() - c, p = d / u, v = Ph[i], h = v(p);
      d >= u ? (o(f), n.animation = null) : n.animation && (o(h), requestAnimationFrame(n.animation));
    }, requestAnimationFrame(n.animation);
  }
}
function Ez(n) {
  var i = n.scale, u = n.positionX, o = n.positionY;
  return !(Number.isNaN(i) || Number.isNaN(u) || Number.isNaN(o));
}
function In(n, i, u, o) {
  var c = Ez(i);
  if (!(!n.mounted || !c)) {
    var f = n.setState, d = n.state, p = d.scale, v = d.positionX, h = d.positionY, _ = i.scale - p, S = i.positionX - v, x = i.positionY - h;
    u === 0 ? f(i.scale, i.positionX, i.positionY) : Ih(n, o, u, function(E) {
      E !== 1 ? n.isAnimating = !0 : n.isAnimating = !1;
      var M = p + _ * E, B = v + S * E, H = h + x * E;
      f(M, B, H);
    });
  }
}
function Az(n, i, u) {
  var o = n.offsetWidth, c = n.offsetHeight, f = i.offsetWidth, d = i.offsetHeight, p = f * u, v = d * u, h = o - p, _ = c - v;
  return {
    wrapperWidth: o,
    wrapperHeight: c,
    newContentWidth: p,
    newDiffWidth: h,
    newContentHeight: v,
    newDiffHeight: _
  };
}
var Oz = function(n, i, u, o, c, f, d) {
  var p = n > i ? u * (d ? 0.5 : 1) : 0, v = o > c ? f * (d ? 0.5 : 1) : 0, h = n - i - p, _ = p, S = o - c - v, x = v;
  return {
    minPositionX: h,
    maxPositionX: _,
    minPositionY: S,
    maxPositionY: x,
    scaleWidthFactor: p,
    scaleHeightFactor: v
  };
}, sc = function(n, i) {
  var u = n.wrapperComponent, o = n.contentComponent, c = n.setup, f = c.centerZoomedOut, d = c.disablePadding;
  if (!u || !o)
    throw new Error("Components are not mounted");
  var p = Az(u, o, i), v = p.wrapperWidth, h = p.wrapperHeight, _ = p.newContentWidth, S = p.newContentHeight, x = p.newDiffWidth, E = p.newDiffHeight, M = Oz(v, _, x, h, S, E, !!f), B = v >= _ && h >= S;
  d && B && !f && (M.minPositionX = 0, M.maxPositionX = 0, M.minPositionY = 0, M.maxPositionY = 0);
  var H = n.setup, D = H.minPositionX, V = H.maxPositionX, $ = H.minPositionY, X = H.maxPositionY;
  return D != null && (M.minPositionX = v * (1 - i) + D * i), V != null && (M.maxPositionX = V * i), $ != null && (M.minPositionY = h * (1 - i) + $ * i), X != null && (M.maxPositionY = X * i), M;
}, yl = function(n, i, u, o) {
  return o ? n < i ? ba(i, 2) : n > u ? ba(u, 2) : ba(n, 2) : ba(n, 2);
}, fi = function(n, i) {
  var u = sc(n, i);
  return n.bounds = u, u;
};
function Sl(n, i, u, o, c, f, d) {
  var p = u.minPositionX, v = u.minPositionY, h = u.maxPositionX, _ = u.maxPositionY, S = 0, x = 0;
  d && (S = c, x = f);
  var E = yl(n, p - S, h + S, o), M = yl(i, v - x, _ + x, o);
  return { x: E, y: M };
}
function fo(n, i, u, o, c, f) {
  var d = n.state, p = d.scale, v = d.positionX, h = d.positionY, _ = o - p;
  if (typeof i != "number" || typeof u != "number")
    return console.error("Mouse X and Y position were not provided!"), { x: v, y: h };
  var S = v - i * _, x = h - u * _, E = Sl(S, x, c, f, 0, 0, null);
  return E;
}
var lh = 1e-7;
function zl(n, i, u, o, c) {
  var f = c ? o : 0, d = Math.max(i - f, lh), p = u + f;
  return !Number.isNaN(u) && n >= p ? p : !Number.isNaN(i) && n <= d ? d : Math.max(n, lh);
}
var uh = function(n, i) {
  var u = n.setup.panning.excluded, o = n.isInitialized, c = n.wrapperComponent, f = i.target, d = "shadowRoot" in f && "composedPath" in i, p = d ? i.composedPath().some(function(_) {
    return _ instanceof Element ? c?.contains(_) : !1;
  }) : c?.contains(f), v = o && f && p;
  if (!v)
    return !1;
  var h = wl(f, u);
  return !(h || f.getAttribute("draggable") === "true" || f.getAttribute("contenteditable") === "true" || f.isContentEditable);
}, oh = function(n) {
  var i = n.isInitialized, u = n.isPanning, o = n.setup, c = o.panning.disabled, f = i && u && !c;
  return !!f;
}, Cz = function(n, i) {
  var u = n.state, o = u.positionX, c = u.positionY;
  n.isPanning = !0;
  var f = i.clientX, d = i.clientY;
  n.startCoords = { x: f - o, y: d - c };
}, Mz = function(n, i) {
  var u = i.touches, o = n.state, c = o.positionX, f = o.positionY;
  n.isPanning = !0;
  var d = u.length === 1;
  if (d) {
    var p = u[0].clientX, v = u[0].clientY;
    n.startCoords = { x: p - c, y: v - f };
  }
};
function jz(n) {
  var i = n.state, u = i.positionX, o = i.positionY, c = i.scale, f = n.setup, d = f.disabled, p = f.limitToBounds, v = f.centerZoomedOut, h = n.wrapperComponent;
  if (!(d || !h || !n.bounds)) {
    var _ = n.bounds, S = _.maxPositionX, x = _.minPositionX, E = _.maxPositionY, M = _.minPositionY, B = u > S || u < x, H = o > E || o < M, D = u > S ? h.offsetWidth : n.setup.minPositionX || 0, V = o > E ? h.offsetHeight : n.setup.minPositionY || 0, $ = fo(n, D, V, c, n.bounds, p || v), X = $.x, J = $.y;
    return {
      scale: c,
      positionX: B ? X : u,
      positionY: H ? J : o
    };
  }
}
function ev(n, i, u, o, c) {
  var f = n.setup.limitToBounds, d = n.wrapperComponent, p = n.bounds, v = n.state, h = v.scale, _ = v.positionX, S = v.positionY;
  if (!(d === null || p === null || i === _ && u === S)) {
    var x = Sl(i, u, p, f, o, c, d), E = x.x, M = x.y;
    n.setState(h, E, M);
  }
}
var kz = function(n, i, u) {
  var o = n.startCoords, c = n.state, f = n.setup.panning, d = f.lockAxisX, p = f.lockAxisY, v = c.positionX, h = c.positionY;
  if (!o)
    return { x: v, y: h };
  var _ = i - o.x, S = u - o.y, x = d ? v : _, E = p ? h : S;
  return { x, y: E };
}, Wn = function(n, i, u) {
  var o = n.setup, c = n.state, f = o.minScale, d = o.disablePadding, p = o.centerZoomedOut, v = u ?? c.scale;
  return i > 0 && v >= f && !d && !p ? i : 0;
}, Jn;
(function(n) {
  n.TRACK_PAD = "track_pad", n.MOUSE = "mouse", n.TOUCH = "touch";
})(Jn || (Jn = {}));
var Dz = function(n) {
  var i = n.mounted, u = n.wrapperComponent, o = n.contentComponent, c = n.setup, f = c.disabled, d = c.velocityAnimation, p = c.limitToBounds, v = n.state.scale, h = d.disabled;
  if (h || f || !i || !u || !o)
    return !1;
  if (!p)
    return !0;
  var _ = u.offsetWidth < o.offsetWidth * v || u.offsetHeight < o.offsetHeight * v;
  return _;
}, Nz = function(n) {
  var i = n.mounted, u = n.velocity, o = n.bounds, c = n.setup, f = c.disabled, d = c.velocityAnimation, p = d.disabled, v = !p && !f && i;
  return !(!v || !u || !o);
};
function Zz(n, i) {
  var u = n.setup.velocityAnimation, o = u.animationTime, c = u.maxAnimationTime, f = u.inertia;
  return Math.min(o * Math.max(1, Math.abs(i / f)), c);
}
function rh(n, i, u, o, c, f, d, p, v, h) {
  if (c) {
    if (i > d && u > d) {
      var _ = d + (n - d) * h;
      return _ > v ? v : _ < d ? d : _;
    }
    if (i < f && u < f) {
      var _ = f + (n - f) * h;
      return _ < p ? p : _ > f ? f : _;
    }
  }
  return o ? i : yl(n, f, d, c);
}
function Rz(n) {
  var i = 1, u = n.offsetWidth / window.innerWidth;
  return Number.isNaN(u) ? i : Math.min(i, u);
}
var Bs = function(n, i, u) {
  var o = 0, c = n * u;
  return Number.isNaN(c) ? o : n < 0 ? Math.max(c, -i) : Math.min(c, i);
};
function Uz(n, i, u) {
  var o, c, f = Dz(n);
  if (f) {
    var d = n.lastMousePosition, p = n.velocityTime, v = n.setup, h = n.wrapperComponent, _ = v.velocityAnimation, S = _.maxStrengthMouse, x = _.maxStrengthTouch, E = _.sensitivityTouch, M = _.sensitivityMouse, B = Date.now();
    if (d && p && h) {
      var H = Rz(h), D = (o = {}, o[Jn.TOUCH] = E, o[Jn.MOUSE] = M, o)[u], V = (c = {}, c[Jn.TOUCH] = x, c[Jn.MOUSE] = S, c)[u], $ = i.x - d.x, X = i.y - d.y, J = Bs($ / H, V, D), ne = Bs(X / H, V, D), q = B - p, re = $ * $ + X * X, de = Bs(Math.sqrt(re) / q, V, D);
      n.velocity = { velocityX: J, velocityY: ne, total: de };
    }
    n.lastMousePosition = i, n.velocityTime = B;
  }
}
function Yz(n) {
  var i = n.velocity, u = n.bounds, o = n.setup, c = n.wrapperComponent, f = Nz(n);
  if (!(!f || !i || !u || !c)) {
    var d = i.velocityX, p = i.velocityY, v = i.total, h = u.maxPositionX, _ = u.minPositionX, S = u.maxPositionY, x = u.minPositionY, E = o.limitToBounds, M = o.autoAlignment, B = o.zoomAnimation, H = o.panning, D = H.lockAxisY, V = H.lockAxisX, $ = B.animationType, X = M.sizeX, J = M.sizeY, ne = M.velocityAlignmentTime, q = ne, re = Zz(n, v), de = Math.max(re, q), ge = Wn(n, X), ye = Wn(n, J), _e = ge * c.offsetWidth / 100, qe = ye * c.offsetHeight / 100, Fe = h + _e, it = _ - _e, k = S + qe, L = x - qe, I = n.state, we = (/* @__PURE__ */ new Date()).getTime();
    Ih(n, $, de, function(be) {
      var z = n.state, R = z.scale, G = z.positionX, W = z.positionY, ue = (/* @__PURE__ */ new Date()).getTime() - we, ce = ue / q, xe = Ph[M.animationType], K = 1 - xe(Math.min(1, ce)), ae = 1 - be, Ce = G + d * ae, Qt = W + p * ae, mi = rh(Ce, I.positionX, G, V, E, _, h, it, Fe, K), Tl = rh(Qt, I.positionY, W, D, E, x, S, L, k, K);
      if (G !== Ce || W !== Qt) {
        n.setState(R, mi, Tl);
        var It = n.props.onPanning;
        It && It(ze(n), {});
      }
    });
  }
}
function sh(n, i) {
  var u = n.state, o = u.scale, c = u.positionX, f = u.positionY;
  n.panStartPosition = { x: c, y: f }, Ft(n), fi(n, o), window.TouchEvent !== void 0 && i instanceof TouchEvent ? Mz(n, i) : Cz(n, i);
}
function tv(n, i) {
  var u = n.state.scale, o = n.setup, c = o.minScale, f = o.autoAlignment, d = f.disabled, p = f.sizeX, v = f.sizeY, h = f.animationTime, _ = f.animationType, S = d || u < c || !p && !v;
  if (!S) {
    var x = jz(n);
    x && In(n, x, h, _);
  }
}
function ch(n, i, u, o) {
  var c = n.startCoords, f = n.setup, d = f.autoAlignment, p = d.sizeX, v = d.sizeY;
  if (c) {
    var h = kz(n, i, u), _ = h.x, S = h.y, x = Wn(n, p), E = Wn(n, v);
    Uz(n, { x: _, y: S }, o), ev(n, _, S, x, E);
  }
}
function Xz(n, i) {
  if (n.isPanning) {
    var u = n.velocity, o = n.wrapperComponent, c = n.contentComponent;
    n.isPanning = !1;
    var f = n.state, d = f.positionX, p = f.positionY, v = f.scale, h = n.panStartPosition;
    if (n.panStartPosition = null, h) {
      var _ = d - h.x, S = p - h.y;
      if (_ * _ + S * S <= 25)
        return;
    }
    n.isAnimating = !1, n.animation = null;
    var x = o?.offsetWidth || 0, E = o?.offsetHeight || 0, M = (c?.offsetWidth || 0) * v, B = (c?.offsetHeight || 0) * v, H = !n.setup.limitToBounds || x < M || E < B, D = !i && u && u.total > 0.1 && H;
    D ? Yz(n) : tv(n);
  }
}
function cc(n, i, u, o) {
  var c = n.setup, f = c.minScale, d = c.maxScale, p = c.limitToBounds, v = zl(ba(i, 2), f, d, 0, !1), h = fi(n, v), _ = fo(n, u, o, v, h, p), S = _.x, x = _.y;
  return { scale: v, positionX: S, positionY: x };
}
function fc(n, i, u) {
  var o = n.state.scale, c = n.wrapperComponent, f = n.setup, d = f.minScale, p = f.maxScale, v = f.limitToBounds, h = f.zoomAnimation, _ = h.disabled, S = h.animationTime, x = h.animationType, E = o >= d && o <= p, M = _ || E;
  if ((o >= 1 || v) && tv(n), !(M || !c || !n.mounted)) {
    var B = i || c.offsetWidth / 2, H = u || c.offsetHeight / 2, D = o < d ? d : p, V = cc(n, D, B, H);
    V && In(n, V, S, x);
  }
}
var Vt = function() {
  return Vt = Object.assign || function(i) {
    for (var u, o = 1, c = arguments.length; o < c; o++) {
      u = arguments[o];
      for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (i[f] = u[f]);
    }
    return i;
  }, Vt.apply(this, arguments);
};
function fh(n, i, u) {
  for (var o = 0, c = i.length, f; o < c; o++)
    (f || !(o in i)) && (f || (f = Array.prototype.slice.call(i, 0, o)), f[o] = i[o]);
  return n.concat(f || Array.prototype.slice.call(i));
}
var qs = {
  scale: 1,
  positionX: 0,
  positionY: 0
}, _a = {
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
}, Ps = {
  wrapperClass: "react-transform-wrapper",
  contentClass: "react-transform-component"
}, nv = function(n) {
  var i, u, o, c, f, d, p, v, h, _ = Math.max((i = n.minScale) !== null && i !== void 0 ? i : _a.minScale, 1e-7), S = (u = n.maxScale) !== null && u !== void 0 ? u : _a.maxScale, x = (o = n.initialScale) !== null && o !== void 0 ? o : qs.scale, E = Math.min(Math.max(x, _), S), M = yl((c = n.initialPositionX) !== null && c !== void 0 ? c : qs.positionX, (f = n.minPositionX) !== null && f !== void 0 ? f : -1 / 0, (d = n.maxPositionX) !== null && d !== void 0 ? d : 1 / 0, n.minPositionX != null || n.maxPositionX != null), B = yl((p = n.initialPositionY) !== null && p !== void 0 ? p : qs.positionY, (v = n.minPositionY) !== null && v !== void 0 ? v : -1 / 0, (h = n.maxPositionY) !== null && h !== void 0 ? h : 1 / 0, n.minPositionY != null || n.maxPositionY != null);
  return {
    previousScale: E,
    scale: E,
    positionX: M,
    positionY: B
  };
}, dh = function(n) {
  var i = Vt({}, _a);
  return Object.keys(n).forEach(function(u) {
    var o = u, c = typeof n[o] < "u", f = typeof _a[o] < "u";
    if (f && c) {
      var d = Object.prototype.toString.call(_a[o]), p = d === "[object Object]", v = d === "[object Array]";
      p ? i[o] = Vt(Vt({}, _a[o]), n[o]) : v ? i[o] = fh(fh([], _a[o], !0), n[o]) : i[o] = n[o];
    }
  }), i.minScale <= 0 && (i.minScale = 1e-7), i;
}, av = function(n, i, u) {
  var o = n.state.scale, c = n.wrapperComponent, f = n.setup, d = f.maxScale, p = f.minScale, v = f.zoomAnimation, h = f.smooth, _ = v.size;
  if (!c)
    throw new Error("Wrapper is not mounted");
  var S = h ? o * Math.exp(i * u) : o + i * u, x = zl(ba(S, 3), p, d, _, !1);
  return x;
};
function iv(n, i, u, o, c) {
  var f, d, p = n.wrapperComponent, v = n.state, h = v.scale, _ = v.positionX, S = v.positionY, x = n.setup.zoomAnimation;
  if (!p)
    return console.error("No WrapperComponent found");
  var E = x.disabled ? 0 : o, M = p.offsetWidth, B = p.offsetHeight, H = (M / 2 - _) / h, D = (B / 2 - S) / h, V = av(n, i, u), $ = cc(n, V, H, D);
  if (!$)
    return console.error("Error during zoom event. New transformation state was not calculated.");
  var X = n.props, J = X.onZoomStart, ne = X.onZoom, q = X.onZoomStop, re = new MouseEvent("mousemove", { bubbles: !0 }), de = ze(n);
  Ae(de, re, J), Ae(de, re, ne), In(n, $, E, c);
  var ge = (d = (f = p.ownerDocument) === null || f === void 0 ? void 0 : f.defaultView) !== null && d !== void 0 ? d : typeof window < "u" ? window : null;
  ge && ge.setTimeout(function() {
    n.mounted && Ae(ze(n), re, q);
  }, E);
}
function lv(n, i, u, o) {
  var c, f, d = n.setup, p = n.wrapperComponent, v = n.contentComponent, h = d.limitToBounds, _ = d.centerOnInit, S = nv(n.props), x = n.state, E = x.scale, M = x.positionX, B = x.positionY;
  if (p) {
    var H = S.positionX, D = S.positionY;
    if (_ && v) {
      var V = dc(S.scale, p, v);
      H = V.positionX, D = V.positionY;
    }
    var $ = sc(n, S.scale), X = Sl(H, D, $, h, 0, 0, p), J = {
      scale: S.scale,
      positionX: X.x,
      positionY: X.y
    };
    if (!(E === S.scale && M === S.positionX && B === S.positionY)) {
      o?.();
      var ne = n.props, q = ne.onZoomStart, re = ne.onZoom, de = ne.onZoomStop, ge = new MouseEvent("mousemove", { bubbles: !0 }), ye = ze(n);
      Ae(ye, ge, q), Ae(ye, ge, re), In(n, J, i, u);
      var _e = (f = (c = p.ownerDocument) === null || c === void 0 ? void 0 : c.defaultView) !== null && f !== void 0 ? f : typeof window < "u" ? window : null;
      _e && _e.setTimeout(function() {
        n.mounted && Ae(ze(n), ge, de);
      }, i);
    }
  }
}
function Hz(n, i, u, o) {
  var c = n.getBoundingClientRect(), f = i.getBoundingClientRect(), d = u.getBoundingClientRect(), p = f.x * o.scale, v = f.y * o.scale;
  return {
    x: (c.x - d.x + p) / o.scale,
    y: (c.y - d.y + v) / o.scale
  };
}
function Bz(n, i, u, o, c) {
  o === void 0 && (o = 0), c === void 0 && (c = 0);
  var f = n.wrapperComponent, d = n.contentComponent, p = n.state, v = n.setup, h = v.limitToBounds, _ = v.minScale, S = v.maxScale;
  if (!f || !d)
    return p;
  var x = f.getBoundingClientRect(), E = i.getBoundingClientRect(), M = Hz(i, f, d, p), B = M.x, H = M.y, D = E.width / p.scale, V = E.height / p.scale, $ = f.offsetWidth / D, X = f.offsetHeight / V, J = zl(u || Math.min($, X), _, S, 0, !1), ne = (x.width - D * J) / 2, q = (x.height - V * J) / 2, re = (x.left - B) * J + ne + o, de = (x.top - H) * J + q + c, ge = sc(n, J), ye = Sl(re, de, ge, h, 0, 0, f), _e = ye.x, qe = ye.y;
  return { positionX: _e, positionY: qe, scale: J };
}
var qz = function(n) {
  return function(i, u, o) {
    i === void 0 && (i = 0.5), u === void 0 && (u = 300), o === void 0 && (o = "easeOut"), iv(n, 1, i, u, o);
  };
}, $z = function(n) {
  return function(i, u, o) {
    i === void 0 && (i = 0.5), u === void 0 && (u = 300), o === void 0 && (o = "easeOut"), iv(n, -1, i, u, o);
  };
}, Lz = function(n) {
  return function(i, u, o, c, f) {
    c === void 0 && (c = 300), f === void 0 && (f = "easeOut");
    var d = n.state, p = d.positionX, v = d.positionY, h = d.scale, _ = n.wrapperComponent, S = n.contentComponent, x = n.setup.disabled;
    if (!(x || !_ || !S)) {
      var E = {
        positionX: Number.isNaN(i) ? p : i,
        positionY: Number.isNaN(u) ? v : u,
        scale: Number.isNaN(o) ? h : o
      };
      In(n, E, c, f);
    }
  };
}, Vz = function(n) {
  return function(i, u) {
    i === void 0 && (i = 200), u === void 0 && (u = "easeOut"), lv(n, i, u);
  };
}, Gz = function(n) {
  return function(i, u, o) {
    u === void 0 && (u = 200), o === void 0 && (o = "easeOut");
    var c = n.state, f = n.wrapperComponent, d = n.contentComponent;
    if (f && d) {
      var p = dc(i || c.scale, f, d);
      In(n, p, u, o);
    }
  };
}, Qz = function(n) {
  return function(i, u, o, c, f, d) {
    o === void 0 && (o = 600), c === void 0 && (c = "easeOut"), f === void 0 && (f = 0), d === void 0 && (d = 0), Ft(n);
    var p = n.wrapperComponent, v = typeof i == "string" ? document.getElementById(i) : i;
    if (p && v && p.contains(v)) {
      var h = Bz(n, v, u, f, d);
      In(n, h, o, c);
    }
  };
}, uo = function(n) {
  return {
    instance: n,
    state: n.state,
    zoomIn: qz(n),
    zoomOut: $z(n),
    setTransform: Lz(n),
    resetTransform: Vz(n),
    centerView: Gz(n),
    zoomToElement: Qz(n)
  };
}, Kz = function(n) {
  return {
    instance: n,
    state: n.state
  };
}, ze = function(n) {
  var i = {};
  return Object.assign(i, Kz(n)), Object.assign(i, uo(n)), i;
}, $s = !1;
function Ls() {
  try {
    var n = {
      get passive() {
        return $s = !0, !1;
      }
    };
    return n;
  } catch {
    return $s = !1, $s;
  }
}
var Pu = ".".concat(Ps.wrapperClass), wl = function(n, i) {
  return i.some(function(u) {
    return n.matches("".concat(Pu, " ").concat(u, ", ").concat(Pu, " .").concat(u, ", ").concat(Pu, " ").concat(u, " *, ").concat(Pu, " .").concat(u, " *"));
  });
}, _l = function(n) {
  n && clearTimeout(n);
}, Jz = function(n) {
  return Number.parseFloat(n.toFixed(8));
}, uv = function(n, i, u) {
  var o = Jz(u);
  return "translate(".concat(n, "px, ").concat(i, "px) scale(").concat(o, ")");
}, dc = function(n, i, u) {
  var o = u.offsetWidth * n, c = u.offsetHeight * n, f = (i.offsetWidth - o) / 2, d = (i.offsetHeight - c) / 2;
  return {
    scale: n,
    positionX: f,
    positionY: d
  };
};
function Wz(n, i) {
  n != null && (typeof n == "function" ? n(i) : n.current = i);
}
function Pz(n) {
  return function(i) {
    n.forEach(function(u) {
      typeof u == "function" ? u(i) : u != null && (u.current = i);
    });
  };
}
var ov = function(n, i) {
  var u = n.setup.wheel, o = u.disabled, c = u.wheelDisabled, f = u.touchPadDisabled, d = u.excluded, p = n.isInitialized, v = n.isPanning, h = i.target, _ = p && !v && !o && h;
  if (!_ || c && !i.ctrlKey || f && i.ctrlKey)
    return !1;
  var S = wl(h, d);
  if (S)
    return !1;
  var x = n.isPressingKeys(n.setup.wheel.activationKeys);
  return !!x;
}, Fz = function(n, i) {
  var u = n.setup, o = u.disabled, c = u.trackPadPanning, f = c.activationKeys, d = c.excluded;
  if (!n.wrapperComponent || !n.contentComponent || o || c.disabled || i.ctrlKey)
    return !1;
  var p = ov(n, i);
  if (p)
    return !1;
  var v = i.target, h = wl(v, d);
  if (h)
    return !1;
  var _ = n.isPressingKeys(f);
  return !!_;
}, Iz = function(n) {
  return n ? n.deltaY < 0 ? 1 : -1 : 0;
};
function ew(n, i) {
  var u = Iz(n), o = fz(i, u);
  return o;
}
function rv(n, i, u) {
  var o = i.getBoundingClientRect(), c = 0, f = 0;
  if ("clientX" in n)
    c = (n.clientX - o.left) / u, f = (n.clientY - o.top) / u;
  else {
    var d = n.touches[0];
    c = (d.clientX - o.left) / u, f = (d.clientY - o.top) / u;
  }
  return (Number.isNaN(c) || Number.isNaN(f)) && console.error("No mouse or touch offset found"), {
    x: c,
    y: f
  };
}
var tw = function(n, i, u, o, c) {
  var f = n.state.scale, d = n.wrapperComponent, p = n.setup, v = p.maxScale, h = p.minScale, _ = p.zoomAnimation, S = p.disablePadding, x = _.size, E = _.disabled;
  if (!d)
    throw new Error("Wrapper is not mounted");
  var M = f + i * u, B = o ? !1 : !E, H = zl(M, h, v, x, B && !S);
  return H;
}, sv = function(n, i) {
  var u = n.previousWheelEvent, o = n.state.scale, c = n.setup, f = c.maxScale, d = c.minScale;
  return u ? o < f || o > d || Math.sign(u.deltaY) !== Math.sign(i.deltaY) || u.deltaY > 0 && u.deltaY < i.deltaY || u.deltaY < 0 && u.deltaY > i.deltaY || Math.sign(u.deltaY) !== Math.sign(i.deltaY) : !1;
}, nw = function(n, i) {
  var u = n.setup.pinch, o = u.disabled, c = u.excluded, f = n.isInitialized, d = i.target, p = f && !o && d;
  if (!p)
    return !1;
  var v = wl(d, c);
  return !v;
}, aw = function(n) {
  var i = n.setup.pinch.disabled, u = n.isInitialized, o = n.pinchStartDistance, c = u && !i && o !== null;
  return !!c;
}, iw = function(n, i, u) {
  var o = u.getBoundingClientRect(), c = n.touches, f = c[0].clientX - o.left, d = c[0].clientY - o.top, p = c[1].clientX - o.left, v = c[1].clientY - o.top;
  return {
    x: (f + p) / 2 / i,
    y: (d + v) / 2 / i
  };
}, cv = function(n) {
  return Math.sqrt(Math.pow(n.touches[0].pageX - n.touches[1].pageX, 2) + Math.pow(n.touches[0].pageY - n.touches[1].pageY, 2));
}, lw = 5, uw = function(n, i) {
  var u = n.pinchStartScale, o = n.pinchStartDistance, c = n.setup, f = c.maxScale, d = c.minScale, p = c.zoomAnimation, v = c.disablePadding, h = c.pinch, _ = p.size, S = p.disabled, x = h.step;
  if (!u || o === null)
    throw new Error("Pinch touches distance was not provided");
  if (i < 0)
    return n.state.scale;
  var E = i / o, M = E * u, B = (M - u) * (x / lw), H = u + B, D = H === 1 / 0 ? 0 : ba(H, 10);
  return zl(D, d, f, _, !S && !v);
}, fv = 160, dv = 100, ow = function(n, i) {
  var u = n.props, o = u.onWheelStart, c = u.onZoomStart;
  n.wheelStopEventTimer || (Ft(n), Ae(ze(n), i, o), Ae(ze(n), i, c));
}, rw = function(n, i) {
  var u = n.props, o = u.onWheel, c = u.onZoom, f = n.contentComponent, d = n.setup, p = n.state, v = p.scale, h = d.limitToBounds, _ = d.centerZoomedOut, S = d.zoomAnimation, x = d.wheel, E = d.disablePadding, M = d.smooth, B = S.size, H = S.disabled, D = x.step;
  if (!f)
    throw new Error("Component not mounted");
  i.preventDefault(), i.stopPropagation();
  var V = ew(i, null), $ = M ? D * Math.abs(i.deltaY) : D, X = tw(n, V, $, !i.ctrlKey);
  if (v !== X) {
    var J = fi(n, X), ne = rv(i, f, v), q = H || B === 0 || _ || E, re = h && q, de = fo(n, ne.x, ne.y, X, J, re), ge = de.x, ye = de.y;
    n.previousWheelEvent = i, n.setState(X, ge, ye), Ae(ze(n), i, o), Ae(ze(n), i, c);
  }
}, sw = function(n, i) {
  var u = n.props, o = u.onWheelStop, c = u.onZoomStop;
  _l(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (fc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, dv);
  var f = sv(n, i);
  f && (_l(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Ae(ze(n), i, o), Ae(ze(n), i, c));
  }, fv));
}, cw = function(n, i) {
  var u = n.props, o = u.onWheelStart, c = u.onPanningStart;
  n.wheelStopEventTimer || (Ft(n), Ae(ze(n), i, o), Ae(ze(n), i, c));
}, fw = function(n, i) {
  var u = n.props, o = u.onWheelStop, c = u.onPanningStop;
  _l(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (fc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, dv);
  var f = sv(n, i);
  f && (_l(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Ae(ze(n), i, o), Ae(ze(n), i, c));
  }, fv));
}, mv = function(n) {
  for (var i = 0, u = 0, o = 0; o < 2; o += 1)
    i += n.touches[o].clientX, u += n.touches[o].clientY;
  var c = i / 2, f = u / 2;
  return { x: c, y: f };
}, dw = function(n, i) {
  var u = cv(i);
  n.pinchStartDistance = u, n.lastDistance = u, n.pinchStartScale = n.state.scale, n.isPanning = !1, n.isPinching = !0, n.pinchPreviousCenter = mv(i), Ft(n);
}, mw = function(n, i) {
  var u = n.contentComponent, o = n.pinchStartDistance, c = n.wrapperComponent, f = n.pinchPreviousCenter, d = n.state.scale, p = n.setup, v = p.limitToBounds, h = p.centerZoomedOut, _ = p.zoomAnimation, S = p.autoAlignment, x = p.pinch, E = p.panning, M = _.disabled, B = _.size, H = x.allowPanning;
  if (!(o === null || !u)) {
    var D = iw(i, d, u);
    if (!(!Number.isFinite(D.x) || !Number.isFinite(D.y))) {
      var V = cv(i), $ = uw(n, V), X = mv(i), J = d / $, ne = (X.x - (f?.x || 0)) * J, q = (X.y - (f?.y || 0)) * J;
      if (!($ === d && ne === 0 && q === 0)) {
        n.pinchPreviousCenter = X;
        var re = fi(n, $), de = M || B === 0 || h, ge = v && de, ye = fo(n, D.x, D.y, $, re, ge), _e = ye.x, qe = ye.y;
        if (n.pinchMidpoint = D, n.lastDistance = V, E.disabled || !H)
          n.setState($, _e, qe);
        else {
          var Fe = S.sizeX, it = S.sizeY, k = Wn(n, Fe, $), L = Wn(n, it, $), I = _e + ne, we = qe + q, be = Sl(I, we, re, v, k, L, c), z = be.x, R = be.y;
          n.setState($, z, R);
        }
      }
    }
  }
}, pw = function(n) {
  var i = n.pinchMidpoint;
  n.velocity = null, n.lastDistance = null, n.pinchMidpoint = null, n.pinchStartScale = null, n.pinchStartDistance = null, n.isPinching = !1, fc(n, i?.x, i?.y);
}, pv = function(n, i) {
  var u = n.props.onZoomStop, o = n.setup.doubleClick.animationTime;
  _l(n.doubleClickStopEventTimer), n.doubleClickStopEventTimer = setTimeout(function() {
    n.doubleClickStopEventTimer = null, Ae(ze(n), i, u);
  }, o);
}, hw = function(n, i) {
  var u = n.props, o = u.onZoomStart, c = u.onZoom, f = n.setup.doubleClick, d = f.animationTime, p = f.animationType;
  Ae(ze(n), i, o), lv(n, d, p, function() {
    return Ae(ze(n), i, c);
  }), pv(n, i);
};
function vw(n, i) {
  return n === "toggle" ? i === 1 ? 1 : -1 : n === "zoomOut" ? -1 : 1;
}
function gw(n, i) {
  var u = n.setup, o = n.doubleClickStopEventTimer, c = n.state, f = n.contentComponent, d = c.scale, p = n.props, v = p.onZoomStart, h = p.onZoom, _ = u.doubleClick, S = _.disabled, x = _.mode, E = _.step, M = _.animationTime, B = _.animationType;
  if (!S && !o) {
    if (x === "reset")
      return hw(n, i);
    if (!f)
      return console.error("No ContentComponent found");
    var H = vw(x, n.state.scale), D = av(n, H, E);
    if (d !== D) {
      Ae(ze(n), i, v);
      var V = rv(i, f, d), $ = cc(n, D, V.x, V.y);
      if (!$)
        return console.error("Error during zoom event. New transformation state was not calculated.");
      Ae(ze(n), i, h), In(n, $, M, B), pv(n, i);
    }
  }
}
var yw = function(n, i) {
  var u = n.isInitialized, o = n.setup, c = n.wrapperComponent, f = o.doubleClick, d = f.disabled, p = f.excluded, v = i.target, h = c?.contains(v), _ = u && v && h && !d;
  if (!_)
    return !1;
  var S = wl(v, p);
  return !S;
}, _w = (
  /** @class */
  /* @__PURE__ */ (function() {
    function n(i) {
      var u = this;
      this.mounted = !0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.onInitCallbacks = /* @__PURE__ */ new Set(), this.onTransformCallbacks = /* @__PURE__ */ new Set(), this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.isWheelPanning = !1, this.startCoords = null, this.panStartPosition = null, this.lastTouch = null, this.isPinching = !1, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.pinchPreviousCenter = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.isAnimating = !1, this.animation = null, this.pressedKeys = {}, this.mount = function() {
        u.initializeWindowEvents();
      }, this.unmount = function() {
        u.cleanupWindowEvents();
      }, this.update = function(o) {
        u.props = o, u.wrapperComponent && u.contentComponent && fi(u, u.state.scale), u.setup = dh(o);
      }, this.initializeWindowEvents = function() {
        var o, c, f, d, p = Ls(), v = (o = u.wrapperComponent) === null || o === void 0 ? void 0 : o.ownerDocument, h = v?.defaultView;
        (c = u.wrapperComponent) === null || c === void 0 || c.addEventListener("wheel", u.onWheelPanning, p), (f = u.wrapperComponent) === null || f === void 0 || f.addEventListener("keyup", u.setKeyUnPressed, p), (d = u.wrapperComponent) === null || d === void 0 || d.addEventListener("keydown", u.setKeyPressed, p), h?.addEventListener("mousedown", u.onPanningStart, p), h?.addEventListener("mousemove", u.onPanning, p), h?.addEventListener("mouseup", u.onPanningStop, p), v?.addEventListener("mouseleave", u.clearPanning, p), h?.addEventListener("keyup", u.setKeyUnPressed, p), h?.addEventListener("keydown", u.setKeyPressed, p), h?.addEventListener("blur", u.handleWindowBlur);
      }, this.cleanupWindowEvents = function() {
        var o, c, f, d, p, v = Ls(), h = (o = u.wrapperComponent) === null || o === void 0 ? void 0 : o.ownerDocument, _ = h?.defaultView;
        _?.removeEventListener("mousedown", u.onPanningStart, v), _?.removeEventListener("mousemove", u.onPanning, v), _?.removeEventListener("mouseup", u.onPanningStop, v), h?.removeEventListener("mouseleave", u.clearPanning, v), _?.removeEventListener("keyup", u.setKeyUnPressed, v), _?.removeEventListener("keydown", u.setKeyPressed, v), _?.removeEventListener("blur", u.handleWindowBlur), document.removeEventListener("mouseleave", u.clearPanning, v), (c = u.wrapperComponent) === null || c === void 0 || c.removeEventListener("wheel", u.onWheelPanning, v), (f = u.wrapperComponent) === null || f === void 0 || f.removeEventListener("keyup", u.setKeyUnPressed, v), (d = u.wrapperComponent) === null || d === void 0 || d.removeEventListener("keydown", u.setKeyPressed, v), Ft(u), (p = u.observer) === null || p === void 0 || p.disconnect();
      }, this.handleInitializeWrapperEvents = function(o) {
        var c = Ls();
        o.addEventListener("wheel", u.onWheelZoom, c), o.addEventListener("dblclick", u.onDoubleClick, c), o.addEventListener("touchstart", u.onTouchPanningStart, c), o.addEventListener("touchmove", u.onTouchPanning, c), o.addEventListener("touchend", u.onTouchPanningStop, c);
      }, this.handleInitialize = function(o) {
        var c = u.setup.centerOnInit;
        u.applyTransformation(), u.onInitCallbacks.forEach(function(f) {
          return f(ze(u));
        }), c && (u.setCenter(), u.observer = new ResizeObserver(function() {
          var f, d = o.offsetWidth, p = o.offsetHeight;
          (d > 0 || p > 0) && (u.onInitCallbacks.forEach(function(v) {
            return v(ze(u));
          }), u.setCenter(), (f = u.observer) === null || f === void 0 || f.disconnect());
        }), setTimeout(function() {
          var f;
          (f = u.observer) === null || f === void 0 || f.disconnect();
        }, 5e3), u.observer.observe(o));
      }, this.onWheelZoom = function(o) {
        var c = u.setup.disabled;
        if (!c) {
          u.syncModifierKeys(o);
          var f = ov(u, o);
          f && (ow(u, o), rw(u, o), sw(u, o));
        }
      }, this.onWheelPanning = function(o) {
        var c = u.props.onPanning, f = u.setup.trackPadPanning, d = f.lockAxisX, p = f.lockAxisY;
        u.syncModifierKeys(o);
        var v = Fz(u, o);
        if (v) {
          o.preventDefault(), o.stopPropagation();
          var h = u.state, _ = h.positionX, S = h.positionY, x = _ - o.deltaX, E = S - o.deltaY, M = d ? _ : x, B = p ? S : E, H = u.setup.autoAlignment, D = H.sizeX, V = H.sizeY, $ = Wn(u, D), X = Wn(u, V);
          M === _ && B === S || (cw(u, o), ev(u, M, B, $, X), Ae(ze(u), o, c), fw(u, o));
        }
      }, this.onPanningStart = function(o) {
        var c = u.setup.disabled, f = u.props.onPanningStart;
        if (!c) {
          u.syncModifierKeys(o);
          var d = uh(u, o);
          if (d) {
            var p = u.isPressingKeys(u.setup.panning.activationKeys);
            p && (o.button === 0 && !u.setup.panning.allowLeftClickPan || o.button === 1 && !u.setup.panning.allowMiddleClickPan || o.button === 2 && !u.setup.panning.allowRightClickPan || (o.preventDefault(), o.stopPropagation(), Ft(u), sh(u, o), Ae(ze(u), o, f)));
          }
        }
      }, this.onPanning = function(o) {
        var c = u.setup.disabled, f = u.props.onPanning;
        if (!c) {
          if (u.syncModifierKeys(o), u.isPanning && o.buttons === 0) {
            u.clearPanning(o);
            return;
          }
          var d = oh(u);
          if (d) {
            var p = u.isPressingKeys(u.setup.panning.activationKeys);
            p && (o.preventDefault(), o.stopPropagation(), ch(u, o.clientX, o.clientY, Jn.MOUSE), Ae(ze(u), o, f));
          }
        }
      }, this.onPanningStop = function(o) {
        var c = u.setup.panning.velocityDisabled, f = u.props.onPanningStop;
        u.isPanning && (Xz(u, c), Ae(ze(u), o, f));
      }, this.onPinchStart = function(o) {
        var c = u.setup.disabled, f = u.props.onPinchStart;
        if (!c) {
          var d = nw(u, o);
          d && (dw(u, o), Ft(u), Ae(ze(u), o, f));
        }
      }, this.onPinch = function(o) {
        var c = u.setup.disabled, f = u.props.onPinch;
        if (!c) {
          var d = aw(u);
          d && (o.preventDefault(), o.stopPropagation(), mw(u, o), Ae(ze(u), o, f));
        }
      }, this.onPinchStop = function(o) {
        var c = u.props.onPinchStop;
        u.pinchStartScale && (pw(u), Ae(ze(u), o, c));
      }, this.onTouchPanningStart = function(o) {
        var c = u.setup, f = c.disabled, d = c.doubleClick, p = u.props.onPanningStart;
        if (!f) {
          var v = !d?.disabled, h = u.lastTouch && +/* @__PURE__ */ new Date() - u.lastTouch < 200;
          if (v && h && o.touches.length === 1)
            u.onDoubleClick(o);
          else {
            u.lastTouch = +/* @__PURE__ */ new Date(), Ft(u);
            var _ = o.touches, S = _.length === 1, x = _.length === 2, E = uh(u, o);
            if (S) {
              if (!E)
                return;
              Ft(u), sh(u, o), Ae(ze(u), o, p);
            }
            x && u.onPinchStart(o);
          }
        }
      }, this.onTouchPanning = function(o) {
        var c = u.setup.disabled, f = u.props.onPanning;
        if (u.isPanning && o.touches.length === 1) {
          if (c)
            return;
          var d = oh(u);
          if (!d)
            return;
          o.cancelable && o.preventDefault(), o.stopPropagation();
          var p = o.touches[0];
          ch(u, p.clientX, p.clientY, Jn.TOUCH), Ae(ze(u), o, f);
        } else o.touches.length > 1 && u.onPinch(o);
      }, this.onTouchPanningStop = function(o) {
        u.onPanningStop(o), u.onPinchStop(o);
      }, this.onDoubleClick = function(o) {
        var c = u.setup.disabled;
        if (!c) {
          var f = yw(u, o);
          f && gw(u, o);
        }
      }, this.clearPanning = function(o) {
        u.isPanning && u.onPanningStop(o);
      }, this.handleWindowBlur = function() {
        u.pressedKeys = {}, u.isPanning && (u.isPanning = !1, u.startCoords = null);
      }, this.syncModifierKeys = function(o) {
        var c = o.ctrlKey, f = o.metaKey, d = o.shiftKey, p = o.altKey;
        typeof c == "boolean" && (u.pressedKeys.Control = c), typeof f == "boolean" && (u.pressedKeys.Meta = f), typeof d == "boolean" && (u.pressedKeys.Shift = d), typeof p == "boolean" && (u.pressedKeys.Alt = p);
      }, this.setKeyPressed = function(o) {
        u.pressedKeys[o.key] = !0;
      }, this.setKeyUnPressed = function(o) {
        u.pressedKeys[o.key] = !1;
      }, this.isPressingKeys = function(o) {
        return typeof o == "function" ? o(Object.entries(u.pressedKeys).filter(function(c) {
          var f = c[1];
          return f;
        }).map(function(c) {
          var f = c[0];
          return f;
        })) : o.length ? !!o.every(function(c) {
          return u.pressedKeys[c];
        }) : !0;
      }, this.setCenter = function() {
        if (u.wrapperComponent && u.contentComponent) {
          var o = dc(u.state.scale, u.wrapperComponent, u.contentComponent);
          u.setState(o.scale, o.positionX, o.positionY);
        }
      }, this.handleTransformStyles = function(o, c, f) {
        return u.props.customTransform ? u.props.customTransform(o, c, f) : uv(o, c, f);
      }, this.getContext = function() {
        return ze(u);
      }, this.applyTransformation = function() {
        if (!(!u.mounted || !u.contentComponent)) {
          var o = u.state, c = o.scale, f = o.positionX, d = o.positionY, p = u.handleTransformStyles(f, d, c);
          u.props.detached || (u.contentComponent.style.transform = p), u.onTransformCallbacks.forEach(function(v) {
            return v({
              scale: c,
              positionX: f,
              positionY: d,
              previousScale: u.state.previousScale,
              ref: ze(u)
            });
          });
        }
      }, this.setState = function(o, c, f) {
        var d = u.props.onTransform;
        if (!Number.isNaN(o) && !Number.isNaN(c) && !Number.isNaN(f)) {
          var p = Math.max(o, 1e-7);
          p !== u.state.scale && (u.state.previousScale = u.state.scale, u.state.scale = p), u.state.positionX = c, u.state.positionY = f, u.applyTransformation();
          var v = ze(u);
          u.onChangeCallbacks.forEach(function(h) {
            return h(v);
          }), Ae(v, { scale: u.state.scale, positionX: c, positionY: f }, d);
        } else
          console.error("Detected NaN set state values");
      }, this.onTransform = function(o) {
        return u.onTransformCallbacks.has(o) || u.onTransformCallbacks.add(o), function() {
          u.onTransformCallbacks.delete(o);
        };
      }, this.onChange = function(o) {
        return u.onChangeCallbacks.has(o) || u.onChangeCallbacks.add(o), function() {
          u.onChangeCallbacks.delete(o);
        };
      }, this.onInit = function(o) {
        return u.onInitCallbacks.has(o) || u.onInitCallbacks.add(o), function() {
          u.onInitCallbacks.delete(o);
        };
      }, this.init = function(o, c) {
        u.cleanupWindowEvents(), u.wrapperComponent = o, u.contentComponent = c, fi(u, u.state.scale), u.handleInitializeWrapperEvents(o), u.handleInitialize(c), u.initializeWindowEvents(), u.isInitialized = !0;
        var f = ze(u);
        Ae(f, void 0, u.props.onInit), Wz(u.props.ref, f);
      }, this.props = i, this.setup = dh(this.props), this.state = nv(this.props);
    }
    return n;
  })()
), xl = oo.createContext(null), bw = function(n, i) {
  return typeof n == "function" ? n(i) : n;
}, Sw = oo.forwardRef(function(n, i) {
  var u = ie.useRef(new _w(n)).current, o = bw(n.children, uo(u));
  return ie.useImperativeHandle(i, function() {
    return uo(u);
  }, [u]), ie.useEffect(function() {
    u.update(n);
  }, [u, n]), y.jsx(xl.Provider, Vt({ value: u }, { children: o }));
});
oo.forwardRef(function(n, i) {
  var u = ie.useRef(null), o = ie.useContext(xl);
  return ie.useEffect(function() {
    return o.onChange(function(c) {
      if (u.current) {
        var f = 0, d = 0;
        u.current.style.transform = o.handleTransformStyles(f, d, 1 / c.instance.state.scale);
      }
    });
  }, [o]), y.jsx("div", Vt({}, n, { ref: Pz([u, i]) }));
});
function zw(n, i) {
  i === void 0 && (i = {});
  var u = i.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], c = document.createElement("style");
    c.type = "text/css", u === "top" && o.firstChild ? o.insertBefore(c, o.firstChild) : o.appendChild(c), c.styleSheet ? c.styleSheet.cssText = n : c.appendChild(document.createTextNode(n));
  }
}
var ww = `.transform-component-module_wrapper__SPB86 {
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
`, Vs = { wrapper: "transform-component-module_wrapper__SPB86", content: "transform-component-module_content__FBWxo", infiniteGrid: "transform-component-module_infiniteGrid__Z-aP3" };
zw(ww);
var xw = function(n) {
  var i = n.children, u = n.wrapperClass, o = u === void 0 ? "" : u, c = n.contentClass, f = c === void 0 ? "" : c, d = n.wrapperStyle, p = n.contentStyle, v = n.wrapperProps, h = v === void 0 ? {} : v, _ = n.contentProps, S = _ === void 0 ? {} : _, x = n.infinite, E = x === void 0 ? !1 : x, M = ie.useContext(xl), B = M.init, H = M.cleanupWindowEvents, D = ie.useRef(null), V = ie.useRef(null), $ = ie.useRef(null);
  return ie.useEffect(function() {
    var X = D.current, J = V.current;
    return X !== null && J !== null && B && B?.(X, J), function() {
      H?.();
    };
  }, []), ie.useEffect(function() {
    if (E) {
      var X = $.current;
      if (X) {
        var J = function() {
          var ne = M.state, q = ne.positionX, re = ne.positionY;
          X.style.backgroundPosition = "".concat(q, "px ").concat(re, "px");
        };
        return J(), M.onChange(J);
      }
    }
  }, [E, M]), y.jsxs("div", Vt({}, h, { ref: D, className: "".concat(Ps.wrapperClass, " ").concat(Vs.wrapper, " ").concat(o), style: d }, { children: [E && y.jsx("div", { ref: $, className: Vs.infiniteGrid, "aria-hidden": !0 }), y.jsx("div", Vt({}, S, { ref: V, className: "".concat(Ps.contentClass, " ").concat(Vs.content, " ").concat(f), style: Vt(Vt({}, p), { transform: uv(M.state.positionX, M.state.positionY, M.state.scale) }) }, { children: i }))] }));
};
function Tw(n, i) {
  var u = Math.max(0, Math.min(n.x + n.width, i.x + i.width) - Math.max(n.x, i.x)), o = Math.max(0, Math.min(n.y + n.height, i.y + i.height) - Math.max(n.y, i.y));
  return u * o;
}
function Ew(n) {
  var i = n.elementX, u = n.elementY, o = n.elementWidth, c = n.elementHeight, f = n.scale, d = n.positionX, p = n.positionY, v = n.viewportWidth, h = n.viewportHeight, _ = n.margin, S = _ === void 0 ? 0 : _, x = n.threshold, E = x === void 0 ? 0 : x, M = {
    x: -S,
    y: -S,
    width: v + 2 * S,
    height: h + 2 * S
  }, B = {
    x: i * f + d,
    y: u * f + p,
    width: o * f,
    height: c * f
  };
  if (E <= 0) {
    var H = B.x < M.x + M.width && B.x + B.width > M.x, D = B.y < M.y + M.height && B.y + B.height > M.y;
    return H && D;
  }
  var V = B.width * B.height;
  if (V <= 0)
    return !1;
  var $ = Tw(M, B);
  return $ / V >= E;
}
oo.forwardRef(function(n, i) {
  var u = n.x, o = n.y, c = n.width, f = n.height, d = n.margin, p = d === void 0 ? 0 : d, v = n.threshold, h = v === void 0 ? 0 : v, _ = n.placeholder, S = _ === void 0 ? null : _, x = n.onShow, E = n.onHide, M = n.children, B = n.className, H = n.style, D = ie.useContext(xl), V = ie.useState(!1), $ = V[0], X = V[1], J = ie.useRef(!1), ne = ie.useRef(x), q = ie.useRef(E);
  return ne.current = x, q.current = E, ie.useEffect(function() {
    var re = function() {
      var ye, _e, qe = D.wrapperComponent;
      if (qe) {
        var Fe = Ew({
          elementX: u,
          elementY: o,
          elementWidth: c,
          elementHeight: f,
          scale: D.state.scale,
          positionX: D.state.positionX,
          positionY: D.state.positionY,
          viewportWidth: qe.offsetWidth,
          viewportHeight: qe.offsetHeight,
          margin: p,
          threshold: h
        });
        Fe !== J.current && (J.current = Fe, X(Fe), Fe ? (ye = ne.current) === null || ye === void 0 || ye.call(ne) : (_e = q.current) === null || _e === void 0 || _e.call(q));
      }
    };
    re();
    var de = D.onChange(re), ge;
    return D.wrapperComponent || (ge = D.onInit(function() {
      return re();
    })), function() {
      de(), ge?.();
    };
  }, [D, u, o, c, f, p, h]), $ ? y.jsx("div", Vt({ ref: i, className: B, style: H }, { children: M })) : S ? y.jsx(y.Fragment, { children: S }) : null;
});
var Aw = function() {
  var n = ie.useContext(xl);
  if (!n)
    throw new Error("Transform context must be placed inside TransformWrapper");
  return n;
}, Ow = function() {
  var n = Aw();
  return uo(n);
};
function Cw({ locked: n, onToggleLock: i }) {
  const { zoomIn: u, zoomOut: o, resetTransform: c } = Ow();
  return /* @__PURE__ */ y.jsxs("div", { className: "map-controls", children: [
    /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Zoom in", onClick: () => u(), disabled: n, children: /* @__PURE__ */ y.jsx(Z0, {}) }),
    /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Zoom out", onClick: () => o(), disabled: n, children: /* @__PURE__ */ y.jsx(U0, {}) }),
    /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Reset zoom", onClick: () => c(), children: /* @__PURE__ */ y.jsx(S0, {}) }),
    /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": n ? "Unlock map" : "Lock map", onClick: i, children: n ? /* @__PURE__ */ y.jsx(hh, {}) : /* @__PURE__ */ y.jsx(f0, {}) })
  ] });
}
function Mw({ hass: n, floor: i, language: u, selected: o, launched: c, disabled: f, onToggle: d }) {
  const [p, v] = ie.useState(!0), [h, _] = ie.useState({ width: 0, height: 0 }), [S, x] = ie.useState({ width: 0, height: 0 }), E = ie.useRef(null), M = n.states[i.map_entity], B = ie.useMemo(() => Kh(M), [M]), H = ie.useMemo(() => E2(M), [M]), D = ie.useMemo(() => C2(i), [i]), V = typeof M?.attributes.entity_picture == "string" ? M.attributes.entity_picture : void 0;
  ie.useEffect(() => {
    const X = E.current;
    if (!X) return;
    const J = new ResizeObserver(([ne]) => {
      x({ width: ne.contentRect.width, height: ne.contentRect.height });
    });
    return J.observe(X), () => J.disconnect();
  }, []);
  let $;
  return !M || M.state === "unavailable" ? $ = Q(u, "mapMissing") : V ? H.length < 3 ? $ = Q(u, "calibrationMissing") : B.length === 0 && ($ = Q(u, "roomsMissing")) : $ = Q(u, "imageMissing"), $ ? /* @__PURE__ */ y.jsx("div", { className: "map-error", role: "alert", children: $ }) : /* @__PURE__ */ y.jsx("div", { className: "map-shell", ref: E, children: /* @__PURE__ */ y.jsxs(
    Sw,
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
        /* @__PURE__ */ y.jsx(Cw, { locked: p, onToggleLock: () => v((X) => !X) }),
        /* @__PURE__ */ y.jsx(xw, { wrapperClass: "map-transform", contentClass: "map-content", children: /* @__PURE__ */ y.jsxs(
          "div",
          {
            className: "map-image-wrap",
            style: (() => {
              if (!h.width || !h.height || !S.width || !S.height) return;
              const X = Math.min(S.width / h.width, S.height / h.height);
              return { width: h.width * X, height: h.height * X };
            })(),
            children: [
              /* @__PURE__ */ y.jsx(
                "img",
                {
                  src: n.hassUrl(V),
                  alt: `${i.name} vacuum map`,
                  draggable: !1,
                  onLoad: (X) => _({ width: X.currentTarget.naturalWidth, height: X.currentTarget.naturalHeight })
                }
              ),
              h.width > 0 && h.height > 0 && /* @__PURE__ */ y.jsx(
                "svg",
                {
                  className: "room-overlay",
                  viewBox: `0 0 ${h.width} ${h.height}`,
                  preserveAspectRatio: "xMidYMid meet",
                  "aria-label": `${i.name} rooms`,
                  children: B.map((X) => {
                    const J = D.get(X.segment_id), ne = !!J?.area_id, q = o.has(X.segment_id), re = c.has(X.segment_id), de = O2(X, H), ge = J?.name || X.source_name, ye = f || !ne;
                    return /* @__PURE__ */ y.jsxs("g", { className: `room ${q ? "selected" : ""} ${re ? "launched" : ""} ${ne ? "" : "unmapped"}`, children: [
                      /* @__PURE__ */ y.jsx(
                        "path",
                        {
                          className: "room-hitbox",
                          d: A2(X, H),
                          role: "button",
                          tabIndex: ye ? -1 : 0,
                          "aria-label": `${ge}${ne ? "" : ` — ${Q(u, "roomUnmapped")}`}`,
                          "aria-pressed": q,
                          "aria-disabled": ye,
                          onClick: () => !ye && d(X.segment_id),
                          onKeyDown: (_e) => {
                            !ye && (_e.key === "Enter" || _e.key === " ") && (_e.preventDefault(), d(X.segment_id));
                          },
                          children: /* @__PURE__ */ y.jsx("title", { children: ne ? ge : `${ge}: ${Q(u, "roomUnmapped")}` })
                        }
                      ),
                      /* @__PURE__ */ y.jsxs("g", { className: "room-label", transform: `translate(${de.x} ${de.y})`, pointerEvents: "none", children: [
                        /* @__PURE__ */ y.jsx("circle", { r: "23" }),
                        /* @__PURE__ */ y.jsx("foreignObject", { x: "-11", y: "-11", width: "22", height: "22", children: /* @__PURE__ */ y.jsx(Ws, { icon: J?.icon || "mdi:floor-plan" }) }),
                        /* @__PURE__ */ y.jsx("text", { y: "39", textAnchor: "middle", children: ge })
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
function cl(n, i) {
  if (!i) return;
  const u = n.states[i];
  if (!(!u || ["unknown", "unavailable"].includes(u.state)))
    return `${u.state}${u.attributes.unit_of_measurement ? ` ${u.attributes.unit_of_measurement}` : ""}`;
}
function jw(n, i, u) {
  if (!i) return;
  const o = n.states[i];
  if (!o || ["unknown", "unavailable"].includes(o.state)) return;
  const c = Number(o.state);
  if (!Number.isFinite(c) || c < 0) return;
  const f = String(o.attributes.unit_of_measurement ?? ""), d = f === "s" ? c / 60 : f === "min" ? c : f === "d" ? c * 24 * 60 : c * 60, p = Math.max(0, Math.round(d)), v = Math.floor(p / 60), h = p % 60;
  return `${[
    v > 0 ? `${v} ${u === "nl" ? "u" : "h"}` : void 0,
    h > 0 || v === 0 ? `${h} min` : void 0
  ].filter(Boolean).join(" ")} ${Q(u, "remaining")}`;
}
function kw(n, i) {
  if (i === "washing_the_mop") return Q(n, "washingMop");
}
function Dw(n, i) {
  const u = n.entities?.map_select ? i.states[n.entities.map_select]?.state : void 0;
  return n.floors.find((o) => o.map_select_option === u) ?? n.floors[0];
}
function Nw({ hass: n, config: i }) {
  const u = ie.useRef(n), o = ie.useRef(!1), c = i.language, [f, d] = ie.useState(() => Dw(i, n).id), p = i.floors.find((K) => K.id === f) ?? i.floors[0], [v, h] = ie.useState(/* @__PURE__ */ new Set()), [_, S] = ie.useState(!1), [x, E] = ie.useState(!1), [M, B] = ie.useState(), [H, D] = ie.useState(), [V, $] = ie.useState({ phase: "idle" }), X = ie.useMemo(() => D2(n, i), [n, i]), J = ie.useMemo(() => ez(i, X), [i, X]), ne = J.find(({ preset: K, available: ae }) => K.id === i.default_preset && ae)?.preset ?? J.find(({ available: K }) => K)?.preset, [q, re] = ie.useState(
    () => Js(ne ?? { id: "custom", strategy: "custom", cleaning_type: "vacuum" })
  ), de = n.states[i.entity];
  ie.useEffect(() => {
    u.current = n;
  }, [n]);
  const ge = i.entities?.status ? n.states[i.entities.status]?.state : void 0, ye = ["washing_the_mop", "washing_the_mop_2"].includes(ge ?? ""), _e = [de?.state, ge].includes("emptying_the_bin"), qe = Z2(de?.state) || ye;
  ie.useEffect(() => {
    V.phase === "starting" && qe ? $((K) => ({ ...K, phase: "active" })) : V.phase === "active" && !qe && ($({ phase: "idle" }), h(/* @__PURE__ */ new Set()));
  }, [V.phase, qe]);
  const Fe = new Set(V.floor_id === p.id ? V.segment_ids ?? [] : []), it = p.rooms.filter((K) => v.has(K.segment_id)), k = it.map((K) => K.name), L = i.entities?.dock_mop_drying ? n.states[i.entities.dock_mop_drying]?.state === "on" : !1, I = L ? jw(n, i.entities?.dock_mop_drying_remaining_time, c) : void 0, we = [
    kw(c, ge),
    L ? Q(c, "dryingMop") : void 0,
    I
  ].filter((K) => !!K), be = [
    { icon: /* @__PURE__ */ y.jsx(i0, {}), label: Q(c, "battery"), value: cl(n, i.entities?.battery) },
    { icon: /* @__PURE__ */ y.jsx(p0, {}), label: Q(c, "room"), value: cl(n, i.entities?.current_room) },
    { icon: /* @__PURE__ */ y.jsx(w0, {}), label: Q(c, "area"), value: cl(n, i.entities?.cleaning_area) },
    { icon: /* @__PURE__ */ y.jsx(u0, {}), label: Q(c, "duration"), value: cl(n, i.entities?.cleaning_time) },
    { icon: /* @__PURE__ */ y.jsx(C0, {}), label: Q(c, "progress"), value: cl(n, i.entities?.cleaning_progress) }
  ].filter((K) => K.value), z = (K) => {
    d(K), h(/* @__PURE__ */ new Set()), S(!1);
  }, R = () => {
    const K = p.rooms.filter((ae) => ae.include_in_floor_clean !== !1 && ae.area_id).map((ae) => ae.segment_id);
    h(new Set(K)), S(!0);
  }, G = async () => {
    if (!o.current) {
      o.current = !0, $({ phase: "submitting", floor_id: p.id, segment_ids: [...v] });
      try {
        await J2({ getHass: () => u.current, config: i, floor: p, rooms: it, draft: q }), $({ phase: "starting", floor_id: p.id, segment_ids: [...v] }), S(!1), D(Q(c, "launched"));
      } catch (K) {
        const ae = K instanceof Xe ? `${K.operation}: ${K.message}` : String(K);
        $({ phase: "failed", floor_id: p.id, segment_ids: [...v], error: ae }), D(ae);
      } finally {
        o.current = !1;
      }
    }
  }, W = async (K) => {
    try {
      if (K === "stop" || K === "return_to_base") {
        const ae = i.entities?.vacuum_then_mop_script;
        ae && u.current.states[ae] && u.current.states[ae].state !== "unavailable" && await u.current.callService("script", "turn_off", {}, { entity_id: ae });
      }
      await u.current.callService("vacuum", K, {}, { entity_id: i.entity });
    } catch (ae) {
      D(`${K}: ${ae instanceof Error ? ae.message : String(ae)}`);
    }
  }, ue = async (K, ae) => {
    if (!M) {
      B(Q(c, "settingSaved"));
      try {
        await $2(u.current, i, K, ae), D(Q(c, "settingSaved"));
      } catch (Ce) {
        const Qt = Ce instanceof wn ? `${Ce.operation}: ${Ce.message}` : String(Ce);
        D(Qt);
      } finally {
        B(void 0);
      }
    }
  }, ce = async (K, ae) => {
    if (!M) {
      if (!ae) {
        const Ce = K === "empty" ? Q(c, "confirmEmpty") : K === "wash" ? Q(c, "confirmWash") : K === "dry" ? Q(c, "confirmDry") : Q(c, "confirmDrain");
        if (!window.confirm(Ce)) return;
      }
      B(Q(c, "dockActionSent"));
      try {
        await L2(u.current, i, K, ae), D(Q(c, "dockActionSent"));
      } catch (Ce) {
        const Qt = Ce instanceof wn ? `${Ce.operation}: ${Ce.message}` : String(Ce);
        D(Qt);
      } finally {
        B(void 0);
      }
    }
  }, xe = async (K) => {
    const ae = i.entities?.dock_child_lock;
    if (!(!ae || M)) {
      B(Q(c, "settingSaved"));
      try {
        await u.current.callService("switch", K ? "turn_on" : "turn_off", {}, { entity_id: ae }), D(Q(c, "settingSaved"));
      } catch (Ce) {
        D(`child_lock: ${Ce instanceof Error ? Ce.message : String(Ce)}`);
      } finally {
        B(void 0);
      }
    }
  };
  return /* @__PURE__ */ y.jsxs("ha-card", { className: "roborock-card", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "card-header", children: [
      /* @__PURE__ */ y.jsxs("div", { children: [
        /* @__PURE__ */ y.jsx("h1", { children: i.name ?? de?.attributes.friendly_name ?? "Roborock" }),
        /* @__PURE__ */ y.jsxs("div", { className: "state-line", children: [
          /* @__PURE__ */ y.jsx("span", { className: `state-dot state-${de?.state ?? "unavailable"}` }),
          /* @__PURE__ */ y.jsx("span", { children: de?.state?.replaceAll("_", " ") ?? "unavailable" }),
          we.map((K) => /* @__PURE__ */ y.jsx("span", { className: "state-detail", children: ` · ${K}` }, K))
        ] })
      ] }),
      be.length > 0 && /* @__PURE__ */ y.jsx("div", { className: "status-strip", children: be.map((K) => /* @__PURE__ */ y.jsxs("div", { title: K.label, children: [
        K.icon,
        /* @__PURE__ */ y.jsx("strong", { children: K.value })
      ] }, K.label)) })
    ] }),
    i.floors.length > 1 && /* @__PURE__ */ y.jsx("div", { className: "floor-tabs", role: "tablist", "aria-label": Q(c, "floor"), children: i.floors.map((K) => /* @__PURE__ */ y.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": p.id === K.id,
        className: p.id === K.id ? "active" : "",
        onClick: () => z(K.id),
        children: K.name
      },
      K.id
    )) }),
    /* @__PURE__ */ y.jsx(
      Mw,
      {
        hass: n,
        floor: p,
        language: c,
        selected: v,
        launched: Fe,
        disabled: V.phase === "submitting" || V.phase === "starting" || V.phase === "active",
        onToggle: (K) => h((ae) => {
          const Ce = new Set(ae);
          return Ce.has(K) ? Ce.delete(K) : Ce.add(K), Ce;
        })
      }
    ),
    /* @__PURE__ */ y.jsxs("div", { className: "selection-row", children: [
      /* @__PURE__ */ y.jsxs("div", { children: [
        /* @__PURE__ */ y.jsx("strong", { children: Q(c, "selectedRooms") }),
        /* @__PURE__ */ y.jsx("span", { children: k.length ? k.join(" · ") : Q(c, "noRoomsSelected") })
      ] }),
      /* @__PURE__ */ y.jsx("span", { className: "selection-count", children: v.size })
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "primary-actions", children: [
      /* @__PURE__ */ y.jsxs("button", { type: "button", className: "secondary", onClick: R, disabled: V.phase === "submitting", children: [
        /* @__PURE__ */ y.jsx(Ap, {}),
        " ",
        Q(c, "entireFloor")
      ] }),
      /* @__PURE__ */ y.jsx("button", { type: "button", className: "primary", onClick: () => S(!0), disabled: v.size === 0 || V.phase === "submitting", children: Q(c, "configureJob") })
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "transport", "aria-label": "Vacuum controls", children: [
      de?.state === "paused" && X.canStart && /* @__PURE__ */ y.jsxs("button", { type: "button", onClick: () => W("start"), children: [
        /* @__PURE__ */ y.jsx(y0, {}),
        Q(c, "resume")
      ] }),
      de?.state === "cleaning" && X.canPause && /* @__PURE__ */ y.jsxs("button", { type: "button", onClick: () => W("pause"), children: [
        /* @__PURE__ */ y.jsx(v0, {}),
        Q(c, "pause")
      ] }),
      X.canStop && /* @__PURE__ */ y.jsxs("button", { type: "button", onClick: () => W("stop"), children: [
        /* @__PURE__ */ y.jsx(A0, {}),
        Q(c, "stop")
      ] }),
      X.canDock && /* @__PURE__ */ y.jsxs("button", { type: "button", onClick: () => W("return_to_base"), children: [
        /* @__PURE__ */ y.jsx(Ap, {}),
        Q(c, "dock")
      ] }),
      /* @__PURE__ */ y.jsxs("button", { type: "button", onClick: () => E(!0), children: [
        /* @__PURE__ */ y.jsx(T0, {}),
        Q(c, "dockStation")
      ] })
    ] }),
    _ && /* @__PURE__ */ y.jsx(
      cz,
      {
        language: c,
        draft: q,
        capabilities: X,
        presets: J,
        selectedRoomNames: k,
        submitting: V.phase === "submitting",
        onDraftChange: re,
        onClose: () => V.phase !== "submitting" && S(!1),
        onStart: G
      }
    ),
    x && /* @__PURE__ */ y.jsx(
      iz,
      {
        hass: n,
        config: i,
        language: c,
        washing: ye,
        emptying: _e,
        drying: L,
        dryingRemaining: I,
        pending: M,
        onClose: () => !M && E(!1),
        onAction: ce,
        onSetting: ue,
        onChildLock: xe
      }
    ),
    H && /* @__PURE__ */ y.jsxs("div", { className: "toast", role: "status", children: [
      /* @__PURE__ */ y.jsx("span", { children: H }),
      /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": Q(c, "close"), onClick: () => D(void 0), children: /* @__PURE__ */ y.jsx(Is, {}) })
    ] })
  ] });
}
const Zw = ':host{display:block;--rvm-accent: var(--primary-color, #5965f2);--rvm-on-accent: var(--text-primary-color, #fff);--rvm-surface: var(--card-background-color, #fff);--rvm-surface-2: var(--secondary-background-color, #f2f3f7);--rvm-text: var(--primary-text-color, #202124);--rvm-muted: var(--secondary-text-color, #6b7280);--rvm-border: var(--divider-color, rgba(0, 0, 0, .12));--rvm-danger: var(--error-color, #d32f2f);color:var(--rvm-text);font-family:var(--paper-font-body1_-_font-family, system-ui, sans-serif)}*{box-sizing:border-box}button,input,select{font:inherit}button{color:inherit}svg{width:20px;height:20px;stroke-width:2}.roborock-card{display:block;position:relative;overflow:hidden;border-radius:var(--ha-card-border-radius, 24px);background:var(--rvm-surface)}.card-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 20px 14px}.card-header h1{margin:0 0 4px;font-size:22px;line-height:1.2}.state-line{display:flex;flex-wrap:wrap;align-items:center;gap:7px;color:var(--rvm-muted);font-size:14px;text-transform:capitalize}.state-line .state-detail{text-transform:none}.state-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--rvm-muted)}.state-cleaning,.state-paused{background:var(--rvm-accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--rvm-accent) 18%,transparent)}.state-error,.state-unavailable{background:var(--rvm-danger)}.status-strip{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.status-strip div{display:flex;align-items:center;gap:6px;min-height:36px;padding:7px 10px;border-radius:12px;background:var(--rvm-surface-2);font-size:13px}.status-strip svg{width:16px;height:16px;color:var(--rvm-accent)}.floor-tabs,.segmented{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;margin:0 20px 14px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.floor-tabs button,.segmented button{min-height:44px;padding:8px 14px;border:0;border-radius:11px;background:transparent;cursor:pointer;font-weight:600}.floor-tabs button.active,.segmented button.active{background:var(--rvm-surface);color:var(--rvm-accent);box-shadow:0 2px 8px #0000001a}.map-shell{position:relative;height:clamp(340px,54vh,620px);margin:0 12px;overflow:hidden;border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 75%,#7d91a8 25%);touch-action:pan-y}.map-transform{width:100%!important;height:100%!important}.map-content{width:100%!important;height:100%!important;display:flex;align-items:center;justify-content:center}.map-image-wrap{position:relative;flex:none;max-width:100%;max-height:100%}.map-image-wrap>img{display:block;width:100%;height:100%;object-fit:fill;-webkit-user-select:none;user-select:none}.room-overlay{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.room-hitbox{fill:transparent;stroke:#ffffff8c;stroke-width:3;vector-effect:non-scaling-stroke;cursor:pointer;transition:fill .15s ease,stroke .15s ease;outline:none}.room-hitbox:hover,.room-hitbox:focus-visible{fill:color-mix(in srgb,var(--rvm-accent) 18%,transparent);stroke:var(--rvm-accent)}.room.selected .room-hitbox{fill:color-mix(in srgb,var(--rvm-accent) 32%,transparent);stroke:var(--rvm-accent)}.room.launched .room-hitbox{fill:color-mix(in srgb,#35a854 30%,transparent);stroke:#35a854}.room.unmapped .room-hitbox{fill:#5a5a5a1f;stroke-dasharray:7 5;cursor:not-allowed}.room-label circle{fill:color-mix(in srgb,var(--rvm-surface) 92%,transparent);stroke:var(--rvm-border);stroke-width:2}.room-label text{fill:var(--rvm-text);paint-order:stroke;stroke:var(--rvm-surface);stroke-width:5px;stroke-linejoin:round;font-size:17px;font-weight:700}.room-label foreignObject{color:var(--rvm-accent)}.room-label ha-icon{display:block;width:22px;height:22px}.room.unmapped .room-label{opacity:.55}.map-controls{position:absolute;z-index:5;top:10px;right:10px;display:flex;gap:5px}.map-controls button,.map-controls .icon-button{display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--rvm-border);border-radius:13px;background:color-mix(in srgb,var(--rvm-surface) 92%,transparent);cursor:pointer;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.map-controls button:disabled{opacity:.35;cursor:not-allowed}.map-error{display:grid;place-items:center;min-height:260px;margin:0 12px;padding:30px;border:1px dashed var(--rvm-danger);border-radius:20px;color:var(--rvm-danger);text-align:center}.selection-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 20px 10px}.selection-row strong,.selection-row span{display:block}.selection-row strong{margin-bottom:3px;font-size:14px}.selection-row>div>span{color:var(--rvm-muted);font-size:13px}.selection-row .selection-count{display:grid;place-items:center;min-width:34px;height:34px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent);font-weight:700}.primary-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 20px 14px}button.primary,button.secondary,.primary-actions button{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:10px 16px;border-radius:14px;cursor:pointer;font-weight:700}button.primary{border:1px solid var(--rvm-accent);color:var(--rvm-on-accent);background:var(--rvm-accent)}button.secondary{border:1px solid var(--rvm-border);background:var(--rvm-surface-2)}button:disabled{opacity:.45;cursor:not-allowed}.transport{display:flex;justify-content:center;gap:8px;padding:0 20px 20px}.transport button{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:8px 13px;border:1px solid var(--rvm-border);border-radius:13px;background:transparent;cursor:pointer}.transport svg{width:18px;height:18px}.sheet-layer{position:fixed;z-index:999;inset:0;display:grid;place-items:center;padding:24px}.sheet-backdrop{position:absolute;inset:0;width:100%;height:100%;border:0;background:#0000007a;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.job-sheet{position:relative;display:flex;flex-direction:column;width:min(680px,100%);max-height:min(820px,100vh - 48px);overflow:hidden;border-radius:24px;background:var(--rvm-surface);box-shadow:0 22px 70px #00000052}.job-sheet header{display:flex;justify-content:space-between;gap:16px;padding:24px 24px 14px}.job-sheet h2,.job-sheet h3,.job-sheet p{margin:0}.job-sheet header p{margin-top:5px;color:var(--rvm-muted)}.job-sheet h3{margin-bottom:10px;font-size:15px}.job-sheet footer{display:flex;justify-content:flex-end;gap:10px;padding:16px 24px 22px;border-top:1px solid var(--rvm-border)}.job-sheet footer button{min-width:120px}.sheet-handle{display:none}.sheet-body{overflow:auto;padding:8px 24px 22px}.icon-button{display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--rvm-surface-2);cursor:pointer}.cleaning-mode-tabs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{position:relative;display:flex;align-items:center;justify-content:center;gap:7px;min-height:62px;padding:8px 7px 12px;border:0;color:var(--rvm-muted);background:transparent;cursor:pointer;font-weight:700}.cleaning-mode-tabs button:after{content:"";position:absolute;right:14%;bottom:-1px;left:14%;height:3px;border-radius:3px 3px 0 0;background:transparent}.cleaning-mode-tabs button.active{color:var(--rvm-accent)}.cleaning-mode-tabs button.active:after{background:var(--rvm-accent)}.cleaning-mode-tabs ha-icon{width:22px;height:22px}.mode-settings{margin-top:16px;padding:18px;border:1px solid var(--rvm-border);border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 45%,transparent)}.mode-description{margin:0 0 18px!important;color:var(--rvm-muted);line-height:1.45}.app-field+.app-field{margin-top:20px}.option-strip{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.option-strip button{min-width:0;min-height:46px;padding:7px 6px;overflow:hidden;border:0;border-radius:11px;background:transparent;cursor:pointer;font-size:12px;font-weight:600;text-overflow:ellipsis;white-space:nowrap}.option-strip button.active{color:var(--rvm-accent);background:var(--rvm-surface);box-shadow:0 2px 8px #0000001a}.range-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.range-heading strong{color:var(--rvm-accent)}.range-heading output{display:grid;place-items:center;min-width:42px;height:42px;border-radius:50%;background:var(--rvm-surface-2);font-weight:700}.water-flow input[type=range]{width:100%;min-height:34px;accent-color:var(--rvm-accent)}.saved-profiles{margin-top:16px}.saved-profiles>span{color:var(--rvm-muted);font-size:13px;font-weight:600}.saved-profiles>div{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.saved-profiles button{display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:7px 11px;border:1px solid var(--rvm-border);border-radius:12px;background:transparent}.saved-profiles button.active{border-color:var(--rvm-accent);color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 10%,transparent)}.dock-sheet{width:min(720px,100%)}.dock-sheet-body{display:block}.dock-sheet-body>*+*{margin-top:14px}.dock-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.dock-actions>button{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;align-items:center;gap:2px 10px;min-width:0;min-height:84px;padding:13px;border:1px solid var(--rvm-border);border-radius:16px;color:var(--rvm-text);background:var(--rvm-surface-2);cursor:pointer;text-align:left}.dock-actions>button.active{border-color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 12%,var(--rvm-surface))}.dock-actions strong,.dock-actions small{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dock-actions small{color:var(--rvm-muted)}.dock-action-icon{grid-row:1/3;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;color:var(--rvm-accent);background:var(--rvm-surface)}.dock-actions>button.active .dock-action-icon{color:var(--rvm-on-accent);background:var(--rvm-accent)}.dock-settings-group{overflow:hidden;border:1px solid var(--rvm-border);border-radius:18px;background:color-mix(in srgb,var(--rvm-surface-2) 44%,transparent)}.dock-settings-group h3{display:flex;align-items:center;gap:8px;margin:0;padding:14px 16px 10px;font-size:15px}.dock-settings-group h3 svg{width:18px;height:18px;color:var(--rvm-accent)}.dock-setting-row{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:55px;padding:8px 16px;border-top:1px solid var(--rvm-border)}.dock-setting-row>span{font-weight:600}.dock-setting-row select{width:min(250px,52%);min-height:38px;padding:7px 32px 7px 10px;border:1px solid var(--rvm-border);border-radius:10px;color:var(--rvm-text);background:var(--rvm-surface)}.dock-toggle{position:relative;flex:0 0 auto;width:48px;height:28px;padding:0;border:0;border-radius:14px;background:var(--rvm-border);cursor:pointer;transition:background .15s ease}.dock-toggle>span{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--rvm-surface);box-shadow:0 1px 5px #00000040;transition:transform .15s ease}.dock-toggle.active{background:var(--rvm-accent)}.dock-toggle.active>span{transform:translate(20px)}.drain-button{display:flex;align-items:center;gap:12px;width:100%;min-height:62px;padding:11px 16px;border:0;border-top:1px solid var(--rvm-border);color:var(--rvm-danger);background:transparent;cursor:pointer;text-align:left}.drain-button>span{display:grid;gap:2px}.drain-button small{color:var(--rvm-muted);font-size:12px;font-weight:400}.dock-pending{position:sticky;bottom:0;padding:10px 12px;border-radius:12px;color:var(--rvm-on-accent);background:var(--rvm-accent);text-align:center}.field{display:flex;flex-direction:column;gap:7px;min-width:0}.field>span,.editor label{color:var(--rvm-muted);font-size:13px;font-weight:600}.field select,.editor input,.editor select{width:100%;min-height:44px;padding:9px 11px;border:1px solid var(--rvm-border);border-radius:11px;color:var(--rvm-text);background:var(--rvm-surface)}.field .segmented{margin:0}.toast{position:absolute;z-index:1000;right:16px;bottom:16px;display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:12px 12px 12px 16px;border-radius:14px;color:var(--rvm-text);background:var(--rvm-surface);box-shadow:0 8px 30px #0000003d}.toast button{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:var(--rvm-surface-2)}.editor{padding:8px 4px 32px;color:var(--rvm-text)}.editor>h2{margin:0 0 4px}.editor>p{margin:0 0 18px;color:var(--rvm-muted)}.editor section{margin:0 0 18px;padding:16px;border:1px solid var(--rvm-border);border-radius:16px;background:var(--rvm-surface)}.editor h3{margin:0 0 12px}.editor h4{margin:14px 0 8px}.editor label{display:flex;flex-direction:column;gap:6px;margin-bottom:10px;text-transform:capitalize}.editor .checkbox{flex-direction:row;align-items:center}.editor .checkbox input{width:18px;min-height:auto}.editor-errors{margin-bottom:14px;padding:12px;border-radius:12px;color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent);font-size:12px}.editor-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.editor-heading>div{display:flex;gap:4px}.editor-heading button{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:36px;padding:6px 9px;border:1px solid var(--rvm-border);border-radius:9px;background:var(--rvm-surface-2)}.editor-heading button svg{width:16px;height:16px}.editor-card{margin-top:12px;padding:14px;border-radius:14px;background:var(--rvm-surface-2)}.editor-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 12px;margin-top:12px}.room-editor-list{display:grid;gap:8px}.room-editor{display:grid;grid-template-columns:100px 1fr 1.2fr 1fr 1.2fr;align-items:end;gap:8px;padding:10px;border:1px solid var(--rvm-border);border-radius:12px;background:var(--rvm-surface)}.room-editor label{margin:0}button:focus-visible,select:focus-visible,input:focus-visible,.room-hitbox:focus-visible{outline:3px solid color-mix(in srgb,var(--rvm-accent) 55%,transparent);outline-offset:2px}@media(max-width:700px){.card-header{align-items:flex-start;flex-direction:column}.status-strip{justify-content:flex-start}.map-shell{height:clamp(300px,48vh,480px);margin:0 8px}.room-label text{font-size:18px}.primary-actions{grid-template-columns:1fr}.transport{flex-wrap:wrap}.sheet-layer{align-items:end;padding:0}.job-sheet{width:100%;max-height:92vh;border-radius:24px 24px 0 0}.sheet-handle{display:block;width:42px;height:5px;margin:9px auto 0;border-radius:9px;background:var(--rvm-border)}.job-sheet header{padding-top:14px}.dock-actions{grid-template-columns:1fr}.dock-actions>button{min-height:68px}.dock-setting-row{align-items:flex-start;flex-direction:column;gap:7px}.dock-setting-row select{width:100%}.dock-setting-row:has(.dock-toggle){align-items:center;flex-direction:row}.cleaning-mode-tabs{grid-template-columns:repeat(2,1fr)}.cleaning-mode-tabs button:nth-child(-n+2){border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{min-height:56px}.editor-grid{grid-template-columns:1fr}.room-editor{grid-template-columns:1fr 1fr}.room-editor>strong{grid-column:1/-1}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}', Rw = "0.3.1";
class hv extends HTMLElement {
  root;
  container;
  constructor() {
    super();
    const i = this.attachShadow({ mode: "open" }), u = document.createElement("style");
    u.textContent = Zw, i.append(u), this.container = document.createElement("div"), i.append(this.container);
  }
  renderReact(i) {
    this.root ??= Jy.createRoot(this.container), this.root.render(i);
  }
}
class Uw extends hv {
  config;
  homeAssistant;
  setConfig(i) {
    this.config = x2(i), this.render();
  }
  set hass(i) {
    this.homeAssistant = i, this.render();
  }
  render() {
    !this.config || !this.homeAssistant || this.renderReact(/* @__PURE__ */ y.jsx(Nw, { hass: this.homeAssistant, config: this.config }));
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
    return Qh();
  }
}
class Yw extends hv {
  config = Qh();
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
        k2,
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
customElements.get("roborock-vacuum-map-card") || customElements.define("roborock-vacuum-map-card", Uw);
customElements.get("roborock-vacuum-map-card-editor") || customElements.define("roborock-vacuum-map-card-editor", Yw);
window.customCards ??= [];
window.customCards.push({
  type: "roborock-vacuum-map-card",
  name: "Roborock Vacuum Map Card",
  description: "A Roborock-native room and whole-floor cleaning card",
  preview: !0,
  documentationURL: "https://github.com/domidyon/roborock-vacuum-map-card"
});
console.info(`%c ROBOROCK-VACUUM-MAP-CARD %c v${Rw} `, "color:white;background:#5965f2;font-weight:700", "color:#5965f2;background:#eef0ff");
export {
  Uw as RoborockVacuumMapCard,
  Yw as RoborockVacuumMapCardEditor
};
