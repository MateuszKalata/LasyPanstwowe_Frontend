export interface XForestArea {
  id?: number;
  forestryId?: number;
  name: string;
  surface: string;
  forestationTypes?: XForestationType[];
}

export interface XForestationType {
  name: string;
  surface: string;
}
