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
const [doi1 , doi2] = game.CauThu;
console.log(doi1,doi2) ;

// 
const [gk , ...nguoichoi] = doi1;
console.log(gk , nguoichoi);

//
const allnguoichoi = [...doi1 , ...doi2] ; 
console.log (allnguoichoi);
//
const nguoichoimoi = [...doi1, 'ahihih' ,'ahhaah']  ;
console.log(nguoichoimoi);
//
const{
odds : {team1 , x: draw , team2},

} = game ;
console.log(team1, draw , team2);
//
const cauthughiban = function(...CauThu){
    console.log(CauThu)
 console.log(` có ${CauThu.length} cầu thủ ghi bàn ${CauThu} `);
}
cauthughiban ('nguyễn chiến', 'ngo giang' , 'viet phuong' , 'quang hải') ;
cauthughiban ('nguyễn chiến', 'ngo giang' ,) ;
cauthughiban(game.scored)

// 
doi1 < doi2 && console.log('team 1 vố địch ') ;
doi2 < doi1 && console.log('team 2 vố địch ') ;