import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ImgCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pbs.twimg.com/media/GM7MRf8boAAvpud?format=jpg&name=4096x4096"
          alt="Sajam Slam 2 Players"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pbs.twimg.com/media/GM7MSC9bgAAKB0y?format=jpg&name=4096x4096"
          alt="Sajam Slam 2 Coaches"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pbs.twimg.com/media/GIVsuwsbAAA9USv?format=jpg&name=large"
          alt="Final Bracket"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgCarousel;