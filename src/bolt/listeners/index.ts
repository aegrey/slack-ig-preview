import type { App } from "@slack/bolt";
import messages from "./messages/index.js";

const registerListeners = (app: App) => {
  messages.register(app);
};

export default registerListeners;
