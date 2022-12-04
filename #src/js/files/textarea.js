document.addEventListener('DOMContentLoaded', function () {

	// получаем поле ввода и вспомогательный блок
	var
		textarea = document.querySelector("#message"),
		block = document.querySelector(".form-blok");

	// при нажатии на клавишу
	if (textarea) {
		textarea.addEventListener("input", function () {

			// получаем значение поля ввода
			var val_text = textarea.value;

			// c помощью регулярных выражений заменм некоторые символы
			val_text = val_text.replace(/ /g, "&nbsp;");
			val_text = val_text.replace(/<|>/g, "_");
			val_text = val_text.replace(/\n/g, "<br>");
			val_text = val_text.replace(/\r/g, "<br>");

			// полученное выражение добавим в вспомогательный блок
			block.innerHTML = val_text;

			// получаем высоту вспомогательного блока
			height_textarea = block.offsetHeight;

			// задаем высоту для текстового поля
			textarea.style.height = height_textarea + "px";
		})
	}
})
// chat textarea
const myText = document.querySelector('.form-chat__textarea');
const myTextWrapper = document.querySelector('.form-chat__body');
if (myText) {
	myText.style.cssText = `height: ${myText.scrollHeight}px; overflow-y: hidden`;
	myText.addEventListener("input", function () {
		this.style.height = "20px";
		this.style.height = `${this.scrollHeight}px`;
		if (myText.value === '') {
			myTextWrapper.classList.remove('active')
		} else {
			myTextWrapper.classList.add('active');
		}
	});
}