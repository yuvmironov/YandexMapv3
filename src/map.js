ymaps.ready(createMap);

/**
 * Функция построения элемента телефона
 * @param phone - номер телефона для вставки
 * @param className - Имя класса для элемента телефона
 * @return {HTMLParagraphElement} - элемент для вставки в дом
 */
function phoneCreate (phone, className) {
	const phoneElement = document.createElement('p');
	phoneElement.className = className;
	phoneElement.innerText += phone;
	return phoneElement;
}

/**
 * Функция построения элемента графика работы
 * @param schedule - строка с графиком работы для вставки
 * @param className - класс для элемента графика работы
 * @return {HTMLParagraphElement} - элемент для вставки в дом
 */
function scheduleCreate (schedule, className) {
	const phoneElement = document.createElement('p');
	phoneElement.className = className;
	phoneElement.innerText += schedule;
	return phoneElement;
}

/**
 * Функция для создания элемента карты с одним классом
 * @param teg - Необходимый тег
 * @param className - Имя класса
 * @param inner - Содержимое тега
 * @return {HTMLElement | HTMLSelectElement | HTMLLegendElement | HTMLTableCaptionElement | HTMLTextAreaElement | HTMLModElement | HTMLHRElement | HTMLOutputElement | HTMLPreElement | HTMLEmbedElement | HTMLCanvasElement | HTMLFrameSetElement | HTMLMarqueeElement | HTMLScriptElement | HTMLInputElement | HTMLUnknownElement | HTMLMetaElement | HTMLStyleElement | HTMLObjectElement | HTMLTemplateElement | MSHTMLWebViewElement | HTMLBRElement | HTMLAudioElement | HTMLIFrameElement | HTMLMapElement | HTMLTableElement | HTMLAnchorElement | HTMLMenuElement | HTMLPictureElement | HTMLParagraphElement | HTMLTableDataCellElement | HTMLTableSectionElement | HTMLQuoteElement | HTMLTableHeaderCellElement | HTMLProgressElement | HTMLLIElement | HTMLTableRowElement | HTMLFontElement | HTMLSpanElement | HTMLTableColElement | HTMLOptGroupElement | HTMLDataElement | HTMLDListElement | HTMLFieldSetElement | HTMLSourceElement | HTMLBodyElement | HTMLDirectoryElement | HTMLDivElement | HTMLUListElement | HTMLHtmlElement | HTMLAreaElement | HTMLMeterElement | HTMLAppletElement | HTMLFrameElement | HTMLOptionElement | HTMLImageElement | HTMLLinkElement | HTMLHeadingElement | HTMLVideoElement | HTMLBaseFontElement | HTMLTitleElement | HTMLButtonElement | HTMLHeadElement | HTMLParamElement | HTMLTrackElement | HTMLOListElement | HTMLDataListElement | HTMLLabelElement | HTMLFormElement | HTMLTimeElement | HTMLBaseElement}
 */
function createElementSingleClass (teg, className='', inner = '') {
	const element = document.createElement(teg);
	element.className = className;
	element.innerText = inner;
	return element;
}

/**
 * Функция для создания ссылки
 * @param className - класс
 * @param hrefLink - значение атирибута href
 * @param inner - Текст для отображения
 * @return {HTMLAnchorElement} - готовый элемент ссылки для вставки
 */
function createLink(className, hrefLink, inner) {
	const link = document.createElement('a');
	const text = document.createTextNode(inner);
	link.className = className;
	link.href = hrefLink;
	link.appendChild(text);
	return link;
}

