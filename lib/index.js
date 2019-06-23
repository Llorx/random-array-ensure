"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomEnsure = /** @class */ (function () {
    function RandomEnsure(arr, options) {
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
            this.options.ensure = Math.ceil(this.list.length * this.options.ensure);
        }
        if (this.options.ensure > Math.floor(this.list.length / 2)) {
            this.options.ensure = Math.floor(this.list.length / 2);
        }
        this.pos = 0;
        this.shuffle(true);
    }
    RandomEnsure.prototype.shuffle = function (first) {
        if (first === void 0) { first = false; }
        var safeLength = this.list.length - this.options.ensure;
        for (var i = 0; i < this.list.length; i++) {
            var el = Math.floor(i + (this.options.random() * (((!first && i < this.options.ensure) ? safeLength : this.list.length) - i)));
            var temp = this.list[i];
            this.list[i] = this.list[el];
            this.list[el] = temp;
        }
    };
    RandomEnsure.prototype.next = function () {
        var el = this.list[this.pos++];
        if (this.pos >= this.list.length) {
            this.pos = 0;
            this.shuffle();
        }
        return el;
    };
    return RandomEnsure;
}());
exports.RandomEnsure = RandomEnsure;
//# sourceMappingURL=index.js.map