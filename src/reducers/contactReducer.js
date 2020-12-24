import { CREATE_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from '../constant/Types';

const initialState = {
    contacts: [
        {
            id: 1,
            name: 'Default Value',
            phone: 'Default Phone',
            username: 'Bret',
            email: 'Default E-mail',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496',
                },
            },
        },
    ],
    contactedit: 'null',
};

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CONTACT:
            return {
                ...state, // this state holds previous data
                contacts: [action.payload, ...state.contacts], // here creating new contact
            };
        case GET_CONTACT:
            let arr = state.contacts.filter((contactedit) => contactedit.id == action.payload);
            arr = arr.values();
            for (let val of arr) {
                arr = val;
            }
            return {
                ...state, //holds previoud data
                contactedit: arr,
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    contact.id == action.payload.id ? action.payload : contact
                ),
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id != action.payload),
            };
        default:
            return state;
    }
};
