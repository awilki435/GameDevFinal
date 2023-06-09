// used for cross program refrences

const CANVAS_WIDTH = 1000;

// Properties bit masking identification
const NONE =    00000000;
const STOP =    00000001;
const PUSH =    00000010;
const SINK =    00000100;
const DEFEAT =  00001000;
const WIN =     00010000;
const YOU =     00100000;
const STOP_PERSISTANCE =     01000000;
const PUSH_PERSISTANCE =     10000000;


// TYPES //

// const BABA =    1x00000;
// big blue
// flag
// floor
// hedge
// lava
// rock
// wall
// water
// word


// WORDS //

// word - obj - baba
// word - obj - flag
// word - obj - lava
// word - obj - rock
// word - obj - wall
// word - obj - water
// word - verb - is 
// word - noun - kill
// word - noun - push
// word - noun - sink
// word - noun - stop
// word - noun - win
// word - noun - you


// EXAMPLE OF USE

// const TASK_1 = 0x001
// const TASK_2 = 0x010
// const TASK_3 = 0x100
// let flags = TASK_1 | TASK_2;
// if ((flags & (TASK_1 | TASK_2)) === (TASK_1 | TASK_2)) {
//   console.log("Task 1 and task 2 are active");
// }