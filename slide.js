/* ItemSlide.js - Licensed under the MIT license - itemslide.github.io/license.html 
   https://itemslide.github.io/dist/itemslide.min.js  */


!(function a(b, c, d) {
  function e(g, h) {
    if (!c[g]) {
      if (!b[g]) {
        var i = "function" == typeof require && require;
        if (!h && i) return i(g, !0);
        if (f) return f(g, !0);
        var j = new Error("Cannot find module '" + g + "'");
        throw ((j.code = "MODULE_NOT_FOUND"), j);
      }
      var k = (c[g] = { exports: {} });
      b[g][0].call(
        k.exports,
        function (a) {
          var c = b[g][1][a];
          return e(c ? c : a);
        },
        k,
        k.exports,
        a,
        b,
        c,
        d
      );
    }
    return c[g].exports;
  }
  for (
    var f = "function" == typeof require && require, g = 0;
    g < d.length;
    g++
  )
    e(d[g]);
  return e;
})(
  {
    1: [
      function (a, b) {
        (function (a) {
          var c = function (a) {
            function b(a) {
              l
                .children(":nth-child(" + (j.currentIndex + 1 || 0) + ")")
                .removeClass("itemslide-active"),
                l
                  .children(":nth-child(" + (a + 1 || 0) + ")")
                  .addClass("itemslide-active"),
                a != k.currentIndex &&
                  ((j.currentIndex = a), l.trigger("changeActiveIndex"));
            }
            function c(a) {
              return -(
                a * l.children().outerWidth(!0) -
                (l.parent().outerWidth(!0) - l.children().outerWidth(!0)) /
                  (k.left_sided ? 1 : 2)
              );
            }
            function d() {
              var a = Date.now() - h;
              return (
                k.left_sided &&
                  (i.currentLandPos = clamp(
                    -(j.allSlidesWidth - l.parent().width()),
                    0,
                    i.currentLandPos
                  )),
                l.trigger("changePos"),
                l.translate3d(
                  g - easeOutBack(a, 0, g - i.currentLandPos, e, f)
                ),
                a >= e
                  ? void l.translate3d(i.currentLandPos)
                  : void (i.slidesGlobalID = requestAnimationFrame(d))
              );
            }
            var e,
              f,
              g,
              h,
              i = this,
              j = a.vars,
              k = a.options,
              l = a.$el;
            (i.gotoSlideByIndex = function (a, m) {
              var n;
              return (
                a >= l.children().length - 1 || 0 >= a
                  ? ((n = !0),
                    (a = Math.min(Math.max(a, 0), l.children().length - 1)))
                  : (n = !1),
                b(a),
                (e = Math.max(
                  k.duration -
                    (1920 / $(window).width()) *
                      Math.abs(j.velocity) *
                      9 *
                      (k.duration / 230) -
                    (i.isOutBoundaries() ? j.distanceFromStart / 15 : 0) *
                      (k.duration / 230),
                  50
                )),
                (f = n ? (250 * Math.abs(j.velocity)) / $(window).width() : 0),
                (g = l.translate3d().x),
                (i.currentLandPos = c(a)),
                m
                  ? void l.translate3d(c(a))
                  : (window.cancelAnimationFrame(i.slidesGlobalID),
                    (h = Date.now()),
                    void (i.slidesGlobalID = window.requestAnimationFrame(d)))
              );
            }),
              (i.getLandingSlideIndex = function (a) {
                for (var b = 0; b < l.children().length; b++)
                  if (
                    l.children().outerWidth(!0) * b +
                      l.children().outerWidth(!0) / 2 -
                      l.children().outerWidth(!0) *
                        k.pan_threshold *
                        j.direction -
                      c(0) >
                    a
                  )
                    return k.one_item
                      ? b != j.currentIndex
                        ? j.currentIndex + j.direction
                        : j.currentIndex
                      : b;
                return k.one_item
                  ? j.currentIndex + 1
                  : l.children().length - 1;
              }),
              (i.isOutBoundaries = function () {
                return (
                  (Math.floor(l.translate3d().x) > c(0) && -1 == j.direction) ||
                  (Math.ceil(l.translate3d().x) < c(l.children().length - 1) &&
                    1 == j.direction)
                );
              });
          };
          (b.exports = c),
            (a.matrixToArray = function (a) {
              return a.substr(7, a.length - 8).split(", ");
            }),
            (a.easeOutBack = function (a, b, c, d, e) {
              return (
                void 0 == e && (e = 1.70158),
                c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b
              );
            }),
            ($.fn.translate3d = function (a, b) {
              if (null == a) {
                var c = matrixToArray(this.css("transform"));
                if (null != $.fn.jquery)
                  return {
                    x: parseFloat(isExplorer ? c[12] : c[4]),
                    y: parseFloat(isExplorer ? c[13] : c[5]),
                  };
                var d = this.css("transform")
                  .replace("translate3d", "")
                  .replace("(", "")
                  .replace(")", "")
                  .replace(" ", "")
                  .replace("px", "")
                  .split(",");
                return { x: parseFloat(d[0]), y: parseFloat(d[1]) };
              }
              this.css(
                "transform",
                "translate3d(" + a + "px," + (b || 0) + "px, 0px)"
              );
            }),
            (a.clamp = function (a, b, c) {
              return Math.min(Math.max(c, a), b);
            }),
            (a.getCurrentTotalWidth = function (a) {
              var b = 0;
              return (
                a.children().each(function () {
                  b += $(this).outerWidth(!0);
                }),
                b
              );
            });
        }).call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        );
      },
      {},
    ],
    2: [
      function (a, b) {
        var c = a("./navigation"),
          d = a("./animation"),
          e = a("./slideout"),
          f = a("./mousewheel");
        b.exports = {
          create: function (a, b) {
            var g = this;
            (g.$el = b),
              (g.options = a),
              g.options.parent_width &&
                b.children().width(b.parent().outerWidth(!0)),
              b.css({ "user-select": "none" }),
              g.options.disable_autowidth ||
                b.css(
                  "width",
                  b.children("li").length * b.children().outerWidth(!0) + 10
                ),
              (g.vars = {
                currentIndex: 0,
                parent_width: g.options.parent_width,
                velocity: 0,
                slideHeight: b.children().height(),
                direction: 1,
                allSlidesWidth: getCurrentTotalWidth(b),
              }),
              (b.end_animation = !0),
              g.options.swipe_out && e.slideout(g);
            var h = new d(g),
              i = new c(g, h);
            if (
              ((g.anim = h),
              (g.nav = i),
              b.translate3d(0),
              h.gotoSlideByIndex(parseInt(g.options.start)),
              !g.options.disable_scroll)
            )
              try {
                f.add(g, h, i, b);
              } catch (j) {}
          },
        };
      },
      {
        "./animation": 1,
        "./mousewheel": 5,
        "./navigation": 6,
        "./slideout": 8,
      },
    ],
    3: [
      function (a, b) {
        b.exports = {
          apply: function (a, b, c) {
            (a.gotoSlide = function (a) {
              b.anim.gotoSlideByIndex(a);
            }),
              (a.nextSlide = function () {
                b.anim.gotoSlideByIndex(b.vars.currentIndex + 1);
              }),
              (a.previousSlide = function () {
                b.anim.gotoSlideByIndex(b.vars.currentIndex - 1);
              }),
              c.remove_deprecated_external_functions ||
                ((a.next = a.nextSlide), (a.previous = a.previousSlide)),
              (a.reload = function () {
                var c = b.$el,
                  d = b.vars;
                d.parent_width && c.children().width(c.parent().outerWidth(!0)),
                  b.options.disable_autowidth ||
                    c.css(
                      "width",
                      c.children("li").length * c.children().outerWidth(!0) + 10
                    ),
                  (d.slideHeight = c.children().height()),
                  (d.allSlidesWidth = getCurrentTotalWidth(c)),
                  (d.velocity = 0),
                  a.gotoSlide(d.currentIndex);
              }),
              (a.addSlide = function (c) {
                a.append("<li>" + c + "</li>"),
                  b.nav.createEvents(),
                  a.reload();
              }),
              (a.removeSlide = function (a) {
                b.$el.children(":nth-child(" + (a + 1 || 0) + ")").remove(),
                  (b.vars.allSlidesWidth = getCurrentTotalWidth(b.$el));
              }),
              (a.getActiveIndex = function () {
                return b.vars.currentIndex;
              }),
              (a.getCurrentPos = function () {
                return a.translate3d().x;
              }),
              (a.getIndexByPosition = function (a) {
                return b.anim.getLandingSlideIndex(-a);
              });
          },
        };
      },
      {},
    ],
    4: [
      function (a) {
        (function (b) {
          "use strict";
          (b.isExplorer = !!document.documentMode), a("./polyfills");
          var c = a("./carousel"),
            d = a("./external_funcs"),
            e = {
              duration: 350,
              swipe_sensitivity: 150,
              disable_slide: !1,
              disable_clicktoslide: !1,
              disable_scroll: !1,
              start: 0,
              one_item: !1,
              pan_threshold: 0.3,
              disable_autowidth: !1,
              parent_width: !1,
              swipe_out: !1,
              left_sided: !1,
              remove_deprecated_external_functions: !1,
            };
          $.fn.itemslide = function (a) {
            var b = $.extend(!0, {}, c),
              f = {};
            $.extend(f, e, a), d.apply(this, b, f), b.create(f, this);
          };
        }).call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        );
      },
      { "./carousel": 2, "./external_funcs": 3, "./polyfills": 7 },
    ],
    5: [
      function (a, b) {
        b.exports = {
          add: function (a, b, c, d) {
            var e = 0,
              f = 4;
            d.mousewheel(function (g) {
              if (!c.get_vertical_pan()) {
                var h = g.deltaFactor >= 100 || g.deltaFactor % 1 == 0;
                if (!h && (e++, e == f)) return void (e = 0);
                g.preventDefault();
                var i =
                  a.vars.currentIndex -
                  ((0 == g.deltaX ? g.deltaY : g.deltaX) > 0 ? 1 : -1);
                if (i >= d.children("li").length || 0 > i) return;
                (a.vars.velocity = 0), b.gotoSlideByIndex(i);
              }
            });
          },
        };
      },
      {},
    ],
    6: [
      function (a, b) {
        function c() {
          window.getSelection
            ? window.getSelection().empty
              ? window.getSelection().empty()
              : window.getSelection().removeAllRanges &&
                window.getSelection().removeAllRanges()
            : document.selection && document.selection.empty();
        }
        function d(a) {
          return null == $.fn.jquery
            ? a.changedTouches[0]
            : a.originalEvent.touches[0] || a.originalEvent.changedTouches[0];
        }
        var e = function (a, b) {
          function e(a) {
            if ("true" !== $(a.target).attr("no-drag") && h.end_animation) {
              var b;
              "touchstart" == a.type
                ? ((b = d(a)), a.preventDefault())
                : (b = a),
                (l = Date.now()),
                (m = 1),
                (n = 0),
                (o = b.pageX),
                (p = b.pageY),
                (s = !1),
                (q = !1),
                (h.savedSlide = $(this)),
                (h.savedSlideIndex = h.savedSlide.index()),
                (r = 0),
                $(window).on("mousemove touchmove", f),
                c();
            }
          }
          function f(a) {
            var c;
            if (
              ("touchmove" == a.type
                ? ((c = d(a)),
                  Math.abs(c.pageX - o) > 10 && (n = 1),
                  n && a.preventDefault())
                : ((c = a),
                  i.disable_slide || i.swipe_out || a.preventDefault()),
              (j.direction = -(c.pageX - o) > 0 ? 1 : -1),
              b.isOutBoundaries()
                ? u && ((t = c.pageX), (u = 0))
                : (u || ((b.currentLandPos = h.translate3d().x), (o = c.pageX)),
                  (u = 1)),
              1 == r &&
                (h.children().css("height", j.slideHeight),
                h.savedSlide.wrapAll("<div class='itemslide_slideoutwrap' />"),
                (r = -1)),
              Math.abs(c.pageX - o) > 6 &&
                (!s && h.end_animation && (q = !0),
                window.cancelAnimationFrame(b.slidesGlobalID)),
              Math.abs(c.pageY - p) > 6 && !q && h.end_animation && (s = !0),
              q)
            ) {
              if (i.disable_slide) return;
              i.left_sided &&
                (b.currentLandPos = clamp(
                  -(j.allSlidesWidth - h.parent().width()),
                  0,
                  b.currentLandPos
                )),
                (s = !1),
                h.translate3d(
                  (0 == u ? t - o + (c.pageX - t) / 4 : c.pageX - o) +
                    b.currentLandPos
                ),
                h.trigger("changePos"),
                h.trigger("pan");
            } else
              s &&
                i.swipe_out &&
                (a.preventDefault(),
                $(".itemslide_slideoutwrap").translate3d(0, c.pageY - p),
                -1 != r && (r = 1));
          }
          function g(a) {
            if (m) {
              m = !1;
              var c;
              if (
                ((c = "touchend" == a.type ? d(a) : a),
                $(window).off("mousemove touchmove", f),
                s && i.swipe_out)
              )
                return (s = !1), void k();
              if (h.end_animation && !i.disable_slide) {
                var e = Date.now() - l;
                e++,
                  (j.velocity = -(c.pageX - o) / e),
                  (j.direction = j.velocity > 0 ? 1 : -1),
                  (j.distanceFromStart = (c.pageX - o) * j.direction * -1);
                var g = b.getLandingSlideIndex(
                  j.velocity * i.swipe_sensitivity - h.translate3d().x
                );
                if (j.distanceFromStart > 6) return void b.gotoSlideByIndex(g);
              }
              h.trigger({ type: "clickSlide", slide: h.savedSlideIndex }),
                h.savedSlideIndex == j.currentIndex ||
                  i.disable_clicktoslide ||
                  (a.preventDefault(), b.gotoSlideByIndex(h.savedSlideIndex));
            }
          }
          var h = a.$el,
            i = a.options,
            j = a.vars,
            k = a.swipeOut;
          (this.createEvents = function () {
            h.children().on("mousedown touchstart", function (a) {
              e.call(this, a);
            }),
              $(window).on("mouseup touchend", function (a) {
                g(a);
              });
          }),
            this.createEvents();
          var l,
            m,
            n,
            o,
            p,
            q,
            r,
            s = !1;
          this.get_vertical_pan = function () {
            return s;
          };
          var t, u;
        };
        b.exports = e;
      },
      {},
    ],
    7: [
      function () {
        "function" != typeof Object.create &&
          (Object.create = function (a) {
            function b() {}
            return (b.prototype = a), new b();
          }),
          $.fn.outerWidth ||
            ($.fn.outerWidth = function () {
              if ($(this)[0] instanceof Element) {
                var a = $(this)[0],
                  b = a.offsetWidth,
                  c = getComputedStyle(a);
                return (b += parseInt(c.marginLeft) + parseInt(c.marginRight));
              }
            });
      },
      {},
    ],
    8: [
      function (a, b) {
        function c(a) {
          function b() {
            if (((p = Date.now() - i), o))
              $(".itemslide_slideoutwrap").translate3d(
                0,
                j - easeOutBack(p, 0, j - h, 250, 0)
              ),
                e.savedSlide.css(
                  "opacity",
                  m - easeOutBack(p, 0, m, 250, 0) * (n ? -1 : 1)
                );
            else {
              if (n)
                return (
                  $(".itemslide_slideoutwrap").children().unwrap(),
                  $(s).children().unwrap(),
                  e.children().css("height", ""),
                  (e.end_animation = !0),
                  void (p = 0)
                );
              $(s).translate3d(
                0 -
                  easeOutBack(p - 250, 0, 0 + e.savedSlide.width(), 125, 0) *
                    (r ? -1 : 1),
                0
              );
            }
            return (
              1 == q &&
                ($(".itemslide_slideoutwrap").children().unwrap(),
                e.savedSlideIndex == g.currentIndex &&
                  $(s).children(":nth-child(1)").addClass("itemslide-active"),
                e.savedSlideIndex != e.children().length - 1 ||
                  r ||
                  e.savedSlideIndex != g.currentIndex ||
                  ((f.duration = 200),
                  a.anim.gotoSlideByIndex(e.children().length - 2)),
                0 == e.savedSlideIndex && 0 != g.currentIndex && (p = 500),
                (q = -1)),
              p >= 250 && ((o = !1), -1 != q && (q = 1), p >= 375)
                ? ($(s).children().unwrap(),
                  e.removeSlide(c.index()),
                  ((0 == e.savedSlideIndex && 0 != g.currentIndex) || r) &&
                    a.anim.gotoSlideByIndex(g.currentIndex - 1, !0),
                  (f.duration = l),
                  (p = 0),
                  void (e.end_animation = !0))
                : void (k = requestAnimationFrame(b))
            );
          }
          var c,
            d,
            e = a.$el,
            f = a.options,
            g = a.vars,
            h = -400,
            i = Date.now(),
            j = 0,
            k = 0,
            l = 0,
            m = 0;
          (e.end_animation = !0), (e.savedSlideIndex = 0);
          var n = !1;
          a.swipeOut = function () {
            (j = $(".itemslide_slideoutwrap").translate3d().y),
              (d = 0 > j),
              (h = d ? -400 : 400),
              Math.abs(0 - j) < 50
                ? ((n = !0), (h = 0))
                : ((n = !1),
                  e.trigger({ type: "swipeout", slide: e.savedSlideIndex })),
              (q = 0),
              (l = f.duration),
              (c = e.savedSlide),
              (i = Date.now()),
              (m = e.savedSlide.css("opacity")),
              e.savedSlideIndex < g.currentIndex
                ? ((r = !0),
                  e
                    .children(":nth-child(-n+" + (e.savedSlideIndex + 1) + ")")
                    .wrapAll("<div class='itemslide_move' />"))
                : ((r = !1),
                  e
                    .children(":nth-child(n+" + (e.savedSlideIndex + 2) + ")")
                    .wrapAll("<div class='itemslide_move' />")),
              (o = !0),
              (e.end_animation = !1),
              (k = requestAnimationFrame(b));
          };
          var o = !0,
            p = 0,
            q = 0,
            r = !1,
            s = ".itemslide_move";
        }
        b.exports = { slideout: c };
      },
      {},
    ],
  },
  {},
  [4]
);
