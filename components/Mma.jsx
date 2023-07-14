import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import chaiyo from "../public/assets/chaiyo.jpeg";
import cjjf from "../public/assets/cjjf.png";
import hayabusa from "../public/assets/hayabusa.png";



const Mma = () => {
  return (
    <div id="mma" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-3xl tracking-widest uppercase text-[#2f2f2f] py-4 bg-yellow-300 w-60">
          MMA
        </p>
        {/* <h2 className='py-4'>In The Ring...</h2> */}
        <div className="grid md:grid-cols-2 gap-8 py-4">
          <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="text-3xl tracking-widest uppercase text-[#2f2f2f] py-4 bg-yellow-300 w-60">
              In The Ring...
            </p>
            {/* <h2 className='py-4'>In The Ring...</h2> */}
            <div className="grid md:grid-cols-2 gap-8 py-4">
              <Image
                src={chaiyo}
                alt="chaiyo"
                // style={{ objectFit: "cover" }}
                width={"100%"}
                height={"100%"}
                responsive="true"
              />
              <Image
                src={hayabusa}
                alt="hayabusa"
                // style={{ objectFit: "cover" }}
                width={"100%"}
                height={"100%"}
                responsive="true"
              />
              <Image
                src={cjjf}
                alt="cjjf"
                // style={{ objectFit: "cover" }}
                width={"100%"}
                height={"100%"}
                responsive="true"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mma;
