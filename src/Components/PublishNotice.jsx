import react, { useState } from "react";
import axios from "axios";

const PublishNotice = () => {
  const [data, setData] = useState({
    title: "",
    body: "",
    refno: "",
    date: "",
  });
  const style = {
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
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const postNotice = (data) => {
    axios
      .post("http://localhost:9000/postNotice", data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={() => postNotice(data)}
    >
      <input
        type="text"
        name="date"
        onChange={handleChange}
        placeholder="Enter Date"
        value={data.date}
      />
      <input
        type="text"
        name="refno"
        onChange={handleChange}
        placeholder="Enter RefNo"
        value={data.refno}
      />
      <textarea
        name="title"
        // cols="30"
        rows="3"
        onChange={handleChange}
        placeholder="Enter Subject"
        value={data.title}
      ></textarea>
      <textarea
        name="body"
        // cols="50"
        rows="10"
        onChange={handleChange}
        placeholder="Enter Body of notice"
        value={data.body}
      ></textarea>
      <input type="submit" value="submit" />
    </form>
  );
};

export default PublishNotice;
