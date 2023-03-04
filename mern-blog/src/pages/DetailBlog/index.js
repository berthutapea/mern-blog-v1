import React, { useEffect, useState } from 'react';
import './detailBlog.scss';
import { Link, Gap } from '../../components';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DetailBlog = () => {
    const { id } = useParams();
    // const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => {
                console.log('err: ', err);
            })
    }, [id])

    if (data.author) {
        return (
            <div className="detail-blog-wrapper">
                 <Gap height={40} />
                <Link title="Back to Home" onClick={() => navigate('/')} />
                <img className="img-cover" src={`http://localhost:4000/${data.image}`} alt="thumb" />
                <p className="blog-title">{data.title}</p>
                <p className="blog-author">{data.author.name} - {data.createdAt}</p>
                <p className="blog-body">{data.body}</p>
                <Gap height={20} />
            </div>
        )
    }
    return <p>Loading data...</p>
}

export default DetailBlog;
