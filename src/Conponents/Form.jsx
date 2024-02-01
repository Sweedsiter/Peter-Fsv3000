import axios from "axios";

import { useState } from "react";
function Form() {
  const [imgselet, setImgselet] = useState();
  const [imgUrl, setImgurl] = useState();
  function Uploadfile() {
    const formData = new FormData();
    formData.append("file", imgselet);
    formData.append("upload_preset", "uvjjp6o3");
    axios
      .post("https://api.cloudinary.com/v1_1/dxni450l4/image/upload", formData)
      .then((response) => {
        setImgurl(response.data.url);
        axios
          .post("https://9pw8sg-3000.csb.app/uploadFile", {
            imgUrl: response.data.url,
          })
          .then((response) => {
            console.log(response);
          });
      });
  }
  return (
    <div>
      <input
        type="file"
        onChange={(even) => {
          setImgselet(even.target.files[0]);
        }}
      />
      <button onClick={Uploadfile}>Upload</button>
      <img src={imgUrl} style={{ width: 200 }} />
    </div>
  );
}
export default Form;
