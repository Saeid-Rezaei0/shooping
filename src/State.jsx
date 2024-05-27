import React, { useState, useEffect } from 'react';
import ApiContext from './ContexApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function State(props) {
    const [product, setProduct] = useState([]);
    const [blog, setBlog] = useState([]);
    const [mode, setmode] = useState("dark")
    const [steke, setSteke] = useState([])
    const [users, setusers] = useState([])
    const [deleteProduct, setdeleteProduct] = useState("")
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/productdata')
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error("Error fetching products: ", err));
    }, []);
    useEffect(() => {
        fetch('http://localhost:3000/blog')
            .then(res => res.json())
            .then(data => setBlog(data))
            .catch(err => console.error("Error fetching products: ", err));
    }, []);
    const deletproduct = async (productId) => {
        try {
            const response = await fetch(`http://localhost:3000/productdata/${productId}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log("Response:", data);

            // Update the product state to remove the deleted product
            setProduct(prevProducts => prevProducts.filter(product => product.id !== productId));
        } catch (err) {
            console.error("Error deleting product: ", err);
        }
    };

    const deletblod = async (blogID) => {
        try {
            const response = await fetch(`http://localhost:3000/blog/${blogID}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log("Response:", data);

            // Update the product state to remove the deleted product
            setBlog(prevProducts => prevProducts.filter(blog => blog.id !== blogID));
        } catch (err) {
            console.error("Error deleting product: ", err);
        }
    };
    const updateBlog = async (updatedBlog) => {
        try {
            const response = await fetch(`http://localhost:3000/blog/${updatedBlog.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBlog)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log("Response:", data);

            // Update the blog state to reflect the updated blog
            setBlog(prevBlogs => prevBlogs.map(blog => 
                blog.id === updatedBlog.id ? updatedBlog : blog
            ));

            // Show success toast
            toast.success("وبلاگ با موفقیت به‌روزرسانی شد", {
                position: "top-right",
                style: {
                    fontSize: '20px',
                    textAlign: 'right'
                }
            });
        } catch (err) {
            console.error("Error updating blog: ", err);
        }
    };

    const updateProduct = async (updatedproduct) => {
        try {
            const response = await fetch(`http://localhost:3000/productdata/${updatedproduct.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedproduct)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log("Response:", data);
    
            // Update the product state to reflect the updated product
            setProduct(prevproduct => prevproduct.map(product => 
                product.id === updatedproduct.id ? updatedproduct : product
            ));
            // Show success toast
            toast.success("محصول با موفقیت به‌روزرسانی شد", {
                position: "top-right",
                style: {
                    fontSize: '20px',
                    textAlign: 'right'
                }
            });
        } catch (err) {
            console.error("Error updating product: ", err);
        }
    };
    
    const ADDproductDATA = async (productDATA) => {
        try {
            const response = await fetch("http://localhost:3000/productdata", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productDATA)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            // Update product data after successful addition
            const updatedProductData = await response.json();
            setProduct(updatedProductData);
    
            // Show success toast
            toast.success("محصول با موفقیت اضافه شد", {
                position: "top-right",
                style: {
                    fontSize: '20px',
                    textAlign: 'right'
                }
            });
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    const addBLOG = async (addBLOGs) => {
        try {
            const response = await fetch("http://localhost:3000/blog", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addBLOGs)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            // Update product data after successful addition
            const updatedblogData = await response.json();
            setBlog(updatedblogData);
            
            // Show success toast
            toast.success("وبلاگ با موفقیت اضافه شد", {
                position: "top-right",
                style: {
                    fontSize: '20px',
                    textAlign: 'right'
                }
            });
        } catch (error) {
            console.error("Error:", error);
        }
    };
    

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch("http://localhost:3000/users")

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Update product data after successful addition
                const usersData = await response.json();
                setusers(usersData);

            } catch (error) {
                console.error("Error:", error);
            }
        };

        // فراخوانی تابع getUsers در اولین رندر
        getUsers();
    }, []); // مربوط به رندر اولیه

    useEffect(() => {
        const getSteke = async () => {
            try {
                const res = await fetch("http://localhost:3000/steke");
                const data = await res.json();
                setSteke(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getSteke();
    }, []);
    
    useEffect(() => {
        const getsetorder = async () => {
            try {
                const res = await fetch("http://localhost:3000/order");
                const data = await res.json();
                setOrder(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getsetorder();
    }, []); // بدون وابستگی
    

    return (
        <ApiContext.Provider value={{
            product, setProduct,
            mode,
            setmode,
            deleteProduct,
            setdeleteProduct,
            blog,
            setBlog,
            deletproduct,
            deletblod,
            updateBlog,
            updateProduct,
            ADDproductDATA,
            addBLOG,
            steke,
            setusers,
            users,
            order,
            setOrder
        }}>
            <ToastContainer />
            {props.children}
        </ApiContext.Provider>
    );
}

export default State;
