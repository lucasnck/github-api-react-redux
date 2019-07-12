import React from 'react'

//redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changedUsername } from './UsernameActions'
import { findRepositories } from '../repositories/RepositoriesActions'
import { clearCommits } from '../commits/CommitsActions'

//reactstrap
import { Button, Input } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Username extends React.Component {

    render() {
        return (
            <section id="section-username">
                <div className="container">
                    <div className="section-content">
                        <h1>Find user on Github</h1>
                        <label htmlFor="username">Username</label>
                        <div className="form-group form-control-custon">
                            <Input type="text"
                                id="username"
                                onChange={this.props.changedUsername}
                                value={this.props.username.username}
                                placeholder="Ex: lucasnck" />
                            <Button color="link" onClick={(event) => { this.props.clearCommits(); this.props.findRepositories() }}><FontAwesomeIcon icon={faSearch} /> Find</Button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

const mapStateToProps = state => ({
    username: state.username
})

const mapDispathToProps = dispath => bindActionCreators({
    changedUsername,
    findRepositories,
    clearCommits
}, dispath)

export default connect(mapStateToProps, mapDispathToProps)(Username)
