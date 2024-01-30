import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/Context';
import ReactPaginate from 'react-paginate';
import dropdown_icon from "../../public/Assets/dropdown_icon.png";
import Item from '../components/items/Item';
import Footer from '../components/Footer/Footer';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 8;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = all_product
    .filter(item => props.category === item.category)
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

  const pageCount = Math.ceil(all_product.filter(item => props.category === item.category).length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing {pagesVisited + 1}-{Math.min(pagesVisited + productsPerPage, all_product.length)}</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
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
