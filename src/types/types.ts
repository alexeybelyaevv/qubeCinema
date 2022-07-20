export type FilmType = {
    id: number,
    medium_cover_image: string,
    title: string,
    year: string,
    genres: Array<string> | null,
    summary: string
}