export interface _RouterLink {
    routerLink: string;
    class: string;
    routerLinkActive: string;
    text: string;
}

export interface MetDataItem {
    selector: string;
    componentName: string;
    question: string;
    componentOrdinal: string;
    category: string;
    addCategoryHeader: boolean;
    hasConflict: boolean;
    routerLinks?: _RouterLink[];
    hasRouterOutlet?: boolean;
    outletName?: string;
}