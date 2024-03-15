import { ADD_CONTACT_SUCCESS, ADD_CONTACT_FAILURE, ADD_CONTACT_REQUEST, FETCH_CONTACT_FAILURE, FETCH_CONTACT_REQUEST, FETCH_CONTACT_SUCCESS, } from "./action_types"

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT_SUCCESS:
            const msg = action.payload
            return {
                ...state,
                loading: false,
                data: msg,
                error: ''
            }
        case ADD_CONTACT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_CONTACT_FAILURE:
            const errMsg = action.payload
            return {
                ...state,
                loading: false,
                data: errMsg
            }
            //Fetch Contact Reducer
        case FETCH_CONTACT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_CONTACT_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default contactReducer