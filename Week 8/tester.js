function runTest(name, actualValue, expectedValue)
{
    var result = actualValue === expectedValue;
    var display = document.createElement("div");

    var text = name;
    text += result ? ": Success" : ": Failed   Expected: " + expectedValue + ", Recieved: " + actualValue;
    display.innerText = text;

    display.classList.add(result ? "test-success" : "test-failure");
    display.classList.add("test-result");
    document.getElementById("testResults").appendChild(display);
}

runTest("Max of Three 1", maxOfThree(1, 2, 3), 3);
runTest("Max of Three 2", maxOfThree(100, 23, 8), 100);
runTest("Max of Three 3", maxOfThree(57, 125, 78), 125);

runTest("Binary Magnitute 1", binaryMagnitute(8), 4);
runTest("Binary Magnitute 2", binaryMagnitute(167), 8);
runTest("Binary Magnitute 3", binaryMagnitute(5748596), 23);

runTest("Middle 1", middle([1, 6, 2]), 6);
runTest("Middle 2", middle([100, 23, 42, 11, 3, 20]), 42);
runTest("Middle 3", middle(["a", "b", "c", "d"]), "b");
runTest("Middle 4", middle([10]), 10);
runTest("Middle 5", middle([]), undefined);

var testData = {
    name: "Alexander",
    street: "98 Main St",
    state: "VT",
    zipcode: "34567"
}
runTest("Format Address 1", formatAddress(testData), "Alexander, 98 Main St, VT, 34567");
testData = {
    name: "Johnson",
    street: "555 Test Ave",
    state: "TS",
    zipcode: "55555"
}
runTest("Format Address 2", formatAddress(testData), "Johnson, 555 Test Ave, TS, 55555");
testData = {
    name: "Miller",
    street: "09 138th Drive",
    state: "WA",
    zipcode: "98765"
}
runTest("Format Address 3", formatAddress(testData), "Miller, 09 138th Drive, WA, 98765");