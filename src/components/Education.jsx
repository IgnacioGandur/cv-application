// import '../styles/Education.css'; // Delete this later
import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import MonthSelect from 'flatpickr/dist/plugins/monthSelect';
import EducationStyles from '../styles/FormElements.module.css';
import 'flatpickr/dist/themes/material_orange.css';

export default function Education({
    addSection,
    clearInputs,
    isSectionLimitSurpassed,
}) {
    const [educationInfo, setEducationInfo] = useState({
        institutionName: '',
        titleOfStudy: '',
        dateFrom: '',
        dateUntil: '',
    });

    function gatherEducationInfo(input, value) {
        switch (input) {
            case 'institution-name':
                setEducationInfo((prevEducationInfo) => ({
                    ...prevEducationInfo,
                    institutionName: value,
                }));
                break;
            case 'title-of-study':
                setEducationInfo((prevEducationInfo) => ({
                    ...prevEducationInfo,
                    titleOfStudy: value,
                }));
                break;
            case 'date-from':
                setEducationInfo((prevEducationInfo) => ({
                    ...prevEducationInfo,
                    dateFrom: value,
                }));
                break;
            case 'date-until':
                setEducationInfo((prevEducationInfo) => ({
                    ...prevEducationInfo,
                    dateUntil: value,
                }));
                break;
            default:
                throw new Error('Invalid education input field.');
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
            action='#'
            id='education-form'
            onSubmit={(e) => {
                e.preventDefault();
                if (isSectionLimitSurpassed('education')) {
                    return;
                }
                addSection('education', educationInfo);
                clearInputs(e);
                clearDateInputs();
            }}
        >
            <fieldset className={EducationStyles.fieldset}>
                <legend className={EducationStyles.fieldset__legend}>
                    Education <i>(2 items max.)</i>
                </legend>
                <div className={EducationStyles['fieldset__inputs-container']}>
                    <label
                        className={
                            EducationStyles['fieldset__inputs-container__label']
                        }
                        htmlFor='institution-name'
                    >
                        <span>Institution name</span>
                        <input
                            className={EducationStyles.input}
                            onChange={(e) =>
                                gatherEducationInfo(e.target.id, e.target.value)
                            }
                            type='text'
                            name='institution-name'
                            id='institution-name'
                            placeholder='The Odin Project'
                            maxLength='40'
                            required
                        />
                    </label>
                    <label
                        className={
                            EducationStyles['fieldset__inputs-container__label']
                        }
                        htmlFor='title-of-study'
                    >
                        <span>Title of study</span>
                        <input
                            className={EducationStyles.input}
                            onChange={(e) =>
                                gatherEducationInfo(e.target.id, e.target.value)
                            }
                            type='text'
                            name='title-of-study'
                            id='title-of-study'
                            placeholder='Front end web developer'
                            maxLength='40'
                            required
                        />
                    </label>
                </div>
                <div className={EducationStyles['fieldset__inputs-container']}>
                    <label
                        className={
                            EducationStyles['fieldset__inputs-container__label']
                        }
                        htmlFor='date-from'
                    >
                        <span>Date of study, from</span>
                        <Flatpickr
                            className={EducationStyles.input}
                            value={educationInfo.dateFrom}
                            options={{
                                plugins: [new MonthSelect({})],
                                allowInput: true,
                                onChange: (selectedDate, dateStr) => {
                                    gatherEducationInfo('date-from', dateStr);
                                },
                            }}
                            name='date-from'
                            id='date-from'
                            placeholder='Click to open the calendar...'
                            required
                        />
                    </label>
                    <label
                        className={
                            EducationStyles['fieldset__inputs-container__label']
                        }
                        htmlFor='date-until'
                    >
                        <span>Date of study, until</span>
                        <Flatpickr
                            className={EducationStyles.input}
                            value={educationInfo.dateUntil}
                            options={{
                                plugins: [new MonthSelect({})],
                                allowInput: true,
                                onChange: (selectedDate, dateStr) => {
                                    gatherEducationInfo('date-until', dateStr);
                                },
                            }}
                            name='date-until'
                            id='date-until'
                            placeholder='Click to open the calendar...'
                            required
                        />
                    </label>
                </div>
                <button className={EducationStyles.button} type='submit'>
                    Add education section
                </button>
            </fieldset>
        </form>
    );
}
