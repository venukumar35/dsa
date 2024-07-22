class SolutionFindPage {
  //Function to find minimum number of pages.
  findPages(arr, n, m) {
    function isPossible(arr, n, m, curr_min) {
      let studentsRequired = 1;
      let curr_sum = 0;
      //   console.log(curr_min);
      // iterate over all books
      for (let i = 0; i < n; i++) {
        // check if current number of pages are greater
        // than curr_min that means we will get the result
        // after mid no. of pages
        if (arr[i] > curr_min) return false;

        // count how many students are required
        // to distribute curr_min pages
        if (curr_sum + arr[i] > curr_min) {
          // increment student count
          studentsRequired++;

          // update curr_sum
          curr_sum = arr[i];

          // if students required becomes greater
          // than given no. of students,return false
          if (studentsRequired > m) return false;
        }

        // else update curr_sum
        else curr_sum += arr[i];
      }
      return true;
    }

    let sum = 0;
    let mx = arr[0];

    // return -1 if no. of books is less than
    // no. of students
    if (n < m) return -1;

    // Count total number of pages
    for (let i = 0; i < n; i++) {
      sum += arr[i];
      mx = arr[i] > mx ? arr[i] : mx;
    }

    // initialize start as 0 pages and end as
    // total pages
    let start = 0,
      end = sum;
    console.log(sum);
    let result = Number.MAX_VALUE;

    // traverse until start <= end
    while (start <= end) {
      // check if it is possible to distribute
      // books by using mid as current minimum
      let mid = Math.floor((start + end) / 2);
      // console.log(start, mid, end)
      if (isPossible(arr, n, m, mid)) {
        // if yes then find the minimum distribution
        result = Math.min(result, mid);
        console.log(mid);
        // as we are finding minimum and books
        // are sorted so reduce end = mid -1
        // that means
        end = mid - 1;
      }
      // if not possible means pages should be
      // increased so update start = mid + 1
      else start = mid + 1;
    }

    // at-last return minimum no. of  pages
    return result;
  }
}
const findArr = [15, 10, 19, 10, 5, 18, 7];
const objSolutionFindPage = new SolutionFindPage();
console.log(objSolutionFindPage.findPages(findArr, 7, 5));
