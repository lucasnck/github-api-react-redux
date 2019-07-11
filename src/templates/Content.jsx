import React, { Component } from 'react'

class Content extends Component {
    render() {
        const Content = this.props.content;
        return (
            <div className="content">
                <Content />
            </div>
        )
    }
}

export default Content