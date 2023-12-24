import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import defaultProfilePicture from "../assets/images/default-ppf.png";

export default function CV() {
	const [personalInfo, setPersonalInfo] = useState({
		country: null,
		city: "",
		address: "",
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		aboutMe: "",
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

	const [educationSections, setEducationSections] = useState([]);
	const [experienceSections, setExperienceSections] = useState([]);
	function addSection(whichSection, section) {
		switch (whichSection) {
			case "education":
				setEducationSections([...educationSections, section]);
				break;
			case "experience":
				setExperienceSections([...experienceSections, section]);
				break;
			default:
				throw new Error(
					'Invalid section, the section can only be "education" or "experience".'
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
					console.log(input.value);
				});
				break;
			}
			case "experience-form": {
				const form = document.querySelector(`#${event.target.id}`);
				const formInputs = form.querySelectorAll("input");
				formInputs.forEach((input) => {
					input.value = "";
					console.log(input.value);
				});
				break;
			}
			default:
				return;
		}
	}

	return (
		<>
			<section className="inputs">
				<PersonalInfo gatherPersonalInfo={gatherPersonalInfo} />
				<Education addSection={addSection} clearInputs={clearInputs} />
				<Experience addSection={addSection} clearInputs={clearInputs} />
			</section>
			<section className="CV">
				<h1>Country: {personalInfo.country}</h1>
				<h2>City: {personalInfo.city}</h2>
				<h2>Address: {personalInfo.address}</h2>
				<h1>
					Full name:{" "}
					{personalInfo.firstName + " " + personalInfo.lastName}{" "}
				</h1>
				<p>Email: {personalInfo.email}</p>
				<p>Phone number: {personalInfo.phoneNumber}</p>
				<p>About me: {personalInfo.aboutMe}</p>
				<img
					src={personalInfo.profilePicture}
					alt="User profile picture"
				/>
				<p>
					<strong>About me: </strong>I&apos;m {personalInfo.firstName}
				</p>
				<div className="education">
					<h1>Education Experience:</h1>
					{educationSections.map((section, index) => (
						<div key={index} className="education-item">
							<p>Institution name: {section.institutionName}</p>
							<p>Title of study: {section.titleOfStudy}</p>
							<p>From: {section.dateFrom}</p>
							<p>Until: {section.dateUntil}</p>
							<button
								onClick={() =>
									removeSection("education", index)
								}
							>
								Remove section
							</button>
						</div>
					))}
				</div>
				<div className="experience">
					<h1>Practical Experience:</h1>
					{experienceSections.map((section, index) => (
						<div key={index}>
							<p>Company name: {section.companyName}</p>
							<p>
								Position at the company: {section.positionTitle}
							</p>
							<p>
								Main responsibilities at your position:{" "}
								{section.responsibilities}
							</p>
							<p>Date, from: {section.dateFrom}</p>
							<p>Date, until: {section.dateUntil}</p>
							<button
								onClick={() =>
									removeSection("experience", index)
								}
							>
								Delete this section
							</button>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
