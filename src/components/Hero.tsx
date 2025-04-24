
const Hero = () => {
  return (
    <section id="home" className="pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="md:w-2/3 mb-10 md:mb-0 animate-fade-in backdrop-blur-sm bg-transparent/10 p-8 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-bold text-light mb-6 bg-transparent">
              Why <span className="text-primary hover:scale-105 inline-block transition-transform bg-transparent">Aeeron Academy</span>?
            </h1>
            <p className="text-lg text-light/80 mb-8 bg-transparent">
            Discover why Aeeron Academy stands out among the rest. Unlike other institutions, Aeeron Academy is dedicated solely to providing excellence in one area: <b className="ram">Software Engineering Specialization In FullStack Web Development.</b> Our commitment to quality education is reflected in our approach, where students receive hands-on training through <b className="ram">Live Classes</b>, immersing themselves in practical applications and real-world scenarios. What sets us apart is our unique offering of courses taught entirely in <b className="ram">हिन्दी (Hindi) / English Language </b>, ensuring accessibility and inclusivity for learners from diverse backgrounds. At Aeeron Academy, we empower our students with the skills and knowledge they need to thrive in the ever-evolving field of technology, making us the ultimate destination for those aspiring to become FullStack web developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 bg-transparent">
              <a
                href="#contact"
                className="bg-transparent border border-primary text-white px-8 py-3 rounded-lg hover:bg-primary/20 hover:scale-105 transform transition-all duration-300 inline-flex items-center justify-center"
              >
                Apply Now
              </a>
              <a
                href="https://wa.me/+917976161649?text=Hi,%20I'm%20interested%20in%20learning%20more%20about%20your%20courses"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-[#25D366] text-white px-8 py-3 rounded-lg hover:bg-[#25D366]/20 hover:scale-105 transform transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-5 h-5"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.92 15.73C16.66 16.33 15.82 16.83 15.13 16.97C14.67 17.07 14.07 17.15 11.61 16.18C8.63 15 6.82 11.95 6.67 11.75C6.53 11.55 5.33 9.95 5.33 8.27C5.33 6.59 6.17 5.79 6.47 5.47C6.72 5.2 7.12 5.07 7.5 5.07C7.63 5.07 7.75 5.08 7.86 5.09C8.16 5.1 8.31 5.12 8.5 5.67C8.74 6.36 9.43 8.04 9.5 8.19C9.57 8.34 9.64 8.54 9.54 8.73C9.45 8.93 9.37 9.02 9.22 9.19C9.07 9.36 8.93 9.49 8.78 9.68C8.64 9.85 8.49 10.03 8.66 10.32C8.83 10.6 9.43 11.58 10.32 12.37C11.47 13.39 12.43 13.72 12.76 13.86C13 13.97 13.28 13.95 13.46 13.77C13.69 13.54 13.97 13.13 14.26 12.73C14.47 12.44 14.73 12.41 15 12.51C15.28 12.61 16.94 13.43 17.24 13.58C17.54 13.73 17.74 13.8 17.81 13.94C17.88 14.08 17.88 14.61 17.62 15.21L16.92 15.73Z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="md:w-1/3 animate-scale-in">
            {/* <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Students learning"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
