// import "../styles/PersonalInfo.css";
import PersonalInfoStyle from '../styles/FormElements.module.css';

export default function PersonalInfo({ gatherPersonalInfo }) {
return (
		<>
            <h2 className={PersonalInfoStyle['h2-title']} >
                Personal Information <span className={PersonalInfoStyle['h2-title__span']} >( all items in the form are required! )</span>
            </h2>
            <fieldset className={PersonalInfoStyle.fieldset} >
                <legend className={PersonalInfoStyle.fieldset__legend} >Location</legend>
                <div className={PersonalInfoStyle['fieldset__inputs-container']}>
                    <label className={PersonalInfoStyle['fieldset__inputs-container__label']} htmlFor="country">
                        Country
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="text"
                            name="country"
                            id="country"
                            placeholder="Argentina"
                            maxLength='20'
                        />
                    </label>
                    <label className={PersonalInfoStyle['fieldset__inputs-container__label']} htmlFor="city">
                        Province/State/City
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Tucumán"
                            maxLength='30'
                        />
                    </label>
                    <label className={PersonalInfoStyle['fieldset__inputs-container__label']} htmlFor="address">
                        Address
                        <input
                            className={PersonalInfoStyle.input}
                            type="text"
                            name="address"
                            id="address"
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            placeholder="Your address here..."
                            maxLength='40'
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset className={PersonalInfoStyle.fieldset}>
                <legend className={PersonalInfoStyle.fieldset__legend} >About you</legend>
                <div className={PersonalInfoStyle['fieldset__inputs-container']}>
                    <label className={PersonalInfoStyle['fieldset__inputs-container__label']} htmlFor="first-name">
                        First name
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="true"
                            placeholder="First name"
                            maxLength='15'
                            required
                        />
                    </label>
                    <label className={PersonalInfoStyle['fieldset__inputs-container__label']} htmlFor="last-name">
                        Last name
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="true"
                            placeholder="Last name"
                            maxLength='20'
                            required
                        />
                    </label>
                    <label className={PersonalInfoStyle['fieldset__inputs-container__label']} htmlFor="ocupation">
                        Ocupation
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="text"
                            name="ocupation"
                            id="ocupation"
                            placeholder="Web developer"
                            maxLength='30'
                            required
                        />
                    </label>
                </div>
                <div className={PersonalInfoStyle['fieldset__inputs-container']}>
                    <label className={PersonalInfoStyle['fieldset__inputs-container__label']} htmlFor="email">
                        Email
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="true"
                            placeholder="YourMail@mail.com"
                            maxLength='40'
                            required
                        />
                    </label>
                    <label className={PersonalInfoStyle['fieldset__inputs-container__label']} htmlFor="phone-number">
                        Phone number
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="tel"
                            name="phone-number"
                            id="phone-number"
                            autoComplete="true"
                            placeholder="+54 123 456 7890"
                            maxLength='20'
                            required
                        />
                    </label>
                </div>
                <div className={PersonalInfoStyle['fieldset__inputs-container']}>
                    <label className={PersonalInfoStyle['fieldset__inputs-container__label']} htmlFor="about-me">
                        A small description about you
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="text"
                            name="about-me"
                            id="about-me"
                            placeholder="A concise description about you..."
                            maxLength='200'
                            required
                        />
                    </label>
                    <label className={PersonalInfoStyle['fieldset__inputs-container__label']} htmlFor="profile-picture">
                        Select a profile picture
                        <input
                            className={`${PersonalInfoStyle.input} ${PersonalInfoStyle['input-type-file']}`}
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.files[0])
                            }
                            id="profile-picture"
                            name="profile-picture"
                            type="file"
                            accept="image/png, image/jpg, image/jpeg"
                            required
                        />
                    </label>
                </div>
                <div className={PersonalInfoStyle['fieldset__inputs-container']}>
                    <label className={PersonalInfoStyle['fieldset__inputs-container__label']} htmlFor="x-twitter">
                        Your X/Twitter @
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            id="x-twitter"
                            name="x-twitter"
                            type="text"
                            placeholder="UserName"
                        />
                    </label>
                    <label className={PersonalInfoStyle['fieldset__inputs-container__label']} htmlFor="facebook">
                        Facebook user
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            id="facebook"
                            name="facebook"
                            type="text"
                            placeholder="UserName"
                        />
                    </label>
                    <label className={PersonalInfoStyle['fieldset__inputs-container__label']} htmlFor="linkedin">
                        Linkedin profile
                        <input
                            className={PersonalInfoStyle.input}
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            id="linkedin"
                            name="linkedin"
                            type="text"
                            placeholder="UserName"
                        />
                    </label>
                </div>
            </fieldset>
		</>
    );
}
