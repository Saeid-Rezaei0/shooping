import React, { useContext, useEffect, useState } from 'react';
import ApiContext from './ContexApi';
import swal from 'sweetalert';

function OrderDataAdmin() {
    const context = useContext(ApiContext)
    const { order, setOrder } = context
    const allOrders = order || [];

    const handleShipOrder = async (orderId) => {
        try {
            swal("موفقیت", `سفارش با شناسه ${orderId} ارسال شد!`, "success");
        } catch (error) {
            console.error('خطا در ارسال سفارش:', error);
            swal("خطا", "ارسال سفارش با شکست مواجه شد!", "error");
        }
    };

const handleDeleteOrder = async (orderId, itemId) => {
    console.log("orderIdorderId", orderId);
    try {
        const response = await fetch(`http://localhost:3000/order/${orderId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            // حذف سفارش مرتبط با شناسه orderId و محصول با شناسه itemId از لیست سفارش‌ها
            setOrder(prevOrders => {
                const updatedOrders = prevOrders.map(order => {
                    if (order.id === orderId) {
                        return {
                            ...order,
                            items: order.items.filter(item => item.id !== itemId)
                        };
                    }
                    return order;
                });
                return updatedOrders.filter(order => order.items.length > 0);
            });
            swal("حذف شد", "سفارش با موفقیت حذف شد.", "success");
        } else {
            throw new Error('Failed to delete order');
        }
    } catch (error) {
        console.error('Error deleting order:', error);
        swal("error","لطفا صفحه رو مجدد رفرش کنید", "error");
    }
};





    return (
        <div className="container-fluid rtl mt-5" style={{ width: "100%" }}>
            <h3 className="mb-4">داده‌های سفارش</h3>
            <table className="table table-striped table-bordered text-right w-100">
                <thead>
                    <tr>
                        <th scope="col">شناسه سفارش</th>
                        <th scope="col">تصویر</th>
                        <th scope="col">نام</th>
                        <th scope="col">قیمت</th>
                        <th scope="col">تعداد</th>
                        <th scope="col">سایز</th>
                        <th scope="col">رنگ</th>
                        <th scope="col">کد تخفیف</th>
                        <th scope="col">شهر</th>
                        <th scope="col">کد پستی</th>
                        <th scope="col">تلفن</th>
                        <th scope="col">ایمیل خریدار</th>
                        <th scope="col">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.length > 0 ? allOrders.map((orderItem, orderIndex) => (
                        <React.Fragment key={orderIndex}>
                            {orderItem.items && orderItem.items.map((item, index) => (
                                <tr key={index}>
                                    <td>{orderItem.id}</td>
                                    <td><img src={item.img} alt={item.name} width="80" /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.size === "انتخاب سایز" ? "_____" : item.size}</td>
                                    <td>{item.color === "انتخاب رنگ" ? "-" : item.color}</td>
                                    <td>{item.coupon ? item.coupon : "ندارد"}</td>
                                    <td>{orderItem.formData?.city || "تهران"}</td>
                                    <td>{orderItem.formData?.postalCode || "نامشخص"}</td>
                                    <td>{orderItem.formData?.phoneNumber || "نامشخص"}</td>
                                    <td>{orderItem.formData?.useremail}</td>
                                    <td className='d-flex justify-content-around bg-white pe-2 '>
                                        <button className='btn pe-2 mx-2 py-2 background_Blue' onClick={() => handleShipOrder(orderItem.id)}>ارسال</button>
                                        <button className='btn btn-danger' onClick={() => handleDeleteOrder(orderItem.id, item.id)}>حذف</button>

                                    </td>
                                </tr>
                            ))}
                        </React.Fragment>
                    )) : <tr><td colSpan="13"><h3>سفارشی وجود ندارد</h3></td></tr>}
                </tbody>
            </table>
        </div>
    );
}

export default OrderDataAdmin;
