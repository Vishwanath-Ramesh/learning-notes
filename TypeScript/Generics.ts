class List<T> {
    private lists: T[];

    addItem(item: T) {
        this.lists.push(item);
    }

    getLists(): T[] {
        return this.lists;
    }
}

class Pizzas {
    constructor(private name: string, private price: number){

    }
}

const pizzas = new List<Pizzas>();
pizzas.addItem(new Pizzas('pepparoni', 25));
const lists = pizzas.getLists();