import { ListContainer, CardWrapper, Card } from "./styles"

interface ListProps {
    people: {
        id: number,
        name: string,
        age: number,
        image: string
    }[]
}

const List = (props: ListProps) => {
    const { people } = props;
  
    return (
    <ListContainer>
        {people.map((person) => {
            const { id, name, age, image } = person;

            return (
                <CardWrapper key={id}>
                    <Card>
                      <img src={image} alt={name} />
                      <div>
                          <h4>{name}</h4>
                          <p>{age} years</p>
                      </div>
                    </Card>
                </CardWrapper>
            )
        }
        )}
    </ListContainer>
  )
}

export default List