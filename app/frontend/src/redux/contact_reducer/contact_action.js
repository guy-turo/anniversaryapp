import { UPDATE_CONTACT_FAILURE, UPDATE_CONTACT_REQUEST, UPDATE_CONTACT_SUCCESS, DELETE_CONTACT_FAILURE, DELETE_CONTACT_SUCCESS, DELETE_CONTACT_REQUEST, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, ADD_CONTACT_FAILURE, FETCH_CONTACT_REQUEST, FETCH_CONTACT_SUCCESS, FETCH_CONTACT_FAILURE } from "./action_types"
import axios from 'axios'

//Create contact
export const addContactRequest = () => {
    return {
        type: ADD_CONTACT_REQUEST
    }
}
export const addContactSuccess = () => {
    return {
        type: ADD_CONTACT_SUCCESS,
    }
}
export const addContactFailure = () => {
    return {
        type: ADD_CONTACT_FAILURE,
    }
}

export const addContact = (fullNameData, emailAddressData) => {
        const uri = 'http://localhost:8000/api/v1/contact/addContact'
        return (dispatch) => {
            dispatch(addContactRequest)
            axios.post(
                    uri, {
                        "fullName": fullNameData,
                        "emailAddress": emailAddressData,
                    },
                )
                .then((result) => {
                    //const data = result.data
                    dispatch(addContactSuccess)
                })
                .catch((error) => {
                    // const msg = error.message
                    dispatch(addContactFailure)
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
            dispatch(fetchContactRequest)
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
    // Delete contact

export const deleteContactRequest = () => {
    return {
        type: DELETE_CONTACT_REQUEST
    }
}
export const deleteContactSuccess = () => {
    return {
        type: DELETE_CONTACT_SUCCESS,
    }
}
export const deleteContactFailure = () => {
    return {
        type: DELETE_CONTACT_FAILURE,
    }
}
export const deleteContact = (id) => {
        const uri = `http://localhost:8000/api/v1/contact/${id}`
        return (dispatch) => {
            dispatch(deleteContactRequest)
            axios.delete(
                    uri,
                )
                .then((result) => {
                    //const data = result.data
                    dispatch(deleteContactSuccess)
                })
                .catch((error) => {
                    // const msg = error.message
                    dispatch(deleteContactFailure)
                })


        }
    }
    //Update contact 

export const updateContactRequest = () => {
    return {
        type: UPDATE_CONTACT_REQUEST
    }
}
export const updateContactSuccess = () => {
    return {
        type: UPDATE_CONTACT_SUCCESS,
    }
}
export const updateContactFailure = () => {
    return {
        type: UPDATE_CONTACT_FAILURE,
    }
}
export const updateContact = (id, fullName, emailAddress) => {
    const uri = `http://localhost:8000/api/v1/contact/${id}`
    return (dispatch) => {
        dispatch(updateContactRequest)
        axios.put(
                uri, {
                    fullName: fullName,
                    emailAddress: emailAddress
                }
            )
            .then((result) => {
                //const data = result.data
                dispatch(updateContactSuccess)
            })
            .catch((error) => {
                // const msg = error.message
                dispatch(updateContactFailure)
            })


    }
}