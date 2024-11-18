class CounterService {
    private counter = 0;

    get(): number {
        return this.counter;
    }

    increase(amount: number): number {
        this.counter += amount;
        return this.counter;
    }
}

export const counterService = new CounterService();