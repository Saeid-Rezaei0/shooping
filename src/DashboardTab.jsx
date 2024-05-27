import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCartPlus } from 'react-icons/fa';
import UpdateProductModal from './UpdateProductModal';
import ADDProduct from './ADDProduct';
import myContext from './ContexApi';
import Pagenation from './Shop/Pagenation';
import Search from './Shop/Search';

function DashboardTab() {
    const context = useContext(myContext);
    const { mode, product, deletproduct, updateProduct , ADDproductDATA} = context;
    const [showModal, setShowModal] = useState(false);
    const [showModalUPDATE, setshowModalUPDATE] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [Gridelist, setGridelist] = useState(true);
    const productPerPage = 8;

    // Delete product
    const deleteProduct = (ID) => {
        deletproduct(ID);
        toast.success("محصول با موفقیت حذف شد", {
            position: "top-right",
            style: {
                fontSize: '20px',
                textAlign: 'right'
            }
        });
    };

    // Edit product
    // Edit product
    const editProduct = (item) => {
        setSelectedProduct(item);
       setshowModalUPDATE(true)
        console.log("selectedProduct", selectedProduct);
    };


    const handleModalClose = () => {
        setShowModal(false);
    };
    const handleModalCloseUpdate = () => {
        setshowModalUPDATE(false)
    }

    // Change current page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Get current products
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="container" style={{marginTop: "-10rem"}}>
            <ToastContainer />
            <div className="px-4 md:px-0 mb-16">
                <h1 className="text-center mb-5 text-3xl font-semibold underline" style={{ color: mode === 'dark' ? 'white' : '' }}>Product Details</h1>
                <div className="text-end mb-3 d-flex justify-content-between align-items-center">
                    <button type="button" onClick={() => setShowModal(true)} className="btn btn-primary">
                        <div className="d-flex align-items-center">
                            افزودن محصول <FaCartPlus size={20} className="ms-2" />
                        </div>
                    </button>
                   <div className="col-4 ">
                   <Search products={product} Gridelist={Gridelist} />
                   </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ادی</th>
                                <th scope="col">تصاویر</th>
                                <th scope="col">سر سیتر</th>
                                <th scope="col">قیمت</th>
                                <th scope="col">دسته بندی </th>
                                <th scope="col">تاریخ</th>
                                <th scope="col">تعداد تغییر ها</th>
                                <th scope="col">عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProducts.map((item, index) => {
                                const { category, name, price, img, quantity } = item;
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}.</td>
                                        <td>
                                            <Link to={`/shop/${item.id}`}>
                                                <img className="w-16" src={img} alt="img" width={80} />
                                            </Link>
                                        </td>
                                        <td>{name}</td>
                                        <td>تومان {price}</td>
                                        <td>{category}</td>
                                        <td>{"1403,5,3"}</td>
                                        <td>{quantity}</td>
                                        <td>
                                            <div className="btn-group" role="group">
                                                <button type="button" className="btn btn-danger" onClick={() => deleteProduct(item.id)}>
                                                    حذف
                                                </button>
                                                <button type="button" className="btn btn-primary" onClick={() => editProduct(item)}>
                                                    ویرایش
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <Pagenation
                    productPage={productPerPage}
                    totalproduct={product.length}
                    Pagenation={paginate}
                    activepage={currentPage}
                />
            </div>
            <UpdateProductModal
                show={showModalUPDATE}
                handleClose={handleModalCloseUpdate}
                product={selectedProduct}
                updateProduct={updateProduct}
            />
            <ADDProduct
                show={showModal}
                handleClose={handleModalClose}
                addProduct={ADDproductDATA} // Assuming addProduct and updateProduct have the same functionality
            />
        </div>
    );
}

export default DashboardTab;
