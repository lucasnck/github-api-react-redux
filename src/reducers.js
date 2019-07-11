import { combineReducers } from 'redux'

// reducers
import UsernameReducer from './components/username/UsernameReducer'
import RepositoriesReducer from './components/repositories/RepositoriesReducer'
import CommitsReducer from './components/commits/CommitsReducer'

const reducers = combineReducers({
    username: UsernameReducer,
    repositories: RepositoriesReducer,
    commits: CommitsReducer
})

export default reducers