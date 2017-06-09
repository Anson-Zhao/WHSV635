/*
 * Copyright (C) 2014 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */
/**
 * @exports LayerManager
 */
define(function () {
    "use strict";

    /**
     * Constructs a layer manager for a specified {@link WorldWindow}.
     * @alias LayerManager
     * @constructor
     * @classdesc Provides a layer manager to interactively control layer visibility for a World Window.
     * @param {WorldWindow} worldWindow The World Window to associated this layer manager with.
     */

    // Default Continent Layer

    var continent = "North America";
    var prefix = "NA.";
    var menu = 0; // Skip to create layer menu
    var returnsitelat = null;
    var returnsitelon = null;
    var y = "";
    var eyeDistance, returncountry, returncontinent, returnsiteID, buttonLayerName;

    var LayerManager = function (worldWindow) {
        var thisExplorer = this;

        //Initialize Menu and Globe.

        this.wwd = worldWindow;
        this.roundGlobe = this.wwd.globe;
        this.continentList();
        this.geocoder = new WorldWind.NominatimGeocoder();
        this.goToAnimator = new WorldWind.GoToAnimator(this.wwd);
        this.liveSearch(continent);

        // Layer Event Handlers.

        $("#contiswitchID").find(":checkbox").on("change", function (e) {
            menu = 1; // Need to check the status of Continent Switch while synchronizing layer menu
            thisExplorer.liveSearch(continent);
        });

        $("#projectionDropdown").find("li").on("click", function (e) {
            //    thisExplorer.onProjectionClick(e);
            menu = 2; // Need to check the status of Continent Switch while synchronizing layer menu
            var continent = event.target.innerText || event.target.innerHTML;

            thisExplorer.liveSearch(continent);
        });

        $("#searchBox").find("button").on("click", function (e) {
            menu = 3; // Need to uncheck Continent Switch while synchronizing layer menu
            thisExplorer.onSearchButton(e);
        });

        $("#searchText").on("keypress", function (e) {
            menu = 3; // Need to uncheck Continent Switch while synchronizing layer menu
            thisExplorer.onSearchTextKeyPress($(this), e);
        })
    };

    LayerManager.prototype.onLayerClick = function (layerButton) {
        menu = 4;
        var layerButtonName = layerButton.text();

        //Spin the globe to the country select.
        this.liveSearch(layerButtonName);
    };

    LayerManager.prototype.continentList = function () {
        var contiLists = [
            "North America",
            "Europe",
            "South America",
            "Asia",
            "Africa",
            "Oceania",
            "Antarctica"
        ];
        var projectionDropdown = $("#projectionDropdown");

        var dropdownButton = $('<button class="btn btn-info btn-block dropdown-toggle" type="button" data-toggle="dropdown">Please Select Continent<span class="caret"></span></button>');
        projectionDropdown.append(dropdownButton);

        var ulItem = $('<ul class="dropdown-menu">');
        projectionDropdown.append(ulItem);

        for (var i = 0; i < contiLists.length; i++) {
            var projectionItem = $('<li><a>' + contiLists[i] + '</a></li>');
            ulItem.append(projectionItem);
        }

        ulItem = $('</ul>');
        projectionDropdown.append(ulItem);

    };

    LayerManager.prototype.onSearchButton = function (event) {
        this.liveSearch($("#searchText")[0].value);
    };

    LayerManager.prototype.onSearchTextKeyPress = function (searchInput, event) {
        if (event.keyCode === 13) {
            searchInput.blur();
            this.liveSearch($("#searchText")[0].value);
        }
       /* else {
            var x = event.keyCode; // Get the Unicode value
            y += String.fromCharCode(x);

            var queryURL = "//10.11.4.70:8083/autosearch?keywords=" + y ;
            alert(queryURL);
            $.ajax({
                url: queryURL,
                dataType: 'json',
                async: false,
                success: function (qResults) {
                    alert(qResults);
                    alert(qResults[0].value);

                    $("#searchText").autocomplete({
                        lookup: qResults
                    })
                }
            });
        }*/
    };

    LayerManager.prototype.globe2Search = function (queryString) {
        var thisLayerManager = this,
            latitude, longitude;

        if (typeof returnsitelat === "string" && typeof returnsitelon === "string") {

            // Determine eyeDistance by Site/Country/Continent level
            if (typeof returnsiteID === "string") {
                eyeDistance = 200000;
            } else if (typeof returncountry === "string") {
                eyeDistance = 5000000;
            } else {
                eyeDistance = 10000000;
            }

            thisLayerManager.goToAnimator.goTo(new WorldWind.Location(returnsitelat, returnsitelon));
            thisLayerManager.goToAnimator.goTo(new WorldWind.Position(returnsitelat, returnsitelon, eyeDistance));

            // clear the current value
            returncountry = null;
            returncontinent = null;
            returnsitelat = null;
            returnsitelon = null;
            returnsiteID = null;
        } else {

            eyeDistance = 4000000;

            if (queryString.match(WorldWind.WWUtil.latLonRegex)) {
                var tokens = queryString.split(",");
                latitude = parseFloat(tokens[0]);
                longitude = parseFloat(tokens[1]);

                thisLayerManager.goToAnimator.goTo(new WorldWind.Location(latitude, longitude));
                thisLayerManager.goToAnimator.goTo(new WorldWind.Position(latitude, longitude, eyeDistance));
            } else {

                this.geocoder.lookup(queryString, function (geocoder, result) {
                    if (result.length > 0) {
                        latitude = parseFloat(result[0].lat);
                        longitude = parseFloat(result[0].lon);

                        WorldWind.Logger.log(
                            WorldWind.Logger.LEVEL_INFO, queryString + ": " + latitude + ", " + longitude);

                        thisLayerManager.goToAnimator.goTo(new WorldWind.Location(latitude, longitude));
                        thisLayerManager.goToAnimator.goTo(new WorldWind.Position(latitude, longitude, eyeDistance));
                    } else {
                        alert("Can't find geocode!");
                    }
                });
            }

            // clear the current value
            returncountry = null;
            returncontinent = null;
            returnsitelat = null;
            returnsitelon = null;
            returnsiteID = null;
        }
    };

    LayerManager.prototype.layerMenu = function (returnconti, returncountr) {

        if (menu !== 0) {
            // Clear previous menu
            var layerMenuItem = $("#layerList");
            layerMenuItem.find("button").off("click");
            layerMenuItem.find("button").remove();
            var currentlayerBtn, layerButtonItem, returnlayer, returnlayerName;

            // Uncheck continent switch if there is a search or click a layer button, and then put this country button on the top of menu.
            if (menu > 1) {
                $('#conticheckbox').prop('checked', false);
                if (menu >2) {
                    currentlayerBtn = $('<button class="list-group-item btn btn-block">' + returncountr + '</button>');
                    layerMenuItem.append(currentlayerBtn);
                }
            }

            // Update continent drop list name and prefix value
            $("#projectionDropdown").find("button").html(returnconti + ' <span class="caret"></span>');

            continent = returnconti;

            if (returnconti === "North America") {
                prefix = "NA.";
            } else if (returnconti === "South America") {
                prefix = "SA.";
            } else if (returnconti === "Europe") {
                prefix = "EU.";
            } else if (returnconti === "Asia") {
                prefix = "AS.";
            } else if (returnconti === "Africa") {
                prefix = "AF.";
            } else if (returnconti === "Antarctica") {
                prefix = "AN.";
            } else if (returnconti === "Oceania") {
                prefix = "OC.";
            }



            // Create new layer menu
            for (var i = 6, len = this.wwd.layers.length; i < len; i++) {
                returnlayer = this.wwd.layers[i];
                returnlayer.enabled = false;

                if (returnlayer.displayName.startsWith(prefix)) {
                    if (returnlayer.hide) {
                        continue;
                    }

                    if (returnlayer.showSpinner && Spinner) {
                        var opts = {
                            scale: 0.9
                        };
                        var spinner = new Spinner(opts).spin();
                        layerButtonItem.append(spinner.el);
                    }

                    // Remove prefix of layer display name and then put on button
                    returnlayerName = returnlayer.displayName.replace(prefix, "");

                    if (returnlayerName !== returncountr) {
                        layerButtonItem = $('<button class="list-group-item btn btn-block">' + returnlayerName + '</button>');
                        layerMenuItem.append(layerButtonItem);

                        if (menu < 3) {
                            if ($("#contiswitchID :checkbox").is(":checked")) {
                                returnlayer.enabled = true;
                                layerButtonItem.addClass("active");
                            } else {
                                returnlayer.enabled = false;
                                layerButtonItem.removeClass("active");
                            }
                        } else {
                            returnlayer.enabled = false;
                            layerButtonItem.removeClass("active");
                        }
                    } else {
                        if (menu < 3) {
                            if ($("#contiswitchID :checkbox").is(":checked")) {
                                returnlayer.enabled = true;
                                currentlayerBtn.addClass("active");
                            } else {
                                returnlayer.enabled = false;
                                currentlayerBtn.removeClass("active");
                            }
                        } else if (menu === 3) {
                            returnlayer.enabled = true;
                            currentlayerBtn.addClass("active");
                        } else if (menu === 4) {
                            returnlayer.enabled = !returnlayer.enabled;
                            if (returnlayer.enabled) {
                                currentlayerBtn.addClass("active");
                            } else {
                                currentlayerBtn.removeClass("active");
                            }
                        }
                    }
                }
            }

            // Set up an layer button click event
            var self = this;
            layerMenuItem.find("button").on("click", function (e) {
                self.onLayerClick($(this));
            });

            self.wwd.redraw();
        }
    };

    LayerManager.prototype.liveSearch = function (querywords) {
        var ajaxRequest;  // The variable that makes Ajax possible!
        try{

            // Opera 8.0+, Firefox, Safari
            ajaxRequest = new XMLHttpRequest();
        }catch (e){

            // Internet Explorer Browsers
            try{
                ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }catch (e) {

                try{
                    ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }catch (e){

                    // Something went wrong
                    alert("Your browser broke!");
                    return false;
                }
            }
        }

        var thisLM = this;

        ajaxRequest.onreadystatechange = function() {
            //alert("Status: " + ajaxReturn.readyState);
            if (ajaxRequest.readyState === 4 && ajaxRequest.status === 200) {
                var ajaxReturn = [];
                ajaxReturn = JSON.parse(ajaxRequest.response);

                returncontinent = ajaxReturn[0].ContinentName;
                returncountry = ajaxReturn[0].CountryName;
                returnsitelat = ajaxReturn[0].LatiDecimal;
                returnsitelon = ajaxReturn[0].LongDecimal;

                if (typeof ajaxReturn[0].SiteID === "string") {
                    returnsiteID = ajaxReturn[0].SiteID;
                    if (typeof ajaxReturn[0].CorrectLatiDecimal === "string") {
                        returnsitelat = ajaxReturn[0].CorrectLatiDecimal;
                        returnsitelon = ajaxReturn[0].CorrectLongDecimal;
                    }
                }

                thisLM.layerMenu(returncontinent, returncountry);
                thisLM.globe2Search(querywords);

            } else if (ajaxRequest.readyState === 4 && ajaxRequest.status === 503) {
                thisLM.globe2Search(querywords);
            }
        };

        var querystr = "?keywords=" + querywords;
        /*alert(querystr);*/

        ajaxRequest.open("GET", "//whs.aworldbridgelabs.com:8083/search" + querystr, true);
        ajaxRequest.send(querystr);

    };

    return LayerManager;

    /**
     * @return {boolean}
     */

});