import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removePost } from '../AddPostItem/PostSlice';

PostItem2.propTypes = {
  posts: PropTypes.array,
};

function PostItem2(props) {
  const { posts } = props;
  const dispatch = useDispatch();
  //   dispatch(addPostAsync(postList));
  //   const action = createPostList(posts);
  // dispatch(action);
  //   console.log(postList);

  const handlePostClick = (post, idx) => {
    const action = removePost(idx);
    dispatch(action);
    console.log(post, idx);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
            <TableCell>userId</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post, idx) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.body}</TableCell>
              <TableCell>{post.userId}</TableCell>
              <TableCell>
                <Button
                  variant='contained'
                  color='success'
                  onClick={() => handlePostClick(post, idx)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default PostItem2;
