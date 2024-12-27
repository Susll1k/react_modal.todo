import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { add, selectData } from './slices/inputSlice';
import Example from './Example';


import { Button, Modal, Input } from 'antd';


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };


  
    const texts = useSelector(selectData);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim() !== '') {
            dispatch(add(inputValue));
            setInputValue('');
        }
    };

    return (
      <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Enter text" open={isModalOpen} onCancel={handleCancel}>
      <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{ marginBottom: '10px', width: '200px' }}
            />

            <Button
                type="primary"
                onClick={handleAdd}
                style={{ marginBottom: '20px' }}
            >
                Add
            </Button>
      </Modal>
      
        <div className="App">
            <ul>
                {texts.map((text, index) => (
                    <li key={index}>{text}</li>
                ))}
            </ul>

            {/* <Example /> */}
        </div>
        </>
    );
}

export default App;