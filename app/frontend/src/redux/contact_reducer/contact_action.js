import { ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, ADD_CONTACT_FAILURE, FETCH_CONTACT_REQUEST, FETCH_CONTACT_SUCCESS, FETCH_CONTACT_FAILURE } from "./action_types"
import axios from 'axios'


export const addContactRequest = () => {
    return {
        type: ADD_CONTACT_REQUEST
    }
}
export const addContactSuccess = (message) => {
    return {
        type: ADD_CONTACT_SUCCESS,
        payload: message
    }
}
export const addContactFailure = (error) => {
    return {
        type: ADD_CONTACT_FAILURE,
        payload: error
    }
}

export const addContact = (fullNameData, phoneNumberData, emailAddressData) => {
        const uri = 'https://localhost:8000/api/v1/contact'
        return (dispatch) => {
            dispatch(addContactRequest)
            axios.post(uri, {
                    params: {
                        fullName: fullNameData,
                        phoneNumber: phoneNumberData,
                        emailAddress: emailAddressData,
                    }
                })
                .then((result) => {
                    const data = result.data
                    dispatch(addContactSuccess(data))
                })
                .catch((error) => {
                    const msg = error.message
                    dispatch(addContactFailure(msg))
                })


        }
    }
    //Fetch Contact information
export const fetchContactRequest = () => {
    return {
        type: FETCH_CONTACT_REQUEST,
    }
}
export const fetchContactSuccess = (contacts) => {
    return {
        type: FETCH_CONTACT_SUCCESS,
        payload: contacts
    }
}
export const fetchContactFailure = (error) => {
    return {
        type: FETCH_CONTACT_FAILURE,
        payload: error
    }
}
export const fetchContacts = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(fetchContactRequest)
        }, 1000)


        const URI = 'http://localhost:8000/api/v1/contact'
        axios.get(URI, )
            .then((response) => {
                const data = response.data
                dispatch(fetchContactSuccess(data))
            }).catch((error) => {
                console.error(error.message)
                dispatch(fetchContactFailure(error.message))
            })

    }
}