import { UseAuth } from '../../hook/AuthContext'

// Styled components
import { Container, UlList, LiList, UserProperWrapper, ImgProfileWrapper } from './styles'

const Navbar = () => {
  const { isLogged, user } = UseAuth();
  
  return (
    <Container>
        <UlList>            
            <LiList>
                {isLogged && (
                    <UserProperWrapper>
                      <div>
                        <p><span>Welcome</span> {user.name}</p>
                      </div>
                      <ImgProfileWrapper>
                        <img src={user.avatar} alt="profile" width={65} height={50} />
                      </ImgProfileWrapper>
                    </UserProperWrapper>
                )}
            </LiList>
        </UlList>
    </Container>
  )
}

export default Navbar