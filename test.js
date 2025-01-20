// var value = '.1.3.6.1.4.1.22736.10.2.3.1.1 = INTEGER: 103\n\
// .1.3.6.1.4.1.22736.10.2.3.1.2 = STRING: "SIP"\n\
// .1.3.6.1.4.1.22736.10.2.3.1.3 = STRING: "T1"\n\
// .1.3.6.1.4.1.22736.10.2.3.1.4 = STRING: "172.24.16.9"\n\
// .1.3.6.1.4.1.22736.10.2.3.1.5 = STRING: "9287583961"\n\
// .1.3.6.1.4.1.22736.10.2.3.1.6 = INTEGER: 1700\n\
// .1.3.6.1.4.1.22736.10.2.3.1.7 = STRING: "0.962"\n\
// .1.3.6.1.4.1.22736.10.2.3.1.8 = STRING: "registered"\n\
// .1.3.6.1.4.1.22736.10.2.3.2.1 = INTEGER: 108\n\
// .1.3.6.1.4.1.22736.10.2.3.2.2 = STRING: "SIP"\n\
// .1.3.6.1.4.1.22736.10.2.3.2.3 = STRING: "DVPage"\n\
// .1.3.6.1.4.1.22736.10.2.3.2.4 = STRING: "172.24.17.12"\n\
// .1.3.6.1.4.1.22736.10.2.3.2.5 = STRING: "BCESD-DV-page-gstream"\n\
// .1.3.6.1.4.1.22736.10.2.3.2.6 = INTEGER: 1725\n\
// .1.3.6.1.4.1.22736.10.2.3.2.7 = STRING: "13.307"\n\
// .1.3.6.1.4.1.22736.10.2.3.2.8 = STRING: "ok"\n\
// .1.3.6.1.4.1.22736.10.2.3.3.1 = INTEGER: 123\n\
// .1.3.6.1.4.1.22736.10.2.3.3.2 = STRING: "SIP"\n\
// .1.3.6.1.4.1.22736.10.2.3.3.3 = STRING: "FreePBX"\n\
// .1.3.6.1.4.1.22736.10.2.3.3.4 = STRING: "freepbx.bcsd15.org"\n\
// .1.3.6.1.4.1.22736.10.2.3.3.5 = STRING: "BCSDSwitchvox"\n\
// .1.3.6.1.4.1.22736.10.2.3.3.6 = INTEGER: 0\n\
// .1.3.6.1.4.1.22736.10.2.3.3.7 = STRING: "1.424"\n\
// .1.3.6.1.4.1.22736.10.2.3.3.8 = STRING: "ok"';
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}
var value = '';

if (!value)
{
    return undefined;
}

var arr = value.split("\n");
var snmp_id = [];
var data_id = {};
var data_name = {};
var result = "[\r\n";
for (var i = 0; i < arr.length; i++)
{
    var test = arr[i].split(': ');
    var value = test[1];
    test = test[0].split(' = ');
    var oid_data = test[0].split('.');
    if (!snmp_id.contains(oid_data[oid_data.length - 2]))
    {
        snmp_id.push(oid_data[oid_data.length - 2])
    }
    if (oid_data[oid_data.length -1] == '1')
    {
        data_id[oid_data[oid_data.length - 2]] = value;
    }
    else if (oid_data[oid_data.length - 1] == '3')
    {
        data_name[oid_data[oid_data.length - 2]] = value;
    }
}
for (var i = 0; i < snmp_id.length; i++)
{
    result = result + '    {\r\n        "{#SNMPINDEX}": "' + snmp_id[i] + '",\r\n';
    result = result + '        "{#DATAID}": "' + data_id[snmp_id[i]] + '",\r\n';
    result = result + '        "{#DATANAME}": ' + data_name[snmp_id[i]] + '\r\n    }';
    if (i == snmp_id.length - 1)
    {
        result = result + '\r\n';
    }
    else
    {
        result = result + ',\r\n';
    }
}
result = result + ']';
console.log(result);