import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/api/hello", (req, res) => {
  try {
    const { visitor_name } = req.query;
    const ip = req.connection.remoteAddress;
    console.log(ip);
    res.status(200).json({
      client_ip: "127.0.0.1", // The IP address of the requester
      location: "New York", // The city of the requester
      greeting: `Hello, ${visitor_name}!, the temperature is 11 degrees Celcius in New York`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use("/", (req, res) => {
  res.status(200).send("Welcome to my application");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// import express from "express";
// import axios from "axios";

// const app = express();
// const port = process.env.PORT
// req.socket.remoteAddress;
//   // const clientIp = "169.239.159.22";
//   let ip = req.socket.remoteAddress;
//   // ip = ip.split(":")[3];
//   const visitor = visitorName.slice(1, visitorName.length - 1);
//   const ipApiResponse = await axios.get(http://ip-api.com/json/${clientIp});
//   console.log("ip Api", ipApiResponse);
//   const { city } = ipApiResponse.data || "new york";

//   res.json({
//     ipApiResponse: ipApiResponse.data,
//     client_ip: ip,
//     location: city,
//     greeting: Hello, ${visitor}!, the temperature is 11 degrees Celsius in ${city},
//   });
//   //   try {
//   //     const ipApiResponse = await axios.get(http://ip-api.com/json/${clientIp});
//   //     const { city } = ipApiResponse.data;

//   //     const weatherApiKey = "YOUR_WEATHER_API_KEY";
//   //     const weatherApiResponse = await axios.get(
//   //       http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}
//   //     );
//   //     const temperature = weatherApiResponse.data.main.temp;

//   //     res.json({
//   //       client_ip: clientIp,
//   //       location: city,
//   //       greeting: Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${city},
//   //     });
//   //   } catch (error) {
//   //     res.status(500).json({ error: "Error fetching data" });
//   //   }
// });

// app.listen(port, () => {
//   console.log(Server running at http://localhost:${port}/);
// });
