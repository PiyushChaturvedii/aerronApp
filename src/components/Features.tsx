
const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in backdrop-blur-sm bg-dark/20 p-8 rounded-lg">
          <h2 className="text-4xl font-bold text-light mb-4">Features</h2>
          <p className="text-light/80 max-w-2xl mx-auto">
          Your journey starts here - Learn, Build, Suceed!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="backdrop-blur-sm bg-dark/20 p-8 rounded-lg border border-primary/20 hover:bg-dark/30 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <img src="/images/course.gif" alt="Course" className="w-16 h-16 hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-semibold text-light text-center mb-4">Course</h3>
            <p className="text-light/80">
              Embark on a transformative journey with our <span className="text-primary font-bold hover:text-opacity-80 transition-colors ram">Software Engineering Specialization in FullStack Web Development course.</span> Designed to equip aspiring developers with comprehensive skills and expertise, this program delves deep into the intricacies of both front-end and back-end development. From mastering essential programming languages and frameworks to understanding database management and deployment strategies, students are immersed in a hands-on learning environment that mirrors real-world scenarios. Our curriculum is meticulously crafted to cover the latest industry trends and best practices, ensuring that graduates emerge as proficient FullStack developers ready to tackle the challenges of modern web development projects with confidence and proficiency.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-dark/20 p-8 rounded-lg border border-primary/20 hover:bg-dark/30 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <img src="/images/knowledge.gif" alt="Knowledge" className="w-16 h-16 hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-semibold text-light text-center mb-4">Knowledge</h3>
            <p className="text-light/80 leading-relaxed">
              Dive deep into the intricacies of front-end and back-end development, mastering languages such as <span className="text-primary ram font-bold hover:text-opacity-80 transition-colors">HTML, CSS, JavaScript, and frameworks like bootstrap, tailwind, material ui, React and Node.js</span>. Explore database management systems and learn to build scalable, responsive web applications that meet modern industry standards.With our comprehensive curriculum and hands-on approach, you'll gain the expertise needed to excel in FullStack web development and become a sought-after professional in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
