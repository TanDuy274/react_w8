import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import './AddPostItem.css';
import { addPost } from './PostSlice';

AddPostItem.propTypes = {};

function AddPostItem(props) {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();
  //   const postList = useSelector((state) => state.postList);

  const submitForm = (data) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: data.title,
        body: data.body,
        userId: data.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(addPost(json)));

    reset();
  };

  return (
    <div className='form'>
      <h1>Add post item</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <TextField
          id='outlined-basic'
          label='Title'
          variant='outlined'
          margin='normal'
          {...register('title')}
        />
        <TextField
          id='outlined-basic'
          label='Body'
          variant='outlined'
          margin='normal'
          {...register('body')}
        />
        <TextField
          id='outlined-basic'
          label='userId'
          variant='outlined'
          margin='normal'
          {...register('userId')}
        />
        <input type='submit' />
      </form>
    </div>
  );
}

export default AddPostItem;
