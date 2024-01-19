function findAllPeakElements(nums) {
    const peakindex = [];

    if(nums.length == 1) {
        peakindex.push(0);
        return peakindex;
    }

    if (nums[0] > nums[1]) {
        peakindex.push(0);
    }

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            peakindex.push(i);
        }
    }
    
    if (nums[nums.length - 1] > nums[nums.length - 2]) {
        peakindex.push(nums.length - 1);
    }

    return peakindex;
}

// Test the function
const nums1 = [3, 2, 3, 1];
const nums2 = [1, 2, 1, 3, 5, 6, 4];
const nums3 = [1, 2, 1, 4, 5, 6, 4, 7];

console.log(`Peak element index of : ${nums1} -> ${findAllPeakElements(nums1)}`);
console.log(`Peak element index of : ${nums2} -> ${findAllPeakElements(nums2)}`);
console.log(`Peak element index of : ${nums3} -> ${findAllPeakElements(nums3)}`);

// Output :
// Peak element index of : 3,2,3,1 -> 0,2
// Peak element index of : 1,2,1,3,5,6,4 -> 1,5
// Peak element index of : 1,2,1,4,5,6,4,7 -> 1,5,7