export default function NewBook(){
    return (
        <div>
        <h1>Create a New Book</h1>
        <form action='/api/books' method='POST'>
                    Name: <input type="text" name="name"/>
                    <br/>
                    Author: <input type="text" name="author"/>
                    <br/>
                    Image: <input type="text" name="image"/>
                    <br/>
                    Category: 
                    <select name="category">
                        <option value="children">Children</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="mystery">Mystery</option>
                        <option value="horror">Horror</option>
                        <option value="science">Science</option>
                        <option value="history">History</option>
                        <option value="exercise">Exercise</option>
                    </select>
                    <br/>
                    Year: <input type="number" name="year"/>
                    <br/>
                    Price: <input type="number" name="price"/>
                    <br/>
                    <input type="submit" value="Create new Book"/>
                </form>
        </div>
    )
}

