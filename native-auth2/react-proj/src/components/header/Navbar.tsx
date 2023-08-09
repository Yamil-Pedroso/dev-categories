import { Link } from 'react-router-dom'
import { UseAuth } from '../../hook/AuthContext'

// Styled components
import {
  Container,
  UlList,
  LiList,
  UserProperWrapper,
  ImgProfileWrapper,
  WelcomeWrapper,
  WelcomeText,
} from './styles'

const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isLogged, logout, user } = UseAuth() as any

  const handleLogout = async () => {
    try {
      logout(localStorage.getItem('userId')!)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <UlList>
        <LiList>
          <Link to="/"> Home </Link>
        </LiList>

        <LiList>
          <Link to="/profile"> Profile </Link>
        </LiList>

        <LiList>
          {isLogged ? (
            <UserProperWrapper>
              <WelcomeWrapper>
                <WelcomeText>
                  <span>Welcome</span> {user.name}
                </WelcomeText>
              </WelcomeWrapper>
              <ImgProfileWrapper>
                <img
                  src={user.avatar && user.avatar.url}
                  alt="profile"
                  width={65}
                  height={50}
                />
              </ImgProfileWrapper>
              <div>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </UserProperWrapper>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </LiList>
      </UlList>
    </Container>
  )
}

export default Navbar
