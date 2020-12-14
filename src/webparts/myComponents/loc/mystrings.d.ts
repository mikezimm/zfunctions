declare interface IMyComponentsWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'MyComponentsWebPartStrings' {
  const strings: IMyComponentsWebPartStrings;
  export = strings;
}
