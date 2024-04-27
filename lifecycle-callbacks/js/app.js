import { Application, Controller } from "@hotwired/stimulus";

/**
 * Callback methods.
 *
 * [initialize]: invoked once when the controller is instantiated.
 *
 * [<name>TargetConnected]: invoked whenever when a target element named <name>
 * is "connected" to the DOM.
 *
 * [connect]: invoked whenever the controller is connected to the DOM.
 *
 * [<name>TargetDisconnected]: invoked whenever when a target element named <name>
 * is "disconnected" from the DOM.
 *
 * [disconnect]: invoked whenever the controller is disconnected from the DOM.
 *
 */

class Main extends Controller {
	static values = {
		fromDate: {
			type: String,
		},

		toDate: {
			type: String,
		},
	};

	initialize() {
		this.application.logger.log(
			`Controller ${this.identifier} is initialized.`,
		);
	}

	connect() {
		this.application.logger.log(
			`Controller ${this.identifier} is connected to DOM element ${this.element.nodeName}.`,
		);
	}

	fromDateInputTargetConnected($dateInput) {
		this.application.logger.log(`from date input connected.`);
	}

	toDateInputTargetConnected($dateInput) {
		this.application.logger.log(`to date input connected.`);
	}

	updateDate({ target }) {
		const targetedValueProperty = `${target.dataset.value}Value`;

		this.application.logger.log(targetedValueProperty);

		this[targetedValueProperty] = target.value;
	}
}

const app = Application.start();
app.debug = true;

app.register("main", Main);
