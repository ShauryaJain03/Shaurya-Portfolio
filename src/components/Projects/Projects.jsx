/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Item(props) {
  return (
    <div className="content">
    <Card sx={{ maxWidth: 280}}>
      <CardMedia
        sx={{ height: 140 , marginX:3,marginTop:3}}
        image={`${props.img}`}
        title={`${props.name}`}
      />
      <CardContent sx={{marginX:1,color:"#0a1e50"}}>
        <Typography gutterBottom variant="h6" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="#0a1e50">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={`${props.link}`} target="_blank" rel="noreferrer">
          <Button size="small" sx={{color:'#5551d7'}}>Visit</Button>
        </a>
        <a href={`${props.github}`} target="_blank" rel="noreferrer">
          <Button size="small" sx={{color:'#5551d7'}}>Github</Button>
        </a>
      </CardActions>
    </Card>
    </div>
  );
}
function Projects() {
  return (
    <>
    <div
      className="flex flex-col justify-center items-center min-w-[360px] max-w-[1267px] box-border mx-auto"
      id="projects"
    >
      <p className="text-3xl font-bold font-heading text-center my-8 text-porttext">
        Projects
      </p>
      <p className="mx-3 mb-2 text-xl text-center font-body px-5 text-porttext">
        “The way to get started is to quit talking and begin doing.”{" "}
      </p></div>
      
      <Box sx={{ flexGrow: 1 }} className="md:px-28 py-12 px-20">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}>
          <Grid xs={1} sm={4} md={4}>
            <Item
              name={"Document Summarizer"}
              desc={"AI Document summarizer to make your job easy"}
              img={"gdsc.png"}
            />
          </Grid>
          <Grid xs={1} sm={4} md={4}>
            <Item
              name={"DuoChat"}
              desc={"Full Stack clone of Google Meet with WebRTC"}
              img={"gdsc.png"}
            />
          </Grid>
          <Grid xs={1} sm={4} md={4}>
            <Item
              name={"ASSIC"}
              desc={"Website to connect IIIT-A alumni and students"}
              link={"https://assic.iiita.ac.in/"}
              img={"assic.jpg"}
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
        </Grid>
      </Box>
      </>
  );
}

export default Projects;
