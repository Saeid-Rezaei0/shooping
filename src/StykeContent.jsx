import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';

function StyleContent() {
  const [modalData, setModalData] = useState({});
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newLabel, setNewLabel] = useState('');
  useEffect(() => {
    fetch("http://localhost:3000/steke")
      .then(res => res.json())
      .then(data => setData(data))
  }, []);



  const handleButtonClick = (rowData) => {
    setModalData(rowData);
    setShowModal(true);
  };

  const handleModalSave = () => {
    fetch(`http://localhost:3000/steke/${modalData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(modalData)
    })
    .then(res => res.json())
    .then(updatedData => {
      setData(data.map(item => item.id === updatedData.id ? updatedData : item));
      setShowModal(false);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const handleDelete = (id) => {
    swal({
      title: 'آیا مطمئن هستید؟',
      text: "شما نمی‌توانید این عملیات را بازگردانید",
      icon: 'warning',
      buttons: {
        confirm: {
          text: 'بله، حذف کن',
          closeModal: false,
        },
        cancel: 'لغو',
      }
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:3000/steke/${id}`, {
          method: 'DELETE'
        })
        .then(() => {
          setData(data.filter(item => item.id !== id));
          swal('حذف شد', 'آیتم مورد نظر با موفقیت حذف شد.', 'success');
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }
    });
  };

  const handleAddLabel = () => {
    const newLabelData = { text: newLabel };
    fetch("http://localhost:3000/steke", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newLabelData)
    })
    .then(res => res.json())
    .then(addedData => {
      setData([...data, addedData]);
      setShowAddModal(false);
      setNewLabel('');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="container mt-3 rtl">
      <div className="row">
        <div className="col">
          <button className="btn btn-success mb-3" onClick={() => setShowAddModal(true)}>افزودن برچسب</button>
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>نام</th>
                <th>توضیحات</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.text}</td>
                  <td>{item.text}</td>
                  <td className='d-flex justify-content-evenly'>
                    <button className="btn btn-primary" onClick={() => handleButtonClick(item)}>ویرایش</button>
                    <button className="btn btn-danger ml-2" onClick={() => handleDelete(item.id)}>حذف</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div className="modal rtl show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">ویرایش</h5>
                <button type="button" className="close" aria-label="Close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="description">توضیحات</label>
                  <textarea 
                    className="form-control" 
                    id="description" 
                    value={modalData.text} 
                    onChange={(e) => setModalData({ ...modalData, text: e.target.value })} 
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>بستن</button>
                <button type="button" className="btn btn-primary" onClick={handleModalSave}>ذخیره</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="modal rtl show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">افزودن برچسب</h5>
                <button type="button" className="close" aria-label="Close" onClick={() => setShowAddModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="newLabel">برچسب جدید</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="newLabel" 
                    value={newLabel} 
                    onChange={(e) => setNewLabel(e.target.value)} 
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>بستن</button>
                <button type="button" className="btn btn-primary" onClick={handleAddLabel}>ذخیره</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StyleContent;
