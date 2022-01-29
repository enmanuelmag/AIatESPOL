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
  const [isLoading, setLoading] = React.useState();
  const [confModal, setConfModal] = React.useState();

  const onSubmit = (e) => {
    e.preventDefault();
    setError();
    setLoading(true);
    const email = e.target.email.value;
    return sendEmail({ email })
      .then(() => {
        setConfModal(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(
          'Estamos teniendo problemas al enviar el correo. Puedes contactarnos al correo ia@espol.edu.ec'
        );
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
                  {isLoading && (
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 38 38"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ed5150"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <g transform="translate(1 1)" stroke-width="2">
                          <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                          <path d="M36 18c0-9.94-8.06-18-18-18">
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 18 18"
                              to="360 18 18"
                              dur="1s"
                              repeatCount="indefinite"
                            />
                          </path>
                        </g>
                      </g>
                    </svg>
                  )}
                </Input>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Modal
        id="talk-modal"
        show={confModal}
        handleClose={() => setConfModal()}
      >
        <div>
          <p>{error ? error : 'Hemos recibido tu correo exitosamente'}</p>
        </div>
      </Modal>
    </>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
