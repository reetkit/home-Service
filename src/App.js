import { Route,Routes } from 'react-router-dom';

import RoutePage from './Pages/RoutePage/RoutePage'
import BlogPage from './Pages/BlogPage/BlogPage';
import IndiviualBlog from './Pages/BlogPage/IndiviualBlog';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={RoutePage}/>
      <Route path='/blogs' Component={BlogPage}/>
      <Route path='/blogs/blog' Component={IndiviualBlog}/>
    </Routes>
    </>
  );
}

export default App;
