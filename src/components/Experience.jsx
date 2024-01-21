// import '../styles/Experience.css';      // Delete this later
import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import MonthSelect from 'flatpickr/dist/plugins/monthSelect';
import ExperienceStyles from '../styles/FormElements.module.css';
import 'flatpickr/dist/plugins/monthSelect/style.css';
import 'flatpickr/dist/themes/material_orange.css';

export default function Experience({
    addSection,
    clearInputs,
    isSectionLimitSurpassed,
}) {
    const [experienceInfo, setExperienceInfo] = useState({
        companyName: '',
        positionTitle: '',
        responsibilities: '',
        dateFrom: '',
        dateUntil: '',
    });

    function gatherExperienceInfo(input, value) {
        switch (input) {
            case 'company-name':
                setExperienceInfo((prevExperienceInfo) => ({
                    ...prevExperienceInfo,
                    companyName: value,
                }));
                break;
            case 'position-title':
                setExperienceInfo((prevExperienceInfo) => ({
                    ...prevExperienceInfo,
                    positionTitle: value,
                }));
                break;
            case 'responsibilities':
                setExperienceInfo((prevExperienceInfo) => ({
                    ...prevExperienceInfo,
                    responsibilities: value,
                }));
                break;
            case 'date-from': {
                setExperienceInfo((prevExperienceInfo) => ({
                    ...prevExperienceInfo,
                    dateFrom: value,
                }));
                break;
            }
            case 'date-until': {
                setExperienceInfo((prevExperienceInfo) => ({
                    ...prevExperienceInfo,
                    dateUntil: value,
                }));
                break;
            }
            default:
                throw new Error('Invalid experience input field.');
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
            action='#'
            id='experience-form'
            onSubmit={(e) => {
                e.preventDefault();
                if (isSectionLimitSurpassed('experience')) {
                    return;
                }
                addSection('experience', experienceInfo);
                clearInputs(e);
                clearExperienceInputs();
            }}
        >
            <fieldset className={ExperienceStyles.fieldset}>
                <legend className={ExperienceStyles.fieldset__legend}>
                    Experience <i>(5 items max.)</i>
                </legend>
                <div className={ExperienceStyles['fieldset__inputs-container']}>
                    <label
                        className={
                            ExperienceStyles[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='company-name'
                    >
                        <span>Company name</span>
                        <input
                            className={ExperienceStyles.input}
                            type='text'
                            name='company-name'
                            id='company-name'
                            onChange={(e) =>
                                gatherExperienceInfo(
                                    e.target.id,
                                    e.target.value,
                                )
                            }
                            placeholder='Mercado libre'
                            maxLength='30'
                            required
                        />
                    </label>
                    <label
                        htmlFor='position-title'
                        className={
                            ExperienceStyles[
                                'fieldset__inputs-container__label'
                            ]
                        }
                    >
                        <span>Your position at the company</span>
                        <input
                            className={ExperienceStyles.input}
                            type='text'
                            name='position-title'
                            id='position-title'
                            placeholder='Front end developer'
                            onChange={(e) =>
                                gatherExperienceInfo(
                                    e.target.id,
                                    e.target.value,
                                )
                            }
                            maxLength='30'
                            required
                        />
                    </label>
                </div>
                <label
                    htmlFor='responsibilities'
                    className={
                        ExperienceStyles['fieldset__inputs-container__label']
                    }
                >
                    <span>Main responsibilities at your position</span>
                    <input
                        className={ExperienceStyles.input}
                        type='text'
                        name='responsibilities'
                        id='responsibilities'
                        placeholder='To ensure the website visitors can easily interact with the website'
                        onChange={(e) =>
                            gatherExperienceInfo(e.target.id, e.target.value)
                        }
                        maxLength='100'
                        required
                    />
                </label>
                <div className={ExperienceStyles['fieldset__inputs-container']}>
                    <label
                        htmlFor='date-from'
                        className={
                            ExperienceStyles[
                                'fieldset__inputs-container__label'
                            ]
                        }
                    >
                        <span>Date, from</span>
                        <Flatpickr
                            className={ExperienceStyles.input}
                            value={experienceInfo.dateFrom}
                            options={{
                                allowInput: true,
                                plugins: [new MonthSelect({})],
                                onChange: (selectedDate, dateStr) => {
                                    gatherExperienceInfo('date-from', dateStr);
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
                            ExperienceStyles[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='date-until'
                    >
                        <span>Date, until</span>
                        <Flatpickr
                            className={
                                ExperienceStyles[
                                    'fieldset__inputs-container__label__input'
                                ]
                            }
                            value={experienceInfo.dateUntil}
                            options={{
                                allowInput: true,
                                plugins: [new MonthSelect({})],
                                onChange: (selectedDate, dateStr) => {
                                    gatherExperienceInfo('date-until', dateStr);
                                },
                            }}
                            name='date-until'
                            id='date-until'
                            placeholder='Click to open the calendar...'
                            required
                        />
                    </label>
                </div>
                <button className={ExperienceStyles.button} type='submit'>
                    Add experience section
                </button>
            </fieldset>
        </form>
    );
}