/**
 * Функция для создания строки с информацией о магазине
 * @param nameInfoLine - Название строки
 * @param data - Данные
 * @param wrapDataLineClass - клас для обертки
 * @param dataLineClass - клас для данных
 * @return {HTMLElement|HTMLSelectElement|HTMLLegendElement|HTMLTableCaptionElement|HTMLTextAreaElement|HTMLModElement|HTMLHRElement|HTMLOutputElement|HTMLPreElement|HTMLEmbedElement|HTMLCanvasElement|HTMLFrameSetElement|HTMLMarqueeElement|HTMLScriptElement|HTMLInputElement|HTMLUnknownElement|HTMLMetaElement|HTMLStyleElement|HTMLObjectElement|HTMLTemplateElement|MSHTMLWebViewElement|HTMLBRElement|HTMLAudioElement|HTMLIFrameElement|HTMLMapElement|HTMLTableElement|HTMLAnchorElement|HTMLMenuElement|HTMLPictureElement|HTMLParagraphElement|HTMLTableDataCellElement|HTMLTableSectionElement|HTMLQuoteElement|HTMLTableHeaderCellElement|HTMLProgressElement|HTMLLIElement|HTMLTableRowElement|HTMLFontElement|HTMLSpanElement|HTMLTableColElement|HTMLOptGroupElement|HTMLDataElement|HTMLDListElement|HTMLFieldSetElement|HTMLSourceElement|HTMLBodyElement|HTMLDirectoryElement|HTMLDivElement|HTMLUListElement|HTMLHtmlElement|HTMLAreaElement|HTMLMeterElement|HTMLAppletElement|HTMLFrameElement|HTMLOptionElement|HTMLImageElement|HTMLLinkElement|HTMLHeadingElement|HTMLVideoElement|HTMLBaseFontElement|HTMLTitleElement|HTMLButtonElement|HTMLHeadElement|HTMLParamElement|HTMLTrackElement|HTMLOListElement|HTMLDataListElement|HTMLLabelElement|HTMLFormElement|HTMLTimeElement|HTMLBaseElement}
 */
function createInfoLine (nameInfoLine, data, wrapDataLineClass, dataLineClass) {
	//Оберка для отдельной строки в инфо блоке
	const infoLine = createElementSingleClass('div', 'Store-LineWrap');
	//Заголовок в строке
	infoLine.innerHTML = `<p class="Store-LineCaption">${nameInfoLine}</p>`;
	const dataMass = data.split('|');
	const dataWrap = createElementSingleClass('div', wrapDataLineClass);
	for (let i = 0; i < dataMass.length; i++) {
		const dataElement = phoneCreate(dataMass[i], dataLineClass);
		dataWrap.appendChild(dataElement);
	}
	infoLine.appendChild(dataWrap);
	return infoLine;
}

/**
 * Функция для создания строки с дополнительной информацией
 * @param name - Название для строки
 * @param phone - номер(а) телефона
 * @param schedule - график(и) работы
 * @param mail - E-mail('s)
 * @return {HTMLElement|HTMLSelectElement|HTMLLegendElement|HTMLTableCaptionElement|HTMLTextAreaElement|HTMLModElement|HTMLHRElement|HTMLOutputElement|HTMLPreElement|HTMLEmbedElement|HTMLCanvasElement|HTMLFrameSetElement|HTMLMarqueeElement|HTMLScriptElement|HTMLInputElement|HTMLUnknownElement|HTMLMetaElement|HTMLStyleElement|HTMLObjectElement|HTMLTemplateElement|MSHTMLWebViewElement|HTMLBRElement|HTMLAudioElement|HTMLIFrameElement|HTMLMapElement|HTMLTableElement|HTMLAnchorElement|HTMLMenuElement|HTMLPictureElement|HTMLParagraphElement|HTMLTableDataCellElement|HTMLTableSectionElement|HTMLQuoteElement|HTMLTableHeaderCellElement|HTMLProgressElement|HTMLLIElement|HTMLTableRowElement|HTMLFontElement|HTMLSpanElement|HTMLTableColElement|HTMLOptGroupElement|HTMLDataElement|HTMLDListElement|HTMLFieldSetElement|HTMLSourceElement|HTMLBodyElement|HTMLDirectoryElement|HTMLDivElement|HTMLUListElement|HTMLHtmlElement|HTMLAreaElement|HTMLMeterElement|HTMLAppletElement|HTMLFrameElement|HTMLOptionElement|HTMLImageElement|HTMLLinkElement|HTMLHeadingElement|HTMLVideoElement|HTMLBaseFontElement|HTMLTitleElement|HTMLButtonElement|HTMLHeadElement|HTMLParamElement|HTMLTrackElement|HTMLOListElement|HTMLDataListElement|HTMLLabelElement|HTMLFormElement|HTMLTimeElement|HTMLBaseElement}
 */
