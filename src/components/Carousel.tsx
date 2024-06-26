import { ReactNode, useMemo } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

type Props = {
  items: ReactNode[] | undefined;
};

export const Carousel = ({ items }: Props) => {
  const settings = useMemo<Settings>(
    () => ({
      centerMode: true,
      centerPadding: "25%",
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,

      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1500,

      dots: true,
      dotsClass: "slick-dots carousel",
      arrows: false,

      responsive: [{ breakpoint: 500, settings: { centerPadding: "15%" } }],
    }),
    []
  );

  return (
    <Slider {...settings}>
      {items?.map((item, index) => (
        <div key={index} className="px-2 pb-5">
          {item}
        </div>
      ))}
    </Slider>
  );
};
