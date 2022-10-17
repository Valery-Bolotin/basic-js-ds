const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 const { ListNode } = require('../extensions/list-node.js');
 class Queue {
 
   getUnderlyingList() {
     
     return this.queue;
   }
 
   enqueue(value) {
     
     let newQueue = new ListNode(value)
 
     if (!this.queue) {
       this.queue = newQueue;
     }
     else {
       let a = this.queue;
       while (a) {
         if (!a.next) {
           a.next = newQueue;
           break;
         }
         a = a.next;
       }
     }
   }
 
   dequeue() {
    
     let a = this.queue.value;
     this.queue = this.queue.next;
     return a;
   }
 }

module.exports = {
  Queue
};
