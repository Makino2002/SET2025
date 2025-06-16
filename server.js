import http from "http";
import url from "url";
import httpStatusCodes from "./constants/httpStatusCodes.js";
import httpMethods from "./constants/httpMethods.js";
import routes from "./constants/routes.js";
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
  if (pathname === routes.SUM && method === httpMethods.POST) {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const { num1, num2 } = JSON.parse(body);
        if (typeof num1 !== "number" || typeof num2 !== "number") {
          const error = { error: "Invalid input" };
          recordHistory(routes.SUM, { num1, num2 }, error);
          return sendJSON(res, httpStatusCodes.clientError.BAD_REQUEST, error);
        }

        const result = { sum: num1 + num2 };
        sumCallCount++;
        recordHistory(routes.SUM, { num1, num2 }, result);
        sendJSON(res, httpStatusCodes.success.OK, result);
      } catch {
        const error = { error: "Invalid input" };
        recordHistory(routes.SUM, {}, error);
        sendJSON(res, httpStatusCodes.clientError.BAD_REQUEST, error);
      }
    });
  } else if (pathname === routes.COUNT && method === httpMethods.GET) {
    const result = { totalCalls: sumCallCount };
    recordHistory(routes.COUNT, {}, result);
    sendJSON(res, httpStatusCodes.success.OK, result);
  } else if (pathname === routes.CURRENT_TIME && method === httpMethods.GET) {
    const result = { currentTimeA: new Date().toISOString() };
    recordHistory("routes.CURRENT_TIME", {}, result);
    sendJSON(res, httpStatusCodes.success.OK, result);
  } else if (pathname === routes.HISTORY && method === httpMethods.GET) {
    sendJSON(res, httpStatusCodes.success.OK, { history: apiCallHistory });
  } else {
    sendJSON(res, httpStatusCodes.clientError.NOT_FOUND, {
      error: "Not found",
    });
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
