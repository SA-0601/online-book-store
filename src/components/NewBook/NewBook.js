
import * as adminAPI from '../../utilities/admin-api';
import { useState } from 'react';
export default function NewBook(){
    const [book, setBook] = useState([]);
    function onValueChange(event){
        
        setBook({...book,[event.target.name]: event.target.value});
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
      console.log('hello');
      console.log(book.category);
        await adminAPI.createBook(book);
     
      }
    return (
        
        <div>
        <h1>Create a New Book</h1>
       <form>
                    Name: <input onChange={(e)=>onValueChange(e)} type="text" name="name"/>
                    <br/>
                    Author: <input onChange={(e)=>onValueChange(e)} type="text" name="author"/>
                    <br/>
                    Image: <input onChange={(e)=>onValueChange(e)} type="text" name="image"/>
                    <br/>
                    Category: 
                    <select onChange={(e)=>onValueChange(e)} name="category">
                        <option value="644fff083c825dce26a1b8e1">Children</option>
                        <option value="644fff083c825dce26a1b8e2">Fantasy</option>
                        <option value="644fff083c825dce26a1b8e3">Mystery</option>
                        <option value="644fff083c825dce26a1b8e4">Horror</option>
                        <option value="644fff083c825dce26a1b8e5">Science</option>
                        <option value="644fff083c825dce26a1b8e6">History</option>
                        <option value="644fff083c825dce26a1b8e7">Exercise</option>
                    </select>
                    <br/>
                    Year: <input onChange={(e)=>onValueChange(e)} type="number" name="year"/>
                    <br/>
                    Price: <input onChange={(e)=>onValueChange(e)} type="number" name="price"/>
                    <br/>
                    <input onClick={handleSubmit} type="submit" value="Create new Book" />
                </form>
        </div>
        
    )
}

