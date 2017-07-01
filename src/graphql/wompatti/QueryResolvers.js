

export default {
    computer: (obj, {id}, context) => context.wompatti.fetchComputerById(id),
    allComputers: (obj, args, context) => context.wompatti.fetchComputers(args),
    device: (obj, {id}, context) => context.wompatti.fetchDeviceById(id),
    allDevices: (obj, args, context) => context.wompatti.fetchDevices(args),
    deviceInfo: (obj, {id}, context) => context.wompatti.fetchDeviceInfoById(id),
    ethernetInterfaces: (obj, args, context) => context.wompatti.fetchEthernetInterfaces(args),
    ethernetInterface: (obj, {id}, context) => context.fetchEthernetInterfaceById(id),
    wolInterface: (obj, {id}, context) => context.wompatti.fetchWolInterfaceById(id),
    deviceType: (obj, {id}, context) => context.wompatti.fetchDeviceTypeById(id),
    allDeviceTypes: (obj, args, context) => context.wompatti.fetchDeviceTypes(args),
    telnetInterface: (obj, {id}, context) => context.wompatti.fetchTelnetInterfaceById(id),
    allTelnetInterfaces: (obj, args, context) => context.wompatti.fetchTelnetInterfaces(args),
    serialInterface: (obj, {id}, context) => context.wompatti.fetchSerialInterfaceById(id),
    allSerialInterfaces: (obj, args, context) => context.wompatti.fetchSerialInterfaces(args)
}