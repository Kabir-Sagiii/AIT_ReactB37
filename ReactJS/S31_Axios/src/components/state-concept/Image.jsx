import { useState } from "react";
function Image() {
  const [image, setImage] = useState(
    "https://www.thecodebuzz.com/wp-content/uploads/2020/06/React-Class-based-component-Best-practices-785x381.jpg"
  );

  function changeToAngular() {
    setImage("https://angular.dev/assets/images/ng-image.jpg");
  }

  function changeToReact() {
    setImage(
      "https://www.thecodebuzz.com/wp-content/uploads/2020/06/React-Class-based-component-Best-practices-785x381.jpg"
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img
        src={image}
        alt=""
        width={500}
        height={300}
        onMouseEnter={changeToAngular}
        onMouseLeave={changeToReact}
      />
      <br />
      <br />
      <input type="radio" defaultChecked name="tech" onChange={changeToReact} />
      <label htmlFor="">React JS</label>
      &nbsp;&nbsp;
      <input type="radio" name="tech" onChange={changeToAngular} />
      <label htmlFor="">Angular</label>
    </div>
  );
}

export default Image;
