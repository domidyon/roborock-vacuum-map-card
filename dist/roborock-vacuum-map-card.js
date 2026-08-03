function ah(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ts = { exports: {} }, al = {};
var lp;
function Cy() {
  if (lp) return al;
  lp = 1;
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
  return al.Fragment = i, al.jsx = u, al.jsxs = u, al;
}
var up;
function My() {
  return up || (up = 1, Ts.exports = Cy()), Ts.exports;
}
var _ = My(), ws = { exports: {} }, il = {}, Es = { exports: {} }, As = {};
var op;
function Ny() {
  return op || (op = 1, (function(n) {
    function i(j, $) {
      var H = j.length;
      j.push($);
      e: for (; 0 < H; ) {
        var te = H - 1 >>> 1, fe = j[te];
        if (0 < c(fe, $))
          j[te] = $, j[H] = fe, H = te;
        else break e;
      }
    }
    function u(j) {
      return j.length === 0 ? null : j[0];
    }
    function o(j) {
      if (j.length === 0) return null;
      var $ = j[0], H = j.pop();
      if (H !== $) {
        j[0] = H;
        e: for (var te = 0, fe = j.length, T = fe >>> 1; te < T; ) {
          var k = 2 * (te + 1) - 1, L = j[k], J = k + 1, ie = j[J];
          if (0 > c(L, H))
            J < fe && 0 > c(ie, L) ? (j[te] = ie, j[J] = H, te = J) : (j[te] = L, j[k] = H, te = k);
          else if (J < fe && 0 > c(ie, H))
            j[te] = ie, j[J] = H, te = J;
          else break e;
        }
      }
      return $;
    }
    function c(j, $) {
      var H = j.sortIndex - $.sortIndex;
      return H !== 0 ? H : j.id - $.id;
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
    var v = [], h = [], y = 1, S = null, E = 3, A = !1, M = !1, q = !1, X = !1, R = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
    function B(j) {
      for (var $ = u(h); $ !== null; ) {
        if ($.callback === null) o(h);
        else if ($.startTime <= j)
          o(h), $.sortIndex = $.expirationTime, i(v, $);
        else break;
        $ = u(h);
      }
    }
    function G(j) {
      if (q = !1, B(j), !M)
        if (u(v) !== null)
          M = !0, ee || (ee = !0, ye());
        else {
          var $ = u(h);
          $ !== null && it(G, $.startTime - j);
        }
    }
    var ee = !1, K = -1, ue = 5, Se = -1;
    function ve() {
      return X ? !0 : !(n.unstable_now() - Se < ue);
    }
    function ge() {
      if (X = !1, ee) {
        var j = n.unstable_now();
        Se = j;
        var $ = !0;
        try {
          e: {
            M = !1, q && (q = !1, Q(K), K = -1), A = !0;
            var H = E;
            try {
              t: {
                for (B(j), S = u(v); S !== null && !(S.expirationTime > j && ve()); ) {
                  var te = S.callback;
                  if (typeof te == "function") {
                    S.callback = null, E = S.priorityLevel;
                    var fe = te(
                      S.expirationTime <= j
                    );
                    if (j = n.unstable_now(), typeof fe == "function") {
                      S.callback = fe, B(j), $ = !0;
                      break t;
                    }
                    S === u(v) && o(v), B(j);
                  } else o(v);
                  S = u(v);
                }
                if (S !== null) $ = !0;
                else {
                  var T = u(h);
                  T !== null && it(
                    G,
                    T.startTime - j
                  ), $ = !1;
                }
              }
              break e;
            } finally {
              S = null, E = H, A = !1;
            }
            $ = void 0;
          }
        } finally {
          $ ? ye() : ee = !1;
        }
      }
    }
    var ye;
    if (typeof V == "function")
      ye = function() {
        V(ge);
      };
    else if (typeof MessageChannel < "u") {
      var Be = new MessageChannel(), Ke = Be.port2;
      Be.port1.onmessage = ge, ye = function() {
        Ke.postMessage(null);
      };
    } else
      ye = function() {
        R(ge, 0);
      };
    function it(j, $) {
      K = R(function() {
        j(n.unstable_now());
      }, $);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, n.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ue = 0 < j ? Math.floor(1e3 / j) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, n.unstable_next = function(j) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = E;
      }
      var H = E;
      E = $;
      try {
        return j();
      } finally {
        E = H;
      }
    }, n.unstable_requestPaint = function() {
      X = !0;
    }, n.unstable_runWithPriority = function(j, $) {
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
      var H = E;
      E = j;
      try {
        return $();
      } finally {
        E = H;
      }
    }, n.unstable_scheduleCallback = function(j, $, H) {
      var te = n.unstable_now();
      switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? te + H : te) : H = te, j) {
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
      return fe = H + fe, j = {
        id: y++,
        callback: $,
        priorityLevel: j,
        startTime: H,
        expirationTime: fe,
        sortIndex: -1
      }, H > te ? (j.sortIndex = H, i(h, j), u(v) === null && j === u(h) && (q ? (Q(K), K = -1) : q = !0, it(G, H - te))) : (j.sortIndex = fe, i(v, j), M || A || (M = !0, ee || (ee = !0, ye()))), j;
    }, n.unstable_shouldYield = ve, n.unstable_wrapCallback = function(j) {
      var $ = E;
      return function() {
        var H = E;
        E = $;
        try {
          return j.apply(this, arguments);
        } finally {
          E = H;
        }
      };
    };
  })(As)), As;
}
var rp;
function jy() {
  return rp || (rp = 1, Es.exports = Ny()), Es.exports;
}
var xs = { exports: {} }, le = {};
var sp;
function Dy() {
  if (sp) return le;
  sp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.memo"), y = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), E = Symbol.iterator;
  function A(T) {
    return T === null || typeof T != "object" ? null : (T = E && T[E] || T["@@iterator"], typeof T == "function" ? T : null);
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
  }, q = Object.assign, X = {};
  function R(T, k, L) {
    this.props = T, this.context = k, this.refs = X, this.updater = L || M;
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(T, k) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, T, k, "setState");
  }, R.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = R.prototype;
  function V(T, k, L) {
    this.props = T, this.context = k, this.refs = X, this.updater = L || M;
  }
  var B = V.prototype = new Q();
  B.constructor = V, q(B, R.prototype), B.isPureReactComponent = !0;
  var G = Array.isArray;
  function ee() {
  }
  var K = { H: null, A: null, T: null, S: null }, ue = Object.prototype.hasOwnProperty;
  function Se(T, k, L) {
    var J = L.ref;
    return {
      $$typeof: n,
      type: T,
      key: k,
      ref: J !== void 0 ? J : null,
      props: L
    };
  }
  function ve(T, k) {
    return Se(T.type, k, T.props);
  }
  function ge(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }
  function ye(T) {
    var k = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(L) {
      return k[L];
    });
  }
  var Be = /\/+/g;
  function Ke(T, k) {
    return typeof T == "object" && T !== null && T.key != null ? ye("" + T.key) : k.toString(36);
  }
  function it(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (typeof T.status == "string" ? T.then(ee, ee) : (T.status = "pending", T.then(
          function(k) {
            T.status === "pending" && (T.status = "fulfilled", T.value = k);
          },
          function(k) {
            T.status === "pending" && (T.status = "rejected", T.reason = k);
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
  function j(T, k, L, J, ie) {
    var ce = typeof T;
    (ce === "undefined" || ce === "boolean") && (T = null);
    var ze = !1;
    if (T === null) ze = !0;
    else
      switch (ce) {
        case "bigint":
        case "string":
        case "number":
          ze = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case n:
            case i:
              ze = !0;
              break;
            case y:
              return ze = T._init, j(
                ze(T._payload),
                k,
                L,
                J,
                ie
              );
          }
      }
    if (ze)
      return ie = ie(T), ze = J === "" ? "." + Ke(T, 0) : J, G(ie) ? (L = "", ze != null && (L = ze.replace(Be, "$&/") + "/"), j(ie, k, L, "", function(_n) {
        return _n;
      })) : ie != null && (ge(ie) && (ie = ve(
        ie,
        L + (ie.key == null || T && T.key === ie.key ? "" : ("" + ie.key).replace(
          Be,
          "$&/"
        ) + "/") + ze
      )), k.push(ie)), 1;
    ze = 0;
    var tt = J === "" ? "." : J + ":";
    if (G(T))
      for (var ke = 0; ke < T.length; ke++)
        J = T[ke], ce = tt + Ke(J, ke), ze += j(
          J,
          k,
          L,
          ce,
          ie
        );
    else if (ke = A(T), typeof ke == "function")
      for (T = ke.call(T), ke = 0; !(J = T.next()).done; )
        J = J.value, ce = tt + Ke(J, ke++), ze += j(
          J,
          k,
          L,
          ce,
          ie
        );
    else if (ce === "object") {
      if (typeof T.then == "function")
        return j(
          it(T),
          k,
          L,
          J,
          ie
        );
      throw k = String(T), Error(
        "Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ze;
  }
  function $(T, k, L) {
    if (T == null) return T;
    var J = [], ie = 0;
    return j(T, J, "", "", function(ce) {
      return k.call(L, ce, ie++);
    }), J;
  }
  function H(T) {
    if (T._status === -1) {
      var k = T._result;
      k = k(), k.then(
        function(L) {
          (T._status === 0 || T._status === -1) && (T._status = 1, T._result = L);
        },
        function(L) {
          (T._status === 0 || T._status === -1) && (T._status = 2, T._result = L);
        }
      ), T._status === -1 && (T._status = 0, T._result = k);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var te = typeof reportError == "function" ? reportError : function(T) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var k = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
        error: T
      });
      if (!window.dispatchEvent(k)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", T);
      return;
    }
    console.error(T);
  }, fe = {
    map: $,
    forEach: function(T, k, L) {
      $(
        T,
        function() {
          k.apply(this, arguments);
        },
        L
      );
    },
    count: function(T) {
      var k = 0;
      return $(T, function() {
        k++;
      }), k;
    },
    toArray: function(T) {
      return $(T, function(k) {
        return k;
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
  return le.Activity = S, le.Children = fe, le.Component = R, le.Fragment = u, le.Profiler = c, le.PureComponent = V, le.StrictMode = o, le.Suspense = v, le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, le.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(T) {
      return K.H.useMemoCache(T);
    }
  }, le.cache = function(T) {
    return function() {
      return T.apply(null, arguments);
    };
  }, le.cacheSignal = function() {
    return null;
  }, le.cloneElement = function(T, k, L) {
    if (T == null)
      throw Error(
        "The argument must be a React element, but you passed " + T + "."
      );
    var J = q({}, T.props), ie = T.key;
    if (k != null)
      for (ce in k.key !== void 0 && (ie = "" + k.key), k)
        !ue.call(k, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && k.ref === void 0 || (J[ce] = k[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) J.children = L;
    else if (1 < ce) {
      for (var ze = Array(ce), tt = 0; tt < ce; tt++)
        ze[tt] = arguments[tt + 2];
      J.children = ze;
    }
    return Se(T.type, ie, J);
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
  }, le.createElement = function(T, k, L) {
    var J, ie = {}, ce = null;
    if (k != null)
      for (J in k.key !== void 0 && (ce = "" + k.key), k)
        ue.call(k, J) && J !== "key" && J !== "__self" && J !== "__source" && (ie[J] = k[J]);
    var ze = arguments.length - 2;
    if (ze === 1) ie.children = L;
    else if (1 < ze) {
      for (var tt = Array(ze), ke = 0; ke < ze; ke++)
        tt[ke] = arguments[ke + 2];
      ie.children = tt;
    }
    if (T && T.defaultProps)
      for (J in ze = T.defaultProps, ze)
        ie[J] === void 0 && (ie[J] = ze[J]);
    return Se(T, ce, ie);
  }, le.createRef = function() {
    return { current: null };
  }, le.forwardRef = function(T) {
    return { $$typeof: p, render: T };
  }, le.isValidElement = ge, le.lazy = function(T) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: T },
      _init: H
    };
  }, le.memo = function(T, k) {
    return {
      $$typeof: h,
      type: T,
      compare: k === void 0 ? null : k
    };
  }, le.startTransition = function(T) {
    var k = K.T, L = {};
    K.T = L;
    try {
      var J = T(), ie = K.S;
      ie !== null && ie(L, J), typeof J == "object" && J !== null && typeof J.then == "function" && J.then(ee, te);
    } catch (ce) {
      te(ce);
    } finally {
      k !== null && L.types !== null && (k.types = L.types), K.T = k;
    }
  }, le.unstable_useCacheRefresh = function() {
    return K.H.useCacheRefresh();
  }, le.use = function(T) {
    return K.H.use(T);
  }, le.useActionState = function(T, k, L) {
    return K.H.useActionState(T, k, L);
  }, le.useCallback = function(T, k) {
    return K.H.useCallback(T, k);
  }, le.useContext = function(T) {
    return K.H.useContext(T);
  }, le.useDebugValue = function() {
  }, le.useDeferredValue = function(T, k) {
    return K.H.useDeferredValue(T, k);
  }, le.useEffect = function(T, k) {
    return K.H.useEffect(T, k);
  }, le.useEffectEvent = function(T) {
    return K.H.useEffectEvent(T);
  }, le.useId = function() {
    return K.H.useId();
  }, le.useImperativeHandle = function(T, k, L) {
    return K.H.useImperativeHandle(T, k, L);
  }, le.useInsertionEffect = function(T, k) {
    return K.H.useInsertionEffect(T, k);
  }, le.useLayoutEffect = function(T, k) {
    return K.H.useLayoutEffect(T, k);
  }, le.useMemo = function(T, k) {
    return K.H.useMemo(T, k);
  }, le.useOptimistic = function(T, k) {
    return K.H.useOptimistic(T, k);
  }, le.useReducer = function(T, k, L) {
    return K.H.useReducer(T, k, L);
  }, le.useRef = function(T) {
    return K.H.useRef(T);
  }, le.useState = function(T) {
    return K.H.useState(T);
  }, le.useSyncExternalStore = function(T, k, L) {
    return K.H.useSyncExternalStore(
      T,
      k,
      L
    );
  }, le.useTransition = function() {
    return K.H.useTransition();
  }, le.version = "19.2.8", le;
}
var cp;
function $s() {
  return cp || (cp = 1, xs.exports = Dy()), xs.exports;
}
var Os = { exports: {} }, ft = {};
var fp;
function Zy() {
  if (fp) return ft;
  fp = 1;
  var n = $s();
  function i(v) {
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
  function f(v, h, y) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : "" + S,
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
  return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, ft.createPortal = function(v, h) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(i(299));
    return f(v, h, null, y);
  }, ft.flushSync = function(v) {
    var h = d.T, y = o.p;
    try {
      if (d.T = null, o.p = 2, v) return v();
    } finally {
      d.T = h, o.p = y, o.d.f();
    }
  }, ft.preconnect = function(v, h) {
    typeof v == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, o.d.C(v, h));
  }, ft.prefetchDNS = function(v) {
    typeof v == "string" && o.d.D(v);
  }, ft.preinit = function(v, h) {
    if (typeof v == "string" && h && typeof h.as == "string") {
      var y = h.as, S = p(y, h.crossOrigin), E = typeof h.integrity == "string" ? h.integrity : void 0, A = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      y === "style" ? o.d.S(
        v,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: S,
          integrity: E,
          fetchPriority: A
        }
      ) : y === "script" && o.d.X(v, {
        crossOrigin: S,
        integrity: E,
        fetchPriority: A,
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
          o.d.M(v, {
            crossOrigin: y,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && o.d.M(v);
  }, ft.preload = function(v, h) {
    if (typeof v == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var y = h.as, S = p(y, h.crossOrigin);
      o.d.L(v, y, {
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
  }, ft.preloadModule = function(v, h) {
    if (typeof v == "string")
      if (h) {
        var y = p(h.as, h.crossOrigin);
        o.d.m(v, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: y,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else o.d.m(v);
  }, ft.requestFormReset = function(v) {
    o.d.r(v);
  }, ft.unstable_batchedUpdates = function(v, h) {
    return v(h);
  }, ft.useFormState = function(v, h, y) {
    return d.H.useFormState(v, h, y);
  }, ft.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, ft.version = "19.2.8", ft;
}
var dp;
function Ry() {
  if (dp) return Os.exports;
  dp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Os.exports = Zy(), Os.exports;
}
var mp;
function Uy() {
  if (mp) return il;
  mp = 1;
  var n = jy(), i = $s(), u = Ry();
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
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = y(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var S = Object.assign, E = /* @__PURE__ */ Symbol.for("react.element"), A = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), q = /* @__PURE__ */ Symbol.for("react.fragment"), X = /* @__PURE__ */ Symbol.for("react.strict_mode"), R = /* @__PURE__ */ Symbol.for("react.profiler"), Q = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), B = /* @__PURE__ */ Symbol.for("react.forward_ref"), G = /* @__PURE__ */ Symbol.for("react.suspense"), ee = /* @__PURE__ */ Symbol.for("react.suspense_list"), K = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), Se = /* @__PURE__ */ Symbol.for("react.activity"), ve = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ge = Symbol.iterator;
  function ye(e) {
    return e === null || typeof e != "object" ? null : (e = ge && e[ge] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Be = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ke(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Be ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case q:
        return "Fragment";
      case R:
        return "Profiler";
      case X:
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
        case V:
          return e.displayName || "Context";
        case Q:
          return (e._context.displayName || "Context") + ".Consumer";
        case B:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case K:
          return t = e.displayName || null, t !== null ? t : Ke(e.type) || "Memo";
        case ue:
          t = e._payload, e = e._init;
          try {
            return Ke(e(t));
          } catch {
          }
      }
    return null;
  }
  var it = Array.isArray, j = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, te = [], fe = -1;
  function T(e) {
    return { current: e };
  }
  function k(e) {
    0 > fe || (e.current = te[fe], te[fe] = null, fe--);
  }
  function L(e, t) {
    fe++, te[fe] = e.current, e.current = t;
  }
  var J = T(null), ie = T(null), ce = T(null), ze = T(null);
  function tt(e, t) {
    switch (L(ce, t), L(ie, e), L(J, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Om(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Om(t), e = Cm(t, e);
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
    k(J), L(J, e);
  }
  function ke() {
    k(J), k(ie), k(ce);
  }
  function _n(e) {
    e.memoizedState !== null && L(ze, e);
    var t = J.current, a = Cm(t, e.type);
    t !== a && (L(ie, e), L(J, a));
  }
  function Pn(e) {
    ie.current === e && (k(J), k(ie)), ze.current === e && (k(ze), Ii._currentValue = H);
  }
  var ci, _l;
  function Wt(e) {
    if (ci === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ci = t && t[1] || "", _l = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ci + e + _l;
  }
  var lo = !1;
  function uo(e, t) {
    if (!e || lo) return "";
    lo = !0;
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
                  var D = `
` + b[l].replace(" at new ", " at ");
                  return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), D;
                }
              while (1 <= l && 0 <= r);
            break;
          }
      }
    } finally {
      lo = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Wt(a) : "";
  }
  function uv(e, t) {
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
        return uo(e.type, !1);
      case 11:
        return uo(e.type.render, !1);
      case 1:
        return uo(e.type, !0);
      case 31:
        return Wt("Activity");
      default:
        return "";
    }
  }
  function ic(e) {
    try {
      var t = "", a = null;
      do
        t += uv(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var oo = Object.prototype.hasOwnProperty, ro = n.unstable_scheduleCallback, so = n.unstable_cancelCallback, ov = n.unstable_shouldYield, rv = n.unstable_requestPaint, wt = n.unstable_now, sv = n.unstable_getCurrentPriorityLevel, lc = n.unstable_ImmediatePriority, uc = n.unstable_UserBlockingPriority, Sl = n.unstable_NormalPriority, cv = n.unstable_LowPriority, oc = n.unstable_IdlePriority, fv = n.log, dv = n.unstable_setDisableYieldValue, fi = null, Et = null;
  function Sn(e) {
    if (typeof fv == "function" && dv(e), Et && typeof Et.setStrictMode == "function")
      try {
        Et.setStrictMode(fi, e);
      } catch {
      }
  }
  var At = Math.clz32 ? Math.clz32 : hv, mv = Math.log, pv = Math.LN2;
  function hv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (mv(e) / pv | 0) | 0;
  }
  var zl = 256, Tl = 262144, wl = 4194304;
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
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var r = 0, s = e.suspendedLanes, m = e.pingedLanes;
    e = e.warmLanes;
    var g = l & 134217727;
    return g !== 0 ? (l = g & ~s, l !== 0 ? r = Fn(l) : (m &= g, m !== 0 ? r = Fn(m) : a || (a = g & ~e, a !== 0 && (r = Fn(a))))) : (g = l & ~s, g !== 0 ? r = Fn(g) : m !== 0 ? r = Fn(m) : a || (a = l & ~e, a !== 0 && (r = Fn(a)))), r === 0 ? 0 : t !== 0 && t !== r && (t & s) === 0 && (s = r & -r, a = t & -t, s >= a || s === 32 && (a & 4194048) !== 0) ? t : r;
  }
  function di(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function vv(e, t) {
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
  function rc() {
    var e = wl;
    return wl <<= 1, (wl & 62914560) === 0 && (wl = 4194304), e;
  }
  function co(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function mi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function gv(e, t, a, l, r, s) {
    var m = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var g = e.entanglements, b = e.expirationTimes, O = e.hiddenUpdates;
    for (a = m & ~a; 0 < a; ) {
      var D = 31 - At(a), Y = 1 << D;
      g[D] = 0, b[D] = -1;
      var C = O[D];
      if (C !== null)
        for (O[D] = null, D = 0; D < C.length; D++) {
          var N = C[D];
          N !== null && (N.lane &= -536870913);
        }
      a &= ~Y;
    }
    l !== 0 && sc(e, l, 0), s !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(m & ~t));
  }
  function sc(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - At(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function cc(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - At(a), r = 1 << l;
      r & t | e[l] & t && (e[l] |= t), a &= ~r;
    }
  }
  function fc(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : fo(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function fo(e) {
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
  function mo(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function dc() {
    var e = $.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Fm(e.type));
  }
  function mc(e, t) {
    var a = $.p;
    try {
      return $.p = e, t();
    } finally {
      $.p = a;
    }
  }
  var zn = Math.random().toString(36).slice(2), lt = "__reactFiber$" + zn, ht = "__reactProps$" + zn, Sa = "__reactContainer$" + zn, po = "__reactEvents$" + zn, yv = "__reactListeners$" + zn, bv = "__reactHandles$" + zn, pc = "__reactResources$" + zn, pi = "__reactMarker$" + zn;
  function ho(e) {
    delete e[lt], delete e[ht], delete e[po], delete e[yv], delete e[bv];
  }
  function za(e) {
    var t = e[lt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Sa] || a[lt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Um(e); e !== null; ) {
            if (a = e[lt]) return a;
            e = Um(e);
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
  function hi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function wa(e) {
    var t = e[pc];
    return t || (t = e[pc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function nt(e) {
    e[pi] = !0;
  }
  var hc = /* @__PURE__ */ new Set(), vc = {};
  function In(e, t) {
    Ea(e, t), Ea(e + "Capture", t);
  }
  function Ea(e, t) {
    for (vc[e] = t, e = 0; e < t.length; e++)
      hc.add(t[e]);
  }
  var _v = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), gc = {}, yc = {};
  function Sv(e) {
    return oo.call(yc, e) ? !0 : oo.call(gc, e) ? !1 : _v.test(e) ? yc[e] = !0 : (gc[e] = !0, !1);
  }
  function Al(e, t, a) {
    if (Sv(t))
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
  function xl(e, t, a) {
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
  function tn(e, t, a, l) {
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
  function bc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function zv(e, t, a) {
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
  function vo(e) {
    if (!e._valueTracker) {
      var t = bc(e) ? "checked" : "value";
      e._valueTracker = zv(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function _c(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = bc(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Ol(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Tv = /[\n"\\]/g;
  function Rt(e) {
    return e.replace(
      Tv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function go(e, t, a, l, r, s, m, g) {
    e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Zt(t)) : e.value !== "" + Zt(t) && (e.value = "" + Zt(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? yo(e, m, Zt(t)) : a != null ? yo(e, m, Zt(a)) : l != null && e.removeAttribute("value"), r == null && s != null && (e.defaultChecked = !!s), r != null && (e.checked = r && typeof r != "function" && typeof r != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + Zt(g) : e.removeAttribute("name");
  }
  function Sc(e, t, a, l, r, s, m, g) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || a != null) {
      if (!(s !== "submit" && s !== "reset" || t != null)) {
        vo(e);
        return;
      }
      a = a != null ? "" + Zt(a) : "", t = t != null ? "" + Zt(t) : a, g || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? r, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = g ? e.checked : !!l, e.defaultChecked = !!l, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m), vo(e);
  }
  function yo(e, t, a) {
    t === "number" && Ol(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Aa(e, t, a, l) {
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
  function zc(e, t, a) {
    if (t != null && (t = "" + Zt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Zt(a) : "";
  }
  function Tc(e, t, a, l) {
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
    a = Zt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), vo(e);
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
  var wv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function wc(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || wv.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Ec(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var r in t)
        l = t[r], t.hasOwnProperty(r) && a[r] !== l && wc(e, r, l);
    } else
      for (var s in t)
        t.hasOwnProperty(s) && wc(e, s, t[s]);
  }
  function bo(e) {
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
  var Ev = /* @__PURE__ */ new Map([
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
  ]), Av = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Cl(e) {
    return Av.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function nn() {
  }
  var _o = null;
  function So(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Oa = null, Ca = null;
  function Ac(e) {
    var t = Ta(e);
    if (t && (e = t.stateNode)) {
      var a = e[ht] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (go(
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
                var r = l[ht] || null;
                if (!r) throw Error(o(90));
                go(
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
              l = a[t], l.form === e.form && _c(l);
          }
          break e;
        case "textarea":
          zc(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Aa(e, !!a.multiple, t, !1);
      }
    }
  }
  var zo = !1;
  function xc(e, t, a) {
    if (zo) return e(t, a);
    zo = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (zo = !1, (Oa !== null || Ca !== null) && (vu(), Oa && (t = Oa, e = Ca, Ca = Oa = null, Ac(t), e)))
        for (t = 0; t < e.length; t++) Ac(e[t]);
    }
  }
  function vi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[ht] || null;
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
  var an = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), To = !1;
  if (an)
    try {
      var gi = {};
      Object.defineProperty(gi, "passive", {
        get: function() {
          To = !0;
        }
      }), window.addEventListener("test", gi, gi), window.removeEventListener("test", gi, gi);
    } catch {
      To = !1;
    }
  var Tn = null, wo = null, Ml = null;
  function Oc() {
    if (Ml) return Ml;
    var e, t = wo, a = t.length, l, r = "value" in Tn ? Tn.value : Tn.textContent, s = r.length;
    for (e = 0; e < a && t[e] === r[e]; e++) ;
    var m = a - e;
    for (l = 1; l <= m && t[a - l] === r[s - l]; l++) ;
    return Ml = r.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Nl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function jl() {
    return !0;
  }
  function Cc() {
    return !1;
  }
  function vt(e) {
    function t(a, l, r, s, m) {
      this._reactName = a, this._targetInst = r, this.type = l, this.nativeEvent = s, this.target = m, this.currentTarget = null;
      for (var g in e)
        e.hasOwnProperty(g) && (a = e[g], this[g] = a ? a(s) : s[g]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? jl : Cc, this.isPropagationStopped = Cc, this;
    }
    return S(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = jl);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = jl);
      },
      persist: function() {
      },
      isPersistent: jl
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
  }, Dl = vt(ea), yi = S({}, ea, { view: 0, detail: 0 }), xv = vt(yi), Eo, Ao, bi, Zl = S({}, yi, {
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
    getModifierState: Oo,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== bi && (bi && e.type === "mousemove" ? (Eo = e.screenX - bi.screenX, Ao = e.screenY - bi.screenY) : Ao = Eo = 0, bi = e), Eo);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ao;
    }
  }), Mc = vt(Zl), Ov = S({}, Zl, { dataTransfer: 0 }), Cv = vt(Ov), Mv = S({}, yi, { relatedTarget: 0 }), xo = vt(Mv), Nv = S({}, ea, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jv = vt(Nv), Dv = S({}, ea, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Zv = vt(Dv), Rv = S({}, ea, { data: 0 }), Nc = vt(Rv), Uv = {
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
  }, kv = {
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
  }, Yv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Xv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Yv[e]) ? !!t[e] : !1;
  }
  function Oo() {
    return Xv;
  }
  var Hv = S({}, yi, {
    key: function(e) {
      if (e.key) {
        var t = Uv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Nl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kv[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Oo,
    charCode: function(e) {
      return e.type === "keypress" ? Nl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Nl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Bv = vt(Hv), qv = S({}, Zl, {
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
  }), jc = vt(qv), Vv = S({}, yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Oo
  }), $v = vt(Vv), Lv = S({}, ea, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Gv = vt(Lv), Qv = S({}, Zl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Kv = vt(Qv), Jv = S({}, ea, {
    newState: 0,
    oldState: 0
  }), Wv = vt(Jv), Pv = [9, 13, 27, 32], Co = an && "CompositionEvent" in window, _i = null;
  an && "documentMode" in document && (_i = document.documentMode);
  var Fv = an && "TextEvent" in window && !_i, Dc = an && (!Co || _i && 8 < _i && 11 >= _i), Zc = " ", Rc = !1;
  function Uc(e, t) {
    switch (e) {
      case "keyup":
        return Pv.indexOf(t.keyCode) !== -1;
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
  function kc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ma = !1;
  function Iv(e, t) {
    switch (e) {
      case "compositionend":
        return kc(t);
      case "keypress":
        return t.which !== 32 ? null : (Rc = !0, Zc);
      case "textInput":
        return e = t.data, e === Zc && Rc ? null : e;
      default:
        return null;
    }
  }
  function eg(e, t) {
    if (Ma)
      return e === "compositionend" || !Co && Uc(e, t) ? (e = Oc(), Ml = wo = Tn = null, Ma = !1, e) : null;
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
        return Dc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var tg = {
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
  function Yc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tg[e.type] : t === "textarea";
  }
  function Xc(e, t, a, l) {
    Oa ? Ca ? Ca.push(l) : Ca = [l] : Oa = l, t = Tu(t, "onChange"), 0 < t.length && (a = new Dl(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Si = null, zi = null;
  function ng(e) {
    zm(e, 0);
  }
  function Rl(e) {
    var t = hi(e);
    if (_c(t)) return e;
  }
  function Hc(e, t) {
    if (e === "change") return t;
  }
  var Bc = !1;
  if (an) {
    var Mo;
    if (an) {
      var No = "oninput" in document;
      if (!No) {
        var qc = document.createElement("div");
        qc.setAttribute("oninput", "return;"), No = typeof qc.oninput == "function";
      }
      Mo = No;
    } else Mo = !1;
    Bc = Mo && (!document.documentMode || 9 < document.documentMode);
  }
  function Vc() {
    Si && (Si.detachEvent("onpropertychange", $c), zi = Si = null);
  }
  function $c(e) {
    if (e.propertyName === "value" && Rl(zi)) {
      var t = [];
      Xc(
        t,
        zi,
        e,
        So(e)
      ), xc(ng, t);
    }
  }
  function ag(e, t, a) {
    e === "focusin" ? (Vc(), Si = t, zi = a, Si.attachEvent("onpropertychange", $c)) : e === "focusout" && Vc();
  }
  function ig(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Rl(zi);
  }
  function lg(e, t) {
    if (e === "click") return Rl(t);
  }
  function ug(e, t) {
    if (e === "input" || e === "change")
      return Rl(t);
  }
  function og(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var xt = typeof Object.is == "function" ? Object.is : og;
  function Ti(e, t) {
    if (xt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var r = a[l];
      if (!oo.call(t, r) || !xt(e[r], t[r]))
        return !1;
    }
    return !0;
  }
  function Lc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Gc(e, t) {
    var a = Lc(e);
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
      a = Lc(a);
    }
  }
  function Qc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Kc(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ol(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Ol(e.document);
    }
    return t;
  }
  function jo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var rg = an && "documentMode" in document && 11 >= document.documentMode, Na = null, Do = null, wi = null, Zo = !1;
  function Jc(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Zo || Na == null || Na !== Ol(l) || (l = Na, "selectionStart" in l && jo(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), wi && Ti(wi, l) || (wi = l, l = Tu(Do, "onSelect"), 0 < l.length && (t = new Dl(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = Na)));
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
  }, Ro = {}, Wc = {};
  an && (Wc = document.createElement("div").style, "AnimationEvent" in window || (delete ja.animationend.animation, delete ja.animationiteration.animation, delete ja.animationstart.animation), "TransitionEvent" in window || delete ja.transitionend.transition);
  function na(e) {
    if (Ro[e]) return Ro[e];
    if (!ja[e]) return e;
    var t = ja[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Wc)
        return Ro[e] = t[a];
    return e;
  }
  var Pc = na("animationend"), Fc = na("animationiteration"), Ic = na("animationstart"), sg = na("transitionrun"), cg = na("transitionstart"), fg = na("transitioncancel"), ef = na("transitionend"), tf = /* @__PURE__ */ new Map(), Uo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Uo.push("scrollEnd");
  function Gt(e, t) {
    tf.set(e, t), In(t, [e]);
  }
  var Ul = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ut = [], Da = 0, ko = 0;
  function kl() {
    for (var e = Da, t = ko = Da = 0; t < e; ) {
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
      s !== 0 && nf(a, r, s);
    }
  }
  function Yl(e, t, a, l) {
    Ut[Da++] = e, Ut[Da++] = t, Ut[Da++] = a, Ut[Da++] = l, ko |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function Yo(e, t, a, l) {
    return Yl(e, t, a, l), Xl(e);
  }
  function aa(e, t) {
    return Yl(e, null, null, t), Xl(e);
  }
  function nf(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var r = !1, s = e.return; s !== null; )
      s.childLanes |= a, l = s.alternate, l !== null && (l.childLanes |= a), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & 1 || (r = !0)), e = s, s = s.return;
    return e.tag === 3 ? (s = e.stateNode, r && t !== null && (r = 31 - At(a), e = s.hiddenUpdates, l = e[r], l === null ? e[r] = [t] : l.push(t), t.lane = a | 536870912), s) : null;
  }
  function Xl(e) {
    if (50 < Gi)
      throw Gi = 0, Qr = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Za = {};
  function dg(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ot(e, t, a, l) {
    return new dg(e, t, a, l);
  }
  function Xo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ln(e, t) {
    var a = e.alternate;
    return a === null ? (a = Ot(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function af(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Hl(e, t, a, l, r, s) {
    var m = 0;
    if (l = e, typeof e == "function") Xo(e) && (m = 1);
    else if (typeof e == "string")
      m = gy(
        e,
        a,
        J.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Se:
          return e = Ot(31, a, t, r), e.elementType = Se, e.lanes = s, e;
        case q:
          return ia(a.children, r, s, t);
        case X:
          m = 8, r |= 24;
          break;
        case R:
          return e = Ot(12, a, t, r | 2), e.elementType = R, e.lanes = s, e;
        case G:
          return e = Ot(13, a, t, r), e.elementType = G, e.lanes = s, e;
        case ee:
          return e = Ot(19, a, t, r), e.elementType = ee, e.lanes = s, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case V:
                m = 10;
                break e;
              case Q:
                m = 9;
                break e;
              case B:
                m = 11;
                break e;
              case K:
                m = 14;
                break e;
              case ue:
                m = 16, l = null;
                break e;
            }
          m = 29, a = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Ot(m, a, t, r), t.elementType = e, t.type = l, t.lanes = s, t;
  }
  function ia(e, t, a, l) {
    return e = Ot(7, e, l, t), e.lanes = a, e;
  }
  function Ho(e, t, a) {
    return e = Ot(6, e, null, t), e.lanes = a, e;
  }
  function lf(e) {
    var t = Ot(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Bo(e, t, a) {
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
  var uf = /* @__PURE__ */ new WeakMap();
  function kt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = uf.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: ic(t)
      }, uf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: ic(t)
    };
  }
  var Ra = [], Ua = 0, Bl = null, Ei = 0, Yt = [], Xt = 0, wn = null, Pt = 1, Ft = "";
  function un(e, t) {
    Ra[Ua++] = Ei, Ra[Ua++] = Bl, Bl = e, Ei = t;
  }
  function of(e, t, a) {
    Yt[Xt++] = Pt, Yt[Xt++] = Ft, Yt[Xt++] = wn, wn = e;
    var l = Pt;
    e = Ft;
    var r = 32 - At(l) - 1;
    l &= ~(1 << r), a += 1;
    var s = 32 - At(t) + r;
    if (30 < s) {
      var m = r - r % 5;
      s = (l & (1 << m) - 1).toString(32), l >>= m, r -= m, Pt = 1 << 32 - At(t) + r | a << r | l, Ft = s + e;
    } else
      Pt = 1 << s | a << r | l, Ft = e;
  }
  function qo(e) {
    e.return !== null && (un(e, 1), of(e, 1, 0));
  }
  function Vo(e) {
    for (; e === Bl; )
      Bl = Ra[--Ua], Ra[Ua] = null, Ei = Ra[--Ua], Ra[Ua] = null;
    for (; e === wn; )
      wn = Yt[--Xt], Yt[Xt] = null, Ft = Yt[--Xt], Yt[Xt] = null, Pt = Yt[--Xt], Yt[Xt] = null;
  }
  function rf(e, t) {
    Yt[Xt++] = Pt, Yt[Xt++] = Ft, Yt[Xt++] = wn, Pt = t.id, Ft = t.overflow, wn = e;
  }
  var ut = null, Ze = null, be = !1, En = null, Ht = !1, $o = Error(o(519));
  function An(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ai(kt(t, e)), $o;
  }
  function sf(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[lt] = e, t[ht] = l, a) {
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
        for (a = 0; a < Ki.length; a++)
          me(Ki[a], t);
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
        me("invalid", t), Sc(
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
        me("invalid", t);
        break;
      case "textarea":
        me("invalid", t), Tc(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Am(t.textContent, a) ? (l.popover != null && (me("beforetoggle", t), me("toggle", t)), l.onScroll != null && me("scroll", t), l.onScrollEnd != null && me("scrollend", t), l.onClick != null && (t.onclick = nn), t = !0) : t = !1, t || An(e, !0);
  }
  function cf(e) {
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
    if (!be) return cf(e), be = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || rs(e.type, e.memoizedProps)), a = !a), a && Ze && An(e), cf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Ze = Rm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Ze = Rm(e);
    } else
      t === 27 ? (t = Ze, Hn(e.type) ? (e = ms, ms = null, Ze = e) : Ze = t) : Ze = ut ? qt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function la() {
    Ze = ut = null, be = !1;
  }
  function Lo() {
    var e = En;
    return e !== null && (_t === null ? _t = e : _t.push.apply(
      _t,
      e
    ), En = null), e;
  }
  function Ai(e) {
    En === null ? En = [e] : En.push(e);
  }
  var Go = T(null), ua = null, on = null;
  function xn(e, t, a) {
    L(Go, t._currentValue), t._currentValue = a;
  }
  function rn(e) {
    e._currentValue = Go.current, k(Go);
  }
  function Qo(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function Ko(e, t, a, l) {
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
              s.lanes |= a, g = s.alternate, g !== null && (g.lanes |= a), Qo(
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
        m.lanes |= a, s = m.alternate, s !== null && (s.lanes |= a), Qo(m, a, e), m = null;
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
  function Ya(e, t, a, l) {
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
          xt(r.pendingProps.value, m.value) || (e !== null ? e.push(g) : e = [g]);
        }
      } else if (r === ze.current) {
        if (m = r.alternate, m === null) throw Error(o(387));
        m.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(Ii) : e = [Ii]);
      }
      r = r.return;
    }
    e !== null && Ko(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function ql(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!xt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function oa(e) {
    ua = e, on = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ot(e) {
    return ff(ua, e);
  }
  function Vl(e, t) {
    return ua === null && oa(e), ff(e, t);
  }
  function ff(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, on === null) {
      if (e === null) throw Error(o(308));
      on = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else on = on.next = t;
    return a;
  }
  var mg = typeof AbortController < "u" ? AbortController : function() {
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
  }, pg = n.unstable_scheduleCallback, hg = n.unstable_NormalPriority, Je = {
    $$typeof: V,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Jo() {
    return {
      controller: new mg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function xi(e) {
    e.refCount--, e.refCount === 0 && pg(hg, function() {
      e.controller.abort();
    });
  }
  var Oi = null, Wo = 0, Xa = 0, Ha = null;
  function vg(e, t) {
    if (Oi === null) {
      var a = Oi = [];
      Wo = 0, Xa = Ir(), Ha = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return Wo++, t.then(df, df), t;
  }
  function df() {
    if (--Wo === 0 && Oi !== null) {
      Ha !== null && (Ha.status = "fulfilled");
      var e = Oi;
      Oi = null, Xa = 0, Ha = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function gg(e, t) {
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
  var mf = j.S;
  j.S = function(e, t) {
    Wd = wt(), typeof t == "object" && t !== null && typeof t.then == "function" && vg(e, t), mf !== null && mf(e, t);
  };
  var ra = T(null);
  function Po() {
    var e = ra.current;
    return e !== null ? e : De.pooledCache;
  }
  function $l(e, t) {
    t === null ? L(ra, ra.current) : L(ra, t.pool);
  }
  function pf() {
    var e = Po();
    return e === null ? null : { parent: Je._currentValue, pool: e };
  }
  var Ba = Error(o(460)), Fo = Error(o(474)), Ll = Error(o(542)), Gl = { then: function() {
  } };
  function hf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function vf(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(nn, nn), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, yf(e), e;
      default:
        if (typeof t.status == "string") t.then(nn, nn);
        else {
          if (e = De, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, yf(e), e;
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
  function gf() {
    if (ca === null) throw Error(o(459));
    var e = ca;
    return ca = null, e;
  }
  function yf(e) {
    if (e === Ba || e === Ll)
      throw Error(o(483));
  }
  var qa = null, Ci = 0;
  function Ql(e) {
    var t = Ci;
    return Ci += 1, qa === null && (qa = []), vf(qa, e, t);
  }
  function Mi(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Kl(e, t) {
    throw t.$$typeof === E ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function bf(e) {
    function t(w, z) {
      if (e) {
        var x = w.deletions;
        x === null ? (w.deletions = [z], w.flags |= 16) : x.push(z);
      }
    }
    function a(w, z) {
      if (!e) return null;
      for (; z !== null; )
        t(w, z), z = z.sibling;
      return null;
    }
    function l(w) {
      for (var z = /* @__PURE__ */ new Map(); w !== null; )
        w.key !== null ? z.set(w.key, w) : z.set(w.index, w), w = w.sibling;
      return z;
    }
    function r(w, z) {
      return w = ln(w, z), w.index = 0, w.sibling = null, w;
    }
    function s(w, z, x) {
      return w.index = x, e ? (x = w.alternate, x !== null ? (x = x.index, x < z ? (w.flags |= 67108866, z) : x) : (w.flags |= 67108866, z)) : (w.flags |= 1048576, z);
    }
    function m(w) {
      return e && w.alternate === null && (w.flags |= 67108866), w;
    }
    function g(w, z, x, Z) {
      return z === null || z.tag !== 6 ? (z = Ho(x, w.mode, Z), z.return = w, z) : (z = r(z, x), z.return = w, z);
    }
    function b(w, z, x, Z) {
      var F = x.type;
      return F === q ? D(
        w,
        z,
        x.props.children,
        Z,
        x.key
      ) : z !== null && (z.elementType === F || typeof F == "object" && F !== null && F.$$typeof === ue && sa(F) === z.type) ? (z = r(z, x.props), Mi(z, x), z.return = w, z) : (z = Hl(
        x.type,
        x.key,
        x.props,
        null,
        w.mode,
        Z
      ), Mi(z, x), z.return = w, z);
    }
    function O(w, z, x, Z) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== x.containerInfo || z.stateNode.implementation !== x.implementation ? (z = Bo(x, w.mode, Z), z.return = w, z) : (z = r(z, x.children || []), z.return = w, z);
    }
    function D(w, z, x, Z, F) {
      return z === null || z.tag !== 7 ? (z = ia(
        x,
        w.mode,
        Z,
        F
      ), z.return = w, z) : (z = r(z, x), z.return = w, z);
    }
    function Y(w, z, x) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = Ho(
          "" + z,
          w.mode,
          x
        ), z.return = w, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case A:
            return x = Hl(
              z.type,
              z.key,
              z.props,
              null,
              w.mode,
              x
            ), Mi(x, z), x.return = w, x;
          case M:
            return z = Bo(
              z,
              w.mode,
              x
            ), z.return = w, z;
          case ue:
            return z = sa(z), Y(w, z, x);
        }
        if (it(z) || ye(z))
          return z = ia(
            z,
            w.mode,
            x,
            null
          ), z.return = w, z;
        if (typeof z.then == "function")
          return Y(w, Ql(z), x);
        if (z.$$typeof === V)
          return Y(
            w,
            Vl(w, z),
            x
          );
        Kl(w, z);
      }
      return null;
    }
    function C(w, z, x, Z) {
      var F = z !== null ? z.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return F !== null ? null : g(w, z, "" + x, Z);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case A:
            return x.key === F ? b(w, z, x, Z) : null;
          case M:
            return x.key === F ? O(w, z, x, Z) : null;
          case ue:
            return x = sa(x), C(w, z, x, Z);
        }
        if (it(x) || ye(x))
          return F !== null ? null : D(w, z, x, Z, null);
        if (typeof x.then == "function")
          return C(
            w,
            z,
            Ql(x),
            Z
          );
        if (x.$$typeof === V)
          return C(
            w,
            z,
            Vl(w, x),
            Z
          );
        Kl(w, x);
      }
      return null;
    }
    function N(w, z, x, Z, F) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return w = w.get(x) || null, g(z, w, "" + Z, F);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case A:
            return w = w.get(
              Z.key === null ? x : Z.key
            ) || null, b(z, w, Z, F);
          case M:
            return w = w.get(
              Z.key === null ? x : Z.key
            ) || null, O(z, w, Z, F);
          case ue:
            return Z = sa(Z), N(
              w,
              z,
              x,
              Z,
              F
            );
        }
        if (it(Z) || ye(Z))
          return w = w.get(x) || null, D(z, w, Z, F, null);
        if (typeof Z.then == "function")
          return N(
            w,
            z,
            x,
            Ql(Z),
            F
          );
        if (Z.$$typeof === V)
          return N(
            w,
            z,
            x,
            Vl(z, Z),
            F
          );
        Kl(z, Z);
      }
      return null;
    }
    function W(w, z, x, Z) {
      for (var F = null, Te = null, P = z, se = z = 0, he = null; P !== null && se < x.length; se++) {
        P.index > se ? (he = P, P = null) : he = P.sibling;
        var we = C(
          w,
          P,
          x[se],
          Z
        );
        if (we === null) {
          P === null && (P = he);
          break;
        }
        e && P && we.alternate === null && t(w, P), z = s(we, z, se), Te === null ? F = we : Te.sibling = we, Te = we, P = he;
      }
      if (se === x.length)
        return a(w, P), be && un(w, se), F;
      if (P === null) {
        for (; se < x.length; se++)
          P = Y(w, x[se], Z), P !== null && (z = s(
            P,
            z,
            se
          ), Te === null ? F = P : Te.sibling = P, Te = P);
        return be && un(w, se), F;
      }
      for (P = l(P); se < x.length; se++)
        he = N(
          P,
          w,
          se,
          x[se],
          Z
        ), he !== null && (e && he.alternate !== null && P.delete(
          he.key === null ? se : he.key
        ), z = s(
          he,
          z,
          se
        ), Te === null ? F = he : Te.sibling = he, Te = he);
      return e && P.forEach(function(Ln) {
        return t(w, Ln);
      }), be && un(w, se), F;
    }
    function ne(w, z, x, Z) {
      if (x == null) throw Error(o(151));
      for (var F = null, Te = null, P = z, se = z = 0, he = null, we = x.next(); P !== null && !we.done; se++, we = x.next()) {
        P.index > se ? (he = P, P = null) : he = P.sibling;
        var Ln = C(w, P, we.value, Z);
        if (Ln === null) {
          P === null && (P = he);
          break;
        }
        e && P && Ln.alternate === null && t(w, P), z = s(Ln, z, se), Te === null ? F = Ln : Te.sibling = Ln, Te = Ln, P = he;
      }
      if (we.done)
        return a(w, P), be && un(w, se), F;
      if (P === null) {
        for (; !we.done; se++, we = x.next())
          we = Y(w, we.value, Z), we !== null && (z = s(we, z, se), Te === null ? F = we : Te.sibling = we, Te = we);
        return be && un(w, se), F;
      }
      for (P = l(P); !we.done; se++, we = x.next())
        we = N(P, w, se, we.value, Z), we !== null && (e && we.alternate !== null && P.delete(we.key === null ? se : we.key), z = s(we, z, se), Te === null ? F = we : Te.sibling = we, Te = we);
      return e && P.forEach(function(Oy) {
        return t(w, Oy);
      }), be && un(w, se), F;
    }
    function Ne(w, z, x, Z) {
      if (typeof x == "object" && x !== null && x.type === q && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case A:
            e: {
              for (var F = x.key; z !== null; ) {
                if (z.key === F) {
                  if (F = x.type, F === q) {
                    if (z.tag === 7) {
                      a(
                        w,
                        z.sibling
                      ), Z = r(
                        z,
                        x.props.children
                      ), Z.return = w, w = Z;
                      break e;
                    }
                  } else if (z.elementType === F || typeof F == "object" && F !== null && F.$$typeof === ue && sa(F) === z.type) {
                    a(
                      w,
                      z.sibling
                    ), Z = r(z, x.props), Mi(Z, x), Z.return = w, w = Z;
                    break e;
                  }
                  a(w, z);
                  break;
                } else t(w, z);
                z = z.sibling;
              }
              x.type === q ? (Z = ia(
                x.props.children,
                w.mode,
                Z,
                x.key
              ), Z.return = w, w = Z) : (Z = Hl(
                x.type,
                x.key,
                x.props,
                null,
                w.mode,
                Z
              ), Mi(Z, x), Z.return = w, w = Z);
            }
            return m(w);
          case M:
            e: {
              for (F = x.key; z !== null; ) {
                if (z.key === F)
                  if (z.tag === 4 && z.stateNode.containerInfo === x.containerInfo && z.stateNode.implementation === x.implementation) {
                    a(
                      w,
                      z.sibling
                    ), Z = r(z, x.children || []), Z.return = w, w = Z;
                    break e;
                  } else {
                    a(w, z);
                    break;
                  }
                else t(w, z);
                z = z.sibling;
              }
              Z = Bo(x, w.mode, Z), Z.return = w, w = Z;
            }
            return m(w);
          case ue:
            return x = sa(x), Ne(
              w,
              z,
              x,
              Z
            );
        }
        if (it(x))
          return W(
            w,
            z,
            x,
            Z
          );
        if (ye(x)) {
          if (F = ye(x), typeof F != "function") throw Error(o(150));
          return x = F.call(x), ne(
            w,
            z,
            x,
            Z
          );
        }
        if (typeof x.then == "function")
          return Ne(
            w,
            z,
            Ql(x),
            Z
          );
        if (x.$$typeof === V)
          return Ne(
            w,
            z,
            Vl(w, x),
            Z
          );
        Kl(w, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, z !== null && z.tag === 6 ? (a(w, z.sibling), Z = r(z, x), Z.return = w, w = Z) : (a(w, z), Z = Ho(x, w.mode, Z), Z.return = w, w = Z), m(w)) : a(w, z);
    }
    return function(w, z, x, Z) {
      try {
        Ci = 0;
        var F = Ne(
          w,
          z,
          x,
          Z
        );
        return qa = null, F;
      } catch (P) {
        if (P === Ba || P === Ll) throw P;
        var Te = Ot(29, P, null, w.mode);
        return Te.lanes = Z, Te.return = w, Te;
      }
    };
  }
  var fa = bf(!0), _f = bf(!1), On = !1;
  function Io(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function er(e, t) {
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
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Ae & 2) !== 0) {
      var r = l.pending;
      return r === null ? t.next = t : (t.next = r.next, r.next = t), l.pending = t, t = Xl(e), nf(e, null, a), t;
    }
    return Yl(e, l, t, a), Xl(e);
  }
  function Ni(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, cc(e, a);
    }
  }
  function tr(e, t) {
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
  var nr = !1;
  function ji() {
    if (nr) {
      var e = Ha;
      if (e !== null) throw e;
    }
  }
  function Di(e, t, a, l) {
    nr = !1;
    var r = e.updateQueue;
    On = !1;
    var s = r.firstBaseUpdate, m = r.lastBaseUpdate, g = r.shared.pending;
    if (g !== null) {
      r.shared.pending = null;
      var b = g, O = b.next;
      b.next = null, m === null ? s = O : m.next = O, m = b;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, g = D.lastBaseUpdate, g !== m && (g === null ? D.firstBaseUpdate = O : g.next = O, D.lastBaseUpdate = b));
    }
    if (s !== null) {
      var Y = r.baseState;
      m = 0, D = O = b = null, g = s;
      do {
        var C = g.lane & -536870913, N = C !== g.lane;
        if (N ? (pe & C) === C : (l & C) === C) {
          C !== 0 && C === Xa && (nr = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var W = e, ne = g;
            C = t;
            var Ne = a;
            switch (ne.tag) {
              case 1:
                if (W = ne.payload, typeof W == "function") {
                  Y = W.call(Ne, Y, C);
                  break e;
                }
                Y = W;
                break e;
              case 3:
                W.flags = W.flags & -65537 | 128;
              case 0:
                if (W = ne.payload, C = typeof W == "function" ? W.call(Ne, Y, C) : W, C == null) break e;
                Y = S({}, Y, C);
                break e;
              case 2:
                On = !0;
            }
          }
          C = g.callback, C !== null && (e.flags |= 64, N && (e.flags |= 8192), N = r.callbacks, N === null ? r.callbacks = [C] : N.push(C));
        } else
          N = {
            lane: C,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, D === null ? (O = D = N, b = Y) : D = D.next = N, m |= C;
        if (g = g.next, g === null) {
          if (g = r.shared.pending, g === null)
            break;
          N = g, g = N.next, N.next = null, r.lastBaseUpdate = N, r.shared.pending = null;
        }
      } while (!0);
      D === null && (b = Y), r.baseState = b, r.firstBaseUpdate = O, r.lastBaseUpdate = D, s === null && (r.shared.lanes = 0), Rn |= m, e.lanes = m, e.memoizedState = Y;
    }
  }
  function Sf(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function zf(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Sf(a[e], t);
  }
  var Va = T(null), Jl = T(0);
  function Tf(e, t) {
    e = gn, L(Jl, e), L(Va, t), gn = e | t.baseLanes;
  }
  function ar() {
    L(Jl, gn), L(Va, Va.current);
  }
  function ir() {
    gn = Jl.current, k(Va), k(Jl);
  }
  var Ct = T(null), Bt = null;
  function Nn(e) {
    var t = e.alternate;
    L(Ge, Ge.current & 1), L(Ct, e), Bt === null && (t === null || Va.current !== null || t.memoizedState !== null) && (Bt = e);
  }
  function lr(e) {
    L(Ge, Ge.current), L(Ct, e), Bt === null && (Bt = e);
  }
  function wf(e) {
    e.tag === 22 ? (L(Ge, Ge.current), L(Ct, e), Bt === null && (Bt = e)) : jn();
  }
  function jn() {
    L(Ge, Ge.current), L(Ct, Ct.current);
  }
  function Mt(e) {
    k(Ct), Bt === e && (Bt = null), k(Ge);
  }
  var Ge = T(0);
  function Wl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || fs(a) || ds(a)))
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
  var sn = 0, oe = null, Ce = null, We = null, Pl = !1, $a = !1, da = !1, Fl = 0, Zi = 0, La = null, yg = 0;
  function qe() {
    throw Error(o(321));
  }
  function ur(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!xt(e[a], t[a])) return !1;
    return !0;
  }
  function or(e, t, a, l, r, s) {
    return sn = s, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e === null || e.memoizedState === null ? od : zr, da = !1, s = a(l, r), da = !1, $a && (s = Af(
      t,
      a,
      l,
      r
    )), Ef(e), s;
  }
  function Ef(e) {
    j.H = ki;
    var t = Ce !== null && Ce.next !== null;
    if (sn = 0, We = Ce = oe = null, Pl = !1, Zi = 0, La = null, t) throw Error(o(300));
    e === null || Pe || (e = e.dependencies, e !== null && ql(e) && (Pe = !0));
  }
  function Af(e, t, a, l) {
    oe = e;
    var r = 0;
    do {
      if ($a && (La = null), Zi = 0, $a = !1, 25 <= r) throw Error(o(301));
      if (r += 1, We = Ce = null, e.updateQueue != null) {
        var s = e.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      j.H = rd, s = t(a, l);
    } while ($a);
    return s;
  }
  function bg() {
    var e = j.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ri(t) : t, e = e.useState()[0], (Ce !== null ? Ce.memoizedState : null) !== e && (oe.flags |= 1024), t;
  }
  function rr() {
    var e = Fl !== 0;
    return Fl = 0, e;
  }
  function sr(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function cr(e) {
    if (Pl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Pl = !1;
    }
    sn = 0, We = Ce = oe = null, $a = !1, Zi = Fl = 0, La = null;
  }
  function dt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return We === null ? oe.memoizedState = We = e : We = We.next = e, We;
  }
  function Qe() {
    if (Ce === null) {
      var e = oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = We === null ? oe.memoizedState : We.next;
    if (t !== null)
      We = t, Ce = e;
    else {
      if (e === null)
        throw oe.alternate === null ? Error(o(467)) : Error(o(310));
      Ce = e, e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null
      }, We === null ? oe.memoizedState = We = e : We = We.next = e;
    }
    return We;
  }
  function Il() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ri(e) {
    var t = Zi;
    return Zi += 1, La === null && (La = []), e = vf(La, e, t), t = oe, (We === null ? t.memoizedState : We.next) === null && (t = t.alternate, j.H = t === null || t.memoizedState === null ? od : zr), e;
  }
  function eu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ri(e);
      if (e.$$typeof === V) return ot(e);
    }
    throw Error(o(438, String(e)));
  }
  function fr(e) {
    var t = null, a = oe.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = oe.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Il(), oe.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = ve;
    return t.index++, a;
  }
  function cn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function tu(e) {
    var t = Qe();
    return dr(t, Ce, e);
  }
  function dr(e, t, a) {
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
      var g = m = null, b = null, O = t, D = !1;
      do {
        var Y = O.lane & -536870913;
        if (Y !== O.lane ? (pe & Y) === Y : (sn & Y) === Y) {
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
            }), Y === Xa && (D = !0);
          else if ((sn & C) === C) {
            O = O.next, C === Xa && (D = !0);
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
            }, b === null ? (g = b = Y, m = s) : b = b.next = Y, oe.lanes |= C, Rn |= C;
          Y = O.action, da && a(s, Y), s = O.hasEagerState ? O.eagerState : a(s, Y);
        } else
          C = {
            lane: Y,
            revertLane: O.revertLane,
            gesture: O.gesture,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }, b === null ? (g = b = C, m = s) : b = b.next = C, oe.lanes |= Y, Rn |= Y;
        O = O.next;
      } while (O !== null && O !== t);
      if (b === null ? m = s : b.next = g, !xt(s, e.memoizedState) && (Pe = !0, D && (a = Ha, a !== null)))
        throw a;
      e.memoizedState = s, e.baseState = m, e.baseQueue = b, l.lastRenderedState = s;
    }
    return r === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function mr(e) {
    var t = Qe(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, r = a.pending, s = t.memoizedState;
    if (r !== null) {
      a.pending = null;
      var m = r = r.next;
      do
        s = e(s, m.action), m = m.next;
      while (m !== r);
      xt(s, t.memoizedState) || (Pe = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), a.lastRenderedState = s;
    }
    return [s, l];
  }
  function xf(e, t, a) {
    var l = oe, r = Qe(), s = be;
    if (s) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var m = !xt(
      (Ce || r).memoizedState,
      a
    );
    if (m && (r.memoizedState = a, Pe = !0), r = r.queue, vr(Mf.bind(null, l, r, e), [
      e
    ]), r.getSnapshot !== t || m || We !== null && We.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ga(
        9,
        { destroy: void 0 },
        Cf.bind(
          null,
          l,
          r,
          a,
          t
        ),
        null
      ), De === null) throw Error(o(349));
      s || (sn & 127) !== 0 || Of(l, t, a);
    }
    return a;
  }
  function Of(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = oe.updateQueue, t === null ? (t = Il(), oe.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Cf(e, t, a, l) {
    t.value = a, t.getSnapshot = l, Nf(t) && jf(e);
  }
  function Mf(e, t, a) {
    return a(function() {
      Nf(t) && jf(e);
    });
  }
  function Nf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !xt(e, a);
    } catch {
      return !0;
    }
  }
  function jf(e) {
    var t = aa(e, 2);
    t !== null && St(t, e, 2);
  }
  function pr(e) {
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
  function Df(e, t, a, l) {
    return e.baseState = a, dr(
      e,
      Ce,
      typeof l == "function" ? l : cn
    );
  }
  function _g(e, t, a, l, r) {
    if (iu(e)) throw Error(o(485));
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
      j.T !== null ? a(!0) : s.isTransition = !1, l(s), a = t.pending, a === null ? (s.next = t.pending = s, Zf(t, s)) : (s.next = a.next, t.pending = a.next = s);
    }
  }
  function Zf(e, t) {
    var a = t.action, l = t.payload, r = e.state;
    if (t.isTransition) {
      var s = j.T, m = {};
      j.T = m;
      try {
        var g = a(r, l), b = j.S;
        b !== null && b(m, g), Rf(e, t, g);
      } catch (O) {
        hr(e, t, O);
      } finally {
        s !== null && m.types !== null && (s.types = m.types), j.T = s;
      }
    } else
      try {
        s = a(r, l), Rf(e, t, s);
      } catch (O) {
        hr(e, t, O);
      }
  }
  function Rf(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        Uf(e, t, l);
      },
      function(l) {
        return hr(e, t, l);
      }
    ) : Uf(e, t, a);
  }
  function Uf(e, t, a) {
    t.status = "fulfilled", t.value = a, kf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Zf(e, a)));
  }
  function hr(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, kf(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function kf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Yf(e, t) {
    return t;
  }
  function Xf(e, t) {
    if (be) {
      var a = De.formState;
      if (a !== null) {
        e: {
          var l = oe;
          if (be) {
            if (Ze) {
              t: {
                for (var r = Ze, s = Ht; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break t;
                  }
                  if (r = qt(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break t;
                  }
                }
                s = r.data, r = s === "F!" || s === "F" ? r : null;
              }
              if (r) {
                Ze = qt(
                  r.nextSibling
                ), l = r.data === "F!";
                break e;
              }
            }
            An(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = dt(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yf,
      lastRenderedState: t
    }, a.queue = l, a = id.bind(
      null,
      oe,
      l
    ), l.dispatch = a, l = pr(!1), s = Sr.bind(
      null,
      oe,
      !1,
      l.queue
    ), l = dt(), r = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = r, a = _g.bind(
      null,
      oe,
      r,
      s,
      a
    ), r.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function Hf(e) {
    var t = Qe();
    return Bf(t, Ce, e);
  }
  function Bf(e, t, a) {
    if (t = dr(
      e,
      t,
      Yf
    )[0], e = tu(cn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Ri(t);
      } catch (m) {
        throw m === Ba ? Ll : m;
      }
    else l = t;
    t = Qe();
    var r = t.queue, s = r.dispatch;
    return a !== t.memoizedState && (oe.flags |= 2048, Ga(
      9,
      { destroy: void 0 },
      Sg.bind(null, r, a),
      null
    )), [l, s, e];
  }
  function Sg(e, t) {
    e.action = t;
  }
  function qf(e) {
    var t = Qe(), a = Ce;
    if (a !== null)
      return Bf(t, a, e);
    Qe(), t = t.memoizedState, a = Qe();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function Ga(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = oe.updateQueue, t === null && (t = Il(), oe.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Vf() {
    return Qe().memoizedState;
  }
  function nu(e, t, a, l) {
    var r = dt();
    oe.flags |= e, r.memoizedState = Ga(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function au(e, t, a, l) {
    var r = Qe();
    l = l === void 0 ? null : l;
    var s = r.memoizedState.inst;
    Ce !== null && l !== null && ur(l, Ce.memoizedState.deps) ? r.memoizedState = Ga(t, s, a, l) : (oe.flags |= e, r.memoizedState = Ga(
      1 | t,
      s,
      a,
      l
    ));
  }
  function $f(e, t) {
    nu(8390656, 8, e, t);
  }
  function vr(e, t) {
    au(2048, 8, e, t);
  }
  function zg(e) {
    oe.flags |= 4;
    var t = oe.updateQueue;
    if (t === null)
      t = Il(), oe.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Lf(e) {
    var t = Qe().memoizedState;
    return zg({ ref: t, nextImpl: e }), function() {
      if ((Ae & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Gf(e, t) {
    return au(4, 2, e, t);
  }
  function Qf(e, t) {
    return au(4, 4, e, t);
  }
  function Kf(e, t) {
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
  function Jf(e, t, a) {
    a = a != null ? a.concat([e]) : null, au(4, 4, Kf.bind(null, t, e), a);
  }
  function gr() {
  }
  function Wf(e, t) {
    var a = Qe();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && ur(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function Pf(e, t) {
    var a = Qe();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && ur(t, l[1]))
      return l[0];
    if (l = e(), da) {
      Sn(!0);
      try {
        e();
      } finally {
        Sn(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function yr(e, t, a) {
    return a === void 0 || (sn & 1073741824) !== 0 && (pe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Fd(), oe.lanes |= e, Rn |= e, a);
  }
  function Ff(e, t, a, l) {
    return xt(a, t) ? a : Va.current !== null ? (e = yr(e, a, l), xt(e, t) || (Pe = !0), e) : (sn & 42) === 0 || (sn & 1073741824) !== 0 && (pe & 261930) === 0 ? (Pe = !0, e.memoizedState = a) : (e = Fd(), oe.lanes |= e, Rn |= e, t);
  }
  function If(e, t, a, l, r) {
    var s = $.p;
    $.p = s !== 0 && 8 > s ? s : 8;
    var m = j.T, g = {};
    j.T = g, Sr(e, !1, t, a);
    try {
      var b = r(), O = j.S;
      if (O !== null && O(g, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var D = gg(
          b,
          l
        );
        Ui(
          e,
          t,
          D,
          Dt(e)
        );
      } else
        Ui(
          e,
          t,
          l,
          Dt(e)
        );
    } catch (Y) {
      Ui(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Y },
        Dt()
      );
    } finally {
      $.p = s, m !== null && g.types !== null && (m.types = g.types), j.T = m;
    }
  }
  function Tg() {
  }
  function br(e, t, a, l) {
    if (e.tag !== 5) throw Error(o(476));
    var r = ed(e).queue;
    If(
      e,
      r,
      t,
      H,
      a === null ? Tg : function() {
        return td(e), a(l);
      }
    );
  }
  function ed(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: H,
      baseState: H,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cn,
        lastRenderedState: H
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
  function td(e) {
    var t = ed(e);
    t.next === null && (t = e.alternate.memoizedState), Ui(
      e,
      t.next.queue,
      {},
      Dt()
    );
  }
  function _r() {
    return ot(Ii);
  }
  function nd() {
    return Qe().memoizedState;
  }
  function ad() {
    return Qe().memoizedState;
  }
  function wg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Dt();
          e = Cn(a);
          var l = Mn(t, e, a);
          l !== null && (St(l, t, a), Ni(l, t, a)), t = { cache: Jo() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Eg(e, t, a) {
    var l = Dt();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, iu(e) ? ld(t, a) : (a = Yo(e, t, a, l), a !== null && (St(a, e, l), ud(a, t, l)));
  }
  function id(e, t, a) {
    var l = Dt();
    Ui(e, t, a, l);
  }
  function Ui(e, t, a, l) {
    var r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (iu(e)) ld(t, r);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null))
        try {
          var m = t.lastRenderedState, g = s(m, a);
          if (r.hasEagerState = !0, r.eagerState = g, xt(g, m))
            return Yl(e, t, r, 0), De === null && kl(), !1;
        } catch {
        }
      if (a = Yo(e, t, r, l), a !== null)
        return St(a, e, l), ud(a, t, l), !0;
    }
    return !1;
  }
  function Sr(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: Ir(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, iu(e)) {
      if (t) throw Error(o(479));
    } else
      t = Yo(
        e,
        a,
        l,
        2
      ), t !== null && St(t, e, 2);
  }
  function iu(e) {
    var t = e.alternate;
    return e === oe || t !== null && t === oe;
  }
  function ld(e, t) {
    $a = Pl = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function ud(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, cc(e, a);
    }
  }
  var ki = {
    readContext: ot,
    use: eu,
    useCallback: qe,
    useContext: qe,
    useEffect: qe,
    useImperativeHandle: qe,
    useLayoutEffect: qe,
    useInsertionEffect: qe,
    useMemo: qe,
    useReducer: qe,
    useRef: qe,
    useState: qe,
    useDebugValue: qe,
    useDeferredValue: qe,
    useTransition: qe,
    useSyncExternalStore: qe,
    useId: qe,
    useHostTransitionStatus: qe,
    useFormState: qe,
    useActionState: qe,
    useOptimistic: qe,
    useMemoCache: qe,
    useCacheRefresh: qe
  };
  ki.useEffectEvent = qe;
  var od = {
    readContext: ot,
    use: eu,
    useCallback: function(e, t) {
      return dt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ot,
    useEffect: $f,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, nu(
        4194308,
        4,
        Kf.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return nu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      nu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = dt();
      t = t === void 0 ? null : t;
      var l = e();
      if (da) {
        Sn(!0);
        try {
          e();
        } finally {
          Sn(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = dt();
      if (a !== void 0) {
        var r = a(t);
        if (da) {
          Sn(!0);
          try {
            a(t);
          } finally {
            Sn(!1);
          }
        }
      } else r = t;
      return l.memoizedState = l.baseState = r, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: r
      }, l.queue = e, e = e.dispatch = Eg.bind(
        null,
        oe,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = dt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = pr(e);
      var t = e.queue, a = id.bind(null, oe, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: gr,
    useDeferredValue: function(e, t) {
      var a = dt();
      return yr(a, e, t);
    },
    useTransition: function() {
      var e = pr(!1);
      return e = If.bind(
        null,
        oe,
        e.queue,
        !0,
        !1
      ), dt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = oe, r = dt();
      if (be) {
        if (a === void 0)
          throw Error(o(407));
        a = a();
      } else {
        if (a = t(), De === null)
          throw Error(o(349));
        (pe & 127) !== 0 || Of(l, t, a);
      }
      r.memoizedState = a;
      var s = { value: a, getSnapshot: t };
      return r.queue = s, $f(Mf.bind(null, l, s, e), [
        e
      ]), l.flags |= 2048, Ga(
        9,
        { destroy: void 0 },
        Cf.bind(
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
      var e = dt(), t = De.identifierPrefix;
      if (be) {
        var a = Ft, l = Pt;
        a = (l & ~(1 << 32 - At(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Fl++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = yg++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: _r,
    useFormState: Xf,
    useActionState: Xf,
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
      return t.queue = a, t = Sr.bind(
        null,
        oe,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: fr,
    useCacheRefresh: function() {
      return dt().memoizedState = wg.bind(
        null,
        oe
      );
    },
    useEffectEvent: function(e) {
      var t = dt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Ae & 2) !== 0)
          throw Error(o(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, zr = {
    readContext: ot,
    use: eu,
    useCallback: Wf,
    useContext: ot,
    useEffect: vr,
    useImperativeHandle: Jf,
    useInsertionEffect: Gf,
    useLayoutEffect: Qf,
    useMemo: Pf,
    useReducer: tu,
    useRef: Vf,
    useState: function() {
      return tu(cn);
    },
    useDebugValue: gr,
    useDeferredValue: function(e, t) {
      var a = Qe();
      return Ff(
        a,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = tu(cn)[0], t = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ri(e),
        t
      ];
    },
    useSyncExternalStore: xf,
    useId: nd,
    useHostTransitionStatus: _r,
    useFormState: Hf,
    useActionState: Hf,
    useOptimistic: function(e, t) {
      var a = Qe();
      return Df(a, Ce, e, t);
    },
    useMemoCache: fr,
    useCacheRefresh: ad
  };
  zr.useEffectEvent = Lf;
  var rd = {
    readContext: ot,
    use: eu,
    useCallback: Wf,
    useContext: ot,
    useEffect: vr,
    useImperativeHandle: Jf,
    useInsertionEffect: Gf,
    useLayoutEffect: Qf,
    useMemo: Pf,
    useReducer: mr,
    useRef: Vf,
    useState: function() {
      return mr(cn);
    },
    useDebugValue: gr,
    useDeferredValue: function(e, t) {
      var a = Qe();
      return Ce === null ? yr(a, e, t) : Ff(
        a,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = mr(cn)[0], t = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ri(e),
        t
      ];
    },
    useSyncExternalStore: xf,
    useId: nd,
    useHostTransitionStatus: _r,
    useFormState: qf,
    useActionState: qf,
    useOptimistic: function(e, t) {
      var a = Qe();
      return Ce !== null ? Df(a, Ce, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: fr,
    useCacheRefresh: ad
  };
  rd.useEffectEvent = Lf;
  function Tr(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : S({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var wr = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Dt(), r = Cn(l);
      r.payload = t, a != null && (r.callback = a), t = Mn(e, r, l), t !== null && (St(t, e, l), Ni(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Dt(), r = Cn(l);
      r.tag = 1, r.payload = t, a != null && (r.callback = a), t = Mn(e, r, l), t !== null && (St(t, e, l), Ni(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Dt(), l = Cn(a);
      l.tag = 2, t != null && (l.callback = t), t = Mn(e, l, a), t !== null && (St(t, e, a), Ni(t, e, a));
    }
  };
  function sd(e, t, a, l, r, s, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, s, m) : t.prototype && t.prototype.isPureReactComponent ? !Ti(a, l) || !Ti(r, s) : !0;
  }
  function cd(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && wr.enqueueReplaceState(t, t.state, null);
  }
  function ma(e, t) {
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
  function fd(e) {
    Ul(e);
  }
  function dd(e) {
    console.error(e);
  }
  function md(e) {
    Ul(e);
  }
  function lu(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function pd(e, t, a) {
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
  function Er(e, t, a) {
    return a = Cn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      lu(e, t);
    }, a;
  }
  function hd(e) {
    return e = Cn(e), e.tag = 3, e;
  }
  function vd(e, t, a, l) {
    var r = a.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = l.value;
      e.payload = function() {
        return r(s);
      }, e.callback = function() {
        pd(t, a, l);
      };
    }
    var m = a.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
      pd(t, a, l), typeof r != "function" && (Un === null ? Un = /* @__PURE__ */ new Set([this]) : Un.add(this));
      var g = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function Ag(e, t, a, l, r) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Ya(
        t,
        a,
        r,
        !0
      ), a = Ct.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Bt === null ? gu() : a.alternate === null && Ve === 0 && (Ve = 3), a.flags &= -257, a.flags |= 65536, a.lanes = r, l === Gl ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Wr(e, l, r)), !1;
          case 22:
            return a.flags |= 65536, l === Gl ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), Wr(e, l, r)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return Wr(e, l, r), gu(), !1;
    }
    if (be)
      return t = Ct.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = r, l !== $o && (e = Error(o(422), { cause: l }), Ai(kt(e, a)))) : (l !== $o && (t = Error(o(423), {
        cause: l
      }), Ai(
        kt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, r &= -r, e.lanes |= r, l = kt(l, a), r = Er(
        e.stateNode,
        l,
        r
      ), tr(e, r), Ve !== 4 && (Ve = 2)), !1;
    var s = Error(o(520), { cause: l });
    if (s = kt(s, a), Li === null ? Li = [s] : Li.push(s), Ve !== 4 && (Ve = 2), t === null) return !0;
    l = kt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = r & -r, a.lanes |= e, e = Er(a.stateNode, l, e), tr(a, e), !1;
        case 1:
          if (t = a.type, s = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Un === null || !Un.has(s))))
            return a.flags |= 65536, r &= -r, a.lanes |= r, r = hd(r), vd(
              r,
              e,
              a,
              l
            ), tr(a, r), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Ar = Error(o(461)), Pe = !1;
  function rt(e, t, a, l) {
    t.child = e === null ? _f(t, null, a, l) : fa(
      t,
      e.child,
      a,
      l
    );
  }
  function gd(e, t, a, l, r) {
    a = a.render;
    var s = t.ref;
    if ("ref" in l) {
      var m = {};
      for (var g in l)
        g !== "ref" && (m[g] = l[g]);
    } else m = l;
    return oa(t), l = or(
      e,
      t,
      a,
      m,
      s,
      r
    ), g = rr(), e !== null && !Pe ? (sr(e, t, r), fn(e, t, r)) : (be && g && qo(t), t.flags |= 1, rt(e, t, l, r), t.child);
  }
  function yd(e, t, a, l, r) {
    if (e === null) {
      var s = a.type;
      return typeof s == "function" && !Xo(s) && s.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = s, bd(
        e,
        t,
        s,
        l,
        r
      )) : (e = Hl(
        a.type,
        null,
        l,
        t,
        t.mode,
        r
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, !Zr(e, r)) {
      var m = s.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ti, a(m, l) && e.ref === t.ref)
        return fn(e, t, r);
    }
    return t.flags |= 1, e = ln(s, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function bd(e, t, a, l, r) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Ti(s, l) && e.ref === t.ref)
        if (Pe = !1, t.pendingProps = l = s, Zr(e, r))
          (e.flags & 131072) !== 0 && (Pe = !0);
        else
          return t.lanes = e.lanes, fn(e, t, r);
    }
    return xr(
      e,
      t,
      a,
      l,
      r
    );
  }
  function _d(e, t, a, l) {
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
        return Sd(
          e,
          t,
          s,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && $l(
          t,
          s !== null ? s.cachePool : null
        ), s !== null ? Tf(t, s) : ar(), wf(t);
      else
        return l = t.lanes = 536870912, Sd(
          e,
          t,
          s !== null ? s.baseLanes | a : a,
          a,
          l
        );
    } else
      s !== null ? ($l(t, s.cachePool), Tf(t, s), jn(), t.memoizedState = null) : (e !== null && $l(t, null), ar(), jn());
    return rt(e, t, r, a), t.child;
  }
  function Yi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Sd(e, t, a, l, r) {
    var s = Po();
    return s = s === null ? null : { parent: Je._currentValue, pool: s }, t.memoizedState = {
      baseLanes: a,
      cachePool: s
    }, e !== null && $l(t, null), ar(), wf(t), e !== null && Ya(e, t, l, !0), t.childLanes = r, null;
  }
  function uu(e, t) {
    return t = ru(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function zd(e, t, a) {
    return fa(t, e.child, null, a), e = uu(t, t.pendingProps), e.flags |= 2, Mt(t), t.memoizedState = null, e;
  }
  function xg(e, t, a) {
    var l = t.pendingProps, r = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (be) {
        if (l.mode === "hidden")
          return e = uu(t, l), t.lanes = 536870912, Yi(null, e);
        if (lr(t), (e = Ze) ? (e = Zm(
          e,
          Ht
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: wn !== null ? { id: Pt, overflow: Ft } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = lf(e), a.return = t, t.child = a, ut = t, Ze = null)) : e = null, e === null) throw An(t);
        return t.lanes = 536870912, null;
      }
      return uu(t, l);
    }
    var s = e.memoizedState;
    if (s !== null) {
      var m = s.dehydrated;
      if (lr(t), r)
        if (t.flags & 256)
          t.flags &= -257, t = zd(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Pe || Ya(e, t, a, !1), r = (a & e.childLanes) !== 0, Pe || r) {
        if (l = De, l !== null && (m = fc(l, a), m !== 0 && m !== s.retryLane))
          throw s.retryLane = m, aa(e, m), St(l, e, m), Ar;
        gu(), t = zd(
          e,
          t,
          a
        );
      } else
        e = s.treeContext, Ze = qt(m.nextSibling), ut = t, be = !0, En = null, Ht = !1, e !== null && rf(t, e), t = uu(t, l), t.flags |= 4096;
      return t;
    }
    return e = ln(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function ou(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function xr(e, t, a, l, r) {
    return oa(t), a = or(
      e,
      t,
      a,
      l,
      void 0,
      r
    ), l = rr(), e !== null && !Pe ? (sr(e, t, r), fn(e, t, r)) : (be && l && qo(t), t.flags |= 1, rt(e, t, a, r), t.child);
  }
  function Td(e, t, a, l, r, s) {
    return oa(t), t.updateQueue = null, a = Af(
      t,
      l,
      a,
      r
    ), Ef(e), l = rr(), e !== null && !Pe ? (sr(e, t, s), fn(e, t, s)) : (be && l && qo(t), t.flags |= 1, rt(e, t, a, s), t.child);
  }
  function wd(e, t, a, l, r) {
    if (oa(t), t.stateNode === null) {
      var s = Za, m = a.contextType;
      typeof m == "object" && m !== null && (s = ot(m)), s = new a(l, s), t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = wr, t.stateNode = s, s._reactInternals = t, s = t.stateNode, s.props = l, s.state = t.memoizedState, s.refs = {}, Io(t), m = a.contextType, s.context = typeof m == "object" && m !== null ? ot(m) : Za, s.state = t.memoizedState, m = a.getDerivedStateFromProps, typeof m == "function" && (Tr(
        t,
        a,
        m,
        l
      ), s.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (m = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), m !== s.state && wr.enqueueReplaceState(s, s.state, null), Di(t, l, s, r), ji(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      s = t.stateNode;
      var g = t.memoizedProps, b = ma(a, g);
      s.props = b;
      var O = s.context, D = a.contextType;
      m = Za, typeof D == "object" && D !== null && (m = ot(D));
      var Y = a.getDerivedStateFromProps;
      D = typeof Y == "function" || typeof s.getSnapshotBeforeUpdate == "function", g = t.pendingProps !== g, D || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g || O !== m) && cd(
        t,
        s,
        l,
        m
      ), On = !1;
      var C = t.memoizedState;
      s.state = C, Di(t, l, s, r), ji(), O = t.memoizedState, g || C !== O || On ? (typeof Y == "function" && (Tr(
        t,
        a,
        Y,
        l
      ), O = t.memoizedState), (b = On || sd(
        t,
        a,
        b,
        l,
        C,
        O,
        m
      )) ? (D || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = O), s.props = l, s.state = O, s.context = m, l = b) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      s = t.stateNode, er(e, t), m = t.memoizedProps, D = ma(a, m), s.props = D, Y = t.pendingProps, C = s.context, O = a.contextType, b = Za, typeof O == "object" && O !== null && (b = ot(O)), g = a.getDerivedStateFromProps, (O = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== Y || C !== b) && cd(
        t,
        s,
        l,
        b
      ), On = !1, C = t.memoizedState, s.state = C, Di(t, l, s, r), ji();
      var N = t.memoizedState;
      m !== Y || C !== N || On || e !== null && e.dependencies !== null && ql(e.dependencies) ? (typeof g == "function" && (Tr(
        t,
        a,
        g,
        l
      ), N = t.memoizedState), (D = On || sd(
        t,
        a,
        D,
        l,
        C,
        N,
        b
      ) || e !== null && e.dependencies !== null && ql(e.dependencies)) ? (O || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(l, N, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        l,
        N,
        b
      )), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = N), s.props = l, s.state = N, s.context = b, l = D) : (typeof s.componentDidUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return s = l, ou(e, t), l = (t.flags & 128) !== 0, s || l ? (s = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : s.render(), t.flags |= 1, e !== null && l ? (t.child = fa(
      t,
      e.child,
      null,
      r
    ), t.child = fa(
      t,
      null,
      a,
      r
    )) : rt(e, t, a, r), t.memoizedState = s.state, e = t.child) : e = fn(
      e,
      t,
      r
    ), e;
  }
  function Ed(e, t, a, l) {
    return la(), t.flags |= 256, rt(e, t, a, l), t.child;
  }
  var Or = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Cr(e) {
    return { baseLanes: e, cachePool: pf() };
  }
  function Mr(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= jt), e;
  }
  function Ad(e, t, a) {
    var l = t.pendingProps, r = !1, s = (t.flags & 128) !== 0, m;
    if ((m = s) || (m = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0), m && (r = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (be) {
        if (r ? Nn(t) : jn(), (e = Ze) ? (e = Zm(
          e,
          Ht
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: wn !== null ? { id: Pt, overflow: Ft } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = lf(e), a.return = t, t.child = a, ut = t, Ze = null)) : e = null, e === null) throw An(t);
        return ds(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var g = l.children;
      return l = l.fallback, r ? (jn(), r = t.mode, g = ru(
        { mode: "hidden", children: g },
        r
      ), l = ia(
        l,
        r,
        a,
        null
      ), g.return = t, l.return = t, g.sibling = l, t.child = g, l = t.child, l.memoizedState = Cr(a), l.childLanes = Mr(
        e,
        m,
        a
      ), t.memoizedState = Or, Yi(null, l)) : (Nn(t), Nr(t, g));
    }
    var b = e.memoizedState;
    if (b !== null && (g = b.dehydrated, g !== null)) {
      if (s)
        t.flags & 256 ? (Nn(t), t.flags &= -257, t = jr(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (jn(), t.child = e.child, t.flags |= 128, t = null) : (jn(), g = l.fallback, r = t.mode, l = ru(
          { mode: "visible", children: l.children },
          r
        ), g = ia(
          g,
          r,
          a,
          null
        ), g.flags |= 2, l.return = t, g.return = t, l.sibling = g, t.child = l, fa(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = Cr(a), l.childLanes = Mr(
          e,
          m,
          a
        ), t.memoizedState = Or, t = Yi(null, l));
      else if (Nn(t), ds(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var O = m.dgst;
        m = O, l = Error(o(419)), l.stack = "", l.digest = m, Ai({ value: l, source: null, stack: null }), t = jr(
          e,
          t,
          a
        );
      } else if (Pe || Ya(e, t, a, !1), m = (a & e.childLanes) !== 0, Pe || m) {
        if (m = De, m !== null && (l = fc(m, a), l !== 0 && l !== b.retryLane))
          throw b.retryLane = l, aa(e, l), St(m, e, l), Ar;
        fs(g) || gu(), t = jr(
          e,
          t,
          a
        );
      } else
        fs(g) ? (t.flags |= 192, t.child = e.child, t = null) : (e = b.treeContext, Ze = qt(
          g.nextSibling
        ), ut = t, be = !0, En = null, Ht = !1, e !== null && rf(t, e), t = Nr(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return r ? (jn(), g = l.fallback, r = t.mode, b = e.child, O = b.sibling, l = ln(b, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = b.subtreeFlags & 65011712, O !== null ? g = ln(
      O,
      g
    ) : (g = ia(
      g,
      r,
      a,
      null
    ), g.flags |= 2), g.return = t, l.return = t, l.sibling = g, t.child = l, Yi(null, l), l = t.child, g = e.child.memoizedState, g === null ? g = Cr(a) : (r = g.cachePool, r !== null ? (b = Je._currentValue, r = r.parent !== b ? { parent: b, pool: b } : r) : r = pf(), g = {
      baseLanes: g.baseLanes | a,
      cachePool: r
    }), l.memoizedState = g, l.childLanes = Mr(
      e,
      m,
      a
    ), t.memoizedState = Or, Yi(e.child, l)) : (Nn(t), a = e.child, e = a.sibling, a = ln(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (m = t.deletions, m === null ? (t.deletions = [e], t.flags |= 16) : m.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function Nr(e, t) {
    return t = ru(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function ru(e, t) {
    return e = Ot(22, e, null, t), e.lanes = 0, e;
  }
  function jr(e, t, a) {
    return fa(t, e.child, null, a), e = Nr(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function xd(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Qo(e.return, t, a);
  }
  function Dr(e, t, a, l, r, s) {
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
  function Od(e, t, a) {
    var l = t.pendingProps, r = l.revealOrder, s = l.tail;
    l = l.children;
    var m = Ge.current, g = (m & 2) !== 0;
    if (g ? (m = m & 1 | 2, t.flags |= 128) : m &= 1, L(Ge, m), rt(e, t, l, a), l = be ? Ei : 0, !g && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && xd(e, a, t);
        else if (e.tag === 19)
          xd(e, a, t);
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
          e = a.alternate, e !== null && Wl(e) === null && (r = a), a = a.sibling;
        a = r, a === null ? (r = t.child, t.child = null) : (r = a.sibling, a.sibling = null), Dr(
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
          if (e = r.alternate, e !== null && Wl(e) === null) {
            t.child = r;
            break;
          }
          e = r.sibling, r.sibling = a, a = r, r = e;
        }
        Dr(
          t,
          !0,
          a,
          null,
          s,
          l
        );
        break;
      case "together":
        Dr(
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
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, a = ln(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = ln(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Zr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ql(e)));
  }
  function Og(e, t, a) {
    switch (t.tag) {
      case 3:
        tt(t, t.stateNode.containerInfo), xn(t, Je, e.memoizedState.cache), la();
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
          return t.flags |= 128, lr(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Nn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Ad(e, t, a) : (Nn(t), e = fn(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Nn(t);
        break;
      case 19:
        var r = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (Ya(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), r) {
          if (l)
            return Od(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (r = t.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), L(Ge, Ge.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, _d(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        xn(t, Je, e.memoizedState.cache);
    }
    return fn(e, t, a);
  }
  function Cd(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Pe = !0;
      else {
        if (!Zr(e, a) && (t.flags & 128) === 0)
          return Pe = !1, Og(
            e,
            t,
            a
          );
        Pe = (e.flags & 131072) !== 0;
      }
    else
      Pe = !1, be && (t.flags & 1048576) !== 0 && of(t, Ei, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = sa(t.elementType), t.type = e, typeof e == "function")
            Xo(e) ? (l = ma(e, l), t.tag = 1, t = wd(
              null,
              t,
              e,
              l,
              a
            )) : (t.tag = 0, t = xr(
              null,
              t,
              e,
              l,
              a
            ));
          else {
            if (e != null) {
              var r = e.$$typeof;
              if (r === B) {
                t.tag = 11, t = gd(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (r === K) {
                t.tag = 14, t = yd(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              }
            }
            throw t = Ke(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return xr(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, r = ma(
          l,
          t.pendingProps
        ), wd(
          e,
          t,
          l,
          r,
          a
        );
      case 3:
        e: {
          if (tt(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = t.pendingProps;
          var s = t.memoizedState;
          r = s.element, er(e, t), Di(t, l, null, a);
          var m = t.memoizedState;
          if (l = m.cache, xn(t, Je, l), l !== s.cache && Ko(
            t,
            [Je],
            a,
            !0
          ), ji(), l = m.element, s.isDehydrated)
            if (s = {
              element: l,
              isDehydrated: !1,
              cache: m.cache
            }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              t = Ed(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== r) {
              r = kt(
                Error(o(424)),
                t
              ), Ai(r), t = Ed(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ze = qt(e.firstChild), ut = t, be = !0, En = null, Ht = !0, a = _f(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (la(), l === r) {
              t = fn(
                e,
                t,
                a
              );
              break e;
            }
            rt(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return ou(e, t), e === null ? (a = Hm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : be || (a = t.type, e = t.pendingProps, l = wu(
          ce.current
        ).createElement(a), l[lt] = t, l[ht] = e, st(l, a, e), nt(l), t.stateNode = l) : t.memoizedState = Hm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return _n(t), e === null && be && (l = t.stateNode = km(
          t.type,
          t.pendingProps,
          ce.current
        ), ut = t, Ht = !0, r = Ze, Hn(t.type) ? (ms = r, Ze = qt(l.firstChild)) : Ze = r), rt(
          e,
          t,
          t.pendingProps.children,
          a
        ), ou(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && be && ((r = l = Ze) && (l = iy(
          l,
          t.type,
          t.pendingProps,
          Ht
        ), l !== null ? (t.stateNode = l, ut = t, Ze = qt(l.firstChild), Ht = !1, r = !0) : r = !1), r || An(t)), _n(t), r = t.type, s = t.pendingProps, m = e !== null ? e.memoizedProps : null, l = s.children, rs(r, s) ? l = null : m !== null && rs(r, m) && (t.flags |= 32), t.memoizedState !== null && (r = or(
          e,
          t,
          bg,
          null,
          null,
          a
        ), Ii._currentValue = r), ou(e, t), rt(e, t, l, a), t.child;
      case 6:
        return e === null && be && ((e = a = Ze) && (a = ly(
          a,
          t.pendingProps,
          Ht
        ), a !== null ? (t.stateNode = a, ut = t, Ze = null, e = !0) : e = !1), e || An(t)), null;
      case 13:
        return Ad(e, t, a);
      case 4:
        return tt(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = fa(
          t,
          null,
          l,
          a
        ) : rt(e, t, l, a), t.child;
      case 11:
        return gd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return rt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return rt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return rt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, xn(t, t.type, l.value), rt(e, t, l.children, a), t.child;
      case 9:
        return r = t.type._context, l = t.pendingProps.children, oa(t), r = ot(r), l = l(r), t.flags |= 1, rt(e, t, l, a), t.child;
      case 14:
        return yd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return bd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Od(e, t, a);
      case 31:
        return xg(e, t, a);
      case 22:
        return _d(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return oa(t), l = ot(Je), e === null ? (r = Po(), r === null && (r = De, s = Jo(), r.pooledCache = s, s.refCount++, s !== null && (r.pooledCacheLanes |= a), r = s), t.memoizedState = { parent: l, cache: r }, Io(t), xn(t, Je, r)) : ((e.lanes & a) !== 0 && (er(e, t), Di(t, null, null, a), ji()), r = e.memoizedState, s = t.memoizedState, r.parent !== l ? (r = { parent: l, cache: l }, t.memoizedState = r, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r), xn(t, Je, l)) : (l = s.cache, xn(t, Je, l), l !== r.cache && Ko(
          t,
          [Je],
          a,
          !0
        ))), rt(
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
  function dn(e) {
    e.flags |= 4;
  }
  function Rr(e, t, a, l, r) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (r & 335544128) === r)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (nm()) e.flags |= 8192;
        else
          throw ca = Gl, Fo;
    } else e.flags &= -16777217;
  }
  function Md(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Lm(t))
      if (nm()) e.flags |= 8192;
      else
        throw ca = Gl, Fo;
  }
  function su(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? rc() : 536870912, e.lanes |= t, Wa |= t);
  }
  function Xi(e, t) {
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
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t)
      for (var r = e.child; r !== null; )
        a |= r.lanes | r.childLanes, l |= r.subtreeFlags & 65011712, l |= r.flags & 65011712, r.return = e, r = r.sibling;
    else
      for (r = e.child; r !== null; )
        a |= r.lanes | r.childLanes, l |= r.subtreeFlags, l |= r.flags, r.return = e, r = r.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function Cg(e, t, a) {
    var l = t.pendingProps;
    switch (Vo(t), t.tag) {
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
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), rn(Je), ke(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (ka(t) ? dn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Lo())), Re(t), null;
      case 26:
        var r = t.type, s = t.memoizedState;
        return e === null ? (dn(t), s !== null ? (Re(t), Md(t, s)) : (Re(t), Rr(
          t,
          r,
          null,
          l,
          a
        ))) : s ? s !== e.memoizedState ? (dn(t), Re(t), Md(t, s)) : (Re(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && dn(t), Re(t), Rr(
          t,
          r,
          e,
          l,
          a
        )), null;
      case 27:
        if (Pn(t), a = ce.current, r = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && dn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Re(t), null;
          }
          e = J.current, ka(t) ? sf(t) : (e = km(r, l, a), t.stateNode = e, dn(t));
        }
        return Re(t), null;
      case 5:
        if (Pn(t), r = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && dn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Re(t), null;
          }
          if (s = J.current, ka(t))
            sf(t);
          else {
            var m = wu(
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
            s[lt] = t, s[ht] = l;
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
            e: switch (st(s, r, l), r) {
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
            l && dn(t);
          }
        }
        return Re(t), Rr(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && dn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = ce.current, ka(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, r = ut, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  l = r.memoizedProps;
              }
            e[lt] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Am(e.nodeValue, a)), e || An(t, !0);
          } else
            e = wu(e).createTextNode(
              l
            ), e[lt] = t, t.stateNode = e;
        }
        return Re(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = ka(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[lt] = t;
            } else
              la(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Re(t), e = !1;
          } else
            a = Lo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Mt(t), t) : (Mt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Re(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (r = ka(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!r) throw Error(o(318));
              if (r = t.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(o(317));
              r[lt] = t;
            } else
              la(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Re(t), r = !1;
          } else
            r = Lo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return t.flags & 256 ? (Mt(t), t) : (Mt(t), null);
        }
        return Mt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, r = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (r = l.alternate.memoizedState.cachePool.pool), s = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (s = l.memoizedState.cachePool.pool), s !== r && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), su(t, t.updateQueue), Re(t), null);
      case 4:
        return ke(), e === null && as(t.stateNode.containerInfo), Re(t), null;
      case 10:
        return rn(t.type), Re(t), null;
      case 19:
        if (k(Ge), l = t.memoizedState, l === null) return Re(t), null;
        if (r = (t.flags & 128) !== 0, s = l.rendering, s === null)
          if (r) Xi(l, !1);
          else {
            if (Ve !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (s = Wl(e), s !== null) {
                  for (t.flags |= 128, Xi(l, !1), e = s.updateQueue, t.updateQueue = e, su(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    af(a, e), a = a.sibling;
                  return L(
                    Ge,
                    Ge.current & 1 | 2
                  ), be && un(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && wt() > pu && (t.flags |= 128, r = !0, Xi(l, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = Wl(s), e !== null) {
              if (t.flags |= 128, r = !0, e = e.updateQueue, t.updateQueue = e, su(t, e), Xi(l, !0), l.tail === null && l.tailMode === "hidden" && !s.alternate && !be)
                return Re(t), null;
            } else
              2 * wt() - l.renderingStartTime > pu && a !== 536870912 && (t.flags |= 128, r = !0, Xi(l, !1), t.lanes = 4194304);
          l.isBackwards ? (s.sibling = t.child, t.child = s) : (e = l.last, e !== null ? e.sibling = s : t.child = s, l.last = s);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = wt(), e.sibling = null, a = Ge.current, L(
          Ge,
          r ? a & 1 | 2 : a & 1
        ), be && un(t, l.treeForkCount), e) : (Re(t), null);
      case 22:
      case 23:
        return Mt(t), ir(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t), a = t.updateQueue, a !== null && su(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && k(ra), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), rn(Je), Re(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Mg(e, t) {
    switch (Vo(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return rn(Je), ke(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Pn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Mt(t), t.alternate === null)
            throw Error(o(340));
          la();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Mt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          la();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return k(Ge), null;
      case 4:
        return ke(), null;
      case 10:
        return rn(t.type), null;
      case 22:
      case 23:
        return Mt(t), ir(), e !== null && k(ra), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return rn(Je), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Nd(e, t) {
    switch (Vo(t), t.tag) {
      case 3:
        rn(Je), ke();
        break;
      case 26:
      case 27:
      case 5:
        Pn(t);
        break;
      case 4:
        ke();
        break;
      case 31:
        t.memoizedState !== null && Mt(t);
        break;
      case 13:
        Mt(t);
        break;
      case 19:
        k(Ge);
        break;
      case 10:
        rn(t.type);
        break;
      case 22:
      case 23:
        Mt(t), ir(), e !== null && k(ra);
        break;
      case 24:
        rn(Je);
    }
  }
  function Hi(e, t) {
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
      Oe(t, t.return, g);
    }
  }
  function Dn(e, t, a) {
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
              } catch (D) {
                Oe(
                  r,
                  b,
                  D
                );
              }
            }
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (D) {
      Oe(t, t.return, D);
    }
  }
  function jd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        zf(t, a);
      } catch (l) {
        Oe(e, e.return, l);
      }
    }
  }
  function Dd(e, t, a) {
    a.props = ma(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      Oe(e, t, l);
    }
  }
  function Bi(e, t) {
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
      Oe(e, t, r);
    }
  }
  function It(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (r) {
          Oe(e, t, r);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (r) {
          Oe(e, t, r);
        }
      else a.current = null;
  }
  function Zd(e) {
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
      Oe(e, e.return, r);
    }
  }
  function Ur(e, t, a) {
    try {
      var l = e.stateNode;
      Fg(l, e.type, a, t), l[ht] = t;
    } catch (r) {
      Oe(e, e.return, r);
    }
  }
  function Rd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hn(e.type) || e.tag === 4;
  }
  function kr(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Rd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Hn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Yr(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = nn));
    else if (l !== 4 && (l === 27 && Hn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (Yr(e, t, a), e = e.sibling; e !== null; )
        Yr(e, t, a), e = e.sibling;
  }
  function cu(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Hn(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (cu(e, t, a), e = e.sibling; e !== null; )
        cu(e, t, a), e = e.sibling;
  }
  function Ud(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, r = t.attributes; r.length; )
        t.removeAttributeNode(r[0]);
      st(t, l, a), t[lt] = e, t[ht] = a;
    } catch (s) {
      Oe(e, e.return, s);
    }
  }
  var mn = !1, Fe = !1, Xr = !1, kd = typeof WeakSet == "function" ? WeakSet : Set, at = null;
  function Ng(e, t) {
    if (e = e.containerInfo, us = Nu, e = Kc(e), jo(e)) {
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
            var m = 0, g = -1, b = -1, O = 0, D = 0, Y = e, C = null;
            t: for (; ; ) {
              for (var N; Y !== a || r !== 0 && Y.nodeType !== 3 || (g = m + r), Y !== s || l !== 0 && Y.nodeType !== 3 || (b = m + l), Y.nodeType === 3 && (m += Y.nodeValue.length), (N = Y.firstChild) !== null; )
                C = Y, Y = N;
              for (; ; ) {
                if (Y === e) break t;
                if (C === a && ++O === r && (g = m), C === s && ++D === l && (b = m), (N = Y.nextSibling) !== null) break;
                Y = C, C = Y.parentNode;
              }
              Y = N;
            }
            a = g === -1 || b === -1 ? null : { start: g, end: b };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (os = { focusedElem: e, selectionRange: a }, Nu = !1, at = t; at !== null; )
      if (t = at, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, at = e;
      else
        for (; at !== null; ) {
          switch (t = at, s = t.alternate, e = t.flags, t.tag) {
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
                  var W = ma(
                    a.type,
                    r
                  );
                  e = l.getSnapshotBeforeUpdate(
                    W,
                    s
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ne) {
                  Oe(
                    a,
                    a.return,
                    ne
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  cs(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      cs(e);
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
            e.return = t.return, at = e;
            break;
          }
          at = t.return;
        }
  }
  function Yd(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        hn(e, a), l & 4 && Hi(5, a);
        break;
      case 1:
        if (hn(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (m) {
              Oe(a, a.return, m);
            }
          else {
            var r = ma(
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
              Oe(
                a,
                a.return,
                m
              );
            }
          }
        l & 64 && jd(a), l & 512 && Bi(a, a.return);
        break;
      case 3:
        if (hn(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
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
            zf(e, t);
          } catch (m) {
            Oe(a, a.return, m);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Ud(a);
      case 26:
      case 5:
        hn(e, a), t === null && l & 4 && Zd(a), l & 512 && Bi(a, a.return);
        break;
      case 12:
        hn(e, a);
        break;
      case 31:
        hn(e, a), l & 4 && Bd(e, a);
        break;
      case 13:
        hn(e, a), l & 4 && qd(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Hg.bind(
          null,
          a
        ), uy(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || mn, !l) {
          t = t !== null && t.memoizedState !== null || Fe, r = mn;
          var s = Fe;
          mn = l, (Fe = t) && !s ? vn(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : hn(e, a), mn = r, Fe = s;
        }
        break;
      case 30:
        break;
      default:
        hn(e, a);
    }
  }
  function Xd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Xd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ho(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ye = null, gt = !1;
  function pn(e, t, a) {
    for (a = a.child; a !== null; )
      Hd(e, t, a), a = a.sibling;
  }
  function Hd(e, t, a) {
    if (Et && typeof Et.onCommitFiberUnmount == "function")
      try {
        Et.onCommitFiberUnmount(fi, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Fe || It(a, t), pn(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Fe || It(a, t);
        var l = Ye, r = gt;
        Hn(a.type) && (Ye = a.stateNode, gt = !1), pn(
          e,
          t,
          a
        ), Wi(a.stateNode), Ye = l, gt = r;
        break;
      case 5:
        Fe || It(a, t);
      case 6:
        if (l = Ye, r = gt, Ye = null, pn(
          e,
          t,
          a
        ), Ye = l, gt = r, Ye !== null)
          if (gt)
            try {
              (Ye.nodeType === 9 ? Ye.body : Ye.nodeName === "HTML" ? Ye.ownerDocument.body : Ye).removeChild(a.stateNode);
            } catch (s) {
              Oe(
                a,
                t,
                s
              );
            }
          else
            try {
              Ye.removeChild(a.stateNode);
            } catch (s) {
              Oe(
                a,
                t,
                s
              );
            }
        break;
      case 18:
        Ye !== null && (gt ? (e = Ye, jm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), ii(e)) : jm(Ye, a.stateNode));
        break;
      case 4:
        l = Ye, r = gt, Ye = a.stateNode.containerInfo, gt = !0, pn(
          e,
          t,
          a
        ), Ye = l, gt = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Dn(2, a, t), Fe || Dn(4, a, t), pn(
          e,
          t,
          a
        );
        break;
      case 1:
        Fe || (It(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Dd(
          a,
          t,
          l
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
        Fe = (l = Fe) || a.memoizedState !== null, pn(
          e,
          t,
          a
        ), Fe = l;
        break;
      default:
        pn(
          e,
          t,
          a
        );
    }
  }
  function Bd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ii(e);
      } catch (a) {
        Oe(t, t.return, a);
      }
    }
  }
  function qd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ii(e);
      } catch (a) {
        Oe(t, t.return, a);
      }
  }
  function jg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new kd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new kd()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function fu(e, t) {
    var a = jg(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var r = Bg.bind(null, e, l);
        l.then(r, r);
      }
    });
  }
  function yt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var r = a[l], s = e, m = t, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Hn(g.type)) {
                Ye = g.stateNode, gt = !1;
                break e;
              }
              break;
            case 5:
              Ye = g.stateNode, gt = !1;
              break e;
            case 3:
            case 4:
              Ye = g.stateNode.containerInfo, gt = !0;
              break e;
          }
          g = g.return;
        }
        if (Ye === null) throw Error(o(160));
        Hd(s, m, r), Ye = null, gt = !1, s = r.alternate, s !== null && (s.return = null), r.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Vd(t, e), t = t.sibling;
  }
  var Qt = null;
  function Vd(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        yt(t, e), bt(e), l & 4 && (Dn(3, e, e.return), Hi(3, e), Dn(5, e, e.return));
        break;
      case 1:
        yt(t, e), bt(e), l & 512 && (Fe || a === null || It(a, a.return)), l & 64 && mn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var r = Qt;
        if (yt(t, e), bt(e), l & 512 && (Fe || a === null || It(a, a.return)), l & 4) {
          var s = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, r = r.ownerDocument || r;
                  t: switch (l) {
                    case "title":
                      s = r.getElementsByTagName("title")[0], (!s || s[pi] || s[lt] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = r.createElement(l), r.head.insertBefore(
                        s,
                        r.querySelector("head > title")
                      )), st(s, l, a), s[lt] = e, nt(s), l = s;
                      break e;
                    case "link":
                      var m = Vm(
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
                      s = r.createElement(l), st(s, l, a), r.head.appendChild(s);
                      break;
                    case "meta":
                      if (m = Vm(
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
                      s = r.createElement(l), st(s, l, a), r.head.appendChild(s);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  s[lt] = e, nt(s), l = s;
                }
                e.stateNode = l;
              } else
                $m(
                  r,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = qm(
                r,
                l,
                e.memoizedProps
              );
          else
            s !== l ? (s === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : s.count--, l === null ? $m(
              r,
              e.type,
              e.stateNode
            ) : qm(
              r,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && Ur(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        yt(t, e), bt(e), l & 512 && (Fe || a === null || It(a, a.return)), a !== null && l & 4 && Ur(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (yt(t, e), bt(e), l & 512 && (Fe || a === null || It(a, a.return)), e.flags & 32) {
          r = e.stateNode;
          try {
            xa(r, "");
          } catch (W) {
            Oe(e, e.return, W);
          }
        }
        l & 4 && e.stateNode != null && (r = e.memoizedProps, Ur(
          e,
          r,
          a !== null ? a.memoizedProps : r
        )), l & 1024 && (Xr = !0);
        break;
      case 6:
        if (yt(t, e), bt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (W) {
            Oe(e, e.return, W);
          }
        }
        break;
      case 3:
        if (xu = null, r = Qt, Qt = Eu(t.containerInfo), yt(t, e), Qt = r, bt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ii(t.containerInfo);
          } catch (W) {
            Oe(e, e.return, W);
          }
        Xr && (Xr = !1, $d(e));
        break;
      case 4:
        l = Qt, Qt = Eu(
          e.stateNode.containerInfo
        ), yt(t, e), bt(e), Qt = l;
        break;
      case 12:
        yt(t, e), bt(e);
        break;
      case 31:
        yt(t, e), bt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, fu(e, l)));
        break;
      case 13:
        yt(t, e), bt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (mu = wt()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, fu(e, l)));
        break;
      case 22:
        r = e.memoizedState !== null;
        var b = a !== null && a.memoizedState !== null, O = mn, D = Fe;
        if (mn = O || r, Fe = D || b, yt(t, e), Fe = D, mn = O, bt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = r ? t._visibility & -2 : t._visibility | 1, r && (a === null || b || mn || Fe || pa(e)), a = null, t = e; ; ) {
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
                } catch (W) {
                  Oe(b, b.return, W);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = r ? "" : b.memoizedProps;
                } catch (W) {
                  Oe(b, b.return, W);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                b = t;
                try {
                  var N = b.stateNode;
                  r ? Dm(N, !0) : Dm(b.stateNode, !1);
                } catch (W) {
                  Oe(b, b.return, W);
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
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, fu(e, a))));
        break;
      case 19:
        yt(t, e), bt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, fu(e, l)));
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
        for (var a, l = e.return; l !== null; ) {
          if (Rd(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var r = a.stateNode, s = kr(e);
            cu(e, s, r);
            break;
          case 5:
            var m = a.stateNode;
            a.flags & 32 && (xa(m, ""), a.flags &= -33);
            var g = kr(e);
            cu(e, g, m);
            break;
          case 3:
          case 4:
            var b = a.stateNode.containerInfo, O = kr(e);
            Yr(
              e,
              O,
              b
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (D) {
        Oe(e, e.return, D);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function $d(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        $d(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function hn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Yd(e, t.alternate, t), t = t.sibling;
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
          typeof a.componentWillUnmount == "function" && Dd(
            t,
            t.return,
            a
          ), pa(t);
          break;
        case 27:
          Wi(t.stateNode);
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
      var l = t.alternate, r = e, s = t, m = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          vn(
            r,
            s,
            a
          ), Hi(4, s);
          break;
        case 1:
          if (vn(
            r,
            s,
            a
          ), l = s, r = l.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (O) {
              Oe(l, l.return, O);
            }
          if (l = s, r = l.updateQueue, r !== null) {
            var g = l.stateNode;
            try {
              var b = r.shared.hiddenCallbacks;
              if (b !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < b.length; r++)
                  Sf(b[r], g);
            } catch (O) {
              Oe(l, l.return, O);
            }
          }
          a && m & 64 && jd(s), Bi(s, s.return);
          break;
        case 27:
          Ud(s);
        case 26:
        case 5:
          vn(
            r,
            s,
            a
          ), a && l === null && m & 4 && Zd(s), Bi(s, s.return);
          break;
        case 12:
          vn(
            r,
            s,
            a
          );
          break;
        case 31:
          vn(
            r,
            s,
            a
          ), a && m & 4 && Bd(r, s);
          break;
        case 13:
          vn(
            r,
            s,
            a
          ), a && m & 4 && qd(r, s);
          break;
        case 22:
          s.memoizedState === null && vn(
            r,
            s,
            a
          ), Bi(s, s.return);
          break;
        case 30:
          break;
        default:
          vn(
            r,
            s,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Hr(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && xi(a));
  }
  function Br(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && xi(e));
  }
  function Kt(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Ld(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function Ld(e, t, a, l) {
    var r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Kt(
          e,
          t,
          a,
          l
        ), r & 2048 && Hi(9, t);
        break;
      case 1:
        Kt(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        Kt(
          e,
          t,
          a,
          l
        ), r & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && xi(e)));
        break;
      case 12:
        if (r & 2048) {
          Kt(
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
            Oe(t, t.return, b);
          }
        } else
          Kt(
            e,
            t,
            a,
            l
          );
        break;
      case 31:
        Kt(
          e,
          t,
          a,
          l
        );
        break;
      case 13:
        Kt(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        s = t.stateNode, m = t.alternate, t.memoizedState !== null ? s._visibility & 2 ? Kt(
          e,
          t,
          a,
          l
        ) : qi(e, t) : s._visibility & 2 ? Kt(
          e,
          t,
          a,
          l
        ) : (s._visibility |= 2, Qa(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), r & 2048 && Hr(m, t);
        break;
      case 24:
        Kt(
          e,
          t,
          a,
          l
        ), r & 2048 && Br(t.alternate, t);
        break;
      default:
        Kt(
          e,
          t,
          a,
          l
        );
    }
  }
  function Qa(e, t, a, l, r) {
    for (r = r && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var s = e, m = t, g = a, b = l, O = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Qa(
            s,
            m,
            g,
            b,
            r
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
            r
          ) : qi(
            s,
            m
          ) : (D._visibility |= 2, Qa(
            s,
            m,
            g,
            b,
            r
          )), r && O & 2048 && Hr(
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
            r
          ), r && O & 2048 && Br(m.alternate, m);
          break;
        default:
          Qa(
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
  function qi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, r = l.flags;
        switch (l.tag) {
          case 22:
            qi(a, l), r & 2048 && Hr(
              l.alternate,
              l
            );
            break;
          case 24:
            qi(a, l), r & 2048 && Br(l.alternate, l);
            break;
          default:
            qi(a, l);
        }
        t = t.sibling;
      }
  }
  var Vi = 8192;
  function Ka(e, t, a) {
    if (e.subtreeFlags & Vi)
      for (e = e.child; e !== null; )
        Gd(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function Gd(e, t, a) {
    switch (e.tag) {
      case 26:
        Ka(
          e,
          t,
          a
        ), e.flags & Vi && e.memoizedState !== null && yy(
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
        var l = Qt;
        Qt = Eu(e.stateNode.containerInfo), Ka(
          e,
          t,
          a
        ), Qt = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Vi, Vi = 16777216, Ka(
          e,
          t,
          a
        ), Vi = l) : Ka(
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
  function Qd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function $i(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          at = l, Jd(
            l,
            e
          );
        }
      Qd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Kd(e), e = e.sibling;
  }
  function Kd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        $i(e), e.flags & 2048 && Dn(9, e, e.return);
        break;
      case 3:
        $i(e);
        break;
      case 12:
        $i(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, du(e)) : $i(e);
        break;
      default:
        $i(e);
    }
  }
  function du(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          at = l, Jd(
            l,
            e
          );
        }
      Qd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Dn(8, t, t.return), du(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, du(t));
          break;
        default:
          du(t);
      }
      e = e.sibling;
    }
  }
  function Jd(e, t) {
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
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          xi(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, at = l;
      else
        e: for (a = e; at !== null; ) {
          l = at;
          var r = l.sibling, s = l.return;
          if (Xd(l), l === a) {
            at = null;
            break e;
          }
          if (r !== null) {
            r.return = s, at = r;
            break e;
          }
          at = s;
        }
    }
  }
  var Dg = {
    getCacheForType: function(e) {
      var t = ot(Je), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return ot(Je).controller.signal;
    }
  }, Zg = typeof WeakMap == "function" ? WeakMap : Map, Ae = 0, De = null, de = null, pe = 0, xe = 0, Nt = null, Zn = !1, Ja = !1, qr = !1, gn = 0, Ve = 0, Rn = 0, ha = 0, Vr = 0, jt = 0, Wa = 0, Li = null, _t = null, $r = !1, mu = 0, Wd = 0, pu = 1 / 0, hu = null, Un = null, Ie = 0, kn = null, Pa = null, yn = 0, Lr = 0, Gr = null, Pd = null, Gi = 0, Qr = null;
  function Dt() {
    return (Ae & 2) !== 0 && pe !== 0 ? pe & -pe : j.T !== null ? Ir() : dc();
  }
  function Fd() {
    if (jt === 0)
      if ((pe & 536870912) === 0 || be) {
        var e = Tl;
        Tl <<= 1, (Tl & 3932160) === 0 && (Tl = 262144), jt = e;
      } else jt = 536870912;
    return e = Ct.current, e !== null && (e.flags |= 32), jt;
  }
  function St(e, t, a) {
    (e === De && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (Fa(e, 0), Yn(
      e,
      pe,
      jt,
      !1
    )), mi(e, a), ((Ae & 2) === 0 || e !== De) && (e === De && ((Ae & 2) === 0 && (ha |= a), Ve === 4 && Yn(
      e,
      pe,
      jt,
      !1
    )), en(e));
  }
  function Id(e, t, a) {
    if ((Ae & 6) !== 0) throw Error(o(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || di(e, t), r = l ? kg(e, t) : Jr(e, t, !0), s = l;
    do {
      if (r === 0) {
        Ja && !l && Yn(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, s && !Rg(a)) {
          r = Jr(e, t, !1), s = !1;
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
              r = Li;
              var b = g.current.memoizedState.isDehydrated;
              if (b && (Fa(g, m).flags |= 256), m = Jr(
                g,
                m,
                !1
              ), m !== 2) {
                if (qr && !b) {
                  g.errorRecoveryDisabledLanes |= s, ha |= s, r = 4;
                  break e;
                }
                s = _t, _t = r, s !== null && (_t === null ? _t = s : _t.push.apply(
                  _t,
                  s
                ));
              }
              r = m;
            }
            if (s = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          Fa(e, 0), Yn(e, t, 0, !0);
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
              Yn(
                l,
                t,
                jt,
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
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (r = mu + 300 - wt(), 10 < r)) {
            if (Yn(
              l,
              t,
              jt,
              !Zn
            ), El(l, 0, !0) !== 0) break e;
            yn = t, l.timeoutHandle = Mm(
              em.bind(
                null,
                l,
                a,
                _t,
                hu,
                $r,
                t,
                jt,
                ha,
                Wa,
                Zn,
                s,
                "Throttled",
                -0,
                0
              ),
              r
            );
            break e;
          }
          em(
            l,
            a,
            _t,
            hu,
            $r,
            t,
            jt,
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
  function em(e, t, a, l, r, s, m, g, b, O, D, Y, C, N) {
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
      }, Gd(
        t,
        s,
        Y
      );
      var W = (s & 62914560) === s ? mu - wt() : (s & 4194048) === s ? Wd - wt() : 0;
      if (W = by(
        Y,
        W
      ), W !== null) {
        yn = s, e.cancelPendingCommit = W(
          rm.bind(
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
            D,
            Y,
            null,
            C,
            N
          )
        ), Yn(e, s, m, !O);
        return;
      }
    }
    rm(
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
  function Rg(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var r = a[l], s = r.getSnapshot;
          r = r.value;
          try {
            if (!xt(s(), r)) return !1;
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
  function Yn(e, t, a, l) {
    t &= ~Vr, t &= ~ha, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var r = t; 0 < r; ) {
      var s = 31 - At(r), m = 1 << s;
      l[s] = -1, r &= ~m;
    }
    a !== 0 && sc(e, a, t);
  }
  function vu() {
    return (Ae & 6) === 0 ? (Qi(0), !1) : !0;
  }
  function Kr() {
    if (de !== null) {
      if (xe === 0)
        var e = de.return;
      else
        e = de, on = ua = null, cr(e), qa = null, Ci = 0, e = de;
      for (; e !== null; )
        Nd(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function Fa(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, ty(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), yn = 0, Kr(), De = e, de = a = ln(e.current, null), pe = t, xe = 0, Nt = null, Zn = !1, Ja = di(e, t), qr = !1, Wa = jt = Vr = ha = Rn = Ve = 0, _t = Li = null, $r = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var r = 31 - At(l), s = 1 << r;
        t |= e[r], l &= ~s;
      }
    return gn = t, kl(), a;
  }
  function tm(e, t) {
    oe = null, j.H = ki, t === Ba || t === Ll ? (t = gf(), xe = 3) : t === Fo ? (t = gf(), xe = 4) : xe = t === Ar ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Nt = t, de === null && (Ve = 1, lu(
      e,
      kt(t, e.current)
    ));
  }
  function nm() {
    var e = Ct.current;
    return e === null ? !0 : (pe & 4194048) === pe ? Bt === null : (pe & 62914560) === pe || (pe & 536870912) !== 0 ? e === Bt : !1;
  }
  function am() {
    var e = j.H;
    return j.H = ki, e === null ? ki : e;
  }
  function im() {
    var e = j.A;
    return j.A = Dg, e;
  }
  function gu() {
    Ve = 4, Zn || (pe & 4194048) !== pe && Ct.current !== null || (Ja = !0), (Rn & 134217727) === 0 && (ha & 134217727) === 0 || De === null || Yn(
      De,
      pe,
      jt,
      !1
    );
  }
  function Jr(e, t, a) {
    var l = Ae;
    Ae |= 2;
    var r = am(), s = im();
    (De !== e || pe !== t) && (hu = null, Fa(e, t)), t = !1;
    var m = Ve;
    e: do
      try {
        if (xe !== 0 && de !== null) {
          var g = de, b = Nt;
          switch (xe) {
            case 8:
              Kr(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ct.current === null && (t = !0);
              var O = xe;
              if (xe = 0, Nt = null, Ia(e, g, b, O), a && Ja) {
                m = 0;
                break e;
              }
              break;
            default:
              O = xe, xe = 0, Nt = null, Ia(e, g, b, O);
          }
        }
        Ug(), m = Ve;
        break;
      } catch (D) {
        tm(e, D);
      }
    while (!0);
    return t && e.shellSuspendCounter++, on = ua = null, Ae = l, j.H = r, j.A = s, de === null && (De = null, pe = 0, kl()), m;
  }
  function Ug() {
    for (; de !== null; ) lm(de);
  }
  function kg(e, t) {
    var a = Ae;
    Ae |= 2;
    var l = am(), r = im();
    De !== e || pe !== t ? (hu = null, pu = wt() + 500, Fa(e, t)) : Ja = di(
      e,
      t
    );
    e: do
      try {
        if (xe !== 0 && de !== null) {
          t = de;
          var s = Nt;
          t: switch (xe) {
            case 1:
              xe = 0, Nt = null, Ia(e, t, s, 1);
              break;
            case 2:
            case 9:
              if (hf(s)) {
                xe = 0, Nt = null, um(t);
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
              hf(s) ? (xe = 0, Nt = null, um(t)) : (xe = 0, Nt = null, Ia(e, t, s, 7));
              break;
            case 5:
              var m = null;
              switch (de.tag) {
                case 26:
                  m = de.memoizedState;
                case 5:
                case 27:
                  var g = de;
                  if (m ? Lm(m) : g.stateNode.complete) {
                    xe = 0, Nt = null;
                    var b = g.sibling;
                    if (b !== null) de = b;
                    else {
                      var O = g.return;
                      O !== null ? (de = O, yu(O)) : de = null;
                    }
                    break t;
                  }
              }
              xe = 0, Nt = null, Ia(e, t, s, 5);
              break;
            case 6:
              xe = 0, Nt = null, Ia(e, t, s, 6);
              break;
            case 8:
              Kr(), Ve = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Yg();
        break;
      } catch (D) {
        tm(e, D);
      }
    while (!0);
    return on = ua = null, j.H = l, j.A = r, Ae = a, de !== null ? 0 : (De = null, pe = 0, kl(), Ve);
  }
  function Yg() {
    for (; de !== null && !ov(); )
      lm(de);
  }
  function lm(e) {
    var t = Cd(e.alternate, e, gn);
    e.memoizedProps = e.pendingProps, t === null ? yu(e) : de = t;
  }
  function um(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Td(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          pe
        );
        break;
      case 11:
        t = Td(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          pe
        );
        break;
      case 5:
        cr(t);
      default:
        Nd(a, t), t = de = af(t, gn), t = Cd(a, t, gn);
    }
    e.memoizedProps = e.pendingProps, t === null ? yu(e) : de = t;
  }
  function Ia(e, t, a, l) {
    on = ua = null, cr(t), qa = null, Ci = 0;
    var r = t.return;
    try {
      if (Ag(
        e,
        r,
        t,
        a,
        pe
      )) {
        Ve = 1, lu(
          e,
          kt(a, e.current)
        ), de = null;
        return;
      }
    } catch (s) {
      if (r !== null) throw de = r, s;
      Ve = 1, lu(
        e,
        kt(a, e.current)
      ), de = null;
      return;
    }
    t.flags & 32768 ? (be || l === 1 ? e = !0 : Ja || (pe & 536870912) !== 0 ? e = !1 : (Zn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ct.current, l !== null && l.tag === 13 && (l.flags |= 16384))), om(t, e)) : yu(t);
  }
  function yu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        om(
          t,
          Zn
        );
        return;
      }
      e = t.return;
      var a = Cg(
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
    Ve === 0 && (Ve = 5);
  }
  function om(e, t) {
    do {
      var a = Mg(e.alternate, e);
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
    Ve = 6, de = null;
  }
  function rm(e, t, a, l, r, s, m, g, b) {
    e.cancelPendingCommit = null;
    do
      bu();
    while (Ie !== 0);
    if ((Ae & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (s = t.lanes | t.childLanes, s |= ko, gv(
        e,
        a,
        s,
        m,
        g,
        b
      ), e === De && (de = De = null, pe = 0), Pa = t, kn = e, yn = a, Lr = s, Gr = r, Pd = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, qg(Sl, function() {
        return mm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = j.T, j.T = null, r = $.p, $.p = 2, m = Ae, Ae |= 4;
        try {
          Ng(e, t, a);
        } finally {
          Ae = m, $.p = r, j.T = l;
        }
      }
      Ie = 1, sm(), cm(), fm();
    }
  }
  function sm() {
    if (Ie === 1) {
      Ie = 0;
      var e = kn, t = Pa, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = j.T, j.T = null;
        var l = $.p;
        $.p = 2;
        var r = Ae;
        Ae |= 4;
        try {
          Vd(t, e);
          var s = os, m = Kc(e.containerInfo), g = s.focusedElem, b = s.selectionRange;
          if (m !== g && g && g.ownerDocument && Qc(
            g.ownerDocument.documentElement,
            g
          )) {
            if (b !== null && jo(g)) {
              var O = b.start, D = b.end;
              if (D === void 0 && (D = O), "selectionStart" in g)
                g.selectionStart = O, g.selectionEnd = Math.min(
                  D,
                  g.value.length
                );
              else {
                var Y = g.ownerDocument || document, C = Y && Y.defaultView || window;
                if (C.getSelection) {
                  var N = C.getSelection(), W = g.textContent.length, ne = Math.min(b.start, W), Ne = b.end === void 0 ? ne : Math.min(b.end, W);
                  !N.extend && ne > Ne && (m = Ne, Ne = ne, ne = m);
                  var w = Gc(
                    g,
                    ne
                  ), z = Gc(
                    g,
                    Ne
                  );
                  if (w && z && (N.rangeCount !== 1 || N.anchorNode !== w.node || N.anchorOffset !== w.offset || N.focusNode !== z.node || N.focusOffset !== z.offset)) {
                    var x = Y.createRange();
                    x.setStart(w.node, w.offset), N.removeAllRanges(), ne > Ne ? (N.addRange(x), N.extend(z.node, z.offset)) : (x.setEnd(z.node, z.offset), N.addRange(x));
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
          Nu = !!us, os = us = null;
        } finally {
          Ae = r, $.p = l, j.T = a;
        }
      }
      e.current = t, Ie = 2;
    }
  }
  function cm() {
    if (Ie === 2) {
      Ie = 0;
      var e = kn, t = Pa, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = j.T, j.T = null;
        var l = $.p;
        $.p = 2;
        var r = Ae;
        Ae |= 4;
        try {
          Yd(e, t.alternate, t);
        } finally {
          Ae = r, $.p = l, j.T = a;
        }
      }
      Ie = 3;
    }
  }
  function fm() {
    if (Ie === 4 || Ie === 3) {
      Ie = 0, rv();
      var e = kn, t = Pa, a = yn, l = Pd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ie = 5 : (Ie = 0, Pa = kn = null, dm(e, e.pendingLanes));
      var r = e.pendingLanes;
      if (r === 0 && (Un = null), mo(a), t = t.stateNode, Et && typeof Et.onCommitFiberRoot == "function")
        try {
          Et.onCommitFiberRoot(
            fi,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = j.T, r = $.p, $.p = 2, j.T = null;
        try {
          for (var s = e.onRecoverableError, m = 0; m < l.length; m++) {
            var g = l[m];
            s(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          j.T = t, $.p = r;
        }
      }
      (yn & 3) !== 0 && bu(), en(e), r = e.pendingLanes, (a & 261930) !== 0 && (r & 42) !== 0 ? e === Qr ? Gi++ : (Gi = 0, Qr = e) : Gi = 0, Qi(0);
    }
  }
  function dm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, xi(t)));
  }
  function bu() {
    return sm(), cm(), fm(), mm();
  }
  function mm() {
    if (Ie !== 5) return !1;
    var e = kn, t = Lr;
    Lr = 0;
    var a = mo(yn), l = j.T, r = $.p;
    try {
      $.p = 32 > a ? 32 : a, j.T = null, a = Gr, Gr = null;
      var s = kn, m = yn;
      if (Ie = 0, Pa = kn = null, yn = 0, (Ae & 6) !== 0) throw Error(o(331));
      var g = Ae;
      if (Ae |= 4, Kd(s.current), Ld(
        s,
        s.current,
        m,
        a
      ), Ae = g, Qi(0, !1), Et && typeof Et.onPostCommitFiberRoot == "function")
        try {
          Et.onPostCommitFiberRoot(fi, s);
        } catch {
        }
      return !0;
    } finally {
      $.p = r, j.T = l, dm(e, t);
    }
  }
  function pm(e, t, a) {
    t = kt(a, t), t = Er(e.stateNode, t, 2), e = Mn(e, t, 2), e !== null && (mi(e, 2), en(e));
  }
  function Oe(e, t, a) {
    if (e.tag === 3)
      pm(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          pm(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Un === null || !Un.has(l))) {
            e = kt(a, e), a = hd(2), l = Mn(t, a, 2), l !== null && (vd(
              a,
              l,
              t,
              e
            ), mi(l, 2), en(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Wr(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Zg();
      var r = /* @__PURE__ */ new Set();
      l.set(t, r);
    } else
      r = l.get(t), r === void 0 && (r = /* @__PURE__ */ new Set(), l.set(t, r));
    r.has(a) || (qr = !0, r.add(a), e = Xg.bind(null, e, t, a), t.then(e, e));
  }
  function Xg(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, De === e && (pe & a) === a && (Ve === 4 || Ve === 3 && (pe & 62914560) === pe && 300 > wt() - mu ? (Ae & 2) === 0 && Fa(e, 0) : Vr |= a, Wa === pe && (Wa = 0)), en(e);
  }
  function hm(e, t) {
    t === 0 && (t = rc()), e = aa(e, t), e !== null && (mi(e, t), en(e));
  }
  function Hg(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), hm(e, a);
  }
  function Bg(e, t) {
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
    l !== null && l.delete(t), hm(e, a);
  }
  function qg(e, t) {
    return ro(e, t);
  }
  var _u = null, ei = null, Pr = !1, Su = !1, Fr = !1, Xn = 0;
  function en(e) {
    e !== ei && e.next === null && (ei === null ? _u = ei = e : ei = ei.next = e), Su = !0, Pr || (Pr = !0, $g());
  }
  function Qi(e, t) {
    if (!Fr && Su) {
      Fr = !0;
      do
        for (var a = !1, l = _u; l !== null; ) {
          if (e !== 0) {
            var r = l.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var m = l.suspendedLanes, g = l.pingedLanes;
              s = (1 << 31 - At(42 | e) + 1) - 1, s &= r & ~(m & ~g), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (a = !0, bm(l, s));
          } else
            s = pe, s = El(
              l,
              l === De ? s : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (s & 3) === 0 || di(l, s) || (a = !0, bm(l, s));
          l = l.next;
        }
      while (a);
      Fr = !1;
    }
  }
  function Vg() {
    vm();
  }
  function vm() {
    Su = Pr = !1;
    var e = 0;
    Xn !== 0 && ey() && (e = Xn);
    for (var t = wt(), a = null, l = _u; l !== null; ) {
      var r = l.next, s = gm(l, t);
      s === 0 ? (l.next = null, a === null ? _u = r : a.next = r, r === null && (ei = a)) : (a = l, (e !== 0 || (s & 3) !== 0) && (Su = !0)), l = r;
    }
    Ie !== 0 && Ie !== 5 || Qi(e), Xn !== 0 && (Xn = 0);
  }
  function gm(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, r = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
      var m = 31 - At(s), g = 1 << m, b = r[m];
      b === -1 ? ((g & a) === 0 || (g & l) !== 0) && (r[m] = vv(g, t)) : b <= t && (e.expiredLanes |= g), s &= ~g;
    }
    if (t = De, a = pe, a = El(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && so(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || di(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && so(l), mo(a)) {
        case 2:
        case 8:
          a = uc;
          break;
        case 32:
          a = Sl;
          break;
        case 268435456:
          a = oc;
          break;
        default:
          a = Sl;
      }
      return l = ym.bind(null, e), a = ro(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && so(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function ym(e, t) {
    if (Ie !== 0 && Ie !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (bu() && e.callbackNode !== a)
      return null;
    var l = pe;
    return l = El(
      e,
      e === De ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Id(e, l, t), gm(e, wt()), e.callbackNode != null && e.callbackNode === a ? ym.bind(null, e) : null);
  }
  function bm(e, t) {
    if (bu()) return null;
    Id(e, t, !0);
  }
  function $g() {
    ny(function() {
      (Ae & 6) !== 0 ? ro(
        lc,
        Vg
      ) : vm();
    });
  }
  function Ir() {
    if (Xn === 0) {
      var e = Xa;
      e === 0 && (e = zl, zl <<= 1, (zl & 261888) === 0 && (zl = 256)), Xn = e;
    }
    return Xn;
  }
  function _m(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Cl("" + e);
  }
  function Sm(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function Lg(e, t, a, l, r) {
    if (t === "submit" && a && a.stateNode === r) {
      var s = _m(
        (r[ht] || null).action
      ), m = l.submitter;
      m && (t = (t = m[ht] || null) ? _m(t.formAction) : m.getAttribute("formAction"), t !== null && (s = t, m = null));
      var g = new Dl(
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
                if (Xn !== 0) {
                  var b = m ? Sm(r, m) : new FormData(r);
                  br(
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
                typeof s == "function" && (g.preventDefault(), b = m ? Sm(r, m) : new FormData(r), br(
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
  for (var es = 0; es < Uo.length; es++) {
    var ts = Uo[es], Gg = ts.toLowerCase(), Qg = ts[0].toUpperCase() + ts.slice(1);
    Gt(
      Gg,
      "on" + Qg
    );
  }
  Gt(Pc, "onAnimationEnd"), Gt(Fc, "onAnimationIteration"), Gt(Ic, "onAnimationStart"), Gt("dblclick", "onDoubleClick"), Gt("focusin", "onFocus"), Gt("focusout", "onBlur"), Gt(sg, "onTransitionRun"), Gt(cg, "onTransitionStart"), Gt(fg, "onTransitionCancel"), Gt(ef, "onTransitionEnd"), Ea("onMouseEnter", ["mouseout", "mouseover"]), Ea("onMouseLeave", ["mouseout", "mouseover"]), Ea("onPointerEnter", ["pointerout", "pointerover"]), Ea("onPointerLeave", ["pointerout", "pointerover"]), In(
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
  ), Kg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ki)
  );
  function zm(e, t) {
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
            } catch (D) {
              Ul(D);
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
            } catch (D) {
              Ul(D);
            }
            r.currentTarget = null, s = b;
          }
      }
    }
  }
  function me(e, t) {
    var a = t[po];
    a === void 0 && (a = t[po] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Tm(t, e, 2, !1), a.add(l));
  }
  function ns(e, t, a) {
    var l = 0;
    t && (l |= 4), Tm(
      a,
      e,
      l,
      t
    );
  }
  var zu = "_reactListening" + Math.random().toString(36).slice(2);
  function as(e) {
    if (!e[zu]) {
      e[zu] = !0, hc.forEach(function(a) {
        a !== "selectionchange" && (Kg.has(a) || ns(a, !1, e), ns(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zu] || (t[zu] = !0, ns("selectionchange", !1, t));
    }
  }
  function Tm(e, t, a, l) {
    switch (Fm(t)) {
      case 2:
        var r = zy;
        break;
      case 8:
        r = Ty;
        break;
      default:
        r = ys;
    }
    a = r.bind(
      null,
      t,
      a,
      e
    ), r = void 0, !To || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0), l ? r !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: r
    }) : e.addEventListener(t, a, !0) : r !== void 0 ? e.addEventListener(t, a, {
      passive: r
    }) : e.addEventListener(t, a, !1);
  }
  function is(e, t, a, l, r) {
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
            if (m = za(g), m === null) return;
            if (b = m.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              l = s = m;
              continue e;
            }
            g = g.parentNode;
          }
        }
        l = l.return;
      }
    xc(function() {
      var O = s, D = So(a), Y = [];
      e: {
        var C = tf.get(e);
        if (C !== void 0) {
          var N = Dl, W = e;
          switch (e) {
            case "keypress":
              if (Nl(a) === 0) break e;
            case "keydown":
            case "keyup":
              N = Bv;
              break;
            case "focusin":
              W = "focus", N = xo;
              break;
            case "focusout":
              W = "blur", N = xo;
              break;
            case "beforeblur":
            case "afterblur":
              N = xo;
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
              N = Mc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = Cv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = $v;
              break;
            case Pc:
            case Fc:
            case Ic:
              N = jv;
              break;
            case ef:
              N = Gv;
              break;
            case "scroll":
            case "scrollend":
              N = xv;
              break;
            case "wheel":
              N = Kv;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = Zv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = jc;
              break;
            case "toggle":
            case "beforetoggle":
              N = Wv;
          }
          var ne = (t & 4) !== 0, Ne = !ne && (e === "scroll" || e === "scrollend"), w = ne ? C !== null ? C + "Capture" : null : C;
          ne = [];
          for (var z = O, x; z !== null; ) {
            var Z = z;
            if (x = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || x === null || w === null || (Z = vi(z, w), Z != null && ne.push(
              Ji(z, Z, x)
            )), Ne) break;
            z = z.return;
          }
          0 < ne.length && (C = new N(
            C,
            W,
            null,
            a,
            D
          ), Y.push({ event: C, listeners: ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", C && a !== _o && (W = a.relatedTarget || a.fromElement) && (za(W) || W[Sa]))
            break e;
          if ((N || C) && (C = D.window === D ? D : (C = D.ownerDocument) ? C.defaultView || C.parentWindow : window, N ? (W = a.relatedTarget || a.toElement, N = O, W = W ? za(W) : null, W !== null && (Ne = f(W), ne = W.tag, W !== Ne || ne !== 5 && ne !== 27 && ne !== 6) && (W = null)) : (N = null, W = O), N !== W)) {
            if (ne = Mc, Z = "onMouseLeave", w = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (ne = jc, Z = "onPointerLeave", w = "onPointerEnter", z = "pointer"), Ne = N == null ? C : hi(N), x = W == null ? C : hi(W), C = new ne(
              Z,
              z + "leave",
              N,
              a,
              D
            ), C.target = Ne, C.relatedTarget = x, Z = null, za(D) === O && (ne = new ne(
              w,
              z + "enter",
              W,
              a,
              D
            ), ne.target = x, ne.relatedTarget = Ne, Z = ne), Ne = Z, N && W)
              t: {
                for (ne = Jg, w = N, z = W, x = 0, Z = w; Z; Z = ne(Z))
                  x++;
                Z = 0;
                for (var F = z; F; F = ne(F))
                  Z++;
                for (; 0 < x - Z; )
                  w = ne(w), x--;
                for (; 0 < Z - x; )
                  z = ne(z), Z--;
                for (; x--; ) {
                  if (w === z || z !== null && w === z.alternate) {
                    ne = w;
                    break t;
                  }
                  w = ne(w), z = ne(z);
                }
                ne = null;
              }
            else ne = null;
            N !== null && wm(
              Y,
              C,
              N,
              ne,
              !1
            ), W !== null && Ne !== null && wm(
              Y,
              Ne,
              W,
              ne,
              !0
            );
          }
        }
        e: {
          if (C = O ? hi(O) : window, N = C.nodeName && C.nodeName.toLowerCase(), N === "select" || N === "input" && C.type === "file")
            var Te = Hc;
          else if (Yc(C))
            if (Bc)
              Te = ug;
            else {
              Te = ig;
              var P = ag;
            }
          else
            N = C.nodeName, !N || N.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? O && bo(O.elementType) && (Te = Hc) : Te = lg;
          if (Te && (Te = Te(e, O))) {
            Xc(
              Y,
              Te,
              a,
              D
            );
            break e;
          }
          P && P(e, C, O), e === "focusout" && O && C.type === "number" && O.memoizedProps.value != null && yo(C, "number", C.value);
        }
        switch (P = O ? hi(O) : window, e) {
          case "focusin":
            (Yc(P) || P.contentEditable === "true") && (Na = P, Do = O, wi = null);
            break;
          case "focusout":
            wi = Do = Na = null;
            break;
          case "mousedown":
            Zo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Zo = !1, Jc(Y, a, D);
            break;
          case "selectionchange":
            if (rg) break;
          case "keydown":
          case "keyup":
            Jc(Y, a, D);
        }
        var se;
        if (Co)
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
          Ma ? Uc(e, a) && (he = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (he = "onCompositionStart");
        he && (Dc && a.locale !== "ko" && (Ma || he !== "onCompositionStart" ? he === "onCompositionEnd" && Ma && (se = Oc()) : (Tn = D, wo = "value" in Tn ? Tn.value : Tn.textContent, Ma = !0)), P = Tu(O, he), 0 < P.length && (he = new Nc(
          he,
          e,
          null,
          a,
          D
        ), Y.push({ event: he, listeners: P }), se ? he.data = se : (se = kc(a), se !== null && (he.data = se)))), (se = Fv ? Iv(e, a) : eg(e, a)) && (he = Tu(O, "onBeforeInput"), 0 < he.length && (P = new Nc(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          D
        ), Y.push({
          event: P,
          listeners: he
        }), P.data = se)), Lg(
          Y,
          e,
          O,
          a,
          D
        );
      }
      zm(Y, t);
    });
  }
  function Ji(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Tu(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var r = e, s = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || s === null || (r = vi(e, a), r != null && l.unshift(
        Ji(e, r, s)
      ), r = vi(e, t), r != null && l.push(
        Ji(e, r, s)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Jg(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function wm(e, t, a, l, r) {
    for (var s = t._reactName, m = []; a !== null && a !== l; ) {
      var g = a, b = g.alternate, O = g.stateNode;
      if (g = g.tag, b !== null && b === l) break;
      g !== 5 && g !== 26 && g !== 27 || O === null || (b = O, r ? (O = vi(a, s), O != null && m.unshift(
        Ji(a, O, b)
      )) : r || (O = vi(a, s), O != null && m.push(
        Ji(a, O, b)
      ))), a = a.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Wg = /\r\n?/g, Pg = /\u0000|\uFFFD/g;
  function Em(e) {
    return (typeof e == "string" ? e : "" + e).replace(Wg, `
`).replace(Pg, "");
  }
  function Am(e, t) {
    return t = Em(t), Em(e) === t;
  }
  function Me(e, t, a, l, r, s) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || xa(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && xa(e, "" + l);
        break;
      case "className":
        xl(e, "class", l);
        break;
      case "tabIndex":
        xl(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xl(e, a, l);
        break;
      case "style":
        Ec(e, l, s);
        break;
      case "data":
        if (t !== "object") {
          xl(e, "data", l);
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
        l = Cl("" + l), e.setAttribute(a, l);
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
          typeof s == "function" && (a === "formAction" ? (t !== "input" && Me(e, t, "name", r.name, r, null), Me(
            e,
            t,
            "formEncType",
            r.formEncType,
            r,
            null
          ), Me(
            e,
            t,
            "formMethod",
            r.formMethod,
            r,
            null
          ), Me(
            e,
            t,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (Me(e, t, "encType", r.encType, r, null), Me(e, t, "method", r.method, r, null), Me(e, t, "target", r.target, r, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Cl("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = nn);
        break;
      case "onScroll":
        l != null && me("scroll", e);
        break;
      case "onScrollEnd":
        l != null && me("scrollend", e);
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
        a = Cl("" + l), e.setAttributeNS(
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
        me("beforetoggle", e), me("toggle", e), Al(e, "popover", l);
        break;
      case "xlinkActuate":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        tn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        tn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        tn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Al(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Ev.get(a) || a, Al(e, a, l));
    }
  }
  function ls(e, t, a, l, r, s) {
    switch (a) {
      case "style":
        Ec(e, l, s);
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
        typeof l == "string" ? xa(e, l) : (typeof l == "number" || typeof l == "bigint") && xa(e, "" + l);
        break;
      case "onScroll":
        l != null && me("scroll", e);
        break;
      case "onScrollEnd":
        l != null && me("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = nn);
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
        if (!vc.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (r = a.endsWith("Capture"), t = a.slice(2, r ? a.length - 7 : void 0), s = e[ht] || null, s = s != null ? s[a] : null, typeof s == "function" && e.removeEventListener(t, s, r), typeof l == "function")) {
              typeof s != "function" && s !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, r);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : Al(e, a, l);
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
                  Me(e, t, s, m, a, null);
              }
          }
        r && Me(e, t, "srcSet", a.srcSet, a, null), l && Me(e, t, "src", a.src, a, null);
        return;
      case "input":
        me("invalid", e);
        var g = s = m = r = null, b = null, O = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var D = a[l];
            if (D != null)
              switch (l) {
                case "name":
                  r = D;
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
                    throw Error(o(137, t));
                  break;
                default:
                  Me(e, t, l, D, a, null);
              }
          }
        Sc(
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
        me("invalid", e), l = m = s = null;
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
                Me(e, t, r, g, a, null);
            }
        t = s, a = m, e.multiple = !!l, t != null ? Aa(e, !!l, t, !1) : a != null && Aa(e, !!l, a, !0);
        return;
      case "textarea":
        me("invalid", e), s = r = l = null;
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
                Me(e, t, m, g, a, null);
            }
        Tc(e, l, r, s);
        return;
      case "option":
        for (b in a)
          a.hasOwnProperty(b) && (l = a[b], l != null) && (b === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Me(e, t, b, l, a, null));
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
        for (l = 0; l < Ki.length; l++)
          me(Ki[l], e);
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
          if (a.hasOwnProperty(O) && (l = a[O], l != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Me(e, t, O, l, a, null);
            }
        return;
      default:
        if (bo(t)) {
          for (D in a)
            a.hasOwnProperty(D) && (l = a[D], l !== void 0 && ls(
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
    for (g in a)
      a.hasOwnProperty(g) && (l = a[g], l != null && Me(e, t, g, l, a, null));
  }
  function Fg(e, t, a, l) {
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
        var r = null, s = null, m = null, g = null, b = null, O = null, D = null;
        for (N in a) {
          var Y = a[N];
          if (a.hasOwnProperty(N) && Y != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = Y;
              default:
                l.hasOwnProperty(N) || Me(e, t, N, null, l, Y);
            }
        }
        for (var C in l) {
          var N = l[C];
          if (Y = a[C], l.hasOwnProperty(C) && (N != null || Y != null))
            switch (C) {
              case "type":
                s = N;
                break;
              case "name":
                r = N;
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
                  throw Error(o(137, t));
                break;
              default:
                N !== Y && Me(
                  e,
                  t,
                  C,
                  N,
                  l,
                  Y
                );
            }
        }
        go(
          e,
          m,
          g,
          b,
          O,
          D,
          s,
          r
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
                l.hasOwnProperty(s) || Me(
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
                s !== b && Me(
                  e,
                  t,
                  r,
                  s,
                  l,
                  b
                );
            }
        t = g, a = m, l = N, C != null ? Aa(e, !!a, C, !1) : !!l != !!a && (t != null ? Aa(e, !!a, t, !0) : Aa(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        N = C = null;
        for (g in a)
          if (r = a[g], a.hasOwnProperty(g) && r != null && !l.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Me(e, t, g, null, l, r);
            }
        for (m in l)
          if (r = l[m], s = a[m], l.hasOwnProperty(m) && (r != null || s != null))
            switch (m) {
              case "value":
                C = r;
                break;
              case "defaultValue":
                N = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(o(91));
                break;
              default:
                r !== s && Me(e, t, m, r, l, s);
            }
        zc(e, C, N);
        return;
      case "option":
        for (var W in a)
          C = a[W], a.hasOwnProperty(W) && C != null && !l.hasOwnProperty(W) && (W === "selected" ? e.selected = !1 : Me(
            e,
            t,
            W,
            null,
            l,
            C
          ));
        for (b in l)
          C = l[b], N = a[b], l.hasOwnProperty(b) && C !== N && (C != null || N != null) && (b === "selected" ? e.selected = C && typeof C != "function" && typeof C != "symbol" : Me(
            e,
            t,
            b,
            C,
            l,
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
        for (var ne in a)
          C = a[ne], a.hasOwnProperty(ne) && C != null && !l.hasOwnProperty(ne) && Me(e, t, ne, null, l, C);
        for (O in l)
          if (C = l[O], N = a[O], l.hasOwnProperty(O) && C !== N && (C != null || N != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(o(137, t));
                break;
              default:
                Me(
                  e,
                  t,
                  O,
                  C,
                  l,
                  N
                );
            }
        return;
      default:
        if (bo(t)) {
          for (var Ne in a)
            C = a[Ne], a.hasOwnProperty(Ne) && C !== void 0 && !l.hasOwnProperty(Ne) && ls(
              e,
              t,
              Ne,
              void 0,
              l,
              C
            );
          for (D in l)
            C = l[D], N = a[D], !l.hasOwnProperty(D) || C === N || C === void 0 && N === void 0 || ls(
              e,
              t,
              D,
              C,
              l,
              N
            );
          return;
        }
    }
    for (var w in a)
      C = a[w], a.hasOwnProperty(w) && C != null && !l.hasOwnProperty(w) && Me(e, t, w, null, l, C);
    for (Y in l)
      C = l[Y], N = a[Y], !l.hasOwnProperty(Y) || C === N || C == null && N == null || Me(e, t, Y, C, l, N);
  }
  function xm(e) {
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
  function Ig() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var r = a[l], s = r.transferSize, m = r.initiatorType, g = r.duration;
        if (s && g && xm(m)) {
          for (m = 0, g = r.responseEnd, l += 1; l < a.length; l++) {
            var b = a[l], O = b.startTime;
            if (O > g) break;
            var D = b.transferSize, Y = b.initiatorType;
            D && xm(Y) && (b = b.responseEnd, m += D * (b < g ? 1 : (g - O) / (b - O)));
          }
          if (--l, t += 8 * (s + m) / (r.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var us = null, os = null;
  function wu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Om(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Cm(e, t) {
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
  function rs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ss = null;
  function ey() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ss ? !1 : (ss = e, !0) : (ss = null, !1);
  }
  var Mm = typeof setTimeout == "function" ? setTimeout : void 0, ty = typeof clearTimeout == "function" ? clearTimeout : void 0, Nm = typeof Promise == "function" ? Promise : void 0, ny = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nm < "u" ? function(e) {
    return Nm.resolve(null).then(e).catch(ay);
  } : Mm;
  function ay(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Hn(e) {
    return e === "head";
  }
  function jm(e, t) {
    var a = t, l = 0;
    do {
      var r = a.nextSibling;
      if (e.removeChild(a), r && r.nodeType === 8)
        if (a = r.data, a === "/$" || a === "/&") {
          if (l === 0) {
            e.removeChild(r), ii(t);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          Wi(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, Wi(a);
          for (var s = a.firstChild; s; ) {
            var m = s.nextSibling, g = s.nodeName;
            s[pi] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && s.rel.toLowerCase() === "stylesheet" || a.removeChild(s), s = m;
          }
        } else
          a === "body" && Wi(e.ownerDocument.body);
      a = r;
    } while (a);
    ii(t);
  }
  function Dm(e, t) {
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
  function cs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          cs(a), ho(a);
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
  function iy(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var r = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[pi])
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
      if (e = qt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function ly(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = qt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Zm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = qt(e.nextSibling), e === null)) return null;
    return e;
  }
  function fs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function ds(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function uy(e, t) {
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
  var ms = null;
  function Rm(e) {
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
  function Um(e) {
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
  function km(e, t, a) {
    switch (t = wu(a), e) {
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
  function Wi(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    ho(e);
  }
  var Vt = /* @__PURE__ */ new Map(), Ym = /* @__PURE__ */ new Set();
  function Eu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var bn = $.d;
  $.d = {
    f: oy,
    r: ry,
    D: sy,
    C: cy,
    L: fy,
    m: dy,
    X: py,
    S: my,
    M: hy
  };
  function oy() {
    var e = bn.f(), t = vu();
    return e || t;
  }
  function ry(e) {
    var t = Ta(e);
    t !== null && t.tag === 5 && t.type === "form" ? td(t) : bn.r(e);
  }
  var ti = typeof document > "u" ? null : document;
  function Xm(e, t, a) {
    var l = ti;
    if (l && typeof t == "string" && t) {
      var r = Rt(t);
      r = 'link[rel="' + e + '"][href="' + r + '"]', typeof a == "string" && (r += '[crossorigin="' + a + '"]'), Ym.has(r) || (Ym.add(r), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(r) === null && (t = l.createElement("link"), st(t, "link", e), nt(t), l.head.appendChild(t)));
    }
  }
  function sy(e) {
    bn.D(e), Xm("dns-prefetch", e, null);
  }
  function cy(e, t) {
    bn.C(e, t), Xm("preconnect", e, t);
  }
  function fy(e, t, a) {
    bn.L(e, t, a);
    var l = ti;
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
          s = ni(e);
          break;
        case "script":
          s = ai(e);
      }
      Vt.has(s) || (e = S(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Vt.set(s, e), l.querySelector(r) !== null || t === "style" && l.querySelector(Pi(s)) || t === "script" && l.querySelector(Fi(s)) || (t = l.createElement("link"), st(t, "link", e), nt(t), l.head.appendChild(t)));
    }
  }
  function dy(e, t) {
    bn.m(e, t);
    var a = ti;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", r = 'link[rel="modulepreload"][as="' + Rt(l) + '"][href="' + Rt(e) + '"]', s = r;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = ai(e);
      }
      if (!Vt.has(s) && (e = S({ rel: "modulepreload", href: e }, t), Vt.set(s, e), a.querySelector(r) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Fi(s)))
              return;
        }
        l = a.createElement("link"), st(l, "link", e), nt(l), a.head.appendChild(l);
      }
    }
  }
  function my(e, t, a) {
    bn.S(e, t, a);
    var l = ti;
    if (l && e) {
      var r = wa(l).hoistableStyles, s = ni(e);
      t = t || "default";
      var m = r.get(s);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = l.querySelector(
          Pi(s)
        ))
          g.loading = 5;
        else {
          e = S(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Vt.get(s)) && ps(e, a);
          var b = m = l.createElement("link");
          nt(b), st(b, "link", e), b._p = new Promise(function(O, D) {
            b.onload = O, b.onerror = D;
          }), b.addEventListener("load", function() {
            g.loading |= 1;
          }), b.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, Au(m, t, l);
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
  function py(e, t) {
    bn.X(e, t);
    var a = ti;
    if (a && e) {
      var l = wa(a).hoistableScripts, r = ai(e), s = l.get(r);
      s || (s = a.querySelector(Fi(r)), s || (e = S({ src: e, async: !0 }, t), (t = Vt.get(r)) && hs(e, t), s = a.createElement("script"), nt(s), st(s, "link", e), a.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, l.set(r, s));
    }
  }
  function hy(e, t) {
    bn.M(e, t);
    var a = ti;
    if (a && e) {
      var l = wa(a).hoistableScripts, r = ai(e), s = l.get(r);
      s || (s = a.querySelector(Fi(r)), s || (e = S({ src: e, async: !0, type: "module" }, t), (t = Vt.get(r)) && hs(e, t), s = a.createElement("script"), nt(s), st(s, "link", e), a.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, l.set(r, s));
    }
  }
  function Hm(e, t, a, l) {
    var r = (r = ce.current) ? Eu(r) : null;
    if (!r) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = ni(a.href), a = wa(
          r
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = ni(a.href);
          var s = wa(
            r
          ).hoistableStyles, m = s.get(e);
          if (m || (r = r.ownerDocument || r, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(e, m), (s = r.querySelector(
            Pi(e)
          )) && !s._p && (m.instance = s, m.state.loading = 5), Vt.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Vt.set(e, a), s || vy(
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
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ai(a), a = wa(
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
  function ni(e) {
    return 'href="' + Rt(e) + '"';
  }
  function Pi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Bm(e) {
    return S({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function vy(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), st(t, "link", a), nt(t), e.head.appendChild(t));
  }
  function ai(e) {
    return '[src="' + Rt(e) + '"]';
  }
  function Fi(e) {
    return "script[async]" + e;
  }
  function qm(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Rt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, nt(l), l;
          var r = S({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), nt(l), st(l, "style", r), Au(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          r = ni(a.href);
          var s = e.querySelector(
            Pi(r)
          );
          if (s)
            return t.state.loading |= 4, t.instance = s, nt(s), s;
          l = Bm(a), (r = Vt.get(r)) && ps(l, r), s = (e.ownerDocument || e).createElement("link"), nt(s);
          var m = s;
          return m._p = new Promise(function(g, b) {
            m.onload = g, m.onerror = b;
          }), st(s, "link", l), t.state.loading |= 4, Au(s, a.precedence, e), t.instance = s;
        case "script":
          return s = ai(a.src), (r = e.querySelector(
            Fi(s)
          )) ? (t.instance = r, nt(r), r) : (l = a, (r = Vt.get(s)) && (l = S({}, a), hs(l, r)), e = e.ownerDocument || e, r = e.createElement("script"), nt(r), st(r, "link", l), e.head.appendChild(r), t.instance = r);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Au(l, a.precedence, e));
    return t.instance;
  }
  function Au(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = l.length ? l[l.length - 1] : null, s = r, m = 0; m < l.length; m++) {
      var g = l[m];
      if (g.dataset.precedence === t) s = g;
      else if (s !== r) break;
    }
    s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function ps(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function hs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var xu = null;
  function Vm(e, t, a) {
    if (xu === null) {
      var l = /* @__PURE__ */ new Map(), r = xu = /* @__PURE__ */ new Map();
      r.set(a, l);
    } else
      r = xu, l = r.get(a), l || (l = /* @__PURE__ */ new Map(), r.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), r = 0; r < a.length; r++) {
      var s = a[r];
      if (!(s[pi] || s[lt] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = s.getAttribute(t) || "";
        m = e + m;
        var g = l.get(m);
        g ? g.push(s) : l.set(m, [s]);
      }
    }
    return l;
  }
  function $m(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function gy(e, t, a) {
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
  function Lm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function yy(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var r = ni(l.href), s = t.querySelector(
          Pi(r)
        );
        if (s) {
          t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ou.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = s, nt(s);
          return;
        }
        s = t.ownerDocument || t, l = Bm(l), (r = Vt.get(r)) && ps(l, r), s = s.createElement("link"), nt(s);
        var m = s;
        m._p = new Promise(function(g, b) {
          m.onload = g, m.onerror = b;
        }), st(s, "link", l), a.instance = s;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Ou.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var vs = 0;
  function by(e, t) {
    return e.stylesheets && e.count === 0 && Mu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && Mu(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s();
        }
      }, 6e4 + t);
      0 < e.imgBytes && vs === 0 && (vs = 62500 * Ig());
      var r = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Mu(e, e.stylesheets), e.unsuspend)) {
            var s = e.unsuspend;
            e.unsuspend = null, s();
          }
        },
        (e.imgBytes > vs ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(r);
      };
    } : null;
  }
  function Ou() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Mu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Cu = null;
  function Mu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Cu = /* @__PURE__ */ new Map(), t.forEach(_y, e), Cu = null, Ou.call(e));
  }
  function _y(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Cu.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Cu.set(e, a);
        for (var r = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < r.length; s++) {
          var m = r[s];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (a.set(m.dataset.precedence, m), l = m);
        }
        l && a.set(null, l);
      }
      r = t.instance, m = r.getAttribute("data-precedence"), s = a.get(m) || l, s === l && a.set(null, r), a.set(m, r), this.count++, l = Ou.bind(this), r.addEventListener("load", l), r.addEventListener("error", l), s ? s.parentNode.insertBefore(r, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(r, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ii = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: H,
    _currentValue2: H,
    _threadCount: 0
  };
  function Sy(e, t, a, l, r, s, m, g, b) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = co(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = co(0), this.hiddenUpdates = co(null), this.identifierPrefix = l, this.onUncaughtError = r, this.onCaughtError = s, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Gm(e, t, a, l, r, s, m, g, b, O, D, Y) {
    return e = new Sy(
      e,
      t,
      a,
      m,
      b,
      O,
      D,
      Y,
      g
    ), t = 1, s === !0 && (t |= 24), s = Ot(3, null, null, t), e.current = s, s.stateNode = e, t = Jo(), t.refCount++, e.pooledCache = t, t.refCount++, s.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, Io(s), e;
  }
  function Qm(e) {
    return e ? (e = Za, e) : Za;
  }
  function Km(e, t, a, l, r, s) {
    r = Qm(r), l.context === null ? l.context = r : l.pendingContext = r, l = Cn(t), l.payload = { element: a }, s = s === void 0 ? null : s, s !== null && (l.callback = s), a = Mn(e, l, t), a !== null && (St(a, e, t), Ni(a, e, t));
  }
  function Jm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function gs(e, t) {
    Jm(e, t), (e = e.alternate) && Jm(e, t);
  }
  function Wm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = aa(e, 67108864);
      t !== null && St(t, e, 67108864), gs(e, 67108864);
    }
  }
  function Pm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Dt();
      t = fo(t);
      var a = aa(e, t);
      a !== null && St(a, e, t), gs(e, t);
    }
  }
  var Nu = !0;
  function zy(e, t, a, l) {
    var r = j.T;
    j.T = null;
    var s = $.p;
    try {
      $.p = 2, ys(e, t, a, l);
    } finally {
      $.p = s, j.T = r;
    }
  }
  function Ty(e, t, a, l) {
    var r = j.T;
    j.T = null;
    var s = $.p;
    try {
      $.p = 8, ys(e, t, a, l);
    } finally {
      $.p = s, j.T = r;
    }
  }
  function ys(e, t, a, l) {
    if (Nu) {
      var r = bs(l);
      if (r === null)
        is(
          e,
          t,
          l,
          ju,
          a
        ), Im(e, l);
      else if (Ey(
        r,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (Im(e, l), t & 4 && -1 < wy.indexOf(e)) {
        for (; r !== null; ) {
          var s = Ta(r);
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
                    en(s), (Ae & 6) === 0 && (pu = wt() + 500, Qi(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = aa(s, 2), g !== null && St(g, s, 2), vu(), gs(s, 2);
            }
          if (s = bs(l), s === null && is(
            e,
            t,
            l,
            ju,
            a
          ), s === r) break;
          r = s;
        }
        r !== null && l.stopPropagation();
      } else
        is(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function bs(e) {
    return e = So(e), _s(e);
  }
  var ju = null;
  function _s(e) {
    if (ju = null, e = za(e), e !== null) {
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
    return ju = e, null;
  }
  function Fm(e) {
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
        switch (sv()) {
          case lc:
            return 2;
          case uc:
            return 8;
          case Sl:
          case cv:
            return 32;
          case oc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ss = !1, Bn = null, qn = null, Vn = null, el = /* @__PURE__ */ new Map(), tl = /* @__PURE__ */ new Map(), $n = [], wy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Im(e, t) {
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
        Vn = null;
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
  function nl(e, t, a, l, r, s) {
    return e === null || e.nativeEvent !== s ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: s,
      targetContainers: [r]
    }, t !== null && (t = Ta(t), t !== null && Wm(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, r !== null && t.indexOf(r) === -1 && t.push(r), e);
  }
  function Ey(e, t, a, l, r) {
    switch (t) {
      case "focusin":
        return Bn = nl(
          Bn,
          e,
          t,
          a,
          l,
          r
        ), !0;
      case "dragenter":
        return qn = nl(
          qn,
          e,
          t,
          a,
          l,
          r
        ), !0;
      case "mouseover":
        return Vn = nl(
          Vn,
          e,
          t,
          a,
          l,
          r
        ), !0;
      case "pointerover":
        var s = r.pointerId;
        return el.set(
          s,
          nl(
            el.get(s) || null,
            e,
            t,
            a,
            l,
            r
          )
        ), !0;
      case "gotpointercapture":
        return s = r.pointerId, tl.set(
          s,
          nl(
            tl.get(s) || null,
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
  function ep(e) {
    var t = za(e.target);
    if (t !== null) {
      var a = f(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = d(a), t !== null) {
            e.blockedOn = t, mc(e.priority, function() {
              Pm(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(a), t !== null) {
            e.blockedOn = t, mc(e.priority, function() {
              Pm(a);
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
  function Du(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = bs(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        _o = l, a.target.dispatchEvent(l), _o = null;
      } else
        return t = Ta(a), t !== null && Wm(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function tp(e, t, a) {
    Du(e) && a.delete(t);
  }
  function Ay() {
    Ss = !1, Bn !== null && Du(Bn) && (Bn = null), qn !== null && Du(qn) && (qn = null), Vn !== null && Du(Vn) && (Vn = null), el.forEach(tp), tl.forEach(tp);
  }
  function Zu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ss || (Ss = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      Ay
    )));
  }
  var Ru = null;
  function np(e) {
    Ru !== e && (Ru = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        Ru === e && (Ru = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], r = e[t + 2];
          if (typeof l != "function") {
            if (_s(l || a) === null)
              continue;
            break;
          }
          var s = Ta(a);
          s !== null && (e.splice(t, 3), t -= 3, br(
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
  function ii(e) {
    function t(b) {
      return Zu(b, e);
    }
    Bn !== null && Zu(Bn, e), qn !== null && Zu(qn, e), Vn !== null && Zu(Vn, e), el.forEach(t), tl.forEach(t);
    for (var a = 0; a < $n.length; a++) {
      var l = $n[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < $n.length && (a = $n[0], a.blockedOn === null); )
      ep(a), a.blockedOn === null && $n.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var r = a[l], s = a[l + 1], m = r[ht] || null;
        if (typeof s == "function")
          m || np(a);
        else if (m) {
          var g = null;
          if (s && s.hasAttribute("formAction")) {
            if (r = s, m = s[ht] || null)
              g = m.formAction;
            else if (_s(r) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? a[l + 1] = g : (a.splice(l, 3), l -= 3), np(a);
        }
      }
  }
  function ap() {
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
  function zs(e) {
    this._internalRoot = e;
  }
  Uu.prototype.render = zs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current, l = Dt();
    Km(a, l, e, t, null, null);
  }, Uu.prototype.unmount = zs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Km(e.current, 2, null, e, null, null), vu(), t[Sa] = null;
    }
  };
  function Uu(e) {
    this._internalRoot = e;
  }
  Uu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = dc();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < $n.length && t !== 0 && t < $n[a].priority; a++) ;
      $n.splice(a, 0, e), a === 0 && ep(e);
    }
  };
  var ip = i.version;
  if (ip !== "19.2.8")
    throw Error(
      o(
        527,
        ip,
        "19.2.8"
      )
    );
  $.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = h(t), e = e !== null ? y(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var xy = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ku = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ku.isDisabled && ku.supportsFiber)
      try {
        fi = ku.inject(
          xy
        ), Et = ku;
      } catch {
      }
  }
  return il.createRoot = function(e, t) {
    if (!c(e)) throw Error(o(299));
    var a = !1, l = "", r = fd, s = dd, m = md;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (r = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError)), t = Gm(
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
      ap
    ), e[Sa] = t.current, as(e), new zs(t);
  }, il.hydrateRoot = function(e, t, a) {
    if (!c(e)) throw Error(o(299));
    var l = !1, r = "", s = fd, m = dd, g = md, b = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (r = a.identifierPrefix), a.onUncaughtError !== void 0 && (s = a.onUncaughtError), a.onCaughtError !== void 0 && (m = a.onCaughtError), a.onRecoverableError !== void 0 && (g = a.onRecoverableError), a.formState !== void 0 && (b = a.formState)), t = Gm(
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
      ap
    ), t.context = Qm(null), a = t.current, l = Dt(), l = fo(l), r = Cn(l), r.callback = null, Mn(a, r, l), a = l, t.current.lanes = a, mi(t, a), en(t), e[Sa] = t.current, as(e), new Uu(t);
  }, il.version = "19.2.8", il;
}
var pp;
function ky() {
  if (pp) return ws.exports;
  pp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), ws.exports = Uy(), ws.exports;
}
var Yy = ky();
const Xy = /* @__PURE__ */ ah(Yy);
var ae = $s();
const eo = /* @__PURE__ */ ah(ae);
const ih = (...n) => n.filter((i, u, o) => !!i && i.trim() !== "" && o.indexOf(i) === u).join(" ").trim();
const Hy = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const By = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, u, o) => o ? o.toUpperCase() : u.toLowerCase()
);
const hp = (n) => {
  const i = By(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
var qy = {
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
const Vy = (n) => {
  for (const i in n)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
};
const $y = ae.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: o,
    className: c = "",
    children: f,
    iconNode: d,
    ...p
  }, v) => ae.createElement(
    "svg",
    {
      ref: v,
      ...qy,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: o ? Number(u) * 24 / Number(i) : u,
      className: ih("lucide", c),
      ...!f && !Vy(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...d.map(([h, y]) => ae.createElement(h, y)),
      ...Array.isArray(f) ? f : [f]
    ]
  )
);
const et = (n, i) => {
  const u = ae.forwardRef(
    ({ className: o, ...c }, f) => ae.createElement($y, {
      ref: f,
      iconNode: i,
      className: ih(
        `lucide-${Hy(hp(n))}`,
        `lucide-${n}`,
        o
      ),
      ...c
    })
  );
  return u.displayName = hp(n), u;
};
const Ly = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], vp = et("arrow-down", Ly);
const Gy = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], gp = et("arrow-up", Gy);
const Qy = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], Ky = et("battery", Qy);
const Jy = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Wy = et("clock-3", Jy);
const Py = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], yp = et("house", Py);
const Fy = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], Iy = et("lock-open", Fy);
const e0 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], t0 = et("lock", e0);
const n0 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], a0 = et("map-pin", n0);
const i0 = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], l0 = et("pause", i0);
const u0 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], o0 = et("play", u0);
const r0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], bp = et("plus", r0);
const s0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], c0 = et("rotate-ccw", s0);
const f0 = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
], d0 = et("scan-line", f0);
const m0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], p0 = et("square", m0);
const h0 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], v0 = et("timer", h0);
const g0 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], _p = et("trash-2", g0);
const y0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], lh = et("x", y0);
const b0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], _0 = et("zoom-in", b0);
const S0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], z0 = et("zoom-out", S0);
var Sp;
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
    const h = d.prototype, y = Object.keys(h);
    for (let S = 0; S < y.length; S++) {
      const E = y[S];
      E in p || (p[E] = h[E].bind(p));
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
    for (const y of h._zod.deferred)
      y();
    return h;
  }
  return Object.defineProperty(d, "init", { value: o }), Object.defineProperty(d, Symbol.hasInstance, {
    value: (p) => u?.Parent && p instanceof u.Parent ? !0 : p?._zod?.traits?.has(n)
  }), Object.defineProperty(d, "name", { value: n }), d;
}
class ui extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class uh extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
(Sp = globalThis).__zod_globalConfig ?? (Sp.__zod_globalConfig = {});
const Ls = globalThis.__zod_globalConfig;
function ya(n) {
  return Ls;
}
function oh(n) {
  const i = Object.values(n).filter((o) => typeof o == "number");
  return Object.entries(n).filter(([o, c]) => i.indexOf(+o) === -1).map(([o, c]) => c);
}
function Ys(n, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
function Gs(n) {
  return {
    get value() {
      {
        const i = n();
        return Object.defineProperty(this, "value", { value: i }), i;
      }
    }
  };
}
function Qs(n) {
  return n == null;
}
function Ks(n) {
  const i = n.startsWith("^") ? 1 : 0, u = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(i, u);
}
function T0(n, i) {
  const u = n / i, o = Math.round(u), c = Number.EPSILON * Math.max(Math.abs(u), 1);
  return Math.abs(u - o) < c ? 0 : u - o;
}
const zp = /* @__PURE__ */ Symbol("evaluating");
function je(n, i, u) {
  let o;
  Object.defineProperty(n, i, {
    get() {
      if (o !== zp)
        return o === void 0 && (o = zp, o = u()), o;
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
function _a(n, i, u) {
  Object.defineProperty(n, i, {
    value: u,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Kn(...n) {
  const i = {};
  for (const u of n) {
    const o = Object.getOwnPropertyDescriptors(u);
    Object.assign(i, o);
  }
  return Object.defineProperties({}, i);
}
function Tp(n) {
  return JSON.stringify(n);
}
function w0(n) {
  return n.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const rh = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function Gu(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const E0 = /* @__PURE__ */ Gs(() => {
  if (Ls.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function cl(n) {
  if (Gu(n) === !1)
    return !1;
  const i = n.constructor;
  if (i === void 0 || typeof i != "function")
    return !0;
  const u = i.prototype;
  return !(Gu(u) === !1 || Object.prototype.hasOwnProperty.call(u, "isPrototypeOf") === !1);
}
function sh(n) {
  return cl(n) ? { ...n } : Array.isArray(n) ? [...n] : n instanceof Map ? new Map(n) : n instanceof Set ? new Set(n) : n;
}
const A0 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function oi(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Jn(n, i, u) {
  const o = new n._zod.constr(i ?? n._zod.def);
  return (!i || u?.parent) && (o._zod.parent = n), o;
}
function I(n) {
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
function x0(n) {
  return Object.keys(n).filter((i) => n[i]._zod.optin === "optional" && n[i]._zod.optout === "optional");
}
const O0 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function C0(n, i) {
  const u = n._zod.def, o = u.checks;
  if (o && o.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const f = Kn(n._zod.def, {
    get shape() {
      const d = {};
      for (const p in i) {
        if (!(p in u.shape))
          throw new Error(`Unrecognized key: "${p}"`);
        i[p] && (d[p] = u.shape[p]);
      }
      return _a(this, "shape", d), d;
    },
    checks: []
  });
  return Jn(n, f);
}
function M0(n, i) {
  const u = n._zod.def, o = u.checks;
  if (o && o.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const f = Kn(n._zod.def, {
    get shape() {
      const d = { ...n._zod.def.shape };
      for (const p in i) {
        if (!(p in u.shape))
          throw new Error(`Unrecognized key: "${p}"`);
        i[p] && delete d[p];
      }
      return _a(this, "shape", d), d;
    },
    checks: []
  });
  return Jn(n, f);
}
function N0(n, i) {
  if (!cl(i))
    throw new Error("Invalid input to extend: expected a plain object");
  const u = n._zod.def.checks;
  if (u && u.length > 0) {
    const f = n._zod.def.shape;
    for (const d in i)
      if (Object.getOwnPropertyDescriptor(f, d) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const c = Kn(n._zod.def, {
    get shape() {
      const f = { ...n._zod.def.shape, ...i };
      return _a(this, "shape", f), f;
    }
  });
  return Jn(n, c);
}
function j0(n, i) {
  if (!cl(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const u = Kn(n._zod.def, {
    get shape() {
      const o = { ...n._zod.def.shape, ...i };
      return _a(this, "shape", o), o;
    }
  });
  return Jn(n, u);
}
function D0(n, i) {
  if (n._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const u = Kn(n._zod.def, {
    get shape() {
      const o = { ...n._zod.def.shape, ...i._zod.def.shape };
      return _a(this, "shape", o), o;
    },
    get catchall() {
      return i._zod.def.catchall;
    },
    checks: i._zod.def.checks ?? []
  });
  return Jn(n, u);
}
function Z0(n, i, u) {
  const c = i._zod.def.checks;
  if (c && c.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const d = Kn(i._zod.def, {
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
      return _a(this, "shape", v), v;
    },
    checks: []
  });
  return Jn(i, d);
}
function R0(n, i, u) {
  const o = Kn(i._zod.def, {
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
      return _a(this, "shape", f), f;
    }
  });
  return Jn(i, o);
}
function li(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let u = i; u < n.issues.length; u++)
    if (n.issues[u]?.continue !== !0)
      return !0;
  return !1;
}
function U0(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let u = i; u < n.issues.length; u++)
    if (n.issues[u]?.continue === !1)
      return !0;
  return !1;
}
function ch(n, i) {
  return i.map((u) => {
    var o;
    return (o = u).path ?? (o.path = []), u.path.unshift(n), u;
  });
}
function Yu(n) {
  return typeof n == "string" ? n : n?.message;
}
function ba(n, i, u) {
  const o = n.message ? n.message : Yu(n.inst?._zod.def?.error?.(n)) ?? Yu(i?.error?.(n)) ?? Yu(u.customError?.(n)) ?? Yu(u.localeError?.(n)) ?? "Invalid input", { inst: c, continue: f, input: d, ...p } = n;
  return p.path ?? (p.path = []), p.message = o, i?.reportInput && (p.input = d), p;
}
function Js(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function fl(...n) {
  const [i, u, o] = n;
  return typeof i == "string" ? {
    message: i,
    code: "custom",
    input: u,
    inst: o
  } : { ...i };
}
const fh = (n, i) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: i,
    enumerable: !1
  }), n.message = JSON.stringify(i, Ys, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, dh = U("$ZodError", fh), mh = U("$ZodError", fh, { Parent: Error });
function k0(n, i = (u) => u.message) {
  const u = {}, o = [];
  for (const c of n.issues)
    c.path.length > 0 ? (u[c.path[0]] = u[c.path[0]] || [], u[c.path[0]].push(i(c))) : o.push(i(c));
  return { formErrors: o, fieldErrors: u };
}
function Y0(n, i = (u) => u.message) {
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
            const y = p[h];
            h === p.length - 1 ? (v[y] = v[y] || { _errors: [] }, v[y]._errors.push(i(d))) : v[y] = v[y] || { _errors: [] }, v = v[y], h++;
          }
        }
      }
  };
  return o(n), u;
}
const Ws = (n) => (i, u, o, c) => {
  const f = o ? { ...o, async: !1 } : { async: !1 }, d = i._zod.run({ value: u, issues: [] }, f);
  if (d instanceof Promise)
    throw new ui();
  if (d.issues.length) {
    const p = new (c?.Err ?? n)(d.issues.map((v) => ba(v, f, ya())));
    throw rh(p, c?.callee), p;
  }
  return d.value;
}, Ps = (n) => async (i, u, o, c) => {
  const f = o ? { ...o, async: !0 } : { async: !0 };
  let d = i._zod.run({ value: u, issues: [] }, f);
  if (d instanceof Promise && (d = await d), d.issues.length) {
    const p = new (c?.Err ?? n)(d.issues.map((v) => ba(v, f, ya())));
    throw rh(p, c?.callee), p;
  }
  return d.value;
}, to = (n) => (i, u, o) => {
  const c = o ? { ...o, async: !1 } : { async: !1 }, f = i._zod.run({ value: u, issues: [] }, c);
  if (f instanceof Promise)
    throw new ui();
  return f.issues.length ? {
    success: !1,
    error: new (n ?? dh)(f.issues.map((d) => ba(d, c, ya())))
  } : { success: !0, data: f.value };
}, X0 = /* @__PURE__ */ to(mh), no = (n) => async (i, u, o) => {
  const c = o ? { ...o, async: !0 } : { async: !0 };
  let f = i._zod.run({ value: u, issues: [] }, c);
  return f instanceof Promise && (f = await f), f.issues.length ? {
    success: !1,
    error: new n(f.issues.map((d) => ba(d, c, ya())))
  } : { success: !0, data: f.value };
}, H0 = /* @__PURE__ */ no(mh), B0 = (n) => (i, u, o) => {
  const c = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return Ws(n)(i, u, c);
}, q0 = (n) => (i, u, o) => Ws(n)(i, u, o), V0 = (n) => async (i, u, o) => {
  const c = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return Ps(n)(i, u, c);
}, $0 = (n) => async (i, u, o) => Ps(n)(i, u, o), L0 = (n) => (i, u, o) => {
  const c = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return to(n)(i, u, c);
}, G0 = (n) => (i, u, o) => to(n)(i, u, o), Q0 = (n) => async (i, u, o) => {
  const c = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return no(n)(i, u, c);
}, K0 = (n) => async (i, u, o) => no(n)(i, u, o), J0 = /^[cC][0-9a-z]{6,}$/, W0 = /^[0-9a-z]+$/, P0 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, F0 = /^[0-9a-vA-V]{20}$/, I0 = /^[A-Za-z0-9]{27}$/, eb = /^[a-zA-Z0-9_-]{21}$/, tb = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, nb = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, wp = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, ab = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, ib = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function lb() {
  return new RegExp(ib, "u");
}
const ub = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ob = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, rb = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, sb = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, cb = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, ph = /^[A-Za-z0-9_-]*$/, fb = /^https?$/, db = /^\+[1-9]\d{6,14}$/, hh = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", mb = /* @__PURE__ */ new RegExp(`^${hh}$`);
function vh(n) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${i}` : n.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${n.precision}}` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function pb(n) {
  return new RegExp(`^${vh(n)}$`);
}
function hb(n) {
  const i = vh({ precision: n.precision }), u = ["Z"];
  n.local && u.push(""), n.offset && u.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const o = `${i}(?:${u.join("|")})`;
  return new RegExp(`^${hh}T(?:${o})$`);
}
const vb = (n) => {
  const i = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${i}$`);
}, gb = /^-?\d+$/, yb = /^-?\d+(?:\.\d+)?$/, bb = /^(?:true|false)$/i, _b = /^[^A-Z]*$/, Sb = /^[^a-z]*$/, Tt = /* @__PURE__ */ U("$ZodCheck", (n, i) => {
  var u;
  n._zod ?? (n._zod = {}), n._zod.def = i, (u = n._zod).onattach ?? (u.onattach = []);
}), gh = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, yh = /* @__PURE__ */ U("$ZodCheckLessThan", (n, i) => {
  Tt.init(n, i);
  const u = gh[typeof i.value];
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
}), bh = /* @__PURE__ */ U("$ZodCheckGreaterThan", (n, i) => {
  Tt.init(n, i);
  const u = gh[typeof i.value];
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
}), zb = /* @__PURE__ */ U("$ZodCheckMultipleOf", (n, i) => {
  Tt.init(n, i), n._zod.onattach.push((u) => {
    var o;
    (o = u._zod.bag).multipleOf ?? (o.multipleOf = i.value);
  }), n._zod.check = (u) => {
    if (typeof u.value != typeof i.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof u.value == "bigint" ? u.value % i.value === BigInt(0) : T0(u.value, i.value) === 0) || u.issues.push({
      origin: typeof u.value,
      code: "not_multiple_of",
      divisor: i.value,
      input: u.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Tb = /* @__PURE__ */ U("$ZodCheckNumberFormat", (n, i) => {
  Tt.init(n, i), i.format = i.format || "float64";
  const u = i.format?.includes("int"), o = u ? "int" : "number", [c, f] = O0[i.format];
  n._zod.onattach.push((d) => {
    const p = d._zod.bag;
    p.format = i.format, p.minimum = c, p.maximum = f, u && (p.pattern = gb);
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
}), wb = /* @__PURE__ */ U("$ZodCheckMaxLength", (n, i) => {
  var u;
  Tt.init(n, i), (u = n._zod.def).when ?? (u.when = (o) => {
    const c = o.value;
    return !Qs(c) && c.length !== void 0;
  }), n._zod.onattach.push((o) => {
    const c = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    i.maximum < c && (o._zod.bag.maximum = i.maximum);
  }), n._zod.check = (o) => {
    const c = o.value;
    if (c.length <= i.maximum)
      return;
    const d = Js(c);
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
}), Eb = /* @__PURE__ */ U("$ZodCheckMinLength", (n, i) => {
  var u;
  Tt.init(n, i), (u = n._zod.def).when ?? (u.when = (o) => {
    const c = o.value;
    return !Qs(c) && c.length !== void 0;
  }), n._zod.onattach.push((o) => {
    const c = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    i.minimum > c && (o._zod.bag.minimum = i.minimum);
  }), n._zod.check = (o) => {
    const c = o.value;
    if (c.length >= i.minimum)
      return;
    const d = Js(c);
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
}), Ab = /* @__PURE__ */ U("$ZodCheckLengthEquals", (n, i) => {
  var u;
  Tt.init(n, i), (u = n._zod.def).when ?? (u.when = (o) => {
    const c = o.value;
    return !Qs(c) && c.length !== void 0;
  }), n._zod.onattach.push((o) => {
    const c = o._zod.bag;
    c.minimum = i.length, c.maximum = i.length, c.length = i.length;
  }), n._zod.check = (o) => {
    const c = o.value, f = c.length;
    if (f === i.length)
      return;
    const d = Js(c), p = f > i.length;
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
}), ao = /* @__PURE__ */ U("$ZodCheckStringFormat", (n, i) => {
  var u, o;
  Tt.init(n, i), n._zod.onattach.push((c) => {
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
}), xb = /* @__PURE__ */ U("$ZodCheckRegex", (n, i) => {
  ao.init(n, i), n._zod.check = (u) => {
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
}), Ob = /* @__PURE__ */ U("$ZodCheckLowerCase", (n, i) => {
  i.pattern ?? (i.pattern = _b), ao.init(n, i);
}), Cb = /* @__PURE__ */ U("$ZodCheckUpperCase", (n, i) => {
  i.pattern ?? (i.pattern = Sb), ao.init(n, i);
}), Mb = /* @__PURE__ */ U("$ZodCheckIncludes", (n, i) => {
  Tt.init(n, i);
  const u = oi(i.includes), o = new RegExp(typeof i.position == "number" ? `^.{${i.position}}${u}` : u);
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
}), Nb = /* @__PURE__ */ U("$ZodCheckStartsWith", (n, i) => {
  Tt.init(n, i);
  const u = new RegExp(`^${oi(i.prefix)}.*`);
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
}), jb = /* @__PURE__ */ U("$ZodCheckEndsWith", (n, i) => {
  Tt.init(n, i);
  const u = new RegExp(`.*${oi(i.suffix)}$`);
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
}), Db = /* @__PURE__ */ U("$ZodCheckOverwrite", (n, i) => {
  Tt.init(n, i), n._zod.check = (u) => {
    u.value = i.tx(u.value);
  };
});
class Zb {
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
const Rb = {
  major: 4,
  minor: 4,
  patch: 3
}, $e = /* @__PURE__ */ U("$ZodType", (n, i) => {
  var u;
  n ?? (n = {}), n._zod.def = i, n._zod.bag = n._zod.bag || {}, n._zod.version = Rb;
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
      let h = li(d), y;
      for (const S of p) {
        if (S._zod.def.when) {
          if (U0(d) || !S._zod.def.when(d))
            continue;
        } else if (h)
          continue;
        const E = d.issues.length, A = S._zod.check(d);
        if (A instanceof Promise && v?.async === !1)
          throw new ui();
        if (y || A instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await A, d.issues.length !== E && (h || (h = li(d, E)));
          });
        else {
          if (d.issues.length === E)
            continue;
          h || (h = li(d, E));
        }
      }
      return y ? y.then(() => d) : d;
    }, f = (d, p, v) => {
      if (li(d))
        return d.aborted = !0, d;
      const h = c(p, o, v);
      if (h instanceof Promise) {
        if (v.async === !1)
          throw new ui();
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
          throw new ui();
        return v.then((h) => c(h, o, p));
      }
      return c(v, o, p);
    };
  }
  je(n, "~standard", () => ({
    validate: (c) => {
      try {
        const f = X0(n, c);
        return f.success ? { value: f.data } : { issues: f.error?.issues };
      } catch {
        return H0(n, c).then((d) => d.success ? { value: d.data } : { issues: d.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Fs = /* @__PURE__ */ U("$ZodString", (n, i) => {
  $e.init(n, i), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? vb(n._zod.bag), n._zod.parse = (u, o) => {
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
}), Xe = /* @__PURE__ */ U("$ZodStringFormat", (n, i) => {
  ao.init(n, i), Fs.init(n, i);
}), Ub = /* @__PURE__ */ U("$ZodGUID", (n, i) => {
  i.pattern ?? (i.pattern = nb), Xe.init(n, i);
}), kb = /* @__PURE__ */ U("$ZodUUID", (n, i) => {
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
    i.pattern ?? (i.pattern = wp(o));
  } else
    i.pattern ?? (i.pattern = wp());
  Xe.init(n, i);
}), Yb = /* @__PURE__ */ U("$ZodEmail", (n, i) => {
  i.pattern ?? (i.pattern = ab), Xe.init(n, i);
}), Xb = /* @__PURE__ */ U("$ZodURL", (n, i) => {
  Xe.init(n, i), n._zod.check = (u) => {
    try {
      const o = u.value.trim();
      if (!i.normalize && i.protocol?.source === fb.source && !/^https?:\/\//i.test(o)) {
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
}), Hb = /* @__PURE__ */ U("$ZodEmoji", (n, i) => {
  i.pattern ?? (i.pattern = lb()), Xe.init(n, i);
}), Bb = /* @__PURE__ */ U("$ZodNanoID", (n, i) => {
  i.pattern ?? (i.pattern = eb), Xe.init(n, i);
}), qb = /* @__PURE__ */ U("$ZodCUID", (n, i) => {
  i.pattern ?? (i.pattern = J0), Xe.init(n, i);
}), Vb = /* @__PURE__ */ U("$ZodCUID2", (n, i) => {
  i.pattern ?? (i.pattern = W0), Xe.init(n, i);
}), $b = /* @__PURE__ */ U("$ZodULID", (n, i) => {
  i.pattern ?? (i.pattern = P0), Xe.init(n, i);
}), Lb = /* @__PURE__ */ U("$ZodXID", (n, i) => {
  i.pattern ?? (i.pattern = F0), Xe.init(n, i);
}), Gb = /* @__PURE__ */ U("$ZodKSUID", (n, i) => {
  i.pattern ?? (i.pattern = I0), Xe.init(n, i);
}), Qb = /* @__PURE__ */ U("$ZodISODateTime", (n, i) => {
  i.pattern ?? (i.pattern = hb(i)), Xe.init(n, i);
}), Kb = /* @__PURE__ */ U("$ZodISODate", (n, i) => {
  i.pattern ?? (i.pattern = mb), Xe.init(n, i);
}), Jb = /* @__PURE__ */ U("$ZodISOTime", (n, i) => {
  i.pattern ?? (i.pattern = pb(i)), Xe.init(n, i);
}), Wb = /* @__PURE__ */ U("$ZodISODuration", (n, i) => {
  i.pattern ?? (i.pattern = tb), Xe.init(n, i);
}), Pb = /* @__PURE__ */ U("$ZodIPv4", (n, i) => {
  i.pattern ?? (i.pattern = ub), Xe.init(n, i), n._zod.bag.format = "ipv4";
}), Fb = /* @__PURE__ */ U("$ZodIPv6", (n, i) => {
  i.pattern ?? (i.pattern = ob), Xe.init(n, i), n._zod.bag.format = "ipv6", n._zod.check = (u) => {
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
}), Ib = /* @__PURE__ */ U("$ZodCIDRv4", (n, i) => {
  i.pattern ?? (i.pattern = rb), Xe.init(n, i);
}), e_ = /* @__PURE__ */ U("$ZodCIDRv6", (n, i) => {
  i.pattern ?? (i.pattern = sb), Xe.init(n, i), n._zod.check = (u) => {
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
function _h(n) {
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
const t_ = /* @__PURE__ */ U("$ZodBase64", (n, i) => {
  i.pattern ?? (i.pattern = cb), Xe.init(n, i), n._zod.bag.contentEncoding = "base64", n._zod.check = (u) => {
    _h(u.value) || u.issues.push({
      code: "invalid_format",
      format: "base64",
      input: u.value,
      inst: n,
      continue: !i.abort
    });
  };
});
function n_(n) {
  if (!ph.test(n))
    return !1;
  const i = n.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), u = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return _h(u);
}
const a_ = /* @__PURE__ */ U("$ZodBase64URL", (n, i) => {
  i.pattern ?? (i.pattern = ph), Xe.init(n, i), n._zod.bag.contentEncoding = "base64url", n._zod.check = (u) => {
    n_(u.value) || u.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: u.value,
      inst: n,
      continue: !i.abort
    });
  };
}), i_ = /* @__PURE__ */ U("$ZodE164", (n, i) => {
  i.pattern ?? (i.pattern = db), Xe.init(n, i);
});
function l_(n, i = null) {
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
const u_ = /* @__PURE__ */ U("$ZodJWT", (n, i) => {
  Xe.init(n, i), n._zod.check = (u) => {
    l_(u.value, i.alg) || u.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: u.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Sh = /* @__PURE__ */ U("$ZodNumber", (n, i) => {
  $e.init(n, i), n._zod.pattern = n._zod.bag.pattern ?? yb, n._zod.parse = (u, o) => {
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
}), o_ = /* @__PURE__ */ U("$ZodNumberFormat", (n, i) => {
  Tb.init(n, i), Sh.init(n, i);
}), r_ = /* @__PURE__ */ U("$ZodBoolean", (n, i) => {
  $e.init(n, i), n._zod.pattern = bb, n._zod.parse = (u, o) => {
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
}), s_ = /* @__PURE__ */ U("$ZodUnknown", (n, i) => {
  $e.init(n, i), n._zod.parse = (u) => u;
}), c_ = /* @__PURE__ */ U("$ZodNever", (n, i) => {
  $e.init(n, i), n._zod.parse = (u, o) => (u.issues.push({
    expected: "never",
    code: "invalid_type",
    input: u.value,
    inst: n
  }), u);
});
function Ep(n, i, u) {
  n.issues.length && i.issues.push(...ch(u, n.issues)), i.value[u] = n.value;
}
const f_ = /* @__PURE__ */ U("$ZodArray", (n, i) => {
  $e.init(n, i), n._zod.parse = (u, o) => {
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
      v instanceof Promise ? f.push(v.then((h) => Ep(h, u, d))) : Ep(v, u, d);
    }
    return f.length ? Promise.all(f).then(() => u) : u;
  };
});
function Qu(n, i, u, o, c, f) {
  const d = u in o;
  if (n.issues.length) {
    if (c && f && !d)
      return;
    i.issues.push(...ch(u, n.issues));
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
function zh(n) {
  const i = Object.keys(n.shape);
  for (const o of i)
    if (!n.shape?.[o]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${o}": expected a Zod schema`);
  const u = x0(n.shape);
  return {
    ...n,
    keys: i,
    keySet: new Set(i),
    numKeys: i.length,
    optionalKeys: new Set(u)
  };
}
function Th(n, i, u, o, c, f) {
  const d = [], p = c.keySet, v = c.catchall._zod, h = v.def.type, y = v.optin === "optional", S = v.optout === "optional";
  for (const E in i) {
    if (E === "__proto__" || p.has(E))
      continue;
    if (h === "never") {
      d.push(E);
      continue;
    }
    const A = v.run({ value: i[E], issues: [] }, o);
    A instanceof Promise ? n.push(A.then((M) => Qu(M, u, E, i, y, S))) : Qu(A, u, E, i, y, S);
  }
  return d.length && u.issues.push({
    code: "unrecognized_keys",
    keys: d,
    input: i,
    inst: f
  }), n.length ? Promise.all(n).then(() => u) : u;
}
const d_ = /* @__PURE__ */ U("$ZodObject", (n, i) => {
  if ($e.init(n, i), !Object.getOwnPropertyDescriptor(i, "shape")?.get) {
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
  const o = Gs(() => zh(i));
  je(n._zod, "propValues", () => {
    const p = i.shape, v = {};
    for (const h in p) {
      const y = p[h]._zod;
      if (y.values) {
        v[h] ?? (v[h] = /* @__PURE__ */ new Set());
        for (const S of y.values)
          v[h].add(S);
      }
    }
    return v;
  });
  const c = Gu, f = i.catchall;
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
    const y = [], S = d.shape;
    for (const E of d.keys) {
      const A = S[E], M = A._zod.optin === "optional", q = A._zod.optout === "optional", X = A._zod.run({ value: h[E], issues: [] }, v);
      X instanceof Promise ? y.push(X.then((R) => Qu(R, p, E, h, M, q))) : Qu(X, p, E, h, M, q);
    }
    return f ? Th(y, h, p, v, o.value, n) : y.length ? Promise.all(y).then(() => p) : p;
  };
}), m_ = /* @__PURE__ */ U("$ZodObjectJIT", (n, i) => {
  d_.init(n, i);
  const u = n._zod.parse, o = Gs(() => zh(i)), c = (E) => {
    const A = new Zb(["shape", "payload", "ctx"]), M = o.value, q = (V) => {
      const B = Tp(V);
      return `shape[${B}]._zod.run({ value: input[${B}], issues: [] }, ctx)`;
    };
    A.write("const input = payload.value;");
    const X = /* @__PURE__ */ Object.create(null);
    let R = 0;
    for (const V of M.keys)
      X[V] = `key_${R++}`;
    A.write("const newResult = {};");
    for (const V of M.keys) {
      const B = X[V], G = Tp(V), ee = E[V], K = ee?._zod?.optin === "optional", ue = ee?._zod?.optout === "optional";
      A.write(`const ${B} = ${q(V)};`), K && ue ? A.write(`
        if (${B}.issues.length) {
          if (${G} in input) {
            payload.issues = payload.issues.concat(${B}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${G}, ...iss.path] : [${G}]
            })));
          }
        }
        
        if (${B}.value === undefined) {
          if (${G} in input) {
            newResult[${G}] = undefined;
          }
        } else {
          newResult[${G}] = ${B}.value;
        }
        
      `) : K ? A.write(`
        if (${B}.issues.length) {
          payload.issues = payload.issues.concat(${B}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${G}, ...iss.path] : [${G}]
          })));
        }
        
        if (${B}.value === undefined) {
          if (${G} in input) {
            newResult[${G}] = undefined;
          }
        } else {
          newResult[${G}] = ${B}.value;
        }
        
      `) : A.write(`
        const ${B}_present = ${G} in input;
        if (${B}.issues.length) {
          payload.issues = payload.issues.concat(${B}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${G}, ...iss.path] : [${G}]
          })));
        }
        if (!${B}_present && !${B}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${G}]
          });
        }

        if (${B}_present) {
          if (${B}.value === undefined) {
            newResult[${G}] = undefined;
          } else {
            newResult[${G}] = ${B}.value;
          }
        }

      `);
    }
    A.write("payload.value = newResult;"), A.write("return payload;");
    const Q = A.compile();
    return (V, B) => Q(E, V, B);
  };
  let f;
  const d = Gu, p = !Ls.jitless, h = p && E0.value, y = i.catchall;
  let S;
  n._zod.parse = (E, A) => {
    S ?? (S = o.value);
    const M = E.value;
    return d(M) ? p && h && A?.async === !1 && A.jitless !== !0 ? (f || (f = c(i.shape)), E = f(E, A), y ? Th([], M, E, A, S, n) : E) : u(E, A) : (E.issues.push({
      expected: "object",
      code: "invalid_type",
      input: M,
      inst: n
    }), E);
  };
});
function Ap(n, i, u, o) {
  for (const f of n)
    if (f.issues.length === 0)
      return i.value = f.value, i;
  const c = n.filter((f) => !li(f));
  return c.length === 1 ? (i.value = c[0].value, c[0]) : (i.issues.push({
    code: "invalid_union",
    input: i.value,
    inst: u,
    errors: n.map((f) => f.issues.map((d) => ba(d, o, ya())))
  }), i);
}
const p_ = /* @__PURE__ */ U("$ZodUnion", (n, i) => {
  $e.init(n, i), je(n._zod, "optin", () => i.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), je(n._zod, "optout", () => i.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), je(n._zod, "values", () => {
    if (i.options.every((o) => o._zod.values))
      return new Set(i.options.flatMap((o) => Array.from(o._zod.values)));
  }), je(n._zod, "pattern", () => {
    if (i.options.every((o) => o._zod.pattern)) {
      const o = i.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${o.map((c) => Ks(c.source)).join("|")})$`);
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
    return f ? Promise.all(d).then((p) => Ap(p, o, n, c)) : Ap(d, o, n, c);
  };
}), h_ = /* @__PURE__ */ U("$ZodIntersection", (n, i) => {
  $e.init(n, i), n._zod.parse = (u, o) => {
    const c = u.value, f = i.left._zod.run({ value: c, issues: [] }, o), d = i.right._zod.run({ value: c, issues: [] }, o);
    return f instanceof Promise || d instanceof Promise ? Promise.all([f, d]).then(([v, h]) => xp(u, v, h)) : xp(u, f, d);
  };
});
function Xs(n, i) {
  if (n === i)
    return { valid: !0, data: n };
  if (n instanceof Date && i instanceof Date && +n == +i)
    return { valid: !0, data: n };
  if (cl(n) && cl(i)) {
    const u = Object.keys(i), o = Object.keys(n).filter((f) => u.indexOf(f) !== -1), c = { ...n, ...i };
    for (const f of o) {
      const d = Xs(n[f], i[f]);
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
      const c = n[o], f = i[o], d = Xs(c, f);
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
function xp(n, i, u) {
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
  if (f.length && c && n.issues.push({ ...c, keys: f }), li(n))
    return n;
  const d = Xs(i.value, u.value);
  if (!d.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(d.mergeErrorPath)}`);
  return n.value = d.data, n;
}
const v_ = /* @__PURE__ */ U("$ZodEnum", (n, i) => {
  $e.init(n, i);
  const u = oh(i.entries), o = new Set(u);
  n._zod.values = o, n._zod.pattern = new RegExp(`^(${u.filter((c) => A0.has(typeof c)).map((c) => typeof c == "string" ? oi(c) : c.toString()).join("|")})$`), n._zod.parse = (c, f) => {
    const d = c.value;
    return o.has(d) || c.issues.push({
      code: "invalid_value",
      values: u,
      input: d,
      inst: n
    }), c;
  };
}), g_ = /* @__PURE__ */ U("$ZodLiteral", (n, i) => {
  if ($e.init(n, i), i.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const u = new Set(i.values);
  n._zod.values = u, n._zod.pattern = new RegExp(`^(${i.values.map((o) => typeof o == "string" ? oi(o) : o ? oi(o.toString()) : String(o)).join("|")})$`), n._zod.parse = (o, c) => {
    const f = o.value;
    return u.has(f) || o.issues.push({
      code: "invalid_value",
      values: i.values,
      input: f,
      inst: n
    }), o;
  };
}), y_ = /* @__PURE__ */ U("$ZodTransform", (n, i) => {
  $e.init(n, i), n._zod.optin = "optional", n._zod.parse = (u, o) => {
    if (o.direction === "backward")
      throw new uh(n.constructor.name);
    const c = i.transform(u.value, u);
    if (o.async)
      return (c instanceof Promise ? c : Promise.resolve(c)).then((d) => (u.value = d, u.fallback = !0, u));
    if (c instanceof Promise)
      throw new ui();
    return u.value = c, u.fallback = !0, u;
  };
});
function Op(n, i) {
  return i === void 0 && (n.issues.length || n.fallback) ? { issues: [], value: void 0 } : n;
}
const wh = /* @__PURE__ */ U("$ZodOptional", (n, i) => {
  $e.init(n, i), n._zod.optin = "optional", n._zod.optout = "optional", je(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, void 0]) : void 0), je(n._zod, "pattern", () => {
    const u = i.innerType._zod.pattern;
    return u ? new RegExp(`^(${Ks(u.source)})?$`) : void 0;
  }), n._zod.parse = (u, o) => {
    if (i.innerType._zod.optin === "optional") {
      const c = u.value, f = i.innerType._zod.run(u, o);
      return f instanceof Promise ? f.then((d) => Op(d, c)) : Op(f, c);
    }
    return u.value === void 0 ? u : i.innerType._zod.run(u, o);
  };
}), b_ = /* @__PURE__ */ U("$ZodExactOptional", (n, i) => {
  wh.init(n, i), je(n._zod, "values", () => i.innerType._zod.values), je(n._zod, "pattern", () => i.innerType._zod.pattern), n._zod.parse = (u, o) => i.innerType._zod.run(u, o);
}), __ = /* @__PURE__ */ U("$ZodNullable", (n, i) => {
  $e.init(n, i), je(n._zod, "optin", () => i.innerType._zod.optin), je(n._zod, "optout", () => i.innerType._zod.optout), je(n._zod, "pattern", () => {
    const u = i.innerType._zod.pattern;
    return u ? new RegExp(`^(${Ks(u.source)}|null)$`) : void 0;
  }), je(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, null]) : void 0), n._zod.parse = (u, o) => u.value === null ? u : i.innerType._zod.run(u, o);
}), S_ = /* @__PURE__ */ U("$ZodDefault", (n, i) => {
  $e.init(n, i), n._zod.optin = "optional", je(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (u, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(u, o);
    if (u.value === void 0)
      return u.value = i.defaultValue, u;
    const c = i.innerType._zod.run(u, o);
    return c instanceof Promise ? c.then((f) => Cp(f, i)) : Cp(c, i);
  };
});
function Cp(n, i) {
  return n.value === void 0 && (n.value = i.defaultValue), n;
}
const z_ = /* @__PURE__ */ U("$ZodPrefault", (n, i) => {
  $e.init(n, i), n._zod.optin = "optional", je(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (u, o) => (o.direction === "backward" || u.value === void 0 && (u.value = i.defaultValue), i.innerType._zod.run(u, o));
}), T_ = /* @__PURE__ */ U("$ZodNonOptional", (n, i) => {
  $e.init(n, i), je(n._zod, "values", () => {
    const u = i.innerType._zod.values;
    return u ? new Set([...u].filter((o) => o !== void 0)) : void 0;
  }), n._zod.parse = (u, o) => {
    const c = i.innerType._zod.run(u, o);
    return c instanceof Promise ? c.then((f) => Mp(f, n)) : Mp(c, n);
  };
});
function Mp(n, i) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: i
  }), n;
}
const w_ = /* @__PURE__ */ U("$ZodCatch", (n, i) => {
  $e.init(n, i), n._zod.optin = "optional", je(n._zod, "optout", () => i.innerType._zod.optout), je(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (u, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(u, o);
    const c = i.innerType._zod.run(u, o);
    return c instanceof Promise ? c.then((f) => (u.value = f.value, f.issues.length && (u.value = i.catchValue({
      ...u,
      error: {
        issues: f.issues.map((d) => ba(d, o, ya()))
      },
      input: u.value
    }), u.issues = [], u.fallback = !0), u)) : (u.value = c.value, c.issues.length && (u.value = i.catchValue({
      ...u,
      error: {
        issues: c.issues.map((f) => ba(f, o, ya()))
      },
      input: u.value
    }), u.issues = [], u.fallback = !0), u);
  };
}), E_ = /* @__PURE__ */ U("$ZodPipe", (n, i) => {
  $e.init(n, i), je(n._zod, "values", () => i.in._zod.values), je(n._zod, "optin", () => i.in._zod.optin), je(n._zod, "optout", () => i.out._zod.optout), je(n._zod, "propValues", () => i.in._zod.propValues), n._zod.parse = (u, o) => {
    if (o.direction === "backward") {
      const f = i.out._zod.run(u, o);
      return f instanceof Promise ? f.then((d) => Xu(d, i.in, o)) : Xu(f, i.in, o);
    }
    const c = i.in._zod.run(u, o);
    return c instanceof Promise ? c.then((f) => Xu(f, i.out, o)) : Xu(c, i.out, o);
  };
});
function Xu(n, i, u) {
  return n.issues.length ? (n.aborted = !0, n) : i._zod.run({ value: n.value, issues: n.issues, fallback: n.fallback }, u);
}
const A_ = /* @__PURE__ */ U("$ZodReadonly", (n, i) => {
  $e.init(n, i), je(n._zod, "propValues", () => i.innerType._zod.propValues), je(n._zod, "values", () => i.innerType._zod.values), je(n._zod, "optin", () => i.innerType?._zod?.optin), je(n._zod, "optout", () => i.innerType?._zod?.optout), n._zod.parse = (u, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(u, o);
    const c = i.innerType._zod.run(u, o);
    return c instanceof Promise ? c.then(Np) : Np(c);
  };
});
function Np(n) {
  return n.value = Object.freeze(n.value), n;
}
const x_ = /* @__PURE__ */ U("$ZodCustom", (n, i) => {
  Tt.init(n, i), $e.init(n, i), n._zod.parse = (u, o) => u, n._zod.check = (u) => {
    const o = u.value, c = i.fn(o);
    if (c instanceof Promise)
      return c.then((f) => jp(f, u, o, n));
    jp(c, u, o, n);
  };
});
function jp(n, i, u, o) {
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
    o._zod.def.params && (c.params = o._zod.def.params), i.issues.push(fl(c));
  }
}
var Dp;
class O_ {
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
function C_() {
  return new O_();
}
(Dp = globalThis).__zod_globalRegistry ?? (Dp.__zod_globalRegistry = C_());
const ol = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function M_(n, i) {
  return new n({
    type: "string",
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function N_(n, i) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Zp(n, i) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function j_(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function D_(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Z_(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function R_(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function U_(n, i) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function k_(n, i) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Y_(n, i) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function X_(n, i) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function H_(n, i) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function B_(n, i) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function q_(n, i) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function V_(n, i) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function $_(n, i) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function L_(n, i) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function G_(n, i) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Q_(n, i) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function K_(n, i) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function J_(n, i) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function W_(n, i) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function P_(n, i) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function F_(n, i) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function I_(n, i) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function e1(n, i) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function t1(n, i) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function n1(n, i) {
  return new n({
    type: "number",
    checks: [],
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function a1(n, i) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function i1(n, i) {
  return new n({
    type: "boolean",
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function l1(n) {
  return new n({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function u1(n, i) {
  return new n({
    type: "never",
    ...I(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Rp(n, i) {
  return new yh({
    check: "less_than",
    ...I(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Cs(n, i) {
  return new yh({
    check: "less_than",
    ...I(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Up(n, i) {
  return new bh({
    check: "greater_than",
    ...I(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Ms(n, i) {
  return new bh({
    check: "greater_than",
    ...I(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function kp(n, i) {
  return new zb({
    check: "multiple_of",
    ...I(i),
    value: n
  });
}
// @__NO_SIDE_EFFECTS__
function Eh(n, i) {
  return new wb({
    check: "max_length",
    ...I(i),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function Ku(n, i) {
  return new Eb({
    check: "min_length",
    ...I(i),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function Ah(n, i) {
  return new Ab({
    check: "length_equals",
    ...I(i),
    length: n
  });
}
// @__NO_SIDE_EFFECTS__
function o1(n, i) {
  return new xb({
    check: "string_format",
    format: "regex",
    ...I(i),
    pattern: n
  });
}
// @__NO_SIDE_EFFECTS__
function r1(n) {
  return new Ob({
    check: "string_format",
    format: "lowercase",
    ...I(n)
  });
}
// @__NO_SIDE_EFFECTS__
function s1(n) {
  return new Cb({
    check: "string_format",
    format: "uppercase",
    ...I(n)
  });
}
// @__NO_SIDE_EFFECTS__
function c1(n, i) {
  return new Mb({
    check: "string_format",
    format: "includes",
    ...I(i),
    includes: n
  });
}
// @__NO_SIDE_EFFECTS__
function f1(n, i) {
  return new Nb({
    check: "string_format",
    format: "starts_with",
    ...I(i),
    prefix: n
  });
}
// @__NO_SIDE_EFFECTS__
function d1(n, i) {
  return new jb({
    check: "string_format",
    format: "ends_with",
    ...I(i),
    suffix: n
  });
}
// @__NO_SIDE_EFFECTS__
function si(n) {
  return new Db({
    check: "overwrite",
    tx: n
  });
}
// @__NO_SIDE_EFFECTS__
function m1(n) {
  return /* @__PURE__ */ si((i) => i.normalize(n));
}
// @__NO_SIDE_EFFECTS__
function p1() {
  return /* @__PURE__ */ si((n) => n.trim());
}
// @__NO_SIDE_EFFECTS__
function h1() {
  return /* @__PURE__ */ si((n) => n.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function v1() {
  return /* @__PURE__ */ si((n) => n.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function g1() {
  return /* @__PURE__ */ si((n) => w0(n));
}
// @__NO_SIDE_EFFECTS__
function y1(n, i, u) {
  return new n({
    type: "array",
    element: i,
    // get element() {
    //   return element;
    // },
    ...I(u)
  });
}
// @__NO_SIDE_EFFECTS__
function b1(n, i, u) {
  return new n({
    type: "custom",
    check: "custom",
    fn: i,
    ...I(u)
  });
}
// @__NO_SIDE_EFFECTS__
function _1(n, i) {
  const u = /* @__PURE__ */ S1((o) => (o.addIssue = (c) => {
    if (typeof c == "string")
      o.issues.push(fl(c, o.value, u._zod.def));
    else {
      const f = c;
      f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = o.value), f.inst ?? (f.inst = u), f.continue ?? (f.continue = !u._zod.def.abort), o.issues.push(fl(f));
    }
  }, n(o.value, o)), i);
  return u;
}
// @__NO_SIDE_EFFECTS__
function S1(n, i) {
  const u = new Tt({
    check: "custom",
    ...I(i)
  });
  return u._zod.check = n, u;
}
function xh(n) {
  let i = n?.target ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), {
    processors: n.processors ?? {},
    metadataRegistry: n?.metadata ?? ol,
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
function ct(n, i, u = { path: [], schemaPath: [] }) {
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
    const y = {
      ...u,
      schemaPath: [...u.schemaPath, n],
      path: u.path
    };
    if (n._zod.processJSONSchema)
      n._zod.processJSONSchema(i, d.schema, y);
    else {
      const E = d.schema, A = i.processors[c.type];
      if (!A)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${c.type}`);
      A(n, i, E, y);
    }
    const S = n._zod.parent;
    S && (d.ref || (d.ref = S), ct(S, i, y), i.seen.get(S).isParent = !0);
  }
  const v = i.metadataRegistry.get(n);
  return v && Object.assign(d.schema, v), i.io === "input" && mt(n) && (delete d.schema.examples, delete d.schema.default), i.io === "input" && "_prefault" in d.schema && ((o = d.schema).default ?? (o.default = d.schema._prefault)), delete d.schema._prefault, i.seen.get(n).schema;
}
function Oh(n, i) {
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
      const S = n.external.registry.get(d[0])?.id, E = n.external.uri ?? ((M) => M);
      if (S)
        return { ref: E(S) };
      const A = d[1].defId ?? d[1].schema.id ?? `schema${n.counter++}`;
      return d[1].defId = A, { defId: A, ref: `${E("__shared")}#/${p}/${A}` };
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
    for (const S in y)
      delete y[S];
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
function Ch(n, i) {
  const u = n.seen.get(i);
  if (!u)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = (p) => {
    const v = n.seen.get(p);
    if (v.ref === null)
      return;
    const h = v.def ?? v.schema, y = { ...h }, S = v.ref;
    if (v.ref = null, S) {
      o(S);
      const A = n.seen.get(S), M = A.schema;
      if (M.$ref && (n.target === "draft-07" || n.target === "draft-04" || n.target === "openapi-3.0") ? (h.allOf = h.allOf ?? [], h.allOf.push(M)) : Object.assign(h, M), Object.assign(h, y), p._zod.parent === S)
        for (const X in h)
          X === "$ref" || X === "allOf" || X in y || delete h[X];
      if (M.$ref && A.def)
        for (const X in h)
          X === "$ref" || X === "allOf" || X in A.def && JSON.stringify(h[X]) === JSON.stringify(A.def[X]) && delete h[X];
    }
    const E = p._zod.parent;
    if (E && E !== S) {
      o(E);
      const A = n.seen.get(E);
      if (A?.schema.$ref && (h.$ref = A.schema.$ref, A.def))
        for (const M in h)
          M === "$ref" || M === "allOf" || M in A.def && JSON.stringify(h[M]) === JSON.stringify(A.def[M]) && delete h[M];
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
          input: Ju(i, "input", n.processors),
          output: Ju(i, "output", n.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), p;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function mt(n, i) {
  const u = i ?? { seen: /* @__PURE__ */ new Set() };
  if (u.seen.has(n))
    return !1;
  u.seen.add(n);
  const o = n._zod.def;
  if (o.type === "transform")
    return !0;
  if (o.type === "array")
    return mt(o.element, u);
  if (o.type === "set")
    return mt(o.valueType, u);
  if (o.type === "lazy")
    return mt(o.getter(), u);
  if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault")
    return mt(o.innerType, u);
  if (o.type === "intersection")
    return mt(o.left, u) || mt(o.right, u);
  if (o.type === "record" || o.type === "map")
    return mt(o.keyType, u) || mt(o.valueType, u);
  if (o.type === "pipe")
    return n._zod.traits.has("$ZodCodec") ? !0 : mt(o.in, u) || mt(o.out, u);
  if (o.type === "object") {
    for (const c in o.shape)
      if (mt(o.shape[c], u))
        return !0;
    return !1;
  }
  if (o.type === "union") {
    for (const c of o.options)
      if (mt(c, u))
        return !0;
    return !1;
  }
  if (o.type === "tuple") {
    for (const c of o.items)
      if (mt(c, u))
        return !0;
    return !!(o.rest && mt(o.rest, u));
  }
  return !1;
}
const z1 = (n, i = {}) => (u) => {
  const o = xh({ ...u, processors: i });
  return ct(n, o), Oh(o, n), Ch(o, n);
}, Ju = (n, i, u = {}) => (o) => {
  const { libraryOptions: c, target: f } = o ?? {}, d = xh({ ...c ?? {}, target: f, io: i, processors: u });
  return ct(n, d), Oh(d, n), Ch(d, n);
}, T1 = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, w1 = (n, i, u, o) => {
  const c = u;
  c.type = "string";
  const { minimum: f, maximum: d, format: p, patterns: v, contentEncoding: h } = n._zod.bag;
  if (typeof f == "number" && (c.minLength = f), typeof d == "number" && (c.maxLength = d), p && (c.format = T1[p] ?? p, c.format === "" && delete c.format, p === "time" && delete c.format), h && (c.contentEncoding = h), v && v.size > 0) {
    const y = [...v];
    y.length === 1 ? c.pattern = y[0].source : y.length > 1 && (c.allOf = [
      ...y.map((S) => ({
        ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: S.source
      }))
    ]);
  }
}, E1 = (n, i, u, o) => {
  const c = u, { minimum: f, maximum: d, format: p, multipleOf: v, exclusiveMaximum: h, exclusiveMinimum: y } = n._zod.bag;
  typeof p == "string" && p.includes("int") ? c.type = "integer" : c.type = "number";
  const S = typeof y == "number" && y >= (f ?? Number.NEGATIVE_INFINITY), E = typeof h == "number" && h <= (d ?? Number.POSITIVE_INFINITY), A = i.target === "draft-04" || i.target === "openapi-3.0";
  S ? A ? (c.minimum = y, c.exclusiveMinimum = !0) : c.exclusiveMinimum = y : typeof f == "number" && (c.minimum = f), E ? A ? (c.maximum = h, c.exclusiveMaximum = !0) : c.exclusiveMaximum = h : typeof d == "number" && (c.maximum = d), typeof v == "number" && (c.multipleOf = v);
}, A1 = (n, i, u, o) => {
  u.type = "boolean";
}, x1 = (n, i, u, o) => {
  u.not = {};
}, O1 = (n, i, u, o) => {
}, C1 = (n, i, u, o) => {
  const c = n._zod.def, f = oh(c.entries);
  f.every((d) => typeof d == "number") && (u.type = "number"), f.every((d) => typeof d == "string") && (u.type = "string"), u.enum = f;
}, M1 = (n, i, u, o) => {
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
}, N1 = (n, i, u, o) => {
  if (i.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, j1 = (n, i, u, o) => {
  if (i.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, D1 = (n, i, u, o) => {
  const c = u, f = n._zod.def, { minimum: d, maximum: p } = n._zod.bag;
  typeof d == "number" && (c.minItems = d), typeof p == "number" && (c.maxItems = p), c.type = "array", c.items = ct(f.element, i, {
    ...o,
    path: [...o.path, "items"]
  });
}, Z1 = (n, i, u, o) => {
  const c = u, f = n._zod.def;
  c.type = "object", c.properties = {};
  const d = f.shape;
  for (const h in d)
    c.properties[h] = ct(d[h], i, {
      ...o,
      path: [...o.path, "properties", h]
    });
  const p = new Set(Object.keys(d)), v = new Set([...p].filter((h) => {
    const y = f.shape[h]._zod;
    return i.io === "input" ? y.optin === void 0 : y.optout === void 0;
  }));
  v.size > 0 && (c.required = Array.from(v)), f.catchall?._zod.def.type === "never" ? c.additionalProperties = !1 : f.catchall ? f.catchall && (c.additionalProperties = ct(f.catchall, i, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : i.io === "output" && (c.additionalProperties = !1);
}, R1 = (n, i, u, o) => {
  const c = n._zod.def, f = c.inclusive === !1, d = c.options.map((p, v) => ct(p, i, {
    ...o,
    path: [...o.path, f ? "oneOf" : "anyOf", v]
  }));
  f ? u.oneOf = d : u.anyOf = d;
}, U1 = (n, i, u, o) => {
  const c = n._zod.def, f = ct(c.left, i, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), d = ct(c.right, i, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), p = (h) => "allOf" in h && Object.keys(h).length === 1, v = [
    ...p(f) ? f.allOf : [f],
    ...p(d) ? d.allOf : [d]
  ];
  u.allOf = v;
}, k1 = (n, i, u, o) => {
  const c = n._zod.def, f = ct(c.innerType, i, o), d = i.seen.get(n);
  i.target === "openapi-3.0" ? (d.ref = c.innerType, u.nullable = !0) : u.anyOf = [f, { type: "null" }];
}, Y1 = (n, i, u, o) => {
  const c = n._zod.def;
  ct(c.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = c.innerType;
}, X1 = (n, i, u, o) => {
  const c = n._zod.def;
  ct(c.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = c.innerType, u.default = JSON.parse(JSON.stringify(c.defaultValue));
}, H1 = (n, i, u, o) => {
  const c = n._zod.def;
  ct(c.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = c.innerType, i.io === "input" && (u._prefault = JSON.parse(JSON.stringify(c.defaultValue)));
}, B1 = (n, i, u, o) => {
  const c = n._zod.def;
  ct(c.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = c.innerType;
  let d;
  try {
    d = c.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  u.default = d;
}, q1 = (n, i, u, o) => {
  const c = n._zod.def, f = c.in._zod.traits.has("$ZodTransform"), d = i.io === "input" ? f ? c.out : c.in : c.out;
  ct(d, i, o);
  const p = i.seen.get(n);
  p.ref = d;
}, V1 = (n, i, u, o) => {
  const c = n._zod.def;
  ct(c.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = c.innerType, u.readOnly = !0;
}, Mh = (n, i, u, o) => {
  const c = n._zod.def;
  ct(c.innerType, i, o);
  const f = i.seen.get(n);
  f.ref = c.innerType;
}, $1 = /* @__PURE__ */ U("ZodISODateTime", (n, i) => {
  Qb.init(n, i), He.init(n, i);
});
function L1(n) {
  return /* @__PURE__ */ F_($1, n);
}
const G1 = /* @__PURE__ */ U("ZodISODate", (n, i) => {
  Kb.init(n, i), He.init(n, i);
});
function Q1(n) {
  return /* @__PURE__ */ I_(G1, n);
}
const K1 = /* @__PURE__ */ U("ZodISOTime", (n, i) => {
  Jb.init(n, i), He.init(n, i);
});
function J1(n) {
  return /* @__PURE__ */ e1(K1, n);
}
const W1 = /* @__PURE__ */ U("ZodISODuration", (n, i) => {
  Wb.init(n, i), He.init(n, i);
});
function P1(n) {
  return /* @__PURE__ */ t1(W1, n);
}
const F1 = (n, i) => {
  dh.init(n, i), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (u) => Y0(n, u)
      // enumerable: false,
    },
    flatten: {
      value: (u) => k0(n, u)
      // enumerable: false,
    },
    addIssue: {
      value: (u) => {
        n.issues.push(u), n.message = JSON.stringify(n.issues, Ys, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (u) => {
        n.issues.push(...u), n.message = JSON.stringify(n.issues, Ys, 2);
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
}, Lt = /* @__PURE__ */ U("ZodError", F1, {
  Parent: Error
}), I1 = /* @__PURE__ */ Ws(Lt), eS = /* @__PURE__ */ Ps(Lt), tS = /* @__PURE__ */ to(Lt), nS = /* @__PURE__ */ no(Lt), aS = /* @__PURE__ */ B0(Lt), iS = /* @__PURE__ */ q0(Lt), lS = /* @__PURE__ */ V0(Lt), uS = /* @__PURE__ */ $0(Lt), oS = /* @__PURE__ */ L0(Lt), rS = /* @__PURE__ */ G0(Lt), sS = /* @__PURE__ */ Q0(Lt), cS = /* @__PURE__ */ K0(Lt), Yp = /* @__PURE__ */ new WeakMap();
function hl(n, i, u) {
  const o = Object.getPrototypeOf(n);
  let c = Yp.get(o);
  if (c || (c = /* @__PURE__ */ new Set(), Yp.set(o, c)), !c.has(i)) {
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
const Le = /* @__PURE__ */ U("ZodType", (n, i) => ($e.init(n, i), Object.assign(n["~standard"], {
  jsonSchema: {
    input: Ju(n, "input"),
    output: Ju(n, "output")
  }
}), n.toJSONSchema = z1(n, {}), n.def = i, n.type = i.type, Object.defineProperty(n, "_def", { value: i }), n.parse = (u, o) => I1(n, u, o, { callee: n.parse }), n.safeParse = (u, o) => tS(n, u, o), n.parseAsync = async (u, o) => eS(n, u, o, { callee: n.parseAsync }), n.safeParseAsync = async (u, o) => nS(n, u, o), n.spa = n.safeParseAsync, n.encode = (u, o) => aS(n, u, o), n.decode = (u, o) => iS(n, u, o), n.encodeAsync = async (u, o) => lS(n, u, o), n.decodeAsync = async (u, o) => uS(n, u, o), n.safeEncode = (u, o) => oS(n, u, o), n.safeDecode = (u, o) => rS(n, u, o), n.safeEncodeAsync = async (u, o) => sS(n, u, o), n.safeDecodeAsync = async (u, o) => cS(n, u, o), hl(n, "ZodType", {
  check(...u) {
    const o = this.def;
    return this.clone(Kn(o, {
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
    return Jn(this, u, o);
  },
  brand() {
    return this;
  },
  register(u, o) {
    return u.add(this, o), this;
  },
  refine(u, o) {
    return this.check(i2(u, o));
  },
  superRefine(u, o) {
    return this.check(l2(u, o));
  },
  overwrite(u) {
    return this.check(/* @__PURE__ */ si(u));
  },
  optional() {
    return qp(this);
  },
  exactOptional() {
    return LS(this);
  },
  nullable() {
    return Vp(this);
  },
  nullish() {
    return qp(Vp(this));
  },
  nonoptional(u) {
    return PS(this, u);
  },
  array() {
    return Wu(this);
  },
  or(u) {
    return Dh([this, u]);
  },
  and(u) {
    return HS(this, u);
  },
  transform(u) {
    return $p(this, VS(u));
  },
  default(u) {
    return KS(this, u);
  },
  prefault(u) {
    return WS(this, u);
  },
  catch(u) {
    return IS(this, u);
  },
  pipe(u) {
    return $p(this, u);
  },
  readonly() {
    return n2(this);
  },
  describe(u) {
    const o = this.clone();
    return ol.add(o, { description: u }), o;
  },
  meta(...u) {
    if (u.length === 0)
      return ol.get(this);
    const o = this.clone();
    return ol.add(o, u[0]), o;
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
    return ol.get(n)?.description;
  },
  configurable: !0
}), n)), Nh = /* @__PURE__ */ U("_ZodString", (n, i) => {
  Fs.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (o, c, f) => w1(n, o, c);
  const u = n._zod.bag;
  n.format = u.format ?? null, n.minLength = u.minimum ?? null, n.maxLength = u.maximum ?? null, hl(n, "_ZodString", {
    regex(...o) {
      return this.check(/* @__PURE__ */ o1(...o));
    },
    includes(...o) {
      return this.check(/* @__PURE__ */ c1(...o));
    },
    startsWith(...o) {
      return this.check(/* @__PURE__ */ f1(...o));
    },
    endsWith(...o) {
      return this.check(/* @__PURE__ */ d1(...o));
    },
    min(...o) {
      return this.check(/* @__PURE__ */ Ku(...o));
    },
    max(...o) {
      return this.check(/* @__PURE__ */ Eh(...o));
    },
    length(...o) {
      return this.check(/* @__PURE__ */ Ah(...o));
    },
    nonempty(...o) {
      return this.check(/* @__PURE__ */ Ku(1, ...o));
    },
    lowercase(o) {
      return this.check(/* @__PURE__ */ r1(o));
    },
    uppercase(o) {
      return this.check(/* @__PURE__ */ s1(o));
    },
    trim() {
      return this.check(/* @__PURE__ */ p1());
    },
    normalize(...o) {
      return this.check(/* @__PURE__ */ m1(...o));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ h1());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ v1());
    },
    slugify() {
      return this.check(/* @__PURE__ */ g1());
    }
  });
}), fS = /* @__PURE__ */ U("ZodString", (n, i) => {
  Fs.init(n, i), Nh.init(n, i), n.email = (u) => n.check(/* @__PURE__ */ N_(dS, u)), n.url = (u) => n.check(/* @__PURE__ */ U_(mS, u)), n.jwt = (u) => n.check(/* @__PURE__ */ P_(OS, u)), n.emoji = (u) => n.check(/* @__PURE__ */ k_(pS, u)), n.guid = (u) => n.check(/* @__PURE__ */ Zp(Xp, u)), n.uuid = (u) => n.check(/* @__PURE__ */ j_(Hu, u)), n.uuidv4 = (u) => n.check(/* @__PURE__ */ D_(Hu, u)), n.uuidv6 = (u) => n.check(/* @__PURE__ */ Z_(Hu, u)), n.uuidv7 = (u) => n.check(/* @__PURE__ */ R_(Hu, u)), n.nanoid = (u) => n.check(/* @__PURE__ */ Y_(hS, u)), n.guid = (u) => n.check(/* @__PURE__ */ Zp(Xp, u)), n.cuid = (u) => n.check(/* @__PURE__ */ X_(vS, u)), n.cuid2 = (u) => n.check(/* @__PURE__ */ H_(gS, u)), n.ulid = (u) => n.check(/* @__PURE__ */ B_(yS, u)), n.base64 = (u) => n.check(/* @__PURE__ */ K_(ES, u)), n.base64url = (u) => n.check(/* @__PURE__ */ J_(AS, u)), n.xid = (u) => n.check(/* @__PURE__ */ q_(bS, u)), n.ksuid = (u) => n.check(/* @__PURE__ */ V_(_S, u)), n.ipv4 = (u) => n.check(/* @__PURE__ */ $_(SS, u)), n.ipv6 = (u) => n.check(/* @__PURE__ */ L_(zS, u)), n.cidrv4 = (u) => n.check(/* @__PURE__ */ G_(TS, u)), n.cidrv6 = (u) => n.check(/* @__PURE__ */ Q_(wS, u)), n.e164 = (u) => n.check(/* @__PURE__ */ W_(xS, u)), n.datetime = (u) => n.check(L1(u)), n.date = (u) => n.check(Q1(u)), n.time = (u) => n.check(J1(u)), n.duration = (u) => n.check(P1(u));
});
function pt(n) {
  return /* @__PURE__ */ M_(fS, n);
}
const He = /* @__PURE__ */ U("ZodStringFormat", (n, i) => {
  Xe.init(n, i), Nh.init(n, i);
}), dS = /* @__PURE__ */ U("ZodEmail", (n, i) => {
  Yb.init(n, i), He.init(n, i);
}), Xp = /* @__PURE__ */ U("ZodGUID", (n, i) => {
  Ub.init(n, i), He.init(n, i);
}), Hu = /* @__PURE__ */ U("ZodUUID", (n, i) => {
  kb.init(n, i), He.init(n, i);
}), mS = /* @__PURE__ */ U("ZodURL", (n, i) => {
  Xb.init(n, i), He.init(n, i);
}), pS = /* @__PURE__ */ U("ZodEmoji", (n, i) => {
  Hb.init(n, i), He.init(n, i);
}), hS = /* @__PURE__ */ U("ZodNanoID", (n, i) => {
  Bb.init(n, i), He.init(n, i);
}), vS = /* @__PURE__ */ U("ZodCUID", (n, i) => {
  qb.init(n, i), He.init(n, i);
}), gS = /* @__PURE__ */ U("ZodCUID2", (n, i) => {
  Vb.init(n, i), He.init(n, i);
}), yS = /* @__PURE__ */ U("ZodULID", (n, i) => {
  $b.init(n, i), He.init(n, i);
}), bS = /* @__PURE__ */ U("ZodXID", (n, i) => {
  Lb.init(n, i), He.init(n, i);
}), _S = /* @__PURE__ */ U("ZodKSUID", (n, i) => {
  Gb.init(n, i), He.init(n, i);
}), SS = /* @__PURE__ */ U("ZodIPv4", (n, i) => {
  Pb.init(n, i), He.init(n, i);
}), zS = /* @__PURE__ */ U("ZodIPv6", (n, i) => {
  Fb.init(n, i), He.init(n, i);
}), TS = /* @__PURE__ */ U("ZodCIDRv4", (n, i) => {
  Ib.init(n, i), He.init(n, i);
}), wS = /* @__PURE__ */ U("ZodCIDRv6", (n, i) => {
  e_.init(n, i), He.init(n, i);
}), ES = /* @__PURE__ */ U("ZodBase64", (n, i) => {
  t_.init(n, i), He.init(n, i);
}), AS = /* @__PURE__ */ U("ZodBase64URL", (n, i) => {
  a_.init(n, i), He.init(n, i);
}), xS = /* @__PURE__ */ U("ZodE164", (n, i) => {
  i_.init(n, i), He.init(n, i);
}), OS = /* @__PURE__ */ U("ZodJWT", (n, i) => {
  u_.init(n, i), He.init(n, i);
}), jh = /* @__PURE__ */ U("ZodNumber", (n, i) => {
  Sh.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (o, c, f) => E1(n, o, c), hl(n, "ZodNumber", {
    gt(o, c) {
      return this.check(/* @__PURE__ */ Up(o, c));
    },
    gte(o, c) {
      return this.check(/* @__PURE__ */ Ms(o, c));
    },
    min(o, c) {
      return this.check(/* @__PURE__ */ Ms(o, c));
    },
    lt(o, c) {
      return this.check(/* @__PURE__ */ Rp(o, c));
    },
    lte(o, c) {
      return this.check(/* @__PURE__ */ Cs(o, c));
    },
    max(o, c) {
      return this.check(/* @__PURE__ */ Cs(o, c));
    },
    int(o) {
      return this.check(Hp(o));
    },
    safe(o) {
      return this.check(Hp(o));
    },
    positive(o) {
      return this.check(/* @__PURE__ */ Up(0, o));
    },
    nonnegative(o) {
      return this.check(/* @__PURE__ */ Ms(0, o));
    },
    negative(o) {
      return this.check(/* @__PURE__ */ Rp(0, o));
    },
    nonpositive(o) {
      return this.check(/* @__PURE__ */ Cs(0, o));
    },
    multipleOf(o, c) {
      return this.check(/* @__PURE__ */ kp(o, c));
    },
    step(o, c) {
      return this.check(/* @__PURE__ */ kp(o, c));
    },
    finite() {
      return this;
    }
  });
  const u = n._zod.bag;
  n.minValue = Math.max(u.minimum ?? Number.NEGATIVE_INFINITY, u.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(u.maximum ?? Number.POSITIVE_INFINITY, u.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (u.format ?? "").includes("int") || Number.isSafeInteger(u.multipleOf ?? 0.5), n.isFinite = !0, n.format = u.format ?? null;
});
function CS(n) {
  return /* @__PURE__ */ n1(jh, n);
}
const MS = /* @__PURE__ */ U("ZodNumberFormat", (n, i) => {
  o_.init(n, i), jh.init(n, i);
});
function Hp(n) {
  return /* @__PURE__ */ a1(MS, n);
}
const NS = /* @__PURE__ */ U("ZodBoolean", (n, i) => {
  r_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => A1(n, u, o);
});
function jS(n) {
  return /* @__PURE__ */ i1(NS, n);
}
const DS = /* @__PURE__ */ U("ZodUnknown", (n, i) => {
  s_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => O1();
});
function Bp() {
  return /* @__PURE__ */ l1(DS);
}
const ZS = /* @__PURE__ */ U("ZodNever", (n, i) => {
  c_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => x1(n, u, o);
});
function RS(n) {
  return /* @__PURE__ */ u1(ZS, n);
}
const US = /* @__PURE__ */ U("ZodArray", (n, i) => {
  f_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => D1(n, u, o, c), n.element = i.element, hl(n, "ZodArray", {
    min(u, o) {
      return this.check(/* @__PURE__ */ Ku(u, o));
    },
    nonempty(u) {
      return this.check(/* @__PURE__ */ Ku(1, u));
    },
    max(u, o) {
      return this.check(/* @__PURE__ */ Eh(u, o));
    },
    length(u, o) {
      return this.check(/* @__PURE__ */ Ah(u, o));
    },
    unwrap() {
      return this.element;
    }
  });
});
function Wu(n, i) {
  return /* @__PURE__ */ y1(US, n, i);
}
const kS = /* @__PURE__ */ U("ZodObject", (n, i) => {
  m_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => Z1(n, u, o, c), je(n, "shape", () => i.shape), hl(n, "ZodObject", {
    keyof() {
      return Pu(Object.keys(this._zod.def.shape));
    },
    catchall(u) {
      return this.clone({ ...this._zod.def, catchall: u });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: Bp() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: Bp() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: RS() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(u) {
      return N0(this, u);
    },
    safeExtend(u) {
      return j0(this, u);
    },
    merge(u) {
      return D0(this, u);
    },
    pick(u) {
      return C0(this, u);
    },
    omit(u) {
      return M0(this, u);
    },
    partial(...u) {
      return Z0(Zh, this, u[0]);
    },
    required(...u) {
      return R0(Rh, this, u[0]);
    }
  });
});
function dl(n, i) {
  const u = {
    type: "object",
    shape: n ?? {},
    ...I(i)
  };
  return new kS(u);
}
const YS = /* @__PURE__ */ U("ZodUnion", (n, i) => {
  p_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => R1(n, u, o, c), n.options = i.options;
});
function Dh(n, i) {
  return new YS({
    type: "union",
    options: n,
    ...I(i)
  });
}
const XS = /* @__PURE__ */ U("ZodIntersection", (n, i) => {
  h_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => U1(n, u, o, c);
});
function HS(n, i) {
  return new XS({
    type: "intersection",
    left: n,
    right: i
  });
}
const Hs = /* @__PURE__ */ U("ZodEnum", (n, i) => {
  v_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (o, c, f) => C1(n, o, c), n.enum = i.entries, n.options = Object.values(i.entries);
  const u = new Set(Object.keys(i.entries));
  n.extract = (o, c) => {
    const f = {};
    for (const d of o)
      if (u.has(d))
        f[d] = i.entries[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new Hs({
      ...i,
      checks: [],
      ...I(c),
      entries: f
    });
  }, n.exclude = (o, c) => {
    const f = { ...i.entries };
    for (const d of o)
      if (u.has(d))
        delete f[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new Hs({
      ...i,
      checks: [],
      ...I(c),
      entries: f
    });
  };
});
function Pu(n, i) {
  const u = Array.isArray(n) ? Object.fromEntries(n.map((o) => [o, o])) : n;
  return new Hs({
    type: "enum",
    entries: u,
    ...I(i)
  });
}
const BS = /* @__PURE__ */ U("ZodLiteral", (n, i) => {
  g_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => M1(n, u, o), n.values = new Set(i.values), Object.defineProperty(n, "value", {
    get() {
      if (i.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return i.values[0];
    }
  });
});
function Fu(n, i) {
  return new BS({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...I(i)
  });
}
const qS = /* @__PURE__ */ U("ZodTransform", (n, i) => {
  y_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => j1(n, u), n._zod.parse = (u, o) => {
    if (o.direction === "backward")
      throw new uh(n.constructor.name);
    u.addIssue = (f) => {
      if (typeof f == "string")
        u.issues.push(fl(f, u.value, i));
      else {
        const d = f;
        d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = u.value), d.inst ?? (d.inst = n), u.issues.push(fl(d));
      }
    };
    const c = i.transform(u.value, u);
    return c instanceof Promise ? c.then((f) => (u.value = f, u.fallback = !0, u)) : (u.value = c, u.fallback = !0, u);
  };
});
function VS(n) {
  return new qS({
    type: "transform",
    transform: n
  });
}
const Zh = /* @__PURE__ */ U("ZodOptional", (n, i) => {
  wh.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => Mh(n, u, o, c), n.unwrap = () => n._zod.def.innerType;
});
function qp(n) {
  return new Zh({
    type: "optional",
    innerType: n
  });
}
const $S = /* @__PURE__ */ U("ZodExactOptional", (n, i) => {
  b_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => Mh(n, u, o, c), n.unwrap = () => n._zod.def.innerType;
});
function LS(n) {
  return new $S({
    type: "optional",
    innerType: n
  });
}
const GS = /* @__PURE__ */ U("ZodNullable", (n, i) => {
  __.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => k1(n, u, o, c), n.unwrap = () => n._zod.def.innerType;
});
function Vp(n) {
  return new GS({
    type: "nullable",
    innerType: n
  });
}
const QS = /* @__PURE__ */ U("ZodDefault", (n, i) => {
  S_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => X1(n, u, o, c), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function KS(n, i) {
  return new QS({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : sh(i);
    }
  });
}
const JS = /* @__PURE__ */ U("ZodPrefault", (n, i) => {
  z_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => H1(n, u, o, c), n.unwrap = () => n._zod.def.innerType;
});
function WS(n, i) {
  return new JS({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : sh(i);
    }
  });
}
const Rh = /* @__PURE__ */ U("ZodNonOptional", (n, i) => {
  T_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => Y1(n, u, o, c), n.unwrap = () => n._zod.def.innerType;
});
function PS(n, i) {
  return new Rh({
    type: "nonoptional",
    innerType: n,
    ...I(i)
  });
}
const FS = /* @__PURE__ */ U("ZodCatch", (n, i) => {
  w_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => B1(n, u, o, c), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function IS(n, i) {
  return new FS({
    type: "catch",
    innerType: n,
    catchValue: typeof i == "function" ? i : () => i
  });
}
const e2 = /* @__PURE__ */ U("ZodPipe", (n, i) => {
  E_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => q1(n, u, o, c), n.in = i.in, n.out = i.out;
});
function $p(n, i) {
  return new e2({
    type: "pipe",
    in: n,
    out: i
    // ...util.normalizeParams(params),
  });
}
const t2 = /* @__PURE__ */ U("ZodReadonly", (n, i) => {
  A_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => V1(n, u, o, c), n.unwrap = () => n._zod.def.innerType;
});
function n2(n) {
  return new t2({
    type: "readonly",
    innerType: n
  });
}
const a2 = /* @__PURE__ */ U("ZodCustom", (n, i) => {
  x_.init(n, i), Le.init(n, i), n._zod.processJSONSchema = (u, o, c) => N1(n, u);
});
function i2(n, i = {}) {
  return /* @__PURE__ */ b1(a2, n, i);
}
function l2(n, i) {
  return /* @__PURE__ */ _1(n, i);
}
const Is = pt().regex(/^[a-z0-9_]+\.[a-z0-9_]+$/, "Must be a Home Assistant entity ID"), zt = Is.optional(), u2 = dl({
  segment_id: CS().int().nonnegative(),
  area_id: pt().min(1).optional(),
  name: pt().min(1),
  icon: pt().optional(),
  include_in_floor_clean: jS().optional().default(!0)
}).passthrough(), o2 = dl({
  id: pt().min(1),
  name: pt().min(1),
  map_entity: Is,
  map_select_option: pt().min(1).optional(),
  rooms: Wu(u2).min(1)
}).passthrough(), r2 = dl({
  id: pt().min(1),
  name: pt().min(1),
  icon: pt().optional(),
  strategy: Pu(["custom", "smartplan"]),
  cleaning_type: Pu(["vacuum", "vacuum_and_mop", "vacuum_then_mop"]).optional(),
  fan_speed: pt().optional(),
  mop_mode: pt().optional(),
  mop_intensity: pt().optional(),
  cleaning_count: Dh([Fu(1), Fu(2)]).optional()
}).passthrough(), Uh = dl({
  type: Fu("custom:roborock-vacuum-map-card").optional(),
  entity: Is.refine((n) => n.startsWith("vacuum."), "Entity must be a vacuum"),
  name: pt().optional(),
  language: Pu(["en", "nl"]).optional().default("en"),
  entities: dl({
    map_select: zt,
    cleaning_mode: zt,
    vacuum_then_mop_script: zt,
    mop_mode: zt,
    mop_intensity: zt,
    dock_mop_drying: zt,
    dock_mop_drying_remaining_time: zt,
    battery: zt,
    current_room: zt,
    cleaning_area: zt,
    cleaning_time: zt,
    cleaning_progress: zt,
    status: zt,
    error: zt
  }).passthrough().optional().default({}),
  floors: Wu(o2).min(1),
  presets: Wu(r2).optional().default([]),
  default_preset: pt().optional().default("vacuum_only"),
  vacuum_mode_fallback: Fu("set_clean_motor_mode").optional()
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
function s2(n) {
  return Uh.parse(n);
}
function c2(n) {
  const i = Uh.safeParse(n);
  return i.success ? [] : i.error.issues.map((u) => `${u.path.join(".") || "config"}: ${u.message}`);
}
function kh() {
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
function Bu(n) {
  return typeof n == "number" && Number.isFinite(n);
}
function f2(n) {
  const i = n?.attributes.calibration_points;
  return Array.isArray(i) ? i.flatMap((u) => {
    const o = u;
    return !Bu(o.vacuum?.x) || !Bu(o.vacuum?.y) || !Bu(o.map?.x) || !Bu(o.map?.y) ? [] : [o];
  }) : [];
}
function Yh(n) {
  const i = n?.attributes.rooms;
  return i ? (Array.isArray(i) ? i.map((o, c) => [String(c), o]) : typeof i == "object" ? Object.entries(i) : []).flatMap(([o, c]) => {
    if (!c || typeof c != "object") return [];
    const f = c, d = f.number ?? f.room_id ?? f.segment_id ?? o, p = Number(d), v = Number(f.x0), h = Number(f.y0), y = Number(f.x1), S = Number(f.y1);
    return [p, v, h, y, S].every(Number.isFinite) ? [
      {
        segment_id: p,
        source_name: typeof f.name == "string" ? f.name : `Room ${p}`,
        x0: v,
        y0: h,
        x1: y,
        y1: S
      }
    ] : [];
  }) : [];
}
function rl(n, i, u) {
  if (u.length < 3) throw new Error("At least three calibration points are required");
  const [o, c, f] = u, d = c.vacuum.x - o.vacuum.x, p = c.vacuum.y - o.vacuum.y, v = f.vacuum.x - o.vacuum.x, h = f.vacuum.y - o.vacuum.y, y = d * h - p * v;
  if (y === 0) throw new Error("Calibration points are degenerate");
  const S = n - o.vacuum.x, E = i - o.vacuum.y, A = (S * h - E * v) / y, M = (d * E - p * S) / y;
  return {
    x: o.map.x + A * (c.map.x - o.map.x) + M * (f.map.x - o.map.x),
    y: o.map.y + A * (c.map.y - o.map.y) + M * (f.map.y - o.map.y)
  };
}
function d2(n, i) {
  return `${[
    rl(n.x0, n.y0, i),
    rl(n.x1, n.y0, i),
    rl(n.x1, n.y1, i),
    rl(n.x0, n.y1, i)
  ].map((o, c) => `${c === 0 ? "M" : "L"} ${o.x} ${o.y}`).join(" ")} Z`;
}
function m2(n, i) {
  return rl((n.x0 + n.x1) / 2, (n.y0 + n.y1) / 2, i);
}
function p2(n) {
  return new Map(n.rooms.map((i) => [i.segment_id, i]));
}
function qu(n, i, u) {
  const o = [...n], [c] = o.splice(i, 1);
  return o.splice(u, 0, c), o;
}
function h2(n, i) {
  return Object.keys(n.states).filter((u) => u.startsWith(`${i}.`)).sort();
}
function Ns({
  hass: n,
  domain: i,
  value: u,
  optional: o,
  onChange: c
}) {
  return /* @__PURE__ */ _.jsxs("select", { value: u ?? "", onChange: (f) => c(f.target.value || void 0), children: [
    /* @__PURE__ */ _.jsx("option", { value: "", children: o ? "Not configured" : `Select ${i}` }),
    h2(n, i).map((f) => /* @__PURE__ */ _.jsx("option", { children: f }, f))
  ] });
}
function v2({
  areas: n,
  value: i,
  onChange: u
}) {
  const o = ae.useRef(null), [c, f] = ae.useState(() => !!customElements.get("ha-area-picker"));
  return ae.useEffect(() => {
    c || customElements.whenDefined("ha-area-picker").then(() => f(!0));
  }, [c]), ae.useEffect(() => {
    const d = o.current;
    if (!d) return;
    d.value = i, d.noAdd = !0;
    const p = (v) => u(v.detail.value || void 0);
    return d.addEventListener("value-changed", p), () => d.removeEventListener("value-changed", p);
  }, [c, u, i]), c ? /* @__PURE__ */ _.jsx("ha-area-picker", { ref: o, value: i ?? "", "no-add": !0 }) : /* @__PURE__ */ _.jsxs("select", { value: i ?? "", onChange: (d) => u(d.target.value || void 0), children: [
    /* @__PURE__ */ _.jsx("option", { value: "", children: "Unmapped" }),
    n.map((d) => /* @__PURE__ */ _.jsxs("option", { value: d.area_id, children: [
      d.name,
      " (",
      d.area_id,
      ")"
    ] }, d.area_id)),
    i && !n.some((d) => d.area_id === i) && /* @__PURE__ */ _.jsx("option", { value: i, children: i })
  ] });
}
function g2({ hass: n, config: i, onChange: u }) {
  const o = c2(i), c = (p, v) => {
    const h = [...i.floors];
    h[p] = v, u({ ...i, floors: h });
  }, f = i.entities?.map_select ? n.states[i.entities.map_select]?.attributes.options ?? [] : [], d = Object.values(n.areas ?? {}).sort((p, v) => p.name.localeCompare(v.name));
  return /* @__PURE__ */ _.jsxs("div", { className: "editor", children: [
    /* @__PURE__ */ _.jsx("h2", { children: "Roborock Vacuum Map Card" }),
    /* @__PURE__ */ _.jsx("p", { children: "Configure the Roborock entities, calibrated maps, room mappings and job presets." }),
    o.length > 0 && /* @__PURE__ */ _.jsx("div", { className: "editor-errors", role: "alert", children: o.map((p) => /* @__PURE__ */ _.jsx("div", { children: p }, p)) }),
    /* @__PURE__ */ _.jsxs("section", { children: [
      /* @__PURE__ */ _.jsx("h3", { children: "Card" }),
      /* @__PURE__ */ _.jsxs("label", { children: [
        "Name",
        /* @__PURE__ */ _.jsx("input", { value: i.name ?? "", placeholder: "Use vacuum name", onChange: (p) => u({ ...i, name: p.target.value || void 0 }) })
      ] }),
      /* @__PURE__ */ _.jsxs("label", { children: [
        "Language",
        /* @__PURE__ */ _.jsxs("select", { value: i.language ?? "en", onChange: (p) => u({ ...i, language: p.target.value }), children: [
          /* @__PURE__ */ _.jsx("option", { value: "en", children: "English" }),
          /* @__PURE__ */ _.jsx("option", { value: "nl", children: "Nederlands" })
        ] })
      ] }),
      /* @__PURE__ */ _.jsxs("label", { children: [
        "Vacuum",
        /* @__PURE__ */ _.jsx(Ns, { hass: n, domain: "vacuum", value: i.entity, onChange: (p) => p && u({ ...i, entity: p }) })
      ] })
    ] }),
    /* @__PURE__ */ _.jsxs("section", { children: [
      /* @__PURE__ */ _.jsx("h3", { children: "Entities" }),
      [
        ["map_select", "select", "Floor selector"],
        ["cleaning_mode", "select", "Cleaning mode"],
        ["vacuum_then_mop_script", "script", "Vac followed by Mop script"],
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
      ].map(([p, v, h]) => /* @__PURE__ */ _.jsxs("label", { children: [
        h,
        /* @__PURE__ */ _.jsx(Ns, { hass: n, domain: v, optional: !0, value: i.entities?.[p], onChange: (y) => u({ ...i, entities: { ...i.entities, [p]: y } }) })
      ] }, p)),
      /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ _.jsx("input", { type: "checkbox", checked: i.vacuum_mode_fallback === "set_clean_motor_mode", onChange: (p) => u({ ...i, vacuum_mode_fallback: p.target.checked ? "set_clean_motor_mode" : void 0 }) }),
        " Use atomic Vacuum-mode fallback (Home Assistant 2026.7 and older)"
      ] })
    ] }),
    /* @__PURE__ */ _.jsxs("section", { children: [
      /* @__PURE__ */ _.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ _.jsx("h3", { children: "Floors" }),
        /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => u({ ...i, floors: [...i.floors, { id: `floor_${i.floors.length + 1}`, name: `Floor ${i.floors.length + 1}`, map_entity: "", rooms: [] }] }), children: [
          /* @__PURE__ */ _.jsx(bp, {}),
          " Add floor"
        ] })
      ] }),
      i.floors.map((p, v) => /* @__PURE__ */ _.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ _.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ _.jsx("strong", { children: p.name || `Floor ${v + 1}` }),
          /* @__PURE__ */ _.jsxs("div", { children: [
            /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Move floor up", disabled: v === 0, onClick: () => u({ ...i, floors: qu(i.floors, v, v - 1) }), children: /* @__PURE__ */ _.jsx(gp, {}) }),
            /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Move floor down", disabled: v === i.floors.length - 1, onClick: () => u({ ...i, floors: qu(i.floors, v, v + 1) }), children: /* @__PURE__ */ _.jsx(vp, {}) }),
            /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Remove floor", disabled: i.floors.length === 1, onClick: () => u({ ...i, floors: i.floors.filter((h, y) => y !== v) }), children: /* @__PURE__ */ _.jsx(_p, {}) })
          ] })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "editor-grid", children: [
          /* @__PURE__ */ _.jsxs("label", { children: [
            "ID",
            /* @__PURE__ */ _.jsx("input", { value: p.id, onChange: (h) => c(v, { ...p, id: h.target.value }) })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ _.jsx("input", { value: p.name, onChange: (h) => c(v, { ...p, name: h.target.value }) })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Custom map",
            /* @__PURE__ */ _.jsx(Ns, { hass: n, domain: "image", value: p.map_entity, onChange: (h) => {
              if (!h) return;
              const y = Yh(n.states[h]), S = new Map(p.rooms.map((A) => [A.segment_id, A])), E = y.map((A) => ({
                ...S.get(A.segment_id),
                segment_id: A.segment_id,
                name: S.get(A.segment_id)?.name ?? A.source_name,
                include_in_floor_clean: S.get(A.segment_id)?.include_in_floor_clean ?? !0
              }));
              c(v, { ...p, map_entity: h, rooms: E });
            } })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Selector option",
            /* @__PURE__ */ _.jsxs("select", { value: p.map_select_option ?? "", onChange: (h) => c(v, { ...p, map_select_option: h.target.value || void 0 }), children: [
              /* @__PURE__ */ _.jsx("option", { value: "", children: "Not configured" }),
              f.map((h) => /* @__PURE__ */ _.jsx("option", { children: h }, h))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ _.jsx("h4", { children: "Discovered rooms" }),
        p.rooms.length === 0 ? /* @__PURE__ */ _.jsx("p", { children: "Select a calibrated custom-map image to discover rooms." }) : /* @__PURE__ */ _.jsx("div", { className: "room-editor-list", children: p.rooms.map((h, y) => /* @__PURE__ */ _.jsxs("div", { className: "room-editor", children: [
          /* @__PURE__ */ _.jsxs("strong", { children: [
            "Segment ",
            h.segment_id
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ _.jsx("input", { value: h.name, onChange: (S) => {
              const E = [...p.rooms];
              E[y] = { ...h, name: S.target.value }, c(v, { ...p, rooms: E });
            } })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Area",
            /* @__PURE__ */ _.jsx(v2, { areas: d, value: h.area_id, onChange: (S) => {
              const E = [...p.rooms];
              E[y] = { ...h, area_id: S }, c(v, { ...p, rooms: E });
            } })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Icon",
            /* @__PURE__ */ _.jsx("input", { value: h.icon ?? "", placeholder: "mdi:floor-plan", onChange: (S) => {
              const E = [...p.rooms];
              E[y] = { ...h, icon: S.target.value || void 0 }, c(v, { ...p, rooms: E });
            } })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ _.jsx("input", { type: "checkbox", checked: h.include_in_floor_clean !== !1, onChange: (S) => {
              const E = [...p.rooms];
              E[y] = { ...h, include_in_floor_clean: S.target.checked }, c(v, { ...p, rooms: E });
            } }),
            " Include in Entire floor"
          ] })
        ] }, h.segment_id)) })
      ] }, `${p.id}-${v}`))
    ] }),
    /* @__PURE__ */ _.jsxs("section", { children: [
      /* @__PURE__ */ _.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ _.jsx("h3", { children: "Additional presets" }),
        /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => {
          const p = { id: `preset_${(i.presets?.length ?? 0) + 1}`, name: "New preset", icon: "mdi:tune", strategy: "custom", cleaning_type: "vacuum_and_mop", cleaning_count: 1 };
          u({ ...i, presets: [...i.presets ?? [], p] });
        }, children: [
          /* @__PURE__ */ _.jsx(bp, {}),
          " Add preset"
        ] })
      ] }),
      (i.presets ?? []).map((p, v) => /* @__PURE__ */ _.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ _.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ _.jsx("strong", { children: p.name }),
          /* @__PURE__ */ _.jsxs("div", { children: [
            /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Move preset up", disabled: v === 0, onClick: () => u({ ...i, presets: qu(i.presets ?? [], v, v - 1) }), children: /* @__PURE__ */ _.jsx(gp, {}) }),
            /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Move preset down", disabled: v === (i.presets?.length ?? 0) - 1, onClick: () => u({ ...i, presets: qu(i.presets ?? [], v, v + 1) }), children: /* @__PURE__ */ _.jsx(vp, {}) }),
            /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Remove preset", onClick: () => u({ ...i, presets: (i.presets ?? []).filter((h, y) => y !== v) }), children: /* @__PURE__ */ _.jsx(_p, {}) })
          ] })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "editor-grid", children: [
          ["id", "name", "icon", "fan_speed", "mop_mode", "mop_intensity"].map((h) => /* @__PURE__ */ _.jsxs("label", { children: [
            h.replaceAll("_", " "),
            /* @__PURE__ */ _.jsx("input", { value: p[h] ?? "", onChange: (y) => {
              const S = [...i.presets ?? []];
              S[v] = { ...p, [h]: y.target.value || void 0 }, u({ ...i, presets: S });
            } })
          ] }, h)),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Strategy",
            /* @__PURE__ */ _.jsxs("select", { value: p.strategy, onChange: (h) => {
              const y = [...i.presets ?? []];
              y[v] = { ...p, strategy: h.target.value }, u({ ...i, presets: y });
            }, children: [
              /* @__PURE__ */ _.jsx("option", { value: "custom", children: "Custom" }),
              /* @__PURE__ */ _.jsx("option", { value: "smartplan", children: "SmartPlan" })
            ] })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Cleaning type",
            /* @__PURE__ */ _.jsxs("select", { value: p.cleaning_type ?? "vacuum_and_mop", onChange: (h) => {
              const y = [...i.presets ?? []];
              y[v] = { ...p, cleaning_type: h.target.value }, u({ ...i, presets: y });
            }, children: [
              /* @__PURE__ */ _.jsx("option", { value: "vacuum", children: "Vacuum only" }),
              /* @__PURE__ */ _.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
              /* @__PURE__ */ _.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" })
            ] })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            "Cleaning count",
            /* @__PURE__ */ _.jsxs("select", { value: p.cleaning_count ?? 1, onChange: (h) => {
              const y = [...i.presets ?? []];
              y[v] = { ...p, cleaning_count: Number(h.target.value) }, u({ ...i, presets: y });
            }, children: [
              /* @__PURE__ */ _.jsx("option", { value: "1", children: "1" }),
              /* @__PURE__ */ _.jsx("option", { value: "2", children: "2" })
            ] })
          ] })
        ] })
      ] }, `${p.id}-${v}`)),
      /* @__PURE__ */ _.jsxs("label", { children: [
        "Default preset",
        /* @__PURE__ */ _.jsxs("select", { value: i.default_preset ?? "vacuum_only", onChange: (p) => u({ ...i, default_preset: p.target.value }), children: [
          /* @__PURE__ */ _.jsx("option", { value: "smartplan", children: "SmartPlan" }),
          /* @__PURE__ */ _.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" }),
          /* @__PURE__ */ _.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
          /* @__PURE__ */ _.jsx("option", { value: "vacuum_only", children: "Vacuum only" }),
          (i.presets ?? []).map((p) => /* @__PURE__ */ _.jsx("option", { value: p.id, children: p.name }, p.id))
        ] })
      ] })
    ] })
  ] });
}
const Vu = {
  pause: 4,
  stop: 8,
  returnHome: 16,
  start: 8192
};
function $u(n, i) {
  if (!i) return [];
  const u = n.states[i];
  return !u || u.state === "unavailable" ? [] : Array.isArray(u.attributes.options) ? u.attributes.options.map(String) : [];
}
function y2(n, i) {
  const u = n.states[i.entity], o = Number(u?.attributes.supported_features ?? 0), c = Array.isArray(u?.attributes.fan_speed_list) ? u.attributes.fan_speed_list.map(String) : [], f = $u(n, i.entities?.map_select), d = $u(n, i.entities?.cleaning_mode), p = $u(n, i.entities?.mop_mode), v = $u(n, i.entities?.mop_intensity);
  return {
    fanSpeeds: c,
    mapOptions: f,
    cleaningModes: d,
    mopModes: p,
    mopIntensities: v,
    canStart: !!(o & Vu.start),
    canPause: !!(o & Vu.pause),
    canStop: !!(o & Vu.stop),
    canDock: !!(o & Vu.returnHome),
    hasMapSelect: f.length > 0,
    hasCleaningMode: d.length > 0,
    hasMopMode: p.length > 0,
    hasMopIntensity: v.length > 0
  };
}
function b2(n) {
  return ["cleaning", "paused", "returning", "returning_home", "error", "unavailable"].includes(n ?? "unavailable");
}
function _2(n) {
  return ["cleaning", "paused", "returning", "returning_home"].includes(n ?? "");
}
const S2 = /* @__PURE__ */ new Set(["standard", "deep", "deep_plus", "fast"]);
class Ue extends Error {
  constructor(i, u, o) {
    super(u, o), this.operation = i, this.name = "JobExecutionError";
  }
  operation;
}
async function z2(n, i, u, o, c, f) {
  const d = Date.now();
  for (; Date.now() - d < o; ) {
    if (n().states[i]?.state === u) return;
    await f(c);
  }
  throw new Ue("wait_for_state", `${i} did not become “${u}” within ${o / 1e3}s`);
}
function sl(n, i, u, o) {
  const c = n.states[i];
  if (!c || c.state === "unavailable") throw new Ue(o, `${i} is unavailable`);
  if (!(Array.isArray(c.attributes.options) ? c.attributes.options.map(String) : []).includes(u)) throw new Ue(o, `${i} does not support “${u}”`);
}
async function ll(n, i, u, o, c, f, d) {
  const p = n();
  if (sl(p, i, u, o), p.states[i]?.state !== u)
    try {
      await p.callService("select", "select_option", { option: u }, { entity_id: i }), await z2(n, i, u, c, f, d);
    } catch (v) {
      throw v instanceof Ue ? new Ue(o, v.message, { cause: v }) : new Ue(o, v instanceof Error ? v.message : String(v), { cause: v });
    }
}
async function T2(n, i) {
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
    throw new Ue("set_cleaning_mode", o instanceof Error ? o.message : String(o), { cause: o });
  }
}
async function Xh(n, i, u, o, c) {
  try {
    await n.callService("vacuum", "send_command", { command: u, params: o }, { entity_id: i.entity });
  } catch (f) {
    throw new Ue(c, f instanceof Error ? f.message : String(f), { cause: f });
  }
}
async function Lp(n, i, u) {
  await Xh(n, i, "set_clean_repeat_times", { repeat: u }, "set_cleaning_count");
}
async function w2(n, i) {
  await Xh(
    n,
    i,
    "set_clean_motor_mode",
    [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }],
    "set_smartplan"
  );
}
function Gp(n, i, u) {
  const o = n.states[i]?.attributes.fan_speed_list;
  if (!(Array.isArray(o) ? o.map(String) : []).includes(u))
    throw new Ue("set_fan_speed", `${i} does not support “${u}”`);
}
async function E2({
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
  if (!h || h.state === "unavailable") throw new Ue("preflight", `${i.entity} is unavailable`);
  if (b2(h.state)) throw new Ue("preflight", `Vacuum is ${h.state}`);
  const y = i.entities?.error ? v.states[i.entities.error] : void 0;
  if (y && !["none", "unknown", "unavailable", ""].includes(y.state))
    throw new Ue("preflight", `Vacuum error: ${y.state}`);
  const S = [...new Set(o.map((A) => A.area_id).filter((A) => !!A))];
  if (S.length === 0) throw new Ue("preflight", "Select at least one room mapped to a Home Assistant area");
  const E = i.entities?.map_select;
  if (i.floors.length > 1) {
    if (!E || !u.map_select_option) throw new Ue("select_floor", "This floor has no map selector mapping");
    await ll(n, E, u.map_select_option, "select_floor", f, d, p);
  }
  if (c.cleaning_type === "vacuum_then_mop" && c.strategy !== "smartplan") {
    const A = i.entities?.vacuum_then_mop_script, M = A ? n().states[A] : void 0;
    if (!A || !M || M.state === "unavailable")
      throw new Ue("start_vacuum_then_mop", "Vac followed by Mop requires an available orchestration script");
    const q = i.entities?.cleaning_mode;
    if (!q)
      throw new Ue("set_cleaning_mode", "Vac followed by Mop requires a cleaning-mode entity");
    if (sl(n(), q, "vacuum", "set_cleaning_mode"), sl(n(), q, "mop", "set_cleaning_mode"), c.mop_mode) {
      const X = i.entities?.mop_mode;
      if (!X) throw new Ue("set_mop_mode", "The selected profile requires a mop-mode entity");
      sl(n(), X, c.mop_mode, "set_mop_mode");
    }
    if (c.mop_intensity) {
      const X = i.entities?.mop_intensity;
      if (!X) throw new Ue("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      sl(n(), X, c.mop_intensity, "set_mop_intensity");
    }
    c.fan_speed && Gp(n(), i.entity, c.fan_speed);
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
        { entity_id: A }
      );
    } catch (X) {
      throw new Ue("start_vacuum_then_mop", X instanceof Error ? X.message : String(X), { cause: X });
    }
    return S;
  }
  if (c.strategy === "smartplan")
    await w2(n(), i), await Lp(n(), i, 1);
  else {
    const A = i.entities?.cleaning_mode, M = c.cleaning_type === "vacuum" ? "vacuum" : "vac_and_mop", q = A && n().states[A]?.attributes.options;
    if (A && Array.isArray(q) && q.map(String).includes(M))
      await ll(n, A, M, "set_cleaning_mode", f, d, p);
    else if (c.cleaning_type === "vacuum" && i.vacuum_mode_fallback === "set_clean_motor_mode")
      await T2(n(), i);
    else if (c.cleaning_type === "vacuum")
      throw new Ue("set_cleaning_mode", "Vacuum-only requires a cleaning-mode entity");
    const X = i.entities?.mop_mode;
    if (c.mop_mode) {
      if (!X) throw new Ue("set_mop_mode", "The selected profile requires a mop-mode entity");
      n().states[X]?.state === "smart_mode" && S2.has(c.mop_mode) && await ll(n, X, "custom", "leave_smartplan", f, d, p), await ll(n, X, c.mop_mode, "set_mop_mode", f, d, p);
    }
    if (c.cleaning_type !== "vacuum" && c.mop_intensity) {
      const R = i.entities?.mop_intensity;
      if (!R) throw new Ue("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      await ll(n, R, c.mop_intensity, "set_mop_intensity", f, d, p);
    }
    if (c.fan_speed) {
      const R = n();
      Gp(R, i.entity, c.fan_speed);
      try {
        await R.callService("vacuum", "set_fan_speed", { fan_speed: c.fan_speed }, { entity_id: i.entity });
      } catch (Q) {
        throw new Ue("set_fan_speed", Q instanceof Error ? Q.message : String(Q), { cause: Q });
      }
    }
    await Lp(n(), i, c.cleaning_count);
  }
  try {
    await n().callService(
      "vacuum",
      "clean_area",
      { cleaning_area_id: S },
      { entity_id: i.entity }
    );
  } catch (A) {
    throw new Ue("clean_area", A instanceof Error ? A.message : String(A), { cause: A });
  }
  return S;
}
const A2 = {
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
  close: "Close"
}, x2 = {
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
  close: "Sluiten"
};
function re(n, i) {
  return (n === "nl" ? x2 : A2)[i];
}
const O2 = [
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
function C2(n, i, u) {
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
function M2(n, i) {
  return [...O2, ...n.presets ?? []].map((u) => {
    const o = C2(n, i, u);
    return {
      preset: u,
      available: !o,
      reason: o ? `Unsupported ${o}` : void 0
    };
  });
}
function Bs(n) {
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
function qs({ icon: n, className: i }) {
  return n ? ae.createElement("ha-icon", { icon: n, class: i, "aria-hidden": "true" }) : null;
}
const Qp = ["smartplan", "vacuum_then_mop", "vacuum_and_mop", "vacuum_only"], N2 = ["quiet", "balanced", "turbo", "max", "max_plus"], j2 = ["quiet", "balanced", "turbo", "max"], D2 = ["fast", "standard", "deep"], Z2 = ["slight", "low", "medium", "moderate", "high", "extreme"], R2 = { slight: 1, low: 5, medium: 15, moderate: 25, high: 28, extreme: 30 };
function Hh(n) {
  return n.replaceAll("_", " ").replace(/\b\w/g, (i) => i.toUpperCase());
}
function js({
  value: n,
  options: i,
  onChange: u,
  title: o
}) {
  return i.length === 0 ? null : /* @__PURE__ */ _.jsxs("div", { className: "field app-field", children: [
    /* @__PURE__ */ _.jsx("span", { children: o }),
    /* @__PURE__ */ _.jsx("div", { className: "option-strip", children: i.map((c) => /* @__PURE__ */ _.jsx(
      "button",
      {
        type: "button",
        className: n === c ? "active" : "",
        onClick: () => u(c),
        children: Hh(c)
      },
      c
    )) })
  ] });
}
function Kp(n, i) {
  return i === "smartplan" ? n.strategy === "smartplan" : n.strategy === "smartplan" ? !1 : i === "vacuum_only" ? n.cleaning_type === "vacuum" : i === "vacuum_and_mop" ? n.cleaning_type === "vacuum_and_mop" : n.cleaning_type === "vacuum_then_mop";
}
function U2({
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
  const h = Qp.map((R) => o.find(({ preset: Q }) => Q.id === R)).filter(
    (R) => !!R
  ), y = o.filter(({ preset: R }) => !Qp.includes(R.id)), E = (i.cleaning_type === "vacuum" ? N2 : j2).filter((R) => u.fanSpeeds.includes(R)), A = D2.filter((R) => u.mopModes.includes(R)), M = Z2.filter((R) => u.mopIntensities.includes(R)), q = Math.max(0, M.indexOf(i.mop_intensity ?? "medium")), X = i.strategy === "smartplan" ? re(n, "smartPlanDescription") : i.cleaning_type === "vacuum" ? re(n, "vacuumDescription") : i.cleaning_type === "vacuum_then_mop" ? re(n, "vacuumThenMopDescription") : re(n, "vacuumAndMopDescription");
  return /* @__PURE__ */ _.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ _.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": re(n, "close"), onClick: p }),
    /* @__PURE__ */ _.jsxs("section", { className: "job-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "job-sheet-title", children: [
      /* @__PURE__ */ _.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ _.jsxs("header", { children: [
        /* @__PURE__ */ _.jsxs("div", { children: [
          /* @__PURE__ */ _.jsx("h2", { id: "job-sheet-title", children: re(n, "configureTitle") }),
          /* @__PURE__ */ _.jsx("p", { children: c.join(" · ") })
        ] }),
        /* @__PURE__ */ _.jsx("button", { type: "button", className: "icon-button", "aria-label": re(n, "close"), onClick: p, children: /* @__PURE__ */ _.jsx(lh, {}) })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "sheet-body", children: [
        /* @__PURE__ */ _.jsx("div", { className: "cleaning-mode-tabs", role: "tablist", "aria-label": re(n, "cleaningType"), children: h.map(({ preset: R, available: Q, reason: V }) => /* @__PURE__ */ _.jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": Kp(i, R.id),
            className: Kp(i, R.id) ? "active" : "",
            disabled: !Q || f,
            title: V,
            onClick: () => d(Bs(R)),
            children: [
              /* @__PURE__ */ _.jsx(qs, { icon: R.icon }),
              /* @__PURE__ */ _.jsx("span", { children: R.id === "smartplan" ? "AI SmartPlan" : R.name })
            ]
          },
          R.id
        )) }),
        /* @__PURE__ */ _.jsxs("section", { className: "mode-settings", children: [
          /* @__PURE__ */ _.jsx("p", { className: "mode-description", children: X }),
          i.strategy !== "smartplan" && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
            /* @__PURE__ */ _.jsx(
              js,
              {
                title: re(n, "suction"),
                value: i.fan_speed,
                options: E,
                onChange: (R) => d({ ...i, preset_id: "custom_draft", fan_speed: R })
              }
            ),
            i.cleaning_type !== "vacuum" && M.length > 0 && /* @__PURE__ */ _.jsxs("label", { className: "field app-field water-flow", children: [
              /* @__PURE__ */ _.jsx("span", { children: re(n, "waterFlow") }),
              /* @__PURE__ */ _.jsxs("div", { className: "range-heading", children: [
                /* @__PURE__ */ _.jsx("strong", { children: Hh(M[q]) }),
                /* @__PURE__ */ _.jsx("output", { children: R2[M[q]] })
              ] }),
              /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: M.length - 1,
                  step: "1",
                  value: q,
                  "aria-label": re(n, "waterFlow"),
                  onChange: (R) => d({
                    ...i,
                    preset_id: "custom_draft",
                    mop_intensity: M[Number(R.target.value)]
                  })
                }
              )
            ] }),
            /* @__PURE__ */ _.jsx(
              js,
              {
                title: re(n, "cleaningCount"),
                value: String(i.cleaning_count),
                options: i.cleaning_type === "vacuum_then_mop" ? ["1"] : ["1", "2"],
                onChange: (R) => d({
                  ...i,
                  preset_id: "custom_draft",
                  cleaning_count: Number(R)
                })
              }
            ),
            /* @__PURE__ */ _.jsx(
              js,
              {
                title: re(n, "mopRoute"),
                value: i.mop_mode,
                options: A,
                onChange: (R) => d({ ...i, preset_id: "custom_draft", mop_mode: R })
              }
            )
          ] })
        ] }),
        y.length > 0 && /* @__PURE__ */ _.jsxs("div", { className: "saved-profiles", children: [
          /* @__PURE__ */ _.jsx("span", { children: re(n, "savedProfiles") }),
          /* @__PURE__ */ _.jsx("div", { children: y.map(({ preset: R, available: Q, reason: V }) => /* @__PURE__ */ _.jsxs(
            "button",
            {
              type: "button",
              disabled: !Q || f,
              title: V,
              className: i.preset_id === R.id ? "active" : "",
              onClick: () => d(Bs(R)),
              children: [
                /* @__PURE__ */ _.jsx(qs, { icon: R.icon }),
                " ",
                R.name
              ]
            },
            R.id
          )) })
        ] })
      ] }),
      /* @__PURE__ */ _.jsxs("footer", { children: [
        /* @__PURE__ */ _.jsx("button", { type: "button", className: "secondary", disabled: f, onClick: p, children: re(n, "cancel") }),
        /* @__PURE__ */ _.jsx("button", { type: "button", className: "primary", disabled: f, onClick: v, children: f ? re(n, "starting") : re(n, "start") })
      ] })
    ] })
  ] });
}
var ga = function(n, i) {
  return Number(n.toFixed(i));
}, k2 = function(n, i) {
  return i;
}, Ee = function(n, i, u) {
  u && typeof u == "function" && u(n, i);
}, Y2 = function(n) {
  return -Math.cos(n * Math.PI) / 2 + 0.5;
}, X2 = function(n) {
  return n;
}, H2 = function(n) {
  return n * n;
}, B2 = function(n) {
  return n * (2 - n);
}, q2 = function(n) {
  return n < 0.5 ? 2 * n * n : -1 + (4 - 2 * n) * n;
}, V2 = function(n) {
  return n * n * n;
}, $2 = function(n) {
  return --n * n * n + 1;
}, L2 = function(n) {
  return n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1;
}, G2 = function(n) {
  return n * n * n * n;
}, Q2 = function(n) {
  return 1 - --n * n * n * n;
}, K2 = function(n) {
  return n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n;
}, J2 = function(n) {
  return n * n * n * n * n;
}, W2 = function(n) {
  return 1 + --n * n * n * n * n;
}, P2 = function(n) {
  return n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n;
}, Bh = {
  easeOut: Y2,
  linear: X2,
  easeInQuad: H2,
  easeOutQuad: B2,
  easeInOutQuad: q2,
  easeInCubic: V2,
  easeOutCubic: $2,
  easeInOutCubic: L2,
  easeInQuart: G2,
  easeOutQuart: Q2,
  easeInOutQuart: K2,
  easeInQuint: J2,
  easeOutQuint: W2,
  easeInOutQuint: P2
}, qh = function(n) {
  typeof n == "number" && cancelAnimationFrame(n);
}, Jt = function(n) {
  n.mounted && (qh(n.animation), n.isAnimating = !1, n.animation = null, n.velocity = null);
};
function Vh(n, i, u, o) {
  if (n.mounted) {
    var c = (/* @__PURE__ */ new Date()).getTime(), f = 1;
    Jt(n), n.animation = function() {
      if (!n.mounted)
        return qh(n.animation);
      var d = (/* @__PURE__ */ new Date()).getTime() - c, p = d / u, v = Bh[i], h = v(p);
      d >= u ? (o(f), n.animation = null) : n.animation && (o(h), requestAnimationFrame(n.animation));
    }, requestAnimationFrame(n.animation);
  }
}
function F2(n) {
  var i = n.scale, u = n.positionX, o = n.positionY;
  return !(Number.isNaN(i) || Number.isNaN(u) || Number.isNaN(o));
}
function Wn(n, i, u, o) {
  var c = F2(i);
  if (!(!n.mounted || !c)) {
    var f = n.setState, d = n.state, p = d.scale, v = d.positionX, h = d.positionY, y = i.scale - p, S = i.positionX - v, E = i.positionY - h;
    u === 0 ? f(i.scale, i.positionX, i.positionY) : Vh(n, o, u, function(A) {
      A !== 1 ? n.isAnimating = !0 : n.isAnimating = !1;
      var M = p + y * A, q = v + S * A, X = h + E * A;
      f(M, q, X);
    });
  }
}
function I2(n, i, u) {
  var o = n.offsetWidth, c = n.offsetHeight, f = i.offsetWidth, d = i.offsetHeight, p = f * u, v = d * u, h = o - p, y = c - v;
  return {
    wrapperWidth: o,
    wrapperHeight: c,
    newContentWidth: p,
    newDiffWidth: h,
    newContentHeight: v,
    newDiffHeight: y
  };
}
var ez = function(n, i, u, o, c, f, d) {
  var p = n > i ? u * (d ? 0.5 : 1) : 0, v = o > c ? f * (d ? 0.5 : 1) : 0, h = n - i - p, y = p, S = o - c - v, E = v;
  return {
    minPositionX: h,
    maxPositionX: y,
    minPositionY: S,
    maxPositionY: E,
    scaleWidthFactor: p,
    scaleHeightFactor: v
  };
}, ec = function(n, i) {
  var u = n.wrapperComponent, o = n.contentComponent, c = n.setup, f = c.centerZoomedOut, d = c.disablePadding;
  if (!u || !o)
    throw new Error("Components are not mounted");
  var p = I2(u, o, i), v = p.wrapperWidth, h = p.wrapperHeight, y = p.newContentWidth, S = p.newContentHeight, E = p.newDiffWidth, A = p.newDiffHeight, M = ez(v, y, E, h, S, A, !!f), q = v >= y && h >= S;
  d && q && !f && (M.minPositionX = 0, M.maxPositionX = 0, M.minPositionY = 0, M.maxPositionY = 0);
  var X = n.setup, R = X.minPositionX, Q = X.maxPositionX, V = X.minPositionY, B = X.maxPositionY;
  return R != null && (M.minPositionX = v * (1 - i) + R * i), Q != null && (M.maxPositionX = Q * i), V != null && (M.minPositionY = h * (1 - i) + V * i), B != null && (M.maxPositionY = B * i), M;
}, ml = function(n, i, u, o) {
  return o ? n < i ? ga(i, 2) : n > u ? ga(u, 2) : ga(n, 2) : ga(n, 2);
}, ri = function(n, i) {
  var u = ec(n, i);
  return n.bounds = u, u;
};
function vl(n, i, u, o, c, f, d) {
  var p = u.minPositionX, v = u.minPositionY, h = u.maxPositionX, y = u.maxPositionY, S = 0, E = 0;
  d && (S = c, E = f);
  var A = ml(n, p - S, h + S, o), M = ml(i, v - E, y + E, o);
  return { x: A, y: M };
}
function io(n, i, u, o, c, f) {
  var d = n.state, p = d.scale, v = d.positionX, h = d.positionY, y = o - p;
  if (typeof i != "number" || typeof u != "number")
    return console.error("Mouse X and Y position were not provided!"), { x: v, y: h };
  var S = v - i * y, E = h - u * y, A = vl(S, E, c, f, 0, 0, null);
  return A;
}
var Jp = 1e-7;
function gl(n, i, u, o, c) {
  var f = c ? o : 0, d = Math.max(i - f, Jp), p = u + f;
  return !Number.isNaN(u) && n >= p ? p : !Number.isNaN(i) && n <= d ? d : Math.max(n, Jp);
}
var Wp = function(n, i) {
  var u = n.setup.panning.excluded, o = n.isInitialized, c = n.wrapperComponent, f = i.target, d = "shadowRoot" in f && "composedPath" in i, p = d ? i.composedPath().some(function(y) {
    return y instanceof Element ? c?.contains(y) : !1;
  }) : c?.contains(f), v = o && f && p;
  if (!v)
    return !1;
  var h = yl(f, u);
  return !(h || f.getAttribute("draggable") === "true" || f.getAttribute("contenteditable") === "true" || f.isContentEditable);
}, Pp = function(n) {
  var i = n.isInitialized, u = n.isPanning, o = n.setup, c = o.panning.disabled, f = i && u && !c;
  return !!f;
}, tz = function(n, i) {
  var u = n.state, o = u.positionX, c = u.positionY;
  n.isPanning = !0;
  var f = i.clientX, d = i.clientY;
  n.startCoords = { x: f - o, y: d - c };
}, nz = function(n, i) {
  var u = i.touches, o = n.state, c = o.positionX, f = o.positionY;
  n.isPanning = !0;
  var d = u.length === 1;
  if (d) {
    var p = u[0].clientX, v = u[0].clientY;
    n.startCoords = { x: p - c, y: v - f };
  }
};
function az(n) {
  var i = n.state, u = i.positionX, o = i.positionY, c = i.scale, f = n.setup, d = f.disabled, p = f.limitToBounds, v = f.centerZoomedOut, h = n.wrapperComponent;
  if (!(d || !h || !n.bounds)) {
    var y = n.bounds, S = y.maxPositionX, E = y.minPositionX, A = y.maxPositionY, M = y.minPositionY, q = u > S || u < E, X = o > A || o < M, R = u > S ? h.offsetWidth : n.setup.minPositionX || 0, Q = o > A ? h.offsetHeight : n.setup.minPositionY || 0, V = io(n, R, Q, c, n.bounds, p || v), B = V.x, G = V.y;
    return {
      scale: c,
      positionX: q ? B : u,
      positionY: X ? G : o
    };
  }
}
function $h(n, i, u, o, c) {
  var f = n.setup.limitToBounds, d = n.wrapperComponent, p = n.bounds, v = n.state, h = v.scale, y = v.positionX, S = v.positionY;
  if (!(d === null || p === null || i === y && u === S)) {
    var E = vl(i, u, p, f, o, c, d), A = E.x, M = E.y;
    n.setState(h, A, M);
  }
}
var iz = function(n, i, u) {
  var o = n.startCoords, c = n.state, f = n.setup.panning, d = f.lockAxisX, p = f.lockAxisY, v = c.positionX, h = c.positionY;
  if (!o)
    return { x: v, y: h };
  var y = i - o.x, S = u - o.y, E = d ? v : y, A = p ? h : S;
  return { x: E, y: A };
}, Qn = function(n, i, u) {
  var o = n.setup, c = n.state, f = o.minScale, d = o.disablePadding, p = o.centerZoomedOut, v = u ?? c.scale;
  return i > 0 && v >= f && !d && !p ? i : 0;
}, Gn;
(function(n) {
  n.TRACK_PAD = "track_pad", n.MOUSE = "mouse", n.TOUCH = "touch";
})(Gn || (Gn = {}));
var lz = function(n) {
  var i = n.mounted, u = n.wrapperComponent, o = n.contentComponent, c = n.setup, f = c.disabled, d = c.velocityAnimation, p = c.limitToBounds, v = n.state.scale, h = d.disabled;
  if (h || f || !i || !u || !o)
    return !1;
  if (!p)
    return !0;
  var y = u.offsetWidth < o.offsetWidth * v || u.offsetHeight < o.offsetHeight * v;
  return y;
}, uz = function(n) {
  var i = n.mounted, u = n.velocity, o = n.bounds, c = n.setup, f = c.disabled, d = c.velocityAnimation, p = d.disabled, v = !p && !f && i;
  return !(!v || !u || !o);
};
function oz(n, i) {
  var u = n.setup.velocityAnimation, o = u.animationTime, c = u.maxAnimationTime, f = u.inertia;
  return Math.min(o * Math.max(1, Math.abs(i / f)), c);
}
function Fp(n, i, u, o, c, f, d, p, v, h) {
  if (c) {
    if (i > d && u > d) {
      var y = d + (n - d) * h;
      return y > v ? v : y < d ? d : y;
    }
    if (i < f && u < f) {
      var y = f + (n - f) * h;
      return y < p ? p : y > f ? f : y;
    }
  }
  return o ? i : ml(n, f, d, c);
}
function rz(n) {
  var i = 1, u = n.offsetWidth / window.innerWidth;
  return Number.isNaN(u) ? i : Math.min(i, u);
}
var Ds = function(n, i, u) {
  var o = 0, c = n * u;
  return Number.isNaN(c) ? o : n < 0 ? Math.max(c, -i) : Math.min(c, i);
};
function sz(n, i, u) {
  var o, c, f = lz(n);
  if (f) {
    var d = n.lastMousePosition, p = n.velocityTime, v = n.setup, h = n.wrapperComponent, y = v.velocityAnimation, S = y.maxStrengthMouse, E = y.maxStrengthTouch, A = y.sensitivityTouch, M = y.sensitivityMouse, q = Date.now();
    if (d && p && h) {
      var X = rz(h), R = (o = {}, o[Gn.TOUCH] = A, o[Gn.MOUSE] = M, o)[u], Q = (c = {}, c[Gn.TOUCH] = E, c[Gn.MOUSE] = S, c)[u], V = i.x - d.x, B = i.y - d.y, G = Ds(V / X, Q, R), ee = Ds(B / X, Q, R), K = q - p, ue = V * V + B * B, Se = Ds(Math.sqrt(ue) / K, Q, R);
      n.velocity = { velocityX: G, velocityY: ee, total: Se };
    }
    n.lastMousePosition = i, n.velocityTime = q;
  }
}
function cz(n) {
  var i = n.velocity, u = n.bounds, o = n.setup, c = n.wrapperComponent, f = uz(n);
  if (!(!f || !i || !u || !c)) {
    var d = i.velocityX, p = i.velocityY, v = i.total, h = u.maxPositionX, y = u.minPositionX, S = u.maxPositionY, E = u.minPositionY, A = o.limitToBounds, M = o.autoAlignment, q = o.zoomAnimation, X = o.panning, R = X.lockAxisY, Q = X.lockAxisX, V = q.animationType, B = M.sizeX, G = M.sizeY, ee = M.velocityAlignmentTime, K = ee, ue = oz(n, v), Se = Math.max(ue, K), ve = Qn(n, B), ge = Qn(n, G), ye = ve * c.offsetWidth / 100, Be = ge * c.offsetHeight / 100, Ke = h + ye, it = y - ye, j = S + Be, $ = E - Be, H = n.state, te = (/* @__PURE__ */ new Date()).getTime();
    Vh(n, V, Se, function(fe) {
      var T = n.state, k = T.scale, L = T.positionX, J = T.positionY, ie = (/* @__PURE__ */ new Date()).getTime() - te, ce = ie / K, ze = Bh[M.animationType], tt = 1 - ze(Math.min(1, ce)), ke = 1 - fe, _n = L + d * ke, Pn = J + p * ke, ci = Fp(_n, H.positionX, L, Q, A, y, h, it, Ke, tt), _l = Fp(Pn, H.positionY, J, R, A, E, S, $, j, tt);
      if (L !== _n || J !== Pn) {
        n.setState(k, ci, _l);
        var Wt = n.props.onPanning;
        Wt && Wt(_e(n), {});
      }
    });
  }
}
function Ip(n, i) {
  var u = n.state, o = u.scale, c = u.positionX, f = u.positionY;
  n.panStartPosition = { x: c, y: f }, Jt(n), ri(n, o), window.TouchEvent !== void 0 && i instanceof TouchEvent ? nz(n, i) : tz(n, i);
}
function Lh(n, i) {
  var u = n.state.scale, o = n.setup, c = o.minScale, f = o.autoAlignment, d = f.disabled, p = f.sizeX, v = f.sizeY, h = f.animationTime, y = f.animationType, S = d || u < c || !p && !v;
  if (!S) {
    var E = az(n);
    E && Wn(n, E, h, y);
  }
}
function eh(n, i, u, o) {
  var c = n.startCoords, f = n.setup, d = f.autoAlignment, p = d.sizeX, v = d.sizeY;
  if (c) {
    var h = iz(n, i, u), y = h.x, S = h.y, E = Qn(n, p), A = Qn(n, v);
    sz(n, { x: y, y: S }, o), $h(n, y, S, E, A);
  }
}
function fz(n, i) {
  if (n.isPanning) {
    var u = n.velocity, o = n.wrapperComponent, c = n.contentComponent;
    n.isPanning = !1;
    var f = n.state, d = f.positionX, p = f.positionY, v = f.scale, h = n.panStartPosition;
    if (n.panStartPosition = null, h) {
      var y = d - h.x, S = p - h.y;
      if (y * y + S * S <= 25)
        return;
    }
    n.isAnimating = !1, n.animation = null;
    var E = o?.offsetWidth || 0, A = o?.offsetHeight || 0, M = (c?.offsetWidth || 0) * v, q = (c?.offsetHeight || 0) * v, X = !n.setup.limitToBounds || E < M || A < q, R = !i && u && u.total > 0.1 && X;
    R ? cz(n) : Lh(n);
  }
}
function tc(n, i, u, o) {
  var c = n.setup, f = c.minScale, d = c.maxScale, p = c.limitToBounds, v = gl(ga(i, 2), f, d, 0, !1), h = ri(n, v), y = io(n, u, o, v, h, p), S = y.x, E = y.y;
  return { scale: v, positionX: S, positionY: E };
}
function nc(n, i, u) {
  var o = n.state.scale, c = n.wrapperComponent, f = n.setup, d = f.minScale, p = f.maxScale, v = f.limitToBounds, h = f.zoomAnimation, y = h.disabled, S = h.animationTime, E = h.animationType, A = o >= d && o <= p, M = y || A;
  if ((o >= 1 || v) && Lh(n), !(M || !c || !n.mounted)) {
    var q = i || c.offsetWidth / 2, X = u || c.offsetHeight / 2, R = o < d ? d : p, Q = tc(n, R, q, X);
    Q && Wn(n, Q, S, E);
  }
}
var $t = function() {
  return $t = Object.assign || function(i) {
    for (var u, o = 1, c = arguments.length; o < c; o++) {
      u = arguments[o];
      for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (i[f] = u[f]);
    }
    return i;
  }, $t.apply(this, arguments);
};
function th(n, i, u) {
  for (var o = 0, c = i.length, f; o < c; o++)
    (f || !(o in i)) && (f || (f = Array.prototype.slice.call(i, 0, o)), f[o] = i[o]);
  return n.concat(f || Array.prototype.slice.call(i));
}
var Zs = {
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
}, Vs = {
  wrapperClass: "react-transform-wrapper",
  contentClass: "react-transform-component"
}, Gh = function(n) {
  var i, u, o, c, f, d, p, v, h, y = Math.max((i = n.minScale) !== null && i !== void 0 ? i : va.minScale, 1e-7), S = (u = n.maxScale) !== null && u !== void 0 ? u : va.maxScale, E = (o = n.initialScale) !== null && o !== void 0 ? o : Zs.scale, A = Math.min(Math.max(E, y), S), M = ml((c = n.initialPositionX) !== null && c !== void 0 ? c : Zs.positionX, (f = n.minPositionX) !== null && f !== void 0 ? f : -1 / 0, (d = n.maxPositionX) !== null && d !== void 0 ? d : 1 / 0, n.minPositionX != null || n.maxPositionX != null), q = ml((p = n.initialPositionY) !== null && p !== void 0 ? p : Zs.positionY, (v = n.minPositionY) !== null && v !== void 0 ? v : -1 / 0, (h = n.maxPositionY) !== null && h !== void 0 ? h : 1 / 0, n.minPositionY != null || n.maxPositionY != null);
  return {
    previousScale: A,
    scale: A,
    positionX: M,
    positionY: q
  };
}, nh = function(n) {
  var i = $t({}, va);
  return Object.keys(n).forEach(function(u) {
    var o = u, c = typeof n[o] < "u", f = typeof va[o] < "u";
    if (f && c) {
      var d = Object.prototype.toString.call(va[o]), p = d === "[object Object]", v = d === "[object Array]";
      p ? i[o] = $t($t({}, va[o]), n[o]) : v ? i[o] = th(th([], va[o], !0), n[o]) : i[o] = n[o];
    }
  }), i.minScale <= 0 && (i.minScale = 1e-7), i;
}, Qh = function(n, i, u) {
  var o = n.state.scale, c = n.wrapperComponent, f = n.setup, d = f.maxScale, p = f.minScale, v = f.zoomAnimation, h = f.smooth, y = v.size;
  if (!c)
    throw new Error("Wrapper is not mounted");
  var S = h ? o * Math.exp(i * u) : o + i * u, E = gl(ga(S, 3), p, d, y, !1);
  return E;
};
function Kh(n, i, u, o, c) {
  var f, d, p = n.wrapperComponent, v = n.state, h = v.scale, y = v.positionX, S = v.positionY, E = n.setup.zoomAnimation;
  if (!p)
    return console.error("No WrapperComponent found");
  var A = E.disabled ? 0 : o, M = p.offsetWidth, q = p.offsetHeight, X = (M / 2 - y) / h, R = (q / 2 - S) / h, Q = Qh(n, i, u), V = tc(n, Q, X, R);
  if (!V)
    return console.error("Error during zoom event. New transformation state was not calculated.");
  var B = n.props, G = B.onZoomStart, ee = B.onZoom, K = B.onZoomStop, ue = new MouseEvent("mousemove", { bubbles: !0 }), Se = _e(n);
  Ee(Se, ue, G), Ee(Se, ue, ee), Wn(n, V, A, c);
  var ve = (d = (f = p.ownerDocument) === null || f === void 0 ? void 0 : f.defaultView) !== null && d !== void 0 ? d : typeof window < "u" ? window : null;
  ve && ve.setTimeout(function() {
    n.mounted && Ee(_e(n), ue, K);
  }, A);
}
function Jh(n, i, u, o) {
  var c, f, d = n.setup, p = n.wrapperComponent, v = n.contentComponent, h = d.limitToBounds, y = d.centerOnInit, S = Gh(n.props), E = n.state, A = E.scale, M = E.positionX, q = E.positionY;
  if (p) {
    var X = S.positionX, R = S.positionY;
    if (y && v) {
      var Q = ac(S.scale, p, v);
      X = Q.positionX, R = Q.positionY;
    }
    var V = ec(n, S.scale), B = vl(X, R, V, h, 0, 0, p), G = {
      scale: S.scale,
      positionX: B.x,
      positionY: B.y
    };
    if (!(A === S.scale && M === S.positionX && q === S.positionY)) {
      o?.();
      var ee = n.props, K = ee.onZoomStart, ue = ee.onZoom, Se = ee.onZoomStop, ve = new MouseEvent("mousemove", { bubbles: !0 }), ge = _e(n);
      Ee(ge, ve, K), Ee(ge, ve, ue), Wn(n, G, i, u);
      var ye = (f = (c = p.ownerDocument) === null || c === void 0 ? void 0 : c.defaultView) !== null && f !== void 0 ? f : typeof window < "u" ? window : null;
      ye && ye.setTimeout(function() {
        n.mounted && Ee(_e(n), ve, Se);
      }, i);
    }
  }
}
function dz(n, i, u, o) {
  var c = n.getBoundingClientRect(), f = i.getBoundingClientRect(), d = u.getBoundingClientRect(), p = f.x * o.scale, v = f.y * o.scale;
  return {
    x: (c.x - d.x + p) / o.scale,
    y: (c.y - d.y + v) / o.scale
  };
}
function mz(n, i, u, o, c) {
  o === void 0 && (o = 0), c === void 0 && (c = 0);
  var f = n.wrapperComponent, d = n.contentComponent, p = n.state, v = n.setup, h = v.limitToBounds, y = v.minScale, S = v.maxScale;
  if (!f || !d)
    return p;
  var E = f.getBoundingClientRect(), A = i.getBoundingClientRect(), M = dz(i, f, d, p), q = M.x, X = M.y, R = A.width / p.scale, Q = A.height / p.scale, V = f.offsetWidth / R, B = f.offsetHeight / Q, G = gl(u || Math.min(V, B), y, S, 0, !1), ee = (E.width - R * G) / 2, K = (E.height - Q * G) / 2, ue = (E.left - q) * G + ee + o, Se = (E.top - X) * G + K + c, ve = ec(n, G), ge = vl(ue, Se, ve, h, 0, 0, f), ye = ge.x, Be = ge.y;
  return { positionX: ye, positionY: Be, scale: G };
}
var pz = function(n) {
  return function(i, u, o) {
    i === void 0 && (i = 0.5), u === void 0 && (u = 300), o === void 0 && (o = "easeOut"), Kh(n, 1, i, u, o);
  };
}, hz = function(n) {
  return function(i, u, o) {
    i === void 0 && (i = 0.5), u === void 0 && (u = 300), o === void 0 && (o = "easeOut"), Kh(n, -1, i, u, o);
  };
}, vz = function(n) {
  return function(i, u, o, c, f) {
    c === void 0 && (c = 300), f === void 0 && (f = "easeOut");
    var d = n.state, p = d.positionX, v = d.positionY, h = d.scale, y = n.wrapperComponent, S = n.contentComponent, E = n.setup.disabled;
    if (!(E || !y || !S)) {
      var A = {
        positionX: Number.isNaN(i) ? p : i,
        positionY: Number.isNaN(u) ? v : u,
        scale: Number.isNaN(o) ? h : o
      };
      Wn(n, A, c, f);
    }
  };
}, gz = function(n) {
  return function(i, u) {
    i === void 0 && (i = 200), u === void 0 && (u = "easeOut"), Jh(n, i, u);
  };
}, yz = function(n) {
  return function(i, u, o) {
    u === void 0 && (u = 200), o === void 0 && (o = "easeOut");
    var c = n.state, f = n.wrapperComponent, d = n.contentComponent;
    if (f && d) {
      var p = ac(i || c.scale, f, d);
      Wn(n, p, u, o);
    }
  };
}, bz = function(n) {
  return function(i, u, o, c, f, d) {
    o === void 0 && (o = 600), c === void 0 && (c = "easeOut"), f === void 0 && (f = 0), d === void 0 && (d = 0), Jt(n);
    var p = n.wrapperComponent, v = typeof i == "string" ? document.getElementById(i) : i;
    if (p && v && p.contains(v)) {
      var h = mz(n, v, u, f, d);
      Wn(n, h, o, c);
    }
  };
}, Iu = function(n) {
  return {
    instance: n,
    state: n.state,
    zoomIn: pz(n),
    zoomOut: hz(n),
    setTransform: vz(n),
    resetTransform: gz(n),
    centerView: yz(n),
    zoomToElement: bz(n)
  };
}, _z = function(n) {
  return {
    instance: n,
    state: n.state
  };
}, _e = function(n) {
  var i = {};
  return Object.assign(i, _z(n)), Object.assign(i, Iu(n)), i;
}, Rs = !1;
function Us() {
  try {
    var n = {
      get passive() {
        return Rs = !0, !1;
      }
    };
    return n;
  } catch {
    return Rs = !1, Rs;
  }
}
var Lu = ".".concat(Vs.wrapperClass), yl = function(n, i) {
  return i.some(function(u) {
    return n.matches("".concat(Lu, " ").concat(u, ", ").concat(Lu, " .").concat(u, ", ").concat(Lu, " ").concat(u, " *, ").concat(Lu, " .").concat(u, " *"));
  });
}, pl = function(n) {
  n && clearTimeout(n);
}, Sz = function(n) {
  return Number.parseFloat(n.toFixed(8));
}, Wh = function(n, i, u) {
  var o = Sz(u);
  return "translate(".concat(n, "px, ").concat(i, "px) scale(").concat(o, ")");
}, ac = function(n, i, u) {
  var o = u.offsetWidth * n, c = u.offsetHeight * n, f = (i.offsetWidth - o) / 2, d = (i.offsetHeight - c) / 2;
  return {
    scale: n,
    positionX: f,
    positionY: d
  };
};
function zz(n, i) {
  n != null && (typeof n == "function" ? n(i) : n.current = i);
}
function Tz(n) {
  return function(i) {
    n.forEach(function(u) {
      typeof u == "function" ? u(i) : u != null && (u.current = i);
    });
  };
}
var Ph = function(n, i) {
  var u = n.setup.wheel, o = u.disabled, c = u.wheelDisabled, f = u.touchPadDisabled, d = u.excluded, p = n.isInitialized, v = n.isPanning, h = i.target, y = p && !v && !o && h;
  if (!y || c && !i.ctrlKey || f && i.ctrlKey)
    return !1;
  var S = yl(h, d);
  if (S)
    return !1;
  var E = n.isPressingKeys(n.setup.wheel.activationKeys);
  return !!E;
}, wz = function(n, i) {
  var u = n.setup, o = u.disabled, c = u.trackPadPanning, f = c.activationKeys, d = c.excluded;
  if (!n.wrapperComponent || !n.contentComponent || o || c.disabled || i.ctrlKey)
    return !1;
  var p = Ph(n, i);
  if (p)
    return !1;
  var v = i.target, h = yl(v, d);
  if (h)
    return !1;
  var y = n.isPressingKeys(f);
  return !!y;
}, Ez = function(n) {
  return n ? n.deltaY < 0 ? 1 : -1 : 0;
};
function Az(n, i) {
  var u = Ez(n), o = k2(i, u);
  return o;
}
function Fh(n, i, u) {
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
var xz = function(n, i, u, o, c) {
  var f = n.state.scale, d = n.wrapperComponent, p = n.setup, v = p.maxScale, h = p.minScale, y = p.zoomAnimation, S = p.disablePadding, E = y.size, A = y.disabled;
  if (!d)
    throw new Error("Wrapper is not mounted");
  var M = f + i * u, q = o ? !1 : !A, X = gl(M, h, v, E, q && !S);
  return X;
}, Ih = function(n, i) {
  var u = n.previousWheelEvent, o = n.state.scale, c = n.setup, f = c.maxScale, d = c.minScale;
  return u ? o < f || o > d || Math.sign(u.deltaY) !== Math.sign(i.deltaY) || u.deltaY > 0 && u.deltaY < i.deltaY || u.deltaY < 0 && u.deltaY > i.deltaY || Math.sign(u.deltaY) !== Math.sign(i.deltaY) : !1;
}, Oz = function(n, i) {
  var u = n.setup.pinch, o = u.disabled, c = u.excluded, f = n.isInitialized, d = i.target, p = f && !o && d;
  if (!p)
    return !1;
  var v = yl(d, c);
  return !v;
}, Cz = function(n) {
  var i = n.setup.pinch.disabled, u = n.isInitialized, o = n.pinchStartDistance, c = u && !i && o !== null;
  return !!c;
}, Mz = function(n, i, u) {
  var o = u.getBoundingClientRect(), c = n.touches, f = c[0].clientX - o.left, d = c[0].clientY - o.top, p = c[1].clientX - o.left, v = c[1].clientY - o.top;
  return {
    x: (f + p) / 2 / i,
    y: (d + v) / 2 / i
  };
}, ev = function(n) {
  return Math.sqrt(Math.pow(n.touches[0].pageX - n.touches[1].pageX, 2) + Math.pow(n.touches[0].pageY - n.touches[1].pageY, 2));
}, Nz = 5, jz = function(n, i) {
  var u = n.pinchStartScale, o = n.pinchStartDistance, c = n.setup, f = c.maxScale, d = c.minScale, p = c.zoomAnimation, v = c.disablePadding, h = c.pinch, y = p.size, S = p.disabled, E = h.step;
  if (!u || o === null)
    throw new Error("Pinch touches distance was not provided");
  if (i < 0)
    return n.state.scale;
  var A = i / o, M = A * u, q = (M - u) * (E / Nz), X = u + q, R = X === 1 / 0 ? 0 : ga(X, 10);
  return gl(R, d, f, y, !S && !v);
}, tv = 160, nv = 100, Dz = function(n, i) {
  var u = n.props, o = u.onWheelStart, c = u.onZoomStart;
  n.wheelStopEventTimer || (Jt(n), Ee(_e(n), i, o), Ee(_e(n), i, c));
}, Zz = function(n, i) {
  var u = n.props, o = u.onWheel, c = u.onZoom, f = n.contentComponent, d = n.setup, p = n.state, v = p.scale, h = d.limitToBounds, y = d.centerZoomedOut, S = d.zoomAnimation, E = d.wheel, A = d.disablePadding, M = d.smooth, q = S.size, X = S.disabled, R = E.step;
  if (!f)
    throw new Error("Component not mounted");
  i.preventDefault(), i.stopPropagation();
  var Q = Az(i, null), V = M ? R * Math.abs(i.deltaY) : R, B = xz(n, Q, V, !i.ctrlKey);
  if (v !== B) {
    var G = ri(n, B), ee = Fh(i, f, v), K = X || q === 0 || y || A, ue = h && K, Se = io(n, ee.x, ee.y, B, G, ue), ve = Se.x, ge = Se.y;
    n.previousWheelEvent = i, n.setState(B, ve, ge), Ee(_e(n), i, o), Ee(_e(n), i, c);
  }
}, Rz = function(n, i) {
  var u = n.props, o = u.onWheelStop, c = u.onZoomStop;
  pl(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (nc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, nv);
  var f = Ih(n, i);
  f && (pl(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Ee(_e(n), i, o), Ee(_e(n), i, c));
  }, tv));
}, Uz = function(n, i) {
  var u = n.props, o = u.onWheelStart, c = u.onPanningStart;
  n.wheelStopEventTimer || (Jt(n), Ee(_e(n), i, o), Ee(_e(n), i, c));
}, kz = function(n, i) {
  var u = n.props, o = u.onWheelStop, c = u.onPanningStop;
  pl(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (nc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, nv);
  var f = Ih(n, i);
  f && (pl(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Ee(_e(n), i, o), Ee(_e(n), i, c));
  }, tv));
}, av = function(n) {
  for (var i = 0, u = 0, o = 0; o < 2; o += 1)
    i += n.touches[o].clientX, u += n.touches[o].clientY;
  var c = i / 2, f = u / 2;
  return { x: c, y: f };
}, Yz = function(n, i) {
  var u = ev(i);
  n.pinchStartDistance = u, n.lastDistance = u, n.pinchStartScale = n.state.scale, n.isPanning = !1, n.isPinching = !0, n.pinchPreviousCenter = av(i), Jt(n);
}, Xz = function(n, i) {
  var u = n.contentComponent, o = n.pinchStartDistance, c = n.wrapperComponent, f = n.pinchPreviousCenter, d = n.state.scale, p = n.setup, v = p.limitToBounds, h = p.centerZoomedOut, y = p.zoomAnimation, S = p.autoAlignment, E = p.pinch, A = p.panning, M = y.disabled, q = y.size, X = E.allowPanning;
  if (!(o === null || !u)) {
    var R = Mz(i, d, u);
    if (!(!Number.isFinite(R.x) || !Number.isFinite(R.y))) {
      var Q = ev(i), V = jz(n, Q), B = av(i), G = d / V, ee = (B.x - (f?.x || 0)) * G, K = (B.y - (f?.y || 0)) * G;
      if (!(V === d && ee === 0 && K === 0)) {
        n.pinchPreviousCenter = B;
        var ue = ri(n, V), Se = M || q === 0 || h, ve = v && Se, ge = io(n, R.x, R.y, V, ue, ve), ye = ge.x, Be = ge.y;
        if (n.pinchMidpoint = R, n.lastDistance = Q, A.disabled || !X)
          n.setState(V, ye, Be);
        else {
          var Ke = S.sizeX, it = S.sizeY, j = Qn(n, Ke, V), $ = Qn(n, it, V), H = ye + ee, te = Be + K, fe = vl(H, te, ue, v, j, $, c), T = fe.x, k = fe.y;
          n.setState(V, T, k);
        }
      }
    }
  }
}, Hz = function(n) {
  var i = n.pinchMidpoint;
  n.velocity = null, n.lastDistance = null, n.pinchMidpoint = null, n.pinchStartScale = null, n.pinchStartDistance = null, n.isPinching = !1, nc(n, i?.x, i?.y);
}, iv = function(n, i) {
  var u = n.props.onZoomStop, o = n.setup.doubleClick.animationTime;
  pl(n.doubleClickStopEventTimer), n.doubleClickStopEventTimer = setTimeout(function() {
    n.doubleClickStopEventTimer = null, Ee(_e(n), i, u);
  }, o);
}, Bz = function(n, i) {
  var u = n.props, o = u.onZoomStart, c = u.onZoom, f = n.setup.doubleClick, d = f.animationTime, p = f.animationType;
  Ee(_e(n), i, o), Jh(n, d, p, function() {
    return Ee(_e(n), i, c);
  }), iv(n, i);
};
function qz(n, i) {
  return n === "toggle" ? i === 1 ? 1 : -1 : n === "zoomOut" ? -1 : 1;
}
function Vz(n, i) {
  var u = n.setup, o = n.doubleClickStopEventTimer, c = n.state, f = n.contentComponent, d = c.scale, p = n.props, v = p.onZoomStart, h = p.onZoom, y = u.doubleClick, S = y.disabled, E = y.mode, A = y.step, M = y.animationTime, q = y.animationType;
  if (!S && !o) {
    if (E === "reset")
      return Bz(n, i);
    if (!f)
      return console.error("No ContentComponent found");
    var X = qz(E, n.state.scale), R = Qh(n, X, A);
    if (d !== R) {
      Ee(_e(n), i, v);
      var Q = Fh(i, f, d), V = tc(n, R, Q.x, Q.y);
      if (!V)
        return console.error("Error during zoom event. New transformation state was not calculated.");
      Ee(_e(n), i, h), Wn(n, V, M, q), iv(n, i);
    }
  }
}
var $z = function(n, i) {
  var u = n.isInitialized, o = n.setup, c = n.wrapperComponent, f = o.doubleClick, d = f.disabled, p = f.excluded, v = i.target, h = c?.contains(v), y = u && v && h && !d;
  if (!y)
    return !1;
  var S = yl(v, p);
  return !S;
}, Lz = (
  /** @class */
  /* @__PURE__ */ (function() {
    function n(i) {
      var u = this;
      this.mounted = !0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.onInitCallbacks = /* @__PURE__ */ new Set(), this.onTransformCallbacks = /* @__PURE__ */ new Set(), this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.isWheelPanning = !1, this.startCoords = null, this.panStartPosition = null, this.lastTouch = null, this.isPinching = !1, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.pinchPreviousCenter = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.isAnimating = !1, this.animation = null, this.pressedKeys = {}, this.mount = function() {
        u.initializeWindowEvents();
      }, this.unmount = function() {
        u.cleanupWindowEvents();
      }, this.update = function(o) {
        u.props = o, u.wrapperComponent && u.contentComponent && ri(u, u.state.scale), u.setup = nh(o);
      }, this.initializeWindowEvents = function() {
        var o, c, f, d, p = Us(), v = (o = u.wrapperComponent) === null || o === void 0 ? void 0 : o.ownerDocument, h = v?.defaultView;
        (c = u.wrapperComponent) === null || c === void 0 || c.addEventListener("wheel", u.onWheelPanning, p), (f = u.wrapperComponent) === null || f === void 0 || f.addEventListener("keyup", u.setKeyUnPressed, p), (d = u.wrapperComponent) === null || d === void 0 || d.addEventListener("keydown", u.setKeyPressed, p), h?.addEventListener("mousedown", u.onPanningStart, p), h?.addEventListener("mousemove", u.onPanning, p), h?.addEventListener("mouseup", u.onPanningStop, p), v?.addEventListener("mouseleave", u.clearPanning, p), h?.addEventListener("keyup", u.setKeyUnPressed, p), h?.addEventListener("keydown", u.setKeyPressed, p), h?.addEventListener("blur", u.handleWindowBlur);
      }, this.cleanupWindowEvents = function() {
        var o, c, f, d, p, v = Us(), h = (o = u.wrapperComponent) === null || o === void 0 ? void 0 : o.ownerDocument, y = h?.defaultView;
        y?.removeEventListener("mousedown", u.onPanningStart, v), y?.removeEventListener("mousemove", u.onPanning, v), y?.removeEventListener("mouseup", u.onPanningStop, v), h?.removeEventListener("mouseleave", u.clearPanning, v), y?.removeEventListener("keyup", u.setKeyUnPressed, v), y?.removeEventListener("keydown", u.setKeyPressed, v), y?.removeEventListener("blur", u.handleWindowBlur), document.removeEventListener("mouseleave", u.clearPanning, v), (c = u.wrapperComponent) === null || c === void 0 || c.removeEventListener("wheel", u.onWheelPanning, v), (f = u.wrapperComponent) === null || f === void 0 || f.removeEventListener("keyup", u.setKeyUnPressed, v), (d = u.wrapperComponent) === null || d === void 0 || d.removeEventListener("keydown", u.setKeyPressed, v), Jt(u), (p = u.observer) === null || p === void 0 || p.disconnect();
      }, this.handleInitializeWrapperEvents = function(o) {
        var c = Us();
        o.addEventListener("wheel", u.onWheelZoom, c), o.addEventListener("dblclick", u.onDoubleClick, c), o.addEventListener("touchstart", u.onTouchPanningStart, c), o.addEventListener("touchmove", u.onTouchPanning, c), o.addEventListener("touchend", u.onTouchPanningStop, c);
      }, this.handleInitialize = function(o) {
        var c = u.setup.centerOnInit;
        u.applyTransformation(), u.onInitCallbacks.forEach(function(f) {
          return f(_e(u));
        }), c && (u.setCenter(), u.observer = new ResizeObserver(function() {
          var f, d = o.offsetWidth, p = o.offsetHeight;
          (d > 0 || p > 0) && (u.onInitCallbacks.forEach(function(v) {
            return v(_e(u));
          }), u.setCenter(), (f = u.observer) === null || f === void 0 || f.disconnect());
        }), setTimeout(function() {
          var f;
          (f = u.observer) === null || f === void 0 || f.disconnect();
        }, 5e3), u.observer.observe(o));
      }, this.onWheelZoom = function(o) {
        var c = u.setup.disabled;
        if (!c) {
          u.syncModifierKeys(o);
          var f = Ph(u, o);
          f && (Dz(u, o), Zz(u, o), Rz(u, o));
        }
      }, this.onWheelPanning = function(o) {
        var c = u.props.onPanning, f = u.setup.trackPadPanning, d = f.lockAxisX, p = f.lockAxisY;
        u.syncModifierKeys(o);
        var v = wz(u, o);
        if (v) {
          o.preventDefault(), o.stopPropagation();
          var h = u.state, y = h.positionX, S = h.positionY, E = y - o.deltaX, A = S - o.deltaY, M = d ? y : E, q = p ? S : A, X = u.setup.autoAlignment, R = X.sizeX, Q = X.sizeY, V = Qn(u, R), B = Qn(u, Q);
          M === y && q === S || (Uz(u, o), $h(u, M, q, V, B), Ee(_e(u), o, c), kz(u, o));
        }
      }, this.onPanningStart = function(o) {
        var c = u.setup.disabled, f = u.props.onPanningStart;
        if (!c) {
          u.syncModifierKeys(o);
          var d = Wp(u, o);
          if (d) {
            var p = u.isPressingKeys(u.setup.panning.activationKeys);
            p && (o.button === 0 && !u.setup.panning.allowLeftClickPan || o.button === 1 && !u.setup.panning.allowMiddleClickPan || o.button === 2 && !u.setup.panning.allowRightClickPan || (o.preventDefault(), o.stopPropagation(), Jt(u), Ip(u, o), Ee(_e(u), o, f)));
          }
        }
      }, this.onPanning = function(o) {
        var c = u.setup.disabled, f = u.props.onPanning;
        if (!c) {
          if (u.syncModifierKeys(o), u.isPanning && o.buttons === 0) {
            u.clearPanning(o);
            return;
          }
          var d = Pp(u);
          if (d) {
            var p = u.isPressingKeys(u.setup.panning.activationKeys);
            p && (o.preventDefault(), o.stopPropagation(), eh(u, o.clientX, o.clientY, Gn.MOUSE), Ee(_e(u), o, f));
          }
        }
      }, this.onPanningStop = function(o) {
        var c = u.setup.panning.velocityDisabled, f = u.props.onPanningStop;
        u.isPanning && (fz(u, c), Ee(_e(u), o, f));
      }, this.onPinchStart = function(o) {
        var c = u.setup.disabled, f = u.props.onPinchStart;
        if (!c) {
          var d = Oz(u, o);
          d && (Yz(u, o), Jt(u), Ee(_e(u), o, f));
        }
      }, this.onPinch = function(o) {
        var c = u.setup.disabled, f = u.props.onPinch;
        if (!c) {
          var d = Cz(u);
          d && (o.preventDefault(), o.stopPropagation(), Xz(u, o), Ee(_e(u), o, f));
        }
      }, this.onPinchStop = function(o) {
        var c = u.props.onPinchStop;
        u.pinchStartScale && (Hz(u), Ee(_e(u), o, c));
      }, this.onTouchPanningStart = function(o) {
        var c = u.setup, f = c.disabled, d = c.doubleClick, p = u.props.onPanningStart;
        if (!f) {
          var v = !d?.disabled, h = u.lastTouch && +/* @__PURE__ */ new Date() - u.lastTouch < 200;
          if (v && h && o.touches.length === 1)
            u.onDoubleClick(o);
          else {
            u.lastTouch = +/* @__PURE__ */ new Date(), Jt(u);
            var y = o.touches, S = y.length === 1, E = y.length === 2, A = Wp(u, o);
            if (S) {
              if (!A)
                return;
              Jt(u), Ip(u, o), Ee(_e(u), o, p);
            }
            E && u.onPinchStart(o);
          }
        }
      }, this.onTouchPanning = function(o) {
        var c = u.setup.disabled, f = u.props.onPanning;
        if (u.isPanning && o.touches.length === 1) {
          if (c)
            return;
          var d = Pp(u);
          if (!d)
            return;
          o.cancelable && o.preventDefault(), o.stopPropagation();
          var p = o.touches[0];
          eh(u, p.clientX, p.clientY, Gn.TOUCH), Ee(_e(u), o, f);
        } else o.touches.length > 1 && u.onPinch(o);
      }, this.onTouchPanningStop = function(o) {
        u.onPanningStop(o), u.onPinchStop(o);
      }, this.onDoubleClick = function(o) {
        var c = u.setup.disabled;
        if (!c) {
          var f = $z(u, o);
          f && Vz(u, o);
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
          var o = ac(u.state.scale, u.wrapperComponent, u.contentComponent);
          u.setState(o.scale, o.positionX, o.positionY);
        }
      }, this.handleTransformStyles = function(o, c, f) {
        return u.props.customTransform ? u.props.customTransform(o, c, f) : Wh(o, c, f);
      }, this.getContext = function() {
        return _e(u);
      }, this.applyTransformation = function() {
        if (!(!u.mounted || !u.contentComponent)) {
          var o = u.state, c = o.scale, f = o.positionX, d = o.positionY, p = u.handleTransformStyles(f, d, c);
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
      }, this.setState = function(o, c, f) {
        var d = u.props.onTransform;
        if (!Number.isNaN(o) && !Number.isNaN(c) && !Number.isNaN(f)) {
          var p = Math.max(o, 1e-7);
          p !== u.state.scale && (u.state.previousScale = u.state.scale, u.state.scale = p), u.state.positionX = c, u.state.positionY = f, u.applyTransformation();
          var v = _e(u);
          u.onChangeCallbacks.forEach(function(h) {
            return h(v);
          }), Ee(v, { scale: u.state.scale, positionX: c, positionY: f }, d);
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
        u.cleanupWindowEvents(), u.wrapperComponent = o, u.contentComponent = c, ri(u, u.state.scale), u.handleInitializeWrapperEvents(o), u.handleInitialize(c), u.initializeWindowEvents(), u.isInitialized = !0;
        var f = _e(u);
        Ee(f, void 0, u.props.onInit), zz(u.props.ref, f);
      }, this.props = i, this.setup = nh(this.props), this.state = Gh(this.props);
    }
    return n;
  })()
), bl = eo.createContext(null), Gz = function(n, i) {
  return typeof n == "function" ? n(i) : n;
}, Qz = eo.forwardRef(function(n, i) {
  var u = ae.useRef(new Lz(n)).current, o = Gz(n.children, Iu(u));
  return ae.useImperativeHandle(i, function() {
    return Iu(u);
  }, [u]), ae.useEffect(function() {
    u.update(n);
  }, [u, n]), _.jsx(bl.Provider, $t({ value: u }, { children: o }));
});
eo.forwardRef(function(n, i) {
  var u = ae.useRef(null), o = ae.useContext(bl);
  return ae.useEffect(function() {
    return o.onChange(function(c) {
      if (u.current) {
        var f = 0, d = 0;
        u.current.style.transform = o.handleTransformStyles(f, d, 1 / c.instance.state.scale);
      }
    });
  }, [o]), _.jsx("div", $t({}, n, { ref: Tz([u, i]) }));
});
function Kz(n, i) {
  i === void 0 && (i = {});
  var u = i.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], c = document.createElement("style");
    c.type = "text/css", u === "top" && o.firstChild ? o.insertBefore(c, o.firstChild) : o.appendChild(c), c.styleSheet ? c.styleSheet.cssText = n : c.appendChild(document.createTextNode(n));
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
`, ks = { wrapper: "transform-component-module_wrapper__SPB86", content: "transform-component-module_content__FBWxo", infiniteGrid: "transform-component-module_infiniteGrid__Z-aP3" };
Kz(Jz);
var Wz = function(n) {
  var i = n.children, u = n.wrapperClass, o = u === void 0 ? "" : u, c = n.contentClass, f = c === void 0 ? "" : c, d = n.wrapperStyle, p = n.contentStyle, v = n.wrapperProps, h = v === void 0 ? {} : v, y = n.contentProps, S = y === void 0 ? {} : y, E = n.infinite, A = E === void 0 ? !1 : E, M = ae.useContext(bl), q = M.init, X = M.cleanupWindowEvents, R = ae.useRef(null), Q = ae.useRef(null), V = ae.useRef(null);
  return ae.useEffect(function() {
    var B = R.current, G = Q.current;
    return B !== null && G !== null && q && q?.(B, G), function() {
      X?.();
    };
  }, []), ae.useEffect(function() {
    if (A) {
      var B = V.current;
      if (B) {
        var G = function() {
          var ee = M.state, K = ee.positionX, ue = ee.positionY;
          B.style.backgroundPosition = "".concat(K, "px ").concat(ue, "px");
        };
        return G(), M.onChange(G);
      }
    }
  }, [A, M]), _.jsxs("div", $t({}, h, { ref: R, className: "".concat(Vs.wrapperClass, " ").concat(ks.wrapper, " ").concat(o), style: d }, { children: [A && _.jsx("div", { ref: V, className: ks.infiniteGrid, "aria-hidden": !0 }), _.jsx("div", $t({}, S, { ref: Q, className: "".concat(Vs.contentClass, " ").concat(ks.content, " ").concat(f), style: $t($t({}, p), { transform: Wh(M.state.positionX, M.state.positionY, M.state.scale) }) }, { children: i }))] }));
};
function Pz(n, i) {
  var u = Math.max(0, Math.min(n.x + n.width, i.x + i.width) - Math.max(n.x, i.x)), o = Math.max(0, Math.min(n.y + n.height, i.y + i.height) - Math.max(n.y, i.y));
  return u * o;
}
function Fz(n) {
  var i = n.elementX, u = n.elementY, o = n.elementWidth, c = n.elementHeight, f = n.scale, d = n.positionX, p = n.positionY, v = n.viewportWidth, h = n.viewportHeight, y = n.margin, S = y === void 0 ? 0 : y, E = n.threshold, A = E === void 0 ? 0 : E, M = {
    x: -S,
    y: -S,
    width: v + 2 * S,
    height: h + 2 * S
  }, q = {
    x: i * f + d,
    y: u * f + p,
    width: o * f,
    height: c * f
  };
  if (A <= 0) {
    var X = q.x < M.x + M.width && q.x + q.width > M.x, R = q.y < M.y + M.height && q.y + q.height > M.y;
    return X && R;
  }
  var Q = q.width * q.height;
  if (Q <= 0)
    return !1;
  var V = Pz(M, q);
  return V / Q >= A;
}
eo.forwardRef(function(n, i) {
  var u = n.x, o = n.y, c = n.width, f = n.height, d = n.margin, p = d === void 0 ? 0 : d, v = n.threshold, h = v === void 0 ? 0 : v, y = n.placeholder, S = y === void 0 ? null : y, E = n.onShow, A = n.onHide, M = n.children, q = n.className, X = n.style, R = ae.useContext(bl), Q = ae.useState(!1), V = Q[0], B = Q[1], G = ae.useRef(!1), ee = ae.useRef(E), K = ae.useRef(A);
  return ee.current = E, K.current = A, ae.useEffect(function() {
    var ue = function() {
      var ge, ye, Be = R.wrapperComponent;
      if (Be) {
        var Ke = Fz({
          elementX: u,
          elementY: o,
          elementWidth: c,
          elementHeight: f,
          scale: R.state.scale,
          positionX: R.state.positionX,
          positionY: R.state.positionY,
          viewportWidth: Be.offsetWidth,
          viewportHeight: Be.offsetHeight,
          margin: p,
          threshold: h
        });
        Ke !== G.current && (G.current = Ke, B(Ke), Ke ? (ge = ee.current) === null || ge === void 0 || ge.call(ee) : (ye = K.current) === null || ye === void 0 || ye.call(K));
      }
    };
    ue();
    var Se = R.onChange(ue), ve;
    return R.wrapperComponent || (ve = R.onInit(function() {
      return ue();
    })), function() {
      Se(), ve?.();
    };
  }, [R, u, o, c, f, p, h]), V ? _.jsx("div", $t({ ref: i, className: q, style: X }, { children: M })) : S ? _.jsx(_.Fragment, { children: S }) : null;
});
var Iz = function() {
  var n = ae.useContext(bl);
  if (!n)
    throw new Error("Transform context must be placed inside TransformWrapper");
  return n;
}, eT = function() {
  var n = Iz();
  return Iu(n);
};
function tT({ locked: n, onToggleLock: i }) {
  const { zoomIn: u, zoomOut: o, resetTransform: c } = eT();
  return /* @__PURE__ */ _.jsxs("div", { className: "map-controls", children: [
    /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Zoom in", onClick: () => u(), disabled: n, children: /* @__PURE__ */ _.jsx(_0, {}) }),
    /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Zoom out", onClick: () => o(), disabled: n, children: /* @__PURE__ */ _.jsx(z0, {}) }),
    /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Reset zoom", onClick: () => c(), children: /* @__PURE__ */ _.jsx(c0, {}) }),
    /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": n ? "Unlock map" : "Lock map", onClick: i, children: n ? /* @__PURE__ */ _.jsx(t0, {}) : /* @__PURE__ */ _.jsx(Iy, {}) })
  ] });
}
function nT({ hass: n, floor: i, language: u, selected: o, launched: c, disabled: f, onToggle: d }) {
  const [p, v] = ae.useState(!0), [h, y] = ae.useState({ width: 0, height: 0 }), [S, E] = ae.useState({ width: 0, height: 0 }), A = ae.useRef(null), M = n.states[i.map_entity], q = ae.useMemo(() => Yh(M), [M]), X = ae.useMemo(() => f2(M), [M]), R = ae.useMemo(() => p2(i), [i]), Q = typeof M?.attributes.entity_picture == "string" ? M.attributes.entity_picture : void 0;
  ae.useEffect(() => {
    const B = A.current;
    if (!B) return;
    const G = new ResizeObserver(([ee]) => {
      E({ width: ee.contentRect.width, height: ee.contentRect.height });
    });
    return G.observe(B), () => G.disconnect();
  }, []);
  let V;
  return !M || M.state === "unavailable" ? V = re(u, "mapMissing") : Q ? X.length < 3 ? V = re(u, "calibrationMissing") : q.length === 0 && (V = re(u, "roomsMissing")) : V = re(u, "imageMissing"), V ? /* @__PURE__ */ _.jsx("div", { className: "map-error", role: "alert", children: V }) : /* @__PURE__ */ _.jsx("div", { className: "map-shell", ref: A, children: /* @__PURE__ */ _.jsxs(
    Qz,
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
        /* @__PURE__ */ _.jsx(tT, { locked: p, onToggleLock: () => v((B) => !B) }),
        /* @__PURE__ */ _.jsx(Wz, { wrapperClass: "map-transform", contentClass: "map-content", children: /* @__PURE__ */ _.jsxs(
          "div",
          {
            className: "map-image-wrap",
            style: (() => {
              if (!h.width || !h.height || !S.width || !S.height) return;
              const B = Math.min(S.width / h.width, S.height / h.height);
              return { width: h.width * B, height: h.height * B };
            })(),
            children: [
              /* @__PURE__ */ _.jsx(
                "img",
                {
                  src: n.hassUrl(Q),
                  alt: `${i.name} vacuum map`,
                  draggable: !1,
                  onLoad: (B) => y({ width: B.currentTarget.naturalWidth, height: B.currentTarget.naturalHeight })
                }
              ),
              h.width > 0 && h.height > 0 && /* @__PURE__ */ _.jsx(
                "svg",
                {
                  className: "room-overlay",
                  viewBox: `0 0 ${h.width} ${h.height}`,
                  preserveAspectRatio: "xMidYMid meet",
                  "aria-label": `${i.name} rooms`,
                  children: q.map((B) => {
                    const G = R.get(B.segment_id), ee = !!G?.area_id, K = o.has(B.segment_id), ue = c.has(B.segment_id), Se = m2(B, X), ve = G?.name || B.source_name, ge = f || !ee;
                    return /* @__PURE__ */ _.jsxs("g", { className: `room ${K ? "selected" : ""} ${ue ? "launched" : ""} ${ee ? "" : "unmapped"}`, children: [
                      /* @__PURE__ */ _.jsx(
                        "path",
                        {
                          className: "room-hitbox",
                          d: d2(B, X),
                          role: "button",
                          tabIndex: ge ? -1 : 0,
                          "aria-label": `${ve}${ee ? "" : ` — ${re(u, "roomUnmapped")}`}`,
                          "aria-pressed": K,
                          "aria-disabled": ge,
                          onClick: () => !ge && d(B.segment_id),
                          onKeyDown: (ye) => {
                            !ge && (ye.key === "Enter" || ye.key === " ") && (ye.preventDefault(), d(B.segment_id));
                          },
                          children: /* @__PURE__ */ _.jsx("title", { children: ee ? ve : `${ve}: ${re(u, "roomUnmapped")}` })
                        }
                      ),
                      /* @__PURE__ */ _.jsxs("g", { className: "room-label", transform: `translate(${Se.x} ${Se.y})`, pointerEvents: "none", children: [
                        /* @__PURE__ */ _.jsx("circle", { r: "23" }),
                        /* @__PURE__ */ _.jsx("foreignObject", { x: "-11", y: "-11", width: "22", height: "22", children: /* @__PURE__ */ _.jsx(qs, { icon: G?.icon || "mdi:floor-plan" }) }),
                        /* @__PURE__ */ _.jsx("text", { y: "39", textAnchor: "middle", children: ve })
                      ] })
                    ] }, B.segment_id);
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
function ul(n, i) {
  if (!i) return;
  const u = n.states[i];
  if (!(!u || ["unknown", "unavailable"].includes(u.state)))
    return `${u.state}${u.attributes.unit_of_measurement ? ` ${u.attributes.unit_of_measurement}` : ""}`;
}
function aT(n, i, u) {
  if (!i) return;
  const o = n.states[i];
  if (!o || ["unknown", "unavailable"].includes(o.state)) return;
  const c = Number(o.state);
  if (!Number.isFinite(c) || c < 0) return;
  const f = String(o.attributes.unit_of_measurement ?? ""), d = f === "s" ? c / 60 : f === "min" ? c : f === "d" ? c * 24 * 60 : c * 60, p = Math.max(0, Math.round(d)), v = Math.floor(p / 60), h = p % 60;
  return `${[
    v > 0 ? `${v} ${u === "nl" ? "u" : "h"}` : void 0,
    h > 0 || v === 0 ? `${h} min` : void 0
  ].filter(Boolean).join(" ")} ${re(u, "remaining")}`;
}
function iT(n, i) {
  if (i === "washing_the_mop") return re(n, "washingMop");
}
function lT(n, i) {
  const u = n.entities?.map_select ? i.states[n.entities.map_select]?.state : void 0;
  return n.floors.find((o) => o.map_select_option === u) ?? n.floors[0];
}
function uT({ hass: n, config: i }) {
  const u = ae.useRef(n), o = ae.useRef(!1), c = i.language, [f, d] = ae.useState(() => lT(i, n).id), p = i.floors.find((H) => H.id === f) ?? i.floors[0], [v, h] = ae.useState(/* @__PURE__ */ new Set()), [y, S] = ae.useState(!1), [E, A] = ae.useState(), [M, q] = ae.useState({ phase: "idle" }), X = ae.useMemo(() => y2(n, i), [n, i]), R = ae.useMemo(() => M2(i, X), [i, X]), Q = R.find(({ preset: H, available: te }) => H.id === i.default_preset && te)?.preset ?? R.find(({ available: H }) => H)?.preset, [V, B] = ae.useState(
    () => Bs(Q ?? { id: "custom", strategy: "custom", cleaning_type: "vacuum" })
  ), G = n.states[i.entity];
  ae.useEffect(() => {
    u.current = n;
  }, [n]);
  const ee = i.entities?.status ? n.states[i.entities.status]?.state : void 0, K = _2(G?.state) || ee === "washing_the_mop";
  ae.useEffect(() => {
    M.phase === "starting" && K ? q((H) => ({ ...H, phase: "active" })) : M.phase === "active" && !K && (q({ phase: "idle" }), h(/* @__PURE__ */ new Set()));
  }, [M.phase, K]);
  const ue = new Set(M.floor_id === p.id ? M.segment_ids ?? [] : []), Se = p.rooms.filter((H) => v.has(H.segment_id)), ve = Se.map((H) => H.name), ge = i.entities?.dock_mop_drying ? n.states[i.entities.dock_mop_drying]?.state === "on" : !1, ye = [
    iT(c, ee),
    ge ? re(c, "dryingMop") : void 0,
    ge ? aT(n, i.entities?.dock_mop_drying_remaining_time, c) : void 0
  ].filter((H) => !!H), Be = [
    { icon: /* @__PURE__ */ _.jsx(Ky, {}), label: re(c, "battery"), value: ul(n, i.entities?.battery) },
    { icon: /* @__PURE__ */ _.jsx(a0, {}), label: re(c, "room"), value: ul(n, i.entities?.current_room) },
    { icon: /* @__PURE__ */ _.jsx(d0, {}), label: re(c, "area"), value: ul(n, i.entities?.cleaning_area) },
    { icon: /* @__PURE__ */ _.jsx(Wy, {}), label: re(c, "duration"), value: ul(n, i.entities?.cleaning_time) },
    { icon: /* @__PURE__ */ _.jsx(v0, {}), label: re(c, "progress"), value: ul(n, i.entities?.cleaning_progress) }
  ].filter((H) => H.value), Ke = (H) => {
    d(H), h(/* @__PURE__ */ new Set()), S(!1);
  }, it = () => {
    const H = p.rooms.filter((te) => te.include_in_floor_clean !== !1 && te.area_id).map((te) => te.segment_id);
    h(new Set(H)), S(!0);
  }, j = async () => {
    if (!o.current) {
      o.current = !0, q({ phase: "submitting", floor_id: p.id, segment_ids: [...v] });
      try {
        await E2({ getHass: () => u.current, config: i, floor: p, rooms: Se, draft: V }), q({ phase: "starting", floor_id: p.id, segment_ids: [...v] }), S(!1), A(re(c, "launched"));
      } catch (H) {
        const te = H instanceof Ue ? `${H.operation}: ${H.message}` : String(H);
        q({ phase: "failed", floor_id: p.id, segment_ids: [...v], error: te }), A(te);
      } finally {
        o.current = !1;
      }
    }
  }, $ = async (H) => {
    try {
      if (H === "stop" || H === "return_to_base") {
        const te = i.entities?.vacuum_then_mop_script;
        te && u.current.states[te] && u.current.states[te].state !== "unavailable" && await u.current.callService("script", "turn_off", {}, { entity_id: te });
      }
      await u.current.callService("vacuum", H, {}, { entity_id: i.entity });
    } catch (te) {
      A(`${H}: ${te instanceof Error ? te.message : String(te)}`);
    }
  };
  return /* @__PURE__ */ _.jsxs("ha-card", { className: "roborock-card", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "card-header", children: [
      /* @__PURE__ */ _.jsxs("div", { children: [
        /* @__PURE__ */ _.jsx("h1", { children: i.name ?? G?.attributes.friendly_name ?? "Roborock" }),
        /* @__PURE__ */ _.jsxs("div", { className: "state-line", children: [
          /* @__PURE__ */ _.jsx("span", { className: `state-dot state-${G?.state ?? "unavailable"}` }),
          /* @__PURE__ */ _.jsx("span", { children: G?.state?.replaceAll("_", " ") ?? "unavailable" }),
          ye.map((H) => /* @__PURE__ */ _.jsx("span", { className: "state-detail", children: ` · ${H}` }, H))
        ] })
      ] }),
      Be.length > 0 && /* @__PURE__ */ _.jsx("div", { className: "status-strip", children: Be.map((H) => /* @__PURE__ */ _.jsxs("div", { title: H.label, children: [
        H.icon,
        /* @__PURE__ */ _.jsx("strong", { children: H.value })
      ] }, H.label)) })
    ] }),
    i.floors.length > 1 && /* @__PURE__ */ _.jsx("div", { className: "floor-tabs", role: "tablist", "aria-label": re(c, "floor"), children: i.floors.map((H) => /* @__PURE__ */ _.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": p.id === H.id,
        className: p.id === H.id ? "active" : "",
        onClick: () => Ke(H.id),
        children: H.name
      },
      H.id
    )) }),
    /* @__PURE__ */ _.jsx(
      nT,
      {
        hass: n,
        floor: p,
        language: c,
        selected: v,
        launched: ue,
        disabled: M.phase === "submitting" || M.phase === "starting" || M.phase === "active",
        onToggle: (H) => h((te) => {
          const fe = new Set(te);
          return fe.has(H) ? fe.delete(H) : fe.add(H), fe;
        })
      }
    ),
    /* @__PURE__ */ _.jsxs("div", { className: "selection-row", children: [
      /* @__PURE__ */ _.jsxs("div", { children: [
        /* @__PURE__ */ _.jsx("strong", { children: re(c, "selectedRooms") }),
        /* @__PURE__ */ _.jsx("span", { children: ve.length ? ve.join(" · ") : re(c, "noRoomsSelected") })
      ] }),
      /* @__PURE__ */ _.jsx("span", { className: "selection-count", children: v.size })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "primary-actions", children: [
      /* @__PURE__ */ _.jsxs("button", { type: "button", className: "secondary", onClick: it, disabled: M.phase === "submitting", children: [
        /* @__PURE__ */ _.jsx(yp, {}),
        " ",
        re(c, "entireFloor")
      ] }),
      /* @__PURE__ */ _.jsx("button", { type: "button", className: "primary", onClick: () => S(!0), disabled: v.size === 0 || M.phase === "submitting", children: re(c, "configureJob") })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "transport", "aria-label": "Vacuum controls", children: [
      G?.state === "paused" && X.canStart && /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => $("start"), children: [
        /* @__PURE__ */ _.jsx(o0, {}),
        re(c, "resume")
      ] }),
      G?.state === "cleaning" && X.canPause && /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => $("pause"), children: [
        /* @__PURE__ */ _.jsx(l0, {}),
        re(c, "pause")
      ] }),
      X.canStop && /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => $("stop"), children: [
        /* @__PURE__ */ _.jsx(p0, {}),
        re(c, "stop")
      ] }),
      X.canDock && /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => $("return_to_base"), children: [
        /* @__PURE__ */ _.jsx(yp, {}),
        re(c, "dock")
      ] })
    ] }),
    y && /* @__PURE__ */ _.jsx(
      U2,
      {
        language: c,
        draft: V,
        capabilities: X,
        presets: R,
        selectedRoomNames: ve,
        submitting: M.phase === "submitting",
        onDraftChange: B,
        onClose: () => M.phase !== "submitting" && S(!1),
        onStart: j
      }
    ),
    E && /* @__PURE__ */ _.jsxs("div", { className: "toast", role: "status", children: [
      /* @__PURE__ */ _.jsx("span", { children: E }),
      /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": re(c, "close"), onClick: () => A(void 0), children: /* @__PURE__ */ _.jsx(lh, {}) })
    ] })
  ] });
}
const oT = ':host{display:block;--rvm-accent: var(--primary-color, #5965f2);--rvm-on-accent: var(--text-primary-color, #fff);--rvm-surface: var(--card-background-color, #fff);--rvm-surface-2: var(--secondary-background-color, #f2f3f7);--rvm-text: var(--primary-text-color, #202124);--rvm-muted: var(--secondary-text-color, #6b7280);--rvm-border: var(--divider-color, rgba(0, 0, 0, .12));--rvm-danger: var(--error-color, #d32f2f);color:var(--rvm-text);font-family:var(--paper-font-body1_-_font-family, system-ui, sans-serif)}*{box-sizing:border-box}button,input,select{font:inherit}button{color:inherit}svg{width:20px;height:20px;stroke-width:2}.roborock-card{display:block;position:relative;overflow:hidden;border-radius:var(--ha-card-border-radius, 24px);background:var(--rvm-surface)}.card-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 20px 14px}.card-header h1{margin:0 0 4px;font-size:22px;line-height:1.2}.state-line{display:flex;flex-wrap:wrap;align-items:center;gap:7px;color:var(--rvm-muted);font-size:14px;text-transform:capitalize}.state-line .state-detail{text-transform:none}.state-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--rvm-muted)}.state-cleaning,.state-paused{background:var(--rvm-accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--rvm-accent) 18%,transparent)}.state-error,.state-unavailable{background:var(--rvm-danger)}.status-strip{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.status-strip div{display:flex;align-items:center;gap:6px;min-height:36px;padding:7px 10px;border-radius:12px;background:var(--rvm-surface-2);font-size:13px}.status-strip svg{width:16px;height:16px;color:var(--rvm-accent)}.floor-tabs,.segmented{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;margin:0 20px 14px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.floor-tabs button,.segmented button{min-height:44px;padding:8px 14px;border:0;border-radius:11px;background:transparent;cursor:pointer;font-weight:600}.floor-tabs button.active,.segmented button.active{background:var(--rvm-surface);color:var(--rvm-accent);box-shadow:0 2px 8px #0000001a}.map-shell{position:relative;height:clamp(340px,54vh,620px);margin:0 12px;overflow:hidden;border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 75%,#7d91a8 25%);touch-action:pan-y}.map-transform{width:100%!important;height:100%!important}.map-content{width:100%!important;height:100%!important;display:flex;align-items:center;justify-content:center}.map-image-wrap{position:relative;flex:none;max-width:100%;max-height:100%}.map-image-wrap>img{display:block;width:100%;height:100%;object-fit:fill;-webkit-user-select:none;user-select:none}.room-overlay{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.room-hitbox{fill:transparent;stroke:#ffffff8c;stroke-width:3;vector-effect:non-scaling-stroke;cursor:pointer;transition:fill .15s ease,stroke .15s ease;outline:none}.room-hitbox:hover,.room-hitbox:focus-visible{fill:color-mix(in srgb,var(--rvm-accent) 18%,transparent);stroke:var(--rvm-accent)}.room.selected .room-hitbox{fill:color-mix(in srgb,var(--rvm-accent) 32%,transparent);stroke:var(--rvm-accent)}.room.launched .room-hitbox{fill:color-mix(in srgb,#35a854 30%,transparent);stroke:#35a854}.room.unmapped .room-hitbox{fill:#5a5a5a1f;stroke-dasharray:7 5;cursor:not-allowed}.room-label circle{fill:color-mix(in srgb,var(--rvm-surface) 92%,transparent);stroke:var(--rvm-border);stroke-width:2}.room-label text{fill:var(--rvm-text);paint-order:stroke;stroke:var(--rvm-surface);stroke-width:5px;stroke-linejoin:round;font-size:17px;font-weight:700}.room-label foreignObject{color:var(--rvm-accent)}.room-label ha-icon{display:block;width:22px;height:22px}.room.unmapped .room-label{opacity:.55}.map-controls{position:absolute;z-index:5;top:10px;right:10px;display:flex;gap:5px}.map-controls button,.map-controls .icon-button{display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--rvm-border);border-radius:13px;background:color-mix(in srgb,var(--rvm-surface) 92%,transparent);cursor:pointer;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.map-controls button:disabled{opacity:.35;cursor:not-allowed}.map-error{display:grid;place-items:center;min-height:260px;margin:0 12px;padding:30px;border:1px dashed var(--rvm-danger);border-radius:20px;color:var(--rvm-danger);text-align:center}.selection-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 20px 10px}.selection-row strong,.selection-row span{display:block}.selection-row strong{margin-bottom:3px;font-size:14px}.selection-row>div>span{color:var(--rvm-muted);font-size:13px}.selection-row .selection-count{display:grid;place-items:center;min-width:34px;height:34px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent);font-weight:700}.primary-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 20px 14px}button.primary,button.secondary,.primary-actions button{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:10px 16px;border-radius:14px;cursor:pointer;font-weight:700}button.primary{border:1px solid var(--rvm-accent);color:var(--rvm-on-accent);background:var(--rvm-accent)}button.secondary{border:1px solid var(--rvm-border);background:var(--rvm-surface-2)}button:disabled{opacity:.45;cursor:not-allowed}.transport{display:flex;justify-content:center;gap:8px;padding:0 20px 20px}.transport button{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:8px 13px;border:1px solid var(--rvm-border);border-radius:13px;background:transparent;cursor:pointer}.transport svg{width:18px;height:18px}.sheet-layer{position:fixed;z-index:999;inset:0;display:grid;place-items:center;padding:24px}.sheet-backdrop{position:absolute;inset:0;width:100%;height:100%;border:0;background:#0000007a;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.job-sheet{position:relative;display:flex;flex-direction:column;width:min(680px,100%);max-height:min(820px,100vh - 48px);overflow:hidden;border-radius:24px;background:var(--rvm-surface);box-shadow:0 22px 70px #00000052}.job-sheet header{display:flex;justify-content:space-between;gap:16px;padding:24px 24px 14px}.job-sheet h2,.job-sheet h3,.job-sheet p{margin:0}.job-sheet header p{margin-top:5px;color:var(--rvm-muted)}.job-sheet h3{margin-bottom:10px;font-size:15px}.job-sheet footer{display:flex;justify-content:flex-end;gap:10px;padding:16px 24px 22px;border-top:1px solid var(--rvm-border)}.job-sheet footer button{min-width:120px}.sheet-handle{display:none}.sheet-body{overflow:auto;padding:8px 24px 22px}.icon-button{display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--rvm-surface-2);cursor:pointer}.cleaning-mode-tabs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{position:relative;display:flex;align-items:center;justify-content:center;gap:7px;min-height:62px;padding:8px 7px 12px;border:0;color:var(--rvm-muted);background:transparent;cursor:pointer;font-weight:700}.cleaning-mode-tabs button:after{content:"";position:absolute;right:14%;bottom:-1px;left:14%;height:3px;border-radius:3px 3px 0 0;background:transparent}.cleaning-mode-tabs button.active{color:var(--rvm-accent)}.cleaning-mode-tabs button.active:after{background:var(--rvm-accent)}.cleaning-mode-tabs ha-icon{width:22px;height:22px}.mode-settings{margin-top:16px;padding:18px;border:1px solid var(--rvm-border);border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 45%,transparent)}.mode-description{margin:0 0 18px!important;color:var(--rvm-muted);line-height:1.45}.app-field+.app-field{margin-top:20px}.option-strip{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.option-strip button{min-width:0;min-height:46px;padding:7px 6px;overflow:hidden;border:0;border-radius:11px;background:transparent;cursor:pointer;font-size:12px;font-weight:600;text-overflow:ellipsis;white-space:nowrap}.option-strip button.active{color:var(--rvm-accent);background:var(--rvm-surface);box-shadow:0 2px 8px #0000001a}.range-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.range-heading strong{color:var(--rvm-accent)}.range-heading output{display:grid;place-items:center;min-width:42px;height:42px;border-radius:50%;background:var(--rvm-surface-2);font-weight:700}.water-flow input[type=range]{width:100%;min-height:34px;accent-color:var(--rvm-accent)}.saved-profiles{margin-top:16px}.saved-profiles>span{color:var(--rvm-muted);font-size:13px;font-weight:600}.saved-profiles>div{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.saved-profiles button{display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:7px 11px;border:1px solid var(--rvm-border);border-radius:12px;background:transparent}.saved-profiles button.active{border-color:var(--rvm-accent);color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 10%,transparent)}.field{display:flex;flex-direction:column;gap:7px;min-width:0}.field>span,.editor label{color:var(--rvm-muted);font-size:13px;font-weight:600}.field select,.editor input,.editor select{width:100%;min-height:44px;padding:9px 11px;border:1px solid var(--rvm-border);border-radius:11px;color:var(--rvm-text);background:var(--rvm-surface)}.field .segmented{margin:0}.toast{position:absolute;z-index:1000;right:16px;bottom:16px;display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:12px 12px 12px 16px;border-radius:14px;color:var(--rvm-text);background:var(--rvm-surface);box-shadow:0 8px 30px #0000003d}.toast button{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:var(--rvm-surface-2)}.editor{padding:8px 4px 32px;color:var(--rvm-text)}.editor>h2{margin:0 0 4px}.editor>p{margin:0 0 18px;color:var(--rvm-muted)}.editor section{margin:0 0 18px;padding:16px;border:1px solid var(--rvm-border);border-radius:16px;background:var(--rvm-surface)}.editor h3{margin:0 0 12px}.editor h4{margin:14px 0 8px}.editor label{display:flex;flex-direction:column;gap:6px;margin-bottom:10px;text-transform:capitalize}.editor .checkbox{flex-direction:row;align-items:center}.editor .checkbox input{width:18px;min-height:auto}.editor-errors{margin-bottom:14px;padding:12px;border-radius:12px;color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent);font-size:12px}.editor-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.editor-heading>div{display:flex;gap:4px}.editor-heading button{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:36px;padding:6px 9px;border:1px solid var(--rvm-border);border-radius:9px;background:var(--rvm-surface-2)}.editor-heading button svg{width:16px;height:16px}.editor-card{margin-top:12px;padding:14px;border-radius:14px;background:var(--rvm-surface-2)}.editor-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 12px;margin-top:12px}.room-editor-list{display:grid;gap:8px}.room-editor{display:grid;grid-template-columns:100px 1fr 1.2fr 1fr 1.2fr;align-items:end;gap:8px;padding:10px;border:1px solid var(--rvm-border);border-radius:12px;background:var(--rvm-surface)}.room-editor label{margin:0}button:focus-visible,select:focus-visible,input:focus-visible,.room-hitbox:focus-visible{outline:3px solid color-mix(in srgb,var(--rvm-accent) 55%,transparent);outline-offset:2px}@media(max-width:700px){.card-header{align-items:flex-start;flex-direction:column}.status-strip{justify-content:flex-start}.map-shell{height:clamp(300px,48vh,480px);margin:0 8px}.room-label text{font-size:18px}.primary-actions{grid-template-columns:1fr}.transport{flex-wrap:wrap}.sheet-layer{align-items:end;padding:0}.job-sheet{width:100%;max-height:92vh;border-radius:24px 24px 0 0}.sheet-handle{display:block;width:42px;height:5px;margin:9px auto 0;border-radius:9px;background:var(--rvm-border)}.job-sheet header{padding-top:14px}.cleaning-mode-tabs{grid-template-columns:repeat(2,1fr)}.cleaning-mode-tabs button:nth-child(-n+2){border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{min-height:56px}.editor-grid{grid-template-columns:1fr}.room-editor{grid-template-columns:1fr 1fr}.room-editor>strong{grid-column:1/-1}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}', rT = "0.1.1";
class lv extends HTMLElement {
  root;
  container;
  constructor() {
    super();
    const i = this.attachShadow({ mode: "open" }), u = document.createElement("style");
    u.textContent = oT, i.append(u), this.container = document.createElement("div"), i.append(this.container);
  }
  renderReact(i) {
    this.root ??= Xy.createRoot(this.container), this.root.render(i);
  }
}
class sT extends lv {
  config;
  homeAssistant;
  setConfig(i) {
    this.config = s2(i), this.render();
  }
  set hass(i) {
    this.homeAssistant = i, this.render();
  }
  render() {
    !this.config || !this.homeAssistant || this.renderReact(/* @__PURE__ */ _.jsx(uT, { hass: this.homeAssistant, config: this.config }));
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
    return kh();
  }
}
class cT extends lv {
  config = kh();
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
        g2,
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
customElements.get("roborock-vacuum-map-card") || customElements.define("roborock-vacuum-map-card", sT);
customElements.get("roborock-vacuum-map-card-editor") || customElements.define("roborock-vacuum-map-card-editor", cT);
window.customCards ??= [];
window.customCards.push({
  type: "roborock-vacuum-map-card",
  name: "Roborock Vacuum Map Card",
  description: "A Roborock-native room and whole-floor cleaning card",
  preview: !0,
  documentationURL: "https://github.com/domidyon/roborock-vacuum-map-card"
});
console.info(`%c ROBOROCK-VACUUM-MAP-CARD %c v${rT} `, "color:white;background:#5965f2;font-weight:700", "color:#5965f2;background:#eef0ff");
export {
  sT as RoborockVacuumMapCard,
  cT as RoborockVacuumMapCardEditor
};
