import React from 'react'
import ReactDom from 'react-dom'

//always return jsx
//stateless function

function BookList() {
  return (
    <section>
      <Book />
    </section>
  )
}

let Book = () => {
  return (
    <article>
      <Image></Image>
    </article>
  )
}

let Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg'
    alt=''
  />
)

ReactDom.render(<BookList />, document.getElementById('root'))
