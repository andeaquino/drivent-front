import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

/*
 * Receives a function that should return an array of objects in the following format:
 * { to: "/some-path", check: () => Boolean, message?: "message" }
 * If the check function returns false user will be redirected to "/some-path"
 * If message is provided a toaster will show on the top right corner of the page with the message
 */
export default function ConditionalRoute({ check=() => [], ...props  }) {
  const validations = check();

  for (const condition of validations) {
    if (!condition.check()) {
      if (condition.message) {
        toast(condition.message);
      }

      return (
        <Redirect to={condition.to} />
      );
    }
  }

  return <Route {...props} />;
}
