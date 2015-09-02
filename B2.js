'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobservable = require('mobservable');

var _mobservable2 = _interopRequireDefault(_mobservable);

var _mobservableReact = require('mobservable-react');

require('mobservable-react-devtools');
var reactMixin = require('react-mixin');
exports.B2 = B2;

var GroupNew = (function (_React$Component) {
  _inherits(GroupNew, _React$Component);

  function GroupNew(props) {
    var _this = this;

    _classCallCheck(this, _GroupNew);

    _get(Object.getPrototypeOf(_GroupNew.prototype), 'constructor', this).call(this, props);

    this.render = function () {
      if (_this.props.hidden2) {
        return null;
      }
      return _react2['default'].createElement(
        'div',
        { style: { marginLeft: 5 } },
        _react2['default'].createElement(
          'label',
          null,
          'Player defined group name:  ',
          _react2['default'].createElement('input', { type: 'text', id: 'cow', onKeyDown: _this.handleEnter.bind(_this),
            onClick: _this.click.bind(_this), style: { width: 90, backgroundColor: '#d8d17d', marginLeft: 10 } })
        )
      );
    };
  }

  _createClass(GroupNew, [{
    key: 'handleEnter',
    value: function handleEnter(event) {
      var group = event.target.value;
      if (group == '') {
        return;
      } else {
        if (event.keyCode == 13) {
          this.props.setGroup(group);
        }
      }
    }
  }, {
    key: 'click',
    value: function click(event) {
      var group = event.target.value;
      if (group == '') {
        return;
      } else {
        this.props.setGroup(group);
      }
    }
  }]);

  var _GroupNew = GroupNew;
  GroupNew = (0, _mobservableReact.reactiveComponent)(GroupNew) || GroupNew;
  return GroupNew;
})(_react2['default'].Component);

;

var Fibonacci = (function (_React$Component2) {
  _inherits(Fibonacci, _React$Component2);

  function Fibonacci(props) {
    var _this2 = this;

    _classCallCheck(this, _Fibonacci);

    _get(Object.getPrototypeOf(_Fibonacci.prototype), 'constructor', this).call(this, props);

    this.render = function () {
      if (_this2.props.hidden2) {
        return null;
      }
      return _react2['default'].createElement(
        'div',
        { style: { marginLeft: 5 } },
        _react2['default'].createElement(
          'label',
          null,
          'Enter a number:  ',
          _react2['default'].createElement('input', { autoFocus: true, type: 'text', id: 'cow', onKeyDown: _this2.handleEnter.bind(_this2),
            style: { width: 90, backgroundColor: '#d8d17d', marginLeft: 10 } })
        )
      );
    };
  }

  _createClass(Fibonacci, [{
    key: 'handleEnter',
    value: function handleEnter(event) {
      var num = event.target.value;
      if (event.keyCode == 13) {
        this.props.fib(num);
      }
    }
  }]);

  var _Fibonacci = Fibonacci;
  Fibonacci = (0, _mobservableReact.reactiveComponent)(Fibonacci) || Fibonacci;
  return Fibonacci;
})(_react2['default'].Component);

;

var mouseHandlerx = {
  Abackground: '#000',
  Aborder: 'green',
  Acolor: 'burlywood',
  Asize: 12,
  Bbackground: '#000',
  Bborder: 'green',
  Bcolor: 'burlywood',
  Bsize: 12,
  Cbackground: '#000',
  Cborder: 'green',
  Ccolor: 'burlywood',
  Csize: 12,
  Sbackground: '#000',
  Sborder: 'green',
  Scolor: 'burlywood',
  Ssize: 12,
  rSbackground: 'green',
  rSborder: 'lightgreen',
  rScolor: 'yellow',
  27: '#000',
  270: 'darkred',
  28: 'burlywood',
  37: '#000',
  370: 'darkred',
  38: 'burlywood'
};

var mouseHandler = _mobservable2['default'].makeReactive(mouseHandlerx);

