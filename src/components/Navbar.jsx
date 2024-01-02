import NavBarStyle from '../styles/NavBar.module.css'

export default function Navbar() {
    return (
        <>
            <nav className={NavBarStyle.navbar}>
                <h1 className={NavBarStyle['navbar-title']}>C v generator</h1>
                <img className={NavBarStyle['navbar-icon']} src='/cv.png' alt='Webpage icon'/>
            </nav>
        </>
    )
}
