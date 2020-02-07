import React from 'react';
import DonorForm from 'components/DonorForm';
import Styled from 'styled-components';


const Container = Styled.div`
    width: 100%;
`;

function Donors () {
    return (
        <Container>
            <div>Donors</div>
            <DonorForm className="Testing"/>
        </Container>
    );
}

Donors.displayName = 'Donors';

export default Donors;
