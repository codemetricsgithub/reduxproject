import { CREATE_CONTACT, GET_CONTACT } from '../constant/Types';

// Action creating for contact
export const addContact = (contact) => {
    return {
        type: 'CREATE_CONTACT', // just write here as striing becouse its already define in constant/types.js
        payload: contact, // Contact is as string here
    };
};

//action for editContact
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id,
});
