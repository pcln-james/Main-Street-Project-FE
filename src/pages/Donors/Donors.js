import React from 'react';
import { DonorForm } from 'components/DonorForm';

function Donors () {
    return (
        <div>
            <div>Donors</div>
            <DonorForm></DonorForm>
        </div>
    );
}

Donors.displayName = 'Donors';

export default Donors;
