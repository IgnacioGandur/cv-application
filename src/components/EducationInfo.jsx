import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";

export default function EducationInfo({ gatherInfo }) {
	return (
		<>
			<h1>Education Info</h1>
			<label htmlFor="institution-name">
				Institution name:
				<input
					onChange={(e) =>
						gatherInfo(
							"education-info",
							e.target.id,
							e.target.value
						)
					}
					type="text"
					name="institution-name"
					id="institution-name"
				/>
			</label>
			<label htmlFor="title-of-study">
				Title of study:
				<input
					onChange={(e) =>
						gatherInfo(
							"education-info",
							e.target.id,
							e.target.value
						)
					}
					type="text"
					name="title-of-study"
					id="title-of-study"
				/>
			</label>
			<label htmlFor="date-from">
				Date of study, from:
				<Flatpickr
					onChange={() =>
						gatherInfo("education-info", "date-from", "")
					}
					options={{
						dateFormat: "F - Y",
					}}
					type="datetime-local"
					name="date-from"
					id="date-from"
				/>
			</label>
			<label htmlFor="date-until">
				Date of study, until:
				<Flatpickr
					onChange={() =>
						gatherInfo("education-info", "date-until", "")
					}
					options={{
						dateFormat: "F - Y",
					}}
					type="datetime-local"
					name="date-until"
					id="date-until"
				/>
			</label>
		</>
	);
}
