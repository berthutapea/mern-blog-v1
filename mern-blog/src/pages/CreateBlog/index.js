import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom';
import { Button, Gap, Input, TextArea, Upload, Link } from '../../components';
import { postToApi, setForm, setImgPreview } from '../../config/redux/action';
import './createBlog.scss';
import Axios from 'axios';

const CreateBlog = (props) => {
    const { form, imgPreview } = useSelector(state => state.createBlogReducer);
    const { title, body } = form;
    const [isUpdate, setIsUpdate] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        console.log('params: ', props)
        const id = props.match.params.id;
        if (id) {
            setIsUpdate(true);
            Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
                .then(res => {
                    const data = res.data.data;
                    console.log('res: ', data);
                })
                .catch(err => {
                    console.log('err: ', err);
                })
        }
    }, [props])

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

export default withRouter(CreateBlog);
