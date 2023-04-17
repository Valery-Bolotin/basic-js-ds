const {
	NotImplementedError
} = require('../extensions/index.js');

const {
	Node
} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

	constructor() {
		this.crown = null;
	}

	root() {
		return this.crown;
	}

	add(data) {
		let newNode = new Node(data);
		if (!this.crown) return this.crown = newNode;

		let currentNode = this.crown;

		function insertNode(node, data) {
			if (data < node.data) {
				if (!node.left) return node.left = newNode;
				insertNode(node.left, data);
			} else {
				if (!node.right) return node.right = newNode;
				insertNode(node.right, data);
			}
		}
		currentNode = insertNode(currentNode, data)
	}

	has(data) {
		function findNode(node, data) {
			if (!node) return false;
			if (node.data == data) return true;
			return (data < node.data) ? findNode(node.left, data) : findNode(node.right, data);
		}
		return findNode(this.crown, data);
	}

	find(data) {
		function findNode(node, data) {
			if (!node) return null;
			if (node.data == data) return node;
			return (data < node.data) ? findNode(node.left, data) : findNode(node.right, data);
		}
		return findNode(this.crown, data);

	}
	min() {
		if (!this.crown) {
			return;
		}

		let node = this.crown;
		while (node.left) {
			node = node.left;
		}

		return node.data;
	}

	max() {
		if (!this.crown) {
			return;
		}

		let node = this.crown;
		while (node.right) {
			node = node.right;
		}

		return node.data;
	}
}

module.exports = {
	BinarySearchTree
};