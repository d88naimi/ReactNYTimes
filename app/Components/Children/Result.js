// include react
var React = require("react");
// connection component
var Results = React.createClass({

 	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			title: "",
			date: "",
			url: "",
			results: []
			
		}
	},	
// click function to save article 

	// When a user clicks save article
	clickToSave: function(result){

		this.props.saveArticle(result.headline.main, result.pub_date, result.web_url);

	},
// save the articles to the save section 
	componentWillReceiveProps: function(nextProps){
		var that = this;
		var myResults = nextProps.results.map(function (search, i){
			var boundClick = that.clickToSave.bind(that, search);
			return <div className="list-group-item" key={i}><a href={search.web_url} target="_blank">{search.headline.main}</a><br />{search.pub_date}<br /><button type="button" className="btn btn-warning" style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick}>Save</button></div>
		});

		this.setState({results: myResults});
	},
	
	// Here we render the function
	render: function(){
		return(

			<div className="panel panel-warning">
				<div className="panel-heading">
					<h3 className="panel-title text-center"><strong>Results</strong></h3>
				</div>
				<div className="panel-body">
						{this.state.results}
				</div>
			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;