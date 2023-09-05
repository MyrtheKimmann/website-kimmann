import { Button, Input, Textarea } from "@chakra-ui/react";
import "../index.css";
import { useState, useEffect } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

export const Form = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <form
      name="contact"
      method="post"
      action="/form/?success=true"
      className="form"
    >
      <Input type="hidden" name="form-name" value="contact" />
      <Input
        type="text"
        name="name"
        placeholder="Naam"
        border="none"
        borderBottom="2px solid #002d62"
        mb="25px"
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="E-mail"
        border="none"
        borderBottom="2px solid #002d62"
        mb="25px"
        required
      />
      <Textarea
        name="message"
        placeholder="Bericht"
        border="2px solid #002d62"
        mb="25px"
        required
      />
      {success && <p style={{ color: "green" }}>Bedankt voor je bericht! </p>}
      {/* <ReCAPTCHA sitekey="Your client site key" onChange={onChange} /> */}
      <Button type="submit" bgColor="#002d62" color="white" fontWeight="normal">
        Verzenden
      </Button>
    </form>
  );
};
