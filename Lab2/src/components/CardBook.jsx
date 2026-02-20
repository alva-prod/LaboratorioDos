// CardBook.jsx
import React from 'react'

const CardBook = ({ title, author, year, coverId, subject }) => {
    const coverUrl = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
        : 'https://via.placeholder.com/150x200?text=No+Cover'

    return (
        <section style={{ height: 200 }}>
            <h2 className='text-capitalize'>{title}</h2>
            <div>
                <a href={`https://openlibrary.org/search?q=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">
                    <img src={coverUrl} alt={title} style={{ maxHeight: 150 }} />
                </a>
                <h3>✍️ {author}</h3>
                <h4>📅 {year}</h4>
                <h4>📚 {subject}</h4>
            </div>
        </section>
    )
}

export default CardBook