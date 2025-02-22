
const Resources = () => {
  return (
    <section id="resources" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in backdrop-blur-sm bg-dark/20 p-8 rounded-lg">
          <h2 className="text-4xl font-bold text-light mb-4">Resources</h2>
          <p className="text-light/80 max-w-2xl mx-auto">
          Everything you need to learn, practice, and grow in coding.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="backdrop-blur-sm bg-dark/20 p-6 rounded-lg border border-primary/20 hover:bg-dark/30 transform hover:-translate-y-2 transition-all duration-300">
            <img src="/images/study.gif" alt="Study Material" className="w-16 h-16 mx-auto mb-6 hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-light mb-4 text-center">Study Material</h3>
            <p className="text-light/80">
            Well-structured notes and guides to help you understand coding concepts easily. Learn at your own pace with high-quality content.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-dark/20 p-6 rounded-lg border border-primary/20 hover:bg-dark/30 transform hover:-translate-y-2 transition-all duration-300">
            <img src="/images/vedio.gif" alt="Live Projects" className="w-16 h-16 mx-auto mb-6 hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-light mb-4 text-center">Video Tutorials</h3>
            <p className="text-light/80">
            Step-by-step coding lessons explained by industry experts. Perfect for visual learners who want practical knowledge.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-dark/20 p-6 rounded-lg border border-primary/20 hover:bg-dark/30 transform hover:-translate-y-2 transition-all duration-300">
            <img src="/images/practice.gif" alt="Mentorship" className="w-16 h-16 mx-auto mb-6 hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-light mb-4 text-center">Practice Projects</h3>
            <p className="text-light/80">
            Work on real-world projects to strengthen your skills. Gain hands-on experience and build an impressive portfolio.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="backdrop-blur-sm bg-dark/20 p-6 rounded-lg border border-primary/20 hover:bg-dark/30 transform hover:-translate-y-2 transition-all duration-300">
            <img src="/images/code.gif" alt="Study Material" className="w-16 h-16 mx-auto mb-6 hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-light mb-4 text-center">Coding Tools</h3>
            <p className="text-light/80">
            Explore essential software, frameworks, and online platforms. Get the right tools to code efficiently and effectively.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-dark/20 p-6 rounded-lg border border-primary/20 hover:bg-dark/30 transform hover:-translate-y-2 transition-all duration-300">
            <img src="/images/interview.gif" alt="Live Projects" className="w-16 h-16 mx-auto mb-6 hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-light mb-4 text-center">Interview Prep</h3>
            <p className="text-light/80">
            Prepare for job interviews with coding challenges, mock tests, and expert tips. Boost your confidence and land your dream job.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-dark/20 p-6 rounded-lg border border-primary/20 hover:bg-dark/30 transform hover:-translate-y-2 transition-all duration-300">
            <img src="/images/community.gif" alt="Mentorship" className="w-16 h-16 mx-auto mb-6 hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-light mb-4 text-center">Community Support</h3>
            <p className="text-light/80">
            Join a network of passionate learners and developers. Get guidance, share knowledge, and grow together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
