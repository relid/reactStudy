var Greeter = React.createClass({
	getDefaultProps: function(){
		return {
			name: 'Jon Snow',
			message: 'boring ass default message'
		};
	},
	getInitialState: function(){
		return{
			name: this.props.name
		};
	},
	onButtonClick: function(e){
		//prevent page refresh
		e.preventDefault();

		var nameRef = this.refs.name;

		//fetch the given value from name attribute
		var name = nameRef.value;
		// empty the input box
		nameRef.value = ""
		//this.refs.name.value = ""

		//check if data is valid && update if so
		if (typeof name === 'string' && name.length >0){
			//sets ONLY states for attributes that are provided
			this.setState({
				name: name

			});
			//alert(name);
		}


	},
	render: function(){
		var name = this.state.name;
		var message = this.props.message;
		return(
			<div>
				<h1>hello {name} from</h1>
				<p>{message + " !"}</p>

				<form onSubmit={this.onButtonClick}>
					<input type="text" ref="name"/>
					<button>set name</button>
				</form>
		</div>
		);
	}
});

ReactDOM.render(
	<Greeter />,
	document.getElementById('app')
);
