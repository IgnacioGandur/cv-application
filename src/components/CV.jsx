import { useState } from 'react';
// Import input sections
import PersonalInfo from './PersonalInfo.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import RenderExperience from './RenderExperience.jsx';
import Skills from './Skills.jsx';
import References from './References.jsx';
import BackgroundControl from './BackgroundControl.jsx';
// Rendered sections in the CV
import RenderEducation from './RenderEducation.jsx';
import RenderSkills from './RenderSkills.jsx';
import RenderReferences from './RenderReferences.jsx';
import RenderContact from './RenderContact.jsx';
// CSS Styles
import CVElementStyles from '../styles/CVElements.module.css';
import defaultProfilePicture from '../assets/images/default-ppf.png';

export default function CV() {
    //                  Personal info section, start.
    const [personalInfo, setPersonalInfo] = useState({
        country:'',
        city:'',
        address:'',
        firstName:'Your',
        lastName:'Name',
        ocupation:'',
        email:'',
        phoneNumber:'',
        aboutMe:
'',
        profilePicture: defaultProfilePicture,
        githubProfile: null,
        portfolioLink: null,
        xTwitter: null,
        xTwitterLink: null,
        instagram: null,
        instagramLink: null,
        linkedin: null,
        linkedinLink: null,
    });

    function handleProfilePicture(value) {
        if (value) {
            const reader = new FileReader();
            reader.onloadend = (e) => {
                setPersonalInfo((prevPersonalInfo) => ({
                    ...prevPersonalInfo,
                    profilePicture: e.target.result,
                }));
            };
            reader.readAsDataURL(value);
        } else {
            setPersonalInfo((prevPersonalInfo) => ({
                ...prevPersonalInfo,
                profilePicture: defaultProfilePicture,
            }));
        }
    }

    function gatherPersonalInfo(event) {
        const { id, value } = event.target;

        // Handle social media links
        if (id === 'xTwitter' || id === 'instagram' || id === 'linkedin') {
            const generateSocialLink = (prefix) => ({
                [id]: value,
                [`${id}Link`]:
                    prefix === 'linkedin'
                        ? `https://www.${prefix}.com/in/${value}`
                        : `https://www.${prefix}.com/${value}`,
            });

            switch (id) {
                case 'xTwitter': {
                    setPersonalInfo((prevPersonalInfo) => ({
                        ...prevPersonalInfo,
                        // This will call the 'generateSocialLink' function, the function will return an object,
                        // the object will get destructured, the destructured properties returned
                        // by the function will get used as a new property:value for setPersonalInfo
                        ...generateSocialLink('x'),
                    }));
                    break;
                }
                case 'instagram':
                case 'linkedin': {
                    setPersonalInfo((prevPersonalInfo) => ({
                        ...prevPersonalInfo,
                        ...generateSocialLink(id),
                    }));
                    break;
                }
                default:
                    throw new Error(
                        `Invalid id. Expects: "xTwitter", "instagram", "linkedin". Instead received: ${id}`,
                    );
            }
        }

        // Handle text based input
        setPersonalInfo((prevPersonalInfo) => ({
            ...prevPersonalInfo,
            [id]:
                value === ''
                    ? ''
                    : value.charAt(0).toUpperCase() + value.slice(1),
        }));
    }

    //                  Personal info section,end.

    // =========================================================================== //

    //                  Education, experience, skills, references sections, start.
    const [sections, setSections] = useState({
        education: [
            {
                institutionName: 'The Odin project',
                titleOfStudy: 'Full stack web developer',
                dateFrom: 'January 2022',
                dateUntil: 'December 2022',
            },
        ],
        experience: [
            {
                companyName: 'XYZ Company',
                positionTitle: 'Front end web developer',
                responsibilities:
                    'Part of the team in charge of designing, creating and mantaining everything related to the user interface and user experience',
                dateFrom: 'May 2021',
                dateUntil: 'October 2023',
            },
        ],
        skills: [
            {
                name: 'Spanish speaker',
                description: 'Native spanish speaker',
                icon: './icons/argentina.png',
            },
        ],
        references: [
            {
                name: 'Jon Doe',
                company: 'XYZ Company',
                position: 'Backend team leader',
                relationship: 'Worked together for 3 years',
                phoneNumber: '+12 345 67890',
                email: 'JonDoe@fakemail.com',
            },
        ],
    });

    // Target the chosen section and add a new one.
    function addSection(whichSection, sectionObject) {
        const updatedSection = [...sections[whichSection], sectionObject];
        setSections((prevSections) => ({
            ...prevSections,
            [whichSection]: updatedSection,
        }));
    }

    // Target the chosen section, remove the target index and update the section.
    function removeSection(whichSection, indexToRemove) {
        const updatedSection = [...sections[whichSection]];
        updatedSection.splice(indexToRemove, 1);
        setSections((prevSections) => ({
            ...prevSections,
            [whichSection]: updatedSection,
        }));
    }

    // Enable editing of specified section
    function toggleEditing(whichSection, indexToEdit, isEditing) {
        const updatedSection = [...sections[whichSection]];
        updatedSection[indexToEdit] = {
            ...updatedSection[indexToEdit],
            // When 'isEditing' is true the page will render the editing options.
            // When 'isEditing' is false the page will render the section item normally.
            isEditing,
        };
        setSections((prevSections) => ({
            ...prevSections,
            [whichSection]: updatedSection,
        }));
    }

    // Update the edited values in the correspondant section and item.
    function handleEdit(whichSection, indexOfItem, property, value) {
        const updatedSection = [...sections[whichSection]];
        // Handle the skill icon edit.
        if (property === 'icon') {
            if (value) {
                const reader = new FileReader();
                reader.onloadend = (e) => {
                    updatedSection[indexOfItem][property] = e.target.result;
                };
                reader.readAsDataURL(value);
                setSections((prevSections) => ({
                    ...prevSections,
                    [whichSection]: updatedSection,
                }));
            }
        } else {
            updatedSection[indexOfItem][property] = value;
            setSections((prevSections) => ({
                ...prevSections,
                [whichSection]: updatedSection,
            }));
        }
    }

    // Clear the inputs after a new item in a section is created.
    function clearInputs(event) {
        const form = document.querySelector(`#${event.target.id}`);
        const inputs = form.querySelectorAll('input');
        inputs.forEach((inputField) => {
            inputField.value = '';
        });
    }

    // Show notification box when a section limit has been reached.
    function toggleNotificationBox(message) {
        const notificationBox = document.querySelector('.notification-box');
        const notificationMessage = document.querySelector(
            '[data-notification-message]',
        );
        notificationMessage.textContent = message;
        notificationBox.classList.toggle('notification-box--hidden');
        notificationBox.focus({ preventScroll: true, focusVisible: true });
    }

    // Set and check the limit of items allowed in a section before adding/creating a new item.
    // If the function return 'true' you can't add more items, if 'false' you can add more.
    function isSectionLimitSurpassed(whichSection) {
        const sectionLimits = {
            education: 2,
            experience: 3,
            skills: 10,
            reference: 4,
        };

        const targetSection = sections[whichSection];

        if (targetSection.length >= sectionLimits[whichSection]) {
            toggleNotificationBox(
                `There are already ${sectionLimits[whichSection]} ${whichSection} items, you can't add more.`,
            );
            return true;
        }

        return false;
    }

    // Control the background options of the Cv.
    const [backgroundOptions, setBackgroundOptions] = useState({
        enabled: false,
        customTheme: false,
        url: null,
        darkBackground: false,
        disableSeparatorColors: false,
    });

    function handleBackgroundOptions(event, imageUrl, isDarkTheme) {
        const { id, value } = event.target;
        switch (id) {
            case 'enable-background': {
                const isChecked = document.querySelector(`#${id}`).checked;
                setBackgroundOptions((prevBackgroundOptions) => ({
                    ...prevBackgroundOptions,
                    enabled: isChecked,
                    url: imageUrl,
                    darkBackground: false,
                }));
                setTimeout(() => {
                    if (isChecked) {
                        const firstTheme = document.querySelector(
                            '[name=selected-background]',
                        );
                        firstTheme.checked = true;
                    }
                }, 0);
                break;
            }
            case 'control-separators-colors': {
                const isChecked = document.querySelector(`#${id}`).checked;
                setBackgroundOptions((prevBackgroundOptions) => ({
                    ...prevBackgroundOptions,
                    disableSeparatorColors: isChecked,
                }));
                break;
            }
            case 'custom-theme': {
                const isChecked = document.querySelector(`#${id}`).checked;
                if (isChecked) {
                    const allCheckboxes = document.querySelectorAll(
                        '[name=selected-background]',
                    );
                    for (let i = 0; i < allCheckboxes.length; i += 1) {
                        if (allCheckboxes[i].checked) {
                            allCheckboxes[i].checked = false;
                        }
                    }
                    setBackgroundOptions((prevBackgroundOptions) => ({
                        ...prevBackgroundOptions,
                        url: '',
                        darkBackground: isDarkTheme,
                    }));
                } else {
                    const defaultLightBackground = document.querySelector(
                        '[name=selected-background]',
                    );
                    defaultLightBackground.checked = true;
                    setBackgroundOptions((prevBackgroundOptions) => ({
                        ...prevBackgroundOptions,
                        url: imageUrl,
                        darkBackground: isDarkTheme,
                    }));
                }
                break;
            }
            case 'background-url': {
                setBackgroundOptions((prevBackgroundOptions) => ({
                    ...prevBackgroundOptions,
                    enabled: true,
                    url: value,
                }));
                break;
            }
            case 'background-opacity': {
                const CVElement = document.querySelector('#CV');
                const gradient = `linear-gradient(rgba(0,0,0, 0.${event.target.value}), rgba(0,0,0, 0.${event.target.value})), `;
                CVElement.style.backgroundImage = `${gradient} url(${imageUrl})`;
                break;
            }
            case 'background-size': {
                document.querySelector('#CV').style.backgroundSize = `${value}px`;
                break;
            }
            case 'dark-background': {
                const isChecked = document.querySelector(`#${id}`).checked;
                setBackgroundOptions((prevBackgroundOptions) => ({
                    ...prevBackgroundOptions,
                    darkBackground: isChecked,
                }));
                break;
            }
            default:
                setBackgroundOptions((prevBackgroundOptions) => ({
                    ...prevBackgroundOptions,
                    url: imageUrl,
                    darkBackground: isDarkTheme,
                }));
        }
    }

    // Render font colors and backgrounds in the CV according to the selected background options.
    const stylesForCV = {
        backgroundImage: backgroundOptions.enabled
            ? `url(${backgroundOptions.url})`
            : null,
        color: backgroundOptions.darkBackground ? 'white' : 'black',
    };

    // Toggle between spanish and english in the CV.
    const [language, setLanguage] = useState('english');
    function changeLanguage(currentLanguage) {
        if (currentLanguage === 'english') {
            setLanguage('spanish');
        } else {
            setLanguage('english');
        }
    }

    return (
        <main className={CVElementStyles.app} id='app'>
            <section className={CVElementStyles.app__inputs} id='inputs'>
                <label
                    className={CVElementStyles.app__inputs__label}
                    htmlFor='switch-language'
                >
                    Change CV language to{' '}
                    {language === 'english' ? 'spanish' : 'english'}
                    <button
                        className={CVElementStyles.app__inputs__label__button}
                        name='switch-language'
                        id='switch-language'
                        onClick={() => {
                            changeLanguage(language);
                        }}
                    >
                        <img
                            className={
                                CVElementStyles.app__inputs__label__button__img
                            }
                            src={
                                language === 'english'
                                    ? './icons/argentina.png'
                                    : './icons/usa.png'
                            }
                            alt='Argentina icon'
                        />
                    </button>
                </label>
                <PersonalInfo
                    gatherPersonalInfo={gatherPersonalInfo}
                    handleProfilePicture={handleProfilePicture}
                />
                <div className={CVElementStyles.app__inputs__sections}>
                    <Education
                        addSection={addSection}
                        clearInputs={clearInputs}
                        isSectionLimitSurpassed={isSectionLimitSurpassed}
                    />
                    <Experience
                        addSection={addSection}
                        clearInputs={clearInputs}
                        isSectionLimitSurpassed={isSectionLimitSurpassed}
                    />
                    <Skills
                        addSection={addSection}
                        clearInputs={clearInputs}
                        isSectionLimitSurpassed={isSectionLimitSurpassed}
                    />
                    <References
                        addSection={addSection}
                        clearInputs={clearInputs}
                        isSectionLimitSurpassed={isSectionLimitSurpassed}
                    />
                    <BackgroundControl
                        handleBackgroundOptions={handleBackgroundOptions}
                    />
                </div>
            </section>
            <div
                className={CVElementStyles.app__separator}
                id='separator'
            ></div>
            <section
                className={CVElementStyles.app__CV}
                id='CV'
                style={stylesForCV}
            >
                <a
                    id='page-link'
                    className={CVElementStyles['app__CV__page-link']}
                    href='https://ignaciogandur.github.io/cv-application/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <span className='material-icons-round'>info</span>
                </a>
                <p
                    style={{
                        border: `2px solid ${
                            backgroundOptions.darkBackground ? 'white' : 'black'
                        }`,
                    }}
                    className={CVElementStyles['app__CV__full-name']}
                >
                    {`${personalInfo.firstName} ${personalInfo.lastName} `}
                </p>
                <p className={CVElementStyles.app__CV__ocupation}>
                    {personalInfo.ocupation}
                </p>
                <img
                    style={{
                        backgroundImage:
                            backgroundOptions.disableSeparatorColors && 'none',
                        backgroundColor:
                            backgroundOptions.disableSeparatorColors &&
                            (backgroundOptions.darkBackground
                                ? 'white'
                                : 'black'),
                    }}
                    className={CVElementStyles['app__CV__profile-picture']}
                    src={personalInfo.profilePicture}
                    alt='User profile picture'
                />
                <div
                    className={
                        CVElementStyles['app__CV__education-and-experience']
                    }
                >
                    <div
                        className={
                            CVElementStyles[
                                'app__CV__education-and-experience__experience'
                            ]
                        }
                    >
                        <p
                            className={
                                CVElementStyles[
                                    'app__CV__education-and-experience__experience__title'
                                ]
                            }
                        >
                            {language === 'english'
                                ? 'Experience'
                                : 'Experiencia'}
                        </p>
                        <div
                            className={
                                CVElementStyles[
                                    'app__CV__education-and-experience__experience__container'
                                ]
                            }
                        >
                            <RenderExperience
                                experienceSections={sections.experience}
                                handleEdit={handleEdit}
                                toggleEditing={toggleEditing}
                                removeSection={removeSection}
                                backgroundOptions={backgroundOptions}
                            />
                        </div>
                        <p
                            className={
                                CVElementStyles[
                                    'app__CV__education-and-experience__experience__title'
                                ]
                            }
                        >
                            {language === 'english' ? 'Education' : 'Educación'}
                        </p>
                        <div
                            className={
                                CVElementStyles[
                                    'app__CV__education-and-experience__education__container'
                                ]
                            }
                        >
                            <RenderEducation
                                educationSections={sections.education}
                                handleEdit={handleEdit}
                                toggleEditing={toggleEditing}
                                removeSection={removeSection}
                                backgroundOptions={backgroundOptions}
                            />
                        </div>
                        <div
                            className={
                                CVElementStyles[
                                    'app__CV__education-and-experience__experience__about-me'
                                ]
                            }
                        >
                            <p
                                className={
                                    CVElementStyles[
                                        'app__CV__education-and-experience__experience__about-me__title'
                                    ]
                                }
                            >
                                {language === 'english'
                                    ? 'About me'
                                    : 'Sobre mí'}
                            </p>
                            <p style={{ whiteSpace: 'pre-line' }}>
                                {language === 'english'
                                    ? `I'm ${personalInfo.firstName}, 
                                    a ${personalInfo.ocupation.toLowerCase()}
                                    from ${personalInfo.country}.`
                                    : `Soy ${personalInfo.firstName},
                                    un ${personalInfo.ocupation.toLowerCase()}
                                    de ${personalInfo.country}.`}
                            </p>
                            <p className='description'>
                                {personalInfo.aboutMe}
                            </p>
                        </div>
                    </div>
                    <div
                        id='CV__separator'
                        className={
                            CVElementStyles[
                                'app__CV__education-and-experience__separator'
                            ]
                        }
                        style={{
                            backgroundImage:
                                backgroundOptions.disableSeparatorColors &&
                                'none',
                            backgroundColor:
                                backgroundOptions.disableSeparatorColors &&
                                (backgroundOptions.darkBackground
                                    ? 'white'
                                    : 'black'),
                        }}
                    ></div>
                    <div
                        className={
                            CVElementStyles[
                                'app__CV__education-and-experience__education'
                            ]
                        }
                    >
                        {/* <p className={CVElementStyles['section-title']}>
                            {language === 'english' ? 'Education' : 'Educación'}
                        </p> */}
                        {/* <div
                            className={
                                CVElementStyles[
                                    'app__CV__education-and-experience__education__container'
                                ]
                            }
                        >
                            <RenderEducation
                                educationSections={sections.education}
                                handleEdit={handleEdit}
                                toggleEditing={toggleEditing}
                                removeSection={removeSection}
                                backgroundOptions={backgroundOptions}
                            />
                        </div> */}
                        <div
                            className={
                                CVElementStyles[
                                    'app__CV__education-and-experience__education__skills'
                                ]
                            }
                        >
                            <p
                                className={
                                    CVElementStyles[
                                        'app__CV__education-and-experience__education__skills__title'
                                    ]
                                }
                            >
                                {language === 'english'
                                    ? 'Skills'
                                    : 'Habilidades'}
                            </p>
                            <div
                                className={
                                    CVElementStyles[
                                        'app__CV__education-and-experience__education__skills__container'
                                    ]
                                }
                            >
                                <RenderSkills
                                    skillsSection={sections.skills}
                                    handleEdit={handleEdit}
                                    toggleEditing={toggleEditing}
                                    removeSection={removeSection}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                CVElementStyles[
                                    'app__CV__education-and-experience__education__contact'
                                ]
                            }
                        >
                            <p
                                className={
                                    CVElementStyles[
                                        'app__CV__education-and-experience__education__contact__title'
                                    ]
                                }
                            >
                                {language === 'english'
                                    ? 'Contact'
                                    : 'Contacto'}
                            </p>
                            <RenderContact
                                personalInfo={personalInfo}
                                backgroundOptions={backgroundOptions}
                            />
                        </div>
                    </div>
                </div>
                {sections.references.length !== 0 && (
                    <>
                        <div
                            id='CV__separator--horizontal'
                            className={
                                CVElementStyles['app__CV__horizontal-separator']
                            }
                            style={{
                                backgroundImage:
                                    backgroundOptions.disableSeparatorColors &&
                                    'none',
                                backgroundColor:
                                    backgroundOptions.disableSeparatorColors &&
                                    (backgroundOptions.darkBackground
                                        ? 'white'
                                        : 'black'),
                            }}
                        ></div>
                        <div className={CVElementStyles.app__CV__references}>
                            <p
                                className={`${CVElementStyles['section-title']} ${CVElementStyles['app__CV__references__title--text-center']}`}
                            >
                                {language === 'english'
                                    ? 'References'
                                    : 'Referencias'}
                            </p>
                            <div
                                className={
                                    CVElementStyles.app__CV__references__container
                                }
                            >
                                <RenderReferences
                                    referencesSection={sections.references}
                                    handleEdit={handleEdit}
                                    toggleEditing={toggleEditing}
                                    removeSection={removeSection}
                                />
                            </div>
                        </div>
                    </>
                )}
            </section>
        </main>
    );
}
