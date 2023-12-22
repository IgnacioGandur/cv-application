import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import defaultProfilePicture from "../assets/default-ppf.png";

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

	const [educationInfo, setEducationInfo] = useState({
		institutionName: "",
		titleOfStudy: "",
		dateFrom: "",
		dateUntil: "",
	});

	// Gather information.
	function gatherInfo(section, inputField, value) {
		switch (section) {
			case "personal-info":
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
									firstLetter.toUpperCase() +
									restString.join(""),
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
								city:
									firstLetter.toUpperCase() +
									restString.join(""),
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
					case "profile-picture":
						{
							const reader = new FileReader();
							reader.onload = (e) => {
								setPersonalInfo((prevPersonalInfo) => ({
									...prevPersonalInfo,
									profilePicture: e.target.result,
								}));
							};
							reader.readAsDataURL(value);
						}
						break;
				}
				break;
			case "education-info":
				switch (inputField) {
					case "institution-name":
						setEducationInfo((prevEducationInfo) => ({
							...prevEducationInfo,
							institutionName: value,
						}));
						break;
					case "title-of-study":
						setEducationInfo((prevEducationInfo) => ({
							...prevEducationInfo,
							titleOfStudy: value,
						}));
						break;
					case "date-from":
						{
							const dateFrom = document.querySelector(
								`#${inputField}`
							).value;
							setEducationInfo((prevEducationInfo) => ({
								...prevEducationInfo,
								dateFrom: dateFrom,
							}));
						}
						break;
					case "date-until":
						{
							const dateUntil = document.querySelector(
								`#${inputField}`
							).value;
							setEducationInfo((prevEducationInfo) => ({
								...prevEducationInfo,
								dateUntil: dateUntil,
							}));
						}
						break;
				}
				break;
			case "experience-info":
				break;
		}
	}

	return (
		<>
			<section className="inputs">
				<PersonalInfo gatherInfo={gatherInfo} />
				<EducationInfo gatherInfo={gatherInfo} />
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
					, {educationInfo.titleOfStudy} from {personalInfo.country}
				</p>
				<div className="education">
					<h1>Education</h1>
					<h3>Institution name: {educationInfo.institutionName}</h3>
					<p>Title of study: {educationInfo.titleOfStudy}</p>
					<p>Date of study, from: {educationInfo.dateFrom}</p>
					<p>Date of study, until: {educationInfo.dateUntil}</p>
				</div>
				<div className="experience">
					<h1>Experience</h1>
				</div>
			</section>
		</>
	);
}
