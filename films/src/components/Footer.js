import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    const year = new Date().getFullYear();
    return ( 
        <StyledFooter> &copy; {year} Mikołaj Marszałek</StyledFooter>
     );
}

const StyledFooter=styled.footer`
    display: flex;
    justify-content: center;
    background-color: #e3e3e3;
    margin-top: 2rem;
`;
 
export default Footer;