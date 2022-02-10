import {Card, Button} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import allStore from "../../store/actions";
import Link from "next/link";

function DetailBook() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {id} = router.query;
  const listBook = useSelector(({listAllBook}) => listAllBook);

  useEffect(() => {
    console.log(listBook);
  }, [listBook]);

  return (
    <>
    <h3 className="text-center my-4"><faBook />Detail Book</h3>
    <div className="d-flex flex-row flex-wrap justify-content-around mt-3">

    <Card style={{width: '40%'}} className="d-flex flex-row border-0 mx-2 my-3">
      <Card.Img variant="top" src={listBook[id]["image_url"]} style={{height: '300px'}} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{listBook[id]["title"]}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{listBook[id]["author"]}</Card.Subtitle>
        <Card.Text>
          ISBN : {listBook[id]["isbn"]}
        </Card.Text>
        <div className="mt-auto">
          <Button variant="danger" style={{width: '100px'}} className="m-1" onClick={() => {router.push(`/`)
      }}>Go Back</Button>
          <Button variant="danger" style={{width: '100px'}} className="m-1">Start Rend</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default DetailBook;