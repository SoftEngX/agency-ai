import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard';
import { motion } from "motion/react";

const Services = () => {

  const servicesData = [
    {
      title: "Advertising",
      description:
        "We bring bold ideas to life through digital solutions that connect people and create engagement.",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description: "We help you turn plans into results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description:
        "We turn bold ideas into powerful digital solutions that connect...",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.social_icon,
    },
  ];
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }} 
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white/80"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="How can we help you?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index)=>(
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default Services