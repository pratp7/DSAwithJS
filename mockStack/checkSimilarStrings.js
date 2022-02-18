function findFreq(str) {
  let map = new Map();

  for (let i of str) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }
  return map;
}

function mapIterator(mapFreq, map2Freq, k) {
  let mapSet = new Set();

  for (let i of mapFreq.keys()) {
    if (!map2Freq.has(i)) {
      map2Freq.set(i, 0);
    }

    if (Math.abs(mapFreq.get(i) - map2Freq.get(i)) <= k) {
      mapSet.add("Yes");
    } else {
      mapSet.add("No");
    }
  }
  return mapSet;
}

function similarString(n, s1, m, s2, k) {
  let set = new Set();

  let s1Freq = findFreq(s1);
  let s2Freq = findFreq(s2);

  //     for(let i of s1Freq.keys()){
  //      if(!(s2Freq.has(i))){
  //       s2Freq.set(i, 0)
  //      }
  //     if(Math.abs(s1Freq.get(i)-s2Freq.get(i))<=k){

  //       set.add("Yes")
  //  }else{
  //    set.add("No")
  //  }

  // }
  //     for(let i of s2Freq.keys()){
  //     if(!(s1Freq.has(i))){
  //       s1Freq.set(i, 0)
  //     }

  //     if(Math.abs(s1Freq.get(i)-s2Freq.get(i))<=k){
  //       set.add("Yes")
  //  }else{
  //    set.add("No")

  //  }
  //     }

  set = mapIterator(s1Freq, s2Freq, k);
  set = mapIterator(s2Freq, s1Freq, k);

  if (set.has("No")) {
    return "No";
  } else {
    return "Yes";
  }
}
