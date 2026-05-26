import { useContext } from "react";
import { AuthStateContext } from "./AuthStateContext";

export function useAuth() {
  return useContext(AuthStateContext);
}
