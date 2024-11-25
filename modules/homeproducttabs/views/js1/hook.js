/**
 *
 * @author    businesstech.fr <modules@businesstech.fr> - https://www.businesstech.fr/
 * @copyright Business Tech  - https://www.businesstech.fr/
 * @license   see file: LICENSE.txt
 *
 *           ____    _______
 *          |  _ \  |__   __|
 *          | |_) |    | |
 *          |  _ <     | |
 *          | |_) |    | |
 *          |____/     |_|
 */

var ConfigureForm = function() {
	this.sForm = null;

	this.init = function(sUsedForm) {
		this.sForm = sUsedForm;
	};

	this.send = function() {
		var oFormConfigure = document.getElementById(this.sForm);

		if (typeof(oFormConfigure) != 'undefined') {
			// verify checkbox & selected list
			var bSelected = false;

			for (var i = 0; i < oFormConfigure.elements['aCategories[]'].length; i++) {
				if (oFormConfigure.elements['aCategories[]'][i].checked) {
					// checked if a sort type is declared
					for (var j = 0; j < document.getElementById('aCatSortBy'+i).length; j++) {
						if (document.getElementById('aCatSortBy'+i).options[j].selected == true
							&&
							document.getElementById('aCatSortBy'+i).options[j].value !=	''
						) {
							bSelected = true;
						}
					}
					for (var j = 0; j < document.getElementById('aCatWayBy'+i).length; j++) {
						if (document.getElementById('aCatWayBy'+i).options[j].selected == true
							&&
							document.getElementById('aCatWayBy'+i).options[j].value !=	''
							) {
							bSelected = true;
						}
					}
				}
			}
			if (!bSelected) {
				alert('You have to select one category at least with sort type');
			}
			else if (!isFinite(document.getElementById('iMaxProduct').value)) {
				//alert('You have to enter a number for max products in tab');
			}
			else {
				oFormConfigure.submit();
			}
		}
		else {
			alert('form : ' +  this.sForm + ' is not defined');
		}
		return false;
	};
};
