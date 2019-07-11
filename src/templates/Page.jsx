import React, { Component } from 'react'

import Header from './Header'
import Content from './Content'

class Page extends Component {

    render() {

        return (
            <React.Fragment>
                <Header />
                <Content content={this.props.content} />
            </React.Fragment>
        )
    }

}

export default Page