function createAdditionalInfoLine(name, phone, schedule, mail) {
	const infoLine = createElementSingleClass('div', 'Store-LineWrap');
	infoLine.innerHTML = `<p class="Store-LineCaption">${name}</p>`;
	const infoAddWrap = createElementSingleClass('div');
	const phoneData = createElementSingleClass('p', 'Store-Phone', phone);
	const scheduleData = createElementSingleClass('p', 'Store-Schedule', schedule);
	const mailData = createElementSingleClass('p', 'Store-Mail', mail);
	infoAddWrap.appendChild(phoneData);
	infoAddWrap.appendChild(scheduleData);
	infoAddWrap.appendChild(mailData);
	infoLine.appendChild(infoAddWrap);
	return infoLine;
}

/**
 * Функция для создания блока с ближайшими магазинами
 * @param data - данные по одному ближайшему магазину
 * @param map - Карта
 * @return {HTMLElement|HTMLSelectElement|HTMLLegendElement|HTMLTableCaptionElement|HTMLTextAreaElement|HTMLModElement|HTMLHRElement|HTMLOutputElement|HTMLPreElement|HTMLEmbedElement|HTMLCanvasElement|HTMLFrameSetElement|HTMLMarqueeElement|HTMLScriptElement|HTMLInputElement|HTMLUnknownElement|HTMLMetaElement|HTMLStyleElement|HTMLObjectElement|HTMLTemplateElement|MSHTMLWebViewElement|HTMLBRElement|HTMLAudioElement|HTMLIFrameElement|HTMLMapElement|HTMLTableElement|HTMLAnchorElement|HTMLMenuElement|HTMLPictureElement|HTMLParagraphElement|HTMLTableDataCellElement|HTMLTableSectionElement|HTMLQuoteElement|HTMLTableHeaderCellElement|HTMLProgressElement|HTMLLIElement|HTMLTableRowElement|HTMLFontElement|HTMLSpanElement|HTMLTableColElement|HTMLOptGroupElement|HTMLDataElement|HTMLDListElement|HTMLFieldSetElement|HTMLSourceElement|HTMLBodyElement|HTMLDirectoryElement|HTMLDivElement|HTMLUListElement|HTMLHtmlElement|HTMLAreaElement|HTMLMeterElement|HTMLAppletElement|HTMLFrameElement|HTMLOptionElement|HTMLImageElement|HTMLLinkElement|HTMLHeadingElement|HTMLVideoElement|HTMLBaseFontElement|HTMLTitleElement|HTMLButtonElement|HTMLHeadElement|HTMLParamElement|HTMLTrackElement|HTMLOListElement|HTMLDataListElement|HTMLLabelElement|HTMLFormElement|HTMLTimeElement|HTMLBaseElement}
 */
function createNearestStore(data, map) {
	//Блок обёрка
	const element = createElementSingleClass('div', 'NearestStores-Line');
	
	//Элемент для названия магазина
	const name = createElementSingleClass('p', 'NearestStores-Name', data.nameStore);
	//Элемент для названия адреса
	const address = createElementSingleClass('p', 'NearestStores-Address', data.addressStore);
	
	/** --- Блок для графика работы --- **/
	//Обёртка для блока графика
	const scheduleWrap = createElementSingleClass('div', 'NearestStores-ScheduleWrap');
	const scheduleHeader = createElementSingleClass('p', 'NearestStores-ScheduleName', 'График работы');
	scheduleWrap.appendChild(scheduleHeader);
	const schedule = createElementSingleClass('p', 'NearestStores-ScheduleData', data.scheduleStore);
	scheduleWrap.appendChild(schedule);
	
	/** --- Блок для телефона --- **/
	const phoneWrap = createElementSingleClass('div', 'NearestStores-PhoneWrap');
	const phoneHeader = createElementSingleClass('p', 'NearestStores-PhoneName', 'Телефон');
	phoneWrap.appendChild(phoneHeader);
	const phone = createElementSingleClass('p', 'NearestStores-PhoneData', data.phoneStore);
	phoneWrap.appendChild(phone);
	
	/** --- Обёрктка дял телефона и графика работы --- **/
	const infoWrap = createElementSingleClass('div', 'NearestStores-InfoWrap');
	infoWrap.appendChild(scheduleWrap);
	infoWrap.appendChild(phoneWrap);
	
	
	//Собираем в едино
	element.appendChild(name);
	element.appendChild(address);
	element.appendChild(infoWrap);
	console.log('data ', data);
	//Разбираем и приводим к числам координаты магазина
	let coordinates = data.coordinates.split(',');
	for (let i = 0; i < coordinates.length; i++) {
		coordinates[i] = Number(coordinates[i]);
	}
	let placemark = new ymaps.Placemark(
		coordinates,
			{
				hintContent: data.nameStore,
				balloonContentHeader: `${data.nameStore}`,
				balloonContentBody: data.addressStore,
				balloonContentFooter: data.phoneStore + data.scheduleStore
			},
			{
				iconLayout: 'default#image',
				iconImageHref: 'Item.svg',
				iconImageSize: [20,20],
				iconImageOffset: [-10,-10],
				hideIconOnBalloonOpen: false
			}
	);
	element.addEventListener('mouseenter', function () {
		placemark.balloon.open();
	});
	element.addEventListener('mouseleave', function () {
		placemark.balloon.close();
	});
	placemark.events
	.add('mouseenter', ()=> {
		element.style.backgroundColor = '#e0e0e0';
	})
	.add('mouseleave', ()=>{
		element.style.backgroundColor = '';
	});
	map.geoObjects.add(placemark);
	
	return element;
	
}

