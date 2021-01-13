/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 */

class DoublyLinkedList {
    constructor(value, next = null, prev = null) {
        this.val = value
        this.next = next
        this.prev = prev
    }

    add(node) {
        let oldNext = this.next;

        if (oldNext) {
            oldNext.prev = node;
            node.next = oldNext;
        }
        this.next = node;
        node.prev = this;
    }

    traverseNext() {
        console.log('-----------')
        let clone = this;
        while (clone !== null) {
            console.log(clone.val)
            clone = clone.next
        }
    }

    traversePrev() {
        console.log('-----------')
        let clone = this;
        while (clone !== null) {
            console.log(clone.val)
            clone = clone.prev
        }
    }

    remove() {
        let prev = this.prev;
        let next = this.next;
        if (next)
            next.prev = prev;
        if (prev)
            prev.next = next;
        this.next = null;
        this.prev = null;
    }
}


class LRUCache {

    constructor(capacity) {
        this.capacity = capacity;
        this.head = new DoublyLinkedList(0);
        this.tail = new DoublyLinkedList(0);

        this.tail.prev = this.head; // Connect the head and tail dummy nodes
        this.head.next = this.tail;

        this.map = new Map();
    }

    moveToHead(node) {
        node.remove(); // Remove the head whereever it is in the DLL and add to head(next to head)
        this.head.add(node);
    }

    get(key) {
        if (this.map.has(key)) {
            let node = this.map.get(key)
            this.moveToHead(node)
            // console.log({ val: node.val })
            return node.val.value;
        }
        return -1;
    }

    put(key, value) {
        if (this.map.has(key)) {
            let node = this.map.get(key) // if we are just updating the value of the existing key, then just delete
            node.remove();
            this.map.delete(key)
        }
        const newNode = new DoublyLinkedList({ key, value })
        this.map.set(key, newNode);
        this.head.add(newNode)
        if (this.map.size > this.capacity) {
            let lru = this.tail.prev; // Pick the tail prev and remove from DLL and Map
            lru.remove();
            this.map.delete(lru.val.key)
        }
    }
}

