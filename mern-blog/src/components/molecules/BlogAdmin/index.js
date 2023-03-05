import React from 'react';
import { Gap } from '../../atoms';
import './blogAdmin.scss';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';


const BlogAdmin = (props) => {
    const navigate = useNavigate();
    const { image, title, name, date, body, _id, onDelete } = props;
    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post" />
            <div className="content-detail">
                <div className="title-wrapper">
                    <p className="title">{title}</p>
                    <div className="edit-wrapper">
                        <p className="edit" onClick={() => navigate(`/create-blog/${_id}`)}><FaEdit /></p><p className="delete" onClick={() => onDelete(_id)}><FaTrash /></p>
                    </div>
                </div>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20} />
            </div>
        </div>
    )
}

export default BlogAdmin;
