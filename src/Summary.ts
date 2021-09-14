import { WinAnalysis } from "./analizers/WinsAnalysis";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./reportTargets/HtmlReports";

export interface Analyzer {
    run(matches:MatchData[]):string
}

export interface OutputTarget{
    print(report:string):void
}

export class Summary{
    constructor(public analizer: Analyzer,public outputTarget:OutputTarget){} 
    static winsAnalysisWithHtmlReport(team:string):Summary{
        return new Summary(
            new WinAnalysis(team),
            new HtmlReport()
        )
    }
    buildAndPrintReport(matches:MatchData[]):void{
        const output = this.analizer.run(matches)
        this.outputTarget.print(output)
    }
}



