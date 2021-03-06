import React from 'react';
import { Button, Input } from 'pcln-design-system';
import Page from 'components/Page';
import DonorsList from 'components/DonorsList';
import Link from 'components/Link';
import useDonors from 'hooks/useDonors';
import { DONOR_NEW_PATH } from 'constants/paths';

function NewDonorButton () {
    return (
        <Link to={DONOR_NEW_PATH}>
            <Button size='small'>
                New Donor
            </Button>
        </Link>
    );
}

function Donors () {
    const { isLoading, donors } = useDonors();
    const disabled = isLoading || (donors && donors.length === 0);

    return (
        <Page title='Donors' renderAction={NewDonorButton}>
            <Input id='search' disabled={disabled} placeholder='Search' mb={3} />
            <DonorsList donors={donors} />
        </Page>
    );
}

Donors.displayName = 'Donors';

export default Donors;
