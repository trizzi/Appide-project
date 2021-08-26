import React from 'react';
import Driver_section from '../../driver_section_2x.jpg';
// import '../showcase/Showcase.css';

const Drive = () => {
  return (
    <div
      id='explore-section'
      className='bg-light text-dark py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img
              src={Driver_section}
              alt=''
              className='img-fluid mb-3'
            />
          </div>
          <div className='col-md-6'>
            <h3>DRIVE WITH LYFT</h3>
            <h2>
              Set your own hours. Earn on your own terms.
            </h2>
            <p>
              Maybe you’re saving up for school. Or keeping
              flexible hours to spend more time with your
              family. It’s a great time to get in the
              driver’s seat, connect with your community,
              and earn a little extra cash. Plus, you can
              tell people you’ve got the best boss in town:
              you.
            </p>
            <div className='d-flex'>
              <div className='p-4 align-self-start'>
                <i className='fas fa-check fa-2x'></i>
              </div>
              <div className='p-4 align-self-end'>
                <h5>Reliable earnings</h5>
                Make money, keep your tips, and use in-app
                tools to help maximize your earnings.
              </div>
            </div>

            <div className='d-flex'>
              <div className='p-4 align-self-start'>
                <i className='fas fa-check fa-2x'></i>
              </div>
              <div className='p-4 align-self-end'>
                <h5>A flexible schedule</h5>
                Be your own boss and drive whenever it works
                for you.
              </div>
            </div>
            <div className='d-flex'>
              <div className='p-4 align-self-start'>
                <i className='fas fa-check fa-2x'></i>
              </div>
              <div className='p-4 align-self-end'>
                <h5>Get paid promptly</h5>
                Cash out your earnings whenever you want
                with Express Pay and Lyft Direct.
              </div>
            </div>
            <div>
              <a
                href='#'
                className='btn btn-outline-secondary mt-5 pt-3 btn-lg text-white'>
                <i className='fas fa-arrow-right'></i> Apply
                to drive
              </a>
              <a
                href='#'
                className='btn btn-outline-secondary mt-5 pt-3 btn-lg text-dark'>
                <i className='fas fa-arrow-right'></i> Sign
                up to ride
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drive;
