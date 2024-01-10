import { useState } from "react";
import Flatpickr from "react-flatpickr";
import MonthSelect from 'flatpickr/dist/plugins/monthSelect';
import PersonalInfo from "./PersonalInfo.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import References from "./References.jsx";
import defaultProfilePicture from "../assets/images/default-ppf.png";
import '../styles/CV.css';
import CVStyles from '../styles/CV.module.css';
import CVElementStyles from '../styles/CVElements.module.css';

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
        xTwitter: null,
        xTwitterLink: null,
        facebook: null,
        facebookLink: null,
        linkedin: null,
        linkedinLink: null,
	});

	function gatherPersonalInfo(inputField, value) {
		switch (inputField) {
			case "country":
				{
					if (value === "") {
						setPersonalInfo((prevPersonalInfo) => ({
							...prevPersonalInfo,
							country: null,
						}));
						return;
					}
					const [firstLetter, ...restString] = value;
					setPersonalInfo((prevPersonalInfo) => ({
						...prevPersonalInfo,
						country:
							firstLetter.toUpperCase() + restString.join(""),
					}));
				}
				break;
			case "city":
				{
					if (value === "") {
						setPersonalInfo((prevPersonalInfo) => ({
							...prevPersonalInfo,
							city: null,
						}));
						return;
					}
					const [firstLetter, ...restString] = value;
					setPersonalInfo((prevPersonalInfo) => ({
						...prevPersonalInfo,
						city: firstLetter.toUpperCase() + restString.join(""),
					}));
				}
				break;
			case "address":
				setPersonalInfo((prevPersonalInfo) => ({
					...prevPersonalInfo,
					address: value,
				}));
				break;
			case "first-name":
				setPersonalInfo((prevPersonalInfo) => ({
					...prevPersonalInfo,
					firstName: value,
				}));
				break;
			case "last-name":
				setPersonalInfo((prevPersonalInfo) => ({
					...prevPersonalInfo,
					lastName: value,
				}));
				break;
			case "ocupation":
				setPersonalInfo((prevPersonalInfo) => ({
					...prevPersonalInfo,
					ocupation: value,
				}));
				break;
			case "email":
				setPersonalInfo((prevPersonalInfo) => ({
					...prevPersonalInfo,
					email: value,
				}));
				break;
			case "phone-number":
				setPersonalInfo((prevPersonalInfo) => ({
					...prevPersonalInfo,
					phoneNumber: value,
				}));
				break;
			case "about-me":
				setPersonalInfo((prevPersonalInfo) => ({
					...prevPersonalInfo,
					aboutMe: value,
				}));
				break;
			case "profile-picture": {
				const reader = new FileReader();
				reader.onload = (e) => {
					setPersonalInfo((prevPersonalInfo) => ({
						...prevPersonalInfo,
						profilePicture: e.target.result,
					}));
				};
				reader.readAsDataURL(value);
				break;
			}
			case "x-twitter": {
                const xProfileLink = `https://www.x.com/${value}`;
				setPersonalInfo((prevPersonalInfo) => ({
					...prevPersonalInfo,
					xTwitter: value,
                    xTwitterLink: xProfileLink,
				}));
				break;
            }
			case "facebook": {
                const facebookProfileLink = `https://www.facebook.com/${value}`;
				setPersonalInfo((prevPersonalInfo) => ({
					...prevPersonalInfo,
					facebook: value,
                    facebookLink: facebookProfileLink,
				}));
				break;
            }
			case "linkedin": {
                const linkedinProfileLink = `https://linkedin.com/in/${value}`
				setPersonalInfo((prevPersonalInfo) => ({
					...prevPersonalInfo,
					linkedin: value,
                    linkedinLink: linkedinProfileLink,
				}));
				break;
            }
			default:
				throw new Error("Invalid personal information input element.");
		}
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
		switch (event.target.id) {
			case "education-form": {
				const form = document.querySelector("#education-form");
				const formInputs = form.querySelectorAll("input");
				formInputs.forEach((input) => {
					input.value = "";
				});
				break;
			}
			case "experience-form": {
				const form = document.querySelector(`#${event.target.id}`);
				const formInputs = form.querySelectorAll("input");
				formInputs.forEach((input) => {
					input.value = "";
				});
				break;
			}
			default:
				throw new Error('Invalid event id');
		}
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
                    console.log(updatedSections);
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

	return (
        <main className='app'>
			<section className="inputs">
				<PersonalInfo gatherPersonalInfo={gatherPersonalInfo} />
                <div className='education-and-experience'>
                    <Education addSection={addSection} clearInputs={clearInputs} />
                    <Experience addSection={addSection} clearInputs={clearInputs} />
                    <Skills addSection={addSection} />
                    <References addSection={addSection}/>
                </div>
			</section>
            <div className='separator'></div>
			<section className="CV">
				<p className='full-name'>
					{`${personalInfo.firstName} ${personalInfo.lastName} `}
				</p>
                <p className='ocupation'>{personalInfo.ocupation}</p>
				<img
                    className='profile-picture'
					src={personalInfo.profilePicture}
					alt="User profile picture"
				/>
                <div className='education-and-experience'>
                    <div className="experience-section">
                        <p className='title'>Experience</p>
                        {experienceSections.map((section, index) => (
                            section.isEditing ? (
                            <div style={{zIndex: '100',}} className="modal-background" key={index}>
                                <div className="modal-box">
                                   <label htmlFor="new-company-name">
                                        Company name
                                        <input 
                                            defaultValue={section.companyName} 
                                            type="text" 
                                            id="new-company-name"
                                            name="new-company-name"
                                            onChange={ (e) => handleEditedValues('experience', index, 'companyName', e.target.value)}
                                />
                                    </label>                                     
                                   <label htmlFor="new-position-title">
                                        Position title
                                        <input 
                                            defaultValue={section.positionTitle} 
                                            type="text" 
                                            id="new-position-title" 
                                            name="new-position-title"
                                            onChange={(e) => handleEditedValues('experience', index, 'positionTitle', e.target.value)}
                                            />
                                    </label>                                     
                                   <label htmlFor="edit-date-from">
                                        Date, from
                                        <Flatpickr 
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
                                   <label htmlFor="edit-date-until">
                                        Date, until
                                        <Flatpickr 
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
                                   <label htmlFor="edit-responsibilities">
                                        Responsibilities at your position
                                        <input 
                                            defaultValue={section.responsibilities} 
                                            type="text" 
                                            id="edit-responsibilities" 
                                            name="edit-responsibilities"
                                            onChange={(e) => handleEditedValues('experience', index, 'responsibilities', e.target.value)}
                                            />
                                    </label>                                     
                                    <button onClick={ () => toggleEditing('experience', index, false)} >Save edit</button>
                                </div>
                            </div> 
                            ) : (
                                <div className='experience-item' key={index}>
                                    <div className='button-companyName-container'>
                                        <div className="buttons-container">
                                            <button
                                                className='delete-section'
                                                onClick={() =>
                                                    removeSection("experience", index)
                                                }
                                            >
                                                <span className='material-icons-round'>delete</span>
                                            </button>
                                            <button className='edit-section-button' onClick={() => toggleEditing('experience', index, true)}>
                                                <span className="material-icons-round">edit</span>
                                            </button>
                                        </div>
                                        <p className='company-name'>{section.companyName}</p>
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
                        <div className='about-me'>
                            <p className='title'>About me</p>
                            <p className='presentation'>I&apos;m {personalInfo.firstName}<br/> a {personalInfo.ocupation.toLowerCase()}<br/> from {personalInfo.country}.</p>
                            <p className='description'>{personalInfo.aboutMe}</p>
                        </div>
                    </div>
                    <div className='separator'></div>
                    <div className="education">
                        <p className='title'>Education</p>
                        {educationSections.map((section, index) => (
                            section.isEditing ? (
                                <div className="modal-background" key={index}>
                                    <div className="modal-box">
                                        <label htmlFor="edit-institution-name">
                                            Institution name
                                            <input 
                                                defaultValue={section.institutionName}
                                                type="text"
                                                id='edit-institution-name'
                                                name='edit-institution-name'
                                                onChange={(e) => handleEditedValues('education', index, 'institutionName', e.target.value)}
                                            />
                                        </label>
                                        <label htmlFor="edit-title-of-study">
                                            Title of study
                                            <input 
                                                defaultValue={section.titleOfStudy}
                                                type="text"
                                                id='edit-title-of-study'
                                                name='edit-title-of-study'
                                                onChange={(e) => handleEditedValues('education', index, 'titleOfStudy', e.target.value)}
                                            />
                                        </label>
                                        <label htmlFor="edit-date-from">
                                            Date, from
                                            <Flatpickr 
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
                                        <label htmlFor="edit-date-until">
                                            Date, until
                                            <Flatpickr 
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
                                        <button onClick={() => toggleEditing('education', index, false)}>Save edit</button>
                                    </div>
                                </div>
                            ) : (
                            <div key={index} className={CVStyles['education-item']}>
                                <div className={CVStyles['title-and-delete-button-container']}>
                                    <p className={CVStyles.title}>{section.institutionName}</p>
                                    <div className="buttons-container">
                                        <button
                                            className={CVStyles['delete-section-button']}
                                            onClick={() =>
                                                removeSection("education", index)
                                            }
                                        >
                                            <span className={`${CVStyles['material-icons-round']} material-icons-round`}>delete</span>
                                        </button>
                                        <button className={CVStyles['edit-section-button']} onClick={() => toggleEditing('education', index, true)}>
                                            <span className={`${CVStyles['material-icons-round']} material-icons-round`}>edit</span>
                                        </button>
                                    </div>
                                </div>
                                <p>{section.titleOfStudy}</p>
                                <p>{section.dateFrom} - {section.dateUntil}</p>
                            </div>
                            )))}
                        <div className="skills">
                            <p className="title">Skills</p>
                            <div className="skills-container">
                                {skillsSections.map((section, index) => (
                                    section.isEditing ? (
                                        <div className="modal-background" key={index} autoFocus>
                                            <div className="modal-box">
                                                <label htmlFor="edit-skill">
                                                    Edit name
                                                    <input onChange={ (e) => handleEditedValues('skills', index, 'skillName', (e.target.value))} type="text" defaultValue={section.skillName} id='edit-skill' name='edit-skill' />
                                                </label>
                                                <label htmlFor="edit-skill-image">
                                                    Edit image
                                                    <input type="file" accept="image/png, image/jpg, image/jpeg" id='edit-skill-image' name='edit-skill-image' onChange={(e) => handleEditedValues('skills', index, 'skill-icon', e.target.files[0])} />
                                                </label>
                                                <button onClick={() => toggleEditing('skills', index, false)}>Save edit</button>
                                            </div>
                                        </div>
                                    ) : (
                                    <div className="skill-item" key={index}>
                                        <img className="skill-icon" src={section.icon} alt='Skill icon'/>
                                        <p>{section.skillName}</p>
                                        <div className="buttons-container">
                                            <button className='edit-section-button'  onClick={() => {
                                                toggleEditing('skills', index, true);
                                            }}><span className={'material-icons-round'}>
                                            edit
                                            </span></button>
                                            <button className="delete-section-button" onClick={() => removeSection('skill', index) }><span className="material-icons-round">delete</span></button>
                                        </div>
                                    </div>
                                    )
                                ))}
                            </div>
                        </div>
                        <div className="contact">
                            <p className="title">Contact</p>
                            <p>{personalInfo.address},<br/>{personalInfo.city}, {personalInfo.country}.<br/>
                            <i className="fa-solid fa-mobile-screen"></i> {personalInfo.phoneNumber}<br/>
                            <i className="fa-solid fa-envelope"></i> {personalInfo.email}</p>
                            {(personalInfo.xTwitter || personalInfo.facebook || personalInfo.linkedin) && (
                                <div className="social-media">
                                    {personalInfo.xTwitter && (
                                        <p><i className="fa-brands fa-square-x-twitter"></i> @<a href={personalInfo.xTwitterLink} target="_blank" rel="noreferrer">{personalInfo.xTwitter}</a></p>
                                    )}
                                    {personalInfo.facebook && (
                                        <p><i className="fa-brands fa-square-facebook"></i> <a href={personalInfo.facebookLink} target="_blank" rel="noreferrer">facebook.com/{personalInfo.facebook}</a></p>
                                    )}
                                    {personalInfo.linkedin && (
                                        <p><i className="fa-brands fa-linkedin"></i> <a href={personalInfo.linkedinLink} target="_blank" rel="noreferrer">linkedin.com/in/{personalInfo.linkedin}</a></p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="separator" style={{width:'100%', height:'2px', backgroundColor:'red'}}></div>
                <div className="references">
                    <p className="title">References</p>
                    <div className="references-container">
                        {referenceSections.map((section, index) => (
                            section.isEditing ? (
                                <div className="modal-background" key={index}>
                                    <div className="modal-box">
                                        <label htmlFor="edit-reference-name">
                                            Reference name
                                            <input 
                                                type="text"
                                                id='edit-reference-name'
                                                name='edit-reference-name'
                                                defaultValue={section.referenceName}
                                                onChange={(e) => handleEditedValues('references', index, 'referenceName', e.target.value)}
                                            />
                                        </label>
                                        <label htmlFor="edit-reference-position">
                                            Reference position
                                            <input 
                                                type="text"
                                                id='edit-reference-position'
                                                name='edit-reference-position'
                                                defaultValue={section.referencePosition}
                                                onChange={(e) => handleEditedValues('references', index, 'referencePosition', e.target.value)}
                                            />
                                        </label>
                                        <label htmlFor="edit-reference-phone-number">
                                            Phone number
                                            <input 
                                                type="text"
                                                id='edit-reference-phone-number'
                                                name='edit-reference-phone-number'
                                                defaultValue={section.referencePhoneNumber}
                                                onChange={(e) => handleEditedValues('references', index, 'referencePhoneNumber', e.target.value)}
                                            />
                                        </label>
                                        <label htmlFor="edit-reference-phone-number">
                                            Phone number
                                            <input 
                                                type="tel"
                                                id='edit-reference-phone-number'
                                                name='edit-reference-phone-number'
                                                defaultValue={section.referencePhoneNumber}
                                                onChange={(e) => handleEditedValues('references', index, 'referencePhoneNumber', e.target.value)}
                                            />
                                        </label>
                                        <label htmlFor="edit-reference-email">
                                            Email
                                            <input 
                                                type="email"
                                                id='edit-reference-email'
                                                name='edit-reference-email'
                                                defaultValue={section.referenceEmail}
                                                onChange={(e) => handleEditedValues('references', index, 'referenceEmail', e.target.value)}
                                            />
                                        </label>
                                        <button onClick={() => toggleEditing('references', index, false)}>Save edit</button>
                                    </div>
                                </div>
                            ) : (
                            <div className="reference-item" key={index}>
                                <p className="name">{section.referenceName}</p>
                                <p>{section.referencePosition}</p>
                                <p><b>Tel:</b> {section.referencePhoneNumber}</p>
                                <p><b>Email:</b> {section.referenceEmail}</p>
                                <div className="buttons-container">
                                    <button onClick={() => removeSection('references', index)} className="delete-section-button">
                                        <span className="material-icons-round">delete</span>
                                    </button>
                                    <button onClick={() => toggleEditing('references', index, true)}>
                                        <span className='material-icons-round'>edit</span>
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
