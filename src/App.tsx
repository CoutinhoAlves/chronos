import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Heading } from './components/Heading';

export const App = () => {
  console.log('App component rendered');
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>
    </>
  );
};
