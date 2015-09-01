'use strict'
import React from'react';
import mobservable from 'mobservable';
import {reactiveComponent} from 'mobservable-react';  
require('mobservable-react-devtools');
let reactMixin = require('react-mixin');
export {B2};


class GroupNew extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEnter (event) {
    let group = event.target.value;
    if (group == '') {
      return
    } else {
      if( event.keyCode == 13 ) {
        this.props.setGroup(group);
      }
    }
  }
  click (event) {
    let group = event.target.value;
    if (group == '') {
        return
    } else {
      this.props.setGroup(group);
    }
  }
  render = () => {
    if ((this.props.hidden2)) { return ( null ) }
    return (
      <div style={{marginLeft: 5}} >
        <label>Player defined group name:  <input type="text" id='cow' onKeyDown={this.handleEnter.bind(this)}
          onClick={this.click.bind(this)} style={{width: 90, backgroundColor: '#d8d17d', marginLeft: 10}} />
        </label>
      </div>
    );
  }
};

class Fibonacci extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEnter (event) {
    let num = event.target.value;
    if (event.keyCode == 13) {
      this.props.fib(num);
    }
  }
  click (event) {
    let num = event.target.value;
    if (typeof num !== 'number' || num < 0) {
      console.log('Oh boy');
      this.props.fib(7);
      return 888;
    } else this.props.fib(num)
  }

  render = () => {
    if ((this.props.hidden2)) { return ( null ) }
    return (
      <div style={{marginLeft: 5}} >
        <label>Player defined group name:  <input autoFocus type="text" id='cow' onKeyDown={this.handleEnter.bind(this)}
         style={{width: 90, backgroundColor: '#d8d17d', marginLeft: 10}} />
        </label>
      </div>
    );
  }
};

