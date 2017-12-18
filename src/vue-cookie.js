export default {
	install(Vue) {
		function instance() {
			this.get = (key) => {
				if (!key) return document.cookie;
				let ret,
					reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
				if (ret = document.cookie.match(reg)) {
					return unescape(ret[2]);
				} else {
					return '';
				}
			}
			this.set = (key, value) => {
				if (typeof key === 'string') {
					document.cookie = `${key}=${value}`;
				}
				if (typeof key === 'object' && isNaN(key.length)) {
					document.cookie = `${key.name}=${key.value}`;
				}
				if (Array.isArray(key)) {
					key.forEach((item, idx) => {
						if (item.name) {
							const current = `${item.name}=${item.value}`;
							document.cookie = current;
						} else {
							console.error(`[vue-cookie]: the field of cookie item must be "name"! error in item ${idx}`);
						}
					});
				}
			}
			this.delete = (key) => {
				let expire = new Date();
				expire.setTime(expire.getTime() - 1);
				const ret = this.get(key);
				if (ret) {
					const current = `${key}=${ret};expires=${expire}`;
					document.cookie = current;
				}
			}
		}
		var __instance = new instance();
		Vue.prototype.$cookie = __instance || new instance();
	}
}