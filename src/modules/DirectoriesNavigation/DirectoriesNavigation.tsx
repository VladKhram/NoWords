"use client";

import { FC, useEffect, useState } from "react";
import DirectoriesList from "./components/DirectoriesList/DirectoriesList";
import { getEntities } from "@/api/entitiesApi";
import "./style.css";
import DirectoriesContextMenu from "./components/DirectoriesContextMenu/DirectoriesContextMenu";
import { TEntityTypes } from "./interfaces";
import { TMousePosition } from "@/components/ContextMenu/interfaces";
import { TDirectoryContextMenuEntity } from "./components/DirectoriesContextMenu/interfaces";

const DirectoriesNavigation: FC = () => {
  const entities = getEntities();

  // const [contextMenuPosition, setContextMenuPosition] =
  //   useState<null | TMousePosition>(null);
  // const [contextMenuEntity, setContextMenuEntity] =
  //   useState<null | TDirectoryContextMenuEntity>(null);

  // const getTargetEntityAttributes = (
  //   element: HTMLElement
  // ): TDirectoryContextMenuEntity | null => {
  //   const targetEntity = element.closest("li[data-id][data-type]");
  //   const id = targetEntity?.getAttribute("data-id");
  //   const type = targetEntity?.getAttribute("data-type") as TEntityTypes;

  //   if (id && type) {
  //     return {
  //       id,
  //       type,
  //     };
  //   } else {
  //     return null;
  //   }
  // };

  // const handleRightClick = (event: React.MouseEvent<HTMLElement>) => {
  //   event.preventDefault();
  //   event.stopPropagation();

  //   setContextMenuPosition({ top: event.pageY, left: event.pageX });
  //   setContextMenuEntity(
  //     getTargetEntityAttributes(event.target as HTMLElement)
  //   );
  // };

  // const closeContextMenu = () => {
  //   setContextMenuPosition(null);
  //   setContextMenuEntity(null);
  // };

  // useEffect(() => {
  //   if (contextMenuPosition && contextMenuEntity) {
  //     window.addEventListener("click", closeContextMenu);
  //     window.addEventListener("contextmenu", closeContextMenu);
  //   }
  //   return () => {
  //     window.removeEventListener("click", closeContextMenu);
  //     window.removeEventListener("contextmenu", closeContextMenu);
  //   };
  // }, [contextMenuPosition, closeContextMenu, contextMenuEntity]);

  return (
    <>
      <ul
        className="text-white w-56"
        // onContextMenu={(e) => handleRightClick(e)}
      >
        <DirectoriesList entities={entities} />
      </ul>
      {/* {contextMenuPosition && contextMenuEntity && (
        <DirectoriesContextMenu
          position={contextMenuPosition}
          type={contextMenuEntity?.type}
          id={contextMenuEntity.id}
        />
      )} */}
    </>
  );
};

export default DirectoriesNavigation;
