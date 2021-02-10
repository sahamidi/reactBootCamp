import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

//always return jsx
//stateless function

let books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg',
  },
  {
    id: 2,
    title: 'The Intelligent Investor',
    author: 'Benjamin Graham ',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91yj3mbz4JL._AC_UL200_SR200,200_.jpg',
  },
  {
    id: 3,
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K. Rowling',
    img: 'https://m.media-amazon.com/images/I/81NEMbJJg8L._SX140_.jpg',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

let Book = ({ img, title, author }) => {
  //attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert('hello world')
  }
  let complexExample = (author) => {
    console.log(author)
  }

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
