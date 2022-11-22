const {
  MIN_BRIDGE_SIZE,
  MAX_BRIDGE_SIZE,
  POSITIONS,
  RETRY_COMMAND_TYPE
} = require('./constants');

const validateBridgeSize = len => {
  if (isNaN(+len)) return false;
  if (len < MIN_BRIDGE_SIZE || len > MAX_BRIDGE_SIZE) return false;
  return true;
};

const validatePosition = position => {
  if (!POSITIONS.includes(position)) return false;
  return true;
};

const validateRetryCommand = command => {
  if (!RETRY_COMMAND_TYPE.includes(command)) return false;
  return true;
};

module.exports = { validateBridgeSize, validatePosition, validateRetryCommand };
