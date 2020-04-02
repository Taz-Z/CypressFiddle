import React from 'react';
type Props = {

}
export const App: React.FC<Props> = ()  => {
  const x = [1,2,3];
  return (
    <div>
      <ul>
      {x.map((i) => <li>{i}</li>)}
      </ul>
    </div>
  );
}

export default App;
