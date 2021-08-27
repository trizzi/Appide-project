import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div id='services'>
      <div class='container'>
        <h1 class='services'>Services</h1>
        <div class='services-carousel owl-theme'>
          <div class='services-block'>
            <i class='ion-ios-browsers-outline'></i>
            <span>UI/UX DESIGN</span>
            <p class='separator'>
              I make beautiful designs for both web and
              mobile apps.
            </p>
          </div>

          <div class='services-block'>
            <i class='ion-ios-lightbulb-outline'></i>
            <span>Front-end</span>
            <p class='separator'>
              Contact me for any job involving frontend.
              Please check the skills section to know more
              about the frameworks that I use.
            </p>
          </div>

          <div class='services-block'>
            <i class='ion-ios-color-wand-outline'></i>
            <span>Back-end</span>
            <p class='separator'>
              Contact me for any job involving backend.
              Please check the skills section to know more
              about the frameworks that I use.
            </p>
          </div>

          <div class='services-block'>
            <i class='ion-social-android-outline'></i>
            <span>Microbiology</span>
            <p class='separator'>
              I have a Bsc in Microbiology. I specilize more
              in the clinical and medical aspects of
              Microbiology but I am also grounded in Food,
              Industry and Petroleum Microbiology. Please
              check the skill section for the skills I
              acquired in this field.
            </p>
          </div>

          <div class='services-block'>
            <i class='ion-ios-camera-outline'></i>
            <span>Video Editing</span>
            <p class='separator'>
              I have knowledge in video editing and I can
              help you cover your events.
            </p>
          </div>

          <div class='services-block'>
            <i class='ion-ios-keypad-outline'></i>
            <span>Instrumentalist</span>
            <p class='separator'>
              I have been an Instrumentalist ever since I
              can remember. I play the piano, bass guiter
              and drums. I also make beats professionally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
