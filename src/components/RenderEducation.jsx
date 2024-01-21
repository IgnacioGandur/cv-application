import Flatpickr from 'react-flatpickr';
import MonthSelectPlugin from 'flatpickr/dist/plugins/monthSelect';
import ModalElementsStyles from '../styles/ModalElements.module.css';
import CVElementStyles from '../styles/CVElements.module.css';

export default function RenderEducation({
    educationSections,
    handleEdit,
    toggleEditing,
    removeSection,
    backgroundOptions,
}) {
    return (
        <>
            {educationSections.map((section, index) =>
                section.isEditing ? (
                    <div
                        className={ModalElementsStyles['modal-background']}
                        key={index}
                    >
                        <div
                            className={
                                ModalElementsStyles[
                                    'modal-background__modal-box'
                                ]
                            }
                        >
                            <label
                                className={
                                    ModalElementsStyles[
                                        'modal-background__modal-box__label'
                                    ]
                                }
                                htmlFor='edit-institution-name'
                            >
                                Institution name
                                <input
                                    className={
                                        ModalElementsStyles[
                                            'modal-background__modal-box__label__input'
                                        ]
                                    }
                                    defaultValue={section.institutionName}
                                    type='text'
                                    id='edit-institution-name'
                                    name='edit-institution-name'
                                    maxLength='40'
                                    onChange={(e) =>
                                        handleEdit(
                                            'education',
                                            index,
                                            'institutionName',
                                            e.target.value,
                                        )
                                    }
                                />
                            </label>
                            <label
                                className={
                                    ModalElementsStyles[
                                        'modal-background__modal-box__label'
                                    ]
                                }
                                htmlFor='edit-title-of-study'
                            >
                                Title of study
                                <input
                                    className={
                                        ModalElementsStyles[
                                            'modal-background__modal-box__label__input'
                                        ]
                                    }
                                    defaultValue={section.titleOfStudy}
                                    type='text'
                                    id='edit-title-of-study'
                                    name='edit-title-of-study'
                                    maxLength='40'
                                    onChange={(e) =>
                                        handleEdit(
                                            'education',
                                            index,
                                            'titleOfStudy',
                                            e.target.value,
                                        )
                                    }
                                />
                            </label>
                            <label
                                className={
                                    ModalElementsStyles[
                                        'modal-background__modal-box__label'
                                    ]
                                }
                                htmlFor='edit-date-from'
                            >
                                Date, from
                                <Flatpickr
                                    className={
                                        ModalElementsStyles[
                                            'modal-background__modal-box__label__input'
                                        ]
                                    }
                                    defaultValue={section.dateFrom}
                                    id='edit-date-from'
                                    name='edit-date-from'
                                    options={{
                                        allowInput: true,
                                        plugins: [new MonthSelectPlugin({})],
                                        onChange: (selectedDates, dateStr) => {
                                            handleEdit(
                                                'education',
                                                index,
                                                'dateFrom',
                                                dateStr,
                                            );
                                        },
                                    }}
                                />
                            </label>
                            <label
                                className={
                                    ModalElementsStyles[
                                        'modal-background__modal-box__label'
                                    ]
                                }
                                htmlFor='edit-date-until'
                            >
                                Date, until
                                <Flatpickr
                                    className={
                                        ModalElementsStyles[
                                            'modal-background__modal-box__label__input'
                                        ]
                                    }
                                    defaultValue={section.dateUntil}
                                    id='edit-date-until'
                                    name='edit-date-until'
                                    options={{
                                        allowInput: true,
                                        plugins: [new MonthSelectPlugin({})],
                                        onChange: (selectedDates, dateStr) => {
                                            handleEdit(
                                                'education',
                                                index,
                                                'dateUntil',
                                                dateStr,
                                            );
                                        },
                                    }}
                                />
                            </label>
                            <button
                                className={
                                    ModalElementsStyles[
                                        'modal-background__modal-box__button'
                                    ]
                                }
                                onClick={() =>
                                    toggleEditing('education', index, false)
                                }
                            >
                                Save edit
                            </button>
                        </div>
                    </div>
                ) : (
                    <div
                        key={index}
                        className={
                            CVElementStyles[
                                'app__CV__education-and-experience__education__item'
                            ]
                        }
                    >
                        <div
                            className={
                                CVElementStyles[
                                    'app__CV__education-and-experience__education__item__title-and-buttons'
                                ]
                            }
                        >
                            <p
                                style={{
                                    border: `1px solid ${
                                        backgroundOptions.darkBackground
                                            ? 'white'
                                            : 'black'
                                    }`,
                                }}
                                className={
                                    CVElementStyles[
                                        'app__CV__education-and-experience__education__item__title-and-buttons__institution-name'
                                    ]
                                }
                            >
                                {section.institutionName}
                            </p>
                            <div
                                className={
                                    CVElementStyles[
                                        'app__CV__education-and-experience__education__item__title-and-buttons__buttons-container'
                                    ]
                                }
                            >
                                <button
                                    className={CVElementStyles['small-button']}
                                    onClick={() =>
                                        removeSection('education', index)
                                    }
                                >
                                    <span
                                        className={`${CVElementStyles['small-button__span']} material-icons-round`}
                                    >
                                        delete
                                    </span>
                                </button>
                                <button
                                    className={CVElementStyles['small-button']}
                                    onClick={() =>
                                        toggleEditing('education', index, true)
                                    }
                                >
                                    <span
                                        className={`${CVElementStyles['small-button__span']} material-icons-round`}
                                    >
                                        edit
                                    </span>
                                </button>
                            </div>
                        </div>
                        <p>{section.titleOfStudy}</p>
                        <p>
                            {section.dateFrom} - {section.dateUntil}
                        </p>
                    </div>
                ),
            )}
        </>
    );
}
