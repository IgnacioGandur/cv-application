// import '../styles/Skill.css';
import { useState } from 'react';
import FormElementsStyle from '../styles/FormElements.module.css';

export default function Skills({
    addSection,
    clearInputs,
    isSectionLimitSurpassed,
}) {
    const [skill, setSkill] = useState({
        skillName: '',
        icon: null,
    });

    function gatherSkillsInfo(input, value) {
        switch (input) {
            case 'skill-name':
                setSkill((prevSkillsInfo) => ({
                    ...prevSkillsInfo,
                    skillName: value,
                }));
                break;
            case 'skill-icon': {
                if (value) {
                    const reader = new FileReader();
                    reader.onloadend = (e) => {
                        setSkill((prevSkillInfo) => ({
                            ...prevSkillInfo,
                            icon: e.target.result,
                        }));
                    };
                    reader.readAsDataURL(value);
                } else {
                    setSkill((prevSkillInfo) => ({
                        ...prevSkillInfo,
                        icon: null,
                    }));
                }
                break;
            }
            default:
                throw new Error(
                    `Invalid input elements. The function expects "skill" or "icon" input. Instead received: ${input}.`,
                );
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (isSectionLimitSurpassed('skills')) {
                    return;
                }
                addSection('skills', skill);
                clearInputs(e);
            }}
            id='create-skill'
        >
            <fieldset className={FormElementsStyle.fieldset}>
                <legend className={FormElementsStyle.fieldset__legend}>
                    Skills <i>(9 items max.)</i>
                </legend>
                <div
                    className={`${FormElementsStyle['fieldset__inputs-container']} ${FormElementsStyle['fieldset__inputs-container--flex-end']}`}
                >
                    <label
                        className={
                            FormElementsStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='skill-name'
                    >
                        Skill
                        <input
                            className={FormElementsStyle.input}
                            type='text'
                            id='skill-name'
                            placeholder='Photoshop...'
                            onChange={(e) =>
                                gatherSkillsInfo(e.target.id, e.target.value)
                            }
                            maxLength='35'
                            required
                        />
                    </label>
                    <label
                        className={
                            FormElementsStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='skill-icon'
                    >
                        Icon
                        <input
                            className={`${FormElementsStyle.input} ${FormElementsStyle['input-type-file']}`}
                            type='file'
                            accept='image/png, image/jpg, image/jpeg'
                            id='skill-icon'
                            name='skill-icon'
                            onChange={(e) =>
                                gatherSkillsInfo(e.target.id, e.target.files[0])
                            }
                            required
                        />
                    </label>
                    <button className={FormElementsStyle.button}>
                        Add skill
                    </button>
                </div>
            </fieldset>
        </form>
    );
}
