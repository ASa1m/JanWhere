import React from "react";
import styled from "styled-components";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';


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

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us  </h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xwkjzwen"
            method="POST"
            className="contact-inputs">
             <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
    
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >

      <div className="input-field">
              <input
                id="email"
                type="email"
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-field">
              <input
                id="username"
                type="text"
              />
              <label htmlFor="username">Username</label>
            </div>

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
              <TextField style={{width:"100%", color: "white"}}
          id="standard-multiline-static"
          label="Your feedback"
          color="secondary"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />

    </Box>
    </Box>

    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "80px",
                    borderRadius: "3px",
                    letterSpacing: "1px",
                    marginTop: "0.3grem",
                    height: "40px"
                
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
    </Wrapper>
  );
};

export default Contact;