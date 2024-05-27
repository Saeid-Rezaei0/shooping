import React, { useState, useContext } from 'react';
import FilterSHopin from './FilterSHopin';
import ApiContext from '../ContexApi';
function ProductList() {
    const contaxt = useContext(ApiContext)
    const {products,
        setProducts} = contaxt

  const sortProducts = (sortBy) => {
    let sortedProducts = [...products];
    if (sortBy === 'price_asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price_desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    // مرتب سازی بر اساس سایر معیارها
    // ...
    setProducts(sortedProducts);
  };

  return (
    <div>
      <FilterSHopin handleChange={(e) => sortProducts(e.target.value)} />
      {/* نمایش لیست محصولات */}
    </div>
  );
}

export default ProductList;
