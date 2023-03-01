const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk.js");

describe("deterministicPartitionKey", () => {
  test("returns trivial partition key if event is undefined", () => {
    expect(deterministicPartitionKey(undefined)).toBe("0");
  });

  test("returns trivial partition key if event has no partition key", () => {
    expect(deterministicPartitionKey({})).toBe("0");
  });

  test("returns partition key from event if present", () => {
    const event = { partitionKey: "my-key" };
    expect(deterministicPartitionKey(event)).toBe("my-key");
  });

  test("returns hash of event data if partition key not present", () => {
    const event = { data: "hello world" };
    const expectedHash = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    expect(deterministicPartitionKey(event)).toBe(expectedHash);
  });

  test("returns hash of partition key if length is greater than 256", () => {
    const partitionKey = "a".repeat(257);
    const expectedHash = crypto
      .createHash("sha3-512")
      .update(partitionKey)
      .digest("hex");
    expect(deterministicPartitionKey({ partitionKey })).toBe(expectedHash);
  });

  test("returns stringified version of non-string partition key", () => {
    const event = { partitionKey: 123 };
    expect(deterministicPartitionKey(event)).toBe(
      JSON.stringify(event.partitionKey)
    );
  });
});
