export const componentCategories = ['Forms','@Input/@Output','Template','Pipes','Change Detection Strategy','Router','NgModule','Operators','Components & Services','Directives','Lifecycle Hooks','HttpInterceptor','CSS','Decorators','RxJs','@ViewChild','Types','Singleton'];

export const metaData = [
	{
		selector: 'app-example2',
		componentName: 'Example2Component',
		question: 'Given the code snippet below.<br />What is the name of the <em>html element</em> that should replace the question mark, from the <em>component template</em>?',
		componentOrdinal: '2',
		category: 'Forms',
		addCategoryHeader: true,
		hasConflict: false
	},
	{
		selector: 'app-example4a',
		componentName: 'Example4aComponent',
		question: 'Considering the following use of <em>@Input()</em> and <em>@Output</em> properties.<br />What will be logged in the console, when the user clicks the <em>SelectName</em> button?',
		componentOrdinal: '4a',
		category: '@Input/@Output',
		addCategoryHeader: true,
		hasConflict: false
	},
	{
		selector: 'app-example5',
		componentName: 'Example5Component',
		question: 'Which of the following answers is a valid <em>template expression</em>?',
		componentOrdinal: '5',
		category: 'Template',
		addCategoryHeader: true,
		hasConflict: false
		},
	{
		selector: 'app-example6',
		componentName: 'Example6Component',
		question: 'Given the code snippet below, how will Angular compile the <em>#Div1</em> and <em>#Div2</em> elements?',
		componentOrdinal: '6',
		category: 'Template',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example13',
		componentName: 'Example13Component',
		question: 'In a <em>reactive form</em>, the source of truth is the <em>component template</em>?',
		componentOrdinal: '13',
		category: 'Template',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example14',
		componentName: 'Example14Component',
		question: '<em>EventEmitters</em> should always be unsubscribed, before a client component or service is destroyed?',
		componentOrdinal: '14',
		category: '@Input/@Output',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example12',
		componentName: 'Example12Component',
		question: 'Consider the following code snippet.<br />What <em>pipe</em> can be used in place of the question mark, to mark the component, to be checked for changes and update the view, whenever the timer emits a new value?',
		componentOrdinal: '12',
		category: 'Pipes',
		addCategoryHeader: true,
		hasConflict: false
	},
	{
		selector: 'app-example8a',
		componentName: 'Example8aComponent',
		question: 'The parent component supplies two different objects to its child component.<br />The child component uses <em>ChangeDetectionStrategy.OnPush</em>.<br />Which object will trigger change detection to occur, in the child and why?',
		componentOrdinal: '8a',
		category: 'Change Detection Strategy',
		addCategoryHeader: true,
		hasConflict: true
	},
	{
		selector: 'app-example64a',
		componentName: 'Example64aComponent',
		question: 'The parent component supplies two different objects to its child component.<br />The parent component uses <em>ChangeDetectionStrategy.OnPush</em>.<br />Which object will trigger change detection to occur, in the child and why?',
		componentOrdinal: '64a',
		category: 'Change Detection Strategy',
		addCategoryHeader: false,
		hasConflict: true
	},
	{
		selector: 'app-example10',
		componentName: 'Example10Component',
		question: 'Which of the following answers is an invalid <em>template</em> statement?',
		componentOrdinal: '10',
		category: 'Template',
		addCategoryHeader: false,
		hasConflict: true
	},
	{
		selector: 'app-example15',
		componentName: 'Example15Component',
		question: 'Consider the following route.<br />Select the answer that represents the correct sending of the required <em>id parameter</em>',
		componentOrdinal: '15',
		category: 'Router',
		addCategoryHeader: true,
		hasConflict: false
	},
	{
		selector: 'app-example16',
		componentName: 'Example16Component',
		question: 'If a component is needed in more than one <em>NgModule</em>, it can be added in the declarations array of all those modules?',
		componentOrdinal: '16',
		category: 'NgModule',
		addCategoryHeader: true,
		hasConflict: false
	},
	{
		selector: 'app-example17a',
		componentName: 'Example17aComponent',
		question: 'Consider the following routes and html template.<br />When the app is initially loaded, what <em>class</em> will be assigned to the <em>admin anchor</em>?',
		componentOrdinal: '17a',
		category: 'Router',
		addCategoryHeader: false,
		hasConflict: false,
		routerLinks: [
			{
				routerLink: '/admin',
				class: 'nav',
				routerLinkActive: 'active',
				text: 'Admin'
			},
			{
				routerLink: '/users',
				class: 'nav',
				routerLinkActive: 'active',
				text: 'Users'
			},
		],
		hasRouterOutlet: true
	},
	{
		selector: 'app-example18',
		componentName: 'Example18Component',
		question: 'What <em>router event</em> can be used to determine that a navigation ended successfully?',
		componentOrdinal: '18',
		category: 'Router',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example19',
		componentName: 'Example19Component',
		question: 'Consider the following use of the <em>of</em> and <em>map</em> operators. What is going to get logged in the console?',
		componentOrdinal: '19',
		category: 'Operators',
		addCategoryHeader: true,
		hasConflict: false
	},
	{
		selector: 'app-example20',
		componentName: 'Example20Component',
		question: 'The <em>AsyncPipe</em> can be used to subscribe to observables as well as to promises?',
		componentOrdinal: '20',
		category: 'Pipes',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example21',
		componentName: 'Example21Component',
		question: 'Consider the following relationship between a component & service. "Nothing will get logged, in the console, after the <em>destroyed</em> string…"',
		componentOrdinal: '21',
		category: 'Components & Services',
		addCategoryHeader: true,
		hasConflict: false
	},
	{
		selector: 'app-example22',
		componentName: 'Example22Component',
		question: 'What is the <em>structural directive</em> that conditionally creates or destroys subviews from the template?',
		componentOrdinal: '22',
		category: 'Directives',
		addCategoryHeader: true,
		hasConflict: false
	},
	{
		selector: 'app-example23',
		componentName: 'Example23Component',
		question: 'Before using the <em>ngModel</em> directive in two-way data binding, a specific <em>NgModule</em> must be imported in the current module?',
		componentOrdinal: '23',
		category: 'Forms',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example24',
		componentName: 'Example24Component',
		question: 'Pipes can be used in any <em>@Service</em> or <em>@Component</em> typescript code, since they are providers that can be injected, in the constructor?',
		componentOrdinal: '24',
		category: 'Pipes',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example25',
		componentName: 'Example25Component',
		question: 'Setting the <em>changeDetection</em> property of the <em>@component</em> to <em>ChangeDetectionStrategy.OnPush</em> affects all child components of that tree?',
		componentOrdinal: '25',
		category: 'Change Detection Strategy',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example26',
		componentName: 'Example26Component',
		question: 'Given the following code snippet, what are the methods that will log <em>undefined</em>?',
		componentOrdinal: '26',
		category: 'Lifecycle Hooks',
		addCategoryHeader: true,
		hasConflict: false
	},
	{
		selector: 'app-example27',
		componentName: 'Example27Component',
		question: 'What is the method name that needs to replace the question mark, so that the <em>HttpInterceptor</em> request is handled correctly?',
		componentOrdinal: '27',
		category: 'HttpInterceptor',
		addCategoryHeader: true,
		hasConflict: false
	},
	{
		selector: 'app-example28a',
		componentName: 'Example28aComponent',
		question: 'Consider the following relationship between a component & service. "Nothing will get logged, in the console, after the <em>destroyed</em> string..."',
		componentOrdinal: '28a',
		category: 'Components & Services',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example29',
		componentName: 'Example29Component',
		question: 'What <em>component lifecycle hook</em> is usually used, to detect an <em>@Input</em> property changes?',
		componentOrdinal: '29',
		category: 'Lifecycle Hooks',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example30',
		componentName: 'Example30Component',
		question: 'Consider the following definition of the <em>DemoModule</em>.<br />What is the type of the <em>forRoot()</em> static method?',
		componentOrdinal: '30',
		category: 'NgModule',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example31',
		componentName: 'Example31Component',
		question: 'True or false: Given the service from the code snippet below, it is required to register the service as a provider in a specific <em>NgModule</em>, to make it available at the root level?',
		componentOrdinal: '31',
		category: 'NgModule',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example32',
		componentName: 'Example32Component',
		question: 'Which of the following is an incorrect syntax for adding the <em>valid</em> CSS class to an html element?',
		componentOrdinal: '32',
		category: 'CSS',
		addCategoryHeader: true,
		hasConflict: false
	},
	{
		selector: 'app-example33',
		componentName: 'Example33Component',
		question: 'Given the code snippet below.<br />Select the <em>input</em> that will not be able to update the name property?',
		componentOrdinal: '33',
		category: 'Forms',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example34',
		componentName: 'Example34Component',
		question: 'What type of items can be used in the <em>NgModule</em> imports array?',
		componentOrdinal: '34',
		category: 'NgModule',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example35',
		componentName: 'Example35Component',
		question: 'Consider the following relationship between a <em>component</em> and a <em>service</em>.<br />What is the first word that is going to be logged in the console?',
		componentOrdinal: '35',
		category: 'Components & Services',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example36',
		componentName: 'Example36Component',
		question: 'Consider the following use of the <em>filter</em> and <em>map</em> operators. What is going to get logged in the console?',
		componentOrdinal: '36',
		category: 'Operators',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example37',
		componentName: 'Example37Component',
		question: 'Which of the following answers represents an invalid way of adding headers to the options of an <em>HttpClient.get()</em> method?',
		componentOrdinal: '37',
		category: 'RxJs',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example38',
		componentName: 'Example38Component',
		question: 'Which of the following <em>NgModules</em> needs to be imported, in order to use <em>NgIf</em> and <em>NgFor</em>?',
		componentOrdinal: '38',
		category: 'NgModule',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example39',
		componentName: 'Example39Component',
		question: 'Consider the following list of decorators.<br />Which one can be used to provide a unique instance of the <em>DemoService</em> in every <em>NgModule</em>?',
		componentOrdinal: '39',
		category: 'Decorators',
		addCategoryHeader: true,
		hasConflict: false
	},
	{
		selector: 'app-example40',
		componentName: 'Example40Component',
		question: 'What method do you need to correctly implement the <em>Pipe Transform</em> interface?',
		componentOrdinal: '40',
		category: 'Pipes',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example41',
		componentName: 'Example41Component',
		question: 'Given the code snippet below, what is the value that will be displayed?',
		componentOrdinal: '41',
		category: 'Template',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example42',
		componentName: 'Example42Component',
		question: 'What is the <em>structural directive</em> that repeats a node for each item in a list?',
		componentOrdinal: '42',
		category: 'Directives',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example43',
		componentName: 'Example43Component',
		question: 'What is the type that can replace the underscore ( _ ) in the 5th line of the code snippet below, so that the code is compiled successfully?',
		componentOrdinal: '43',
		category: 'Forms',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example44',
		componentName: 'Example44Component',
		question: 'Which of the following statements, is correct?',
		componentOrdinal: '44',
		category: '@Input/@Output',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example45',
		componentName: 'Example45Component',
		question: 'A directive has the same set of lifecycle hooks as a component?',
		componentOrdinal: '45',
		category: 'Directives',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example46',
		componentName: 'Example46Component',
		question: 'What mode of <em>ViewEncapsulation</em> can be used to scope the CSS?',
		componentOrdinal: '46',
		category: 'CSS',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example47a',
		componentName: 'Example47aComponent',
		question: 'Consider the following routes and html template.<br />When the app is initially loaded, the <em>user</em> section anchor, won\'t have the <em>active CSS class</em> assigned to it?',
		componentOrdinal: '47a',
		category: 'Router',
		addCategoryHeader: false,
		hasConflict: false,
		routerLinks: [
			{
				routerLink: '/users1',
				class: 'nav',
				routerLinkActive: 'active',
				text: 'Users'
			},
			{
				routerLink: '/users1/details',
				class: 'nav',
				routerLinkActive: 'active',
				text: 'Details'
			},
		],
		hasRouterOutlet: true,
		outletName: 'usersDetails'
	},
	{
		selector: 'app-example48',
		componentName: 'Example48Component',
		question: 'What is the <em>interface</em> that needs to be implemented in a class, in order to create an <em>http interceptor</em>?',
		componentOrdinal: '48',
		category: 'HttpInterceptor',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example49a',
		componentName: 'Example49aComponent',
		question: 'Consider the following relationship between a component and a service.<br />Nothing will get logged in the console after the <em>destroyed</em> string?',
		componentOrdinal: '49a',
		category: 'Components & Services',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example50a',
		componentName: 'Example50aComponent',
		question: 'Consider the following <em>NgModule</em>.<br />Which <em>export</em> is an invalid way of sharing elements?',
		componentOrdinal: '50a',
		category: 'NgModule',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example51',
		componentName: 'Example51Component',
		question: 'A <em>feature model</em> can have any of the following arrays: declarations, imports, bootstrap, providers?',
		componentOrdinal: '51',
		category: 'NgModule',
		addCategoryHeader: false,
		hasConflict: true
	},
	{
		selector: 'app-example52',
		componentName: 'Example52Component',
		question: 'The <em>EventEmitter</em> class provided by Angular extends a core <em>RxJS</em> class, adding an <em>emit()</em> method so it can send arbitrary values.<br />What is the name of that class?',
		componentOrdinal: '52',
		category: 'RxJs',
		addCategoryHeader: true,
		hasConflict: false
	},
	{
		selector: 'app-example53',
		componentName: 'Example53Component',
		question: 'Before using the <em>formControl</em> directive in a template, a specific <em>NgModule</em> must be imported in the current module.<br />What\'s the name of that <em>NgModule</em>?',
		componentOrdinal: '53',
		category: 'Forms',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example54',
		componentName: 'Example54Component',
		question: 'At the <em>component template</em> level, what brackets are used to mark the data passing from a child component to its parent?',
		componentOrdinal: '54',
		category: 'Template',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example55a',
		componentName: 'Example55aComponent',
		question: 'Considering the following use of the <em>@ViewChild</em> property.<br />What will be logged in the console?',
		componentOrdinal: '55a',
		category: '@ViewChild',
		addCategoryHeader: true,
		hasConflict: true
	},
	{
		selector: 'app-example56',
		componentName: 'Example56Component',
		question: 'What should the type of the element, injected in the <em>constructor</em>, be, so that the component has the color correctly set to red?',
		componentOrdinal: '56',
		category: 'Types',
		addCategoryHeader: true,
		hasConflict: false
	},
	{
		selector: 'app-example57a',
		componentName: 'Example57aComponent',
		question: 'Assume that the <em>custom-div</em> component has a property called backgroundColor.<br />What will the backgroundColor be in the following case?',
		componentOrdinal: '57a',
		category: '@Input/@Output',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example58',
		componentName: 'Example58Component',
		question: 'Which of the following statements are correct?',
		componentOrdinal: '58',
		category: '@Input/@Output',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example59',
		componentName: 'Example59Component',
		question: 'Given the code snippet below, complete the missing area marked with the underscore, so that the following information is displayed: <em>12/1 5/88</em>?',
		componentOrdinal: '59',
		category: 'Pipes',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example60',
		componentName: 'Example60Component',
		question: 'Consider the following code snippet.<br />After the user inputs a name, what will the border color of the input be?',
		componentOrdinal: '60',
		category: 'Forms',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example61',
		componentName: 'Example61Component',
		question: 'Consider the following use of the <em>timer</em> and <em>combinelatest</em> operators?<br />What is going to get logged in the console the second time the <em>combinelatest</em> operator emits a value?',
		componentOrdinal: '61',
		category: 'RxJs',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example62',
		componentName: 'Example62Component',
		question: 'Which of the following statements about <em>observables</em> is incorrect?',
		componentOrdinal: '62',
		category: 'RxJs',
		addCategoryHeader: false,
		hasConflict: true
	},
	{
		selector: 'app-example63',
		componentName: 'Example63Component',
		question: 'Consider the following use of the <em>distinctUntilChanged</em> operator.<br />What is going to get logged in the console?',
		componentOrdinal: '63',
		category: 'RxJs',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example65',
		componentName: 'Example65Component',
		question: 'Which of the following notifications is not sent by a handler that implements the <em>Observer</em> interface?',
		componentOrdinal: '65',
		category: 'RxJs',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example66',
		componentName: 'Example66Component',
		question: 'Consider the following relationship between a component and a service.<br />What is the first word that is going to be logged in the console?',
		componentOrdinal: '66',
		category: 'Components & Services',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example67',
		componentName: 'Example67Component',
		question: 'Given the code snippet below<br />Select the case that will be rendered by the <em>NgSwitch</em> statement?',
		componentOrdinal: '67',
		category: 'Directives',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example68',
		componentName: 'Example68Component',
		question: 'What is the first <em>lifecycle hook</em> method that Angular calls, after a component is constructed?',
		componentOrdinal: '68',
		category: 'Lifecycle Hooks',
		addCategoryHeader: false,
		hasConflict: true
	},
	{
		selector: 'app-example69',
		componentName: 'Example69Component',
		question: 'Given the following code snippet, how will Angular compile this component?',
		componentOrdinal: '69',
		category: 'Lifecycle Hooks',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example70',
		componentName: 'Example70Component',
		question: 'Which of the following definitions apply to a <em>singleton</em>?',
		componentOrdinal: '70',
		category: 'Singleton',
		addCategoryHeader: true,
		hasConflict: false
	},
	{
		selector: 'app-example71',
		componentName: 'Example71Component',
		question: 'Consider the following relationship between two components and a service.<br />What is going to be logged in the console?',
		componentOrdinal: '71',
		category: 'Components & Services',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example72',
		componentName: 'Example72Component',
		question: 'Consider the following use of the <em>filter</em> and <em>map</em> operators.<br />What is going to get logged in the console?',
		componentOrdinal: '72',
		category: 'Operators',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example73',
		componentName: 'Example73Component',
		question: 'What is the <em>pseudo class</em> selector that can be used to target the styles, in the element, that hosts a component?',
		componentOrdinal: '73',
		category: 'CSS',
		addCategoryHeader: false,
		hasConflict: false
	},
	{
		selector: 'app-example74',
		componentName: 'Example74Component',
		question: 'What is the type returned by an <em>HttpClient.get()</em> method?',
		componentOrdinal: '74',
		category: 'Types',
		addCategoryHeader: false,
		hasConflict: false
	},
];