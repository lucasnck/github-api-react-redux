const INITIAL_STATE = { username: "lucasnck" }

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'CHANGED_USERNAME':
            return {
                ...state, username: action.payload
            }
        case 'FIND_USERNAME':
            console.log("find", state)
            return {
                ...state, repositories: action.payload
            }
        default:
            return state
    }

}