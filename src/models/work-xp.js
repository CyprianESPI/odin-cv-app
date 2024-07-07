class WorkXp {
    static UUID = 0;
    constructor() {
        this.company = "";
        this.role = "";
        this.roleDescription = "";
        this.start = "";
        this.end = "";
        this.id = WorkXp.UUID;
        WorkXp.UUID++;
    }
} export default WorkXp;