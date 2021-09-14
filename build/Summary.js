"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analizers/WinsAnalysis");
var HtmlReports_1 = require("./reportTargets/HtmlReports");
var Summary = /** @class */ (function () {
    function Summary(analizer, outputTarget) {
        this.analizer = analizer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinAnalysis(team), new HtmlReports_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analizer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
