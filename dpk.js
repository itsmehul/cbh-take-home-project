const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;

  // If the event has a partition key, use it.
  if (event && event.partitionKey) {
    candidate = String(event.partitionKey);
    // If the event has no partition key, use a hash of the event data.
  } else if (event && Object.keys(event).length !== 0) {
    candidate = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
  }

  // If the partition key is too long, use a hash of it.
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};
