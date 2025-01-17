# Switchvox OIDs

## The Switchvox prefix is .1.3.6.1.4.1.22736.10

## .1 Switchvox Information
.1.3.6.1.4.1.22736.10.1.1	software version
.1.3.6.1.4.1.22736.10.1.2	max concurrent calls
.1.3.6.1.4.1.22736.10.1.3	used feature packs
.1.3.6.1.4.1.22736.10.1.4	max feature packs
.1.3.6.1.4.1.22736.10.1.5	used extensions
.1.3.6.1.4.1.22736.10.1.6	max extensions

## .2 VOIP Providers
.1.3.6.1.4.1.22736.10.2.1	number of VOIP providers
.1.3.6.1.4.1.22736.10.2.2	number of state 'Ok' VOIP providers
.1.3.6.1.4.1.22736.10.2.3.1.1	first VOIP provider id
.1.3.6.1.4.1.22736.10.2.3.1.2	first VOIP provider type
.1.3.6.1.4.1.22736.10.2.3.1.3	first VOIP provider name
.1.3.6.1.4.1.22736.10.2.3.1.4	first VOIP provider host
.1.3.6.1.4.1.22736.10.2.3.1.5	first VOIP provider account id
.1.3.6.1.4.1.22736.10.2.3.1.6	first VOIP provider callback extension
.1.3.6.1.4.1.22736.10.2.3.1.7	first VOIP provider latency
.1.3.6.1.4.1.22736.10.2.3.1.8	first VOIP provider state
.1.3.6.1.4.1.22736.10.2.3.[2-xxx].[1-8]	details for each additional VOIP provider

## .3 Hardware Status
.1.3.6.1.4.1.22736.10.3.1.1	memory used
.1.3.6.1.4.1.22736.10.3.1.2	memory total
.1.3.6.1.4.1.22736.10.3.1.3	swap used
.1.3.6.1.4.1.22736.10.3.1.4	swap total
.1.3.6.1.4.1.22736.10.3.1.5	last update (memory/swap)
.1.3.6.1.4.1.22736.10.3.2.1	disk used
.1.3.6.1.4.1.22736.10.3.2.2	disk total
.1.3.6.1.4.1.22736.10.3.2.3	last update (disk)
.1.3.6.1.4.1.22736.10.3.3.1	load

## .4 Phone Status
.1.3.6.1.4.1.22736.10.4.1	number of SIP phones
.1.3.6.1.4.1.22736.10.4.2	number of reachable SIP phones
.1.3.6.1.4.1.22736.10.4.3.1.1	first phone id
.1.3.6.1.4.1.22736.10.4.3.1.2	first phone extension
.1.3.6.1.4.1.22736.10.4.3.1.3	first phone caller id
.1.3.6.1.4.1.22736.10.4.3.1.4	first phone user agent
.1.3.6.1.4.1.22736.10.4.3.1.5	first phone ip address
.1.3.6.1.4.1.22736.10.4.3.1.6	first phone state
.1.3.6.1.4.1.22736.10.4.3.[2-xxx].[1-6]	details for each additional phone

## .5 Current Calls
.1.3.6.1.4.1.22736.10.5.1	total current calls
.1.3.6.1.4.1.22736.10.5.2	number of calls in state 'agent_login'
.1.3.6.1.4.1.22736.10.5.3	number of calls in state 'agent_logout'
.1.3.6.1.4.1.22736.10.5.4	number of calls in state 'checking_voicemail'
.1.3.6.1.4.1.22736.10.5.5	number of calls in state 'conference'
.1.3.6.1.4.1.22736.10.5.6	number of calls in state 'directory'
.1.3.6.1.4.1.22736.10.5.7	number of calls in state 'faxing'
.1.3.6.1.4.1.22736.10.5.8	number of calls in state 'intercom'
.1.3.6.1.4.1.22736.10.5.9	number of calls in state 'ivr'
.1.3.6.1.4.1.22736.10.5.10	number of calls in state 'leaving_voicemail'
.1.3.6.1.4.1.22736.10.5.11	number of calls in state 'monitoring'
.1.3.6.1.4.1.22736.10.5.12	number of calls in state 'parked'
.1.3.6.1.4.1.22736.10.5.13	number of calls in state 'queued'
.1.3.6.1.4.1.22736.10.5.14	number of calls in state 'receiving_fax'
.1.3.6.1.4.1.22736.10.5.15	number of calls in state 'ringing'
.1.3.6.1.4.1.22736.10.5.16	number of calls in state 'talking'
.1.3.6.1.4.1.22736.10.5.17	number of calls in state 'unknown'

