// used for cross program refrences

// Properties bit masking identification
const NONE =    0x00000;
const STOP =    0x00001;
const PUSH =    0x00010;
const SINK =    0x00100;
const DEFEAT =  0x01000;
const WIN =     0x10000;

const collision = 0x0001; //IS NEEDED?

// EXAMPLE OF USE

// const TASK_1 = 0x001
// const TASK_2 = 0x010
// const TASK_3 = 0x100
// let flags = TASK_1 | TASK_2;
// if ((flags & (TASK_1 | TASK_2)) === (TASK_1 | TASK_2)) {
//   console.log("Task 1 and task 2 are active");
// }