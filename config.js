//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kajoxjoe@gmail.com";
global.location = "Kitale,Kenya.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "254768370578";
global.sudo = process.env.SUDO || "254768370578";
global.owner = process.env.OWNER_NUMBER || "254768370578";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUQ3aHFCQjJmTUxiTFNIbTZPZEFnQ1BVaWcrQ2lwNkl3cjhRU2d5dlpsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZitPb3FjejVzUTFJMmFoNG5pbFlFUzVId212RXVuODU1b1AxdFZyUVQxWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRVhzQkpWMW80WkpNZDVmY1RWL0VXYkdsY1h2Kzc4N09oMHZpUjFGZ25nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWUmc3TlRKVVMvOTZ5VUV6LzgxNVJoQytQbnZxMkYvb3ZRbTZzYm9naEZjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitPc3Y4dm13UStnUXpjRHpxRGRWa3NFK3MwZzZzVmRYMndBZG5xQTNyM0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpJdU1kYTY3YWVORFVVaVgxd1EvaVBDSHo2Q0VSb2RsMFpacURZQ1ZPZzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU9ZNk5ibGpOT0dJSnRNdzNjMkkrbnRlMnpSQmFOVGF4UHJqSGI3V3Jubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjlUcmRzdlIybGo5QjhxVmtETVBJYXJ5WkNTSTdCdXQwOWs5WmVpY0Robz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJoTTNZaUpXZEFRSHBlOHhyRUN4ZngwaktiTDlmWktVbmYxRkprZEpFaHpxVkp5aDJIVFZPVVZYY29XRnFWUEZUWjh1TndmRlhIVUNXQURacytvVmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMyLCJhZHZTZWNyZXRLZXkiOiJPaE03VVNBQXZnTlE2UitsMlhkVHZzbXRtcklEazlKTHYvaWN1MStVdHVzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxRElqcWZkaFNqeUJlcFVKWGtNMTNBIiwicGhvbmVJZCI6IjhlNDljYTc1LWI5MTgtNDg1ZS1iMWUzLWM1MDc1NDU1Y2MzOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWVUVNdDd3TFB3bnlVM1ZNYlVQZlp5Yk45K009In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUzYWhwbzAvTFZpUzFlTjBURldPekRTdnozYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01XYmhOY0JFT09TMjdNR0dGc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImU4SW41NldidTlqRmQ5Y3NDYllxY0NvK2lEZk1mYU1lTDZhcXYxQk8yVVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik80Rm16eFZWOFE4N3FWWVM4NUYxdUMrNTBMWFozcUwvLzlWZjJldVJBVjhlOGxCemhHb1Bpb2JUUE1nRi81MVJlYTJ6NmhIWlNSanliRE1lRlFSQkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlZjdTaHBRTDZTQ2xYUGtHSEQ3UG1qWEZnRVhsZkoyRXNIa0t6OG05cjRjbDI1Ky9mVm5xa2RpOWxUUHVUNVpPeENxUzBFMVB5NXQ2NFNGTXZxMlRqdz09In0sIm1lIjp7ImlkIjoiMjU0NzY4MzcwNTc4OjU3QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc2ODM3MDU3ODo1N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYdkNKK2VsbTd2WXhYZlhMQW0yS25BcVBvZzN6SDJqSGkrbXFyOVFUdGxFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5MDYwODM5fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "JONNIE-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Jonnie",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
