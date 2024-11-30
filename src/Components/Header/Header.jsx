// import React from 'react';
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 border-b-4 max-w-7xl mx-auto'>

            <h1 className='text-8xl font-bold '>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;