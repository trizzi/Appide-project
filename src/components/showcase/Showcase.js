import React from 'react';
import home_hero_1_title from '../../home_hero_1_tile.jpg';
import driver_wearing_a_mask from '../../Driver_wearing_a_mask_in_the_car.jpg';
import '../showcase/Showcase.css';

const Showcase = () => {
  return (
    <div id='showcase' className='py-5'>
      <div className='primary-overlay text-dark'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 d-none d-lg-block'>
              <p className='lead text-dark '>
                READY WHEN YOU ARE
              </p>
              <h1 className='display-2 mt-1 pt-1'>
                Hop in. Crack a window. Let’s get back out
                there.
              </h1>
              <div>
                <a
                  href='#'
                  className='btn btn-outline-secondary mt-5 pt-3 btn-lg text-white'>
                  <i className='fas fa-arrow-right'></i>{' '}
                  Apply to drive
                </a>
                <a
                  href='#'
                  className='btn btn-outline-secondary mt-5 pt-3 btn-lg text-dark'>
                  <i className='fas fa-arrow-right'></i>{' '}
                  Sign up to ride
                </a>
              </div>
            </div>
            <div className='col-lg-4 '>
              <img
                src={home_hero_1_title}
                alt=''
                className='img-fluid d-none d-lg-block '
              />
              <img
                src={driver_wearing_a_mask}
                alt=''
                className='img-fluid d-none d-lg-block'
                id='img'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
