const INITIAL_STATE = {
    commits: [],
    nextPage: 1,
    url: '',
    hasEnded: false,
    loading: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'FIND_COMMITS':
            console.log("find commits", action.payload)
            return {
                ...state,
                commits: state.commits.concat(action.payload.data),
                nextPage: action.payload.nextPage,
                url: action.payload.url,
                hasEnded: action.payload.data.length == 0,
                loading: false
            }
        case 'LOAD_COMMITS':
            console.log("load commits", action.payload)
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}