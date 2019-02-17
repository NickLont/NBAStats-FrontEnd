import { createBrowserHistory } from 'history'

// Router creates a history object accessible from within Components but in order to use this object outside
// Components (like in sagas) we need to create our own history and import it throughout the project
const history = createBrowserHistory()

export default history
