// write the book component code here

const BookCard = ({book}) =>{
    return (
        <div style={{
            border: '2px solid red',
            textAlign: 'center',
            padding: '10px',
            margin: '10px',
            width: '200px'
        }}>
            <img src={book.image} alt={book.name} style={{ width: '100%', borderRadius: '5px' }} />
            <h3>{book.name}</h3>
            <p>{book.genre}</p>
            <p>{book.author}</p>
        </div>
    )
}


export default BookCard