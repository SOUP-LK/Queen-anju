//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0szZGJzZDVzamZOcGl1NzFnYUxQMHhTaUJ0Mk9PUy9NdmdTRHhJYTNXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnd1Tzk4SXFRN2tYQmpHR2hPT1B4T003Wmxob21VMEsvK0VwYnJLRk5Gdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQkxuN1BGekZIcEUwMTR5VlJGVHhKYnk0dTlmaURIOWp5VjJ4MjRBVms0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqdjNFZmduUFBkd3FOU0FOQkZGaE9OQWQrTVpFK202RUNqOC9jelNPdmc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLaGJWd3BkQm1sTVg3V3Zna0wrSkZwekhPRDJ4WTJEelFSMWwrbm90SHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAwL09wQUNKaEZod0RMeE1yaUs2am1rMEtOemlTVWMxZnRlUUpiTTNiakE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5rVklvbUZJdEgzbFNrU0lKT3VKZXpWU3N4OHRYYU9TR1BpNWlucEFtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTVDa0svRjE2MkFEaWFFYkcxcHVmSFdaYUpzT3M2cDlBcW9MRSs2SWUzTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZBbWx1eENKUy9IS3kvdkhsQXJ2Y3BpRkQ2UGJBNjlsOTJ0YzNoMXFSWnNPRExqRFh5SE50MktxM3gwQlRnNjZHZGxRcnE2eFh1ZVpGVUxHRzU5OEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcxLCJhZHZTZWNyZXRLZXkiOiJBMXVUb0VQcG5IWlBtMW90enovbEJoek9abU9admU2THFtb3YwcXVIeFhnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc1NzAwODE1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI5ODcyOUU2M0Q3RkQyMjNGODg5REM1QjREMTJDQjEyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTAxMjU3OTN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc1NzAwODE1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQxRDVERkY1QjNGMEM5MTg5OEQxMUQ3Q0M2RDI4NkEzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTAxMjU3OTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IllUMjZHLUwtUUE2R0V3bTRhT2ZqcXciLCJwaG9uZUlkIjoiY2M0YWE1ZDgtNjIzNS00YjRmLTkzMjUtZGE1OGJiNGQ4ZGVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxibkYzYUlxS1FxNlAvVDlZSFJWcnlVWFZPTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2WTd4Y2UzR2VhckJxdXpNL3hRWkdrVTBaK0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN1JIOVdCMVciLCJtZSI6eyJpZCI6Ijk0Nzc1NzAwODE1OjEyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE2NDE1NjkyNTQyMDg3OjEyQGxpZCIsIm5hbWUiOiJETyBOT1QgRk9MTE9XIE1FICEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tIMXIrb0ZFTktadzhJR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkUwWHViY1lHVmV5QTNXem12RXE2UXg5azhhUHU1UVhCSHlCbXNNaGI1Q0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjllSEQ1K2dTVEl3cjJrU2VoTmNrVS94N2ZVMGlLZTNXUWhmdlV1dW40c29wM21qeUEyVDh6QXNIaEkyZlRMc0dReW0yWHMvRDYxNkNWMHVLSUc5dEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyZ3c1MXA2MGprUThKOURXVGwxS3JzbzVIM3p0MWpsTzJneFZoZW1XelY3R2RjMDhQSW9XLzhEUTRxeTNTYkNIVktSenpqbkhsZy9QTkFmeDYyY3JEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc1NzAwODE1OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJORjdtM0dCbFhzZ04xczVyeEt1a01mWlBHajd1VUZ3UjhnWnJESVcrUWgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBTUlDdz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDEyNTc5MSwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPU2sifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94775700815",
  PASSWORD: 
    process.env.PASSWORD || "12345dilisha",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
