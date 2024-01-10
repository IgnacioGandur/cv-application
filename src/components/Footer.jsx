import Styles from '../styles/footer.module.css'

export default function Footer () {
    return(
        <footer className={Styles.footer}>
            <p className={Styles.author}>Ignacio Gandur | The Odin Project 
                <a title='Go to Github link' className={Styles.link} target='_blank' rel='noreferrer' href="https://github.com/IgnacioGandur/cv-application">
                    <i className={`${Styles.icon} fa-brands fa-github-alt`}></i>
                </a>
            </p>
        </footer>
    )
}
