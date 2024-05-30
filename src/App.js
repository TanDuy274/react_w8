import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import LayOut from './components/LayOut/LayOut';
import NotFound from './components/NotFound';
import PostList1 from './components/PostList1';
import PostList2 from './components/PostList2';
import AddPostItem from './components/AddPostItem';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<LayOut />}
        >
          <Route
            path='/home'
            element={<HomePage />}
          />

          <Route
            path='/postlist1'
            element={<PostList1 />}
          />

          <Route
            path='/postlist2'
            element={<PostList2 />}
          />

          <Route
            path='/postlist2/add'
            element={<AddPostItem />}
          />

          <Route
            path='*'
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
