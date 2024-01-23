import { useState } from 'react';
import FormElementsStyle from '../styles/FormElements.module.css';

export default function References({
    addSection,
    clearInputs,
    isSectionLimitSurpassed,
}) {
    const [reference, setReference] = useState({
        name: null,
        position: null,
        phoneNumber: null,
        email: null,
        company: null,
        relationship: null,
    });

    function gatherReferenceInfo(event) {
        const { id, value } = event.target;
        // Replace the 'reference-' piece of text with no text.
        const property = id.replace('reference-', '');
        setReference((prevReferenceInfo) => ({
            ...prevReferenceInfo,
            [property]: value,
        }));
    }

    return (
        <form
            id='references'
            onSubmit={(e) => {
                e.preventDefault();
                if (isSectionLimitSurpassed('references')) {
                    return;
                }
                addSection(e.target.id, reference);
                clearInputs(e);
            }}
        >
            <fieldset className={FormElementsStyle.fieldset}>
                <legend className={FormElementsStyle.fieldset__legend}>
                    References <i>(4 items max.)</i>
                </legend>
                <div
                    className={FormElementsStyle['fieldset__inputs-container']}
                >
                    <label
                        className={
                            FormElementsStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='reference-name'
                    >
                        Name
                        <input
                            className={FormElementsStyle.input}
                            onChange={(e) => gatherReferenceInfo(e)}
                            type='text'
                            id='reference-name'
                            name='reference-name'
                            maxLength='25'
                            placeholder='Jon Doe'
                            required
                        />
                    </label>
                    <label
                        className={
                            FormElementsStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='reference-company'
                    >
                        Company
                        <input
                            className={FormElementsStyle.input}
                            onChange={(e) => gatherReferenceInfo(e)}
                            type='text'
                            id='reference-company'
                            name='reference-company'
                            maxLength='30'
                            placeholder='Company XYZ'
                            required
                        />
                    </label>
                    <label
                        className={
                            FormElementsStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='reference-position'
                    >
                        Position
                        <input
                            className={FormElementsStyle.input}
                            onChange={(e) => gatherReferenceInfo(e)}
                            type='text'
                            id='reference-position'
                            name='reference-position'
                            maxLength='30'
                            placeholder='Web developer'
                            required
                        />
                    </label>
                    <label
                        className={
                            FormElementsStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='reference-relationship'
                    >
                        Relationship
                        <input
                            className={FormElementsStyle.input}
                            onChange={(e) => gatherReferenceInfo(e)}
                            type='text'
                            id='reference-relationship'
                            name='reference-relationship'
                            maxLength='50'
                            placeholder='Your relationship with the reference...'
                            required
                        />
                    </label>
                    <label
                        className={
                            FormElementsStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='reference-phoneNumber'
                    >
                        Phone number
                        <input
                            className={FormElementsStyle.input}
                            onChange={(e) => gatherReferenceInfo(e)}
                            type='text'
                            id='reference-phoneNumber'
                            name='reference-phoneNumber'
                            maxLength='25'
                            placeholder='+ 12 345 6890'
                            required
                        />
                    </label>
                    <label
                        className={
                            FormElementsStyle[
                                'fieldset__inputs-container__label'
                            ]
                        }
                        htmlFor='reference-email'
                    >
                        Email
                        <input
                            className={FormElementsStyle.input}
                            onChange={(e) => gatherReferenceInfo(e)}
                            type='text'
                            id='reference-email'
                            name='reference-email'
                            maxLength='40'
                            placeholder='jonDoe@fakemail.com'
                            required
                        />
                    </label>
                </div>
                <button className={FormElementsStyle.button} type='submit'>
                    Add reference
                </button>
            </fieldset>
        </form>
    );
}
