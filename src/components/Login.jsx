import React from "react";
import {
  Link,
  useLoaderData,
  useSearchParams,
  useNavigate,
  Form,
  redirect,
  useActionData,
  useNavigation, //It will give us an object about information about the status of the navigation, for example about our submission,That is because we can't access it from our loader or action
} from "react-router-dom";
import "../styles/login.css";
import { loginUser } from "../Api";

export function loader({ request }) {
  //We can also use the const [searchParams,setParams]=useSearchParams()
  //const message=searchParams.get("message")....
  const message = new URL(request.url).searchParams.get("message");
  console.log("Message is");
  console.log(message);
  return message;
}

//This action function is like a submitAction

export async function action({ request }) {
  //  console.log("Action goes here");
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  try {
    const user = await loginUser({ email, password });
    console.log(user);
    localStorage.setItem("loggedIn", true);

    //We Cannot use useNavigate because it can be use only in the components itself
    const response = redirect(pathname);
    response.body = true;
    return response;
  } catch (error) {
    return error.message;
  }
  // const user = await loginUser({ email, password });
  // console.log(user);
  // localStorage.setItem("loggedIn", true);
  // //We Cannot use useNavigate because it can be use only in the components itself
  // const response = redirect("/host");
  // response.body = true;
  // throw response;
}

function Login() {
  //const [loginData, setLoginData] = React.useState({ email: "", password: "" });
  // const [status, setStatus] = React.useState("idle");//WE USED USENAVIGATION FOR THIS
  // const [error, setError] = React.useState(null);//NO NEED OF THIS ALSO BECAUSE WE USE ACTION AND WILL THROW AN ERROR.
  // const navigate = useNavigate();WE DO NOT NEED TO USE THIS ON ANYMORE SINCE WE DON'T USE THE HANDLESUBMIT
  const errorMessage = useActionData(); //To get the error from action function
  const navigation = useNavigation(); //IT WILL RETURN AN OBJECT ABOUT THE STATUS OF THE NAVIGATION(we use it if we apply action, not handlesubmit)
  const state = navigation.state; //which might return "idle","submitting" or "loading"
  console.log(state);

  const message = useLoaderData();

  //SINCE WE ARE USING ACTION AND Form,WE DO NOT NEED HANDLE SUBMIT,HANDLE CHANGE ANYMORE
  //WE JUST CREATE A FUNCTION CALLED action(which is mostly async,IMPORT TO APP.JSX AND DO IT AS A PROP TO OUR ROUTE)
  //THE ACTION FUNCTION WILL HANDLE THE SUBMISSION, METHOD IS POST

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setStatus("submitting");
  //   loginUser(loginData)
  //     .then((data) => {
  //       // console.log(data);
  //       setError(false);
  //       navigate("/host", { replace: true });//to avoid going to login again after pressing back button
  //     })
  //     .catch((err) => setError(err))
  //     .finally(() => setStatus("idle"));
  //   // console.log(loginData);
  // }

  // function handleChange(e) {
  //   const { name, value } = e.target;

  //   setLoginData((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     };
  //   });
  // }

  //REPLACE IS USED TO AVOID THE USER TO GO TO THE PRECEDENT PAGE, FOR EG:WHEN THEY ARE LOGGED IN, AND PRESS BACK BUTTON, THEY WON'T GO TO LOGIN PAGE AGAIN
  //INSTEAD, THEY WILL GO TO THE PAGE THAT THEY WERE BEFORE GOING TO LOGIN

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 style={{ color: "red" }}>{message}</h3>}
      {/* <form method="post"  className="login-form">....</form> //BEFORE WAS LIKE THIS, WITHOUT USING ACTION*/}
      <Form method="post" replace className="login-form">
        <input
          type="email"
          name="email"
          // onChange={handleChange}
          placeholder="Email address"
        />
        <input
          type="password"
          name="password"
          // onChange={handleChange}
          placeholder="Password"
        />
        {/* {error.message && <h3 style={{ color: "red" }}>{error.message}</h3>} */}
        {errorMessage && <h3 style={{ color: "red" }}>{errorMessage}</h3>}
        <button
          className="signIn-btn"
          style={
            state === "submitting"
              ? { backgroundColor: "grey" }
              : { backgroundColor: " rgb(255, 132, 0)" }
          }
          disabled={state === "submitting"}
        >
          {state === "submitting" ? "Logging in..." : "Login in"}
        </button>

        {errorMessage === false && <h2 style={{ color: "green" }}>Success</h2>}
      </Form>
      <p>
        <b>Don't have an account</b>
        <Link> Create one now</Link>
      </p>
    </div>
  );
}

export default Login;
