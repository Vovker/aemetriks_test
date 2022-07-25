export interface CartsTyped {
  id: number;
  value: string;
  isSelected: boolean;
}

type CartsState = {
  carts: CartsTyped[];
  isLoading: boolean;
};

type CartsAction = {
  type: string;
  payload: CartsTyped[];
}

type DispatchType = (args: CartsAction) => CartsAction;

export type {
  CartsState,
  CartsAction,
  DispatchType,
}
