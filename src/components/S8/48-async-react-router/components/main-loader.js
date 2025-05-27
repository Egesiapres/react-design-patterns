import delay from "../util/delay";
import { defer } from "react-router";


export function loader() {
  return defer({ promise: delay("Fetched Data", 1000) });
}
