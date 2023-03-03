import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Gap, Input, TextArea, Upload, Link } from '../../components';
import { postToApi, setForm, setImgPreview, updateToApi } from '../../config/redux/action';
import './createBlog.scss';
import Axios from 'axios';

const CreateBlog = () => {
    const { form, imgPreview } = useSelector(state => state.createBlogReducer);
    const { title, body } = form;
    const [isUpdate, setIsUpdate] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            setIsUpdate(true);
            Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
                .then(res => {
                    const data = res.data.data;
                    console.log('res: ', data);
                    dispatch(setForm('title', data.title));
                    dispatch(setForm('body', data.body));
                    dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
                })
                .catch(err => {
                    console.log('err: ', err);
                })
        }
    }, [dispatch, id])

    const onSubmit = () => {
        if (isUpdate) {
            console.log('update data');
            updateToApi(form, id)
        } else {
            console.log('create data');
            postToApi(form)
        }
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        dispatch(setForm('image', file));
        dispatch(setImgPreview(URL.createObjectURL(file)))
    }

    return (
        <div className="blog-post">
            <Link title="kembali" onClick={() => navigate('/')} />
            <p className="title">{isUpdate ? 'Update' : 'Create New'} New Blog Post</p>
            <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
            <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
            <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
            <Gap height={20} />
            <div className="button-action">
                <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit} />
            </div>
        </div>
    )
}

export default CreateBlog;
