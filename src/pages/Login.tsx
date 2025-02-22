
import { useState } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 text-light hover:text-primary"
        asChild
      >
        <a href="/">
          <Home className="h-5 w-5" />
        </a>
      </Button>
      <div className="max-w-md w-full space-y-8 backdrop-blur-sm bg-dark/20 p-8 rounded-lg border border-primary/20">
        <div>
             
        <a target="blank" href="/" className="hover:text-primary transition-colors">
              <img src="/images/login.gif" alt="login" className="w-24 h-24 mx-auto mb-12 hover:scale-110 transition-transform" />
              </a>

          <h2 className="mt-6 text-center text-3xl font-extrabold text-light">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-t-md relative block w-full px-3 py-2 bg-dark/50 border border-primary/20 placeholder-gray-400 text-light focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-b-md relative block w-full px-3 py-2 bg-dark/50 border border-primary/20 placeholder-gray-400 text-light focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full bg-primary hover:bg-secondary">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
