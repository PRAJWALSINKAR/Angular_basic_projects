class student{
    sName : string;
    sMark : number;
    sRank : number;

    getGread() : string{
        if(this.sMark > 50){
            return "A";
        }
        return "B";
    }
}

let s1 = new student;
s1.sName = "prajwal";
s1.sMark = 99;
s1.sRank = 12;

console.log(s1.getGread());