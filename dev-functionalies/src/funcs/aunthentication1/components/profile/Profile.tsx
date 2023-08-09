import { UseAuth } from '../../hook/AuthContext'
import { Link } from 'react-router-dom'
import { Container, ImgWrapper, IconWrapper, UserInfoWrapper, SmsWrapper, EditProfileWrapper } from './styles'
import { AiOutlineUser, AiOutlineMail, AiOutlineCalendar, AiOutlineLock } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { BsTelephoneForward } from 'react-icons/bs'


const Profile = () => { 
  const { isLogged, user } = UseAuth() as any
  return (
    <Container>
      {isLogged ? (
        <div>
          <ImgWrapper>
            <img src={user.avatar} alt="profile" />
          </ImgWrapper>
           <EditProfileWrapper>
            <Link
              to="/me/update"
              style={{ textDecoration: 'none', color: '#88419c', marginTop: '1rem', fontFamily: 'Roboto, sans-serif' }}
            >Edit</Link>

            <Link to="/update-password" style={{ textDecoration: 'none', color: '#88419c', marginTop: '1rem', fontFamily: 'Roboto, sans-serif' }}>
              Change Password 
            </Link>
          </EditProfileWrapper>
          <UserInfoWrapper>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
            <p>{user.profession}</p>
          </UserInfoWrapper>

          <IconWrapper>
            <div>
              <AiOutlineUser size={48} />
            </div>
            <div>
              <AiOutlineMail size={48} />
            </div>
            <div>
              <AiOutlineCalendar size={48} />
            </div>
            <div>
              <BiMap size={48} />
            </div>
            <div>
              <BsTelephoneForward size={43} />
            </div>
            <div>
              <AiOutlineLock size={48} />
            </div>
          </IconWrapper>
        </div>
      ) : (
        <SmsWrapper>
          <h2>You are not logged in!</h2>
        </SmsWrapper>
      )}
    </Container>
  )
}

export default Profile