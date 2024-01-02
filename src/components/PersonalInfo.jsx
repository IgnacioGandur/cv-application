import "../styles/PersonalInfo.css";

export default function PersonalInfo({ gatherPersonalInfo }) {
return (
		<>
            <h2>Personal Information <span>( all items in the form are required! )</span></h2>
            <fieldset>
                <legend>Location</legend>
                <div className="inputs-container">
                    <label htmlFor="country">
                        Country
                        <input
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="text"
                            name="country"
                            id="country"
                            placeholder="Argentina"
                        />
                    </label>
                    <label htmlFor="city">
                        Province/State/City
                        <input
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Tucumán"
                        />
                    </label>
                    <label htmlFor="address">
                        Address
                        <input
                            type="text"
                            name="address"
                            id="address"
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            placeholder="Your address here..."
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>About you</legend>
                <div className="inputs-container">
                    <label htmlFor="first-name">
                        First name
                        <input
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="true"
                            placeholder="First name"
                            required
                        />
                    </label>
                    <label htmlFor="last-name">
                        Last name
                        <input
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="true"
                            placeholder="Last name"
                            required
                        />
                    </label>
                    <label htmlFor="ocupation">
                        Ocupation
                        <input
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="text"
                            name="ocupation"
                            id="ocupation"
                            placeholder="Web developer"
                            required
                        />
                    </label>
                </div>
                <div className='inputs-container'>
                    <label htmlFor="email">
                        Email
                        <input
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="true"
                            placeholder="YourMail@mail.com"
                            required
                        />
                    </label>
                    <label htmlFor="phone-number">
                        Phone number
                        <input
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="tel"
                            name="phone-number"
                            id="phone-number"
                            autoComplete="true"
                            placeholder="123 456 7890"
                            required
                        />
                    </label>
                </div>
                <div className="inputs-container">
                    <label htmlFor="about-me">
                        A small description about you
                        <input
                            onChange={(e) =>
                                gatherPersonalInfo(e.target.id, e.target.value)
                            }
                            type="text"
                            name="about-me"
                            id="about-me"
                            placeholder="A concise description about you..."
                            required
                        />
                    </label>
                    <label htmlFor="profile-picture">
                        Select a profile picture
                        <input
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
            </fieldset>
		</>
    );
}
