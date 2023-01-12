const gameEvents = new Map ([
    [17 ,'goal' ] ,
    [36 ,'substitution' ] ,
    [47 ,'goal' ] ,
    [61 ,'goal' ] ,
    [64 ,'goal' ] ,
    [69 ,'goal' ] ,
    [70 ,'goal' ] ,
    [72,'goal' ] ,
    [76 ,'goal' ] ,
    [80 ,'goal' ] ,
    [91 ,'goal' ] ,
]);


const events = [...new set  (gameEvents.values()) ];
console.log (events);
// 
gameEvents.delete(64);
//
console.log(
    ` an events happ huhuhau ${90 / gameEvents.size} aafaffa`
) ; 
const time = [...gameEvents.keys()] .pop();
console.log(time) ;
console.log(
    `an eventes gagajgagdagdagad ${time / gameEvents.size} adgadygugad`
)
//
for (const [min , events ] of gameEvents){
    const half = min <= 45 ? 'first' : 'second';
    console.log(`[${half} half] ${min} : ${events}`);
}