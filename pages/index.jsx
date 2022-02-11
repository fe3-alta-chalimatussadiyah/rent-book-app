import {Card, Button} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import style from "../styles/ListBook.module.css";
import {faBook} from "react-icons/fa";
import HeadApp from "../components/Head";

function ListBook() {

  const router = useRouter();
  const listAllBook = useSelector(({listAllBook}) => listAllBook)

  return (
    <>
    <HeadApp
    title="List Book"
    />
    <h3 className="text-center my-4"><faBook /> List of Book</h3>
    <div className="d-flex flex-row flex-wrap justify-content-around mt-3">
    {listAllBook.map((el, i) => (
    <>
    <Card key={i} style={{width: '20%'}} className="d-flex border-0 mx-5 my-4">
      <Card.Img variant="top" src={el.image_url} style={{height: '300px'}} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{el.title}</Card.Title>
      <Button variant="danger" style={{width: '120px'}} className="mt-auto"
      onClick={() => {router.push(`/books/${el.id}`)}}>
      Details
      </Button>
      </Card.Body>
    </Card>
    </>
    ))}
    </div>
    </>
  )
}

export default ListBook;