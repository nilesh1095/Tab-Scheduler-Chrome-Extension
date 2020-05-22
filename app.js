class Scheduler{
    constructor(){
        this.render();
    }
    
    render(){
        this.startTime = document.getElementById("startTime");
        document.querySelector('button').addEventListener('click',this.handler.bind(this));
    }

    handler(){
        let hour = this.startTime.value.toString().split(':')[0];
        let minutes = this.startTime.value.toString().split(':')[1];
        let currentDate = new Date()
        let eneteredTime = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate(),hour,minutes,0,0);
        if(eneteredTime.getTime() < currentDate.getTime()){
            eneteredTime = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()+1,hour,minutes,0,0);
        }
        let setTime = eneteredTime - currentDate;
        this.setTimeOut(setTime);
    }

    setTimeOut(setTime){
        console.log(setTime)
        setTimeout(()=>{
            console.log("inside1")
        },setTime);
    }
}

new Scheduler();

