
import { useState } from "react";
import axios from 'axios';
import './Update.css';
import updateImage from './assets/homework.png'
export default function Update() {
    const [title, setTitle] = useState('');
    const [id, setId] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/${id}`, { title })
            .then(response => {
                console.log(response);
                alert("Book details was updated in MongoDB")
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <form className="updateForm">
                <img src={updateImage} alt="" />
                <input type="text" placeholder="ENTER THE ID" onChange={(e) => setId(e.target.value)} />
                <input type="text" placeholder="ENTER THE TITLE" onChange={(e) => setTitle(e.target.value)} />
                <button onClick={handleSubmit}>UPDATE</button>
            </form>
        </div>
    );
}