const RtmpServer = require("rtmp-server");

const rtmpServer = new RtmpServer();
const port = 1935;

rtmpServer.on("error", err => {
  throw err;
});

rtmpServer.on("client", client => {
  client.on("connect", () => {
    const { app } = client;
    console.log("checking port:", port);
  });

  client.on("play", ({ streamName }) => {
    console.log("Video source in use...", streamName);
  });

  client.on("publish", ({ streamName }) => {
    console.log("Receiving from GoPro...", streamName);
  });

  client.on("stop", () => {
    console.log("Client disconnected...");
  });
});

console.log("");
console.log("-============================================================-");
console.log("");
console.log("  _____       _____             _    _                   ___  ");
console.log(" / ____|     |  __ \\           | |  | |                 / _ \\ ");
console.log("| |  __  ___ | |__) | __ ___   | |__| | ___ _ __ ___   | (_) |");
console.log("| | |_ |/ _ \\|  ___/ '__/ _ \\  |  __  |/ _ \\ '__/ _ \\   > _ < ");
console.log("| |__| | (_) | |   | | | (_) | | |  | |  __/ | | (_) | | (_) |");
console.log(" \\_____|\\___/|_|   |_|  \\___/  |_|  |_|\\___|_|  \\___/   \\___/ ");
console.log("  _____ _                            _                        ");
console.log(" / ____| |                          (_)                       ");
console.log("| (___ | |_ _ __ ___  __ _ _ __ ___  _ _ __   __ _            ");
console.log(" \\___ \\| __| '__/ _ \\/ _` | '_ ` _ \\| | '_ \\ / _` |           ");
console.log(" ____) | |_| | |  __/ (_| | | | | | | | | | | (_| |           ");
console.log("|_____/ \\__|_|  \\___|\\__,_|_| |_| |_|_|_| |_|\\__, |           ");
console.log("                                              __/ |           ");
console.log("                                             |___/            ");
console.log("");
console.log("-============================================================-");
console.log("");
console.log("start broadcasting to rtmp://127.0.0.1:" + port + "/live");

rtmpServer.listen(port);
