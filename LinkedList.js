class LinkedList {
    constructor(val, next) {
        this.value = val;
        this.next = next;
    }

    log() {
        console.log(JSON.stringify(this))
    }

    findTheKthElementFromLastRecursion(node, k) {
        if (node === undefined) {
            return 0;
        }
        let i = (this.findTheKthElementFromLastRecursion(node.next, k)) + 1;
        if (i === k) {
            console.log({ node })
        } else return i
    }

    findTheKthElementFromLastIteration(node, k) {
        let fastPointer = node;
        let slowPointer = node;

        let count = 0;
        while (count < k) {
            if (fastPointer)
                fastPointer = fastPointer.next;
            count++;
        }

        while (fastPointer !== undefined) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next;
        }
        return slowPointer;
    }

}


const l1 = new LinkedList(0)
const l2 = new LinkedList(1, l1)
const l3 = new LinkedList(2, l2)
const l4 = new LinkedList(4, l3)
const l5 = new LinkedList(5, l4)

l5.log();
console.log(l5.findTheKthElementFromLastIteration(l5, 4))
