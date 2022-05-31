
import React, { useState, useEffect } from 'react'
import './index.scss';
import { useLocation, useNavigate } from 'react-router-dom'
import { getDetails } from "../../../request/api/api"
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import CopyBtn from '../../../components/copy-btn'

export default function Detail() {
    const location = useLocation()
    const { id } = location.state;
    const [htmlState, setHtmlState] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getDetails({ id }).then(res => {
            setHtmlState(marked.parse(res, {
                langPrefix: 'language-javascript',
                highlight: (code) => hljs.highlight(code, { language: 'javascript' }).value
            }));
            // console.log(new CopyBtn().render())
            // const preHtmlArr = document.getElementsByTagName('pre');
            // preHtmlArr.forEach(ele => {

            // })
        });
    });

    return (
        <div className='detail_wrap'>
            <div className="back" onClick={() => { navigate('/home') }}>
                <svg t="1652349580132" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="38653" width="64" height="64"><path d="M153.02144 536.576l253.44 254.1568a30.29504 30.29504 0 0 0 21.504 8.9088c8.192 0 15.872-3.1744 21.7088-9.0112 11.0592-11.0592 12.0832-28.3648 2.56-40.448l-206.1312-206.848h602.5216c16.7936 0 30.5152-13.7216 30.5152-30.6176 0-16.896-13.7216-30.6176-30.5152-30.6176H246.10304l211.1488-211.7632c6.3488-12.5952 4.4032-27.2384-5.12-36.7616-5.632-5.632-13.312-8.8064-21.6064-8.8064-9.1136 0-17.8176 3.6864-24.4736 10.3424l-16.896 16.896-46.3872 46.592-8.704 8.6016-181.0432 181.6576c-5.9392 6.0416-9.0112 14.2336-8.6016 23.2448v1.2288c-0.4096 9.0112 2.6624 17.2032 8.6016 23.2448z" fill="#888888" p-id="38654"></path></svg>
            </div>
            <div dangerouslySetInnerHTML={{ __html: htmlState }}></div>
        </div>
    )
}
