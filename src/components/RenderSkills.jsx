import ModalElementsStyles from '../styles/ModalElements.module.css';
import CVElementStyles from '../styles/CVElements.module.css';

export default function RenderSkills({
    skillsSection,
    handleEdit,
    toggleEditing,
    removeSection,
}) {
    return (
        <>
            {skillsSection.map((section, index) =>
                section.isEditing ? (
                    <div
                        className={ModalElementsStyles['modal-background']}
                        key={index}
                        autoFocus
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
                                htmlFor='edit-skill-name'
                            >
                                Skill
                                <input
                                    className={
                                        ModalElementsStyles[
                                            'modal-background__modal-box__label__input'
                                        ]
                                    }
                                    onChange={(e) =>
                                        handleEdit(
                                            'skills',
                                            index,
                                            'name',
                                            e.target.value,
                                        )
                                    }
                                    type='text'
                                    defaultValue={section.name}
                                    id='edit-skill-name'
                                    maxLength='35'
                                    name='edit-skill-name'
                                />
                            </label>
                            <label
                                className={
                                    ModalElementsStyles[
                                        'modal-background__modal-box__label'
                                    ]
                                }
                                htmlFor='edit-skill-description'
                            >
                                Description
                                <input
                                    className={
                                        ModalElementsStyles[
                                            'modal-background__modal-box__label__input'
                                        ]
                                    }
                                    onChange={(e) =>
                                        handleEdit(
                                            'skills',
                                            index,
                                            'description',
                                            e.target.value,
                                        )
                                    }
                                    type='text'
                                    defaultValue={section.description}
                                    id='edit-skill-description'
                                    maxLength='150'
                                    name='edit-skill-description'
                                />
                            </label>
                            <label
                                className={
                                    ModalElementsStyles[
                                        'modal-background__modal-box__label'
                                    ]
                                }
                                htmlFor='edit-skill-icon'
                            >
                                Icon
                                <input
                                    className={`${ModalElementsStyles['modal-background__modal-box__label__input']} ${ModalElementsStyles['modal-background__modal-box__label__input--hide-file-button']}`}
                                    type='file'
                                    accept='image/png, image/jpg, image/jpeg'
                                    id='edit-skill-icon'
                                    name='edit-skill-icon'
                                    onChange={(e) =>
                                        handleEdit(
                                            'skills',
                                            index,
                                            'icon',
                                            e.target.files[0],
                                        )
                                    }
                                />
                            </label>
                            <button
                                className={
                                    ModalElementsStyles[
                                        'modal-background__modal-box__button'
                                    ]
                                }
                                onClick={() =>
                                    toggleEditing('skills', index, false)
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
                                'app__CV__education-and-experience__education__skills__container__item'
                            ]
                        }
                        key={index}
                    >
                        <img
                            className={
                                CVElementStyles[
                                    'app__CV__education-and-experience__education__skills__container__item__icon'
                                ]
                            }
                            src={section.icon}
                            alt='Skill icon'
                        />
                        <div>
                            <div className={
                                CVElementStyles[
                                    'app__CV__skills__container__item__title-and-description'
                                ]
                            }>
                                <p>{section.name}</p>
                                <div
                                    className={
                                        CVElementStyles[
                                            'app__CV__education-and-experience__education__skills__container__item__buttons-container'
                                        ]
                                    }
                                >
                                    <button
                                        className={CVElementStyles['small-button']}
                                        onClick={() => {
                                            toggleEditing('skills', index, true);
                                        }}
                                    >
                                        <span
                                            className={`${CVElementStyles['small-button__span']} material-icons-round`}
                                        >
                                            edit
                                        </span>
                                    </button>
                                    <button
                                        className={CVElementStyles['small-button']}
                                        onClick={() => removeSection('skills', index)}
                                    >
                                        <span
                                            className={`${CVElementStyles['small-button__span']} material-icons-round`}
                                        >
                                            delete
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <p>{section.description}</p>
                        </div>
                    </div>
                ),
            )}
        </>
    );
}
