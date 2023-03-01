// import React, { useEffect } from 'react';
import { BlogItem, Button, Gap } from '../../components';
import './home.scss';
import { useHistory } from 'react-router-dom';
// import { Axios } from 'axios';

const Home = () => {
  // useEffect(() => {
  //   Axios.get('http://localhost:4000/v1/blog/posts')
  //     .then(result => {
  //       console.log('data API', result);
  //     })
  //     .catch(err => {
  //       console.log('error: ', err);
  //     })
  // }, [])
  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="create blog" onClick={() => history.push('/create-blog')} />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Home;
