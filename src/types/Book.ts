export interface Book {
    numFound: number,
    start: number,
    numFoundExact: boolean,
    docs: Docs[],
    num_found: number,
    q: string,
    offset: null
}


export interface Docs {
    author_key: string[],
    author_name: string[],
    ebook_access: string,
    ebook_count_i: number,
    edition_count: number,
    edition_key: string[],
    first_publish_year: number,
    has_fulltext: boolean,
    key: string,
    language: string[],
    last_modified_i: number,
    public_scan_b: boolean,
    publish_date: string[],
    publish_year: number[],
    seed: string[],
    title: string,
    title_suggest: string,
    title_sort: string,
    type: string,
    _version_: number,
    author_facet: string[],
    publisher: string[],
    publisher_facet: string[],
    ddc: string[],
    lcc: string[],
    lcc_sort: string,
    ddc_sort: string,
    number_of_pages_median: number,
    oclc: string[],
    publish_place: string[],
}

export interface PaginationTypes {
    sortDirection: string;
    totalPages: number;
    pageSize: number;
    currentPage: number;
    totalElements: number;
}