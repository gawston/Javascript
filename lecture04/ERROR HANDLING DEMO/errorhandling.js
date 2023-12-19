function criticalCode() {
    throw "throwing an exception";
}

function logError(theException) {
    console.log(theException);
}

// Try..Catch
console.log("\n********Try..Catch********\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

// Thorwing in Try..Catch
console.log("\n********Throwing in try..Catch********\n")

try {
    throw "An exception that is thrown every time";
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

// Try..CAtch..Finally
console.log("\n********Try..Catch..Finally********\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
} finally {
    console.log("code that a;ways will run");
}

function hello() {
    console.log("\n********Throwing Exception********\n");
}