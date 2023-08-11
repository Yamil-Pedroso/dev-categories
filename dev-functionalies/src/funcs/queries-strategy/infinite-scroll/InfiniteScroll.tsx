import { useState, useEffect } from 'react'
import { Container, CharacterWrapper } from './styles'
import axios from 'axios'

const InfiniteScroll = () => {
  let pages = 0
  const [characters, setCharacters] = useState([])

   const loadMoreCharacters = async () => {
        await axios.get(`https://rickandmortyapi.com/api/character/?page=${pages}`) 

        .then(res => {
            const newCharacters: any[] = []

            res.data.results.map((character: any) => newCharacters.push(character))
            setCharacters((oldCharacter: any) => [...oldCharacter, ...newCharacters])
        })

        pages += 1
    }

   const handleScroll = (e: any) => {
       const container = e.target.documentElement as HTMLElement
      if (
        Number(container.scrollTop) + window.innerHeight >= container.scrollHeight
      ) {
        loadMoreCharacters()
      }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        loadMoreCharacters()
    }, [])

  return (
    <Container>
        {
            characters.map((character: any) => {
                return (
                    <CharacterWrapper key={character.id}>
                        <img src={character.image} alt={character.name} />
                        <h3>{character.name}</h3>
                    </CharacterWrapper>
                )
            }
            )
        }
    </Container>
  )
}

export default InfiniteScroll