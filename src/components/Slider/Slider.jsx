import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React from "react";
import { TextBlockTitle } from "../../elements/TextBlock/TextBlock";
import s from "./Slider.module.css";
const SliderComponent = props => {
  return (
    <div className={s.container}>
      <CarouselProvider
        className={s.container__slider}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={props.slides.length}
        isPlaying={true}
        interval={3000}
        isIntrinsicHeight={true}
        infinite={true}
      >
        <Slider>
          {props.slides.map((slide, idx) => {
            return (
              <Slide index={idx} className={s.navSlider__navItem}>
                <span className={s.slider__title}>
                  <TextBlockTitle title={props.slides[idx].title} />
                </span>
                <span className={s.slider__autor}>
                  <TextBlockTitle title={props.slides[idx].autor} />
                </span>
                <DotGroup className={s.navSlider__navItem} />
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default SliderComponent;
