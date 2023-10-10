import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FC, useState } from "react";
import { TFolder } from "../../interfaces";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import DirectoriesList from "../DirectoriesList/DirectoriesList";

interface DirectoryExpandedItemProps {
  folder: TFolder;
  deep: number;
}

const DirectoryExpandedItem: FC<DirectoryExpandedItemProps> = ({
  folder,
  deep,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div className="directory-list-item">
        <span className="drop-shadow-custom">{folder.name}</span>
        {folder.inner && (
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-6 w-6 hover:bg-gray-100 hover:bg-opacity-20 rounded-full drop-shadow-custom"
          >
            {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        )}
      </div>
      {folder.inner && isExpanded && (
        <DirectoriesList entities={folder.inner} deep={deep} />
      )}
    </div>
  );
};

export default DirectoryExpandedItem;
