import React from 'react'
import reactImg from '../assets/react.svg'
import { useState,useEffect } from 'react'
import './Gallery.css'
const Gallery = () => {
    const [content, setcontent] = useState([])
 useEffect(() => {
    const data = [
        {
            id:1,
            url:"../assets/react.svg"
        },
        {
            id:2,
            url:"../assets/react.svg"
        },
        {
            id:3,
            url:"../assets/react.svg"
        },
        {
            id:4,
            url:"../assets/react.svg"
        },
        {
            id:5,
            url:"../assets/react.svg"
        },
        {
            id:6,
            url:"../assets/react.svg"
        },
        {
            id:7,
            url:"../assets/react.svg"
        },
        {
            id:8,
            url:"../assets/react.svg"
        },
        {
            id:9,
            url:"../assets/react.svg"
        },
    ]
  function setInitialData() {

    setcontent(data);
  }

  setInitialData(); 
}, []);
function handleDelete(i){
    setcontent(content.filter((item)=>{
        return item.id!=i;
    }))
}

    
    
  return (
    <div>
        <h1 className='title'>Imgage Gallery</h1>
        <div className='image-grid'>
            {content.map((item) => {
                return ( <div className="image-card" key={item.id}>
                <img src={reactImg} alt="" />
                <div className="image-details">
                    <p>Image {item.id}</p>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            </div>

                );
            })
        }
        </div>
    </div>
  )
}

export default Gallery