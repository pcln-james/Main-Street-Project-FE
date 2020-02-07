import { useState } from 'react';

const useForm = initialInputs => {
    const [inputs, setInputs] = useState(initialInputs);

    const handleInputChange = event => {
        event.persist();
        setInputs(inputs => ({ ...inputs,
            [event.target.name]: event.target.value }));
    };
    const toggleCheck = event => {
        event.persist();
        setInputs(inputs => ({...inputs,
        [event.target.name]: !inputs[event.target.name]}))
    }
    return {
        handleInputChange,
        toggleCheck,
        inputs
    };
};

export default useForm;
