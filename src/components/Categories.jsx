import React from 'react';

function Categories({ value, onClickCategory }) {
  const categories = ['All', 'Vegetables', 'Meat', 'Sharp', 'Grill', 'Closed'];

  // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, idx) => (
          <li
            key={idx}
            onClick={() => onClickCategory(idx)}
            className={value === idx ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
