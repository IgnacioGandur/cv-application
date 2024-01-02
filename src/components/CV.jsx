import { useState } from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import References from "./References.jsx";
import defaultProfilePicture from "../assets/images/default-ppf.png";
import '../styles/CV.css';
import CVStyles from '../styles/CV.module.css';

export default function CV() {
const [personalInfo, setPersonalInfo] = useState({
        country: 'Argentina',
		city: "Tucumán",
		address: "Pasaje Edmundo Halley 4471",
		firstName: "Ignacio",
		lastName: "Gandur",
        ocupation: "Web developer",
		email: "gandurjuanignacio@gmail.com",
		phoneNumber: "381 692 5908",
		aboutMe: "Dictum malesuada eget ligula, consectetur montes elit, est suscipit sem neque lacus nulla massa risus placerat neque ante, risus nam venenatis lacus et eros cursus, dictum eget ornare imperdiet. ",
		profilePicture: defaultProfilePicture,
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
            skillName:'Photoshop',
            icon: '/cv.png',
        },
        {
            skillName:'Css',
            icon: '/cv.png',
        },
        {
            skillName:'Html',
            icon: '/cv.png',
        },
        {
            skillName:'Javascript',
            icon: '/cv.png',
        },
        {
            skillName:'React',
            icon: '/cv.png',
        },
        {
            skillName:'Figma',
            icon: '/cv.png',
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
			case "reference": {
				const updatedSections = [...referenceSections];
				updatedSections.splice(index, 1);
				setReferenceSections(updatedSections);
				break;
			}
			default:
				throw new Error(
					'Invalid section, "education" or "experience" are the only valid options.'
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
                            <div className='experience-item' key={index}>
                                <div className='button-companyName-container'>
                                    <button
                                        className='delete-section'
                                        onClick={() =>
                                            removeSection("experience", index)
                                        }
                                    >
                                        <span className='material-icons-round'>delete</span>
                                    </button>
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
                            <div key={index} className={CVStyles['education-item']}>
                                <div className={CVStyles['title-and-delete-button-container']}>
                                    <p className={CVStyles.title}>{section.institutionName}</p>
                                    <button
                                        className={CVStyles['delete-section-button']}
                                        onClick={() =>
                                            removeSection("education", index)
                                        }
                                    >
                                        <span className={`${CVStyles['material-icons-round']} material-icons-round`}>delete</span>
                                    </button>
                                </div>
                                <p>{section.titleOfStudy}</p>
                                <p>{section.dateFrom} - {section.dateUntil}</p>
                            </div>
                        ))}
                        <div className="skills">
                            <p className="title">Skills</p>
                            <div className="skills-container">
                                {skillsSections.map((section, index) => (
                                    <div className="skill-item" key={index}>
                                        <img className="skill-icon" src={section.icon} alt='Skill icon'/>
                                        <p>{section.skillName}</p>
                                        <button className="delete-section-button" onClick={() => removeSection('skill', index) }><span className="material-icons-round">delete</span></button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="contact">
                            <p className="title">Contact</p>
                            <p>{personalInfo.address},<br/>{personalInfo.city}, {personalInfo.country}.<br/>
                            <i className="fa-solid fa-mobile-screen"></i> {personalInfo.phoneNumber}<br/>
                            <i className="fa-solid fa-envelope"></i> {personalInfo.email}</p>
                            <div className="social-media">
                                <p><i className="fa-brands fa-square-x-twitter"></i> @</p>
                                <p><i className="fa-brands fa-square-facebook"></i> facebook.com/</p>
                                <p><i className="fa-brands fa-linkedin"></i> linkedin.com/in/</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="separator" style={{width:'100%', height:'2px', backgroundColor:'red'}}></div>
                <div className="references">
                    <p className="title">References</p>
                    <div className="references-container">
                        {referenceSections.map((section, index) => (
                            <div className="reference-item" key={index}>
                                <p className="name">{section.referenceName}</p>
                                <p>{section.referencePosition}</p>
                                <p><b>T:</b> {section.referencePhoneNumber}</p>
                                <p><b>E:</b> {section.referenceEmail}</p>
                                <button onClick={() => removeSection('reference', index)} className="delete-section-button"><span className="material-icons-round">delete</span></button>
                            </div>
                        ))} 
                    </div>
                </div>
			</section>
        </main>
	);
}
