import { Button, Input, Textarea } from "@chakra-ui/react";
import "../index.css";
// import ReCAPTCHA from "react-google-recaptcha";

export const Form = () => {
  // const onChange = () => {};
  return (
    <form
      name="contact"
      method="post"
      action="/confirmation.html"
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
      {/* <ReCAPTCHA sitekey="Your client site key" onChange={onChange} /> */}
      <Button type="submit" bgColor="#002d62" color="white" fontWeight="normal">
        Verzenden
      </Button>
    </form>
  );
};
