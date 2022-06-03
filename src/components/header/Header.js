import React from 'react'
import './Header.css'

import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'

import { IconContext } from 'react-icons'


export function Header() {
    return (

        <div className="header">
            <div className="container">


                <img className='logo' src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="Instagram original logo" title="Instagram original logo"
                />

                <div className="input-insta">
                    <IconContext.Provider value={{ color: '#8e8e8e', size: '20px' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>

                    <input placeholder='Pesquisar' />
                    
                </div>


                <div className='icones'>
                    <IconContext.Provider value={{ size: '26px' }}>

                        <div><AiFillHome /></div>
                        <div><RiMessengerLine /></div>
                        <div><BsPlusSquare /></div>
                        <div><MdOutlineExplore /></div>
                        <div><FiHeart /></div>


                    </IconContext.Provider>

                    <img className='img-user' src='https://i.pinimg.com/564x/66/08/06/660806be37bfaadcdfb869e0894ac9b0.jpg' />

                </div>

            </div>
        </div>



    );
}