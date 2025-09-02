import { useState } from "react";
import "./Card.css";
function Card() {
  const [data, setData] = useState([
    {
      image:
        "https://i.pinimg.com/originals/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg",
      title: "Raj Verma",
    },
    {
      image:
        "https://tse2.mm.bing.net/th/id/OIP.wMaqjIEDoe9en5ZcFrE3jQHaKn?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Priya Sharma",
    },
    {
      image:
        "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      title: "Sid Jaiswal",
    },
    {
      image:
        "https://i.pinimg.com/originals/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg",
      title: "Raj Verma",
    },
    {
      image:
        "https://tse2.mm.bing.net/th/id/OIP.wMaqjIEDoe9en5ZcFrE3jQHaKn?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Priya Sharma",
    },
    {
      image:
        "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      title: "Sid Jaiswal",
    },
    {
      image:
        "https://i.pinimg.com/originals/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg",
      title: "Raj Verma",
    },
    {
      image:
        "https://tse2.mm.bing.net/th/id/OIP.wMaqjIEDoe9en5ZcFrE3jQHaKn?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Priya Sharma",
    },
    {
      image:
        "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      title: "Sid Jaiswal",
    },
    {
      image:
        "https://i.pinimg.com/originals/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg",
      title: "Raj Verma",
    },
    {
      image:
        "https://tse2.mm.bing.net/th/id/OIP.wMaqjIEDoe9en5ZcFrE3jQHaKn?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Priya Sharma",
    },
    {
      image:
        "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      title: "Sid Jaiswal",
    },
    {
      image:
        "https://i.pinimg.com/originals/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg",
      title: "Raj Verma",
    },
    {
      image:
        "https://tse2.mm.bing.net/th/id/OIP.wMaqjIEDoe9en5ZcFrE3jQHaKn?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Priya Sharma",
    },
    {
      image:
        "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      title: "Sid Jaiswal",
    },
  ]);
  return (
    <div className="cardContainer">
      {data.map(function (element) {
        //element = {image:"",title:""}
        return (
          <div className="card">
            <img src={element.image} alt="" width={"100%"} height={200} />
            <h3>{element.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
