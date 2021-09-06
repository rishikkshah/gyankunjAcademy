import { useState } from "react";
import axios from "axios";

const PublishNotice = () => {
  const [data, setData] = useState({
    title: "",
    body: "",
    refno: "",
    date: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const postNotice = (data) => {
    axios
      .post("/postNotice", data)
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
