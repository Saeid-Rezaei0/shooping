import React, { useContext, useEffect, useState } from 'react';
import LayOUT from '../LayOUT';
import Search from '../Shop/Search';
import ApiContext from '../ContexApi';
import PopularPost from '../Shop/PopularPost';
import Tags from '../Shop/Tags';
import ProductSlider from '../home/SliderProduct';
import PageHeader from './PageHeader';
import { Modal, Button, Table, Form } from 'react-bootstrap';
import swal from 'sweetalert';

function UserTeket() {
    const context = useContext(ApiContext);
    const { product } = context;
    const [Gridelist, setGridelist] = useState(true);
    const [showReplyModal, setShowReplyModal] = useState(false);
    const [selectedComment, setSelectedComment] = useState(null);
    const [replyMessage, setReplyMessage] = useState('');
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const userEmail = localStorage.getItem("userEmail");
    const [hasNewMessage, setHasNewMessage] = useState(false);
    const [seen, setSeen] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSeen(false);
        },1000);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        fetch("http://localhost:3000/teket") // تغییر مسیر فراخوانی تیکت‌ها
            .then(res => res.json())
            .then(data => {
                setComments(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleReplyModalOpen = (comment) => {
        setSelectedComment(comment);
        setShowReplyModal(true);
    };

    const handleReplyModalClose = () => {
        setSelectedComment(null);
        setShowReplyModal(false);
    };

    const handleReplyMessageChange = (event) => {
        setReplyMessage(event.target.value);
    };

    const handleNewCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSendReply = () => {

        const reply = {
            message: replyMessage,
        };

        fetch(`http://localhost:3000/teket/${selectedComment.id}`, { // تغییر مسیر ارسال پاسخ به تیکت
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                replies: [...selectedComment.replies, reply]
            }),
        })
            .then(response => response.json())
            .then(updatedComment => {
                swal({
                    title: "پیغام ارسال شد",
                    icon: "success"
                })
                // Update the comments list with the new reply
                const updatedComments = comments.map(comment =>
                    comment.id === updatedComment.id ? updatedComment : comment
                );
                setComments(updatedComments);
                handleReplyModalClose();
                setReplyMessage('');
            })
            .catch(error => {
                console.error('Error sending reply:', error);
            });
    };

    const handleSendNewComment = () => {
        if (newComment.trim() === '') {
            swal({
                title: "لطفاً پیام را پر کنید.",
                icon: "error"
            });
            return;
        }
        fetch('http://localhost:3000/teket', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userEmail, // اضافه کردن ایمیل به داده‌های ارسالی
                message: newComment,
                replies: []
            }),
        })
            .then(response => response.json())
            .then(data => {
                swal({
                    title: "پیغام ارسال شد",
                    icon: "success"
                });
                setComments([...comments, data]);
                setNewComment('');
            })
            .catch(error => {
                console.error('Error sending comment:', error);
            });
    };




    // Filter comments to only include those sent by the current user
    const userComments = comments.filter(comment => comment.email === userEmail);

    return (
        <LayOUT>
            <PageHeader title="تیکت ها" curPage="تیکت ها" />
            <div className="rtl row">
                <div className='col-lg-4 col-12'>
                    <aside style={{ textAlign: "left" }}>
                        <Search products={product} Gridelist={Gridelist} className="text-capitalize" />
                    </aside>
                    <PopularPost />
                    <Tags />
                </div>
                <div className="col-lg-8 col-12 mt-4">
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
                            {userComments.map((comment, index) => (
                                <tr key={comment.id}>
                                    <td>{index + 1}</td>
                                    <td>{comment.email}</td>
                                    <td>{comment.message}</td>
                                    <td>
                                        <Button onClick={() => handleReplyModalOpen(comment)}>نمایش پیغام</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Form.Group controlId="newComment">
                        <Form.Label>پیام جدید:</Form.Label>
                        <Form.Control
                            as="textarea"
                            required={true} // اضافه کردن ویژگی required
                            rows={3}
                            value={newComment}
                            onChange={handleNewCommentChange}
                        />
                    </Form.Group>

                    <Button className='mt-2' onClick={handleSendNewComment}>
                        ارسال پیام جدید
                    </Button>
                </div>
            </div>
            <ProductSlider />
            <Modal show={showReplyModal} onHide={handleReplyModalClose} className='rtl'>
                <Modal.Header>
                    <Modal.Title>پاسخ به تیکت</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedComment && (
                        <div className="chat-message">
                            <div className="chat-bubble">
                                <p className="chat-name right-align">
                                    {selectedComment.email}
                                </p>
                                <p className="chat-text right-align background_Blue p-3 circle rounded hight-2">
                                    {selectedComment.message}
                                </p>
                                {selectedComment.replies.map((reply, index) => (
                                    <div key={index} className="chat-reply">
                                        <p className="chat-name left-align text-info" style={{ fontSize: "12px" }}>
                                            Admin
                                        </p>
                                        <p className={`chat-text left-align ${seen ? 'red-bg' : ''}`}>
                                            {reply.message}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    )}
                    {/* <Form.Group controlId="replyMessage">
                        <Form.Label>پاسخ:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={replyMessage}
                            onChange={handleReplyMessageChange}
                        />
                    </Form.Group> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleReplyModalClose}>
                        بستن
                    </Button>
                    {/* <Button className='background_Blue' onClick={handleSendReply}>
                        ارسال
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </LayOUT>
    );
}

export default UserTeket;
