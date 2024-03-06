/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import "./Projects.css";
import { CardActionArea } from "@mui/material";

function Item(props) {
  return (
    <div className="content">
      <Card className="my-3 mx-3">
        <CardActionArea>
          {/*  */}
          <div className="flex items-center justify-center">
            <img src={`${props.img}`} />
          </div>

          <a href={`${props.link}`} target="_blank" rel="noreferrer">
            <div className="content-overlay"></div>
            <div className="content-details fadeIn-top text-white font-heading">
              <p className="md:text-xl text-sm font-semibold md:my-3 my-2">
                {props.name}
              </p>
              <p className="md:text-md text-sm">{props.desc}</p>
              <button className="border-2 border-portfooter md:my-4 rounded-full text-white md:w-1/2 w-3/5 py-1 hover:bg-portfooter md:text-lg text-sm my-2">
                Visit
              </button>
            </div>
          </a>
        </CardActionArea>
      </Card>
    </div>
  );
}
function Projects() {
  return (
    <div
      className="flex flex-col justify-center items-center min-w-[360px] max-w-[1267px] box-border mx-auto md:my-20 my-10"
      id="projects"
    >
      <p className="text-3xl font-bold font-heading text-center my-8 text-porttext">
        Projects
      </p>
      <p className="mx-3 mb-2 text-xl text-center font-body px-5 text-porttext">
        “The way to get started is to quit talking and begin doing.”{" "}
      </p>
      <Box sx={{ flexGrow: 1 }} className="md:px-28 py-8 px-20">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          <Grid xs={1} sm={4} md={4}>
            <Item
              name={"ASSIC"}
              desc={"Website to connect IIIT-A alumni and students"}
              link={"https://assic.iiita.ac.in/"}
              img={"gdsc.png"}
            />
          </Grid>
          <Grid xs={1} sm={4} md={4}>
            <Item
              name={"GDSC IIIT-A"}
              desc={"Website for GDSC IIIT-A designed and developed "}
              link={"https://gdsc.iiita.ac.in/"}
              img={"gdsc.png"}
            />
          </Grid>
          <Grid xs={1} sm={4} md={4}>
            <Item
              name={"Google Meet"}
              desc={"Full Stack clone of Google Meet with WebRTC"}
              img={"gdsc.png"}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Projects;
