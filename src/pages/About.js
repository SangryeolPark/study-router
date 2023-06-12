import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const About = ({ title }) => {
  // const location = useLocation();

  // let queryObj = {};
  // let query = location.search.replace('?', '');
  // query.split('&').forEach(item => {
  //   let temp = item.split('=');
  //   queryObj[temp[0]] = temp[1];
  // });
  // console.log(queryObj);

  const [searchParam, setSearchParam] = useSearchParams();

  // const [page, setPage] = useState(1);

  // const navigate = useNavigate();
  const page = searchParam.get('page');

  // useEffect(() => {
  //   const startPage = searchParam.get('page');
  //   setPage(startPage);
  // }, [searchParam]);

  useEffect(() => {
    if (isNaN(page) || page < 1) {
      searchParam.set('page', 1);
      setSearchParam(searchParam);
    }
  }, [page]);

  const goPrev = () => {
    // setPage(page - 1);
    if (page > 1) {
      searchParam.set('page', page - 1);
      setSearchParam(searchParam);
    }
  };
  const goNext = () => {
    // setPage(parseInt(page) + 1);
    searchParam.set('page', parseInt(page) + 1);
    setSearchParam(searchParam);
  };

  return (
    <div className="card card-body">
      <h2>About {title}</h2>
      <div>
        <div className="m-2">현재 페이지 : {page}</div>
        <button className="btn btn-secondary m-1" onClick={goPrev}>
          Prev
        </button>
        <button className="btn btn-secondary m-1" onClick={goNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default About;
