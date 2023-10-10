import { TEntity } from "@/modules/DirectoriesNavigation/interfaces";

export const getEntities = (): TEntity[] => [
  {
    id: "1",
    type: "folder",
    name: "test",
    inner: [
      {
        id: "12",
        type: "folder",
        name: "test2",
        inner: [
          {
            id: "123",
            type: "folder",
            name: "test3",
          },
          {
            id: "222",
            type: "file",
            name: "test4",
            extension: "txt",
            inner: "Test text",
          },
        ],
      },
    ],
  },
];
