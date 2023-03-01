import React from 'react';
import { BlogItem, Button, Gap } from '../../components';
import './home.scss';
import { useHistory } from 'react-router-dom';

const Home = () => {
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
