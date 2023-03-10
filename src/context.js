import { useMotionTemplate } from "framer-motion";
import React from "react";
//import FeedbackData from "./FeedbackData";

const AppContext=React.createContext();

const AppProvider = ({children}) => {
    const[feedback, setFeedback]=React.useState([]);
    const[loading, setLoading]=React.useState(true);
    const[edit, setEdit]=React.useState({        //for editing
      editedItem: {},
      startEdit: false
    })


    //fetch feedback
    async function fetchFeedback () {
      let response = await fetch("http://localhost:5000/feedback?_sort=id&_order_desc");
      let data = await response.json();
      setFeedback(data);
      setLoading(false);
    }

    React.useEffect(() => {
      fetchFeedback();
    }, [])

  
    
    //delete (feedback) item
    async function handleDelete(id) {
        if(window.confirm("Are you sure you want to delete?")){
          await fetch(`http://localhost:5000/feedback/${id}`, {
          method: "DELETE"})

          let newItems = feedback.filter((item) => {
            return item.id !==id
          })
          setFeedback(newItems);
        }
        }

        //add (feedback)item
        async function handleAdd(newFeedback) {
          const response = await fetch('http://localhost:5000/feedback', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
          })

          const data = await response.json();

            console.log(newFeedback);

            setFeedback([data, ...feedback])
            }



            //set item to be updated
            function handleEdit(item) {
              setEdit({ editedItem: {...item}, startEdit: true })
            }

            //update feedback items
            async function updateFeedbackItem(id, updateItem) {
              console.log(id, updateItem); 
              const response = await fetch(`http://localhost:5000/feedback/${id}`, {
                method: "PUT",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updateItem)
              })
              const data = await response.json();
              return setFeedback(feedback.map((item) => {
                if(item.id === id) {
                  return {...data}
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
        updateFeedbackItem,
        loading
    }}>
    {children}
    </AppContext.Provider>
}

export {AppContext, AppProvider};

export const useGlobalContext = () => {
    return React.useContext(AppContext);
}