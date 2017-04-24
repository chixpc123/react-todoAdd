var React = require('react');

var List = require('./List.jsx');

var ListManager = React.createClass({
    getInitialState(){
        return {Items : [], newItemText : ''};
    },
    onChange : function(e){

        this.setState({ newItemText : e.target.value });

    },
    submitHandler : function(e){

        e.preventDefault();

        var currentItems = this.state.Items;

        currentItems.push(this.state.newItemText);

        this.setState({ Items : currentItems, newItemText : '' });

    },
    render : function(){

        return (
            <div>
                <h2>{this.props.title}</h2>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.onChange} value={this.state.newItemText} />
                    <button>Add</button>
                </form>
                <List ItemList={this.state.Items} />
            </div>
        );
    }
});

module.exports = ListManager;