import { FillText } from './Text/FullText';
import { Title } from './Title/Title';

export const App = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        margin: '50px 0 0 0',
      }}
    >
      <Title />
      <FillText />
    </div>
  );
};
