import React, { useEffect, useState } from 'react';
import { Modal, Button, Table, Form } from 'react-bootstrap';
import swal from 'sweetalert';

function CommentAdminContent() {
    const [showReplyModal, setShowReplyModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [replyMessage, setReplyMessage] = useState('');
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/teket")
            .then(res => res.json())
            .then(data => {
                setTickets(data);
            })
            .catch(error => console.error('Error fetching tickets:', error));
    }, []);

    const handleReplyModalOpen = (ticket) => {
        setSelectedTicket(ticket);
        setShowReplyModal(true);
    };

    const handleReplyModalClose = () => {
        setSelectedTicket(null);
        setShowReplyModal(false);
    };

    const handleReplyMessageChange = (event) => {
        setReplyMessage(event.target.value);
    };

    const handleSendReply = () => {
        const reply = {
            message: replyMessage,
        };

        fetch(`http://localhost:3000/teket/${selectedTicket.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                replies: [...selectedTicket.replies, reply]
            }),
        })
            .then(response => response.json())
            .then(updatedTicket => {
                swal({
                    title: "پیغام ارسال شد",
                    icon: "success"
                });
                const updatedTickets = tickets.map(ticket =>
                    ticket.id === updatedTicket.id ? updatedTicket : ticket
                );
                setTickets(updatedTickets);
                handleReplyModalClose();
                setReplyMessage('');
            })
            .catch(error => {
                console.error('Error sending reply:', error);
            });
    };

    const handleDeleteTicket = (ticketId) => {
        swal({
            title: "آیا مطمئنید؟",
            text: "آیا مطمئن هستید که می‌خواهید این تیکت را حذف کنید؟",
            icon: "warning",
            buttons: ["خیر", "بله"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:3000/teket/${ticketId}`, {
                        method: 'DELETE',
                    })
                        .then(response => response.json())
                        .then(() => {
                            const updatedTickets = tickets.filter(ticket => ticket.id !== ticketId);
                            setTickets(updatedTickets);
                        })
                        .catch(error => {
                            console.error('Error deleting ticket:', error);
                        });
                }
            });
    };

    return (
        <div>
            <Table striped bordered hover className='rtl mt-3'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ایمیل</th>
                        <th>پیام</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.length > 0 ? tickets.map((ticket, index) => (
                        <tr key={ticket.id}>
                            <td>{index + 1}</td>
                            <td>{ticket.email}</td>
                            <td>{ticket.message}</td>
                            <td className='d-flex justify-content-around'>
                                <Button onClick={() => handleReplyModalOpen(ticket)}>پاسخ</Button>
                                <Button variant="danger" onClick={() => handleDeleteTicket(ticket.id)}>حذف</Button>
                            </td>
                        </tr>
                    )) : <h4 className='mt-5 '>پیغامی وجود ندارد ... </h4>}
                </tbody>
            </Table>

            <Modal show={showReplyModal} onHide={handleReplyModalClose} className='rtl'>
                <Modal.Header>
                    <Modal.Title>پاسخ به تیکت</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span className='left-align me-auto'>{selectedTicket && selectedTicket.email}</span>
                    <p className='left-align circle rounded background_Blue p-2'>{selectedTicket && selectedTicket.message}</p>
                    <p>Admin:</p>
                    {selectedTicket && selectedTicket.replies.map((reply, index) => (
                        <div key={index} >
                            <p>{reply.message}</p>
                        </div>
                    ))}
                    <Form.Group controlId="replyMessage">
                        <Form.Label>پاسخ:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={replyMessage}
                            onChange={handleReplyMessageChange}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleReplyModalClose}>
                        بستن
                    </Button>
                    <Button className='background_Blue' onClick={handleSendReply}>
                        ارسال
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CommentAdminContent;
