
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';



export default function Tech() {
  return (
    <div id='skills'>
      <div className="w-full flex flex-col justify-center items-center" id="skills">
      <p className="text-3xl text-porttext font-bold font-heading my-8">
        Skills
      </p>
      <Box sx={{ flexGrow: 1 , paddingX:10,marginY:3}}>
      <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          <Grid xs={2} sm={4} md={3}>
            <div className='flex items-center justify-center'>
              
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className='w-24' />
          
            </div>
          </Grid>
          <Grid xs={2} sm={4} md={3}>
            <div className='flex items-center justify-center'>
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className='w-24' />
            
            </div>          
          </Grid>
          <Grid xs={2} sm={4} md={3}>
          <div className='flex items-center justify-center'>
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className='w-24' />
            
              </div>
          </Grid>
          <Grid xs={2} sm={4} md={3}>
          <div className='flex items-center justify-center'>
              
              
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className='w-24' />
          
            
              </div>
          </Grid>
          <Grid xs={2} sm={4} md={3}>
          <div className='flex items-center justify-center'>
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className='w-24' />
            
              </div>
          </Grid>
          <Grid xs={2} sm={4} md={3}>
          <div className='flex items-center justify-center'>
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className='w-24' />
            
            </div>    
          </Grid>
          <Grid xs={2} sm={4} md={3}>
          <div className='flex items-center justify-center'>
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className='w-24' />
            
            </div>    
          </Grid>
          <Grid xs={2} sm={4} md={3}>
          <div className='flex items-center justify-center'>
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" className='w-24' />
            
            </div>    
          </Grid>
          <Grid xs={2} sm={4} md={3}>
          <div className='flex items-center justify-center'>
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className='w-24' />
            
            </div>    
          </Grid>
          <Grid xs={2} sm={4} md={3}>
          <div className='flex items-center justify-center'>
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" className='w-24' />
            
            </div>    
          </Grid>
          <Grid xs={2} sm={4} md={3}>
          <div className='flex items-center justify-center'>
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" className='w-24' />
            
            </div>    
          </Grid>
          <Grid xs={2} sm={4} md={3}>
          <div className='flex items-center justify-center'>
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" className='w-24' />
            
            </div>    
          </Grid>
          <Grid xs={2} sm={4} md={3}>
          <div className='flex items-center justify-center'>
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" className='w-24' />
            
            </div>    
          </Grid>
          <Grid xs={2} sm={4} md={3}>
          <div className='flex items-center justify-center'>
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className='w-24' />
            
            </div>    
          </Grid>
          <Grid xs={2} sm={4} md={3}>
          <div className='flex items-center justify-center'>
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" className='w-24' />
            
            </div>    
          </Grid>
          <Grid xs={2} sm={4} md={3}>
          <div className='flex items-center justify-center'>
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" className='w-24' />
            
            </div>    
          </Grid>
      </Grid>
    </Box>
    </div>
    </div>
  );
}