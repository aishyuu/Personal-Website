import './index.css'
import Logo from '../../Assets/Logo.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Show, Hide, Menu, MenuButton, MenuList, MenuItem, IconButton, Divider } from '@chakra-ui/react'

export default function Navbar({darkMode, setDarkMode}) {
    return(
        <div className={darkMode === true ? "dark-mode navbar-full" : "light-mode navbar-full"}>
            <div className="navbar-content">    
                    <div className = {darkMode === true ? "dark-mode logo-content" : "light logo-content"}>
                        <Link to="/Personal-Website" className='logo'>
                            <img src={Logo} className="logo-image" alt="logo" />
                            <h3 className="logo-text">Ivan Matias</h3>
                        </Link>
                    </div>
                <Hide breakpoint='(max-width: 900px)'> 
                    <div className = {darkMode === true ? "dark-mode nav-content" : "light nav-content"}>
                        <Link to="/works" className='nav-link'>
                            <h3 className="nav-text">Works</h3>
                        </Link>
                        <Link to="/contact" className='nav-link'>
                            <h3 className="nav-text">Contact</h3>
                        </Link>
                        <a  href="https://github.com/aishyuu/Personal-Website" className ={darkMode === true ? "dark-mode source-link" : "light source-link"}>
                            <FontAwesomeIcon className="github-icon" icon={faGithub} /> 
                            <h3 className='nav-text'>Source</h3>
                        </a>
                    </div>
                </Hide>
                <Show breakpoint='(max-width: 900px)'>
                    <Menu>
                        <MenuButton 
                            as={IconButton}
                            aria-label='Menu'
                            icon={<FontAwesomeIcon icon={faBars} />}
                            variant='outline'
                            className={darkMode===true ? "menu-button menu-button-dark" : "menu-button menu-button-light"}
                        />
                        <MenuList className={darkMode===true ? "menu-list-dark" : "menu-list-light"}>
                            <MenuItem className={darkMode===true ? "menu-list-dark" : "menu-list-light"}>
                                <Link to ="/works">
                                    Works
                                </Link>
                            </MenuItem>
                            <Divider/>
                            <MenuItem className={darkMode===true ? "menu-list-dark" : "menu-list-light"}>
                                <Link to='/contact'>
                                    Contact Me
                                </Link>
                            </MenuItem>
                            <MenuItem className={darkMode===true ? "menu-list-dark" : "menu-list-light"}>
                                <a href='https://github.io'>
                                    Source Code
                                </a>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Show>
                
                <div className={darkMode === true ? "toggle-div dark-toggle" : "toggle-div light-toggle"}>
                    <button className="dark-mode-toggle" onClick={setDarkMode.toggle}>
                        <FontAwesomeIcon icon={darkMode === true ? faMoon : faSun} />
                    </button>
                </div>    
            </div>
        </div>
    )
}