const httpStatusCodes = {
  informational: {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
  },
  success: {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
  },
  redirection: {
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    NOT_MODIFIED: 304,
  },
  clientError: {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
  },
  serverError: {
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
  },
};
module.exports = httpStatusCodes;
