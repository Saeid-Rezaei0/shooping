import React, { useState, useContext, useEffect } from 'react';
import PageHeader from '../compones/PageHeader';
import ProductCard from './ProductCard';
import Pagenation from './Pagenation';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import ApiContext from '../ContexApi';
import Tags from './Tags';
import Map from './Map';
import ProductSlider from '../home/SliderProduct';
import LayOUT from '../LayOUT';

const shopresult = "نمایش ۰۱ - ۱۲ از ۱۳۹ نتیجه";

function Shoping() {
    scroll(420,420)
    const context = useContext(ApiContext);
    const { product } = context;
    const [Gridelist, setGridelist] = useState(true);
    const [currentpage, setcurrentpage] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectcategory, setSelectcategory] = useState("All");

    useEffect(() => {
        setFilteredProducts(product);
    }, [product]);

    useEffect(() => {
        // Update the current page to 1 whenever the filtered products change
        setcurrentpage(1);
    }, [filteredProducts]);

    const productPage = 12;
    const indexoflastproduct = currentpage * productPage;
    const indexofFirstproduct = indexoflastproduct - productPage;
    const currentproduct = filteredProducts.slice(indexofFirstproduct, indexoflastproduct);

    const pagination = (pagebumber) => {
        setcurrentpage(pagebumber);
    };

    const menuItem = ["All", ...new Set(product.map((val) => val.category))];

    const filteritem = (current) => {
        if (current === "All") {
            setFilteredProducts(product);
        } else {
            const newItem = product.filter((newVal) => newVal.category === current);
            setFilteredProducts(newItem);
        }
        setSelectcategory(current);
    };

    return (
        <LayOUT>
            <PageHeader title="صفحه محصولات" curPage="فروشگاه" />
            <div className='shop-page padding-tb'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className="shop-title d-flex flex-wrap justify-content-between rtl">
                                    <p>{shopresult}</p>
                                    <div className={`product-view-mode ${Gridelist ? "gridActive" : "listActive"}`}>
                                        <a className='grid' style={{ fontSize: "1.5rem" }} onClick={() => setGridelist(true)}>
                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a className='list m-3' style={{ fontSize: "1.5rem" }} onClick={() => setGridelist(false)}>
                                            <i className='icofont-listine-dots'></i>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                 <ProductCard Gridelist={Gridelist} products={currentproduct} />
                                </div>
                                <Pagenation
                                    productPage={productPage}
                                    totalproduct={filteredProducts.length}
                                    Pagenation={pagination}
                                    activepage={currentpage}
                                />
                            </article>
                        </div>
                        <div className='col-lg-4 col-12' style={{ marginTop: "4.2rem" }}>
                            <aside>
                                <Search products={product} Gridelist={Gridelist} />
                                <ShopCategory
                                    filteritem={filteritem}
                                    menuItem={menuItem}
                                    selectcategory={selectcategory}
                                />
                            </aside>
                            <PopularPost />
                            <Tags />
                        </div>
                    </div>
                </div>
            </div>
            <ProductSlider />
        </LayOUT>
    );
}

export default Shoping;
