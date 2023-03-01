import React from 'react';
import { RegisterBg } from '../../assets';
import './detailBlog.scss';
import { useHistory } from 'react-router-dom';
import { Link, Gap } from '../../components';


const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="thumb" />
            <p className='blog-title'>Title Blog </p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est .</p>
            <Gap height={20} />
            <Link title="Kembali Ke Home" onClick={() => history.push('/')} />
        </div>
    )
}

export default DetailBlog;
