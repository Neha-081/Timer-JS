class Timer{
    constructor(durationInput,startButton,pauseButton,callbacks){
        this.durationInput=durationInput;
        this.startButton=startButton;
        this.pauseButton=pauseButton;
if(callbacks){
    this.onStart=callbacks.onStart;
    this.onTick=callbacks.onTick;
    this.onComplete=callbacks.onComplete;
}
        this.startButton.addEventListener('click',this.start)
        this.pauseButton.addEventListener('click',this.pause)
    }
    start=()=>{
        if(this.onStart){
            this.onStart(this.timeRemaining)
        }
        this.tick()    //to start instantly
        this.interval=setInterval(this.tick,20);
    }
    pause=()=>{
        clearInterval(this.interval)
    }
    tick=()=>{
        if(this.timeRemaining<=0){
            this.pause();
            if(this.onComplete){
                this.onComplete()
            }
        }else{
            this.timeRemaining = this.timeRemaining-0.02;
            //this will set the time       this will get the time
            if(this.onTick){
                this.onTick(this.timeRemaining)
            }
        }

    }
    get timeRemaining(){
        return parseFloat(this.durationInput.value)    //parseFloat will give no with decimal whereas parseInt give no with no decimal
    
    }
    set timeRemaining(time){
      this.durationInput.value=time.toFixed(2);
    }
  
}
