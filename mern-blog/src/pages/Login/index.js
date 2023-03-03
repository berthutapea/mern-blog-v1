import React from 'react';
import { LoginBg } from '../../assets';
import { Button, Input, Gap, Link } from '../../components';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" onClick={() => navigate('/')} />
        <Gap height={100} />
        <Link title="Belum Punya Akun? Silahkan Daftar!" onClick={() => navigate('/register')} />
      </div>
    </div>
  )
}

export default Login;
