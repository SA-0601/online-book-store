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
                    Category: <input type="text" name="category"/>
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

