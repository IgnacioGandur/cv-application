import Flatpickr from "react-flatpickr";
import { useState } from "react";
import "flatpickr/dist/themes/light.css";

export default function Education({ addSection, clearInputs }) {
	const [educationInfo, setEducationInfo] = useState({
		institutionName: "",
		titleOfStudy: "",
		dateFrom: "",
		dateUntil: "",
	});

	function gatherEducationInfo(input, value) {
		switch (input) {
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
			case "date-from": {
				const dateFrom = document.querySelector(`#${input}`).value;
				setEducationInfo((prevEducationInfo) => ({
					...prevEducationInfo,
					dateFrom: dateFrom,
				}));
				break;
			}
			case "date-until": {
				const dateUntil = document.querySelector(`#${input}`).value;
				setEducationInfo((prevEducationInfo) => ({
					...prevEducationInfo,
					dateUntil: dateUntil,
				}));
				break;
			}
			default:
				throw new Error("Invalid education input field.");
		}
	}

	function clearDateInputs() {
		setEducationInfo((prevEducationInfo) => ({
			...prevEducationInfo,
			dateFrom: null,
			dateUntil: null,
		}));
	}

	return (
		<form
			action="#"
			id="education-form"
			onSubmit={(e) => {
				e.preventDefault();
				addSection("education", educationInfo);
				clearInputs(e);
				clearDateInputs();
			}}
		>
			<fieldset>
				<legend>Education Info</legend>
				<label htmlFor="institution-name">
					Institution name:
					<input
						onChange={(e) =>
							gatherEducationInfo(e.target.id, e.target.value)
						}
						type="text"
						name="institution-name"
						id="institution-name"
						required
					/>
				</label>
				<label htmlFor="title-of-study">
					Title of study:
					<input
						onChange={(e) =>
							gatherEducationInfo(e.target.id, e.target.value)
						}
						type="text"
						name="title-of-study"
						id="title-of-study"
						required
					/>
				</label>
				<label htmlFor="date-from">
					Date of study, from:
					<Flatpickr
						value={educationInfo.dateFrom}
						onChange={() => gatherEducationInfo("date-from", "")}
						options={{
							dateFormat: "F - Y",
							allowInput: true,
						}}
						type="datetime-local"
						name="date-from"
						id="date-from"
						required
					/>
				</label>
				<label htmlFor="date-until">
					Date of study, until:
					<Flatpickr
						value={educationInfo.dateUntil}
						onChange={() => gatherEducationInfo("date-until", "")}
						options={{
							dateFormat: "F - Y",
							allowInput: true,
						}}
						type="datetime-local"
						name="date-until"
						id="date-until"
						required
					/>
				</label>
			</fieldset>
			<button type="submit">Add education section</button>
		</form>
	);
}
