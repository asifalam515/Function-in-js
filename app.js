

function binarySearch(arr,target){
    start=0;
    end=arr.length-1;
    while(arr.length>=target ){
        var mid=start+(end-start)/2;
        if(arr[mid]==target){
            return mid;
        } if(arr[mid]>target){
            end=mid-1;
        }
        if(arr[mid]<target){
            start=mid+1;
        }
    }
}
return -1;
var arr=[3,5,6,87,454]
var target=5;
const ans=binarySearch(arr,target);
console.log(ans)