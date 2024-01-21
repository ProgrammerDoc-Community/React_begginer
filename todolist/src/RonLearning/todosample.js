import React,{Component} from "react";

class TodoList extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="TodoContainer">
                <div className="heading">
                    <h4>Yika's Todo</h4>
                </div>
                <div className="todocontent">
                    <div className="inputcontainer">
                        <form>
                            <div className="InputItem">
                                <label>Task</label>
                                <input type="text" placeholder="enter a task"/>
                            </div>
                            <div className="InputItem">
                                <label>Details</label>
                                <input type="text" placeholder="enter a task"/>
                            </div>
                            <div className="btnMian">
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                        </form>

                        <div className="inputDetails">
                            <div className="taskName">
                                <h4>Task</h4>
                                <p>details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList