import React from 'react';

function Rating({selectRating}) {

    const[select, setSelect]=React.useState(10);

    function onChange(e) {
        //console.log(+e.target.value);
        setSelect(+e.target.value);
        selectRating(+e.target.value);
      
    }

    


  return (
    <div className="rating-container">
    <h1>How would you rate aur service with us?</h1>
    <div className="rating">
        <input type="radio" id="1" value="1" name="1" checked={select === 1 ? true : false} onChange={onChange}></input>
        <label htmlFor="1" className={select === 1 ? "select" : ""}>1</label>

        <input type="radio" id="2" value="2" name="2" checked={select === 2 ? true : false} onChange={onChange}></input>
        <label htmlFor="2" className={select === 2 ? "select" : ""}>2</label>

        <input type="radio" id="3" value="3" name="3" checked={select === 3 ? true : false} onChange={onChange}></input>
        <label htmlFor="3" className={select === 3 ? "select" : ""}>3</label>

        <input type="radio" id="4" value="4" name="4" checked={select === 4 ? true : false} onChange={onChange}></input>
        <label htmlFor="4" className={select === 4 ? "select" : ""}>4</label>

        <input type="radio" id="5" value="5" name="5" checked={select === 5 ? true : false} onChange={onChange}></input>
        <label htmlFor="5" className={select === 5 ? "select" : ""}>5</label>

        <input type="radio" id="6" value="6" name="6" checked={select === 6 ? true : false} onChange={onChange}></input>
        <label htmlFor="6" className={select === 6 ? "select" : ""}>6</label>

        <input type="radio" id="7" value="7" name="7" checked={select === 7 ? true : false} onChange={onChange}></input>
        <label htmlFor="7" className={select === 7 ? "select" : ""}>7</label> 

        <input type="radio" id="8" value="8" name="8" checked={select === 8 ? true : false} onChange={onChange}></input>
        <label htmlFor="8" className={select === 8 ? "select" : ""}>8</label>

        <input type="radio" id="9" value="9" name="9" checked={select === "9" ? true : false} onChange={onChange}></input>
        <label htmlFor="9" className={select === 9 ? "select" : ""}>9</label>

        <input type="radio" id="10" value="10" name="10" checked={select === "10" ? true : false} onChange={onChange}></input>
        <label htmlFor="10" className={select === 10 ? "select" : ""}>10</label>
    </div>
      
    </div>
  );
}

export default Rating;
