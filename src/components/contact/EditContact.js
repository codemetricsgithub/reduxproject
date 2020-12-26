import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getContact, updateContact } from '../../actions/contactAction';
import { UPDATE_CONTACT } from '../../constant/Types';

const EditContact = () => {
    let { id } = useParams(); // take given data as editable
    // alert(id);
    let history = useHistory();
    const dispatch = useDispatch();
    const contactedit = useSelector((state) => state.contact.contactedit);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (contactedit != null) {
            setName(contactedit.name);
            setPhone(contactedit.phone);
            setEmail(contactedit.email);
        }
        dispatch(getContact(id));
    }, [contactedit]);

    const onUpdateContactedit = (event) => {
        event.preventDefault();

        const update_contact = Object.assign(contactedit, {
            name: name,
            phone: phone,
            email: email,
        });
        dispatch(updateContact(UPDATE_CONTACT));
        history.push('/');
        //Object.assign(contactedit,  holds previous data while create new data
        console.log(update_contact);
    };
    return (
        <div className="card border-0 shadow">
            <div className="card-header ">Add a contact </div>
            <div className="card-body">
                <form onSubmit={(event) => onUpdateContactedit(event)}>
                    <div className="form-group mb-2 ">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            size="10"
                            className="form-control"
                            placeholder="Enter your Phone Number"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <button className="btn  btn-outline-info">update contact</button>
                </form>
            </div>
        </div>
    );
};

export default EditContact;
