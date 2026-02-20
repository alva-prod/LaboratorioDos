import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { Card } from './Card'
import { Loading } from './Loading'
import { useFetch } from '../hooks/useFetch'

const CustomHook = () => {
    const { counter, decrement, increment,reset } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    return (
        <>
            <h1>Fetch API Pokemon</h1>
            <hr />
            <h2>Nombre: {data?.name}</h2>
            {isLoading ? <Loading />
                : (<Card id={counter} name={data.name} sprites={[
                    data.sprites.front_default,
                    data.sprites.front_shiny,
                    data.sprites.back_default,
                    data.sprites.back_shiny,
                ]} />)}
            <button className='btn btn-primary' onClick={() => decrement()} >Anterior</button>
            <button className='btn btn-primary' onClick={() => increment()} >Siguiente</button>
            <button className='btn btn-primary' onClick={() => reset()} >Reiniciar</button>
        </>
    )
}

export default CustomHook