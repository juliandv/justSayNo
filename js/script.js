        function readTextFile(file) {
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", file, false);
            rawFile.onreadystatechange = function () {
                if (rawFile.readyState === 4) {
                    if (rawFile.status === 200 || rawFile.status == 0) {
                        var allText = rawFile.responseText;
                        var excuseArr = allText.split('\n');
                        console.log(excuseArr);

                        var i = 0;
                        initExcuse(0); //show the first photo initially
                        var excuseLength = excuseArr.length;

                        $('#prev').click(function () {
                            i--;
                            if (i == -1) {
                                initExcuse(excuseLength - 1);
                                i = excuseLength - 1;
                            } else {
                                initExcuse(i);
                            }
                        });

                        var nextBtnDiv = document.getElementById("nextBtn"); //grab the element
                        nextBtnDiv.onclick = function () { //asign a function
                            i++;
                            if (i == excuseArr.length) {
                                initExcuse(0);
                                i = 0;
                            } else {
                                initExcuse(i);
                            }
                            $('.excuseWrapperNext').toggleClass('excuseAnimation');

                        }

                        function initExcuse(i) {
                            $('#excuse1').empty();
                            $('#excuse1').append(excuseArr[i]);
                            $('#excuse2').empty();
                            $('#excuse2').append(excuseArr[(i+1)]);
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
