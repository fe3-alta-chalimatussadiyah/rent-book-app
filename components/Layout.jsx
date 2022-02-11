import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";

import allStore from '../store/actions';
import HeadApp from './Head';
import NavbarApp from './Navbar';

function Layout({children}) {
  const router = useRouter();
  const { asPath } = router;
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        !localStorage.getItem("token") &&
        asPath !== "/login" &&
        asPath !== "/books" &&
        asPath !== "/"
      ) {
        router.push("/login");
      }
    }
  }, []);

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