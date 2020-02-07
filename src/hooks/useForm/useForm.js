import { useState } from 'react';

const useForm = initialInputs => {
    const [inputs, setInputs] = useState(initialInputs);

    const handleInputChange = event => {
        event.persist();
        setInputs(inputs => ({ ...inputs,
            [event.target.name]: event.target.value }));
    };
    return {
        handleInputChange,
        inputs
    };
};

export default useForm;
