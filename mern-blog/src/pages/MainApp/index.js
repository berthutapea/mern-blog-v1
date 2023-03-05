import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import { Header, Footer } from '../../components';
import './mainApp.scss';
import AdminBlog from '../AdminBlog';

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Header />
            <div className="content-wrapper">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin-blog" element={<AdminBlog />} />
                    <Route path="/create-blog/:id?" element={<CreateBlog />} />
                    <Route path="/detail-blog/:id" element={<DetailBlog />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default MainApp;
