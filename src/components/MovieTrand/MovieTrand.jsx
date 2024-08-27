import { Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./MovieTrand.module.css";
import { useSelector } from "react-redux";
import { selectTrand } from "../../redux/movies/selectors.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

export default function MovieTrand() {
  const locationListMovie = useLocation();
  const selectTrandMov = useSelector(selectTrand);

  return (
    <div className={css.containerTrand}>
      <h3 className={css.title}>Trending today</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={4}
        navigation={{
          nextEl: `.${css.swiperButtonNext}`,
          prevEl: `.${css.swiperButtonPrev}`,
        }}
        pagination={{ clickable: true }}
        loop={true}>
        {selectTrandMov.map(elem => (
          <SwiperSlide key={nanoid()}>
            <Link
              to={`/movies/${elem.id}`}
              state={locationListMovie}
              className={css.link}>
              <div className={css.trendingContent}>
                <img
                  className={css.imageTrending}
                  src={`https://image.tmdb.org/t/p/w500${elem.backdrop_path}`}
                  alt="movie"
                />
                <p className={css.titleMovie}>{elem.title}</p>
                <div className={css.overlay}></div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div className={`${css.swiperButtonPrev} swiper-button-prev`}></div>
        <div className={`${css.swiperButtonNext} swiper-button-next`}></div>
      </Swiper>
    </div>
  );
}
