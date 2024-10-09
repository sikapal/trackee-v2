import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../assets/images/logo-64.png'
import Pattern from '../../assets/images/pattern.webp'
import { MyContext } from '../../App';
import Person2 from '@mui/icons-material/Person2';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"


const Login = () => {

    const [inputIndex, setInputIndex] = useState(null)
    const[isShowPassword, setIsShowPassword] = useState(false);
    const context = useContext(MyContext)

    useEffect(() => {
             context.setIsHideSidebarAndHeader(true);
    }, [])

    const focusInput = (index) => {
        setInputIndex(index);
    }
    return (
        <>
            <img src={Pattern} className='loginPatern' alt='img' />
            <section className='loginSection'>
                <div className='loginBox'>
                    <div className='logo text-center'>
                        <img src={Logo} alt='img'
                            width='60px' />

                        <h5 className='font-weight-bold'>Connectez-vous sur Trackee</h5>
                    </div>

                    <div className='wrapper mt-3 card border'>
                        <form>
                            <div className={`form-group mb-3 position-relative ${inputIndex === 0 && 'focus'}`}>
                                <span className='icon'><Person2 /></span>
                                <input type='text' className='form-control' placeholder='Entrez votre Matricule'
                                    onFocus={() => focusInput(0)}
                                    onBlur={() => setInputIndex(null)}
                                />
                            </div>

                            <div className={`form-group mb-3 position-relative ${inputIndex === 1 && 'focus'}`}>
                                <span className='icon'><RiLockPasswordFill /></span>
                                <input type={`${isShowPassword===true ? 'text' : 'password'}`} className='form-control' placeholder='Entrez votre Mot de passe'
                                    onFocus={() => focusInput(1)}
                                    onBlur={() => setInputIndex(null)}

                                />

                                <span className='toggleShowPassword' onClick={()=>setIsShowPassword(!isShowPassword)}> 
                                    {
                                        isShowPassword===true ?  <IoMdEyeOff/>  : 
                                        <IoMdEye/>
                                    }
                                   
                                </span>
                            </div>

                            <div className='form-group'>
                                <Button className="btn-blue btn-lg w-100 btn-big mt-3">
                                    CONNECTEZ-VOUS
                                </Button>

                            </div>

                            <div className='form-group text-center'>
                            <Link to={'/forget-password'} className='link'>Mot de Passe Oublié ?</Link>

                            </div>
                        </form>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Login
