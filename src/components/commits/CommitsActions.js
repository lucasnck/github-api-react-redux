import axios from 'axios'

export function clearCommits() {
    return {
        type: 'CLEAR_COMMITS'
    }
}

export function findCommits(url, page = 1) {
    const data = axios.get(url + '/commits?page=' + page + '&per_page=20')
    console.log('data', data)
    const nextPage = page + 1
    const payload = Promise.all([
        data,
        nextPage,
        url
    ]).then(([data, nextPage, url]) => { return { data: data.data, nextPage, url } })
    return {
        type: 'FIND_COMMITS',
        payload: payload
    }
}

export function loadCommits() {
    return {
        type: 'LOAD_COMMITS'
    }
}

export function filterCommits(event) {
    console.log(event.target.value)
    return {
        type: 'FILTER_COMMITS',
        payload: event.target.value
    }
}