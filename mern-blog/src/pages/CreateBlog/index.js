import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { Button, Gap, Input, TextArea, Upload, Link } from '../../components';
import { postToApi, setForm, setImgPreview } from '../../config/redux/action';
import './createBlog.scss';

const CreateBlog = () => {
    // const { form, imgPreview } = useSelector(state => state.createBlogReducer);
    // const { title, body } = form;
    // const dispatch = useDispatch();
    // const history = useHistory();

    const onSubmit = () => {
        postToApi(form)
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        dispatch(setForm('image', file));
        dispatch(setImgPreview(URL.createObjectURL(file)))
    }
    return (
        <div className="blog-post">
            <Link title="kembali" onClick={() => history.push('/')} />
            <p className="title">Create New Blog Post</p>
            <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
            <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
            <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
            <Gap height={20} />
            <div className="button-action">
                <Button title="Save" onClick={onSubmit} />
            </div>
        </div>
    )
}

export default CreateBlog;
