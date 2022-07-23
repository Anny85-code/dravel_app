/* eslint-disable */
import '../scss/nav.scss';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/dravelStore/dravelStore';
import { Link } from 'react-router-dom';

function Navigation() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser('logOUT'))
  }
  return (
    <div className="menu-container position-fixed">
      <Link to="/" className="logo">Dravel</Link>
      <ul className="menu">
        <li>
          <Link to="/myreservation">
            reservation
          </Link>
        </li>
        <li>
          <Link to="/reservation">
            Reserve
          </Link>
        </li>
        <li>
          <Link to="/add">
            Add Trip
          </Link>
        </li>
        <li>
          <Link to="/delete">
            Delete Trip
          </Link>
        </li>
        <li>
          <button  className="btn btn-warning text-white" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
      <div className="socials fixed-bottom">
        <ul>
          <li>
            <i className="fa fa-twitter" aria-hidden="true" />
          </li>
          <li>
            <i className="fa fa-facebook" aria-hidden="true" />
          </li>
          <li>
            <i className="fa fa-youtube-play" aria-hidden="true" />
          </li>
          <li>
            <i className="fa fa-google-plus" aria-hidden="true" />
          </li>
        </ul>
        <span>&copy; copyright 2022</span>
      </div>
    </div>
  );
}

export default Navigation;
