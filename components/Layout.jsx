import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import allStore from '../store/actions';
import HeadApp from './head';
import NavbarApp from './Navbar';

function Layout({children}) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allStore.findAllBook());
  }, [dispatch]);

  return (
    <>
      <HeadApp />
      <NavbarApp />
      <div className="mt-8">{children}</div>
    </>
  )
}

export default Layout;