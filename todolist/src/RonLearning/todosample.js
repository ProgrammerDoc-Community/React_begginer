import React,{Component} from "react";


class TodoList extends Component{
    constructor(){
        super()
        this.state=({
            task:"",
            details:""
        })
    }
    EventChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        })

    }

    EventSubmit=()=>{
        console.log("my task is ",this.state.task, "and ", this.state.details)
    }
    render(){
        const { task,details} = this.state
        return(
            <div className="TodoContainer container  mt-5 p-5">
                <div className="heading ">
                    <h4 className="display-4 mt-2 mb-2 text-center">Yika's Todo</h4>
                </div>
                <div className="todocontent">
                    <div className="inputcontainer card">
                        <form className="form " > 
                            <div className=" formdata form-group mt-3 mb-3">
                                <label>Task</label>
                                <input name="task" value={task} type="text" onChange={this.EventChange} placeholder="enter a task" className="InputItem"/>
                            </div>
                            <div className=" formdata form-group mt-3 mb-3">
                                <label>Details</label>
                                <input type="text" name="details" value={details} onChange={this.EventChange} className="InputItem" placeholder="enter a task"/>
                            </div>
                            <div className="btnMian" >
                                <button type="submit" onSubmit={this.EventSubmit}  className="btn btn-primary mt-3 mb-5">Add</button>
                            </div>
                        </form>

                        <div className="inputDetails">
                            <div className="taskName">
                                <h4>{task}</h4>
                                <p>{details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList