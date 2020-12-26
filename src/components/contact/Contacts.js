import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllcontact, deleteAllContact, selectAllContact } from '../../actions/contactAction';
import Contact from './Contact';

const Contacts = () => {
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState(false);
    const contacts = useSelector((state) => state.contact.contacts);
    //console.log(contacts);
    const selectedContacts = useSelector((state) => state.contact.selectedContacts);

    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllContact(contacts.map((contact) => contact.id)));
        } else {
            dispatch(clearAllcontact());
        }
    }, [selectAll]);

    return (
        <div>
            {selectedContacts.length > 0 ? (
                <button
                    className="btn btn-outline-danger mb-2"
                    onClick={() => dispatch(deleteAllContact())}
                >
                    Delete all
                </button>
            ) : null}
            <table className="table shadow">
                <thead className="bg-danger">
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input
                                    id="selectAll"
                                    type="checkbox"
                                    className="custom-control-input"
                                    value={selectAll}
                                    onClick={() => setSelectAll(!selectAll)}
                                />

                                <label htmlFor="selectAll" className="custom-control-label">
                                    {' '}
                                    Select All
                                </label>
                            </div>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Operations </th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <Contact contact={contact} key={contact.id} selectAll={selectAll} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Contacts;
