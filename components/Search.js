var Search = React.createClass({
    getInitialState() {
        return {
            text: ''
        };
    },
    handleTextChange: function(event) {
        var text = event.target.value;
        this.setState({text: text});
    },
    handleClick: function(event) {
            this.props.onSearch(this.state.text);
    },
    render: function() {
        return (
            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Country name"
                    onChange={this.handleTextChange}
                    value={this.state.text}
                />
                <button onClick={this.handleClick}>
                    Show me Flag!
                </button>
            </div>
        )
    }
});