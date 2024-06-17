/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
export type Reducer<State = any, ActionType extends Action = AnyAction> = (state: State | undefined, action: ActionType) => State;
export type Store<State = any, ActionType extends Action = AnyAction> = {
    dispatch: Dispatch<ActionType>;
    subscribe: (listener: () => void) => void;
    getState: () => State;
};
type MiddlewareAPI<State = any, ActionType extends Action = AnyAction> = {
    getState: () => State;
    dispatch: Dispatch<ActionType>;
};
export type Middleware = <State = any, ActionType extends Action = AnyAction>(storeApi: MiddlewareAPI<State, ActionType>) => (next: Dispatch<ActionType>) => Dispatch<ActionType>;
export type Action<TType = any> = {
    type: TType;
};
export type AnyAction = Action & {
    [extraProps: string]: any;
};
export type Dispatch<ActionType extends Action = AnyAction> = (action: ActionType) => void;
type StoreEnhancer = (createStoreFunction: Function) => Function;
type PreparedAction = {
    payload?: any;
    meta?: any;
};
/**
 * Creates a Redux store.
 */
export declare const createStore: <State, ActionType extends Action<any> = AnyAction>(reducer: Reducer<State, ActionType>, enhancer?: StoreEnhancer) => Store<State, ActionType>;
/**
 * Creates a store enhancer which applies middleware to all dispatched
 * actions.
 */
export declare const applyMiddleware: (...middlewares: Middleware[]) => StoreEnhancer;
/**
 * Combines reducers by running them in their own object namespaces as
 * defined in reducersObj paramter.
 *
 * Main difference from redux/combineReducers is that it preserves keys
 * in the state that are not present in the reducers object. This function
 * is also more flexible than the redux counterpart.
 */
export declare const combineReducers: (reducersObj: Record<string, Reducer>) => Reducer;
/**
 * A utility function to create an action creator for the given action
 * type string. The action creator accepts a single argument, which will
 * be included in the action object as a field called payload. The action
 * creator function will also have its toString() overriden so that it
 * returns the action type, allowing it to be used in reducer logic that
 * is looking for that action type.
 *
 * @param {string} type The action type to use for created actions.
 * @param {any} prepare (optional) a method that takes any number of arguments
 * and returns { payload } or { payload, meta }. If this is given, the
 * resulting action creator will pass it's arguments to this method to
 * calculate payload & meta.
 *
 * @public
 */
export declare const createAction: <TAction extends string>(type: TAction, prepare?: (...args: any[]) => PreparedAction) => {
    (...args: any[]): Action<TAction> & PreparedAction;
    toString(): TAction;
    type: TAction;
    match(action: any): boolean;
};
export {};
