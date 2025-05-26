function shortcut(s1, s2) {
  // your code here
	console.log(shortcut("Amnesty", "International")); // "AI"
console.log(shortcut("Hello", "world"));           // "Hw"
console.log(shortcut("", "International"));        // ""
console.log(shortcut("Amnesty", ""));              // ""

}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
