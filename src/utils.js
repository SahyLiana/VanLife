import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const isLoggedIn = localStorage.getItem("loggedIn");
  const pathname = new URL(request.url).pathname;

  console.log(pathname);

  if (!isLoggedIn) {
    console.log("Redirecting");
    const response = redirect(
      `/login?message=You must login first&redirectTo=${pathname}`
    );
    response.body = true;
    throw response;
    // throw redirect("/login");
  }
  return null;
}
