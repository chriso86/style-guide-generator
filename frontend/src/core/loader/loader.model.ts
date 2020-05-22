import { BehaviorSubject, Subscription } from 'rxjs';
import { DefaultLoaderStatesEnum } from './default-loader-states.enum';

export class Loader {
    public id: number;
    public valid: boolean;

    private _states: string[] = [];
    private _state: BehaviorSubject<string> = new BehaviorSubject<string>(DefaultLoaderStatesEnum.AwaitingUserInput);
    private _subscriptions: Subscription[] = [];

    get state() {
        return this._state;
    }

    constructor(id: number, states: string[] = [], defaultState: string = '') {
        if (!id) {
            throw new Error('Failed to create loader. ID generation failed');
        }

        this.id = id;

        if (states.length) {
            this._states = states;

            if (defaultState) {
                if (states.indexOf(defaultState) < 0) {
                    throw new Error(
                        `The default state provided does not exist in the list of provided states.
                        Default state: ${defaultState}
                        Provided states: ${states}
                        `
                    );
                }

                this._state.next(defaultState);
            } else {
                this._state.next(states[0]);
            }
        } else {
            this._states = [
                DefaultLoaderStatesEnum.AwaitingUserInput,
                DefaultLoaderStatesEnum.Loading
            ];

            this._state.next(DefaultLoaderStatesEnum.Loading);
        }
    }

    setState(state: string) {
        if (this._states.indexOf(state) < 0) {
            throw new Error(`The state ${state} does not exist in the states. State list: ${JSON.stringify(this._states)}`);
        }

        if (!state) {
            throw new Error('Failed to set the loading state. State cannot be empty');
        }

        this._state.next(state);
    }

    getState(): string {
        return this._state.getValue();
    }

    subscribe(predicate: (args) => {}): Subscription {
        const subscription = this._state.subscribe(predicate);

        this._subscriptions.push(subscription);

        return subscription;
    }

    unsubscribe(subscription: Subscription): Subscription[] {
        if (subscription) {
            subscription.unsubscribe();
        }

        return this._subscriptions;
    }

    unsubscribeAll(): void {
        this._subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }

    stateIn(states: string | string[]) {
        if (Array.isArray(states)) {
            const numberMatchingStates = states.reduce((memo, value) => {
                if (this._states.indexOf(value) > -1) {
                    return memo += 1;
                }

                return memo;
            }, 0);

            if (numberMatchingStates !== states.length) {
                throw new Error(
                    `There are foreign states being provided for comparison.
                    Acceptable states: ${JSON.stringify(this._states)}
                    Provided states: ${JSON.stringify(states)}`
                );
            }

            return states.indexOf(this._state.getValue()) > -1;
        } else {
            if (this._states.indexOf(states) < 0) {
                throw new Error(
                    `The state being provided for comparison is foreign.
                    Acceptable states: ${JSON.stringify(this._states)}
                    Provided state: ${JSON.stringify(states)}
                    `
                );
            }

            return states === this._state.getValue();
        }
    }
}
