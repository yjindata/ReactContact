import React from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
    height: 4rem;
    color: blue;
    font-weight: 500;
    font-size: 1.5rem;
    display: flex;
    align-items: center; 
    justify-content: center; 
`;


const Header = () => (
    <Wrapper>
        Contact list
    </Wrapper>
);

export default Header;
