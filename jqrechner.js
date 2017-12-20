$(document).ready(function() {
	var zahl = 0;
	var letzteZahl = 0;
	var operator = "";
	$('.knopf').click(function() {

		var knopf = $(this).html();
		console.log(knopf);

		if (isNaN(knopf) == false) {

			if (zahl == '0') {
				zahl = knopf;
				$("#display").text(knopf);
			}

      else if (zahl == Math.PI) {
				zahl = knopf;
				$("#display").text(knopf);
			}

      else {
				zahl = zahl + knopf;
				$("#display").append(knopf);
			};
		}

    else if (knopf == '.') {
			zahl += '.';
			$("#display").append(knopf);
		}

    else if (knopf == 'C') {
			zahl = 0;
			letzteZahl = 0;
			$("#display").text("0");
		}

    else if (knopf == 'π') {
			zahl = Math.PI;
			$("#display").text(Math.PI);
		}

    else if (knopf == 'x²'){
			zahl = zahl * zahl;
			$("#display").text(zahl);

		}

    else if (knopf == '√x') {
			zahl = Math.sqrt(zahl);
			$("#display").text(zahl);
		}

    else if (knopf == '+' || knopf == '-' || knopf == '*' || knopf == '/') {
			letzteZahl = zahl;
			operator = knopf;
			zahl = 0;
			$("#display").text(zahl);
		}

    else if (knopf == '=') {

			switch (operator) {

				case "+":
					zahl = parseFloat(letzteZahl) + parseFloat(zahl);
					$("#display").text(zahl);
					break;

				case "-":

					zahl = parseFloat(letzteZahl) - parseFloat(zahl);
					$("#display").text(zahl);
					break;

				case "*":

					zahl = parseFloat(letzteZahl) * parseFloat(zahl);
					$("#display").text(zahl);
					break;

				case "/":

					zahl = parseFloat(letzteZahl) / parseFloat(zahl);
					$("#display").text(zahl);
					break;

				default:
			}

		}
	});
});
