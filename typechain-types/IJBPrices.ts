/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IJBPricesInterface extends utils.Interface {
  contractName: "IJBPrices";
  functions: {
    "addFeedFor(uint256,uint256,address)": FunctionFragment;
    "feedFor(uint256,uint256)": FunctionFragment;
    "priceFor(uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addFeedFor",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "feedFor",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "priceFor",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addFeedFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feedFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFor", data: BytesLike): Result;

  events: {
    "AddFeed(uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddFeed"): EventFragment;
}

export type AddFeedEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  { currency: BigNumber; base: BigNumber; feed: string }
>;

export type AddFeedEventFilter = TypedEventFilter<AddFeedEvent>;

export interface IJBPrices extends BaseContract {
  contractName: "IJBPrices";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IJBPricesInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addFeedFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _priceFeed: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feedFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    priceFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  addFeedFor(
    _currency: BigNumberish,
    _base: BigNumberish,
    _priceFeed: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feedFor(
    _currency: BigNumberish,
    _base: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  priceFor(
    _currency: BigNumberish,
    _base: BigNumberish,
    _decimals: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    addFeedFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _priceFeed: string,
      overrides?: CallOverrides
    ): Promise<void>;

    feedFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    priceFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "AddFeed(uint256,uint256,address)"(
      currency?: BigNumberish | null,
      base?: BigNumberish | null,
      feed?: null
    ): AddFeedEventFilter;
    AddFeed(
      currency?: BigNumberish | null,
      base?: BigNumberish | null,
      feed?: null
    ): AddFeedEventFilter;
  };

  estimateGas: {
    addFeedFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _priceFeed: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feedFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addFeedFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _priceFeed: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feedFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}