import React from 'react'

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

export default Book
