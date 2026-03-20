export class SiteContent {
    id: number | null = null;
    title: string | null;
    contents: string | null;
    image_url1: string | null;
    image_url2: string | null;


    constructor(
        id: number | null = null,
        title: string | null = null,
        contents: string | null = null,
        image_url1: string | null = null,
        image_url2: string | null = null
    ) {
        this.id = id;
        this.title = title;
        this.contents = contents;
        this.image_url1 = image_url1;
        this.image_url2 = image_url2;
    }
};