"use client";
import React from "react";
import { useDotButton } from "./embla/EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./embla/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import ProjectSliderCard from "./ProjectSliderCard";
import "./../components/embla/embla.css";

const ProjectSlider = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla max-w-screen-2xl">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((elem, index) => (
            <div className="embla__slide" key={index}>
              <ProjectSliderCard data={elem} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <span
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
