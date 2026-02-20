import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { Card } from './Card'
import { Loading } from './Loading'
import { useFetch } from '../hooks/useFetch'
import CardNasa from './CardNasa'

const CustomHook2 = () => {
    const { counter, random } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1995-06-16`)

    return (
        <>
            <h1>Fetch API NASA</h1>
            <hr />
            <h2>Nombre: {data?.title}</h2>
            {isLoading ? <Loading />
                : (
                    <CardNasa title={data.title} image={data.url} date={data.date} />
                )}
            <button className='btn btn-primary' onClick={() => random()} >Randomizar</button>
        </>
    )
}

export default CustomHook2