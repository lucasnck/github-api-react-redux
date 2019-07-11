import React, { Component } from 'react'

import { Button, Table } from 'reactstrap';

import Username from '../components/username/Username'
import Repositories from '../components/repositories/Repositories'
import Commits from '../components/commits/Commits'

class Home extends Component {

    render() {
        return (
            <>
                <Username />
                <Repositories />
                <Commits />
            </>
        )
    }

}

export default Home