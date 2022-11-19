// JavaScript source code
let models = {
	"A": {
		"brand-3": [25, 25, 25, null, null],
		"brand-6": [49, 49, 49, null, null],
		"brand-12": [64, 49, 64, null, null],
		"brand-15": [72, 72, 72, 64, 49]
	},
	"B": {
		"brand-3": [12, 12, 12, null, null],
		"brand-6": [25, 25, 25, null, null],
		"brand-12": [36, 25, 36, null, null],
		"brand-15": [56, 49, 46, 36, 36]
		}
};

let height = [1, 2, 3, 4, 5];



// Функція отримання індексу всередині батьківського елемента
export function indexInParent(parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};


// селектор

<div class="form__item">
	<div class="form__label">Тип монтажу модуля</div>
	<select name="heightValueSelect" class="form__select">
		<option value="1" selected>При висоті монтажу модуля до 3,0 м</option>
		<option value="2">При висоті монтажу модуля від 3,0 до 4,5 м</option>
		<option value="3">При настінному кріпленні до 3,5 м</option>
		<option value="4">При висоті монтажу модуля від 4,5 до 6,0 м</option>
		<option value="5">При висоті монтажу модуля від 6,0 до 8,0 м</option>
	</select>
</div>