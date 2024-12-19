class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return index * 2 + 1;
  }

  rightChild(index) {
    return index * 2 + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value, index) {
    this.heap.push({ value: value, index: index });
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    while (index > 0) {
      const parent = this.parent(index);
      if (this.heap[parent].value === this.heap[index].value) {
        if (this.heap[parent].index > this.heap[index].index) {
          this.swap(index, parent);
          index = parent;
          continue;
        }
      }
      if (this.heap[parent].value > this.heap[index].value) {
        this.swap(index, parent);
        index = parent;
      } else {
        break;
      }
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }

    return min;
  }

  heapifyDown(index) {
    let smallest = index;
    const left = this.leftChild(index);
    const right = this.rightChild(index);

    if (
      left < this.heap.length &&
      (this.heap[left].value < this.heap[smallest].value ||
        (this.heap[left].value === this.heap[smallest].value &&
          this.heap[left].index < this.heap[smallest].index))
    ) {
      smallest = left;
    }
    if (
      right < this.heap.length &&
      (this.heap[right].value < this.heap[smallest].value ||
        (this.heap[right].value === this.heap[smallest].value &&
          this.heap[right].index < this.heap[smallest].index))
    ) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }
}

var getFinalState = function (nums, k, multiplier) {
  const minHeap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    minHeap.insert(nums[i], i);
  }
  for (let i = 0; i < k; i++) {
    const min = minHeap.extractMin();
    const newValue = min.value * multiplier;
    nums[min.index] = min.value * multiplier;
    minHeap.insert(newValue, min.index);
  }

  return nums;
};

console.log(getFinalState([2, 1, 3, 5, 6], 5, 2));
