import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../assets/images/logo-64.png'
import Pattern from '../../assets/images/pattern.webp'
import { MyContext } from '../../App';
import Person2 from '@mui/icons-material/Person2';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoMdEye, IoMdHome } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import {IoShieldCheckmarkSharp} from 'react-icons/io5';
import { MenuItem,Select } from '@mui/material';

const EditUser = () => {

    const [inputIndex, setInputIndex] = useState(null)
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
    const context = useContext(MyContext)
    
    const [roleVal, setRoleVal] = useState('');
    const handleChangeRole = (event) => {
        setRoleVal(event.target.value);
    };

    useEffect(() => {
        context.setIsHideSidebarAndHeader(true);
    }, [])

    const focusInput = (index) => {
        setInputIndex(index);
    }
    return (
        <>
            <img src={Pattern} className='loginPatern' alt='img' />
            <section className='loginSection signUpSection'>

                <div className='row'>
                    

                        <div className='col-md-8 d-flex align-items-center flex-column part1 justify-content-center '>
                            <h1>TRACkEE EST UNE PLATEFORME DE GESTION DE MESSAGERIE POSTALE</h1>
                            <p>
                                Seuls les utilisateurs autorisés peuvent ajouter des nouvelles personnes dans la platerforme.
                                Notez que toutes les actions réalisées sont sauvegardés pour
                                plus de traçabilité.
                            </p>

                            <div className='w-100 mt-5'>
                                <Link to={"/"}><Button className='btn-blue btn-lg btn-big'><IoMdHome/> Retour à l'accueil</Button>
                                </Link>
                            </div>

                        </div>
                   

                    <div className='col-md-4 part2'>
                        <div className='loginBox signupBox'>
                            <div className='logo text-center'>
                                <img src={Logo} alt='img'
                                    width='60px' />

                                <h5 className='font-weight-bold'>Modifier les informations d'un utilisateur</h5>
                            </div>

                            <div className='wrapper mt-3 card border'>
                                <form>
                                <div className={`form-group mb-3 position-relative ${inputIndex === 2 && 'focus'}`}>
                                        <span className='icon'><Person2 /></span>
                                        <input type='text' className='form-control' placeholder="001"
                                            onFocus={() => focusInput(2)}
                                            onBlur={() => setInputIndex(null)}
                                        required readOnly/>
                                    </div>
                                <div className={`form-group mb-3 position-relative ${inputIndex === 0 && 'focus'}`}>
                                        <span className='icon'><Person2 /></span>
                                        <input type='text' className='form-control' placeholder='Entrez Le Nom'
                                            onFocus={() => focusInput(0)}
                                            onBlur={() => setInputIndex(null)}
                                        />
                                    </div>
                                    <div className={`form-group mb-3 position-relative ${inputIndex === 1 && 'focus'}`}>
                                        <span className='icon'><Person2 /></span>
                                        <input type='text' className='form-control' placeholder="Entrez Le Prenom de l'utilisateur"
                                            onFocus={() => focusInput(1)}
                                            onBlur={() => setInputIndex(null)}
                                            required
                                        />
                                    </div>

                                   

                                    <div className={`form-group mb-3 position-relative ${inputIndex === 3 && 'focus'}`}>
                                        <span className='icon'><RiLockPasswordFill /></span>
                                        <input type={`${isShowPassword === true ? 'text' : 'password'}`} className='form-control' placeholder="Mot de passe de l'utilisateur"
                                            onFocus={() => focusInput(3)}
                                            onBlur={() => setInputIndex(null)}
                                          required 
                                        />

                                        <span className='toggleShowPassword' onClick={() => setIsShowPassword(!isShowPassword)}>
                                            {
                                                isShowPassword === true ? <IoMdEyeOff /> :
                                                    <IoMdEye />
                                            }

                                        </span>
                                    </div>

                                    <div className={`form-group mb-3 position-relative ${inputIndex === 4 && 'focus'}`}>
                                        <span className='icon'><IoShieldCheckmarkSharp /></span>
                                        <input type={`${isShowConfirmPassword === true ? 'text' : 'password'}`} className='form-control' placeholder="Confirmez Le Mot de passe "
                                            onFocus={() => focusInput(4)}
                                            onBlur={() => setInputIndex(null)}

                                        />

                                        <span className='toggleShowPassword' onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}>
                                            {
                                                isShowPassword === true ? <IoMdEyeOff /> :
                                                    <IoMdEye />
                                            }

                                        </span>
                                    </div>
                                    <div className='form-group '>
                                            <h6>Rôle</h6>
                                            <Select
                                                value={roleVal}
                                                onChange={handleChangeRole}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100 select-input'
                                            >
                                               
                                                <MenuItem value={"COURRIER"}>COURRIER</MenuItem>
                                                <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                                                <MenuItem value={"MANAGER"}>MANAGER</MenuItem>

                                            </Select>
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
                    </div>

                </div>




            </section>
        </>
    )
}

export default EditUser 
