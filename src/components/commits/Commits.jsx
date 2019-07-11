import React, { useState, useEffect } from 'react'

//redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { findCommits, loadCommits } from './CommitsActions'

//reactstrap
import { Button } from 'reactstrap'

class Commits extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props.commits.nextPage)
        this.trackScrolling = this.trackScrolling.bind(this)
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        var commit = this
        const wrappedElement = document.getElementById('section-commits');
        if (this.isBottom(wrappedElement)) {
            if (commit.props.commits.url.length > 0) {
                if (commit.props.commits.hasEnded) {
                    document.removeEventListener('scroll', this.trackScrolling);
                } else {
                    console.log('header bottom reached');
                    this.props.loadCommits()
                    console.log("loading: ", commit.props.commits.loading)
                    this.changePage()
                }
            }
        }
    }

    changePage() {
        console.log("selectedURL: ", this.props.commits.url)
        console.log(this.props.commits.nextPage)
        this.props.findCommits(this.props.commits.url, this.props.commits.nextPage)
    }

    render() {

        return (
            <section id="section-commits">
                <div className="container">
                    <h2>commits</h2>
                    <ul>
                        {this.props.commits.commits.map((item, index) =>
                            <li key={index}>{index + 1} | <div>{item.commit.committer.date}</div> - <div>{item.sha}</div> <div>{item.commit.message}</div></li>
                        )}
                    </ul>
                </div>
            </section>
        )
    }

}

const mapStateToProps = state => ({
    commits: state.commits,
    repositories: state.repositories,
})

const mapDispathToProps = dispath => bindActionCreators({
    findCommits,
    loadCommits
}, dispath)

export default connect(mapStateToProps, mapDispathToProps)(Commits)
