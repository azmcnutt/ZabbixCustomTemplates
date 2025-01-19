var value = '.1.3.6.1.4.1.22736.10.2.3.1.1 = INTEGER: 103\n\
.1.3.6.1.4.1.22736.10.2.3.1.2 = STRING: "SIP"\n\
.1.3.6.1.4.1.22736.10.2.3.1.3 = STRING: "T1"\n\
.1.3.6.1.4.1.22736.10.2.3.1.4 = STRING: "172.24.16.9"\n\
.1.3.6.1.4.1.22736.10.2.3.1.5 = STRING: "9287583961"\n\
.1.3.6.1.4.1.22736.10.2.3.1.6 = INTEGER: 1700\n\
.1.3.6.1.4.1.22736.10.2.3.1.7 = STRING: "0.962"\n\
.1.3.6.1.4.1.22736.10.2.3.1.8 = STRING: "registered"\n\
.1.3.6.1.4.1.22736.10.2.3.2.1 = INTEGER: 108\n\
.1.3.6.1.4.1.22736.10.2.3.2.2 = STRING: "SIP"\n\
.1.3.6.1.4.1.22736.10.2.3.2.3 = STRING: "DVPage"\n\
.1.3.6.1.4.1.22736.10.2.3.2.4 = STRING: "172.24.17.12"\n\
.1.3.6.1.4.1.22736.10.2.3.2.5 = STRING: "BCESD-DV-page-gstream"\n\
.1.3.6.1.4.1.22736.10.2.3.2.6 = INTEGER: 1725\n\
.1.3.6.1.4.1.22736.10.2.3.2.7 = STRING: "13.307"\n\
.1.3.6.1.4.1.22736.10.2.3.2.8 = STRING: "ok"\n\
.1.3.6.1.4.1.22736.10.2.3.3.1 = INTEGER: 123\n\
.1.3.6.1.4.1.22736.10.2.3.3.2 = STRING: "SIP"\n\
.1.3.6.1.4.1.22736.10.2.3.3.3 = STRING: "FreePBX"\n\
.1.3.6.1.4.1.22736.10.2.3.3.4 = STRING: "freepbx.bcsd15.org"\n\
.1.3.6.1.4.1.22736.10.2.3.3.5 = STRING: "BCSDSwitchvox"\n\
.1.3.6.1.4.1.22736.10.2.3.3.6 = INTEGER: 0\n\
.1.3.6.1.4.1.22736.10.2.3.3.7 = STRING: "1.424"\n\
.1.3.6.1.4.1.22736.10.2.3.3.8 = STRING: "ok"';
var arr = value.split("\n");
var result = "";
var cur = 1;
var snmpindex = '';
var vpid = '';
var vpname = '';
result = "[";
for (var i = 0; i < arr.length; i++)
{
    var el = arr[i].substring(26,27);
    if (el == cur) {
        snmpindex = el;
        if (arr[i].substring(28,29) == '1')
        {
            temp = arr[i].split(': ');
            vpid = temp[1];
        }else if (arr[i].substring(28,29) == '3'){
            temp = arr[i].split(': ');
            vpname = temp[1];
        }
    }else{
        result = result + '\r\n\
    {\r\n\
        "{#SNMPINDEX}":' + cur + ',\r\n\
        "{#VPID}": ' + vpid + ',\r\n\
        "{#VPNAME}": ' + vpname +'\r\n\
    },\r\n';
        cur = el;
        vpid = arr[i].split(': ')[1];
        vpname = '';
    }
}
result = result + '\r\n\
    {\r\n\
        "{#SNMPINDEX}":' + cur + ',\r\n\
        "{#VPID}": ' + vpid + ',\r\n\
        "{#VPNAME}": ' + vpname +'\r\n\
    }\r\n]';
console.log(result);