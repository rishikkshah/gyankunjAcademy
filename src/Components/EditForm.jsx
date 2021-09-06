import { useState } from "react";
import axios from "axios";

const EditForm = ({ title, body, refno, date, id }) => {
  const [data, setData] = useState({
    title,
    body,
    refno,
    date,
    id,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const updateNotice = (data) => {
    axios
      .post("/updateNotice", data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={() => updateNotice(data)}
    >
      <input
        type="text"
        name="date"
        onChange={handleChange}
        value={data.date}
      />
      <input
        type="text"
        name="refno"
        onChange={handleChange}
        value={data.refno}
      />
      <textarea
        name="title"
        // cols="30"
        rows="3"
        onChange={handleChange}
        value={data.title}
      ></textarea>
      <textarea
        name="body"
        // cols="50"
        rows="10"
        onChange={handleChange}
        value={data.body}
      ></textarea>
      <input type="submit" value="submit" />
    </form>
  );
};

export default EditForm;
