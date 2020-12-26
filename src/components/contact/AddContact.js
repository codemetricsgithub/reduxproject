import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import shortid from 'shortid';
import { addContact } from '../../actions/contactAction';

const AddContact = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const createContact = (event) => {
        event.preventDefault();
        // console.log(name, phone, email); //to show working or not
        const new_contact = {
            id: shortid.generate(), //Random id generate
            name: name,
            phone: phone,
            email: email,
        };
        dispatch(addContact(new_contact));
        history.push('/'); // redirect in to home page
    };
    return (
        <div className="card border-0 shadow">
            <div className="card-header ">Add a contact </div>
            <div className="card-body">
                <form onSubmit={(event) => createContact(event)}>
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
                            type="number"
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
                    <button className="btn btn-outline-primary">create contact</button>
                </form>
            </div>
        </div>
    );
};

export default AddContact;
