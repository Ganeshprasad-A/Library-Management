import { useState } from "react";
import axios from 'axios';
import './Delete.css';
import deleteImage from './assets/remove.png'
export default function Delete() {
    const [id, setId] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:3000/${id}`)
            .then(res => {
                console.log(res);
                alert("Book Details was deleted successfully")
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="deleteForm">
                <img src={deleteImage} alt="" />
                <input type="text" placeholder="ENTER THE ID" onChange={(e) => setId(e.target.value)} />
                <button>DELETE</button>
            </form>
        </div>
    );
}