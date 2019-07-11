import axios from 'axios'

export function findUsername() {
    console.log('teste')
    const data = axios.get(`https://api.github.com/users/lucasnck/repos`)
    return {
        type: 'FIND_USERNAME',
        payload: data
    }
}

export function changedUsername(event) {
    console.log(event.target.value)
    return {
        type: 'CHANGED_USERNAME',
        payload: event.target.value
    }
}