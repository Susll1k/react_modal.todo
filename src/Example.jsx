import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { add, selectData } from './slices/inputSlice';

function Example() {
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
        <div className="App">
     {texts}
     </div>
    );
}

export default Example;