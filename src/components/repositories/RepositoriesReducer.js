const INITIAL_STATE = {
    repositories: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'FIND_REPOSITORIES':
            console.log("find", action.payload.data)
            return {
                ...state, repositories: action.payload.data
            }
        default:
            return state
    }
}