Vue.component('custom', {
	template: 
	`<div class="jumbotron">
	  <h1>{{header}}</h1>
	  <p>{{paragraph}}</p>
	  <p><a class="btn btn-primary btn-lg" href="#" role="button">{{button}}</a></p>
	</div>`,

	props: ['header', 'paragraph', 'button'],

	data: function() {

	},

	methods: {

	}
})

var mainvm = new Vue ({
	el: '#app',
	data: {
		header: 'This is a jumbotron!',
		paragraph: 'we try we try, to vueify',
		button: 'check it out',
	},

})