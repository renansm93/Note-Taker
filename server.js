//dependencies
let wExpress = require("express");
let wCode = wExpress();
let wapiRoutes = require("./routes/apiRoutes");
let whtmlRoutes = require("./routes/htmlRoutes");
let wPort = process.env.PORT || 3001;

// sets up express app to handel data parser, middle wear created req.body
wCode.use(wExpress.urlencoded({ extended: true }));
wCode.use(wExpress.json());
// asks express to create a route for every file in the 'public' folder and give it a '/' route
wCode.use(wExpress.static("public"));
// Use apiRoutes
wCode.use("/api", wapiRoutes);
wCode.use("/", whtmlRoutes);

// app listener - starts the server
wCode.listen(wPort, () => console.log(`Listening on wPort: ${wPort}`));

