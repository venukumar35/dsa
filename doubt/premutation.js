class Permutations {
  find_permutation(S) {
    const result = [];
    const chars = S.split("").sort();
    const visited = new Array(chars.length).fill(false);
    console.log(visited);
    const currentPerm = [];
    console.log(chars);
    const backtrack = () => {
      if (currentPerm.length === chars.length) {
        result.push(currentPerm.join(""));
        return;
      }

      for (let i = 0; i < chars.length; i++) {
        if (
          visited[i] ||
          (i > 0 && chars[i] === chars[i - 1] && !visited[i - 1])
        ) {
          continue;
        }
        visited[i] = true;
        currentPerm.push(chars[i]);
        backtrack();
        currentPerm.pop();
        visited[i] = false;
      }
    };

    backtrack();

    return result;
  }
}

// Example usage:
const perm = new Permutations();
const S = "ABSG";
const permutations = perm.find_permutation(S);
console.log(permutations);
