const SETTING={
	name : "LUCKY LOTTO!",
  count : 6,
  maxNumber : 45
};

const{count,maxNumber}=SETTING;

function getRandomNumber(maxNumber){
	//set
  let lottoSet=new Set();
  while(lottoSet.size<count){
  	const lottoNum=Math.floor(Math.random()*maxNumber+1);
    if(!lottoSet.has(lottoNum)){
    	lottoSet.add(lottoNum);
    }
  }
  return [...Array.from(lottoSet)];
}

console.log(getRandomNumber(maxNumber));
