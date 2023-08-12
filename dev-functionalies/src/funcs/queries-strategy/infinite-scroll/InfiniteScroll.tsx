import { useState, useEffect } from 'react'
import { Container, CharacterWrapper, CharacterContent, CharacterCard, LoadBtnWrapper } from './styles'
import './styles.css'
import axios from 'axios'

const InfiniteScroll = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(); // Inicializar pages en 1

  const loadMoreCharacters = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pages}`);
      const newCharacters = response.data.results;
      setCharacters((oldCharacters) => [...oldCharacters, ...newCharacters]);

      setPages(pages + 1); // Incrementar pages después de agregar personajes
    } catch (error) {
      console.error('Error loading more characters:', error);
    }
  };

    //const handleScroll = (e: any) => {
    //    const container = e.target.documentElement as HTMLElement
    //   if (
    //     Number(container.scrollTop) + window.innerHeight >= container.scrollHeight
    //   ) {
    //     loadMoreCharacters()
    //   }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    //     loadMoreCharacters()
    // }, [])

  return (
    <Container>
       <CharacterContent>
        {
          characters.map((character: any, index: number) => {
            return (
              <CharacterWrapper key={character.id}>
                 <CharacterCard>
                    <img src={character.image} alt={character.name} />
                    <div style={{}}>
                      <h4>{character.name}</h4>
                      <p>{character.species}</p>
                      <p>{character.status}</p>
                    </div>
                  </CharacterCard>
                </CharacterWrapper>
                )
              }
              )
            }
       </CharacterContent>
       <LoadBtnWrapper>
          <button onClick={loadMoreCharacters}>Rich and Morty</button>
       </LoadBtnWrapper>
    </Container>
  )
}

export default InfiniteScroll