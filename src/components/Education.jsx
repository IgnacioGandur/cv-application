import '../styles/Education.css';
import { useState } from "react";
import Flatpickr from "react-flatpickr";
import MonthSelect from 'flatpickr/dist/plugins/monthSelect';
import "flatpickr/dist/themes/material_orange.css";

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
			case "date-from": 
				setEducationInfo((prevEducationInfo) => ({
					...prevEducationInfo,
					dateFrom: value,
				}));
				break;
			case "date-until": 
				setEducationInfo((prevEducationInfo) => ({
					...prevEducationInfo,
					dateUntil: value,
				}));
                break;
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
                <div className="inputs-container">
                    <label htmlFor="institution-name">
                        <span>Institution name</span>
                        <input
                            onChange={(e) =>
                                gatherEducationInfo(e.target.id, e.target.value)
                            }
                            type="text"
                            name="institution-name"
                            id="institution-name"
                            placeholder='The Odin Project'
                            required
                        />
                    </label>
                    <label htmlFor="title-of-study">
                        <span>Title of study</span>
                        <input
                            onChange={(e) =>
                                gatherEducationInfo(e.target.id, e.target.value)
                            }
                            type="text"
                            name="title-of-study"
                            id="title-of-study"
                            placeholder='Front end web developer'
                            required
                        />
                    </label>
                </div>
                <div className="inputs-container">
                    <label htmlFor="date-from">
                        <span>Date of study, from</span>
                        <Flatpickr
                            value={educationInfo.dateFrom}
                            // onChange={() => gatherEducationInfo("date-from", "")}
                            options={{
                                plugins:[new MonthSelect({})],
                                allowInput: true,
                                onChange:(selectedDate, dateStr) => {
                                    gatherEducationInfo('date-from', dateStr);
                                }
                            }}
                            // type="datetime-local"
                            name="date-from"
                            id="date-from"
                            placeholder='Click to open the calendar...'
                            required
                        />
                    </label>
                    <label htmlFor="date-until">
                        <span>Date of study, until</span>
                        <Flatpickr
                            value={educationInfo.dateUntil}
                            // onChange={() => gatherEducationInfo("date-until", "")}
                            options={{
                                plugins:[new MonthSelect({})],
                                allowInput: true,
                                onChange: (selectedDate, dateStr) => {
                                    gatherEducationInfo('date-until', dateStr);
                                }
                            }}
                            // type="datetime-local"
                            name="date-until"
                            id="date-until"
                            placeholder='Click to open the calendar...'
                            required
                        />
                    </label>
                </div>
                <button type="submit">Add education section</button>
			</fieldset>
		</form>
	);
}
