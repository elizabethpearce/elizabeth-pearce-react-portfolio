import {
  faTrash,
  faSignOutAlt,
  faEdit, faSpinner,
  faCircleNotch, faBahai,
  faPlusSquare,
  faCirclePlus
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons =() => {
  return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faCircleNotch, faBahai, faPlusSquare, faCirclePlus);
};

export default Icons;