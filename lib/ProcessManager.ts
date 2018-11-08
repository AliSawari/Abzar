interface Thread {
  processes: Process[]
}

interface Process {
  name: string,
  ID : number,
  uptime: number,
  services?: Service,
  tasks: Task
}

interface Service {
  info: string
}


interface Task {
  InitTask(): any
}

class ProcessManager {
  static MachineUpTime:number = 0;
  public threads:Thread[] = [];
  public processes:Process[] = [];
  public services:Service[] = [];
  
  constructor(){
    setInterval(() => {
      ProcessManager.MachineUpTime++;
    },1000);
  }

  public AddProcess(P):any{
    let p:Process = {
      name: P.name,
      services: P.services,
      tasks: P.tasks,
      ID: this.processes.length + 1,
      uptime: 0
    }
    this.processes.push(p);
    ProcessManager.upTimeUpdater(p);
    this.controlThreads();
    this.controlServices(p);
  }

  public controlServices(p:Process):any{
    if(p.services){
      this.services.push(p.services);
    }
  }

  public controlThreads(){
    // need to be completed
  }

  static upTimeUpdater(p:Process):any{
    setInterval(() => {
      p.uptime++
    },1000);
  }
}

var myPM = new ProcessManager();

const NodeProcess = {
  name: "node.exe",
  services: {info: "NodeJS: Server-Side JavaScript"},
  tasks: {
    InitTask : () => `${this.name} has started`
  },
}

const AtomProcess = {
  name: "atom.exe",
  services: {info: "a Free Hackable Text Editor for 21th century"},
  tasks: {
    InitTask : () => `${this.name} has started`
  },
}

myPM.AddProcess(NodeProcess);

setTimeout(() => {
  myPM.AddProcess(AtomProcess);
  console.log("what?", myPM.processes[0].tasks[0].InitTask())
},2600);

setInterval(() => {
  console.log("processes: ", myPM.processes);
  console.log("services: ", myPM.services);  
  console.log("Total Machine Uptime: ",ProcessManager.MachineUpTime);
},5000);