let mouseHandlerx = {
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

let mouseHandler = mobservable.makeReactive(mouseHandlerx);

let temp = [1,1];

let data = mobservable.makeReactive({
  group: 'solo',
  name: '',
  nx: [1,1],
  n: 0,
  dsp: 'inline',
  p: 0,
  t: 0,
  q: 0,
  x: 1,
  f: function([a,b]) {
    temp = [a + b,a];
    return [a + b,a];
  },
  g: function() {
    temp = this.f(temp);
    return temp;
  },
  test: true,
  groupWatch: function() {
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
    }
    else if (this.group === 'GroupB' && this.test) { 
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
    }
    else if (this.group === 'GroupC' && this.test) {
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
    }
    else if (this.group === 'solo' && this.test) {
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
    }
    else if (this.test) {
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

data.increaseX = () => {
  data.x = data.x + 1;
  return data.x;
}

let fib = (n) => {
  let ar = [2,1];
  let rf = mobservable.makeReactive(1);
  rf.observe(function(a,b) {
    ar = [a+b,a];
  });
  let a = Date.now();
  for (let k=1; k<n; k+=1) {
    rf(ar[0]);
  }
  let b = Date.now();
  data.t = b - a;
  return ar[1];
}

class B2X extends React.Component {
  // shouldComponentUpdate = shouldPureComponentUpdate;
  constructor(props) {
    super(props);
    this.mouse = mouseHandler;
    this.data = data;
}

blib = (x) => {
  this.data.p = x;
  this.data.q = fib(x);
}

st = () => {
  let x = this.data.fib2;
  let y = fib3();
  let z = [x, y[0], y[1]];
  console.log(z);
  return z;
}

  setGroup = x => {
    this.data.group = x;
  }

    style8 = (x,y,z) => {return {backgroundColor: x, textAlign: 'left', borderColor: y, outline: 0,
          color: z, borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20 }};

    style9 = (w,x,y,z) => {return {display: w, backgroundColor: x, textAlign: 'left', borderColor: y, outline: 0,
          color: z, borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20 }};

    twoTimes = () => {
      this.data.n += 1;
      if (this.data.n === 2) {
        this.data.dsp = 'none';
        return};
      alert("One more click and I'm out of here");
    }


  render = () => {
    console.log(this);
    let x = this.data.x;
    let g = this.data.g;
    let p = this.data.p;
    let q = this.data.q;
    let t = this.data.t;
    let increaseX = this.data.increaseX;
    let group = this.data.group;
    let groupWatch = this.data.groupWatch;
    let dsp = this.data.dsp;
    let Abackground = '#000';
    let Aborder = 'green';
    let Acolor = 'burlywood';
    let Bbackground = '#000';
    let Bborder = 'green';
    let Bcolor = 'burlywood';
    let Cbackground = '#000';
    let Cborder = 'green';
    let Ccolor = 'burlywood';
    let Sbackground = '#000';
    let Sborder = 'green';
    let Scolor = 'burlywood';
    let Ubackground = '#000';
    let Uborder = 'green';
    let Ucolor = 'burlywood';
    let Tbackground = '#000';
    let Tborder = 'green';
    let Tcolor = 'burlywood';
    let rAbackground = 'green';
    let rAborder = 'lightgreen';
    let rAcolor = 'yellow';
    let rBbackground = 'green';
    let rBborder = 'lightgreen';
    let rBcolor = 'yellow';
    let rCbackground = 'green';
    let rCborder = 'lightgreen';
    let rCcolor = 'yellow';
    let rSbackground = 'green';
    let rSborder = 'lightgreen';
    let rScolor = 'yellow';
    let cr27 = this.mouse[27];
    let cr270 = this.mouse[270];
    let cr28 = this.mouse[28];
    let cr37 = this.mouse[37];
    let cr370 = this.mouse[370];
    let cr38 = this.mouse[38];

    return (
      <div style={{ backgroundColor: '#000', height: 2800, color: 'turquoise' }}> 
        <div style={{width: '80%', marginLeft: 85}} >
          <br /><br /><br />

          <h2 style={{textAlign: 'center'}} >Sensitivity of Mobservable</h2>
          <br /> 
          <p>It appears that every time React renders the B2 component, reactive functions merely mentioned in the render function are executed. The variable 'data.x' is not involved in the method 'g', which computes sequential Fibonacci numbers, yet incrementing x causes the next fibonacci number to be displayed. In fact, just moving the mouse pointer in or out of the 'Value of data.x" button causes the sequence to increment. You dont's have to click the button.</p>
          <p>Rolling over any rollover button or entering text causes the sequence to progress, unless the rollover or text entry doesn't change anything. It is reassuring to see that if a rollover button is already selected, rolling over it or clicking it to select an already-selected group does not increase the Fibonacci number. That means there is no unnecessary rendering</p>
          <p>The line 'let g = this.data.g' in 'render' is all it takes to invoke this behavior. 
         Note that 'g' is not called and its argument is not modified (that is, not until g modifies it). Being aware of this behavior facilitates writing concise code and avoiding magical bugs. </p> 
          
    The line 'let increaseX = this.data.increaseX' is also present in 'render()', but rendering does not trigger its execution. The relevant difference between 'increaseX' and 'g' from a practical perspective is that 'g' is defined inside of the data object but 'increaseX' is incorporated into 'data' externally with with the code: 'data.increaseX = ...'. Another way of looking at this is to see that 'g' was inside of 'data' when it was encapsulated, but 'increaseX' was tacked on after encapsulation. The precise explanation for this behavior can be found in the details of the code.
          <br /><br />

          Fibonacci numbers ( [temp][1] ): 
          <button style={this.style8(cr27,cr270,cr28)} >
            {temp[1]}
          </button>
          <br /><br />
          Value of data.x: 
          <button style={this.style8(cr27,cr270,cr28)} onClick={() => {increaseX()}} 
            onMouseEnter={() => {this.mouse[27] = 'blue', this.mouse[270] = 'lightblue', this.mouse[28] = 'yellow'}}
            onMouseLeave={() => {this.mouse[27] = '#000', this.mouse[270] = 'darkred', this.mouse[28] = 'burlywood'}}
            >
            {x}
          </button>
********************************************************************************************************************
          
<h1>More Fibonacci Numbers</h1>
The 1475th number in the Fibonacci sequence is about the biggest number browsers can display.<br /><br />
fib(1475) = 1.3069892237633987e+308 <br />
fib(1500) = Infinity<br />
<br />

You might be interested in seeing how many milliseconds it takes your device to compute fib(1475) the first time, and then another couple of times. The first time after reloading is the slowest. Or maybe try 10000000. That's ten million. The display says "Infinity" but the mobservable function will performe ten million computations, mostly computing fib(Infinity) = Infinity or some such nonsense after it gets a little past fib(1475). A browser on modern desktop computer can perform the 10,000,000 computations in around 1500 milliseconds (1.5 seconds).  <br /><br />
Mobservable keeps track of state with (current / most recent) pairs (loosely speaking). If the current pair is (a,b), then my fibonacci routine sets the next one to (a+b, a). The next pair has numbers equalling (a+b+a, a+b) and so on and so forth ten million times, in 1.5 seconds. Using mobservable, I hardly had to write any code. 
<br /><br />
          <h2> fib({p}) = {q} </h2>
          <Fibonacci fib = {this.blib}> </Fibonacci>
          Elapsed time = {t};
          <br /><br /><br />
          The computer code is at <a style={{color: 'red'}} href="https://github.com/dschalk/mobservable-react-buttons">mobservable-react-buttons</a>
*********************************************************************************************************************
          <h2 style={{textAlign: 'center'}} >Rollover Buttons</h2>

        Current Group: 
      <button style={this.style8('blue', 'lightgreen', 'red')} >
        {group}
      </button>
        <br /><br /><br />
        The buttons below are inter-connected with one another and with the input box. Click the buttons and enter some text to see how they interact. These are dumned-down buttons from my <a target=" _blank" style={{color: 'red'}} href="http://machinegun.ninja">Game of Score</a> Haskell websockets multiplayer math game. The buttons presented here demonstrate the full functionality of the rollover effects, along with some other features that don't come with HTML select/option forms. 
        <br /><br />
          <button onClick={() => {
                  this.data.group = 'GroupA';
                  this.data.test = true;
          }}
            onMouseEnter={() => {
              if (group !== 'GroupA') {
                  this.data.test = false;
                  this.mouse.Abackground = rAbackground;
                  this.mouse.Aborder  = rAborder;
                  this.mouse.Acolor = rAcolor;
                }
              }
            }
            onMouseLeave={() => {
              if (group !== 'GroupA') {
                  this.data.test = true;
                  this.mouse.Abackground = Abackground;
                  this.mouse.Aborder  = Aborder;
                  this.mouse.Acolor = Acolor; 
                }
              }
            }
              style={this.style8(this.mouse.Abackground,this.mouse.Aborder,this.mouse.Acolor)} >
            GroupA
          </button>

          <button onClick={() => {
                  this.data.group = 'GroupB';
                  this.data.test = true;
          }}
            onMouseEnter={() => {
              if (group !== 'GroupB') {
                  this.data.test = false;
                  this.mouse.Bbackground = rBbackground;
                  this.mouse.Bborder  = rBborder;
                  this.mouse.Ncolor = rBcolor;
                }
              }
            }
            onMouseLeave={() => {
              if (group !== 'GroupB') {
                  this.data.test = true;
                  this.mouse.Bbackground = Bbackground;
                  this.mouse.Bborder  = Bborder;
                  this.mouse.Bcolor = Bcolor; 
                }
              }
            }
              style={this.style8(this.mouse.Bbackground,this.mouse.Bborder,this.mouse.Bcolor)} >
            GroupB
          </button>

          <button onClick={() => {
                  this.data.group = 'GroupC';
                  this.data.test = true;
          }}
            onMouseEnter={() => {
              if (group !== 'GroupC') {
                  this.data.test = false;
                  this.mouse.Cbackground = rCbackground;
                  this.mouse.Cborder  = rCborder;
                  this.mouse.Ccolor = rCcolor;
                }
              }
            }
            onMouseLeave={() => {
              if (group !== 'GroupC') {
                  this.data.test = true;
                  this.mouse.Cbackground = Cbackground;
                  this.mouse.Cborder  = Cborder;
                  this.mouse.Ccolor = Ccolor; 
                }
              }
            }
              style={this.style8(this.mouse.Cbackground,this.mouse.Cborder,this.mouse.Ccolor)} >
            GroupC
          </button>

          <button onClick={() => {
                  this.data.group = 'solo';
                  this.data.test = true;
          }}
            onMouseEnter={() => {
              if (group !== 'solo') {
                  this.data.test = false;
                  this.mouse.Sbackground = rSbackground;
                  this.mouse.Sborder  = rSborder;n
                  this.mouse.Scolor = rScolor;
                }
              }
            }
            onMouseLeave={() => {
              if (group !== 'solo') {
                  this.data.test = true;
                  this.mouse.Sbackground = Sbackground;
                  this.mouse.Sborder  = Sborder;
                  this.mouse.Scolor = Scolor; 
                }
              }
            }
              style={this.style8(this.mouse.Sbackground,this.mouse.Sborder,this.mouse.Scolor)} >
            solo
          </button>
          <br /><br />
          <GroupNew key='GroupNew' setGroup={(x) => {this.data.group = x }} name={this.data.name} />
          <br /><br /><br />
          When the value of 'data.test' is 'true', data.groupWatch() automatically changes button highlighting when the value of 'data.group' changes. When the mouse enters a button, data.test is set to 'false' allowing the rollover effect to override 'data.groupWatch()'. 
          <br /><br />
          The movement from MVC frameworks to Facebook's React to Mr. Weststrate's mobservable-React hybrid seems to portend a progression into a future hybrid not only free from Flux and its progeny, but possibly free even from React's 'state' object, which at first appears to be essential. Now it could be that Facebook's website needs Flux, and would flounder if it were to substitue mobservable for its dispatchers, stores, state object, and Flux. My websockets-react project isn't handling much traffic, but it is fairly complex. The more I convert over to mobservable, the easier it gets to follow code logic and add features. I haven't noticed an deterioration in performance, and I suspect that it can handle heavier loads than the earlier version which held more tightly to Facebook's patterns.  As I move things out of the 'state' object and into mobservable objects, I remove the associated 'setState' code, along with the getter code, and install methods in mobservable-encapsulated objects that cause the application to take care of itself automatically. That is what I did with these buttons. 
          <br /><br />

  With mobservable, there is no need to explicitly designate subscribers, as there would be with RxJS and Bacon. The buttons shown here work fine with React's state and props objects left empty. You might wonder why I use React at all. Mobservable doesn't rely on React. Well, this code is a snippet from my websockets-react project. The complete code is available at <a style={{color: 'red'}} href="https://github.com/dschalk/websockets-react">https://github.com/dschalk/websockets-react</a>. An explanation of the project is at <a style={{color: 'red'}} href="https://www.fpcomplete.com/user/dschalk/Websockets%20Game%20of%20Score">https://www.fpcomplete.com/user/dschalk/Websockets%20Game%20of%20Score</a>. My server is a modified Haskell Wai-Websockets server. Like mobservable, it does much in a very simple and elegant manner. 
  <br /><br /> I used 'react_mixin', but it is not necessary for the buttons. I used it to grab a React mixin out of 'node_modules' to support autoFocus ('autofocus' in regular HTML).
            <br /><br />
            <h2>Unsubscribe</h2>
 You don't have to subscribe to anything, but it is easy to do something like RxJS's 'unsubscribe'. After the first click, you get warned. After the second click, the button evaporates.

          <button style={this.style9(dsp,cr38,cr370,cr38)} onClick={() => {this.twoTimes()}} 
            onMouseEnter={() => {this.mouse[37] = 'blue', this.mouse[370] = 'lightblue', this.mouse[38] = 'yellow'}}
            onMouseLeave={() => {this.mouse[37] = '#000', this.mouse[370] = 'darkred', this.mouse[38] = 'burlywood'}}
            >
            {x}
          </button>
        </div>
  </div>
    )}
  };

reactMixin(B2X.prototype, require('./node_modules/react/lib/AutoFocusMixin'));
B2X.defaultProps = {key: 'B2X'};

let B2 = reactiveComponent(B2X);
React.render(<B2 key='B2' />, document.getElementById('divSix'));
