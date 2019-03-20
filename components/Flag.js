var Flag = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },
    render: function() { 
        return (
            <div className="flagItem">
                <h4 className="countryName">{this.props.item.countryName}</h4>
                <img src={this.props.item.flagSrc} />
            </div>
        )
    }
});