import { NativeModules } from 'react-native';
import { requireNativeComponent } from 'react-native';
import React, {Component} from 'react';
const {AliveHelper} = NativeModules;
const NTESRNLiveDetectView =  requireNativeComponent('NTESRNLiveDetect');

export const NTESRNLiveDetect = (props) => {
    return (<NTESRNLiveDetectView {...props}/>);
}
export default AliveHelper;
