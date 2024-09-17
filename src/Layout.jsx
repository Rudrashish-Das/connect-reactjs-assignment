import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Sidebar />
      <Box ml={{
                base: '0px',
                md: '60px'
            }}
             pt="0rem" bg={'#eaebff'}>
        <Navbar />
        <div style={{padding: '30px'}}>
          <Outlet />
        </div>
      </Box>
    </>
  )
}

export default Layout;