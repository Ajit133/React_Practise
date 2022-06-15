import './App.css';
import { Component } from 'react';
import Book from './components/book';

class App extends Component{
  state = {
    books:[
      {id:1, bookName:'1984',writer:"George Orewell"},
      {id:2, bookName:"The Da Vinci Code",writer:"Dan Brown"},
      {id:3, bookName:"The Alchemist",writer:"Paulo Coelho"}
    ],
    showBooks : true
  }

deleteBookState = (index) =>{
  const books = [...this.state.books]
  books.splice(index,1)
  this.setState({
    books:books
  });
};
changeWithinput = (event,index) =>{
 const book = {
    ...this.state.books[index]
 }
 book.bookName = event.target.value;
 const books = [...this.state.books];
 books[index]=book;
 this.setState({books:books});

};
ToggleBooks = () =>{
  this.setState({showBooks : !this.state.showBooks})

}

  render(){
    let books = null 
    if (this.state.showBooks){
    books = this.state.books.map( (book,index) =>{
      return(
        <div>
          <h2>Book List</h2>  
        <Book 
        bookName={book.bookName} 
        writer = {book.writer} 
        delete = {()=>(this.deleteBookState(index))}
        key = {book.id}
        input = {(event)=>this.changeWithinput(event,index)}
        
        />
        </div>
    
      )
    })}
    return(
      <div className='App'>
        <h1>This is Book List</h1>
        <button onClick={this.ToggleBooks}>Toggle Books</button>
       {books}
      </div>
    )
  }
}


export default App;
