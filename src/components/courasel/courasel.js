import { useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { Carousel } from 'react-bootstrap';
import { fetchItems } from '../../redux/dravelStore/dravelStore';
import Item from '../details/item';
import '../../scss/items.scss';

function ControlledCarousel() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.dravelReducer.items);

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

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <div style={{ display: 'flex' }}>
      {items.slice(0, 3).map((item) => (
        // <Carousel activeIndex={index} onSelect={handleSelect}>

        <div key={item.id} className="row">
          {/* <Carousel.Item> */}
          <div>
            <Item item={item} />

          </div>
          {/* </Carousel.Item> */}

        </div>

        // </Carousel>
      ))}
      ,
    </div>
  );
}

export default ControlledCarousel;

// render(<ControlledCarousel />);

//  <div className='items-container'>
//    <div className='items-heading'>
//      <h1>LATEST DISCOVERIES</h1>
//      <p>Please select a discovery</p>
//    </div>
//    <div className='items'>
//      <div className='images'>
//        {/* <div class="carousel-item"> */}
//        <div className='row'>
//          {
//            /* eslint-disable */
//            items.slice(0, 3).map((item) => (
//              // <Carousel>
//              <div className='col-md-4 col-sm-6'>
//                <Link key={item.id} to='/details' state={{ item }}>
//                  {/* <Carousel.Item> */}
//                  <Item item={item} />
//                  {/* </Carousel.Item> */}
//                </Link>
//              </div>
//              // </Carousel>
//            ))
//          }
//        </div>
//        {/* </div> */}
//      </div>
//    </div>
//  </div>;
