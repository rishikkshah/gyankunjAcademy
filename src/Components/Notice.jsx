import React, { useEffect, useState } from "react";
const axios = require("axios");

const Notice = () => {
  const [notices, setNotices] = useState([]);

  const style = {
    height: "35px",
    border: "1px solid black",
    boxShadow: "2px 5px 10px #efefef",
    listStyleType: "none",
    marginBottom: "25px",
    padding: "0px 15px",
    borderRadius: "15px",
    overflow: "hidden",
    cursor: "pointer",
  };
  useEffect(() => {
    axios
      .get("/notices", {
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      })
      .then((res) => setNotices(res.data))
      .catch((e) => console.log(e));
  }, []);

  const showNotice = (id) => {
    // axios
    // .get("http://localhost:9000/showNotice", {
    //   params: {
    //     id: id,
    //   },
    // })
    fetch(`/showNotice/${id}`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/pdf",
      },
    }).then(async (res) => {
      const blob = await res.blob();
      // const file = new Blob([blob], { type: "application/pdf" });
      //Build a URL from the file
      const fileURL = await URL.createObjectURL(blob);
      //Open the URL on new Window
      window.open(fileURL);
    });
  };
  return (
    <div>
      <h3>Gyankunj Academy Notices</h3>
      <ul>
        {notices.map((notice, _id) => (
          <li key={_id} onClick={() => showNotice(notice._id)} style={style}>
            {notice.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notice;
