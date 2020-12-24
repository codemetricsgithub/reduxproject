import { DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from '../constant/Types';

// Action creating for contact
export const addContact = (contact) => {
    return {
        type: 'CREATE_CONTACT', // Action type
        payload: contact, // Payload return the data
    };
};

//action for editContact
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id,
});

//Action for update data
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
});

// Action for Delete contact
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id,
});
