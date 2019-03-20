const url = 'https://restcountries.eu/rest/v2/name/';

var App = React.createClass({
    getInitialState: function() {
        return {
            flags: []
        };
    },
    getFlag: function(text) {
        fetch(url + text)
            .then(function(resp) {
                return resp.json();
            })
            .then(function(resp) {
                var flags = [];
                resp.forEach(function(item) {
                    var flagSrc = item.flag;
                    var countryName = item.name;
                    flags.push({flagSrc: flagSrc, countryName: countryName});
                });
                this.setState({flags: flags});
            }.bind(this));
    },
    render: function() {
        return (
            <div className="app">
                <h1>SHOW FLAG APP</h1>
                <h2>Tell me the COUNTRY, I'll show you the FLAG!</h2>
                <Search onSearch={this.getFlag} />
                <FlagList items={this.state.flags} />
            </div>
        )
    }
});