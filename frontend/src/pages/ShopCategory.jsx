import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/Context';
import ReactPaginate from 'react-paginate';
import dropdown_icon from "../../public/Assets/dropdown_icon.png";
import Item from '../components/items/Item';
import Footer from '../components/Footer/Footer';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [pageNumber, setPageNumber] = useState(0);
  const [sortOrder, setSortOrder] = useState('lowToHigh'); 

  const productsPerPage = 8;
  const pagesVisited = pageNumber * productsPerPage;

  // Sort products based on price
  const sortedProducts = all_product
    .filter(item => props.category === item.category)
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') {
        return a.new_price - b.new_price; //low to high
      } else {
        return b.new_price - a.new_price; // High to low
      }
    });

  const displayProducts = sortedProducts
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((item, i) => (
      <Item
        key={i}
        id={item.id}
        name={item.name}
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}
      />
    ));

  const pageCount = Math.ceil(sortedProducts.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSortChange = () => {
    setSortOrder(prevOrder => (prevOrder === 'lowToHigh' ? 'highToLow' : 'lowToHigh'));
  };

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing {pagesVisited + 1}-{Math.min(pagesVisited + productsPerPage, sortedProducts.length)}</span> out of {sortedProducts.length} products
        </p>
        <div className="shopcategory-sort" onClick={handleSortChange}>
          Sort by price <img src={dropdown_icon} alt="" />
          {sortOrder === 'lowToHigh' ? ' Low to High' : ' High to Low'}
        </div>
      </div>
      <div className="shopcategory-products">
        {displayProducts}
      </div>
      
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      <Footer />
    </div>
  );
};

export default ShopCategory;
