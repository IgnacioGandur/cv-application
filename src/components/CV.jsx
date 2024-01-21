import { useState } from 'react';
// import Flatpickr from "react-flatpickr";
// import MonthSelect from 'flatpickr/dist/plugins/monthSelect';
import PersonalInfo from './PersonalInfo.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import RenderExperience from './RenderExperience.jsx';
import Skills from './Skills.jsx';
import References from './References.jsx';
import BackgroundControl from './BackgroundControl.jsx';
import defaultProfilePicture from '../assets/images/default-ppf.png';
// import CVBackground from '../assets/images/light/email-pattern.webp';
// import CVBackgroundDark from '../assets/images/dark/spiration-dark.webp';
// import '../styles/CV.css';
// import CVStyles from '../styles/CV.module.css';
import CVElementStyles from '../styles/CVElements.module.css';
// import ModalElementsStyles from '../styles/ModalElements.module.css';
import RenderEducation from './RenderEducation.jsx';
import RenderSkills from './RenderSkills.jsx';
import RenderReferences from './RenderReferences.jsx';
import RenderContact from './RenderContact.jsx';

export default function CV() {
    //                  Personal info section, start.
    const [personalInfo, setPersonalInfo] = useState({
        country: 'Argentina',
        city: 'Tucumán',
        address: 'Random street 1234',
        firstName: 'Ignacio',
        lastName: 'Gandur',
        ocupation: 'Full Stack Web Developer',
        email: 'FakeEmailAddress@gmail.com',
        phoneNumber: '+54 123 456 7890',
        aboutMe:
            'Dictum malesuada eget ligula, consectetur montes elit, est suscipit sem neque lacus nulla massa risus placerat neque ante, risus nam venenatis lacus et eros cursus, dictum eget ornare imperdiet. ',
        profilePicture: defaultProfilePicture,
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
                case 'instagram': {
                    setPersonalInfo((prevPersonalInfo) => ({
                        ...prevPersonalInfo,
                        ...generateSocialLink('instagram'),
                    }));
                    break;
                }
                case 'linkedin': {
                    setPersonalInfo((prevPersonalInfo) => ({
                        ...prevPersonalInfo,
                        ...generateSocialLink('linkedin'),
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
            // {
            //     institutionName: 'Institution name',
            //     titleOfStudy: 'Title of study',
            //     dateFrom: 'February 2020',
            //     dateUntil: 'December 2021',
            // },
        ],
        experience: [
            {
                companyName: 'Mercado libre',
                positionTitle: 'Front end web developer',
                responsibilities:
                    'Part of the team in charge of designing, creating and mantaining everything related to the user interface and user experience',
                dateFrom: 'May 2021',
                dateUntil: 'October 2023',
            },
            // {
            //     companyName:'Company Name',
            //     positionTitle: 'Backend web developer',
            //     responsibilities: 'Part of the team in charge of creating, mantaining, testing and debugging the functionality of websites/aplications.',
            //     dateFrom: 'February 2018',
            //     dateUntil: 'August 2021',
            // },
            // {
            //     companyName:'Another random company',
            //     positionTitle: 'Designer',
            //     responsibilities: 'Web designer in charge of managing user modern user interfaces',
            //     dateFrom: 'February 2018',
            //     dateUntil: 'August 2021',
            // },
        ],
        skills: [
            {
                skillName: 'Spanish speaker',
                icon: '/icons/argentina.png',
            },
            {
                skillName: 'Html',
                icon: '/icons/html.png',
            },
            {
                skillName: 'Css',
                icon: '/icons/css-3.png',
            },
            {
                skillName: 'Javascript',
                icon: '/icons/js.png',
            },
            {
                skillName: 'React',
                icon: '/icons/react.png',
            },
            {
                skillName: 'Github',
                icon: '/icons/github.png',
            },
            {
                skillName: 'Git',
                icon: '/icons/git.png',
            },
            {
                skillName: 'Linux',
                icon: '/icons/linux.png',
            },
        ],
        references: [
            {
                name: 'Jon Doe',
                company: 'XYZ Company',
                position: 'Backend team leader',
                relationship: 'Worked togheter for 3 years',
                phoneNumber: '+12 345 67890',
                email: 'JonDoe@fakemail.com',
            },
        ],
    });

    function addSection(whichSection, sectionObject) {
        // setSections([...sections[whichSection], sectionObject])
        const updatedSection = [...sections[whichSection], sectionObject];
        setSections((prevSections) => ({
            ...prevSections,
            [whichSection]: updatedSection,
        }));
    }

    function removeSection(whichSection, indexToRemove) {
        const updatedSection = [...sections[whichSection]];
        updatedSection.splice(indexToRemove, 1);
        setSections((prevSections) => ({
            ...prevSections,
            [whichSection]: updatedSection,
        }));
        // setSections((prevSections) => {
        //     const updatedSection = [...prevSections[whichSection]];
        //     updatedSection.splice(indexToRemove, 1);

        //     return {
        //         ...prevSections,
        //         [whichSection]: updatedSection
        //     }
        // })
    }

    function toggleEditing(whichSection, indexToEdit, isEditing) {
        const updatedSection = [...sections[whichSection]];
        updatedSection[indexToEdit] = {
            ...updatedSection[indexToEdit],
            isEditing,
        };
        setSections((prevSections) => ({
            ...prevSections,
            [whichSection]: updatedSection,
        }));

        // setSections((prevSections) => {
        //     const updatedSection = [...prevSections[whichSection]];
        //     updatedSection[indexToEdit] = {
        //         ...updatedSection[indexToEdit],
        //         isEditing,
        //     }
        //     return {
        //         ...prevSections,
        //         [whichSection]: updatedSection,
        //     }
        // })

        //             const updatedSections = [...experienceSections];
        //             updatedSections[index] = {...updatedSections[index], isEditing}
        //             setExperienceSections(updatedSections);
    }

    function handleEdit(whichSection, indexOfItem, property, value) {
        const updatedSection = [...sections[whichSection]];
        // Handle the skill icon edit
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

    //                  Education, experience, skills, references sections, end.

    // =========================================================================== //

    // const [educationSections, setEducationSections] = useState([
    // {
    // institutionName:'The odin project',
    // titleOfStudy:'Full stack web developer',
    // dateFrom:'January 2022',
    // dateUntil:'December 2023',

    // },
    // {
    // institutionName:'Another institution',
    // titleOfStudy:'Computer science',
    // dateFrom:'January 2018',
    // dateUntil:'December 2022',

    // },
    // ]);
    // const [experienceSections, setExperienceSections] = useState([
    // {
    // companyName:'Mercado libre',
    // positionTitle: 'Front end web developer',
    // responsibilities: 'Design, create and mantain everything related to user interfaces and user experience',
    // dateFrom: 'May 2021',
    // dateUntil: 'October 2023',
    // },
    // {
    // companyName:'Another random company',
    // positionTitle: 'Designer',
    // responsibilities: 'Web designer in charge of managing user modern user interfaces',
    // dateFrom: 'February 2018',
    // dateUntil: 'August 2021',
    // },
    // {
    // companyName:'Another random company',
    // positionTitle: 'Designer',
    // responsibilities: 'Web designer in charge of managing user modern user interfaces',
    // dateFrom: 'February 2018',
    // dateUntil: 'August 2021',
    // },
    // ]);

    // const [skillsSections, setSkillsSections] = useState([
    // {
    // skillName:'Html',
    // icon: '/icons/html.png',
    // },
    // {
    // skillName:'Css',
    // icon: '/icons/css-3.png',
    // },
    // {
    // skillName:'Javascript',
    // icon: '/icons/js.png',
    // },
    // {
    // skillName:'React',
    // icon: '/icons/react.png',
    // },
    // {
    // skillName:'Github',
    // icon: '/icons/github.png',
    // },
    // {
    // skillName:'Git',
    // icon: '/icons/git.png',
    // },
    // {
    // skillName:'Linux',
    // icon: '/icons/linux.png',
    // },
    // ]);

    // const [referenceSections, setReferenceSections] = useState([
    // {
    // referenceName:'Reference name',
    // referencePosition: 'Reference position',
    // referencePhoneNumber: 'Reference phone number',
    // referenceEmail: 'Reference email',
    // }
    // ])

    // function addSection(whichSection, section) {
    // 	switch (whichSection) {
    // 		case "education":
    // 			setEducationSections([...educationSections, section]);
    // 			break;
    // 		case "experience":
    // 			setExperienceSections([...experienceSections, section]);
    // 			break;
    // 		case "skill":
    // 			setSkillsSections([...skillsSections, section]);
    // 			break;
    // 		case "references":
    // 			setReferenceSections([...referenceSections, section]);
    // 			break;
    // 		default:
    // 			throw new Error(
    // 				`Invalid section, the section can only be: "education", "experience", "skill", "reference". Instead received: ${whichSection}.`
    // 			);
    // 	}
    // }

    // function removeSection(whichSection, index) {
    // 	switch (whichSection) {
    // 		case "education": {
    // 			const updatedSections = [...educationSections];
    // 			updatedSections.splice(index, 1);
    // 			setEducationSections(updatedSections);
    // 			break;
    // 		}
    // 		case "experience": {
    // 			const updatedSections = [...experienceSections];
    // 			updatedSections.splice(index, 1);
    // 			setExperienceSections(updatedSections);
    // 			break;
    // 		}
    // 		case "skill": {
    // 			const updatedSections = [...skillsSections];
    // 			updatedSections.splice(index, 1);
    // 			setSkillsSections(updatedSections);
    // 			break;
    // 		}
    // 		case "references": {
    // 			const updatedSections = [...referenceSections];
    // 			updatedSections.splice(index, 1);
    // 			setReferenceSections(updatedSections);
    // 			break;
    // 		}
    // 		default:
    // 			throw new Error(
    // 				`Invalid section. Expects: "education", "experience", "skill", "references". Instead received: ${whichSection}.`
    // 			);
    // 	}
    // }

    function clearInputs(event) {
        const form = document.querySelector(`#${event.target.id}`);
        const inputs = form.querySelectorAll('input');
        inputs.forEach((inputField) => {
            inputField.value = '';
        });
    }

    // function toggleEditing(whichSection, index, isEditing) {
    //     switch(whichSection) {
    //         case 'experience': {
    //             const updatedSections = [...experienceSections];
    //             updatedSections[index] = {...updatedSections[index], isEditing}
    //             setExperienceSections(updatedSections);
    //             break;
    //         }
    //         case 'education': {
    //             const updatedSections = [...educationSections];
    //             updatedSections[index] = {...updatedSections[index], isEditing}
    //             setEducationSections(updatedSections);
    //             break;
    //         }
    //         case 'skills': {
    //             const updatedSections = [...skillsSections];
    //             updatedSections[index] = {...updatedSections[index], isEditing}
    //             setSkillsSections(updatedSections);
    //             break;
    //         }
    //         case 'references': {
    //             const updatedSections = [...referenceSections];
    //             updatedSections[index] = {...updatedSections[index], isEditing}
    //             setReferenceSections(updatedSections);
    //             break;
    //         }
    //         default:
    //             throw new Error(`Invalid section. Expects: "experience", "education", "skills", "references". Instead received: ${whichSection}`);
    //     }
    // }

    // function handleEditedValues(whichSection, index, property,value) {
    //     switch(whichSection) {
    //         case 'experience' : {
    //             const updatedSections = [...experienceSections];
    //             updatedSections[index][property] = value;
    //             setExperienceSections(updatedSections);
    //             break;
    //         }
    //         case 'education' : {
    //             const updatedSections = [...educationSections];
    //             updatedSections[index][property] = value;
    //             setEducationSections(updatedSections);
    //             break;
    //         }
    //         case 'skills' : {
    //             if (property === 'skill-icon') {
    //                 const updatedSections = [...skillsSections];
    //                 const reader = new FileReader();
    //                 reader.onloadend = (e) => {
    //                    updatedSections[index].icon =  e.target.result;
    //                 }
    //                 reader.readAsDataURL(value);
    //                 setSkillsSections(updatedSections);
    //             }

    //             const updatedSections = [...skillsSections];
    //             updatedSections[index][property] = value;
    //             setSkillsSections(updatedSections);
    //             break;
    //         }
    //         case 'references' : {
    //             const updatedSections = [...referenceSections];
    //             updatedSections[index][property] = value;
    //             setReferenceSections(updatedSections);
    //             break;
    //         }
    //         default:
    //             throw new Error(`Invalid section. Expects: "experience", "education", "skills", "references". Instead received: ${whichSection} section.`)
    //     }
    // }

    function toggleNotificationBox(message) {
        const notificationBox = document.querySelector('.notification-box');
        const notificationMessage = document.querySelector(
            '[data-notification-message]',
        );
        notificationMessage.textContent = message;
        notificationBox.classList.toggle('notification-box--hidden');
        notificationBox.focus({ preventScroll: true, focusVisible: true });
    }

    function isSectionLimitSurpassed(whichSection) {
        const sectionLimits = {
            education: 2,
            experience: 5,
            skills: 9,
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

        // if (id === 'enable-background') {
        //     const isChecked = document.querySelector(`#${id}`).checked;
        //     setBackgroundOptions((prevBackgroundOptions) => ({
        //         ...prevBackgroundOptions,
        //         enabled: isChecked,
        //         url: imageUrl,
        //     }))
        // }

        // if (id === 'custom-theme') {
        //     const allCheckboxes = document.querySelectorAll('[name=selected-background]');
        //     for (let i = 0; i < allCheckboxes.length; i += 1) {
        //         if (allCheckboxes[i].checked) {
        //             allCheckboxes[i].checked = false;
        //         }
        //     }
        //     setBackgroundOptions((prevBackgroundOptions) => ({
        //         ...prevBackgroundOptions,
        //         url: imageUrl,
        //         darkBackground: isDarkTheme,
        //     }))
        // }

        // if (id === 'background-url') {
        //     console.log(id, value)
        //     setBackgroundOptions((prevBackgroundOptions) => ({
        //         ...prevBackgroundOptions,
        //         enabled: true,
        //         url: value,
        //     }))
        // }

        // if (id === 'dark-background') {
        //     const isChecked = document.querySelector(`#${id}`).checked;
        //     setBackgroundOptions((prevBackgroundOptions) => ({
        //         ...prevBackgroundOptions,
        //         darkBackground: isChecked,
        //     }))
        // }

        // setBackgroundOptions((prevBackgroundOptions) => ({
        //     ...prevBackgroundOptions,
        //     url: imageUrl,
        //     darkBackground: isDarkTheme,
        // }))
        // switch(id) {
        //     case 'enable-background': {
        //         const isChecked = document.querySelector(`#${id}`).checked;
        //         setBackgroundOptions((prevBackgroundOptions) => ({
        //             ...prevBackgroundOptions,
        //             enabled: isChecked,
        //         }))
        //         break;
        //     }
        //     case 'dark-theme': {
        //         const isChecked = document.querySelector(`#${id}`).checked;
        //         setBackgroundOptions((prevBackgroundOptions) => ({
        //             ...prevBackgroundOptions,
        //             darkTheme: isChecked,
        //             url:isChecked ? CVBackgroundDark : CVBackground,
        //             darkBackground: isChecked,
        //         }))
        //         break;
        //     }
        //     case 'background-url': {
        //         setBackgroundOptions((prevBackgroundOptions) => ({
        //             ...prevBackgroundOptions,
        //             url: value,
        //         }))
        //         break;
        //     }
        //     case 'dark-background': {
        //         const isChecked = document.querySelector(`#${id}`).checked;
        //         setBackgroundOptions((prevBackgroundOptions) => ({
        //             ...prevBackgroundOptions,
        //             darkBackground:isChecked,
        //         }))
        //         break;
        //     }
        //     default:
        //         throw new Error('Invalid event id.');
        // }
    }

    const stylesForCV = {
        backgroundImage: backgroundOptions.enabled
            ? `url(${backgroundOptions.url})`
            : null,
        color: backgroundOptions.darkBackground ? 'white' : 'black',
    };

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
                                    ? '/icons/argentina.png'
                                    : '/icons/usa.png'
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
                    href='#'
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
                        <p className={CVElementStyles['section-title']}>
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
