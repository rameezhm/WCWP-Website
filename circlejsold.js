            //get circle variables
            //var leftCircleCanvas = document.getElementById("left");
            //var rightCircleCanvas = document.getElementById("right");
            
            //set up canvas for 2d image
            //var leftCircle = leftCircleCanvas.getContext("2d");
            //var rightCircle = rightCircleCanvas.getContext("2d");

            var totalWidth = window.innerWidth;
            var totalHeight = window.innerHeight;
            var halfWidth = totalWidth / 2;
            //circle is 40% of the screen width
            var circleWidth = totalWidth * 0.4;
            //how much the circle is shifted over; since circle is 40% of the screen width, need 10% padding
            var circleXShift = totalWidth * .1;

            var canvasWrapper = document.getElementById("canvasWrapper");
            canvasWrapper.style.height = String(totalHeight)+"px";
            canvasWrapper.innerHTML = '<canvas id="main" width="'+totalWidth+' height="'+totalHeight+'"></canvas>';
            
            //set the canvas to occupy the full space of its side
            //leftCircleCanvas.style.width = String(halfWidth)+"px";
            //rightCircleCanvas.style.width = String(halfWidth)+"px";

            var mainCanvas = document.getElementById("main");
            var drawing = mainCanvas.getContext("2d");
            mainCanvas.style.width = String(totalWidth)+"px";
            mainCanvas.style.height = window.innerHeight;

            //coordinates/dimensions of circle
            //x and y are the origin points
            var r = circleWidth / 2;
            var x = circleXShift + r;
            var x2 = halfWidth + circleXShift + r;
            var y = 50 + r;
            
            //draw circles
            // leftCircle.fillStyle = "#b00";
            // leftCircle.beginPath();
            // leftCircle.arc(x, y, r, 0, 2 * Math.PI );
            // leftCircle.fill();
            // rightCircle.fillStyle = "#080"
            // rightCircle.beginPath();
            // rightCircle.arc(x2, y, r, 0, 2 * Math.PI );
            // rightCircle.fill();

            //draw circles
            drawing.fillStyle = "#b00";
            drawing.beginPath();
            drawing.arc(x, y, r, 0, 2 * Math.PI );
            drawing.fill();
            drawing.fillStyle = "#080"
            drawing.beginPath();
            drawing.arc(x2, y, r, 0, 2 * Math.PI );
            drawing.fill();

            onmousemove = function(e){}