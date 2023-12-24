import { useState } from "react";
import Flatpickr from "react-flatpickr";

export default function Experience({ addSection, clearInputs }) {
	const [experienceInfo, setExperienceInfo] = useState({
		companyName: "",
		positionTitle: "",
		responsibilities: "",
		dateFrom: "",
		dateUntil: "",
	});

	function gatherExperienceInfo(input, value) {
		switch (input) {
			case "company-name":
				setExperienceInfo((prevExperienceInfo) => ({
					...prevExperienceInfo,
					companyName: value,
				}));
				break;
			case "position-title":
				setExperienceInfo((prevExperienceInfo) => ({
					...prevExperienceInfo,
					positionTitle: value,
				}));
				break;
			case "responsibilities":
				setExperienceInfo((prevExperienceInfo) => ({
					...prevExperienceInfo,
					responsibilities: value,
				}));
				break;
			case "date-from": {
				const dateFrom = document.querySelector(`#${input}`).value;
				setExperienceInfo((prevExperienceInfo) => ({
					...prevExperienceInfo,
					dateFrom: dateFrom,
				}));
				break;
			}
			case "date-until": {
				const dateUntil = document.querySelector(`#${input}`).value;
				setExperienceInfo((prevExperienceInfo) => ({
					...prevExperienceInfo,
					dateUntil: dateUntil,
				}));
				break;
			}
			default:
				throw new Error("Invalid experience input field.");
		}
	}

	function clearExperienceInputs() {
		setExperienceInfo((prevExperienceInfo) => ({
			...prevExperienceInfo,
			dateFrom: null,
			dateUntil: null,
		}));
	}

	return (
		<form
			action="#"
			id="experience-form"
			onSubmit={(e) => {
				e.preventDefault();
				addSection("experience", experienceInfo);
				clearInputs(e);
				clearExperienceInputs();
			}}
		>
			<fieldset>
				<legend>Experience:</legend>
				<label htmlFor="company-name">
					Company name:
					<input
						type="text"
						name="company-name"
						id="company-name"
						onChange={(e) =>
							gatherExperienceInfo(e.target.id, e.target.value)
						}
						required
					/>
				</label>
				<label htmlFor="position-title">
					Your position at the company:
					<input
						type="text"
						name="position-title"
						id="position-title"
						onChange={(e) =>
							gatherExperienceInfo(e.target.id, e.target.value)
						}
						required
					/>
				</label>
				<label htmlFor="responsibilities">
					Main responsibilities at your position:
					<input
						type="text"
						name="responsibilities"
						id="responsibilities"
						onChange={(e) =>
							gatherExperienceInfo(e.target.id, e.target.value)
						}
						required
					/>
				</label>
				<label htmlFor="date-from">
					Date, from:
					<Flatpickr
						value={experienceInfo.dateFrom}
						onChange={() => gatherExperienceInfo("date-from", "")}
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
					Date, until:
					<Flatpickr
						value={experienceInfo.dateUntil}
						onChange={() => gatherExperienceInfo("date-until", "")}
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
			<button type="submit">Add experience section</button>
		</form>
	);
}
