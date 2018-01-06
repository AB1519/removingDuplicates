function LinkedList(){
  this.head= null;
  this.tail=null;
}

function Node(value, next, prev){
  this.value= value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var node1=new Node(value,this.head,null);
  if(this.head) this.head = node1;
  else this.tail = node1;
  this.head = node1
}

LinkedList.prototype.removeRepeat = function(){
  var currentNode = this.head;
  var a = [];
  while(currentNode){
      if(a.indexOf(currentNode.value)== -1)  a.push(currentNode.value)
      currentNode = currentNode.next;
  }
  return a;
}

var LL= new LinkedList();
LL.addToHead(10)
LL.addToHead(20)
LL.addToHead(30)
LL.addToHead(10)
LL.addToHead(50)
LL.addToHead(60)
LL.addToHead(100)


console.log(LL.removeRepeat())
