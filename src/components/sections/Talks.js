import moment from 'moment';
import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Button from '../elements/Button';
import Modal from '../elements/Modal';

import talks from '../../data/talks';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const [talksModal, setTalksModal] = useState();

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

  const sectionHeader = {
    title: 'Charlas',
    paragraph:
      'Revisa las charlas que hemos organizado y las que estamos organizando',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {talks.map((talk, idx) => (
              <div
                key={`t-${idx}`}
                className="tiles-item reveal-from-right"
                data-reveal-delay="200"
                onClick={() => setTalksModal(talk)}>
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">{talk.title}</p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">
                      {talk.speaker}
                    </span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a href="#0">
                        {'Fecha *DATE*'.replace('*DATE*', talk.date)}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="show-more-buttom" data-reveal-delay="600">
            <Button tag="a" color="primary" wideMobile>
              {'Ver más'}
            </Button>
          </div>
          {talksModal && (
            <Modal
              id="talk-modal"
              show={!!talksModal}
              handleClose={() => setTalksModal()}>
              <div className="container">
                <div className="talk-title">
                  <p>{talksModal.title}</p>
                </div>
                <div className="talk-info">
                  <div>
                    <p>{`Conferencista: ${talksModal.speaker}`}</p>
                    <p>{`Fecha: ${talksModal.date}`}</p>
                  </div>
                  <div>
                    <p>{`Modalidad: ${talksModal.mode}`}</p>
                    <p>{`Contacto: ${talksModal.contact}`}</p>
                  </div>
                </div>
                <div className="talk-description">
                  <p>{talksModal.description}</p>
                </div>
                {
                  moment().isAfter(talksModal.date) && (
                    <div className="link-meeting">
                      <Button
                        tag="a"
                        wideMobile
                        color="primary"
                        href={talksModal.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        {'Ver charla'}
                      </Button>
                    </div>
                  )
                }
              </div>
            </Modal>
          )}
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
