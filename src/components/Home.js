import React from 'react';
import styled from 'styled-components';
import Section from './Section';

import models from './images/model-s.jpg';
import modely from './images/model-y.jpg';
import model3 from './images/model-3.jpg';
import modelx from './images/model-x.jpg';
import solarpanel from './images/solar-panel.jpg';
import solarroof from './images/solar-roof.jpg';
import accessories from './images/accessories.jpg';


const Home = () => {
    return (
        <Container>
            <Section 
                title='Model S'
                description='Order Online for Touchless Delivery'
                backgroundImg={models}
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section 
                title='Model Y'
                description='Order Online for Touchless Delivery'
                backgroundImg={modely}
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section 
                title='Model 3'
                description='Order Online for Touchless Delivery'
                backgroundImg={model3}
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section 
                title='Model X'
                description='Order Online for Touchless Delivery'
                backgroundImg={modelx}
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section 
                title='Lowest Cost Solar Panels in America'
                description='Money-back guarantee'
                backgroundImg={solarpanel}
                leftBtnText='Custom order'
                rightBtnText='Learn more'
            />
            <Section 
                title='Solar for New Roofs'
                description='Solar Roof Costs Less Than a New Roof plus Solar Panels'
                backgroundImg={solarroof}
                leftBtnText='Custom order'
                rightBtnText='Learn more'
            />
            <Section 
                title='Accessories'
                description=''
                backgroundImg={accessories}
                leftBtnText='Shop now'
            />
            <Rancho>
                <p>Lord_Ranchoatos</p>
            </Rancho>
        </Container>
    )
}

export default Home;

const Container = styled.div`
    height:100vh;
`
const Rancho = styled.div`
    height: 40px;
    cursor: pointer;
    overflow-x: hidden;
    opacity: 0.7;
    animation: animateDown infinite 1.5s;
    p {
        font-weight: bold;
        color: black;
    };
    &:hover {
        color: black;
    }
`