import Flatpickr from 'react-flatpickr';
import MonthSelectPlugin from 'flatpickr/dist/plugins/monthSelect';
import ModalElementsStyles from '../styles/ModalElements.module.css';
import CVElementStyles from '../styles/CVElements.module.css';

export default function RenderExperience({
    experienceSections,
    handleEdit,
    toggleEditing,
    removeSection,
    backgroundOptions,
}) {
    return (
        <>
            {experienceSections.map((section, index) =>
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
                                htmlFor='new-company-name'
                            >
                                Company name
                                <input
                                    className={
                                        ModalElementsStyles[
                                            'modal-background__modal-box__label__input'
                                        ]
                                    }
                                    defaultValue={section.companyName}
                                    type='text'
                                    id='new-company-name'
                                    name='new-company-name'
                                    maxLength='30'
                                    onChange={(e) =>
                                        handleEdit(
                                            'experience',
                                            index,
                                            'companyName',
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
                                htmlFor='new-position-title'
                            >
                                Position title
                                <input
                                    className={
                                        ModalElementsStyles[
                                            'modal-background__modal-box__label__input'
                                        ]
                                    }
                                    defaultValue={section.positionTitle}
                                    type='text'
                                    id='new-position-title'
                                    name='new-position-title'
                                    maxLength='30'
                                    onChange={(e) =>
                                        handleEdit(
                                            'experience',
                                            index,
                                            'positionTitle',
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
                                htmlFor='edit-responsibilities'
                            >
                                Responsibilities at your position
                                <input
                                    className={
                                        ModalElementsStyles[
                                            'modal-background__modal-box__label__input'
                                        ]
                                    }
                                    defaultValue={section.responsibilities}
                                    type='text'
                                    id='edit-responsibilities'
                                    name='edit-responsibilities'
                                    maxLength='100'
                                    onChange={(e) =>
                                        handleEdit(
                                            'experience',
                                            index,
                                            'responsibilities',
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
                                        onChange: (selectedDate, dateStr) => {
                                            handleEdit(
                                                'experience',
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
                                        onChange: (selectedDate, dateStr) => {
                                            handleEdit(
                                                'experience',
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
                                    toggleEditing('experience', index, false)
                                }
                            >
                                Save edit
                            </button>
                        </div>
                    </div>
                ) : (
                    <div
                        className={
                            CVElementStyles[
                                'app__CV__education-and-experience__experience__item'
                            ]
                        }
                        key={index}
                    >
                        <div
                            className={
                                CVElementStyles[
                                    'app__CV__education-and-experience__experience__item__title-and-buttons'
                                ]
                            }
                        >
                            <div
                                className={`${CVElementStyles['app__CV__education-and-experience__experience__item__title-and-buttons__buttons-container']} buttons-container`}
                            >
                                <button
                                    className={CVElementStyles['small-button']}
                                    onClick={() =>
                                        removeSection('experience', index)
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
                                        toggleEditing('experience', index, true)
                                    }
                                >
                                    <span
                                        className={`${CVElementStyles['small-button__span']} material-icons-round`}
                                    >
                                        edit
                                    </span>
                                </button>
                            </div>
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
                                        'app__CV__education-and-experience__experience__item__title-and-buttons__company-name'
                                    ]
                                }
                            >
                                {section.companyName}
                            </p>
                        </div>
                        <p>{section.positionTitle}</p>
                        <p>{section.responsibilities}</p>
                        <p className='date'>{`${section.dateFrom} - ${section.dateUntil}`}</p>
                    </div>
                ),
            )}
        </>
    );
}
