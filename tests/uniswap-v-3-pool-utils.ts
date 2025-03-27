import { newMockEvent } from "matchstick-as";
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts";
import { Swap } from "../generated/UniswapV3Pool/UniswapV3Pool";

export function createSwapEvent(
  sender: Address,
  amount0: BigInt,
  amount1: BigInt,
): Swap {
  let swapEvent = changetype<Swap>(newMockEvent());

  swapEvent.parameters = new Array();

  swapEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender)),
  );
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "amount0",
      ethereum.Value.fromSignedBigInt(amount0),
    ),
  );
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "amount1",
      ethereum.Value.fromSignedBigInt(amount1),
    ),
  );

  return swapEvent;
}
