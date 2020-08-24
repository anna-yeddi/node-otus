// Includes a fix for known TS bug:
// https://github.com/Microsoft/TypeScript/issues/30071
interface Queue<T> {
  push: (arg0: T) => void
  pop: () => void
}

class UpdatedQueue<T> implements Queue<T> {
  private queue: Array<T> = []

  push(value: T) {
    this.queue.push(value)
  }
  pop() {
    return this.queue.pop()
  }
}

const queue = new UpdatedQueue<number>()

queue.push(0)
queue.push(100)
queue.pop()
queue.push(10000)

console.log(queue) // UpdatedQueue { queue: [ 0, 10000 ] }

// Throws TS error:
// queue.push('1')
