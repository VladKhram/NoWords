import { useDispatch } from "react-redux";
import { TContextMenuItem, TMousePosition } from "./interfaces";
import { hideContextMenu, showContextMenu } from "./contextMenuStore";

const useContextMenu = () => {
  const dispatch = useDispatch();

  const openContextMenu = (
    position: TMousePosition,
    items: TContextMenuItem[]
  ) => {
    dispatch(showContextMenu({ position, items }));
  };

  const closeContextMenu = () => {
    dispatch(hideContextMenu());
  };

  return { openContextMenu, closeContextMenu };
};

export default useContextMenu;
