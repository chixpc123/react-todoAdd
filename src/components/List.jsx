var React = require('react');

var ListItem = require('./Listitem.jsx');

var List = React.createClass({
    render : function(){
        var createItemList = function(text, index){
            return <ListItem key={index + text} item={text} />;
        }
        
        return (
            <ul>{this.props.ItemList.map(createItemList)}</ul>
        );
    }
});

module.exports = List;