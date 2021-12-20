import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { useCallback, useEffect, useState } from "react";

import Slide from "@/components/Slide";
import styles from "./Hero.module.scss";

const slideData: {
  slideBackgroundImage: string;
  slideName: string;
}[] = [
  {
    slideBackgroundImage: "/img/viniles.jpg",
    slideName: "Discos y viniles",
  },
  {
    slideBackgroundImage: "/img/camisas.jpg",
    slideName: "Sudaderas y camisas",
  },
  {
    slideBackgroundImage: "/img/accesorios.jpg",
    slideName: "Accesorios",
  },
  {
    slideBackgroundImage: "/img/tazas.jpg",
    slideName: "Tazas",
  },
  {
    slideBackgroundImage: "/img/libros.jpg",
    slideName: "Mangas y libros",
  },
];

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className={styles["hero"]}>
      <div className={styles["hero__viewport"]} ref={emblaRef}>
        <div className={styles["hero__container"]}>
          {slideData.map((slide, idx) => (
            <Slide slideBackgroundImage={slide.slideBackgroundImage} slideName={slide.slideName} key={idx} />
          ))}
        </div>
      </div>
      <IconButton className={`${styles["hero__change-slide-button"]} ${styles["hero__prev-button"]}`} onClick={scrollPrev} disabled={!prevBtnEnabled}>
        <ArrowBackIosNew />
      </IconButton>
      <IconButton className={`${styles["hero__change-slide-button"]} ${styles["hero__next-button"]}`} onClick={scrollNext} disabled={!nextBtnEnabled}>
        <ArrowForwardIos />
      </IconButton>
    </section>
  );
};

export default Hero;
