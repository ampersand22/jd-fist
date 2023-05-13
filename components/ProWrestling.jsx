import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import gymchair from "../public/assets/gymchair.jpeg";
import entrance from "../public/assets/entrance.jpeg";
import submission from "../public/assets/submission.jpeg";
import profileaew from "../public/assets/profileaew.jpeg";
import jdsuit1 from "../public/assets/jdsuit1.jpeg";
import jdbelt1 from "../public/assets/jdbelt1.jpeg"; 
import roh1 from "../public/assets/roh1.jpeg";
import roh2 from "../public/assets/roh2.jpeg"; 
import roh3 from "../public/assets/roh3.jpeg"; 
import roh4 from "../public/assets/roh4.jpeg";  



const ProWrestling = () => {
  return (
    <div id='prowrestling' className='w-full'>
      <Box>
        <Text>
          Accolades:
          4x MetroPlex Wrestling Champion, 
          Texoma Pro Red River Champion, 
          All-Star Pro Wrestling Champion, 
          Texoma Pro Texas Champion, 
          MPX Tag Team Champion - w/ XPAC -, 
          NWA Texoma Heavyweight Champion, 
          2x NWA Texas Tag Team Champion - w/ Nobe Bryant -, 
          RCW Champion,
          RCW Tag Team Champion - w/ HNIC and Keith Lee -,  
          PCW Tag Team Champion
        </Text>
      </Box>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-3xl tracking-widest uppercase text-[#2f2f2f] py-4 bg-yellow-300 w-60'>
          In The Ring...
        </p>
        {/* <h2 className='py-4'>In The Ring...</h2> */}
        <div className='grid md:grid-cols-2 gap-8 py-4'>
        <Image 
            src={roh1}
            alt= "roh1"
            // style={{ objectFit: "cover" }}
            width={'100%'}
            height={'100%'}
            responsive
          />
          <Image 
            src={roh2}
            alt= "roh2"
            // style={{ objectFit: "cover" }}
            width={'100%'}
            height={'100%'}
            responsive
          />
          <Image 
            src={roh3}
            alt= "roh3"
            // style={{ objectFit: "cover" }}
            width={'100%'}
            height={'100%'}
            responsive
          />
          <Image 
            src={roh4}
            alt= "roh4"
            // style={{ objectFit: "cover" }}
            width={'100%'}
            height={'100%'}
            responsive
          />

          <Image 
            src={gymchair}
            alt= "gym chair"
            // style={{ objectFit: "cover" }}
            width={'100%'}
            height={'100%'}
            responsive
          />

          <Image 
            src={entrance}
            alt= "entrance"
            // style={{ objectFit: "cover" }}
            width={'100%'}
            height={'100%'}
            responsive
          />
          <Image 
            src={submission}
            alt= "submission"
            // style={{ objectFit: "cover" }}
            width={'100%'}
            height={'100%'}
            responsive
          />
          <Image 
            src={profileaew}
            alt= "profileaew"
            // style={{ objectFit: "cover" }}
            width={'100%'}
            height={'100%'}
            responsive
          />
          <Image 
            src={jdsuit1}
            alt= "jdsuit1"
            // style={{ objectFit: "cover" }}
            width={'100%'}
            height={'100%'}
            responsive
          />
          <Image 
            src={jdbelt1}
            alt= "jdbelt1"
            // style={{ objectFit: "cover" }}
            width={'100%'}
            height={'100%'}
            responsive
          />
          
        </div>
      </div>
    </div>
  );
};


export default ProWrestling