import Vue from 'vue';

let MyComm = new Vue({

    methods: {
        getUrl: function () {
            return "http://192.168.0.171:30891";
           // return "http://127.0.0.1:9080";
        },
        getSystem: function () {
            // return "http://192.168.0.171:30891";
            //return "win32";
            return "linux";
         //   return "other";
        }


    }
})

export default MyComm