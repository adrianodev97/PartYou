import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {

};

angular.module('firebase', []).factory('$fb', ["", function () {
    const app = initializeApp(firebaseConfig);

    return {

    }
}]);