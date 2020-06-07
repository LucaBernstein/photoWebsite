/**
 * Spotlight.js v0.6.5 (CDN)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/spotlight
 */
(function() {
    'use strict';
    var aa = {};

    function ba(a) {
        for (var b = a.classList, c = {}, d = 0; d < b.length; d++) c[b[d]] = 1;
        a.a = c;
        a.c = b
    }

    function f(a, b) {
        a = g(a);
        var c = "string" === typeof b;
        if (a.length)
            for (var d = 0; d < a.length; d++)(c ? ca : da)(a[d], b);
        else(c ? ca : da)(a, b)
    }

    function da(a, b) { for (var c = 0; c < b.length; c++) ca(a, b[c]) }

    function ca(a, b) {
        a.a || ba(a);
        a.a[b] || (a.a[b] = 1, a.c.add(b))
    }

    function h(a, b) {
        a = g(a);
        var c = "string" === typeof b;
        if (a.length)
            for (var d = 0; d < a.length; d++)(c ? ea : fa)(a[d], b);
        else(c ? ea : fa)(a, b)
    }

    function fa(a, b) { for (var c = 0; c < b.length; c++) ea(a, b[c]) }

    function ea(a, b) {
        a.a || ba(a);
        a.a[b] && (a.a[b] = 0, a.c.remove(b))
    }

    function l(a, b, c, d) {
        a = g(a);
        var e = "string" !== typeof b && Object.keys(b);
        if (a.length)
            for (var k = 0; k < a.length; k++)(e ? ha : ia)(a[k], b, e || c, d);
        else(e ? ha : ia)(a, b, e || c, d)
    }

    function ha(a, b, c, d) {
        for (var e = 0; e < c.length; e++) {
            var k = c[e];
            ia(a, k, b[k], d)
        }
    }

    function ia(a, b, c, d) {
        var e = a.f;
        e || (a.f = e = {});
        e[b] !== c && (e[b] = c, (a.g || (a.g = a.style)).setProperty(aa[b] || (aa[b] = b.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()), c, d ? "important" : null))
    }
    var ja = 0;

    function m(a, b, c) {
        l(a, "transition", "none");
        l(a, b, c);
        ja || (ja = a.clientTop && 0);
        l(a, "transition", "")
    }

    function ka(a, b) {
        b || (b = "");
        a = g(a);
        if (a.length)
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e = b;
                d.b !== e && (d.b = e, d.textContent = e)
            } else a.b !== b && (a.b = b, a.textContent = b)
    }

    function g(a) { return "string" === typeof a ? document.querySelectorAll(a) : a };

    function la(a, b, c, d) { ma("add", a, b, c, d) }

    function na(a, b, c, d) { ma("remove", a, b, c, d) }

    function ma(a, b, c, d, e) { b[a + "EventListener"](c || "click", d, "undefined" === typeof e ? !0 : e) }

    function n(a, b) {
        a || (a = window.event);
        a && (a.stopImmediatePropagation(), b || a.preventDefault(), b || (a.returnValue = !1));
        return !1
    };
    var oa = document.createElement("link");
    oa.rel = "stylesheet";
    oa.href = "https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/css/spotlight.css";
    document.getElementsByTagName("head")[0].appendChild(oa);
    var p = "theme fullscreen autofit zoom-in zoom-out page title description player progress".split(" "),
        q, r, pa, qa, u, v, y, z, A, B, C, D, E, F, ra, sa, G, H, I, J, ta, ua, va, K, L, M, wa, N, xa, ya, za, Aa, Ba, O, Ca, Da, Ea, P, Q, Fa, R, S, T, Ga;

    function V(a) { return (N || document).getElementsByClassName(a)[0] }

    function Ha(a, b) {
        if (H = a.length) {
            L || (L = (N || document).getElementsByClassName("pane"));
            var c = L.length,
                d = I.title,
                e = I.description;
            T = Array(H);
            for (var k = 0; k < H; k++) {
                var t = a[k],
                    w = t.dataset;
                if (k >= c) {
                    var x = L[0].cloneNode(!1);
                    l(x, "left", 100 * k + "%");
                    L[0].parentNode.appendChild(x)
                }
                x = void 0;
                T[k] = { src: w && (w.href || w.src) || t.src || t.href, title: w && w.title || t.title || (x = (t || document).getElementsByTagName("img")).length && x[0].alt || d || "", description: w && w.description || t.description || e || "" }
            }
            G = b || 1;
            Ia(!0);
            Ja()
        }
    }

    function Ka(a, b, c, d) { if (d || a[c]) I[c] = b && b[c] || d }

    function La(a, b) {
        I = {};
        b && Ma(b);
        Ma(a);
        Ka(a, b, "description");
        Ka(a, b, "title");
        Ka(a, b, "prefetch", !0);
        Ka(a, b, "preloader", !0);
        ua = a.onchange;
        J = I.infinite;
        J = "undefined" !== typeof J && "false" !== J;
        ta = "false" !== I.progress;
        va = 1 * I.player || 7E3;
        if ((a = I.zoom) || "" === a) I["zoom-in"] = I["zoom-out"] = a, delete I.zoom;
        if ((a = I.control) || "" === a) { a = "string" === typeof a ? a.split(",") : a; for (b = 0; b < p.length; b++) I[p[b]] = "false"; for (b = 0; b < a.length; b++) { var c = a[b].trim(); "zoom" === c ? I["zoom-in"] = I["zoom-out"] = "true" : I[c] = "true" } }
        for (a =
            0; a < p.length; a++) b = p[a], l(V(b), "display", "false" === I[b] ? "none" : "");
        (sa = I.theme) ? Na(): sa = "white"
    }

    function Ma(a) {
        for (var b = I, c = Object.keys(a), d = 0; d < c.length; d++) {
            var e = c[d];
            b[e] = "" + a[e]
        }
    }

    function Oa() {
        var a = G;
        K = L[a - 1];
        M = K.firstElementChild;
        G = a;
        if (!M) {
            var b = "false" !== I.preloader;
            M = new Image;
            M.onload = function() {
                b && h(P, "show");
                T && (y = this.width, z = this.height, l(this, { visibility: "visible", opacity: 1, transform: "" }), "false" !== I.prefetch && a < H && ((new Image).src = T[a].src))
            };
            M.onerror = function() { K.removeChild(this) };
            K.appendChild(M);
            M.src = T[a - 1].src;
            b && f(P, "show");
            return !b
        }
        return !0
    }
    la(document, "", Pa);
    la(document, "DOMContentLoaded", Qa, { once: !0 });
    var Ra = !1;

    function Qa() {
        Ra || (N = document.createElement("div"), N.id = "spotlight", N.innerHTML = '<div class=preloader></div><div class=scene><div class=pane></div></div><div class=header><div class=page></div><div class="icon fullscreen"></div><div class="icon autofit"></div><div class="icon zoom-out"></div><div class="icon zoom-in"></div><div class="icon theme"></div><div class="icon player"></div><div class="icon close"></div></div><div class=progress></div><div class="arrow arrow-left"></div><div class="arrow arrow-right"></div><div class=footer><div class=title></div><div class=description></div></div>',
            l(N, "transition", "none"), document.body.appendChild(N), wa = V("scene"), xa = V("footer"), ya = V("title"), za = V("description"), Aa = V("arrow-left"), Ba = V("arrow-right"), O = V("fullscreen"), Ca = V("page"), Da = V("player"), Ea = V("progress"), P = V("preloader"), S = document.documentElement || document.body, document.cancelFullScreen || (document.cancelFullScreen = document.exitFullscreen || document.webkitCancelFullScreen || document.webkitExitFullscreen || document.mozCancelFullScreen || function() {}), S.requestFullScreen || (S.requestFullScreen =
                S.webkitRequestFullScreen || S.msRequestFullScreen || S.mozRequestFullScreen || l(O, "display", "none") || function() {}), Ga = [
                [window, "keydown", Sa],
                [window, "wheel", Ta],
                [window, "hashchange", Ua],
                [window, "resize", Va],
                [P, "mousedown", Wa],
                [P, "mouseleave", Xa],
                [P, "mouseup", Xa],
                [P, "mousemove", Ya],
                [P, "touchstart", Wa, { passive: !1 }],
                [P, "touchcancel", Xa],
                [P, "touchend", Xa],
                [P, "touchmove", Ya, { passive: !0 }],
                [O, "", Za],
                [Aa, "", $a],
                [Ba, "", W],
                [Da, "", ab],
                [V("autofit"), "", bb],
                [V("zoom-in"), "", cb],
                [V("zoom-out"), "", db],
                [V("close"), "",
                    eb
                ],
                [V("theme"), "", Na]
            ], Ra = !0)
    }

    function Va() {
        u = N.clientWidth;
        v = N.clientHeight;
        M && (y = M.width, z = M.height, fb())
    }

    function fb() { l(M, "transform", "translate(-50%, -50%) scale(" + A + ")") }

    function X(a, b) { l(K, "transform", a || b ? "translate(" + a + "px, " + b + "px)" : "") }

    function Ia(a, b) {
        (a ? m : l)(wa, "transform", "translateX(" + (100 * -(G - 1) + (b || 0)) + "%)")
    }

    function gb(a) {
        for (var b = 0; b < Ga.length; b++) {
            var c = Ga[b];
            (a ? la : na)(c[0], c[1], c[2], c[3])
        }
    }

    function Pa(a) {
        var b = hb.call(a.target, ".spotlight");
        if (b) {
            var c = hb.call(b, ".spotlight-group"),
                d = (c || document).getElementsByClassName("spotlight");
            La(b.dataset, c && c.dataset);
            for (c = 0; c < d.length; c++)
                if (d[c] === b) { Ha(d, c + 1); break }
            ib();
            return n(a)
        }
    }

    function Sa(a) {
        if (K) switch (a.keyCode) {
            case 8:
                bb();
                break;
            case 27:
                eb();
                break;
            case 32:
                "false" !== I.player && ab();
                break;
            case 37:
                $a();
                break;
            case 39:
                W();
                break;
            case 38:
            case 107:
            case 187:
                cb();
                break;
            case 40:
            case 109:
            case 189:
                db()
        }
    }

    function Ta(a) { K && (a = a.deltaY, 0 > .5 * (0 > a ? 1 : a ? -1 : 0) ? db() : cb()) }

    function Ua() { K && "#spotlight" === location.hash && eb(!0) }

    function ab(a) {
        ("boolean" === typeof a ? a : !Q) ? Q || (Q = setInterval(W, va), f(Da, "on"), ta && jb()): Q && (Q = clearInterval(Q), h(Da, "on"), ta && m(Ea, "transform", ""));
        return Q
    }

    function Y() {
        R ? clearTimeout(R) : f(N, "menu");
        var a = I.autohide;
        R = "false" !== a ? setTimeout(function() {
            h(N, "menu");
            R = null
        }, 1 * a || 3E3) : 1
    }

    function kb(a) {
        "boolean" === typeof a && (R = a ? R : 0);
        R ? (R = clearTimeout(R), h(N, "menu")) : Y();
        return n(a)
    }

    function Wa(a) {
        B = !0;
        C = !1;
        var b = lb(a);
        D = y * A <= u;
        pa = b.x;
        qa = b.y;
        return n(a, !0)
    }

    function Xa(a) {
        if (B && !C) return B = !1, kb(a);
        D && C && (Ia(!0, q / u * 100), q < -(v / 10) && W() || q > v / 10 && $a() || Ia(), q = 0, D = !1, X());
        B = !1;
        return n(a)
    }

    function Ya(a) {
        if (B) {
            Fa || (Fa = requestAnimationFrame(mb));
            var b = lb(a),
                c = (y * A - u) / 2;
            C = !0;
            q -= pa - (pa = b.x);
            D ? E = !0 : q > c ? q = c : 0 < u - q - y * A + c ? q = u - y * A + c : E = !0;
            z * A > v && (c = (z * A - v) / 2, r -= qa - (qa = b.y), r > c ? r = c : 0 < v - r - z * A + c ? r = v - z * A + c : E = !0)
        } else Y();
        return n(a, !0)
    }

    function lb(a) {
        var b = a.touches;
        b && (b = b[0]);
        return { x: b ? b.clientX : a.pageX, y: b ? b.clientY : a.pageY }
    }

    function mb(a) {
        E ? (a && (Fa = requestAnimationFrame(mb)), X(q, r)) : Fa = null;
        E = !1
    }

    function Za(a) {
        ("boolean" === typeof a ? a : document.isFullScreen || document.webkitIsFullScreen || document.mozFullScreen) ? (document.cancelFullScreen(), h(O, "on")) : (S.requestFullScreen(), f(O, "on"))
    }

    function bb(a) {
        "boolean" === typeof a && (F = !a);
        F = 1 === A && !F;
        l(M, { maxHeight: F ? "none" : "", maxWidth: F ? "none" : "", transform: "" });
        y = M.width;
        z = M.height;
        A = 1;
        r = q = 0;
        E = !0;
        X();
        Y()
    }

    function cb(a) {
        var b = A / .65;
        5 >= b && nb(A = b);
        a || Y()
    }

    function nb(a) {
        A = a || 1;
        fb()
    }

    function db(a) {
        var b = .65 * A;
        1 <= b && (nb(A = b), r = q = 0, E = !0, X());
        a || Y()
    }

    function ib() {
        location.hash = "spotlight";
        location.hash = "show";
        l(N, "transition", "");
        f(S, "hide-scrollbars");
        f(N, "show");
        gb(!0);
        Va();
        Y()
    }

    function eb(a) {
        gb(!1);
        history.go(!0 === a ? -1 : -2);
        h(S, "hide-scrollbars");
        h(N, "show");
        Q && ab(!1);
        M.parentNode.removeChild(M);
        K = L = M = T = I = ua = null
    }

    function $a() { if (1 < G) return Z(G - 1); if (Q || J) return Z(H) }

    function W() { if (G < H) return Z(G + 1); if (Q || J) return Z(1) }

    function Z(a) {
        if (!(Q && B || a === G)) {
            Q || Y();
            Q && ta && jb();
            var b = a > G;
            G = a;
            Ja(b);
            return !0
        }
    }

    function jb() {
        m(Ea, { transitionDuration: "", transform: "" });
        l(Ea, { transitionDuration: va + "ms", transform: "translateX(0)" })
    }

    function Na(a) {
        "boolean" === typeof a ? ra = a : (ra = !ra, Y());
        ra ? f(N, sa) : h(N, sa)
    }

    function Ja(a) {
        r = q = 0;
        A = 1;
        var b = I.animation,
            c = !0,
            d = !0,
            e = !0;
        if (b || "" === b) {
            c = d = e = !1;
            b = "string" === typeof b ? b.split(",") : b;
            for (var k = 0; k < b.length; k++) {
                var t = b[k].trim();
                if ("scale" === t) c = !0;
                else if ("fade" === t) d = !0;
                else if ("slide" === t) e = !0;
                else if ("flip" === t) var w = !0;
                else if ("false" !== t) { c = d = e = w = !1; var x = t; break }
            }
        }
        l(wa, "transition", e ? "" : "none");
        Ia();
        K && X();
        if (M) {
            l(M, { opacity: d ? 0 : 1, transform: "" });
            var U = M;
            setTimeout(function() { U && M !== U && U.parentNode && U.parentNode.removeChild(U) }, 800)
        }
        e = Oa();
        x && f(M, x);
        m(M, { opacity: d ? 0 : 1, transform: "translate(-50%, -50%)" + (c ? " scale(0.8)" : "") + (w && "undefined" !== typeof a ? " rotateY(" + (a ? "" : "-") + "90deg)" : ""), maxHeight: "", maxWidth: "" });
        e && l(M, { visibility: "visible", opacity: 1, transform: "" });
        x && h(M, x);
        X();
        l(Aa, "visibility", J || 1 !== G ? "" : "hidden");
        l(Ba, "visibility", J || G !== H ? "" : "hidden");
        a = T[G - 1];
        if (c = (c = a.title || a.description) && "false" !== c) ka(ya, a.title || ""), ka(za, a.description || "");
        l(xa, "visibility", c ? "visible" : "hidden");
        ka(Ca, G + " / " + H);
        ua && ua(G)
    }
    var hb = Element.prototype.closest || function(a) {
        var b = this;
        for (a = a.substring(1); b && 1 === b.nodeType;) {
            if (b.classList.contains(a)) return b;
            b = b.parentElement || b.parentNode
        }
    };
    window.Spotlight = {
        init: Qa,
        theme: Na,
        fullscreen: Za,
        autofit: bb,
        next: W,
        prev: $a,
        "goto": Z,
        close: eb,
        zoom: nb,
        menu: kb,
        show: function(a, b) {
            setTimeout(function() {
                a ? (b ? La(b) : b = {}, Ha(a, b.index)) : I = {};
                ib()
            })
        },
        play: ab
    };
}).call(this);