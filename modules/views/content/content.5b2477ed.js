webpackJsonp([8],{45:function(e,n){e.exports='<md-content class="md-padding" layout-fill style="background-color:white;">    <div layout="row"  >        <md-input-container flex="50" >            <label for="name">{{lang.site.content.name}}</label>            <input type="text" name="name" ng-model="name" readonly />        </md-input-container>        <md-input-container flex="50" >            <label for="version">{{lang.site.content.version}}</label>            <md-select name="version" ng-model="versionSelected" >                <md-option                        value="{{ver.url}}"                        ng-selected="versionIdSelected===ver.id"                        ng-click="versionChange(ver,$event)"                        ng-repeat="ver in version track by ver.id"                >                    <span>{{ver.id}}</span>                    <span>[{{ver.date|date:\'yyyy/M/d\'}}]</span>                </md-option>            </md-select>        </md-input-container>    </div>    <div ng-bind-html="contentInfo|TrustHtmlFilter"></div></md-content>'}});