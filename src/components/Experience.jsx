/* eslint-disable react/prop-types */
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { LaptopMac } from '@mui/icons-material';

export function EduComp(props){
    return <div className="flex items-center justify-center my-4">
        <div className="border-2 h-[200px] w-[500px] rounded-lg flex flex-col border-portdarkpurple">
            <div className="h-2/5 flex items-center justify-center mx-4">
                <div className="w-[12%] h-4/5">
                    <img src={`${props.img}`} className="rounded-xl"/>
                </div>
                <div className="w-[88%] h-4/5 font-body px-4">
                    <div className="text-md font-heading text-porttext font-semibold">{props.pos}</div>
                    <div className="text-sm text-stone-500">{props.place}</div>
                    <div className="text-xs text-stone-500">{props.duration}</div>
                </div>
            </div>
            <div className="h-3/5 flex flex-col font-body mx-4 text-stone-500">
                <div className="my-2">
                    {props.desc}
                </div>
                <div className="flex">
                    <p className="font-bold">Skills:</p>
                    <p>{props.skills}</p>
                </div>
            </div>
        </div>
    </div>
}

function Experience(){
    return <div className="flex flex-col items-center my-8 justify-center ">
        <div className="text-porttext text-3xl font-semibold font-heading my-3">Experience</div>
        <br/>
        
        <Timeline>
      <TimelineItem>
        
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary'>
          <LaptopMac/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <EduComp pos={"Web Developer"} place={"GDSC IIIT-A"} duration={"Aug 2023 - Present"} desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat rem consectetur nihil odio enim dolore nisi molestias? Dignissimos, placeat delectus."}
        skills={"React.js | Node.js | Express | Tailwind"}
        img="gdsclogo.png"
        />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary'>
            <LaptopMac/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <EduComp pos={"Web Developer"} place={"ASSIC IIIT-A"} duration={"May 2023 - Present"} desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat rem consectetur nihil odio enim dolore nisi molestias? Dignissimos, placeat delectus."}
        skills={"HTML | Javascript | CSS | Bootstrap CSS"}
        img="https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png"
        />
        </TimelineContent>
      </TimelineItem>
      </Timeline>
    </div>
}
export default Experience;