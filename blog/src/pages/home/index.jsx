import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss';

function Home() {
    const navigate = useNavigate();
    const list = [
        {
            id: 1,
            title: 'Getting Started',
            desc: '和法律纠纷拉升阶段了房间和法律纠纷拉升阶段了房间和法律纠纷拉升阶段了房间和法律纠纷拉升阶段了房间和法律纠纷拉升阶段了房间和法律纠纷拉升阶段了房间',
            time: '2022-05-10',
            author: '前行的枫'
        },
        {
            id: 2,
            title: '哈哈哈哈',
            desc: '和法律纠纷拉升阶段了房间',
            time: '2022-05-10',
            author: '前行的枫'
        },
        {
            id: 3,
            title: '哈哈哈哈',
            desc: '和法律纠纷拉升阶段了房间',
            time: '2022-05-10',
            author: '前行的枫'
        },
        {
            id: 4,
            title: 'Getting Started',
            desc: '和法律纠纷拉升阶段了房间和法律纠纷拉升阶段了房间和法律纠纷拉升阶段了房间和法律纠纷拉升阶段了房间和法律纠纷拉升阶段了房间和法律纠纷拉升阶段了房间',
            time: '2022-05-10',
            author: '前行的枫'
        },
        {
            id: 5,
            title: '哈哈哈哈',
            desc: '和法律纠纷拉升阶段了房间',
            time: '2022-05-10',
            author: '前行的枫'
        },
        {
            id: 6,
            title: '哈哈哈哈',
            desc: '和法律纠纷拉升阶段了房间',
            time: '2022-05-10',
            author: '前行的枫'
        }
    ];

    return (
        <div className='home_wrap'>
            {list.map(ele => {
                return (
                    <div className='article_list' key={ele.id}>
                        <p className='title' onClick={() => navigate(`/home/detail`, { state: { id: ele.id } })}>{ele.title}</p>
                        <div className='desc'>{ele.desc}</div>
                        <p className='info'>
                            <svg t="1652323420860" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16288" width="128" height="128"><path d="M512.384 953.86c-246.953 0-447.139-200.2-447.139-447.14 0-246.943 200.186-447.138 447.139-447.138 246.944 0 447.138 200.195 447.138 447.139 0 246.94-200.194 447.139-447.138 447.139z m0-843.607c-218.962 0-396.468 177.502-396.468 396.468 0 218.962 177.506 396.467 396.468 396.467S908.85 725.683 908.85 506.721 731.346 110.253 512.384 110.253z m229.041 508.58c-6.158 13.193-21.88 18.86-35.073 12.678l-210.116-70.244c-10.05-4.693-15.645-14.9-15.08-25.334-0.127-1.056-0.612-1.933-0.612-3.02V242.658c0-14.586 11.8-26.39 26.386-26.39 14.585 0 26.385 11.804 26.385 26.39v275.727l195.409 65.35c13.217 6.184 18.885 21.88 12.701 35.098z" p-id="16289" fill="#666666"></path></svg>
                            <span className='time'>{ele.time}</span>
                            <svg t="1652323246269" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15278" width="64" height="64"><path d="M765.44 663.808A382.144 382.144 0 0 1 832 876.608v15.552a35.968 35.968 0 1 1-71.936 0v-14.592a310.464 310.464 0 0 0-46.72-161.792l52.16-51.968zM448.192 64a252.032 252.032 0 0 1 142.848 459.52c17.92 7.168 35.2 15.68 51.712 25.408l-52.928 52.992a310.656 310.656 0 0 0-140.672-33.92h-2.112l-9.984 0.192a312 312 0 0 0-300.48 296.384l-0.384 11.072v16.512a36.032 36.032 0 0 1-71.68 4.864l-0.32-4.864v-16.832A384.128 384.128 0 0 1 305.088 523.52 252.032 252.032 0 0 1 448.128 64z m318.08 429.312l50.88 50.944-347.008 347.008a48 48 0 0 1-22.272 12.608l-35.52 8.96a12.032 12.032 0 0 1-14.592-14.592l8.896-35.584a48 48 0 0 1 12.608-22.4l347.008-346.944z m93.312-59.392l16.96 16.96a24 24 0 0 1 0 33.984l-33.92 33.92-50.944-50.944 33.92-33.92a24 24 0 0 1 33.92 0zM448.192 128A191.808 191.808 0 0 0 256 319.424 191.808 191.808 0 0 0 447.04 512h2.048l9.216-0.256a191.808 191.808 0 0 0 181.632-196.8A191.808 191.808 0 0 0 448.192 128z" fill="#666666" p-id="15279"></path></svg>
                            <span>{ele.author}</span></p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;
