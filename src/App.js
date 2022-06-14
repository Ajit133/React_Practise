import './App.css';
import { Component } from 'react';
import Book from './components/book';

class App extends Component{
  state = {
    books:[
      {bookName:'1984',writer:"George Orewell"},
      {bookName:"The Da Vinci Code",writer:"Dan Brown"},
      {bookName:"The Alchemist",writer:"Paulo Coelho"}
    ]
  }

deleteBookState = (index) =>{
  const books = [...this.state.books]
  books.splice(index,1)
  this.setState({
    books:books
  });

};

  render(){
    const books = this.state.books.map( (book,index) =>{
      return(
        <div>
          
        <Book 
        bookName={book.bookName} 
        writer = {book.writer} 
        delete = {()=>(this.deleteBookState(index))}
        />
        </div>
      )
    })
    return(
      <div className='App'>
        <h1>This is Book List</h1>
      {books}
      </div>
    )
  }
}


export default App;
