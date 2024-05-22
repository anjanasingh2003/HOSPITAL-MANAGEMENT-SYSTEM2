import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            ZEECARE Medical Institute , Bhopal, is a 300 bedded Super Specialty
            Hospital is born of a dream. A dream that the people of Bhopal and
            Central India get the best healthcare at affordable prices. A dream
            that the best infrastructure and technology be provided to doctors
            so that they can serve patients to best of their capability. A dream
            that our people need not flee to metros for medical needs. This
            conviction inspired us to make a world class hospital in the heart
            of the country where the best infrastructure meets the best doctors
            to deliver cutting edge technology with care.
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
            ZEECARE Medical Institute is built on a sprawling lake view
            location. Bansal Hospital is designed with international accredited
            hospital infrastructure norms. It is a centrally air conditioned
            hospital to ensure optimum comfort with infection control. It’s
            central sterilization unit designed & equipped by Getinge – Sweden ,
            has Fire alarm system from Schrack Germany and Central Oxygen Supply
            Unit from Greece.
          </p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