/**
 * Функция создания ссылок и блоков для блока как добраться
 * @param data - Данные для создания блока
 * @param methodClass - Класс для линка способа
 * @param methodName - Название для способа
 * @param methodDescClass - Имя класса для описания способа доставки
 * @param descBlock - блок в который добавляется описание метода
 * @return {HTMLElement|HTMLSelectElement|HTMLLegendElement|HTMLTableCaptionElement|HTMLTextAreaElement|HTMLModElement|HTMLHRElement|HTMLOutputElement|HTMLPreElement|HTMLEmbedElement|HTMLCanvasElement|HTMLFrameSetElement|HTMLMarqueeElement|HTMLScriptElement|HTMLInputElement|HTMLUnknownElement|HTMLMetaElement|HTMLStyleElement|HTMLObjectElement|HTMLTemplateElement|MSHTMLWebViewElement|HTMLBRElement|HTMLAudioElement|HTMLIFrameElement|HTMLMapElement|HTMLTableElement|HTMLAnchorElement|HTMLMenuElement|HTMLPictureElement|HTMLParagraphElement|HTMLTableDataCellElement|HTMLTableSectionElement|HTMLQuoteElement|HTMLTableHeaderCellElement|HTMLProgressElement|HTMLLIElement|HTMLTableRowElement|HTMLFontElement|HTMLSpanElement|HTMLTableColElement|HTMLOptGroupElement|HTMLDataElement|HTMLDListElement|HTMLFieldSetElement|HTMLSourceElement|HTMLBodyElement|HTMLDirectoryElement|HTMLDivElement|HTMLUListElement|HTMLHtmlElement|HTMLAreaElement|HTMLMeterElement|HTMLAppletElement|HTMLFrameElement|HTMLOptionElement|HTMLImageElement|HTMLLinkElement|HTMLHeadingElement|HTMLVideoElement|HTMLBaseFontElement|HTMLTitleElement|HTMLButtonElement|HTMLHeadElement|HTMLParamElement|HTMLTrackElement|HTMLOListElement|HTMLDataListElement|HTMLLabelElement|HTMLFormElement|HTMLTimeElement|HTMLBaseElement}
 */
function createHow(data, methodClass, methodName, methodDescClass, descBlock) {
	const methodWrap = createElementSingleClass('div', methodClass);
	methodWrap.innerHTML = `<span class="${methodClass}_Name">${methodName}</span>`;
	for (let i = 0; i < data.length; i++) {
		const id = Math.random().toString(36).slice(-10); //Генерация уникального ID для работы аккордионной системы показа
		const methodNameLink = createLink('Accordion-Link', `#${id}`, data[i].methodHowGet);
		methodWrap.appendChild(methodNameLink);
		const methodDesc = createElementSingleClass('div', methodDescClass, data[i].descMethod);
		methodDesc.id = id;
		descBlock.appendChild(methodDesc);
	}
	return methodWrap;
}

