import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from '../elements/Modal';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

import { sendEmail } from '../../services';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );

  const [error, setError] = React.useState();
  const [confModal, setConfModal] = React.useState();

  const onSubmit = (e) => {
    e.preventDefault();
    setError();
    const email = e.target.email.value;
    return sendEmail({ email })
      .then(() => {
        setConfModal(true);
      })
      .catch((err) => {
        console.log(err)
        setError('Estamos teniendo problemas al enviar el correo. Puedes contactarnos al correo ia@espol.edu.ec');
      });
  };

  return (
    <>
      <section {...props} id="contact" className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <div className="cta-slogan">
              <h3 className="m-0">{'¿Deseas saber más?'}</h3>
              <p className="m-0 text-color-high">
                {'Puedes contactarnos a través de correo electrónico.'}
              </p>
            </div>
            <div className="cta-action">
              <form onSubmit={onSubmit}>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  label="Email"
                  labelHidden
                  hasIcon="right"
                  placeholder={'Su correo'}
                >
                  <svg
                    width="16"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
                      fill="#ED5150"
                    />
                  </svg>
                </Input>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Modal
        id="talk-modal"
        show={confModal}
        handleClose={() => setConfModal()}>
        <div>
          <p>{
            error ?
              error :
              'Hemos recibido tu correo exitosamente'
          }</p>
        </div>
      </Modal>
    </>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
