import { useState } from 'react';

export default function References({ addSection }) {

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
            addSection(e.target.id, reference);
        }}>
            <fieldset>
                <legend>References</legend>
                    <div className='inputs-container'>
                        <label htmlFor="reference-name">
                            Reference name
                            <input onChange={(e) => gatherReferenceInfo(e.target.id, e.target.value)} type="text" id="reference-name" name="reference-name" />
                        </label>
                        <label htmlFor="reference-position">
                            Your position at the reference
                            <input onChange={(e) => gatherReferenceInfo(e.target.id, e.target.value)} type="text" id="reference-position" name="reference-position" />
                        </label>
                        <label htmlFor="reference-phone">
                            Reference phone number
                            <input onChange={(e) => gatherReferenceInfo(e.target.id, e.target.value)} type="text" id="reference-phone" name="reference-phone" />
                        </label>
                        <label htmlFor="reference-email">
                            Reference email address
                            <input onChange={(e) => gatherReferenceInfo(e.target.id, e.target.value)} type="text" id="reference-email" name="reference-email" />
                        </label>
                    </div>
                    <button type='submit'>Add reference</button>
            </fieldset>
        </form>
    )
}
