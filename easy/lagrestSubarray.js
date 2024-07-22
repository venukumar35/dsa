class Solution00 {
  maxLen(arr, n) {
    let negativeArray = [];

    let postiveArray = [];

    let finalArray = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        negativeArray.push(arr[i]);
      }
      if (arr[i] > 0) {
        postiveArray.push(arr[i]);
      }
    }
    console.log(negativeArray);
    const postveArrayData = postiveArray.sort((a, b) => {
      return a - b;
    });

    let count = 0;
    for (let x = 0; x < negativeArray.length; x++) {
      let posttivityOfNumberOfArray = Math.abs(negativeArray[x]);
      for (let z = 0; z < postveArrayData.length; z++) {
        if (postveArrayData[z] == posttivityOfNumberOfArray) {
          // console.log(postveArrayData[z], posttivityOfNumberOfArray);
          finalArray.push(postveArrayData[z]);
          finalArray.push(negativeArray[x]);
        } else {
          for (let y = z; y < postveArrayData.length; y++) {
            if (y === z) {
              continue;
            }

            count = postveArrayData[z] + postveArrayData[y];

            if (count == posttivityOfNumberOfArray) {
              console.log(
                count,
                posttivityOfNumberOfArray,
                postveArrayData[z],
                postveArrayData[y]
              );
              finalArray.push(postveArrayData[z]);
              finalArray.push(postveArrayData[y]);
              finalArray.push(negativeArray[x]);
            }
            //break;
            if (count > posttivityOfNumberOfArray) {
              count = 0;
            }
          }
        }
      }
    }
    console.log(finalArray.length);
  }
}
const sampleArray = [
  -776, 794, 387, -648, 363, 691, 764, -539, -171, -210, -566, 783, -861, 68,
  930, -21, -68, 394, -10, -228, 422, 785, 199, -314, -412, -90, -955, 863,
  -995, 306, 85, 337, 847, 314, 125, 583, 815, 435, -42, -86, -275, -787, -402,
  755, 933, -675, -738, -225, -93, 796, -433, -466, 98, -316, -651, -300, -285,
  866, 445, 441, 32, 98, 482, 710, 568, -496, 587, 307, 220, -527, 733, 504,
  271, -707, 341, 797, 619, 847, 922, 380, -763, -840, -192, -33,
];
const ObjectForAlternative00 = new Solution00();
console.log(ObjectForAlternative00.maxLen(sampleArray, 9));
