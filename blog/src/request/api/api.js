import axios from "axios";

export function getDetails(params) {
	return new Promise((resolve) => {
		axios.get(require(`../../md/${params.id}.md`)).then((res) => {
			resolve(res.data);
		});
	});
}
