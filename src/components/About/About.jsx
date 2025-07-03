// import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.jfif';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[4vw] lg:px-[4vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:mr-[2vw]">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Pawan Tripathi
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Frontend Developer',
                'Web Developer',
                'JavaScript Developer',
                'Programmer',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a motivated Frontend Developer with a solid foundation in web technologies such as HTML, CSS, JavaScript, and React.js. I recently completed my Bachelor of Computer Applications and gained hands-on experience in creating responsive and user-friendly interfaces. I am passionate about clean code and modern UI/UX practices while continually learning to stay updated with the latest trends in front-end development. I thrive in collaborative environments to build scalable web applications
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1-QTX9Ty_yrJQiAZ8ZAsL-aSoE2MtBPJQ/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD RESUME
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full md:rounded-none"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Pawan Tripathi"
              className="w-full h-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] rounded-full md:rounded-none"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
