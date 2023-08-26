import StartButton from '../../Components/HomeButton/StartButton';

import { Landing, WelcomeTitle } from './Landing.styles';

function LandingPage() {
  return (
    <Landing>
      <WelcomeTitle>Welcome To The VideoGames Hub!</WelcomeTitle>
      <StartButton/>
    </Landing>
  );
}

export default LandingPage;