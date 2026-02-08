import type { App } from "@slack/bolt";

const register = (app: App) => {
  app.message(
  /(?:https?:\/\/)?(?:www\.)?instagram\.com\/\S+/i,
  async ({ message, say, logger }) => {
    try {
      const text = (message as any).text ?? "";
      const matches = text.match(
        /(?:https?:\/\/)?(?:www\.)?instagram\.com\/\S+/gi
      );
      if (!matches) return;

      const rewritten = matches.map((url) =>
        url.replace(/instagram\.com/gi, "uuinstagram.com")
      );
      await say(rewritten.join("\n"));
    } catch (err) {
      logger.error(err);
    }
  });
}

export default { register };