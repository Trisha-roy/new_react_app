import './book.css'
export default function Book({book}){
    const {name,price}=book
    return(
        <div className="books">
            <h4>Book is : {name}</h4>
            <p>Price is : {price}</p>
        </div>
    )
}