import React, { useContext } from "react";
import { Button, Card, Form, Hero, Input } from "react-daisyui";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SignInPage.css";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { AuthContext } from "../../Contexts/UserContext/UserContext";
import { MyThemeContext } from "../../Contexts/ThemeCntext/ThemeChangeContext";
import toast, { Toaster } from "react-hot-toast";

const SignInPage = () => {
  const { lightMode } = useContext(MyThemeContext);
  const { signInWithMail, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const redirectRoute = location?.state?.form?.pathname || "/courses";
  const executeSignIn = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    signInWithMail(email, password)
      .then(() => navigate(redirectRoute))
      .catch((e) => {
        const error = e.message;
        const parsedError = error
          .slice(error.indexOf("/") + 1, error.indexOf(")"))
          .replace("-", " ");
        const notify = () => toast(parsedError);
        notify();
      });
  };

  const executeGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => navigate(redirectRoute))
      .catch((e) => console.log(e.message));
  };

  const executeGithubSignIn = () => {
    signInWithGithub()
      .then(() => navigate(redirectRoute))
      .catch((e) => console.log(e.message));
  };
  return (
    <section className="min-h-[80vh] flex items-center">
      <Hero>
        <Hero.Content className="flex-col  bg-base-content rounded-sm py-24 px-8  min-w-[80vw] ">
          <div className="text-center  mb-5 ">
            <h1 className="text-5xl font-bold text-base-300">Login now!</h1>
          </div>
          <Card
            className={`flex-shrink-0 w-full max-w-sm shadow-2xl ${
              lightMode ? "bg-gradient" : "bg-gradient-dark"
            } `}
          >
            <Card.Body className="px-3 lg:px-8 min-w-[83vw] md:min-w-[auto]">
              <Form onSubmit={executeSignIn}>
                <Form.Label title="Email" />
                <Input
                  type="text"
                  placeholder="email"
                  className="input-bordered"
                  name="email"
                  required
                />
                <Form.Label title="Password" />
                <Input
                  type="password"
                  placeholder="password"
                  className="input-bordered"
                  name="password"
                  required
                />
                <label className="label ">
                  <Link
                    href="#"
                    className="label-text-alt text-base-content font-medium"
                    hover="true"
                  >
                    Forgot password?
                  </Link>
                </label>

                <Button
                  className="bg-base-content text-base-300 hover:text-base-content mt-2 capitalize border-none"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
              <Toaster
                toastOptions={{
                  style: { background: "rgb(239 68 68)" },
                }}
              />
              <p className="ml-1 text-start text-xs font-medium mt-5">
                New to BinaryBase ?{" "}
                <Link className="text-primary underline" to={"/signup"}>
                  Register now
                </Link>
                ! or
              </p>
              <Button
                onClick={executeGoogleSignIn}
                className="bg-base-content text-base-300 hover:text-base-content mt-3  border-none"
              >
                <FcGoogle size={25}></FcGoogle>
                <p className="ml-[-1.5rem] capitalize">
                  Sign <span className="lowercase">in with google</span>
                </p>
              </Button>
              <Button
                onClick={executeGithubSignIn}
                className="bg-base-content text-base-300 hover:text-base-content mt-3  border-none"
              >
                <BsGithub size={25}></BsGithub>
                <p className="ml-[-1.5rem] capitalize">
                  Sign <span className="lowercase">in with github</span>
                </p>
              </Button>
            </Card.Body>
          </Card>
        </Hero.Content>
      </Hero>
    </section>
  );
};

export default SignInPage;
