import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Typewriter from "../../components/Typewriter";

import imgBack from "../../images/mailz.jpeg";
import load1 from "../../images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./ContactMe.css";

export default function ContactMe(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = { name, email, message };
      setBool(true);
      const res = await axios.post(`/contact`, data);

      if (!name || !email || !message) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />

      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typewriter strings={["Get In Touch 📨"]} />
          </h2>

          <a href="https://www.instagram.com/sai_1_5/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://github.com/sai1512">
            <i className="fa fa-github-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/venkatapalisetti?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUmgxrBnwRxWAQUHflguu5A%3D%3D">
            <i className="fa fa-linkedin-square"></i>
          </a>
        </div>

        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="not found" />
          </div>

          <form onSubmit={submitForm}>
            <p>{banner}</p>

            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="text" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send <i className="fa fa-paper-plane" />
                {bool && (
                  <b className="load">
                    <img src={load1} alt="loading" />
                  </b>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
