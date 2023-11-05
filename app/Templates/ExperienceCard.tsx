"use client";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {
  imageSrc: string;
  title: string;
  subtitle: string;
  mode: string;
  programmingLanguages: {
    images: string[];
  }[];
  summarypoints: string[];
};

const ExperienceCard = (props: Props) => {
  return (
    <div className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[390px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{duration:1,y:0}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        alt="company name"
        src={props.imageSrc}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{props.title}</h4>
        <p className="font-bold text-2xl ml-1">{props.subtitle}</p>
        <div className="flex space-x-2 programing_languages">
          {props.programmingLanguages.map((languageData, index) => (
            <div key={index}>
              <div className="flex space-x-2 my-2 programing_languages">
                {languageData.images.map((image, imageIndex) => (
                  <Image
                    key={imageIndex}
                    width={40}
                    height={40}
                    src={image}
                    alt=""
                    className="rounded-full"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="uppercase py-5 text-gray-300">{props.mode}</p>
      <ul className=" list-disc text-sm">
        {props.summarypoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
