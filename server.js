const http = require("http");
const url = require("url");

let sumCallCount = 0;
let apiCallHistory = [];

function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

function recordHistory(endpoint, input, output) {
  apiCallHistory.push({ endpoint, input, output });
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const pathname = parsedUrl.pathname;
  if (pathname === "/sum" && method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const { num1, num2 } = JSON.parse(body);
        if (typeof num1 !== "number" || typeof num2 !== "number") {
          const error = { error: "Invalid input" };
          recordHistory("/sum", { num1, num2 }, error);
          return sendJSON(res, 400, error);
        }

        const result = { sum: num1 + num2 };
        sumCallCount++;
        recordHistory("/sum", { num1, num2 }, result);
        sendJSON(res, 200, result);
      } catch {
        const error = { error: "Invalid input" };
        recordHistory("/sum", {}, error);
        sendJSON(res, 400, error);
      }
    });
  } else if (pathname === "/count" && method === "GET") {
    const result = { totalCalls: sumCallCount };
    recordHistory("/count", {}, result);
    sendJSON(res, 200, result);
  } else if (pathname === "/current-time" && method === "GET") {
    const result = { currentTime: new Date().toISOString() };
    recordHistory("/current-time", {}, result);
    sendJSON(res, 200, result);
  } else if (pathname === "/history" && method === "GET") {
    sendJSON(res, 200, { history: apiCallHistory });
  } else {
    sendJSON(res, 404, { error: "Not found" });
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
