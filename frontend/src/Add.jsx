
import { useState } from "react";
import axios from "axios";
import './Add.css'
import bookImage from './assets/book.png'
export default function Add() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000", { title, author })
            .then(result => { console.log(result); alert("Book was added to the MongoDB") })
            .catch(err => console.log(err))
        setTitle('');
        setAuthor('');
    }
    return (
        <div className="adddiv">
            <form className="addForm">
                <img src={bookImage} alt="" />
                <input type="text" value={title} placeholder="ENTER THE TITLE" onChange={(e) => setTitle(e.target.value)} />
                <input type="text" value={author} placeholder="ENTER THE AUTHOR" onChange={(e) => setAuthor(e.target.value)} />
                <button onClick={handleSubmit}>ADD</button>
            </form>
        </div>
    );
}