import { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { FaBook } from "react-icons/fa";
import Link from "next/link";
import swal from "sweetalert";

const LIST_RENT = gql`
  query Query {
    findAllRent {
      id
      UserId
      BookId
      returnDate
      Book {
        id
        title
        isbn
        author
        image_url
      }
    }
  }
`;

const RETURN_BOOK = gql`
  mutation Mutation($returnBookId: ID, $returnDate: String) {
    returnBook(id: $returnBookId, returnDate: $returnDate) {
      id
      UserId
      BookId
      returnDate
      message
      status
    }
  }
`;

export default function Rent() {
  const [listRent, setListRent] = useState([]);
  const [show, setShow] = useState(false);

  const {
    loading: loadingListRent,
    error: errorListRent,
    data: dataListRent,
  } = useQuery(LIST_RENT);

  const [
    returnBook,
    {
      loading: loadingReturnBook,
      error: errorReturnBook,
      data: dataReturnBook,
    },
  ] = useMutation(RETURN_BOOK, {
    refetchQueries: [LIST_RENT, "findAllRent"],
  });

  useEffect(() => {
    console.log(dataListRent);

    if (dataListRent && dataListRent.findAllRent) {
      setListRent(dataListRent.findAllRent);
    }

    console.log(dataReturnBook);
    if (dataReturnBook && dataReturnBook.returnBook) {
      setShow(true);
      swal("Success!", (dataReturnBook.returnBook.message), "success", {
        button: "close",
      });
    }
  }, [dataListRent, dataReturnBook]);

  useEffect(() => {
    if (errorListRent && errorListRent.graphQLErrors.length > 0) {
      setShow(true);
      swal("Oops!", (errorListRent.graphQLErrors[0].message), "error", {
        button: "close",
      })
    }

    if (errorReturnBook && errorReturnBook.graphQLErrors.length > 0) {
      setShow(true);
      swal("Oops!", (errorReturnBook.graphQLErrors[0].message), "error", {
        button: "close",
      })
    }
  }, [errorListRent, errorReturnBook]);

  async function handleReturnBook(id) {
    try {
      const _ = await returnBook({
        variables: {
          returnBookId: id,
          returnDate: new Date().toString(),
        },
      });
    } catch (err) {}
  }

  if (loadingListRent || loadingReturnBook) {
    return <Spinner animation="border" variant="danger" style={{
      position: 'absolute', left: '50%', top: '50%'}}></Spinner>
  }

  if (listRent.length === 0) {
    return(
    <div className="flex justify-content-center align-items-center" style={{position: 'absolute', top: '50%', left: '35%'}}>
      <h3>Oopss.. you haven't rented a book ^_^</h3>
    </div>
    )
  }

  return (
    <>
      <h3 className="text-center my-4"><FaBook />List Rent Book</h3>
      <div className="d-flex flex-row flex-wrap justify-content-around mt-3">

    <>
      {listRent.map((el, i) => (
        <>
      <Card style={{width: '40%'}} className="d-flex flex-row border-0 mx-2 my-3">
        <Card.Img variant="top" src={el.Book.image_url} style={{height: '500px'}} />

        <Card.Body className="d-flex flex-column">
          <Card.Title>{el.Book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{el.Book.author}</Card.Subtitle>
          <Card.Text>
            ISBN : {el.Book.isbn}
          </Card.Text>
            <Button variant="danger" style={{width: '100px'}} className="m-1" onClick={() => { handleReturnBook(el.id); }}>Renturn</Button>
        </Card.Body>
      </Card>
      </>
      ))}
    </>
      </div>
    </>
  );
}


/* 



*/