import { create } from "zustand";
import { IProjectType } from "./projectType";

const useProjectStore = create<IProjectType>((set) => ({
  projectName: "",
  setProjectName: (projectName) => set({ projectName }),
}));

export default useProjectStore;
