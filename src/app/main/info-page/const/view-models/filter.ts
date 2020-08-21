export interface Filter {
    name: string;
    code_name: string;
    arrdata: [
        {
            val: string;
            checked: boolean;
            name: string;
            value: string;
        }
    ];
}
