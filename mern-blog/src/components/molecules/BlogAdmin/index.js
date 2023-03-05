import React from 'react';
import { Gap } from '../../atoms';
import './blogAdmin.scss';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';


const BlogAdmin = (props) => {
    const navigate = useNavigate();
    const { image, title, name, date, body, _id, onDelete } = props;
    return (
        <div className="Container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <p></p>
                </div>
                <div className="panel-body">
                    <table className="table-latitude">
                    <thead>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{title}</th>
                            <td><img className="admin-img" src={image} alt="post" /></td>
                            <td></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            {/* <img className="image-thumb" src={image} alt="post" /> */}
                {/* <div className="title-wrapper">
                    <p className="title">{title}</p> */}
                    {/* <div className="edit-wrapper">
                        <p className="edit" onClick={() => navigate(`/create-blog/${_id}`)}><FaEdit /></p><p className="delete" onClick={() => onDelete(_id)}><FaTrash /></p>
                    </div> */}
                {/* </div> */}
                {/* <p className="author">{name} - {date}</p> */}
                {/* <p className="body">{body}</p> */}
                <Gap height={20} />
            </div>
        </div>
    )
}

export default BlogAdmin;
