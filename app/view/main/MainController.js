/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Packt.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Packt.util.Util'
    ],

    alias: 'controller.main',

    onLogout: function(button, e, options) {
        var me = this;

        Ext.Ajax.request({
            url: 'php/security/logout.php',
            scope: me,
            success: 'onLogoutSuccess',
            failure: 'onLogoutFailure'
        });
    },

    onLogoutFailure: function(conn, response, options, eOpts) {
        Packt.util.Util.showErrorMsg(conn.responseText);
    },

    onLogoutSuccess: function(conn, response, options, eOpts) {
        var result = Packt.util.Util.decodeJSON(conn.response);

        if(result.success) {
            this.getView().destroy();
            window.location.reload();
        } else {
            Pack.util.Util.showErrorMsg(result.msg);
        }
    }
});