/**
 * Функция для создания данных о магазине
 * @param data - Данные о магазине
 * @param map - линк на карту, для добавления метки метки
 * @return {HTMLElement|HTMLSelectElement|HTMLLegendElement|HTMLTableCaptionElement|HTMLTextAreaElement|HTMLModElement|HTMLHRElement|HTMLOutputElement|HTMLPreElement|HTMLEmbedElement|HTMLCanvasElement|HTMLFrameSetElement|HTMLMarqueeElement|HTMLScriptElement|HTMLInputElement|HTMLUnknownElement|HTMLMetaElement|HTMLStyleElement|HTMLObjectElement|HTMLTemplateElement|MSHTMLWebViewElement|HTMLBRElement|HTMLAudioElement|HTMLIFrameElement|HTMLMapElement|HTMLTableElement|HTMLAnchorElement|HTMLMenuElement|HTMLPictureElement|HTMLParagraphElement|HTMLTableDataCellElement|HTMLTableSectionElement|HTMLQuoteElement|HTMLTableHeaderCellElement|HTMLProgressElement|HTMLLIElement|HTMLTableRowElement|HTMLFontElement|HTMLSpanElement|HTMLTableColElement|HTMLOptGroupElement|HTMLDataElement|HTMLDListElement|HTMLFieldSetElement|HTMLSourceElement|HTMLBodyElement|HTMLDirectoryElement|HTMLDivElement|HTMLUListElement|HTMLHtmlElement|HTMLAreaElement|HTMLMeterElement|HTMLAppletElement|HTMLFrameElement|HTMLOptionElement|HTMLImageElement|HTMLLinkElement|HTMLHeadingElement|HTMLVideoElement|HTMLBaseFontElement|HTMLTitleElement|HTMLButtonElement|HTMLHeadElement|HTMLParamElement|HTMLTrackElement|HTMLOListElement|HTMLDataListElement|HTMLLabelElement|HTMLFormElement|HTMLTimeElement|HTMLBaseElement}
 */
function createAddress(data, map) {
	//Создаем возвращаемый элемент для вставки на инфо о карте
	const element = createElementSingleClass('div', 'Store');
	
	//Создаем элемент для названия магазина
	const name = createElementSingleClass('p', 'Store-Name', data.brandName);
	
	//Элемент для адреса магазина
	const address = createElementSingleClass('p', 'Store-Address', data.address);
	
	//Обертка для линков
	const link = createElementSingleClass('div', 'Store-Links');
	
	//Линк как добраться
	const linkHow = createLink('Store-HowToGet', '#HowToGet', 'Как добраться');
	
	//Линк количства ближайших магазинов
	const linkMore = createLink('Store-More', '#MoreStore', `Ближайшие магазины`);
	
	//Собираем линки
	link.appendChild(linkHow);
	link.appendChild(linkMore);
	
	//Обертка для информационных блоков (все элементы с информацией укладываются в этот элемент)
	const info = createElementSingleClass('div', 'Store-Info');
	
	//Получаем элементы с телефонами
	const phone = createInfoLine('Телефоны', data.brandPhone, 'Store-PhoneWrap', 'Store-Phone');
	info.appendChild(phone);
	
	//Получаем элементы с графиком работы
	const schedule = createInfoLine('График работы', data.brandSchedule, 'Store-ScheduleWrap', 'Store-Schedule');
	info.appendChild(schedule);
	
	/** --- Собираем дополнительную информацию --- **/
	const addInfo = data.brandAdditionalInformation;
	for (let i = 0; i < addInfo.length; i++) {
		const addLine = createAdditionalInfoLine(addInfo[i].addName, addInfo[i].addPhone, addInfo[i].addShedule, addInfo[i].addEmail);
		info.appendChild(addLine);
	}
	
	
	/** --- Блок с информацией о способах добраться --- **/
	//Обертка для блока
	const howGet = createElementSingleClass('div', 'Store-HowGet');
	howGet.id = 'HowToGet';
	//Заголовок блока
	const howHeader = createElementSingleClass('p', 'Store-HowGetHeader', 'Как добраться');
	const howData = data.howToGetThere;
	//Блок для ссылок
	const container = createElementSingleClass('div', 'Accordion');
	container.id = 'howGetAccordion';
	//Блок для описания
	const description = createElementSingleClass('div', 'Accordion-DescWrap');
	
	for (let key in howData) {
		if (key === 'inCar') {
			const methodInner = createHow (howData[key], 'Accordion-Car', 'На машине', 'Accordion-Desc', description);
			container.appendChild(methodInner);
		} else if (key === 'inPublic') {
			const methodInner = createHow (howData[key], 'Accordion-Public', 'Общ. транспортом', 'Accordion-Desc', description);
			container.appendChild(methodInner);
		} else {
		
		}
	}
	
	//Собираем блок
	howGet.appendChild(howHeader);
	howGet.appendChild(container);
	howGet.appendChild(description);
	
	
	/** --- Блок с информацией о ближайших магазинах --- **/
	//Оберка для блока
	const nearestStores = createElementSingleClass('div', 'NearestStores');
	nearestStores.id = 'MoreStore';
	//Заголовок блока
	const nearestHeader = createElementSingleClass('p', 'NearestStores-Header', 'Ближайшие магазины');
	nearestStores.appendChild(nearestHeader);
	let nearestData = data.nearestStores;
	for (let i = 0; i < nearestData.length; i++) {
		const nearest = createNearestStore(nearestData[i], map);
		nearestStores.appendChild(nearest);
	}
	
	
	

	//Собираем все в кучу
	element.appendChild(name);
	element.appendChild(address);
	element.appendChild(link);
	element.appendChild(info);
	element.appendChild(howGet);
	element.appendChild(nearestStores);
	
	//Разбираем и приводим к числам координаты магазина
	let coordinates = data.brandCoordinates.split(',');
	for (let i = 0; i < coordinates.length; i++) {
		coordinates[i] = Number(coordinates[i]);
	}
	let placemark = new ymaps.Placemark(
		coordinates,
		{
			hintContent: data.brandName,
			balloonContentHeader: `${data.brandName}`,
			balloonContentBody: data.address,
			balloonContentFooter: data.brandPhone + data.brandSchedule
		},
		{
			iconLayout: 'default#image',
			iconImageHref: 'Item.svg',
			iconImageSize: [35,35],
			iconImageOffset: [-17,-17],
			hideIconOnBalloonOpen: false
		}
	);
	address.addEventListener('mouseenter', function () {
		placemark.balloon.open();
	});
	address.addEventListener('mouseleave', function () {
		placemark.balloon.close();
	});
	placemark.events
	.add('mouseenter', ()=> {
		singleBrand.style.backgroundColor = '#e0e0e0';
	})
	.add('mouseleave', ()=>{
		singleBrand.style.backgroundColor = '';
	});
	map.geoObjects.add(placemark);
	
	return element;
}


