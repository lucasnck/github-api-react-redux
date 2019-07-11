import axios from 'axios'

export function findCommits(url, page) {
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