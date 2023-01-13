export const workDays = [
	{
		dayName: 'Lunes',
		openHour: '10:00',
		closeHour: '20:00',
	},
	{
		dayName: 'Martes',
		openHour: '10:00',
		closeHour: '20:00',
	},
	{
		dayName: 'Miércoles',
		openHour: '10:00',
		closeHour: '20:00',
	},
	{
		dayName: 'Jueves',
		openHour: '10:00',
		closeHour: '20:00',
	},
	{
		dayName: 'Viernes',
		openHour: '10:00',
		closeHour: '20:00',
	},
	{
		dayName: 'Sábado',
		openHour: '10:00',
		closeHour: '20:00',
	},

];

const formatDate = (msDate) => {
	const date = new Date(msDate);
	const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()];
	const [hour, mins] = [date.getHours(), date.getMinutes()];
	return `${day}/${month}/${year} ${hour}:${mins} hs`;
};

export const createWppLink = (orderData) => {
	const BASE_URL = 'https://wa.me/5491151233333?text=';
	const msg =
		`Hola! Esta es la orden *#${orderData.id}* de _AppleMe_,` +
		`generada hoy _${formatDate(orderData.date)}_ por *${orderData.buyer.name} ${
			orderData.buyer.lastname
		}*.\n` +
		`A continuación los detalles del pedido:\n` +
		`${orderData.items.map((item) => `- ${item.title} - $ ${item.price} x${item.quantity}\n`)}` +
		`*Forma de pago:* ${orderData.buyer.payment}\n` +
		`*TOTAL:* $ ${orderData.total}\n` +
		`A continuación enviaré mi ubicación.`;
	return BASE_URL + encodeURIComponent(msg);
};

export const openWpp = (orderData) => {
	try {
		const newTab = window.open();
		newTab.location.href = createWppLink(orderData);
	} catch {
		// Evita un error en mobile cuándo se bloquea el popUp
		console.log('No se pudo abrir WhatsApp');
	}
};
