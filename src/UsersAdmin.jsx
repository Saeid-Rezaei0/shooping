import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Sidebar from './compones/Sidebar';
import ApiContext from './ContexApi';
import 'bootstrap/dist/css/bootstrap.min.css';

function UsersAdmin() {
    const [allUsers, setAllUsers] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: ''
    });

    const context = useContext(ApiContext);
    const { users } = context;

    useEffect(() => {
        setAllUsers(users);
    }, [users]);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setFormData(user);
        setShowEditModal(true);
    };

    const handleDelete = (user) => {
        setSelectedUser(user);
        setShowDeleteModal(true);
    };

    const handleEditSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:3000/users/${selectedUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const updatedUser = await response.json();
                setAllUsers(allUsers.map(user => user.id === updatedUser.id ? updatedUser : user));
                setShowEditModal(false);
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleDeleteSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:3000/users/${selectedUser.id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setAllUsers(allUsers.filter(user => user.id !== selectedUser.id));
                setShowDeleteModal(false);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className='row'>
            <div className="col-10">
                <div className="container-fluid rtl mt-5" style={{ width: "100%" }}>
                    <h3 className="mb-4">کاربران</h3>
                    <table className="table table-striped table-bordered text-right w-100">
                        <thead>
                            <tr>
                                <th scope="col">شناسه کاربر</th>
                                <th scope="col">نام</th>
                                <th scope="col">نام خانوادگی</th>
                                <th scope="col">ایمیل</th>
                                <th scope="col">عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers && allUsers.length > 0 ? allUsers.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td className='d-flex justify-content-around'>
                                        <Button className='px-3 background_Blue' variant="" onClick={() => handleEdit(user)}>ویرایش</Button>
                                        <Button variant="danger" onClick={() => handleDelete(user)}>حذف</Button>
                                    </td>
                                </tr>
                            )) : <tr><td colSpan="5"><h3>کاربری وجود ندارد</h3></td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-2"><Sidebar /></div>

            {/* Edit User Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)} className='rtl'>
                <Modal.Header closeButton>
                    <Modal.Title>ویرایش کاربر</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formFirstName" className='my-2'>
                            <Form.Label className='pb-2'>نام</Form.Label>
                            <Form.Control
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formLastName">
                            <Form.Label className='py-2'>نام خانوادگی</Form.Label>
                            <Form.Control
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label className='py-2 mt-1'>ایمیل</Form.Label>
                            <Form.Control
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='d-flex'>
                    <Button variant="secondary"  onClick={() => setShowEditModal(false)}>بستن</Button>
                    <Button variant="primary" className='background_Blue' onClick={handleEditSubmit}>ذخیره تغییرات</Button>
                </Modal.Footer>
            </Modal>

            {/* Delete User Modal */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} className='rtl'>
                <Modal.Header closeButton>
                    <Modal.Title>حذف کاربر</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    آیا مطمئن هستید که می‌خواهید کاربر {selectedUser && selectedUser.firstName} را حذف کنید؟
                </Modal.Body>
                <Modal.Footer>
                    <Button className='color-btn' onClick={() => setShowDeleteModal(false)}>لغو</Button>
                    <Button className='text-denger' onClick={handleDeleteSubmit}>حذف</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UsersAdmin;
