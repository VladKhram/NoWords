"use client";
import { FC, useEffect } from "react";
import { TContextMenuItem, TMousePosition } from "./interfaces";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/api/store";
import useDirectoriesContextMenu from "@/modules/DirectoriesNavigation/components/DirectoriesContextMenu/useDirectoriesContextMenu";

const ContextMenu: FC = () => {
  const { isVisible, items, position } = useSelector(
    (state: RootState) => state.contextMenu
  );

  const { closeContextMenu } = useDirectoriesContextMenu();

  useEffect(() => {
    console.log("test");
    if (isVisible) {
      window.addEventListener("click", closeContextMenu);
    }
    return () => {
      window.removeEventListener("click", closeContextMenu);
    };
  }, [isVisible, closeContextMenu]);

  return (
    isVisible &&
    createPortal(
      <ul
        className="absolute bg-white text-black border-black border-2 z-50"
        style={position}
      >
        {items.map((el, id) => (
          <li
            className="p-3 cursor-pointer hover:bg-red-300 min-w-[150px]"
            key={id}
            onClick={el.action}
          >
            {el.title}
          </li>
        ))}
      </ul>,
      document.getElementById("portalContextMenu") as HTMLElement
    )
  );
};

export default ContextMenu;
