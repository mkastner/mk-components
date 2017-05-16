import Event from 'mk-event';

function ComponentController(appContext, options) {

    let properties = {
        viewHandlers: {
            writable: true,
            value: {}
        },
        event: {
            writable: false,
            value: Event()
        }
    };

    let prototype = {
        setViewHandler: function(name, handler) {
            this.viewHandlers[name] = handler
        }
    };

    return Object.create(prototype, properties);

}

export default ComponentController;
