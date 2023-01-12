const game = {
    team1 : "Viet Nam" ,
    team2 : "Thái Lan" ,

    CauThu :[
        [
            'Văn Lâm' , 
            'Quế Ngọc Hải',
            'Duy Mạnh',
            'Văn Hậu',
            'Văn Thanh',
            'Hoàng Đước',
            'Quang Hải',
            'Xuân Trường',
            'Nguyễn Chiến',
            'Nho Giang',
            'Việt Phương',

        ] , 
        [
            'đức toàn ' , 
            'đức triệu ' , 
            'ahdhhda ' , 
            'aduduahd ' , 
            'đức toàn ' , 
            'đức toàn ' , 
            'đức toàn ' , 
            'đức toàn ' , 
            'đức toàn ' , 
            'đức toàn ' , 
        ]
    ] ,
    score: "4:0" , 
    scored : ['nguyen chien ' , 'Nho Giang ' , 'nguyen chien ', 'viet phuong'] , 
    date: "now 9th 2037" , 
    odds: {
        team1 : 1.33 ,
        x:  3.25 ,
        team2 : 6.5 , 

    },
};

// 
for(const [i , CauThu] of game.scored.entries()) 
console.log(`goal ${i + 1 }: ${CauThu} `) ;
// 
const  odds  =  chien.values(game.odds) ;
 average /=  odds.length; 
 console.log(average);
 //
 for (const [team , odds] of chien.entries(game.odds)){
   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}` ;
   console.log (`0dd of ${teamStr} ${odds}`)
 }