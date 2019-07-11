import React from 'react'

//redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changedUsername } from './UsernameActions'
import { findRepositories } from '../repositories/RepositoriesActions'

//reactstrap
import { Button } from 'reactstrap';

class Username extends React.Component {

    render() {
        return (
            <section id="section-username">
                <div className="container">
                    <h2>Find user on Github</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text"
                            id="username"
                            onChange={this.props.changedUsername}
                            value={this.props.username.username}
                            placeholder="Ex: lucasnck"
                            className="form-control" />
                        <Button color="link" onClick={this.props.findRepositories}>Find</Button>
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
    findRepositories
}, dispath)

export default connect(mapStateToProps, mapDispathToProps)(Username)
