import React, { Component } from 'react'
import { getDetails } from "../../request/api/api"
import { marked } from 'marked';
export default class About extends Component {
    state = {
        profile: ''
    }
    componentDidMount() {
        this.getDetails();
    }
    getDetails() {
        getDetails({ id: 'profile' }).then(res => {
            this.setState({
                profile: marked.parse(res, {
                    langPrefix: 'language-javascript'
                })
            })
        })
    }
    render() {
        const { profile } = this.state;
        return (
            <div dangerouslySetInnerHTML={{ __html: profile }}></div>
        )
    }
}
