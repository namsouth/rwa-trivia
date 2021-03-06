import { Observable } from 'rxjs/Observable';

export class BulkUploadFileInfo {
    id: String;
    date: number;
    fileName: String;
    categoryId: number;
    category?: string;
    primaryTag: String;
    uploaded: number;
    approved: number;
    rejected: number;
    status: String;
    created_uid?: string;
    downloadUrl?: Observable<String>;
}
