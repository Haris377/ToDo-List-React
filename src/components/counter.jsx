import React, { Component } from 'react';

 class Counter extends Component {
    componentDidUpdate(prevProps, prevState){
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            //Ajax call and get new data from the server
        }
    }

    compunentWillUnmount(){
        console.log('Counter - Unmount');
    }

    render() { 
        return (
        <div>
           <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
           <button 
           onClick={() => this.props.onIncrement(this.props.counter)} 
           className="btn btn-secondary btn-sm"> Increment </button>
           <button
            onClick={() => this.props.onDelete}
            className="btn btn-danger btn-sm m-2"
            >Delete
            </button>
        </div>
        );
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There is no tag!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

   //  constructor(){
   //      super();
   //      this.handleIncrement = this.handleIncrement.bind(this);
   //}  

     getBadgeClasses() {
         let classes = "badge m-2 badge-";
         classes += (this.props.counter.value === 0 ? "warning" : "primary");
         return classes;
     }

    formatCount(){
        const {count} = this.props.counter;
        return count === 0 ? 'zero' : count;
    }
}
 
export default Counter;