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
import swal from 'sweetalert';

function DashboardTab() {
    const context = useContext(myContext);
    const { mode, product, deletproduct, updateProduct, ADDproductDATA } = context;
    const [showModal, setShowModal] = useState(false);
    const [showModalUPDATE, setShowModalUPDATE] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [Gridelist, setGridelist] = useState(true);
    const [products, setProducts] = useState([]); // Initialize products as an empty array
    const productPerPage = 8;

    useEffect(() => {
        if (Array.isArray(product)) {
            setProducts(product); // Update products when context product changes
        } else {
            console.error("product is not an array", product);
            setProducts([]); // Set products to an empty array if product is not an array
        }
    }, [product]);

    const deleteProduct = (ID) => {
        swal({
          title: 'آیا مطمئن هستید؟',
          text: "شما نمی‌توانید این عملیات را بازگردانید",
          icon: 'warning',
          buttons: {
            cancel: 'لغو',
            confirm: {
              text: 'بله، حذف کن',
              closeModal: true, // تغییر closeModal به true برای بسته شدن خودکار مدال پس از کلیک
            }
          }
        }).then((willDelete) => {
          if (willDelete) {
            deletproduct(ID);
            toast.success("محصول با موفقیت حذف شد", {
              position: "top-right",
              style: {
                fontSize: '20px',
                textAlign: 'right'
              }
            });
          }
        });
      };
       

    const editProduct = (item) => {
        setSelectedProduct(item);
        setShowModalUPDATE(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalCloseUpdate = () => {
        setShowModalUPDATE(false);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="container" style={{ marginTop: "-10rem" }}>
            <ToastContainer />
            <div className="px-4 md:px-0 mb-16">
                <h1 className="text-center mb-5 text-3xl font-semibold underline" style={{ color: mode === 'dark' ? 'white' : '' }}>Product Details</h1>
                <div className="text-end mb-3 d-flex justify-content-between align-items-center">
                    <button type="button" onClick={() => setShowModal(true)} className="btn btn-primary">
                        <div className="d-flex align-items-center">
                            افزودن محصول <FaCartPlus size={20} className="ms-2" />
                        </div>
                    </button>
                    <div className="col-4">
                        <Search products={products} Gridelist={Gridelist} />
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
                            {currentProducts.length > 1 ? currentProducts.map((item, index) => {
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
                                            <div className="btn-group d-flex" role="group">
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
                            }): <h5 className='d-flex justify-content-center align-items-center mt-5' style={{marginTop: "10rem"}}>...صفحه رو مجدد رفرش کنید</h5>}
                        </tbody>
                    </table>
                </div>
                <Pagenation
                    productPage={productPerPage}
                    totalproduct={products.length}
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
