import {BaseEntity} from '../base-entity';

export class Color extends BaseEntity {
    label: string = '';
    description: string = '';
    value: string = '';
    variable: string = '';
    isPrimary: boolean = false;
    parentColor: string = '';
    groupName: string = '';
    projectId: string = '';

    constructor(
        id: string = '',
        label: string = '',
        description: string = '',
        value: string = '',
        variable: string = '',
        isPrimary: boolean = false,
        parentColor: string = '',
        groupName: string = '',
        projectId: string = ''
    ) {
        super(id);

        this.label = label;
        this.description = description;
        this.value = value;
        this.variable = variable;
        this.isPrimary = isPrimary;
        this.parentColor = parentColor;
        this.groupName = groupName;
        this.projectId = projectId;
    }
}
