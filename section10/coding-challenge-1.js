const poll = {
 question : 'whats is your favourite programing bacbah' , 
 options :[ '0: javaScrip' , '1: Python' , '2: rust' , '3: c++'] ,

 answers : new Array(4).fill(0),
 registerNewAnswer(){
    const answers =    Number(prompt(`${this.question}\n ${this.options.join('\n')}
    \n (Write option number)`)) ;

    console.log(answers);


    typeof answers === 'number' && answers < this.answers.length && this.answers[answers]++;
    console.log(this.answers);

    this.displayREssults();
    this.displayREssults('string') ;
 } ,
 displayREssults (type = 'array') {
    if(type === 'array'){
        console.log(this.answers) ;
    } else if(type === 'string'){
        console.log(`poll results are ${this.answers.join(',')}`)
    }
 }

}

document 
.querySelector('.poll')
.addEventListener ('click', poll.registerNewAnswer.
bind(poll));

poll.displayREssults.call({answers:[5,2,3]} , 'string');
poll.displayREssults.call({answers:[1,5,3,9,6,1]} , 'string');
poll.displayREssults.call({answers:[5,2,3]} );

