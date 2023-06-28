import './App.css';
import './style/reponsive.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './component/Layout'
import Weather from './view/Weather'
import Task from './view/Task'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}> 
          <Route index element={<Weather/>}/>
          <Route path='/task' element={<Task/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
