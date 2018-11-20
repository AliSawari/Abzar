class ProcessManager {
    constructor() {
        this.threads = [];
        this.processes = [];
        this.services = [];
        setInterval(() => {
            ProcessManager.MachineUpTime++;
        }, 1000);
    }
    AddProcess(P) {
        let p = {
            name: P.name,
            services: P.services,
            tasks: P.tasks,
            ID: this.processes.length + 1,
            uptime: 0
        };
        this.processes.push(p);
        ProcessManager.upTimeUpdater(p);
        this.controlThreads();
        this.controlServices(p);
    }
    controlServices(p) {
        if (p.services) {
            this.services.push(p.services);
        }
    }
    controlThreads() {
        // need to be completed
    }
    static upTimeUpdater(p) {
        setInterval(() => {
            p.uptime++;
        }, 1000);
    }
}
ProcessManager.MachineUpTime = 0;
var myPM = new ProcessManager();
const NodeProcess = {
    name: "node.exe",
    services: { info: "NodeJS: Server-Side JavaScript" },
    tasks: {
        InitTask: () => `${this.name} has started`
    },
};
const AtomProcess = {
    name: "atom.exe",
    services: { info: "a Free Hackable Text Editor for 21th century" },
    tasks: {
        InitTask: () => `${this.name} has started`
    },
};
myPM.AddProcess(NodeProcess);
setTimeout(() => {
    myPM.AddProcess(AtomProcess);
    console.log("what?", myPM.processes[0].tasks[0].InitTask());
}, 2600);
setInterval(() => {
    console.log("processes: ", myPM.processes);
    console.log("services: ", myPM.services);
    console.log("Total Machine Uptime: ", ProcessManager.MachineUpTime);
}, 5000);
