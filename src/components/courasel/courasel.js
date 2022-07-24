import { useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { Carousel } from 'react-bootstrap';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Pagination } from 'swiper';
// import 'swiper/css/pagination';
import { fetchItems } from '../../redux/dravelStore/dravelStore';
import Item from '../details/item';
import '../../scss/items.scss';
/* eslint-disable */
const ControlledCarousel = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.dravelReducer.items);

  // const [current, setCurrent] = useState(1);
  // const lastItem = items.length;

  useEffect(() => {
    axios
      .get('https://dravel-api.herokuapp.com/trips')
      .then((response) => {
        if (response.status === 200) {
          dispatch(fetchItems(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const handlePrevious = () => {
  //   if (current > 3) {
  //     setCurrent(current - 1);
  //   }
  // };

  // const handleNext = () => {
  //   if (current < lastItem) {
  //     setCurrent(current + 1);
  //   }
  // };
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  return (
    // <div style={{ display: 'flex' , alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
    //   <ul className='pic-previous' style={{ listStyleType: 'none', display: 'flex'}}>
    //     <li>
    //       <i
    //         className='fa fa-arrow-left'
    //         id='toggle-btn'
    //         onClick={handlePrevious}
    //       />
    //     </li>
    <div style={{ display: 'flex' }}>
      {items.slice(0, 3).map((item) => (
        // <Carousel activeIndex={index} onSelect={handleSelect}>

        <div key={item.id} className='row'>
          {/* <Carousel.Item> */}

          <Item item={item} />

          {/* </Carousel.Item> */}
        </div>

        // </Carousel>
      ))}
      ,
    </div>
    //     <li>
    //       <i
    //         className='fa fa-arrow-right'
    //         id='toggle-btn'
    //         onClick={handleNext}
    //       />
    //     </li>
    //   </ul>
    // </div>
  );
};

/* eslint-enable */
export default ControlledCarousel;
