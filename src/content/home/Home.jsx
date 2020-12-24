import ArtistItem from "../../component/artistItem/ArtistItem";
import List from "../../component/list/List";
import MusicItem from "../../component/musicItem/MusicItem";
import Title from "../../component/title/Title";

import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
SwiperCore.use([EffectCoverflow]);
SwiperCore.use([Autoplay]);

const Home = ({ allArtists, allMusics }) => {
  return (
    <>
      <Title>Artists</Title>
      {allArtists && (
        <Swiper
          effect="coverflow"
          loop={true}
          spaceBetween={25}
          slidesPerView={1.4}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            992: {
              spaceBetween: 40,
              slidesPerView: 3,
            },
          }}
        >
          {allArtists?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <ArtistItem itemData={item} style={{ width: "100%" }} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      <Title>New Tracks</Title>
      <List>
        {allMusics?.map((item, index) => {
          return <MusicItem key={index} itemData={item} />;
        })}
      </List>
    </>
  );
};

export default Home;
