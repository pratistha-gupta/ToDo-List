import React,{useState,useEffect} from 'react';
import "./style2.css";


// we are using getlocal data function so that after 
// reload/refresh our data dont get erased
const getLocalData=()=>{
     const myList = localStorage.getItem("myToDoList");
     if(myList) return JSON.parse(myList);
     //to convert string -> array we use JSON.parse(str)
     // myList will be a string bcoz local storage is aalways stored in
     //  the following format : (string : key pair)
     else return [];
};
const ToDo = () => {
    const [cur,setCur] =useState("");
    const [item,setItem] =useState(getLocalData());
    const [editedItem,setEditedItem] = useState("");
    const [ToggleBtn,setToggleBtn] = useState(false);
     const deleteItem = (uniqueID) =>{
        // using filter :
        const updatedList = item.filter((ele) =>{
            return ele.id !== uniqueID;
        });
        setItem(updatedList);
     };
     const RemoveAll=()=>{
        setItem([]);
     };
     const addItem=() =>{
       if(!cur){
           alert('Please add something in your list');
       }
       else if(cur && ToggleBtn){
           setItem(
               item.map((ele)=>{
                if(ele.id===editedItem){
                    return {...ele, name : cur};
                }
                else return ele;
               })
           );
           setCur("");
           setToggleBtn(false);
       }
       else{
        //    for deletion of any item we need to create unique id for every item
        // creating object called UniqueItem having id and name
        const uniqueItem={
            id : new Date().getTime().toString(),
            name  : cur,
        };


           setItem([...item, uniqueItem]);
           setCur("");
       }
     };
     useEffect(() => {
        localStorage.setItem("myToDoList",JSON.stringify(item));
        //    to convert array to string we use JSON.stringify(arr);
     }, [item]);
     
     const editItem=(editID) =>{
        const myItem = item.find((ele)=>{
            return ele.id===editID;
        })
        setCur(myItem.name);
        setEditedItem(editID);
        setToggleBtn(true);
        // setToggleBtn(false);
     };
  return <>
     <div className='main_div'>
         <div className='child-div'>
             <figure>
                 <img src='./image/todo.jpg' alt='Todo'></img>
                 <figcaption> Add your list here...🤞</figcaption>
             </figure>
             <div className='addItems'>
                 <input type='text'
                  placeholder="✍️ Add items here"
                  className='form-control'
                  value={cur}
                  onChange={(event)=> setCur(event.target.value) }></input>
                  {ToggleBtn===false ? 
                 <i className='fa fa-plus add-btn' onClick={addItem}></i>
                 :
                 <i className='fa fa-edit add-btn' onClick={addItem}></i>}
             </div>
             <div className='showItems'>
                 {item.map((ele) =>{
                        return(

                            <div className='eachItem'>
                              
                     <h3>{ele.name}</h3>
                     <div className='todo-btn'>
                     <i className='far fa-edit add-btn' onClick={() => editItem(ele.id)}></i>
                     <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(ele.id)}></i>
                     </div>
                 </div>
                        )
                 })}
                 
             </div>
               <div className='showItems'>
                   <button className='btn effect04' data-sm-link-text='Remove All' onClick={RemoveAll}>
                       <span>Check List</span>
                   </button>
               </div>
         </div>
     </div>
  </>;
};

export default ToDo;
