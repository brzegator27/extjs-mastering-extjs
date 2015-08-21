/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Packt.view.main.Main', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Packt.view.main.MainController',
        'Packt.view.main.MainModel',
        'Packt.view.main.Header',
        'Packt.view.main.Footer',
        'Packt.view.main.Panel'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'mainpanel',
            region: 'center'
        },
        {
            xtype: 'appheader',
            region: 'north'
        },
        {
            xtype: 'appfooter',
            region: 'south'
        },
        {
            xtype: 'container',
            region: 'west',
            width: 200,
            split: true
        }
    ]
});
