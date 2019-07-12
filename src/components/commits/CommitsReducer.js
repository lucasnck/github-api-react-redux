const INITIAL_STATE = {
    commits: [],
    nextPage: 1,
    url: '',
    hasEnded: false,
    loading: false,
    filterCommitsTerm: ''
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CLEAR_COMMITS':
            return {
                ...state,
                commits: [],
                nextPage: 1,
                url: '',
                hasEnded: false,
                loading: false,
                filterCommitsTerm: ''

            }
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
        case 'FILTER_COMMITS':
            return {
                ...state,
                filterCommitsTerm: action.payload
            }
        default:
            return state
    }
}