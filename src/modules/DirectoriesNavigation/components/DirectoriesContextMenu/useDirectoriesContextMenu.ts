import {
  hideContextMenu,
  showContextMenu,
} from "@/components/ContextMenu/contextMenuStore";
import {
  TContextMenuItem,
  TMousePosition,
} from "@/components/ContextMenu/interfaces";
import { useDispatch } from "react-redux";

const items: TContextMenuItem[] = [
  {
    title: "Insert",
    action: () => {
      console.log("id");
    },
  },
  {
    title: "Copy",
    action: () => {
      console.log("type");
    },
  },
];

const useDirectoriesContextMenu = () => {
  const dispatch = useDispatch();

  const openContextMenu = (position: TMousePosition) => {
    dispatch(showContextMenu({ position, items }));
  };

  const closeContextMenu = () => {
    dispatch(hideContextMenu());
  };

  return { openContextMenu, closeContextMenu };
};

export default useDirectoriesContextMenu;
