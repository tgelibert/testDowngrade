var app = angular.module("myNoteApp", []);
import { downgradeComponent } from "@angular/upgrade/static";
import { PreferredCommunicationChannelComponent } from "./components/preferred-communication-channel.component";

app.controller("myNoteCtrl", function ($scope) {
  $scope.message = "hallo kusi";

  console.log($scope.message);

  $scope.left = function () {
    return 100 - $scope.message.length;
  };
});

app.directive(
  "preferredCommunicationChannel",
  downgradeComponent({ component: PreferredCommunicationChannelComponent })
);
