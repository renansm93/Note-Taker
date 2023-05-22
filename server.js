let wExpress = require("express");
let wCode = wExpress();
let wapiRoutes = require("./routes/apiRoutes");
let whtmlRoutes = require("./routes/htmlRoutes");
let wPort = process.env.PORT || 3001;


wCode.use(wExpress.urlencoded({ extended: true }));
wCode.use(wExpress.json());
wCode.use(wExpress.static("public"));
wCode.use("/api", wapiRoutes);
wCode.use("/", whtmlRoutes);
wCode.listen(wPort, () => console.log(`Listening on wPort: ${wPort}`));

