
const Plans = () => {
  return (
    <section id="plans" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in backdrop-blur-sm bg-dark/20 p-8 rounded-lg">
          <h2 className="text-4xl font-bold text-light mb-4">Our Plans</h2>
          <p className="text-light/80 max-w-2xl mx-auto">
          From beginner to pro – select a plan that suits you best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="backdrop-blur-sm bg-dark/20 p-8 rounded-lg border border-primary/20 hover:bg-dark/30 transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-light mb-4">Basic Plan</h3>
            <div className="text-4xl font-bold text-primary mb-6">₹29,999</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> 3 Months Access
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> Learn the core web technologies - HTML, CSS and JavaScript.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> Build responsive websites with hands-on projects.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> Perfect for beginners looking to start their coding journey.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span>Live classes with expert mentors for better understanding.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> Fundamentals of website design and interactive UI development.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> Project-based learning to strengthen concepts.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> Get a certificate upon successful completion.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> Access to community support for doubt resolution.
              </li>
            </ul>
            <a href="#contact" className="block text-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 hover:scale-105 transform transition-all duration-300">
              Enroll Now
            </a>
          </div>

          <div className="backdrop-blur-sm bg-dark/20 p-8 rounded-lg border-2 border-primary relative transform hover:-translate-y-2 transition-all duration-300">
            <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg animate-pulse">Popular</div>
            <h3 className="text-2xl font-bold text-light mb-4">Pro Plan</h3>
            <div className="text-4xl font-bold text-primary mb-6">₹49,999</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> 6 Months Access
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> Everything in the Basic Plan plus advanced ReactJS training.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> Master component-based UI development with React.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> Learn state management, hooks, and API integration.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> Build real-world dynamic web applications.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span>More hands-on projects to enhance your portfolio.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span>Exclusive ReactJS interview preparation guide.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> Industry-oriented curriculum designed for job readiness.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span>Additional placement assistance and career support.
              </li>
            </ul>
            <a href="#contact" className="block text-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 hover:scale-105 transform transition-all duration-300">
              Enroll Now
            </a>
          </div>

          <div className="backdrop-blur-sm bg-dark/20 p-8 rounded-lg border border-primary/20 hover:bg-dark/30 transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-light mb-4">Elite Plan</h3>
            <div className="text-4xl font-bold text-primary mb-6">₹79,999</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> 12 Months Access
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span>Covers everything from Basic and Pro Plans, plus backend development.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> Learn databases, Node.js, Express.js, and full-stack development.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span>Work on real-time projects and deploy live applications.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> In-depth training on authentication, security, and performance optimization.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span> One-on-one mentorship for personalized learning.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span>Internship opportunities and job placement assistance.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span>  Exclusive career counseling and soft skills training.
              </li>
              <li className="flex items-center text-light/80">
                <span className="mr-2">✓</span>Become a full-stack developer and get ready for high-paying jobs.
              </li>
            </ul>
            <a href="#contact" className="block text-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 hover:scale-105 transform transition-all duration-300">
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
