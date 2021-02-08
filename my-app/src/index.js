import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

//always return jsx
//stateless function

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

let Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Title />
      <Author />
    </article>
  )
}

let Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg'
    alt=''
  />
)

let Title = () => <h1>Atomic Habits</h1>
let Author = () => <h4>James Clear</h4>

ReactDom.render(<BookList />, document.getElementById('root'))
