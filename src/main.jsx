import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer.jsx';
import CV from './components/CV.jsx';
import Navbar from './components/Navbar.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className='notification-box notification-box--hidden'>
            <button
                onClick={() => {
                    document
                        .querySelector('.notification-box')
                        .classList.toggle('notification-box--hidden');
                }}
                className='notification-box__close-button'
            >
                <i className='fa-regular fa-circle-xmark notification-box__close-button__i'></i>
            </button>
            <p
                className='notification-box__notification-message'
                data-notification-message
            >
                This is a sample notification message!
            </p>
        </div>
        <Navbar />
        <CV />
        <Footer />
    </React.StrictMode>,
);
