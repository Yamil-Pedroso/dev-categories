import {useState} from 'react'
import data from './data'
import List from './List'
import { Container, SectionWrapper, BtnWrapper } from './styles'


const BirthdayReminder = () => {
  const [people, setPeople] = useState(data)

  return (
    <Container>
        <SectionWrapper>
            <h3>{people.length} birthdays today</h3>
            <List people={people} />
        <BtnWrapper>
            <button onClick={() => setPeople([])}>Clear All</button>
            <button onClick={() => setPeople(data)}>Reset All</button>
        </BtnWrapper>
        </SectionWrapper>
    </Container>
  )
}

export default BirthdayReminder