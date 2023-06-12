import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function App() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='carusel'>
      <Slider {...settings}>
        <a href="https://www.freekino.net/movie/2254-kung-fu-tulpor">
        <div className='hover'>
          <div className='box'>
            <img
              src='https://img.freekino.net/poster/thumb/kung-fu-tulpor_1686037926.jpg'
              alt=''
            />
          </div>
          <div className='desc'>
            <h2>Kung-Fu tulpor</h2>
            <h3>2023 FHD</h3>
          </div>
        </div>
        </a>
        <div className='hover'>
          <div className='box'>
            <img
              src='https://img.freekino.net/poster/thumb/bori-odam_1685782468.jpg'
              alt=''
            />
          </div>
          <div className='desc'>
            <h2>Bo'ri odam</h2>
            <h3>2022 FHD</h3>
          </div>
        </div>
        <div className='hover'>
          <div className='box'>
            <img
              src='https://img.freekino.net/poster/thumb/qotil-izidan-mizantrop_1685782183.jpg'
              alt=''
            />
          </div>
          <div className='desc'>
            <h2>Qotil izidan</h2>
            <h3>2023 FHD</h3>
          </div>
        </div>
        <div className='hover'>
          <div className='box'>
            <img
              src='https://img.freekino.net/poster/thumb/nafas-olma-muqaddima_1685781907.jpg'
              alt=''
            />
          </div>
          <div className='desc'>
            <h2>Nafas olma</h2>
            <h3>2022 FHD</h3>
          </div>
        </div>
        <div className='hover'>
          <div className='box'>
            <img
              src='https://img.freekino.net/poster/thumb/vikram-vedha_1685050782.jpg'
              alt=''
            />
          </div>
          <div className='desc'>
            <h2>Vikram Vedha</h2>
            <h3>2022 FHD</h3>
          </div>
        </div>
        <div className='hover'>
          <div className='box'>
            <img
              src='https://img.freekino.net/poster/thumb/olmas_1684802578.jpg'
              alt=''
            />
          </div>
          <div className='desc'>
            <h2>O'lmas</h2>
            <h3>2023 FHD</h3>
          </div>
        </div>
        <div className='hover'>
          <div className='box'>
            <img
              src='https://img.freekino.net/poster/thumb/bholaa_1684802390.jpg'
              alt=''
            />
          </div>
          <div className='desc'>
            <h2>Bholaa</h2>
            <h3>2023 FHD</h3>
          </div>
        </div>
        <div className='hover'>
          <div className='box'>
            <img
              src='https://img.freekino.net/poster/thumb/killer-ayol-ona_1684453055.jpg'
              alt=''
            />
          </div>
          <div className='desc'>
            <h2>Killer ayol</h2>
            <h3>2023 FHD</h3>
          </div>
        </div>
        <div className='hover'>
          <div className='box'>
            <img
              src='https://img.freekino.net/poster/thumb/ilayning-kitobi-eliyning-kitobi-uzbek-tilida-ozbekcha-2009-tarjima-kino-full-hd-skachat_1684452860.jpg'
              alt=''
            />
          </div>
          <div className='desc'>
            <h2>Ilayning kitobi</h2>
            <h3>2010 FHD</h3>
          </div>
        </div>
        <div className='hover'>
          <div className='box'>
            <img
              src='https://img.freekino.net/poster/thumb/qutqaruvchi-aka-fransiya-filmi-uzbek-tilida-ozbekcha-2023-tarjima-kino-full-hd-skachat_1684452682.jpg'
              alt=''
            />
          </div>
          <div className='desc'>
            <h2>Qutqaruvchi / AKA</h2>
            <h3>2023 FHD</h3>
          </div>
        </div>
        <div className='hover'>
          <div className='box'>
            <img
              src='https://img.freekino.net/poster/thumb/ahdga-sadoqat-afgonistondagi-jang_1684452488.jpg'
              alt=''
            />
          </div>
          <div className='desc'>
            <h2>Ahdga sadoqat</h2>
            <h3>2023 FHD</h3>
          </div>
        </div>
        <div className='hover'>
          <div className='box'>
            <img
              src='https://img.freekino.net/poster/thumb/asteriks-va-obeliks-xitoydagi-sarguzashtlar_1684104373.jpg'
              alt=''
            />
          </div>
          <div className='desc'>
            <h2>Asteriks va Obeliks</h2>
            <h3>2023 FHD</h3>
          </div>
        </div>
        <div className='hover'>
          <div className='box'>
            <img
              src='https://img.freekino.net/poster/thumb/yengilmas-jamoa-va-ajdar_1683141657.jpg'
              alt=''
            />
          </div>
          <div className='desc'>
            <h2>Yengilmas jamoa va ...</h2>
            <h3>2023 FHD</h3>
          </div>
        </div>
        <div className='hover'>
          <div className='box'>
            <img
              src='https://img.freekino.net/poster/thumb/maxluqlar-uyasi_1683130504.jpg'
              alt=''
            />
          </div>
          <div className='desc'>
            <h2>Maxluqlar uyasi</h2>
            <h3>2022 FHD</h3>
          </div>
        </div>
        <div className='hover'>
          <div className='box'>
            <img
              src='https://img.freekino.net/poster/thumb/selfi_1682976701.jpg'
              alt=''
            />
          </div>
          <div className='desc'>
            <h2>Selfi</h2>
            <h3>2023 FHD</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default App;
