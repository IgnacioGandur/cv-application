// import "../styles/PersonalInfo.css";
import PersonalInfoStyle from '../styles/FormElements.module.css';

export default function PersonalInfo({
    gatherPersonalInfo,
    handleProfilePicture,
}) {
    return (
        <>
            <h2 className={PersonalInfoStyle['h2-title']}>
                Fill in the fields
            </h2>
            <fieldset className={PersonalInfoStyle.fieldset}>
                <legend className={PersonalInfoStyle.fieldset__legend}>
                    Location
                </legend>
                <div
                    className={PersonalInfoStyle['fieldset__inputs-container']}
                >
                    <label
                        className={
                            PersonalInfoStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='country'
                    >
                        Country
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) => gatherPersonalInfo(e)}
                            type='text'
                            name='country'
                            id='country'
                            placeholder='Argentina'
                            maxLength='20'
                            autoComplete='true'
                        />
                    </label>
                    <label
                        className={
                            PersonalInfoStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='city'
                    >
                        Province/State/City
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) => gatherPersonalInfo(e)}
                            type='text'
                            name='city'
                            id='city'
                            placeholder='Tucumán'
                            maxLength='30'
                        />
                    </label>
                    <label
                        className={
                            PersonalInfoStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='address'
                    >
                        Address
                        <input
                            className={PersonalInfoStyle.input}
                            type='text'
                            name='address'
                            id='address'
                            onChange={(e) => gatherPersonalInfo(e)}
                            placeholder='Your address here...'
                            maxLength='40'
                            autoComplete='true'
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset className={PersonalInfoStyle.fieldset}>
                <legend className={PersonalInfoStyle.fieldset__legend}>
                    About you
                </legend>
                <div
                    className={PersonalInfoStyle['fieldset__inputs-container']}
                >
                    <label
                        className={
                            PersonalInfoStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='firstName'
                    >
                        First name
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) => gatherPersonalInfo(e)}
                            type='text'
                            name='firstName'
                            id='firstName'
                            autoComplete='true'
                            placeholder='First name'
                            maxLength='15'
                        />
                    </label>
                    <label
                        className={
                            PersonalInfoStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='lastName'
                    >
                        Last name
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) => gatherPersonalInfo(e)}
                            type='text'
                            name='lastName'
                            id='lastName'
                            autoComplete='true'
                            placeholder='Last name'
                            maxLength='20'
                        />
                    </label>
                    <label
                        className={
                            PersonalInfoStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='ocupation'
                    >
                        Ocupation
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) => gatherPersonalInfo(e)}
                            type='text'
                            name='ocupation'
                            id='ocupation'
                            placeholder='Web developer'
                            maxLength='30'
                        />
                    </label>
                </div>
                <div
                    className={PersonalInfoStyle['fieldset__inputs-container']}
                >
                    <label
                        className={
                            PersonalInfoStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='email'
                    >
                        Email
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) => gatherPersonalInfo(e)}
                            type='email'
                            name='email'
                            id='email'
                            autoComplete='true'
                            placeholder='YourMail@mail.com'
                            maxLength='40'
                        />
                    </label>
                    <label
                        className={
                            PersonalInfoStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='phoneNumber'
                    >
                        Phone number
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) => gatherPersonalInfo(e)}
                            type='tel'
                            name='phoneNumber'
                            id='phoneNumber'
                            autoComplete='true'
                            placeholder='+54 123 456 7890'
                            maxLength='20'
                        />
                    </label>
                </div>
                <div
                    className={PersonalInfoStyle['fieldset__inputs-container']}
                >
                    <label
                        className={
                            PersonalInfoStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='aboutMe'
                    >
                        A small description about you
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) => gatherPersonalInfo(e)}
                            type='text'
                            name='aboutMe'
                            id='aboutMe'
                            placeholder='A concise description about you...'
                            maxLength='325'
                        />
                    </label>
                    <label
                        className={
                            PersonalInfoStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='profilePicture'
                    >
                        Select a profile picture
                        <input
                            className={`${PersonalInfoStyle.input} ${PersonalInfoStyle['input-type-file']}`}
                            onChange={(e) =>
                                handleProfilePicture(e.target.files[0])
                            }
                            id='profilePicture'
                            name='profilePicture'
                            type='file'
                            accept='image/png, image/jpg, image/jpeg'
                        />
                    </label>
                </div>
                <div
                    className={PersonalInfoStyle['fieldset__inputs-container']}
                >
                    <label
                        className={
                            PersonalInfoStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='xTwitter'
                    >
                        Your X/Twitter @
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) => gatherPersonalInfo(e)}
                            id='xTwitter'
                            name='xTwitter'
                            type='text'
                            placeholder='UserName'
                        />
                    </label>
                    <label
                        className={
                            PersonalInfoStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='instagram'
                    >
                        Instagram profile
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) => gatherPersonalInfo(e)}
                            id='instagram'
                            name='instagram'
                            type='url'
                            placeholder='UserName'
                        />
                    </label>
                    <label
                        className={
                            PersonalInfoStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='linkedin'
                    >
                        Linkedin profile
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) => gatherPersonalInfo(e)}
                            id='linkedin'
                            name='linkedin'
                            type='text'
                            placeholder='UserName'
                        />
                    </label>
                    <label
                        className={
                            PersonalInfoStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='portfolioLink'
                    >
                        Personal portfolio/website url
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) => gatherPersonalInfo(e)}
                            id='portfolioLink'
                            name='portfolioLink'
                            type='url'
                            placeholder='https://www.YourPortfolio.com'
                            maxLength='40'
                            autoComplete='true'
                        />
                    </label>
                </div>
            </fieldset>
        </>
    );
}
