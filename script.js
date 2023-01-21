$(function() {
    var $mainMenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = 2,

    init = function(){
        bindEvents(); 
        
        if(valinIndex(openedIndex))
        {
            animateItem($mainMenuItems.eq(".images"), true, 700);
        }
    },
    bindEvents = function() {
        $mainMenuItems.children(".images").click(function() {
            var newIndex = $(this).parent().index(),
            $item = $mainMenuItems.eq(newIndex);

            if(openedIndex === newIndex) {
                animateItem($item, false, 250);
                openedIndex = -1;
            }
            else 
            {
                if(valinIndex(newIndex))
                {
                    animateItem($mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = newIndex;
                    animateItem($item, true, 250);
                }
                
            } 
        });

        $(".button").hover(function() {
            $(this).addClass("hovered");
        },
        function(){
            $(this).removeClass("hovered");
        });

        $(".button").click(function() {
            var newIndex = $(this).index();
            $item = $mainMenuItems.eq(newIndex);

            if(openedIndex === newIndex) {
                animateItem($item, false, 250);
                openedIndex = -1;
            }
            else 
            {
                if(valinIndex(newIndex))
                {
                    animateItem($mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = newIndex;
                    animateItem($item, true, 250);
                }
                
            }
        });
    },

    valinIndex = function(indexToCheck) {
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    }
    animateItem = function($item, toOpen, speed) {
        var $colorImage = $item.find(".color"),
        itempParam = toOpen ? {width: "420px"}:{width: "140px"},
        $colorImageParam = toOpen ? {left: "0px"}: {left: "140px"};
        $colorImage.animate($colorImageParam, toOpen);
        $item.animate(itempParam,toOpen);
    }

    init();
});