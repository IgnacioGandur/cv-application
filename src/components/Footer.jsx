import Styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={Styles.footer} id='footer'>
            <p className={Styles.author}>
                <span className={Styles.name}>
                    Ignacio Gandur | The Odin Project{' '}
                </span>
                <a
                    title='Github link'
                    className={Styles.link}
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/IgnacioGandur/cv-application'
                >
                    <i className={`${Styles.icon} fa-brands fa-github-alt`}></i>
                </a>
            </p>
        </footer>
    );
}
