import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Text, FormField, Label, Checkbox, Button, Input, Select } from 'pcln-design-system';
import useForm from '../../hooks/useForm';


const SyledName = styled(Text)`

`;

const StyledField = styled(FormField)`
    width: 100%;
    margin-bottom: 10px;
`;

const StyledInput = styled(Input)`
    margin-bottom: 10px;
`;

const StyledSelect = styled(Select)`
    width: fit-content;
    margin-right: 10px;
`;

const CityInput = styled(Input)`
    margin-right: 10px;
    width: 80%;
    margin-bottom: 10px;
`;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const CityContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;
const ButtonContainer = styled.div`
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 0;
`;
const SaveButton = styled(Button)`
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    width: 50%;
`;

function DonorForm({className, name, phone, email, subscribe, address, city, province, 
    postalCode}) {
    const initialData = {name, phone, email, subscribe, address, city, province, 
        postalCode}
    const {inputs, handleInputChange, toggleCheck} = useForm(initialData);
    return (
        <Container className={className}>
            <FormContainer> 
            <SyledName>Edit {name}</SyledName>
            <StyledField id="name">
                <Label>Full Name</Label>
                <StyledInput name="name" placeholder="Full Name" onChange={handleInputChange}  value={inputs.name}></StyledInput>
            </StyledField>
            <StyledField id="phone">
                <Label>Phone</Label>
                <StyledInput name="phone" value={inputs.phone} onChange={handleInputChange} id="phone" placeholder="Phone Number"></StyledInput>
            </StyledField>
            <StyledField id="email">
                <Label>Email Adress</Label>
                <StyledInput name="email" value={inputs.email} onChange={handleInputChange} placeholder="Email Address"></StyledInput>
            </StyledField>
            <Label>
                <Checkbox name="subscribe" checked={inputs.subscribe} onChange={toggleCheck} />
                Subscribe to email newsletter?
            </Label>
            <StyledField id="address" >
                <Label>Address</Label>
                <StyledInput  name="address" value={inputs.address} onChange={handleInputChange} placeholder="Address"></StyledInput>
            </StyledField>
            <CityContainer>
                <FormField id="city">
                    <Label>City</Label>
                    <CityInput name="city" value={inputs.city} onChange={handleInputChange} placeholder="City"></CityInput>
                </FormField>
                <FormField>
                <Label>Province</Label>
                    <StyledSelect name="province" value={inputs.province} onChange={handleInputChange}>
                        <option>AB</option>
                        <option>BC</option>
                        <option>MB</option>
                        <option>NB</option>
                        <option>NL</option>
                        <option>NS</option>
                        <option>NU</option>
                        <option>ON</option>
                        <option>PE</option>
                        <option>QC</option>
                        <option>SK</option>
                        <option>YT</option>
                    </StyledSelect>
                </FormField>
            </CityContainer>
            <StyledField id="postalCode" >
                <Label>Postal Code</Label>
                <StyledInput name="postalCode" value={inputs.postalCode} onChange={handleInputChange} placeholder="Postal Code"></StyledInput>
            </StyledField> 
             </FormContainer>
             <ButtonContainer>
                <SaveButton>Save</SaveButton>
             </ButtonContainer>
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
    className: 'donorForm',
    name: 'John Doe',
    phone: '555-555-555', 
    email: 'johndoe@gmail.com', 
    subscribe: true, 
    address: '123 Fake St.',
    city: 'Winnipeg', 
    province: 'NL', 
    postalCode: 'RRRRRR'
};

export default memo(DonorForm);