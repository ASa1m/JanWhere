import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useState, useRef } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import axios from "axios";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: white;
              border: 1px solid red;
              color: black;
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const messageInput = useRef(null);

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      message: messageInput.current.value,
    };

    console.log(data);

    axios.post ( `${process.env.REACT_APP_API_URL}/api/feedback/`, data).then((res) => {
      console.log(res.data);
    })
    .then (() => {
      alert("Thank you for your feedback!")
      nameInput.current.value = "";
      emailInput.current.value = "";
      messageInput.current.value = "";
    }
    )
    .catch((err) => {
      console.log(err);
    }
    );
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/contact/`).then((res) => {
      setPhone(res.data[0].phone);
      setEmail(res.data[0].email);
      setAddress(res.data[0].address);
    });
  }, []);

  return (
    <Wrapper>
      <h2 className="text-center mb-3">We'd love your feedback! </h2>

      <iframe
        title="JanWhere Address"
        src={address ? address : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26574.150557852416!2d72.98561421616209!3d33.637235731422976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9675aaaaaaab%3A0xc5180922c44eb86b!2sNational%20University%20of%20Sciences%20%26%20Technology%20(NUST)!5e0!3m2!1sen!2s!4v1684253260469!5m2!1sen!2s"}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form col-6">
          <form
            // action="https://formspree.io/f/xwkjzwen"
            onSubmit={handleSubmit}
            className="contact-inputs"
          >
            <Box
              component="form"
              // sx={{
              //   "& > :not(style)": { m: 1 },
              // }}
              noValidate
              autoComplete="off"
            >
              <Box
                component="form"
                // sx={{
                //   "& > :not(style)": { m: 1 },
                // }}
                noValidate
                autoComplete="off"
              >
                <div className="input-field">
                  <input id="email" type="email" ref={emailInput} />
                  <label htmlFor="email" className="black text-grey">
                    {" "}
                    <MailOutlineIcon /> Email
                  </label>
                </div>
                <div className="input-field" >
                  <input id="name" type="text" ref={nameInput} />

                  <label htmlFor="name" className="black text-grey">
                    {" "}
                    <PersonIcon /> Name
                  </label>
                </div>

                {/* <div className="input-field text-wrap">
                  <input
                    id="feedback"
                    type="text"
                    style={{ height: "40px",  resize: "vertical" }}
                  />

                  <label htmlFor="feedback"> <ChatBubbleOutlineIcon/>  Feedback </label>
                </div> */}
                <div className="input-field text-wrap border-bottom">
                  <label htmlFor="feedback" className="black text-grey">
                    <ChatBubbleOutlineIcon maginBottom="2px" /> Feedback
                  </label>
                  <textarea
                    id="feedback"
                    style={{ height: "120px", minHeight: "120px", resize: "vertical" , color: "white", marginTop: "10px", padding: "20px"}}
                    wrap="soft"
                    ref={messageInput}
                  ></textarea>

                </div>

                {/* <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccountCircle
                    sx={{ mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Username"
                    variant="standard"
                  />
                </Box> */}

                {/* <div className="input-field" style={{marginTop : "20px"}}>
              <textarea style={{
                    height: "150px",
                    marginTop: "10px",
                  padding: "20px"}}
                id="message"
                type="text"
                name= "message"
              />
              <label htmlFor="message" style={{left: "10px"}}> Your feedback</label>
            </div> */}
                {/* <TextField
                  style={{ width: "100%", color: "white" }}
                  id="standard-multiline-static"
                  label="Your feedback"
                  multiline
                  rows={4}
                  variant="standard"
                /> */}
              </Box>
            </Box>

            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "80px",
                  borderRadius: "3px",
                  letterSpacing: "1px",
                  marginTop: "0.3grem",
                  height: "40px",
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="mt-5  text-white-50">
        <Row>
          <Col className="mt-3">
            <h3 className="text-center">Need to talk to us?</h3>
            {/* <address> */}
            <h5 className="text-center">
              <MailOutlineIcon /> 
              <a className="text-white " href={`mailto:${email ? email:"janwhere@gamil.com"}`}>{email ? email:"janwhere@gamil.com"}</a>
            </h5>

            <h5 className="text-center">
              <LocalPhoneOutlinedIcon />
              <a className="text-white " href={`tel:${phone ? phone:"+923008438161"}`}>{phone ? phone:"+923008438161"}</a>
            </h5>

            {/* <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a> */}

            {/* {contactConfig.hasOwnProperty("YOUR_FONE") ? ( */}
            <p>{/* <strong>Phone:</strong> {contactConfig.YOUR_FONE} */}</p>
            {/* ) : (
                ""
              )} */}
            {/* </address> */}
            {/* <p>{contactConfig.description}</p> */}
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default Contact;
