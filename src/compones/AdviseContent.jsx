import React, { useContext, useEffect, useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import swal from 'sweetalert';

function AdviseContent() {
    const [comment, setComment] = useState([]);
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState('');

    useEffect(() => {
        fetch("http://localhost:3000/comment")
            .then(res => res.json())
            .then(data => setComment(data))
            .catch(error => console.error('Error fetching comments:', error));
    }, []);

    const handleDelete = async (id) => {
        const willDelete = await swal({
            title: "آیا مطمئنید؟",
            text: "آیا مطمئن هستید که می‌خواهید این مورد را حذف کنید؟",
            icon: "warning",
            buttons: ["خیر", "بله"],
            dangerMode: true,
        });

        if (willDelete) {
            await fetch(`http://localhost:3000/comment/${id}`, {
                method: 'DELETE',
            });
            setComment(comment.filter(item => item.id !== id));
        }
    };

    const handleCloseMessageModal = () => setShowMessageModal(false);

    const handleShowMessageModal = (message) => {
        setSelectedMessage(message);
        setShowMessageModal(true);
    };

    return (
        <div className='rtl'>
            <h4 className='my-4'>محتوای پیشنهاد</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ردیف</th>
                        <th>نام</th>
                        <th>ایمیل</th>
                        <th>تلفن</th>
                        <th>موضوع</th>
                        <th>پیام</th>
                        <th>تاریخ ایجاد</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {comment && comment.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.formData.name}</td>
                            <td>{item.formData.email}</td>
                            <td>{item.formData.phone}</td>
                            <td>{item.formData.subject}</td>
                            <td>
                                <Button variant="info" onClick={() => handleShowMessageModal(item.formData.message)}>نمایش </Button>
                            </td>
                            <td>{item.formData.createdAt}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(item.id)}>حذف</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal برای نمایش پیام */}
            <Modal show={showMessageModal} onHide={handleCloseMessageModal} className='rtl'>
                <Modal.Header>
                    <Modal.Title>پیام</Modal.Title>
                </Modal.Header>
                <Modal.Body>{selectedMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseMessageModal}>
                        بستن
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AdviseContent;
