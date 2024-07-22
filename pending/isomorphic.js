class Isomorphic {
  constructor(str1, str2) {
    (this.str1 = str1), (this.str2 = str2);
  }
  Iso() {
    let str1 = this.str1;
    let str2 = this.str2;

    let mapForstr1 = new Map();
    let mapForstr2 = new Map();
    for (let st = 0; st < str1.length; st++) {
      let datacount = mapForstr1.get(str1[st]) || 0;
      mapForstr1.set(str1[st], datacount + 1);
    }
    for (let st = 0; st < str2.length; st++) {
      let datacount = mapForstr2.get(str2[st]) || 0;
      mapForstr2.set(str2[st], datacount + 1);
    }
    for (let z = 1; z < str1.length; z++) {
      if (mapForstr1.get(str1[z]) != mapForstr2.get(str2[z])) {
        return false;
      }
    }
    console.log(mapForstr1);
    return true;
  }
}
const ObjectForIsomorphic = new Isomorphic("aabbc", "xyxyz");
console.log(ObjectForIsomorphic.Iso());
