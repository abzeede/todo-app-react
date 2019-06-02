;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      e.exports = n(24)
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        o = n.n(a),
        r = n(8),
        c = n.n(r),
        i = (n(17), n(6)),
        s = n(9),
        l = n(1),
        u = n(2),
        m = n(4),
        d = n(3),
        f = n(5),
        h = (n(18),
        (function(e) {
          function t() {
            var e, n
            Object(l.a)(this, t)
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r]
            return (
              ((n = Object(m.a)(this, (e = Object(d.a)(t)).call.apply(e, [this].concat(o)))).state = { value: '' }),
              (n.handelInputChange = function(e) {
                n.setState({ value: e.target.value })
              }),
              (n.onSubmit = function(e) {
                e.preventDefault(), '' !== n.state.value && (n.props.onSubmit(n.state.value), n.setState({ value: '' }))
              }),
              n
            )
          }
          return (
            Object(f.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  return o.a.createElement(
                    'form',
                    { className: 'todo-form', onSubmit: this.onSubmit },
                    o.a.createElement('span', { className: 'todo-form__plus-icon' }, '+'),
                    o.a.createElement('input', {
                      className: 'todo-form__input',
                      onChange: this.handelInputChange,
                      value: this.state.value,
                      placeholder: this.props.placeholder,
                    }),
                  )
                },
              },
            ]),
            t
          )
        })(o.a.Component))
      h.defaultProps = { placeholder: '' }
      var p = h,
        g = n(10),
        v = (n(19),
        function(e) {
          var t = e.checked,
            n = e.onClick
          return o.a.createElement('span', { className: 'checkbox '.concat(t && 'checkbox--checked'), onClick: n })
        }),
        E = (n(20),
        function(e) {
          var t = e.id,
            n = e.detail,
            a = e.done,
            r = e.onDelete,
            c = e.onToggleDone,
            i = e.onEdit
          return o.a.createElement(
            'li',
            { className: 'todo-item' },
            o.a.createElement(
              'span',
              { className: 'todo-item__checkbox' },
              o.a.createElement(v, {
                onClick: function() {
                  return c(t)
                },
                checked: a,
              }),
            ),
            o.a.createElement('input', {
              className: 'todo-item__input '.concat(a ? 'todo-item__input--done' : ''),
              onChange: function(e) {
                i(t, e.target.value)
              },
              value: n,
            }),
            o.a.createElement(
              'button',
              {
                className: 'todo-item__remove-btn',
                onClick: function() {
                  return r(t)
                },
              },
              o.a.createElement('i', { className: 'fa fa-trash' }),
            ),
          )
        }),
        b = (n(21),
        function(e) {
          var t = e.items,
            n = Object(g.a)(e, ['items'])
          return o.a.createElement(
            'ol',
            { className: 'todo-item-list' },
            t.map(function(e) {
              return o.a.createElement(E, Object.assign({ key: e.id }, n, e))
            }),
          )
        })
      b.defaultProps = { items: [], onEdit: function() {} }
      var _ = b,
        w = (n(22),
        function(e) {
          var t = e.items,
            n = e.showPercent,
            a = (function() {
              var e = t.length
              return 0 === e
                ? 0
                : 100 -
                    Math.floor(
                      (100 *
                        t.filter(function(e) {
                          return !e.done
                        }).length) /
                        e,
                    )
            })()
          return o.a.createElement(
            'div',
            { className: 'progress' },
            n && o.a.createElement('div', { className: 'progress__text' }, a, '%'),
            o.a.createElement(
              'div',
              { className: 'progress__bar' },
              o.a.createElement('div', { className: 'progress__bar--active', style: { width: ''.concat(a, '%') } }),
            ),
          )
        })
      w.defaultProps = { showPercent: !1 }
      var N = w,
        k = (n(23),
        (function(e) {
          function t() {
            var e, n
            Object(l.a)(this, t)
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r]
            return (
              ((n = Object(m.a)(this, (e = Object(d.a)(t)).call.apply(e, [this].concat(o)))).state = { items: [] }),
              (n.generateUID = function() {
                return new Date().getTime()
              }),
              (n.onCreateTodo = function(e) {
                n.setState(function(t) {
                  return { items: [{ id: n.generateUID(), detail: e, done: !1 }].concat(Object(s.a)(t.items)) }
                })
              }),
              (n.onDelete = function(e) {
                n.setState(function(t) {
                  return {
                    items: t.items.filter(function(t) {
                      return t.id !== e
                    }),
                  }
                })
              }),
              (n.onToggleDone = function(e) {
                n.setState(function(t) {
                  return {
                    items: t.items.map(function(t) {
                      return t.id === e ? Object(i.a)({}, t, { done: !t.done }) : t
                    }),
                  }
                })
              }),
              (n.getTodoItemsByStatus = function(e) {
                var t = e.done
                return n.state.items.filter(function(e) {
                  return e.done === t
                })
              }),
              (n.onEdit = function(e, t) {
                n.setState(function(n) {
                  return {
                    items: n.items.map(function(n) {
                      return n.id === e ? Object(i.a)({}, n, { detail: t }) : n
                    }),
                  }
                })
              }),
              n
            )
          }
          return (
            Object(f.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.getTodoItemsByStatus({ done: !1 }),
                    t = this.getTodoItemsByStatus({ done: !0 })
                  return o.a.createElement(
                    'div',
                    { className: 'app' },
                    o.a.createElement(
                      'div',
                      { className: 'app__todo-form' },
                      o.a.createElement(p, { onSubmit: this.onCreateTodo, placeholder: 'Add a todo...' }),
                    ),
                    0 !== e.length &&
                      o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(
                          'div',
                          { className: 'app__progress-bar' },
                          o.a.createElement(N, { items: this.state.items, showPercent: !0 }),
                        ),
                        o.a.createElement(_, {
                          items: e,
                          onDelete: this.onDelete,
                          onToggleDone: this.onToggleDone,
                          onEdit: this.onEdit,
                        }),
                      ),
                    0 !== t.length &&
                      o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement('h3', { className: 'app__label' }, 'Done'),
                        o.a.createElement(_, { items: t, onDelete: this.onDelete, onToggleDone: this.onToggleDone }),
                      ),
                  )
                },
              },
            ]),
            t
          )
        })(o.a.Component))
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
      )
      c.a.render(o.a.createElement(k, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister()
          })
    },
  ],
  [[11, 1, 2]],
])
//# sourceMappingURL=main.65c30a55.chunk.js.map
