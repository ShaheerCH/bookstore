import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const check = useDispatch();
  const handleClick = () => {
    check(checkStatus);
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
