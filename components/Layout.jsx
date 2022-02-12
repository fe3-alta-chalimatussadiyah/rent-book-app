import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";

import allStore from '../store/actions';
import HeadApp from './Head';
import NavbarApp from './Navbar';

import { gql, useQuery } from "@apollo/client";

const GTET_BOOKS = gql`
  query{
    findAllBook {
      id
      title
      isbn
      author
      image_url
    }
  }
`;

function Layout({children}) {
  const router = useRouter();
  const { asPath } = router;
  const dispatch = useDispatch();

  const {loading, error, data} = useQuery(GTET_BOOKS);

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
    if (data) {
      dispatch(allStore.setListBook(data.findAllBook));
    }
  }, [data]);

  useEffect(() => {
    if(error && error.graphQLErrors.length > 0) {
      setShow(true);
      swal("Oops!", (error.graphQLErrors[0].message), "error", {
        button: "close",
      })
    }
  }, [error]);

  return (
    <>
      <HeadApp />
      <NavbarApp />
      <div className="mt-8">{children}</div>
    </>
  )
}

export default Layout;