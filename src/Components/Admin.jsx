import React, { useEffect, useState } from "react";
import EditForm from "./EditForm";
import PublishNotice from "./PublishNotice";
const axios = require("axios");

const Admin = () => {
  const [notices, setNotices] = useState([]);
  const [edit, setEdit] = useState(false);
  const [publish, setPublish] = useState(false);

  const style = {
    // height: "35px",
    border: "1px solid black",
    boxShadow: "2px 5px 10px #efefef",
    // listStyleType: "none",
    // marginBottom: "25px",
    padding: "0px 15px",
    marginLeft: "15px",
    borderRadius: "15px",
    // overflow: "hidden",
    cursor: "pointer",
  };
  const styleLi = {
    // height: "35px",
    border: "1px solid black",
    boxShadow: "2px 5px 10px #efefef",
    listStyleType: "none",
    marginBottom: "25px",
    padding: "0px 15px",
    borderRadius: "15px",
    // overflow: "hidden",
    // cursor: "pointer",
  };

  useEffect(() => {
    axios
      .get("http://localhost:9000/notice")
      .then((res) => setNotices(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <h3>
        Publish Notice
        <button
          onClick={() => (publish ? setPublish(false) : setPublish(true))}
          style={style}
        >
          post
        </button>
      </h3>
      <div style={style}>{publish ? <PublishNotice /> : null}</div>
      <h3>Edit Notices</h3>
      <ul>
        {notices.map((notice) => (
          <li key={notice.id} style={styleLi}>
            {notice.title}
            <button
              onClick={() => (edit ? setEdit(false) : setEdit(true))}
              style={style}
            >
              edit
            </button>
            {edit ? (
              <EditForm
                title={notice.title}
                body={notice.body}
                refno={notice.refno}
                date={notice.date}
                id={notice._id}
              />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
