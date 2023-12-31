const { getHistoricalEvents } = require("c:/Test_beekin/historical-events-app/historicalevents");

// Test input validation
test("Invalid date and time format", () => {
  expect(() => getHistoricalEvents("2021-13-01")).toThrow("Invalid date and time format");
});

test("Invalid maxLength value", () => {
  expect(() => getHistoricalEvents("1776-07-04", -1)).toThrow("Invalid maxLength value");
});

// Test data accuracy
test("Get historical events for a specific date", () => {
  const events = getHistoricalEvents("1776-07-04");
  expect(events).toEqual(["Declaration of Independence"]);
});

test("Get historical events for a specific date and time", () => {
  const events = getHistoricalEvents("1969-07-20T20:17:40");
  expect(events).toEqual(["Apollo 11 Moon Landing"]);
}); 

// Test boundary testing 
test("Get historical events for a date close to a historical event", () => {
  const events = getHistoricalEvents("1863-11-18");
  expect(events).toEqual(["Gettysburg Address"]);
});

test("Get historical events for a future date", () => {
  expect(() => getHistoricalEvents("2100-01-01")).toThrow(
    "No historical events found for the specified date and time"
  );
});

// Test error handling
test("No historical events found", () => {
  expect(() => getHistoricalEvents("1000-01-01")).toThrow(
    "No historical events found for the specified date and time"
  );
});