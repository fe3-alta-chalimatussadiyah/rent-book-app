import { Container } from "react-bootstrap"
import bg404 from "../public/undraw_Page_not_found_re_e9o6.png";

export default function Custom404() {
  return (
    <div className="bg404">
      <style jsx>{`
      .bg404{
        width: 100%;
        height: 100%;
        background: url(${bg404}) no-repeat;
      }
    `}</style>
    </div>
  )
}