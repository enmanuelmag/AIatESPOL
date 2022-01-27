import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
//import Button from '../elements/Button';

import projects from '../../data/projects';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Proyectos en curso',
    paragraph: 'Conoce la lista de proyectos en los que estamos trabajando.',
  };

  return (
    <section {...props} id="projects" className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            {projects.map((project, index) => (
              <div key={`idx-${index}`} className="split-item">
                <div
                  className="split-item-content center-content-mobile reveal-from-left"
                  data-reveal-container=".split-item"
                >
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    {project.type}
                  </div>
                  <h3 className="mt-0 mb-12">{project.title}</h3>
                  <p style={{ fontSize: '18px' }} className="m-0">{project.description}</p>
                </div>
                <div
                  className={classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                >
                  <Image
                    src={project.img}
                    alt="Features split 01"
                    width={528}
                    height={396}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* <div className="show-more-buttom" data-reveal-delay="600">
            <Button tag="a" color="primary" wideMobile>
              {'Ver más'}
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
