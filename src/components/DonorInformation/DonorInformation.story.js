import React from 'react';
import DonorInformation from './DonorInformation';

const props = {
    address: '2600 - 360 Main Street',
    city: 'Winnipeg, MB',
    email: 'test@gmail.com',
    phoneNumber: '204-555-5555',
};

export const WithoutInfo = () => <DonorInformation />;

export const WithInfo = () => <DonorInformation {...props} />;

export default {
    title: 'DonorInformation',
    component: DonorInformation,
};
