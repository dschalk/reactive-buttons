'use strict'
import React from'react';
import mobservable from 'mobservable';
import {reactiveComponent} from 'mobservable-react';
let reactMixin = require('react-mixin');
export {B2};

@reactiveComponent class GroupNew extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEnter (event) {
    let group = event.target.value;
    if (group == '') {
      return
    } else {
      if( event.keyCode == 13 ) {
        this.props.data.group = group;
      }
    }
  }
  click (event) {
    let group = event.target.value;
    if (group == '') {
        return
    } else {
        this.props.data.group = group;
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

let data = mobservable.makeReactive({
  group: 'solo',
  Ahover: false,
  Afocus: false,
  Bhover: false,
  Bfocus: false,
  Chover: false,
  Cfocus: false,
  Shover: false,
  Sfocus: false,
  style1: { a: '#000', b: 'green', c: '#FFE4C4' },
  style2: { a: 'blue', b: 'skyblue', c: 'yellow' },
  fA: function() {
    if (this.Ahover || this.group === 'GroupA') {
      return this.style2;
    }
    return this.style1;
  },
  fB: function() {
    if (this.Bhover || this.group === 'GroupB') {
      return this.style2;
    }
    return this.style1;
  },
  fC: function() {
    if (this.Chover || this.group === 'GroupC') {
      return this.style2;
    }
    return this.style1;
  },
  fS: function() {
    if (this.Shover || this.group === 'solo') {
      return this.style2;
    }
    return this.style1;
  }
});

@reactiveComponent class B2 extends React.Component {
  constructor(props) {
    super(props);
    this.data = data;
  }


  style8 = (x,y,z) => {return {backgroundColor: x, textAlign: 'left', borderColor: y, outline: 0,
    color: z, borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20 }};

  render = () => {
    let group = this.data.group;
       return (
      <div style={{ backgroundColor: '#000', height: 3800, width: '100%', color: '#FFE4C4' }}>
        <br /><br /><br />
          <h1 style={{textAlign: 'center'}} >Reactive Buttons</h1>
        <div style={{width: '80%', marginLeft: 85, float: 'right', marginRight: 2, color: '#FFE4C4' }} >
          <br />
        Current Group:
      <button style={this.style8('blue', 'lightgreen', 'red')} >
        {group}
      </button>
        <br /><br />
          <button onClick={() => {
                  this.data.group = 'GroupA';
            }}
            onMouseEnter={() => {
                  this.data.Ahover = true;
            }}
            onMouseLeave={() => {
                  this.data.Ahover = false;
              }
            }
            style={this.style8(this.data.fA.a,this.data.fA.b,this.data.fA.c)} >
            GroupA
          </button>
          <button onClick={() => {
                  this.data.group = 'GroupB';
            }}
            onMouseEnter={() => {
                  this.data.Bhover = true;
            }}
            onMouseLeave={() => {
                  this.data.Bhover = false;
              }
            }
            style={this.style8(this.data.fB.a,this.data.fB.b,this.data.fB.c)} >
            GroupB
          </button>
          <button onClick={() => {
                  this.data.group = 'GroupC';
            }}
            onMouseEnter={() => {
                  this.data.Chover = true;
            }}
            onMouseLeave={() => {
                  this.data.Chover = false;
              }
            }
            style={this.style8(this.data.fC.a,this.data.fC.b,this.data.fC.c)} >
            GroupC
          </button>
          <button onClick={() => {
                  this.data.group = 'solo';
            }}
            onMouseEnter={() => {
                  this.data.Shover = true;
            }}
            onMouseLeave={() => {
                  this.data.Shover = false;
              }
            }
            style={this.style8(this.data.fS.a,this.data.fS.b,this.data.fS.c)} >
            solo
          </button>

            <br /><br />
          <GroupNew key='GroupNew' data={this.data} />
            <br /><br />

        </div>
      </div>
       )}
}
React.render(<B2 key='B2' />, document.getElementById('divSix'));
