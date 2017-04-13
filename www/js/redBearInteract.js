

var deviceId = "81F2F445-60C8-4DAE-ACC6-9C11F71C8F69";						//	
var simpleService = "208c9c6f-dcf8-4c1f-8a43-8f1674c21d6e";					//
var onLightCharacteristics = "a883c025-3389-4f0b-a675-e321d56f08a7";		//Write
var setDefaultCharacteristic = "1e57a344-0456-4290-8861-ed79e69e466a";		//Read+Write
var currentColorCharacteristic = "781e7438-a4fb-460d-862e-57f804c3580a";	//Read
var onOffInNTimeCharacteristic = "564eabf0-06ea-4bc2-90a6-b6e6c0772ca9";	//Read+Write
var setTimeCharacteristic = "1a7852d9-e7e8-4d70-b0fb-a7406b6a25c8";			//Read+Write
var onOffAtTTimeCharacteristic = "cda67be8-cc30-4910-b071-57a61534fd60";	//Read+Write


//event will be triggered when the everything is fully loaded
function selectOurApp(evt){
	//DO THIS WHEN EVERYTHING ELSE IS DONE AND WORKING FIRST
}

function readDefaultRGB() {
    ble.read(deviceId, simpleService, setDefaultCharacteristic, successReturn, generalDataFailed);
}

function readCurrentRGB() {
	ble.read(deviceId, simpleService, currentColorCharacteristic, successReturn, generalDataFailed);
}

function readOnOffInNTime() {
	ble.read(deviceId, simpleService, onOffInNTimeCharacteristic, successReturn, generalDataFailed);
}

function readSetTime() {
	ble.read(deviceId, simpleService, setTimeCharacteristic, successReturn, generalDataFailed);
}

function readOnOffAtTTime() {
	ble.read(deviceId, simpleService, onOffAtTTimeCharacteristic, successReturn, generalDataFailed);
}

function successReturn(buffer) {
    var array = new Uint8Array(buffer)
    print(buffer)
    
}