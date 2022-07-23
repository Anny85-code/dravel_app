/* eslint-disable */
import { useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../../redux/dravelStore/dravelStore';
// import Item from '../details/item';
// import { Carousel } from 'react-bootstrap';
import ControlledCarousel from '../courasel/courasel';
import '../../scss/items.scss';
/* eslint-disable */
function ItemsConainer() {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.dravelReducer.items);
	const token = useSelector((state) => state.dravelReducer.user);
	const reload = useSelector((state) => state.dravelReducer.user);
	useEffect(() => {
		axios
			.get('https://dravel-api.herokuapp.com/trips')
			.then(function (response) {
				if (response.status === 200) {
					console.log(response.data);
					dispatch(fetchItems(response.data));
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);
	return (
    <>
      <div className='items-container'>
        <div className='items-heading'>
          <h1>LATEST DISCOVERIES</h1>
          <p>Please select a discovery</p>
        </div>
        <div className='items'>
          <div className='images'>
            < ControlledCarousel />
          </div>
        </div>
      </div>

      {/* <Carousel>
        <Carousel.Item>slide 1</Carousel.Item>
        <Carousel.Item>slide 2</Carousel.Item>
        <Carousel.Item>slide 3</Carousel.Item>
      </Carousel> */}
    </>
  );



}

export default ItemsConainer;

{/* <div class="carousel-item">
  <img src="..." alt="...">
  <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
</div> */}