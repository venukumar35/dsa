class rotations {
  constructor(str1, str2) {
    (this.str1 = str1), (this.str2 = str2);
  }
  rot() {
    const str1 = this.str1;
    const str2 = this.str2;

    if (str1.length !== str2.length) {
      return 0;
    }

    for (let i = 0; i < str1.length; i++) {
      console.log(str1.substring(i), str1.substring(0, i));
      const rotatedStr = str1.substring(i) + str1.substring(0, i);
      if (rotatedStr === str2) {
        return 1; // Rotation found
      }
    }

    return 0;
  }
}
const ObjectForrotations = new rotations("mightandmagic", "andmagicmigth");
console.log(ObjectForrotations.rot());
