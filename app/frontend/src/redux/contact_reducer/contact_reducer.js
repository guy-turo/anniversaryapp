import { ADD_CONTACT, REMOVE_CONTACT } from "./action_types"
import { contactList } from "../../components/contact/Contact"

const initialState = {
    id: null,
    fullName: "",
    phoneNumber: "",
    selected: false
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            const newId = contactList.id + 1
            const newFullName = state.fullName = action.payload.fullNameData
            const newPhoneNumber = state.phoneNumber = action.phoneNumberData
            const newSelectedContact = state.selected
            contactList.push(
                newId,
                newFullName,
                newPhoneNumber,
                newSelectedContact
            )

            return {
                ...state,
                id: newId,
                fullName: newFullName,
                phoneNumber: newPhoneNumber,
                selected: newSelectedContact
            }
        case REMOVE_CONTACT:
            const store = []
            const selectedItem = state.selected === true
            store.push(selectedItem)
            console.log(`removed contact ${store}`)
            return
        default:
            return state
    }
}

export default contactReducer