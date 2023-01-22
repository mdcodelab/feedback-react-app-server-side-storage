import React from 'react';
import FeedbackItem from "./FeedbackItem";
import {motion, AnimatePresence} from "framer-motion"
import Spinner from "./Spinner";
import { useGlobalContext } from '../context';


function FeedbackList({deleteFeedback}) {
  const{feedback, loading}=useGlobalContext();

  // return (
  //   <div className="feedback-list">
    
  //     {feedback.map((item, index) => (
  //       <FeedbackItem key={index} item={item} deleteFeedback={deleteFeedback}></FeedbackItem>
  //     ))}
  //   </div>
  // );
    
  if(loading) {
    return <Spinner></Spinner>
  }


  return (
    <div className="feedback-list">

      <AnimatePresence>
        {feedback.map ((item, index) => (
          <motion.div className="motion" key={index} initial={{opacity: 1}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <FeedbackItem key={index} item={item} deleteFeedback={deleteFeedback}></FeedbackItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