var temp = [1, 1];

var data = _mobservable2['default'].makeReactive({
  group: 'solo',
  name: '',
  nx: [1, 1],
  n: 1,
  dsp: 'inline',
  p: 1,
  t: 0,
  q: 0,
  x: 1,
  f: function f(_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var a = _ref2[0];
    var b = _ref2[1];

    temp = [a + b, a];
    return [a + b, a];
  },
  g: function g() {
    temp = this.f(temp);
    return temp;
  },
  test: true,
  groupWatch: function groupWatch() {
    if (this.group === 'GroupA' && this.test) {
      mouseHandler.Abackground = 'green';
      mouseHandler.Aborder = 'lawngreen';
      mouseHandler.Acolor = 'yellow';
      mouseHandler.Bbackground = '#000';
      mouseHandler.Bborder = 'green';
      mouseHandler.Bcolor = 'burlywood';
      mouseHandler.Cbackground = '#000';
      mouseHandler.Cborder = 'green';
      mouseHandler.Ccolor = 'burlywood';
      mouseHandler.Sbackground = '#000';
      mouseHandler.Sborder = 'green';
      mouseHandler.Scolor = 'burlywood';
    } else if (this.group === 'GroupB' && this.test) {
      mouseHandler.Bbackground = 'green';
      mouseHandler.Bborder = 'lawngreen';
      mouseHandler.Bcolor = 'yellow';
      mouseHandler.Abackground = '#000';
      mouseHandler.Aborder = 'green';
      mouseHandler.Acolor = 'burlywood';
      mouseHandler.Cbackground = '#000';
      mouseHandler.Cborder = 'green';
      mouseHandler.Ccolor = 'burlywood';
      mouseHandler.Sbackground = '#000';
      mouseHandler.Sborder = 'green';
      mouseHandler.Scolor = 'burlywood';
    } else if (this.group === 'GroupC' && this.test) {
      mouseHandler.Cbackground = 'green';
      mouseHandler.Cborder = 'lawngreen';
      mouseHandler.Ccolor = 'yellow';
      mouseHandler.Abackground = '#000';
      mouseHandler.Aborder = 'green';
      mouseHandler.Acolor = 'burlywood';
      mouseHandler.Bbackground = '#000';
      mouseHandler.Bborder = 'green';
      mouseHandler.Bcolor = 'burlywood';
      mouseHandler.Sbackground = '#000';
      mouseHandler.Sborder = 'green';
      mouseHandler.Scolor = 'burlywood';
    } else if (this.group === 'solo' && this.test) {
      mouseHandler.Sbackground = 'green';
      mouseHandler.Sborder = 'lawngreen';
      mouseHandler.Scolor = 'yellow';
      mouseHandler.Abackground = '#000';
      mouseHandler.Aborder = 'green';
      mouseHandler.Acolor = 'burlywood';
      mouseHandler.Bbackground = '#000';
      mouseHandler.Bborder = 'green';
      mouseHandler.Bcolor = 'burlywood';
      mouseHandler.Cbackground = '#000';
      mouseHandler.Cborder = 'green';
      mouseHandler.Ccolor = 'burlywood';
    } else if (this.test) {
      mouseHandler.Abackground = '#000';
      mouseHandler.Aborder = 'green';
      mouseHandler.Acolor = 'burlywood';
      mouseHandler.Bbackground = '#000';
      mouseHandler.Bborder = 'green';
      mouseHandler.Bcolor = 'burlywood';
      mouseHandler.Cbackground = '#000';
      mouseHandler.Cborder = 'green';
      mouseHandler.Ccolor = 'burlywood';
      mouseHandler.Sbackground = '#000';
      mouseHandler.Sborder = 'green';
      mouseHandler.Scolor = 'burlywood';
    }
  }
});

data.increaseX = function () {
  data.x = data.x + 1;
  return data.x;
};

