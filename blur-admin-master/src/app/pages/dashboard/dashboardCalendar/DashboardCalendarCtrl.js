/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardCalendarCtrl', DashboardCalendarCtrl);

  /** @ngInject */
  function DashboardCalendarCtrl(baConfig) {
 
    var dashboardColors = baConfig.colors.dashboard;
    var $element = $('#calendar').fullCalendar({
      height: 30,
      isLoading: true,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2018-12-12',
      selectable: true,
      selectHelper: false,
      select: function (start, end) {

      },
      eventAfterRender: function() {
        debugger;
      },
      dayClick: function() {
console.log('dddddddddddddddddd')
      },
      viewRender:function() {
        debugger;
      },
      editable: false,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2016-03-01',
          color: dashboardColors.silverTree
        },
        {
          title: 'Long Event',
          start: '2016-03-07',
          end: '2016-03-10',
          color: dashboardColors.blueStone
        },
        {
          title: 'Dinner',
          start: '2016-03-14T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'Birthday Party',
          start: '2016-04-01T07:00:00',
          color: dashboardColors.gossipDark
        }
      ]
    });
  }
})();