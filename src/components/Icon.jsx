import React, { useState } from 'react';
import './Icon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faPaperPlane,faCartShopping } from '@fortawesome/free-solid-svg-icons';


function Icon() {
  const [likes, setLikes] = useState(0)
  const giveLike = ()=>{
      setLikes(likes+1)
  }

  const [ send, setSend] = useState(0)
  const giveSend = ()=>{
    setSend(send+1)
  }

  const [buy,setBuy]=useState(0)
  const givebuy = ()=>{
    setBuy(buy+1)
  }
 



  return ( <>
    <div className='icon'>
      {console.log(likes)}

      <a onClick={giveLike} ><p>{likes}</p> <FontAwesomeIcon icon={faHeart} /></a>
      <a onClick={giveSend} ><p>{send}</p><FontAwesomeIcon icon={faPaperPlane} /></a>
      <a onClick={givebuy}><p>{buy}</p>< FontAwesomeIcon icon={faCartShopping}/></a>
    </div>
    </>
  )
}

export default Icon