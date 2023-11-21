import Home from './routes/home/home.jsx';
import NavBar from './components/navigation/navigation.jsx';
import {Routes, Route, Outlet} from 'react-router-dom'

const Shop = () => {
  return <h2>Shoooop</h2>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar /> }>
      <Route  index={true} element={<Home />} />
      <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
     
  )
};

export default App;
