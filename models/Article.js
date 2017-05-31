var moongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: String,
	trim: true,
	required: " Need a Title"

}, 
date: { 
type: Date,
default: Date.now,
required: " Date required"
},

url: {
	type: String,
	required: true
	required: "URL required ",
	uniquie: true
}

});
// Create the Model
var Article = mongoose.model("Article", ArticleSchema);

// Export it for use elsewhere
module.exports = Article;