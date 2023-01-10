const { Client } = require("pg");

const credentials = {
  user: "tanzeel.ahmed@accenture.com",
  host: "localhost",
  database: "mydatabase",
  password: "mypassword",
  port: 81,
};

async function clientDemo() {
    const client = new Client(credentials);
    await client.connect();
    const now = await client.query("SELECT NOW()");
    await client.end();
  
    return now;
  }

  (async () => {
    const clientResult = await clientDemo();
    console.log("Time with client: " + clientResult.rows[0]["now"]);
  })();
