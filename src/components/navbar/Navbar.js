import React from 'react';
import lyft_business_pink from '../../Lyft_Business_Pink.jpg';

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-md navbar-light fixed-top py-4'
      id='main-nav'>
      <div className='container'>
        <a href='#home' className='navbar-brand'>
          <img
            src={lyft_business_pink}
            alt=''
            className='align-left'
          />
        </a>

        <input
          type='text'
          placeholder='Where are you going?'
          className='p-3'
        />
        <button
          className='navbar-toggler'
          data-toggle='collapse'
          data-target='#navbarCollapse'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarCollapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a href='#home' class='nav-link'>
                Driver
              </a>
            </li>
            <li className='nav-item'>
              <a href='#about' class='nav-link'>
                Rider
              </a>
            </li>
            <li className='nav-item'>
              <a href='#authors' className='nav-link'>
                Business
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contact' className='nav-link'>
                Log in
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contact' className='nav-link'>
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
