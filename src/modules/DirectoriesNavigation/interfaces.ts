type TBaseEntity = {
  name: string;
  id: string;
};

export type TFolder = TBaseEntity & {
  type: "folder";
  inner?: TEntity[];
};

type TFile = TBaseEntity & {
  type: "file";
  extension?: string;
  inner?: string;
};

export type TEntity = TFolder | TFile;

export type TEntityTypes = TEntity["type"];
