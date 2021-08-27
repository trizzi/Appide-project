import React from 'react';
import Reliable_eng from '../../reliable_eng.png';
import LyftPink_Gradient5 from '../../LyftPink_Gradient5.png';
import './phonemap.css';

const Phonemap = () => {
  return (
    <div
      id='explore-section bg'
      className='bg-light text-dark py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h5>DRIVE WITH LYFT</h5>
            <h2>
              Ready, set, go in just a few quick taps.
            </h2>
            <p>
              Whether you’re following your heart or your
              busy schedule, we’ll get you where you need to
              go
            </p>
            <div className='d-flex'>
              <button className='d-flex  btn-outline-secondary'>
                <div className='p-2 align-self-start'>
                  <i className='fas fa-check fa-2x'></i>
                </div>

                <div className='p-2 align-self-end'>
                  <a href='#'>
                    Get a reliable ride in minutes
                  </a>
                </div>
              </button>
            </div>

            <div className='d-flex'>
              <div className='p-4 align-self-start'>
                <i className='fas fa-check fa-2x'></i>
              </div>
              <div className='p-4 align-self-end'>
                <a href='#'>
                  Know that your driver is wearing a mask
                </a>
              </div>
            </div>
            <div className='d-flex'>
              <div className='p-4 align-self-start'>
                <i className='fas fa-check fa-2x'></i>
              </div>
              <div className='p-4 align-self-end'>
                <a href='#'>Shedule your ride in advance</a>
              </div>
            </div>
            <div>
              <a
                href='#'
                className='btn btn-outline-secondary mt-5 pt-3 btn-lg text-white'>
                <i className='fas fa-arrow-right'></i> Get
                ride
              </a>
            </div>
            <img
              src={LyftPink_Gradient5}
              alt=''
              className='img-fluid'
            />
            <p>
              <a href='#'>Join Lyft Pink</a> to unlock perks
              like 15% off rideshare, free Grubhub+
              membership, exclusive offers, and more. All
              for $19.99 a month. Available in the US only.
            </p>
          </div>
          <div className='col-md-6'>
            <img
              src={Reliable_eng}
              alt=''
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phonemap;
