/**
 * Created by lucy on 2016/11/12.
 */
$(function(){
    if($.browser.msie && $.browser.version < 10){
        $('body').addClass('ltie10');
    }
    $.fn.fullpage({
        verticalCentered: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
        navigation: true,
        navigationTooltips: ['首页', '基本信息', '技能', '工作经验', '项目1', '项目2', '项目3', '项目4',  '自我评价']
    });

});
