export class Job {
    id: number | null = null;
    company_name: string | null;
    job_title: string | null;
    is_active: boolean | null;
    category: string | null;
    description: string | null;
    posting_date: Date | null;
    url: string | null = null;

    constructor(
        id: number | null = null,
        company_name: string | null = null,
        job_title: string | null = null,
        is_active: boolean | null = null,
        category: string | null = null,
        description: string | null = null,
        posting_date: Date | null = null,
        url: string | null = null
    ) {
        this.id = id;
        this.company_name = company_name;
        this.job_title = job_title;
        this.description = description;
        this.category = category;
        this.posting_date = posting_date;
        this.is_active = is_active;
        this.url = url;

    }

    // getDetails(): string {
    // 	const created = this.created_date ? this.created_date.toDateString() : 'N/A';
    // 	const modified = this.modified_date ? this.modified_date.toDateString() : 'N/A';
    // 	return `Job ID: ${this.id}, Title: ${this.title ?? 'N/A'}, Category: ${this.category ?? 'N/A'},  Status: ${this.status}, Created: ${created}, Modified: ${modified}`;
    // }
}

