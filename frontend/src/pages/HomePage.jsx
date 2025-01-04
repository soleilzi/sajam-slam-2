import React from 'react';
import ImgCarousel from '../components/ImgCarousel';
import SpButton from '../components/SpButton';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="p-4 justify-center">
      <div className="max-w-screen-xl mx-auto mt-2">
        <ImgCarousel />

        <div className="mt-6 flex justify-between items-center mx-auto gap-x-6">
          <div className='w-[650px] h-[400px]'>
            <iframe className='w-full h-full' src="https://player.twitch.tv/?channel=sajam&parent=localhost" allowFullScreen={true} />
          </div>

          <div className="w-[650px] h-[400px]">
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/uIebFnz9Yjw?si=_v_VT_OBfyszjSV6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className="flex justify-center items-center gap-x-8 mt-10">
          <Link to={'/about'}>
            <SpButton label="About" />
          </Link>

          <Link to={'/teams'}>
            <SpButton label="Teams" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
