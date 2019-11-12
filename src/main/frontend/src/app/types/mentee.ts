// OLD WAY 
// export class Mentee {
//     id: string;
//     name: string;
//     site: string;
//     bu: string;
//     assignedVirlInstance: string;
// }

// NEW WAY -- with optionals,
  styleUrls: ['./testparent.component.css']
export class Mentee {
    constructor(
        public name: string,
        public site: string,
        public bu: string,
        public assignedVirlInstance?: string,
        public id?: string
      ) {}
}