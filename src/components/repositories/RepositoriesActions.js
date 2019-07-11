import axios from 'axios'

export function findRepositories() {
    console.log('teste')
    const data = axios.get(`https://api.github.com/users/lucasnck/repos`)
    console.log('data', data)
    return {
        type: 'FIND_REPOSITORIES',
        payload: data
    }
}

export function changeSelectedURL(url) {
    console.log('changeSelectedURL', url)
    return {
        type: 'CHANGE_SELECTED_URL',
        payload: url

    }
}