import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

//always return jsx
//stateless function

let book =[
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    img:'https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg'},
  {
    title: 'The Duke and I (Bridgertons Book 1)',
    author: 'Julia Quin',
    img:'https://m.media-amazon.com/images/I/91SnTS+BWSL.jpg'},
  {
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K. Rowling',
    img:'https://m.media-amazon.com/images/I/81NEMbJJg8L._SX140_.jpg'
  }

function BookList() {
  return (
    <section className='booklist'>
      
    </section>
  )
}

let Book = ({title, author, img}) => {
  return (
    <article className='book'>
      {img}
      {title}
      {author}
    </article>
  )
}

let Image = () => (
  <img
    src=
    alt=''
  />
)

ReactDom.render(<BookList />, document.getElementById('root'))
