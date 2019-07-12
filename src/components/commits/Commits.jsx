import React, { useState, useEffect } from 'react'

//redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { findCommits, loadCommits, filterCommits } from './CommitsActions'

//reactstrap
import { Button, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faStream, faComment } from '@fortawesome/free-solid-svg-icons';

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
                {this.props.commits.commits.length > 0 &&
                    <div className="container">
                        <div className="section-content">
                            <h2>commits</h2>
                            <Input placeholder="Filter ex: Adjusts"
                                onChange={this.props.filterCommits}
                                value={this.props.commits.filterCommitsTerm} />
                            <ul>
                                {this.props.filteredCommits.map((item, index) =>
                                    <li key={index}>
                                        <div className="commit-item">
                                            <div className="commit-position">
                                                {index + 1}
                                            </div>
                                            <div className="commit-informations">
                                                <div className="commit-date">
                                                    <span><FontAwesomeIcon icon={faCalendarAlt} /> {item.commit.committer.date}</span>
                                                </div>
                                                <div className="commit-sha">
                                                    <span><FontAwesomeIcon icon={faStream} /> {item.sha}</span>
                                                </div>
                                                <div className="commit-message">
                                                    <span><FontAwesomeIcon icon={faComment} /> {item.commit.message}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
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
    commits: state.commits,
    filteredCommits: filterTree(state.commits.commits, state.commits.filterCommitsTerm.toLowerCase()),
    repositories: state.repositories
})

function filterTree(array = [], indicator = '') {
    return array.filter(function iter(o) {
        return Object.keys(o).some(function (k) {
            console.log(o[k])
            if (typeof o[k] === 'string' && o[k].indexOf(indicator) !== -1) {
                return true;
            }
            if (Array.isArray(o[k])) {
                o[k] = o[k].filter(iter);
                return o[k].length;
            }
        });
    });
}

const mapDispathToProps = dispath => bindActionCreators({
    findCommits,
    loadCommits,
    filterCommits
}, dispath)

export default connect(mapStateToProps, mapDispathToProps)(Commits)
