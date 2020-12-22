import React from 'react';
import { useSelector } from 'react-redux';
const Contacts = () => {
    const contacts = useSelector((state) => state.contacts); //if i use only state it represents whole data
    console.log(contacts);
    return (
        <div>
            <table className="table shadow">
                <thead className="bg-danger">
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contacts) => (
                        <tr>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" />
                                    <label className="custom-control-label"></label>
                                </div>
                            </td>
                            <td>{contacts.name} </td>
                            <td>{contacts.phone} </td>
                            <td>{contacts.email} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Contacts;
