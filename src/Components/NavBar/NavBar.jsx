import './navBar.scss';
import SearchIcon from '@mui/icons-material/Search';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LinkIcon from '@mui/icons-material/Link';
import SmsIcon from '@mui/icons-material/Sms';
import ListIcon from '@mui/icons-material/List';
import { DarkModeContext } from '../../Context/darkModeContext';
import { useContext } from 'react';

const NavBar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='navBar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <GTranslateIcon className='icon' />
            English
          </div>
          <div className='item'>
            <Brightness6Icon
              className='icon'
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>
          <div className='item'>
            <LinkIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <SmsIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListIcon className='icon' />
          </div>
          <div className='item'>
            <img
              src='https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?cs=srgb&dl=pexels-pixabay-208984.jpg&fm=jpg&_gl=1*1yt4id4*_ga*MTY2ODY5NjkxLjE2Njc3NTM2NzA.*_ga_8JE65Q40S6*MTY2Nzc1MzY3MS4xLjEuMTY2Nzc1NDA5NS4wLjAuMA..'
              alt=''
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
