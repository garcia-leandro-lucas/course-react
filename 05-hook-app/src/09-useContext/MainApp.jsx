import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <UserProvider>
        <h3>Main App</h3>
          <Navbar />
        <hr />

        <Outlet />
    </UserProvider>
  )
}
