var UpdatedQueue = /** @class */ (function () {
    function UpdatedQueue() {
        this.queue = [];
    }
    UpdatedQueue.prototype.push = function (value) {
        this.queue.push(value);
    };
    UpdatedQueue.prototype.pop = function () {
        return this.queue.pop();
    };
    return UpdatedQueue;
}());
var queue = new UpdatedQueue();
queue.push(0);
queue.push(100);
queue.pop();
queue.push(10000);
console.log(queue); // UpdatedQueue { queue: [ 0, 10000 ] }
// Throws TS error:
// queue.push('1')
