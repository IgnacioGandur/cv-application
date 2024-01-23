import NavBarStyle from '../styles/NavBar.module.css';

export default function Navbar() {
    function showInstructionsBox() {
        document.querySelector('#print-instructions').style.display = 'flex';
    }

    function notifyAfterPrint() {
        const notificationBox = document.querySelector('.notification-box');
        const notificationMessage = document.querySelector(
            '[data-notification-message]',
        );
        notificationBox.classList.toggle('notification-box--hidden');
        notificationMessage.textContent =
            'The CV has been downloaded 🎉\nCheck the path/folder of the download.';
    }

    function downloadPDF() {
        // Hide instuctions before printing.
        document.querySelector('#print-instructions').style.display = 'none';
        // Set the background image to the one chosen by the user.
        window.addEventListener('beforeprint', () => {
            document.body.style.backgroundImage =
                document.querySelector('#CV').style.backgroundImage;
        });
        // Remove background image after the printing/saving finished.
        window.addEventListener('afterprint', () => {
            notifyAfterPrint();
            document.body.style.backgroundImage = 'none';
        });
        // Print/Save the CV.
        window.print();
    }

    return (
        <>
            <div
                className={NavBarStyle['print-instructions']}
                id='print-instructions'
            >
                <div className={NavBarStyle['print-instructions__box']}>
                    <button
                        onClick={() => {
                            document.querySelector(
                                '#print-instructions',
                            ).style.display = 'none';
                        }}
                        className={
                            NavBarStyle[
                                'print-instructions__box__close-modal-button'
                            ]
                        }
                    >
                        <span className='material-icons-round'>close</span>
                    </button>
                    <div
                        className={
                            NavBarStyle['print-instructions__box__title']
                        }
                    >
                        <p>Instructions to download your CV as PDF</p>
                        <div
                            className={
                                NavBarStyle[
                                    'print-instructions__box__decoration'
                                ]
                            }
                        ></div>
                    </div>
                    <div
                        className={
                            NavBarStyle['print-instructions__box__instructions']
                        }
                    >
                        <div
                            className={
                                NavBarStyle[
                                    'print-instructions__box__instructions__step'
                                ]
                            }
                        >
                            <p>
                                (The steps will vary depending on the browser
                                you are using, I recommend you use Chrome for
                                the download)
                            </p>
                        </div>
                        <div
                            className={
                                NavBarStyle[
                                    'print-instructions__box__instructions__step'
                                ]
                            }
                        >
                            <span>01.</span>
                            <p>
                                After you close this modal, your browser would
                                open a printing/saving window with settings you
                                can adjust.
                            </p>
                        </div>
                        <div
                            className={
                                NavBarStyle[
                                    'print-instructions__box__instructions__step'
                                ]
                            }
                        >
                            <span>02.</span>
                            <p>
                                In the &ldquo;Layout&ldquo; option, choose
                                &ldquo;Portrait&ldquo;.
                            </p>
                        </div>
                        <div
                            className={
                                NavBarStyle[
                                    'print-instructions__box__instructions__step'
                                ]
                            }
                        >
                            <span>03.</span>
                            <p>
                                Click on &ldquo;More settings&ldquo; and choose
                                &ldquo;A4&ldquo; in the &ldquo;Paper size&ldquo;
                                option.
                            </p>
                        </div>
                        <div
                            className={
                                NavBarStyle[
                                    'print-instructions__box__instructions__step'
                                ]
                            }
                        >
                            <span>04.</span>
                            <p>
                                Set the &ldquo;Margins&ldquo; option to
                                &ldquo;None&ldquo;.
                            </p>
                        </div>
                        <div
                            className={
                                NavBarStyle[
                                    'print-instructions__box__instructions__step'
                                ]
                            }
                        >
                            <span>
                                05.{' '}
                                <i style={{ fontSize: '1.25rem' }}>
                                    This is the most important step!
                                </i>
                            </span>
                            <p>
                                {' '}
                                The size of the document will vary depending on
                                the amount of elements/information it contains.
                                To adjust the size; click on &ldquo;more
                                settings&ldquo;, set &ldquo;scale&ldquo; to
                                &ldquo;Custom&ldquo; and adjust the scale value
                                until the CV fits in one page.
                            </p>
                        </div>
                        <div
                            className={
                                NavBarStyle[
                                    'print-instructions__box__instructions__step'
                                ]
                            }
                        >
                            <span>
                                06.{' '}
                                <i style={{ fontSize: '1.25rem' }}>
                                    Crucial step!
                                </i>
                            </span>
                            <p>
                                Enable the &ldquo;Background graphics&ldquo;
                                checkbox to allow the correct displaying of
                                separators and images in the CV.
                            </p>
                        </div>
                        <div
                            className={
                                NavBarStyle[
                                    'print-instructions__box__instructions__step'
                                ]
                            }
                        >
                            <span>07.</span>
                            <p>Click the &ldquo;Save&ldquo; button.</p>
                        </div>
                        <div
                            className={
                                NavBarStyle[
                                    'print-instructions__box__instructions__step'
                                ]
                            }
                        >
                            <p>
                                (Your browser may not notify you after the
                                document saving. But the download will happen,
                                after the process finishes check the path/folder
                                you chose for the download)
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => downloadPDF()}
                        className={
                            NavBarStyle[
                                'print-instructions__box__continue-button'
                            ]
                        }
                        id='continue-button'
                    >
                        Continue
                    </button>
                </div>
            </div>
            <nav className={NavBarStyle.navbar} id='navbar'>
                <div className={NavBarStyle['hero-container']}>
                    <h1 className={NavBarStyle['navbar-title']}>
                        C v generator
                    </h1>
                    <img
                        className={NavBarStyle['navbar-icon']}
                        src='/cv.png'
                        alt='Webpage icon'
                    />
                </div>
                <button
                    title='Download your CV as PDF'
                    className={NavBarStyle['download-button']}
                    onClick={() => showInstructionsBox()}
                >
                    <span className='material-icons-round'>download</span>
                </button>
            </nav>
        </>
    );
}
