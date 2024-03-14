import { combineReducers } from 'redux'
import contactReducer from './contact_reducer/contact_reducer'


const rootReducer = combineReducers({
    contact: contactReducer
})

export default rootReducer