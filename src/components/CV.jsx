import { useState } from "react";
import Flatpickr from "react-flatpickr";
import MonthSelect from 'flatpickr/dist/plugins/monthSelect';
import PersonalInfo from "./PersonalInfo.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import References from "./References.jsx";
import defaultProfilePicture from "../assets/images/default-ppf.png";
// import '../styles/CV.css';
// import CVStyles from '../styles/CV.module.css';
import CVElementStyles from '../styles/CVElements.module.css';
import ModalElementsStyles from '../styles/ModalElements.module.css';

export default function CV() {

    const [personalInfo, setPersonalInfo] = useState({
            country: 'Argentina',
            city: "Tucumán",
            address: "Pasaje Edmundo Halley 4471",
            firstName: "Ignacio",
            lastName: "Gandur",
            ocupation: "Web developer",
            email: "gandurjuanignacio@gmail.com",
            phoneNumber: "+54 123 456 7890",
            aboutMe: "Dictum malesuada eget ligula, consectetur montes elit, est suscipit sem neque lacus nulla massa risus placerat neque ante, risus nam venenatis lacus et eros cursus, dictum eget ornare imperdiet. ",
            profilePicture: defaultProfilePicture,
            portfolioLink:null,
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
                }))
            }
            reader.readAsDataURL(value);
        } else {
            setPersonalInfo((prevPersonalInfo) => ({...prevPersonalInfo, profilePicture: defaultProfilePicture}))
        }
    }

    function gatherPersonalInfo(event) {

        const { id, value } = event.target;

        // Handle social media links
        if (id === 'xTwitter' || id === 'instagram' || id === 'linkedin') {

            const generateSocialLink = (prefix) => ({
                [id]:value,
                [`${id}Link`] : prefix === 'linkedin' ? `https://www.${prefix}.com/in/${value}` : `https://www.${prefix}.com/${value}`,
            })

            switch(id) {
                case 'xTwitter': {
                    setPersonalInfo((prevPersonalInfo) => ({
                        ...prevPersonalInfo,
                        // This will call the 'generateSocialLink' function, the function will return an object, 
                        // the object will get destructured, the destructured properties returned
                        // by the function will get used as a new property:value for setPersonalInfo
                        ...generateSocialLink('x'),
                    }))
                    break;
                }
                case 'instagram': {
                    setPersonalInfo((prevPersonalInfo) => ({
                        ...prevPersonalInfo,
                        ...generateSocialLink('instagram'),
                    }))
                    break;
                }
                case 'linkedin': {
                    setPersonalInfo((prevPersonalInfo) => ({
                        ...prevPersonalInfo,
                        ...generateSocialLink('linkedin'),
                    }))
                    break;
                }
                default: 
                    throw new Error(`Invalid id. Expects: "xTwitter", "instagram", "linkedin". Instead received: ${id}`)
            }
        }

        // Handle text based input
        setPersonalInfo((prevPersonalInfo) => ({
            ...prevPersonalInfo,
            [id]: value === '' ? null : value.charAt(0).toUpperCase() + value.slice(1),
        }))
    }

	const [educationSections, setEducationSections] = useState([
        {
            institutionName:'The odin project',
            titleOfStudy:'Full stack web developer',
            dateFrom:'January 2022',
            dateUntil:'December 2023',

        },
        {
            institutionName:'Another institution',
            titleOfStudy:'Computer science',
            dateFrom:'January 2018',
            dateUntil:'December 2022',

        },
    ]);
	const [experienceSections, setExperienceSections] = useState([
        {
            companyName:'Mercado libre',
            positionTitle: 'Front end web developer',
            responsibilities: 'Design, create and mantain everything related to user interfaces and user experience',
            dateFrom: 'May 2021',
            dateUntil: 'October 2023',
        },
        {
            companyName:'Another random company',
            positionTitle: 'Designer',
            responsibilities: 'Web designer in charge of managing user modern user interfaces',
            dateFrom: 'February 2018',
            dateUntil: 'August 2021',
        },
        {
            companyName:'Another random company',
            positionTitle: 'Designer',
            responsibilities: 'Web designer in charge of managing user modern user interfaces',
            dateFrom: 'February 2018',
            dateUntil: 'August 2021',
        },
    ]);

    const [skillsSections, setSkillsSections] = useState([
        {
            skillName:'Html',
            icon: '/icons/html.png',
        },
        {
            skillName:'Css',
            icon: '/icons/css-3.png',
        },
        {
            skillName:'Javascript',
            icon: '/icons/js.png',
        },
        {
            skillName:'React',
            icon: '/icons/react.png',
        },
        {
            skillName:'Github',
            icon: '/icons/github.png',
        },
        {
            skillName:'Git',
            icon: '/icons/git.png',
        },
        {
            skillName:'Linux',
            icon: '/icons/linux.png',
        },
    ]);

    const [referenceSections, setReferenceSections] = useState([
        {
            referenceName:'Reference name',
            referencePosition: 'Reference position',
            referencePhoneNumber: 'Reference phone number',
            referenceEmail: 'Reference email',
        }
    ])

	function addSection(whichSection, section) {
		switch (whichSection) {
			case "education":
				setEducationSections([...educationSections, section]);
				break;
			case "experience":
				setExperienceSections([...experienceSections, section]);
				break;
			case "skill":
				setSkillsSections([...skillsSections, section]);
				break;
			case "references":
				setReferenceSections([...referenceSections, section]);
				break;
			default:
				throw new Error(
					`Invalid section, the section can only be: "education", "experience", "skill", "reference". Instead received: ${whichSection}.`
				);
		}
	}

	function removeSection(whichSection, index) {
		switch (whichSection) {
			case "education": {
				const updatedSections = [...educationSections];
				updatedSections.splice(index, 1);
				setEducationSections(updatedSections);
				break;
			}
			case "experience": {
				const updatedSections = [...experienceSections];
				updatedSections.splice(index, 1);
				setExperienceSections(updatedSections);
				break;
			}
			case "skill": {
				const updatedSections = [...skillsSections];
				updatedSections.splice(index, 1);
				setSkillsSections(updatedSections);
				break;
			}
			case "references": {
				const updatedSections = [...referenceSections];
				updatedSections.splice(index, 1);
				setReferenceSections(updatedSections);
				break;
			}
			default:
				throw new Error(
					`Invalid section. Expects: "education", "experience", "skill", "references". Instead received: ${whichSection}.`
				);
		}
	}

	function clearInputs(event) {
        const form = document.querySelector(`#${event.target.id}`);
        const inputs = form.querySelectorAll('input');
        inputs.forEach((inputField) => {
            inputField.value = '';
        })
	}

    function toggleEditing(whichSection, index, isEditing) {
        switch(whichSection) {
            case 'experience': {
                const updatedSections = [...experienceSections];
                updatedSections[index] = {...updatedSections[index], isEditing}
                setExperienceSections(updatedSections);
                break;
            }
            case 'education': {
                const updatedSections = [...educationSections];
                updatedSections[index] = {...updatedSections[index], isEditing}
                setEducationSections(updatedSections);
                break;
            }
            case 'skills': {
                const updatedSections = [...skillsSections];
                updatedSections[index] = {...updatedSections[index], isEditing}
                setSkillsSections(updatedSections);
                break;
            }
            case 'references': {
                const updatedSections = [...referenceSections];
                updatedSections[index] = {...updatedSections[index], isEditing}
                setReferenceSections(updatedSections);
                break;
            }
            default:
                throw new Error(`Invalid section. Expects: "experience", "education", "skills", "references". Instead received: ${whichSection}`);
        }
    }

    function handleEditedValues(whichSection, index, property,value) {
        switch(whichSection) {
            case 'experience' : {
                const updatedSections = [...experienceSections];
                updatedSections[index][property] = value;
                setExperienceSections(updatedSections);
                break;
            }
            case 'education' : {
                const updatedSections = [...educationSections];
                updatedSections[index][property] = value;
                setEducationSections(updatedSections);
                break;
            }
            case 'skills' : {
                if (property === 'skill-icon') {
                    const updatedSections = [...skillsSections];
                    const reader = new FileReader();
                    reader.onloadend = (e) => {
                       updatedSections[index].icon =  e.target.result;
                    }
                    reader.readAsDataURL(value);
                    setSkillsSections(updatedSections);
                }

                const updatedSections = [...skillsSections];
                updatedSections[index][property] = value;
                setSkillsSections(updatedSections);
                break;
            }
            case 'references' : {
                const updatedSections = [...referenceSections];
                updatedSections[index][property] = value;
                setReferenceSections(updatedSections);
                break;
            }
            default:
                throw new Error(`Invalid section. Expects: "experience", "education", "skills", "references". Instead received: ${whichSection} section.`)
        }
    } 

    function toggleNotificationBox(message) {
       const notificationBox = document.querySelector('.notification-box'); 
        const notificationMessage = document.querySelector('[data-notification-message]');
        notificationMessage.textContent = message;
        notificationBox.classList.toggle('notification-box--hidden');
        notificationBox.focus({preventScroll:true, focusVisible: true});
    }

    function isSectionLimitSurpassed(section) {

        const sectionLimits = {
            education: 2,
            experience: 5,
            skills: 9,
            reference: 4,
        }

        const targetSection = eval(`${section}Sections`);

        if (targetSection.length >= sectionLimits[section]) {
            toggleNotificationBox(`There are already ${sectionLimits[section]} ${section} items, you can't add more.`);
            return true;
        }

        return false;
    }

	return (
        <main className={CVElementStyles.app}>
			<section className={CVElementStyles.app__inputs}>
				<PersonalInfo 
                    gatherPersonalInfo={gatherPersonalInfo} 
                    handleProfilePicture={handleProfilePicture}/>
                <div className={CVElementStyles.app__inputs__sections}>
                    <Education
                        addSection={addSection}
                        clearInputs={clearInputs} 
                        isSectionLimitSurpassed={isSectionLimitSurpassed} />
                    <Experience
                        addSection={addSection} 
                        clearInputs={clearInputs} 
                        isSectionLimitSurpassed={isSectionLimitSurpassed}/>
                    <Skills 
                        addSection={addSection} 
                        clearInputs={clearInputs} 
                        isSectionLimitSurpassed={isSectionLimitSurpassed}/>
                    <References 
                        addSection={addSection} 
                        clearInputs={clearInputs} 
                        isSectionLimitSurpassed={isSectionLimitSurpassed}/>
                </div>
			</section>
            <div className={CVElementStyles.app__separator}></div>
			<section className={CVElementStyles.app__CV} id='CV'>
				<p className={CVElementStyles['app__CV__full-name']}>
					{`${personalInfo.firstName} ${personalInfo.lastName} `}
				</p>
                <p className={CVElementStyles.app__CV__ocupation}>{personalInfo.ocupation}</p>
				<img
                    className={CVElementStyles['app__CV__profile-picture']}
					src={personalInfo.profilePicture}
					alt="User profile picture"
				/>
                <div className={CVElementStyles['app__CV__education-and-experience']}>
                    <div className={CVElementStyles['app__CV__education-and-experience__experience']}>
                        <p className={CVElementStyles['app__CV__education-and-experience__experience__title']}>Experience</p>
                        <div className={CVElementStyles['app__CV__education-and-experience__experience__container']}>
                            {experienceSections.map((section, index) => (
                                section.isEditing ? (
                                <div className={ModalElementsStyles['modal-background']} key={index}>
                                    <div className={ModalElementsStyles['modal-background__modal-box']}>
                                       <label 
                                            className={ModalElementsStyles['modal-background__modal-box__label']}
                                            htmlFor="new-company-name">
                                            Company name
                                            <input 
                                                className={ModalElementsStyles['modal-background__modal-box__label__input']}
                                                defaultValue={section.companyName} 
                                                type="text" 
                                                id="new-company-name"
                                                name="new-company-name"
                                                onChange={ (e) => handleEditedValues('experience', index, 'companyName', e.target.value)}
                                    />
                                        </label>                                     
                                       <label 
                                            className={ModalElementsStyles['modal-background__modal-box__label']}
                                            htmlFor="new-position-title">
                                            Position title
                                            <input 
                                                className={ModalElementsStyles['modal-background__modal-box__label__input']}
                                                defaultValue={section.positionTitle} 
                                                type="text" 
                                                id="new-position-title" 
                                                name="new-position-title"
                                                onChange={(e) => handleEditedValues('experience', index, 'positionTitle', e.target.value)}
                                                />
                                        </label>                                     
                                       <label 
                                            className={ModalElementsStyles['modal-background__modal-box__label']}
                                            htmlFor="edit-date-from">
                                            Date, from
                                            <Flatpickr 
                                                className={ModalElementsStyles['modal-background__modal-box__label__input']}
                                                defaultValue={section.dateFrom} 
                                                id="edit-date-from" 
                                                name="edit-date-from"  
                                                options={{
                                                    allowInput:true,
                                                    plugins:[new MonthSelect({})],
                                                    onChange: (selectedDate, dateStr) => {
                                                        handleEditedValues('experience', index, 'dateFrom', dateStr);
                                                    }
                                                }}
                                            />
                                        </label>                                     
                                       <label 
                                            className={ModalElementsStyles['modal-background__modal-box__label']}
                                            htmlFor="edit-date-until">
                                            Date, until
                                            <Flatpickr 
                                                className={ModalElementsStyles['modal-background__modal-box__label__input']}
                                                defaultValue={section.dateUntil} 
                                                id="edit-date-until" 
                                                name="edit-date-until"  
                                                options={{
                                                    allowInput:true,
                                                    plugins:[new MonthSelect({})],
                                                    onChange: (selectedDate, dateStr) => {
                                                        handleEditedValues('experience', index, 'dateUntil', dateStr);
                                                    }
                                                }}
                                            />
                                        </label>                                     
                                       <label 
                                            className={ModalElementsStyles['modal-background__modal-box__label']}
                                            htmlFor="edit-responsibilities">
                                            Responsibilities at your position
                                            <input 
                                                className={ModalElementsStyles['modal-background__modal-box__label__input']}
                                                defaultValue={section.responsibilities} 
                                                type="text" 
                                                id="edit-responsibilities" 
                                                name="edit-responsibilities"
                                                onChange={(e) => handleEditedValues('experience', index, 'responsibilities', e.target.value)}
                                                />
                                        </label>                                     
                                        <button 
                                            className={ModalElementsStyles['modal-background__modal-box__button']}
                                            onClick={ () => toggleEditing('experience', index, false)} >Save edit</button>
                                    </div>
                                </div> 
                                ) : (
                                    <div className={CVElementStyles['app__CV__education-and-experience__experience__item']} key={index}>
                                        <div className={CVElementStyles['app__CV__education-and-experience__experience__item__title-and-buttons']}>
                                            <div className={CVElementStyles['app__CV__education-and-experience__experience__item__title-and-buttons__buttons-container']}>
                                                <button
                                                    className={CVElementStyles['small-button']}
                                                    onClick={() =>
                                                        removeSection("experience", index)
                                                    }
                                                >
                                                    <span className={`${CVElementStyles['small-button__span']} material-icons-round`}>delete</span>
                                                </button>
                                                <button className={CVElementStyles['small-button']} onClick={() => toggleEditing('experience', index, true)}>
                                                    <span className={`${CVElementStyles['small-button__span']} material-icons-round`} >edit</span>
                                                </button>
                                            </div>
                                            <p className={CVElementStyles['app__CV__education-and-experience__experience__item__title-and-buttons__company-name']} >{section.companyName}</p>
                                        </div>
                                        <p>
                                            {section.positionTitle}
                                        </p>
                                        <p className='date'>{`${section.dateFrom} - ${section.dateUntil}`}</p>
                                        <p>
                                            {section.responsibilities}
                                        </p>
                                    </div>
                                )
                            ))}
                        </div>
                        <div className={CVElementStyles['app__CV__education-and-experience__experience__about-me']}>
                            <p className={CVElementStyles['app__CV__education-and-experience__experience__about-me__title']}>About me</p>
                            <p className='presentation'>I&apos;m {personalInfo.firstName}<br/> a {personalInfo.ocupation}<br/> from {personalInfo.country}.</p>
                            <p className='description'>{personalInfo.aboutMe}</p>
                        </div>
                    </div>
                    <div className={CVElementStyles['app__CV__education-and-experience__separator']}></div>
                    <div className={CVElementStyles['app__CV__education-and-experience__education']}>
                        <p className={CVElementStyles['section-title']}>Education</p>
                        <div className={CVElementStyles['app__CV__education-and-experience__education__container']}>
                            {educationSections.map((section, index) => (
                                section.isEditing ? (
                                    <div className={ModalElementsStyles['modal-background']} key={index}>
                                        <div className={ModalElementsStyles['modal-background__modal-box']}>
                                            <label 
                                                className={ModalElementsStyles['modal-background__modal-box__label']}
                                                htmlFor="edit-institution-name">
                                                Institution name
                                                <input 
                                                    className={ModalElementsStyles['modal-background__modal-box__label__input']}
                                                    defaultValue={section.institutionName}
                                                    type="text"
                                                    id='edit-institution-name'
                                                    name='edit-institution-name'
                                                    onChange={(e) => handleEditedValues('education', index, 'institutionName', e.target.value)}
                                                />
                                            </label>
                                            <label 
                                                className={ModalElementsStyles['modal-background__modal-box__label']}
                                                htmlFor="edit-title-of-study">
                                                Title of study
                                                <input 
                                                    className={ModalElementsStyles['modal-background__modal-box__label__input']}
                                                    defaultValue={section.titleOfStudy}
                                                    type="text"
                                                    id='edit-title-of-study'
                                                    name='edit-title-of-study'
                                                    onChange={(e) => handleEditedValues('education', index, 'titleOfStudy', e.target.value)}
                                                />
                                            </label>
                                            <label 
                                                className={ModalElementsStyles['modal-background__modal-box__label']}
                                                htmlFor="edit-date-from">
                                                Date, from
                                                <Flatpickr 
                                                    className={ModalElementsStyles['modal-background__modal-box__label__input']}
                                                    defaultValue={section.dateFrom}
                                                    id='edit-date-from'
                                                    name='edit-date-from'
                                                    options={{
                                                        allowInput:true,
                                                        plugins:[new MonthSelect({})],
                                                        onChange:(selectedDates, dateStr) => {
                                                            handleEditedValues('education', index, 'dateFrom', dateStr);
                                                        }
                                                    }}
                                                />
                                            </label>
                                            <label 
                                                className={ModalElementsStyles['modal-background__modal-box__label']}
                                                htmlFor="edit-date-until">
                                                Date, until
                                                <Flatpickr 
                                                    className={ModalElementsStyles['modal-background__modal-box__label__input']}
                                                    defaultValue={section.dateUntil}
                                                    id='edit-date-until'
                                                    name='edit-date-until'
                                                    options={{
                                                        allowInput:true,
                                                        plugins:[new MonthSelect({})],
                                                        onChange:(selectedDates, dateStr) => {
                                                            handleEditedValues('education', index, 'dateUntil', dateStr);
                                                        }
                                                    }}
                                                />
                                            </label>
                                            <button 
                                                className={ModalElementsStyles['modal-background__modal-box__button']}
                                                onClick={() => toggleEditing('education', index, false)}>Save edit</button>
                                        </div>
                                    </div>
                                ) : (
                                <div key={index} className={CVElementStyles['app__CV__education-and-experience__education__item']}>
                                    <div className={CVElementStyles['app__CV__education-and-experience__education__item__title-and-buttons']}>
                                        <p className={CVElementStyles['app__CV__education-and-experience__education__item__title-and-buttons__institution-name']}>{section.institutionName}</p>
                                        <div className={CVElementStyles['app__CV__education-and-experience__education__item__title-and-buttons__buttons-container']}>
                                            <button
                                                className={CVElementStyles['small-button']}
                                                onClick={() =>
                                                    removeSection("education", index)
                                                }
                                            >
                                                <span className={`${CVElementStyles['small-button__span']} material-icons-round`}>delete</span>
                                            </button>
                                            <button className={CVElementStyles['small-button']} onClick={() => toggleEditing('education', index, true)}>
                                                <span className={`${CVElementStyles['small-button__span']} material-icons-round`}>edit</span>
                                            </button>
                                        </div>
                                    </div>
                                    <p>{section.titleOfStudy}</p>
                                    <p>{section.dateFrom} - {section.dateUntil}</p>
                                </div>
                                )))}
                        </div>
                        <div className={CVElementStyles['app__CV__education-and-experience__education__skills']}>
                            <p className={CVElementStyles['app__CV__education-and-experience__education__skills__title']}>Skills</p>
                            <div className={CVElementStyles['app__CV__education-and-experience__education__skills__container']}>
                                {skillsSections.map((section, index) => (
                                    section.isEditing ? (
                                        <div className={ModalElementsStyles['modal-background']} key={index} autoFocus>
                                            <div className={ModalElementsStyles['modal-background__modal-box']}>
                                                <label 
                                                    className={ModalElementsStyles['modal-background__modal-box__label']}
                                                    htmlFor="edit-skill">
                                                    Edit name
                                                    <input
                                                        className={ModalElementsStyles['modal-background__modal-box__label__input']}
                                                        onChange={ (e) => handleEditedValues('skills', index, 'skillName', (e.target.value))} 
                                                        type="text"
                                                        defaultValue={section.skillName}
                                                        id='edit-skill'
                                                        name='edit-skill' />
                                                </label>
                                                <label 
                                                    className={ModalElementsStyles['modal-background__modal-box__label']}
                                                    htmlFor="edit-skill-image">
                                                    Edit image
                                                    <input
                                                        className={`${ModalElementsStyles['modal-background__modal-box__label__input']} ${ModalElementsStyles['modal-background__modal-box__label__input--hide-file-button']}`}
                                                        type="file" 
                                                        accept="image/png, image/jpg, image/jpeg" 
                                                        id='edit-skill-image' 
                                                        name='edit-skill-image' 
                                                        onChange={(e) => handleEditedValues('skills', index, 'skill-icon', e.target.files[0])} />
                                                </label>
                                                <button 
                                                    className={ModalElementsStyles['modal-background__modal-box__button']}
                                                    onClick={() => toggleEditing('skills', index, false)}>Save edit</button>
                                            </div>
                                        </div>
                                    ) : (
                                    <div className={CVElementStyles['app__CV__education-and-experience__education__skills__container__item']} key={index}>
                                        <img className={CVElementStyles['app__CV__education-and-experience__education__skills__container__item__icon']} src={section.icon} alt='Skill icon'/>
                                        <p>{section.skillName}</p>
                                        <div className={CVElementStyles['app__CV__education-and-experience__education__skills__container__item__buttons-container']}>
                                            <button className={CVElementStyles['small-button']} onClick={() => {
                                                toggleEditing('skills', index, true);
                                            }}><span className={`${CVElementStyles['small-button__span']} material-icons-round`}>
                                            edit
                                            </span></button>
                                            <button className={CVElementStyles['small-button']} onClick={() => removeSection('skill', index) }>
                                                <span className={`${CVElementStyles['small-button__span']} material-icons-round`}>delete</span>
                                            </button>
                                        </div>
                                    </div>
                                    )
                                ))}
                            </div>
                        </div>
                        <div className={CVElementStyles['app__CV__education-and-experience__education__contact']}>
                            <p className={CVElementStyles['app__CV__education-and-experience__education__contact__title']}>Contact</p>
                            <div className="container">
                                <p>{personalInfo.address},</p>
                                <p>{personalInfo.city}, {personalInfo.country}.</p>
                                <p><i style={{fontSize:'1.3rem', color:'#adb5bd', margin:'2px 2px 2px 0'}} className="fa-solid fa-at"></i> {personalInfo.email}</p>
                                <p><i style={{fontSize:'1.5rem', color:'#29ac00'}} className="fa-brands fa-square-whatsapp"></i> {personalInfo.phoneNumber}</p>
                            </div>
                            {(personalInfo.xTwitter || personalInfo.instagram || personalInfo.linkedin || personalInfo.portfolioLink) && (
                                <div className="social-media">
                                    {personalInfo.xTwitter && (
                                        <p><i style={{fontSize:'1.5rem', color:'#000000'}} className="fa-brands fa-square-x-twitter"></i> <a href={personalInfo.xTwitterLink} target="_blank" rel="noreferrer">@{personalInfo.xTwitter}</a></p>
                                    )}
                                    {personalInfo.instagram && (
                                        <p><i style={{fontSize:'1.5rem', color:'#f70496'}} className="fa-brands fa-square-instagram"></i> <a href={personalInfo.instagramLink} target="_blank" rel="noreferrer">instagram.com/{personalInfo.instagram}</a></p>
                                    )}
                                    {personalInfo.linkedin && (
                                        <p><i style={{fontSize:'1.5rem', color:'#007ab5'}} className="fa-brands fa-linkedin"></i> <a href={personalInfo.linkedinLink} target="_blank" rel="noreferrer">linkedin.com/in/{personalInfo.linkedin}</a></p>
                                    )}
                                    {personalInfo.portfolioLink && (
                                        <p><i style={{fontSize:'1.15rem',}} className="fa-solid fa-link"></i> <a href={personalInfo.portfolioLink} target="_blank" rel='noreferrer'>{personalInfo.portfolioLink}</a></p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={CVElementStyles['app__CV__horizontal-separator']} style={{width:'100%', height:'2px', backgroundColor:'red'}}></div>
                <div className={CVElementStyles.app__CV__references}>
                    <p className={`${CVElementStyles['section-title']} ${CVElementStyles['app__CV__references__title--text-center']}`}>References</p>
                    <div className={CVElementStyles.app__CV__references__container}>
                        {referenceSections.map((section, index) => (
                            section.isEditing ? (
                                <div className={ModalElementsStyles['modal-background']} key={index}>
                                    <div className={ModalElementsStyles['modal-background__modal-box']}>
                                        <label
                                            className={ModalElementsStyles['modal-background__modal-box__label']}
                                            htmlFor="edit-reference-name">
                                            Reference name
                                            <input 
                                                className={ModalElementsStyles['modal-background__modal-box__label__input']}
                                                type="text"
                                                id='edit-reference-name'
                                                name='edit-reference-name'
                                                defaultValue={section.referenceName}
                                                onChange={(e) => handleEditedValues('references', index, 'referenceName', e.target.value)}
                                                maxLength='25'
                                            />
                                        </label>
                                        <label 
                                            className={ModalElementsStyles['modal-background__modal-box__label']}
                                            htmlFor="edit-reference-position">
                                            Reference position
                                            <input 
                                                className={ModalElementsStyles['modal-background__modal-box__label__input']}
                                                type="text"
                                                id='edit-reference-position'
                                                name='edit-reference-position'
                                                defaultValue={section.referencePosition}
                                                onChange={(e) => handleEditedValues('references', index, 'referencePosition', e.target.value)}
                                                maxLength='30'
                                            />
                                        </label>
                                        <label
                                            className={ModalElementsStyles['modal-background__modal-box__label']}
                                            htmlFor="edit-reference-phone-number">
                                            Phone number
                                            <input 
                                                className={ModalElementsStyles['modal-background__modal-box__label__input']}
                                                type="tel"
                                                id='edit-reference-phone-number'
                                                name='edit-reference-phone-number'
                                                defaultValue={section.referencePhoneNumber}
                                                onChange={(e) => handleEditedValues('references', index, 'referencePhoneNumber', e.target.value)}
                                                maxLength='25'
                                            />
                                        </label>
                                        <label
                                            className={ModalElementsStyles['modal-background__modal-box__label']}
                                            htmlFor="edit-reference-email">
                                            Email
                                            <input 
                                                className={ModalElementsStyles['modal-background__modal-box__label__input']}
                                                type="email"
                                                id='edit-reference-email'
                                                name='edit-reference-email'
                                                defaultValue={section.referenceEmail}
                                                onChange={(e) => handleEditedValues('references', index, 'referenceEmail', e.target.value)}
                                                maxLength='30'
                                            />
                                        </label>
                                        <button
                                            className={ModalElementsStyles['modal-background__modal-box__button']}
                                            onClick={() => toggleEditing('references', index, false)}>Save edit</button>
                                    </div>
                                </div>
                            ) : (
                            <div className={CVElementStyles.app__CV__references__container__item} key={index}>
                                <p className={CVElementStyles.app__CV__references__container__item__name}>{section.referenceName}</p>
                                <p>{section.referencePosition}</p>
                                <p><b>T:</b> {section.referencePhoneNumber}</p>
                                <p><b>E:</b> {section.referenceEmail}</p>
                                <div className={CVElementStyles['app__CV__references__container__item__buttons-container']}>
                                    <button className={CVElementStyles['small-button']} onClick={() => removeSection('references', index)} >
                                        <span className={`${CVElementStyles['small-button__span']} material-icons-round`}>delete</span>
                                    </button>
                                    <button className={CVElementStyles['small-button']} onClick={() => toggleEditing('references', index, true)}>
                                        <span className={`${CVElementStyles['small-button__span']} material-icons-round`}>edit</span>
                                    </button>
                                </div>
                            </div>
                            )))} 
                    </div>
                </div>
			</section>
        </main>
	);
}
