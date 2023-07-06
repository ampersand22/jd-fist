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
import vip1 from "../public/assets/jdvip1.jpg";
import vip2 from "../public/assets/jdvip2.jpg";

const ProWrestling = () => {
  return (
    <div id="prowrestling" className="w-full">
      <Box>
        <Text className="max-w-[1240px] mx-auto px-6 py-16 text-3xl">
          <span className=" text-4xl ">Accolades: </span>
          <br />
          4x MetroPlex Wrestling Champion <br />
          Texoma Pro Red River Champion <br />
          All-Star Pro Wrestling Champion <br />
          Texoma Pro Texas Champion <br />
          MPX Tag Team Champion - w/ XPAC <br />
          NWA Texoma Heavyweight Champion <br />
          2x NWA Texas Tag Team Champion - w/ Nobe Bryant <br />
          RCW Champion <br />
          RCW Tag Team Champion - w/ HNIC and Keith Lee <br />
          PCW Tag Team Champion
        </Text>
      </Box>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-3xl tracking-widest uppercase text-[#2f2f2f] py-4 bg-yellow-300 w-60">
          In The Ring...
        </p>
        {/* <h2 className='py-4'>In The Ring...</h2> */}
        <div className="grid md:grid-cols-2 gap-8 py-4">
        <Image
            src={vip1}
            alt="vip1"
            // style={{ objectFit: "cover" }}
            width={"100%"}
            height={"100%"}
            responsive="true"
          />
          <Image
            src={vip2}
            alt="vip2"
            // style={{ objectFit: "cover" }}
            width={"100%"}
            height={"100%"}
            responsive="true"
          />
          <Image
            src={roh1}
            alt="roh1"
            // style={{ objectFit: "cover" }}
            width={"100%"}
            height={"100%"}
            responsive="true"
          />
          <Image
            src={roh2}
            alt="roh2"
            // style={{ objectFit: "cover" }}
            width={"100%"}
            height={"100%"}
            responsive="true"
          />
          <Image
            src={roh3}
            alt="roh3"
            // style={{ objectFit: "cover" }}
            width={"100%"}
            height={"100%"}
            responsive="true"
          />
          <Image
            src={roh4}
            alt="roh4"
            // style={{ objectFit: "cover" }}
            width={"100%"}
            height={"100%"}
            responsive="true"
          />

          <Image
            src={gymchair}
            alt="gym chair"
            // style={{ objectFit: "cover" }}
            width={"100%"}
            height={"100%"}
            responsive="true"
          />

          <Image
            src={entrance}
            alt="entrance"
            // style={{ objectFit: "cover" }}
            width={"100%"}
            height={"100%"}
            responsive="true"
          />
          <Image
            src={submission}
            alt="submission"
            // style={{ objectFit: "cover" }}
            width={"100%"}
            height={"100%"}
            responsive="true"
          />
          <Image
            src={profileaew}
            alt="profileaew"
            // style={{ objectFit: "cover" }}
            width={"100%"}
            height={"100%"}
            responsive="true"
          />
          <Image
            src={jdsuit1}
            alt="jdsuit1"
            // style={{ objectFit: "cover" }}
            width={"100%"}
            height={"100%"}
            responsive="true"
          />
          <Image
            src={jdbelt1}
            alt="jdbelt1"
            // style={{ objectFit: "cover" }}
            width={"100%"}
            height={"100%"}
            responsive="true"
          />
        </div>
      </div>
    </div>
  );
};

export default ProWrestling;
