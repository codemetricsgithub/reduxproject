import React, { useState } from 'react';

const AddContact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="card  border-0 shadow">
            <div className="card-header text-center text-capitalize"> create your contact </div>
            <div className="card-body">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter your Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter your E-mail id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className="btn btn-outline-primary mt-2" type="submit">
                    create contact
                </button>
            </div>
        </div>
    );
};

export default AddContact;
