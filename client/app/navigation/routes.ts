import Auth from "@/components/screens/auth/Auth";
import { IRoute } from "./navigation.types";
import Home from "@/components/screens/home/Home";

export const routes: IRoute[] = [
  {
    name:'Auth',
    component: Auth
  },
  {
    name: 'Home',
    component: Home
  }
]