import React from 'react';
import classNames from 'classnames';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="#home">{('Nosotros')}</a>
        </li>
        <li>
          <a href="#projects">{("Proyectos")}</a>
        </li>
        <li>
          <a href="#talks">{('Charlas')}</a>
        </li>
        <li>
          <a href="#contact">{('Contacto')}</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;