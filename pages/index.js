import {Card, Button} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import style from "../styles/ListBook.module.css";
import {faBook} from "react-icons/fa"
import HeadApp from "../components/head";

function ListBook() {

  const router = useRouter();
  const listAllBook = useSelector(({listAllBook}) => listAllBook)

  useEffect(() => {
    console.log(listAllBook)
  }, [listAllBook])

  return (
    <>
    <HeadApp
    title="List Book"
     />
    <h3 className="text-center my-4"><faBook /> List of Book</h3>
    <div className="d-flex flex-row flex-wrap justify-content-around mt-3">
    {listAllBook.map((el, i) => (
    <>
    <Card style={{width: '20%'}} className="d-flex border-0 mx-2 my-3">
      <Card.Img variant="top" src={el.image_url} style={{height: '300px'}} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{el.title}</Card.Title>
      <Button variant="danger" style={{width: '120px'}} className="mt-auto"
      onClick={() => {router.push(`/books/${i}`)
      }}>
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