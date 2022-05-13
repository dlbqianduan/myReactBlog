import React, { Component } from 'react';
import './index.scss';
import avatar from '../../assets/img/avatar.jpg';
import csdnIcon from '../../assets/img/csdn.ico';
import juejinIcon from '../../assets/img/juejin.png';
import Nav from "../nav/index.jsx";
export default class LeftSide extends Component {
  render() {
    return (
      <div className='left_side'>
        <div className="head">
          <img src={avatar} alt="" />
          <p>@前行的枫</p>
          <br />
          <p>☺ 我相信我就是我，我相信明天</p>
          <p>✉ 13687966975@163.com</p>
        </div>
        <Nav></Nav>
        <div className='links'>
          <a href='https://blog.csdn.net/weixin_44708870?type=blog' className="links_item" rel="noreferrer" target="_blank"><img className='icon' src={csdnIcon} alt="csdn" title='csdn' /></a>
          <a href='https://juejin.cn/user/2365804754776808' className="links_item" rel="noreferrer" target="_blank"><img className='icon' src={juejinIcon} alt="掘金" title='掘金' /></a>
        </div>
      </div>
    )
  }
}
