import React from 'react';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../actions/contactAction';
const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const { name, phone, email, id } = contact;
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td>
                <Avatar className="mr-2" name={name} size="50" round="25px 10px 26px" /> {name}
            </td>
            <td>{phone} </td>
            <td>{email} </td>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`}>
                    <span className="material-icons mr-2"> edit </span>
                </Link>
                <Link to="#">
                    <span
                        className="material-icons mr-2 text-danger"
                        onClick={() => dispatch(deleteContact(id))}
                    >
                        remove_circle
                    </span>
                </Link>
            </td>
        </tr>
    );
};

export default Contact;
