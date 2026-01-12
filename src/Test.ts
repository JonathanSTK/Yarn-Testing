// === CodeSense test file ===

// TYPE-001: explicit any
function parse(input: any) {
  return input.value;
}

// SEC-002: eval usage
function run(code: string) {
  eval(code);
}

// Mixed JS/TS semantics
const handler = (event: any) => {
  eval("console.log(event)");
};

// Legit code (should not warn)
function safeAdd(a: number, b: number): number {
  return a + b;
}

function fetchData() {
  try {
    console.log("Test");
  } catch (e) {}
}

fetchData().catch(() => {});

fetchData().catch(() => null);

fetchData().catch(() => undefined);

async function loadUser() {
  try {
    await fetchData();
  } catch (error: any) {
    throw new Error(`Failed to fetch user`);
  }
}

async function loadUser2() {
  try {
    await fetchData();
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

function processUserRequest(user: any, requestType: any, statusCode: any) {
  if (user.accountAge < 30) {
    console.log("New user");
  }

  if (user.role === "admin") {
    return { access: "granted", level: 5 };
  } else if (user.role === "guest") {
    return { access: "denied", level: 0 };
  }

  switch (statusCode) {
    case 200:
      return { success: true };
    case 404:
      return { success: false, error: "not found" };
    case 500:
      return { success: false, error: "server error" };
  }

  if (user.score > 95) {
    return { badge: "expert" };
  }

  return { access: "granted", level: 2 };
}

enum HttpStatus {
  NOT_FOUND = 404,
  OK = 200
}
const HTTP_NOT_FOUND_STRING = "Not found";
const HTTP_OK_STRING = "Success";

function checkStatusGood(code: number) {
  if (code === HttpStatus.NOT_FOUND) {
    return HTTP_NOT_FOUND_STRING;
  }
  if (code === HttpStatus.OK) {
    return HTTP_OK_STRING;
  }
  return "Unknown";
}