data.fib = function (x) {
  var n = 1 * x;
  switch (n) {
    case 1:
      return 0;
    case 2:
      return 1;
    case 3:
      return 1;
  }
  if (n > 3) {
    var ar = [2, 1];
    var rf = _mobservable2['default'].makeReactive(1);
    rf.observe(function (a, b) {
      ar = [a + b, a];
    });
    var a = Date.now();
    for (var k = 4; k < n; k += 1) {
      rf(ar[0]);
    }
    var b = Date.now();
    data.t = b - a;
    return ar[0];
  } else return "Enter an integer greater than 0";
};

var B2 = (function (_React$Component3) {
  _inherits(B2, _React$Component3);

  function B2(props) {
    var _this3 = this;

    _classCallCheck(this, _B2);

    _get(Object.getPrototypeOf(_B2.prototype), 'constructor', this).call(this, props);

    this.blib = function (x) {
      _this3.data.p = x;
      _this3.data.q = _this3.data.fib(x);
    };

    this.st = function () {
      var x = _this3.data.fib2;
      var y = fib3();
      var z = [x, y[0], y[1]];
      console.log(z);
      return z;
    };

    this.setGroup = function (x) {
      _this3.data.group = x;
    };

    this.style8 = function (x, y, z) {
      return { backgroundColor: x, textAlign: 'left', borderColor: y, outline: 0,
        color: z, borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20 };
    };

    this.style9 = function (w, x, y, z) {
      return { display: w, backgroundColor: x, textAlign: 'left', borderColor: y, outline: 0,
        color: z, borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20 };
    };

    this.twoTimes = function () {
      _this3.data.n += 1;
      if (_this3.data.n === 3) {
        _this3.data.dsp = 'none';
        return;
      };
      alert("One more click and I'm out of here");
    };

    this.render = function () {
      console.log(_this3);
      var x = _this3.data.x;
      var g = _this3.data.g;
      var p = _this3.data.p;
      var q = _this3.data.q;
      var t = _this3.data.t;
      var increaseX = _this3.data.increaseX;
      var group = _this3.data.group;
      var groupWatch = _this3.data.groupWatch;
      var dsp = _this3.data.dsp;
      var Abackground = '#000';
      var Aborder = 'green';
      var Acolor = 'burlywood';
      var Bbackground = '#000';
      var Bborder = 'green';
      var Bcolor = 'burlywood';
      var Cbackground = '#000';
      var Cborder = 'green';
      var Ccolor = 'burlywood';
      var Sbackground = '#000';
      var Sborder = 'green';
      var Scolor = 'burlywood';
      var Ubackground = '#000';
      var Uborder = 'green';
      var Ucolor = 'burlywood';
      var Tbackground = '#000';
      var Tborder = 'green';
      var Tcolor = 'burlywood';
      var rAbackground = 'green';
      var rAborder = 'lightgreen';
      var rAcolor = 'yellow';
      var rBbackground = 'green';
      var rBborder = 'lightgreen';
      var rBcolor = 'yellow';
      var rCbackground = 'green';
      var rCborder = 'lightgreen';
      var rCcolor = 'yellow';
      var rSbackground = 'green';
      var rSborder = 'lightgreen';
      var rScolor = 'yellow';
      var cr27 = _this3.mouse[27];
      var cr270 = _this3.mouse[270];
      var cr28 = _this3.mouse[28];
      var cr37 = _this3.mouse[37];
      var cr370 = _this3.mouse[370];
      var cr38 = _this3.mouse[38];

      return _react2['default'].createElement(
        'div',
        { style: { backgroundColor: '#000', height: 2800, color: 'turquoise' } },
        _react2['default'].createElement(
          'div',
          { style: { width: '40%', marginLeft: 85, float: 'right', marginRight: 2 } },
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          'Fibonacci numbers ( [temp][1] ):',
          _react2['default'].createElement(
            'button',
            { style: _this3.style8(cr27, cr270, cr28) },
            temp[1]
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          'Value of data.x:',
          _react2['default'].createElement(
            'button',
            { style: _this3.style8(cr27, cr270, cr28), onClick: function () {
                increaseX();
              },
              onMouseEnter: function () {
                _this3.mouse[27] = 'blue', _this3.mouse[270] = 'lightblue', _this3.mouse[28] = 'yellow';
              },
              onMouseLeave: function () {
                _this3.mouse[27] = '#000', _this3.mouse[270] = 'darkred', _this3.mouse[28] = 'burlywood';
              }
            },
            x
          ),
          '**************************',
          _react2['default'].createElement(
            'h1',
            null,
            'More Fibonacci Numbers'
          ),
          _react2['default'].createElement(
            'h2',
            null,
            ' fib(',
            p,
            ') = ',
            q,
            ' '
          ),
          _react2['default'].createElement(
            Fibonacci,
            { fib: _this3.blib },
            ' '
          ),
          'Elapsed time = ',
          t,
          ' milliseconds.',
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          'The computer code is at ',
          _react2['default'].createElement(
            'a',
            { style: { color: 'red' }, href: 'https://github.com/dschalk/mobservable-react-buttons' },
            'mobservable-react-buttons'
          ),
          '**************************',
          _react2['default'].createElement(
            'h2',
            { style: { textAlign: 'center' } },
            'Rollover Buttons'
          ),
          'Current Group:',
          _react2['default'].createElement(
            'button',
            { style: _this3.style8('blue', 'lightgreen', 'red') },
            group
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'button',
            { onClick: function () {
                _this3.data.group = 'GroupA';
                _this3.data.test = true;
              },
              onMouseEnter: function () {
                if (group !== 'GroupA') {
                  _this3.data.test = false;
                  _this3.mouse.Abackground = rAbackground;
                  _this3.mouse.Aborder = rAborder;
                  _this3.mouse.Acolor = rAcolor;
                }
              },
              onMouseLeave: function () {
                if (group !== 'GroupA') {
                  _this3.data.test = true;
                  _this3.mouse.Abackground = Abackground;
                  _this3.mouse.Aborder = Aborder;
                  _this3.mouse.Acolor = Acolor;
                }
              },
              style: _this3.style8(_this3.mouse.Abackground, _this3.mouse.Aborder, _this3.mouse.Acolor) },
            'GroupA'
          ),
          _react2['default'].createElement(
            'button',
            { onClick: function () {
                _this3.data.group = 'GroupB';
                _this3.data.test = true;
              },
              onMouseEnter: function () {
                if (group !== 'GroupB') {
                  _this3.data.test = false;
                  _this3.mouse.Bbackground = rBbackground;
                  _this3.mouse.Bborder = rBborder;
                  _this3.mouse.Ncolor = rBcolor;
                }
              },
              onMouseLeave: function () {
                if (group !== 'GroupB') {
                  _this3.data.test = true;
                  _this3.mouse.Bbackground = Bbackground;
                  _this3.mouse.Bborder = Bborder;
                  _this3.mouse.Bcolor = Bcolor;
                }
              },
              style: _this3.style8(_this3.mouse.Bbackground, _this3.mouse.Bborder, _this3.mouse.Bcolor) },
            'GroupB'
          ),
          _react2['default'].createElement(
            'button',
            { onClick: function () {
                _this3.data.group = 'GroupC';
                _this3.data.test = true;
              },
              onMouseEnter: function () {
                if (group !== 'GroupC') {
                  _this3.data.test = false;
                  _this3.mouse.Cbackground = rCbackground;
                  _this3.mouse.Cborder = rCborder;
                  _this3.mouse.Ccolor = rCcolor;
                }
              },
              onMouseLeave: function () {
                if (group !== 'GroupC') {
                  _this3.data.test = true;
                  _this3.mouse.Cbackground = Cbackground;
                  _this3.mouse.Cborder = Cborder;
                  _this3.mouse.Ccolor = Ccolor;
                }
              },
              style: _this3.style8(_this3.mouse.Cbackground, _this3.mouse.Cborder, _this3.mouse.Ccolor) },
            'GroupC'
          ),
          _react2['default'].createElement(
            'button',
            { onClick: function () {
                _this3.data.group = 'solo';
                _this3.data.test = true;
              },
              onMouseEnter: function () {
                if (group !== 'solo') {
                  _this3.data.test = false;
                  _this3.mouse.Sbackground = rSbackground;
                  _this3.mouse.Sborder = rSborder;n;
                  _this3.mouse.Scolor = rScolor;
                }
              },
              onMouseLeave: function () {
                if (group !== 'solo') {
                  _this3.data.test = true;
                  _this3.mouse.Sbackground = Sbackground;
                  _this3.mouse.Sborder = Sborder;
                  _this3.mouse.Scolor = Scolor;
                }
              },
              style: _this3.style8(_this3.mouse.Sbackground, _this3.mouse.Sborder, _this3.mouse.Scolor) },
            'solo'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(GroupNew, { key: 'GroupNew', setGroup: function (x) {
              _this3.data.group = x;
            }, name: _this3.data.name }),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          'The buttons above are inter-connected with one another and with the input box. Click the buttons and enter some text to see how they interact. These are dumned-down buttons from my ',
          _react2['default'].createElement(
            'a',
            { target: ' _blank', style: { color: 'red' }, href: 'http://machinegun.ninja' },
            'Game of Score'
          ),
          ' Haskell websockets multiplayer math game. The buttons presented here demonstrate the full functionality of the rollover effects, along with some other features that don\'t come with HTML select/option forms. When the value of \'data.test\' is \'true\', data.groupWatch() automatically changes button highlighting when the value of \'data.group\' changes. When the mouse enters a button, data.test is set to \'false\' allowing the rollover effect to override \'data.groupWatch()\'.',
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          'The movement from MVC frameworks to Facebook\'s React to Mr. Weststrate\'s mobservable-React hybrid seems to portend a progression into a future hybrid not only free from Flux and its progeny, but possibly free even from React\'s \'state\' object, which at first appears to be essential. Now it could be that Facebook\'s website needs Flux, and would flounder if it were to substitue mobservable for its dispatchers, stores, state object, and Flux. My websockets-react project isn\'t handling much traffic, but it is fairly complex. The more I convert over to mobservable, the easier it gets to follow code logic and add features. I haven\'t noticed an deterioration in performance, and I suspect that it can handle heavier loads than the earlier version which held more tightly to Facebook\'s patterns.  As I move things out of the \'state\' object and into mobservable objects, I remove the associated \'setState\' code, along with the getter code, and install methods in mobservable-encapsulated objects that cause the application to take care of itself automatically. That is what I did with these buttons.',
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'button',
            { style: _this3.style9(dsp, cr38, cr370, cr38), onClick: function () {
                _this3.twoTimes();
              },
              onMouseEnter: function () {
                _this3.mouse[37] = 'blue', _this3.mouse[370] = 'lightblue', _this3.mouse[38] = 'yellow';
              },
              onMouseLeave: function () {
                _this3.mouse[37] = '#000', _this3.mouse[370] = 'darkred', _this3.mouse[38] = 'burlywood';
              }
            },
            x
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: { width: '45%', float: 'left', marginLeft: 12 } },
          _react2['default'].createElement(
            'h2',
            { style: { textAlign: 'left' } },
            'Sensitivity of Observable Functions and Methods'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'When React renders the the main component (B2), reactive functions merely mentioned in the render function are executed. The variable \'data.x\' is not involved in the method \'g\', which computes sequential Fibonacci numbers, yet incrementing x causes the next fibonacci number to be displayed. In fact, just moving the mouse pointer in or out of the \'Value of data.x" button causes the sequence to increment. You dont\'s have to click the button.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Rolling over any rollover button or entering text causes the sequence to progress, unless the rollover or text entry doesn\'t change anything. It is reassuring to see that if a rollover button is already selected, rolling over it or clicking it to select an already-selected group does not increase the Fibonacci number. That means there is no unnecessary rendering'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The line \'let g = this.data.g\' in \'render\' is all it takes to invoke this behavior. Note that \'g\' is not called and its argument is not modified (that is, not until g modifies it). Being aware of this behavior facilitates writing concise code and avoiding magical bugs. '
          ),
          'The line \'let increaseX = this.data.increaseX\' is also present in \'render()\', but rendering does not trigger its execution. The relevant difference between \'increaseX\' and \'g\' from a practical perspective is that \'g\' is defined inside of the data object but \'increaseX\' is incorporated into \'data\' externally with with the code: \'data.increaseX = ...\'. Another way of looking at this is to see that \'g\' was inside of \'data\' when it was encapsulated, but \'increaseX\' was tacked on after encapsulation. The precise explanation for this behavior can be found in the details of the code.',
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'h1',
            null,
            'More Fibonacci Numbers'
          ),
          'The 1475th number in the Fibonacci sequence is about the biggest number browsers can display.',
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          'fib(1475) = 4.992254605477766e+307  ',
          _react2['default'].createElement('br', null),
          'fib(1500) = Infinity',
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          'You might be interested in seeing how many milliseconds it takes your device to compute fib(1475) the first time, and then another couple of times. The first time after reloading is the slowest. Or maybe try 10000000. That\'s ten million. The display says "Infinity" but the mobservable function will performe ten million computations, mostly computing fib(Infinity) = Infinity or some such nonsense after it gets a little past fib(1475). A browser on modern desktop computer can perform the 10,000,000 computations in around 200 milliseconds (0.5 seconds).  ',
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          'Mobservable keeps track of state with (current / most recent) pairs (loosely speaking). If the current pair is (a,b), then my fibonacci routine sets the next one to (a+b, a). The next pair has numbers equalling (a+b+a, a+b) and so on and so forth ten million times, in 1.5 seconds. Using mobservable, I hardly had to write any code.',
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          'With mobservable, there is no need to explicitly designate subscribers, as there would be with RxJS and Bacon. The buttons shown here work fine with React\'s state and props objects left empty. You might wonder why I use React at all. Mobservable doesn\'t rely on React. Well, this code is a snippet from my websockets-react project. The complete code is available at ',
          _react2['default'].createElement(
            'a',
            { style: { color: 'red' }, href: 'https://github.com/dschalk/websockets-react' },
            'https://github.com/dschalk/websockets-react'
          ),
          '. An explanation of the project is at ',
          _react2['default'].createElement(
            'a',
            { style: { color: 'red' }, href: 'https://www.fpcomplete.com/user/dschalk/Websockets%20Game%20of%20Score' },
            'https://www.fpcomplete.com/user/dschalk/Websockets%20Game%20of%20Score'
          ),
          '. My server is a modified Haskell Wai-Websockets server. Like mobservable, it does much in a very simple and elegant manner.',
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          ' I used \'react_mixin\', but it is not necessary for the buttons. I used it to grab a React mixin out of \'node_modules\' to support autoFocus (\'autofocus\' in regular HTML).',
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'h2',
            null,
            'Unsubscribe'
          ),
          'You don\'t have to subscribe to anything, but it is easy to do something like RxJS\'s \'unsubscribe\'. After the first click, you get warned. After the second click, the button evaporates.'
        )
      );
    };

    this.mouse = mouseHandler;
    this.data = data;
  }

  var _B2 = B2;
  B2 = (0, _mobservableReact.reactiveComponent)(B2) || B2;
  return B2;
})(_react2['default'].Component);

;

reactMixin(B2.prototype, require('./node_modules/react/lib/AutoFocusMixin'));

_react2['default'].render(_react2['default'].createElement(B2, { key: 'B2' }), document.getElementById('divSix'));