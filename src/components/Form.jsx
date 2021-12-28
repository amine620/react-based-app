import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


export default class Form extends Component {
    state={
     
        
        tasks:['learn javascript','learn react']

    }
    render() {
      
        console.log('render');

        // update field state
        const handleChange=(e)=>{
         this.setState({
             field:e.target.value
         })
        }


        const addItem=()=>{
           
          this.setState({
              tasks:[this.state.field, ...this.state.tasks]
          })
        }
        


       const deleteItem=(i)=>{


        // method 1
        //    const data=this.state.tasks

        //    data.splice(index,1)

        //     this.setState({
        //         tasks:data
        //     })


        // method 2

        //  const data = [22,1,4,2,2,100].filter(function(param,index){
            //  return param>2
        //  [22,4,100]
        // })

        // 
        this.setState({
            tasks:this.state.tasks.filter(function(task,index){
                return index!=i
            })
        })

       }
        return (
            <div className='container'>
                <h1 className='text-primary text-center'>Task List</h1>
             <div className="form-group">
                 <input type="text" className='form-control' onChange={handleChange}/>
                 <button onClick={addItem} className="form-control mt-2 btn btn-primary">add new tas</button>
             </div>

             <ul className="list-group mt-5">
                 {this.state.tasks.map((task,index)=>(
                      <>
                      <li className="list-group-item">
                          {task}
                       <span className='float-end'><FontAwesomeIcon icon={faTrash} color='red' onClick={()=>deleteItem(index)}  /></span> 
                      </li>
                      </>
                  
                 ))}
             </ul>
            </div>
        )
    }
}
