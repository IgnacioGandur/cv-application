import ModalElementsStyles from '../styles/ModalElements.module.css';
import CVElementStyles from '../styles/CVElements.module.css';

export default function RenderReferences({
    referencesSection,
    handleEdit,
    toggleEditing,
    removeSection,
}) {
    return (
        <>
            {referencesSection.map((section, index) =>
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
                                htmlFor='edit-reference-name'
                            >
                                Name
                                <input
                                    className={
                                        ModalElementsStyles[
                                            'modal-background__modal-box__label__input'
                                        ]
                                    }
                                    type='text'
                                    id='edit-reference-name'
                                    name='edit-reference-name'
                                    defaultValue={section.name}
                                    onChange={(e) =>
                                        handleEdit(
                                            'references',
                                            index,
                                            'name',
                                            e.target.value,
                                        )
                                    }
                                    maxLength='25'
                                />
                            </label>
                            <label
                                className={
                                    ModalElementsStyles[
                                        'modal-background__modal-box__label'
                                    ]
                                }
                                htmlFor='edit-reference-company'
                            >
                                Company
                                <input
                                    className={
                                        ModalElementsStyles[
                                            'modal-background__modal-box__label__input'
                                        ]
                                    }
                                    type='text'
                                    id='edit-reference-company'
                                    name='edit-reference-company'
                                    defaultValue={section.company}
                                    onChange={(e) =>
                                        handleEdit(
                                            'references',
                                            index,
                                            'company',
                                            e.target.value,
                                        )
                                    }
                                    maxLength='25'
                                />
                            </label>
                            <label
                                className={
                                    ModalElementsStyles[
                                        'modal-background__modal-box__label'
                                    ]
                                }
                                htmlFor='edit-reference-position'
                            >
                                Position
                                <input
                                    className={
                                        ModalElementsStyles[
                                            'modal-background__modal-box__label__input'
                                        ]
                                    }
                                    type='text'
                                    id='edit-reference-position'
                                    name='edit-reference-position'
                                    defaultValue={section.position}
                                    onChange={(e) =>
                                        handleEdit(
                                            'references',
                                            index,
                                            'position',
                                            e.target.value,
                                        )
                                    }
                                    maxLength='30'
                                />
                            </label>
                            <label
                                className={
                                    ModalElementsStyles[
                                        'modal-background__modal-box__label'
                                    ]
                                }
                                htmlFor='edit-reference-relationship'
                            >
                                Relationship
                                <input
                                    className={
                                        ModalElementsStyles[
                                            'modal-background__modal-box__label__input'
                                        ]
                                    }
                                    type='text'
                                    id='edit-reference-relationship'
                                    name='edit-reference-relationship'
                                    defaultValue={section.relationship}
                                    onChange={(e) =>
                                        handleEdit(
                                            'references',
                                            index,
                                            'relationship',
                                            e.target.value,
                                        )
                                    }
                                    maxLength='30'
                                />
                            </label>
                            <label
                                className={
                                    ModalElementsStyles[
                                        'modal-background__modal-box__label'
                                    ]
                                }
                                htmlFor='edit-reference-phone-number'
                            >
                                Phone number
                                <input
                                    className={
                                        ModalElementsStyles[
                                            'modal-background__modal-box__label__input'
                                        ]
                                    }
                                    type='tel'
                                    id='edit-reference-phone-number'
                                    name='edit-reference-phone-number'
                                    defaultValue={section.phoneNumber}
                                    onChange={(e) =>
                                        handleEdit(
                                            'references',
                                            index,
                                            'phoneNumber',
                                            e.target.value,
                                        )
                                    }
                                    maxLength='25'
                                />
                            </label>
                            <label
                                className={
                                    ModalElementsStyles[
                                        'modal-background__modal-box__label'
                                    ]
                                }
                                htmlFor='edit-reference-email'
                            >
                                Email
                                <input
                                    className={
                                        ModalElementsStyles[
                                            'modal-background__modal-box__label__input'
                                        ]
                                    }
                                    type='email'
                                    id='edit-reference-email'
                                    name='edit-reference-email'
                                    defaultValue={section.email}
                                    onChange={(e) =>
                                        handleEdit(
                                            'references',
                                            index,
                                            'email',
                                            e.target.value,
                                        )
                                    }
                                    maxLength='30'
                                />
                            </label>
                            <button
                                className={
                                    ModalElementsStyles[
                                        'modal-background__modal-box__button'
                                    ]
                                }
                                onClick={() =>
                                    toggleEditing('references', index, false)
                                }
                            >
                                Save edit
                            </button>
                        </div>
                    </div>
                ) : (
                    <div
                        className={
                            CVElementStyles.app__CV__references__container__item
                        }
                        key={index}
                    >
                        <p
                            className={
                                CVElementStyles.app__CV__references__container__item__name
                            }
                        >
                            {section.name}
                        </p>
                        <p>{section.company}</p>
                        <p>{section.position}</p>
                        <p>{section.relationship}</p>
                        <p>
                            <b>T:</b> {section.phoneNumber}
                        </p>
                        <p>
                            <b>E:</b>{' '}
                            <a href={`mailto:${section.email}`}>
                                {section.email}
                            </a>
                        </p>
                        <div
                            className={
                                CVElementStyles[
                                    'app__CV__references__container__item__buttons-container'
                                ]
                            }
                        >
                            <button
                                className={CVElementStyles['small-button']}
                                onClick={() =>
                                    removeSection('references', index)
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
                                    toggleEditing('references', index, true)
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
                ),
            )}
        </>
    );
}
