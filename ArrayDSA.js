//1.Majority Element in an Array

const majorityElement = function(nums){
    const ht = {};
    for(const num of nums){
        ht[num]= ht[num]+1 ||1;
    }
    for(const key in ht){
        if(ht[key]> Math.floor(nums.length/2)){
            return key;
        }
    }
}

const nums = [1,2,2,2,3,2,2,4];
console.log(majorityElement(nums), nums); //[ '2', Array(8) [ 1, 2, 2, 2, 3, 2, 2, 4 ] ]


// 2.Remove Duplicates from Sorted Array

const removeDuplicates = function(nums1){
    const numsLength = nums1.length;

    if(numsLength === 0){
        return 0;
    }

    let j=1;
    for(let i=0; i<numsLength-1; i++){
        if(nums1[i]  !== nums1[i+1]){
            nums1[j] = nums1[i+1];
            j++;
        }

    }
    return j;
  
}

const nums1 = [1,1,2];
console.log(removeDuplicates(nums1),nums1);  //[ 2, [ 1, 2, 2 ] ]



//3.Squares of a Sorted Array

const squareSortedArray = function(nums3){
    let left =0,
    right =  nums3.length-1,
    result =[],
    position = nums3.length-1

    while(left <= right){
        if(nums3[left]**2 > nums3[right]**2){
            result[position] = nums3[left]**2;
            position--
            left++;

        } else {
            result[position] = nums3[right]**2;
            position--
            right--;
        }
    }
    return result;

}

const nums3 = [-4,-1,0,3,10]
console.log(squareSortedArray(nums3),nums3); //[ [ 0, 1, 9, 16, 100 ], [ -4, -1, 0, 3, 10 ] ]



//4.Find Pivot Index
const pivotIndex = function(nums4){
    let totalSum =0,
        leftSum=0

    nums4.forEach((e) =>{
        totalSum+=e
    })
    for(let i=0; i<nums4.length; i++){
        if(totalSum-leftSum-nums4[i] === leftSum){
            return i
        }
        leftSum+=nums4[i]
    }
    return -1
}

const nums4 = [1,7,3,6,5,6]
console.log(  "Pivotindex:",pivotIndex(nums4), nums4); //[ 'Pivotindex:', 3, Array(6) [ 1, 7, 3, 6, 5, 6 ] ]


//5.MOVE ZEROS AT THE END OF ARRAY
const moveZeroes = function(nums5){
    let nonZero = 0;
    for(let i=0; i<nums5.length;i++){
        if(nums5[i]!==0){
            [nums[nonZero], nums[i]] = [nums5[i], nums5[nonZero]]
             nonZero++;
        }
    }
}
console.log("moveZeros:", nums5);  //[ 1, 3, 12, 0, 0 ]




//6.Remove ELement
const removeElements = function(nums6, val){
    const result = nums6.filter((n)=>n!==val);
    console.log(result);
    return result
   
    }
    const nums6 =[1,2,2,1]
    const val =1
    console.log(removeElements(nums6, val)); //[ 2, 2 ] 

    //or other solution

    const removeElements1 = function(nums7, val1){
        let left =0;
        for(let right=0; right<nums7.lengthl; right++ ){
            if(nums7[right]!== val1){
                nums7[left] = nums7[right];
                left++;

            }
        }
        return left
    }
    const nums7 =[1,2,2,1]
    const val1 =2
    console.log(removeElements(nums6, val1));    //[1,1]

    //Max Consecutive Ones
    const findMaxConsecutive = function(nums8){
        return Math.max(...nums8.join('').split('0').map((substring) => substring.length))
    }
    const nums8 = [1,1,0,1,1,1]
    console.log(findMaxConsecutive(nums8)); //3

    // Sum of all natural numbers from 1 to n
const  sunOfAllNaturalNumbers = function(nums9){
    return (nums9*(nums9+1))/2
}
const nums9 = 5
console.log(sunOfAllNaturalNumbers(nums9)); //15