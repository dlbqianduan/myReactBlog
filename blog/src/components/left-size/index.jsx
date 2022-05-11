import React, { Component } from 'react';
import './index.scss';
import avatar from '../../assets/img/avatar.jpg';
import Nav from "../nav/index.jsx";
export default class LeftSide extends Component {
  render() {
    return (
      <div className='left_side'>
          <div className="head">
              <img src={avatar} alt="" />
              <p>前行的枫</p>
              <p>我相信我就是我，我相信明天</p>
              <p>13687966975@163.com</p>
          </div>
          <Nav></Nav>
      </div>
    )
  }
}
