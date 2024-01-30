import Footer from "./Footer"
import Form from "./Form";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    blue: {
      main: "#3399CC",
    },
  },
});
function Contact() {
    return (
      <div
        className="flex flex-col items-center gap-3 min-w-[360px] max-w-[1267px] box-border mx-auto md:mt-20 mt-10 font-body "
        id="contact"
      >
        <ThemeProvider theme={theme}>
          <div className="h-full text-center my-8 text-2xl font-bold text-[#3399CC] font-heading">
            Contact
          </div>
          <p className="text-lg md:text-xl font-semibol w-4/5 text-center mb-4 font-semibold">
            I&apos;m excited to connect with you! Feel free to use the contact
            form below or reach me directly via email!
          </p>
          <div className="md:flex w-3/5 md:w-2/5 justify-around items-center">
            <div className="flex my-2 gap-2">
              <LocationOnIcon sx={{ color: "blue.main" }} />
              <p className="hover:text-portblue">Noida,India</p>
            </div>
            <div>
              <a
                href="mailto:jainshaurya.sj@gmail.com"
                className="flex my-2 gap-2"
              >
                <EmailIcon sx={{ color: "blue.main" }} />
                <p className="hover:text-portblue">jainshaurya.sj@gmail.com</p>
              </a>
            </div>
          </div>
          <Form />
          <Footer />
        </ThemeProvider>
      </div>
    );
}

export default Contact
