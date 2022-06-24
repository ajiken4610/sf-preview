import { Analytics } from "@firebase/analytics";
import { defineStore } from "pinia";

export const useAnalyticsStore = defineStore("analytics", {
  state: () => ({ analytics: null as unknown as Analytics }),
  getters: {},
  actions: {},
});
