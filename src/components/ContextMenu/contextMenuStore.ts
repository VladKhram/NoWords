import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TContextMenuItem, TMousePosition } from "./interfaces";

interface ContextMenuState {
  isVisible: boolean;
  position: TMousePosition;
  items: TContextMenuItem[];
}

const initialState: ContextMenuState = {
  isVisible: false,
  position: { left: 0, top: 0 },
  items: [],
};

const contextMenuSlice = createSlice({
  name: "contextMenu",
  initialState,
  reducers: {
    showContextMenu: (
      state,
      action: PayloadAction<{
        position: TMousePosition;
        items: TContextMenuItem[];
      }>
    ) => {
      console.log(action);
      state.isVisible = true;
      state.position = action.payload.position;
      state.items = action.payload.items;
    },
    hideContextMenu: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showContextMenu, hideContextMenu } = contextMenuSlice.actions;
export default contextMenuSlice.reducer;
