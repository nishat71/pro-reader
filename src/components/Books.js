import React from 'react'
import Book from './Book'
import { useLoaderData } from 'react-router-dom'

const Books = () => {
  // const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.itbook.store/1.0/new")
  //     .then((res) => res.json())
  //     .then(data => {
  //       setBooks(data)
  //       console.log(data)
  //     });
  // }, [])
  
  const loadData = useLoaderData();
  const booksData = loadData.books;
  console.log(booksData)

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
        {booksData.map(book => (
          <Book key={book.isbn13} book={book} />
        ))}
      </div>
    </div>
  )
}

export default Books
