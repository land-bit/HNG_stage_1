import axios from "axios";
import express from "express";

const app = express();

const port = process.env.PORT || 3001;

app.get("/api/hello", async (req, res) => {
  try {
    const name = req.query.visitor_name;

    const ip =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-real-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress;

    const visitor = name.slice(1, name.length - 1);

    const ipResponse = await axios.get(`http://ip-api.com/json/${ip}`);

    const { city } = ipResponse.data || "new york";

    const weatherApiKey = "cf629e31eb81927869a7c6bd77d70566";

    const weatherApiResponse = await fetch.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}`
    );
    const temperature = weatherApiResponse.data.main.temp;

    res.json({
      client_ip: ip,
      location: city,
      greeting: `Hello, ${visitor} !, the temperature is ${temperature} degrees Celsius in ${city}`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.json({
    message: "welcome to the project",
    task: "add this to your url path - /api/hello?visitor_name='Your_Name'",
  });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
