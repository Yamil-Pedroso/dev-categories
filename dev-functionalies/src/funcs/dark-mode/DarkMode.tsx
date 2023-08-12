import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import data from './data'
import Article from './Article'

type DarkModeProps = {
    theme: string | null
}


const getStorageTheme = () => {
    let theme = 'light-theme'
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme')!
    }
    return theme
}

const DarkMode = () => {
    const [theme, setTheme] = useState<DarkModeProps['theme']>(getStorageTheme())

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        } else {
            setTheme('light-theme')
        }
    }

    useEffect(() => {
        document.documentElement.className = theme as string
        localStorage.setItem('theme', theme as string)
    }, [theme])

  return (
    <main className='body_card__four'>
        <nav>
            <div className="nav-center">
                <h1>Hello</h1>
                {
                    theme === 'light-theme' ? <FaMoon 
                      style={{color: '#000'}}
                      onClick={toggleTheme}
                    /> : <FaSun 
                      onClick={toggleTheme}
                    />
                }
            </div>
        </nav>
            <section className="articles">
                {data.map((item) => {
                    return (
                        <Article
                            key={item.id}
                            title={item.title}
                            date={item.date.toISOString()} // convert Date object to string
                            length={item.length}
                            snippet={item.snippet}
                        />
                    );
                })}
            </section>
      </main>
  )
}

export default DarkMode