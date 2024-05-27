import React, { useEffect, useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import SelectedCategory from "../compones/SelectedCategory"
import ApiContext from '../ContexApi';

export default function HeroSection() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const swiperRef = useRef(null); // برای دسترسی به swiper
  const context = useContext(ApiContext);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1700)}s`;
    }
  };

  const title = (
    <h4>...محصول خود را از <span style={{ color: "blue" }}>هزاران</span> محصول جستجو کنید</h4>
  );
  const desc = "ما دارای بزرگترین مجموعه محصول هستیم";
  const bannerList = [
    {
      iconName: "icofont-users-alt-4",
      text: "1.5 میلیون مشتری",
    },
    {
      iconName: "icofont-notification",
      text: "بیش از 2000 فروشنده",
    },
    {
      iconName: "icofont-globe",
      text: "هر چیزی را آنلاین بخرید",
    },
  ];

  const [searchInput, setSearchInput] = useState("");
  const { product } = context;

  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(product);
  }, [searchInput, product]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // فیلتر محصولات
    const filtered = product.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterProducts(filtered);

    if (searchTerm && swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    } else if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div className='custom-hight-100'>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='banner-section style-4'>
            <div className="container">
              <div className="banner-content">
                <div className="mb-4">{title}</div>

                <form>
                  <SelectedCategory select={"همه"} />
                  <input
                    onChange={handleSearch}
                    value={searchInput}
                    type="text"
                    name='search'
                    className='rtl customSEarch'
                    id="search"
                    placeholder='محصول خود را جستجو کنید'
                  />
                  <button type='submit'><i className="icofont-search-2"></i></button>
                </form>
                {searchInput ? "" :
                  <p className='customPElen'>{desc}</p>
                }
                <ul className='lab-ul list-item-Custom width-custom'>
                  {searchInput && filterProducts.map(product => (
                    <li key={product.id}>
                      <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='banner-section style-4 style-10'>
            <div className="container">
              <div className="banner-content">
                <div className="mb-4">
                  <h4>...بهترین ها رو  را <span className='text-\'>با </span>تجربه کنید</h4>
                </div>
                <form>
                  <SelectedCategory select={"همه"} />
                  <input
                    onChange={handleSearch}
                    value={searchInput}
                    type="text"
                    name='search'
                    className='rtl customSEarch'
                    id="search"
                    placeholder='محصول خود را جستجو کنید'
                  />
                  <button type='submit'><i className="icofont-search-2"></i></button>
                </form>
                {searchInput ? "" :
                  <p className='customPElen'>... کیفیتی عالی از همه نظر تنوع محصول</p>
                }
                <ul className='lab-ul width-custom list-item-Custom'>
                  {searchInput && filterProducts.map(product => (
                    <li key={product.id}>
                      <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* می‌توانید اسلایدهای بیشتری اضافه کنید */}
        <div className="autoplay-progress text-white" slot="container-end">
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      {searchInput ? "" :
        <div className="custom-navigation">
          <button className="custom-prev"><i className="icofont-curved-left fw-bold"></i></button>
          <button className="custom-next"><i className="icofont-rounded-right"></i></button>
        </div>
      }
    </div>
  );
}
