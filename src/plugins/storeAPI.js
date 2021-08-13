import { $api } from "@/services/index.js";

export default function(store) {
  try {
    store.$api = $api;
  } catch (e) {
    console.error(e);
  }
}
