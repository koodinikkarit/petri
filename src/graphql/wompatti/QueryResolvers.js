

export default {
    computer(obj, args, context) {

    },
    computers(obj, {
        offset,
        limit    
    }, context) {
        return context.fetchComputers({
            offset,
            limit
        });
    },
    device(obj, args, context) {

    },
    devices(obj, args, context) {

    },
    deviceInfo(obj, args, contex) {

    },
    ethernetInterfaces(obj, args, contex) {

    },
    ethernetInterface(obj, args, contex) {

    },
    wolInterface(obj, args, contex) {

    },
    deviceTypes(obj, args, contex) {

    },
    deviceType(obj, args, contex) {

    },
    telnetInterface(obj, args, context) {

    },
    telnetInterfaces(obj, args, context) {

    }
}