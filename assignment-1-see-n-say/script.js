// ARRAYS
let who = ["The dog", "My friend", "A robot", "The teacher", "A cat"];
let what = ["ate", "kicked", "found", "hugged", "destroyed"];
let where = ["at school", "in the park", "at home", "in space", "on the street"];
let how = ["happily", "angrily", "sadly", "excitedly", "slowly"];
let when = ["yesterday", "today", "tomorrow", "last night", "in 2030"];



// INDEX COUNTERS
let i1=0, i2=0, i3=0, i4=0, i5=0;



// BUTTONS
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let buildBtn = document.getElementById("buildStory");



// OUTPUTS
let out1 = document.getElementById("out1");
let out2 = document.getElementById("out2");
let out3 = document.getElementById("out3");
let out4 = document.getElementById("out4");
let out5 = document.getElementById("out5");
let storyOutput = document.getElementById("storyOutput");



// BUTTON FUNCTIONS
 btn1.onclick= () => {
 out1.textContent = who[i1];
 i1 = (i1 + 1) % who.length;
   }


btn2.onclick = () =>  {
out2.textContent = what[i2];
i2 = (i2 + 1) % what.length;
}

btn3.onclick = ()=> {
out3.textContent = where[i3];
i3 = (i3 + 1) % where.length;  
} 

btn4.onclick =  () => {
out4.textContent = how[i4];
i4 = (i4 + 1) % how.length;
}

 btn5.onclick = () => {
out5.textContent = when[i5];
i5 = (i5 + 1) % when.length;
 }


 // BUILD STORY
buildBtn.onclick = () => {
 let story = `${out1.textContent} ${out2.textContent} ${out3.textContent} ${out4.textContent} ${out5.textContent}.`;
storyOutput.textContent = story;

  }