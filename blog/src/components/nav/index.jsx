import React, { Component } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        const navList = [
            {
                name: '主页',
                path: '/home'
            },
            {
                name: '分类',
                path: '/categories'
            },
            {
                name: '关于',
                path: '/about'
            }
        ]
        return (
            <div className='nav_wrap'>
                {navList.map(ele => {
                    return (
                        <NavLink className="link" to={ele.path} children={ele.name} key={ele.path} />
                    )
                })}
            </div>
        )
    }
}
