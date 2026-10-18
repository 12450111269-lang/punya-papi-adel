(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) i(f);
  new MutationObserver((f) => {
    for (const c of f)
      if (c.type === "childList")
        for (const o of c.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(f) {
    const c = {};
    return (
      f.integrity && (c.integrity = f.integrity),
      f.referrerPolicy && (c.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function i(f) {
    if (f.ep) return;
    f.ep = !0;
    const c = r(f);
    fetch(f.href, c);
  }
})();
function B1(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default")
    ? g.default
    : g;
}
var fc = { exports: {} },
  Wi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var e1;
function Ip() {
  if (e1) return Wi;
  e1 = 1;
  var g = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function r(i, f, c) {
    var o = null;
    if (
      (c !== void 0 && (o = "" + c),
      f.key !== void 0 && (o = "" + f.key),
      "key" in f)
    ) {
      c = {};
      for (var h in f) h !== "key" && (c[h] = f[h]);
    } else c = f;
    return (
      (f = c.ref),
      { $$typeof: g, type: i, key: o, ref: f !== void 0 ? f : null, props: c }
    );
  }
  return ((Wi.Fragment = l), (Wi.jsx = r), (Wi.jsxs = r), Wi);
}
var a1;
function Pp() {
  return (a1 || ((a1 = 1), (fc.exports = Ip())), fc.exports);
}
var x = Pp(),
  cc = { exports: {} },
  dt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n1;
function ty() {
  if (n1) return dt;
  n1 = 1;
  var g = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    o = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    T = Symbol.for("react.activity"),
    j = Symbol.iterator;
  function S(y) {
    return y === null || typeof y != "object"
      ? null
      : ((y = (j && y[j]) || y["@@iterator"]),
        typeof y == "function" ? y : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    b = Object.assign,
    A = {};
  function k(y, R, L) {
    ((this.props = y),
      (this.context = R),
      (this.refs = A),
      (this.updater = L || M));
  }
  ((k.prototype.isReactComponent = {}),
    (k.prototype.setState = function (y, R) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, y, R, "setState");
    }),
    (k.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    }));
  function q() {}
  q.prototype = k.prototype;
  function Q(y, R, L) {
    ((this.props = y),
      (this.context = R),
      (this.refs = A),
      (this.updater = L || M));
  }
  var K = (Q.prototype = new q());
  ((K.constructor = Q), b(K, k.prototype), (K.isPureReactComponent = !0));
  var V = Array.isArray;
  function P() {}
  var Y = { H: null, A: null, T: null, S: null },
    W = Object.prototype.hasOwnProperty;
  function F(y, R, L) {
    var Z = L.ref;
    return {
      $$typeof: g,
      type: y,
      key: R,
      ref: Z !== void 0 ? Z : null,
      props: L,
    };
  }
  function et(y, R) {
    return F(y.type, R, y.props);
  }
  function ot(y) {
    return typeof y == "object" && y !== null && y.$$typeof === g;
  }
  function ct(y) {
    var R = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function (L) {
        return R[L];
      })
    );
  }
  var yt = /\/+/g;
  function vt(y, R) {
    return typeof y == "object" && y !== null && y.key != null
      ? ct("" + y.key)
      : R.toString(36);
  }
  function Et(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (
          (typeof y.status == "string"
            ? y.then(P, P)
            : ((y.status = "pending"),
              y.then(
                function (R) {
                  y.status === "pending" &&
                    ((y.status = "fulfilled"), (y.value = R));
                },
                function (R) {
                  y.status === "pending" &&
                    ((y.status = "rejected"), (y.reason = R));
                },
              )),
          y.status)
        ) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function B(y, R, L, Z, $) {
    var at = typeof y;
    (at === "undefined" || at === "boolean") && (y = null);
    var tt = !1;
    if (y === null) tt = !0;
    else
      switch (at) {
        case "bigint":
        case "string":
        case "number":
          tt = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case g:
            case l:
              tt = !0;
              break;
            case v:
              return ((tt = y._init), B(tt(y._payload), R, L, Z, $));
          }
      }
    if (tt)
      return (
        ($ = $(y)),
        (tt = Z === "" ? "." + vt(y, 0) : Z),
        V($)
          ? ((L = ""),
            tt != null && (L = tt.replace(yt, "$&/") + "/"),
            B($, R, L, "", function (Nt) {
              return Nt;
            }))
          : $ != null &&
            (ot($) &&
              ($ = et(
                $,
                L +
                  ($.key == null || (y && y.key === $.key)
                    ? ""
                    : ("" + $.key).replace(yt, "$&/") + "/") +
                  tt,
              )),
            R.push($)),
        1
      );
    tt = 0;
    var rt = Z === "" ? "." : Z + ":";
    if (V(y))
      for (var ft = 0; ft < y.length; ft++)
        ((Z = y[ft]), (at = rt + vt(Z, ft)), (tt += B(Z, R, L, at, $)));
    else if (((ft = S(y)), typeof ft == "function"))
      for (y = ft.call(y), ft = 0; !(Z = y.next()).done;)
        ((Z = Z.value), (at = rt + vt(Z, ft++)), (tt += B(Z, R, L, at, $)));
    else if (at === "object") {
      if (typeof y.then == "function") return B(Et(y), R, L, Z, $);
      throw (
        (R = String(y)),
        Error(
          "Objects are not valid as a React child (found: " +
            (R === "[object Object]"
              ? "object with keys {" + Object.keys(y).join(", ") + "}"
              : R) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return tt;
  }
  function J(y, R, L) {
    if (y == null) return y;
    var Z = [],
      $ = 0;
    return (
      B(y, Z, "", "", function (at) {
        return R.call(L, at, $++);
      }),
      Z
    );
  }
  function lt(y) {
    if (y._status === -1) {
      var R = y._result;
      ((R = R()),
        R.then(
          function (L) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 1), (y._result = L));
          },
          function (L) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 2), (y._result = L));
          },
        ),
        y._status === -1 && ((y._status = 0), (y._result = R)));
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var _t =
      typeof reportError == "function"
        ? reportError
        : function (y) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var R = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof y == "object" &&
                  y !== null &&
                  typeof y.message == "string"
                    ? String(y.message)
                    : String(y),
                error: y,
              });
              if (!window.dispatchEvent(R)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", y);
              return;
            }
            console.error(y);
          },
    C = {
      map: J,
      forEach: function (y, R, L) {
        J(
          y,
          function () {
            R.apply(this, arguments);
          },
          L,
        );
      },
      count: function (y) {
        var R = 0;
        return (
          J(y, function () {
            R++;
          }),
          R
        );
      },
      toArray: function (y) {
        return (
          J(y, function (R) {
            return R;
          }) || []
        );
      },
      only: function (y) {
        if (!ot(y))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return y;
      },
    };
  return (
    (dt.Activity = T),
    (dt.Children = C),
    (dt.Component = k),
    (dt.Fragment = r),
    (dt.Profiler = f),
    (dt.PureComponent = Q),
    (dt.StrictMode = i),
    (dt.Suspense = p),
    (dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y),
    (dt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (y) {
        return Y.H.useMemoCache(y);
      },
    }),
    (dt.cache = function (y) {
      return function () {
        return y.apply(null, arguments);
      };
    }),
    (dt.cacheSignal = function () {
      return null;
    }),
    (dt.cloneElement = function (y, R, L) {
      if (y == null)
        throw Error(
          "The argument must be a React element, but you passed " + y + ".",
        );
      var Z = b({}, y.props),
        $ = y.key;
      if (R != null)
        for (at in (R.key !== void 0 && ($ = "" + R.key), R))
          !W.call(R, at) ||
            at === "key" ||
            at === "__self" ||
            at === "__source" ||
            (at === "ref" && R.ref === void 0) ||
            (Z[at] = R[at]);
      var at = arguments.length - 2;
      if (at === 1) Z.children = L;
      else if (1 < at) {
        for (var tt = Array(at), rt = 0; rt < at; rt++)
          tt[rt] = arguments[rt + 2];
        Z.children = tt;
      }
      return F(y.type, $, Z);
    }),
    (dt.createContext = function (y) {
      return (
        (y = {
          $$typeof: o,
          _currentValue: y,
          _currentValue2: y,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (y.Provider = y),
        (y.Consumer = { $$typeof: c, _context: y }),
        y
      );
    }),
    (dt.createElement = function (y, R, L) {
      var Z,
        $ = {},
        at = null;
      if (R != null)
        for (Z in (R.key !== void 0 && (at = "" + R.key), R))
          W.call(R, Z) &&
            Z !== "key" &&
            Z !== "__self" &&
            Z !== "__source" &&
            ($[Z] = R[Z]);
      var tt = arguments.length - 2;
      if (tt === 1) $.children = L;
      else if (1 < tt) {
        for (var rt = Array(tt), ft = 0; ft < tt; ft++)
          rt[ft] = arguments[ft + 2];
        $.children = rt;
      }
      if (y && y.defaultProps)
        for (Z in ((tt = y.defaultProps), tt))
          $[Z] === void 0 && ($[Z] = tt[Z]);
      return F(y, at, $);
    }),
    (dt.createRef = function () {
      return { current: null };
    }),
    (dt.forwardRef = function (y) {
      return { $$typeof: h, render: y };
    }),
    (dt.isValidElement = ot),
    (dt.lazy = function (y) {
      return { $$typeof: v, _payload: { _status: -1, _result: y }, _init: lt };
    }),
    (dt.memo = function (y, R) {
      return { $$typeof: m, type: y, compare: R === void 0 ? null : R };
    }),
    (dt.startTransition = function (y) {
      var R = Y.T,
        L = {};
      Y.T = L;
      try {
        var Z = y(),
          $ = Y.S;
        ($ !== null && $(L, Z),
          typeof Z == "object" &&
            Z !== null &&
            typeof Z.then == "function" &&
            Z.then(P, _t));
      } catch (at) {
        _t(at);
      } finally {
        (R !== null && L.types !== null && (R.types = L.types), (Y.T = R));
      }
    }),
    (dt.unstable_useCacheRefresh = function () {
      return Y.H.useCacheRefresh();
    }),
    (dt.use = function (y) {
      return Y.H.use(y);
    }),
    (dt.useActionState = function (y, R, L) {
      return Y.H.useActionState(y, R, L);
    }),
    (dt.useCallback = function (y, R) {
      return Y.H.useCallback(y, R);
    }),
    (dt.useContext = function (y) {
      return Y.H.useContext(y);
    }),
    (dt.useDebugValue = function () {}),
    (dt.useDeferredValue = function (y, R) {
      return Y.H.useDeferredValue(y, R);
    }),
    (dt.useEffect = function (y, R) {
      return Y.H.useEffect(y, R);
    }),
    (dt.useEffectEvent = function (y) {
      return Y.H.useEffectEvent(y);
    }),
    (dt.useId = function () {
      return Y.H.useId();
    }),
    (dt.useImperativeHandle = function (y, R, L) {
      return Y.H.useImperativeHandle(y, R, L);
    }),
    (dt.useInsertionEffect = function (y, R) {
      return Y.H.useInsertionEffect(y, R);
    }),
    (dt.useLayoutEffect = function (y, R) {
      return Y.H.useLayoutEffect(y, R);
    }),
    (dt.useMemo = function (y, R) {
      return Y.H.useMemo(y, R);
    }),
    (dt.useOptimistic = function (y, R) {
      return Y.H.useOptimistic(y, R);
    }),
    (dt.useReducer = function (y, R, L) {
      return Y.H.useReducer(y, R, L);
    }),
    (dt.useRef = function (y) {
      return Y.H.useRef(y);
    }),
    (dt.useState = function (y) {
      return Y.H.useState(y);
    }),
    (dt.useSyncExternalStore = function (y, R, L) {
      return Y.H.useSyncExternalStore(y, R, L);
    }),
    (dt.useTransition = function () {
      return Y.H.useTransition();
    }),
    (dt.version = "19.2.8"),
    dt
  );
}
var l1;
function kc() {
  return (l1 || ((l1 = 1), (cc.exports = ty())), cc.exports);
}
var I = kc();
const ey = B1(I);
var oc = { exports: {} },
  $i = {},
  dc = { exports: {} },
  hc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var i1;
function ay() {
  return (
    i1 ||
      ((i1 = 1),
      (function (g) {
        function l(B, J) {
          var lt = B.length;
          B.push(J);
          t: for (; 0 < lt;) {
            var _t = (lt - 1) >>> 1,
              C = B[_t];
            if (0 < f(C, J)) ((B[_t] = J), (B[lt] = C), (lt = _t));
            else break t;
          }
        }
        function r(B) {
          return B.length === 0 ? null : B[0];
        }
        function i(B) {
          if (B.length === 0) return null;
          var J = B[0],
            lt = B.pop();
          if (lt !== J) {
            B[0] = lt;
            t: for (var _t = 0, C = B.length, y = C >>> 1; _t < y;) {
              var R = 2 * (_t + 1) - 1,
                L = B[R],
                Z = R + 1,
                $ = B[Z];
              if (0 > f(L, lt))
                Z < C && 0 > f($, L)
                  ? ((B[_t] = $), (B[Z] = lt), (_t = Z))
                  : ((B[_t] = L), (B[R] = lt), (_t = R));
              else if (Z < C && 0 > f($, lt))
                ((B[_t] = $), (B[Z] = lt), (_t = Z));
              else break t;
            }
          }
          return J;
        }
        function f(B, J) {
          var lt = B.sortIndex - J.sortIndex;
          return lt !== 0 ? lt : B.id - J.id;
        }
        if (
          ((g.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          g.unstable_now = function () {
            return c.now();
          };
        } else {
          var o = Date,
            h = o.now();
          g.unstable_now = function () {
            return o.now() - h;
          };
        }
        var p = [],
          m = [],
          v = 1,
          T = null,
          j = 3,
          S = !1,
          M = !1,
          b = !1,
          A = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          q = typeof clearTimeout == "function" ? clearTimeout : null,
          Q = typeof setImmediate < "u" ? setImmediate : null;
        function K(B) {
          for (var J = r(m); J !== null;) {
            if (J.callback === null) i(m);
            else if (J.startTime <= B)
              (i(m), (J.sortIndex = J.expirationTime), l(p, J));
            else break;
            J = r(m);
          }
        }
        function V(B) {
          if (((b = !1), K(B), !M))
            if (r(p) !== null) ((M = !0), P || ((P = !0), ct()));
            else {
              var J = r(m);
              J !== null && Et(V, J.startTime - B);
            }
        }
        var P = !1,
          Y = -1,
          W = 5,
          F = -1;
        function et() {
          return A ? !0 : !(g.unstable_now() - F < W);
        }
        function ot() {
          if (((A = !1), P)) {
            var B = g.unstable_now();
            F = B;
            var J = !0;
            try {
              t: {
                ((M = !1), b && ((b = !1), q(Y), (Y = -1)), (S = !0));
                var lt = j;
                try {
                  e: {
                    for (
                      K(B), T = r(p);
                      T !== null && !(T.expirationTime > B && et());
                    ) {
                      var _t = T.callback;
                      if (typeof _t == "function") {
                        ((T.callback = null), (j = T.priorityLevel));
                        var C = _t(T.expirationTime <= B);
                        if (((B = g.unstable_now()), typeof C == "function")) {
                          ((T.callback = C), K(B), (J = !0));
                          break e;
                        }
                        (T === r(p) && i(p), K(B));
                      } else i(p);
                      T = r(p);
                    }
                    if (T !== null) J = !0;
                    else {
                      var y = r(m);
                      (y !== null && Et(V, y.startTime - B), (J = !1));
                    }
                  }
                  break t;
                } finally {
                  ((T = null), (j = lt), (S = !1));
                }
                J = void 0;
              }
            } finally {
              J ? ct() : (P = !1);
            }
          }
        }
        var ct;
        if (typeof Q == "function")
          ct = function () {
            Q(ot);
          };
        else if (typeof MessageChannel < "u") {
          var yt = new MessageChannel(),
            vt = yt.port2;
          ((yt.port1.onmessage = ot),
            (ct = function () {
              vt.postMessage(null);
            }));
        } else
          ct = function () {
            k(ot, 0);
          };
        function Et(B, J) {
          Y = k(function () {
            B(g.unstable_now());
          }, J);
        }
        ((g.unstable_IdlePriority = 5),
          (g.unstable_ImmediatePriority = 1),
          (g.unstable_LowPriority = 4),
          (g.unstable_NormalPriority = 3),
          (g.unstable_Profiling = null),
          (g.unstable_UserBlockingPriority = 2),
          (g.unstable_cancelCallback = function (B) {
            B.callback = null;
          }),
          (g.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (W = 0 < B ? Math.floor(1e3 / B) : 5);
          }),
          (g.unstable_getCurrentPriorityLevel = function () {
            return j;
          }),
          (g.unstable_next = function (B) {
            switch (j) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = j;
            }
            var lt = j;
            j = J;
            try {
              return B();
            } finally {
              j = lt;
            }
          }),
          (g.unstable_requestPaint = function () {
            A = !0;
          }),
          (g.unstable_runWithPriority = function (B, J) {
            switch (B) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                B = 3;
            }
            var lt = j;
            j = B;
            try {
              return J();
            } finally {
              j = lt;
            }
          }),
          (g.unstable_scheduleCallback = function (B, J, lt) {
            var _t = g.unstable_now();
            switch (
              (typeof lt == "object" && lt !== null
                ? ((lt = lt.delay),
                  (lt = typeof lt == "number" && 0 < lt ? _t + lt : _t))
                : (lt = _t),
              B)
            ) {
              case 1:
                var C = -1;
                break;
              case 2:
                C = 250;
                break;
              case 5:
                C = 1073741823;
                break;
              case 4:
                C = 1e4;
                break;
              default:
                C = 5e3;
            }
            return (
              (C = lt + C),
              (B = {
                id: v++,
                callback: J,
                priorityLevel: B,
                startTime: lt,
                expirationTime: C,
                sortIndex: -1,
              }),
              lt > _t
                ? ((B.sortIndex = lt),
                  l(m, B),
                  r(p) === null &&
                    B === r(m) &&
                    (b ? (q(Y), (Y = -1)) : (b = !0), Et(V, lt - _t)))
                : ((B.sortIndex = C),
                  l(p, B),
                  M || S || ((M = !0), P || ((P = !0), ct()))),
              B
            );
          }),
          (g.unstable_shouldYield = et),
          (g.unstable_wrapCallback = function (B) {
            var J = j;
            return function () {
              var lt = j;
              j = J;
              try {
                return B.apply(this, arguments);
              } finally {
                j = lt;
              }
            };
          }));
      })(hc)),
    hc
  );
}
var u1;
function ny() {
  return (u1 || ((u1 = 1), (dc.exports = ay())), dc.exports);
}
var mc = { exports: {} },
  _e = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r1;
function ly() {
  if (r1) return _e;
  r1 = 1;
  var g = kc();
  function l(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        m += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var i = {
      d: {
        f: r,
        r: function () {
          throw Error(l(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    f = Symbol.for("react.portal");
  function c(p, m, v) {
    var T =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: T == null ? null : "" + T,
      children: p,
      containerInfo: m,
      implementation: v,
    };
  }
  var o = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, m) {
    if (p === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (_e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (_e.createPortal = function (p, m) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(l(299));
      return c(p, m, null, v);
    }),
    (_e.flushSync = function (p) {
      var m = o.T,
        v = i.p;
      try {
        if (((o.T = null), (i.p = 2), p)) return p();
      } finally {
        ((o.T = m), (i.p = v), i.d.f());
      }
    }),
    (_e.preconnect = function (p, m) {
      typeof p == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        i.d.C(p, m));
    }),
    (_e.prefetchDNS = function (p) {
      typeof p == "string" && i.d.D(p);
    }),
    (_e.preinit = function (p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var v = m.as,
          T = h(v, m.crossOrigin),
          j = typeof m.integrity == "string" ? m.integrity : void 0,
          S = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        v === "style"
          ? i.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: T,
              integrity: j,
              fetchPriority: S,
            })
          : v === "script" &&
            i.d.X(p, {
              crossOrigin: T,
              integrity: j,
              fetchPriority: S,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (_e.preinitModule = function (p, m) {
      if (typeof p == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var v = h(m.as, m.crossOrigin);
            i.d.M(p, {
              crossOrigin: v,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && i.d.M(p);
    }),
    (_e.preload = function (p, m) {
      if (
        typeof p == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var v = m.as,
          T = h(v, m.crossOrigin);
        i.d.L(p, v, {
          crossOrigin: T,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (_e.preloadModule = function (p, m) {
      if (typeof p == "string")
        if (m) {
          var v = h(m.as, m.crossOrigin);
          i.d.m(p, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: v,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else i.d.m(p);
    }),
    (_e.requestFormReset = function (p) {
      i.d.r(p);
    }),
    (_e.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (_e.useFormState = function (p, m, v) {
      return o.H.useFormState(p, m, v);
    }),
    (_e.useFormStatus = function () {
      return o.H.useHostTransitionStatus();
    }),
    (_e.version = "19.2.8"),
    _e
  );
}
var s1;
function iy() {
  if (s1) return mc.exports;
  s1 = 1;
  function g() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (l) {
        console.error(l);
      }
  }
  return (g(), (mc.exports = ly()), mc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f1;
function uy() {
  if (f1) return $i;
  f1 = 1;
  var g = ny(),
    l = kc(),
    r = iy();
  function i(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function c(t) {
    var e = t,
      a = t;
    if (t.alternate) for (; e.return;) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (a = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? a : null;
  }
  function o(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (c(t) !== t) throw Error(i(188));
  }
  function m(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = c(t)), e === null)) throw Error(i(188));
      return e !== t ? null : t;
    }
    for (var a = t, n = e; ;) {
      var u = a.return;
      if (u === null) break;
      var s = u.alternate;
      if (s === null) {
        if (((n = u.return), n !== null)) {
          a = n;
          continue;
        }
        break;
      }
      if (u.child === s.child) {
        for (s = u.child; s;) {
          if (s === a) return (p(u), t);
          if (s === n) return (p(u), e);
          s = s.sibling;
        }
        throw Error(i(188));
      }
      if (a.return !== n.return) ((a = u), (n = s));
      else {
        for (var d = !1, _ = u.child; _;) {
          if (_ === a) {
            ((d = !0), (a = u), (n = s));
            break;
          }
          if (_ === n) {
            ((d = !0), (n = u), (a = s));
            break;
          }
          _ = _.sibling;
        }
        if (!d) {
          for (_ = s.child; _;) {
            if (_ === a) {
              ((d = !0), (a = s), (n = u));
              break;
            }
            if (_ === n) {
              ((d = !0), (n = s), (a = u));
              break;
            }
            _ = _.sibling;
          }
          if (!d) throw Error(i(189));
        }
      }
      if (a.alternate !== n) throw Error(i(190));
    }
    if (a.tag !== 3) throw Error(i(188));
    return a.stateNode.current === a ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null;) {
      if (((e = v(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var T = Object.assign,
    j = Symbol.for("react.element"),
    S = Symbol.for("react.transitional.element"),
    M = Symbol.for("react.portal"),
    b = Symbol.for("react.fragment"),
    A = Symbol.for("react.strict_mode"),
    k = Symbol.for("react.profiler"),
    q = Symbol.for("react.consumer"),
    Q = Symbol.for("react.context"),
    K = Symbol.for("react.forward_ref"),
    V = Symbol.for("react.suspense"),
    P = Symbol.for("react.suspense_list"),
    Y = Symbol.for("react.memo"),
    W = Symbol.for("react.lazy"),
    F = Symbol.for("react.activity"),
    et = Symbol.for("react.memo_cache_sentinel"),
    ot = Symbol.iterator;
  function ct(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (ot && t[ot]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var yt = Symbol.for("react.client.reference");
  function vt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === yt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case b:
        return "Fragment";
      case k:
        return "Profiler";
      case A:
        return "StrictMode";
      case V:
        return "Suspense";
      case P:
        return "SuspenseList";
      case F:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case M:
          return "Portal";
        case Q:
          return t.displayName || "Context";
        case q:
          return (t._context.displayName || "Context") + ".Consumer";
        case K:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Y:
          return (
            (e = t.displayName || null),
            e !== null ? e : vt(t.type) || "Memo"
          );
        case W:
          ((e = t._payload), (t = t._init));
          try {
            return vt(t(e));
          } catch {}
      }
    return null;
  }
  var Et = Array.isArray,
    B = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    lt = { pending: !1, data: null, method: null, action: null },
    _t = [],
    C = -1;
  function y(t) {
    return { current: t };
  }
  function R(t) {
    0 > C || ((t.current = _t[C]), (_t[C] = null), C--);
  }
  function L(t, e) {
    (C++, (_t[C] = t.current), (t.current = e));
  }
  var Z = y(null),
    $ = y(null),
    at = y(null),
    tt = y(null);
  function rt(t, e) {
    switch ((L(at, e), L($, t), L(Z, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? zh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = zh(e)), (t = Mh(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (R(Z), L(Z, t));
  }
  function ft() {
    (R(Z), R($), R(at));
  }
  function Nt(t) {
    t.memoizedState !== null && L(tt, t);
    var e = Z.current,
      a = Mh(e, t.type);
    e !== a && (L($, t), L(Z, a));
  }
  function Rt(t) {
    ($.current === t && (R(Z), R($)),
      tt.current === t && (R(tt), (Zi._currentValue = lt)));
  }
  var Lt, ee;
  function mt(t) {
    if (Lt === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        ((Lt = (e && e[1]) || ""),
          (ee =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Lt +
      t +
      ee
    );
  }
  var se = !1;
  function Se(t, e) {
    if (!t || se) return "";
    se = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var G = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(G.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(G, []);
                } catch (U) {
                  var N = U;
                }
                Reflect.construct(t, [], G);
              } else {
                try {
                  G.call();
                } catch (U) {
                  N = U;
                }
                t.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                N = U;
              }
              (G = t()) &&
                typeof G.catch == "function" &&
                G.catch(function () {});
            }
          } catch (U) {
            if (U && N && typeof U.stack == "string") return [U.stack, N.stack];
          }
          return [null, null];
        },
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var s = n.DetermineComponentFrameRoot(),
        d = s[0],
        _ = s[1];
      if (d && _) {
        var z = d.split(`
`),
          w = _.split(`
`);
        for (
          u = n = 0;
          n < z.length && !z[n].includes("DetermineComponentFrameRoot");
        )
          n++;
        for (; u < w.length && !w[u].includes("DetermineComponentFrameRoot");)
          u++;
        if (n === z.length || u === w.length)
          for (
            n = z.length - 1, u = w.length - 1;
            1 <= n && 0 <= u && z[n] !== w[u];
          )
            u--;
        for (; 1 <= n && 0 <= u; n--, u--)
          if (z[n] !== w[u]) {
            if (n !== 1 || u !== 1)
              do
                if ((n--, u--, 0 > u || z[n] !== w[u])) {
                  var H =
                    `
` + z[n].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      H.includes("<anonymous>") &&
                      (H = H.replace("<anonymous>", t.displayName)),
                    H
                  );
                }
              while (1 <= n && 0 <= u);
            break;
          }
      }
    } finally {
      ((se = !1), (Error.prepareStackTrace = a));
    }
    return (a = t ? t.displayName || t.name : "") ? mt(a) : "";
  }
  function He(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return mt(t.type);
      case 16:
        return mt("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? mt("Suspense Fallback")
          : mt("Suspense");
      case 19:
        return mt("SuspenseList");
      case 0:
      case 15:
        return Se(t.type, !1);
      case 11:
        return Se(t.type.render, !1);
      case 1:
        return Se(t.type, !0);
      case 31:
        return mt("Activity");
      default:
        return "";
    }
  }
  function ea(t) {
    try {
      var e = "",
        a = null;
      do ((e += He(t, a)), (a = t), (t = t.return));
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  var ga = Object.prototype.hasOwnProperty,
    ze = g.unstable_scheduleCallback,
    ei = g.unstable_cancelCallback,
    Zr = g.unstable_shouldYield,
    Kr = g.unstable_requestPaint,
    ve = g.unstable_now,
    Jr = g.unstable_getCurrentPriorityLevel,
    ai = g.unstable_ImmediatePriority,
    hu = g.unstable_UserBlockingPriority,
    il = g.unstable_NormalPriority,
    mu = g.unstable_LowPriority,
    ni = g.unstable_IdlePriority,
    li = g.log,
    Fr = g.unstable_setDisableYieldValue,
    Cn = null,
    qe = null;
  function Fa(t) {
    if (
      (typeof li == "function" && Fr(t),
      qe && typeof qe.setStrictMode == "function")
    )
      try {
        qe.setStrictMode(Cn, t);
      } catch {}
  }
  var Ye = Math.clz32 ? Math.clz32 : Hm,
    Um = Math.log,
    km = Math.LN2;
  function Hm(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Um(t) / km) | 0)) | 0);
  }
  var gu = 256,
    pu = 262144,
    yu = 4194304;
  function Dn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function vu(t, e, a) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var u = 0,
      s = t.suspendedLanes,
      d = t.pingedLanes;
    t = t.warmLanes;
    var _ = n & 134217727;
    return (
      _ !== 0
        ? ((n = _ & ~s),
          n !== 0
            ? (u = Dn(n))
            : ((d &= _),
              d !== 0
                ? (u = Dn(d))
                : a || ((a = _ & ~t), a !== 0 && (u = Dn(a)))))
        : ((_ = n & ~s),
          _ !== 0
            ? (u = Dn(_))
            : d !== 0
              ? (u = Dn(d))
              : a || ((a = n & ~t), a !== 0 && (u = Dn(a)))),
      u === 0
        ? 0
        : e !== 0 &&
            e !== u &&
            (e & s) === 0 &&
            ((s = u & -u),
            (a = e & -e),
            s >= a || (s === 32 && (a & 4194048) !== 0))
          ? e
          : u
    );
  }
  function ii(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function qm(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function lo() {
    var t = yu;
    return ((yu <<= 1), (yu & 62914560) === 0 && (yu = 4194304), t);
  }
  function Wr(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function ui(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Ym(t, e, a, n, u, s) {
    var d = t.pendingLanes;
    ((t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0));
    var _ = t.entanglements,
      z = t.expirationTimes,
      w = t.hiddenUpdates;
    for (a = d & ~a; 0 < a;) {
      var H = 31 - Ye(a),
        G = 1 << H;
      ((_[H] = 0), (z[H] = -1));
      var N = w[H];
      if (N !== null)
        for (w[H] = null, H = 0; H < N.length; H++) {
          var U = N[H];
          U !== null && (U.lane &= -536870913);
        }
      a &= ~G;
    }
    (n !== 0 && io(t, n, 0),
      s !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(d & ~e)));
  }
  function io(t, e, a) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var n = 31 - Ye(e);
    ((t.entangledLanes |= e),
      (t.entanglements[n] = t.entanglements[n] | 1073741824 | (a & 261930)));
  }
  function uo(t, e) {
    var a = (t.entangledLanes |= e);
    for (t = t.entanglements; a;) {
      var n = 31 - Ye(a),
        u = 1 << n;
      ((u & e) | (t[n] & e) && (t[n] |= e), (a &= ~u));
    }
  }
  function ro(t, e) {
    var a = e & -e;
    return (
      (a = (a & 42) !== 0 ? 1 : $r(a)),
      (a & (t.suspendedLanes | e)) !== 0 ? 0 : a
    );
  }
  function $r(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ir(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function so() {
    var t = J.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Jh(t.type));
  }
  function fo(t, e) {
    var a = J.p;
    try {
      return ((J.p = t), e());
    } finally {
      J.p = a;
    }
  }
  var Wa = Math.random().toString(36).slice(2),
    de = "__reactFiber$" + Wa,
    Me = "__reactProps$" + Wa,
    ul = "__reactContainer$" + Wa,
    Pr = "__reactEvents$" + Wa,
    Lm = "__reactListeners$" + Wa,
    Xm = "__reactHandles$" + Wa,
    co = "__reactResources$" + Wa,
    ri = "__reactMarker$" + Wa;
  function ts(t) {
    (delete t[de], delete t[Me], delete t[Pr], delete t[Lm], delete t[Xm]);
  }
  function rl(t) {
    var e = t[de];
    if (e) return e;
    for (var a = t.parentNode; a;) {
      if ((e = a[ul] || a[de])) {
        if (
          ((a = e.alternate),
          e.child !== null || (a !== null && a.child !== null))
        )
          for (t = Dh(t); t !== null;) {
            if ((a = t[de])) return a;
            t = Dh(t);
          }
        return e;
      }
      ((t = a), (a = t.parentNode));
    }
    return null;
  }
  function sl(t) {
    if ((t = t[de] || t[ul])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function si(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(i(33));
  }
  function fl(t) {
    var e = t[co];
    return (
      e ||
        (e = t[co] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function fe(t) {
    t[ri] = !0;
  }
  var oo = new Set(),
    ho = {};
  function wn(t, e) {
    (cl(t, e), cl(t + "Capture", e));
  }
  function cl(t, e) {
    for (ho[t] = e, t = 0; t < e.length; t++) oo.add(e[t]);
  }
  var Gm = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    mo = {},
    go = {};
  function Qm(t) {
    return ga.call(go, t)
      ? !0
      : ga.call(mo, t)
        ? !1
        : Gm.test(t)
          ? (go[t] = !0)
          : ((mo[t] = !0), !1);
  }
  function _u(t, e, a) {
    if (Qm(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var n = e.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + a);
      }
  }
  function bu(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + a);
    }
  }
  function ja(t, e, a, n) {
    if (n === null) t.removeAttribute(a);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, "" + n);
    }
  }
  function aa(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function po(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Vm(t, e, a) {
    var n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var u = n.get,
        s = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (d) {
            ((a = "" + d), s.call(this, d));
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (d) {
            a = "" + d;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function es(t) {
    if (!t._valueTracker) {
      var e = po(t) ? "checked" : "value";
      t._valueTracker = Vm(t, e, "" + t[e]);
    }
  }
  function yo(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(),
      n = "";
    return (
      t && (n = po(t) ? (t.checked ? "true" : "false") : t.value),
      (t = n),
      t !== a ? (e.setValue(t), !0) : !1
    );
  }
  function xu(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Zm = /[\n"\\]/g;
  function na(t) {
    return t.replace(Zm, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function as(t, e, a, n, u, s, d, _) {
    ((t.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (t.type = d)
        : t.removeAttribute("type"),
      e != null
        ? d === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + aa(e))
          : t.value !== "" + aa(e) && (t.value = "" + aa(e))
        : (d !== "submit" && d !== "reset") || t.removeAttribute("value"),
      e != null
        ? ns(t, d, aa(e))
        : a != null
          ? ns(t, d, aa(a))
          : n != null && t.removeAttribute("value"),
      u == null && s != null && (t.defaultChecked = !!s),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      _ != null &&
      typeof _ != "function" &&
      typeof _ != "symbol" &&
      typeof _ != "boolean"
        ? (t.name = "" + aa(_))
        : t.removeAttribute("name"));
  }
  function vo(t, e, a, n, u, s, d, _) {
    if (
      (s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        typeof s != "boolean" &&
        (t.type = s),
      e != null || a != null)
    ) {
      if (!((s !== "submit" && s !== "reset") || e != null)) {
        es(t);
        return;
      }
      ((a = a != null ? "" + aa(a) : ""),
        (e = e != null ? "" + aa(e) : a),
        _ || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((n = n ?? u),
      (n = typeof n != "function" && typeof n != "symbol" && !!n),
      (t.checked = _ ? t.checked : !!n),
      (t.defaultChecked = !!n),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.name = d),
      es(t));
  }
  function ns(t, e, a) {
    (e === "number" && xu(t.ownerDocument) === t) ||
      t.defaultValue === "" + a ||
      (t.defaultValue = "" + a);
  }
  function ol(t, e, a, n) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < a.length; u++) e["$" + a[u]] = !0;
      for (a = 0; a < t.length; a++)
        ((u = e.hasOwnProperty("$" + t[a].value)),
          t[a].selected !== u && (t[a].selected = u),
          u && n && (t[a].defaultSelected = !0));
    } else {
      for (a = "" + aa(a), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === a) {
          ((t[u].selected = !0), n && (t[u].defaultSelected = !0));
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function _o(t, e, a) {
    if (
      e != null &&
      ((e = "" + aa(e)), e !== t.value && (t.value = e), a == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + aa(a) : "";
  }
  function bo(t, e, a, n) {
    if (e == null) {
      if (n != null) {
        if (a != null) throw Error(i(92));
        if (Et(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        a = n;
      }
      (a == null && (a = ""), (e = a));
    }
    ((a = aa(e)),
      (t.defaultValue = a),
      (n = t.textContent),
      n === a && n !== "" && n !== null && (t.value = n),
      es(t));
  }
  function dl(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Km = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function xo(t, e, a) {
    var n = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? n
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : n
        ? t.setProperty(e, a)
        : typeof a != "number" || a === 0 || Km.has(e)
          ? e === "float"
            ? (t.cssFloat = a)
            : (t[e] = ("" + a).trim())
          : (t[e] = a + "px");
  }
  function So(t, e, a) {
    if (e != null && typeof e != "object") throw Error(i(62));
    if (((t = t.style), a != null)) {
      for (var n in a)
        !a.hasOwnProperty(n) ||
          (e != null && e.hasOwnProperty(n)) ||
          (n.indexOf("--") === 0
            ? t.setProperty(n, "")
            : n === "float"
              ? (t.cssFloat = "")
              : (t[n] = ""));
      for (var u in e)
        ((n = e[u]), e.hasOwnProperty(u) && a[u] !== n && xo(t, u, n));
    } else for (var s in e) e.hasOwnProperty(s) && xo(t, s, e[s]);
  }
  function ls(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var Jm = new Map([
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
      ["xHeight", "x-height"],
    ]),
    Fm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Su(t) {
    return Fm.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Aa() {}
  var is = null;
  function us(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var hl = null,
    ml = null;
  function To(t) {
    var e = sl(t);
    if (e && (t = e.stateNode)) {
      var a = t[Me] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (as(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (e = a.name),
            a.type === "radio" && e != null)
          ) {
            for (a = t; a.parentNode;) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + na("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < a.length;
              e++
            ) {
              var n = a[e];
              if (n !== t && n.form === t.form) {
                var u = n[Me] || null;
                if (!u) throw Error(i(90));
                as(
                  n,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (e = 0; e < a.length; e++)
              ((n = a[e]), n.form === t.form && yo(n));
          }
          break t;
        case "textarea":
          _o(t, a.value, a.defaultValue);
          break t;
        case "select":
          ((e = a.value), e != null && ol(t, !!a.multiple, e, !1));
      }
    }
  }
  var rs = !1;
  function zo(t, e, a) {
    if (rs) return t(e, a);
    rs = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (
        ((rs = !1),
        (hl !== null || ml !== null) &&
          (fr(), hl && ((e = hl), (t = ml), (ml = hl = null), To(e), t)))
      )
        for (e = 0; e < t.length; e++) To(t[e]);
    }
  }
  function fi(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var n = a[Me] || null;
    if (n === null) return null;
    a = n[e];
    t: switch (e) {
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
        ((n = !n.disabled) ||
          ((t = t.type),
          (n = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !n));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(i(231, e, typeof a));
    return a;
  }
  var Oa = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ss = !1;
  if (Oa)
    try {
      var ci = {};
      (Object.defineProperty(ci, "passive", {
        get: function () {
          ss = !0;
        },
      }),
        window.addEventListener("test", ci, ci),
        window.removeEventListener("test", ci, ci));
    } catch {
      ss = !1;
    }
  var $a = null,
    fs = null,
    Tu = null;
  function Mo() {
    if (Tu) return Tu;
    var t,
      e = fs,
      a = e.length,
      n,
      u = "value" in $a ? $a.value : $a.textContent,
      s = u.length;
    for (t = 0; t < a && e[t] === u[t]; t++);
    var d = a - t;
    for (n = 1; n <= d && e[a - n] === u[s - n]; n++);
    return (Tu = u.slice(t, 1 < n ? 1 - n : void 0));
  }
  function zu(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Mu() {
    return !0;
  }
  function Eo() {
    return !1;
  }
  function Ee(t) {
    function e(a, n, u, s, d) {
      ((this._reactName = a),
        (this._targetInst = u),
        (this.type = n),
        (this.nativeEvent = s),
        (this.target = d),
        (this.currentTarget = null));
      for (var _ in t)
        t.hasOwnProperty(_) && ((a = t[_]), (this[_] = a ? a(s) : s[_]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? Mu
          : Eo),
        (this.isPropagationStopped = Eo),
        this
      );
    }
    return (
      T(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Mu));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Mu));
        },
        persist: function () {},
        isPersistent: Mu,
      }),
      e
    );
  }
  var Nn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Eu = Ee(Nn),
    oi = T({}, Nn, { view: 0, detail: 0 }),
    Wm = Ee(oi),
    cs,
    os,
    di,
    ju = T({}, oi, {
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
      getModifierState: hs,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== di &&
              (di && t.type === "mousemove"
                ? ((cs = t.screenX - di.screenX), (os = t.screenY - di.screenY))
                : (os = cs = 0),
              (di = t)),
            cs);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : os;
      },
    }),
    jo = Ee(ju),
    $m = T({}, ju, { dataTransfer: 0 }),
    Im = Ee($m),
    Pm = T({}, oi, { relatedTarget: 0 }),
    ds = Ee(Pm),
    tg = T({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    eg = Ee(tg),
    ag = T({}, Nn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    ng = Ee(ag),
    lg = T({}, Nn, { data: 0 }),
    Ao = Ee(lg),
    ig = {
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
      MozPrintableKey: "Unidentified",
    },
    ug = {
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
      224: "Meta",
    },
    rg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function sg(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = rg[t])
        ? !!e[t]
        : !1;
  }
  function hs() {
    return sg;
  }
  var fg = T({}, oi, {
      key: function (t) {
        if (t.key) {
          var e = ig[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = zu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? ug[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: hs,
      charCode: function (t) {
        return t.type === "keypress" ? zu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? zu(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    cg = Ee(fg),
    og = T({}, ju, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Oo = Ee(og),
    dg = T({}, oi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hs,
    }),
    hg = Ee(dg),
    mg = T({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    gg = Ee(mg),
    pg = T({}, ju, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    yg = Ee(pg),
    vg = T({}, Nn, { newState: 0, oldState: 0 }),
    _g = Ee(vg),
    bg = [9, 13, 27, 32],
    ms = Oa && "CompositionEvent" in window,
    hi = null;
  Oa && "documentMode" in document && (hi = document.documentMode);
  var xg = Oa && "TextEvent" in window && !hi,
    Ro = Oa && (!ms || (hi && 8 < hi && 11 >= hi)),
    Co = " ",
    Do = !1;
  function wo(t, e) {
    switch (t) {
      case "keyup":
        return bg.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function No(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var gl = !1;
  function Sg(t, e) {
    switch (t) {
      case "compositionend":
        return No(e);
      case "keypress":
        return e.which !== 32 ? null : ((Do = !0), Co);
      case "textInput":
        return ((t = e.data), t === Co && Do ? null : t);
      default:
        return null;
    }
  }
  function Tg(t, e) {
    if (gl)
      return t === "compositionend" || (!ms && wo(t, e))
        ? ((t = Mo()), (Tu = fs = $a = null), (gl = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Ro && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var zg = {
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
    week: !0,
  };
  function Bo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!zg[t.type] : e === "textarea";
  }
  function Uo(t, e, a, n) {
    (hl ? (ml ? ml.push(n) : (ml = [n])) : (hl = n),
      (e = pr(e, "onChange")),
      0 < e.length &&
        ((a = new Eu("onChange", "change", null, a, n)),
        t.push({ event: a, listeners: e })));
  }
  var mi = null,
    gi = null;
  function Mg(t) {
    vh(t, 0);
  }
  function Au(t) {
    var e = si(t);
    if (yo(e)) return t;
  }
  function ko(t, e) {
    if (t === "change") return e;
  }
  var Ho = !1;
  if (Oa) {
    var gs;
    if (Oa) {
      var ps = "oninput" in document;
      if (!ps) {
        var qo = document.createElement("div");
        (qo.setAttribute("oninput", "return;"),
          (ps = typeof qo.oninput == "function"));
      }
      gs = ps;
    } else gs = !1;
    Ho = gs && (!document.documentMode || 9 < document.documentMode);
  }
  function Yo() {
    mi && (mi.detachEvent("onpropertychange", Lo), (gi = mi = null));
  }
  function Lo(t) {
    if (t.propertyName === "value" && Au(gi)) {
      var e = [];
      (Uo(e, gi, t, us(t)), zo(Mg, e));
    }
  }
  function Eg(t, e, a) {
    t === "focusin"
      ? (Yo(), (mi = e), (gi = a), mi.attachEvent("onpropertychange", Lo))
      : t === "focusout" && Yo();
  }
  function jg(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Au(gi);
  }
  function Ag(t, e) {
    if (t === "click") return Au(e);
  }
  function Og(t, e) {
    if (t === "input" || t === "change") return Au(e);
  }
  function Rg(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Le = typeof Object.is == "function" ? Object.is : Rg;
  function pi(t, e) {
    if (Le(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var a = Object.keys(t),
      n = Object.keys(e);
    if (a.length !== n.length) return !1;
    for (n = 0; n < a.length; n++) {
      var u = a[n];
      if (!ga.call(e, u) || !Le(t[u], e[u])) return !1;
    }
    return !0;
  }
  function Xo(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t;
  }
  function Go(t, e) {
    var a = Xo(t);
    t = 0;
    for (var n; a;) {
      if (a.nodeType === 3) {
        if (((n = t + a.textContent.length), t <= e && n >= e))
          return { node: a, offset: e - t };
        t = n;
      }
      t: {
        for (; a;) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Xo(a);
    }
  }
  function Qo(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Qo(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Vo(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = xu(t.document); e instanceof t.HTMLIFrameElement;) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = xu(t.document);
    }
    return e;
  }
  function ys(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Cg = Oa && "documentMode" in document && 11 >= document.documentMode,
    pl = null,
    vs = null,
    yi = null,
    _s = !1;
  function Zo(t, e, a) {
    var n =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    _s ||
      pl == null ||
      pl !== xu(n) ||
      ((n = pl),
      "selectionStart" in n && ys(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (yi && pi(yi, n)) ||
        ((yi = n),
        (n = pr(vs, "onSelect")),
        0 < n.length &&
          ((e = new Eu("onSelect", "select", null, e, a)),
          t.push({ event: e, listeners: n }),
          (e.target = pl))));
  }
  function Bn(t, e) {
    var a = {};
    return (
      (a[t.toLowerCase()] = e.toLowerCase()),
      (a["Webkit" + t] = "webkit" + e),
      (a["Moz" + t] = "moz" + e),
      a
    );
  }
  var yl = {
      animationend: Bn("Animation", "AnimationEnd"),
      animationiteration: Bn("Animation", "AnimationIteration"),
      animationstart: Bn("Animation", "AnimationStart"),
      transitionrun: Bn("Transition", "TransitionRun"),
      transitionstart: Bn("Transition", "TransitionStart"),
      transitioncancel: Bn("Transition", "TransitionCancel"),
      transitionend: Bn("Transition", "TransitionEnd"),
    },
    bs = {},
    Ko = {};
  Oa &&
    ((Ko = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete yl.animationend.animation,
      delete yl.animationiteration.animation,
      delete yl.animationstart.animation),
    "TransitionEvent" in window || delete yl.transitionend.transition);
  function Un(t) {
    if (bs[t]) return bs[t];
    if (!yl[t]) return t;
    var e = yl[t],
      a;
    for (a in e) if (e.hasOwnProperty(a) && a in Ko) return (bs[t] = e[a]);
    return t;
  }
  var Jo = Un("animationend"),
    Fo = Un("animationiteration"),
    Wo = Un("animationstart"),
    Dg = Un("transitionrun"),
    wg = Un("transitionstart"),
    Ng = Un("transitioncancel"),
    $o = Un("transitionend"),
    Io = new Map(),
    xs =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  xs.push("scrollEnd");
  function pa(t, e) {
    (Io.set(t, e), wn(e, [t]));
  }
  var Ou =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    la = [],
    vl = 0,
    Ss = 0;
  function Ru() {
    for (var t = vl, e = (Ss = vl = 0); e < t;) {
      var a = la[e];
      la[e++] = null;
      var n = la[e];
      la[e++] = null;
      var u = la[e];
      la[e++] = null;
      var s = la[e];
      if (((la[e++] = null), n !== null && u !== null)) {
        var d = n.pending;
        (d === null ? (u.next = u) : ((u.next = d.next), (d.next = u)),
          (n.pending = u));
      }
      s !== 0 && Po(a, u, s);
    }
  }
  function Cu(t, e, a, n) {
    ((la[vl++] = t),
      (la[vl++] = e),
      (la[vl++] = a),
      (la[vl++] = n),
      (Ss |= n),
      (t.lanes |= n),
      (t = t.alternate),
      t !== null && (t.lanes |= n));
  }
  function Ts(t, e, a, n) {
    return (Cu(t, e, a, n), Du(t));
  }
  function kn(t, e) {
    return (Cu(t, null, null, e), Du(t));
  }
  function Po(t, e, a) {
    t.lanes |= a;
    var n = t.alternate;
    n !== null && (n.lanes |= a);
    for (var u = !1, s = t.return; s !== null;)
      ((s.childLanes |= a),
        (n = s.alternate),
        n !== null && (n.childLanes |= a),
        s.tag === 22 &&
          ((t = s.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = s),
        (s = s.return));
    return t.tag === 3
      ? ((s = t.stateNode),
        u &&
          e !== null &&
          ((u = 31 - Ye(a)),
          (t = s.hiddenUpdates),
          (n = t[u]),
          n === null ? (t[u] = [e]) : n.push(e),
          (e.lane = a | 536870912)),
        s)
      : null;
  }
  function Du(t) {
    if (50 < qi) throw ((qi = 0), (wf = null), Error(i(185)));
    for (var e = t.return; e !== null;) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var _l = {};
  function Bg(t, e, a, n) {
    ((this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Xe(t, e, a, n) {
    return new Bg(t, e, a, n);
  }
  function zs(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Ra(t, e) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = Xe(t.tag, e, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = e),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 65011712),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (a.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function t0(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = a.childLanes),
          (t.lanes = a.lanes),
          (t.child = a.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = a.memoizedProps),
          (t.memoizedState = a.memoizedState),
          (t.updateQueue = a.updateQueue),
          (t.type = a.type),
          (e = a.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function wu(t, e, a, n, u, s) {
    var d = 0;
    if (((n = t), typeof t == "function")) zs(t) && (d = 1);
    else if (typeof t == "string")
      d = Yp(t, a, Z.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case F:
          return ((t = Xe(31, a, e, u)), (t.elementType = F), (t.lanes = s), t);
        case b:
          return Hn(a.children, u, s, e);
        case A:
          ((d = 8), (u |= 24));
          break;
        case k:
          return (
            (t = Xe(12, a, e, u | 2)),
            (t.elementType = k),
            (t.lanes = s),
            t
          );
        case V:
          return ((t = Xe(13, a, e, u)), (t.elementType = V), (t.lanes = s), t);
        case P:
          return ((t = Xe(19, a, e, u)), (t.elementType = P), (t.lanes = s), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Q:
                d = 10;
                break t;
              case q:
                d = 9;
                break t;
              case K:
                d = 11;
                break t;
              case Y:
                d = 14;
                break t;
              case W:
                ((d = 16), (n = null));
                break t;
            }
          ((d = 29),
            (a = Error(i(130, t === null ? "null" : typeof t, ""))),
            (n = null));
      }
    return (
      (e = Xe(d, a, e, u)),
      (e.elementType = t),
      (e.type = n),
      (e.lanes = s),
      e
    );
  }
  function Hn(t, e, a, n) {
    return ((t = Xe(7, t, n, e)), (t.lanes = a), t);
  }
  function Ms(t, e, a) {
    return ((t = Xe(6, t, null, e)), (t.lanes = a), t);
  }
  function e0(t) {
    var e = Xe(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Es(t, e, a) {
    return (
      (e = Xe(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = a),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var a0 = new WeakMap();
  function ia(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = a0.get(t);
      return a !== void 0
        ? a
        : ((e = { value: t, source: e, stack: ea(e) }), a0.set(t, e), e);
    }
    return { value: t, source: e, stack: ea(e) };
  }
  var bl = [],
    xl = 0,
    Nu = null,
    vi = 0,
    ua = [],
    ra = 0,
    Ia = null,
    _a = 1,
    ba = "";
  function Ca(t, e) {
    ((bl[xl++] = vi), (bl[xl++] = Nu), (Nu = t), (vi = e));
  }
  function n0(t, e, a) {
    ((ua[ra++] = _a), (ua[ra++] = ba), (ua[ra++] = Ia), (Ia = t));
    var n = _a;
    t = ba;
    var u = 32 - Ye(n) - 1;
    ((n &= ~(1 << u)), (a += 1));
    var s = 32 - Ye(e) + u;
    if (30 < s) {
      var d = u - (u % 5);
      ((s = (n & ((1 << d) - 1)).toString(32)),
        (n >>= d),
        (u -= d),
        (_a = (1 << (32 - Ye(e) + u)) | (a << u) | n),
        (ba = s + t));
    } else ((_a = (1 << s) | (a << u) | n), (ba = t));
  }
  function js(t) {
    t.return !== null && (Ca(t, 1), n0(t, 1, 0));
  }
  function As(t) {
    for (; t === Nu;)
      ((Nu = bl[--xl]), (bl[xl] = null), (vi = bl[--xl]), (bl[xl] = null));
    for (; t === Ia;)
      ((Ia = ua[--ra]),
        (ua[ra] = null),
        (ba = ua[--ra]),
        (ua[ra] = null),
        (_a = ua[--ra]),
        (ua[ra] = null));
  }
  function l0(t, e) {
    ((ua[ra++] = _a),
      (ua[ra++] = ba),
      (ua[ra++] = Ia),
      (_a = e.id),
      (ba = e.overflow),
      (Ia = t));
  }
  var he = null,
    Xt = null,
    zt = !1,
    Pa = null,
    sa = !1,
    Os = Error(i(519));
  function tn(t) {
    var e = Error(
      i(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (_i(ia(e, t)), Os);
  }
  function i0(t) {
    var e = t.stateNode,
      a = t.type,
      n = t.memoizedProps;
    switch (((e[de] = t), (e[Me] = n), a)) {
      case "dialog":
        (xt("cancel", e), xt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        xt("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Li.length; a++) xt(Li[a], e);
        break;
      case "source":
        xt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (xt("error", e), xt("load", e));
        break;
      case "details":
        xt("toggle", e);
        break;
      case "input":
        (xt("invalid", e),
          vo(
            e,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0,
          ));
        break;
      case "select":
        xt("invalid", e);
        break;
      case "textarea":
        (xt("invalid", e), bo(e, n.value, n.defaultValue, n.children));
    }
    ((a = n.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      e.textContent === "" + a ||
      n.suppressHydrationWarning === !0 ||
      Sh(e.textContent, a)
        ? (n.popover != null && (xt("beforetoggle", e), xt("toggle", e)),
          n.onScroll != null && xt("scroll", e),
          n.onScrollEnd != null && xt("scrollend", e),
          n.onClick != null && (e.onclick = Aa),
          (e = !0))
        : (e = !1),
      e || tn(t, !0));
  }
  function u0(t) {
    for (he = t.return; he;)
      switch (he.tag) {
        case 5:
        case 31:
        case 13:
          sa = !1;
          return;
        case 27:
        case 3:
          sa = !0;
          return;
        default:
          he = he.return;
      }
  }
  function Sl(t) {
    if (t !== he) return !1;
    if (!zt) return (u0(t), (zt = !0), !1);
    var e = t.tag,
      a;
    if (
      ((a = e !== 3 && e !== 27) &&
        ((a = e === 5) &&
          ((a = t.type),
          (a =
            !(a !== "form" && a !== "button") || Jf(t.type, t.memoizedProps))),
        (a = !a)),
      a && Xt && tn(t),
      u0(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(i(317));
      Xt = Ch(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(i(317));
      Xt = Ch(t);
    } else
      e === 27
        ? ((e = Xt), gn(t.type) ? ((t = Pf), (Pf = null), (Xt = t)) : (Xt = e))
        : (Xt = he ? ca(t.stateNode.nextSibling) : null);
    return !0;
  }
  function qn() {
    ((Xt = he = null), (zt = !1));
  }
  function Rs() {
    var t = Pa;
    return (
      t !== null &&
        (Re === null ? (Re = t) : Re.push.apply(Re, t), (Pa = null)),
      t
    );
  }
  function _i(t) {
    Pa === null ? (Pa = [t]) : Pa.push(t);
  }
  var Cs = y(null),
    Yn = null,
    Da = null;
  function en(t, e, a) {
    (L(Cs, e._currentValue), (e._currentValue = a));
  }
  function wa(t) {
    ((t._currentValue = Cs.current), R(Cs));
  }
  function Ds(t, e, a) {
    for (; t !== null;) {
      var n = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), n !== null && (n.childLanes |= e))
          : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function ws(t, e, a, n) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null;) {
      var s = u.dependencies;
      if (s !== null) {
        var d = u.child;
        s = s.firstContext;
        t: for (; s !== null;) {
          var _ = s;
          s = u;
          for (var z = 0; z < e.length; z++)
            if (_.context === e[z]) {
              ((s.lanes |= a),
                (_ = s.alternate),
                _ !== null && (_.lanes |= a),
                Ds(s.return, a, t),
                n || (d = null));
              break t;
            }
          s = _.next;
        }
      } else if (u.tag === 18) {
        if (((d = u.return), d === null)) throw Error(i(341));
        ((d.lanes |= a),
          (s = d.alternate),
          s !== null && (s.lanes |= a),
          Ds(d, a, t),
          (d = null));
      } else d = u.child;
      if (d !== null) d.return = u;
      else
        for (d = u; d !== null;) {
          if (d === t) {
            d = null;
            break;
          }
          if (((u = d.sibling), u !== null)) {
            ((u.return = d.return), (d = u));
            break;
          }
          d = d.return;
        }
      u = d;
    }
  }
  function Tl(t, e, a, n) {
    t = null;
    for (var u = e, s = !1; u !== null;) {
      if (!s) {
        if ((u.flags & 524288) !== 0) s = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var d = u.alternate;
        if (d === null) throw Error(i(387));
        if (((d = d.memoizedProps), d !== null)) {
          var _ = u.type;
          Le(u.pendingProps.value, d.value) ||
            (t !== null ? t.push(_) : (t = [_]));
        }
      } else if (u === tt.current) {
        if (((d = u.alternate), d === null)) throw Error(i(387));
        d.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(Zi) : (t = [Zi]));
      }
      u = u.return;
    }
    (t !== null && ws(e, t, a, n), (e.flags |= 262144));
  }
  function Bu(t) {
    for (t = t.firstContext; t !== null;) {
      if (!Le(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ln(t) {
    ((Yn = t),
      (Da = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function me(t) {
    return r0(Yn, t);
  }
  function Uu(t, e) {
    return (Yn === null && Ln(t), r0(t, e));
  }
  function r0(t, e) {
    var a = e._currentValue;
    if (((e = { context: e, memoizedValue: a, next: null }), Da === null)) {
      if (t === null) throw Error(i(308));
      ((Da = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else Da = Da.next = e;
    return a;
  }
  var Ug =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (a, n) {
                  t.push(n);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (a) {
                  return a();
                }));
            };
          },
    kg = g.unstable_scheduleCallback,
    Hg = g.unstable_NormalPriority,
    ae = {
      $$typeof: Q,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ns() {
    return { controller: new Ug(), data: new Map(), refCount: 0 };
  }
  function bi(t) {
    (t.refCount--,
      t.refCount === 0 &&
        kg(Hg, function () {
          t.controller.abort();
        }));
  }
  var xi = null,
    Bs = 0,
    zl = 0,
    Ml = null;
  function qg(t, e) {
    if (xi === null) {
      var a = (xi = []);
      ((Bs = 0),
        (zl = qf()),
        (Ml = {
          status: "pending",
          value: void 0,
          then: function (n) {
            a.push(n);
          },
        }));
    }
    return (Bs++, e.then(s0, s0), e);
  }
  function s0() {
    if (--Bs === 0 && xi !== null) {
      Ml !== null && (Ml.status = "fulfilled");
      var t = xi;
      ((xi = null), (zl = 0), (Ml = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Yg(t, e) {
    var a = [],
      n = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      t.then(
        function () {
          ((n.status = "fulfilled"), (n.value = e));
          for (var u = 0; u < a.length; u++) (0, a[u])(e);
        },
        function (u) {
          for (n.status = "rejected", n.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        },
      ),
      n
    );
  }
  var f0 = B.S;
  B.S = function (t, e) {
    ((Zd = ve()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        qg(t, e),
      f0 !== null && f0(t, e));
  };
  var Xn = y(null);
  function Us() {
    var t = Xn.current;
    return t !== null ? t : Ht.pooledCache;
  }
  function ku(t, e) {
    e === null ? L(Xn, Xn.current) : L(Xn, e.pool);
  }
  function c0() {
    var t = Us();
    return t === null ? null : { parent: ae._currentValue, pool: t };
  }
  var El = Error(i(460)),
    ks = Error(i(474)),
    Hu = Error(i(542)),
    qu = { then: function () {} };
  function o0(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function d0(t, e, a) {
    switch (
      ((a = t[a]),
      a === void 0 ? t.push(e) : a !== e && (e.then(Aa, Aa), (e = a)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), m0(t), t);
      default:
        if (typeof e.status == "string") e.then(Aa, Aa);
        else {
          if (((t = Ht), t !== null && 100 < t.shellSuspendCounter))
            throw Error(i(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (n) {
                if (e.status === "pending") {
                  var u = e;
                  ((u.status = "fulfilled"), (u.value = n));
                }
              },
              function (n) {
                if (e.status === "pending") {
                  var u = e;
                  ((u.status = "rejected"), (u.reason = n));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), m0(t), t);
        }
        throw ((Qn = e), El);
    }
  }
  function Gn(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((Qn = a), El)
        : a;
    }
  }
  var Qn = null;
  function h0() {
    if (Qn === null) throw Error(i(459));
    var t = Qn;
    return ((Qn = null), t);
  }
  function m0(t) {
    if (t === El || t === Hu) throw Error(i(483));
  }
  var jl = null,
    Si = 0;
  function Yu(t) {
    var e = Si;
    return ((Si += 1), jl === null && (jl = []), d0(jl, t, e));
  }
  function Ti(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function Lu(t, e) {
    throw e.$$typeof === j
      ? Error(i(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          i(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function g0(t) {
    function e(O, E) {
      if (t) {
        var D = O.deletions;
        D === null ? ((O.deletions = [E]), (O.flags |= 16)) : D.push(E);
      }
    }
    function a(O, E) {
      if (!t) return null;
      for (; E !== null;) (e(O, E), (E = E.sibling));
      return null;
    }
    function n(O) {
      for (var E = new Map(); O !== null;)
        (O.key !== null ? E.set(O.key, O) : E.set(O.index, O), (O = O.sibling));
      return E;
    }
    function u(O, E) {
      return ((O = Ra(O, E)), (O.index = 0), (O.sibling = null), O);
    }
    function s(O, E, D) {
      return (
        (O.index = D),
        t
          ? ((D = O.alternate),
            D !== null
              ? ((D = D.index), D < E ? ((O.flags |= 67108866), E) : D)
              : ((O.flags |= 67108866), E))
          : ((O.flags |= 1048576), E)
      );
    }
    function d(O) {
      return (t && O.alternate === null && (O.flags |= 67108866), O);
    }
    function _(O, E, D, X) {
      return E === null || E.tag !== 6
        ? ((E = Ms(D, O.mode, X)), (E.return = O), E)
        : ((E = u(E, D)), (E.return = O), E);
    }
    function z(O, E, D, X) {
      var ut = D.type;
      return ut === b
        ? H(O, E, D.props.children, X, D.key)
        : E !== null &&
            (E.elementType === ut ||
              (typeof ut == "object" &&
                ut !== null &&
                ut.$$typeof === W &&
                Gn(ut) === E.type))
          ? ((E = u(E, D.props)), Ti(E, D), (E.return = O), E)
          : ((E = wu(D.type, D.key, D.props, null, O.mode, X)),
            Ti(E, D),
            (E.return = O),
            E);
    }
    function w(O, E, D, X) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== D.containerInfo ||
        E.stateNode.implementation !== D.implementation
        ? ((E = Es(D, O.mode, X)), (E.return = O), E)
        : ((E = u(E, D.children || [])), (E.return = O), E);
    }
    function H(O, E, D, X, ut) {
      return E === null || E.tag !== 7
        ? ((E = Hn(D, O.mode, X, ut)), (E.return = O), E)
        : ((E = u(E, D)), (E.return = O), E);
    }
    function G(O, E, D) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return ((E = Ms("" + E, O.mode, D)), (E.return = O), E);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case S:
            return (
              (D = wu(E.type, E.key, E.props, null, O.mode, D)),
              Ti(D, E),
              (D.return = O),
              D
            );
          case M:
            return ((E = Es(E, O.mode, D)), (E.return = O), E);
          case W:
            return ((E = Gn(E)), G(O, E, D));
        }
        if (Et(E) || ct(E))
          return ((E = Hn(E, O.mode, D, null)), (E.return = O), E);
        if (typeof E.then == "function") return G(O, Yu(E), D);
        if (E.$$typeof === Q) return G(O, Uu(O, E), D);
        Lu(O, E);
      }
      return null;
    }
    function N(O, E, D, X) {
      var ut = E !== null ? E.key : null;
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return ut !== null ? null : _(O, E, "" + D, X);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case S:
            return D.key === ut ? z(O, E, D, X) : null;
          case M:
            return D.key === ut ? w(O, E, D, X) : null;
          case W:
            return ((D = Gn(D)), N(O, E, D, X));
        }
        if (Et(D) || ct(D)) return ut !== null ? null : H(O, E, D, X, null);
        if (typeof D.then == "function") return N(O, E, Yu(D), X);
        if (D.$$typeof === Q) return N(O, E, Uu(O, D), X);
        Lu(O, D);
      }
      return null;
    }
    function U(O, E, D, X, ut) {
      if (
        (typeof X == "string" && X !== "") ||
        typeof X == "number" ||
        typeof X == "bigint"
      )
        return ((O = O.get(D) || null), _(E, O, "" + X, ut));
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case S:
            return (
              (O = O.get(X.key === null ? D : X.key) || null),
              z(E, O, X, ut)
            );
          case M:
            return (
              (O = O.get(X.key === null ? D : X.key) || null),
              w(E, O, X, ut)
            );
          case W:
            return ((X = Gn(X)), U(O, E, D, X, ut));
        }
        if (Et(X) || ct(X))
          return ((O = O.get(D) || null), H(E, O, X, ut, null));
        if (typeof X.then == "function") return U(O, E, D, Yu(X), ut);
        if (X.$$typeof === Q) return U(O, E, D, Uu(E, X), ut);
        Lu(E, X);
      }
      return null;
    }
    function nt(O, E, D, X) {
      for (
        var ut = null, jt = null, it = E, gt = (E = 0), Tt = null;
        it !== null && gt < D.length;
        gt++
      ) {
        it.index > gt ? ((Tt = it), (it = null)) : (Tt = it.sibling);
        var At = N(O, it, D[gt], X);
        if (At === null) {
          it === null && (it = Tt);
          break;
        }
        (t && it && At.alternate === null && e(O, it),
          (E = s(At, E, gt)),
          jt === null ? (ut = At) : (jt.sibling = At),
          (jt = At),
          (it = Tt));
      }
      if (gt === D.length) return (a(O, it), zt && Ca(O, gt), ut);
      if (it === null) {
        for (; gt < D.length; gt++)
          ((it = G(O, D[gt], X)),
            it !== null &&
              ((E = s(it, E, gt)),
              jt === null ? (ut = it) : (jt.sibling = it),
              (jt = it)));
        return (zt && Ca(O, gt), ut);
      }
      for (it = n(it); gt < D.length; gt++)
        ((Tt = U(it, O, gt, D[gt], X)),
          Tt !== null &&
            (t &&
              Tt.alternate !== null &&
              it.delete(Tt.key === null ? gt : Tt.key),
            (E = s(Tt, E, gt)),
            jt === null ? (ut = Tt) : (jt.sibling = Tt),
            (jt = Tt)));
      return (
        t &&
          it.forEach(function (bn) {
            return e(O, bn);
          }),
        zt && Ca(O, gt),
        ut
      );
    }
    function st(O, E, D, X) {
      if (D == null) throw Error(i(151));
      for (
        var ut = null,
          jt = null,
          it = E,
          gt = (E = 0),
          Tt = null,
          At = D.next();
        it !== null && !At.done;
        gt++, At = D.next()
      ) {
        it.index > gt ? ((Tt = it), (it = null)) : (Tt = it.sibling);
        var bn = N(O, it, At.value, X);
        if (bn === null) {
          it === null && (it = Tt);
          break;
        }
        (t && it && bn.alternate === null && e(O, it),
          (E = s(bn, E, gt)),
          jt === null ? (ut = bn) : (jt.sibling = bn),
          (jt = bn),
          (it = Tt));
      }
      if (At.done) return (a(O, it), zt && Ca(O, gt), ut);
      if (it === null) {
        for (; !At.done; gt++, At = D.next())
          ((At = G(O, At.value, X)),
            At !== null &&
              ((E = s(At, E, gt)),
              jt === null ? (ut = At) : (jt.sibling = At),
              (jt = At)));
        return (zt && Ca(O, gt), ut);
      }
      for (it = n(it); !At.done; gt++, At = D.next())
        ((At = U(it, O, gt, At.value, X)),
          At !== null &&
            (t &&
              At.alternate !== null &&
              it.delete(At.key === null ? gt : At.key),
            (E = s(At, E, gt)),
            jt === null ? (ut = At) : (jt.sibling = At),
            (jt = At)));
      return (
        t &&
          it.forEach(function ($p) {
            return e(O, $p);
          }),
        zt && Ca(O, gt),
        ut
      );
    }
    function kt(O, E, D, X) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === b &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case S:
            t: {
              for (var ut = D.key; E !== null;) {
                if (E.key === ut) {
                  if (((ut = D.type), ut === b)) {
                    if (E.tag === 7) {
                      (a(O, E.sibling),
                        (X = u(E, D.props.children)),
                        (X.return = O),
                        (O = X));
                      break t;
                    }
                  } else if (
                    E.elementType === ut ||
                    (typeof ut == "object" &&
                      ut !== null &&
                      ut.$$typeof === W &&
                      Gn(ut) === E.type)
                  ) {
                    (a(O, E.sibling),
                      (X = u(E, D.props)),
                      Ti(X, D),
                      (X.return = O),
                      (O = X));
                    break t;
                  }
                  a(O, E);
                  break;
                } else e(O, E);
                E = E.sibling;
              }
              D.type === b
                ? ((X = Hn(D.props.children, O.mode, X, D.key)),
                  (X.return = O),
                  (O = X))
                : ((X = wu(D.type, D.key, D.props, null, O.mode, X)),
                  Ti(X, D),
                  (X.return = O),
                  (O = X));
            }
            return d(O);
          case M:
            t: {
              for (ut = D.key; E !== null;) {
                if (E.key === ut)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === D.containerInfo &&
                    E.stateNode.implementation === D.implementation
                  ) {
                    (a(O, E.sibling),
                      (X = u(E, D.children || [])),
                      (X.return = O),
                      (O = X));
                    break t;
                  } else {
                    a(O, E);
                    break;
                  }
                else e(O, E);
                E = E.sibling;
              }
              ((X = Es(D, O.mode, X)), (X.return = O), (O = X));
            }
            return d(O);
          case W:
            return ((D = Gn(D)), kt(O, E, D, X));
        }
        if (Et(D)) return nt(O, E, D, X);
        if (ct(D)) {
          if (((ut = ct(D)), typeof ut != "function")) throw Error(i(150));
          return ((D = ut.call(D)), st(O, E, D, X));
        }
        if (typeof D.then == "function") return kt(O, E, Yu(D), X);
        if (D.$$typeof === Q) return kt(O, E, Uu(O, D), X);
        Lu(O, D);
      }
      return (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
        ? ((D = "" + D),
          E !== null && E.tag === 6
            ? (a(O, E.sibling), (X = u(E, D)), (X.return = O), (O = X))
            : (a(O, E), (X = Ms(D, O.mode, X)), (X.return = O), (O = X)),
          d(O))
        : a(O, E);
    }
    return function (O, E, D, X) {
      try {
        Si = 0;
        var ut = kt(O, E, D, X);
        return ((jl = null), ut);
      } catch (it) {
        if (it === El || it === Hu) throw it;
        var jt = Xe(29, it, null, O.mode);
        return ((jt.lanes = X), (jt.return = O), jt);
      } finally {
      }
    };
  }
  var Vn = g0(!0),
    p0 = g0(!1),
    an = !1;
  function Hs(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function qs(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function nn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ln(t, e, a) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (Ot & 2) !== 0)) {
      var u = n.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (n.pending = e),
        (e = Du(t)),
        Po(t, null, a),
        e
      );
    }
    return (Cu(t, n, e, a), Du(t));
  }
  function zi(t, e, a) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (a & 4194048) !== 0))
    ) {
      var n = e.lanes;
      ((n &= t.pendingLanes), (a |= n), (e.lanes = a), uo(t, a));
    }
  }
  function Ys(t, e) {
    var a = t.updateQueue,
      n = t.alternate;
    if (n !== null && ((n = n.updateQueue), a === n)) {
      var u = null,
        s = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var d = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (s === null ? (u = s = d) : (s = s.next = d), (a = a.next));
        } while (a !== null);
        s === null ? (u = s = e) : (s = s.next = e);
      } else u = s = e;
      ((a = {
        baseState: n.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: s,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (t.updateQueue = a));
      return;
    }
    ((t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = e) : (t.next = e),
      (a.lastBaseUpdate = e));
  }
  var Ls = !1;
  function Mi() {
    if (Ls) {
      var t = Ml;
      if (t !== null) throw t;
    }
  }
  function Ei(t, e, a, n) {
    Ls = !1;
    var u = t.updateQueue;
    an = !1;
    var s = u.firstBaseUpdate,
      d = u.lastBaseUpdate,
      _ = u.shared.pending;
    if (_ !== null) {
      u.shared.pending = null;
      var z = _,
        w = z.next;
      ((z.next = null), d === null ? (s = w) : (d.next = w), (d = z));
      var H = t.alternate;
      H !== null &&
        ((H = H.updateQueue),
        (_ = H.lastBaseUpdate),
        _ !== d &&
          (_ === null ? (H.firstBaseUpdate = w) : (_.next = w),
          (H.lastBaseUpdate = z)));
    }
    if (s !== null) {
      var G = u.baseState;
      ((d = 0), (H = w = z = null), (_ = s));
      do {
        var N = _.lane & -536870913,
          U = N !== _.lane;
        if (U ? (St & N) === N : (n & N) === N) {
          (N !== 0 && N === zl && (Ls = !0),
            H !== null &&
              (H = H.next =
                {
                  lane: 0,
                  tag: _.tag,
                  payload: _.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var nt = t,
              st = _;
            N = e;
            var kt = a;
            switch (st.tag) {
              case 1:
                if (((nt = st.payload), typeof nt == "function")) {
                  G = nt.call(kt, G, N);
                  break t;
                }
                G = nt;
                break t;
              case 3:
                nt.flags = (nt.flags & -65537) | 128;
              case 0:
                if (
                  ((nt = st.payload),
                  (N = typeof nt == "function" ? nt.call(kt, G, N) : nt),
                  N == null)
                )
                  break t;
                G = T({}, G, N);
                break t;
              case 2:
                an = !0;
            }
          }
          ((N = _.callback),
            N !== null &&
              ((t.flags |= 64),
              U && (t.flags |= 8192),
              (U = u.callbacks),
              U === null ? (u.callbacks = [N]) : U.push(N)));
        } else
          ((U = {
            lane: N,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null,
          }),
            H === null ? ((w = H = U), (z = G)) : (H = H.next = U),
            (d |= N));
        if (((_ = _.next), _ === null)) {
          if (((_ = u.shared.pending), _ === null)) break;
          ((U = _),
            (_ = U.next),
            (U.next = null),
            (u.lastBaseUpdate = U),
            (u.shared.pending = null));
        }
      } while (!0);
      (H === null && (z = G),
        (u.baseState = z),
        (u.firstBaseUpdate = w),
        (u.lastBaseUpdate = H),
        s === null && (u.shared.lanes = 0),
        (cn |= d),
        (t.lanes = d),
        (t.memoizedState = G));
    }
  }
  function y0(t, e) {
    if (typeof t != "function") throw Error(i(191, t));
    t.call(e);
  }
  function v0(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++) y0(a[t], e);
  }
  var Al = y(null),
    Xu = y(0);
  function _0(t, e) {
    ((t = Xa), L(Xu, t), L(Al, e), (Xa = t | e.baseLanes));
  }
  function Xs() {
    (L(Xu, Xa), L(Al, Al.current));
  }
  function Gs() {
    ((Xa = Xu.current), R(Al), R(Xu));
  }
  var Ge = y(null),
    fa = null;
  function un(t) {
    var e = t.alternate;
    (L(It, It.current & 1),
      L(Ge, t),
      fa === null &&
        (e === null || Al.current !== null || e.memoizedState !== null) &&
        (fa = t));
  }
  function Qs(t) {
    (L(It, It.current), L(Ge, t), fa === null && (fa = t));
  }
  function b0(t) {
    t.tag === 22
      ? (L(It, It.current), L(Ge, t), fa === null && (fa = t))
      : rn();
  }
  function rn() {
    (L(It, It.current), L(Ge, Ge.current));
  }
  function Qe(t) {
    (R(Ge), fa === t && (fa = null), R(It));
  }
  var It = y(0);
  function Gu(t) {
    for (var e = t; e !== null;) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || $f(a) || If(a)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var Na = 0,
    ht = null,
    Bt = null,
    ne = null,
    Qu = !1,
    Ol = !1,
    Zn = !1,
    Vu = 0,
    ji = 0,
    Rl = null,
    Lg = 0;
  function Ft() {
    throw Error(i(321));
  }
  function Vs(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!Le(t[a], e[a])) return !1;
    return !0;
  }
  function Zs(t, e, a, n, u, s) {
    return (
      (Na = s),
      (ht = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (B.H = t === null || t.memoizedState === null ? nd : sf),
      (Zn = !1),
      (s = a(n, u)),
      (Zn = !1),
      Ol && (s = S0(e, a, n, u)),
      x0(t),
      s
    );
  }
  function x0(t) {
    B.H = Ri;
    var e = Bt !== null && Bt.next !== null;
    if (((Na = 0), (ne = Bt = ht = null), (Qu = !1), (ji = 0), (Rl = null), e))
      throw Error(i(300));
    t === null ||
      le ||
      ((t = t.dependencies), t !== null && Bu(t) && (le = !0));
  }
  function S0(t, e, a, n) {
    ht = t;
    var u = 0;
    do {
      if ((Ol && (Rl = null), (ji = 0), (Ol = !1), 25 <= u))
        throw Error(i(301));
      if (((u += 1), (ne = Bt = null), t.updateQueue != null)) {
        var s = t.updateQueue;
        ((s.lastEffect = null),
          (s.events = null),
          (s.stores = null),
          s.memoCache != null && (s.memoCache.index = 0));
      }
      ((B.H = ld), (s = e(a, n)));
    } while (Ol);
    return s;
  }
  function Xg() {
    var t = B.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Ai(e) : e),
      (t = t.useState()[0]),
      (Bt !== null ? Bt.memoizedState : null) !== t && (ht.flags |= 1024),
      e
    );
  }
  function Ks() {
    var t = Vu !== 0;
    return ((Vu = 0), t);
  }
  function Js(t, e, a) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~a));
  }
  function Fs(t) {
    if (Qu) {
      for (t = t.memoizedState; t !== null;) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      Qu = !1;
    }
    ((Na = 0), (ne = Bt = ht = null), (Ol = !1), (ji = Vu = 0), (Rl = null));
  }
  function Te() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ne === null ? (ht.memoizedState = ne = t) : (ne = ne.next = t), ne);
  }
  function Pt() {
    if (Bt === null) {
      var t = ht.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Bt.next;
    var e = ne === null ? ht.memoizedState : ne.next;
    if (e !== null) ((ne = e), (Bt = t));
    else {
      if (t === null)
        throw ht.alternate === null ? Error(i(467)) : Error(i(310));
      ((Bt = t),
        (t = {
          memoizedState: Bt.memoizedState,
          baseState: Bt.baseState,
          baseQueue: Bt.baseQueue,
          queue: Bt.queue,
          next: null,
        }),
        ne === null ? (ht.memoizedState = ne = t) : (ne = ne.next = t));
    }
    return ne;
  }
  function Zu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ai(t) {
    var e = ji;
    return (
      (ji += 1),
      Rl === null && (Rl = []),
      (t = d0(Rl, t, e)),
      (e = ht),
      (ne === null ? e.memoizedState : ne.next) === null &&
        ((e = e.alternate),
        (B.H = e === null || e.memoizedState === null ? nd : sf)),
      t
    );
  }
  function Ku(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ai(t);
      if (t.$$typeof === Q) return me(t);
    }
    throw Error(i(438, String(t)));
  }
  function Ws(t) {
    var e = null,
      a = ht.updateQueue;
    if ((a !== null && (e = a.memoCache), e == null)) {
      var n = ht.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (e = {
              data: n.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      a === null && ((a = Zu()), (ht.updateQueue = a)),
      (a.memoCache = e),
      (a = e.data[e.index]),
      a === void 0)
    )
      for (a = e.data[e.index] = Array(t), n = 0; n < t; n++) a[n] = et;
    return (e.index++, a);
  }
  function Ba(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ju(t) {
    var e = Pt();
    return $s(e, Bt, t);
  }
  function $s(t, e, a) {
    var n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = a;
    var u = t.baseQueue,
      s = n.pending;
    if (s !== null) {
      if (u !== null) {
        var d = u.next;
        ((u.next = s.next), (s.next = d));
      }
      ((e.baseQueue = u = s), (n.pending = null));
    }
    if (((s = t.baseState), u === null)) t.memoizedState = s;
    else {
      e = u.next;
      var _ = (d = null),
        z = null,
        w = e,
        H = !1;
      do {
        var G = w.lane & -536870913;
        if (G !== w.lane ? (St & G) === G : (Na & G) === G) {
          var N = w.revertLane;
          if (N === 0)
            (z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: w.action,
                  hasEagerState: w.hasEagerState,
                  eagerState: w.eagerState,
                  next: null,
                }),
              G === zl && (H = !0));
          else if ((Na & N) === N) {
            ((w = w.next), N === zl && (H = !0));
            continue;
          } else
            ((G = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null,
            }),
              z === null ? ((_ = z = G), (d = s)) : (z = z.next = G),
              (ht.lanes |= N),
              (cn |= N));
          ((G = w.action),
            Zn && a(s, G),
            (s = w.hasEagerState ? w.eagerState : a(s, G)));
        } else
          ((N = {
            lane: G,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          }),
            z === null ? ((_ = z = N), (d = s)) : (z = z.next = N),
            (ht.lanes |= G),
            (cn |= G));
        w = w.next;
      } while (w !== null && w !== e);
      if (
        (z === null ? (d = s) : (z.next = _),
        !Le(s, t.memoizedState) && ((le = !0), H && ((a = Ml), a !== null)))
      )
        throw a;
      ((t.memoizedState = s),
        (t.baseState = d),
        (t.baseQueue = z),
        (n.lastRenderedState = s));
    }
    return (u === null && (n.lanes = 0), [t.memoizedState, n.dispatch]);
  }
  function Is(t) {
    var e = Pt(),
      a = e.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = t;
    var n = a.dispatch,
      u = a.pending,
      s = e.memoizedState;
    if (u !== null) {
      a.pending = null;
      var d = (u = u.next);
      do ((s = t(s, d.action)), (d = d.next));
      while (d !== u);
      (Le(s, e.memoizedState) || (le = !0),
        (e.memoizedState = s),
        e.baseQueue === null && (e.baseState = s),
        (a.lastRenderedState = s));
    }
    return [s, n];
  }
  function T0(t, e, a) {
    var n = ht,
      u = Pt(),
      s = zt;
    if (s) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = e();
    var d = !Le((Bt || u).memoizedState, a);
    if (
      (d && ((u.memoizedState = a), (le = !0)),
      (u = u.queue),
      ef(E0.bind(null, n, u, t), [t]),
      u.getSnapshot !== e || d || (ne !== null && ne.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Cl(9, { destroy: void 0 }, M0.bind(null, n, u, a, e), null),
        Ht === null)
      )
        throw Error(i(349));
      s || (Na & 127) !== 0 || z0(n, e, a);
    }
    return a;
  }
  function z0(t, e, a) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: a }),
      (e = ht.updateQueue),
      e === null
        ? ((e = Zu()), (ht.updateQueue = e), (e.stores = [t]))
        : ((a = e.stores), a === null ? (e.stores = [t]) : a.push(t)));
  }
  function M0(t, e, a, n) {
    ((e.value = a), (e.getSnapshot = n), j0(e) && A0(t));
  }
  function E0(t, e, a) {
    return a(function () {
      j0(e) && A0(t);
    });
  }
  function j0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !Le(t, a);
    } catch {
      return !0;
    }
  }
  function A0(t) {
    var e = kn(t, 2);
    e !== null && Ce(e, t, 2);
  }
  function Ps(t) {
    var e = Te();
    if (typeof t == "function") {
      var a = t;
      if (((t = a()), Zn)) {
        Fa(!0);
        try {
          a();
        } finally {
          Fa(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ba,
        lastRenderedState: t,
      }),
      e
    );
  }
  function O0(t, e, a, n) {
    return ((t.baseState = a), $s(t, Bt, typeof n == "function" ? n : Ba));
  }
  function Gg(t, e, a, n, u) {
    if ($u(t)) throw Error(i(485));
    if (((t = e.action), t !== null)) {
      var s = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          s.listeners.push(d);
        },
      };
      (B.T !== null ? a(!0) : (s.isTransition = !1),
        n(s),
        (a = e.pending),
        a === null
          ? ((s.next = e.pending = s), R0(e, s))
          : ((s.next = a.next), (e.pending = a.next = s)));
    }
  }
  function R0(t, e) {
    var a = e.action,
      n = e.payload,
      u = t.state;
    if (e.isTransition) {
      var s = B.T,
        d = {};
      B.T = d;
      try {
        var _ = a(u, n),
          z = B.S;
        (z !== null && z(d, _), C0(t, e, _));
      } catch (w) {
        tf(t, e, w);
      } finally {
        (s !== null && d.types !== null && (s.types = d.types), (B.T = s));
      }
    } else
      try {
        ((s = a(u, n)), C0(t, e, s));
      } catch (w) {
        tf(t, e, w);
      }
  }
  function C0(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (n) {
            D0(t, e, n);
          },
          function (n) {
            return tf(t, e, n);
          },
        )
      : D0(t, e, a);
  }
  function D0(t, e, a) {
    ((e.status = "fulfilled"),
      (e.value = a),
      w0(e),
      (t.state = a),
      (e = t.pending),
      e !== null &&
        ((a = e.next),
        a === e ? (t.pending = null) : ((a = a.next), (e.next = a), R0(t, a))));
  }
  function tf(t, e, a) {
    var n = t.pending;
    if (((t.pending = null), n !== null)) {
      n = n.next;
      do ((e.status = "rejected"), (e.reason = a), w0(e), (e = e.next));
      while (e !== n);
    }
    t.action = null;
  }
  function w0(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function N0(t, e) {
    return e;
  }
  function B0(t, e) {
    if (zt) {
      var a = Ht.formState;
      if (a !== null) {
        t: {
          var n = ht;
          if (zt) {
            if (Xt) {
              e: {
                for (var u = Xt, s = sa; u.nodeType !== 8;) {
                  if (!s) {
                    u = null;
                    break e;
                  }
                  if (((u = ca(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                ((s = u.data), (u = s === "F!" || s === "F" ? u : null));
              }
              if (u) {
                ((Xt = ca(u.nextSibling)), (n = u.data === "F!"));
                break t;
              }
            }
            tn(n);
          }
          n = !1;
        }
        n && (e = a[0]);
      }
    }
    return (
      (a = Te()),
      (a.memoizedState = a.baseState = e),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: N0,
        lastRenderedState: e,
      }),
      (a.queue = n),
      (a = td.bind(null, ht, n)),
      (n.dispatch = a),
      (n = Ps(!1)),
      (s = rf.bind(null, ht, !1, n.queue)),
      (n = Te()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (n.queue = u),
      (a = Gg.bind(null, ht, u, s, a)),
      (u.dispatch = a),
      (n.memoizedState = t),
      [e, a, !1]
    );
  }
  function U0(t) {
    var e = Pt();
    return k0(e, Bt, t);
  }
  function k0(t, e, a) {
    if (
      ((e = $s(t, e, N0)[0]),
      (t = Ju(Ba)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var n = Ai(e);
      } catch (d) {
        throw d === El ? Hu : d;
      }
    else n = e;
    e = Pt();
    var u = e.queue,
      s = u.dispatch;
    return (
      a !== e.memoizedState &&
        ((ht.flags |= 2048),
        Cl(9, { destroy: void 0 }, Qg.bind(null, u, a), null)),
      [n, s, t]
    );
  }
  function Qg(t, e) {
    t.action = e;
  }
  function H0(t) {
    var e = Pt(),
      a = Bt;
    if (a !== null) return k0(e, a, t);
    (Pt(), (e = e.memoizedState), (a = Pt()));
    var n = a.queue.dispatch;
    return ((a.memoizedState = t), [e, n, !1]);
  }
  function Cl(t, e, a, n) {
    return (
      (t = { tag: t, create: a, deps: n, inst: e, next: null }),
      (e = ht.updateQueue),
      e === null && ((e = Zu()), (ht.updateQueue = e)),
      (a = e.lastEffect),
      a === null
        ? (e.lastEffect = t.next = t)
        : ((n = a.next), (a.next = t), (t.next = n), (e.lastEffect = t)),
      t
    );
  }
  function q0() {
    return Pt().memoizedState;
  }
  function Fu(t, e, a, n) {
    var u = Te();
    ((ht.flags |= t),
      (u.memoizedState = Cl(
        1 | e,
        { destroy: void 0 },
        a,
        n === void 0 ? null : n,
      )));
  }
  function Wu(t, e, a, n) {
    var u = Pt();
    n = n === void 0 ? null : n;
    var s = u.memoizedState.inst;
    Bt !== null && n !== null && Vs(n, Bt.memoizedState.deps)
      ? (u.memoizedState = Cl(e, s, a, n))
      : ((ht.flags |= t), (u.memoizedState = Cl(1 | e, s, a, n)));
  }
  function Y0(t, e) {
    Fu(8390656, 8, t, e);
  }
  function ef(t, e) {
    Wu(2048, 8, t, e);
  }
  function Vg(t) {
    ht.flags |= 4;
    var e = ht.updateQueue;
    if (e === null) ((e = Zu()), (ht.updateQueue = e), (e.events = [t]));
    else {
      var a = e.events;
      a === null ? (e.events = [t]) : a.push(t);
    }
  }
  function L0(t) {
    var e = Pt().memoizedState;
    return (
      Vg({ ref: e, nextImpl: t }),
      function () {
        if ((Ot & 2) !== 0) throw Error(i(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function X0(t, e) {
    return Wu(4, 2, t, e);
  }
  function G0(t, e) {
    return Wu(4, 4, t, e);
  }
  function Q0(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function () {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function V0(t, e, a) {
    ((a = a != null ? a.concat([t]) : null), Wu(4, 4, Q0.bind(null, e, t), a));
  }
  function af() {}
  function Z0(t, e) {
    var a = Pt();
    e = e === void 0 ? null : e;
    var n = a.memoizedState;
    return e !== null && Vs(e, n[1]) ? n[0] : ((a.memoizedState = [t, e]), t);
  }
  function K0(t, e) {
    var a = Pt();
    e = e === void 0 ? null : e;
    var n = a.memoizedState;
    if (e !== null && Vs(e, n[1])) return n[0];
    if (((n = t()), Zn)) {
      Fa(!0);
      try {
        t();
      } finally {
        Fa(!1);
      }
    }
    return ((a.memoizedState = [n, e]), n);
  }
  function nf(t, e, a) {
    return a === void 0 || ((Na & 1073741824) !== 0 && (St & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = a), (t = Jd()), (ht.lanes |= t), (cn |= t), a);
  }
  function J0(t, e, a, n) {
    return Le(a, e)
      ? a
      : Al.current !== null
        ? ((t = nf(t, a, n)), Le(t, e) || (le = !0), t)
        : (Na & 42) === 0 || ((Na & 1073741824) !== 0 && (St & 261930) === 0)
          ? ((le = !0), (t.memoizedState = a))
          : ((t = Jd()), (ht.lanes |= t), (cn |= t), e);
  }
  function F0(t, e, a, n, u) {
    var s = J.p;
    J.p = s !== 0 && 8 > s ? s : 8;
    var d = B.T,
      _ = {};
    ((B.T = _), rf(t, !1, e, a));
    try {
      var z = u(),
        w = B.S;
      if (
        (w !== null && w(_, z),
        z !== null && typeof z == "object" && typeof z.then == "function")
      ) {
        var H = Yg(z, n);
        Oi(t, e, H, Ke(t));
      } else Oi(t, e, n, Ke(t));
    } catch (G) {
      Oi(t, e, { then: function () {}, status: "rejected", reason: G }, Ke());
    } finally {
      ((J.p = s),
        d !== null && _.types !== null && (d.types = _.types),
        (B.T = d));
    }
  }
  function Zg() {}
  function lf(t, e, a, n) {
    if (t.tag !== 5) throw Error(i(476));
    var u = W0(t).queue;
    F0(
      t,
      u,
      e,
      lt,
      a === null
        ? Zg
        : function () {
            return ($0(t), a(n));
          },
    );
  }
  function W0(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: lt,
      baseState: lt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ba,
        lastRenderedState: lt,
      },
      next: null,
    };
    var a = {};
    return (
      (e.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ba,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function $0(t) {
    var e = W0(t);
    (e.next === null && (e = t.alternate.memoizedState),
      Oi(t, e.next.queue, {}, Ke()));
  }
  function uf() {
    return me(Zi);
  }
  function I0() {
    return Pt().memoizedState;
  }
  function P0() {
    return Pt().memoizedState;
  }
  function Kg(t) {
    for (var e = t.return; e !== null;) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = Ke();
          t = nn(a);
          var n = ln(e, t, a);
          (n !== null && (Ce(n, e, a), zi(n, e, a)),
            (e = { cache: Ns() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Jg(t, e, a) {
    var n = Ke();
    ((a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      $u(t)
        ? ed(e, a)
        : ((a = Ts(t, e, a, n)), a !== null && (Ce(a, t, n), ad(a, e, n))));
  }
  function td(t, e, a) {
    var n = Ke();
    Oi(t, e, a, n);
  }
  function Oi(t, e, a, n) {
    var u = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if ($u(t)) ed(e, u);
    else {
      var s = t.alternate;
      if (
        t.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = e.lastRenderedReducer), s !== null)
      )
        try {
          var d = e.lastRenderedState,
            _ = s(d, a);
          if (((u.hasEagerState = !0), (u.eagerState = _), Le(_, d)))
            return (Cu(t, e, u, 0), Ht === null && Ru(), !1);
        } catch {
        } finally {
        }
      if (((a = Ts(t, e, u, n)), a !== null))
        return (Ce(a, t, n), ad(a, e, n), !0);
    }
    return !1;
  }
  function rf(t, e, a, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: qf(),
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      $u(t))
    ) {
      if (e) throw Error(i(479));
    } else ((e = Ts(t, a, n, 2)), e !== null && Ce(e, t, 2));
  }
  function $u(t) {
    var e = t.alternate;
    return t === ht || (e !== null && e === ht);
  }
  function ed(t, e) {
    Ol = Qu = !0;
    var a = t.pending;
    (a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
      (t.pending = e));
  }
  function ad(t, e, a) {
    if ((a & 4194048) !== 0) {
      var n = e.lanes;
      ((n &= t.pendingLanes), (a |= n), (e.lanes = a), uo(t, a));
    }
  }
  var Ri = {
    readContext: me,
    use: Ku,
    useCallback: Ft,
    useContext: Ft,
    useEffect: Ft,
    useImperativeHandle: Ft,
    useLayoutEffect: Ft,
    useInsertionEffect: Ft,
    useMemo: Ft,
    useReducer: Ft,
    useRef: Ft,
    useState: Ft,
    useDebugValue: Ft,
    useDeferredValue: Ft,
    useTransition: Ft,
    useSyncExternalStore: Ft,
    useId: Ft,
    useHostTransitionStatus: Ft,
    useFormState: Ft,
    useActionState: Ft,
    useOptimistic: Ft,
    useMemoCache: Ft,
    useCacheRefresh: Ft,
  };
  Ri.useEffectEvent = Ft;
  var nd = {
      readContext: me,
      use: Ku,
      useCallback: function (t, e) {
        return ((Te().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: me,
      useEffect: Y0,
      useImperativeHandle: function (t, e, a) {
        ((a = a != null ? a.concat([t]) : null),
          Fu(4194308, 4, Q0.bind(null, e, t), a));
      },
      useLayoutEffect: function (t, e) {
        return Fu(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Fu(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var a = Te();
        e = e === void 0 ? null : e;
        var n = t();
        if (Zn) {
          Fa(!0);
          try {
            t();
          } finally {
            Fa(!1);
          }
        }
        return ((a.memoizedState = [n, e]), n);
      },
      useReducer: function (t, e, a) {
        var n = Te();
        if (a !== void 0) {
          var u = a(e);
          if (Zn) {
            Fa(!0);
            try {
              a(e);
            } finally {
              Fa(!1);
            }
          }
        } else u = e;
        return (
          (n.memoizedState = n.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (n.queue = t),
          (t = t.dispatch = Jg.bind(null, ht, t)),
          [n.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Te();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Ps(t);
        var e = t.queue,
          a = td.bind(null, ht, e);
        return ((e.dispatch = a), [t.memoizedState, a]);
      },
      useDebugValue: af,
      useDeferredValue: function (t, e) {
        var a = Te();
        return nf(a, t, e);
      },
      useTransition: function () {
        var t = Ps(!1);
        return (
          (t = F0.bind(null, ht, t.queue, !0, !1)),
          (Te().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, a) {
        var n = ht,
          u = Te();
        if (zt) {
          if (a === void 0) throw Error(i(407));
          a = a();
        } else {
          if (((a = e()), Ht === null)) throw Error(i(349));
          (St & 127) !== 0 || z0(n, e, a);
        }
        u.memoizedState = a;
        var s = { value: a, getSnapshot: e };
        return (
          (u.queue = s),
          Y0(E0.bind(null, n, s, t), [t]),
          (n.flags |= 2048),
          Cl(9, { destroy: void 0 }, M0.bind(null, n, s, a, e), null),
          a
        );
      },
      useId: function () {
        var t = Te(),
          e = Ht.identifierPrefix;
        if (zt) {
          var a = ba,
            n = _a;
          ((a = (n & ~(1 << (32 - Ye(n) - 1))).toString(32) + a),
            (e = "_" + e + "R_" + a),
            (a = Vu++),
            0 < a && (e += "H" + a.toString(32)),
            (e += "_"));
        } else ((a = Lg++), (e = "_" + e + "r_" + a.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: uf,
      useFormState: B0,
      useActionState: B0,
      useOptimistic: function (t) {
        var e = Te();
        e.memoizedState = e.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = a),
          (e = rf.bind(null, ht, !0, a)),
          (a.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Ws,
      useCacheRefresh: function () {
        return (Te().memoizedState = Kg.bind(null, ht));
      },
      useEffectEvent: function (t) {
        var e = Te(),
          a = { impl: t };
        return (
          (e.memoizedState = a),
          function () {
            if ((Ot & 2) !== 0) throw Error(i(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    sf = {
      readContext: me,
      use: Ku,
      useCallback: Z0,
      useContext: me,
      useEffect: ef,
      useImperativeHandle: V0,
      useInsertionEffect: X0,
      useLayoutEffect: G0,
      useMemo: K0,
      useReducer: Ju,
      useRef: q0,
      useState: function () {
        return Ju(Ba);
      },
      useDebugValue: af,
      useDeferredValue: function (t, e) {
        var a = Pt();
        return J0(a, Bt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Ju(Ba)[0],
          e = Pt().memoizedState;
        return [typeof t == "boolean" ? t : Ai(t), e];
      },
      useSyncExternalStore: T0,
      useId: I0,
      useHostTransitionStatus: uf,
      useFormState: U0,
      useActionState: U0,
      useOptimistic: function (t, e) {
        var a = Pt();
        return O0(a, Bt, t, e);
      },
      useMemoCache: Ws,
      useCacheRefresh: P0,
    };
  sf.useEffectEvent = L0;
  var ld = {
    readContext: me,
    use: Ku,
    useCallback: Z0,
    useContext: me,
    useEffect: ef,
    useImperativeHandle: V0,
    useInsertionEffect: X0,
    useLayoutEffect: G0,
    useMemo: K0,
    useReducer: Is,
    useRef: q0,
    useState: function () {
      return Is(Ba);
    },
    useDebugValue: af,
    useDeferredValue: function (t, e) {
      var a = Pt();
      return Bt === null ? nf(a, t, e) : J0(a, Bt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Is(Ba)[0],
        e = Pt().memoizedState;
      return [typeof t == "boolean" ? t : Ai(t), e];
    },
    useSyncExternalStore: T0,
    useId: I0,
    useHostTransitionStatus: uf,
    useFormState: H0,
    useActionState: H0,
    useOptimistic: function (t, e) {
      var a = Pt();
      return Bt !== null
        ? O0(a, Bt, t, e)
        : ((a.baseState = t), [t, a.queue.dispatch]);
    },
    useMemoCache: Ws,
    useCacheRefresh: P0,
  };
  ld.useEffectEvent = L0;
  function ff(t, e, a, n) {
    ((e = t.memoizedState),
      (a = a(n, e)),
      (a = a == null ? e : T({}, e, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a));
  }
  var cf = {
    enqueueSetState: function (t, e, a) {
      t = t._reactInternals;
      var n = Ke(),
        u = nn(n);
      ((u.payload = e),
        a != null && (u.callback = a),
        (e = ln(t, u, n)),
        e !== null && (Ce(e, t, n), zi(e, t, n)));
    },
    enqueueReplaceState: function (t, e, a) {
      t = t._reactInternals;
      var n = Ke(),
        u = nn(n);
      ((u.tag = 1),
        (u.payload = e),
        a != null && (u.callback = a),
        (e = ln(t, u, n)),
        e !== null && (Ce(e, t, n), zi(e, t, n)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var a = Ke(),
        n = nn(a);
      ((n.tag = 2),
        e != null && (n.callback = e),
        (e = ln(t, n, a)),
        e !== null && (Ce(e, t, a), zi(e, t, a)));
    },
  };
  function id(t, e, a, n, u, s, d) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(n, s, d)
        : e.prototype && e.prototype.isPureReactComponent
          ? !pi(a, n) || !pi(u, s)
          : !0
    );
  }
  function ud(t, e, a, n) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(a, n),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(a, n),
      e.state !== t && cf.enqueueReplaceState(e, e.state, null));
  }
  function Kn(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var n in e) n !== "ref" && (a[n] = e[n]);
    }
    if ((t = t.defaultProps)) {
      a === e && (a = T({}, a));
      for (var u in t) a[u] === void 0 && (a[u] = t[u]);
    }
    return a;
  }
  function rd(t) {
    Ou(t);
  }
  function sd(t) {
    console.error(t);
  }
  function fd(t) {
    Ou(t);
  }
  function Iu(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function cd(t, e, a) {
    try {
      var n = t.onCaughtError;
      n(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function of(t, e, a) {
    return (
      (a = nn(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        Iu(t, e);
      }),
      a
    );
  }
  function od(t) {
    return ((t = nn(t)), (t.tag = 3), t);
  }
  function dd(t, e, a, n) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var s = n.value;
      ((t.payload = function () {
        return u(s);
      }),
        (t.callback = function () {
          cd(e, a, n);
        }));
    }
    var d = a.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (t.callback = function () {
        (cd(e, a, n),
          typeof u != "function" &&
            (on === null ? (on = new Set([this])) : on.add(this)));
        var _ = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: _ !== null ? _ : "",
        });
      });
  }
  function Fg(t, e, a, n, u) {
    if (
      ((a.flags |= 32768),
      n !== null && typeof n == "object" && typeof n.then == "function")
    ) {
      if (
        ((e = a.alternate),
        e !== null && Tl(e, a, u, !0),
        (a = Ge.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              fa === null ? cr() : a.alternate === null && Wt === 0 && (Wt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              n === qu
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null ? (a.updateQueue = new Set([n])) : e.add(n),
                  Uf(t, n, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              n === qu
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n]),
                      }),
                      (a.updateQueue = e))
                    : ((a = e.retryQueue),
                      a === null ? (e.retryQueue = new Set([n])) : a.add(n)),
                  Uf(t, n, u)),
              !1
            );
        }
        throw Error(i(435, a.tag));
      }
      return (Uf(t, n, u), cr(), !1);
    }
    if (zt)
      return (
        (e = Ge.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            n !== Os && ((t = Error(i(422), { cause: n })), _i(ia(t, a))))
          : (n !== Os && ((e = Error(i(423), { cause: n })), _i(ia(e, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (n = ia(n, a)),
            (u = of(t.stateNode, n, u)),
            Ys(t, u),
            Wt !== 4 && (Wt = 2)),
        !1
      );
    var s = Error(i(520), { cause: n });
    if (
      ((s = ia(s, a)),
      Hi === null ? (Hi = [s]) : Hi.push(s),
      Wt !== 4 && (Wt = 2),
      e === null)
    )
      return !0;
    ((n = ia(n, a)), (a = e));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = u & -u),
            (a.lanes |= t),
            (t = of(a.stateNode, n, t)),
            Ys(a, t),
            !1
          );
        case 1:
          if (
            ((e = a.type),
            (s = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (s !== null &&
                  typeof s.componentDidCatch == "function" &&
                  (on === null || !on.has(s)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = od(u)),
              dd(u, t, a, n),
              Ys(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var df = Error(i(461)),
    le = !1;
  function ge(t, e, a, n) {
    e.child = t === null ? p0(e, null, a, n) : Vn(e, t.child, a, n);
  }
  function hd(t, e, a, n, u) {
    a = a.render;
    var s = e.ref;
    if ("ref" in n) {
      var d = {};
      for (var _ in n) _ !== "ref" && (d[_] = n[_]);
    } else d = n;
    return (
      Ln(e),
      (n = Zs(t, e, a, d, s, u)),
      (_ = Ks()),
      t !== null && !le
        ? (Js(t, e, u), Ua(t, e, u))
        : (zt && _ && js(e), (e.flags |= 1), ge(t, e, n, u), e.child)
    );
  }
  function md(t, e, a, n, u) {
    if (t === null) {
      var s = a.type;
      return typeof s == "function" &&
        !zs(s) &&
        s.defaultProps === void 0 &&
        a.compare === null
        ? ((e.tag = 15), (e.type = s), gd(t, e, s, n, u))
        : ((t = wu(a.type, null, n, e, e.mode, u)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((s = t.child), !bf(t, u))) {
      var d = s.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : pi), a(d, n) && t.ref === e.ref)
      )
        return Ua(t, e, u);
    }
    return (
      (e.flags |= 1),
      (t = Ra(s, n)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function gd(t, e, a, n, u) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (pi(s, n) && t.ref === e.ref)
        if (((le = !1), (e.pendingProps = n = s), bf(t, u)))
          (t.flags & 131072) !== 0 && (le = !0);
        else return ((e.lanes = t.lanes), Ua(t, e, u));
    }
    return hf(t, e, a, n, u);
  }
  function pd(t, e, a, n) {
    var u = n.children,
      s = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((s = s !== null ? s.baseLanes | a : a), t !== null)) {
          for (n = e.child = t.child, u = 0; n !== null;)
            ((u = u | n.lanes | n.childLanes), (n = n.sibling));
          n = u & ~s;
        } else ((n = 0), (e.child = null));
        return yd(t, e, s, a, n);
      }
      if ((a & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ku(e, s !== null ? s.cachePool : null),
          s !== null ? _0(e, s) : Xs(),
          b0(e));
      else
        return (
          (n = e.lanes = 536870912),
          yd(t, e, s !== null ? s.baseLanes | a : a, a, n)
        );
    } else
      s !== null
        ? (ku(e, s.cachePool), _0(e, s), rn(), (e.memoizedState = null))
        : (t !== null && ku(e, null), Xs(), rn());
    return (ge(t, e, u, a), e.child);
  }
  function Ci(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function yd(t, e, a, n, u) {
    var s = Us();
    return (
      (s = s === null ? null : { parent: ae._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: a, cachePool: s }),
      t !== null && ku(e, null),
      Xs(),
      b0(e),
      t !== null && Tl(t, e, n, !0),
      (e.childLanes = u),
      null
    );
  }
  function Pu(t, e) {
    return (
      (e = er({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function vd(t, e, a) {
    return (
      Vn(e, t.child, null, a),
      (t = Pu(e, e.pendingProps)),
      (t.flags |= 2),
      Qe(e),
      (e.memoizedState = null),
      t
    );
  }
  function Wg(t, e, a) {
    var n = e.pendingProps,
      u = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (zt) {
        if (n.mode === "hidden")
          return ((t = Pu(e, n)), (e.lanes = 536870912), Ci(null, t));
        if (
          (Qs(e),
          (t = Xt)
            ? ((t = Rh(t, sa)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Ia !== null ? { id: _a, overflow: ba } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = e0(t)),
                (a.return = e),
                (e.child = a),
                (he = e),
                (Xt = null)))
            : (t = null),
          t === null)
        )
          throw tn(e);
        return ((e.lanes = 536870912), null);
      }
      return Pu(e, n);
    }
    var s = t.memoizedState;
    if (s !== null) {
      var d = s.dehydrated;
      if ((Qs(e), u))
        if (e.flags & 256) ((e.flags &= -257), (e = vd(t, e, a)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(i(558));
      else if (
        (le || Tl(t, e, a, !1), (u = (a & t.childLanes) !== 0), le || u)
      ) {
        if (
          ((n = Ht),
          n !== null && ((d = ro(n, a)), d !== 0 && d !== s.retryLane))
        )
          throw ((s.retryLane = d), kn(t, d), Ce(n, t, d), df);
        (cr(), (e = vd(t, e, a)));
      } else
        ((t = s.treeContext),
          (Xt = ca(d.nextSibling)),
          (he = e),
          (zt = !0),
          (Pa = null),
          (sa = !1),
          t !== null && l0(e, t),
          (e = Pu(e, n)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = Ra(t.child, { mode: n.mode, children: n.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function tr(t, e) {
    var a = e.ref;
    if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(i(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function hf(t, e, a, n, u) {
    return (
      Ln(e),
      (a = Zs(t, e, a, n, void 0, u)),
      (n = Ks()),
      t !== null && !le
        ? (Js(t, e, u), Ua(t, e, u))
        : (zt && n && js(e), (e.flags |= 1), ge(t, e, a, u), e.child)
    );
  }
  function _d(t, e, a, n, u, s) {
    return (
      Ln(e),
      (e.updateQueue = null),
      (a = S0(e, n, a, u)),
      x0(t),
      (n = Ks()),
      t !== null && !le
        ? (Js(t, e, s), Ua(t, e, s))
        : (zt && n && js(e), (e.flags |= 1), ge(t, e, a, s), e.child)
    );
  }
  function bd(t, e, a, n, u) {
    if ((Ln(e), e.stateNode === null)) {
      var s = _l,
        d = a.contextType;
      (typeof d == "object" && d !== null && (s = me(d)),
        (s = new a(n, s)),
        (e.memoizedState =
          s.state !== null && s.state !== void 0 ? s.state : null),
        (s.updater = cf),
        (e.stateNode = s),
        (s._reactInternals = e),
        (s = e.stateNode),
        (s.props = n),
        (s.state = e.memoizedState),
        (s.refs = {}),
        Hs(e),
        (d = a.contextType),
        (s.context = typeof d == "object" && d !== null ? me(d) : _l),
        (s.state = e.memoizedState),
        (d = a.getDerivedStateFromProps),
        typeof d == "function" && (ff(e, a, d, n), (s.state = e.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function" ||
          (typeof s.UNSAFE_componentWillMount != "function" &&
            typeof s.componentWillMount != "function") ||
          ((d = s.state),
          typeof s.componentWillMount == "function" && s.componentWillMount(),
          typeof s.UNSAFE_componentWillMount == "function" &&
            s.UNSAFE_componentWillMount(),
          d !== s.state && cf.enqueueReplaceState(s, s.state, null),
          Ei(e, n, s, u),
          Mi(),
          (s.state = e.memoizedState)),
        typeof s.componentDidMount == "function" && (e.flags |= 4194308),
        (n = !0));
    } else if (t === null) {
      s = e.stateNode;
      var _ = e.memoizedProps,
        z = Kn(a, _);
      s.props = z;
      var w = s.context,
        H = a.contextType;
      ((d = _l), typeof H == "object" && H !== null && (d = me(H)));
      var G = a.getDerivedStateFromProps;
      ((H =
        typeof G == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function"),
        (_ = e.pendingProps !== _),
        H ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((_ || w !== d) && ud(e, s, n, d)),
        (an = !1));
      var N = e.memoizedState;
      ((s.state = N),
        Ei(e, n, s, u),
        Mi(),
        (w = e.memoizedState),
        _ || N !== w || an
          ? (typeof G == "function" && (ff(e, a, G, n), (w = e.memoizedState)),
            (z = an || id(e, a, z, n, N, w, d))
              ? (H ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = n),
                (e.memoizedState = w)),
            (s.props = n),
            (s.state = w),
            (s.context = d),
            (n = z))
          : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
            (n = !1)));
    } else {
      ((s = e.stateNode),
        qs(t, e),
        (d = e.memoizedProps),
        (H = Kn(a, d)),
        (s.props = H),
        (G = e.pendingProps),
        (N = s.context),
        (w = a.contextType),
        (z = _l),
        typeof w == "object" && w !== null && (z = me(w)),
        (_ = a.getDerivedStateFromProps),
        (w =
          typeof _ == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function") ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((d !== G || N !== z) && ud(e, s, n, z)),
        (an = !1),
        (N = e.memoizedState),
        (s.state = N),
        Ei(e, n, s, u),
        Mi());
      var U = e.memoizedState;
      d !== G ||
      N !== U ||
      an ||
      (t !== null && t.dependencies !== null && Bu(t.dependencies))
        ? (typeof _ == "function" && (ff(e, a, _, n), (U = e.memoizedState)),
          (H =
            an ||
            id(e, a, H, n, N, U, z) ||
            (t !== null && t.dependencies !== null && Bu(t.dependencies)))
            ? (w ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(n, U, z),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(n, U, z)),
              typeof s.componentDidUpdate == "function" && (e.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (d === t.memoizedProps && N === t.memoizedState) ||
                (e.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (d === t.memoizedProps && N === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = n),
              (e.memoizedState = U)),
          (s.props = n),
          (s.state = U),
          (s.context = z),
          (n = H))
        : (typeof s.componentDidUpdate != "function" ||
            (d === t.memoizedProps && N === t.memoizedState) ||
            (e.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (d === t.memoizedProps && N === t.memoizedState) ||
            (e.flags |= 1024),
          (n = !1));
    }
    return (
      (s = n),
      tr(t, e),
      (n = (e.flags & 128) !== 0),
      s || n
        ? ((s = e.stateNode),
          (a =
            n && typeof a.getDerivedStateFromError != "function"
              ? null
              : s.render()),
          (e.flags |= 1),
          t !== null && n
            ? ((e.child = Vn(e, t.child, null, u)),
              (e.child = Vn(e, null, a, u)))
            : ge(t, e, a, u),
          (e.memoizedState = s.state),
          (t = e.child))
        : (t = Ua(t, e, u)),
      t
    );
  }
  function xd(t, e, a, n) {
    return (qn(), (e.flags |= 256), ge(t, e, a, n), e.child);
  }
  var mf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function gf(t) {
    return { baseLanes: t, cachePool: c0() };
  }
  function pf(t, e, a) {
    return ((t = t !== null ? t.childLanes & ~a : 0), e && (t |= Ze), t);
  }
  function Sd(t, e, a) {
    var n = e.pendingProps,
      u = !1,
      s = (e.flags & 128) !== 0,
      d;
    if (
      ((d = s) ||
        (d =
          t !== null && t.memoizedState === null ? !1 : (It.current & 2) !== 0),
      d && ((u = !0), (e.flags &= -129)),
      (d = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (zt) {
        if (
          (u ? un(e) : rn(),
          (t = Xt)
            ? ((t = Rh(t, sa)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Ia !== null ? { id: _a, overflow: ba } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = e0(t)),
                (a.return = e),
                (e.child = a),
                (he = e),
                (Xt = null)))
            : (t = null),
          t === null)
        )
          throw tn(e);
        return (If(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var _ = n.children;
      return (
        (n = n.fallback),
        u
          ? (rn(),
            (u = e.mode),
            (_ = er({ mode: "hidden", children: _ }, u)),
            (n = Hn(n, u, a, null)),
            (_.return = e),
            (n.return = e),
            (_.sibling = n),
            (e.child = _),
            (n = e.child),
            (n.memoizedState = gf(a)),
            (n.childLanes = pf(t, d, a)),
            (e.memoizedState = mf),
            Ci(null, n))
          : (un(e), yf(e, _))
      );
    }
    var z = t.memoizedState;
    if (z !== null && ((_ = z.dehydrated), _ !== null)) {
      if (s)
        e.flags & 256
          ? (un(e), (e.flags &= -257), (e = vf(t, e, a)))
          : e.memoizedState !== null
            ? (rn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (rn(),
              (_ = n.fallback),
              (u = e.mode),
              (n = er({ mode: "visible", children: n.children }, u)),
              (_ = Hn(_, u, a, null)),
              (_.flags |= 2),
              (n.return = e),
              (_.return = e),
              (n.sibling = _),
              (e.child = n),
              Vn(e, t.child, null, a),
              (n = e.child),
              (n.memoizedState = gf(a)),
              (n.childLanes = pf(t, d, a)),
              (e.memoizedState = mf),
              (e = Ci(null, n)));
      else if ((un(e), If(_))) {
        if (((d = _.nextSibling && _.nextSibling.dataset), d)) var w = d.dgst;
        ((d = w),
          (n = Error(i(419))),
          (n.stack = ""),
          (n.digest = d),
          _i({ value: n, source: null, stack: null }),
          (e = vf(t, e, a)));
      } else if (
        (le || Tl(t, e, a, !1), (d = (a & t.childLanes) !== 0), le || d)
      ) {
        if (
          ((d = Ht),
          d !== null && ((n = ro(d, a)), n !== 0 && n !== z.retryLane))
        )
          throw ((z.retryLane = n), kn(t, n), Ce(d, t, n), df);
        ($f(_) || cr(), (e = vf(t, e, a)));
      } else
        $f(_)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = z.treeContext),
            (Xt = ca(_.nextSibling)),
            (he = e),
            (zt = !0),
            (Pa = null),
            (sa = !1),
            t !== null && l0(e, t),
            (e = yf(e, n.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (rn(),
        (_ = n.fallback),
        (u = e.mode),
        (z = t.child),
        (w = z.sibling),
        (n = Ra(z, { mode: "hidden", children: n.children })),
        (n.subtreeFlags = z.subtreeFlags & 65011712),
        w !== null ? (_ = Ra(w, _)) : ((_ = Hn(_, u, a, null)), (_.flags |= 2)),
        (_.return = e),
        (n.return = e),
        (n.sibling = _),
        (e.child = n),
        Ci(null, n),
        (n = e.child),
        (_ = t.child.memoizedState),
        _ === null
          ? (_ = gf(a))
          : ((u = _.cachePool),
            u !== null
              ? ((z = ae._currentValue),
                (u = u.parent !== z ? { parent: z, pool: z } : u))
              : (u = c0()),
            (_ = { baseLanes: _.baseLanes | a, cachePool: u })),
        (n.memoizedState = _),
        (n.childLanes = pf(t, d, a)),
        (e.memoizedState = mf),
        Ci(t.child, n))
      : (un(e),
        (a = t.child),
        (t = a.sibling),
        (a = Ra(a, { mode: "visible", children: n.children })),
        (a.return = e),
        (a.sibling = null),
        t !== null &&
          ((d = e.deletions),
          d === null ? ((e.deletions = [t]), (e.flags |= 16)) : d.push(t)),
        (e.child = a),
        (e.memoizedState = null),
        a);
  }
  function yf(t, e) {
    return (
      (e = er({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function er(t, e) {
    return ((t = Xe(22, t, null, e)), (t.lanes = 0), t);
  }
  function vf(t, e, a) {
    return (
      Vn(e, t.child, null, a),
      (t = yf(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Td(t, e, a) {
    t.lanes |= e;
    var n = t.alternate;
    (n !== null && (n.lanes |= e), Ds(t.return, e, a));
  }
  function _f(t, e, a, n, u, s) {
    var d = t.memoizedState;
    d === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: a,
          tailMode: u,
          treeForkCount: s,
        })
      : ((d.isBackwards = e),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = n),
        (d.tail = a),
        (d.tailMode = u),
        (d.treeForkCount = s));
  }
  function zd(t, e, a) {
    var n = e.pendingProps,
      u = n.revealOrder,
      s = n.tail;
    n = n.children;
    var d = It.current,
      _ = (d & 2) !== 0;
    if (
      (_ ? ((d = (d & 1) | 2), (e.flags |= 128)) : (d &= 1),
      L(It, d),
      ge(t, e, n, a),
      (n = zt ? vi : 0),
      !_ && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null;) {
        if (t.tag === 13) t.memoizedState !== null && Td(t, a, e);
        else if (t.tag === 19) Td(t, a, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (u) {
      case "forwards":
        for (a = e.child, u = null; a !== null;)
          ((t = a.alternate),
            t !== null && Gu(t) === null && (u = a),
            (a = a.sibling));
        ((a = u),
          a === null
            ? ((u = e.child), (e.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          _f(e, !1, u, a, s, n));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = e.child, e.child = null; u !== null;) {
          if (((t = u.alternate), t !== null && Gu(t) === null)) {
            e.child = u;
            break;
          }
          ((t = u.sibling), (u.sibling = a), (a = u), (u = t));
        }
        _f(e, !0, a, null, s, n);
        break;
      case "together":
        _f(e, !1, null, null, void 0, n);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Ua(t, e, a) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (cn |= e.lanes),
      (a & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Tl(t, e, a, !1), (a & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(i(153));
    if (e.child !== null) {
      for (
        t = e.child, a = Ra(t, t.pendingProps), e.child = a, a.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (a = a.sibling = Ra(t, t.pendingProps)),
          (a.return = e));
      a.sibling = null;
    }
    return e.child;
  }
  function bf(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Bu(t)));
  }
  function $g(t, e, a) {
    switch (e.tag) {
      case 3:
        (rt(e, e.stateNode.containerInfo),
          en(e, ae, t.memoizedState.cache),
          qn());
        break;
      case 27:
      case 5:
        Nt(e);
        break;
      case 4:
        rt(e, e.stateNode.containerInfo);
        break;
      case 10:
        en(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Qs(e), null);
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null
            ? (un(e), (e.flags |= 128), null)
            : (a & e.child.childLanes) !== 0
              ? Sd(t, e, a)
              : (un(e), (t = Ua(t, e, a)), t !== null ? t.sibling : null);
        un(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((n = (a & e.childLanes) !== 0),
          n || (Tl(t, e, a, !1), (n = (a & e.childLanes) !== 0)),
          u)
        ) {
          if (n) return zd(t, e, a);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          L(It, It.current),
          n)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), pd(t, e, a, e.pendingProps));
      case 24:
        en(e, ae, t.memoizedState.cache);
    }
    return Ua(t, e, a);
  }
  function Md(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) le = !0;
      else {
        if (!bf(t, a) && (e.flags & 128) === 0) return ((le = !1), $g(t, e, a));
        le = (t.flags & 131072) !== 0;
      }
    else ((le = !1), zt && (e.flags & 1048576) !== 0 && n0(e, vi, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (((t = Gn(e.elementType)), (e.type = t), typeof t == "function"))
            zs(t)
              ? ((n = Kn(t, n)), (e.tag = 1), (e = bd(null, e, t, n, a)))
              : ((e.tag = 0), (e = hf(null, e, t, n, a)));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === K) {
                ((e.tag = 11), (e = hd(null, e, t, n, a)));
                break t;
              } else if (u === Y) {
                ((e.tag = 14), (e = md(null, e, t, n, a)));
                break t;
              }
            }
            throw ((e = vt(t) || t), Error(i(306, e, "")));
          }
        }
        return e;
      case 0:
        return hf(t, e, e.type, e.pendingProps, a);
      case 1:
        return ((n = e.type), (u = Kn(n, e.pendingProps)), bd(t, e, n, u, a));
      case 3:
        t: {
          if ((rt(e, e.stateNode.containerInfo), t === null))
            throw Error(i(387));
          n = e.pendingProps;
          var s = e.memoizedState;
          ((u = s.element), qs(t, e), Ei(e, n, null, a));
          var d = e.memoizedState;
          if (
            ((n = d.cache),
            en(e, ae, n),
            n !== s.cache && ws(e, [ae], a, !0),
            Mi(),
            (n = d.element),
            s.isDehydrated)
          )
            if (
              ((s = { element: n, isDehydrated: !1, cache: d.cache }),
              (e.updateQueue.baseState = s),
              (e.memoizedState = s),
              e.flags & 256)
            ) {
              e = xd(t, e, n, a);
              break t;
            } else if (n !== u) {
              ((u = ia(Error(i(424)), e)), _i(u), (e = xd(t, e, n, a)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Xt = ca(t.firstChild),
                  he = e,
                  zt = !0,
                  Pa = null,
                  sa = !0,
                  a = p0(e, null, n, a),
                  e.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((qn(), n === u)) {
              e = Ua(t, e, a);
              break t;
            }
            ge(t, e, n, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          tr(t, e),
          t === null
            ? (a = Uh(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = a)
              : zt ||
                ((a = e.type),
                (t = e.pendingProps),
                (n = yr(at.current).createElement(a)),
                (n[de] = e),
                (n[Me] = t),
                pe(n, a, t),
                fe(n),
                (e.stateNode = n))
            : (e.memoizedState = Uh(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Nt(e),
          t === null &&
            zt &&
            ((n = e.stateNode = wh(e.type, e.pendingProps, at.current)),
            (he = e),
            (sa = !0),
            (u = Xt),
            gn(e.type) ? ((Pf = u), (Xt = ca(n.firstChild))) : (Xt = u)),
          ge(t, e, e.pendingProps.children, a),
          tr(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            zt &&
            ((u = n = Xt) &&
              ((n = jp(n, e.type, e.pendingProps, sa)),
              n !== null
                ? ((e.stateNode = n),
                  (he = e),
                  (Xt = ca(n.firstChild)),
                  (sa = !1),
                  (u = !0))
                : (u = !1)),
            u || tn(e)),
          Nt(e),
          (u = e.type),
          (s = e.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (n = s.children),
          Jf(u, s) ? (n = null) : d !== null && Jf(u, d) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = Zs(t, e, Xg, null, null, a)), (Zi._currentValue = u)),
          tr(t, e),
          ge(t, e, n, a),
          e.child
        );
      case 6:
        return (
          t === null &&
            zt &&
            ((t = a = Xt) &&
              ((a = Ap(a, e.pendingProps, sa)),
              a !== null
                ? ((e.stateNode = a), (he = e), (Xt = null), (t = !0))
                : (t = !1)),
            t || tn(e)),
          null
        );
      case 13:
        return Sd(t, e, a);
      case 4:
        return (
          rt(e, e.stateNode.containerInfo),
          (n = e.pendingProps),
          t === null ? (e.child = Vn(e, null, n, a)) : ge(t, e, n, a),
          e.child
        );
      case 11:
        return hd(t, e, e.type, e.pendingProps, a);
      case 7:
        return (ge(t, e, e.pendingProps, a), e.child);
      case 8:
        return (ge(t, e, e.pendingProps.children, a), e.child);
      case 12:
        return (ge(t, e, e.pendingProps.children, a), e.child);
      case 10:
        return (
          (n = e.pendingProps),
          en(e, e.type, n.value),
          ge(t, e, n.children, a),
          e.child
        );
      case 9:
        return (
          (u = e.type._context),
          (n = e.pendingProps.children),
          Ln(e),
          (u = me(u)),
          (n = n(u)),
          (e.flags |= 1),
          ge(t, e, n, a),
          e.child
        );
      case 14:
        return md(t, e, e.type, e.pendingProps, a);
      case 15:
        return gd(t, e, e.type, e.pendingProps, a);
      case 19:
        return zd(t, e, a);
      case 31:
        return Wg(t, e, a);
      case 22:
        return pd(t, e, a, e.pendingProps);
      case 24:
        return (
          Ln(e),
          (n = me(ae)),
          t === null
            ? ((u = Us()),
              u === null &&
                ((u = Ht),
                (s = Ns()),
                (u.pooledCache = s),
                s.refCount++,
                s !== null && (u.pooledCacheLanes |= a),
                (u = s)),
              (e.memoizedState = { parent: n, cache: u }),
              Hs(e),
              en(e, ae, u))
            : ((t.lanes & a) !== 0 && (qs(t, e), Ei(e, null, null, a), Mi()),
              (u = t.memoizedState),
              (s = e.memoizedState),
              u.parent !== n
                ? ((u = { parent: n, cache: n }),
                  (e.memoizedState = u),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = u),
                  en(e, ae, n))
                : ((n = s.cache),
                  en(e, ae, n),
                  n !== u.cache && ws(e, [ae], a, !0))),
          ge(t, e, e.pendingProps.children, a),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(i(156, e.tag));
  }
  function ka(t) {
    t.flags |= 4;
  }
  function xf(t, e, a, n, u) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (u & 335544128) === u))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Id()) t.flags |= 8192;
        else throw ((Qn = qu), ks);
    } else t.flags &= -16777217;
  }
  function Ed(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Lh(e)))
      if (Id()) t.flags |= 8192;
      else throw ((Qn = qu), ks);
  }
  function ar(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? lo() : 536870912), (t.lanes |= e), (Bl |= e)));
  }
  function Di(t, e) {
    if (!zt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var a = null; e !== null;)
            (e.alternate !== null && (a = e), (e = e.sibling));
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = t.tail;
          for (var n = null; a !== null;)
            (a.alternate !== null && (n = a), (a = a.sibling));
          n === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function Gt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      n = 0;
    if (e)
      for (var u = t.child; u !== null;)
        ((a |= u.lanes | u.childLanes),
          (n |= u.subtreeFlags & 65011712),
          (n |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling));
    else
      for (u = t.child; u !== null;)
        ((a |= u.lanes | u.childLanes),
          (n |= u.subtreeFlags),
          (n |= u.flags),
          (u.return = t),
          (u = u.sibling));
    return ((t.subtreeFlags |= n), (t.childLanes = a), e);
  }
  function Ig(t, e, a) {
    var n = e.pendingProps;
    switch ((As(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Gt(e), null);
      case 1:
        return (Gt(e), null);
      case 3:
        return (
          (a = e.stateNode),
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          wa(ae),
          ft(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (Sl(e)
              ? ka(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Rs())),
          Gt(e),
          null
        );
      case 26:
        var u = e.type,
          s = e.memoizedState;
        return (
          t === null
            ? (ka(e),
              s !== null ? (Gt(e), Ed(e, s)) : (Gt(e), xf(e, u, null, n, a)))
            : s
              ? s !== t.memoizedState
                ? (ka(e), Gt(e), Ed(e, s))
                : (Gt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== n && ka(e),
                Gt(e),
                xf(e, u, t, n, a)),
          null
        );
      case 27:
        if (
          (Rt(e),
          (a = at.current),
          (u = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== n && ka(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(i(166));
            return (Gt(e), null);
          }
          ((t = Z.current),
            Sl(e) ? i0(e) : ((t = wh(u, n, a)), (e.stateNode = t), ka(e)));
        }
        return (Gt(e), null);
      case 5:
        if ((Rt(e), (u = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== n && ka(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(i(166));
            return (Gt(e), null);
          }
          if (((s = Z.current), Sl(e))) i0(e);
          else {
            var d = yr(at.current);
            switch (s) {
              case 1:
                s = d.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                s = d.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    s = d.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    s = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((s = d.createElement("div")),
                      (s.innerHTML = "<script><\/script>"),
                      (s = s.removeChild(s.firstChild)));
                    break;
                  case "select":
                    ((s =
                      typeof n.is == "string"
                        ? d.createElement("select", { is: n.is })
                        : d.createElement("select")),
                      n.multiple
                        ? (s.multiple = !0)
                        : n.size && (s.size = n.size));
                    break;
                  default:
                    s =
                      typeof n.is == "string"
                        ? d.createElement(u, { is: n.is })
                        : d.createElement(u);
                }
            }
            ((s[de] = e), (s[Me] = n));
            t: for (d = e.child; d !== null;) {
              if (d.tag === 5 || d.tag === 6) s.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                ((d.child.return = d), (d = d.child));
                continue;
              }
              if (d === e) break t;
              for (; d.sibling === null;) {
                if (d.return === null || d.return === e) break t;
                d = d.return;
              }
              ((d.sibling.return = d.return), (d = d.sibling));
            }
            e.stateNode = s;
            t: switch ((pe(s, u, n), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break t;
              case "img":
                n = !0;
                break t;
              default:
                n = !1;
            }
            n && ka(e);
          }
        }
        return (
          Gt(e),
          xf(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, a),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== n && ka(e);
        else {
          if (typeof n != "string" && e.stateNode === null) throw Error(i(166));
          if (((t = at.current), Sl(e))) {
            if (
              ((t = e.stateNode),
              (a = e.memoizedProps),
              (n = null),
              (u = he),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  n = u.memoizedProps;
              }
            ((t[de] = e),
              (t = !!(
                t.nodeValue === a ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                Sh(t.nodeValue, a)
              )),
              t || tn(e, !0));
          } else
            ((t = yr(t).createTextNode(n)), (t[de] = e), (e.stateNode = t));
        }
        return (Gt(e), null);
      case 31:
        if (((a = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((n = Sl(e)), a !== null)) {
            if (t === null) {
              if (!n) throw Error(i(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(i(557));
              t[de] = e;
            } else
              (qn(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Gt(e), (t = !1));
          } else
            ((a = Rs()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = a),
              (t = !0));
          if (!t) return e.flags & 256 ? (Qe(e), e) : (Qe(e), null);
          if ((e.flags & 128) !== 0) throw Error(i(558));
        }
        return (Gt(e), null);
      case 13:
        if (
          ((n = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = Sl(e)), n !== null && n.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(i(318));
              if (
                ((u = e.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(i(317));
              u[de] = e;
            } else
              (qn(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Gt(e), (u = !1));
          } else
            ((u = Rs()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return e.flags & 256 ? (Qe(e), e) : (Qe(e), null);
        }
        return (
          Qe(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = a), e)
            : ((a = n !== null),
              (t = t !== null && t.memoizedState !== null),
              a &&
                ((n = e.child),
                (u = null),
                n.alternate !== null &&
                  n.alternate.memoizedState !== null &&
                  n.alternate.memoizedState.cachePool !== null &&
                  (u = n.alternate.memoizedState.cachePool.pool),
                (s = null),
                n.memoizedState !== null &&
                  n.memoizedState.cachePool !== null &&
                  (s = n.memoizedState.cachePool.pool),
                s !== u && (n.flags |= 2048)),
              a !== t && a && (e.child.flags |= 8192),
              ar(e, e.updateQueue),
              Gt(e),
              null)
        );
      case 4:
        return (ft(), t === null && Gf(e.stateNode.containerInfo), Gt(e), null);
      case 10:
        return (wa(e.type), Gt(e), null);
      case 19:
        if ((R(It), (n = e.memoizedState), n === null)) return (Gt(e), null);
        if (((u = (e.flags & 128) !== 0), (s = n.rendering), s === null))
          if (u) Di(n, !1);
          else {
            if (Wt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null;) {
                if (((s = Gu(t)), s !== null)) {
                  for (
                    e.flags |= 128,
                      Di(n, !1),
                      t = s.updateQueue,
                      e.updateQueue = t,
                      ar(e, t),
                      e.subtreeFlags = 0,
                      t = a,
                      a = e.child;
                    a !== null;
                  )
                    (t0(a, t), (a = a.sibling));
                  return (
                    L(It, (It.current & 1) | 2),
                    zt && Ca(e, n.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            n.tail !== null &&
              ve() > rr &&
              ((e.flags |= 128), (u = !0), Di(n, !1), (e.lanes = 4194304));
          }
        else {
          if (!u)
            if (((t = Gu(s)), t !== null)) {
              if (
                ((e.flags |= 128),
                (u = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ar(e, t),
                Di(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !s.alternate &&
                  !zt)
              )
                return (Gt(e), null);
            } else
              2 * ve() - n.renderingStartTime > rr &&
                a !== 536870912 &&
                ((e.flags |= 128), (u = !0), Di(n, !1), (e.lanes = 4194304));
          n.isBackwards
            ? ((s.sibling = e.child), (e.child = s))
            : ((t = n.last),
              t !== null ? (t.sibling = s) : (e.child = s),
              (n.last = s));
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = ve()),
            (t.sibling = null),
            (a = It.current),
            L(It, u ? (a & 1) | 2 : a & 1),
            zt && Ca(e, n.treeForkCount),
            t)
          : (Gt(e), null);
      case 22:
      case 23:
        return (
          Qe(e),
          Gs(),
          (n = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== n && (e.flags |= 8192)
            : n && (e.flags |= 8192),
          n
            ? (a & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Gt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Gt(e),
          (a = e.updateQueue),
          a !== null && ar(e, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (n = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          n !== a && (e.flags |= 2048),
          t !== null && R(Xn),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          wa(ae),
          Gt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, e.tag));
  }
  function Pg(t, e) {
    switch ((As(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          wa(ae),
          ft(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Rt(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Qe(e), e.alternate === null)) throw Error(i(340));
          qn();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Qe(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(i(340));
          qn();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (R(It), null);
      case 4:
        return (ft(), null);
      case 10:
        return (wa(e.type), null);
      case 22:
      case 23:
        return (
          Qe(e),
          Gs(),
          t !== null && R(Xn),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (wa(ae), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jd(t, e) {
    switch ((As(e), e.tag)) {
      case 3:
        (wa(ae), ft());
        break;
      case 26:
      case 27:
      case 5:
        Rt(e);
        break;
      case 4:
        ft();
        break;
      case 31:
        e.memoizedState !== null && Qe(e);
        break;
      case 13:
        Qe(e);
        break;
      case 19:
        R(It);
        break;
      case 10:
        wa(e.type);
        break;
      case 22:
      case 23:
        (Qe(e), Gs(), t !== null && R(Xn));
        break;
      case 24:
        wa(ae);
    }
  }
  function wi(t, e) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            n = void 0;
            var s = a.create,
              d = a.inst;
            ((n = s()), (d.destroy = n));
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (_) {
      Dt(e, e.return, _);
    }
  }
  function sn(t, e, a) {
    try {
      var n = e.updateQueue,
        u = n !== null ? n.lastEffect : null;
      if (u !== null) {
        var s = u.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            var d = n.inst,
              _ = d.destroy;
            if (_ !== void 0) {
              ((d.destroy = void 0), (u = e));
              var z = a,
                w = _;
              try {
                w();
              } catch (H) {
                Dt(u, z, H);
              }
            }
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (H) {
      Dt(e, e.return, H);
    }
  }
  function Ad(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        v0(e, a);
      } catch (n) {
        Dt(t, t.return, n);
      }
    }
  }
  function Od(t, e, a) {
    ((a.props = Kn(t.type, t.memoizedProps)), (a.state = t.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (n) {
      Dt(t, e, n);
    }
  }
  function Ni(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof a == "function" ? (t.refCleanup = a(n)) : (a.current = n);
      }
    } catch (u) {
      Dt(t, e, u);
    }
  }
  function xa(t, e) {
    var a = t.ref,
      n = t.refCleanup;
    if (a !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (u) {
          Dt(t, e, u);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          Dt(t, e, u);
        }
      else a.current = null;
  }
  function Rd(t) {
    var e = t.type,
      a = t.memoizedProps,
      n = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && n.focus();
          break t;
        case "img":
          a.src ? (n.src = a.src) : a.srcSet && (n.srcset = a.srcSet);
      }
    } catch (u) {
      Dt(t, t.return, u);
    }
  }
  function Sf(t, e, a) {
    try {
      var n = t.stateNode;
      (xp(n, t.type, a, e), (n[Me] = e));
    } catch (u) {
      Dt(t, t.return, u);
    }
  }
  function Cd(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && gn(t.type)) ||
      t.tag === 4
    );
  }
  function Tf(t) {
    t: for (;;) {
      for (; t.sibling === null;) {
        if (t.return === null || Cd(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && gn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function zf(t, e, a) {
    var n = t.tag;
    if (n === 5 || n === 6)
      ((t = t.stateNode),
        e
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(t, e)
          : ((e =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            e.appendChild(t),
            (a = a._reactRootContainer),
            a != null || e.onclick !== null || (e.onclick = Aa)));
    else if (
      n !== 4 &&
      (n === 27 && gn(t.type) && ((a = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (zf(t, e, a), t = t.sibling; t !== null;)
        (zf(t, e, a), (t = t.sibling));
  }
  function nr(t, e, a) {
    var n = t.tag;
    if (n === 5 || n === 6)
      ((t = t.stateNode), e ? a.insertBefore(t, e) : a.appendChild(t));
    else if (
      n !== 4 &&
      (n === 27 && gn(t.type) && (a = t.stateNode), (t = t.child), t !== null)
    )
      for (nr(t, e, a), t = t.sibling; t !== null;)
        (nr(t, e, a), (t = t.sibling));
  }
  function Dd(t) {
    var e = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var n = t.type, u = e.attributes; u.length;)
        e.removeAttributeNode(u[0]);
      (pe(e, n, a), (e[de] = t), (e[Me] = a));
    } catch (s) {
      Dt(t, t.return, s);
    }
  }
  var Ha = !1,
    ie = !1,
    Mf = !1,
    wd = typeof WeakSet == "function" ? WeakSet : Set,
    ce = null;
  function tp(t, e) {
    if (((t = t.containerInfo), (Zf = zr), (t = Vo(t)), ys(t))) {
      if ("selectionStart" in t)
        var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var n = a.getSelection && a.getSelection();
          if (n && n.rangeCount !== 0) {
            a = n.anchorNode;
            var u = n.anchorOffset,
              s = n.focusNode;
            n = n.focusOffset;
            try {
              (a.nodeType, s.nodeType);
            } catch {
              a = null;
              break t;
            }
            var d = 0,
              _ = -1,
              z = -1,
              w = 0,
              H = 0,
              G = t,
              N = null;
            e: for (;;) {
              for (
                var U;
                G !== a || (u !== 0 && G.nodeType !== 3) || (_ = d + u),
                  G !== s || (n !== 0 && G.nodeType !== 3) || (z = d + n),
                  G.nodeType === 3 && (d += G.nodeValue.length),
                  (U = G.firstChild) !== null;
              )
                ((N = G), (G = U));
              for (;;) {
                if (G === t) break e;
                if (
                  (N === a && ++w === u && (_ = d),
                  N === s && ++H === n && (z = d),
                  (U = G.nextSibling) !== null)
                )
                  break;
                ((G = N), (N = G.parentNode));
              }
              G = U;
            }
            a = _ === -1 || z === -1 ? null : { start: _, end: z };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Kf = { focusedElem: t, selectionRange: a }, zr = !1, ce = e;
      ce !== null;
    )
      if (
        ((e = ce), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (ce = t));
      else
        for (; ce !== null;) {
          switch (((e = ce), (s = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (a = 0; a < t.length; a++)
                  ((u = t[a]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && s !== null) {
                ((t = void 0),
                  (a = e),
                  (u = s.memoizedProps),
                  (s = s.memoizedState),
                  (n = a.stateNode));
                try {
                  var nt = Kn(a.type, u);
                  ((t = n.getSnapshotBeforeUpdate(nt, s)),
                    (n.__reactInternalSnapshotBeforeUpdate = t));
                } catch (st) {
                  Dt(a, a.return, st);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (a = t.nodeType), a === 9)
                )
                  Wf(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Wf(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(i(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (ce = t));
            break;
          }
          ce = e.return;
        }
  }
  function Nd(t, e, a) {
    var n = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Ya(t, a), n & 4 && wi(5, a));
        break;
      case 1:
        if ((Ya(t, a), n & 4))
          if (((t = a.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (d) {
              Dt(a, a.return, d);
            }
          else {
            var u = Kn(a.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Dt(a, a.return, d);
            }
          }
        (n & 64 && Ad(a), n & 512 && Ni(a, a.return));
        break;
      case 3:
        if ((Ya(t, a), n & 64 && ((t = a.updateQueue), t !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            v0(t, e);
          } catch (d) {
            Dt(a, a.return, d);
          }
        }
        break;
      case 27:
        e === null && n & 4 && Dd(a);
      case 26:
      case 5:
        (Ya(t, a), e === null && n & 4 && Rd(a), n & 512 && Ni(a, a.return));
        break;
      case 12:
        Ya(t, a);
        break;
      case 31:
        (Ya(t, a), n & 4 && kd(t, a));
        break;
      case 13:
        (Ya(t, a),
          n & 4 && Hd(t, a),
          n & 64 &&
            ((t = a.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((a = fp.bind(null, a)), Op(t, a)))));
        break;
      case 22:
        if (((n = a.memoizedState !== null || Ha), !n)) {
          ((e = (e !== null && e.memoizedState !== null) || ie), (u = Ha));
          var s = ie;
          ((Ha = n),
            (ie = e) && !s ? La(t, a, (a.subtreeFlags & 8772) !== 0) : Ya(t, a),
            (Ha = u),
            (ie = s));
        }
        break;
      case 30:
        break;
      default:
        Ya(t, a);
    }
  }
  function Bd(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Bd(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && ts(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Qt = null,
    je = !1;
  function qa(t, e, a) {
    for (a = a.child; a !== null;) (Ud(t, e, a), (a = a.sibling));
  }
  function Ud(t, e, a) {
    if (qe && typeof qe.onCommitFiberUnmount == "function")
      try {
        qe.onCommitFiberUnmount(Cn, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (ie || xa(a, e),
          qa(t, e, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        ie || xa(a, e);
        var n = Qt,
          u = je;
        (gn(a.type) && ((Qt = a.stateNode), (je = !1)),
          qa(t, e, a),
          Gi(a.stateNode),
          (Qt = n),
          (je = u));
        break;
      case 5:
        ie || xa(a, e);
      case 6:
        if (
          ((n = Qt),
          (u = je),
          (Qt = null),
          qa(t, e, a),
          (Qt = n),
          (je = u),
          Qt !== null)
        )
          if (je)
            try {
              (Qt.nodeType === 9
                ? Qt.body
                : Qt.nodeName === "HTML"
                  ? Qt.ownerDocument.body
                  : Qt
              ).removeChild(a.stateNode);
            } catch (s) {
              Dt(a, e, s);
            }
          else
            try {
              Qt.removeChild(a.stateNode);
            } catch (s) {
              Dt(a, e, s);
            }
        break;
      case 18:
        Qt !== null &&
          (je
            ? ((t = Qt),
              Ah(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                a.stateNode,
              ),
              Gl(t))
            : Ah(Qt, a.stateNode));
        break;
      case 4:
        ((n = Qt),
          (u = je),
          (Qt = a.stateNode.containerInfo),
          (je = !0),
          qa(t, e, a),
          (Qt = n),
          (je = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (sn(2, a, e), ie || sn(4, a, e), qa(t, e, a));
        break;
      case 1:
        (ie ||
          (xa(a, e),
          (n = a.stateNode),
          typeof n.componentWillUnmount == "function" && Od(a, e, n)),
          qa(t, e, a));
        break;
      case 21:
        qa(t, e, a);
        break;
      case 22:
        ((ie = (n = ie) || a.memoizedState !== null), qa(t, e, a), (ie = n));
        break;
      default:
        qa(t, e, a);
    }
  }
  function kd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Gl(t);
      } catch (a) {
        Dt(e, e.return, a);
      }
    }
  }
  function Hd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Gl(t);
      } catch (a) {
        Dt(e, e.return, a);
      }
  }
  function ep(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new wd()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new wd()),
          e
        );
      default:
        throw Error(i(435, t.tag));
    }
  }
  function lr(t, e) {
    var a = ep(t);
    e.forEach(function (n) {
      if (!a.has(n)) {
        a.add(n);
        var u = cp.bind(null, t, n);
        n.then(u, u);
      }
    });
  }
  function Ae(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var u = a[n],
          s = t,
          d = e,
          _ = d;
        t: for (; _ !== null;) {
          switch (_.tag) {
            case 27:
              if (gn(_.type)) {
                ((Qt = _.stateNode), (je = !1));
                break t;
              }
              break;
            case 5:
              ((Qt = _.stateNode), (je = !1));
              break t;
            case 3:
            case 4:
              ((Qt = _.stateNode.containerInfo), (je = !0));
              break t;
          }
          _ = _.return;
        }
        if (Qt === null) throw Error(i(160));
        (Ud(s, d, u),
          (Qt = null),
          (je = !1),
          (s = u.alternate),
          s !== null && (s.return = null),
          (u.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null;) (qd(e, t), (e = e.sibling));
  }
  var ya = null;
  function qd(t, e) {
    var a = t.alternate,
      n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ae(e, t),
          Oe(t),
          n & 4 && (sn(3, t, t.return), wi(3, t), sn(5, t, t.return)));
        break;
      case 1:
        (Ae(e, t),
          Oe(t),
          n & 512 && (ie || a === null || xa(a, a.return)),
          n & 64 &&
            Ha &&
            ((t = t.updateQueue),
            t !== null &&
              ((n = t.callbacks),
              n !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? n : a.concat(n))))));
        break;
      case 26:
        var u = ya;
        if (
          (Ae(e, t),
          Oe(t),
          n & 512 && (ie || a === null || xa(a, a.return)),
          n & 4)
        ) {
          var s = a !== null ? a.memoizedState : null;
          if (((n = t.memoizedState), a === null))
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  ((n = t.type),
                    (a = t.memoizedProps),
                    (u = u.ownerDocument || u));
                  e: switch (n) {
                    case "title":
                      ((s = u.getElementsByTagName("title")[0]),
                        (!s ||
                          s[ri] ||
                          s[de] ||
                          s.namespaceURI === "http://www.w3.org/2000/svg" ||
                          s.hasAttribute("itemprop")) &&
                          ((s = u.createElement(n)),
                          u.head.insertBefore(
                            s,
                            u.querySelector("head > title"),
                          )),
                        pe(s, n, a),
                        (s[de] = t),
                        fe(s),
                        (n = s));
                      break t;
                    case "link":
                      var d = qh("link", "href", u).get(n + (a.href || ""));
                      if (d) {
                        for (var _ = 0; _ < d.length; _++)
                          if (
                            ((s = d[_]),
                            s.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              s.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              s.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              s.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            d.splice(_, 1);
                            break e;
                          }
                      }
                      ((s = u.createElement(n)),
                        pe(s, n, a),
                        u.head.appendChild(s));
                      break;
                    case "meta":
                      if (
                        (d = qh("meta", "content", u).get(
                          n + (a.content || ""),
                        ))
                      ) {
                        for (_ = 0; _ < d.length; _++)
                          if (
                            ((s = d[_]),
                            s.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              s.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              s.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              s.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              s.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            d.splice(_, 1);
                            break e;
                          }
                      }
                      ((s = u.createElement(n)),
                        pe(s, n, a),
                        u.head.appendChild(s));
                      break;
                    default:
                      throw Error(i(468, n));
                  }
                  ((s[de] = t), fe(s), (n = s));
                }
                t.stateNode = n;
              } else Yh(u, t.type, t.stateNode);
            else t.stateNode = Hh(u, n, t.memoizedProps);
          else
            s !== n
              ? (s === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : s.count--,
                n === null
                  ? Yh(u, t.type, t.stateNode)
                  : Hh(u, n, t.memoizedProps))
              : n === null &&
                t.stateNode !== null &&
                Sf(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Ae(e, t),
          Oe(t),
          n & 512 && (ie || a === null || xa(a, a.return)),
          a !== null && n & 4 && Sf(t, t.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (Ae(e, t),
          Oe(t),
          n & 512 && (ie || a === null || xa(a, a.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            dl(u, "");
          } catch (nt) {
            Dt(t, t.return, nt);
          }
        }
        (n & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), Sf(t, u, a !== null ? a.memoizedProps : u)),
          n & 1024 && (Mf = !0));
        break;
      case 6:
        if ((Ae(e, t), Oe(t), n & 4)) {
          if (t.stateNode === null) throw Error(i(162));
          ((n = t.memoizedProps), (a = t.stateNode));
          try {
            a.nodeValue = n;
          } catch (nt) {
            Dt(t, t.return, nt);
          }
        }
        break;
      case 3:
        if (
          ((br = null),
          (u = ya),
          (ya = vr(e.containerInfo)),
          Ae(e, t),
          (ya = u),
          Oe(t),
          n & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Gl(e.containerInfo);
          } catch (nt) {
            Dt(t, t.return, nt);
          }
        Mf && ((Mf = !1), Yd(t));
        break;
      case 4:
        ((n = ya),
          (ya = vr(t.stateNode.containerInfo)),
          Ae(e, t),
          Oe(t),
          (ya = n));
        break;
      case 12:
        (Ae(e, t), Oe(t));
        break;
      case 31:
        (Ae(e, t),
          Oe(t),
          n & 4 &&
            ((n = t.updateQueue),
            n !== null && ((t.updateQueue = null), lr(t, n))));
        break;
      case 13:
        (Ae(e, t),
          Oe(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (ur = ve()),
          n & 4 &&
            ((n = t.updateQueue),
            n !== null && ((t.updateQueue = null), lr(t, n))));
        break;
      case 22:
        u = t.memoizedState !== null;
        var z = a !== null && a.memoizedState !== null,
          w = Ha,
          H = ie;
        if (
          ((Ha = w || u),
          (ie = H || z),
          Ae(e, t),
          (ie = H),
          (Ha = w),
          Oe(t),
          n & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = u ? e._visibility & -2 : e._visibility | 1,
              u && (a === null || z || Ha || ie || Jn(t)),
              a = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                z = a = e;
                try {
                  if (((s = z.stateNode), u))
                    ((d = s.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none"));
                  else {
                    _ = z.stateNode;
                    var G = z.memoizedProps.style,
                      N =
                        G != null && G.hasOwnProperty("display")
                          ? G.display
                          : null;
                    _.style.display =
                      N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (nt) {
                  Dt(z, z.return, nt);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                z = e;
                try {
                  z.stateNode.nodeValue = u ? "" : z.memoizedProps;
                } catch (nt) {
                  Dt(z, z.return, nt);
                }
              }
            } else if (e.tag === 18) {
              if (a === null) {
                z = e;
                try {
                  var U = z.stateNode;
                  u ? Oh(U, !0) : Oh(z.stateNode, !1);
                } catch (nt) {
                  Dt(z, z.return, nt);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null;) {
              if (e.return === null || e.return === t) break t;
              (a === e && (a = null), (e = e.return));
            }
            (a === e && (a = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        n & 4 &&
          ((n = t.updateQueue),
          n !== null &&
            ((a = n.retryQueue),
            a !== null && ((n.retryQueue = null), lr(t, a))));
        break;
      case 19:
        (Ae(e, t),
          Oe(t),
          n & 4 &&
            ((n = t.updateQueue),
            n !== null && ((t.updateQueue = null), lr(t, n))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ae(e, t), Oe(t));
    }
  }
  function Oe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, n = t.return; n !== null;) {
          if (Cd(n)) {
            a = n;
            break;
          }
          n = n.return;
        }
        if (a == null) throw Error(i(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              s = Tf(t);
            nr(t, s, u);
            break;
          case 5:
            var d = a.stateNode;
            a.flags & 32 && (dl(d, ""), (a.flags &= -33));
            var _ = Tf(t);
            nr(t, _, d);
            break;
          case 3:
          case 4:
            var z = a.stateNode.containerInfo,
              w = Tf(t);
            zf(t, w, z);
            break;
          default:
            throw Error(i(161));
        }
      } catch (H) {
        Dt(t, t.return, H);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Yd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null;) {
        var e = t;
        (Yd(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function Ya(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null;) (Nd(t, e.alternate, e), (e = e.sibling));
  }
  function Jn(t) {
    for (t = t.child; t !== null;) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (sn(4, e, e.return), Jn(e));
          break;
        case 1:
          xa(e, e.return);
          var a = e.stateNode;
          (typeof a.componentWillUnmount == "function" && Od(e, e.return, a),
            Jn(e));
          break;
        case 27:
          Gi(e.stateNode);
        case 26:
        case 5:
          (xa(e, e.return), Jn(e));
          break;
        case 22:
          e.memoizedState === null && Jn(e);
          break;
        case 30:
          Jn(e);
          break;
        default:
          Jn(e);
      }
      t = t.sibling;
    }
  }
  function La(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
      var n = e.alternate,
        u = t,
        s = e,
        d = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          (La(u, s, a), wi(4, s));
          break;
        case 1:
          if (
            (La(u, s, a),
            (n = s),
            (u = n.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (w) {
              Dt(n, n.return, w);
            }
          if (((n = s), (u = n.updateQueue), u !== null)) {
            var _ = n.stateNode;
            try {
              var z = u.shared.hiddenCallbacks;
              if (z !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < z.length; u++)
                  y0(z[u], _);
            } catch (w) {
              Dt(n, n.return, w);
            }
          }
          (a && d & 64 && Ad(s), Ni(s, s.return));
          break;
        case 27:
          Dd(s);
        case 26:
        case 5:
          (La(u, s, a), a && n === null && d & 4 && Rd(s), Ni(s, s.return));
          break;
        case 12:
          La(u, s, a);
          break;
        case 31:
          (La(u, s, a), a && d & 4 && kd(u, s));
          break;
        case 13:
          (La(u, s, a), a && d & 4 && Hd(u, s));
          break;
        case 22:
          (s.memoizedState === null && La(u, s, a), Ni(s, s.return));
          break;
        case 30:
          break;
        default:
          La(u, s, a);
      }
      e = e.sibling;
    }
  }
  function Ef(t, e) {
    var a = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && bi(a)));
  }
  function jf(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && bi(t)));
  }
  function va(t, e, a, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) (Ld(t, e, a, n), (e = e.sibling));
  }
  function Ld(t, e, a, n) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (va(t, e, a, n), u & 2048 && wi(9, e));
        break;
      case 1:
        va(t, e, a, n);
        break;
      case 3:
        (va(t, e, a, n),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && bi(t))));
        break;
      case 12:
        if (u & 2048) {
          (va(t, e, a, n), (t = e.stateNode));
          try {
            var s = e.memoizedProps,
              d = s.id,
              _ = s.onPostCommit;
            typeof _ == "function" &&
              _(
                d,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (z) {
            Dt(e, e.return, z);
          }
        } else va(t, e, a, n);
        break;
      case 31:
        va(t, e, a, n);
        break;
      case 13:
        va(t, e, a, n);
        break;
      case 23:
        break;
      case 22:
        ((s = e.stateNode),
          (d = e.alternate),
          e.memoizedState !== null
            ? s._visibility & 2
              ? va(t, e, a, n)
              : Bi(t, e)
            : s._visibility & 2
              ? va(t, e, a, n)
              : ((s._visibility |= 2),
                Dl(t, e, a, n, (e.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Ef(d, e));
        break;
      case 24:
        (va(t, e, a, n), u & 2048 && jf(e.alternate, e));
        break;
      default:
        va(t, e, a, n);
    }
  }
  function Dl(t, e, a, n, u) {
    for (
      u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var s = t,
        d = e,
        _ = a,
        z = n,
        w = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Dl(s, d, _, z, u), wi(8, d));
          break;
        case 23:
          break;
        case 22:
          var H = d.stateNode;
          (d.memoizedState !== null
            ? H._visibility & 2
              ? Dl(s, d, _, z, u)
              : Bi(s, d)
            : ((H._visibility |= 2), Dl(s, d, _, z, u)),
            u && w & 2048 && Ef(d.alternate, d));
          break;
        case 24:
          (Dl(s, d, _, z, u), u && w & 2048 && jf(d.alternate, d));
          break;
        default:
          Dl(s, d, _, z, u);
      }
      e = e.sibling;
    }
  }
  function Bi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) {
        var a = t,
          n = e,
          u = n.flags;
        switch (n.tag) {
          case 22:
            (Bi(a, n), u & 2048 && Ef(n.alternate, n));
            break;
          case 24:
            (Bi(a, n), u & 2048 && jf(n.alternate, n));
            break;
          default:
            Bi(a, n);
        }
        e = e.sibling;
      }
  }
  var Ui = 8192;
  function wl(t, e, a) {
    if (t.subtreeFlags & Ui)
      for (t = t.child; t !== null;) (Xd(t, e, a), (t = t.sibling));
  }
  function Xd(t, e, a) {
    switch (t.tag) {
      case 26:
        (wl(t, e, a),
          t.flags & Ui &&
            t.memoizedState !== null &&
            Lp(a, ya, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        wl(t, e, a);
        break;
      case 3:
      case 4:
        var n = ya;
        ((ya = vr(t.stateNode.containerInfo)), wl(t, e, a), (ya = n));
        break;
      case 22:
        t.memoizedState === null &&
          ((n = t.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Ui), (Ui = 16777216), wl(t, e, a), (Ui = n))
            : wl(t, e, a));
        break;
      default:
        wl(t, e, a);
    }
  }
  function Gd(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function ki(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var n = e[a];
          ((ce = n), Vd(n, t));
        }
      Gd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) (Qd(t), (t = t.sibling));
  }
  function Qd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (ki(t), t.flags & 2048 && sn(9, t, t.return));
        break;
      case 3:
        ki(t);
        break;
      case 12:
        ki(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), ir(t))
          : ki(t);
        break;
      default:
        ki(t);
    }
  }
  function ir(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var n = e[a];
          ((ce = n), Vd(n, t));
        }
      Gd(t);
    }
    for (t = t.child; t !== null;) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (sn(8, e, e.return), ir(e));
          break;
        case 22:
          ((a = e.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), ir(e)));
          break;
        default:
          ir(e);
      }
      t = t.sibling;
    }
  }
  function Vd(t, e) {
    for (; ce !== null;) {
      var a = ce;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          sn(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var n = a.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          bi(a.memoizedState.cache);
      }
      if (((n = a.child), n !== null)) ((n.return = a), (ce = n));
      else
        t: for (a = t; ce !== null;) {
          n = ce;
          var u = n.sibling,
            s = n.return;
          if ((Bd(n), n === a)) {
            ce = null;
            break t;
          }
          if (u !== null) {
            ((u.return = s), (ce = u));
            break t;
          }
          ce = s;
        }
    }
  }
  var ap = {
      getCacheForType: function (t) {
        var e = me(ae),
          a = e.data.get(t);
        return (a === void 0 && ((a = t()), e.data.set(t, a)), a);
      },
      cacheSignal: function () {
        return me(ae).controller.signal;
      },
    },
    np = typeof WeakMap == "function" ? WeakMap : Map,
    Ot = 0,
    Ht = null,
    bt = null,
    St = 0,
    Ct = 0,
    Ve = null,
    fn = !1,
    Nl = !1,
    Af = !1,
    Xa = 0,
    Wt = 0,
    cn = 0,
    Fn = 0,
    Of = 0,
    Ze = 0,
    Bl = 0,
    Hi = null,
    Re = null,
    Rf = !1,
    ur = 0,
    Zd = 0,
    rr = 1 / 0,
    sr = null,
    on = null,
    re = 0,
    dn = null,
    Ul = null,
    Ga = 0,
    Cf = 0,
    Df = null,
    Kd = null,
    qi = 0,
    wf = null;
  function Ke() {
    return (Ot & 2) !== 0 && St !== 0 ? St & -St : B.T !== null ? qf() : so();
  }
  function Jd() {
    if (Ze === 0)
      if ((St & 536870912) === 0 || zt) {
        var t = pu;
        ((pu <<= 1), (pu & 3932160) === 0 && (pu = 262144), (Ze = t));
      } else Ze = 536870912;
    return ((t = Ge.current), t !== null && (t.flags |= 32), Ze);
  }
  function Ce(t, e, a) {
    (((t === Ht && (Ct === 2 || Ct === 9)) || t.cancelPendingCommit !== null) &&
      (kl(t, 0), hn(t, St, Ze, !1)),
      ui(t, a),
      ((Ot & 2) === 0 || t !== Ht) &&
        (t === Ht &&
          ((Ot & 2) === 0 && (Fn |= a), Wt === 4 && hn(t, St, Ze, !1)),
        Sa(t)));
  }
  function Fd(t, e, a) {
    if ((Ot & 6) !== 0) throw Error(i(327));
    var n = (!a && (e & 127) === 0 && (e & t.expiredLanes) === 0) || ii(t, e),
      u = n ? up(t, e) : Bf(t, e, !0),
      s = n;
    do {
      if (u === 0) {
        Nl && !n && hn(t, e, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), s && !lp(a))) {
          ((u = Bf(t, e, !1)), (s = !1));
          continue;
        }
        if (u === 2) {
          if (((s = e), t.errorRecoveryDisabledLanes & s)) var d = 0;
          else
            ((d = t.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            e = d;
            t: {
              var _ = t;
              u = Hi;
              var z = _.current.memoizedState.isDehydrated;
              if ((z && (kl(_, d).flags |= 256), (d = Bf(_, d, !1)), d !== 2)) {
                if (Af && !z) {
                  ((_.errorRecoveryDisabledLanes |= s), (Fn |= s), (u = 4));
                  break t;
                }
                ((s = Re),
                  (Re = u),
                  s !== null &&
                    (Re === null ? (Re = s) : Re.push.apply(Re, s)));
              }
              u = d;
            }
            if (((s = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (kl(t, 0), hn(t, e, 0, !0));
          break;
        }
        t: {
          switch (((n = t), (s = u), s)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              hn(n, e, Ze, !fn);
              break t;
            case 2:
              Re = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((e & 62914560) === e && ((u = ur + 300 - ve()), 10 < u)) {
            if ((hn(n, e, Ze, !fn), vu(n, 0, !0) !== 0)) break t;
            ((Ga = e),
              (n.timeoutHandle = Eh(
                Wd.bind(
                  null,
                  n,
                  a,
                  Re,
                  sr,
                  Rf,
                  e,
                  Ze,
                  Fn,
                  Bl,
                  fn,
                  s,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break t;
          }
          Wd(n, a, Re, sr, Rf, e, Ze, Fn, Bl, fn, s, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Sa(t);
  }
  function Wd(t, e, a, n, u, s, d, _, z, w, H, G, N, U) {
    if (
      ((t.timeoutHandle = -1),
      (G = e.subtreeFlags),
      G & 8192 || (G & 16785408) === 16785408)
    ) {
      ((G = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Aa,
      }),
        Xd(e, s, G));
      var nt =
        (s & 62914560) === s ? ur - ve() : (s & 4194048) === s ? Zd - ve() : 0;
      if (((nt = Xp(G, nt)), nt !== null)) {
        ((Ga = s),
          (t.cancelPendingCommit = nt(
            lh.bind(null, t, e, s, a, n, u, d, _, z, H, G, null, N, U),
          )),
          hn(t, s, d, !w));
        return;
      }
    }
    lh(t, e, s, a, n, u, d, _, z);
  }
  function lp(t) {
    for (var e = t; ;) {
      var a = e.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        e.flags & 16384 &&
        ((a = e.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var n = 0; n < a.length; n++) {
          var u = a[n],
            s = u.getSnapshot;
          u = u.value;
          try {
            if (!Le(s(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = e.child), e.subtreeFlags & 16384 && a !== null))
        ((a.return = e), (e = a));
      else {
        if (e === t) break;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function hn(t, e, a, n) {
    ((e &= ~Of),
      (e &= ~Fn),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      n && (t.warmLanes |= e),
      (n = t.expirationTimes));
    for (var u = e; 0 < u;) {
      var s = 31 - Ye(u),
        d = 1 << s;
      ((n[s] = -1), (u &= ~d));
    }
    a !== 0 && io(t, a, e);
  }
  function fr() {
    return (Ot & 6) === 0 ? (Yi(0), !1) : !0;
  }
  function Nf() {
    if (bt !== null) {
      if (Ct === 0) var t = bt.return;
      else ((t = bt), (Da = Yn = null), Fs(t), (jl = null), (Si = 0), (t = bt));
      for (; t !== null;) (jd(t.alternate, t), (t = t.return));
      bt = null;
    }
  }
  function kl(t, e) {
    var a = t.timeoutHandle;
    (a !== -1 && ((t.timeoutHandle = -1), zp(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      (Ga = 0),
      Nf(),
      (Ht = t),
      (bt = a = Ra(t.current, null)),
      (St = e),
      (Ct = 0),
      (Ve = null),
      (fn = !1),
      (Nl = ii(t, e)),
      (Af = !1),
      (Bl = Ze = Of = Fn = cn = Wt = 0),
      (Re = Hi = null),
      (Rf = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n;) {
        var u = 31 - Ye(n),
          s = 1 << u;
        ((e |= t[u]), (n &= ~s));
      }
    return ((Xa = e), Ru(), a);
  }
  function $d(t, e) {
    ((ht = null),
      (B.H = Ri),
      e === El || e === Hu
        ? ((e = h0()), (Ct = 3))
        : e === ks
          ? ((e = h0()), (Ct = 4))
          : (Ct =
              e === df
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Ve = e),
      bt === null && ((Wt = 1), Iu(t, ia(e, t.current))));
  }
  function Id() {
    var t = Ge.current;
    return t === null
      ? !0
      : (St & 4194048) === St
        ? fa === null
        : (St & 62914560) === St || (St & 536870912) !== 0
          ? t === fa
          : !1;
  }
  function Pd() {
    var t = B.H;
    return ((B.H = Ri), t === null ? Ri : t);
  }
  function th() {
    var t = B.A;
    return ((B.A = ap), t);
  }
  function cr() {
    ((Wt = 4),
      fn || ((St & 4194048) !== St && Ge.current !== null) || (Nl = !0),
      ((cn & 134217727) === 0 && (Fn & 134217727) === 0) ||
        Ht === null ||
        hn(Ht, St, Ze, !1));
  }
  function Bf(t, e, a) {
    var n = Ot;
    Ot |= 2;
    var u = Pd(),
      s = th();
    ((Ht !== t || St !== e) && ((sr = null), kl(t, e)), (e = !1));
    var d = Wt;
    t: do
      try {
        if (Ct !== 0 && bt !== null) {
          var _ = bt,
            z = Ve;
          switch (Ct) {
            case 8:
              (Nf(), (d = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ge.current === null && (e = !0);
              var w = Ct;
              if (((Ct = 0), (Ve = null), Hl(t, _, z, w), a && Nl)) {
                d = 0;
                break t;
              }
              break;
            default:
              ((w = Ct), (Ct = 0), (Ve = null), Hl(t, _, z, w));
          }
        }
        (ip(), (d = Wt));
        break;
      } catch (H) {
        $d(t, H);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Da = Yn = null),
      (Ot = n),
      (B.H = u),
      (B.A = s),
      bt === null && ((Ht = null), (St = 0), Ru()),
      d
    );
  }
  function ip() {
    for (; bt !== null;) eh(bt);
  }
  function up(t, e) {
    var a = Ot;
    Ot |= 2;
    var n = Pd(),
      u = th();
    Ht !== t || St !== e
      ? ((sr = null), (rr = ve() + 500), kl(t, e))
      : (Nl = ii(t, e));
    t: do
      try {
        if (Ct !== 0 && bt !== null) {
          e = bt;
          var s = Ve;
          e: switch (Ct) {
            case 1:
              ((Ct = 0), (Ve = null), Hl(t, e, s, 1));
              break;
            case 2:
            case 9:
              if (o0(s)) {
                ((Ct = 0), (Ve = null), ah(e));
                break;
              }
              ((e = function () {
                ((Ct !== 2 && Ct !== 9) || Ht !== t || (Ct = 7), Sa(t));
              }),
                s.then(e, e));
              break t;
            case 3:
              Ct = 7;
              break t;
            case 4:
              Ct = 5;
              break t;
            case 7:
              o0(s)
                ? ((Ct = 0), (Ve = null), ah(e))
                : ((Ct = 0), (Ve = null), Hl(t, e, s, 7));
              break;
            case 5:
              var d = null;
              switch (bt.tag) {
                case 26:
                  d = bt.memoizedState;
                case 5:
                case 27:
                  var _ = bt;
                  if (d ? Lh(d) : _.stateNode.complete) {
                    ((Ct = 0), (Ve = null));
                    var z = _.sibling;
                    if (z !== null) bt = z;
                    else {
                      var w = _.return;
                      w !== null ? ((bt = w), or(w)) : (bt = null);
                    }
                    break e;
                  }
              }
              ((Ct = 0), (Ve = null), Hl(t, e, s, 5));
              break;
            case 6:
              ((Ct = 0), (Ve = null), Hl(t, e, s, 6));
              break;
            case 8:
              (Nf(), (Wt = 6));
              break t;
            default:
              throw Error(i(462));
          }
        }
        rp();
        break;
      } catch (H) {
        $d(t, H);
      }
    while (!0);
    return (
      (Da = Yn = null),
      (B.H = n),
      (B.A = u),
      (Ot = a),
      bt !== null ? 0 : ((Ht = null), (St = 0), Ru(), Wt)
    );
  }
  function rp() {
    for (; bt !== null && !Zr();) eh(bt);
  }
  function eh(t) {
    var e = Md(t.alternate, t, Xa);
    ((t.memoizedProps = t.pendingProps), e === null ? or(t) : (bt = e));
  }
  function ah(t) {
    var e = t,
      a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = _d(a, e, e.pendingProps, e.type, void 0, St);
        break;
      case 11:
        e = _d(a, e, e.pendingProps, e.type.render, e.ref, St);
        break;
      case 5:
        Fs(e);
      default:
        (jd(a, e), (e = bt = t0(e, Xa)), (e = Md(a, e, Xa)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? or(t) : (bt = e));
  }
  function Hl(t, e, a, n) {
    ((Da = Yn = null), Fs(e), (jl = null), (Si = 0));
    var u = e.return;
    try {
      if (Fg(t, u, e, a, St)) {
        ((Wt = 1), Iu(t, ia(a, t.current)), (bt = null));
        return;
      }
    } catch (s) {
      if (u !== null) throw ((bt = u), s);
      ((Wt = 1), Iu(t, ia(a, t.current)), (bt = null));
      return;
    }
    e.flags & 32768
      ? (zt || n === 1
          ? (t = !0)
          : Nl || (St & 536870912) !== 0
            ? (t = !1)
            : ((fn = t = !0),
              (n === 2 || n === 9 || n === 3 || n === 6) &&
                ((n = Ge.current),
                n !== null && n.tag === 13 && (n.flags |= 16384))),
        nh(e, t))
      : or(e);
  }
  function or(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        nh(e, fn);
        return;
      }
      t = e.return;
      var a = Ig(e.alternate, e, Xa);
      if (a !== null) {
        bt = a;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        bt = e;
        return;
      }
      bt = e = t;
    } while (e !== null);
    Wt === 0 && (Wt = 5);
  }
  function nh(t, e) {
    do {
      var a = Pg(t.alternate, t);
      if (a !== null) {
        ((a.flags &= 32767), (bt = a));
        return;
      }
      if (
        ((a = t.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        bt = t;
        return;
      }
      bt = t = a;
    } while (t !== null);
    ((Wt = 6), (bt = null));
  }
  function lh(t, e, a, n, u, s, d, _, z) {
    t.cancelPendingCommit = null;
    do dr();
    while (re !== 0);
    if ((Ot & 6) !== 0) throw Error(i(327));
    if (e !== null) {
      if (e === t.current) throw Error(i(177));
      if (
        ((s = e.lanes | e.childLanes),
        (s |= Ss),
        Ym(t, a, s, d, _, z),
        t === Ht && ((bt = Ht = null), (St = 0)),
        (Ul = e),
        (dn = t),
        (Ga = a),
        (Cf = s),
        (Df = u),
        (Kd = n),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            op(il, function () {
              return (fh(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (n = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || n)
      ) {
        ((n = B.T), (B.T = null), (u = J.p), (J.p = 2), (d = Ot), (Ot |= 4));
        try {
          tp(t, e, a);
        } finally {
          ((Ot = d), (J.p = u), (B.T = n));
        }
      }
      ((re = 1), ih(), uh(), rh());
    }
  }
  function ih() {
    if (re === 1) {
      re = 0;
      var t = dn,
        e = Ul,
        a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        ((a = B.T), (B.T = null));
        var n = J.p;
        J.p = 2;
        var u = Ot;
        Ot |= 4;
        try {
          qd(e, t);
          var s = Kf,
            d = Vo(t.containerInfo),
            _ = s.focusedElem,
            z = s.selectionRange;
          if (
            d !== _ &&
            _ &&
            _.ownerDocument &&
            Qo(_.ownerDocument.documentElement, _)
          ) {
            if (z !== null && ys(_)) {
              var w = z.start,
                H = z.end;
              if ((H === void 0 && (H = w), "selectionStart" in _))
                ((_.selectionStart = w),
                  (_.selectionEnd = Math.min(H, _.value.length)));
              else {
                var G = _.ownerDocument || document,
                  N = (G && G.defaultView) || window;
                if (N.getSelection) {
                  var U = N.getSelection(),
                    nt = _.textContent.length,
                    st = Math.min(z.start, nt),
                    kt = z.end === void 0 ? st : Math.min(z.end, nt);
                  !U.extend && st > kt && ((d = kt), (kt = st), (st = d));
                  var O = Go(_, st),
                    E = Go(_, kt);
                  if (
                    O &&
                    E &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== O.node ||
                      U.anchorOffset !== O.offset ||
                      U.focusNode !== E.node ||
                      U.focusOffset !== E.offset)
                  ) {
                    var D = G.createRange();
                    (D.setStart(O.node, O.offset),
                      U.removeAllRanges(),
                      st > kt
                        ? (U.addRange(D), U.extend(E.node, E.offset))
                        : (D.setEnd(E.node, E.offset), U.addRange(D)));
                  }
                }
              }
            }
            for (G = [], U = _; (U = U.parentNode);)
              U.nodeType === 1 &&
                G.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (
              typeof _.focus == "function" && _.focus(), _ = 0;
              _ < G.length;
              _++
            ) {
              var X = G[_];
              ((X.element.scrollLeft = X.left), (X.element.scrollTop = X.top));
            }
          }
          ((zr = !!Zf), (Kf = Zf = null));
        } finally {
          ((Ot = u), (J.p = n), (B.T = a));
        }
      }
      ((t.current = e), (re = 2));
    }
  }
  function uh() {
    if (re === 2) {
      re = 0;
      var t = dn,
        e = Ul,
        a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        ((a = B.T), (B.T = null));
        var n = J.p;
        J.p = 2;
        var u = Ot;
        Ot |= 4;
        try {
          Nd(t, e.alternate, e);
        } finally {
          ((Ot = u), (J.p = n), (B.T = a));
        }
      }
      re = 3;
    }
  }
  function rh() {
    if (re === 4 || re === 3) {
      ((re = 0), Kr());
      var t = dn,
        e = Ul,
        a = Ga,
        n = Kd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (re = 5)
        : ((re = 0), (Ul = dn = null), sh(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (on = null),
        Ir(a),
        (e = e.stateNode),
        qe && typeof qe.onCommitFiberRoot == "function")
      )
        try {
          qe.onCommitFiberRoot(Cn, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        ((e = B.T), (u = J.p), (J.p = 2), (B.T = null));
        try {
          for (var s = t.onRecoverableError, d = 0; d < n.length; d++) {
            var _ = n[d];
            s(_.value, { componentStack: _.stack });
          }
        } finally {
          ((B.T = e), (J.p = u));
        }
      }
      ((Ga & 3) !== 0 && dr(),
        Sa(t),
        (u = t.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0
          ? t === wf
            ? qi++
            : ((qi = 0), (wf = t))
          : (qi = 0),
        Yi(0));
    }
  }
  function sh(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), bi(e)));
  }
  function dr() {
    return (ih(), uh(), rh(), fh());
  }
  function fh() {
    if (re !== 5) return !1;
    var t = dn,
      e = Cf;
    Cf = 0;
    var a = Ir(Ga),
      n = B.T,
      u = J.p;
    try {
      ((J.p = 32 > a ? 32 : a), (B.T = null), (a = Df), (Df = null));
      var s = dn,
        d = Ga;
      if (((re = 0), (Ul = dn = null), (Ga = 0), (Ot & 6) !== 0))
        throw Error(i(331));
      var _ = Ot;
      if (
        ((Ot |= 4),
        Qd(s.current),
        Ld(s, s.current, d, a),
        (Ot = _),
        Yi(0, !1),
        qe && typeof qe.onPostCommitFiberRoot == "function")
      )
        try {
          qe.onPostCommitFiberRoot(Cn, s);
        } catch {}
      return !0;
    } finally {
      ((J.p = u), (B.T = n), sh(t, e));
    }
  }
  function ch(t, e, a) {
    ((e = ia(a, e)),
      (e = of(t.stateNode, e, 2)),
      (t = ln(t, e, 2)),
      t !== null && (ui(t, 2), Sa(t)));
  }
  function Dt(t, e, a) {
    if (t.tag === 3) ch(t, t, a);
    else
      for (; e !== null;) {
        if (e.tag === 3) {
          ch(e, t, a);
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (on === null || !on.has(n)))
          ) {
            ((t = ia(a, t)),
              (a = od(2)),
              (n = ln(e, a, 2)),
              n !== null && (dd(a, n, e, t), ui(n, 2), Sa(n)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Uf(t, e, a) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new np();
      var u = new Set();
      n.set(e, u);
    } else ((u = n.get(e)), u === void 0 && ((u = new Set()), n.set(e, u)));
    u.has(a) ||
      ((Af = !0), u.add(a), (t = sp.bind(null, t, e, a)), e.then(t, t));
  }
  function sp(t, e, a) {
    var n = t.pingCache;
    (n !== null && n.delete(e),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      Ht === t &&
        (St & a) === a &&
        (Wt === 4 || (Wt === 3 && (St & 62914560) === St && 300 > ve() - ur)
          ? (Ot & 2) === 0 && kl(t, 0)
          : (Of |= a),
        Bl === St && (Bl = 0)),
      Sa(t));
  }
  function oh(t, e) {
    (e === 0 && (e = lo()), (t = kn(t, e)), t !== null && (ui(t, e), Sa(t)));
  }
  function fp(t) {
    var e = t.memoizedState,
      a = 0;
    (e !== null && (a = e.retryLane), oh(t, a));
  }
  function cp(t, e) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var n = t.stateNode,
          u = t.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    (n !== null && n.delete(e), oh(t, a));
  }
  function op(t, e) {
    return ze(t, e);
  }
  var hr = null,
    ql = null,
    kf = !1,
    mr = !1,
    Hf = !1,
    mn = 0;
  function Sa(t) {
    (t !== ql &&
      t.next === null &&
      (ql === null ? (hr = ql = t) : (ql = ql.next = t)),
      (mr = !0),
      kf || ((kf = !0), hp()));
  }
  function Yi(t, e) {
    if (!Hf && mr) {
      Hf = !0;
      do
        for (var a = !1, n = hr; n !== null;) {
          if (t !== 0) {
            var u = n.pendingLanes;
            if (u === 0) var s = 0;
            else {
              var d = n.suspendedLanes,
                _ = n.pingedLanes;
              ((s = (1 << (31 - Ye(42 | t) + 1)) - 1),
                (s &= u & ~(d & ~_)),
                (s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0));
            }
            s !== 0 && ((a = !0), gh(n, s));
          } else
            ((s = St),
              (s = vu(
                n,
                n === Ht ? s : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
              )),
              (s & 3) === 0 || ii(n, s) || ((a = !0), gh(n, s)));
          n = n.next;
        }
      while (a);
      Hf = !1;
    }
  }
  function dp() {
    dh();
  }
  function dh() {
    mr = kf = !1;
    var t = 0;
    mn !== 0 && Tp() && (t = mn);
    for (var e = ve(), a = null, n = hr; n !== null;) {
      var u = n.next,
        s = hh(n, e);
      (s === 0
        ? ((n.next = null),
          a === null ? (hr = u) : (a.next = u),
          u === null && (ql = a))
        : ((a = n), (t !== 0 || (s & 3) !== 0) && (mr = !0)),
        (n = u));
    }
    ((re !== 0 && re !== 5) || Yi(t), mn !== 0 && (mn = 0));
  }
  function hh(t, e) {
    for (
      var a = t.suspendedLanes,
        n = t.pingedLanes,
        u = t.expirationTimes,
        s = t.pendingLanes & -62914561;
      0 < s;
    ) {
      var d = 31 - Ye(s),
        _ = 1 << d,
        z = u[d];
      (z === -1
        ? ((_ & a) === 0 || (_ & n) !== 0) && (u[d] = qm(_, e))
        : z <= e && (t.expiredLanes |= _),
        (s &= ~_));
    }
    if (
      ((e = Ht),
      (a = St),
      (a = vu(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (n = t.callbackNode),
      a === 0 ||
        (t === e && (Ct === 2 || Ct === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && ei(n),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((a & 3) === 0 || ii(t, a)) {
      if (((e = a & -a), e === t.callbackPriority)) return e;
      switch ((n !== null && ei(n), Ir(a))) {
        case 2:
        case 8:
          a = hu;
          break;
        case 32:
          a = il;
          break;
        case 268435456:
          a = ni;
          break;
        default:
          a = il;
      }
      return (
        (n = mh.bind(null, t)),
        (a = ze(a, n)),
        (t.callbackPriority = e),
        (t.callbackNode = a),
        e
      );
    }
    return (
      n !== null && n !== null && ei(n),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function mh(t, e) {
    if (re !== 0 && re !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var a = t.callbackNode;
    if (dr() && t.callbackNode !== a) return null;
    var n = St;
    return (
      (n = vu(
        t,
        t === Ht ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      n === 0
        ? null
        : (Fd(t, n, e),
          hh(t, ve()),
          t.callbackNode != null && t.callbackNode === a
            ? mh.bind(null, t)
            : null)
    );
  }
  function gh(t, e) {
    if (dr()) return null;
    Fd(t, e, !0);
  }
  function hp() {
    Mp(function () {
      (Ot & 6) !== 0 ? ze(ai, dp) : dh();
    });
  }
  function qf() {
    if (mn === 0) {
      var t = zl;
      (t === 0 && ((t = gu), (gu <<= 1), (gu & 261888) === 0 && (gu = 256)),
        (mn = t));
    }
    return mn;
  }
  function ph(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Su("" + t);
  }
  function yh(t, e) {
    var a = e.ownerDocument.createElement("input");
    return (
      (a.name = e.name),
      (a.value = e.value),
      t.id && a.setAttribute("form", t.id),
      e.parentNode.insertBefore(a, e),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function mp(t, e, a, n, u) {
    if (e === "submit" && a && a.stateNode === u) {
      var s = ph((u[Me] || null).action),
        d = n.submitter;
      d &&
        ((e = (e = d[Me] || null)
          ? ph(e.formAction)
          : d.getAttribute("formAction")),
        e !== null && ((s = e), (d = null)));
      var _ = new Eu("action", "action", null, n, u);
      t.push({
        event: _,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (mn !== 0) {
                  var z = d ? yh(u, d) : new FormData(u);
                  lf(
                    a,
                    { pending: !0, data: z, method: u.method, action: s },
                    null,
                    z,
                  );
                }
              } else
                typeof s == "function" &&
                  (_.preventDefault(),
                  (z = d ? yh(u, d) : new FormData(u)),
                  lf(
                    a,
                    { pending: !0, data: z, method: u.method, action: s },
                    s,
                    z,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Yf = 0; Yf < xs.length; Yf++) {
    var Lf = xs[Yf],
      gp = Lf.toLowerCase(),
      pp = Lf[0].toUpperCase() + Lf.slice(1);
    pa(gp, "on" + pp);
  }
  (pa(Jo, "onAnimationEnd"),
    pa(Fo, "onAnimationIteration"),
    pa(Wo, "onAnimationStart"),
    pa("dblclick", "onDoubleClick"),
    pa("focusin", "onFocus"),
    pa("focusout", "onBlur"),
    pa(Dg, "onTransitionRun"),
    pa(wg, "onTransitionStart"),
    pa(Ng, "onTransitionCancel"),
    pa($o, "onTransitionEnd"),
    cl("onMouseEnter", ["mouseout", "mouseover"]),
    cl("onMouseLeave", ["mouseout", "mouseover"]),
    cl("onPointerEnter", ["pointerout", "pointerover"]),
    cl("onPointerLeave", ["pointerout", "pointerover"]),
    wn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    wn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    wn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    wn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    wn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Li =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    yp = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Li),
    );
  function vh(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var n = t[a],
        u = n.event;
      n = n.listeners;
      t: {
        var s = void 0;
        if (e)
          for (var d = n.length - 1; 0 <= d; d--) {
            var _ = n[d],
              z = _.instance,
              w = _.currentTarget;
            if (((_ = _.listener), z !== s && u.isPropagationStopped()))
              break t;
            ((s = _), (u.currentTarget = w));
            try {
              s(u);
            } catch (H) {
              Ou(H);
            }
            ((u.currentTarget = null), (s = z));
          }
        else
          for (d = 0; d < n.length; d++) {
            if (
              ((_ = n[d]),
              (z = _.instance),
              (w = _.currentTarget),
              (_ = _.listener),
              z !== s && u.isPropagationStopped())
            )
              break t;
            ((s = _), (u.currentTarget = w));
            try {
              s(u);
            } catch (H) {
              Ou(H);
            }
            ((u.currentTarget = null), (s = z));
          }
      }
    }
  }
  function xt(t, e) {
    var a = e[Pr];
    a === void 0 && (a = e[Pr] = new Set());
    var n = t + "__bubble";
    a.has(n) || (_h(e, t, 2, !1), a.add(n));
  }
  function Xf(t, e, a) {
    var n = 0;
    (e && (n |= 4), _h(a, t, n, e));
  }
  var gr = "_reactListening" + Math.random().toString(36).slice(2);
  function Gf(t) {
    if (!t[gr]) {
      ((t[gr] = !0),
        oo.forEach(function (a) {
          a !== "selectionchange" && (yp.has(a) || Xf(a, !1, t), Xf(a, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[gr] || ((e[gr] = !0), Xf("selectionchange", !1, e));
    }
  }
  function _h(t, e, a, n) {
    switch (Jh(e)) {
      case 2:
        var u = Vp;
        break;
      case 8:
        u = Zp;
        break;
      default:
        u = lc;
    }
    ((a = u.bind(null, e, a, t)),
      (u = void 0),
      !ss ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (u = !0),
      n
        ? u !== void 0
          ? t.addEventListener(e, a, { capture: !0, passive: u })
          : t.addEventListener(e, a, !0)
        : u !== void 0
          ? t.addEventListener(e, a, { passive: u })
          : t.addEventListener(e, a, !1));
  }
  function Qf(t, e, a, n, u) {
    var s = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      t: for (;;) {
        if (n === null) return;
        var d = n.tag;
        if (d === 3 || d === 4) {
          var _ = n.stateNode.containerInfo;
          if (_ === u) break;
          if (d === 4)
            for (d = n.return; d !== null;) {
              var z = d.tag;
              if ((z === 3 || z === 4) && d.stateNode.containerInfo === u)
                return;
              d = d.return;
            }
          for (; _ !== null;) {
            if (((d = rl(_)), d === null)) return;
            if (((z = d.tag), z === 5 || z === 6 || z === 26 || z === 27)) {
              n = s = d;
              continue t;
            }
            _ = _.parentNode;
          }
        }
        n = n.return;
      }
    zo(function () {
      var w = s,
        H = us(a),
        G = [];
      t: {
        var N = Io.get(t);
        if (N !== void 0) {
          var U = Eu,
            nt = t;
          switch (t) {
            case "keypress":
              if (zu(a) === 0) break t;
            case "keydown":
            case "keyup":
              U = cg;
              break;
            case "focusin":
              ((nt = "focus"), (U = ds));
              break;
            case "focusout":
              ((nt = "blur"), (U = ds));
              break;
            case "beforeblur":
            case "afterblur":
              U = ds;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = jo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Im;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = hg;
              break;
            case Jo:
            case Fo:
            case Wo:
              U = eg;
              break;
            case $o:
              U = gg;
              break;
            case "scroll":
            case "scrollend":
              U = Wm;
              break;
            case "wheel":
              U = yg;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = ng;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Oo;
              break;
            case "toggle":
            case "beforetoggle":
              U = _g;
          }
          var st = (e & 4) !== 0,
            kt = !st && (t === "scroll" || t === "scrollend"),
            O = st ? (N !== null ? N + "Capture" : null) : N;
          st = [];
          for (var E = w, D; E !== null;) {
            var X = E;
            if (
              ((D = X.stateNode),
              (X = X.tag),
              (X !== 5 && X !== 26 && X !== 27) ||
                D === null ||
                O === null ||
                ((X = fi(E, O)), X != null && st.push(Xi(E, X, D))),
              kt)
            )
              break;
            E = E.return;
          }
          0 < st.length &&
            ((N = new U(N, nt, null, a, H)),
            G.push({ event: N, listeners: st }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((N = t === "mouseover" || t === "pointerover"),
            (U = t === "mouseout" || t === "pointerout"),
            N &&
              a !== is &&
              (nt = a.relatedTarget || a.fromElement) &&
              (rl(nt) || nt[ul]))
          )
            break t;
          if (
            (U || N) &&
            ((N =
              H.window === H
                ? H
                : (N = H.ownerDocument)
                  ? N.defaultView || N.parentWindow
                  : window),
            U
              ? ((nt = a.relatedTarget || a.toElement),
                (U = w),
                (nt = nt ? rl(nt) : null),
                nt !== null &&
                  ((kt = c(nt)),
                  (st = nt.tag),
                  nt !== kt || (st !== 5 && st !== 27 && st !== 6)) &&
                  (nt = null))
              : ((U = null), (nt = w)),
            U !== nt)
          ) {
            if (
              ((st = jo),
              (X = "onMouseLeave"),
              (O = "onMouseEnter"),
              (E = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((st = Oo),
                (X = "onPointerLeave"),
                (O = "onPointerEnter"),
                (E = "pointer")),
              (kt = U == null ? N : si(U)),
              (D = nt == null ? N : si(nt)),
              (N = new st(X, E + "leave", U, a, H)),
              (N.target = kt),
              (N.relatedTarget = D),
              (X = null),
              rl(H) === w &&
                ((st = new st(O, E + "enter", nt, a, H)),
                (st.target = D),
                (st.relatedTarget = kt),
                (X = st)),
              (kt = X),
              U && nt)
            )
              e: {
                for (st = vp, O = U, E = nt, D = 0, X = O; X; X = st(X)) D++;
                X = 0;
                for (var ut = E; ut; ut = st(ut)) X++;
                for (; 0 < D - X;) ((O = st(O)), D--);
                for (; 0 < X - D;) ((E = st(E)), X--);
                for (; D--;) {
                  if (O === E || (E !== null && O === E.alternate)) {
                    st = O;
                    break e;
                  }
                  ((O = st(O)), (E = st(E)));
                }
                st = null;
              }
            else st = null;
            (U !== null && bh(G, N, U, st, !1),
              nt !== null && kt !== null && bh(G, kt, nt, st, !0));
          }
        }
        t: {
          if (
            ((N = w ? si(w) : window),
            (U = N.nodeName && N.nodeName.toLowerCase()),
            U === "select" || (U === "input" && N.type === "file"))
          )
            var jt = ko;
          else if (Bo(N))
            if (Ho) jt = Og;
            else {
              jt = jg;
              var it = Eg;
            }
          else
            ((U = N.nodeName),
              !U ||
              U.toLowerCase() !== "input" ||
              (N.type !== "checkbox" && N.type !== "radio")
                ? w && ls(w.elementType) && (jt = ko)
                : (jt = Ag));
          if (jt && (jt = jt(t, w))) {
            Uo(G, jt, a, H);
            break t;
          }
          (it && it(t, N, w),
            t === "focusout" &&
              w &&
              N.type === "number" &&
              w.memoizedProps.value != null &&
              ns(N, "number", N.value));
        }
        switch (((it = w ? si(w) : window), t)) {
          case "focusin":
            (Bo(it) || it.contentEditable === "true") &&
              ((pl = it), (vs = w), (yi = null));
            break;
          case "focusout":
            yi = vs = pl = null;
            break;
          case "mousedown":
            _s = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((_s = !1), Zo(G, a, H));
            break;
          case "selectionchange":
            if (Cg) break;
          case "keydown":
          case "keyup":
            Zo(G, a, H);
        }
        var gt;
        if (ms)
          t: {
            switch (t) {
              case "compositionstart":
                var Tt = "onCompositionStart";
                break t;
              case "compositionend":
                Tt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Tt = "onCompositionUpdate";
                break t;
            }
            Tt = void 0;
          }
        else
          gl
            ? wo(t, a) && (Tt = "onCompositionEnd")
            : t === "keydown" &&
              a.keyCode === 229 &&
              (Tt = "onCompositionStart");
        (Tt &&
          (Ro &&
            a.locale !== "ko" &&
            (gl || Tt !== "onCompositionStart"
              ? Tt === "onCompositionEnd" && gl && (gt = Mo())
              : (($a = H),
                (fs = "value" in $a ? $a.value : $a.textContent),
                (gl = !0))),
          (it = pr(w, Tt)),
          0 < it.length &&
            ((Tt = new Ao(Tt, t, null, a, H)),
            G.push({ event: Tt, listeners: it }),
            gt
              ? (Tt.data = gt)
              : ((gt = No(a)), gt !== null && (Tt.data = gt)))),
          (gt = xg ? Sg(t, a) : Tg(t, a)) &&
            ((Tt = pr(w, "onBeforeInput")),
            0 < Tt.length &&
              ((it = new Ao("onBeforeInput", "beforeinput", null, a, H)),
              G.push({ event: it, listeners: Tt }),
              (it.data = gt))),
          mp(G, t, w, a, H));
      }
      vh(G, e);
    });
  }
  function Xi(t, e, a) {
    return { instance: t, listener: e, currentTarget: a };
  }
  function pr(t, e) {
    for (var a = e + "Capture", n = []; t !== null;) {
      var u = t,
        s = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          s === null ||
          ((u = fi(t, a)),
          u != null && n.unshift(Xi(t, u, s)),
          (u = fi(t, e)),
          u != null && n.push(Xi(t, u, s))),
        t.tag === 3)
      )
        return n;
      t = t.return;
    }
    return [];
  }
  function vp(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function bh(t, e, a, n, u) {
    for (var s = e._reactName, d = []; a !== null && a !== n;) {
      var _ = a,
        z = _.alternate,
        w = _.stateNode;
      if (((_ = _.tag), z !== null && z === n)) break;
      ((_ !== 5 && _ !== 26 && _ !== 27) ||
        w === null ||
        ((z = w),
        u
          ? ((w = fi(a, s)), w != null && d.unshift(Xi(a, w, z)))
          : u || ((w = fi(a, s)), w != null && d.push(Xi(a, w, z)))),
        (a = a.return));
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var _p = /\r\n?/g,
    bp = /\u0000|\uFFFD/g;
  function xh(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        _p,
        `
`,
      )
      .replace(bp, "");
  }
  function Sh(t, e) {
    return ((e = xh(e)), xh(t) === e);
  }
  function Ut(t, e, a, n, u, s) {
    switch (a) {
      case "children":
        typeof n == "string"
          ? e === "body" || (e === "textarea" && n === "") || dl(t, n)
          : (typeof n == "number" || typeof n == "bigint") &&
            e !== "body" &&
            dl(t, "" + n);
        break;
      case "className":
        bu(t, "class", n);
        break;
      case "tabIndex":
        bu(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        bu(t, a, n);
        break;
      case "style":
        So(t, n, s);
        break;
      case "data":
        if (e !== "object") {
          bu(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "symbol" ||
          typeof n == "boolean"
        ) {
          t.removeAttribute(a);
          break;
        }
        ((n = Su("" + n)), t.setAttribute(a, n));
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof s == "function" &&
            (a === "formAction"
              ? (e !== "input" && Ut(t, e, "name", u.name, u, null),
                Ut(t, e, "formEncType", u.formEncType, u, null),
                Ut(t, e, "formMethod", u.formMethod, u, null),
                Ut(t, e, "formTarget", u.formTarget, u, null))
              : (Ut(t, e, "encType", u.encType, u, null),
                Ut(t, e, "method", u.method, u, null),
                Ut(t, e, "target", u.target, u, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(a);
          break;
        }
        ((n = Su("" + n)), t.setAttribute(a, n));
        break;
      case "onClick":
        n != null && (t.onclick = Aa);
        break;
      case "onScroll":
        n != null && xt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && xt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(i(61));
          if (((a = n.__html), a != null)) {
            if (u.children != null) throw Error(i(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
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
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "boolean" ||
          typeof n == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((a = Su("" + n)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol"
          ? t.setAttribute(a, "" + n)
          : t.removeAttribute(a);
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
        n && typeof n != "function" && typeof n != "symbol"
          ? t.setAttribute(a, "")
          : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        n === !0
          ? t.setAttribute(a, "")
          : n !== !1 &&
              n != null &&
              typeof n != "function" &&
              typeof n != "symbol"
            ? t.setAttribute(a, n)
            : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        !isNaN(n) &&
        1 <= n
          ? t.setAttribute(a, n)
          : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
          ? t.removeAttribute(a)
          : t.setAttribute(a, n);
        break;
      case "popover":
        (xt("beforetoggle", t), xt("toggle", t), _u(t, "popover", n));
        break;
      case "xlinkActuate":
        ja(t, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        ja(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        ja(t, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        ja(t, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        ja(t, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        ja(t, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        ja(t, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        ja(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        ja(t, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        _u(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Jm.get(a) || a), _u(t, a, n));
    }
  }
  function Vf(t, e, a, n, u, s) {
    switch (a) {
      case "style":
        So(t, n, s);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(i(61));
          if (((a = n.__html), a != null)) {
            if (u.children != null) throw Error(i(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof n == "string"
          ? dl(t, n)
          : (typeof n == "number" || typeof n == "bigint") && dl(t, "" + n);
        break;
      case "onScroll":
        n != null && xt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && xt("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = Aa);
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
        if (!ho.hasOwnProperty(a))
          t: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (e = a.slice(2, u ? a.length - 7 : void 0)),
              (s = t[Me] || null),
              (s = s != null ? s[a] : null),
              typeof s == "function" && t.removeEventListener(e, s, u),
              typeof n == "function")
            ) {
              (typeof s != "function" &&
                s !== null &&
                (a in t
                  ? (t[a] = null)
                  : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(e, n, u));
              break t;
            }
            a in t
              ? (t[a] = n)
              : n === !0
                ? t.setAttribute(a, "")
                : _u(t, a, n);
          }
    }
  }
  function pe(t, e, a) {
    switch (e) {
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
        (xt("error", t), xt("load", t));
        var n = !1,
          u = !1,
          s;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var d = a[s];
            if (d != null)
              switch (s) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, e));
                default:
                  Ut(t, e, s, d, a, null);
              }
          }
        (u && Ut(t, e, "srcSet", a.srcSet, a, null),
          n && Ut(t, e, "src", a.src, a, null));
        return;
      case "input":
        xt("invalid", t);
        var _ = (s = d = u = null),
          z = null,
          w = null;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var H = a[n];
            if (H != null)
              switch (n) {
                case "name":
                  u = H;
                  break;
                case "type":
                  d = H;
                  break;
                case "checked":
                  z = H;
                  break;
                case "defaultChecked":
                  w = H;
                  break;
                case "value":
                  s = H;
                  break;
                case "defaultValue":
                  _ = H;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null) throw Error(i(137, e));
                  break;
                default:
                  Ut(t, e, n, H, a, null);
              }
          }
        vo(t, s, _, z, w, d, u, !1);
        return;
      case "select":
        (xt("invalid", t), (n = d = s = null));
        for (u in a)
          if (a.hasOwnProperty(u) && ((_ = a[u]), _ != null))
            switch (u) {
              case "value":
                s = _;
                break;
              case "defaultValue":
                d = _;
                break;
              case "multiple":
                n = _;
              default:
                Ut(t, e, u, _, a, null);
            }
        ((e = s),
          (a = d),
          (t.multiple = !!n),
          e != null ? ol(t, !!n, e, !1) : a != null && ol(t, !!n, a, !0));
        return;
      case "textarea":
        (xt("invalid", t), (s = u = n = null));
        for (d in a)
          if (a.hasOwnProperty(d) && ((_ = a[d]), _ != null))
            switch (d) {
              case "value":
                n = _;
                break;
              case "defaultValue":
                u = _;
                break;
              case "children":
                s = _;
                break;
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(i(91));
                break;
              default:
                Ut(t, e, d, _, a, null);
            }
        bo(t, n, u, s);
        return;
      case "option":
        for (z in a)
          if (a.hasOwnProperty(z) && ((n = a[z]), n != null))
            switch (z) {
              case "selected":
                t.selected =
                  n && typeof n != "function" && typeof n != "symbol";
                break;
              default:
                Ut(t, e, z, n, a, null);
            }
        return;
      case "dialog":
        (xt("beforetoggle", t),
          xt("toggle", t),
          xt("cancel", t),
          xt("close", t));
        break;
      case "iframe":
      case "object":
        xt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Li.length; n++) xt(Li[n], t);
        break;
      case "image":
        (xt("error", t), xt("load", t));
        break;
      case "details":
        xt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (xt("error", t), xt("load", t));
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
        for (w in a)
          if (a.hasOwnProperty(w) && ((n = a[w]), n != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, e));
              default:
                Ut(t, e, w, n, a, null);
            }
        return;
      default:
        if (ls(e)) {
          for (H in a)
            a.hasOwnProperty(H) &&
              ((n = a[H]), n !== void 0 && Vf(t, e, H, n, a, void 0));
          return;
        }
    }
    for (_ in a)
      a.hasOwnProperty(_) && ((n = a[_]), n != null && Ut(t, e, _, n, a, null));
  }
  function xp(t, e, a, n) {
    switch (e) {
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
        var u = null,
          s = null,
          d = null,
          _ = null,
          z = null,
          w = null,
          H = null;
        for (U in a) {
          var G = a[U];
          if (a.hasOwnProperty(U) && G != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                z = G;
              default:
                n.hasOwnProperty(U) || Ut(t, e, U, null, n, G);
            }
        }
        for (var N in n) {
          var U = n[N];
          if (((G = a[N]), n.hasOwnProperty(N) && (U != null || G != null)))
            switch (N) {
              case "type":
                s = U;
                break;
              case "name":
                u = U;
                break;
              case "checked":
                w = U;
                break;
              case "defaultChecked":
                H = U;
                break;
              case "value":
                d = U;
                break;
              case "defaultValue":
                _ = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(i(137, e));
                break;
              default:
                U !== G && Ut(t, e, N, U, n, G);
            }
        }
        as(t, d, _, z, w, H, s, u);
        return;
      case "select":
        U = d = _ = N = null;
        for (s in a)
          if (((z = a[s]), a.hasOwnProperty(s) && z != null))
            switch (s) {
              case "value":
                break;
              case "multiple":
                U = z;
              default:
                n.hasOwnProperty(s) || Ut(t, e, s, null, n, z);
            }
        for (u in n)
          if (
            ((s = n[u]),
            (z = a[u]),
            n.hasOwnProperty(u) && (s != null || z != null))
          )
            switch (u) {
              case "value":
                N = s;
                break;
              case "defaultValue":
                _ = s;
                break;
              case "multiple":
                d = s;
              default:
                s !== z && Ut(t, e, u, s, n, z);
            }
        ((e = _),
          (a = d),
          (n = U),
          N != null
            ? ol(t, !!a, N, !1)
            : !!n != !!a &&
              (e != null ? ol(t, !!a, e, !0) : ol(t, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        U = N = null;
        for (_ in a)
          if (
            ((u = a[_]),
            a.hasOwnProperty(_) && u != null && !n.hasOwnProperty(_))
          )
            switch (_) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ut(t, e, _, null, n, u);
            }
        for (d in n)
          if (
            ((u = n[d]),
            (s = a[d]),
            n.hasOwnProperty(d) && (u != null || s != null))
          )
            switch (d) {
              case "value":
                N = u;
                break;
              case "defaultValue":
                U = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(i(91));
                break;
              default:
                u !== s && Ut(t, e, d, u, n, s);
            }
        _o(t, N, U);
        return;
      case "option":
        for (var nt in a)
          if (
            ((N = a[nt]),
            a.hasOwnProperty(nt) && N != null && !n.hasOwnProperty(nt))
          )
            switch (nt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ut(t, e, nt, null, n, N);
            }
        for (z in n)
          if (
            ((N = n[z]),
            (U = a[z]),
            n.hasOwnProperty(z) && N !== U && (N != null || U != null))
          )
            switch (z) {
              case "selected":
                t.selected =
                  N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                Ut(t, e, z, N, n, U);
            }
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
        for (var st in a)
          ((N = a[st]),
            a.hasOwnProperty(st) &&
              N != null &&
              !n.hasOwnProperty(st) &&
              Ut(t, e, st, null, n, N));
        for (w in n)
          if (
            ((N = n[w]),
            (U = a[w]),
            n.hasOwnProperty(w) && N !== U && (N != null || U != null))
          )
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(i(137, e));
                break;
              default:
                Ut(t, e, w, N, n, U);
            }
        return;
      default:
        if (ls(e)) {
          for (var kt in a)
            ((N = a[kt]),
              a.hasOwnProperty(kt) &&
                N !== void 0 &&
                !n.hasOwnProperty(kt) &&
                Vf(t, e, kt, void 0, n, N));
          for (H in n)
            ((N = n[H]),
              (U = a[H]),
              !n.hasOwnProperty(H) ||
                N === U ||
                (N === void 0 && U === void 0) ||
                Vf(t, e, H, N, n, U));
          return;
        }
    }
    for (var O in a)
      ((N = a[O]),
        a.hasOwnProperty(O) &&
          N != null &&
          !n.hasOwnProperty(O) &&
          Ut(t, e, O, null, n, N));
    for (G in n)
      ((N = n[G]),
        (U = a[G]),
        !n.hasOwnProperty(G) ||
          N === U ||
          (N == null && U == null) ||
          Ut(t, e, G, N, n, U));
  }
  function Th(t) {
    switch (t) {
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
  function Sp() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, a = performance.getEntriesByType("resource"), n = 0;
        n < a.length;
        n++
      ) {
        var u = a[n],
          s = u.transferSize,
          d = u.initiatorType,
          _ = u.duration;
        if (s && _ && Th(d)) {
          for (d = 0, _ = u.responseEnd, n += 1; n < a.length; n++) {
            var z = a[n],
              w = z.startTime;
            if (w > _) break;
            var H = z.transferSize,
              G = z.initiatorType;
            H &&
              Th(G) &&
              ((z = z.responseEnd), (d += H * (z < _ ? 1 : (_ - w) / (z - w))));
          }
          if ((--n, (e += (8 * (s + d)) / (u.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Zf = null,
    Kf = null;
  function yr(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function zh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Mh(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Jf(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ff = null;
  function Tp() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Ff
        ? !1
        : ((Ff = t), !0)
      : ((Ff = null), !1);
  }
  var Eh = typeof setTimeout == "function" ? setTimeout : void 0,
    zp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    jh = typeof Promise == "function" ? Promise : void 0,
    Mp =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof jh < "u"
          ? function (t) {
              return jh.resolve(null).then(t).catch(Ep);
            }
          : Eh;
  function Ep(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function gn(t) {
    return t === "head";
  }
  function Ah(t, e) {
    var a = e,
      n = 0;
    do {
      var u = a.nextSibling;
      if ((t.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$" || a === "/&")) {
          if (n === 0) {
            (t.removeChild(u), Gl(e));
            return;
          }
          n--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          n++;
        else if (a === "html") Gi(t.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = t.ownerDocument.head), Gi(a));
          for (var s = a.firstChild; s;) {
            var d = s.nextSibling,
              _ = s.nodeName;
            (s[ri] ||
              _ === "SCRIPT" ||
              _ === "STYLE" ||
              (_ === "LINK" && s.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(s),
              (s = d));
          }
        } else a === "body" && Gi(t.ownerDocument.body);
      a = u;
    } while (a);
    Gl(e);
  }
  function Oh(t, e) {
    var a = t;
    t = 0;
    do {
      var n = a.nextSibling;
      if (
        (a.nodeType === 1
          ? e
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (e
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        n && n.nodeType === 8)
      )
        if (((a = n.data), a === "/$")) {
          if (t === 0) break;
          t--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || t++;
      a = n;
    } while (a);
  }
  function Wf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
      var a = e;
      switch (((e = e.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Wf(a), ts(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function jp(t, e, a, n) {
    for (; t.nodeType === 1;) {
      var u = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (n) {
        if (!t[ri])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((s = t.getAttribute("rel")),
                s === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                s !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((s = t.getAttribute("src")),
                (s !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  s &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var s = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === s) return t;
      } else return t;
      if (((t = ca(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ap(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !a) ||
        ((t = ca(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Rh(t, e) {
    for (; t.nodeType !== 8;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = ca(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function $f(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function If(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function Op(t, e) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || a.readyState !== "loading") e();
    else {
      var n = function () {
        (e(), a.removeEventListener("DOMContentLoaded", n));
      };
      (a.addEventListener("DOMContentLoaded", n), (t._reactRetry = n));
    }
  }
  function ca(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Pf = null;
  function Ch(t) {
    t = t.nextSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (e === 0) return ca(t.nextSibling);
          e--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Dh(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (e === 0) return t;
          e--;
        } else (a !== "/$" && a !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function wh(t, e, a) {
    switch (((e = yr(a)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(i(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(i(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(i(454));
        return t;
      default:
        throw Error(i(451));
    }
  }
  function Gi(t) {
    for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
    ts(t);
  }
  var oa = new Map(),
    Nh = new Set();
  function vr(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Qa = J.d;
  J.d = { f: Rp, r: Cp, D: Dp, C: wp, L: Np, m: Bp, X: kp, S: Up, M: Hp };
  function Rp() {
    var t = Qa.f(),
      e = fr();
    return t || e;
  }
  function Cp(t) {
    var e = sl(t);
    e !== null && e.tag === 5 && e.type === "form" ? $0(e) : Qa.r(t);
  }
  var Yl = typeof document > "u" ? null : document;
  function Bh(t, e, a) {
    var n = Yl;
    if (n && typeof e == "string" && e) {
      var u = na(e);
      ((u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        Nh.has(u) ||
          (Nh.add(u),
          (t = { rel: t, crossOrigin: a, href: e }),
          n.querySelector(u) === null &&
            ((e = n.createElement("link")),
            pe(e, "link", t),
            fe(e),
            n.head.appendChild(e))));
    }
  }
  function Dp(t) {
    (Qa.D(t), Bh("dns-prefetch", t, null));
  }
  function wp(t, e) {
    (Qa.C(t, e), Bh("preconnect", t, e));
  }
  function Np(t, e, a) {
    Qa.L(t, e, a);
    var n = Yl;
    if (n && t && e) {
      var u = 'link[rel="preload"][as="' + na(e) + '"]';
      e === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + na(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + na(a.imageSizes) + '"]'))
        : (u += '[href="' + na(t) + '"]');
      var s = u;
      switch (e) {
        case "style":
          s = Ll(t);
          break;
        case "script":
          s = Xl(t);
      }
      oa.has(s) ||
        ((t = T(
          {
            rel: "preload",
            href: e === "image" && a && a.imageSrcSet ? void 0 : t,
            as: e,
          },
          a,
        )),
        oa.set(s, t),
        n.querySelector(u) !== null ||
          (e === "style" && n.querySelector(Qi(s))) ||
          (e === "script" && n.querySelector(Vi(s))) ||
          ((e = n.createElement("link")),
          pe(e, "link", t),
          fe(e),
          n.head.appendChild(e)));
    }
  }
  function Bp(t, e) {
    Qa.m(t, e);
    var a = Yl;
    if (a && t) {
      var n = e && typeof e.as == "string" ? e.as : "script",
        u =
          'link[rel="modulepreload"][as="' + na(n) + '"][href="' + na(t) + '"]',
        s = u;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Xl(t);
      }
      if (
        !oa.has(s) &&
        ((t = T({ rel: "modulepreload", href: t }, e)),
        oa.set(s, t),
        a.querySelector(u) === null)
      ) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Vi(s))) return;
        }
        ((n = a.createElement("link")),
          pe(n, "link", t),
          fe(n),
          a.head.appendChild(n));
      }
    }
  }
  function Up(t, e, a) {
    Qa.S(t, e, a);
    var n = Yl;
    if (n && t) {
      var u = fl(n).hoistableStyles,
        s = Ll(t);
      e = e || "default";
      var d = u.get(s);
      if (!d) {
        var _ = { loading: 0, preload: null };
        if ((d = n.querySelector(Qi(s)))) _.loading = 5;
        else {
          ((t = T({ rel: "stylesheet", href: t, "data-precedence": e }, a)),
            (a = oa.get(s)) && tc(t, a));
          var z = (d = n.createElement("link"));
          (fe(z),
            pe(z, "link", t),
            (z._p = new Promise(function (w, H) {
              ((z.onload = w), (z.onerror = H));
            })),
            z.addEventListener("load", function () {
              _.loading |= 1;
            }),
            z.addEventListener("error", function () {
              _.loading |= 2;
            }),
            (_.loading |= 4),
            _r(d, e, n));
        }
        ((d = { type: "stylesheet", instance: d, count: 1, state: _ }),
          u.set(s, d));
      }
    }
  }
  function kp(t, e) {
    Qa.X(t, e);
    var a = Yl;
    if (a && t) {
      var n = fl(a).hoistableScripts,
        u = Xl(t),
        s = n.get(u);
      s ||
        ((s = a.querySelector(Vi(u))),
        s ||
          ((t = T({ src: t, async: !0 }, e)),
          (e = oa.get(u)) && ec(t, e),
          (s = a.createElement("script")),
          fe(s),
          pe(s, "link", t),
          a.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        n.set(u, s));
    }
  }
  function Hp(t, e) {
    Qa.M(t, e);
    var a = Yl;
    if (a && t) {
      var n = fl(a).hoistableScripts,
        u = Xl(t),
        s = n.get(u);
      s ||
        ((s = a.querySelector(Vi(u))),
        s ||
          ((t = T({ src: t, async: !0, type: "module" }, e)),
          (e = oa.get(u)) && ec(t, e),
          (s = a.createElement("script")),
          fe(s),
          pe(s, "link", t),
          a.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        n.set(u, s));
    }
  }
  function Uh(t, e, a, n) {
    var u = (u = at.current) ? vr(u) : null;
    if (!u) throw Error(i(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((e = Ll(a.href)),
            (a = fl(u).hoistableStyles),
            (n = a.get(e)),
            n ||
              ((n = { type: "style", instance: null, count: 0, state: null }),
              a.set(e, n)),
            n)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          t = Ll(a.href);
          var s = fl(u).hoistableStyles,
            d = s.get(t);
          if (
            (d ||
              ((u = u.ownerDocument || u),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              s.set(t, d),
              (s = u.querySelector(Qi(t))) &&
                !s._p &&
                ((d.instance = s), (d.state.loading = 5)),
              oa.has(t) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                oa.set(t, a),
                s || qp(u, t, a, d.state))),
            e && n === null)
          )
            throw Error(i(528, ""));
          return d;
        }
        if (e && n !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (e = a.async),
          (a = a.src),
          typeof a == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Xl(a)),
              (a = fl(u).hoistableScripts),
              (n = a.get(e)),
              n ||
                ((n = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(e, n)),
              n)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, t));
    }
  }
  function Ll(t) {
    return 'href="' + na(t) + '"';
  }
  function Qi(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function kh(t) {
    return T({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function qp(t, e, a, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (n.loading = 1)
      : ((e = t.createElement("link")),
        (n.preload = e),
        e.addEventListener("load", function () {
          return (n.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (n.loading |= 2);
        }),
        pe(e, "link", a),
        fe(e),
        t.head.appendChild(e));
  }
  function Xl(t) {
    return '[src="' + na(t) + '"]';
  }
  function Vi(t) {
    return "script[async]" + t;
  }
  function Hh(t, e, a) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var n = t.querySelector('style[data-href~="' + na(a.href) + '"]');
          if (n) return ((e.instance = n), fe(n), n);
          var u = T({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (n = (t.ownerDocument || t).createElement("style")),
            fe(n),
            pe(n, "style", u),
            _r(n, a.precedence, t),
            (e.instance = n)
          );
        case "stylesheet":
          u = Ll(a.href);
          var s = t.querySelector(Qi(u));
          if (s) return ((e.state.loading |= 4), (e.instance = s), fe(s), s);
          ((n = kh(a)),
            (u = oa.get(u)) && tc(n, u),
            (s = (t.ownerDocument || t).createElement("link")),
            fe(s));
          var d = s;
          return (
            (d._p = new Promise(function (_, z) {
              ((d.onload = _), (d.onerror = z));
            })),
            pe(s, "link", n),
            (e.state.loading |= 4),
            _r(s, a.precedence, t),
            (e.instance = s)
          );
        case "script":
          return (
            (s = Xl(a.src)),
            (u = t.querySelector(Vi(s)))
              ? ((e.instance = u), fe(u), u)
              : ((n = a),
                (u = oa.get(s)) && ((n = T({}, a)), ec(n, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                fe(u),
                pe(u, "link", n),
                t.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((n = e.instance), (e.state.loading |= 4), _r(n, a.precedence, t));
    return e.instance;
  }
  function _r(t, e, a) {
    for (
      var n = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = n.length ? n[n.length - 1] : null,
        s = u,
        d = 0;
      d < n.length;
      d++
    ) {
      var _ = n[d];
      if (_.dataset.precedence === e) s = _;
      else if (s !== u) break;
    }
    s
      ? s.parentNode.insertBefore(t, s.nextSibling)
      : ((e = a.nodeType === 9 ? a.head : a), e.insertBefore(t, e.firstChild));
  }
  function tc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function ec(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var br = null;
  function qh(t, e, a) {
    if (br === null) {
      var n = new Map(),
        u = (br = new Map());
      u.set(a, n);
    } else ((u = br), (n = u.get(a)), n || ((n = new Map()), u.set(a, n)));
    if (n.has(t)) return n;
    for (
      n.set(t, null), a = a.getElementsByTagName(t), u = 0;
      u < a.length;
      u++
    ) {
      var s = a[u];
      if (
        !(
          s[ri] ||
          s[de] ||
          (t === "link" && s.getAttribute("rel") === "stylesheet")
        ) &&
        s.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = s.getAttribute(e) || "";
        d = t + d;
        var _ = n.get(d);
        _ ? _.push(s) : n.set(d, [s]);
      }
    }
    return n;
  }
  function Yh(t, e, a) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        a,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function Yp(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled),
              typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Lh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Lp(t, e, a, n) {
    if (
      a.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = Ll(n.href),
          s = e.querySelector(Qi(u));
        if (s) {
          ((e = s._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = xr.bind(t)), e.then(t, t)),
            (a.state.loading |= 4),
            (a.instance = s),
            fe(s));
          return;
        }
        ((s = e.ownerDocument || e),
          (n = kh(n)),
          (u = oa.get(u)) && tc(n, u),
          (s = s.createElement("link")),
          fe(s));
        var d = s;
        ((d._p = new Promise(function (_, z) {
          ((d.onload = _), (d.onerror = z));
        })),
          pe(s, "link", n),
          (a.instance = s));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(a, e),
        (e = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (t.count++,
          (a = xr.bind(t)),
          e.addEventListener("load", a),
          e.addEventListener("error", a)));
    }
  }
  var ac = 0;
  function Xp(t, e) {
    return (
      t.stylesheets && t.count === 0 && Tr(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (a) {
            var n = setTimeout(function () {
              if ((t.stylesheets && Tr(t, t.stylesheets), t.unsuspend)) {
                var s = t.unsuspend;
                ((t.unsuspend = null), s());
              }
            }, 6e4 + e);
            0 < t.imgBytes && ac === 0 && (ac = 62500 * Sp());
            var u = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Tr(t, t.stylesheets), t.unsuspend))
                ) {
                  var s = t.unsuspend;
                  ((t.unsuspend = null), s());
                }
              },
              (t.imgBytes > ac ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = a),
              function () {
                ((t.unsuspend = null), clearTimeout(n), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function xr() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Tr(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Sr = null;
  function Tr(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Sr = new Map()),
        e.forEach(Gp, t),
        (Sr = null),
        xr.call(t)));
  }
  function Gp(t, e) {
    if (!(e.state.loading & 4)) {
      var a = Sr.get(t);
      if (a) var n = a.get(null);
      else {
        ((a = new Map()), Sr.set(t, a));
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            s = 0;
          s < u.length;
          s++
        ) {
          var d = u[s];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (a.set(d.dataset.precedence, d), (n = d));
        }
        n && a.set(null, n);
      }
      ((u = e.instance),
        (d = u.getAttribute("data-precedence")),
        (s = a.get(d) || n),
        s === n && a.set(null, u),
        a.set(d, u),
        this.count++,
        (n = xr.bind(this)),
        u.addEventListener("load", n),
        u.addEventListener("error", n),
        s
          ? s.parentNode.insertBefore(u, s.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Zi = {
    $$typeof: Q,
    Provider: null,
    Consumer: null,
    _currentValue: lt,
    _currentValue2: lt,
    _threadCount: 0,
  };
  function Qp(t, e, a, n, u, s, d, _, z) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Wr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wr(0)),
      (this.hiddenUpdates = Wr(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = u),
      (this.onCaughtError = s),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = z),
      (this.incompleteTransitions = new Map()));
  }
  function Xh(t, e, a, n, u, s, d, _, z, w, H, G) {
    return (
      (t = new Qp(t, e, a, d, z, w, H, G, _)),
      (e = 1),
      s === !0 && (e |= 24),
      (s = Xe(3, null, null, e)),
      (t.current = s),
      (s.stateNode = t),
      (e = Ns()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (s.memoizedState = { element: n, isDehydrated: a, cache: e }),
      Hs(s),
      t
    );
  }
  function Gh(t) {
    return t ? ((t = _l), t) : _l;
  }
  function Qh(t, e, a, n, u, s) {
    ((u = Gh(u)),
      n.context === null ? (n.context = u) : (n.pendingContext = u),
      (n = nn(e)),
      (n.payload = { element: a }),
      (s = s === void 0 ? null : s),
      s !== null && (n.callback = s),
      (a = ln(t, n, e)),
      a !== null && (Ce(a, t, e), zi(a, t, e)));
  }
  function Vh(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function nc(t, e) {
    (Vh(t, e), (t = t.alternate) && Vh(t, e));
  }
  function Zh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = kn(t, 67108864);
      (e !== null && Ce(e, t, 67108864), nc(t, 67108864));
    }
  }
  function Kh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ke();
      e = $r(e);
      var a = kn(t, e);
      (a !== null && Ce(a, t, e), nc(t, e));
    }
  }
  var zr = !0;
  function Vp(t, e, a, n) {
    var u = B.T;
    B.T = null;
    var s = J.p;
    try {
      ((J.p = 2), lc(t, e, a, n));
    } finally {
      ((J.p = s), (B.T = u));
    }
  }
  function Zp(t, e, a, n) {
    var u = B.T;
    B.T = null;
    var s = J.p;
    try {
      ((J.p = 8), lc(t, e, a, n));
    } finally {
      ((J.p = s), (B.T = u));
    }
  }
  function lc(t, e, a, n) {
    if (zr) {
      var u = ic(n);
      if (u === null) (Qf(t, e, n, Mr, a), Fh(t, n));
      else if (Jp(u, t, e, a, n)) n.stopPropagation();
      else if ((Fh(t, n), e & 4 && -1 < Kp.indexOf(t))) {
        for (; u !== null;) {
          var s = sl(u);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
                  var d = Dn(s.pendingLanes);
                  if (d !== 0) {
                    var _ = s;
                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; d;) {
                      var z = 1 << (31 - Ye(d));
                      ((_.entanglements[1] |= z), (d &= ~z));
                    }
                    (Sa(s), (Ot & 6) === 0 && ((rr = ve() + 500), Yi(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((_ = kn(s, 2)), _ !== null && Ce(_, s, 2), fr(), nc(s, 2));
            }
          if (((s = ic(n)), s === null && Qf(t, e, n, Mr, a), s === u)) break;
          u = s;
        }
        u !== null && n.stopPropagation();
      } else Qf(t, e, n, null, a);
    }
  }
  function ic(t) {
    return ((t = us(t)), uc(t));
  }
  var Mr = null;
  function uc(t) {
    if (((Mr = null), (t = rl(t)), t !== null)) {
      var e = c(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (((t = o(e)), t !== null)) return t;
          t = null;
        } else if (a === 31) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Mr = t), null);
  }
  function Jh(t) {
    switch (t) {
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
        switch (Jr()) {
          case ai:
            return 2;
          case hu:
            return 8;
          case il:
          case mu:
            return 32;
          case ni:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var rc = !1,
    pn = null,
    yn = null,
    vn = null,
    Ki = new Map(),
    Ji = new Map(),
    _n = [],
    Kp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Fh(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        pn = null;
        break;
      case "dragenter":
      case "dragleave":
        yn = null;
        break;
      case "mouseover":
      case "mouseout":
        vn = null;
        break;
      case "pointerover":
      case "pointerout":
        Ki.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ji.delete(e.pointerId);
    }
  }
  function Fi(t, e, a, n, u, s) {
    return t === null || t.nativeEvent !== s
      ? ((t = {
          blockedOn: e,
          domEventName: a,
          eventSystemFlags: n,
          nativeEvent: s,
          targetContainers: [u],
        }),
        e !== null && ((e = sl(e)), e !== null && Zh(e)),
        t)
      : ((t.eventSystemFlags |= n),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function Jp(t, e, a, n, u) {
    switch (e) {
      case "focusin":
        return ((pn = Fi(pn, t, e, a, n, u)), !0);
      case "dragenter":
        return ((yn = Fi(yn, t, e, a, n, u)), !0);
      case "mouseover":
        return ((vn = Fi(vn, t, e, a, n, u)), !0);
      case "pointerover":
        var s = u.pointerId;
        return (Ki.set(s, Fi(Ki.get(s) || null, t, e, a, n, u)), !0);
      case "gotpointercapture":
        return (
          (s = u.pointerId),
          Ji.set(s, Fi(Ji.get(s) || null, t, e, a, n, u)),
          !0
        );
    }
    return !1;
  }
  function Wh(t) {
    var e = rl(t.target);
    if (e !== null) {
      var a = c(e);
      if (a !== null) {
        if (((e = a.tag), e === 13)) {
          if (((e = o(a)), e !== null)) {
            ((t.blockedOn = e),
              fo(t.priority, function () {
                Kh(a);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = h(a)), e !== null)) {
            ((t.blockedOn = e),
              fo(t.priority, function () {
                Kh(a);
              }));
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Er(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
      var a = ic(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var n = new a.constructor(a.type, a);
        ((is = n), a.target.dispatchEvent(n), (is = null));
      } else return ((e = sl(a)), e !== null && Zh(e), (t.blockedOn = a), !1);
      e.shift();
    }
    return !0;
  }
  function $h(t, e, a) {
    Er(t) && a.delete(e);
  }
  function Fp() {
    ((rc = !1),
      pn !== null && Er(pn) && (pn = null),
      yn !== null && Er(yn) && (yn = null),
      vn !== null && Er(vn) && (vn = null),
      Ki.forEach($h),
      Ji.forEach($h));
  }
  function jr(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      rc ||
        ((rc = !0),
        g.unstable_scheduleCallback(g.unstable_NormalPriority, Fp)));
  }
  var Ar = null;
  function Ih(t) {
    Ar !== t &&
      ((Ar = t),
      g.unstable_scheduleCallback(g.unstable_NormalPriority, function () {
        Ar === t && (Ar = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e],
            n = t[e + 1],
            u = t[e + 2];
          if (typeof n != "function") {
            if (uc(n || a) === null) continue;
            break;
          }
          var s = sl(a);
          s !== null &&
            (t.splice(e, 3),
            (e -= 3),
            lf(s, { pending: !0, data: u, method: a.method, action: n }, n, u));
        }
      }));
  }
  function Gl(t) {
    function e(z) {
      return jr(z, t);
    }
    (pn !== null && jr(pn, t),
      yn !== null && jr(yn, t),
      vn !== null && jr(vn, t),
      Ki.forEach(e),
      Ji.forEach(e));
    for (var a = 0; a < _n.length; a++) {
      var n = _n[a];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < _n.length && ((a = _n[0]), a.blockedOn === null);)
      (Wh(a), a.blockedOn === null && _n.shift());
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (n = 0; n < a.length; n += 3) {
        var u = a[n],
          s = a[n + 1],
          d = u[Me] || null;
        if (typeof s == "function") d || Ih(a);
        else if (d) {
          var _ = null;
          if (s && s.hasAttribute("formAction")) {
            if (((u = s), (d = s[Me] || null))) _ = d.formAction;
            else if (uc(u) !== null) continue;
          } else _ = d.action;
          (typeof _ == "function" ? (a[n + 1] = _) : (a.splice(n, 3), (n -= 3)),
            Ih(a));
        }
      }
  }
  function Ph() {
    function t(s) {
      s.canIntercept &&
        s.info === "react-transition" &&
        s.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (u = d);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (u !== null && (u(), (u = null)), n || setTimeout(a, 20));
    }
    function a() {
      if (!n && !navigation.transition) {
        var s = navigation.currentEntry;
        s &&
          s.url != null &&
          navigation.navigate(s.url, {
            state: s.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var n = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(a, 100),
        function () {
          ((n = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function sc(t) {
    this._internalRoot = t;
  }
  ((Or.prototype.render = sc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(i(409));
      var a = e.current,
        n = Ke();
      Qh(a, n, t, e, null, null);
    }),
    (Or.prototype.unmount = sc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Qh(t.current, 2, null, t, null, null), fr(), (e[ul] = null));
        }
      }));
  function Or(t) {
    this._internalRoot = t;
  }
  Or.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = so();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < _n.length && e !== 0 && e < _n[a].priority; a++);
      (_n.splice(a, 0, t), a === 0 && Wh(t));
    }
  };
  var t1 = l.version;
  if (t1 !== "19.2.8") throw Error(i(527, t1, "19.2.8"));
  J.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(i(188))
        : ((t = Object.keys(t).join(",")), Error(i(268, t)));
    return (
      (t = m(e)),
      (t = t !== null ? v(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Wp = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: B,
    reconcilerVersion: "19.2.8",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rr.isDisabled && Rr.supportsFiber)
      try {
        ((Cn = Rr.inject(Wp)), (qe = Rr));
      } catch {}
  }
  return (
    ($i.createRoot = function (t, e) {
      if (!f(t)) throw Error(i(299));
      var a = !1,
        n = "",
        u = rd,
        s = sd,
        d = fd;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (s = e.onCaughtError),
          e.onRecoverableError !== void 0 && (d = e.onRecoverableError)),
        (e = Xh(t, 1, !1, null, null, a, n, null, u, s, d, Ph)),
        (t[ul] = e.current),
        Gf(t),
        new sc(e)
      );
    }),
    ($i.hydrateRoot = function (t, e, a) {
      if (!f(t)) throw Error(i(299));
      var n = !1,
        u = "",
        s = rd,
        d = sd,
        _ = fd,
        z = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (n = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (s = a.onUncaughtError),
          a.onCaughtError !== void 0 && (d = a.onCaughtError),
          a.onRecoverableError !== void 0 && (_ = a.onRecoverableError),
          a.formState !== void 0 && (z = a.formState)),
        (e = Xh(t, 1, !0, e, a ?? null, n, u, z, s, d, _, Ph)),
        (e.context = Gh(null)),
        (a = e.current),
        (n = Ke()),
        (n = $r(n)),
        (u = nn(n)),
        (u.callback = null),
        ln(a, u, n),
        (a = n),
        (e.current.lanes = a),
        ui(e, a),
        Sa(e),
        (t[ul] = e.current),
        Gf(t),
        new Or(e)
      );
    }),
    ($i.version = "19.2.8"),
    $i
  );
}
var c1;
function ry() {
  if (c1) return oc.exports;
  c1 = 1;
  function g() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (l) {
        console.error(l);
      }
  }
  return (g(), (oc.exports = uy()), oc.exports);
}
var sy = ry();
const fy = B1(sy);
function Va(g) {
  if (g === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return g;
}
function U1(g, l) {
  ((g.prototype = Object.create(l.prototype)),
    (g.prototype.constructor = g),
    (g.__proto__ = l));
}
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Ie = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  lu = { duration: 0.5, overwrite: !1, delay: 0 },
  Hc,
  ye,
  Vt,
  ha = 1e8,
  Yt = 1 / ha,
  Tc = Math.PI * 2,
  cy = Tc / 4,
  oy = 0,
  k1 = Math.sqrt,
  dy = Math.cos,
  hy = Math.sin,
  oe = function (l) {
    return typeof l == "string";
  },
  $t = function (l) {
    return typeof l == "function";
  },
  Ka = function (l) {
    return typeof l == "number";
  },
  qc = function (l) {
    return typeof l > "u";
  },
  Ea = function (l) {
    return typeof l == "object";
  },
  we = function (l) {
    return l !== !1;
  },
  Yc = function () {
    return typeof window < "u";
  },
  Cr = function (l) {
    return $t(l) || oe(l);
  },
  H1 =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  xe = Array.isArray,
  my = /random\([^)]+\)/g,
  gy = /,\s*/g,
  o1 = /(?:-?\.?\d|\.)+/gi,
  q1 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Vl = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  gc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Y1 = /[+-]=-?[.\d]+/,
  py = /[^,'"\[\]\s]+/gi,
  yy = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Kt,
  Ta,
  zc,
  Lc,
  Pe = {},
  Br = {},
  L1,
  X1 = function (l) {
    return (Br = Wl(l, Pe)) && ke;
  },
  Xc = function (l, r) {
    return console.warn(
      "Invalid property",
      l,
      "set to",
      r,
      "Missing plugin? gsap.registerPlugin()",
    );
  },
  iu = function (l, r) {
    return !r && console.warn(l);
  },
  G1 = function (l, r) {
    return (l && (Pe[l] = r) && Br && (Br[l] = r)) || Pe;
  },
  uu = function () {
    return 0;
  },
  vy = { suppressEvents: !0, isStart: !0, kill: !1 },
  Dr = { suppressEvents: !0, kill: !1 },
  _y = { suppressEvents: !0 },
  Gc = {},
  zn = [],
  Mc = {},
  Q1,
  Je = {},
  pc = {},
  d1 = 30,
  wr = [],
  Qc = "",
  Vc = function (l) {
    var r = l[0],
      i,
      f;
    if ((Ea(r) || $t(r) || (l = [l]), !(i = (r._gsap || {}).harness))) {
      for (f = wr.length; f-- && !wr[f].targetTest(r););
      i = wr[f];
    }
    for (f = l.length; f--;)
      (l[f] && (l[f]._gsap || (l[f]._gsap = new dm(l[f], i)))) ||
        l.splice(f, 1);
    return l;
  },
  tl = function (l) {
    return l._gsap || Vc(ma(l))[0]._gsap;
  },
  V1 = function (l, r, i) {
    return (i = l[r]) && $t(i)
      ? l[r]()
      : (qc(i) && l.getAttribute && l.getAttribute(r)) || i;
  },
  Ne = function (l, r) {
    return (l = l.split(",")).forEach(r) || l;
  },
  te = function (l) {
    return Math.round(l * 1e5) / 1e5 || 0;
  },
  Zt = function (l) {
    return Math.round(l * 1e7) / 1e7 || 0;
  },
  Kl = function (l, r) {
    var i = r.charAt(0),
      f = parseFloat(r.substr(2));
    return (
      (l = parseFloat(l)),
      i === "+" ? l + f : i === "-" ? l - f : i === "*" ? l * f : l / f
    );
  },
  by = function (l, r) {
    for (var i = r.length, f = 0; l.indexOf(r[f]) < 0 && ++f < i;);
    return f < i;
  },
  Ur = function () {
    var l = zn.length,
      r = zn.slice(0),
      i,
      f;
    for (Mc = {}, zn.length = 0, i = 0; i < l; i++)
      ((f = r[i]),
        f && f._lazy && (f.render(f._lazy[0], f._lazy[1], !0)._lazy = 0));
  },
  Zc = function (l) {
    return !!(l._initted || l._startAt || l.add);
  },
  Z1 = function (l, r, i, f) {
    (zn.length && !ye && Ur(),
      l.render(r, i, !!(ye && r < 0 && Zc(l))),
      zn.length && !ye && Ur());
  },
  K1 = function (l) {
    var r = parseFloat(l);
    return (r || r === 0) && (l + "").match(py).length < 2
      ? r
      : oe(l)
        ? l.trim()
        : l;
  },
  J1 = function (l) {
    return l;
  },
  ta = function (l, r) {
    for (var i in r) i in l || (l[i] = r[i]);
    return l;
  },
  xy = function (l) {
    return function (r, i) {
      for (var f in i)
        f in r || (f === "duration" && l) || f === "ease" || (r[f] = i[f]);
    };
  },
  Wl = function (l, r) {
    for (var i in r) l[i] = r[i];
    return l;
  },
  h1 = function g(l, r) {
    for (var i in r)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (l[i] = Ea(r[i]) ? g(l[i] || (l[i] = {}), r[i]) : r[i]);
    return l;
  },
  kr = function (l, r) {
    var i = {},
      f;
    for (f in l) f in r || (i[f] = l[f]);
    return i;
  },
  eu = function (l) {
    var r = l.parent || Kt,
      i = l.keyframes ? xy(xe(l.keyframes)) : ta;
    if (we(l.inherit))
      for (; r;) (i(l, r.vars.defaults), (r = r.parent || r._dp));
    return l;
  },
  Sy = function (l, r) {
    for (var i = l.length, f = i === r.length; f && i-- && l[i] === r[i];);
    return i < 0;
  },
  F1 = function (l, r, i, f, c) {
    var o = l[f],
      h;
    if (c) for (h = r[c]; o && o[c] > h;) o = o._prev;
    return (
      o ? ((r._next = o._next), (o._next = r)) : ((r._next = l[i]), (l[i] = r)),
      r._next ? (r._next._prev = r) : (l[f] = r),
      (r._prev = o),
      (r.parent = r._dp = l),
      r
    );
  },
  Xr = function (l, r, i, f) {
    (i === void 0 && (i = "_first"), f === void 0 && (f = "_last"));
    var c = r._prev,
      o = r._next;
    (c ? (c._next = o) : l[i] === r && (l[i] = o),
      o ? (o._prev = c) : l[f] === r && (l[f] = c),
      (r._next = r._prev = r.parent = null));
  },
  jn = function (l, r) {
    (l.parent &&
      (!r || l.parent.autoRemoveChildren) &&
      l.parent.remove &&
      l.parent.remove(l),
      (l._act = 0));
  },
  el = function (l, r) {
    if (l && (!r || r._end > l._dur || r._start < 0))
      for (var i = l; i;) ((i._dirty = 1), (i = i.parent));
    return l;
  },
  Ty = function (l) {
    for (var r = l.parent; r && r.parent;)
      ((r._dirty = 1), r.totalDuration(), (r = r.parent));
    return l;
  },
  Ec = function (l, r, i, f) {
    return (
      l._startAt &&
      (ye
        ? l._startAt.revert(Dr)
        : (l.vars.immediateRender && !l.vars.autoRevert) ||
          l._startAt.render(r, !0, f))
    );
  },
  zy = function g(l) {
    return !l || (l._ts && g(l.parent));
  },
  m1 = function (l) {
    return l._repeat ? $l(l._tTime, (l = l.duration() + l._rDelay)) * l : 0;
  },
  $l = function (l, r) {
    var i = Math.floor((l = Zt(l / r)));
    return l && i === l ? i - 1 : i;
  },
  Hr = function (l, r) {
    return (
      (l - r._start) * r._ts +
      (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    );
  },
  Gr = function (l) {
    return (l._end = Zt(
      l._start + (l._tDur / Math.abs(l._ts || l._rts || Yt) || 0),
    ));
  },
  Qr = function (l, r) {
    var i = l._dp;
    return (
      i &&
        i.smoothChildTiming &&
        l._ts &&
        ((l._start = Zt(
          i._time -
            (l._ts > 0
              ? r / l._ts
              : ((l._dirty ? l.totalDuration() : l._tDur) - r) / -l._ts),
        )),
        Gr(l),
        i._dirty || el(i, l)),
      l
    );
  },
  W1 = function (l, r) {
    var i;
    if (
      ((r._time ||
        (!r._dur && r._initted) ||
        (r._start < l._time && (r._dur || !r.add))) &&
        ((i = Hr(l.rawTime(), r)),
        (!r._dur || du(0, r.totalDuration(), i) - r._tTime > Yt) &&
          r.render(i, !0)),
      el(l, r)._dp && l._initted && l._time >= l._dur && l._ts)
    ) {
      if (l._dur < l.duration())
        for (i = l; i._dp;)
          (i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp));
      l._zTime = -Yt;
    }
  },
  za = function (l, r, i, f) {
    return (
      r.parent && jn(r),
      (r._start = Zt(
        (Ka(i) ? i : i || l !== Kt ? da(l, i, r) : l._time) + r._delay,
      )),
      (r._end = Zt(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0),
      )),
      F1(l, r, "_first", "_last", l._sort ? "_start" : 0),
      jc(r) || (l._recent = r),
      f || W1(l, r),
      l._ts < 0 && Qr(l, l._tTime),
      l
    );
  },
  $1 = function (l, r) {
    return (
      (Pe.ScrollTrigger || Xc("scrollTrigger", r)) &&
      Pe.ScrollTrigger.create(r, l)
    );
  },
  I1 = function (l, r, i, f, c) {
    if ((Jc(l, r, c), !l._initted)) return 1;
    if (
      !i &&
      l._pt &&
      !ye &&
      ((l._dur && l.vars.lazy !== !1) || (!l._dur && l.vars.lazy)) &&
      Q1 !== Fe.frame
    )
      return (zn.push(l), (l._lazy = [c, f]), 1);
  },
  My = function g(l) {
    var r = l.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || g(r));
  },
  jc = function (l) {
    var r = l.data;
    return r === "isFromStart" || r === "isStart";
  },
  Ey = function (l, r, i, f) {
    var c = l.ratio,
      o =
        r < 0 ||
        (!r &&
          ((!l._start && My(l) && !(!l._initted && jc(l))) ||
            ((l._ts < 0 || l._dp._ts < 0) && !jc(l))))
          ? 0
          : 1,
      h = l._rDelay,
      p = 0,
      m,
      v,
      T;
    if (
      (h &&
        l._repeat &&
        ((p = du(0, l._tDur, r)),
        (v = $l(p, h)),
        l._yoyo && v & 1 && (o = 1 - o),
        v !== $l(l._tTime, h) &&
          ((c = 1 - o), l.vars.repeatRefresh && l._initted && l.invalidate())),
      o !== c || ye || f || l._zTime === Yt || (!r && l._zTime))
    ) {
      if (!l._initted && I1(l, r, f, i, p)) return;
      for (
        T = l._zTime,
          l._zTime = r || (i ? Yt : 0),
          i || (i = r && !T),
          l.ratio = o,
          l._from && (o = 1 - o),
          l._time = 0,
          l._tTime = p,
          m = l._pt;
        m;
      )
        (m.r(o, m.d), (m = m._next));
      (r < 0 && Ec(l, r, i, !0),
        l._onUpdate && !i && We(l, "onUpdate"),
        p && l._repeat && !i && l.parent && We(l, "onRepeat"),
        (r >= l._tDur || r < 0) &&
          l.ratio === o &&
          (o && jn(l, 1),
          !i &&
            !ye &&
            (We(l, o ? "onComplete" : "onReverseComplete", !0),
            l._prom && l._prom())));
    } else l._zTime || (l._zTime = r);
  },
  jy = function (l, r, i) {
    var f;
    if (i > r)
      for (f = l._first; f && f._start <= i;) {
        if (f.data === "isPause" && f._start > r) return f;
        f = f._next;
      }
    else
      for (f = l._last; f && f._start >= i;) {
        if (f.data === "isPause" && f._start < r) return f;
        f = f._prev;
      }
  },
  Il = function (l, r, i, f) {
    var c = l._repeat,
      o = Zt(r) || 0,
      h = l._tTime / l._tDur;
    return (
      h && !f && (l._time *= o / l._dur),
      (l._dur = o),
      (l._tDur = c ? (c < 0 ? 1e10 : Zt(o * (c + 1) + l._rDelay * c)) : o),
      h > 0 && !f && Qr(l, (l._tTime = l._tDur * h)),
      l.parent && Gr(l),
      i || el(l.parent, l),
      l
    );
  },
  g1 = function (l) {
    return l instanceof De ? el(l) : Il(l, l._dur);
  },
  Ay = { _start: 0, endTime: uu, totalDuration: uu },
  da = function g(l, r, i) {
    var f = l.labels,
      c = l._recent || Ay,
      o = l.duration() >= ha ? c.endTime(!1) : l._dur,
      h,
      p,
      m;
    return oe(r) && (isNaN(r) || r in f)
      ? ((p = r.charAt(0)),
        (m = r.substr(-1) === "%"),
        (h = r.indexOf("=")),
        p === "<" || p === ">"
          ? (h >= 0 && (r = r.replace(/=/, "")),
            (p === "<" ? c._start : c.endTime(c._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0) *
                (m ? (h < 0 ? c : i).totalDuration() / 100 : 1))
          : h < 0
            ? (r in f || (f[r] = o), f[r])
            : ((p = parseFloat(r.charAt(h - 1) + r.substr(h + 1))),
              m && i && (p = (p / 100) * (xe(i) ? i[0] : i).totalDuration()),
              h > 1 ? g(l, r.substr(0, h - 1), i) + p : o + p))
      : r == null
        ? o
        : +r;
  },
  au = function (l, r, i) {
    var f = Ka(r[1]),
      c = (f ? 2 : 1) + (l < 2 ? 0 : 1),
      o = r[c],
      h,
      p;
    if ((f && (o.duration = r[1]), (o.parent = i), l)) {
      for (h = o, p = i; p && !("immediateRender" in h);)
        ((h = p.vars.defaults || {}), (p = we(p.vars.inherit) && p.parent));
      ((o.immediateRender = we(h.immediateRender)),
        l < 2 ? (o.runBackwards = 1) : (o.startAt = r[c - 1]));
    }
    return new ue(r[0], o, r[c + 1]);
  },
  Rn = function (l, r) {
    return l || l === 0 ? r(l) : r;
  },
  du = function (l, r, i) {
    return i < l ? l : i > r ? r : i;
  },
  be = function (l, r) {
    return !oe(l) || !(r = yy.exec(l)) ? "" : r[1];
  },
  Oy = function (l, r, i) {
    return Rn(i, function (f) {
      return du(l, r, f);
    });
  },
  Ac = [].slice,
  P1 = function (l, r) {
    return (
      l &&
      Ea(l) &&
      "length" in l &&
      ((!r && !l.length) || (l.length - 1 in l && Ea(l[0]))) &&
      !l.nodeType &&
      l !== Ta
    );
  },
  Ry = function (l, r, i) {
    return (
      i === void 0 && (i = []),
      l.forEach(function (f) {
        var c;
        return (oe(f) && !r) || P1(f, 1)
          ? (c = i).push.apply(c, ma(f))
          : i.push(f);
      }) || i
    );
  },
  ma = function (l, r, i) {
    return Vt && !r && Vt.selector
      ? Vt.selector(l)
      : oe(l) && !i && (zc || !Pl())
        ? Ac.call((r || Lc).querySelectorAll(l), 0)
        : xe(l)
          ? Ry(l, i)
          : P1(l)
            ? Ac.call(l, 0)
            : l
              ? [l]
              : [];
  },
  Oc = function (l) {
    return (
      (l = ma(l)[0] || iu("Invalid scope") || {}),
      function (r) {
        var i = l.current || l.nativeElement || l;
        return ma(
          r,
          i.querySelectorAll
            ? i
            : i === l
              ? iu("Invalid scope") || Lc.createElement("div")
              : l,
        );
      }
    );
  },
  tm = function (l) {
    return l.sort(function () {
      return 0.5 - Math.random();
    });
  },
  em = function (l) {
    if ($t(l)) return l;
    var r = Ea(l) ? l : { each: l },
      i = al(r.ease),
      f = r.from || 0,
      c = parseFloat(r.base) || 0,
      o = {},
      h = f > 0 && f < 1,
      p = isNaN(f) || h,
      m = r.axis,
      v = f,
      T = f;
    return (
      oe(f)
        ? (v = T = { center: 0.5, edges: 0.5, end: 1 }[f] || 0)
        : !h && p && ((v = f[0]), (T = f[1])),
      function (j, S, M) {
        var b = (M || r).length,
          A = o[b],
          k,
          q,
          Q,
          K,
          V,
          P,
          Y,
          W,
          F;
        if (!A) {
          if (((F = r.grid === "auto" ? 0 : (r.grid || [1, ha])[1]), !F)) {
            for (
              Y = -ha;
              Y < (Y = M[F++].getBoundingClientRect().left) && F < b;
            );
            F < b && F--;
          }
          for (
            A = o[b] = [],
              k = p ? Math.min(F, b) * v - 0.5 : f % F,
              q = F === ha ? 0 : p ? (b * T) / F - 0.5 : (f / F) | 0,
              Y = 0,
              W = ha,
              P = 0;
            P < b;
            P++
          )
            ((Q = (P % F) - k),
              (K = q - ((P / F) | 0)),
              (A[P] = V = m ? Math.abs(m === "y" ? K : Q) : k1(Q * Q + K * K)),
              V > Y && (Y = V),
              V < W && (W = V));
          (f === "random" && tm(A),
            (A.max = Y - W),
            (A.min = W),
            (A.v = b =
              (parseFloat(r.amount) ||
                parseFloat(r.each) *
                  (F > b
                    ? b - 1
                    : m
                      ? m === "y"
                        ? b / F
                        : F
                      : Math.max(F, b / F)) ||
                0) * (f === "edges" ? -1 : 1)),
            (A.b = b < 0 ? c - b : c),
            (A.u = be(r.amount || r.each) || 0),
            (i = i && b < 0 ? Gy(i) : i));
        }
        return (
          (b = (A[j] - A.min) / A.max || 0),
          Zt(A.b + (i ? i(b) : b) * A.v) + A.u
        );
      }
    );
  },
  Rc = function (l) {
    var r = Math.pow(10, ((l + "").split(".")[1] || "").length);
    return function (i) {
      var f = Zt(Math.round(parseFloat(i) / l) * l * r);
      return (f - (f % 1)) / r + (Ka(i) ? 0 : be(i));
    };
  },
  am = function (l, r) {
    var i = xe(l),
      f,
      c;
    return (
      !i &&
        Ea(l) &&
        ((f = i = l.radius || ha),
        l.values
          ? ((l = ma(l.values)), (c = !Ka(l[0])) && (f *= f))
          : (l = Rc(l.increment))),
      Rn(
        r,
        i
          ? $t(l)
            ? function (o) {
                return ((c = l(o)), Math.abs(c - o) <= f ? c : o);
              }
            : function (o) {
                for (
                  var h = parseFloat(c ? o.x : o),
                    p = parseFloat(c ? o.y : 0),
                    m = ha,
                    v = 0,
                    T = l.length,
                    j,
                    S;
                  T--;
                )
                  (c
                    ? ((j = l[T].x - h), (S = l[T].y - p), (j = j * j + S * S))
                    : (j = Math.abs(l[T] - h)),
                    j < m && ((m = j), (v = T)));
                return (
                  (v = !f || m <= f ? l[v] : o),
                  c || v === o || Ka(o) ? v : v + be(o)
                );
              }
          : Rc(l),
      )
    );
  },
  nm = function (l, r, i, f) {
    return Rn(xe(l) ? !r : i === !0 ? !!(i = 0) : !f, function () {
      return xe(l)
        ? l[~~(Math.random() * l.length)]
        : (i = i || 1e-5) &&
            (f = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((l - i / 2 + Math.random() * (r - l + i * 0.99)) / i) *
                i *
                f,
            ) / f;
    });
  },
  Cy = function () {
    for (var l = arguments.length, r = new Array(l), i = 0; i < l; i++)
      r[i] = arguments[i];
    return function (f) {
      return r.reduce(function (c, o) {
        return o(c);
      }, f);
    };
  },
  Dy = function (l, r) {
    return function (i) {
      return l(parseFloat(i)) + (r || be(i));
    };
  },
  wy = function (l, r, i) {
    return im(l, r, 0, 1, i);
  },
  lm = function (l, r, i) {
    return Rn(i, function (f) {
      return l[~~r(f)];
    });
  },
  Ny = function g(l, r, i) {
    var f = r - l;
    return xe(l)
      ? lm(l, g(0, l.length), r)
      : Rn(i, function (c) {
          return ((f + ((c - l) % f)) % f) + l;
        });
  },
  By = function g(l, r, i) {
    var f = r - l,
      c = f * 2;
    return xe(l)
      ? lm(l, g(0, l.length - 1), r)
      : Rn(i, function (o) {
          return ((o = (c + ((o - l) % c)) % c || 0), l + (o > f ? c - o : o));
        });
  },
  ru = function (l) {
    return l.replace(my, function (r) {
      var i = r.indexOf("[") + 1,
        f = r.substring(i || 7, i ? r.indexOf("]") : r.length - 1).split(gy);
      return nm(i ? f : +f[0], i ? 0 : +f[1], +f[2] || 1e-5);
    });
  },
  im = function (l, r, i, f, c) {
    var o = r - l,
      h = f - i;
    return Rn(c, function (p) {
      return i + (((p - l) / o) * h || 0);
    });
  },
  Uy = function g(l, r, i, f) {
    var c = isNaN(l + r)
      ? 0
      : function (S) {
          return (1 - S) * l + S * r;
        };
    if (!c) {
      var o = oe(l),
        h = {},
        p,
        m,
        v,
        T,
        j;
      if ((i === !0 && (f = 1) && (i = null), o))
        ((l = { p: l }), (r = { p: r }));
      else if (xe(l) && !xe(r)) {
        for (v = [], T = l.length, j = T - 2, m = 1; m < T; m++)
          v.push(g(l[m - 1], l[m]));
        (T--,
          (c = function (M) {
            M *= T;
            var b = Math.min(j, ~~M);
            return v[b](M - b);
          }),
          (i = r));
      } else f || (l = Wl(xe(l) ? [] : {}, l));
      if (!v) {
        for (p in r) Kc.call(h, l, p, "get", r[p]);
        c = function (M) {
          return $c(M, h) || (o ? l.p : l);
        };
      }
    }
    return Rn(i, c);
  },
  p1 = function (l, r, i) {
    var f = l.labels,
      c = ha,
      o,
      h,
      p;
    for (o in f)
      ((h = f[o] - r),
        h < 0 == !!i && h && c > (h = Math.abs(h)) && ((p = o), (c = h)));
    return p;
  },
  We = function (l, r, i) {
    var f = l.vars,
      c = f[r],
      o = Vt,
      h = l._ctx,
      p,
      m,
      v;
    if (c)
      return (
        (p = f[r + "Params"]),
        (m = f.callbackScope || l),
        i && zn.length && Ur(),
        h && (Vt = h),
        (v = p ? c.apply(m, p) : c.call(m)),
        (Vt = o),
        v
      );
  },
  Pi = function (l) {
    return (
      jn(l),
      l.scrollTrigger && l.scrollTrigger.kill(!!ye),
      l.progress() < 1 && We(l, "onInterrupt"),
      l
    );
  },
  Zl,
  um = [],
  rm = function (l) {
    if (l)
      if (((l = (!l.name && l.default) || l), Yc() || l.headless)) {
        var r = l.name,
          i = $t(l),
          f =
            r && !i && l.init
              ? function () {
                  this._props = [];
                }
              : l,
          c = {
            init: uu,
            render: $c,
            add: Kc,
            kill: Py,
            modifier: Iy,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: Wc,
            aliases: {},
            register: 0,
          };
        if ((Pl(), l !== f)) {
          if (Je[r]) return;
          (ta(f, ta(kr(l, c), o)),
            Wl(f.prototype, Wl(c, kr(l, o))),
            (Je[(f.prop = r)] = f),
            l.targetTest && (wr.push(f), (Gc[r] = 1)),
            (r =
              (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) +
              "Plugin"));
        }
        (G1(r, f), l.register && l.register(ke, f, Be));
      } else um.push(l);
  },
  qt = 255,
  tu = {
    aqua: [0, qt, qt],
    lime: [0, qt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, qt],
    navy: [0, 0, 128],
    white: [qt, qt, qt],
    olive: [128, 128, 0],
    yellow: [qt, qt, 0],
    orange: [qt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [qt, 0, 0],
    pink: [qt, 192, 203],
    cyan: [0, qt, qt],
    transparent: [qt, qt, qt, 0],
  },
  yc = function (l, r, i) {
    return (
      (l += l < 0 ? 1 : l > 1 ? -1 : 0),
      ((l * 6 < 1
        ? r + (i - r) * l * 6
        : l < 0.5
          ? i
          : l * 3 < 2
            ? r + (i - r) * (2 / 3 - l) * 6
            : r) *
        qt +
        0.5) |
        0
    );
  },
  sm = function (l, r, i) {
    var f = l ? (Ka(l) ? [l >> 16, (l >> 8) & qt, l & qt] : 0) : tu.black,
      c,
      o,
      h,
      p,
      m,
      v,
      T,
      j,
      S,
      M;
    if (!f) {
      if ((l.substr(-1) === "," && (l = l.substr(0, l.length - 1)), tu[l]))
        f = tu[l];
      else if (l.charAt(0) === "#") {
        if (
          (l.length < 6 &&
            ((c = l.charAt(1)),
            (o = l.charAt(2)),
            (h = l.charAt(3)),
            (l =
              "#" +
              c +
              c +
              o +
              o +
              h +
              h +
              (l.length === 5 ? l.charAt(4) + l.charAt(4) : ""))),
          l.length === 9)
        )
          return (
            (f = parseInt(l.substr(1, 6), 16)),
            [f >> 16, (f >> 8) & qt, f & qt, parseInt(l.substr(7), 16) / 255]
          );
        ((l = parseInt(l.substr(1), 16)),
          (f = [l >> 16, (l >> 8) & qt, l & qt]));
      } else if (l.substr(0, 3) === "hsl") {
        if (((f = M = l.match(o1)), !r))
          ((p = (+f[0] % 360) / 360),
            (m = +f[1] / 100),
            (v = +f[2] / 100),
            (o = v <= 0.5 ? v * (m + 1) : v + m - v * m),
            (c = v * 2 - o),
            f.length > 3 && (f[3] *= 1),
            (f[0] = yc(p + 1 / 3, c, o)),
            (f[1] = yc(p, c, o)),
            (f[2] = yc(p - 1 / 3, c, o)));
        else if (~l.indexOf("="))
          return ((f = l.match(q1)), i && f.length < 4 && (f[3] = 1), f);
      } else f = l.match(o1) || tu.transparent;
      f = f.map(Number);
    }
    return (
      r &&
        !M &&
        ((c = f[0] / qt),
        (o = f[1] / qt),
        (h = f[2] / qt),
        (T = Math.max(c, o, h)),
        (j = Math.min(c, o, h)),
        (v = (T + j) / 2),
        T === j
          ? (p = m = 0)
          : ((S = T - j),
            (m = v > 0.5 ? S / (2 - T - j) : S / (T + j)),
            (p =
              T === c
                ? (o - h) / S + (o < h ? 6 : 0)
                : T === o
                  ? (h - c) / S + 2
                  : (c - o) / S + 4),
            (p *= 60)),
        (f[0] = ~~(p + 0.5)),
        (f[1] = ~~(m * 100 + 0.5)),
        (f[2] = ~~(v * 100 + 0.5))),
      i && f.length < 4 && (f[3] = 1),
      f
    );
  },
  fm = function (l) {
    var r = [],
      i = [],
      f = -1;
    return (
      l.split(Mn).forEach(function (c) {
        var o = c.match(Vl) || [];
        (r.push.apply(r, o), i.push((f += o.length + 1)));
      }),
      (r.c = i),
      r
    );
  },
  y1 = function (l, r, i) {
    var f = "",
      c = (l + f).match(Mn),
      o = r ? "hsla(" : "rgba(",
      h = 0,
      p,
      m,
      v,
      T;
    if (!c) return l;
    if (
      ((c = c.map(function (j) {
        return (
          (j = sm(j, r, 1)) &&
          o +
            (r ? j[0] + "," + j[1] + "%," + j[2] + "%," + j[3] : j.join(",")) +
            ")"
        );
      })),
      i && ((v = fm(l)), (p = i.c), p.join(f) !== v.c.join(f)))
    )
      for (m = l.replace(Mn, "1").split(Vl), T = m.length - 1; h < T; h++)
        f +=
          m[h] +
          (~p.indexOf(h)
            ? c.shift() || o + "0,0,0,0)"
            : (v.length ? v : c.length ? c : i).shift());
    if (!m)
      for (m = l.split(Mn), T = m.length - 1; h < T; h++) f += m[h] + c[h];
    return f + m[T];
  },
  Mn = (function () {
    var g =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      l;
    for (l in tu) g += "|" + l + "\\b";
    return new RegExp(g + ")", "gi");
  })(),
  ky = /hsl[a]?\(/,
  cm = function (l) {
    var r = l.join(" "),
      i;
    if (((Mn.lastIndex = 0), Mn.test(r)))
      return (
        (i = ky.test(r)),
        (l[1] = y1(l[1], i)),
        (l[0] = y1(l[0], i, fm(l[1]))),
        !0
      );
  },
  su,
  Fe = (function () {
    var g = Date.now,
      l = 500,
      r = 33,
      i = g(),
      f = i,
      c = 1e3 / 240,
      o = c,
      h = [],
      p,
      m,
      v,
      T,
      j,
      S,
      M = function b(A) {
        var k = g() - f,
          q = A === !0,
          Q,
          K,
          V,
          P;
        if (
          ((k > l || k < 0) && (i += k - r),
          (f += k),
          (V = f - i),
          (Q = V - o),
          (Q > 0 || q) &&
            ((P = ++T.frame),
            (j = V - T.time * 1e3),
            (T.time = V = V / 1e3),
            (o += Q + (Q >= c ? 4 : c - Q)),
            (K = 1)),
          q || (p = m(b)),
          K)
        )
          for (S = 0; S < h.length; S++) h[S](V, j, P, A);
      };
    return (
      (T = {
        time: 0,
        frame: 0,
        tick: function () {
          M(!0);
        },
        deltaRatio: function (A) {
          return j / (1e3 / (A || 60));
        },
        wake: function () {
          L1 &&
            (!zc &&
              Yc() &&
              ((Ta = zc = window),
              (Lc = Ta.document || {}),
              (Pe.gsap = ke),
              (Ta.gsapVersions || (Ta.gsapVersions = [])).push(ke.version),
              X1(Br || Ta.GreenSockGlobals || (!Ta.gsap && Ta) || {}),
              um.forEach(rm)),
            (v = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            p && T.sleep(),
            (m =
              v ||
              function (A) {
                return setTimeout(A, (o - T.time * 1e3 + 1) | 0);
              }),
            (su = 1),
            M(2));
        },
        sleep: function () {
          ((v ? cancelAnimationFrame : clearTimeout)(p), (su = 0), (m = uu));
        },
        lagSmoothing: function (A, k) {
          ((l = A || 1 / 0), (r = Math.min(k || 33, l)));
        },
        fps: function (A) {
          ((c = 1e3 / (A || 240)), (o = T.time * 1e3 + c));
        },
        add: function (A, k, q) {
          var Q = k
            ? function (K, V, P, Y) {
                (A(K, V, P, Y), T.remove(Q));
              }
            : A;
          return (T.remove(A), h[q ? "unshift" : "push"](Q), Pl(), Q);
        },
        remove: function (A, k) {
          ~(k = h.indexOf(A)) && h.splice(k, 1) && S >= k && S--;
        },
        _listeners: h,
      }),
      T
    );
  })(),
  Pl = function () {
    return !su && Fe.wake();
  },
  Mt = {},
  Hy = /^[\d.\-M][\d.\-,\s]/,
  qy = /["']/g,
  Yy = function (l) {
    for (
      var r = {},
        i = l.substr(1, l.length - 3).split(":"),
        f = i[0],
        c = 1,
        o = i.length,
        h,
        p,
        m;
      c < o;
      c++
    )
      ((p = i[c]),
        (h = c !== o - 1 ? p.lastIndexOf(",") : p.length),
        (m = p.substr(0, h)),
        (r[f] = isNaN(m) ? m.replace(qy, "").trim() : +m),
        (f = p.substr(h + 1).trim()));
    return r;
  },
  Ly = function (l) {
    var r = l.indexOf("(") + 1,
      i = l.indexOf(")"),
      f = l.indexOf("(", r);
    return l.substring(r, ~f && f < i ? l.indexOf(")", i + 1) : i);
  },
  Xy = function (l) {
    var r = (l + "").split("("),
      i = Mt[r[0]];
    return i && r.length > 1 && i.config
      ? i.config.apply(
          null,
          ~l.indexOf("{") ? [Yy(r[1])] : Ly(l).split(",").map(K1),
        )
      : Mt._CE && Hy.test(l)
        ? Mt._CE("", l)
        : i;
  },
  Gy = function (l) {
    return function (r) {
      return 1 - l(1 - r);
    };
  },
  al = function (l, r) {
    return (l && ($t(l) ? l : Mt[l] || Xy(l))) || r;
  },
  ll = function (l, r, i, f) {
    (i === void 0 &&
      (i = function (p) {
        return 1 - r(1 - p);
      }),
      f === void 0 &&
        (f = function (p) {
          return p < 0.5 ? r(p * 2) / 2 : 1 - r((1 - p) * 2) / 2;
        }));
    var c = { easeIn: r, easeOut: i, easeInOut: f },
      o;
    return (
      Ne(l, function (h) {
        ((Mt[h] = Pe[h] = c), (Mt[(o = h.toLowerCase())] = i));
        for (var p in c)
          Mt[
            o + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")
          ] = Mt[h + "." + p] = c[p];
      }),
      c
    );
  },
  om = function (l) {
    return function (r) {
      return r < 0.5 ? (1 - l(1 - r * 2)) / 2 : 0.5 + l((r - 0.5) * 2) / 2;
    };
  },
  vc = function g(l, r, i) {
    var f = r >= 1 ? r : 1,
      c = (i || (l ? 0.3 : 0.45)) / (r < 1 ? r : 1),
      o = (c / Tc) * (Math.asin(1 / f) || 0),
      h = function (v) {
        return v === 1 ? 1 : f * Math.pow(2, -10 * v) * hy((v - o) * c) + 1;
      },
      p =
        l === "out"
          ? h
          : l === "in"
            ? function (m) {
                return 1 - h(1 - m);
              }
            : om(h);
    return (
      (c = Tc / c),
      (p.config = function (m, v) {
        return g(l, m, v);
      }),
      p
    );
  },
  _c = function g(l, r) {
    r === void 0 && (r = 1.70158);
    var i = function (o) {
        return o ? --o * o * ((r + 1) * o + r) + 1 : 0;
      },
      f =
        l === "out"
          ? i
          : l === "in"
            ? function (c) {
                return 1 - i(1 - c);
              }
            : om(i);
    return (
      (f.config = function (c) {
        return g(l, c);
      }),
      f
    );
  };
Ne("Linear,Quad,Cubic,Quart,Quint,Strong", function (g, l) {
  var r = l < 5 ? l + 1 : l;
  ll(
    g + ",Power" + (r - 1),
    l
      ? function (i) {
          return Math.pow(i, r);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, r);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, r) / 2
        : 1 - Math.pow((1 - i) * 2, r) / 2;
    },
  );
});
Mt.Linear.easeNone = Mt.none = Mt.Linear.easeIn;
ll("Elastic", vc("in"), vc("out"), vc());
(function (g, l) {
  var r = 1 / l,
    i = 2 * r,
    f = 2.5 * r,
    c = function (h) {
      return h < r
        ? g * h * h
        : h < i
          ? g * Math.pow(h - 1.5 / l, 2) + 0.75
          : h < f
            ? g * (h -= 2.25 / l) * h + 0.9375
            : g * Math.pow(h - 2.625 / l, 2) + 0.984375;
    };
  ll(
    "Bounce",
    function (o) {
      return 1 - c(1 - o);
    },
    c,
  );
})(7.5625, 2.75);
ll("Expo", function (g) {
  return Math.pow(2, 10 * (g - 1)) * g + g * g * g * g * g * g * (1 - g);
});
ll("Circ", function (g) {
  return -(k1(1 - g * g) - 1);
});
ll("Sine", function (g) {
  return g === 1 ? 1 : -dy(g * cy) + 1;
});
ll("Back", _c("in"), _c("out"), _c());
Mt.SteppedEase =
  Mt.steps =
  Pe.SteppedEase =
    {
      config: function (l, r) {
        l === void 0 && (l = 1);
        var i = 1 / l,
          f = l + (r ? 0 : 1),
          c = r ? 1 : 0,
          o = 1 - Yt;
        return function (h) {
          return (((f * du(0, o, h)) | 0) + c) * i;
        };
      },
    };
lu.ease = Mt["quad.out"];
Ne(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (g) {
    return (Qc += g + "," + g + "Params,");
  },
);
var dm = function (l, r) {
    ((this.id = oy++),
      (l._gsap = this),
      (this.target = l),
      (this.harness = r),
      (this.get = r ? r.get : V1),
      (this.set = r ? r.getSetter : Wc));
  },
  fu = (function () {
    function g(r) {
      ((this.vars = r),
        (this._delay = +r.delay || 0),
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
          ((this._rDelay = r.repeatDelay || 0),
          (this._yoyo = !!r.yoyo || !!r.yoyoEase)),
        (this._ts = 1),
        Il(this, +r.duration, 1, 1),
        (this.data = r.data),
        Vt && ((this._ctx = Vt), Vt.data.push(this)),
        su || Fe.wake());
    }
    var l = g.prototype;
    return (
      (l.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (l.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i,
            )
          : this.totalDuration() && this._dur;
      }),
      (l.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            Il(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (l.totalTime = function (i, f) {
        if ((Pl(), !arguments.length)) return this._tTime;
        var c = this._dp;
        if (c && c.smoothChildTiming && this._ts) {
          for (Qr(this, i), !c._dp || c.parent || W1(c, this); c && c.parent;)
            (c.parent._time !==
              c._start +
                (c._ts >= 0
                  ? c._tTime / c._ts
                  : (c.totalDuration() - c._tTime) / -c._ts) &&
              c.totalTime(c._tTime, !0),
              (c = c.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            za(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !f) ||
            (this._initted && Math.abs(this._zTime) === Yt) ||
            (!this._initted && this._dur && i) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), Z1(this, i, f)),
          this
        );
      }),
      (l.time = function (i, f) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + m1(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              f,
            )
          : this._time;
      }),
      (l.totalProgress = function (i, f) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, f)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (l.progress = function (i, f) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                m1(this),
              f,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (l.iteration = function (i, f) {
        var c = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * c, f)
          : this._repeat
            ? $l(this._tTime, c) + 1
            : 1;
      }),
      (l.timeScale = function (i, f) {
        if (!arguments.length) return this._rts === -Yt ? 0 : this._rts;
        if (this._rts === i) return this;
        var c =
          this.parent && this._ts ? Hr(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -Yt ? 0 : this._rts),
          this.totalTime(
            du(-Math.abs(this._delay), this.totalDuration(), c),
            f !== !1,
          ),
          Gr(this),
          Ty(this)
        );
      }),
      (l.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Pl(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== Yt &&
                      (this._tTime -= Yt),
                  ))),
            this)
          : this._ps;
      }),
      (l.startTime = function (i) {
        if (arguments.length) {
          this._start = Zt(i);
          var f = this.parent || this._dp;
          return (
            f &&
              (f._sort || !this.parent) &&
              za(f, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (l.endTime = function (i) {
        return (
          this._start +
          (we(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (l.rawTime = function (i) {
        var f = this.parent || this._dp;
        return f
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? Hr(f.rawTime(i), this)
              : this._tTime
          : this._tTime;
      }),
      (l.revert = function (i) {
        i === void 0 && (i = _y);
        var f = ye;
        return (
          (ye = i),
          Zc(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (ye = f),
          this
        );
      }),
      (l.globalTime = function (i) {
        for (var f = this, c = arguments.length ? i : f.rawTime(); f;)
          ((c = f._start + c / (Math.abs(f._ts) || 1)), (f = f._dp));
        return !this.parent && this._sat ? this._sat.globalTime(i) : c;
      }),
      (l.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), g1(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (l.repeatDelay = function (i) {
        if (arguments.length) {
          var f = this._time;
          return ((this._rDelay = i), g1(this), f ? this.time(f) : this);
        }
        return this._rDelay;
      }),
      (l.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (l.seek = function (i, f) {
        return this.totalTime(da(this, i), we(f));
      }),
      (l.restart = function (i, f) {
        return (
          this.play().totalTime(i ? -this._delay : 0, we(f)),
          this._dur || (this._zTime = -Yt),
          this
        );
      }),
      (l.play = function (i, f) {
        return (i != null && this.seek(i, f), this.reversed(!1).paused(!1));
      }),
      (l.reverse = function (i, f) {
        return (
          i != null && this.seek(i || this.totalDuration(), f),
          this.reversed(!0).paused(!1)
        );
      }),
      (l.pause = function (i, f) {
        return (i != null && this.seek(i, f), this.paused(!0));
      }),
      (l.resume = function () {
        return this.paused(!1);
      }),
      (l.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -Yt : 0)),
            this)
          : this._rts < 0;
      }),
      (l.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -Yt), this);
      }),
      (l.isActive = function () {
        var i = this.parent || this._dp,
          f = this._start,
          c;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (c = i.rawTime(!0)) >= f &&
            c < this.endTime(!0) - Yt)
        );
      }),
      (l.eventCallback = function (i, f, c) {
        var o = this.vars;
        return arguments.length > 1
          ? (f
              ? ((o[i] = f),
                c && (o[i + "Params"] = c),
                i === "onUpdate" && (this._onUpdate = f))
              : delete o[i],
            this)
          : o[i];
      }),
      (l.then = function (i) {
        var f = this,
          c = f._prom;
        return new Promise(function (o) {
          var h = $t(i) ? i : J1,
            p = function () {
              var v = f.then;
              ((f.then = null),
                c && c(),
                $t(h) && (h = h(f)) && (h.then || h === f) && (f.then = v),
                o(h),
                (f.then = v));
            };
          (f._initted && f.totalProgress() === 1 && f._ts >= 0) ||
          (!f._tTime && f._ts < 0)
            ? p()
            : (f._prom = p);
        });
      }),
      (l.kill = function () {
        Pi(this);
      }),
      g
    );
  })();
ta(fu.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -Yt,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var De = (function (g) {
  U1(l, g);
  function l(i, f) {
    var c;
    return (
      i === void 0 && (i = {}),
      (c = g.call(this, i) || this),
      (c.labels = {}),
      (c.smoothChildTiming = !!i.smoothChildTiming),
      (c.autoRemoveChildren = !!i.autoRemoveChildren),
      (c._sort = we(i.sortChildren)),
      Kt && za(i.parent || Kt, Va(c), f),
      i.reversed && c.reverse(),
      i.paused && c.paused(!0),
      i.scrollTrigger && $1(Va(c), i.scrollTrigger),
      c
    );
  }
  var r = l.prototype;
  return (
    (r.to = function (f, c, o) {
      return (au(0, arguments, this), this);
    }),
    (r.from = function (f, c, o) {
      return (au(1, arguments, this), this);
    }),
    (r.fromTo = function (f, c, o, h) {
      return (au(2, arguments, this), this);
    }),
    (r.set = function (f, c, o) {
      return (
        (c.duration = 0),
        (c.parent = this),
        eu(c).repeatDelay || (c.repeat = 0),
        (c.immediateRender = !!c.immediateRender),
        new ue(f, c, da(this, o), 1),
        this
      );
    }),
    (r.call = function (f, c, o) {
      return za(this, ue.delayedCall(0, f, c), o);
    }),
    (r.staggerTo = function (f, c, o, h, p, m, v) {
      return (
        (o.duration = c),
        (o.stagger = o.stagger || h),
        (o.onComplete = m),
        (o.onCompleteParams = v),
        (o.parent = this),
        new ue(f, o, da(this, p)),
        this
      );
    }),
    (r.staggerFrom = function (f, c, o, h, p, m, v) {
      return (
        (o.runBackwards = 1),
        (eu(o).immediateRender = we(o.immediateRender)),
        this.staggerTo(f, c, o, h, p, m, v)
      );
    }),
    (r.staggerFromTo = function (f, c, o, h, p, m, v, T) {
      return (
        (h.startAt = o),
        (eu(h).immediateRender = we(h.immediateRender)),
        this.staggerTo(f, c, h, p, m, v, T)
      );
    }),
    (r.render = function (f, c, o) {
      var h = this._time,
        p = this._dirty ? this.totalDuration() : this._tDur,
        m = this._dur,
        v = f <= 0 ? 0 : Zt(f),
        T = this._zTime < 0 != f < 0 && (this._initted || !m),
        j,
        S,
        M,
        b,
        A,
        k,
        q,
        Q,
        K,
        V,
        P,
        Y;
      if (
        (this !== Kt && v > p && f >= 0 && (v = p), v !== this._tTime || o || T)
      ) {
        if (
          (h !== this._time &&
            m &&
            ((v += this._time - h), (f += this._time - h)),
          (j = v),
          (K = this._start),
          (Q = this._ts),
          (k = !Q),
          T && (m || (h = this._zTime), (f || !c) && (this._zTime = f)),
          this._repeat)
        ) {
          if (
            ((P = this._yoyo),
            (A = m + this._rDelay),
            this._repeat < -1 && f < 0)
          )
            return this.totalTime(A * 100 + f, c, o);
          if (
            ((j = Zt(v % A)),
            v === p
              ? ((b = this._repeat), (j = m))
              : ((V = Zt(v / A)),
                (b = ~~V),
                b && b === V && ((j = m), b--),
                j > m && (j = m)),
            (V = $l(this._tTime, A)),
            !h &&
              this._tTime &&
              V !== b &&
              this._tTime - V * A - this._dur <= 0 &&
              (V = b),
            P && b & 1 && ((j = m - j), (Y = 1)),
            b !== V && !this._lock)
          ) {
            var W = P && V & 1,
              F = W === (P && b & 1);
            if (
              (b < V && (W = !W),
              (h = W ? 0 : v % m ? m : v),
              (this._lock = 1),
              (this.render(h || (Y ? 0 : Zt(b * A)), c, !m)._lock = 0),
              (this._tTime = v),
              !c && this.parent && We(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !Y &&
                ((this.invalidate()._lock = 1), (V = b)),
              (h && h !== this._time) ||
                k !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((m = this._dur),
              (p = this._tDur),
              F &&
                ((this._lock = 2),
                (h = W ? m : -1e-4),
                this.render(h, !0),
                this.vars.repeatRefresh && !Y && this.invalidate()),
              (this._lock = 0),
              !this._ts && !k)
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((q = jy(this, Zt(h), Zt(j))), q && (v -= j - (j = q._start))),
          (this._tTime = v),
          (this._time = j),
          (this._act = !!Q),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = f),
            (h = 0)),
          !h && v && m && !c && !V && (We(this, "onStart"), this._tTime !== v))
        )
          return this;
        if (j >= h && f >= 0)
          for (S = this._first; S;) {
            if (
              ((M = S._next), (S._act || j >= S._start) && S._ts && q !== S)
            ) {
              if (S.parent !== this) return this.render(f, c, o);
              if (
                (S.render(
                  S._ts > 0
                    ? (j - S._start) * S._ts
                    : (S._dirty ? S.totalDuration() : S._tDur) +
                        (j - S._start) * S._ts,
                  c,
                  o,
                ),
                j !== this._time || (!this._ts && !k))
              ) {
                ((q = 0), M && (v += this._zTime = -Yt));
                break;
              }
            }
            S = M;
          }
        else {
          S = this._last;
          for (var et = f < 0 ? f : j; S;) {
            if (((M = S._prev), (S._act || et <= S._end) && S._ts && q !== S)) {
              if (S.parent !== this) return this.render(f, c, o);
              if (
                (S.render(
                  S._ts > 0
                    ? (et - S._start) * S._ts
                    : (S._dirty ? S.totalDuration() : S._tDur) +
                        (et - S._start) * S._ts,
                  c,
                  o || (ye && Zc(S)),
                ),
                j !== this._time || (!this._ts && !k))
              ) {
                ((q = 0), M && (v += this._zTime = et ? -Yt : Yt));
                break;
              }
            }
            S = M;
          }
        }
        if (
          q &&
          !c &&
          (this.pause(),
          (q.render(j >= h ? 0 : -Yt)._zTime = j >= h ? 1 : -1),
          this._ts)
        )
          return ((this._start = K), Gr(this), this.render(f, c, o));
        (this._onUpdate && !c && We(this, "onUpdate", !0),
          ((v === p && this._tTime >= this.totalDuration()) || (!v && h)) &&
            (K === this._start || Math.abs(Q) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((f || !m) &&
                ((v === p && this._ts > 0) || (!v && this._ts < 0)) &&
                jn(this, 1),
              !c &&
                !(f < 0 && !h) &&
                (v || h || !p) &&
                (We(
                  this,
                  v === p && f >= 0 ? "onComplete" : "onReverseComplete",
                  !0,
                ),
                this._prom &&
                  !(v < p && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (r.add = function (f, c) {
      var o = this;
      if ((Ka(c) || (c = da(this, c, f)), !(f instanceof fu))) {
        if (xe(f))
          return (
            f.forEach(function (h) {
              return o.add(h, c);
            }),
            this
          );
        if (oe(f)) return this.addLabel(f, c);
        if ($t(f)) f = ue.delayedCall(0, f);
        else return this;
      }
      return this !== f ? za(this, f, c) : this;
    }),
    (r.getChildren = function (f, c, o, h) {
      (f === void 0 && (f = !0),
        c === void 0 && (c = !0),
        o === void 0 && (o = !0),
        h === void 0 && (h = -ha));
      for (var p = [], m = this._first; m;)
        (m._start >= h &&
          (m instanceof ue
            ? c && p.push(m)
            : (o && p.push(m), f && p.push.apply(p, m.getChildren(!0, c, o)))),
          (m = m._next));
      return p;
    }),
    (r.getById = function (f) {
      for (var c = this.getChildren(1, 1, 1), o = c.length; o--;)
        if (c[o].vars.id === f) return c[o];
    }),
    (r.remove = function (f) {
      return oe(f)
        ? this.removeLabel(f)
        : $t(f)
          ? this.killTweensOf(f)
          : (f.parent === this && Xr(this, f),
            f === this._recent && (this._recent = this._last),
            el(this));
    }),
    (r.totalTime = function (f, c) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Zt(
              Fe.time -
                (this._ts > 0
                  ? f / this._ts
                  : (this.totalDuration() - f) / -this._ts),
            )),
          g.prototype.totalTime.call(this, f, c),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (r.addLabel = function (f, c) {
      return ((this.labels[f] = da(this, c)), this);
    }),
    (r.removeLabel = function (f) {
      return (delete this.labels[f], this);
    }),
    (r.addPause = function (f, c, o) {
      var h = ue.delayedCall(0, c || uu, o);
      return (
        (h.data = "isPause"),
        (this._hasPause = 1),
        za(this, h, da(this, f))
      );
    }),
    (r.removePause = function (f) {
      var c = this._first;
      for (f = da(this, f); c;)
        (c._start === f && c.data === "isPause" && jn(c), (c = c._next));
    }),
    (r.killTweensOf = function (f, c, o) {
      for (var h = this.getTweensOf(f, o), p = h.length; p--;)
        xn !== h[p] && h[p].kill(f, c);
      return this;
    }),
    (r.getTweensOf = function (f, c) {
      for (var o = [], h = ma(f), p = this._first, m = Ka(c), v; p;)
        (p instanceof ue
          ? by(p._targets, h) &&
            (m
              ? (!xn || (p._initted && p._ts)) &&
                p.globalTime(0) <= c &&
                p.globalTime(p.totalDuration()) > c
              : !c || p.isActive()) &&
            o.push(p)
          : (v = p.getTweensOf(h, c)).length && o.push.apply(o, v),
          (p = p._next));
      return o;
    }),
    (r.tweenTo = function (f, c) {
      c = c || {};
      var o = this,
        h = da(o, f),
        p = c,
        m = p.startAt,
        v = p.onStart,
        T = p.onStartParams,
        j = p.immediateRender,
        S,
        M = ue.to(
          o,
          ta(
            {
              ease: c.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: h,
              overwrite: "auto",
              duration:
                c.duration ||
                Math.abs(
                  (h - (m && "time" in m ? m.time : o._time)) / o.timeScale(),
                ) ||
                Yt,
              onStart: function () {
                if ((o.pause(), !S)) {
                  var A =
                    c.duration ||
                    Math.abs(
                      (h - (m && "time" in m ? m.time : o._time)) /
                        o.timeScale(),
                    );
                  (M._dur !== A && Il(M, A, 0, 1).render(M._time, !0, !0),
                    (S = 1));
                }
                v && v.apply(M, T || []);
              },
            },
            c,
          ),
        );
      return j ? M.render(0) : M;
    }),
    (r.tweenFromTo = function (f, c, o) {
      return this.tweenTo(c, ta({ startAt: { time: da(this, f) } }, o));
    }),
    (r.recent = function () {
      return this._recent;
    }),
    (r.nextLabel = function (f) {
      return (f === void 0 && (f = this._time), p1(this, da(this, f)));
    }),
    (r.previousLabel = function (f) {
      return (f === void 0 && (f = this._time), p1(this, da(this, f), 1));
    }),
    (r.currentLabel = function (f) {
      return arguments.length
        ? this.seek(f, !0)
        : this.previousLabel(this._time + Yt);
    }),
    (r.shiftChildren = function (f, c, o) {
      o === void 0 && (o = 0);
      var h = this._first,
        p = this.labels,
        m;
      for (f = Zt(f); h;)
        (h._start >= o && ((h._start += f), (h._end += f)), (h = h._next));
      if (c) for (m in p) p[m] >= o && (p[m] += f);
      return el(this);
    }),
    (r.invalidate = function (f) {
      var c = this._first;
      for (this._lock = 0; c;) (c.invalidate(f), (c = c._next));
      return g.prototype.invalidate.call(this, f);
    }),
    (r.clear = function (f) {
      f === void 0 && (f = !0);
      for (var c = this._first, o; c;) ((o = c._next), this.remove(c), (c = o));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        f && (this.labels = {}),
        el(this)
      );
    }),
    (r.totalDuration = function (f) {
      var c = 0,
        o = this,
        h = o._last,
        p = ha,
        m,
        v,
        T;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -f : f),
        );
      if (o._dirty) {
        for (T = o.parent; h;)
          ((m = h._prev),
            h._dirty && h.totalDuration(),
            (v = h._start),
            v > p && o._sort && h._ts && !o._lock
              ? ((o._lock = 1), (za(o, h, v - h._delay, 1)._lock = 0))
              : (p = v),
            v < 0 &&
              h._ts &&
              ((c -= v),
              ((!T && !o._dp) || (T && T.smoothChildTiming)) &&
                ((o._start += Zt(v / o._ts)), (o._time -= v), (o._tTime -= v)),
              o.shiftChildren(-v, !1, -1 / 0),
              (p = 0)),
            h._end > c && h._ts && (c = h._end),
            (h = m));
        (Il(o, o === Kt && o._time > c ? o._time : c, 1, 1), (o._dirty = 0));
      }
      return o._tDur;
    }),
    (l.updateRoot = function (f) {
      if ((Kt._ts && (Z1(Kt, Hr(f, Kt)), (Q1 = Fe.frame)), Fe.frame >= d1)) {
        d1 += Ie.autoSleep || 120;
        var c = Kt._first;
        if ((!c || !c._ts) && Ie.autoSleep && Fe._listeners.length < 2) {
          for (; c && !c._ts;) c = c._next;
          c || Fe.sleep();
        }
      }
    }),
    l
  );
})(fu);
ta(De.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Qy = function (l, r, i, f, c, o, h) {
    var p = new Be(this._pt, l, r, 0, 1, vm, null, c),
      m = 0,
      v = 0,
      T,
      j,
      S,
      M,
      b,
      A,
      k,
      q;
    for (
      p.b = i,
        p.e = f,
        i += "",
        f += "",
        (k = ~f.indexOf("random(")) && (f = ru(f)),
        o && ((q = [i, f]), o(q, l, r), (i = q[0]), (f = q[1])),
        j = i.match(gc) || [];
      (T = gc.exec(f));
    )
      ((M = T[0]),
        (b = f.substring(m, T.index)),
        S ? (S = (S + 1) % 5) : b.substr(-5) === "rgba(" && (S = 1),
        M !== j[v++] &&
          ((A = parseFloat(j[v - 1]) || 0),
          (p._pt = {
            _next: p._pt,
            p: b || v === 1 ? b : ",",
            s: A,
            c: M.charAt(1) === "=" ? Kl(A, M) - A : parseFloat(M) - A,
            m: S && S < 4 ? Math.round : 0,
          }),
          (m = gc.lastIndex)));
    return (
      (p.c = m < f.length ? f.substring(m, f.length) : ""),
      (p.fp = h),
      (Y1.test(f) || k) && (p.e = 0),
      (this._pt = p),
      p
    );
  },
  Kc = function (l, r, i, f, c, o, h, p, m, v) {
    $t(f) && (f = f(c || 0, l, o));
    var T = l[r],
      j =
        i !== "get"
          ? i
          : $t(T)
            ? m
              ? l[
                  r.indexOf("set") || !$t(l["get" + r.substr(3)])
                    ? r
                    : "get" + r.substr(3)
                ](m)
              : l[r]()
            : T,
      S = $t(T) ? (m ? Fy : pm) : Fc,
      M;
    if (
      (oe(f) &&
        (~f.indexOf("random(") && (f = ru(f)),
        f.charAt(1) === "=" &&
          ((M = Kl(j, f) + (be(j) || 0)), (M || M === 0) && (f = M))),
      !v || j !== f || Cc)
    )
      return !isNaN(j * f) && f !== ""
        ? ((M = new Be(
            this._pt,
            l,
            r,
            +j || 0,
            f - (j || 0),
            typeof T == "boolean" ? $y : ym,
            0,
            S,
          )),
          m && (M.fp = m),
          h && M.modifier(h, this, l),
          (this._pt = M))
        : (!T && !(r in l) && Xc(r, f),
          Qy.call(this, l, r, j, f, S, p || Ie.stringFilter, m));
  },
  Vy = function (l, r, i, f, c) {
    if (
      ($t(l) && (l = nu(l, c, r, i, f)),
      !Ea(l) || (l.style && l.nodeType) || xe(l) || H1(l))
    )
      return oe(l) ? nu(l, c, r, i, f) : l;
    var o = {},
      h;
    for (h in l) o[h] = nu(l[h], c, r, i, f);
    return o;
  },
  hm = function (l, r, i, f, c, o) {
    var h, p, m, v;
    if (
      Je[l] &&
      (h = new Je[l]()).init(
        c,
        h.rawVars ? r[l] : Vy(r[l], f, c, o, i),
        i,
        f,
        o,
      ) !== !1 &&
      ((i._pt = p = new Be(i._pt, c, l, 0, 1, h.render, h, 0, h.priority)),
      i !== Zl)
    )
      for (m = i._ptLookup[i._targets.indexOf(c)], v = h._props.length; v--;)
        m[h._props[v]] = p;
    return h;
  },
  xn,
  Cc,
  Jc = function g(l, r, i) {
    var f = l.vars,
      c = f.ease,
      o = f.startAt,
      h = f.immediateRender,
      p = f.lazy,
      m = f.onUpdate,
      v = f.runBackwards,
      T = f.yoyoEase,
      j = f.keyframes,
      S = f.autoRevert,
      M = l._dur,
      b = l._startAt,
      A = l._targets,
      k = l.parent,
      q = k && k.data === "nested" ? k.vars.targets : A,
      Q = l._overwrite === "auto" && !Hc,
      K = l.timeline,
      V = f.easeReverse || T,
      P,
      Y,
      W,
      F,
      et,
      ot,
      ct,
      yt,
      vt,
      Et,
      B,
      J,
      lt;
    if (
      (K && (!j || !c) && (c = "none"),
      (l._ease = al(c, lu.ease)),
      (l._rEase = V && (al(V) || l._ease)),
      (l._from = !K && !!f.runBackwards),
      l._from && (l.ratio = 1),
      !K || (j && !f.stagger))
    ) {
      if (
        ((yt = A[0] ? tl(A[0]).harness : 0),
        (J = yt && f[yt.prop]),
        (P = kr(f, Gc)),
        b &&
          (b._zTime < 0 && b.progress(1),
          r < 0 && v && h && !S ? b.render(-1, !0) : b.revert(v && M ? Dr : vy),
          (b._lazy = 0)),
        o)
      ) {
        if (
          (jn(
            (l._startAt = ue.set(
              A,
              ta(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: k,
                  immediateRender: !0,
                  lazy: !b && we(p),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    m &&
                    function () {
                      return We(l, "onUpdate");
                    },
                  stagger: 0,
                },
                o,
              ),
            )),
          ),
          (l._startAt._dp = 0),
          (l._startAt._sat = l),
          r < 0 && (ye || (!h && !S)) && l._startAt.revert(Dr),
          h && M && r <= 0 && i <= 0)
        ) {
          r && (l._zTime = r);
          return;
        }
      } else if (v && M && !b) {
        if (
          (r && (h = !1),
          (W = ta(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: h && !b && we(p),
              immediateRender: h,
              stagger: 0,
              parent: k,
            },
            P,
          )),
          J && (W[yt.prop] = J),
          jn((l._startAt = ue.set(A, W))),
          (l._startAt._dp = 0),
          (l._startAt._sat = l),
          r < 0 && (ye ? l._startAt.revert(Dr) : l._startAt.render(-1, !0)),
          (l._zTime = r),
          !h)
        )
          g(l._startAt, Yt, Yt);
        else if (!r) return;
      }
      for (
        l._pt = l._ptCache = 0, p = (M && we(p)) || (p && !M), Y = 0;
        Y < A.length;
        Y++
      ) {
        if (
          ((et = A[Y]),
          (ct = et._gsap || Vc(A)[Y]._gsap),
          (l._ptLookup[Y] = Et = {}),
          Mc[ct.id] && zn.length && Ur(),
          (B = q === A ? Y : q.indexOf(et)),
          yt &&
            (vt = new yt()).init(et, J || P, l, B, q) !== !1 &&
            ((l._pt = F =
              new Be(l._pt, et, vt.name, 0, 1, vt.render, vt, 0, vt.priority)),
            vt._props.forEach(function (_t) {
              Et[_t] = F;
            }),
            vt.priority && (ot = 1)),
          !yt || J)
        )
          for (W in P)
            Je[W] && (vt = hm(W, P, l, B, et, q))
              ? vt.priority && (ot = 1)
              : (Et[W] = F =
                  Kc.call(l, et, W, "get", P[W], B, q, 0, f.stringFilter));
        (l._op && l._op[Y] && l.kill(et, l._op[Y]),
          Q &&
            l._pt &&
            ((xn = l),
            Kt.killTweensOf(et, Et, l.globalTime(r)),
            (lt = !l.parent),
            (xn = 0)),
          l._pt && p && (Mc[ct.id] = 1));
      }
      (ot && _m(l), l._onInit && l._onInit(l));
    }
    ((l._onUpdate = m),
      (l._initted = (!l._op || l._pt) && !lt),
      j && r <= 0 && K.render(ha, !0, !0));
  },
  Zy = function (l, r, i, f, c, o, h, p) {
    var m = ((l._pt && l._ptCache) || (l._ptCache = {}))[r],
      v,
      T,
      j,
      S;
    if (!m)
      for (
        m = l._ptCache[r] = [], j = l._ptLookup, S = l._targets.length;
        S--;
      ) {
        if (((v = j[S][r]), v && v.d && v.d._pt))
          for (v = v.d._pt; v && v.p !== r && v.fp !== r;) v = v._next;
        if (!v)
          return (
            (Cc = 1),
            (l.vars[r] = "+=0"),
            Jc(l, h),
            (Cc = 0),
            p
              ? iu(
                  r +
                    " not eligible for reset. Try splitting into individual properties",
                )
              : 1
          );
        m.push(v);
      }
    for (S = m.length; S--;)
      ((T = m[S]),
        (v = T._pt || T),
        (v.s = (f || f === 0) && !c ? f : v.s + (f || 0) + o * v.c),
        (v.c = i - v.s),
        T.e && (T.e = te(i) + be(T.e)),
        T.b && (T.b = v.s + be(T.b)));
  },
  Ky = function (l, r) {
    var i = l[0] ? tl(l[0]).harness : 0,
      f = i && i.aliases,
      c,
      o,
      h,
      p;
    if (!f) return r;
    c = Wl({}, r);
    for (o in f)
      if (o in c) for (p = f[o].split(","), h = p.length; h--;) c[p[h]] = c[o];
    return c;
  },
  Jy = function (l, r, i, f) {
    var c = r.ease || f || "power1.inOut",
      o,
      h;
    if (xe(r))
      ((h = i[l] || (i[l] = [])),
        r.forEach(function (p, m) {
          return h.push({ t: (m / (r.length - 1)) * 100, v: p, e: c });
        }));
    else
      for (o in r)
        ((h = i[o] || (i[o] = [])),
          o === "ease" || h.push({ t: parseFloat(l), v: r[o], e: c }));
  },
  nu = function (l, r, i, f, c) {
    return $t(l)
      ? l.call(r, i, f, c)
      : oe(l) && ~l.indexOf("random(")
        ? ru(l)
        : l;
  },
  mm =
    Qc +
    "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",
  gm = {};
Ne(mm + ",id,stagger,delay,duration,paused,scrollTrigger", function (g) {
  return (gm[g] = 1);
});
var ue = (function (g) {
  U1(l, g);
  function l(i, f, c, o) {
    var h;
    (typeof f == "number" && ((c.duration = f), (f = c), (c = null)),
      (h = g.call(this, o ? f : eu(f)) || this));
    var p = h.vars,
      m = p.duration,
      v = p.delay,
      T = p.immediateRender,
      j = p.stagger,
      S = p.overwrite,
      M = p.keyframes,
      b = p.defaults,
      A = p.scrollTrigger,
      k = f.parent || Kt,
      q = (xe(i) || H1(i) ? Ka(i[0]) : "length" in f) ? [i] : ma(i),
      Q,
      K,
      V,
      P,
      Y,
      W,
      F,
      et;
    if (
      ((h._targets = q.length
        ? Vc(q)
        : iu(
            "GSAP target " + i + " not found. https://gsap.com",
            !Ie.nullTargetWarn,
          ) || []),
      (h._ptLookup = []),
      (h._overwrite = S),
      M || j || Cr(m) || Cr(v))
    ) {
      f = h.vars;
      var ot = f.easeReverse || f.yoyoEase;
      if (
        ((Q = h.timeline =
          new De({
            data: "nested",
            defaults: b || {},
            targets: k && k.data === "nested" ? k.vars.targets : q,
          })),
        Q.kill(),
        (Q.parent = Q._dp = Va(h)),
        (Q._start = 0),
        j || Cr(m) || Cr(v))
      ) {
        if (((P = q.length), (F = j && em(j)), Ea(j)))
          for (Y in j) ~mm.indexOf(Y) && (et || (et = {}), (et[Y] = j[Y]));
        for (K = 0; K < P; K++)
          ((V = kr(f, gm)),
            (V.stagger = 0),
            ot && (V.easeReverse = ot),
            et && Wl(V, et),
            (W = q[K]),
            (V.duration = +nu(m, Va(h), K, W, q)),
            (V.delay = (+nu(v, Va(h), K, W, q) || 0) - h._delay),
            !j &&
              P === 1 &&
              V.delay &&
              ((h._delay = v = V.delay), (h._start += v), (V.delay = 0)),
            Q.to(W, V, F ? F(K, W, q) : 0),
            (Q._ease = Mt.none));
        Q.duration() ? (m = v = 0) : (h.timeline = 0);
      } else if (M) {
        (eu(ta(Q.vars.defaults, { ease: "none" })),
          (Q._ease = al(M.ease || f.ease || "none")));
        var ct = 0,
          yt,
          vt,
          Et;
        if (xe(M))
          (M.forEach(function (B) {
            return Q.to(q, B, ">");
          }),
            Q.duration());
        else {
          V = {};
          for (Y in M)
            Y === "ease" || Y === "easeEach" || Jy(Y, M[Y], V, M.easeEach);
          for (Y in V)
            for (
              yt = V[Y].sort(function (B, J) {
                return B.t - J.t;
              }),
                ct = 0,
                K = 0;
              K < yt.length;
              K++
            )
              ((vt = yt[K]),
                (Et = {
                  ease: vt.e,
                  duration: ((vt.t - (K ? yt[K - 1].t : 0)) / 100) * m,
                }),
                (Et[Y] = vt.v),
                Q.to(q, Et, ct),
                (ct += Et.duration));
          Q.duration() < m && Q.to({}, { duration: m - Q.duration() });
        }
      }
      m || h.duration((m = Q.duration()));
    } else h.timeline = 0;
    return (
      S === !0 && !Hc && ((xn = Va(h)), Kt.killTweensOf(q), (xn = 0)),
      za(k, Va(h), c),
      f.reversed && h.reverse(),
      f.paused && h.paused(!0),
      (T ||
        (!m &&
          !M &&
          h._start === Zt(k._time) &&
          we(T) &&
          zy(Va(h)) &&
          k.data !== "nested")) &&
        ((h._tTime = -Yt), h.render(Math.max(0, -v) || 0)),
      A && $1(Va(h), A),
      h
    );
  }
  var r = l.prototype;
  return (
    (r.render = function (f, c, o) {
      var h = this._time,
        p = this._tDur,
        m = this._dur,
        v = f < 0,
        T = f > p - Yt && !v ? p : f < Yt ? 0 : f,
        j,
        S,
        M,
        b,
        A,
        k,
        q,
        Q;
      if (!m) Ey(this, f, c, o);
      else if (
        T !== this._tTime ||
        !f ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== v) ||
        this._lazy
      ) {
        if (((j = T), (Q = this.timeline), this._repeat)) {
          if (((b = m + this._rDelay), this._repeat < -1 && v))
            return this.totalTime(b * 100 + f, c, o);
          if (
            ((j = Zt(T % b)),
            T === p
              ? ((M = this._repeat), (j = m))
              : ((A = Zt(T / b)),
                (M = ~~A),
                M && M === A ? ((j = m), M--) : j > m && (j = m)),
            (k = this._yoyo && M & 1),
            k && (j = m - j),
            (A = $l(this._tTime, b)),
            j === h && !o && this._initted && M === A)
          )
            return ((this._tTime = T), this);
          M !== A &&
            this.vars.repeatRefresh &&
            !k &&
            !this._lock &&
            j !== b &&
            this._initted &&
            ((this._lock = o = 1),
            (this.render(Zt(b * M), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (I1(this, v ? f : j, o, c, T)) return ((this._tTime = 0), this);
          if (h !== this._time && !(o && this.vars.repeatRefresh && M !== A))
            return this;
          if (m !== this._dur) return this.render(f, c, o);
        }
        if (this._rEase) {
          var K = j < h;
          if (K !== this._inv) {
            var V = K ? h : m - h;
            ((this._inv = K),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = h),
              (this._invRecip = V ? (K ? -1 : 1) / V : 0),
              (this._invScale = K ? -this.ratio : 1 - this.ratio),
              (this._invEase = K ? this._rEase : this._ease));
          }
          this.ratio = q =
            this._invRatio +
            this._invScale *
              this._invEase((j - this._invTime) * this._invRecip);
        } else this.ratio = q = this._ease(j / m);
        if (
          (this._from && (this.ratio = q = 1 - q),
          (this._tTime = T),
          (this._time = j),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !h && T && !c && !A && (We(this, "onStart"), this._tTime !== T))
        )
          return this;
        for (S = this._pt; S;) (S.r(q, S.d), (S = S._next));
        ((Q && Q.render(f < 0 ? f : Q._dur * Q._ease(j / this._dur), c, o)) ||
          (this._startAt && (this._zTime = f)),
          this._onUpdate &&
            !c &&
            (v && Ec(this, f, c, o), We(this, "onUpdate")),
          this._repeat &&
            M !== A &&
            this.vars.onRepeat &&
            !c &&
            this.parent &&
            We(this, "onRepeat"),
          (T === this._tDur || !T) &&
            this._tTime === T &&
            (v && !this._onUpdate && Ec(this, f, !0, !0),
            (f || !m) &&
              ((T === this._tDur && this._ts > 0) || (!T && this._ts < 0)) &&
              jn(this, 1),
            !c &&
              !(v && !h) &&
              (T || h || k) &&
              (We(this, T === p ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(T < p && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (r.targets = function () {
      return this._targets;
    }),
    (r.invalidate = function (f) {
      return (
        (!f || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(f),
        g.prototype.invalidate.call(this, f)
      );
    }),
    (r.resetTo = function (f, c, o, h, p) {
      (su || Fe.wake(), this._ts || this.play());
      var m = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        v;
      return (
        this._initted || Jc(this, m),
        (v = this._ease(m / this._dur)),
        Zy(this, f, c, o, h, v, m, p)
          ? this.resetTo(f, c, o, h, 1)
          : (Qr(this, 0),
            this.parent ||
              F1(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0,
              ),
            this.render(0))
      );
    }),
    (r.kill = function (f, c) {
      if ((c === void 0 && (c = "all"), !f && (!c || c === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Pi(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!ye),
          this
        );
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(f, c, xn && xn.vars.overwrite !== !0)
            ._first || Pi(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            Il(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var h = this._targets,
        p = f ? ma(f) : h,
        m = this._ptLookup,
        v = this._pt,
        T,
        j,
        S,
        M,
        b,
        A,
        k;
      if ((!c || c === "all") && Sy(h, p))
        return (c === "all" && (this._pt = 0), Pi(this));
      for (
        T = this._op = this._op || [],
          c !== "all" &&
            (oe(c) &&
              ((b = {}),
              Ne(c, function (q) {
                return (b[q] = 1);
              }),
              (c = b)),
            (c = Ky(h, c))),
          k = h.length;
        k--;
      )
        if (~p.indexOf(h[k])) {
          ((j = m[k]),
            c === "all"
              ? ((T[k] = c), (M = j), (S = {}))
              : ((S = T[k] = T[k] || {}), (M = c)));
          for (b in M)
            ((A = j && j[b]),
              A &&
                ((!("kill" in A.d) || A.d.kill(b) === !0) && Xr(this, A, "_pt"),
                delete j[b]),
              S !== "all" && (S[b] = 1));
        }
      return (this._initted && !this._pt && v && Pi(this), this);
    }),
    (l.to = function (f, c) {
      return new l(f, c, arguments[2]);
    }),
    (l.from = function (f, c) {
      return au(1, arguments);
    }),
    (l.delayedCall = function (f, c, o, h) {
      return new l(c, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: f,
        onComplete: c,
        onReverseComplete: c,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: h,
      });
    }),
    (l.fromTo = function (f, c, o) {
      return au(2, arguments);
    }),
    (l.set = function (f, c) {
      return ((c.duration = 0), c.repeatDelay || (c.repeat = 0), new l(f, c));
    }),
    (l.killTweensOf = function (f, c, o) {
      return Kt.killTweensOf(f, c, o);
    }),
    l
  );
})(fu);
ta(ue.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Ne("staggerTo,staggerFrom,staggerFromTo", function (g) {
  ue[g] = function () {
    var l = new De(),
      r = Ac.call(arguments, 0);
    return (r.splice(g === "staggerFromTo" ? 5 : 4, 0, 0), l[g].apply(l, r));
  };
});
var Fc = function (l, r, i) {
    return (l[r] = i);
  },
  pm = function (l, r, i) {
    return l[r](i);
  },
  Fy = function (l, r, i, f) {
    return l[r](f.fp, i);
  },
  Wy = function (l, r, i) {
    return l.setAttribute(r, i);
  },
  Wc = function (l, r) {
    return $t(l[r]) ? pm : qc(l[r]) && l.setAttribute ? Wy : Fc;
  },
  ym = function (l, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * l) * 1e6) / 1e6, r);
  },
  $y = function (l, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * l), r);
  },
  vm = function (l, r) {
    var i = r._pt,
      f = "";
    if (!l && r.b) f = r.b;
    else if (l === 1 && r.e) f = r.e;
    else {
      for (; i;)
        ((f =
          i.p +
          (i.m ? i.m(i.s + i.c * l) : Math.round((i.s + i.c * l) * 1e4) / 1e4) +
          f),
          (i = i._next));
      f += r.c;
    }
    r.set(r.t, r.p, f, r);
  },
  $c = function (l, r) {
    for (var i = r._pt; i;) (i.r(l, i.d), (i = i._next));
  },
  Iy = function (l, r, i, f) {
    for (var c = this._pt, o; c;)
      ((o = c._next), c.p === f && c.modifier(l, r, i), (c = o));
  },
  Py = function (l) {
    for (var r = this._pt, i, f; r;)
      ((f = r._next),
        (r.p === l && !r.op) || r.op === l
          ? Xr(this, r, "_pt")
          : r.dep || (i = 1),
        (r = f));
    return !i;
  },
  t2 = function (l, r, i, f) {
    f.mSet(l, r, f.m.call(f.tween, i, f.mt), f);
  },
  _m = function (l) {
    for (var r = l._pt, i, f, c, o; r;) {
      for (i = r._next, f = c; f && f.pr > r.pr;) f = f._next;
      ((r._prev = f ? f._prev : o) ? (r._prev._next = r) : (c = r),
        (r._next = f) ? (f._prev = r) : (o = r),
        (r = i));
    }
    l._pt = c;
  },
  Be = (function () {
    function g(r, i, f, c, o, h, p, m, v) {
      ((this.t = i),
        (this.s = c),
        (this.c = o),
        (this.p = f),
        (this.r = h || ym),
        (this.d = p || this),
        (this.set = m || Fc),
        (this.pr = v || 0),
        (this._next = r),
        r && (r._prev = this));
    }
    var l = g.prototype;
    return (
      (l.modifier = function (i, f, c) {
        ((this.mSet = this.mSet || this.set),
          (this.set = t2),
          (this.m = i),
          (this.mt = c),
          (this.tween = f));
      }),
      g
    );
  })();
Ne(
  Qc +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",
  function (g) {
    return (Gc[g] = 1);
  },
);
Pe.TweenMax = Pe.TweenLite = ue;
Pe.TimelineLite = Pe.TimelineMax = De;
Kt = new De({
  sortChildren: !1,
  defaults: lu,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Ie.stringFilter = cm;
var nl = [],
  Nr = {},
  e2 = [],
  v1 = 0,
  a2 = 0,
  bc = function (l) {
    return (Nr[l] || e2).map(function (r) {
      return r();
    });
  },
  Dc = function () {
    var l = Date.now(),
      r = [];
    l - v1 > 2 &&
      (bc("matchMediaInit"),
      nl.forEach(function (i) {
        var f = i.queries,
          c = i.conditions,
          o,
          h,
          p,
          m;
        for (h in f)
          ((o = Ta.matchMedia(f[h]).matches),
            o && (p = 1),
            o !== c[h] && ((c[h] = o), (m = 1)));
        m && (i.revert(), p && r.push(i));
      }),
      bc("matchMediaRevert"),
      r.forEach(function (i) {
        return i.onMatch(i, function (f) {
          return i.add(null, f);
        });
      }),
      (v1 = l),
      bc("matchMedia"));
  },
  bm = (function () {
    function g(r, i) {
      ((this.selector = i && Oc(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = a2++),
        r && this.add(r));
    }
    var l = g.prototype;
    return (
      (l.add = function (i, f, c) {
        $t(i) && ((c = f), (f = i), (i = $t));
        var o = this,
          h = function () {
            var m = Vt,
              v = o.selector,
              T;
            return (
              m && m !== o && m.data.push(o),
              c && (o.selector = Oc(c)),
              (Vt = o),
              (T = f.apply(o, arguments)),
              $t(T) && o._r.push(T),
              (Vt = m),
              (o.selector = v),
              (o.isReverted = !1),
              T
            );
          };
        return (
          (o.last = h),
          i === $t
            ? h(o, function (p) {
                return o.add(null, p);
              })
            : i
              ? (o[i] = h)
              : h
        );
      }),
      (l.ignore = function (i) {
        var f = Vt;
        ((Vt = null), i(this), (Vt = f));
      }),
      (l.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (f) {
            return f instanceof g
              ? i.push.apply(i, f.getTweens())
              : f instanceof ue &&
                  !(f.parent && f.parent.data === "nested") &&
                  i.push(f);
          }),
          i
        );
      }),
      (l.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (l.kill = function (i, f) {
        var c = this;
        if (
          (i
            ? (function () {
                for (var h = c.getTweens(), p = c.data.length, m; p--;)
                  ((m = c.data[p]),
                    m.data === "isFlip" &&
                      (m.revert(),
                      m.getChildren(!0, !0, !1).forEach(function (v) {
                        return h.splice(h.indexOf(v), 1);
                      })));
                for (
                  h
                    .map(function (v) {
                      return {
                        g:
                          v._dur ||
                          v._delay ||
                          (v._sat && !v._sat.vars.immediateRender)
                            ? v.globalTime(0)
                            : -1 / 0,
                        t: v,
                      };
                    })
                    .sort(function (v, T) {
                      return T.g - v.g || -1 / 0;
                    })
                    .forEach(function (v) {
                      return v.t.revert(i);
                    }),
                    p = c.data.length;
                  p--;
                )
                  ((m = c.data[p]),
                    m instanceof De
                      ? m.data !== "nested" &&
                        (m.scrollTrigger && m.scrollTrigger.revert(), m.kill())
                      : !(m instanceof ue) && m.revert && m.revert(i));
                (c._r.forEach(function (v) {
                  return v(i, c);
                }),
                  (c.isReverted = !0));
              })()
            : this.data.forEach(function (h) {
                return h.kill && h.kill();
              }),
          this.clear(),
          f)
        )
          for (var o = nl.length; o--;) nl[o].id === this.id && nl.splice(o, 1);
      }),
      (l.revert = function (i) {
        this.kill(i || {});
      }),
      g
    );
  })(),
  n2 = (function () {
    function g(r) {
      ((this.contexts = []), (this.scope = r), Vt && Vt.data.push(this));
    }
    var l = g.prototype;
    return (
      (l.add = function (i, f, c) {
        Ea(i) || (i = { matches: i });
        var o = new bm(0, c || this.scope),
          h = (o.conditions = {}),
          p,
          m,
          v;
        (Vt && !o.selector && (o.selector = Vt.selector),
          this.contexts.push(o),
          (f = o.add("onMatch", f)),
          (o.queries = i));
        for (m in i)
          m === "all"
            ? (v = 1)
            : ((p = Ta.matchMedia(i[m])),
              p &&
                (nl.indexOf(o) < 0 && nl.push(o),
                (h[m] = p.matches) && (v = 1),
                p.addListener
                  ? p.addListener(Dc)
                  : p.addEventListener("change", Dc)));
        return (
          v &&
            f(o, function (T) {
              return o.add(null, T);
            }),
          this
        );
      }),
      (l.revert = function (i) {
        this.kill(i || {});
      }),
      (l.kill = function (i) {
        this.contexts.forEach(function (f) {
          return f.kill(i, !0);
        });
      }),
      g
    );
  })(),
  qr = {
    registerPlugin: function () {
      for (var l = arguments.length, r = new Array(l), i = 0; i < l; i++)
        r[i] = arguments[i];
      r.forEach(function (f) {
        return rm(f);
      });
    },
    timeline: function (l) {
      return new De(l);
    },
    getTweensOf: function (l, r) {
      return Kt.getTweensOf(l, r);
    },
    getProperty: function (l, r, i, f) {
      oe(l) && (l = ma(l)[0]);
      var c = tl(l || {}).get,
        o = i ? J1 : K1;
      return (
        i === "native" && (i = ""),
        l &&
          (r
            ? o(((Je[r] && Je[r].get) || c)(l, r, i, f))
            : function (h, p, m) {
                return o(((Je[h] && Je[h].get) || c)(l, h, p, m));
              })
      );
    },
    quickSetter: function (l, r, i) {
      if (((l = ma(l)), l.length > 1)) {
        var f = l.map(function (v) {
            return ke.quickSetter(v, r, i);
          }),
          c = f.length;
        return function (v) {
          for (var T = c; T--;) f[T](v);
        };
      }
      l = l[0] || {};
      var o = Je[r],
        h = tl(l),
        p = (h.harness && (h.harness.aliases || {})[r]) || r,
        m = o
          ? function (v) {
              var T = new o();
              ((Zl._pt = 0),
                T.init(l, i ? v + i : v, Zl, 0, [l]),
                T.render(1, T),
                Zl._pt && $c(1, Zl));
            }
          : h.set(l, p);
      return o
        ? m
        : function (v) {
            return m(l, p, i ? v + i : v, h, 1);
          };
    },
    quickTo: function (l, r, i) {
      var f,
        c = ke.to(
          l,
          ta(
            ((f = {}), (f[r] = "+=0.1"), (f.paused = !0), (f.stagger = 0), f),
            i || {},
          ),
        ),
        o = function (p, m, v) {
          return c.resetTo(r, p, m, v);
        };
      return ((o.tween = c), o);
    },
    isTweening: function (l) {
      return Kt.getTweensOf(l, !0).length > 0;
    },
    defaults: function (l) {
      return (l && l.ease && (l.ease = al(l.ease, lu.ease)), h1(lu, l || {}));
    },
    config: function (l) {
      return h1(Ie, l || {});
    },
    registerEffect: function (l) {
      var r = l.name,
        i = l.effect,
        f = l.plugins,
        c = l.defaults,
        o = l.extendTimeline;
      ((f || "").split(",").forEach(function (h) {
        return (
          h && !Je[h] && !Pe[h] && iu(r + " effect requires " + h + " plugin.")
        );
      }),
        (pc[r] = function (h, p, m) {
          return i(ma(h), ta(p || {}, c), m);
        }),
        o &&
          (De.prototype[r] = function (h, p, m) {
            return this.add(pc[r](h, Ea(p) ? p : (m = p) && {}, this), m);
          }));
    },
    registerEase: function (l, r) {
      Mt[l] = al(r);
    },
    parseEase: function (l, r) {
      return arguments.length ? al(l, r) : Mt;
    },
    getById: function (l) {
      return Kt.getById(l);
    },
    exportRoot: function (l, r) {
      l === void 0 && (l = {});
      var i = new De(l),
        f,
        c;
      for (
        i.smoothChildTiming = we(l.smoothChildTiming),
          Kt.remove(i),
          i._dp = 0,
          i._time = i._tTime = Kt._time,
          f = Kt._first;
        f;
      )
        ((c = f._next),
          (r ||
            !(
              !f._dur &&
              f instanceof ue &&
              f.vars.onComplete === f._targets[0]
            )) &&
            za(i, f, f._start - f._delay),
          (f = c));
      return (za(Kt, i, 0), i);
    },
    context: function (l, r) {
      return l ? new bm(l, r) : Vt;
    },
    matchMedia: function (l) {
      return new n2(l);
    },
    matchMediaRefresh: function () {
      return (
        nl.forEach(function (l) {
          var r = l.conditions,
            i,
            f;
          for (f in r) r[f] && ((r[f] = !1), (i = 1));
          i && l.revert();
        }) || Dc()
      );
    },
    addEventListener: function (l, r) {
      var i = Nr[l] || (Nr[l] = []);
      ~i.indexOf(r) || i.push(r);
    },
    removeEventListener: function (l, r) {
      var i = Nr[l],
        f = i && i.indexOf(r);
      f >= 0 && i.splice(f, 1);
    },
    utils: {
      wrap: Ny,
      wrapYoyo: By,
      distribute: em,
      random: nm,
      snap: am,
      normalize: wy,
      getUnit: be,
      clamp: Oy,
      splitColor: sm,
      toArray: ma,
      selector: Oc,
      mapRange: im,
      pipe: Cy,
      unitize: Dy,
      interpolate: Uy,
      shuffle: tm,
    },
    install: X1,
    effects: pc,
    ticker: Fe,
    updateRoot: De.updateRoot,
    plugins: Je,
    globalTimeline: Kt,
    core: {
      PropTween: Be,
      globals: G1,
      Tween: ue,
      Timeline: De,
      Animation: fu,
      getCache: tl,
      _removeLinkedListItem: Xr,
      reverting: function () {
        return ye;
      },
      context: function (l) {
        return (l && Vt && (Vt.data.push(l), (l._ctx = Vt)), Vt);
      },
      suppressOverwrites: function (l) {
        return (Hc = l);
      },
    },
  };
Ne("to,from,fromTo,delayedCall,set,killTweensOf", function (g) {
  return (qr[g] = ue[g]);
});
Fe.add(De.updateRoot);
Zl = qr.to({}, { duration: 0 });
var l2 = function (l, r) {
    for (var i = l._pt; i && i.p !== r && i.op !== r && i.fp !== r;)
      i = i._next;
    return i;
  },
  i2 = function (l, r) {
    var i = l._targets,
      f,
      c,
      o;
    for (f in r)
      for (c = i.length; c--;)
        ((o = l._ptLookup[c][f]),
          o &&
            (o = o.d) &&
            (o._pt && (o = l2(o, f)),
            o && o.modifier && o.modifier(r[f], l, i[c], f)));
  },
  xc = function (l, r) {
    return {
      name: l,
      headless: 1,
      rawVars: 1,
      init: function (f, c, o) {
        o._onInit = function (h) {
          var p, m;
          if (
            (oe(c) &&
              ((p = {}),
              Ne(c, function (v) {
                return (p[v] = 1);
              }),
              (c = p)),
            r)
          ) {
            p = {};
            for (m in c) p[m] = r(c[m]);
            c = p;
          }
          i2(h, c);
        };
      },
    };
  },
  ke =
    qr.registerPlugin(
      {
        name: "attr",
        init: function (l, r, i, f, c) {
          var o, h, p;
          this.tween = i;
          for (o in r)
            ((p = l.getAttribute(o) || ""),
              (h = this.add(
                l,
                "setAttribute",
                (p || 0) + "",
                r[o],
                f,
                c,
                0,
                0,
                o,
              )),
              (h.op = o),
              (h.b = p),
              this._props.push(o));
        },
        render: function (l, r) {
          for (var i = r._pt; i;)
            (ye ? i.set(i.t, i.p, i.b, i) : i.r(l, i.d), (i = i._next));
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (l, r) {
          for (var i = r.length; i--;)
            this.add(l, i, l[i] || 0, r[i], 0, 0, 0, 0, 0, 1);
        },
      },
      xc("roundProps", Rc),
      xc("modifiers"),
      xc("snap", am),
    ) || qr;
ue.version = De.version = ke.version = "3.15.0";
L1 = 1;
Yc() && Pl();
Mt.Power0;
Mt.Power1;
Mt.Power2;
Mt.Power3;
Mt.Power4;
Mt.Linear;
Mt.Quad;
Mt.Cubic;
Mt.Quart;
Mt.Quint;
Mt.Strong;
Mt.Elastic;
Mt.Back;
Mt.SteppedEase;
Mt.Bounce;
Mt.Sine;
Mt.Expo;
Mt.Circ;
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var _1,
  Sn,
  Jl,
  Ic,
  Pn,
  b1,
  Pc,
  u2 = function () {
    return typeof window < "u";
  },
  Ja = {},
  In = 180 / Math.PI,
  Fl = Math.PI / 180,
  Ql = Math.atan2,
  x1 = 1e8,
  to = /([A-Z])/g,
  r2 = /(left|right|width|margin|padding|x)/i,
  s2 = /[\s,\(]\S/,
  Ma = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  wc = function (l, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * l) * 1e4) / 1e4 + r.u, r);
  },
  f2 = function (l, r) {
    return r.set(
      r.t,
      r.p,
      l === 1 ? r.e : Math.round((r.s + r.c * l) * 1e4) / 1e4 + r.u,
      r,
    );
  },
  c2 = function (l, r) {
    return r.set(
      r.t,
      r.p,
      l ? Math.round((r.s + r.c * l) * 1e4) / 1e4 + r.u : r.b,
      r,
    );
  },
  o2 = function (l, r) {
    return r.set(
      r.t,
      r.p,
      l === 1 ? r.e : l ? Math.round((r.s + r.c * l) * 1e4) / 1e4 + r.u : r.b,
      r,
    );
  },
  d2 = function (l, r) {
    var i = r.s + r.c * l;
    r.set(r.t, r.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + r.u, r);
  },
  xm = function (l, r) {
    return r.set(r.t, r.p, l ? r.e : r.b, r);
  },
  Sm = function (l, r) {
    return r.set(r.t, r.p, l !== 1 ? r.b : r.e, r);
  },
  h2 = function (l, r, i) {
    return (l.style[r] = i);
  },
  m2 = function (l, r, i) {
    return l.style.setProperty(r, i);
  },
  g2 = function (l, r, i) {
    return (l._gsap[r] = i);
  },
  p2 = function (l, r, i) {
    return (l._gsap.scaleX = l._gsap.scaleY = i);
  },
  y2 = function (l, r, i, f, c) {
    var o = l._gsap;
    ((o.scaleX = o.scaleY = i), o.renderTransform(c, o));
  },
  v2 = function (l, r, i, f, c) {
    var o = l._gsap;
    ((o[r] = i), o.renderTransform(c, o));
  },
  Jt = "transform",
  Ue = Jt + "Origin",
  _2 = function g(l, r) {
    var i = this,
      f = this.target,
      c = f.style,
      o = f._gsap;
    if (l in Ja && c) {
      if (((this.tfm = this.tfm || {}), l !== "transform"))
        ((l = Ma[l] || l),
          ~l.indexOf(",")
            ? l.split(",").forEach(function (h) {
                return (i.tfm[h] = Za(f, h));
              })
            : (this.tfm[l] = o.x ? o[l] : Za(f, l)),
          l === Ue && (this.tfm.zOrigin = o.zOrigin));
      else
        return Ma.transform.split(",").forEach(function (h) {
          return g.call(i, h, r);
        });
      if (this.props.indexOf(Jt) >= 0) return;
      (o.svg &&
        ((this.svgo = f.getAttribute("data-svg-origin")),
        this.props.push(Ue, r, "")),
        (l = Jt));
    }
    (c || r) && this.props.push(l, r, c[l]);
  },
  Tm = function (l) {
    l.translate &&
      (l.removeProperty("translate"),
      l.removeProperty("scale"),
      l.removeProperty("rotate"));
  },
  b2 = function () {
    var l = this.props,
      r = this.target,
      i = r.style,
      f = r._gsap,
      c,
      o;
    for (c = 0; c < l.length; c += 3)
      l[c + 1]
        ? l[c + 1] === 2
          ? r[l[c]](l[c + 2])
          : (r[l[c]] = l[c + 2])
        : l[c + 2]
          ? (i[l[c]] = l[c + 2])
          : i.removeProperty(
              l[c].substr(0, 2) === "--"
                ? l[c]
                : l[c].replace(to, "-$1").toLowerCase(),
            );
    if (this.tfm) {
      for (o in this.tfm) f[o] = this.tfm[o];
      (f.svg &&
        (f.renderTransform(),
        r.setAttribute("data-svg-origin", this.svgo || "")),
        (c = Pc()),
        (!c || !c.isStart) &&
          !i[Jt] &&
          (Tm(i),
          f.zOrigin &&
            i[Ue] &&
            ((i[Ue] += " " + f.zOrigin + "px"),
            (f.zOrigin = 0),
            f.renderTransform()),
          (f.uncache = 1)));
    }
  },
  zm = function (l, r) {
    var i = { target: l, props: [], revert: b2, save: _2 };
    return (
      l._gsap || ke.core.getCache(l),
      r &&
        l.style &&
        l.nodeType &&
        r.split(",").forEach(function (f) {
          return i.save(f);
        }),
      i
    );
  },
  Mm,
  Nc = function (l, r) {
    var i = Sn.createElementNS
      ? Sn.createElementNS(
          (r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          l,
        )
      : Sn.createElement(l);
    return i && i.style ? i : Sn.createElement(l);
  },
  $e = function g(l, r, i) {
    var f = getComputedStyle(l);
    return (
      f[r] ||
      f.getPropertyValue(r.replace(to, "-$1").toLowerCase()) ||
      f.getPropertyValue(r) ||
      (!i && g(l, ti(r) || r, 1)) ||
      ""
    );
  },
  S1 = "O,Moz,ms,Ms,Webkit".split(","),
  ti = function (l, r, i) {
    var f = r || Pn,
      c = f.style,
      o = 5;
    if (l in c && !i) return l;
    for (
      l = l.charAt(0).toUpperCase() + l.substr(1);
      o-- && !(S1[o] + l in c);
    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? S1[o] : "") + l;
  },
  Bc = function () {
    u2() &&
      window.document &&
      ((_1 = window),
      (Sn = _1.document),
      (Jl = Sn.documentElement),
      (Pn = Nc("div") || { style: {} }),
      Nc("div"),
      (Jt = ti(Jt)),
      (Ue = Jt + "Origin"),
      (Pn.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Mm = !!ti("perspective")),
      (Pc = ke.core.reverting),
      (Ic = 1));
  },
  T1 = function (l) {
    var r = l.ownerSVGElement,
      i = Nc(
        "svg",
        (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
      ),
      f = l.cloneNode(!0),
      c;
    ((f.style.display = "block"), i.appendChild(f), Jl.appendChild(i));
    try {
      c = f.getBBox();
    } catch {}
    return (i.removeChild(f), Jl.removeChild(i), c);
  },
  z1 = function (l, r) {
    for (var i = r.length; i--;)
      if (l.hasAttribute(r[i])) return l.getAttribute(r[i]);
  },
  Em = function (l) {
    var r, i;
    try {
      r = l.getBBox();
    } catch {
      ((r = T1(l)), (i = 1));
    }
    return (
      (r && (r.width || r.height)) || i || (r = T1(l)),
      r && !r.width && !r.x && !r.y
        ? {
            x: +z1(l, ["x", "cx", "x1"]) || 0,
            y: +z1(l, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : r
    );
  },
  jm = function (l) {
    return !!(l.getCTM && (!l.parentNode || l.ownerSVGElement) && Em(l));
  },
  An = function (l, r) {
    if (r) {
      var i = l.style,
        f;
      (r in Ja && r !== Ue && (r = Jt),
        i.removeProperty
          ? ((f = r.substr(0, 2)),
            (f === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r),
            i.removeProperty(
              f === "--" ? r : r.replace(to, "-$1").toLowerCase(),
            ))
          : i.removeAttribute(r));
    }
  },
  Tn = function (l, r, i, f, c, o) {
    var h = new Be(l._pt, r, i, 0, 1, o ? Sm : xm);
    return ((l._pt = h), (h.b = f), (h.e = c), l._props.push(i), h);
  },
  M1 = { deg: 1, rad: 1, turn: 1 },
  x2 = { grid: 1, flex: 1 },
  On = function g(l, r, i, f) {
    var c = parseFloat(i) || 0,
      o = (i + "").trim().substr((c + "").length) || "px",
      h = Pn.style,
      p = r2.test(r),
      m = l.tagName.toLowerCase() === "svg",
      v = (m ? "client" : "offset") + (p ? "Width" : "Height"),
      T = 100,
      j = f === "px",
      S = f === "%",
      M,
      b,
      A,
      k;
    if (f === o || !c || M1[f] || M1[o]) return c;
    if (
      (o !== "px" && !j && (c = g(l, r, i, "px")),
      (k = l.getCTM && jm(l)),
      (S || o === "%") && (Ja[r] || ~r.indexOf("adius")))
    )
      return (
        (M = k ? l.getBBox()[p ? "width" : "height"] : l[v]),
        te(S ? (c / M) * T : (c / 100) * M)
      );
    if (
      ((h[p ? "width" : "height"] = T + (j ? o : f)),
      (b =
        (f !== "rem" && ~r.indexOf("adius")) ||
        (f === "em" && l.appendChild && !m)
          ? l
          : l.parentNode),
      k && (b = (l.ownerSVGElement || {}).parentNode),
      (!b || b === Sn || !b.appendChild) && (b = Sn.body),
      (A = b._gsap),
      A && S && A.width && p && A.time === Fe.time && !A.uncache)
    )
      return te((c / A.width) * T);
    if (S && (r === "height" || r === "width")) {
      var q = l.style[r];
      ((l.style[r] = T + f), (M = l[v]), q ? (l.style[r] = q) : An(l, r));
    } else
      ((S || o === "%") &&
        !x2[$e(b, "display")] &&
        (h.position = $e(l, "position")),
        b === l && (h.position = "static"),
        b.appendChild(Pn),
        (M = Pn[v]),
        b.removeChild(Pn),
        (h.position = "absolute"));
    return (
      p && S && ((A = tl(b)), (A.time = Fe.time), (A.width = b[v])),
      te(j ? (M * c) / T : M && c ? (T / M) * c : 0)
    );
  },
  Za = function (l, r, i, f) {
    var c;
    return (
      Ic || Bc(),
      r in Ma &&
        r !== "transform" &&
        ((r = Ma[r]), ~r.indexOf(",") && (r = r.split(",")[0])),
      Ja[r] && r !== "transform"
        ? ((c = ou(l, f)),
          (c =
            r !== "transformOrigin"
              ? c[r]
              : c.svg
                ? c.origin
                : Lr($e(l, Ue)) + " " + c.zOrigin + "px"))
        : ((c = l.style[r]),
          (!c || c === "auto" || f || ~(c + "").indexOf("calc(")) &&
            (c =
              (Yr[r] && Yr[r](l, r, i)) ||
              $e(l, r) ||
              V1(l, r) ||
              (r === "opacity" ? 1 : 0))),
      i && !~(c + "").trim().indexOf(" ") ? On(l, r, c, i) + i : c
    );
  },
  S2 = function (l, r, i, f) {
    if (!i || i === "none") {
      var c = ti(r, l, 1),
        o = c && $e(l, c, 1);
      o && o !== i
        ? ((r = c), (i = o))
        : r === "borderColor" && (i = $e(l, "borderTopColor"));
    }
    var h = new Be(this._pt, l.style, r, 0, 1, vm),
      p = 0,
      m = 0,
      v,
      T,
      j,
      S,
      M,
      b,
      A,
      k,
      q,
      Q,
      K,
      V;
    if (
      ((h.b = i),
      (h.e = f),
      (i += ""),
      (f += ""),
      f.substring(0, 6) === "var(--" &&
        (f = $e(l, f.substring(4, f.indexOf(")")))),
      f === "auto" &&
        ((b = l.style[r]),
        (l.style[r] = f),
        (f = $e(l, r) || f),
        b ? (l.style[r] = b) : An(l, r)),
      (v = [i, f]),
      cm(v),
      (i = v[0]),
      (f = v[1]),
      (j = i.match(Vl) || []),
      (V = f.match(Vl) || []),
      V.length)
    ) {
      for (; (T = Vl.exec(f));)
        ((A = T[0]),
          (q = f.substring(p, T.index)),
          M
            ? (M = (M + 1) % 5)
            : (q.substr(-5) === "rgba(" || q.substr(-5) === "hsla(") && (M = 1),
          A !== (b = j[m++] || "") &&
            ((S = parseFloat(b) || 0),
            (K = b.substr((S + "").length)),
            A.charAt(1) === "=" && (A = Kl(S, A) + K),
            (k = parseFloat(A)),
            (Q = A.substr((k + "").length)),
            (p = Vl.lastIndex - Q.length),
            Q ||
              ((Q = Q || Ie.units[r] || K),
              p === f.length && ((f += Q), (h.e += Q))),
            K !== Q && (S = On(l, r, b, Q) || 0),
            (h._pt = {
              _next: h._pt,
              p: q || m === 1 ? q : ",",
              s: S,
              c: k - S,
              m: (M && M < 4) || r === "zIndex" ? Math.round : 0,
            })));
      h.c = p < f.length ? f.substring(p, f.length) : "";
    } else h.r = r === "display" && f === "none" ? Sm : xm;
    return (Y1.test(f) && (h.e = 0), (this._pt = h), h);
  },
  E1 = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  T2 = function (l) {
    var r = l.split(" "),
      i = r[0],
      f = r[1] || "50%";
    return (
      (i === "top" || i === "bottom" || f === "left" || f === "right") &&
        ((l = i), (i = f), (f = l)),
      (r[0] = E1[i] || i),
      (r[1] = E1[f] || f),
      r.join(" ")
    );
  },
  z2 = function (l, r) {
    if (r.tween && r.tween._time === r.tween._dur) {
      var i = r.t,
        f = i.style,
        c = r.u,
        o = i._gsap,
        h,
        p,
        m;
      if (c === "all" || c === !0) ((f.cssText = ""), (p = 1));
      else
        for (c = c.split(","), m = c.length; --m > -1;)
          ((h = c[m]),
            Ja[h] && ((p = 1), (h = h === "transformOrigin" ? Ue : Jt)),
            An(i, h));
      p &&
        (An(i, Jt),
        o &&
          (o.svg && i.removeAttribute("transform"),
          (f.scale = f.rotate = f.translate = "none"),
          ou(i, 1),
          (o.uncache = 1),
          Tm(f)));
    }
  },
  Yr = {
    clearProps: function (l, r, i, f, c) {
      if (c.data !== "isFromStart") {
        var o = (l._pt = new Be(l._pt, r, i, 0, 0, z2));
        return ((o.u = f), (o.pr = -10), (o.tween = c), l._props.push(i), 1);
      }
    },
  },
  cu = [1, 0, 0, 1, 0, 0],
  Am = {},
  Om = function (l) {
    return l === "matrix(1, 0, 0, 1, 0, 0)" || l === "none" || !l;
  },
  j1 = function (l) {
    var r = $e(l, Jt);
    return Om(r) ? cu : r.substr(7).match(q1).map(te);
  },
  eo = function (l, r) {
    var i = l._gsap || tl(l),
      f = l.style,
      c = j1(l),
      o,
      h,
      p,
      m;
    return i.svg && l.getAttribute("transform")
      ? ((p = l.transform.baseVal.consolidate().matrix),
        (c = [p.a, p.b, p.c, p.d, p.e, p.f]),
        c.join(",") === "1,0,0,1,0,0" ? cu : c)
      : (c === cu &&
          !l.offsetParent &&
          l !== Jl &&
          !i.svg &&
          ((p = f.display),
          (f.display = "block"),
          (o = l.parentNode),
          (!o || (!l.offsetParent && !l.getBoundingClientRect().width)) &&
            ((m = 1), (h = l.nextElementSibling), Jl.appendChild(l)),
          (c = j1(l)),
          p ? (f.display = p) : An(l, "display"),
          m &&
            (h
              ? o.insertBefore(l, h)
              : o
                ? o.appendChild(l)
                : Jl.removeChild(l))),
        r && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
  },
  Uc = function (l, r, i, f, c, o) {
    var h = l._gsap,
      p = c || eo(l, !0),
      m = h.xOrigin || 0,
      v = h.yOrigin || 0,
      T = h.xOffset || 0,
      j = h.yOffset || 0,
      S = p[0],
      M = p[1],
      b = p[2],
      A = p[3],
      k = p[4],
      q = p[5],
      Q = r.split(" "),
      K = parseFloat(Q[0]) || 0,
      V = parseFloat(Q[1]) || 0,
      P,
      Y,
      W,
      F;
    (i
      ? p !== cu &&
        (Y = S * A - M * b) &&
        ((W = K * (A / Y) + V * (-b / Y) + (b * q - A * k) / Y),
        (F = K * (-M / Y) + V * (S / Y) - (S * q - M * k) / Y),
        (K = W),
        (V = F))
      : ((P = Em(l)),
        (K = P.x + (~Q[0].indexOf("%") ? (K / 100) * P.width : K)),
        (V = P.y + (~(Q[1] || Q[0]).indexOf("%") ? (V / 100) * P.height : V))),
      f || (f !== !1 && h.smooth)
        ? ((k = K - m),
          (q = V - v),
          (h.xOffset = T + (k * S + q * b) - k),
          (h.yOffset = j + (k * M + q * A) - q))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = K),
      (h.yOrigin = V),
      (h.smooth = !!f),
      (h.origin = r),
      (h.originIsAbsolute = !!i),
      (l.style[Ue] = "0px 0px"),
      o &&
        (Tn(o, h, "xOrigin", m, K),
        Tn(o, h, "yOrigin", v, V),
        Tn(o, h, "xOffset", T, h.xOffset),
        Tn(o, h, "yOffset", j, h.yOffset)),
      l.setAttribute("data-svg-origin", K + " " + V));
  },
  ou = function (l, r) {
    var i = l._gsap || new dm(l);
    if ("x" in i && !r && !i.uncache) return i;
    var f = l.style,
      c = i.scaleX < 0,
      o = "px",
      h = "deg",
      p = getComputedStyle(l),
      m = $e(l, Ue) || "0",
      v,
      T,
      j,
      S,
      M,
      b,
      A,
      k,
      q,
      Q,
      K,
      V,
      P,
      Y,
      W,
      F,
      et,
      ot,
      ct,
      yt,
      vt,
      Et,
      B,
      J,
      lt,
      _t,
      C,
      y,
      R,
      L,
      Z,
      $;
    return (
      (v = T = j = b = A = k = q = Q = K = 0),
      (S = M = 1),
      (i.svg = !!(l.getCTM && jm(l))),
      p.translate &&
        ((p.translate !== "none" ||
          p.scale !== "none" ||
          p.rotate !== "none") &&
          (f[Jt] =
            (p.translate !== "none"
              ? "translate3d(" +
                (p.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (p.rotate !== "none" ? "rotate(" + p.rotate + ") " : "") +
            (p.scale !== "none"
              ? "scale(" + p.scale.split(" ").join(",") + ") "
              : "") +
            (p[Jt] !== "none" ? p[Jt] : "")),
        (f.scale = f.rotate = f.translate = "none")),
      (Y = eo(l, i.svg)),
      i.svg &&
        (i.uncache
          ? ((lt = l.getBBox()),
            (m = i.xOrigin - lt.x + "px " + (i.yOrigin - lt.y) + "px"),
            (J = ""))
          : (J = !r && l.getAttribute("data-svg-origin")),
        Uc(l, J || m, !!J || i.originIsAbsolute, i.smooth !== !1, Y)),
      (V = i.xOrigin || 0),
      (P = i.yOrigin || 0),
      Y !== cu &&
        ((ot = Y[0]),
        (ct = Y[1]),
        (yt = Y[2]),
        (vt = Y[3]),
        (v = Et = Y[4]),
        (T = B = Y[5]),
        Y.length === 6
          ? ((S = Math.sqrt(ot * ot + ct * ct)),
            (M = Math.sqrt(vt * vt + yt * yt)),
            (b = ot || ct ? Ql(ct, ot) * In : 0),
            (q = yt || vt ? Ql(yt, vt) * In + b : 0),
            q && (M *= Math.abs(Math.cos(q * Fl))),
            i.svg &&
              ((v -= V - (V * ot + P * yt)), (T -= P - (V * ct + P * vt))))
          : (($ = Y[6]),
            (L = Y[7]),
            (C = Y[8]),
            (y = Y[9]),
            (R = Y[10]),
            (Z = Y[11]),
            (v = Y[12]),
            (T = Y[13]),
            (j = Y[14]),
            (W = Ql($, R)),
            (A = W * In),
            W &&
              ((F = Math.cos(-W)),
              (et = Math.sin(-W)),
              (J = Et * F + C * et),
              (lt = B * F + y * et),
              (_t = $ * F + R * et),
              (C = Et * -et + C * F),
              (y = B * -et + y * F),
              (R = $ * -et + R * F),
              (Z = L * -et + Z * F),
              (Et = J),
              (B = lt),
              ($ = _t)),
            (W = Ql(-yt, R)),
            (k = W * In),
            W &&
              ((F = Math.cos(-W)),
              (et = Math.sin(-W)),
              (J = ot * F - C * et),
              (lt = ct * F - y * et),
              (_t = yt * F - R * et),
              (Z = vt * et + Z * F),
              (ot = J),
              (ct = lt),
              (yt = _t)),
            (W = Ql(ct, ot)),
            (b = W * In),
            W &&
              ((F = Math.cos(W)),
              (et = Math.sin(W)),
              (J = ot * F + ct * et),
              (lt = Et * F + B * et),
              (ct = ct * F - ot * et),
              (B = B * F - Et * et),
              (ot = J),
              (Et = lt)),
            A &&
              Math.abs(A) + Math.abs(b) > 359.9 &&
              ((A = b = 0), (k = 180 - k)),
            (S = te(Math.sqrt(ot * ot + ct * ct + yt * yt))),
            (M = te(Math.sqrt(B * B + $ * $))),
            (W = Ql(Et, B)),
            (q = Math.abs(W) > 2e-4 ? W * In : 0),
            (K = Z ? 1 / (Z < 0 ? -Z : Z) : 0)),
        i.svg &&
          ((J = l.getAttribute("transform")),
          (i.forceCSS = l.setAttribute("transform", "") || !Om($e(l, Jt))),
          J && l.setAttribute("transform", J))),
      Math.abs(q) > 90 &&
        Math.abs(q) < 270 &&
        (c
          ? ((S *= -1), (q += b <= 0 ? 180 : -180), (b += b <= 0 ? 180 : -180))
          : ((M *= -1), (q += q <= 0 ? 180 : -180))),
      (r = r || i.uncache),
      (i.x =
        v -
        ((i.xPercent =
          v &&
          ((!r && i.xPercent) ||
            (Math.round(l.offsetWidth / 2) === Math.round(-v) ? -50 : 0)))
          ? (l.offsetWidth * i.xPercent) / 100
          : 0) +
        o),
      (i.y =
        T -
        ((i.yPercent =
          T &&
          ((!r && i.yPercent) ||
            (Math.round(l.offsetHeight / 2) === Math.round(-T) ? -50 : 0)))
          ? (l.offsetHeight * i.yPercent) / 100
          : 0) +
        o),
      (i.z = j + o),
      (i.scaleX = te(S)),
      (i.scaleY = te(M)),
      (i.rotation = te(b) + h),
      (i.rotationX = te(A) + h),
      (i.rotationY = te(k) + h),
      (i.skewX = q + h),
      (i.skewY = Q + h),
      (i.transformPerspective = K + o),
      (i.zOrigin = parseFloat(m.split(" ")[2]) || (!r && i.zOrigin) || 0) &&
        (f[Ue] = Lr(m)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = Ie.force3D),
      (i.renderTransform = i.svg ? E2 : Mm ? Rm : M2),
      (i.uncache = 0),
      i
    );
  },
  Lr = function (l) {
    return (l = l.split(" "))[0] + " " + l[1];
  },
  Sc = function (l, r, i) {
    var f = be(r);
    return te(parseFloat(r) + parseFloat(On(l, "x", i + "px", f))) + f;
  },
  M2 = function (l, r) {
    ((r.z = "0px"),
      (r.rotationY = r.rotationX = "0deg"),
      (r.force3D = 0),
      Rm(l, r));
  },
  Wn = "0deg",
  Ii = "0px",
  $n = ") ",
  Rm = function (l, r) {
    var i = r || this,
      f = i.xPercent,
      c = i.yPercent,
      o = i.x,
      h = i.y,
      p = i.z,
      m = i.rotation,
      v = i.rotationY,
      T = i.rotationX,
      j = i.skewX,
      S = i.skewY,
      M = i.scaleX,
      b = i.scaleY,
      A = i.transformPerspective,
      k = i.force3D,
      q = i.target,
      Q = i.zOrigin,
      K = "",
      V = (k === "auto" && l && l !== 1) || k === !0;
    if (Q && (T !== Wn || v !== Wn)) {
      var P = parseFloat(v) * Fl,
        Y = Math.sin(P),
        W = Math.cos(P),
        F;
      ((P = parseFloat(T) * Fl),
        (F = Math.cos(P)),
        (o = Sc(q, o, Y * F * -Q)),
        (h = Sc(q, h, -Math.sin(P) * -Q)),
        (p = Sc(q, p, W * F * -Q + Q)));
    }
    (A !== Ii && (K += "perspective(" + A + $n),
      (f || c) && (K += "translate(" + f + "%, " + c + "%) "),
      (V || o !== Ii || h !== Ii || p !== Ii) &&
        (K +=
          p !== Ii || V
            ? "translate3d(" + o + ", " + h + ", " + p + ") "
            : "translate(" + o + ", " + h + $n),
      m !== Wn && (K += "rotate(" + m + $n),
      v !== Wn && (K += "rotateY(" + v + $n),
      T !== Wn && (K += "rotateX(" + T + $n),
      (j !== Wn || S !== Wn) && (K += "skew(" + j + ", " + S + $n),
      (M !== 1 || b !== 1) && (K += "scale(" + M + ", " + b + $n),
      (q.style[Jt] = K || "translate(0, 0)"));
  },
  E2 = function (l, r) {
    var i = r || this,
      f = i.xPercent,
      c = i.yPercent,
      o = i.x,
      h = i.y,
      p = i.rotation,
      m = i.skewX,
      v = i.skewY,
      T = i.scaleX,
      j = i.scaleY,
      S = i.target,
      M = i.xOrigin,
      b = i.yOrigin,
      A = i.xOffset,
      k = i.yOffset,
      q = i.forceCSS,
      Q = parseFloat(o),
      K = parseFloat(h),
      V,
      P,
      Y,
      W,
      F;
    ((p = parseFloat(p)),
      (m = parseFloat(m)),
      (v = parseFloat(v)),
      v && ((v = parseFloat(v)), (m += v), (p += v)),
      p || m
        ? ((p *= Fl),
          (m *= Fl),
          (V = Math.cos(p) * T),
          (P = Math.sin(p) * T),
          (Y = Math.sin(p - m) * -j),
          (W = Math.cos(p - m) * j),
          m &&
            ((v *= Fl),
            (F = Math.tan(m - v)),
            (F = Math.sqrt(1 + F * F)),
            (Y *= F),
            (W *= F),
            v &&
              ((F = Math.tan(v)),
              (F = Math.sqrt(1 + F * F)),
              (V *= F),
              (P *= F))),
          (V = te(V)),
          (P = te(P)),
          (Y = te(Y)),
          (W = te(W)))
        : ((V = T), (W = j), (P = Y = 0)),
      ((Q && !~(o + "").indexOf("px")) || (K && !~(h + "").indexOf("px"))) &&
        ((Q = On(S, "x", o, "px")), (K = On(S, "y", h, "px"))),
      (M || b || A || k) &&
        ((Q = te(Q + M - (M * V + b * Y) + A)),
        (K = te(K + b - (M * P + b * W) + k))),
      (f || c) &&
        ((F = S.getBBox()),
        (Q = te(Q + (f / 100) * F.width)),
        (K = te(K + (c / 100) * F.height))),
      (F =
        "matrix(" + V + "," + P + "," + Y + "," + W + "," + Q + "," + K + ")"),
      S.setAttribute("transform", F),
      q && (S.style[Jt] = F));
  },
  j2 = function (l, r, i, f, c) {
    var o = 360,
      h = oe(c),
      p = parseFloat(c) * (h && ~c.indexOf("rad") ? In : 1),
      m = p - f,
      v = f + m + "deg",
      T,
      j;
    return (
      h &&
        ((T = c.split("_")[1]),
        T === "short" && ((m %= o), m !== m % (o / 2) && (m += m < 0 ? o : -o)),
        T === "cw" && m < 0
          ? (m = ((m + o * x1) % o) - ~~(m / o) * o)
          : T === "ccw" && m > 0 && (m = ((m - o * x1) % o) - ~~(m / o) * o)),
      (l._pt = j = new Be(l._pt, r, i, f, m, f2)),
      (j.e = v),
      (j.u = "deg"),
      l._props.push(i),
      j
    );
  },
  A1 = function (l, r) {
    for (var i in r) l[i] = r[i];
    return l;
  },
  A2 = function (l, r, i) {
    var f = A1({}, i._gsap),
      c = "perspective,force3D,transformOrigin,svgOrigin",
      o = i.style,
      h,
      p,
      m,
      v,
      T,
      j,
      S,
      M;
    f.svg
      ? ((m = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (o[Jt] = r),
        (h = ou(i, 1)),
        An(i, Jt),
        i.setAttribute("transform", m))
      : ((m = getComputedStyle(i)[Jt]),
        (o[Jt] = r),
        (h = ou(i, 1)),
        (o[Jt] = m));
    for (p in Ja)
      ((m = f[p]),
        (v = h[p]),
        m !== v &&
          c.indexOf(p) < 0 &&
          ((S = be(m)),
          (M = be(v)),
          (T = S !== M ? On(i, p, m, M) : parseFloat(m)),
          (j = parseFloat(v)),
          (l._pt = new Be(l._pt, h, p, T, j - T, wc)),
          (l._pt.u = M || 0),
          l._props.push(p)));
    A1(h, f);
  };
Ne("padding,margin,Width,Radius", function (g, l) {
  var r = "Top",
    i = "Right",
    f = "Bottom",
    c = "Left",
    o = (l < 3 ? [r, i, f, c] : [r + c, r + i, f + i, f + c]).map(function (h) {
      return l < 2 ? g + h : "border" + h + g;
    });
  Yr[l > 1 ? "border" + g : g] = function (h, p, m, v, T) {
    var j, S;
    if (arguments.length < 4)
      return (
        (j = o.map(function (M) {
          return Za(h, M, m);
        })),
        (S = j.join(" ")),
        S.split(j[0]).length === 5 ? j[0] : S
      );
    ((j = (v + "").split(" ")),
      (S = {}),
      o.forEach(function (M, b) {
        return (S[M] = j[b] = j[b] || j[((b - 1) / 2) | 0]);
      }),
      h.init(p, S, T));
  };
});
var Cm = {
  name: "css",
  register: Bc,
  targetTest: function (l) {
    return l.style && l.nodeType;
  },
  init: function (l, r, i, f, c) {
    var o = this._props,
      h = l.style,
      p = i.vars.startAt,
      m,
      v,
      T,
      j,
      S,
      M,
      b,
      A,
      k,
      q,
      Q,
      K,
      V,
      P,
      Y,
      W,
      F;
    (Ic || Bc(),
      (this.styles = this.styles || zm(l)),
      (W = this.styles.props),
      (this.tween = i));
    for (b in r)
      if (b !== "autoRound" && ((v = r[b]), !(Je[b] && hm(b, r, i, f, l, c)))) {
        if (
          ((S = typeof v),
          (M = Yr[b]),
          S === "function" && ((v = v.call(i, f, l, c)), (S = typeof v)),
          S === "string" && ~v.indexOf("random(") && (v = ru(v)),
          M)
        )
          M(this, l, b, v, i) && (Y = 1);
        else if (b.substr(0, 2) === "--")
          ((m = (getComputedStyle(l).getPropertyValue(b) + "").trim()),
            (v += ""),
            (Mn.lastIndex = 0),
            Mn.test(m) ||
              ((A = be(m)),
              (k = be(v)),
              k ? A !== k && (m = On(l, b, m, k) + k) : A && (v += A)),
            this.add(h, "setProperty", m, v, f, c, 0, 0, b),
            o.push(b),
            W.push(b, 0, h[b]));
        else if (S !== "undefined") {
          if (
            (p && b in p
              ? ((m = typeof p[b] == "function" ? p[b].call(i, f, l, c) : p[b]),
                oe(m) && ~m.indexOf("random(") && (m = ru(m)),
                be(m + "") ||
                  m === "auto" ||
                  (m += Ie.units[b] || be(Za(l, b)) || ""),
                (m + "").charAt(1) === "=" && (m = Za(l, b)))
              : (m = Za(l, b)),
            (j = parseFloat(m)),
            (q = S === "string" && v.charAt(1) === "=" && v.substr(0, 2)),
            q && (v = v.substr(2)),
            (T = parseFloat(v)),
            b in Ma &&
              (b === "autoAlpha" &&
                (j === 1 && Za(l, "visibility") === "hidden" && T && (j = 0),
                W.push("visibility", 0, h.visibility),
                Tn(
                  this,
                  h,
                  "visibility",
                  j ? "inherit" : "hidden",
                  T ? "inherit" : "hidden",
                  !T,
                )),
              b !== "scale" &&
                b !== "transform" &&
                ((b = Ma[b]), ~b.indexOf(",") && (b = b.split(",")[0]))),
            (Q = b in Ja),
            Q)
          ) {
            if (
              (this.styles.save(b),
              (F = v),
              S === "string" && v.substring(0, 6) === "var(--")
            ) {
              if (
                ((v = $e(l, v.substring(4, v.indexOf(")")))),
                v.substring(0, 5) === "calc(")
              ) {
                var et = l.style.perspective;
                ((l.style.perspective = v),
                  (v = $e(l, "perspective")),
                  et ? (l.style.perspective = et) : An(l, "perspective"));
              }
              T = parseFloat(v);
            }
            if (
              (K ||
                ((V = l._gsap),
                (V.renderTransform && !r.parseTransform) ||
                  ou(l, r.parseTransform),
                (P = r.smoothOrigin !== !1 && V.smooth),
                (K = this._pt =
                  new Be(this._pt, h, Jt, 0, 1, V.renderTransform, V, 0, -1)),
                (K.dep = 1)),
              b === "scale")
            )
              ((this._pt = new Be(
                this._pt,
                V,
                "scaleY",
                V.scaleY,
                (q ? Kl(V.scaleY, q + T) : T) - V.scaleY || 0,
                wc,
              )),
                (this._pt.u = 0),
                o.push("scaleY", b),
                (b += "X"));
            else if (b === "transformOrigin") {
              (W.push(Ue, 0, h[Ue]),
                (v = T2(v)),
                V.svg
                  ? Uc(l, v, 0, P, 0, this)
                  : ((k = parseFloat(v.split(" ")[2]) || 0),
                    k !== V.zOrigin && Tn(this, V, "zOrigin", V.zOrigin, k),
                    Tn(this, h, b, Lr(m), Lr(v))));
              continue;
            } else if (b === "svgOrigin") {
              Uc(l, v, 1, P, 0, this);
              continue;
            } else if (b in Am) {
              j2(this, V, b, j, q ? Kl(j, q + v) : v);
              continue;
            } else if (b === "smoothOrigin") {
              Tn(this, V, "smooth", V.smooth, v);
              continue;
            } else if (b === "force3D") {
              V[b] = v;
              continue;
            } else if (b === "transform") {
              A2(this, v, l);
              continue;
            }
          } else b in h || (b = ti(b) || b);
          if (Q || ((T || T === 0) && (j || j === 0) && !s2.test(v) && b in h))
            ((A = (m + "").substr((j + "").length)),
              T || (T = 0),
              (k = be(v) || (b in Ie.units ? Ie.units[b] : A)),
              A !== k && (j = On(l, b, m, k)),
              (this._pt = new Be(
                this._pt,
                Q ? V : h,
                b,
                j,
                (q ? Kl(j, q + T) : T) - j,
                !Q && (k === "px" || b === "zIndex") && r.autoRound !== !1
                  ? d2
                  : wc,
              )),
              (this._pt.u = k || 0),
              Q && F !== v
                ? ((this._pt.b = m), (this._pt.e = F), (this._pt.r = o2))
                : A !== k &&
                  k !== "%" &&
                  ((this._pt.b = m), (this._pt.r = c2)));
          else if (b in h) S2.call(this, l, b, m, q ? q + v : v);
          else if (b in l) this.add(l, b, m || l[b], q ? q + v : v, f, c);
          else if (b !== "parseTransform") {
            Xc(b, v);
            continue;
          }
          (Q ||
            (b in h
              ? W.push(b, 0, h[b])
              : typeof l[b] == "function"
                ? W.push(b, 2, l[b]())
                : W.push(b, 1, m || l[b])),
            o.push(b));
        }
      }
    Y && _m(this);
  },
  render: function (l, r) {
    if (r.tween._time || !Pc())
      for (var i = r._pt; i;) (i.r(l, i.d), (i = i._next));
    else r.styles.revert();
  },
  get: Za,
  aliases: Ma,
  getSetter: function (l, r, i) {
    var f = Ma[r];
    return (
      f && f.indexOf(",") < 0 && (r = f),
      r in Ja && r !== Ue && (l._gsap.x || Za(l, "x"))
        ? i && b1 === i
          ? r === "scale"
            ? p2
            : g2
          : (b1 = i || {}) && (r === "scale" ? y2 : v2)
        : l.style && !qc(l.style[r])
          ? h2
          : ~r.indexOf("-")
            ? m2
            : Wc(l, r)
    );
  },
  core: { _removeProperty: An, _getMatrix: eo },
};
ke.utils.checkPrefix = ti;
ke.core.getStyleSaver = zm;
(function (g, l, r, i) {
  var f = Ne(g + "," + l + "," + r, function (c) {
    Ja[c] = 1;
  });
  (Ne(l, function (c) {
    ((Ie.units[c] = "deg"), (Am[c] = 1));
  }),
    (Ma[f[13]] = g + "," + l),
    Ne(i, function (c) {
      var o = c.split(":");
      Ma[o[1]] = f[o[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
Ne(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (g) {
    Ie.units[g] = "px";
  },
);
ke.registerPlugin(Cm);
var pt = ke.registerPlugin(Cm) || ke;
pt.core.Tween;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O2 = (g) => g.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Dm = (...g) =>
    g
      .filter((l, r, i) => !!l && l.trim() !== "" && i.indexOf(l) === r)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var R2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C2 = I.forwardRef(
  (
    {
      color: g = "currentColor",
      size: l = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: i,
      className: f = "",
      children: c,
      iconNode: o,
      ...h
    },
    p,
  ) =>
    I.createElement(
      "svg",
      {
        ref: p,
        ...R2,
        width: l,
        height: l,
        stroke: g,
        strokeWidth: i ? (Number(r) * 24) / Number(l) : r,
        className: Dm("lucide", f),
        ...h,
      },
      [
        ...o.map(([m, v]) => I.createElement(m, v)),
        ...(Array.isArray(c) ? c : [c]),
      ],
    ),
);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wt = (g, l) => {
  const r = I.forwardRef(({ className: i, ...f }, c) =>
    I.createElement(C2, {
      ref: c,
      iconNode: l,
      className: Dm(`lucide-${O2(g)}`, i),
      ...f,
    }),
  );
  return ((r.displayName = `${g}`), r);
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D2 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  Vr = wt("ArrowRight", D2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w2 = [
    [
      "path",
      {
        d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
        key: "1tc9qg",
      },
    ],
    ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
  ],
  N2 = wt("Camera", w2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  U2 = wt("ChevronDown", B2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k2 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  H2 = wt("ChevronLeft", k2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  Y2 = wt("ChevronRight", q2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L2 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  X2 = wt("ChevronUp", L2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G2 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  Q2 = wt("CircleAlert", G2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V2 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  Z2 = wt("CircleCheck", V2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K2 = [
    [
      "path",
      {
        d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
        key: "1vdc57",
      },
    ],
    ["path", { d: "M5 21h14", key: "11awu3" }],
  ],
  wm = wt("Crown", K2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J2 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  O1 = wt("Disc", J2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F2 = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
  ],
  W2 = wt("Download", F2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $2 = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  I2 = wt("Eye", $2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P2 = [
    [
      "path",
      {
        d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
        key: "96xj49",
      },
    ],
  ],
  R1 = wt("Flame", P2);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tv = [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky",
      },
    ],
  ],
  Nm = wt("Heart", tv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ev = [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ],
  av = wt("Lock", ev);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nv = [
    ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
    ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
    ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
    ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }],
  ],
  lv = wt("Maximize2", nv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iv = [
    [
      "rect",
      { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" },
    ],
    [
      "rect",
      { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" },
    ],
  ],
  C1 = wt("Pause", iv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uv = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]],
  D1 = wt("Play", uv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rv = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  sv = wt("Plus", rv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fv = [
    [
      "path",
      {
        d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
        key: "w46dr5",
      },
    ],
  ],
  cv = wt("Puzzle", fv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ov = [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0",
      },
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd",
      },
    ],
  ],
  dv = wt("Quote", ov);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hv = [
    [
      "path",
      { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ],
  Bm = wt("RotateCcw", hv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mv = [
    [
      "path",
      { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ],
  gv = wt("RotateCw", mv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pv = [
    ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
    ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }],
  ],
  yv = wt("SkipBack", pv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vv = [
    ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
    ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }],
  ],
  _v = wt("SkipForward", vv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bv = [
    [
      "path",
      {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
        key: "4pj2yx",
      },
    ],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    ["path", { d: "M22 5h-4", key: "1gvqau" }],
    ["path", { d: "M4 17v2", key: "vumght" }],
    ["path", { d: "M5 18H3", key: "zchphs" }],
  ],
  En = wt("Sparkles", bv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xv = [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
        key: "uqj9uw",
      },
    ],
    ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
    ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }],
  ],
  Sv = wt("Volume2", xv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tv = [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
        key: "uqj9uw",
      },
    ],
    ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
    ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }],
  ],
  w1 = wt("VolumeX", Tv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zv = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Mv = wt("X", zv);
function Ev({ onStart: g }) {
  const l = I.useRef(null),
    r = I.useRef(null),
    i = I.useRef(null),
    f = I.useRef(null),
    c = I.useRef(null),
    o = I.useRef(null),
    h = I.useRef(null),
    p = I.useRef(null),
    m = I.useRef(null),
    v = I.useRef([]);
  I.useEffect(() => {
    const S = pt.timeline({ delay: 0.1 });
    (S.fromTo(
      r.current,
      { scale: 1.2, opacity: 0, filter: "blur(12px)" },
      {
        scale: 1,
        opacity: 0.95,
        filter: "blur(0px)",
        duration: 1.6,
        ease: "power2.out",
      },
    ),
      S.fromTo(i.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, 0.2),
      S.fromTo(
        f.current,
        { opacity: 0, y: -20, scale: 0.7 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(2.2)" },
        0.4,
      ),
      pt.to(f.current, {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: !0,
        ease: "sine.inOut",
      }),
      S.fromTo(
        c.current,
        { opacity: 0, y: 15, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.6)" },
        0.6,
      ),
      S.fromTo(
        o.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        0.8,
      ),
      S.fromTo(
        h.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" },
        1,
      ),
      S.fromTo(
        p.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        1.3,
      ),
      v.current.forEach((M, b) => {
        M &&
          (S.fromTo(
            M,
            { opacity: 0, scale: 0, rotation: -30 },
            {
              opacity: 0.85,
              scale: 1,
              rotation: 0,
              duration: 0.5,
              ease: "back.out(2)",
            },
            1 + b * 0.1,
          ),
          pt.to(M, {
            y: `${-8 + Math.random() * 16}`,
            x: `${-6 + Math.random() * 12}`,
            duration: 2 + Math.random() * 1.5,
            repeat: -1,
            yoyo: !0,
            ease: "sine.inOut",
            delay: b * 0.15,
          }));
      }),
      S.fromTo(
        m.current,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.8)" },
        1.6,
      ));
  }, []);
  const T = () => {
      pt.timeline().to(l.current, {
        scale: 1.03,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.4,
        ease: "power2.in",
        onComplete: g,
      });
    },
    j = [
      { emoji: "🍵", top: "8%", left: "7%", size: "1.3rem" },
      { emoji: "🍃", top: "14%", right: "8%", size: "1.2rem" },
      { emoji: "🎉", top: "26%", left: "5%", size: "1.2rem" },
      { emoji: "💙", top: "24%", right: "6%", size: "1.1rem" },
      { emoji: "🌿", bottom: "20%", left: "8%", size: "1.2rem" },
      { emoji: "💫", bottom: "18%", right: "7%", size: "1.2rem" },
      { emoji: "🍵", top: "42%", left: "4%", size: "1rem" },
      { emoji: "✨", top: "38%", right: "4%", size: "1.2rem" },
    ];
  return x.jsxs("div", {
    ref: l,
    style: {
      position: "relative",
      width: "100%",
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      padding: "16px 0",
    },
    children: [
      x.jsx("img", {
        ref: r,
        src: "/james 1.jfif",
        alt: "Happy Birthday Sayangku",
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0,
        },
        onError: (S) => {
          S.target.src = "/james 1.jfif";
        },
      }),
      x.jsx("div", {
        ref: i,
        style: {
          position: "absolute",
          inset: 0,
          opacity: 0,
          background:
            "radial-gradient(circle at center, rgba(15, 23, 42, 0.65) 0%, rgba(10, 15, 30, 0.9) 70%, rgba(5, 10, 20, 0.98) 100%)",
        },
      }),
      x.jsx("img", {
        src: "/lucu1 no bg.png",
        alt: "Lucu 1",
        style: {
          position: "absolute",
          bottom: "6%",
          left: "-2%",
          width: 100,
          zIndex: 2,
          pointerEvents: "none",
          filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.4))",
        },
        onError: (S) => (S.target.style.display = "none"),
      }),
      x.jsx("img", {
        src: "/lucu 2 no bg.png",
        alt: "Lucu 2",
        style: {
          position: "absolute",
          bottom: "10%",
          right: "-2%",
          width: 95,
          zIndex: 2,
          pointerEvents: "none",
          filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.4))",
        },
        onError: (S) => (S.target.style.display = "none"),
      }),
      j.map((S, M) =>
        x.jsx(
          "span",
          {
            ref: (b) => (v.current[M] = b),
            style: {
              position: "absolute",
              fontSize: S.size,
              opacity: 0,
              top: S.top,
              left: S.left,
              right: S.right,
              bottom: S.bottom,
              pointerEvents: "none",
              zIndex: 2,
              filter: "drop-shadow(0 0 8px rgba(122,154,96,0.7))",
            },
            children: S.emoji,
          },
          M,
        ),
      ),
      x.jsxs("div", {
        style: {
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          padding: "0 20px",
          maxWidth: 350,
          width: "100%",
        },
        children: [
          x.jsx("div", {
            ref: f,
            style: { opacity: 0, marginBottom: 8, display: "inline-block" },
            children: x.jsxs("div", {
              className: "sparkling-20-badge",
              children: [
                x.jsx("span", {
                  className: "sparkle-icon-left",
                  children: "✨",
                }),
                x.jsx("span", {
                  className: "sparkling-20-text",
                  children: "36",
                }),
                x.jsx("span", {
                  className: "sparkle-icon-right",
                  children: "🍵",
                }),
              ],
            }),
          }),
          x.jsxs("div", {
            ref: c,
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 16px",
              borderRadius: 30,
              marginBottom: 12,
              background: "rgba(59, 130, 246, 0.25)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(163, 201, 133, 0.6)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
              opacity: 0,
            },
            children: [
              x.jsx(wm, { size: 14, color: "var(--gold-accent)" }),
              x.jsx("span", {
                className: "sparkling-birthday-text",
                children: "Happy 36th Birthday Suamiku! ❤️🔥",
              }),
            ],
          }),
          x.jsx("p", {
            ref: o,
            style: {
              fontFamily: "var(--font-cute)",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "rgba(224,242,254,0.9)",
              letterSpacing: "1.8px",
              textTransform: "uppercase",
              marginBottom: 4,
              opacity: 0,
            },
            children: "Special Exhibition Dedicated To",
          }),
          x.jsx("h1", {
            ref: h,
            style: {
              fontFamily: "var(--font-display)",
              fontSize: "2.5rem",
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 10,
              opacity: 0,
              textShadow:
                "0 4px 20px rgba(59, 130, 246, 0.7), 0 0 35px rgba(122, 154, 96, 0.5)",
            },
            children: "Papi Adel ❤️",
          }),
          x.jsxs("div", {
            ref: p,
            style: { opacity: 0 },
            children: [
              x.jsx("div", {
                className: "birthday-greeting-box",
                children: x.jsx("p", {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    color: "#dcfce7",
                    margin: 0,
                    lineHeight: 1.3,
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                  },
                  children: '"Happy bday suamikuuu tersayang ❤️🔥"',
                }),
              }),
              x.jsx("p", {
                style: {
                  fontFamily: "var(--font-cute)",
                  fontSize: "0.78rem",
                  color: "#bfdbfe",
                  fontWeight: 600,
                  marginBottom: 20,
                  letterSpacing: "0.5px",
                },
                children:
                  "A Special Dedicated Collection of Moments & Memories 🌿✨",
              }),
            ],
          }),
          x.jsx("button", {
            ref: m,
            onClick: T,
            style: {
              opacity: 0,
              padding: "14px 32px",
              borderRadius: 60,
              border: "none",
              background: "linear-gradient(135deg, #3b82f6 0%, #7a9a60 100%)",
              color: "#fff",
              fontFamily: "var(--font-cute)",
              fontSize: "0.92rem",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "0.5px",
              boxShadow:
                "0 8px 28px rgba(59, 130, 246, 0.4), 0 0 18px rgba(122, 154, 96, 0.4)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            },
            onPointerDown: (S) => {
              S.currentTarget.style.transform = "scale(0.96)";
            },
            onPointerUp: (S) => {
              S.currentTarget.style.transform = "scale(1)";
            },
            onPointerLeave: (S) => {
              S.currentTarget.style.transform = "scale(1)";
            },
            children: "Jelajahi Galeri Ulang Tahun 🍃",
          }),
        ],
      }),
    ],
  });
}
function jv({ onUnlock: g }) {
  const [l, r] = I.useState(""),
    [i, f] = I.useState(!1),
    c = "100123",
    o = I.useRef(null),
    h = I.useRef([]),
    p = I.useRef(null);
  I.useEffect(() => {
    const M = pt.timeline();
    (M.fromTo(
      o.current,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.4)" },
    ),
      M.fromTo(
        p.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.55, ease: "back.out(2)" },
        "-=0.3",
      ));
  }, []);
  const m = (M) => {
      if (l.length >= 6) return;
      const b = l + M;
      (r(b), f(!1));
      const A = h.current[b.length - 1];
      (A &&
        pt.fromTo(
          A,
          { scale: 0.5 },
          { scale: 1, duration: 0.25, ease: "back.out(3)" },
        ),
        b.length === 6 && setTimeout(() => j(b), 200));
    },
    v = () => {
      (r(l.slice(0, -1)), f(!1));
    },
    T = () => {
      (r(""), f(!1));
    },
    j = (M) => {
      M === c
        ? (pt.to(p.current, {
            rotation: 20,
            duration: 0.2,
            yoyo: !0,
            repeat: 1,
          }),
          pt.to(o.current, {
            scale: 1.06,
            opacity: 0,
            y: -30,
            duration: 0.55,
            ease: "back.in(1.7)",
            delay: 0.3,
            onComplete: g,
          }))
        : (f(!0),
          r(""),
          pt.to(o.current, {
            x: [0, -14, 14, -10, 10, -4, 4, 0],
            duration: 0.45,
            ease: "power2.out",
          }));
    },
    S = [1, 2, 3, 4, 5, 6, 7, 8, 9, "C", 0, "⌫"];
  return x.jsx("div", {
    className: "stage",
    children: x.jsxs("div", {
      ref: o,
      className: "glass",
      style: {
        width: "100%",
        maxWidth: "350px",
        padding: "34px 22px",
        opacity: 0,
        border: "1.5px solid var(--glass-border)",
      },
      children: [
        x.jsx("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            marginBottom: 18,
          },
          children: x.jsx("div", {
            ref: p,
            style: {
              width: 62,
              height: 62,
              borderRadius: "50%",
              background: "linear-gradient(145deg, #7a9a60, #3b82f6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 28px rgba(59, 130, 246, 0.3)",
              color: "#fff",
            },
            children: x.jsx(av, { size: 26, strokeWidth: 2.3 }),
          }),
        }),
        x.jsx("h1", {
          style: {
            fontFamily: "var(--font-display)",
            fontSize: "1.75rem",
            color: "var(--berry)",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 4,
          },
          children: "Akses Galeri Spesial 🍵✨",
        }),
        x.jsx("p", {
          style: {
            fontFamily: "var(--font-cute)",
            fontSize: "0.82rem",
            color: "#2563eb",
            textAlign: "center",
            fontWeight: 600,
            marginBottom: 22,
            opacity: 0.9,
          },
          children: "Masukkan tanggal rahasia kita ❤️ (100123)",
        }),
        x.jsx("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginBottom: 22,
          },
          children: [0, 1, 2, 3, 4, 5].map((M) => {
            const b = l.length > M;
            return x.jsx(
              "div",
              {
                ref: (A) => (h.current[M] = A),
                style: {
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: b
                    ? "linear-gradient(135deg, #7a9a60, #3b82f6)"
                    : "rgba(255,255,255,0.85)",
                  border: b ? "none" : "2px dashed #93c5fd",
                  boxShadow: b ? "0 4px 16px rgba(59, 130, 246, 0.3)" : "none",
                  transition: "all 0.2s ease",
                },
                children:
                  b &&
                  x.jsx("span", {
                    style: { fontSize: "0.9rem" },
                    children: "🍃",
                  }),
              },
              M,
            );
          }),
        }),
        i &&
          x.jsxs("div", {
            style: {
              background: "rgba(212,69,108,0.12)",
              color: "var(--pink-deep)",
              padding: "8px 14px",
              borderRadius: 14,
              fontSize: "0.78rem",
              fontWeight: 600,
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              border: "1px solid rgba(212,69,108,0.25)",
            },
            children: [
              x.jsx(Q2, { size: 14 }),
              " Kode akses tidak sesuai. Silakan coba lagi.",
            ],
          }),
        x.jsx("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
            marginBottom: 12,
          },
          children: S.map((M) => {
            const b = M === "C" || M === "⌫";
            return x.jsx(
              "button",
              {
                onClick: () => {
                  M === "C" ? T() : M === "⌫" ? v() : m(M.toString());
                },
                style: {
                  height: 52,
                  borderRadius: 14,
                  border: b ? "none" : "1px solid rgba(212,163,89,0.3)",
                  background: b
                    ? "rgba(248,164,190,0.2)"
                    : "rgba(255,255,255,0.85)",
                  color: b ? "var(--pink-deep)" : "var(--berry)",
                  fontFamily: "var(--font-cute)",
                  fontSize: b ? "0.8rem" : "1.15rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: b ? "none" : "0 3px 10px rgba(45,16,30,0.06)",
                  transition: "transform 0.1s, background 0.15s",
                },
                onPointerDown: (A) => {
                  A.currentTarget.style.transform = "scale(0.93)";
                },
                onPointerUp: (A) => {
                  A.currentTarget.style.transform = "scale(1)";
                },
                onPointerLeave: (A) => {
                  A.currentTarget.style.transform = "scale(1)";
                },
                children: M,
              },
              M,
            );
          }),
        }),
      ],
    }),
  });
}
var ao = {};
(function g(l, r, i, f) {
  var c = !!(
      l.Worker &&
      l.Blob &&
      l.Promise &&
      l.OffscreenCanvas &&
      l.OffscreenCanvasRenderingContext2D &&
      l.HTMLCanvasElement &&
      l.HTMLCanvasElement.prototype.transferControlToOffscreen &&
      l.URL &&
      l.URL.createObjectURL
    ),
    o = typeof Path2D == "function" && typeof DOMMatrix == "function",
    h = (function () {
      if (!l.OffscreenCanvas) return !1;
      try {
        var C = new OffscreenCanvas(1, 1),
          y = C.getContext("2d");
        y.fillRect(0, 0, 1, 1);
        var R = C.transferToImageBitmap();
        y.createPattern(R, "no-repeat");
      } catch {
        return !1;
      }
      return !0;
    })();
  function p() {}
  function m(C) {
    var y = r.exports.Promise,
      R = y !== void 0 ? y : l.Promise;
    return typeof R == "function" ? new R(C) : (C(p, p), null);
  }
  var v = (function (C, y) {
      return {
        transform: function (R) {
          if (C) return R;
          if (y.has(R)) return y.get(R);
          var L = new OffscreenCanvas(R.width, R.height),
            Z = L.getContext("2d");
          return (Z.drawImage(R, 0, 0), y.set(R, L), L);
        },
        clear: function () {
          y.clear();
        },
      };
    })(h, new Map()),
    T = (function () {
      var C = Math.floor(16.666666666666668),
        y,
        R,
        L = {},
        Z = 0;
      return (
        typeof requestAnimationFrame == "function" &&
        typeof cancelAnimationFrame == "function"
          ? ((y = function ($) {
              var at = Math.random();
              return (
                (L[at] = requestAnimationFrame(function tt(rt) {
                  Z === rt || Z + C - 1 < rt
                    ? ((Z = rt), delete L[at], $())
                    : (L[at] = requestAnimationFrame(tt));
                })),
                at
              );
            }),
            (R = function ($) {
              L[$] && cancelAnimationFrame(L[$]);
            }))
          : ((y = function ($) {
              return setTimeout($, C);
            }),
            (R = function ($) {
              return clearTimeout($);
            })),
        { frame: y, cancel: R }
      );
    })(),
    j = (function () {
      var C,
        y,
        R = {};
      function L(Z) {
        function $(at, tt) {
          Z.postMessage({ options: at || {}, callback: tt });
        }
        ((Z.init = function (tt) {
          var rt = tt.transferControlToOffscreen();
          Z.postMessage({ canvas: rt }, [rt]);
        }),
          (Z.fire = function (tt, rt, ft) {
            if (y) return ($(tt, null), y);
            var Nt = Math.random().toString(36).slice(2);
            return (
              (y = m(function (Rt) {
                function Lt(ee) {
                  ee.data.callback === Nt &&
                    (delete R[Nt],
                    Z.removeEventListener("message", Lt),
                    (y = null),
                    v.clear(),
                    ft(),
                    Rt());
                }
                (Z.addEventListener("message", Lt),
                  $(tt, Nt),
                  (R[Nt] = Lt.bind(null, { data: { callback: Nt } })));
              })),
              y
            );
          }),
          (Z.reset = function () {
            Z.postMessage({ reset: !0 });
            for (var tt in R) (R[tt](), delete R[tt]);
          }));
      }
      return function () {
        if (C) return C;
        if (!i && c) {
          var Z = [
            "var CONFETTI, SIZE = {}, module = {};",
            "(" + g.toString() + ")(this, module, true, SIZE);",
            "onmessage = function(msg) {",
            "  if (msg.data.options) {",
            "    CONFETTI(msg.data.options).then(function () {",
            "      if (msg.data.callback) {",
            "        postMessage({ callback: msg.data.callback });",
            "      }",
            "    });",
            "  } else if (msg.data.reset) {",
            "    CONFETTI && CONFETTI.reset();",
            "  } else if (msg.data.resize) {",
            "    SIZE.width = msg.data.resize.width;",
            "    SIZE.height = msg.data.resize.height;",
            "  } else if (msg.data.canvas) {",
            "    SIZE.width = msg.data.canvas.width;",
            "    SIZE.height = msg.data.canvas.height;",
            "    CONFETTI = module.exports.create(msg.data.canvas);",
            "  }",
            "}",
          ].join(`
`);
          try {
            C = new Worker(URL.createObjectURL(new Blob([Z])));
          } catch ($) {
            return (
              typeof console < "u" &&
                typeof console.warn == "function" &&
                console.warn("🎊 Could not load worker", $),
              null
            );
          }
          L(C);
        }
        return C;
      };
    })(),
    S = {
      particleCount: 50,
      angle: 90,
      spread: 45,
      startVelocity: 45,
      decay: 0.9,
      gravity: 1,
      drift: 0,
      ticks: 200,
      x: 0.5,
      y: 0.5,
      shapes: ["square", "circle"],
      zIndex: 100,
      colors: [
        "#26ccff",
        "#a25afd",
        "#ff5e7e",
        "#88ff5a",
        "#fcff42",
        "#ffa62d",
        "#ff36ff",
      ],
      disableForReducedMotion: !1,
      scalar: 1,
    };
  function M(C, y) {
    return y ? y(C) : C;
  }
  function b(C) {
    return C != null;
  }
  function A(C, y, R) {
    return M(C && b(C[y]) ? C[y] : S[y], R);
  }
  function k(C) {
    return C < 0 ? 0 : Math.floor(C);
  }
  function q(C, y) {
    return Math.floor(Math.random() * (y - C)) + C;
  }
  function Q(C) {
    return parseInt(C, 16);
  }
  function K(C) {
    return C.map(V);
  }
  function V(C) {
    var y = String(C).replace(/[^0-9a-f]/gi, "");
    return (
      y.length < 6 && (y = y[0] + y[0] + y[1] + y[1] + y[2] + y[2]),
      {
        r: Q(y.substring(0, 2)),
        g: Q(y.substring(2, 4)),
        b: Q(y.substring(4, 6)),
      }
    );
  }
  function P(C) {
    var y = A(C, "origin", Object);
    return ((y.x = A(y, "x", Number)), (y.y = A(y, "y", Number)), y);
  }
  function Y(C) {
    ((C.width = document.documentElement.clientWidth),
      (C.height = document.documentElement.clientHeight));
  }
  function W(C) {
    var y = C.getBoundingClientRect();
    ((C.width = y.width), (C.height = y.height));
  }
  function F(C) {
    var y = document.createElement("canvas");
    return (
      (y.style.position = "fixed"),
      (y.style.top = "0px"),
      (y.style.left = "0px"),
      (y.style.pointerEvents = "none"),
      (y.style.zIndex = C),
      y
    );
  }
  function et(C, y, R, L, Z, $, at, tt, rt) {
    (C.save(),
      C.translate(y, R),
      C.rotate($),
      C.scale(L, Z),
      C.arc(0, 0, 1, at, tt, rt),
      C.restore());
  }
  function ot(C) {
    var y = C.angle * (Math.PI / 180),
      R = C.spread * (Math.PI / 180);
    return {
      x: C.x,
      y: C.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: C.startVelocity * 0.5 + Math.random() * C.startVelocity,
      angle2D: -y + (0.5 * R - Math.random() * R),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: C.color,
      shape: C.shape,
      tick: 0,
      totalTicks: C.ticks,
      decay: C.decay,
      drift: C.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: C.gravity * 3,
      ovalScalar: 0.6,
      scalar: C.scalar,
      flat: C.flat,
    };
  }
  function ct(C, y) {
    ((y.x += Math.cos(y.angle2D) * y.velocity + y.drift),
      (y.y += Math.sin(y.angle2D) * y.velocity + y.gravity),
      (y.velocity *= y.decay),
      y.flat
        ? ((y.wobble = 0),
          (y.wobbleX = y.x + 10 * y.scalar),
          (y.wobbleY = y.y + 10 * y.scalar),
          (y.tiltSin = 0),
          (y.tiltCos = 0),
          (y.random = 1))
        : ((y.wobble += y.wobbleSpeed),
          (y.wobbleX = y.x + 10 * y.scalar * Math.cos(y.wobble)),
          (y.wobbleY = y.y + 10 * y.scalar * Math.sin(y.wobble)),
          (y.tiltAngle += 0.1),
          (y.tiltSin = Math.sin(y.tiltAngle)),
          (y.tiltCos = Math.cos(y.tiltAngle)),
          (y.random = Math.random() + 2)));
    var R = y.tick++ / y.totalTicks,
      L = y.x + y.random * y.tiltCos,
      Z = y.y + y.random * y.tiltSin,
      $ = y.wobbleX + y.random * y.tiltCos,
      at = y.wobbleY + y.random * y.tiltSin;
    if (
      ((C.fillStyle =
        "rgba(" +
        y.color.r +
        ", " +
        y.color.g +
        ", " +
        y.color.b +
        ", " +
        (1 - R) +
        ")"),
      C.beginPath(),
      o &&
        y.shape.type === "path" &&
        typeof y.shape.path == "string" &&
        Array.isArray(y.shape.matrix))
    )
      C.fill(
        J(
          y.shape.path,
          y.shape.matrix,
          y.x,
          y.y,
          Math.abs($ - L) * 0.1,
          Math.abs(at - Z) * 0.1,
          (Math.PI / 10) * y.wobble,
        ),
      );
    else if (y.shape.type === "bitmap") {
      var tt = (Math.PI / 10) * y.wobble,
        rt = Math.abs($ - L) * 0.1,
        ft = Math.abs(at - Z) * 0.1,
        Nt = y.shape.bitmap.width * y.scalar,
        Rt = y.shape.bitmap.height * y.scalar,
        Lt = new DOMMatrix([
          Math.cos(tt) * rt,
          Math.sin(tt) * rt,
          -Math.sin(tt) * ft,
          Math.cos(tt) * ft,
          y.x,
          y.y,
        ]);
      Lt.multiplySelf(new DOMMatrix(y.shape.matrix));
      var ee = C.createPattern(v.transform(y.shape.bitmap), "no-repeat");
      (ee.setTransform(Lt),
        (C.globalAlpha = 1 - R),
        (C.fillStyle = ee),
        C.fillRect(y.x - Nt / 2, y.y - Rt / 2, Nt, Rt),
        (C.globalAlpha = 1));
    } else if (y.shape === "circle")
      C.ellipse
        ? C.ellipse(
            y.x,
            y.y,
            Math.abs($ - L) * y.ovalScalar,
            Math.abs(at - Z) * y.ovalScalar,
            (Math.PI / 10) * y.wobble,
            0,
            2 * Math.PI,
          )
        : et(
            C,
            y.x,
            y.y,
            Math.abs($ - L) * y.ovalScalar,
            Math.abs(at - Z) * y.ovalScalar,
            (Math.PI / 10) * y.wobble,
            0,
            2 * Math.PI,
          );
    else if (y.shape === "star")
      for (
        var mt = (Math.PI / 2) * 3,
          se = 4 * y.scalar,
          Se = 8 * y.scalar,
          He = y.x,
          ea = y.y,
          ga = 5,
          ze = Math.PI / ga;
        ga--;
      )
        ((He = y.x + Math.cos(mt) * Se),
          (ea = y.y + Math.sin(mt) * Se),
          C.lineTo(He, ea),
          (mt += ze),
          (He = y.x + Math.cos(mt) * se),
          (ea = y.y + Math.sin(mt) * se),
          C.lineTo(He, ea),
          (mt += ze));
    else
      (C.moveTo(Math.floor(y.x), Math.floor(y.y)),
        C.lineTo(Math.floor(y.wobbleX), Math.floor(Z)),
        C.lineTo(Math.floor($), Math.floor(at)),
        C.lineTo(Math.floor(L), Math.floor(y.wobbleY)));
    return (C.closePath(), C.fill(), y.tick < y.totalTicks);
  }
  function yt(C, y, R, L, Z) {
    var $ = y.slice(),
      at = C.getContext("2d"),
      tt,
      rt,
      ft = m(function (Nt) {
        function Rt() {
          ((tt = rt = null),
            at.clearRect(0, 0, L.width, L.height),
            v.clear(),
            Z(),
            Nt());
        }
        function Lt() {
          (i &&
            !(L.width === f.width && L.height === f.height) &&
            ((L.width = C.width = f.width), (L.height = C.height = f.height)),
            !L.width &&
              !L.height &&
              (R(C), (L.width = C.width), (L.height = C.height)),
            at.clearRect(0, 0, L.width, L.height),
            ($ = $.filter(function (ee) {
              return ct(at, ee);
            })),
            $.length ? (tt = T.frame(Lt)) : Rt());
        }
        ((tt = T.frame(Lt)), (rt = Rt));
      });
    return {
      addFettis: function (Nt) {
        return (($ = $.concat(Nt)), ft);
      },
      canvas: C,
      promise: ft,
      reset: function () {
        (tt && T.cancel(tt), rt && rt());
      },
    };
  }
  function vt(C, y) {
    var R = !C,
      L = !!A(y || {}, "resize"),
      Z = !1,
      $ = A(y, "disableForReducedMotion", Boolean),
      at = c && !!A(y || {}, "useWorker"),
      tt = at ? j() : null,
      rt = R ? Y : W,
      ft = C && tt ? !!C.__confetti_initialized : !1,
      Nt =
        typeof matchMedia == "function" &&
        matchMedia("(prefers-reduced-motion)").matches,
      Rt;
    function Lt(mt, se, Se) {
      for (
        var He = A(mt, "particleCount", k),
          ea = A(mt, "angle", Number),
          ga = A(mt, "spread", Number),
          ze = A(mt, "startVelocity", Number),
          ei = A(mt, "decay", Number),
          Zr = A(mt, "gravity", Number),
          Kr = A(mt, "drift", Number),
          ve = A(mt, "colors", K),
          Jr = A(mt, "ticks", Number),
          ai = A(mt, "shapes"),
          hu = A(mt, "scalar"),
          il = !!A(mt, "flat"),
          mu = P(mt),
          ni = He,
          li = [],
          Fr = C.width * mu.x,
          Cn = C.height * mu.y;
        ni--;
      )
        li.push(
          ot({
            x: Fr,
            y: Cn,
            angle: ea,
            spread: ga,
            startVelocity: ze,
            color: ve[ni % ve.length],
            shape: ai[q(0, ai.length)],
            ticks: Jr,
            decay: ei,
            gravity: Zr,
            drift: Kr,
            scalar: hu,
            flat: il,
          }),
        );
      return Rt ? Rt.addFettis(li) : ((Rt = yt(C, li, rt, se, Se)), Rt.promise);
    }
    function ee(mt) {
      var se = $ || A(mt, "disableForReducedMotion", Boolean),
        Se = A(mt, "zIndex", Number);
      if (se && Nt)
        return m(function (ze) {
          ze();
        });
      (R && Rt
        ? (C = Rt.canvas)
        : R && !C && ((C = F(Se)), document.body.appendChild(C)),
        L && !ft && rt(C));
      var He = { width: C.width, height: C.height };
      (tt && !ft && tt.init(C),
        (ft = !0),
        tt && (C.__confetti_initialized = !0));
      function ea() {
        if (tt) {
          var ze = {
            getBoundingClientRect: function () {
              if (!R) return C.getBoundingClientRect();
            },
          };
          (rt(ze),
            tt.postMessage({ resize: { width: ze.width, height: ze.height } }));
          return;
        }
        He.width = He.height = null;
      }
      function ga() {
        ((Rt = null),
          L && ((Z = !1), l.removeEventListener("resize", ea)),
          R &&
            C &&
            (document.body.contains(C) && document.body.removeChild(C),
            (C = null),
            (ft = !1)));
      }
      return (
        L && !Z && ((Z = !0), l.addEventListener("resize", ea, !1)),
        tt ? tt.fire(mt, He, ga) : Lt(mt, He, ga)
      );
    }
    return (
      (ee.reset = function () {
        (tt && tt.reset(), Rt && Rt.reset());
      }),
      ee
    );
  }
  var Et;
  function B() {
    return (Et || (Et = vt(null, { useWorker: !0, resize: !0 })), Et);
  }
  function J(C, y, R, L, Z, $, at) {
    var tt = new Path2D(C),
      rt = new Path2D();
    rt.addPath(tt, new DOMMatrix(y));
    var ft = new Path2D();
    return (
      ft.addPath(
        rt,
        new DOMMatrix([
          Math.cos(at) * Z,
          Math.sin(at) * Z,
          -Math.sin(at) * $,
          Math.cos(at) * $,
          R,
          L,
        ]),
      ),
      ft
    );
  }
  function lt(C) {
    if (!o) throw new Error("path confetti are not supported in this browser");
    var y, R;
    typeof C == "string" ? (y = C) : ((y = C.path), (R = C.matrix));
    var L = new Path2D(y),
      Z = document.createElement("canvas"),
      $ = Z.getContext("2d");
    if (!R) {
      for (
        var at = 1e3, tt = at, rt = at, ft = 0, Nt = 0, Rt, Lt, ee = 0;
        ee < at;
        ee += 2
      )
        for (var mt = 0; mt < at; mt += 2)
          $.isPointInPath(L, ee, mt, "nonzero") &&
            ((tt = Math.min(tt, ee)),
            (rt = Math.min(rt, mt)),
            (ft = Math.max(ft, ee)),
            (Nt = Math.max(Nt, mt)));
      ((Rt = ft - tt), (Lt = Nt - rt));
      var se = 10,
        Se = Math.min(se / Rt, se / Lt);
      R = [
        Se,
        0,
        0,
        Se,
        -Math.round(Rt / 2 + tt) * Se,
        -Math.round(Lt / 2 + rt) * Se,
      ];
    }
    return { type: "path", path: y, matrix: R };
  }
  function _t(C) {
    var y,
      R = 1,
      L = "#000000",
      Z =
        '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof C == "string"
      ? (y = C)
      : ((y = C.text),
        (R = "scalar" in C ? C.scalar : R),
        (Z = "fontFamily" in C ? C.fontFamily : Z),
        (L = "color" in C ? C.color : L));
    var $ = 10 * R,
      at = "" + $ + "px " + Z,
      tt = new OffscreenCanvas($, $),
      rt = tt.getContext("2d");
    rt.font = at;
    var ft = rt.measureText(y),
      Nt = Math.ceil(ft.actualBoundingBoxRight + ft.actualBoundingBoxLeft),
      Rt = Math.ceil(ft.actualBoundingBoxAscent + ft.actualBoundingBoxDescent),
      Lt = 2,
      ee = ft.actualBoundingBoxLeft + Lt,
      mt = ft.actualBoundingBoxAscent + Lt;
    ((Nt += Lt + Lt),
      (Rt += Lt + Lt),
      (tt = new OffscreenCanvas(Nt, Rt)),
      (rt = tt.getContext("2d")),
      (rt.font = at),
      (rt.fillStyle = L),
      rt.fillText(y, ee, mt));
    var se = 1 / R;
    return {
      type: "bitmap",
      bitmap: tt.transferToImageBitmap(),
      matrix: [se, 0, 0, se, (-Nt * se) / 2, (-Rt * se) / 2],
    };
  }
  ((r.exports = function () {
    return B().apply(this, arguments);
  }),
    (r.exports.reset = function () {
      B().reset();
    }),
    (r.exports.create = vt),
    (r.exports.shapeFromPath = lt),
    (r.exports.shapeFromText = _t));
})(
  (function () {
    return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
  })(),
  ao,
  !1,
);
const no = ao.exports;
ao.exports.create;
function Av({ onComplete: g }) {
  const [l, r] = I.useState([]),
    [i, f] = I.useState(0),
    [c, o] = I.useState(!1),
    [h, p] = I.useState(!1),
    m = I.useRef(null),
    v = I.useRef(null);
  I.useEffect(() => {
    (T(),
      pt.fromTo(
        v.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.2)" },
      ));
  }, []);
  const T = () => {
      let b = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      for (let k = 7; k > 0; k--) {
        const q = Math.floor(Math.random() * (k + 1));
        [b[k], b[q]] = [b[q], b[k]];
      }
      let A = 0;
      for (let k = 0; k < 9; k++)
        for (let q = k + 1; q < 9; q++)
          b[k] !== 8 && b[q] !== 8 && b[k] > b[q] && A++;
      (A % 2 !== 0 && ([b[0], b[1]] = [b[1], b[0]]), r(b), f(0), p(!1));
    },
    j = (b) => {
      if (h) return;
      const A = l.indexOf(8),
        k = Math.floor(b / 3),
        q = b % 3,
        Q = Math.floor(A / 3),
        K = A % 3;
      if (!(Math.abs(k - Q) + Math.abs(q - K) === 1)) return;
      const P = [...l];
      (([P[b], P[A]] = [P[A], P[b]]),
        r(P),
        f((Y) => Y + 1),
        P.every((Y, W) => Y === W) && S());
    },
    S = () => {
      (p(!0),
        no({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 },
          colors: ["#3b82f6", "#7a9a60", "#93c5fd", "#a3c985", "#ffffff"],
        }),
        pt.fromTo(
          m.current,
          { scale: 1 },
          {
            scale: 1.05,
            duration: 0.4,
            yoyo: !0,
            repeat: 1,
            ease: "power2.out",
          },
        ));
    },
    M = () => {
      (r([0, 1, 2, 3, 4, 5, 6, 7, 8]), setTimeout(S, 150));
    };
  return x.jsx("div", {
    className: "stage",
    children: x.jsxs("div", {
      ref: v,
      style: {
        width: "100%",
        maxWidth: "380px",
        padding: "30px 24px",
        opacity: 0,
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.96), rgba(240,249,255,0.88))",
        backdropFilter: "blur(20px)",
        borderRadius: 32,
        boxShadow:
          "0 20px 60px rgba(15,23,42,0.12), inset 0 0 0 1px rgba(255,255,255,0.6)",
      },
      children: [
        x.jsxs("div", {
          style: { textAlign: "center", marginBottom: 22 },
          children: [
            x.jsxs("div", {
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 14px",
                borderRadius: 20,
                background: "rgba(122,154,96,0.15)",
                color: "#4a6b34",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 10,
              },
              children: [x.jsx(cv, { size: 12 }), " Galeri Kenangan 🍵"],
            }),
            x.jsx("h2", {
              style: {
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                color: "var(--berry)",
                marginBottom: 6,
                lineHeight: 1.1,
              },
              children: "Puzzle Kenangan",
            }),
            x.jsx("p", {
              style: {
                fontFamily: "var(--font-cute)",
                fontSize: "0.85rem",
                color: "#2563eb",
                fontWeight: 600,
                opacity: 0.9,
              },
              children: "Susun potongan kenangan untuk membuka galeri utama 🌿",
            }),
          ],
        }),
        x.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
            padding: "0 4px",
          },
          children: [
            x.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "baseline",
                gap: 6,
                color: "var(--pink-deep)",
              },
              children: [
                x.jsx("span", {
                  style: {
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    fontFamily: "var(--font-display)",
                    lineHeight: 1,
                  },
                  children: i,
                }),
                x.jsx("span", {
                  style: {
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    fontWeight: 700,
                    opacity: 0.8,
                  },
                  children: "Langkah",
                }),
              ],
            }),
            x.jsxs("div", {
              style: { display: "flex", gap: 8 },
              children: [
                x.jsx("button", {
                  onClick: () => o(!0),
                  style: {
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--pink-deep)",
                    border: "1px solid rgba(212,163,89,0.25)",
                    boxShadow: "0 4px 12px rgba(45,16,30,0.06)",
                    cursor: "pointer",
                    transition: "transform 0.15s",
                  },
                  onPointerDown: (b) =>
                    (b.currentTarget.style.transform = "scale(0.9)"),
                  onPointerUp: (b) =>
                    (b.currentTarget.style.transform = "scale(1)"),
                  children: x.jsx(I2, { size: 16 }),
                }),
                x.jsx("button", {
                  onClick: T,
                  style: {
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--pink-deep)",
                    border: "1px solid rgba(212,163,89,0.25)",
                    boxShadow: "0 4px 12px rgba(45,16,30,0.06)",
                    cursor: "pointer",
                    transition: "transform 0.15s",
                  },
                  onPointerDown: (b) =>
                    (b.currentTarget.style.transform = "scale(0.9)"),
                  onPointerUp: (b) =>
                    (b.currentTarget.style.transform = "scale(1)"),
                  children: x.jsx(Bm, { size: 16 }),
                }),
              ],
            }),
          ],
        }),
        x.jsxs("div", {
          ref: m,
          style: {
            width: "100%",
            aspectRatio: "1",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 3,
            background: "rgba(212,163,89,0.08)",
            padding: 6,
            borderRadius: 24,
            boxShadow:
              "inset 0 4px 12px rgba(45,16,30,0.06), 0 8px 24px rgba(45,16,30,0.08)",
            position: "relative",
            marginBottom: 26,
            overflow: "hidden",
          },
          children: [
            l.map((b, A) => {
              const k = b === 8 && !h,
                q = Math.floor(b / 3),
                Q = b % 3;
              return x.jsxs(
                "div",
                {
                  onClick: () => j(A),
                  style: {
                    borderRadius: 12,
                    overflow: "hidden",
                    position: "relative",
                    cursor: k ? "default" : "pointer",
                    background: k ? "transparent" : "#fff",
                    boxShadow: k ? "none" : "0 2px 10px rgba(0,0,0,0.08)",
                    transition:
                      "transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  },
                  onPointerDown: (K) => {
                    k || (K.currentTarget.style.transform = "scale(0.94)");
                  },
                  onPointerUp: (K) => {
                    K.currentTarget.style.transform = "scale(1)";
                  },
                  onPointerLeave: (K) => {
                    K.currentTarget.style.transform = "scale(1)";
                  },
                  children: [
                    !k &&
                      x.jsx("div", {
                        style: {
                          width: "300%",
                          height: "300%",
                          position: "absolute",
                          top: `${-q * 100}%`,
                          left: `${-Q * 100}%`,
                          backgroundImage: "url(/james%203.jfif)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        },
                      }),
                    !k &&
                      !h &&
                      x.jsx("span", {
                        style: {
                          position: "absolute",
                          top: 4,
                          left: 4,
                          width: 20,
                          height: 20,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "rgba(255,255,255,0.88)",
                          backdropFilter: "blur(4px)",
                          color: "var(--pink-deep)",
                          borderRadius: "50%",
                          fontSize: "0.65rem",
                          fontWeight: 800,
                          fontFamily: "var(--font-display)",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        },
                        children: b + 1,
                      }),
                  ],
                },
                A,
              );
            }),
            c &&
              x.jsxs("div", {
                onClick: () => o(!1),
                style: {
                  position: "absolute",
                  inset: 0,
                  background: "rgba(255,255,255,0.94)",
                  backdropFilter: "blur(12px)",
                  borderRadius: 24,
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                  cursor: "pointer",
                },
                children: [
                  x.jsx("div", {
                    style: {
                      width: "85%",
                      aspectRatio: "1",
                      borderRadius: 16,
                      overflow: "hidden",
                      boxShadow: "0 12px 32px rgba(212,69,108,0.25)",
                      marginBottom: 16,
                    },
                    children: x.jsx("img", {
                      src: "/james 3.jfif",
                      alt: "Preview",
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      },
                    }),
                  }),
                  x.jsx("span", {
                    style: {
                      color: "var(--pink-deep)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      background: "rgba(212,69,108,0.08)",
                      padding: "8px 16px",
                      borderRadius: 20,
                    },
                    children: "Ketuk untuk menutup",
                  }),
                ],
              }),
          ],
        }),
        h
          ? x.jsxs("div", {
              style: { textAlign: "center" },
              children: [
                x.jsxs("div", {
                  style: {
                    color: "var(--pink-deep)",
                    fontWeight: 800,
                    fontSize: "1rem",
                    fontFamily: "var(--font-display)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    marginBottom: 16,
                  },
                  children: [
                    x.jsx(Z2, { size: 18 }),
                    " KENANGAN BERHASIL TERSUSUN ✨",
                  ],
                }),
                x.jsxs("button", {
                  className: "btn-primary",
                  onClick: g,
                  style: { width: "100%" },
                  children: ["Buka Surat Ucapan ", x.jsx(Vr, { size: 16 })],
                }),
              ],
            })
          : x.jsx("button", {
              className: "btn-ghost",
              onClick: M,
              style: {
                width: "100%",
                background: "rgba(212,69,108,0.04)",
                borderRadius: 16,
                padding: "12px",
                fontSize: "0.85rem",
              },
              children: "Lanjutkan Langsung",
            }),
      ],
    }),
  });
}
function Ov() {
  const g = I.useRef(null),
    l = I.useRef([]);
  return (
    I.useEffect(() => {
      const r = pt.timeline();
      (r.fromTo(
        g.current,
        { opacity: 0, scale: 0.96, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: "back.out(1.2)" },
      ),
        r.fromTo(
          l.current.filter(Boolean),
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.2",
        ));
    }, []),
    x.jsxs("div", {
      ref: g,
      style: {
        background:
          "linear-gradient(170deg, #ffffff 0%, #f0f9ff 50%, #ecf8e5 100%)",
        padding: "24px 20px",
        borderRadius: 24,
        border: "1.5px solid rgba(122,154,96,0.35)",
        lineHeight: 1.85,
        fontFamily: "var(--font-body)",
        fontSize: "0.88rem",
        color: "var(--berry)",
        maxHeight: "52vh",
        overflowY: "auto",
        boxShadow:
          "0 12px 36px rgba(15,23,42,0.08), inset 0 0 25px rgba(255,255,255,0.9)",
        position: "relative",
      },
      children: [
        x.jsxs("div", {
          ref: (r) => l.current.push(r),
          style: {
            float: "right",
            width: 98,
            height: 98,
            marginLeft: 14,
            marginBottom: 10,
            borderRadius: 18,
            overflow: "hidden",
            border: "4px solid #ffffff",
            boxShadow: "0 10px 28px rgba(15,23,42,0.18)",
            transform: "rotate(4deg)",
            position: "relative",
          },
          children: [
            x.jsx("div", {
              style: {
                position: "absolute",
                top: -6,
                left: "50%",
                transform: "translateX(-50%)",
                width: 36,
                height: 12,
                background: "rgba(122,154,96,0.4)",
                borderRadius: 2,
                backdropFilter: "blur(4px)",
                zIndex: 10,
              },
            }),
            x.jsx("img", {
              src: "/james 5.jfif",
              alt: "Papi Adel",
              style: { width: "100%", height: "100%", objectFit: "cover" },
              onError: (r) => {
                r.target.src = "/james 5.jfif";
              },
            }),
          ],
        }),
        x.jsxs("div", {
          ref: (r) => l.current.push(r),
          style: { marginBottom: 10 },
          children: [
            x.jsxs("div", {
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 14px",
                borderRadius: 20,
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(163,201,133,0.25))",
                border: "1px solid rgba(96,165,250,0.3)",
                marginBottom: 8,
              },
              children: [
                x.jsx(En, { size: 13, color: "#2563eb" }),
                x.jsx("span", {
                  style: {
                    fontFamily: "var(--font-cute)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#1e40af",
                    letterSpacing: "0.5px",
                  },
                  children: "HAPPY 36TH BIRTHDAY, SUAMIKUU ❤️🔥",
                }),
              ],
            }),
            x.jsx("h3", {
              style: {
                fontFamily: "var(--font-display)",
                fontSize: "1.65rem",
                color: "#1e40af",
                lineHeight: 1.2,
                margin: "4px 0 10px 0",
              },
              children: "Papi Adel tersayang,",
            }),
          ],
        }),
        x.jsx("p", {
          ref: (r) => l.current.push(r),
          style: { marginBottom: 14, fontWeight: 500, letterSpacing: "0.2px" },
          children:
            "Semoga dengan bertambahnya usia bisa menjadi pribadi yang lebih baik lagi, sehat selalu mental dan fisiknya, dilancarkan rezekinya, makin sabar, dipermudah segala urusannya, dan langkahmu selalu dipenuhi kebahagiaan.",
        }),
        x.jsx("p", {
          ref: (r) => l.current.push(r),
          style: { marginBottom: 16, fontWeight: 500 },
          children:
            "Terima kasih sudah memberiku cinta yang belum pernah aku temui sebelumnya, dan sudah menjadi penyemangat sekaligus penyembuh lukaku dulu. Jangan pernah lupa doain anak kita bahagia di surga ya syg, januari bsk sudah 4thn.",
        }),
        x.jsx("div", {
          ref: (r) => l.current.push(r),
          style: {
            margin: "18px 0",
            padding: "16px 18px",
            borderRadius: 20,
            background:
              "linear-gradient(135deg, rgba(240, 249, 255, 0.95) 0%, rgba(236, 248, 229, 0.95) 100%)",
            border: "1.5px solid rgba(96, 165, 250, 0.4)",
            boxShadow:
              "0 8px 24px rgba(59,130,246,0.08), inset 0 0 15px rgba(255,255,255,0.8)",
            position: "relative",
            overflow: "hidden",
          },
          children: x.jsxs("div", {
            style: { display: "flex", gap: 10, alignItems: "flex-start" },
            children: [
              x.jsx(dv, {
                size: 22,
                color: "#2563eb",
                style: {
                  transform: "rotate(180deg)",
                  flexShrink: 0,
                  marginTop: 2,
                  opacity: 0.85,
                },
              }),
              x.jsx("p", {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: "0.86rem",
                  fontStyle: "italic",
                  color: "var(--berry)",
                  lineHeight: 1.75,
                  fontWeight: 600,
                },
                children:
                  '"Makasi byk ya pi sudah selalu memperlakukan aku dgn baik, menyiapkan apapun kebutuhanku, dan sllu jd garda terdepan ktika aku down, kamu laki-laki paling sempurna dihidupku, tidak ada kurangnya utk ku."',
              }),
            ],
          }),
        }),
        x.jsx("p", {
          ref: (r) => l.current.push(r),
          style: { marginBottom: 14, fontWeight: 500 },
          children:
            "Semogaa di lain hari kita segera diberi petunjuk untuk kehidupan yg lebih cerah lagi bersama pengganti Adel ya pi, Maaf blm bisa sempurna utk kamu. Sehat terus yaa be jgn kecapean kerja, supaya kita bisa lebih lama lagi bersama-sama dan memiliki keluarga yg indah ❤️",
        }),
        x.jsx("div", {
          ref: (r) => l.current.push(r),
          style: {
            marginTop: 22,
            padding: "16px 18px",
            background:
              "linear-gradient(135deg, #ffffff 0%, #eff6ff 50%, #ecf8e5 100%)",
            borderRadius: 20,
            border: "1.5px solid rgba(122,154,96,0.35)",
            textAlign: "center",
            boxShadow: "0 6px 20px rgba(15,23,42,0.06)",
            clear: "both",
          },
          children: x.jsx("p", {
            style: {
              fontFamily: "var(--font-display)",
              fontSize: "1.35rem",
              color: "#1e40af",
              lineHeight: 1.35,
              margin: 0,
              fontWeight: 700,
            },
            children: "Happy bday suamikuuu tersayang ❤️🔥 🍵✨",
          }),
        }),
      ],
    })
  );
}
function Rv() {
  const g = I.useRef(null),
    l = I.useRef([]);
  I.useEffect(() => {
    const i = pt.timeline();
    (i.fromTo(
      g.current,
      { opacity: 0, scale: 0.95, y: 18 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.2)" },
    ),
      i.fromTo(
        l.current.filter(Boolean),
        { opacity: 0, y: 25, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.14,
          duration: 0.55,
          ease: "back.out(1.4)",
        },
        "-=0.25",
      ));
  }, []);
  const r = [
    {
      icon: "✈️",
      badge: "DREAM 01",
      title: "Closing The Distance",
      text: "Bisa segera ketemu, ngobrol langsung tanpa terhalang layar HP, dan jalan-jalan bareng menghabiskan waktu tanpa perlu buru-buru bilang pamit.",
      gradient:
        "linear-gradient(135deg, rgba(96,165,250,0.2), rgba(163,201,133,0.3))",
    },
    {
      icon: "🌟",
      badge: "DREAM 02",
      title: "Endless Support From Afar",
      text: "Meskipun jauh, aku bakal selalu ada buat dengerin cerita kamu, dukung setiap langkah, impian, dan karir Papi Adel. You will never walk alone.",
      gradient:
        "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(220,252,231,0.4))",
    },
    {
      icon: "📸",
      badge: "DREAM 03",
      title: "Creating Real Memories",
      text: "Bikin momen-momen manis baru di dunia nyata, foto bareng tanpa dipisah sinyal, dan merayakan ultah selanjutnya berdampingan.",
      gradient:
        "linear-gradient(135deg, rgba(122,154,96,0.2), rgba(224,242,254,0.4))",
    },
    {
      icon: "💍",
      badge: "DREAM 04",
      title: "Building Our Forever",
      text: "Merawat komitmen, kehangatan, dan rasa percaya ini dengan kuat sampai waktu membawa kita pada masa depan yang indah bersama.",
      gradient:
        "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(163,201,133,0.35))",
    },
  ];
  return x.jsxs("div", {
    ref: g,
    style: {
      background:
        "linear-gradient(150deg, #ffffff 0%, #f0f9ff 50%, #ecf8e5 100%)",
      borderRadius: 22,
      border: "1.5px solid rgba(122,154,96,0.3)",
      padding: "22px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      boxShadow:
        "0 10px 32px rgba(15,23,42,0.08), inset 0 0 20px rgba(255,255,255,0.7)",
    },
    children: [
      x.jsxs("div", {
        style: { textAlign: "center", marginBottom: 4 },
        children: [
          x.jsx(En, { size: 20, color: "#4a6b34", style: { marginBottom: 4 } }),
          x.jsx("h4", {
            style: {
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              color: "#1e40af",
              lineHeight: 1.2,
            },
            children: "Harapan & Masa Depan 🌿",
          }),
        ],
      }),
      r.map((i, f) =>
        x.jsx(
          "div",
          {
            ref: (c) => (l.current[f] = c),
            style: {
              background: "#ffffff",
              borderRadius: 18,
              padding: "16px 16px",
              border: "1.5px solid rgba(96,165,250,0.25)",
              boxShadow: "0 4px 18px rgba(15,23,42,0.06)",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.2s ease",
              cursor: "pointer",
            },
            onPointerDown: (c) => {
              c.currentTarget.style.transform = "scale(0.97)";
            },
            onPointerUp: (c) => {
              c.currentTarget.style.transform = "scale(1)";
            },
            onPointerLeave: (c) => {
              c.currentTarget.style.transform = "scale(1)";
            },
            children: x.jsxs("div", {
              style: { display: "flex", gap: 14, alignItems: "flex-start" },
              children: [
                x.jsx("div", {
                  style: {
                    width: 44,
                    height: 44,
                    flexShrink: 0,
                    borderRadius: 14,
                    background: i.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(122,154,96,0.3)",
                    fontSize: "1.3rem",
                    boxShadow: "0 4px 12px rgba(15,23,42,0.08)",
                  },
                  children: i.icon,
                }),
                x.jsxs("div", {
                  style: { flex: 1 },
                  children: [
                    x.jsx("div", {
                      style: {
                        fontSize: "0.62rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: 1.2,
                        color: "#2563eb",
                        opacity: 0.85,
                        marginBottom: 2,
                      },
                      children: i.badge,
                    }),
                    x.jsx("h4", {
                      style: {
                        fontFamily: "var(--font-display)",
                        color: "var(--berry)",
                        fontSize: "1.2rem",
                        marginBottom: 4,
                        lineHeight: 1.25,
                      },
                      children: i.title,
                    }),
                    x.jsx("p", {
                      style: {
                        fontSize: "0.79rem",
                        color: "var(--berry-light)",
                        lineHeight: 1.55,
                        fontWeight: 400,
                      },
                      children: i.text,
                    }),
                  ],
                }),
              ],
            }),
          },
          f,
        ),
      ),
    ],
  });
}
function Cv() {
  const g = I.useRef(null),
    l = I.useRef([]);
  return (
    I.useEffect(() => {
      const r = pt.timeline();
      (r.fromTo(
        g.current,
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.2)" },
      ),
        r.fromTo(
          l.current.filter(Boolean),
          { opacity: 0, x: -15 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.15,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2",
        ));
    }, []),
    x.jsxs("div", {
      ref: g,
      style: {
        background:
          "linear-gradient(145deg, #ffffff 0%, #f0f9ff 50%, #ecf8e5 100%)",
        padding: "24px 20px",
        borderRadius: 20,
        border: "1.5px solid rgba(96,165,250,0.3)",
        boxShadow:
          "0 8px 32px rgba(15,23,42,0.08), inset 0 0 20px rgba(255,255,255,0.7)",
      },
      children: [
        x.jsxs("div", {
          style: { textAlign: "center", marginBottom: 20 },
          children: [
            x.jsx(En, {
              size: 20,
              color: "#3b82f6",
              style: { marginBottom: 6 },
            }),
            x.jsx("h4", {
              style: {
                fontFamily: "var(--font-display)",
                fontSize: "1.4rem",
                color: "#1e40af",
                lineHeight: 1.2,
              },
              children: "Birthday Wishes & Prayers ✨",
            }),
          ],
        }),
        x.jsx("div", {
          style: { display: "flex", flexDirection: "column", gap: 14 },
          children: [
            x.jsx("span", {
              children:
                "Semoga di usiamu yang ke-36 ini, Papi Adel selalu diberikan kesehatan, kelancaran rezeki, dan perlindungan di mana pun kamu berada. 🤲🏻💖",
            }),
            x.jsx("span", {
              children:
                "May your days be filled with endless joy and peace, and may the distance never fade that sweet, beautiful smile of yours! ✨",
            }),
            x.jsx("span", {
              children:
                "Semoga rasa rindu di antara kita selalu jadi penguat ikatan cinta dan kedewasaan hubungan kita setiap harinya. 🌸",
            }),
            x.jsx("span", {
              children:
                "May all your dreams, ambitions, and wishes at 36 come true beautifully, one by one. 🥂",
            }),
            x.jsx("span", {
              children:
                "Terima kasih udah bertahan dan selalu memperjuangkan hubungan LDR ini bareng aku. Happy 36th Birthday, my love! 🎂🎁💝",
            }),
          ].map((r, i) =>
            x.jsxs(
              "div",
              {
                ref: (f) => l.current.push(f),
                style: {
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: "10px 14px",
                  background: "#fff",
                  borderRadius: 12,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(122,154,96,0.2)",
                },
                children: [
                  x.jsx("div", {
                    style: {
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      flexShrink: 0,
                      background: "linear-gradient(135deg, #7a9a60, #3b82f6)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-display)",
                      marginTop: 2,
                    },
                    children: i + 1,
                  }),
                  x.jsx("p", {
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--berry)",
                      lineHeight: 1.5,
                      flex: 1,
                    },
                    children: r,
                  }),
                ],
              },
              i,
            ),
          ),
        }),
      ],
    })
  );
}
function Dv({ onNext: g }) {
  const [l, r] = I.useState(!1),
    [i, f] = I.useState("letter"),
    c = I.useRef(null),
    o = I.useRef(null),
    h = I.useRef(null);
  I.useEffect(() => {
    l
      ? o.current &&
        pt.fromTo(
          o.current,
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.3)" },
        )
      : pt.fromTo(
          c.current,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.4)" },
        );
  }, [l]);
  const p = () => {
      if (l) return;
      const v = pt.timeline();
      (v.to(h.current, {
        scale: 1.3,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      }),
        v.to(c.current, {
          y: 60,
          opacity: 0,
          scale: 0.9,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => r(!0),
        }));
    },
    m = [
      { id: "letter", label: "💌 Surat" },
      { id: "reasons", label: "🌿 Harapan" },
      { id: "wishes", label: "✨ Doa" },
    ];
  return x.jsxs("div", {
    className: "stage",
    children: [
      !l &&
        x.jsxs("div", {
          ref: c,
          onClick: p,
          className: "glass",
          style: {
            width: "100%",
            maxWidth: "350px",
            padding: "42px 24px",
            textAlign: "center",
            cursor: "pointer",
            opacity: 0,
            position: "relative",
            background: "linear-gradient(160deg, #f0f9ff 0%, #ecf8e5 100%)",
            border: "1.5px solid var(--glass-border)",
            boxShadow: "0 16px 48px rgba(15,23,42,0.15)",
          },
          children: [
            x.jsx("div", {
              style: {
                position: "absolute",
                top: 14,
                right: 14,
                width: 38,
                height: 44,
                border: "2px dashed #7a9a60",
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                opacity: 0.85,
              },
              children: "🍵",
            }),
            x.jsx("div", {
              ref: h,
              className: "anim-breathe",
              style: {
                width: 70,
                height: 70,
                borderRadius: "50%",
                margin: "0 auto 22px",
                background:
                  "radial-gradient(circle at 40% 35%, #a3c985 0%, #4a6b34 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 6px 24px rgba(74,107,52,0.45), inset 0 -2px 6px rgba(0,0,0,0.2)",
                border: "3px solid rgba(220,252,231,0.8)",
              },
              children: x.jsx(Nm, {
                size: 30,
                fill: "#fff",
                color: "#fff",
                style: { filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.2))" },
              }),
            }),
            x.jsx("h2", {
              style: {
                fontFamily: "var(--font-display)",
                fontSize: "1.85rem",
                color: "var(--berry)",
                marginBottom: 6,
              },
              children: "Surat Ulang Tahun",
            }),
            x.jsx("p", {
              style: {
                fontFamily: "var(--font-cute)",
                fontSize: "0.84rem",
                color: "#2563eb",
                fontWeight: 600,
              },
              children: "Untuk Papi Adel ❤️🔥",
            }),
            x.jsx("div", {
              style: {
                marginTop: 24,
                fontSize: "0.75rem",
                fontWeight: 700,
                background: "rgba(122,154,96,0.15)",
                color: "#4a6b34",
                padding: "8px 18px",
                borderRadius: 20,
                display: "inline-block",
                border: "1.5px solid rgba(122,154,96,0.3)",
              },
              children: "Ketuk untuk membuka surat",
            }),
          ],
        }),
      l &&
        x.jsxs("div", {
          ref: o,
          className: "glass",
          style: {
            width: "100%",
            maxWidth: "380px",
            padding: "26px 20px",
            opacity: 0,
            background:
              "linear-gradient(180deg, #ffffff 0%, #f0f9ff 50%, #ecf8e5 100%)",
            border: "1.5px solid rgba(96,165,250,0.35)",
            boxShadow: "0 16px 48px rgba(15,23,42,0.15)",
          },
          children: [
            x.jsxs("div", {
              style: { textAlign: "center", marginBottom: 18 },
              children: [
                x.jsx("h1", {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "1.85rem",
                    color: "#1e40af",
                    lineHeight: 1.15,
                    marginBottom: 4,
                  },
                  children: "Happy bday suamikuuu tersayang ❤️🔥",
                }),
                x.jsx("p", {
                  style: {
                    fontFamily: "var(--font-cute)",
                    fontSize: "0.78rem",
                    color: "#4a6b34",
                    fontWeight: 600,
                  },
                  children:
                    "Pesan hangat dan doa terbaik di usiamu yang ke-36 🌿",
                }),
              ],
            }),
            x.jsx("div", {
              style: {
                display: "flex",
                background: "rgba(224,242,254,0.7)",
                padding: 3,
                borderRadius: 14,
                marginBottom: 16,
                gap: 2,
                border: "1px solid rgba(96,165,250,0.3)",
              },
              children: m.map((v) =>
                x.jsx(
                  "button",
                  {
                    onClick: () => f(v.id),
                    style: {
                      flex: 1,
                      padding: "9px 4px",
                      borderRadius: 11,
                      border: "none",
                      background:
                        i === v.id
                          ? "linear-gradient(135deg, #7a9a60, #3b82f6)"
                          : "transparent",
                      color: i === v.id ? "#fff" : "#334155",
                      fontFamily: "var(--font-cute)",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    },
                    children: v.label,
                  },
                  v.id,
                ),
              ),
            }),
            i === "letter" && x.jsx(Ov, {}),
            i === "reasons" && x.jsx(Rv, {}),
            i === "wishes" && x.jsx(Cv, {}),
            x.jsxs("button", {
              className: "btn-primary",
              onClick: g,
              style: { width: "100%", marginTop: 20 },
              children: [
                "Lanjutkan ke Momen Lilin 🕯️ ",
                x.jsx(Vr, { size: 16 }),
              ],
            }),
          ],
        }),
    ],
  });
}
function wv({ onRestart: g }) {
  const [l, r] = I.useState(!1),
    i = I.useRef(null),
    f = I.useRef(null),
    c = I.useRef(null),
    o = I.useRef(null),
    h = I.useRef([]);
  I.useEffect(() => {
    const m = pt.timeline({ delay: 0.2 });
    (m.fromTo(
      f.current,
      { opacity: 0, scale: 0.92, y: 35 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.3)" },
    ),
      m.fromTo(
        c.current,
        { opacity: 0, scale: 0.8, rotation: -8 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.9,
          ease: "back.out(1.6)",
        },
        "-=0.4",
      ),
      m.fromTo(
        o.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.3",
      ),
      pt.to(c.current, {
        y: -8,
        rotation: 2,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: !0,
      }),
      h.current.forEach((v, T) => {
        v &&
          pt.fromTo(
            v,
            { y: -20, opacity: 0, rotation: 0 },
            {
              y: "100vh",
              x: `+=${T % 2 === 0 ? 40 : -40}`,
              rotation: 360,
              opacity: 0.7,
              duration: 6 + (T % 4) * 2,
              delay: T * 0.4,
              repeat: -1,
              ease: "sine.inOut",
            },
          );
      }));
  }, []);
  const p = ["🍵", "🍃", "🌿", "💙", "✨", "🍵", "🌱"];
  return x.jsxs("div", {
    className: "stage",
    ref: i,
    style: { position: "relative", overflow: "hidden", padding: "20px 14px" },
    children: [
      x.jsx("div", {
        style: {
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: 'url("/background%20bunga.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.95) saturate(1.1)",
          opacity: 0.85,
        },
        children: x.jsx("div", {
          style: {
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255, 240, 245, 0.4) 0%, rgba(255, 225, 235, 0.6) 100%)",
            backdropFilter: "blur(2px)",
          },
        }),
      }),
      x.jsx("div", {
        style: {
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          overflow: "hidden",
        },
        children: p.map((m, v) =>
          x.jsx(
            "span",
            {
              ref: (T) => (h.current[v] = T),
              style: {
                position: "absolute",
                left: `${10 + v * 14}%`,
                top: "-5%",
                fontSize: "1.2rem",
                opacity: 0,
                filter: "drop-shadow(0 2px 6px rgba(200,59,100,0.3))",
              },
              children: m,
            },
            v,
          ),
        ),
      }),
      x.jsxs("button", {
        onClick: () => r(!l),
        style: {
          position: "relative",
          zIndex: 10,
          marginBottom: 12,
          padding: "6px 16px",
          borderRadius: 20,
          border: "none",
          background: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(10px)",
          color: "var(--pink-deep)",
          fontFamily: "var(--font-cute)",
          fontSize: "0.74rem",
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(45,16,30,0.12)",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          transition: "all 0.25s ease",
        },
        children: [
          x.jsx(gv, { size: 13 }),
          " ",
          l ? "Mode HP Tegak 📱" : "Ganti Mode Landscape 🔄",
        ],
      }),
      x.jsxs("div", {
        ref: f,
        style: {
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: l ? "100%" : "390px",
          background:
            "linear-gradient(150deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 240, 245, 0.92) 100%)",
          backdropFilter: "blur(20px)",
          borderRadius: 28,
          padding: l ? "16px" : "22px 18px",
          border: "1.5px solid rgba(212, 163, 89, 0.35)",
          boxShadow:
            "0 20px 50px rgba(45, 16, 30, 0.16), inset 0 0 25px rgba(255, 255, 255, 0.9)",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transform: l ? "rotate(90deg) scale(0.92)" : "none",
          margin: l ? "40px 0" : "0 auto",
        },
        children: [
          x.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: l ? "row" : "column",
              alignItems: "center",
              gap: l ? 16 : 14,
            },
            children: [
              x.jsx("div", {
                ref: c,
                style: {
                  width: l ? "42%" : "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                },
                children: x.jsx("img", {
                  src: "/bucket%20bunga%202%20no%20bg.png",
                  alt: "Flowers for my Pretty Girl",
                  style: {
                    width: "100%",
                    maxWidth: l ? "180px" : "220px",
                    height: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 12px 28px rgba(200, 59, 100, 0.28))",
                  },
                  onError: (m) => {
                    m.target.src = "/bunga%20buket%202%20no%20bg.png";
                  },
                }),
              }),
              x.jsxs("div", {
                ref: o,
                style: {
                  flex: 1,
                  textAlign: l ? "left" : "center",
                  width: "100%",
                },
                children: [
                  x.jsxs("div", {
                    style: { marginBottom: 12 },
                    children: [
                      x.jsx("div", {
                        style: {
                          fontSize: "1.1rem",
                          fontFamily: "var(--font-display)",
                          color: "#4a6b34",
                          fontStyle: "italic",
                          lineHeight: 1.1,
                        },
                        children: "A Special Bouquet For",
                      }),
                      x.jsx("h2", {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontSize: l ? "2.1rem" : "2.4rem",
                          color: "#1e40af",
                          lineHeight: 1.05,
                          margin: "2px 0 0 0",
                          letterSpacing: "-0.5px",
                          textShadow: "0 2px 10px rgba(59, 130, 246, 0.2)",
                        },
                        children: "Happy bday suamikuu❤️🔥",
                      }),
                    ],
                  }),
                  x.jsxs("div", {
                    style: {
                      background: "rgba(255, 255, 255, 0.88)",
                      borderRadius: 18,
                      padding: "14px 16px",
                      border: "1px solid rgba(122, 154, 96, 0.3)",
                      boxShadow: "0 4px 16px rgba(15, 23, 42, 0.06)",
                      lineHeight: 1.7,
                      fontSize: "0.84rem",
                      color: "var(--berry)",
                      textAlign: "left",
                    },
                    children: [
                      x.jsx("p", {
                        style: { marginBottom: 12, fontWeight: 500 },
                        children:
                          "Selamat ulang tahun ke-36 suamiku tercinta. Terima kasih sudah menjadi suami dan ayah yang luar biasa. Love u so much papi Adel ❤️🔥",
                      }),
                      x.jsx("div", {
                        style: {
                          borderTop: "1px dashed rgba(122, 154, 96, 0.35)",
                          paddingTop: 10,
                          marginTop: 10,
                          fontFamily: "var(--font-display)",
                          fontSize: "1.15rem",
                          color: "#1e40af",
                          lineHeight: 1.35,
                        },
                        children: "Happy bday suamikuuu tersayang ❤️🔥 🍵✨",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          x.jsx("button", {
            className: "btn-primary",
            onClick: g,
            style: {
              width: "100%",
              marginTop: 18,
              padding: "14px 20px",
              fontSize: "0.9rem",
            },
            children: "Ulangi Tampilan 🔄",
          }),
        ],
      }),
    ],
  });
}
function Nv({ onShowGallery: g }) {
  const [l, r] = I.useState(!0),
    [i, f] = I.useState(!1),
    c = I.useRef(null),
    o = I.useRef(null),
    h = I.useRef([]),
    p = I.useRef([]),
    m = I.useRef([]),
    v = I.useRef([]);
  I.useEffect(() => {
    const S = pt.timeline();
    (S.fromTo(
      c.current,
      { opacity: 0, y: 40, scale: 0.92 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.4)" },
    ),
      S.fromTo(
        o.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4",
      ),
      h.current.forEach((M, b) => {
        M &&
          pt.to(M, {
            scaleY: 1.15,
            scaleX: 0.92,
            rotation: b % 2 === 0 ? 3 : -3,
            duration: 0.35 + b * 0.1,
            repeat: -1,
            yoyo: !0,
            ease: "sine.inOut",
          });
      }),
      p.current.forEach((M, b) => {
        M &&
          pt.to(M, {
            scale: 1.25,
            opacity: 0.8,
            duration: 0.5 + b * 0.1,
            repeat: -1,
            yoyo: !0,
            ease: "power1.inOut",
          });
      }),
      v.current.forEach((M, b) => {
        M &&
          pt.to(M, {
            y: `-=${12 + (b % 3) * 6}`,
            x: `+=${b % 2 === 0 ? 8 : -8}`,
            rotation: b % 2 === 0 ? 15 : -15,
            opacity: 0.9,
            duration: 2 + (b % 3),
            repeat: -1,
            yoyo: !0,
            ease: "sine.inOut",
            delay: b * 0.2,
          });
      }));
  }, []);
  const T = () => {
      !l ||
        i ||
        (f(!0),
        h.current.forEach((S, M) => {
          const b = p.current[M],
            A = m.current[M];
          (b && pt.to(b, { opacity: 0, scale: 0, duration: 0.2 }),
            S &&
              pt.to(S, {
                scaleY: 0,
                scaleX: 0.2,
                y: -15,
                opacity: 0,
                duration: 0.35,
                delay: M * 0.08,
                ease: "power2.in",
              }),
            A &&
              pt.fromTo(
                A,
                { opacity: 0, y: 0, scale: 0.5 },
                {
                  opacity: 0.8,
                  y: -35,
                  scale: 1.5,
                  duration: 0.8,
                  delay: M * 0.08 + 0.2,
                  ease: "power1.out",
                  onComplete: () => {
                    pt.to(A, { opacity: 0, y: -50, duration: 0.4 });
                  },
                },
              ));
        }),
        pt.to(o.current, {
          y: 6,
          duration: 0.15,
          yoyo: !0,
          repeat: 1,
          ease: "power1.inOut",
        }),
        setTimeout(() => {
          r(!1);
          const S = 220,
            M = { origin: { y: 0.65 } };
          function b(A, k) {
            no({ ...M, ...k, particleCount: Math.floor(S * A) });
          }
          (b(0.25, {
            spread: 26,
            startVelocity: 55,
            colors: ["#d4a359", "#e85d88", "#f497b5"],
          }),
            b(0.2, { spread: 60, colors: ["#ffffff", "#f7e7c4", "#c83b64"] }),
            b(0.35, { spread: 100, decay: 0.91, scalar: 0.8 }),
            b(0.1, {
              spread: 120,
              startVelocity: 25,
              decay: 0.92,
              colors: ["#ffe4e1", "#ffc0cb", "#ffffff"],
            }),
            b(0.1, { spread: 120, startVelocity: 45 }));
        }, 450));
    },
    j = [
      { emoji: "🍵", top: "10%", left: "8%", size: "1.2rem" },
      { emoji: "🍃", top: "18%", right: "10%", size: "1rem" },
      { emoji: "⭐", top: "40%", left: "5%", size: "0.9rem" },
      { emoji: "💙", top: "55%", right: "6%", size: "1.1rem" },
      { emoji: "🌿", bottom: "25%", left: "10%", size: "1rem" },
      { emoji: "👑", bottom: "20%", right: "12%", size: "1.2rem" },
    ];
  return x.jsxs("div", {
    className: "stage",
    style: { position: "relative" },
    children: [
      j.map((S, M) =>
        x.jsx(
          "span",
          {
            ref: (b) => (v.current[M] = b),
            style: {
              position: "absolute",
              top: S.top,
              left: S.left,
              right: S.right,
              bottom: S.bottom,
              fontSize: S.size,
              pointerEvents: "none",
              zIndex: 0,
              opacity: 0.65,
              filter: "drop-shadow(0 0 8px rgba(122,154,96,0.4))",
            },
            children: S.emoji,
          },
          M,
        ),
      ),
      x.jsxs("div", {
        ref: c,
        className: "glass",
        style: {
          width: "100%",
          maxWidth: "370px",
          padding: "28px 22px",
          textAlign: "center",
          opacity: 0,
          background:
            "linear-gradient(170deg, #ffffff 0%, #f0f9ff 50%, #ecf8e5 100%)",
          border: "1.5px solid var(--glass-border)",
          boxShadow:
            "0 20px 50px rgba(15,23,42,0.14), inset 0 0 30px rgba(255,255,255,0.8)",
          borderRadius: 28,
          position: "relative",
          zIndex: 1,
        },
        children: [
          x.jsxs("div", {
            style: { marginBottom: 20 },
            children: [
              x.jsxs("div", {
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 4,
                },
                children: [
                  x.jsx(En, { size: 18, color: "#7a9a60" }),
                  x.jsx("h2", {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      color: "var(--berry)",
                      lineHeight: 1.15,
                      marginBottom: 4,
                    },
                    children: "Make a Wish, Suamiku Tersayang ❤️🔥",
                  }),
                  x.jsx(En, { size: 18, color: "#3b82f6" }),
                ],
              }),
              x.jsx("p", {
                style: {
                  fontFamily: "var(--font-cute)",
                  fontSize: "0.84rem",
                  color: "#2563eb",
                  fontWeight: 600,
                  margin: 0,
                  opacity: 0.9,
                  transition: "all 0.3s ease",
                },
                children: l
                  ? "Ketuk lilin untuk memadamkan apinya 🕯️"
                  : "✨ Doa dan harapanmu telah terpanjatkan 🌿",
              }),
            ],
          }),
          x.jsxs("div", {
            ref: o,
            style: {
              position: "relative",
              width: 250,
              height: 210,
              margin: "0 auto 20px",
              cursor: l ? "pointer" : "default",
            },
            onClick: T,
            children: [
              x.jsx("div", {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  gap: 34,
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  zIndex: 10,
                },
                children: [0, 1, 2].map((S) =>
                  x.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                      },
                      children: [
                        x.jsx("div", {
                          ref: (M) => (m.current[S] = M),
                          style: {
                            position: "absolute",
                            top: -18,
                            fontSize: "1.2rem",
                            opacity: 0,
                            pointerEvents: "none",
                          },
                          children: "💨",
                        }),
                        x.jsx("div", {
                          ref: (M) => (p.current[S] = M),
                          style: {
                            position: "absolute",
                            top: -6,
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            background:
                              "radial-gradient(circle, rgba(255,200,80,0.8) 0%, rgba(255,120,40,0.35) 50%, transparent 100%)",
                            filter: "blur(4px)",
                            pointerEvents: "none",
                            display: l ? "block" : "none",
                          },
                        }),
                        x.jsx("div", {
                          ref: (M) => (h.current[S] = M),
                          style: {
                            height: 32,
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "center",
                            transformOrigin: "center bottom",
                          },
                          children:
                            l &&
                            x.jsx("div", {
                              style: {
                                color: "#FF9800",
                                filter:
                                  "drop-shadow(0 0 10px #FFD700) drop-shadow(0 0 20px #FF5722)",
                              },
                              children: x.jsx(R1, {
                                size: 26,
                                fill: "#FFC107",
                              }),
                            }),
                        }),
                        x.jsx("div", {
                          style: {
                            width: 9,
                            height: 36,
                            borderRadius: "6px 6px 3px 3px",
                            background: `linear-gradient(180deg, ${["#3b82f6", "#7a9a60", "#60a5fa"][S]} 0%, #ffffff 100%)`,
                            border: "1px solid rgba(255,255,255,0.8)",
                            boxShadow: "0 3px 6px rgba(15,23,42,0.18)",
                          },
                        }),
                      ],
                    },
                    S,
                  ),
                ),
              }),
              x.jsxs("div", {
                style: {
                  position: "absolute",
                  top: 62,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 160,
                  height: 50,
                  borderRadius: "18px 18px 12px 12px",
                  background:
                    "linear-gradient(180deg, #a3c985 0%, #4a6b34 100%)",
                  boxShadow:
                    "inset 0 4px 10px rgba(255,255,255,0.6), 0 6px 16px rgba(15,23,42,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  zIndex: 4,
                },
                children: [
                  x.jsx("span", {
                    style: {
                      fontSize: "1rem",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
                    },
                    children: "🍵",
                  }),
                  x.jsx("span", {
                    style: {
                      fontSize: "1rem",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
                    },
                    children: "🍃",
                  }),
                  x.jsx("span", {
                    style: {
                      fontSize: "1rem",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
                    },
                    children: "🍵",
                  }),
                ],
              }),
              x.jsx("div", {
                style: {
                  position: "absolute",
                  top: 104,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 160,
                  display: "flex",
                  justifyContent: "space-evenly",
                  zIndex: 5,
                  pointerEvents: "none",
                },
                children: [10, 14, 9, 13, 11, 15, 10].map((S, M) =>
                  x.jsx(
                    "div",
                    {
                      style: {
                        width: 12,
                        height: S,
                        borderRadius: "0 0 6px 6px",
                        background:
                          "linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)",
                        boxShadow: "0 2px 4px rgba(15,23,42,0.1)",
                      },
                    },
                    M,
                  ),
                ),
              }),
              x.jsx("div", {
                style: {
                  position: "absolute",
                  top: 110,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 216,
                  height: 72,
                  borderRadius: "22px",
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #eff6ff 60%, #e0f2fe 100%)",
                  border: "1.5px solid rgba(122,154,96,0.35)",
                  boxShadow:
                    "0 10px 28px rgba(15,23,42,0.12), inset 0 3px 8px rgba(255,255,255,0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 3,
                  paddingTop: 8,
                },
                children: x.jsx("div", {
                  style: {
                    background:
                      "linear-gradient(135deg, rgba(96,165,250,0.15), rgba(163,201,133,0.25))",
                    padding: "6px 18px",
                    borderRadius: 20,
                    border: "1px dashed rgba(122,154,96,0.4)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  },
                  children: x.jsx("span", {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "1.35rem",
                      color: "#1e40af",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      margin: 0,
                      lineHeight: 1.1,
                    },
                    children: "Happy Birthday Papi Adel! ❤️🔥",
                  }),
                }),
              }),
              x.jsx("div", {
                style: {
                  position: "absolute",
                  bottom: 10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 246,
                  height: 18,
                  borderRadius: "0 0 50% 50% / 0 0 100% 100%",
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #f4e8eb 100%)",
                  border: "1.5px solid rgba(212,163,89,0.3)",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
                  zIndex: 2,
                },
              }),
              x.jsx("div", {
                style: {
                  position: "absolute",
                  bottom: 2,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 220,
                  height: 10,
                  borderRadius: "50%",
                  background: "rgba(45,16,30,0.12)",
                  filter: "blur(5px)",
                  zIndex: 1,
                },
              }),
            ],
          }),
          !l &&
            x.jsxs("div", {
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background:
                  "linear-gradient(135deg, rgba(212,163,89,0.15), rgba(248,164,190,0.2))",
                padding: "8px 18px",
                borderRadius: 20,
                marginBottom: 20,
                border: "1px solid rgba(212,163,89,0.3)",
              },
              children: [
                x.jsx(En, { size: 15, color: "var(--pink-deep)" }),
                x.jsx("span", {
                  style: {
                    fontFamily: "var(--font-cute)",
                    fontSize: "0.82rem",
                    color: "var(--pink-deep)",
                    fontWeight: 700,
                  },
                  children: "Lilin telah dipadamkan dengan indah ✨",
                }),
              ],
            }),
          l
            ? x.jsxs("button", {
                className: "btn-primary",
                onClick: T,
                style: {
                  width: "100%",
                  padding: "16px 20px",
                  fontSize: "0.95rem",
                },
                children: [
                  x.jsx(R1, { size: 18, fill: "#fff" }),
                  " Tiup Lilin 🕯️",
                ],
              })
            : x.jsxs("button", {
                className: "btn-primary",
                onClick: g,
                style: {
                  width: "100%",
                  padding: "16px 20px",
                  fontSize: "0.95rem",
                },
                children: ["Lihat Galeri Foto 📷 ", x.jsx(N2, { size: 18 })],
              }),
        ],
      }),
    ],
  });
}
function Bv({ onNext: g }) {
  const [l, r] = I.useState(0),
    [i, f] = I.useState("next"),
    [c, o] = I.useState(!1),
    h = I.useRef(null),
    p = [
      { src: "/photo_1.jpg", tag: "MEMORI #01", title: "Papi Adel Tercinta ❤️" },
      { src: "/photo_2.png", tag: "MEMORI #02", title: "Senyum Terbaikmu ✨" },
      { src: "/photo_3.jpeg", tag: "MEMORI #03", title: "Momen Bahagia Bersama 🌸" },
      { src: "/photo_4.jpeg", tag: "MEMORI #04", title: "Laki-laki Hebatku ☀️" },
      { src: "/photo_5.jpeg", tag: "MEMORI #05", title: "Kenangan Paling Manis 💎" },
      { src: "/photo_6.jpeg", tag: "MEMORI #06", title: "Suami & Ayah Terbaik 💖" },
      { src: "/photo_7.jpeg", tag: "MEMORI #07", title: "Cinta Sejatiku 🌺" },
      { src: "/photo_8.jpeg", tag: "MEMORI #08", title: "Garda Terdepanku 🌟" },
      { src: "/photo_9.jpeg", tag: "MEMORI #09", title: "Kebersamaan Hangat 🍃" },
      { src: "/photo_10.jpeg", tag: "MEMORI #10", title: "Pelindung Keluargaku 💫" },
      { src: "/photo_11.jpg", tag: "MEMORI #11", title: "Senyuman Yang Menenangkan 🕊️" },
      { src: "/photo_12.jpg", tag: "MEMORI #12", title: "Hari Yang Indah Bersamamu 🌿" },
      { src: "/photo_13.jpg", tag: "MEMORI #13", title: "Selamanya di Hatiku 💍" }
    ];
  (I.useEffect(() => {
    const S = pt.timeline();
    (S.fromTo(
      ".gallery-header",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    ),
      S.fromTo(
        ".gallery-frame",
        { opacity: 0, scale: 0.96, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.4",
      ),
      S.fromTo(
        ".gallery-controls",
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.2",
      ));
  }, []),
    I.useEffect(() => {
      const S = document.getElementById("gallery-photo"),
        M = document.getElementById("gallery-tag-bar");
      if (S) {
        const A = i === "next" ? 90 : -90,
          k = pt.timeline();
        (k.fromTo(
          S,
          { opacity: 0, x: A, scale: 0.96, filter: "blur(6px)" },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.55,
            ease: "power2.out",
          },
        ),
          M &&
            k.fromTo(
              M,
              { opacity: 0, y: -6 },
              { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
              "-=0.35",
            ));
      }
      const b = document.getElementById(`thumb-${l}`);
      b &&
        b.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
    }, [l, i]),
    I.useEffect(() => {
      const S = setInterval(() => {
        (f("next"), r((M) => (M + 1) % p.length));
      }, 5e3);
      return () => clearInterval(S);
    }, [p.length]));
  const m = p[l],
    v = () => {
      (f("prev"), r((S) => (S === 0 ? p.length - 1 : S - 1)));
    },
    T = () => {
      (f("next"), r((S) => (S + 1) % p.length));
    },
    j = (S) => {
      S !== l && (f(S > l ? "next" : "prev"), r(S));
    };
  return x.jsxs("div", {
    className: "stage stage--scroll",
    ref: h,
    children: [
      x.jsx("img", {
        src: "/Untitled - July 29, 2026 at 22.02.49.png",
        alt: "Decoration",
        style: {
          width: "100%",
          maxWidth: 280,
          maxHeight: 140,
          objectFit: "contain",
          marginBottom: 4,
          marginTop: -20,
          opacity: 0.95,
          pointerEvents: "none",
          filter: "drop-shadow(0 4px 12px rgba(212,69,108,0.25))",
        },
        onError: (S) => (S.target.style.display = "none"),
      }),
      x.jsxs("div", {
        className: "gallery-header",
        style: {
          textAlign: "center",
          marginBottom: 24,
          width: "100%",
          maxWidth: 390,
          position: "relative",
          zIndex: 2,
        },
        children: [
          x.jsxs("div", {
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 14px",
              borderRadius: 20,
              background: "rgba(122,154,96,0.15)",
              border: "1px solid rgba(122,154,96,0.35)",
              marginBottom: 10,
            },
            children: [
              x.jsx(En, { size: 13, color: "#4a6b34" }),
              x.jsx("span", {
                style: {
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#4a6b34",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                },
                children: "Galeri Foto & Kenangan 🍵",
              }),
            ],
          }),
          x.jsx("h1", {
            style: {
              fontFamily: "var(--font-display)",
              fontSize: "2.2rem",
              color: "#1e40af",
              lineHeight: 1.15,
              marginBottom: 6,
              letterSpacing: "-0.5px",
            },
            children: "Galeri Kenangan Kita ❤️🔥",
          }),
        ],
      }),
      x.jsxs("div", {
        className: "gallery-frame",
        style: {
          width: "100%",
          maxWidth: 370,
          padding: 16,
          marginBottom: 24,
          background: "#ffffff",
          borderRadius: 28,
          border: "1.5px solid rgba(96,165,250,0.3)",
          boxShadow:
            "0 20px 50px rgba(15,23,42,0.12), 0 2px 10px rgba(122,154,96,0.1)",
          position: "relative",
        },
        children: [
          x.jsxs("div", {
            id: "gallery-tag-bar",
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
              padding: "0 4px",
            },
            children: [
              x.jsx("span", {
                style: {
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  color: "var(--gold-accent)",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                },
                children: m.tag,
              }),
              x.jsx("span", {
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "var(--berry)",
                  fontWeight: 700,
                },
                children: m.title,
              }),
            ],
          }),
          x.jsxs("div", {
            style: {
              position: "relative",
              width: "100%",
              aspectRatio: "3/4",
              borderRadius: 20,
              overflow: "hidden",
              background: "var(--pink-whisper)",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.1)",
            },
            children: [
              x.jsx(
                "img",
                {
                  id: "gallery-photo",
                  src: m.src,
                  alt: m.title,
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transformOrigin: "center center",
                  },
                  onError: (S) => {
                    S.target.src = "/james 1.jfif";
                  },
                },
                l,
              ),
              x.jsx("button", {
                onClick: () => o(!0),
                style: {
                  position: "absolute",
                  top: 12,
                  right: 12,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(8px)",
                  border: "none",
                  color: "var(--pink-deep)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  transition: "transform 0.15s ease",
                },
                onPointerDown: (S) =>
                  (S.currentTarget.style.transform = "scale(0.9)"),
                onPointerUp: (S) =>
                  (S.currentTarget.style.transform = "scale(1)"),
                children: x.jsx(lv, { size: 16 }),
              }),
              x.jsx("button", {
                onClick: v,
                style: {
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(6px)",
                  border: "none",
                  color: "var(--berry)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                },
                children: x.jsx(H2, { size: 18 }),
              }),
              x.jsx("button", {
                onClick: T,
                style: {
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(6px)",
                  border: "none",
                  color: "var(--berry)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                },
                children: x.jsx(Y2, { size: 18 }),
              }),
            ],
          }),
        ],
      }),
      x.jsx("div", {
        className: "gallery-controls",
        style: {
          display: "flex",
          gap: 8,
          justifyContent: "flex-start",
          marginBottom: 28,
          maxWidth: 370,
          width: "100%",
          overflowX: "auto",
          padding: "6px 4px",
          scrollbarWidth: "thin",
        },
        children: p.map((S, M) =>
          x.jsx(
            "div",
            {
              id: `thumb-${M}`,
              onClick: () => j(M),
              style: {
                width: M === l ? 48 : 36,
                height: 48,
                borderRadius: 10,
                overflow: "hidden",
                border:
                  M === l
                    ? "2px solid var(--pink-deep)"
                    : "1.5px solid transparent",
                opacity: M === l ? 1 : 0.6,
                transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
                cursor: "pointer",
                flexShrink: 0,
                boxShadow: M === l ? "0 4px 12px rgba(200,59,100,0.3)" : "none",
              },
              children: x.jsx("img", {
                src: S.src,
                alt: "",
                style: { width: "100%", height: "100%", objectFit: "cover" },
              }),
            },
            M,
          ),
        ),
      }),
      c &&
        x.jsxs("div", {
          onClick: () => o(!1),
          style: {
            position: "fixed",
            inset: 0,
            background: "rgba(15, 5, 10, 0.92)",
            backdropFilter: "blur(16px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            cursor: "pointer",
          },
          children: [
            x.jsx("button", {
              onClick: () => o(!1),
              style: {
                position: "absolute",
                top: 20,
                right: 20,
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                border: "none",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              },
              children: x.jsx(Mv, { size: 22 }),
            }),
            x.jsxs("div", {
              style: {
                maxWidth: "90vw",
                maxHeight: "85vh",
                borderRadius: 20,
                overflow: "hidden",
                border: "2px solid var(--gold-accent)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              },
              children: [
                x.jsx("img", {
                  src: m.src,
                  alt: m.title,
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    maxHeight: "80vh",
                  },
                }),
                x.jsxs("div", {
                  style: {
                    padding: "12px",
                    background: "rgba(30,10,20,0.85)",
                    textAlign: "center",
                    color: "var(--gold-light)",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                  },
                  children: [m.tag, ": ", m.title],
                }),
              ],
            }),
          ],
        }),
      x.jsxs("button", {
        className: "gallery-controls btn-primary",
        onClick: g,
        style: { width: "100%", maxWidth: 370 },
        children: ["Lanjutkan ke Kartu Ucapan 🎴 ", x.jsx(Vr, { size: 16 })],
      }),
    ],
  });
}
function Uv({ onNext: g, onRestart: l }) {
  const r = I.useRef(null),
    i = I.useRef(null);
  return (
    I.useEffect(() => {
      const f = pt.timeline({ delay: 0.2 });
      (f.fromTo(
        r.current,
        { opacity: 0, y: 50, rotation: 2 },
        { opacity: 1, y: 0, rotation: 0, duration: 1, ease: "power3.out" },
      ),
        f.fromTo(
          ".reveal-el",
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        ),
        f.fromTo(
          i.current,
          { boxShadow: "0 10px 30px rgba(212,163,89,0.1)" },
          {
            boxShadow: "0 20px 50px rgba(200,59,100,0.2)",
            duration: 2.5,
            ease: "sine.inOut",
            yoyo: !0,
            repeat: -1,
          },
          0.5,
        ),
        pt.to(".float-el", {
          y: -8,
          rotation: 3,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: !0,
          repeat: -1,
        }),
        setTimeout(() => {
          no({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.55 },
            colors: ["#c83b64", "#e85d88", "#f497b5", "#d4a359", "#ffffff"],
            gravity: 0.7,
            scalar: 0.9,
          });
        }, 800));
    }, []),
    x.jsx("div", {
      className: "stage stage--scroll",
      children: x.jsxs("div", {
        ref: r,
        style: {
          width: "100%",
          maxWidth: 380,
          opacity: 0,
          position: "relative",
        },
        children: [
          x.jsx("div", {
            ref: i,
            style: {
              background: "linear-gradient(135deg, #ffffff 0%, #fffbf8 100%)",
              borderRadius: 28,
              padding: "14px",
              border: "1.5px solid var(--glass-border)",
              position: "relative",
              marginBottom: 24,
              boxShadow: "0 16px 48px rgba(45,16,30,0.12)",
            },
            children: x.jsxs("div", {
              style: {
                border: "1px solid rgba(122,154,96,0.3)",
                borderRadius: 20,
                padding: "36px 22px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                background:
                  "radial-gradient(circle at top, #ffffff 0%, #f0f9ff 50%, #ecf8e5 100%)",
              },
              children: [
                x.jsx("img", {
                  src: "/lucu1 no bg.png",
                  alt: "Cute Decor",
                  className: "float-el reveal-el",
                  style: {
                    position: "absolute",
                    top: 10,
                    left: 10,
                    width: 75,
                    opacity: 0.95,
                    pointerEvents: "none",
                    zIndex: 10,
                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                  },
                  onError: (f) => (f.target.style.display = "none"),
                }),
                x.jsx("img", {
                  src: "/gambar 13 no bg 1.png",
                  alt: "Hearts",
                  className: "reveal-el",
                  style: {
                    position: "absolute",
                    top: 10,
                    right: 10,
                    width: 75,
                    opacity: 0.9,
                    pointerEvents: "none",
                    zIndex: 10,
                    filter: "drop-shadow(0 4px 8px rgba(59,130,246,0.2))",
                  },
                  onError: (f) => (f.target.style.display = "none"),
                }),
                x.jsx("div", {
                  className: "reveal-el",
                  style: {
                    marginBottom: 14,
                    display: "flex",
                    justifyContent: "center",
                  },
                  children: x.jsx("div", {
                    style: {
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "rgba(122,154,96,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(122,154,96,0.3)",
                    },
                    children: x.jsx(wm, { size: 22, color: "#4a6b34" }),
                  }),
                }),
                x.jsxs("div", {
                  className: "reveal-el",
                  style: {
                    position: "relative",
                    width: 150,
                    height: 150,
                    margin: "0 auto 20px",
                  },
                  children: [
                    x.jsx("img", {
                      src: "/gambar 12 no bg.png",
                      alt: "Left Butterflies",
                      className: "float-el",
                      style: {
                        position: "absolute",
                        top: 25,
                        left: -35,
                        width: 60,
                        zIndex: 5,
                        pointerEvents: "none",
                        filter: "drop-shadow(0 4px 10px rgba(59,130,246,0.3))",
                      },
                      onError: (f) => (f.target.style.display = "none"),
                    }),
                    x.jsx("img", {
                      src: "/gambar 12 no bg.png",
                      alt: "Right Butterflies",
                      className: "float-el",
                      style: {
                        position: "absolute",
                        top: 80,
                        right: -45,
                        width: 55,
                        zIndex: 5,
                        pointerEvents: "none",
                        transform: "scaleX(-1)",
                        filter: "drop-shadow(0 4px 10px rgba(59,130,246,0.3))",
                      },
                      onError: (f) => (f.target.style.display = "none"),
                    }),
                    x.jsx("div", {
                      style: {
                        width: 150,
                        height: 150,
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "4px solid #fff",
                        boxShadow: "0 12px 32px rgba(59,130,246,0.25)",
                        position: "relative",
                        zIndex: 1,
                      },
                      children: x.jsx("img", {
                        src: "/james 1.jfif",
                        alt: "Papi Adel",
                        style: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center center",
                        },
                        onError: (f) => {
                          f.target.src = "/james 1.jfif";
                        },
                      }),
                    }),
                  ],
                }),
                x.jsx("h3", {
                  className: "reveal-el",
                  style: {
                    fontFamily: "var(--font-cute)",
                    fontSize: "0.8rem",
                    color: "#4a6b34",
                    letterSpacing: 2.5,
                    textTransform: "uppercase",
                    marginBottom: 4,
                    fontWeight: 700,
                  },
                  children: "Kartu Ucapan Ulang Tahun 🍵✨",
                }),
                x.jsx("div", {
                  className: "reveal-el",
                  style: { textAlign: "center", marginBottom: 18 },
                  children: x.jsx("h1", {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "2.5rem",
                      color: "#1e40af",
                      lineHeight: 1,
                      margin: 0,
                    },
                    children: "Happy bday suamikuu❤️🔥",
                  }),
                }),
                x.jsx("div", {
                  className: "reveal-el",
                  style: {
                    width: 50,
                    height: 1.5,
                    background: "#7a9a60",
                    margin: "0 auto 20px",
                    opacity: 0.8,
                  },
                }),
                x.jsx("p", {
                  className: "reveal-el",
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "0.86rem",
                    color: "var(--berry-light)",
                    lineHeight: 1.7,
                    marginBottom: 24,
                    fontStyle: "italic",
                    padding: "0 6px",
                  },
                  children:
                    '"Once again happy birthday bee. Semoga di setiap 25oktober yg sdh kita lewati 6x ini rasamu tidak pernah berubah sedikitpun utk ku ya bee. See u di next 25oktober lagi, Love u so much papi Adel ❤️"',
                }),
                x.jsxs("div", {
                  className: "reveal-el",
                  style: { marginBottom: 10 },
                  children: [
                    x.jsx("p", {
                      style: {
                        fontSize: "0.72rem",
                        color: "#4a6b34",
                        marginBottom: 4,
                        textTransform: "uppercase",
                        letterSpacing: 1.2,
                        fontWeight: 700,
                      },
                      children: "With Endless Love — Istrimu & Mami Adel ❤️🔥",
                    }),
                    x.jsx("p", {
                      style: {
                        fontFamily: "var(--font-display)",
                        fontSize: "1.7rem",
                        color: "#1e40af",
                      },
                      children: "Happy bday suamikuuu tersayang ❤️🔥",
                    }),
                  ],
                }),
              ],
            }),
          }),
          x.jsxs("div", {
            style: {
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              paddingBottom: 20,
            },
            children: [
              x.jsxs("p", {
                style: {
                  fontSize: "0.78rem",
                  color: "var(--rose-gold)",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                },
                children: [
                  x.jsx(W2, { size: 14 }),
                  " Simpan atau screenshot kartu ucapan ini sebagai kenangan 📸",
                ],
              }),
              x.jsxs("button", {
                className: "btn-primary",
                onClick: g,
                style: {
                  width: "100%",
                  padding: "15px 20px",
                  fontSize: "0.92rem",
                  marginBottom: 6,
                },
                children: ["Lihat Buket Bunga 💐 ", x.jsx(Vr, { size: 16 })],
              }),
              x.jsxs("button", {
                className: "btn-ghost",
                onClick: l,
                style: {
                  padding: "10px 20px",
                  background: "rgba(255,255,255,0.7)",
                  borderRadius: 20,
                  color: "var(--berry)",
                },
                children: [x.jsx(Bm, { size: 14 }), " Ulangi Dari Awal 🔄"],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function kv({ autoPlay: g = !1 }) {
  const [l, r] = I.useState(g),
    [i, f] = I.useState(!1),
    [c, o] = I.useState(!0),
    [h, p] = I.useState(!1),
    [m, v] = I.useState(0),
    [T, j] = I.useState(0),
    [S, M] = I.useState(0),
    b = I.useRef(null),
    A = I.useRef(null),
    k = I.useRef(null);
  (I.useEffect(() => {
    g && r(!0);
  }, [g]),
    I.useEffect(() => {
      b.current &&
        (l
          ? b.current.play().catch((et) => console.log("Audio play error:", et))
          : b.current.pause());
    }, [l]),
    I.useEffect(() => {
      b.current && (b.current.muted = i);
    }, [i]),
    I.useEffect(() => {
      h &&
        A.current &&
        pt.fromTo(
          A.current,
          { opacity: 0, scale: 0.82, y: 35, transformOrigin: "bottom center" },
          { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: "back.out(1.6)" },
        );
    }, [h]),
    I.useEffect(() => {
      !h &&
        k.current &&
        pt.fromTo(
          k.current,
          { opacity: 0, scale: 0.88, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "back.out(1.8)" },
        );
    }, [h]));
  const q = (et) => {
      (et && et.stopPropagation(), r(!l));
    },
    Q = () => {
      if (b.current) {
        const et = b.current.currentTime,
          ot = b.current.duration;
        (M(et), ot && v((et / ot) * 100));
      }
    },
    K = () => {
      b.current && j(b.current.duration);
    },
    V = (et) => {
      if (isNaN(et) || !et) return "0:00";
      const ot = Math.floor(et / 60),
        ct = Math.floor(et % 60);
      return `${ot}:${ct < 10 ? "0" : ""}${ct}`;
    },
    P = (et, ot) => {
      if (isNaN(ot) || !ot) return "-0:00";
      const ct = ot - et,
        yt = Math.floor(ct / 60),
        vt = Math.floor(ct % 60);
      return `-${yt}:${vt < 10 ? "0" : ""}${vt}`;
    },
    Y = (et) => {
      if (b.current && T) {
        const ot = et.currentTarget.getBoundingClientRect(),
          ct = et.clientX - ot.left,
          yt = Math.max(0, Math.min(1, ct / ot.width));
        b.current.currentTime = yt * T;
      }
    },
    W = () => {
      b.current && ((b.current.currentTime = 0), l || r(!0));
    },
    F = () => {
      A.current
        ? pt.to(A.current, {
            opacity: 0,
            scale: 0.85,
            y: 25,
            duration: 0.25,
            ease: "power2.in",
            onComplete: () => p(!1),
          })
        : p(!1);
    };
  return x.jsxs("div", {
    style: {
      position: "fixed",
      bottom: 14,
      left: 0,
      right: 0,
      margin: "0 auto",
      zIndex: 99999,
      width: "92%",
      maxWidth: h ? 410 : "max-content",
      display: "flex",
      justifyContent: "center",
    },
    children: [
      x.jsx("audio", {
        ref: b,
        src: "/Shape of My Heart_spotdown.org.mp3",
        preload: "metadata",
        onTimeUpdate: Q,
        onLoadedMetadata: K,
        onEnded: () => r(!1),
      }),
      !h &&
        x.jsxs("div", {
          ref: k,
          onClick: () => p(!0),
          style: {
            background: "rgba(18, 18, 18, 0.92)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: 50,
            padding: "6px 14px 6px 8px",
            boxShadow:
              "0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(29, 185, 84, 0.2)",
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#ffffff",
            cursor: "pointer",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            userSelect: "none",
          },
          onPointerDown: (et) =>
            (et.currentTarget.style.transform = "scale(0.95)"),
          onPointerUp: (et) => (et.currentTarget.style.transform = "scale(1)"),
          children: [
            x.jsxs("div", {
              style: {
                width: 34,
                height: 34,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
                background: "#282828",
                border: "1.5px solid #1DB954",
              },
              children: [
                x.jsx("img", {
                  src: "/Shape of my heart Backstreet Boys.jfif",
                  alt: "Shape of My Heart",
                  style: { width: "100%", height: "100%", objectFit: "cover" },
                  onError: (et) => {
                    et.target.src = "/Shape of my heart Backstreet Boys.jfif";
                  },
                }),
                l &&
                  x.jsx("div", {
                    className: "anim-spin",
                    style: {
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    children: x.jsx(O1, { size: 16, color: "#1DB954" }),
                  }),
              ],
            }),
            x.jsxs("div", {
              style: { overflow: "hidden", paddingRight: 4 },
              children: [
                x.jsx("div", {
                  style: {
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.1,
                    whiteSpace: "nowrap",
                  },
                  children: "Anugerah Terindah Yang Pernah Kumiliki",
                }),
                x.jsx("div", {
                  style: {
                    fontSize: "0.66rem",
                    color: "#1DB954",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    marginTop: 1,
                  },
                  children: l ? "🎵 Playing" : "▶ Tap for Player",
                }),
              ],
            }),
            x.jsx("button", {
              onClick: q,
              style: {
                width: 28,
                height: 28,
                borderRadius: "50%",
                border: "none",
                background: "#ffffff",
                color: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              },
              children: l
                ? x.jsx(C1, { size: 13, fill: "#000" })
                : x.jsx(D1, {
                    size: 13,
                    fill: "#000",
                    style: { marginLeft: 1 },
                  }),
            }),
            x.jsx("div", {
              style: {
                color: "#b3b3b3",
                display: "flex",
                alignItems: "center",
                opacity: 0.8,
              },
              children: x.jsx(X2, { size: 16 }),
            }),
          ],
        }),
      h &&
        x.jsxs("div", {
          ref: A,
          style: {
            background: "rgba(18, 18, 18, 0.96)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: 24,
            padding: "12px 14px",
            boxShadow:
              "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 25px rgba(29, 185, 84, 0.25)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#ffffff",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            position: "relative",
          },
          children: [
            x.jsx("button", {
              onClick: F,
              style: {
                position: "absolute",
                top: 10,
                right: 10,
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                border: "none",
                color: "#b3b3b3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
                transition: "background 0.2s",
              },
              title: "Minimize",
              children: x.jsx(U2, { size: 16 }),
            }),
            x.jsxs("div", {
              style: {
                width: 76,
                height: 76,
                borderRadius: 16,
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
                boxShadow: "0 4px 14px rgba(0,0,0,0.5)",
                background: "#282828",
              },
              children: [
                x.jsx("img", {
                  src: "/Shape of my heart Backstreet Boys.jfif",
                  alt: "Shape of My Heart",
                  style: { width: "100%", height: "100%", objectFit: "cover" },
                  onError: (et) => {
                    et.target.src = "/Shape of my heart Backstreet Boys.jfif";
                  },
                }),
                l &&
                  x.jsx("div", {
                    style: {
                      position: "absolute",
                      bottom: 4,
                      right: 4,
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "#1DB954",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
                    },
                    children: x.jsx(O1, {
                      size: 11,
                      color: "#000",
                      className: "anim-spin",
                    }),
                  }),
              ],
            }),
            x.jsxs("div", {
              style: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 6,
                minWidth: 0,
                paddingRight: 24,
              },
              children: [
                x.jsxs("div", {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  },
                  children: [
                    x.jsxs("div", {
                      style: { overflow: "hidden", paddingRight: 4 },
                      children: [
                        x.jsx("div", {
                          style: {
                            fontSize: "0.88rem",
                            fontWeight: 700,
                            color: "#ffffff",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            letterSpacing: "-0.2px",
                          },
                          children: "Anugerah Terindah Yang Pernah Kumiliki",
                        }),
                        x.jsx("div", {
                          style: {
                            fontSize: "0.74rem",
                            color: "#b3b3b3",
                            fontWeight: 500,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            marginTop: 1,
                          },
                          children: "Sheila On 7",
                        }),
                      ],
                    }),
                    x.jsx("button", {
                      onClick: () => o(!c),
                      style: {
                        background: "none",
                        border: "none",
                        color: c ? "#1DB954" : "#b3b3b3",
                        cursor: "pointer",
                        padding: 2,
                        display: "flex",
                        alignItems: "center",
                        flexShrink: 0,
                      },
                      children: c
                        ? x.jsx(Nm, { size: 18, fill: "#1DB954" })
                        : x.jsx(sv, { size: 18 }),
                    }),
                  ],
                }),
                x.jsxs("div", {
                  children: [
                    x.jsx("div", {
                      onClick: Y,
                      style: {
                        height: 4,
                        background: "#4d4d4d",
                        borderRadius: 4,
                        cursor: "pointer",
                        position: "relative",
                        overflow: "hidden",
                      },
                      children: x.jsx("div", {
                        style: {
                          width: `${m}%`,
                          height: "100%",
                          borderRadius: 4,
                          background: "#ffffff",
                          transition: "width 0.1s linear",
                        },
                      }),
                    }),
                    x.jsxs("div", {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.62rem",
                        color: "#b3b3b3",
                        marginTop: 3,
                        fontWeight: 500,
                      },
                      children: [
                        x.jsx("span", { children: V(S) }),
                        x.jsx("span", { children: P(S, T) }),
                      ],
                    }),
                  ],
                }),
                x.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 1,
                  },
                  children: [
                    x.jsx("button", {
                      onClick: () => f(!i),
                      style: {
                        background: "none",
                        border: "none",
                        color: i ? "#1DB954" : "#b3b3b3",
                        cursor: "pointer",
                        padding: 2,
                      },
                      children: i
                        ? x.jsx(w1, { size: 15 })
                        : x.jsx(En, { size: 15 }),
                    }),
                    x.jsx("button", {
                      onClick: W,
                      style: {
                        background: "none",
                        border: "none",
                        color: "#ffffff",
                        cursor: "pointer",
                        padding: 2,
                      },
                      children: x.jsx(yv, { size: 18, fill: "#ffffff" }),
                    }),
                    x.jsx("button", {
                      onClick: q,
                      style: {
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        border: "none",
                        background: "#ffffff",
                        color: "#000000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                      },
                      children: l
                        ? x.jsx(C1, { size: 17, fill: "#000000" })
                        : x.jsx(D1, {
                            size: 17,
                            fill: "#000000",
                            style: { marginLeft: 2 },
                          }),
                    }),
                    x.jsx("button", {
                      onClick: W,
                      style: {
                        background: "none",
                        border: "none",
                        color: "#ffffff",
                        cursor: "pointer",
                        padding: 2,
                      },
                      children: x.jsx(_v, { size: 18, fill: "#ffffff" }),
                    }),
                    x.jsx("button", {
                      onClick: () => f(!i),
                      style: {
                        background: "none",
                        border: "none",
                        color: i ? "#e85d88" : "#b3b3b3",
                        cursor: "pointer",
                        padding: 2,
                      },
                      children: i
                        ? x.jsx(w1, { size: 15 })
                        : x.jsx(Sv, { size: 15 }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
const N1 = ["🍵", "🌿", "🍃", "💙", "✨", "🍵", "🌱", "🧋", "☘️"];
function Hv() {
  const g = Array.from({ length: 14 }, (l, r) => ({
    id: r,
    emoji: N1[r % N1.length],
    left: `${5 + Math.random() * 90}%`,
    dur: `${7 + Math.random() * 6}s`,
    delay: `${Math.random() * 8}s`,
    size: `${10 + Math.random() * 10}px`,
  }));
  return x.jsx("div", {
    className: "floating-hearts",
    children: g.map((l) =>
      x.jsx(
        "span",
        {
          className: "floating-heart",
          style: {
            left: l.left,
            fontSize: l.size,
            "--dur": l.dur,
            "--delay": l.delay,
          },
          children: l.emoji,
        },
        l.id,
      ),
    ),
  });
}
function qv() {
  const [g, l] = I.useState("splash"),
    r = I.useRef(null),
    i = (c) => {
      if (!r.current) {
        l(c);
        return;
      }
      pt.to(r.current, {
        opacity: 0,
        y: 30,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          l(c);
          const o = document.querySelector(".app-shell");
          (o && (o.scrollTop = 0),
            requestAnimationFrame(() => {
              r.current &&
                pt.fromTo(
                  r.current,
                  { opacity: 0, y: -20 },
                  { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
                );
            }));
        },
      });
    },
    f = g !== "splash" && g !== "pin";
  return x.jsxs("div", {
    className: "app-shell",
    children: [
      g !== "splash" &&
        x.jsxs("div", {
          className: "bg-layer",
          children: [
            x.jsx("img", {
              src: "/background.jpg",
              alt: "",
              className: "bg-layer__image",
            }),
            x.jsx("div", { className: "bg-gradient" }),
          ],
        }),
      g !== "splash" && x.jsx(Hv, {}),
      x.jsxs("div", {
        ref: r,
        style: { position: "relative", zIndex: 1 },
        children: [
          g === "splash" && x.jsx(Ev, { onStart: () => i("pin") }),
          g === "pin" && x.jsx(jv, { onUnlock: () => i("puzzle") }),
          g === "puzzle" && x.jsx(Av, { onComplete: () => i("letter") }),
          g === "letter" && x.jsx(Dv, { onNext: () => i("cake") }),
          g === "cake" && x.jsx(Nv, { onShowGallery: () => i("gallery") }),
          g === "gallery" && x.jsx(Bv, { onNext: () => i("wishcard") }),
          g === "wishcard" &&
            x.jsx(Uv, {
              onNext: () => i("flower"),
              onRestart: () => i("splash"),
            }),
          g === "flower" && x.jsx(wv, { onRestart: () => i("splash") }),
        ],
      }),
      f &&
        x.jsx(kv, {
          autoPlay: g !== "splash" && g !== "pin" && g !== "puzzle",
        }),
    ],
  });
}
fy.createRoot(document.getElementById("root")).render(
  x.jsx(ey.StrictMode, { children: x.jsx(qv, {}) }),
);
