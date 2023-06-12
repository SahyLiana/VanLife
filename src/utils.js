import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    console.log("Redirecting");
    const response = redirect("/login");
    response.body = true;
    throw response;
    // throw redirect("/login");
  }
  return null;
}
