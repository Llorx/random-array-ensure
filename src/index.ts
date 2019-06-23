export interface RandomEnsureOptions {
    random?: () => number;
    ensure?:number;
}
export class RandomEnsure<T> {
    list:T[];
    pos:number;
    options:RandomEnsureOptions;
    constructor(arr:T[], options?:RandomEnsureOptions) {
        if (!(this instanceof RandomEnsure)) {
            return new RandomEnsure(arr, options);
        }
        this.list = arr.slice();
        options = options || {};
        this.options = {
            random: options.random || Math.random.bind(Math),
            ensure: options.hasOwnProperty("ensure") ? options.ensure : 0.25
        };
        if (this.options.ensure < 1) {
            this.options.ensure = Math.ceil(this.list.length*this.options.ensure);
        }
        if (this.options.ensure > Math.floor(this.list.length/2)) {
            this.options.ensure = Math.floor(this.list.length/2);
        }
        this.pos = 0;
        this.shuffle(true);
    }
    shuffle(first = false) {
        let safeLength = this.list.length - this.options.ensure;
        for (let i = 0; i < this.list.length; i++) {
            let el = Math.floor(i + (this.options.random() * (((!first && i < this.options.ensure) ? safeLength : this.list.length)-i)));
            let temp = this.list[i];
            this.list[i] = this.list[el];
            this.list[el] = temp;
        }
    }
    next() {
        let el = this.list[this.pos++];
        if (this.pos >= this.list.length) {
            this.pos = 0;
            this.shuffle();
        }
        return el;
    }
}