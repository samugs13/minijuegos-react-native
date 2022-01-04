import React, { useContext } from 'react';
import { LangContext } from "../../lang/LangContext.component";

export default function Message(props) {

	const lang = useContext(LangContext);

	return (
		<div className="position-fixed top-0 end-0 p-3">
			<div id={props.id} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
				<div className="toast-header">
					<strong className="me-auto">{lang.dictionary["minigames"]}</strong>
					<button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
				</div>
				<div className="toast-body">
					{props.message}
				</div>
			</div>
		</div>
	);
}
