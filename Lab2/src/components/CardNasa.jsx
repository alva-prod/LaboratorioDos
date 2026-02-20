import React from 'react'

export const CardNasa = ({title, date, image = []}) => {
    const URL_image = image
    return (
        <section style={{ height: 200 }}>
            <h2 className='text-capitalize'>{title} </h2>
            <div>
                <a href={URL_image} target="_blank" rel="noopener noreferrer">
                    <img src={URL_image} alt={title} style={{ maxHeight: 150 }} />
                </a>
                <h3>{date}</h3>
            </div>
        </section>
    )
}

export default CardNasa