import { useState } from 'react';
import FormElementsStyle from '../styles/FormElements.module.css';

export default function References({ addSection, clearInputs, isSectionLimitSurpassed}) {

    const [reference, setReference] = useState({
        referenceName: null,
        referencePosition: null,
        referencePhoneNumber: null,
        referenceEmail: null,
    })

    function gatherReferenceInfo(input, value) {
        switch(input) {
            case 'reference-name': {
                setReference((prevReferenceInfo) => ({...prevReferenceInfo, referenceName: value,}));
                break;
            }
            case 'reference-position': {
                setReference((prevReferenceInfo) => ({...prevReferenceInfo, referencePosition: value,}));
                break;
            }
            case 'reference-phone': {
                setReference((prevReferenceInfo) => ({...prevReferenceInfo, referencePhoneNumber: value,}));
                break;
            }
            case 'reference-email': {
                setReference((prevReferenceInfo) => ({...prevReferenceInfo, referenceEmail: value,}));
                break;
            }
            default:
                throw new Error(`Invalid input field id. Received: ${input}`)
        }
    }

    return (
        <form id="references" onSubmit={(e) => {
            e.preventDefault();
            if (isSectionLimitSurpassed('reference')) {
                return;
            }
            addSection(e.target.id, reference);
            clearInputs(e);
        }}>
            <fieldset
                className={FormElementsStyle.fieldset}
            >
                <legend
                    className={FormElementsStyle.fieldset__legend}
                >References <i>(4 items max.)</i></legend>
                    <div className={FormElementsStyle['fieldset__inputs-container']}>
                        <label 
                            className={FormElementsStyle['fieldset__inputs-container__label']}
                            htmlFor="reference-name"
                        >
                            Reference name
                            <input 
                                className={FormElementsStyle.input}
                                onChange={(e) => gatherReferenceInfo(e.target.id, e.target.value)} 
                                type="text" 
                                id="reference-name" 
                                name="reference-name" 
                                maxLength='25'
                                required
                                />
                        </label>
                        <label 
                            className={FormElementsStyle['fieldset__inputs-container__label']}
                            htmlFor="reference-position">
                            Your position at the reference
                            <input 
                                className={FormElementsStyle.input}
                                onChange={(e) => gatherReferenceInfo(e.target.id, e.target.value)} 
                                type="text"
                                id="reference-position"
                                name="reference-position" 
                                maxLength='30'
                                required                         
                                />
                        </label>
                        <label 
                            className={FormElementsStyle['fieldset__inputs-container__label']}
                            htmlFor="reference-phone">
                            Reference phone number
                            <input 
                                className={FormElementsStyle.input}
                                onChange={(e) => gatherReferenceInfo(e.target.id, e.target.value)}
                                type="text"
                                id="reference-phone"
                                name="reference-phone" 
                                maxLength='25'
                                required
                                />
                        </label>
                        <label 
                            className={FormElementsStyle['fieldset__inputs-container__label']}
                            htmlFor="reference-email">
                            Reference email address
                            <input 
                                className={FormElementsStyle.input}
                                onChange={(e) => gatherReferenceInfo(e.target.id, e.target.value)}
                                type="text"
                                id="reference-email"
                                name="reference-email"
                                maxLength='40'
                                required
                                />
                        </label>
                    </div>
                    <button className={FormElementsStyle.button} type='submit'>Add reference</button>
            </fieldset>
        </form>
    )
}
