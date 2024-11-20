import { useState } from 'react'
import './App.css'
import Display from './Display'
import Add from './Add';
import Delete from './Delete';
import Update from './Update';
import axios from 'axios';
import searchingImage from './assets/searching.png';
import login from './assets/user.png'
import libraryimg from './assets/library.jpg'
function App() {
  const [author, setAuthor] = useState('')
  const [quote, setQoute] = useState('');
  const [books, setBooks] = useState([]);
  const [HandleGet, setHandleGet] = useState(false);
  const [handleId, setHandleId] = useState(false);
  const [id, setId] = useState(0);
  const handleGet = () => {
    axios.get("http://localhost:3000")
      .then(result => {
        setBooks(result.data);
        setHandleGet(true)
      })
      .catch(err => console.log(err))
  };
  const handleGetId = () => {
    axios.get("http://localhost:3000")
      .then(result => {
        setBooks(result.data);
        setHandleId(true);
      })
      .catch(err => console.log(err))
    setTimeout(() => {
      setHandleId(false)
    }, 2000);
  }

  return (
    <>
      <div className="fixed-header">
        <div className="login">
          <button >Login</button>
          <img src={login} alt="" />
        </div>
        <ul>
          <li className='l1'><a href="">About</a><div className="tooltip">Learn more about our library and mission</div></li>
          <li className='l2'><a href="">Rules</a><div className="tooltip">Library usage guidelines and policies</div></li>
          <li className='l3'><a href="">Contact</a><div className="tooltip">Reach out for support or inquiries</div></li>
          <li className='l4'><a href="">Services</a><div className="tooltip">Explore our range of library services</div></li>
        </ul>
      </div>
      <div className="libimage">
        <img src={libraryimg} alt="" />
      </div>
      <div className="quote">
        <h4>{quote}</h4>
        <h3>{author}</h3>
      </div>
      <button className='qtbtn' onClick={() => axios.get('https://dummyjson.com/quotes/random').then(result => { setQoute(result.data.quote); setAuthor(result.data.author) })}>Get Qoute</button>
      <div className='getcontainer'>
        {
          HandleGet && books && books.map((books, index) => {
            return <Display key={index} {...books} />
          })
        }
        {
          handleId && books.filter((element) => element._id == id).map((element, index) => {
            return <Display key={index} {...element} />;
          })
        }
      </div>
      <button className='getbt' onClick={handleGet}>GET</button>
      <div className="container">
        <div className='getId'>
          <img src={searchingImage} alt="" />
          <input type="text" placeholder='ENTER THE ID' onChange={(e) => setId(e.target.value)} />
          <button onClick={handleGetId}>GET by ID</button>
        </div>
        <Add className="add" />
        <Update />
        <Delete />
      </div>
    </>
  )
}

export default App
