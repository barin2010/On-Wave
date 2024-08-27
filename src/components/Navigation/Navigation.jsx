import React from 'react';
import css from './Navigation.module.css';
import logoMob from '../../images/navigation/logo_mob.svg';

const Navigation = () => {
  return (
    <section className={css.navigation}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.logoMob}>
            <img src={logoMob} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
