import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import { Header, Footer } from '../../components';
import './mainApp.scss';

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Header />
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/create-blog/:id?">
                            <CreateBlog />
                        </Route>
                        <Route path="/detail-blog/:id">
                            <DetailBlog />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default MainApp;
