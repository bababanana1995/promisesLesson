const doAfter=(time)=>{
  let myPromise2 = new Promise ((res) => {
    setTimeout(()=>{
      res()
    },time*1000)
  });
  return myPromise2

}
