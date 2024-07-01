import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/api/hello", (req, res) => {
  try {
    const { visitor_name } = req.query;
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
