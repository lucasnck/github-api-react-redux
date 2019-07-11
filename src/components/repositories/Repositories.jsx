import React from 'react'

//redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { findRepositories, changeSelectedURL } from './RepositoriesActions'
import { findCommits } from '../commits/CommitsActions'

//reactstrap
import { Button } from 'reactstrap';


class Repositories extends React.Component {

    constructor(props) {
        super(props)
        this.findRepositoryCommits = this.findRepositoryCommits.bind(this)
    }
    
    findRepositoryCommits(url) {

        console.log("hahaha", url)
        console.log(this.props.commits.nextPage)
        findCommits(url, 1)

    }

    render() {
        return (
            <section id="section-repositories">
                <div className="container">
                    <h2>repositories</h2>
                    <ul>
                        {this.props.repositories.repositories.map((item, index) =>
                            <li key={index}>{item.name} | <Button color="success" onClick={ (event) => this.props.findCommits(item.url, 1)}>View</Button></li>
                        )}
                    </ul>
                </div>
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
    changeSelectedURL
}, dispath)

export default connect(mapStateToProps, mapDispathToProps)(Repositories)
