import { LightningElement } from 'lwc';
const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q='
export default class BooksListingApp extends LightningElement {
    query='Man'
    books
    timer
    connectedCallback(){
        this.fetchBookData()
    }

    fetchBookData(){
        fetch(BOOK_URL+this.query)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            this.books = data.items
        })
        .catch(error=>console.error('error is '+ error.body.message))
    }
    fetchBooksHandler(event){
        this.query = event.target.value
        window.clearTimeout(this.timer)
        this.timer= setTimeout(()=>{
            this.fetchBookData()
        }, 1000)
    }
}