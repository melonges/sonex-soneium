import {
  Burn as BurnEvent,
  Mint as MintEvent,
  Swap as SwapEvent,
} from "../generated/UniswapV3Pool/UniswapV3Pool";
import { Burn, Mint, Swap } from "../generated/schema";

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.owner = event.params.owner;
  entity.tickLower = event.params.tickLower;
  entity.tickUpper = event.params.tickUpper;
  entity.amount = event.params.amount;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.sender = event.params.sender;
  entity.owner = event.params.owner;
  entity.tickLower = event.params.tickLower;
  entity.tickUpper = event.params.tickUpper;
  entity.amount = event.params.amount;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.sender = event.params.sender;
  entity.recipient = event.params.recipient;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;
  entity.sqrtPriceX96 = event.params.sqrtPriceX96;
  entity.liquidity = event.params.liquidity;
  entity.tick = event.params.tick;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.tx_sender = event.transaction.from;
  entity.save();
}

// export function handleSwapCall(call: HandleSwapCall): void {
//   let id = call.transaction.hash;
//   let transaction = new Transaction(id);
//   transaction.displayName = call.inputs._displayName;
//   transaction.imageUrl = call.inputs._imageUrl;
//   transaction.save();
// }
