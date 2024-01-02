import { useState } from 'react';
import '../styles/Skill.css';

export default function Skills ({ addSection }) {
    const [skill, setSkill] = useState(
        {
            skillName: '',
            icon:null,
        },
    );

    function gatherSkillsInfo(input,value) {
        switch(input) {
            case 'skill-name':
                setSkill((prevSkillsInfo) => ({...prevSkillsInfo, skillName: value}))
            break;
            case 'skill-icon': {
                const reader = new FileReader();
                reader.onloadend = (e) => {
                    setSkill((prevSkillInfo) => ({...prevSkillInfo, icon: e.target.result}));
                };
                reader.readAsDataURL(value);
                break;
            }
            default:
                throw new Error(`Invalid input elements. The function expects "skill" or "icon" input. Instead received: ${input}.`);
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                addSection('skill', skill);
            }} 
            id='create-skill'
        >
            <fieldset>
                <legend>Skill</legend>
                    <div className="container">
                        <label htmlFor="skill-name">
                            Skill
                            <input type="text" id="skill-name" placeholder='Photoshop...' onChange={(e) => gatherSkillsInfo(e.target.id, e.target.value)} />
                        </label>
                        <label htmlFor="skill-icon">
                            Icon
                            <input type="file" accept='image/png, image/jpg, image/jpeg' id='skill-icon' name='skill-icon' onChange={(e) => gatherSkillsInfo(e.target.id, e.target.files[0])} required/>
                        </label>
                        <button >Add skill</button>
                    </div>
            </fieldset>
        </form>
    )

}
