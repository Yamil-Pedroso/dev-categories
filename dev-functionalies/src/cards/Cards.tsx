import { Container, CardWrapper, Card } from './styles'
import HomePage from '../funcs/aunthentication1/pages/HomePage'
import Navbar from '../funcs/aunthentication1/components/header/Navbar'

type ICardProps = {
    array: Array<number>
}

const Cards = () => {
  return (
    <Container>
        <CardWrapper>
            <Card>
                <Navbar />
                <HomePage />
            </Card>

            <Card>
              Card 2
            </Card>
        </CardWrapper>
        <CardWrapper>
            <Card>
              Card 3
            </Card>

            <Card>
              Card 4
            </Card>
        </CardWrapper>
    </Container>
  )
}

export default Cards