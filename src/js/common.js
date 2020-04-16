$(document).ready(function() {
    $(function() {

        $('#zond-date').daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear',
                format: 'DD.MM.YYYY'
            }
        });

        $('#zond-date').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
        });

        $('#zond-date').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });

    });

    $(function() {

        $('#zond-date-form').daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear',
                format: 'DD.MM.YYYY'
            }
        });

        $('#zond-date-form').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
        });

        $('#zond-date-form').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });

    });
});


