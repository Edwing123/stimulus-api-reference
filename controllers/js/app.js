import { Application, Controller } from "@hotwired/stimulus";

class Main extends Controller {
	initialize() {
		console.log("Controller initialized.");
	}

	connect() {
		console.log("Controller connected to elemnet.");

		console.log(this.scope);
	}
}

class Scoping extends Controller {
	static targets = ["item"];

	connect() {
		const { itemTargets } = this;

		console.log({ itemTargets });
	}
}

class LoadingBasedOnCondition extends Controller {
	static get shouldLoad() {
		return new Date().getMinutes() % 2 == 0;
	}

	connect() {
		console.log("It's connected.");
	}
}

class AfterLoaded extends Controller {
	static afterLoad() {
		console.log("The controller has been loaded.");
	}
}

class EventSource extends Controller {
	sayHi() {
		console.log("Dispatching event.");
		this.dispatch("sayHi");
	}
}

class EventTarget extends Controller {
	static targets = ["output"];

	sayHi(event) {
		console.log(event);
		this.outputTarget.innerText = "Hi.";
	}
}

const app = Application.start();
app.debug = true;

app.register("main", Main);
app.register("scoping", Scoping);
app.register("loading", LoadingBasedOnCondition);
app.register("after-loading", AfterLoaded);
app.register("event-source", EventSource);
app.register("event-target", EventTarget);
