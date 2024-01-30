/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Item(props) {
  return (
    <Card sx={{ maxWidth: 345,maxHeight:250}} className="my-3 mx-3">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://placehold.co/200x100"
          alt="project"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{fontFamily:"Montserrat",fontWeight:"bold"}}>
            {props.name}
          </Typography>
          <p className="text-sm text-ellipsis text-stone-500 font-body">
            {props.desc}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
function Projects() {
  return (
    <div
      className="flex flex-col justify-center items-center min-w-[360px] max-w-[1267px] box-border mx-auto md:my-20 my-10"
      id="projects"
    >
      <p className="text-2xl font-bold font-heading text-center my-8 text-portblue">
        Projects
      </p>
      <p className="mx-3 mb-2 text-xl text-center font-body">
        “The way to get started is to quit talking and begin doing.”{" "}
      </p>
      <Box sx={{ flexGrow: 1 }} className="md:px-28 py-8 px-8">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid xs={2} sm={4} md={4}>
            <Item
              name={"ASSIC"}
              desc={"Website to connect IIIT-A alumni and students"}
            />
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item
              name={"Medify.ai"}
              desc={"Health app leverages ML for early stage disease detection"}
            />
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item
              name={"Quizzify"}
              desc={"Interactive quiz application built using Python"}
            />
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item
              name={"G Meet"}
              desc={"Full Stack clone of Google Meet with WebRTC"}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Projects;
