var FlagList = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },
    render: function() {
        var flags = this.props.items.map(function(flag) {
            return <Flag item={flag}/>
        });
        return (
            <ul className="flagList">
                {flags}
            </ul>
        );
    }
});