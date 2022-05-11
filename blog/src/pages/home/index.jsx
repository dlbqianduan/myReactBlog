import React, { Component } from 'react'
import './index.scss';
export default class Home extends Component {
    render() {
        const list = [
            {
                title: '哈哈哈哈',
                desc: '和法律纠纷拉升阶段了房间和法律纠纷拉升阶段了房间和法律纠纷拉升阶段了房间',
                time: '2022-05-10',
                author: '前行的枫'
            },
            {
                title: '哈哈哈哈',
                desc: '和法律纠纷拉升阶段了房间',
                time: '2022-05-10',
                author: '前行的枫'
            },
            {
                title: '哈哈哈哈',
                desc: '和法律纠纷拉升阶段了房间',
                time: '2022-05-10',
                author: '前行的枫'
            }
        ]
        return (
            <div className='home_wrap'>
                {list.map(ele => {
                    return (
                        <div className='article_list'>
                            <p className='title'>{ele.title}</p>
                            <div className='desc'>{ele.desc}</div>
                            <p><span>{ele.time}</span><span>{ele.author}</span></p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
