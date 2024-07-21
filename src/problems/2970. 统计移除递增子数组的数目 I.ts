function incremovableSubarrayCount(nums: number[]): number {
  function isIncrease(arr: number[]): boolean {
    if (arr.length <= 1) return true;
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] >= arr[i + 1]) return false;
    }
    return true;
  }
  let ans = 0;
  const sliceSet = new Set<string>();
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 1; j <= nums.length; ++j) {
      const raw = nums.slice();
      nums.splice(i, j);
      const sliced = raw.slice(i, i + j).join(",");
      console.log(sliced, nums, isIncrease(nums));
      if (isIncrease(nums) && !sliceSet.has(sliced)) {
        ans++;
        sliceSet.add(sliced);
      }
      nums = raw;
    }
  }
  return ans;
}

console.log(incremovableSubarrayCount([10, 10]));
