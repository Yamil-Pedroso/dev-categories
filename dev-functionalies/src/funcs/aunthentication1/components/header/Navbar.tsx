import { Link } from 'react-router-dom'
import { UseAuth } from '../../hook/AuthContext'

// Styled components
import { Container, UlList, LiList, UserProperWrapper, ImgProfileWrapper } from './styles'

const Navbar = () => {
   const { isLogged, logout, user } = UseAuth() as any;

  const handleLogout = async () => {
    try {
        logout(localStorage.getItem('userId')!);
    } catch (error) {
        console.log(error);
    }
    };

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
                      <div>
                        <p>Welcome {user.name}</p>
                      </div>
                      <ImgProfileWrapper>
                        <img src={user.avatar} alt="profile" width={65} height={50} />
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