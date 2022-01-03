export interface XForestAction {
    additionalInfo?: string;
    endDate: string;
    forestAreaId: number;
    forestationTypeId?: number;
    id: number;
    numberOfTreesToProceed?: number;
    special_condition?: string;
    startDate: string;
    status: string;
    teamLeader?: string;
    teamSize?: number;
    type: string;
    treeType?: string;
}
