import './single.scss';
import SideBar from '../../Components/SideBar/SideBar';
import NavBar from '../../Components/NavBar/NavBar';
import Chart from '../../Components/chart/Chart';
import List from '../../Components/Table/Table';

const Single = () => {
  return (
    <div className='single'>
      <SideBar />
      <div className='sigleContainer'>
        <NavBar />
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img
                src='https://images.pexels.com/photos/6424589/pexels-photo-6424589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                className='itemImage'
              />
              <div className='details'>
                <h1 className='itemTitle'>Daniel Rivas</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>danieriv@gmail.com</span>
                  <div className='detailItem'>
                    <span className='itemKey'>Phone:</span>
                    <span className='itemValue'>+34604150522</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Addres:</span>
                    <span className='itemValue'>
                      Managua calle la prosperidad 5
                    </span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Country:</span>
                    <span className='itemValue'>Spain</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title='User Spending (Last 6 Months)' />
          </div>
        </div>
        <div className='bottom'>
          <h1 className='title'>Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
