import React from 'react';
import { ICDiscord, ICFacebook, ICGithub, ICInstagram, ICTelegram, ICTwitter, LogoMsn } from '../../../assets';
import './footer.scss';
import { useNavigate } from 'react-router-dom';

const Icon = ({ img }) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" onClick={() => navigate('/')} src={LogoMsn} alt="logo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTelegram} />
                    <Icon img={ICDiscord} />
                    <Icon img={ICGithub} />
                </div>
            </div>
            <div className="copyright">
                <p>© 2023 Gilbert Hutapea. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;
