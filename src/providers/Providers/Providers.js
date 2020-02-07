import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from 'providers/ThemeProvider';
import ResponsiveProvider from 'providers/Responsive';
import SidebarProvider from 'providers/Sidebar';

function Providers ({ children }) {
    return (
        <ThemeProvider>
            <ResponsiveProvider>
                <SidebarProvider>
                    {children}
                </SidebarProvider>
            </ResponsiveProvider>
        </ThemeProvider>
    );
}

Providers.displayName = 'Providers';

Providers.propTypes = {
    children: PropTypes.node,
};

export default Providers;