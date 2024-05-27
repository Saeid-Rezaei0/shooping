import React, { useContext } from 'react';
import ApiContext from './ContexApi';

function OrderDataAdmin() {
    const context = useContext(ApiContext);
    const { order } = context;
    console.log("order admin", order);
    const user = localStorage.getItem("userEmail");

    const allOrders = order || [];

    return (
        <div className="container-fluid rtl mt-5" style={{width: "100%"}}>
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
                    </tr>
                </thead>
                <tbody>
                    {allOrders.length > 0 ? allOrders.map((orderItem, orderIndex) => (
                        <React.Fragment key={orderIndex}>
                            {orderItem.items.map((item, index) => (
                                <tr key={index}>
                                    <td>{orderItem.id}</td>
                                    <td><img src={item.img} alt={item.name} width="80" /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.size === "انتخاب سایز" ? "_____" :  item.size}</td>
                                    <td>{item.color === "انتخاب رنگ" ? "-" :  item.color}</td>
                                    <td>{item.coupon ? item.coupon : "ندارد"}</td>
                                    <td>{orderItem.formData?.city || "تهران"}</td>
                                    <td>{orderItem.formData?.postalCode || "نامشخص"}</td>
                                    <td>{orderItem.formData?.phoneNumber || "نامشخص"}</td>
                                    <td>{user}</td>
                                </tr>
                            ))}
                        </React.Fragment>
                    )) : <tr><td colSpan="12"><h3>سفارشی وجود ندارد</h3></td></tr>}
                </tbody>
            </table>
        </div>
    );
}

export default OrderDataAdmin;





