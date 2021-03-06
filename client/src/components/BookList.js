import React,{Component} from 'react';
import {graphql} from 'react-apollo';

import {getBooksQuery} from '../queries/queries';
import BookDetails from './BookDetails';


class BookList extends Component{
  constructor(props){
      super(props);
      this.state={
          selectedId:null
      }
  }
    displayBooks(){
        var data = this.props.data;
        if(data.loading){
            return(<div>Loading</div>);
        }else{
            return data.books.map(book=>{
                return(
                    <li key={book.id} onClick={(e)=>{this.setState({selectedId:book.id})}}>{book.name}</li>
                );
            });
        }
    }
  
    render(){
  
  return (
    <div>
        <ul id="book-list">
            <li>Book name</li>
            {this.displayBooks()}
        </ul>
        <BookDetails bookId={this.state.selectedId}/>
    </div>
  );
    }
}

export default graphql(getBooksQuery)(BookList);
