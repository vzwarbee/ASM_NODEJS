import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import Middleware from './middleware/middleware';

const Lab5 = () => {
  return (
   <>
     <div className="ui container grid" style={{ marginTop: '20px' }}>
      <div className="ui row">
        <div className="column eight wide">
          <h2>Song List</h2>
          <SongList />
        </div>
        <div className="column eight wide">
          <h2>Song Detail</h2>
          <SongDetail />
        </div>
      </div>
    </div>
    <hr/>
    <div className="container mt-4">
      <h2 className='text-center'>Middleware Lab</h2>
      <Middleware/>
    </div>
   </>
  );
};

export default Lab5;
