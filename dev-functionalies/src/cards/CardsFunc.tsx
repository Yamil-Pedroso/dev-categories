import { useState, useEffect } from 'react'
import { Container,HeaderContentWrapper, CardWrapper, CardHeader, Card, MenuItemWrapper, HeaderTitle } from './styles'
import './styles.css'
import Typical from 'react-typical'
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
import Reviews from '../funcs/reviews/Reviews'
import DarkMode from '../funcs/dark-mode/DarkMode'
import DragAndDrop from '../funcs/drag-and-drop/DragAndDrop'
import AppDropFiles from '../funcs/upload-files/AppDropFiles'
import ScrollingComp from '../funcs/scrolling-comp/ScrollingComp'
import Search from '../funcs/search/Search'
import GoogleMaps from '../funcs/maps/Maps' 
import images from './images'

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


const CardsFunc: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState(myMenuObj[0].component)
  const [isVisible, setIsVisible] = useState(true); 
  const [isShrunk, setIsShrunk] = useState(false);
  const [isSmallSize, setIsSmallSize] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { isLogged, logout } = UseAuth();

  const handleLogout = () => {
    logout('userId');
    setActiveComponent(
        <Login />
       );
  }

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const handleActiveComponent = (component: any, item: any) => {
    setIsVisible(false); 
    setSelectedItem(item as never);
    setTimeout(() => {
    setActiveComponent(component as never);
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

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    const shouldShrinkHeader = currentScrollPos > 100;
    setIsShrunk(shouldShrinkHeader);

    const shouldSmallHeader = currentScrollPos > 100;
    setIsSmallSize(shouldSmallHeader);

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Container>
        
        <HeaderContentWrapper>
          <img src={images.rocketOne} alt="rocket" width={40} className='rocket-one' />
          {isVisible && (
        <CardHeader
          isShrunk={isShrunk}
        >
          <HeaderTitle
            isSmallSize={isSmallSize}
          >
            {"{ ..."}
            <div>
              <Typical
                steps={['Dev Functionalities', 15000, "All in One", 6000]}
                loop={Infinity}
              />
            </div>
            {" }"}
          </HeaderTitle>
        </CardHeader>
      )}
          <img src={images.rocketTwo} alt="rocket" width={50} className='rocket-two' />
        </HeaderContentWrapper>
       <h4>
         Mini functionalities for different applications compiled in one place.
       </h4>
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
              <ScrollingComp />
             </Card>
        </CardWrapper>
        <CardWrapper>
            <Card>
              <Reviews />
            </Card>

            <Card>
              <DarkMode />
            </Card>
        </CardWrapper>

         <CardWrapper>
            <Card>
              <DragAndDrop />
            </Card>

            <Card>
              <AppDropFiles />
            </Card>
        </CardWrapper>
         <CardWrapper>
            <Card>
              <GoogleMaps />
            </Card>

            <Card>
              <Search />
            </Card>
        </CardWrapper>
        <InfiniteScroll />
    </Container>
  )
}

export default CardsFunc