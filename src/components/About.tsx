
const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in backdrop-blur-sm bg-transparent/10 p-8 rounded-lg">
          <h2 className="text-4xl font-bold text-light mb-4">About Us</h2>
          <p className="text-light/80 max-w-2xl mx-auto">
          Bridging the gap between learning and real-world application.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-right backdrop-blur-sm bg-transparent/10 p-8 rounded-lg">
            <h3 className="text-3xl font-semibold text-light">Our Vision</h3>
            <p className="text-light/80">
              To bridge the gap between talent and opportunity by providing high-quality coding education. We empower students with industry-ready skills and prepare them for <span className="ram">
              high-paying international remote jobs
                </span>, ensuring a successful tech career from anywhere in the world.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="backdrop-blur-sm bg-transparent/10 p-4 rounded-lg border border-primary/20 hover:bg-dark/30 text-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-xl font-bold text-primary mb-2">100+</h4>
                <p className="text-light/80">Students Trained</p>
              </div>
              <div className="backdrop-blur-sm bg-transparent/10 p-4 rounded-lg border border-primary/20 hover:bg-dark/30 text-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-xl font-bold text-primary mb-2">500+</h4>
                <p className="text-light/80">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src="/images/poster.png" 
              alt="About Us" 
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
