class User {
    name: string;
    color: string;
    place: [number, number] | undefined;
    end: Date | undefined;
    social: {insta:string | undefined, phone:string | undefined} | undefined;
    constructor (name:string, color:string, place:[number,number] | undefined, social:{insta:string, phone:string} | undefined, end:Date | undefined){
        this.name = name;
        this.color = color;
        this.place = place;
        this.social = social;
        this.end = end
    }
}

    



export default User;