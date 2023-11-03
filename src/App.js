import './App.css';
import { lazy, Suspense } from 'react';

const UserTableComponent = lazy(() => import('./components/UserTable'))

function App() {
  return (
    <div className="App">
      <Suspense children={<h1 style={{textAlign:'center'}}>Loading...</h1>}>
        <UserTableComponent />
      </Suspense>
    </div>
  );
}

export default App;
