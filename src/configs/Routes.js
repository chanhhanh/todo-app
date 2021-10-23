import { Screen } from "../views/Screen";
import { About } from "../views/About";
import { Timeline } from "../views/Timeline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddTaskIcon from "@mui/icons-material/AddTask";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
    icon: <AddTaskIcon />,
  },
  {
    path: "/timeline",
    component: Timeline,
    label: "Timeline",
    icon: <AccessTimeIcon />,
  },
];
