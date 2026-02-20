// CustomHook3.jsx
import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { Loading } from './Loading'
import { useFetch } from '../hooks/useFetch'
import CardBook from './CardBook'

const TOPICS = ['harry+potter', 'lord+of+the+rings', 'dune', 'tolkien', 'stephen+king', 'sherlock+holmes', 'dracula', 'frankenstein']

const CustomHook3 = () => {
    const { counter, random } = useCounter(0)
    const topic = TOPICS[counter % TOPICS.length]
    const { data, hasError, isLoading } = useFetch(`https://openlibrary.org/search.json?q=${topic}&limit=1`)

    const book = data?.docs?.[0]

    return (
        <>
            <h1>Fetch API Open Library</h1>
            <hr />
            <h2>Título: {book?.title ?? '...'}</h2>
            {isLoading ? <Loading />
                : hasError ? <p>Error loading book data</p>
                : book && (
                    <CardBook
                        title={book.title}
                        author={book.author_name?.[0] ?? 'Unknown'}
                        year={book.first_publish_year}
                        coverId={book.cover_i}
                        subject={book.subject?.[0] ?? 'N/A'}
                    />
                )}
            <button className='btn btn-primary' onClick={() => random()}>Randomizar</button>
        </>
    )
}

export default CustomHook3