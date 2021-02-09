import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

//always return jsx
//stateless function

let books = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg',
  },
  {
    title: 'The Duke and I (Bridgertons Book 1)',
    author: 'Julia Quin',
    img: 'https://m.media-amazon.com/images/I/91SnTS+BWSL.jpg',
  },
  {
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K. Rowling',
    img: 'https://m.media-amazon.com/images/I/81NEMbJJg8L._SX140_.jpg',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        let { img, title, author } = book
        console.log(book)
        return <Book book={book}></Book>
      })}
    </section>
  )
}

let Book = ({ title, author, img }) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
