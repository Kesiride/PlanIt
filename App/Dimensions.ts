import { Image } from 'react-native';

export class PostItem {

    static getImageState(path: string): any {
        console.log(path);
        return Image.resolveAssetSource(require("../assets/PlanIt.jpeg"));
    }

    static getDeviceWindow() {

    }

    static getDeviceScreen(){

    }
}