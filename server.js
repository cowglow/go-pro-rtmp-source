const RtmpServer = require("rtmp-server");

const rtmpServer = new RtmpServer();
const port = 1935;

console.log("Start the RTMP streaming on your");
console.log(" ______       ______        ");
console.log("/ _____|     |  __  \\         ");
console.log("| |  __  ___ | |__) |_______  ");
console.log("| | |_ |/ _ \\|  ___/ '__/ _ \\");
console.log("| |__| | (_) | |   | | | (_) |");
console.log("|______|\\___/|_|   |_|  \\___/ ");
console.log("                             ");
console.log("     Hero 8 !!               ");
console.log(" rtmp:[local.ip]:" + port + "/live");

rtmpServer.on("error", (err) => {
  throw err;
});

rtmpServer.on("client", (client) => {
  client.on("connect", () => {
    console.log("connect", client.app);
  });

  client.on("play", ({ streamName }) => {
    console.log("PLAY", streamName);
  });

  client.on("publish", ({ streamName }) => {
    console.log("PUBLISH", streamName);
  });

  client.on("stop", () => {
    console.log("client disconnected");
  });
});

rtmpServer.listen(port);
