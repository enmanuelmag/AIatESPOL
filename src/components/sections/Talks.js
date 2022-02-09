//import moment from 'moment';
import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Button from '../elements/Button';
import Modal from '../elements/Modal';

import DateIcon from '../../assets/icons/date.svg';
import ChatIcon from '../../assets/icons/chat.svg';
import EmailIcon from '../../assets/icons/email.svg';

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
  const [videoModal, setVideoModal] = useState();

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
      'Revisa las charlas que hemos organizado y las que estamos organizando.',
  };

  return (
    <section {...props} id="talks" className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {talks.map((talk, idx) => (
              <div
                key={`t-${idx}`}
                className="tiles-item reveal-from-right"
                data-reveal-delay="200"
                onClick={() => setTalksModal(talk)}
              >
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
                      <a href="#0">{'*DATE*'.replace('*DATE*', talk.date)}</a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="show-more-buttom" data-reveal-delay="600">
            <Button tag="a" color="primary" wideMobile>
              {'Ver más'}
            </Button>
          </div> */}
          {talksModal && (
            <Modal
              id="talk-modal"
              show={!!talksModal}
              handleClose={() => setTalksModal()}
            >
              <div className="container">
                <div className="talk-title">
                  <p>{talksModal.title}</p>
                </div>
                <div>
                  <p className='talk-conf'>
                    {`Conferencista: ${talksModal.speaker}`}
                  </p>
                </div>
                <div className="talk-info">
                  <div className="talk-details">
                    <div style={{ display: 'flex' }}>
                      <img className="icon" src={DateIcon} alt="date" />
                      <p>{talksModal.date}</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <img className="icon" src={ChatIcon} alt="date" />
                      <p>{talksModal.mode}</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <img className="icon" src={EmailIcon} alt="date" />
                      <p>{talksModal.contact}</p>
                    </div>
                  </div>
                </div>
                <div className="talk-description">
                  <p>{talksModal.description}</p>
                </div>
                {talksModal.link && (
                  <div className="link-meeting">
                    <Button
                      tag="a"
                      wideMobile
                      color="primary"
                      className='button-talk'
                      onClick={() => setVideoModal(talksModal.link)}
                      //href={talksModal.link}
                      //target="_blank"
                      //rel="noopener noreferrer"
                    >
                      {'Ver charla'}
                    </Button>
                  </div>
                )}
                {talksModal.inscription && (
                  <div className="link-meeting">
                    <Button
                      tag="a"
                      wideMobile
                      color="primary"
                      className='button-talk'
                      href={talksModal.inscription}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {'Inscribirse'}
                    </Button>
                  </div>
                )}
              </div>
            </Modal>
          )}
          {videoModal && (
            <Modal
              id="video-modal"
              show={!!videoModal}
              handleClose={() => setVideoModal()}
              video={videoModal}
              videoTag="iframe" />
          )}
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
