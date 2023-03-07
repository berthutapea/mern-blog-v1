import React from 'react';
import { Gap } from '../../atoms';
import './blogAdmin.scss';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';


const BlogAdmin = (props) => {
    const navigate = useNavigate();
    const { image, title, _id, onDelete } = props;
    return (
        <>
            <table className="table-admin">
                <thead>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <th className="admin-text-title">{title}</th>
                        <td><img className="admin-img" src={image} alt="post" /></td>
                        <td><p className="edit" onClick={() => navigate(`/create-blog/${_id}`)}><FaEdit /></p><p className="delete" onClick={() => onDelete(_id)}><FaTrash /></p></td>
                    </tr>
                </tbody>
                <Gap height={20} />
            </table>
        </>
    )
}

export default BlogAdmin;
