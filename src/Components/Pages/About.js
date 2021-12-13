import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{
        x: -200,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      exit={{
        x: 100,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      transition={{ duration: 1 }}
      className="page"
    >
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
      <h2>About page works!</h2>
    </motion.div>
  );
};

export default About;
