import React from 'react'
import './NotesArea.css'
import frontImg from '../../assests/frontImg.png'
import lock from '../../assests/lock.svg'

function NotesArea() {
  return (
    <div className='container2'>
      <img src={frontImg} width={500}></img>
      <p style={{fontSize:'30px'}}>Pocket Notes</p>
      <p style={{padding:'10px'}}>Send and receive messages without keeping your phone online,<br/>
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</p>
      <div style={{position:'absolute', bottom:'10px'}}><img src={lock}></img><p style={{display:'inline', position:'relative', bottom:'5px', paddingLeft:'5px'}}>end-to-end encrypted</p></div>
    </div>
  )
}

export default NotesArea