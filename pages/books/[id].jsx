import {Card, Button, Spinner} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useMutation, useQuery, gql } from "@apollo/react-hooks";
import { FaBook } from "react-icons/fa"
import allStore from "../../store/actions";
import Link from "next/link";
import swal from "sweetalert";

const RENT_BOOK = gql`
mutation Mutation($bookId: Int) {
  rentBook(bookId: $bookId) {
    id
    UserId
    BookId
    returnDate
    message
    status
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

function DetailBook() {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [show, setShow] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  const router = useRouter();
  const {id} = router.query;
  const listBook = useSelector(({listAllBook}) => listAllBook);

  const { error: errorListRent } = useQuery(LIST_RENT);

  const [rentBook, { data, loading, error }] = useMutation(RENT_BOOK, {
    refetchQueries: [LIST_RENT, "findAllRent"],
  });

  useEffect(() => {
    const book = listBook.find((el) => el.id == id);

    if (book) {
      setImageUrl(book.image_url);
      setTitle(book.title);
      setAuthor(book.author);
      setIsbn(book.isbn);
    }
  }, [listBook]);

  useEffect(() => {
    if(data && data.rentBook) {
    setShow(true);
    swal("Success!", (data.rentBook.message), "success", {
      button: "close",
    });
    setDisableBtn(true);
    }
  }, [data]);

  useEffect(() => {
    if(error && error.graphQLErrors.length > 0) {
      setShow(true);
      swal("Oops!", (error.graphQLErrors[0].message), "error", {
        button: "close",
      })
    }

  if (errorListRent && errorListRent.graphQLErrors.length > 0) {
    setShow(true);
    swal("Oops!", (errorListRent.graphQLErrors[0].message), "error", {
      button: "close",
    })
  }
}, [error, errorListRent]);

  async function handleRent() {
    try {
      const _ = await rentBook({
        variables: {
          bookId: + id,
          },
      });
    } catch (err) {}
  }

  if (loading) {
    return <Spinner animation="border" variant="danger" style={{
      position: 'absolute', left: '50%', top: '50%'}}></Spinner>
  }

  return (
    <>
    <h3 className="text-center my-4"><FaBook />Detail Book</h3>
    <div className="d-flex flex-row flex-wrap justify-content-around mt-3">

    <Card style={{width: '40%'}} className="d-flex flex-row border-0 mx-2 my-3">
      <Card.Img variant="top" src={imageUrl} style={{height: '300px'}} />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Card.Text>
          ISBN : {isbn}
        </Card.Text>
        <div className="mt-auto d-flex flex-row">
          <Button variant="danger" style={{width: '100px'}} className="m-1" onClick={() => {router.push(`/`) }}>Back</Button>
          <Button variant="danger" style={{width: '100px'}} className="m-1" disabled={disableBtn} onClick={() => { handleRent(); }}>Rent</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default DetailBook;