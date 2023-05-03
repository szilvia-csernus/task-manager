// initialization from Materialize https://materializecss.com/navbar.html

document.addEventListener('DOMContentLoaded', function () {
    //sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
	M.Datepicker.init(datepicker, {
		format: 'yyyy-mm-dd'
	});

    // select initialization
    let selects = document.querySelectorAll('select');
	M.FormSelect.init(selects);

    // collapsible initialization
    let collapsible = document.querySelectorAll('.collapsible');
	M.Collapsible.init(collapsible);
});