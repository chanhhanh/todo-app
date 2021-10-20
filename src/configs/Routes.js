import { Screen } from "../views/Screen";
import { About } from "../views/About";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const Routes = [
  {
    path: "/about",
    component: About,
    label: "About me",
    icon: <FavoriteIcon />,
  },
  {
    path: "/todos",
    component: Screen,
    label: "Todo list",
    icon: <RestoreIcon />,
  },
];
