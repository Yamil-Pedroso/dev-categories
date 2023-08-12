import { useState, useEffect } from 'react'
import { Container, CardWrapper, Card, MenuItemWrapper, HeaderTitle } from './styles'
import './styles.css'
import { UseAuth } from '../funcs/aunthentication1/hook/AuthContext'
import HomePage from '../funcs/aunthentication1/pages/HomePage'
import Navbar from '../funcs/aunthentication1/components/header/Navbar'
import Profile from '../funcs/aunthentication1/components/profile/Profile'
import Login from '../funcs/aunthentication1/components/login-form/LoginForm'
import Register from '../funcs/aunthentication1/components/register/RegisterForm'
import ForgotPassword from '../funcs/aunthentication1/components/forgot-password/ForgotPassword'
import UpdatePassword from '../funcs/aunthentication1/components/update-password/UpdatePassword'
import UpdateProfile from '../funcs/aunthentication1/components/update-profile/UpdateProfile'
import InfiniteScroll from '../funcs/queries-strategy/infinite-scroll/InfiniteScroll'
import BirthdayReminder from '../funcs/birthday-reminder/BirthdayReminder'
import Reviews from '../funcs/reviews/Reviews'
import DarkMode from '../funcs/dark-mode/DarkMode'


const myMenuObj = [
  {
    id: 1,
    name: 'Home',
    component: <HomePage />
  },
  {
    id: 2,
    name: 'Profile',
    component: <Profile />
  },
  {
    id: 3,
    name: 'Login',
    component: <Login />
  },
  {
    id: 4,
    name: 'Register',
  component: <Register />
  },
  {
    id: 5,
    name: 'Forgot Password',
    component: <ForgotPassword />
  },
  {
    id: 6,
    name: 'Update Password',
    component: <UpdatePassword />
  },
  {
    id: 7,
    name: 'Update Profile',
    component: <UpdateProfile />
  }
]


const CardsFunc = () => {
  const [activeComponent, setActiveComponent] = useState(myMenuObj[0].component)
  const [isVisible, setIsVisible] = useState(true); 
  const [selectedItem, setSelectedItem] = useState(null);
  const { isLogged, logout, user } = UseAuth();

  const handleLogout = () => {
    logout(); 
    setActiveComponent(
        <Login />
       );
  }

   const handleActiveComponent = (component: any, item: any) => {
    setIsVisible(false); 
    setSelectedItem(item);
    setTimeout(() => {
    setActiveComponent(component);
    setIsVisible(true); 
    }, 400); 
  }

  useEffect(() => {
    if(isLogged) {
      setActiveComponent(<HomePage />);
    }
  }, [isLogged])

  const colorStyle = {
    color: '#7b42dd'
  }


  return (
    <Container>
       <HeaderTitle>Dev Functionalities</HeaderTitle>
        <CardWrapper>
            <Card>
                <Navbar />
                <MenuItemWrapper>
                  {
                    myMenuObj.map((item) => {
                      return (
                          <div
                            onClick={() => item.name === 'Login' ? handleLogout() : handleActiveComponent(item.component, item)}
                            key={item.id}
                            style={{ 
                              opacity: isVisible ? 1 : 0, 
                              transform: `translateY(${isVisible ? 0 : -10}px)`, 
                              transition: 'opacity 0.3s ease, transform 0.3s ease', 
                              color: selectedItem === item ? colorStyle.color : '#fff'
                            }}
                            >
                              
                              <p
                  
                              >
                                {isLogged && item.name === 'Login' ? 'Logout' : item.name}
                              </p>
                               
                          </div>
                      )
                    })
                  }
                  </MenuItemWrapper>
                  <div className={isVisible ? 'visible' : 'hidden'}>
                   {
                    activeComponent
                   }
                  </div>
            </Card>

            <Card>
              <BirthdayReminder />
            </Card>
        </CardWrapper>
        <CardWrapper>
            <Card>
              <Reviews />
            </Card>

            <Card style={{ overflow: "scroll", transition: "all 0.3s linear"}}>
              <DarkMode />
            </Card>
        </CardWrapper>

         <CardWrapper>
            <Card>
               Drag adn Drop
            </Card>

            <Card>
                Satisfaying Percentage
            </Card>
        </CardWrapper>
        <InfiniteScroll />
    </Container>
  )
}

export default CardsFunc