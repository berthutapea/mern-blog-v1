import React from 'react';
import { Button, Gap } from '../../atoms';
import './blogItem.scss';
import { useNavigate } from 'react-router-dom';
import { FiDelete, FiEdit } from 'react-icons/fi';


const BlogItem = (props) => {
    const navigate = useNavigate();
    const { image, title, name, date, body, _id, onDelete } = props;
    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post" />
            <div className="content-detail">
                <div className="title-wrapper">
                    <p className="title">{title}</p>
                    <div className="edit-wrapper">
                        <p className="edit" onClick={() => navigate(`/create-blog/${_id}`)}><FiEdit /></p><p className="delete" onClick={() => onDelete(_id)}><FiDelete /></p>
                    </div>
                </div>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => navigate(`/detail-blog/${_id}`)} />
            </div>
        </div>
    )
}

export default BlogItem;
