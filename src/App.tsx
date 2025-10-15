import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
export const App = () => {
  console.log('App component rendered');
  return (
    <div>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        voluptatibus laborum corrupti similique dolorum. Totam minima nobis
        necessitatibus maxime ex. Temporibus, nam repudiandae! Doloribus
        distinctio eveniet nesciunt, quisquam illum expedita.
      </p>
    </div>
  );
};
