        jssor_slider1_starter = function (containerId) {

            var options = {
                $AutoPlay: true,
                $FillMode: 1, 
                $PauseOnHover: 3,
                $ArrowKeyNavigation: true,
                $SlideDuration: 800,
                $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: [{$Duration: 1200, $During: { $Left: [0.3, 0.7] }, $FlyDirection: 1, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear },$ScaleHorizontal: 0.3, $Opacity: 2 }],
                    $ShowLink: true
                },
                $DirectionNavigatorOptions: {
                    $Class: $JssorDirectionNavigator$,
                    $ChanceToShow: 1      
                },
                $ThumbnailNavigatorOptions: {
                    $Class: $JssorThumbnailNavigator$,
                    $ChanceToShow: 2,  
                    $SpacingX: 5,
                    $DisplayPieces: 10,
                    $ParkingPosition: 360                          //[Optional] The offset position to park thumbnail
                },
                $CaptionSliderOptions: {                            
                    $Class: $JssorCaptionSlider$,                  
                    $CaptionTransitions: [], 
                    $PlayInMode: 1,                                
                    $PlayOutMode: 1
                }
            };

            var jssor_slider1 = new $JssorSlider$(containerId, options);
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
            function ScaleSlider() {
                var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
                if (parentWidth)
                    jssor_slider1.$SetScaleWidth(Math.max(Math.min(parentWidth, 800), 300));
                else
                    $JssorUtils$.$Delay(ScaleSlider, 30);
            }

            ScaleSlider();
            $JssorUtils$.$AddEvent(window, "load", ScaleSlider);

            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
                $JssorUtils$.$OnWindowResize(window, ScaleSlider);
            }
            //responsive code end
