export class TechRequest {

    constructor(
        public orgName: string,
        public programs: string,
        public location: string,
        public date: number,

        public orgType: string,
        public verb: string,
        public demographic: string,
        public goal: string,

        public verbTwo: string,
        public number: string,
        public pluralDemographic: string,
        public programTwo: string,
    ) {  }

}
