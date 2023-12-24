import "./../styles/PersonalInfo.css";

export default function PersonalInfo({ gatherPersonalInfo }) {
	return (
		<>
			<h1>Personal Info</h1>
			<label htmlFor="country">
				Country:
				<input
					onChange={(e) =>
						gatherPersonalInfo(e.target.id, e.target.value)
					}
					type="text"
					name="country"
					id="country"
				/>
			</label>
			<label htmlFor="city">
				Province/State/City:
				<input
					onChange={(e) =>
						gatherPersonalInfo(e.target.id, e.target.value)
					}
					type="text"
					name="city"
					id="city"
				/>
			</label>
			<label htmlFor="address">
				Address:
				<input
					type="text"
					name="address"
					id="address"
					onChange={(e) =>
						gatherPersonalInfo(e.target.id, e.target.value)
					}
				/>
			</label>
			<label htmlFor="first-name">
				First name:
				<input
					onChange={(e) =>
						gatherPersonalInfo(e.target.id, e.target.value)
					}
					type="text"
					name="first-name"
					id="first-name"
					autoComplete="true"
					required
				/>
			</label>
			<label htmlFor="last-name">
				Last name:
				<input
					onChange={(e) =>
						gatherPersonalInfo(e.target.id, e.target.value)
					}
					type="text"
					name="last-name"
					id="last-name"
					autoComplete="true"
					required
				/>
			</label>
			<label htmlFor="email">
				Email:
				<input
					onChange={(e) =>
						gatherPersonalInfo(e.target.id, e.target.value)
					}
					type="email"
					name="email"
					id="email"
					autoComplete="true"
					required
				/>
			</label>
			<label htmlFor="phone-number">
				Phone number:
				<input
					onChange={(e) =>
						gatherPersonalInfo(e.target.id, e.target.value)
					}
					type="tel"
					name="phone-number"
					id="phone-number"
					autoComplete="true"
					required
				/>
			</label>
			<label htmlFor="about-me">
				A small description about you:
				<input
					onChange={(e) =>
						gatherPersonalInfo(e.target.id, e.target.value)
					}
					type="text"
					name="about-me"
					id="about-me"
					required
				/>
			</label>
			<label htmlFor="profile-picture">
				Select a profile picture:
				<input
					onChange={(e) =>
						gatherPersonalInfo(e.target.id, e.target.files[0])
					}
					id="profile-picture"
					name="profile-picture"
					type="file"
					accept="image/png, image/jpg, image/jpeg"
					required
				/>
			</label>
		</>
	);
}
