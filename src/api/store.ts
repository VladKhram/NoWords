import { configureStore } from "@reduxjs/toolkit";
import contextMenuReducer from "@/components/ContextMenu/contextMenuStore";

export const store = configureStore({
  reducer: {
    contextMenu: contextMenuReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: ["contextMenu/showContextMenu"] },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
