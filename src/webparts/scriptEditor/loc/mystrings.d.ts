declare interface IScriptEditorWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'ScriptEditorWebPartStrings' {
  const strings: IScriptEditorWebPartStrings;
  export = strings;
}
