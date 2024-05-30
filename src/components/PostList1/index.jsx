import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import PostFiltersForm from '../PostFiltersForm';
import PostList from '../PostList';

PostList1.propTypes = {};

function PostList1(props) {
  const [postList, setPostList] = useState();
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 50,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: '',
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list', error.message);
      }
    }

    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    console.log('New page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleFilterChange(newFilters) {
    console.log('new filters:', newFilters);
    setFilters({
      ...filters,
      page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  return (
    <>
      <h2>Post List</h2>
      <PostFiltersForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default PostList1;
