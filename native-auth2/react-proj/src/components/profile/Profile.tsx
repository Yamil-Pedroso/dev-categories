import { useState } from 'react'
import { UseAuth } from '../../hook/AuthContext'
import { Link } from 'react-router-dom'
import {
  Container,
  ImgWrapper,
  IconWrapper,
  UserInfoWrapper,
  SmsWrapper,
  EditProfileWrapper,
  UserIconProperties,
  MyIconsProfileWrapper,
} from './styles'
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineLock,
} from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { BsTelephoneForward } from 'react-icons/bs'

const myIcons = [
  <AiOutlineUser size={48} />,
  <AiOutlineMail size={48} />,
  <AiOutlineCalendar size={48} />,
  <BiMap size={48} />,
  <BsTelephoneForward size={43} />,
  <AiOutlineLock size={48} />,
]

const Profile = () => {
  const [activeIconIndex, setActiveIconIndex] = useState<number | null>(null)

  const handleIconHover = (index: number) => {
    setActiveIconIndex(index)
  }

  const handleIconLeave = () => {
    setActiveIconIndex(null)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isLogged, user } = UseAuth() as any

  const iconsProperties = {
    user: user.name,
    email: user.email,
    calendar: 'Birthday',
    map: 'Address',
    telephone: 'Phone',
    lock: 'Password',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any

  const handleIcons = () => {
    if (activeIconIndex !== null) {
      const iconKey = Object.keys(iconsProperties)[activeIconIndex]
      return iconsProperties[iconKey]
    }
    return null
  }

  return (
    <Container>
      {isLogged ? (
        <div>
          <ImgWrapper>
            <img src={user.avatar && user.avatar.url} alt="profile" />
          </ImgWrapper>
          <EditProfileWrapper>
            <Link
              to="/me/update"
              style={{
                textDecoration: 'none',
                color: '#88419c',
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              Edit
            </Link>

            <Link
              to="/update-password"
              style={{
                textDecoration: 'none',
                color: '#88419c',

                fontFamily: 'Roboto, sans-serif',
              }}
            >
              Change Password
            </Link>
          </EditProfileWrapper>
          <UserInfoWrapper>
            {handleIcons() ? (
              <UserIconProperties>{handleIcons()}</UserIconProperties>
            ) : (
              <h2 style={{ position: 'absolute', top: '1.5rem' }}>
                {user.name}
              </h2>
            )}
          </UserInfoWrapper>

          <IconWrapper>
            {myIcons.map((icon, index) => {
              return (
                <MyIconsProfileWrapper
                  key={index}
                  onMouseEnter={() => handleIconHover(index)}
                  onMouseLeave={handleIconLeave}
                >
                  {icon}
                </MyIconsProfileWrapper>
              )
            })}
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
