import { EduComp } from "./Experience";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
function Education(){
    return  <div className="flex flex-col items-center my-8 justify-center" id="edu">
    <div className="text-porttext text-3xl font-semibold font-heading my-3">Education</div>
    <br/>
    
    <Timeline>
  <TimelineItem>
    
    <TimelineSeparator>
      <TimelineConnector />
      <TimelineDot color='primary'>
      <SchoolIcon/>
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent sx={{ py: '12px', px: 2 }}>
    <EduComp pos={"Indian Institute of Information Technology Allahabad"} place={"BTech. Electronics & Communication Engineering"} duration={"Nov. 2022 - Present"} desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat rem consectetur nihil odio enim dolore nisi molestias? Dignissimos, placeat delectus."}
    img="https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png"
    />
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    
    <TimelineSeparator>
      <TimelineConnector />
      <TimelineDot color='primary'>
        <SchoolIcon/>
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent sx={{ py: '12px', px: 2 }}>
    <EduComp pos={"Somerville School, Noida"} place={"Class XII - PCM with Computer Science"} duration={"April 2009 - June 2021"} desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat rem consectetur nihil odio enim dolore nisi molestias? Dignissimos, placeat delectus."}
    img="https://www.schoolmykids.com/smk-media/2018/07/Somerville-School-Noida.png"
    />
    </TimelineContent>
  </TimelineItem>
  </Timeline>
</div>
}

export default Education;