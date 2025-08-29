Answer 1: 
  getElementById: It can call only single element which is defined by id.
  getElementsByClassName: it can call/find all the elements defined by the class name.
  querySelector: In CSS selector, it finds the first matching element.
  querySelectorAll: In CSS selector, it finds all the matching elements.

Answer 2:
  to create an element we have to do is : document.createElement('element'). The element can be div, section, paragraph etc.
  then we have to select the parent item where we will insert the element by using appendChild(). " parentElement.appendChild(newElement) "

Answer 3: 
  Event Bubbling is a event that works on the targeted element it works on the parent. then it continuously works on their parent section till document.

Answer 4: 
  Event Delegation is a kind of process that we use to the parent section to trigger the child elements. It is useful because it helps to code shortly and makes our coding easy and helps to handle multiple events by giving direction one time to the parent element.

Answer 5: 
  preventDefault: it mainly stops the default behavior of the browser but doesn't affect any event
  stopPropagation: it stops the event or stop the parent to do the work. 