var relayId = Math.floor(Math.random() * 3);
window.eaglercraftXOpts = {
    demoMode: false,
    enableMinceraft: false,
    allowUpdateSvc: false,
    allowUpdateDL: false,
    checkRelaysForUpdates: false,
    container: "game_frame",
    assetsURI: "assets.epk",
    localesURI: "lang/",
    worldsDB: "worlds",
    servers: [
        {
            addr: `wss://ob.webmc.xyz`,
            name: "§6§lWebMC",
            hideAddr: true,
        },
        {
            addr: `wss://eagler.eaglesmp.org`,
            name: "§9§lEagleSMP",
            hideAddr: true,
        },
        {
            addr: `wss://2b2t.zypher.club`,
            name: "§c§l2b2t²",
            hideAddr: true,
        }
  ]
}

var q = window.location.search;
if (
    typeof q === "string" &&
    q[0] === "?" &&
    typeof window.URLSearchParams !== "undefined"
) {
    q = new window.URLSearchParams(q);
    var s = q.get("server");
    if (s) window.eaglercraftXOpts.joinServer = s;
}

window.focus();