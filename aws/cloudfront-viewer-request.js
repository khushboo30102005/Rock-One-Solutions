function handler(event) {
  var request = event.request;
  var host = request.headers.host.value.toLowerCase();
  var uri = request.uri;
  var shouldRedirect = false;

  if (uri === "/comments/feed" || uri === "/comments/feed/") {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: { value: "https://rockonesolutions.com/" }
      }
    };
  }

  if (
    uri === "/services/custom-web-design" ||
    uri === "/services/custom-web-design/"
  ) {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: {
          value: "https://rockonesolutions.com/services/custom-website-development/"
        }
      }
    };
  }

  if (host === "www.rockonesolutions.com") {
    host = "rockonesolutions.com";
    shouldRedirect = true;
  }

  if (uri.length > 1 && !uri.includes(".") && !uri.endsWith("/")) {
    uri += "/";
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: { value: "https://" + host + uri }
      }
    };
  }

  if (uri.endsWith("/")) {
    request.uri += "index.html";
  } else if (!uri.includes(".")) {
    request.uri += "/index.html";
  }

  return request;
}
