import { useMotionTemplate } from "framer-motion";
import React from "react";
import FeedbackData from "./FeedbackData";

const AppContext=React.createContext();

const AppProvider = ({children}) => {
    const[feedback, setFeedback]=React.useState(FeedbackData);
    const[edit, setEdit]=React.useState({        //for editing
      editedItem: {},
      startEdit: false

    })
    
    //delete (feedback) item
    function handleDelete(id) {
        if(window.confirm("Are you sure you want to delete?")){
          let newItems = feedback.filter((item) => {
            return item.id !==id
          })
          setFeedback(newItems);
        }
        }

        //add (feedback)item
        function handleAdd(newFeedback) {
            console.log(newFeedback);
            setFeedback([newFeedback, ...feedback])
            }

            //set item to be updated
            function handleEdit(item) {
              setEdit({ editedItem: {...item}, startEdit: true })
            }

            //update feedback items
            function updateFeedbackItem(id, updateItem) {
              console.log(id, updateItem); 
              return setFeedback(feedback.map((item) => {
                if(item.id === id) {
                  return {...updateItem}
                } else {
                  return {...item}
                }
              }))
            }

          
            React.useEffect(() => {
              console.log(feedback);
            }, [feedback])

          


    return <AppContext.Provider value={{
        feedback,
        handleDelete,
        handleAdd,
        handleEdit,
        edit,
        updateFeedbackItem
    }}>
    {children}
    </AppContext.Provider>
}

export {AppContext, AppProvider};

export const useGlobalContext = () => {
    return React.useContext(AppContext);
}