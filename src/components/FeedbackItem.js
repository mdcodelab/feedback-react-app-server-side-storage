import React from 'react';
import {AiOutlineClose, AiFillEdit} from "react-icons/ai"
import { useGlobalContext } from '../context';

function FeedbackItem({item}) {

const{handleDelete, handleEdit}=useGlobalContext();


  return (
    <div className="item">
    <span className="rating">{item.rating}</span>
    <div className="icons">
    <AiFillEdit className="icon-edit" onClick={()=>handleEdit(item)}></AiFillEdit>
    <AiOutlineClose className="icon-close" onClick={() => handleDelete(item.id)}></AiOutlineClose>
    </div>
      <p className="text">{item.text}</p>
      <p className="date">{}</p>
    </div>
  );
}

export default FeedbackItem;
