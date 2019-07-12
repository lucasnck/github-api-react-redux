import React from 'react'

//redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { findRepositories, changeSelectedURL } from './RepositoriesActions'
import { findCommits, clearCommits } from '../commits/CommitsActions'

//reactstrap
import { Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class Repositories extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <section id="section-repositories">
                {this.props.repositories.repositories.length > 0 &&
                    <div className="container">
                        <div className="section-content">
                            <h2>repositories</h2>
                            <ul>
                                {this.props.repositories.repositories.map((item, index) =>
                                    <li key={index}><Button color="link" onClick={(event) => { this.props.clearCommits(); this.props.findCommits(item.url) } }> <FontAwesomeIcon icon={faSearch} /> {item.name}</Button></li>
                                )}
                            </ul>
                        </div>
                    </div>
                }
            </section>
        )
    }

}

const mapStateToProps = state => ({
    repositories: state.repositories,
    commits: state.commits
})

const mapDispathToProps = dispath => bindActionCreators({
    findRepositories,
    findCommits,
    changeSelectedURL,
    clearCommits
}, dispath)

export default connect(mapStateToProps, mapDispathToProps)(Repositories)
