import { FC } from "react";
import { getGreenBGColor } from "../../helpers/getGreenBGColor";
import { TEntity } from "../../interfaces";
import DirectoryExpandedItem from "../DirectoryExpandedItem/DirectoryExpandedItem";
import useDirectoriesContextMenu from "../DirectoriesContextMenu/useDirectoriesContextMenu";

interface DirectoriesListProps {
  entities: TEntity[];
  deep?: number;
}

const DirectoriesList: FC<DirectoriesListProps> = ({ entities, deep = 0 }) => {
  const { openContextMenu, closeContextMenu } = useDirectoriesContextMenu();

  const handleRightClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    openContextMenu({ left: event.pageX, top: event.pageY });
  };

  return (
    <ul className={`${getGreenBGColor(deep)}`}>
      {entities.map((el) => (
        <li
          key={el.id}
          data-id={el.id}
          data-type={el.type}
          onContextMenu={handleRightClick}
        >
          {el.type === "file" ? (
            <div className="directory-list-item">
              <span className="drop-shadow-custom">
                {`${el.name}.${el.extension}`}
              </span>
            </div>
          ) : (
            <DirectoryExpandedItem folder={el} deep={++deep} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default DirectoriesList;
