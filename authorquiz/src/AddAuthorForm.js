import React from 'react';
import './AddAuthorForm.css';

class AddAuthor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            imageUrl: "",
            books:[],
            bookTemp:''
        };
        this.onFieldChange=this.onFieldChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleBookTempAdd=this.handleBookTempAdd.bind(this);
    }
    onFieldChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }
    handleBookTempAdd(event){
        
        this.setState({
            books:this.state.books.concat([this.state.bookTemp]),
            bookTemp:''
        });
    }
    render() {
        return (
            <form className='AddAuthorForm' onSubmit={this.handleSubmit}>
                <div className='AddAuthorForm__input'>
                    <label htmlFor='name'>Name </label>
                    <input type='text' name='name' value={this.state.name} onChange={this.onFieldChange}/>
                </div>
                <div className='AddAuthorForm__input'>
                    <label htmlFor='imageUrl'>Image URL </label>
                    <input type='text' name='imageUrl' value={this.state.imageUrl} onChange={this.onFieldChange
                    }/>
                </div>
                <div className='AddAuthorForm__input'>
                    <label htmlFor='Books'>Books </label>
                    {this.state.books.map((book) => <p key={book}>{book}</p>)}
                    <input type='text' name='bookTemp' value={this.state.bookTemp} onChange={this.onFieldChange} />
                    <input type='button' value='+' onClick={this.handleBookTempAdd}/>
                </div>
                    <input type='submit' value='Add'/>  
            </form>
        )
    }
}

function AddAuthorform({match,onAddAuthor}){
    return(<div> 
        <h1>Add Author</h1>
       <AddAuthor onAddAuthor={onAddAuthor}/>
    </div>);
}

export default AddAuthorform;