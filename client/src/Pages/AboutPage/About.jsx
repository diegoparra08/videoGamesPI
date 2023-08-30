import { AboutContainerDiv, TextContainer } from './About.styles'


function About(){
    return (
        <AboutContainerDiv className="about">
            <TextContainer>
            This proyect is the result of the knowledge adquire during my studies in Henry. 
            I have learned a lot about React, Redux, Express, PostgreSQL and Javascript. 

            It has cards with videogames informrmation and can filter by genre or origin, you can order the results,
            go to a game detail and even create your own game. I thank Henry and all the mentors an people that helped
            me get the skills to develop it. I hope you enjoy it!

            </TextContainer>
            
           


        </AboutContainerDiv>
        )
};

export default About;