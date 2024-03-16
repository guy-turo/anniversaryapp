import { DELETE_CONTACT_SUCCESS, DELETE_CONTACT_FAILURE, DELETE_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, ADD_CONTACT_FAILURE, ADD_CONTACT_REQUEST, FETCH_CONTACT_FAILURE, FETCH_CONTACT_REQUEST, FETCH_CONTACT_SUCCESS, } from "./action_types"

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        //Create contact reducer
        case ADD_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ''
            }
        case ADD_CONTACT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_CONTACT_FAILURE:
            return {
                ...state,
                loading: false,
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
            //Delete contact
        case DELETE_CONTACT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case DELETE_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ''
            }
        case DELETE_CONTACT_FAILURE:
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