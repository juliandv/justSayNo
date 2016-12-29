function readTextFile(file) {
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", file, false);
            rawFile.onreadystatechange = function () {
                if (rawFile.readyState === 4) {
                    if (rawFile.status === 200 || rawFile.status == 0) {
                        var allText = rawFile.responseText;
                        var excuseArr = allText.split('\n');
                        var iNext;
                        console.log(excuseArr);

                        var i = 0;
                        initExcuse(0); //show the first photo initially
                        var excuseLength = excuseArr.length;

                        $('#testBtn').click(function () {
                        });

                        $('#testBtn2').click(function () {
                            document.getElementById("excuse1").style.zIndex = "4";
                            document.getElementById("excuse2").style.zIndex = "2";
                            document.getElementById("excuseWrapper").style.zIndex = "3";
                            document.getElementById("excuseBackground").style.zIndex = "3";
                            document.getElementById("excuseBackground2").style.zIndex = "1";

                            i++;
                            if (i == excuseArr.length) {
                                initExcuse(0);
                                i = 0;
                            } else {
                                initExcuse(i);
                            }

                        });


                        var nextBtnDiv = document.getElementById("nextBtn"); //grab the element
                        nextBtnDiv.onclick = function () { //asign a function
//                            i++;
//                            if (i == excuseArr.length) {
//                                initExcuse(0);
//                                i = 0;
//                            } else {
//                                initExcuse(i);
//                            }
                            $('#excuseWrapper2').toggleClass('excuseAnimation');

                        }

                        function initExcuse(i) {
                            iNext = i+1;

                            if(iNext > excuseArr.length) {
                                iNext = 0;
                            }

                            $('#excuse1').empty();
                            $('#excuse1').append(excuseArr[(i+1)] + (i+1));
                            $('#excuse2').empty();
                            $('#excuse2').append(excuseArr[i] + i);
                        }

                    }
                }
            }
            rawFile.send(null);
        }

        readTextFile("/excuses.txt");








        window.onerror = function () {
            var message = "Error!"
            alert(message);
            return true;
        };
