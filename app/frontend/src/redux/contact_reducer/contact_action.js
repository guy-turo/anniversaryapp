import { ADD_CONTACT, REMOVE_CONTACT } from "./action_types"

export const addContact = (fullNameData = 'ray', phoneNumberData = '992384332', ) => {
    return {
        type: ADD_CONTACT,
        payload: { fullNameData, phoneNumberData, }
    }
}

export const removeContact = () => {
    return {
        type: REMOVE_CONTACT
    }
}