/**
 * Функция инициализации и построения карты
 */
function createMap(){
		//Получение данных для обработки
	$.getJSON('MapSource.json', (dataMap) => {
		//Получем элемент, где будут находяться элементы управления картой
		const mapInfo = document.getElementById('DescMap');
		
		//Получаем город
		const city = dataMap.city;
		delete dataMap.city;
		//Обращаемся к яндексу для получения координат центра города в котором показываем информацию
		ymaps.geocode(city).then(
			function (res) {
				//Создаем карту и показываем её на странице
				let myMap = new ymaps.Map(
					'Map',
					{
						center: res.geoObjects.get(0).geometry.getCoordinates(),
						zoom: 10,
						controls: ['zoomControl', 'fullscreenControl'],
						behaviors: ['drag', 'dblClickZoom']
					},
					{
						searchControlProvider: 'yandex#search'
					}
				);
				//Получаем элемент для вставки данных по бренду
				const descMap = document.getElementById('DescMap');
				
				//Создаем вставляемый элемент с информацией по бренду
				const address = createAddress(dataMap, myMap);
				
				descMap.appendChild(address);
				$(".Store").mCustomScrollbar();
				
				/** --- Обработчик нажатия на линк доставки --- **/
				const linkMethod = document.querySelectorAll('.Accordion-Link');
				const linkDescription = document.querySelectorAll('.Accordion-Desc');
				console.log('linkMethod ', linkMethod);
				for (let i = 0; i < linkMethod.length; i++) {
					linkMethod[i].addEventListener('click', function (event) {
						event.preventDefault();
						console.log(`Click link method`);
						const id = this.getAttribute('href').slice(1);
						console.log('id ', id);
						const description = document.getElementById(id);
						console.log('description ', description);
						for (let j = 0; j < linkDescription.length; j++) {
							linkDescription[j].style.display = 'none'
						}
						description.style.display = 'block';
					});
				}
				myMap.setBounds(myMap.geoObjects.getBounds());
				myMap.setZoom(myMap.getZoom()-1);
			}
		
		);
		
	});
	console.groupEnd();
}