## .6 Telephony Cards
.1.3.6.1.4.1.22736.10.6.1	number of devices
.1.3.6.1.4.1.22736.10.6.2	number of state 'Ok' devices
.1.3.6.1.4.1.22736.10.6.3.1.1	first device id
.1.3.6.1.4.1.22736.10.6.3.1.2	first device name
.1.3.6.1.4.1.22736.10.6.3.1.3	first device channel
.1.3.6.1.4.1.22736.10.6.3.1.4	first device channel group
.1.3.6.1.4.1.22736.10.6.3.1.5	first device signalling
.1.3.6.1.4.1.22736.10.6.3.1.6	first device state
.1.3.6.1.4.1.22736.10.6.3.[2-xxx].[1-6]	details for each additional device

## .7 Switchvox Subscription
.1.3.6.1.4.1.22736.10.7.1	expire date
.1.3.6.1.4.1.22736.10.7.2	days left

## .8 RAID Controller
.1.3.6.1.4.1.22736.10.8.1	controller status
.1.3.6.1.4.1.22736.10.8.2	logical device status
.1.3.6.1.4.1.22736.10.8.3	device #0 status
.1.3.6.1.4.1.22736.10.8.4	device #1 status
.1.3.6.1.4.1.22736.10.8.5	device #2 status
.1.3.6.1.4.1.22736.10.8.6	device #3 status

## .10 Peered Switchvoxes
.1.3.6.1.4.1.22736.10.10.1	Number of peered machines
.1.3.6.1.4.1.22736.10.10.2	Number of sip_status = 'Ok' peered machines
.1.3.6.1.4.1.22736.10.10.3	Table with details of peers
.1.3.6.1.4.1.22736.10.10.3.1	First Peer details
.1.3.6.1.4.1.22736.10.10.3.1.1	First Peer ID
.1.3.6.1.4.1.22736.10.10.3.1.2	First Peer server UUID
.1.3.6.1.4.1.22736.10.10.3.1.3	First Peer server name
.1.3.6.1.4.1.22736.10.10.3.1.4	First Peer server hostname
.1.3.6.1.4.1.22736.10.10.3.1.5	First Peer server username
.1.3.6.1.4.1.22736.10.10.3.1.6	First Peer server prefix
.1.3.6.1.4.1.22736.10.10.3.1.7	First Peer server latency
.1.3.6.1.4.1.22736.10.10.3.1.8	First Peer server status
.1.3.6.1.4.1.22736.10.10.3.1.9	First Peer server disabled
.1.3.6.1.4.1.22736.10.10.3.1.10	First Peer server incompatible
.1.3.6.1.4.1.22736.10.10.3.1.11	First Peer server extension conflicts
.1.3.6.1.4.1.22736.10.10.3.1.12	First Peer server num pending events
.1.3.6.1.4.1.22736.10.10.3.1.13	First Peer server sync status
.1.3.6.1.4.1.22736.10.10.3.1.14	First Peer server status type
.1.3.6.1.4.1.22736.10.10.3.[2-x].[1-14]	Details for eaach additional peer

## Other OIDs
The Switchvox agent provides some additional OIDs that are not specific to the Switchvox application.

* .iso.org.dod.internet.mgmt.mib-2.system	Linux system OIDs. You can use any OID under this.
* .iso.org.dod.internet.private.enterprises.ucdavis	Linux system OIDs. You can use any OID under this.