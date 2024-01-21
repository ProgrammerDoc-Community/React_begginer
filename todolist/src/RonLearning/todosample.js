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
            [event.target.task]:event.target.value,
            [event.target.details]:event.target.value
        })

    }
    render(){
        return(
            <div className="TodoContainer container  mt-5 p-5">
                <div className="heading ">
                    <h4 className="display-4 mt-2 mb-2 text-center">Yika's Todo</h4>
                </div>
                <div className="todocontent">
                    <div className="inputcontainer card">
                        <form className="form " onSubmit={this.EventChange}> 
                            <div className=" formdata form-group mt-3 mb-3">
                                <label>Task</label>
                                <input name="task" type="text" placeholder="enter a task" className="InputItem"/>
                            </div>
                            <div className=" formdata form-group mt-3 mb-3">
                                <label>Details</label>
                                <input type="text" className="InputItem" placeholder="enter a task"/>
                            </div>
                            <div className="btnMian" >
                                <button type="submit" name="details" className="btn btn-primary mt-3 mb-5">Add</button>
                            </div>
                        </form>

                        <div className="inputDetails">
                            <div className="taskName">
                                <h4>{this.state.task}</h4>
                                <p>{this.state.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList