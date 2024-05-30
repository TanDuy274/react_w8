import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AddPostItem from '../AddPostItem';
import PostItem2 from '../PostItem2';

PostList2.propTypes = {};

function PostList2(props) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        // console.log(responseJSON);
        setPostList(responseJSON);
      } catch (error) {
        console.log('Failed to fetch post list', error.message);
      }
    }

    fetchPostList();
  }, []);

  return (
    <>
      <Routes>
        <Route
          to='/postlist2/add'
          element={<AddPostItem />}
        />
      </Routes>
      <Link to='/postlist2/add'>add</Link>
      {/* <Button
        variant='contained'
        color='success'
        component={Link}
      >
        Add
      </Button> */}
      <PostItem2 posts={postList} />
    </>
  );
}

export default PostList2;
