import './List.scss';
import SideBar from '../../Components/SideBar/SideBar';
import NavBar from '../../Components/NavBar/NavBar';
import DataTable from '../../Components/DataTable/DataTable.jsx';

const List = () => {
  return (
    <div className='list'>
      <SideBar />
      <div className='listContainer'>
        <NavBar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
