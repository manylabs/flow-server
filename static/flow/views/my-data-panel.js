//
// A widget that shows "My Data"
//
var MyDataPanel = function(options) {

    var container   = options.container;
    var editor      = options.editor;

    //
    // Main panel
    //
    var panel       = jQuery('<div>', { id: 'my-data-panel',
                                        css: {  width: '200px',
                                                float: 'right' } });

    var myDataTable = jQuery('<table>', { css: { 
                                            width:  '99%',
                                            height: '300px',
                                            border: '1px solid lightgrey' } } );

    //
    // Title
    //
    var myDataTitle = jQuery('<div>', { css: {  textAlign: 'center',
                                                paddingTop: '5px'   } });
    myDataTitle.text('My Data');

    var myDataList  = jQuery('<div>', 
                        {     id:    'my-data-list',
                            css: {
                                width:      '100%',
                                height:     '200px'  } });

    var piButton    = jQuery('<button>', 
                        {       class: 'button color-connect-to-pi-button',
                                css: {
                                    width:      '100%',
                                    padding:    '4px',
                                    left:       '0px',
                                    bottom:     '0px'   }});

    piButton.text('Connect to Pi');
    piButton.click( function() {
        // console.log("[DEBUG] Connect to Pi click()");
        editor.getPiSelectorPanel().loadPiList();
        $('#my-data-panel').hide(); 
        $('#pi-selector-panel').show(); 
    });

    Util.addTableRow(myDataTable, [myDataTitle], { verticalAlign: 'top' } );
    Util.addTableRow(myDataTable, [myDataList]);
    Util.addTableRow(myDataTable, [piButton], { padding: '2px',
                                                verticalAlign: 'bottom' } );

    panel.append(myDataTable);
    panel.hide();
    container.append(panel);

    return this;
}