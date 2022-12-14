import SideBar from '../../Components/SideBar/SideBar';
import './Home.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Widget from '../../Components/Widget/Widget';
import Featured from '../../Components/featured/Featured';
import Chart from '../../Components/chart/Chart';
import Table from '../../Components/Table/Table';

const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className='homeContainer'>
        <NavBar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <div className='charts'>
          <Featured />
          <Chart title='Last 6 Months (Revenue)' aspect={2 / 1} />
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
