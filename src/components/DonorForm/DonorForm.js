import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Text, FormField, Label, Checkbox } from 'pcln-design-system';
import useForm from '../../hooks/useForm';


const SyledName = styled(Text)`

`;

const Container = styled(Flex)`

`;

const FormContainer = styled(Flex)`

`;

const SaveButton = styled(Button)`

`;

function DonorForm({className, name, phone, email, subscribe, address, city, province, 
postalCode}) {
    const initialData = {name: name, phone: phone, 
        email: email, subscribe: subscribe, address: address,
    city: city, province: province, postalCode: postalCode}
    const [inputs, handleInputChange] = useForm(initialData);
    return (
        <Container className={className}>
            <FormContainer>
            <SyledName>Edit {name}</SyledName>
            <FormField
                alwaysShowLabel={Boolean(inputs.name)}
                value={inputs.name}
                onChange={handleInputChange}
                id="name"
                placeholder="Full Name"
            >
                <Label>Full Name</Label>
                <Input></Input>
            </FormField>
            <FormField
                alwaysShowLabel={Boolean(inputs.phone)}
                value={inputs.phone}
                onChange={handleInputChange}
                id="phone"
                placeholder="Phone Number"
            >
                <Label>Phone</Label>
                <Input></Input>
            </FormField>
            <FormField
                alwaysShowLabel={Boolean(inputs.email)}
                value={inputs.email}
                onChange={handleInputChange}
                id="email"
                placeholder="Email Address"
            >
                <Label>Email Adress</Label>
                <Input></Input>
            </FormField>
            <Label>
                <Checkbox id="subscribe"/>
            </Label>
            <FormField
                alwaysShowLabel={Boolean(inputs.address)}
                value={inputs.address}
                onChange={handleInputChange}
                id="address"
                placeholder="Address"
            >
                <Label>Address</Label>
                <Input></Input>
            </FormField>
            <FormField
                alwaysShowLabel={Boolean(inputs.city)}
                value={inputs.city}
                onChange={handleInputChange}
                id="city"
                placeholder="City"
            >
                <Label>City</Label>
                <Input></Input>
            </FormField>
            <Select>

            </Select>
            <FormField
                alwaysShowLabel={Boolean(inputs.name)}
                value={inputs.name}
                onChange={handleInputChange}
                id="email"
                placeholder="Email Address"
            >
                <Label>Email Address</Label>
                <Input></Input>
            </FormField>
            <FormField
                alwaysShowLabel={Boolean(inputs.postalCode)}
                value={inputs.postalCode}
                onChange={handleInputChange}
                id="postalCode"
                placeholder="Postal Code"
            >
                <Label>Postal Code</Label>
                <Input></Input>
            </FormField>
            </FormContainer>
            <SaveButton>Save</SaveButton>
        </Container>

    );
}

DonorForm.displayName = 'DonorForm';

DonorForm.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.node,
    phone: PropTypes.string,
    email: PropTypes.string,
    subscribe: PropTypes.bool,
    address: PropTypes.string,
    city: PropTypes.string,
    province: PropTypes.string,
    postalCode: PropTypes.string
};

DonorForm.defaultProps = {
    className: '',
    name: '',
    phone: '', 
    email: '', 
    subscribe: true, 
    address: '',
    city: '', 
    province: 'MB', 
    postalCode: ''
};

export default memo(DonorForm);