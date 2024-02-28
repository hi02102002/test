import { useState, useEffect, useCallback } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

export const useDotButton = (emblaApi: EmblaCarouselType | undefined) => {
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

   const onDotButtonClick = useCallback(
      (index: number) => {
         if (!emblaApi) return;
         emblaApi.scrollTo(index);
      },
      [emblaApi]
   );

   const onInit = useCallback((emblaApi: EmblaCarouselType) => {
      setScrollSnaps(emblaApi.scrollSnapList());
   }, []);

   const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
   }, []);

   useEffect(() => {
      if (!emblaApi) return;

      onInit(emblaApi);
      onSelect(emblaApi);
      emblaApi.on('reInit', onInit);
      emblaApi.on('reInit', onSelect);
      emblaApi.on('select', onSelect);
   }, [emblaApi, onInit, onSelect]);

   return {
      selectedIndex,
      scrollSnaps,
      onDotButtonClick,
   };
};

export const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined) => {
   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
   const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

   const onPrevButtonClick = useCallback(() => {
      if (!emblaApi) return;
      emblaApi.scrollPrev();
   }, [emblaApi]);

   const onNextButtonClick = useCallback(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
   }, [emblaApi]);

   const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
   }, []);

   useEffect(() => {
      if (!emblaApi) return;

      onSelect(emblaApi);
      emblaApi.on('reInit', onSelect);
      emblaApi.on('select', onSelect);
   }, [emblaApi, onSelect]);

   return {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick,
   };
};
