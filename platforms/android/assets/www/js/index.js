/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("touchstart", function() {},false);
        document.addEventListener('offline', this.onOffline, false);
        document.addEventListener("backbutton", this.onBackKeyDown, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
    },
    onBackKeyDown: function() {
        window.fireEvent('backButtonPressed');
	navigator.app.exitApp();
    },
    onOffline: function() {
        console.log("Offline");
        
        if ((screen.width == 320) && (screen.height == 480)) {
            document.body.background="img/iosSplash/Default~iphoneNoInternet.png";
            document.body.backgroundSize = "100% 100%";

        }
        else if ((screen.width == 640) && (screen.height == 960)) {
            document.body.background="img/iosSplash/Default@2x~iphoneNoInternet.png";
            document.body.backgroundSize = "100% 100%";

        }
        else if ((screen.width == 640) && (screen.height == 1136)) {
            document.body.background="img/iosSplash/Default-568h@2x~iphoneNoInternet.png";
            document.body.backgroundSize = "100% 100%";
      
        }
        else {
           document.body.background="img/iosSplash/Default-568h@2x~iphoneNoInternet.png";
           document.body.backgroundSize = "100% 100%";
          
        }
        document.getElementById('refreshBtn').style.visibility="visible";
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var response = app.httpGet("http://finch-melrose.ru/media/domashniy/config.json");
        var JSONObject = JSON.parse(response);
        
        document.getElementById('refreshBtn').style.visibility="hidden";
        window.open(JSONObject.dataUrl);
    },

    httpGet: function(theUrl) {
        var xmlHttp = null;

        xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }
};
