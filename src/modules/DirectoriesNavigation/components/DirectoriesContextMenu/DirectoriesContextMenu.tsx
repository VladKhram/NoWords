import {
  TContextMenuItem,
  TMousePosition,
} from "@/components/ContextMenu/interfaces";
import { FC } from "react";
import ContextMenu from "@/components/ContextMenu/ContextMenu";
import { TDirectoryContextMenuEntity } from "./interfaces";

interface DirectoriesContextMenuProps extends TDirectoryContextMenuEntity {
  position: TMousePosition;
}

const DirectoriesContextMenu: FC<DirectoriesContextMenuProps> = ({
  position,
  id,
  type,
}) => {
  const test: TContextMenuItem[] = [
    {
      title: "Insert",
      handleClick: () => {
        console.log(id);
      },
    },
    {
      title: "Copy",
      handleClick: () => {
        console.log(type);
      },
    },
  ];
  return <ContextMenu position={position} items={test} />;
};

export default DirectoriesContextMenu;
