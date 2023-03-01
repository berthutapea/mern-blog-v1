import React from 'react';
import { Button, Gap, Input, TextArea, Upload, Link } from '../../components';
import './createBlog.scss';
import { useHistory } from 'react-router-dom';

const CreateBlog = () => {
    const history = useHistory();
    return (
        <div className="blog-post">
            <Link title="kembali" onClick={() => history.push('/')} />
            <p className="title">Create New Blog Post</p>
            <Input label="Post Title" />
            <Upload />
            <TextArea />
            <Gap height={20} />
            <div className="button-action">
                <Button title="Save" />
            </div>
        </div>
    )
}

export default CreateBlog;
