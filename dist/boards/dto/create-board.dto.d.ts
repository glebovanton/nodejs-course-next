import { IColumn } from 'src/interface/column.interface';
export declare class CreateBoardDto {
    id?: string;
    title: string;
    columns: IColumn[];
}
