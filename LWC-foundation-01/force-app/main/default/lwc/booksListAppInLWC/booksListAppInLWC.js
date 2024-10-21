import { LightningElement } from 'lwc';

const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default class BooksListAppInLWC extends LightningElement {
    query = 'Man';
    books = []; // Initialize books as an empty array;
    timer;

    connectedCallback() {
        this.fetchBookData();
    }

    fetchBookData() {
        fetch(BOOK_URL + this.query)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                
                if (data.items) {
                    // Filter the books to include only those with imageLinks present
                    const filteredBooks = data.items.filter(book => 
                        book.volumeInfo && book.volumeInfo.imageLinks
                    );
                    
                    // Merge new filtered books with existing books
                    this.books = [...this.books, ...filteredBooks];
                }
                // No need for else block; keep existing books as they are
            })
            .catch(error => console.error(error));
    }


    fetchBooksHandler(event)
    {
        this.query = event.target.value;
        //use this technique to reduce server calls every tym maintain some delay 
        //debouncing technique for searching
         window.clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.books = [];
            this.fetchBookData();
        }, 1000);
    }
}
