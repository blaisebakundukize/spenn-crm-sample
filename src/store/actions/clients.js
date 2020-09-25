export const RECEIVE_CLIENT_MOVEMENTS = "RECEIVE_CLIENT_MOVEMENTS";

export const receiveClientMovements = (clientMovements) => ({
  type: RECEIVE_CLIENT_MOVEMENTS,
  clientMovements,
});
